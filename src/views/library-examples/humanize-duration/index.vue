<script setup>
import Tag from "../../../components/Tag.vue";
import humanizeDuration from "humanize-duration";
import myHumanizeDuration, { DURATION_FORMAT } from "./humanizeDuration.js";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const ms = 1;
const second = 1000 * ms;
const minute = 60 * second;
const hour = 60 * minute;

const eightHour = 8 * hour;
const duration = 1200002000; // 1 week, 6 days, 21 hours, 20 minutes, 2 seconds
const duration2 = 1200002200; // 1 week 6 days 21 hours 20 minutes 2.2 seconds

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Testing out humanize-duration library</h1>
    <p>This page is for testing out the humanize-duration library (https://www.npmjs.com/package/humanize-duration).</p>
    <p>A great package for converting durations in milliseconds to a human readable format.</p>
    <p>We've even re-wrapped the library so that we can specify an option to display the english durations in a shorter form.</p>
    <h2>From here below we're showing how the normal library works with some regular options:</h2>
    <Tag color="green">
      {{ humanizeDuration(duration) }}
    </Tag>
    <Tag color="red">
      {{ humanizeDuration(duration2, { largest: 2 }) }}
    </Tag>
    <Tag color="blue">
      {{ humanizeDuration(duration2, { delimiter: " " }) }}
    </Tag>
    <h2>From here below we're showing the times using our own re-wrapped library:</h2>
    <Tag color="yellow">
      {{ myHumanizeDuration(duration2, { durationFormat: DURATION_FORMAT.LONG, delimiter: " ", round: true }) }}
    </Tag>
    <Tag color="orange">
      {{ myHumanizeDuration(duration2, { durationFormat: DURATION_FORMAT.SHORT, delimiter: " ", round: true }) }}
    </Tag>
    <Tag color="purple">
      {{ myHumanizeDuration(duration2, { delimiter: " ", round: true, language: "zh_TW", durationFormat: DURATION_FORMAT.SHORT}) }}
    </Tag>
  </Container>>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
