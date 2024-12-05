<script setup>
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";
import getCurrentHolidayPeriod from "../../../utils/get-current-holiday-period.js";

const currentDate = new Date();
const currentHolidayPeriod = getCurrentHolidayPeriod(currentDate);

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Date-Fns Examples</h1>
    <div>Current holiday period: {{ currentHolidayPeriod }}</div>
  </Container>
</template>

<style scoped>

</style>
