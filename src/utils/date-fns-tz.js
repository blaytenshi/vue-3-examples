import { fromZonedTime } from "date-fns-tz";

// How does fromZonedTime (to UTC) work?
// Its goal is to take your zoned time and give you the equivalent time of the SPECIFIED zone in UTC.
// Let's take an example, you give it an ISO-8601 date string WITHOUT a zone and give it the Sydney IANA code.
// The tranformation for this is simple:
// 1) It takes the date string you gave it and because there's no GMT offset, it assumes this time is in the timezone you gave it (Sydney)
// 2) Reverses the GMT offset (taking into account DST) to get the Z/GMT+0/UTC time. On April 18th 2025, there is no
//    DST in Sydney. The GMT is +10. This is the offset value that is reversed.
// 3) This Results in "2025-04-17T23:00:00Z", note the Z because it is now in UTC.
const dateStringWoTZ = fromZonedTime("2025-04-18T09:00:00.000", "Australia/Sydney");

// What if I have date string with an offset and I give it to the function along with the timezone?
// When you give the function a date WITH A GMT OFFSET, it will take that date string and give you the UTC equivalent of that date time of the timezone you gave it.
// Let's look at the example below:
// 1) You provided a date string of April 18th 2025 9:00:00 Z/GMT+0/UTC with timezone of Sydney
// 2) April 18th 2025 9:00:00 Z/GMT+0/UTC is April 18th 2025 17:00:00 GMT+10 in Sydney
// 3) Reversing the offset of GMT+10 gives us April 18th 2025 7:00:00 Z/GMT+0/UTC
const dateStringWTZ = fromZonedTime("2025-04-18T09:00:00.000Z", "Australia/Sydney");

const dateInSydneyWithDateObject = fromZonedTime(new Date(2025, 3, 18, 9, 0, 0, 0), "Australia/Sydney");

// If you give it a Date object, it will have your local timezone. It will take this timezone,

const dateIn17ZWithDateString = fromZonedTime("2025-04-18T17:00:00.000", "Australia/Sydney");
const dateInHKTZWithDateString = fromZonedTime("2025-04-18T17:00:00.000+08:00", "Australia/Sydney");
const dateInSATZWithDateString = fromZonedTime("2025-04-18T17:00:00.000+09:00", "Australia/Sydney");


// console.log("dateInSydneyWithDateObject", dateInSydneyWithDateObject);
console.log("dateStringWoTZ", dateStringWoTZ); // given dateTime is already is in requested TZ, just reverse the offset
console.log("dateStringWTZ", dateStringWTZ); // find 2025-04-18T09:00:00.000Z equivalent time in requested TZ (2025-04-18T19:00:00.000Z) reverse the offset
console.log("dateInSydneyWithDateObject", dateInSydneyWithDateObject);
console.log("dateIn17ZWithDateString", dateIn17ZWithDateString);
console.log("dateInHKTZWithDateString", dateInHKTZWithDateString);
console.log("dateInSATZWithDateString", dateInSATZWithDateString);
