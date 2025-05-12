<script setup>
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import getCurrentHolidayPeriod from "../../../utils/get-current-holiday-period.js";
import { fromZonedTime } from "date-fns-tz";
import VsTypography from "@/components/vs-typography/vs-typography.vue";

// this will create current UTC time and rendered by browser in system local time
const currentDate = new Date();
const currentHolidayPeriod = getCurrentHolidayPeriod(currentDate);

// applying fromZonedTime() with a given time (without a TZ) and telling it which TZ it belongs to
const dateInSydneyWithDateObject = fromZonedTime(new Date(2025, 3, 18, 9, 0, 0, 0), "Australia/Sydney");
const dateInSydneyWithDateString = fromZonedTime("2025-04-18T09:00:00.000", "Australia/Sydney");
const dateInZWithDateString = fromZonedTime("2025-04-18T09:00:00.000Z", "Australia/Sydney");
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Date-Fns Examples</h1>
    <p>Examples of date-fns library</p>
    <div>Current Date: {{ currentDate }}</div>
    <div>Current holiday period: {{ currentHolidayPeriod ?? 'None' }}</div>
    <h1>Date-Fns-TZ Examples</h1>
    <vs-typography>Below are some examples using the functions in the date-fns-tz library</vs-typography>
    <vs-typography>Date of April 18th 9AM with given Sydney TZ declares with Date String:</vs-typography>
    <vs-typography emphasis>
      {{ dateInSydneyWithDateString }} This will render Sydney's time in your system's timezone.
    </vs-typography>
    <vs-typography>Date of April 18th 9AM with given Sydney TZ declares with Date Object:</vs-typography>
    <vs-typography emphasis>
      {{ dateInSydneyWithDateObject }} This will render Sydney's time in your system's timezone.
    </vs-typography>
    <vs-typography>Date of April 18th 9AM with given UTC TZ declares with Date Object:</vs-typography>
    <vs-typography emphasis>
      {{ dateInZWithDateString }} This will interpret April 18th 9AM in Z timezone, convert it to Sydney time (Which is +10) and then render it in your system's time.
    </vs-typography>
  </Container>
</template>

<style scoped>
.italics {
  font-style: italic;
}
</style>
