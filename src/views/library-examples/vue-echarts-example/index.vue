<script setup>
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import PieChart from "@/views/library-examples/vue-echarts-example/pie-chart.vue";
import { ref } from "vue";

const seriesData = ref([
  { value: 335, name: "Direct" },
  { value: 310, name: "Email" },
  { value: 234, name: "Ad Networks" },
  { value: 135, name: "Video Ads" },
  { value: 1548, name: "Search Engines" },
]);

const updateOptions = () => {
  seriesData.value = [{ value: 10, name: "A" }, { value: 20, name: "B" }, { value: 30, name: "C" }];
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Vue ECharts Example</h1>
    <p>This example demonstrates how to use Vue ECharts in a Vue.js application.</p>
    <p>Below is a reusable pie chart component that you can supply new data to and have it update.</p>
    <button @click="updateOptions">
      Update Options
    </button>
    <pie-chart
      :title="'My Chart Title'"
      :legend-labels="['A', 'B', 'C']"
      :series-data="seriesData"
    />
  </container>
</template>

<style scoped>

</style>
