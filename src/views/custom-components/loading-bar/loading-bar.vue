<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100,
  },
});
</script>

<template>
  <div class="loading-bar">
    <div
      class="loading-bar-progress"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>

<style scoped>
.loading-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}
.loading-bar-progress {
  height: 100%;
  background-color: #76c7c0;
  transition: width 0.3s ease;
}
</style>
