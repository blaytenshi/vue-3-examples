<template>
  <span
    ref="container"
    class="icon"
    :style="{ width, height, color: fill }"
  />
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { ICON_NAMES } from "@/constants/options.js";

const props = defineProps({
  name: { type: String, required: true, validator: (value) => Object.values(ICON_NAMES).includes(value) },
  width: { type: String, default: "1em" },
  height: { type: String, default: "1em" },
  fill: { type: String, default: "currentColor" },
});

const svgContent = ref("");
const container = ref(null);

async function loadSvg() {
  if (!props.name) return;

  try {
    const response = await fetch(new URL(`../../assets/${props.name}.svg`, import.meta.url).href);
    let svg = await response.text();

    // Basic optional sanitation
    svg = svg.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");

    svgContent.value = svg;
  } catch (e) {
    console.error(`Error loading SVG ${props.name}:`, e);
    svgContent.value = "";
  }
}

watchEffect(() => {
  loadSvg();
  // need to cache the icons that are already fetched, future
});

onMounted(() => {
  watchEffect(() => {
    if (container.value && svgContent.value) {
      container.value.innerHTML = svgContent.value;

      const svg = container.value.querySelector("svg");
      if (svg) {
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.display = "block";
      }
    }
  });
});
</script>

<style scoped>
.icon {
  display: inline-flex;
  vertical-align: middle;
}
</style>
