/*
* This is a re-wrapped version of the humanize-duration library allowing for a new option called
* 'durationFormat' that will allow us to use a custom shortened english format.
* Any extra languages declared will still override this custom format with no breakages.
* */

import humanizeDuration from "humanize-duration";

export const DURATION_FORMAT = {
  SHORT: "short",
  LONG: "long",
};

const durationFormats = {
  short: {
    years: "y",
    months: "mo",
    weeks: "w",
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s",
  },
  long: {
    years: "years",
    months: "months",
    weeks: "weeks",
    days: "days",
    hours: "hours",
    minutes: "mins",
    seconds: "secs",
  },
};

export default (duration, { durationFormat, ...rest }) => {
  const humanizeDurationInstance = humanizeDuration.humanizer({
    language: "custom",
    languages: {
      custom: {
        y: () => durationFormats[durationFormat].years,
        mo: () => durationFormats[durationFormat].months,
        w: () => durationFormats[durationFormat].weeks,
        d: () => durationFormats[durationFormat].days,
        h: () => durationFormats[durationFormat].hours,
        m: () => durationFormats[durationFormat].minutes,
        s: () => durationFormats[durationFormat].seconds,
      },
    },
  });

  return humanizeDurationInstance(duration, rest);
};
