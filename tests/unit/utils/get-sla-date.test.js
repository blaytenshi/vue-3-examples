import humanizeDuration from "humanize-duration";
import getCMCApproxSlaDueAt from "@/utils/get-sla-date.js";

const eightHourSlaMs = 8 * 60 * 60 * 1000; // 8hrs = 1 business day in milliseconds
const tenHourSlaMs = 10 * 60 * 60 * 1000; // 10hrs = 1.25 business day in milliseconds
const twelveHourSlaMs = 12 * 60 * 60 * 1000; // 12hrs = 1.5 business days in milliseconds
const fourHourSlaMs = 4 * 60 * 60 * 1000; // 4hrs = half a business day in milliseconds

describe("CMC Approx SLA Due At", () => {
  it.each([
    // Case created on Thu 9am with SLA of 8 hours should finish 9am the next business day
    {
      caseCreatedAt: new Date("2025-01-02T09:00:00+11:00"),
      expectedSLADate: new Date("2025-01-03T09:00:00+11:00"),
      humanizeDuration: humanizeDuration(eightHourSlaMs),
      duration: eightHourSlaMs,
    },
    // Case created on Thu 9am with SLA of 4 hours should finish 1pm the same business day
    {
      caseCreatedAt: new Date("2025-01-02T09:00:00+11:00"),
      expectedSLADate: new Date("2025-01-02T13:00:00+11:00"),
      humanizeDuration: humanizeDuration(fourHourSlaMs),
      duration: fourHourSlaMs,
    },
    // Case created on Thu 4pm with SLA of 4 hours should overflow to 12pm the next business day
    {
      caseCreatedAt: new Date("2025-01-02T16:00:00+11:00"),
      expectedSLADate: new Date("2025-01-03T12:00:00+11:00"),
      humanizeDuration: humanizeDuration(fourHourSlaMs),
      duration: fourHourSlaMs,
    },
    // Case created on a Fri 10 am within business hours with 8 hours SLA should overflow to the next Monday 10am
    {
      caseCreatedAt: new Date("2025-01-03T10:00:00+11:00"),
      expectedSLADate: new Date("2025-01-06T10:00:00+11:00"),
      humanizeDuration: humanizeDuration(eightHourSlaMs),
      duration: eightHourSlaMs,
    },
    // Case created on Thu 9am with SLA of 12 hours should finish 1pm the next business day
    {
      caseCreatedAt: new Date("2025-01-02T09:00:00+11:00"),
      expectedSLADate: new Date("2025-01-03T13:00:00+11:00"),
      humanizeDuration: humanizeDuration(twelveHourSlaMs),
      duration: twelveHourSlaMs,
    },
    // Case created on Mon 4pm with SLA of 10 hours should finish 10am on the Wed
    {
      caseCreatedAt: new Date("2025-01-06T16:00:00+11:00"),
      expectedSLADate: new Date("2025-01-08T10:00:00+11:00"),
      humanizeDuration: humanizeDuration(tenHourSlaMs),
      duration: tenHourSlaMs,
    },
    // Case created after closing hour of 6pm with SLA of 4 hours should shift to start at 9am the next business day and finish at 1pm
    {
      caseCreatedAt: new Date("2025-01-06T18:00:00+11:00"),
      expectedSLADate: new Date("2025-01-07T13:00:00+11:00"),
      humanizeDuration: humanizeDuration(fourHourSlaMs),
      duration: fourHourSlaMs,
    },
    // Case created before opening hours of 6am with SLA of 4 hours should shift to start at 9am the same business day and finish at 1pm
    {
      caseCreatedAt: new Date("2025-01-07T06:00:00+11:00"),
      expectedSLADate: new Date("2025-01-07T13:00:00+11:00"),
      humanizeDuration: humanizeDuration(fourHourSlaMs),
      duration: fourHourSlaMs,
    },
  ])("should return $expectedSLADate if case is created on $caseCreatedAt and has an SLA time of $humanizeDuration", ({ caseCreatedAt, expectedSLADate, duration }) => {
    expect(getCMCApproxSlaDueAt(caseCreatedAt, duration).toISOString()).toBe(expectedSLADate.toISOString());
  });
});
