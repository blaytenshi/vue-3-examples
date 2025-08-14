<script setup lang="ts">
import FloatingUi from "../../base/floating-ui/index.vue";

defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <floating-ui>
    <template #trigger="{ onTriggerClick }">
      <slot
        name="trigger"
        :on-trigger-click="onTriggerClick"
      />
    </template>
    <template #floatingElement>
      <div
        class="tooltip"
      >
        {{ message }}
      </div>
    </template>
  </floating-ui>
</template>

<style scoped>
.tooltip {
  background: #4e94ce;
  padding: 5px;
  color: white;
  border-radius: 4px;
}
</style>
