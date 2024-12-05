import { isWithinInterval } from "date-fns";

const getCurrentHolidayPeriod = (currentDate) => {
  if(!(currentDate instanceof Date)) {
    throw new Error("Invalid date");
  }

  const currentYear = currentDate.getFullYear();
  const holidayModePeriods = [
    { name: "Christmas", interval: { start: `${currentYear}-12-01`, end: `${currentYear}-12-31` }, markFileName: "xmas.jpg" },
    { name: "Anzac", interval: { start: `${currentYear}-04-25`, end: `${currentYear}-04-25` }, markFileName: "anzac.jpg" },
  ];

  const currentHolidayPeriod = holidayModePeriods.find(({ interval }) => isWithinInterval(currentDate, interval));

  return currentHolidayPeriod?.name ?? null;
};

export default getCurrentHolidayPeriod;
