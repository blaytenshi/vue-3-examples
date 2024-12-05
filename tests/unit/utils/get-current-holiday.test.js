import getCurrentHolidayPeriod from "../../../src/utils/get-current-holiday-period"; // Adjust the import path

describe("getCurrentHolidayPeriod", () => {
  it("should throw an error if currentDate is not a Date object", () => {
    expect(() => getCurrentHolidayPeriod("invalid-date")).toThrow("Invalid date");
    expect(() => getCurrentHolidayPeriod(null)).toThrow("Invalid date");
    expect(() => getCurrentHolidayPeriod({})).toThrow("Invalid date");
  });

  it("should return 'Christmas' if the current date falls within the Christmas period", () => {
    const dateInChristmas = new Date("2025-12-15");
    const result = getCurrentHolidayPeriod(dateInChristmas);
    expect(result).toBe("Christmas");
  });

  it("should return 'Anzac' if the current date is Anzac Day", () => {
    const anzacDay = new Date("2025-04-25");
    const result = getCurrentHolidayPeriod(anzacDay);
    expect(result).toBe("Anzac");
  });

  it("should return null if the current date does not fall within any holiday period", () => {
    const dateNotInHolidayPeriod = new Date("2025-01-15");
    const result = getCurrentHolidayPeriod(dateNotInHolidayPeriod);
    expect(result).toBeNull();
  });

  it("should handle edge cases correctly: return 'Christmas' if current date is 1st December", () => {
    const startOfChristmas = new Date("2025-12-01");
    const result = getCurrentHolidayPeriod(startOfChristmas);
    expect(result).toBe("Christmas");
  });

  it("should handle edge cases correctly: return 'Christmas' if current date is 31st December", () => {
    const endOfChristmas = new Date("2025-12-31");
    const result = getCurrentHolidayPeriod(endOfChristmas);
    expect(result).toBe("Christmas");
  });
});
