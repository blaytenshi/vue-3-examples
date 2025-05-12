// This function is calculating approximate SLA due date for a case WITHOUT taking into account public holidays and
// assumes 8 hour business days. This functionality is due to be removed after Case Management Classic is decommissioned
// Some pitfalls to take note of:
// We cannot use setHours() or startOfDay() to set the time to 9am as it will return these dates in local time
// Remember to take into account cases that are created out of business hours and set their start times accordingly
import { addBusinessDays, addMilliseconds, differenceInMilliseconds } from "date-fns";
import { toZonedTime, fromZonedTime } from "date-fns-tz";

const padWithZero = (number) => number.toString().padStart(2, "0");

const getDateStrings = (createdAtUtc, options) => {
  const createdAtUtcDate = toZonedTime(createdAtUtc, "Australia/Sydney");
  const caseCreationYear = createdAtUtcDate.getFullYear();
  const caseCreationMonth = padWithZero(createdAtUtcDate.getMonth() + 1);
  const caseCreationDay = createdAtUtcDate.getDate();
  const caseCreationHour = createdAtUtcDate.getHours();

  const isCaseCreatedOutsideOfBusinessHours = options.startOfBusinessDay > caseCreationHour || caseCreationHour >= options.endOfBusinessDay;
  const adjustedCaseCreationHour = isCaseCreatedOutsideOfBusinessHours
    ? options.startOfBusinessDay
    : caseCreationHour;
  const adjustedCaseCreationDay = caseCreationHour >= options.endOfBusinessDay
    ? caseCreationDay + 1
    : caseCreationDay;

  let adjustedCreationDateString = "";

  if (caseCreationHour < options.startOfBusinessDay) {
    // if Created At is before 9am set Created At to 9am of created At
    adjustedCreationDateString = `${caseCreationYear}-${caseCreationMonth}-${padWithZero(caseCreationDay)}T${padWithZero(adjustedCaseCreationHour)}:00:00`;
  }
  if (caseCreationHour >= options.endOfBusinessDay) {
    // if Created At is after 5pm set Created At to 9am of next business day
    adjustedCreationDateString = `${caseCreationYear}-${caseCreationMonth}-${padWithZero(adjustedCaseCreationDay)}T${padWithZero(adjustedCaseCreationHour)}:00:00`;
  }

  const adjustedCaseCreationDate = fromZonedTime(adjustedCreationDateString, "Australia/Sydney");
  const endOfBusinessDay = fromZonedTime(`${caseCreationYear}-${caseCreationMonth}-${padWithZero(caseCreationDay)}T${options.endOfBusinessDay}:00:00`, "Australia/Sydney");

  return {
    createdAt: isCaseCreatedOutsideOfBusinessHours
      ? adjustedCaseCreationDate
      : createdAtUtc,
    endOfBusinessDay: caseCreationHour >= options.endOfBusinessDay
      ? addBusinessDays(endOfBusinessDay, 1)
      : endOfBusinessDay,
    startOfNextBusinessDay: addBusinessDays(fromZonedTime(`${caseCreationYear}-${caseCreationMonth}-${padWithZero(caseCreationDay)}T${padWithZero(options.startOfBusinessDay)}:00:00`, "Australia/Sydney"), 1),
  };
};

const getCMCApproxSlaDueAt = (createdAtUtc = 0, slaTimeMs = 0, options = { startOfBusinessDay: 9, endOfBusinessDay: 17 }) => {
  const BUSINESS_DAYS_MS = (options.endOfBusinessDay - options.startOfBusinessDay) * 60 * 60 * 1000;

  const { createdAt, endOfBusinessDay, startOfNextBusinessDay } = getDateStrings(createdAtUtc, options);

  const msTilClosing = differenceInMilliseconds(endOfBusinessDay, createdAt);

  if (slaTimeMs < msTilClosing) {
    // just add slaTimeMs to the adjustedCaseCreationDate because it will not overflow to next business day
    return addMilliseconds(createdAt, slaTimeMs);
  } else {
    // work out how long left in the current day
    const remainingSLA = slaTimeMs - msTilClosing;
    // work out how many business days we need to add after that
    const businessDaysToAdd = Math.floor(remainingSLA / BUSINESS_DAYS_MS);
    // apply the shift
    const shiftedBusinessDays = addBusinessDays(startOfNextBusinessDay, businessDaysToAdd);
    // work out any remainder time that we need to add after we shift the business days
    const millisToAdd = remainingSLA % BUSINESS_DAYS_MS;

    // apply the remainder
    return addMilliseconds(shiftedBusinessDays, millisToAdd);
  }
};

export default getCMCApproxSlaDueAt;
