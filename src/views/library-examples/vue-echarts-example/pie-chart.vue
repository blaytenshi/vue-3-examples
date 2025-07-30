<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { computed, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, "dark");

const props = defineProps({
  title: { type: String, default: "Traffic Sources" },
  legendLabels: {
    type: Array,
    default: () => [
      "Direct",
      "Email",
      "Ad Networks",
      "Video Ads",
      "Search Engines",
    ],
  },
  seriesData: {
    type: Array, default: () => [
      { value: 335, name: "Direct" },
      { value: 310, name: "Email" },
      { value: 234, name: "Ad Networks" },
      { value: 135, name: "Video Ads" },
      { value: 1548, name: "Search Engines" },
    ],
  },
});

const option = computed(() => ({
  title: {
    text: props.title,
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: props.legendLabels,
  },
  series: [
    {
      name: props.title,
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: props.seriesData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      animation: true,
      animationDuration: 2000,
      animationEasing: "cubicOut",
      animationDurationUpdate: 5000,
      animationEasingUpdate: "bounceInOut",
      animationDelayUpdate: 5000,
    },
  ],
}));
</script>

<template>
  <v-chart
    class="chart"
    :option="option"
    autoresize
  />
</template>

<style scoped>
.chart {
  height: 100vh;
}
</style>
