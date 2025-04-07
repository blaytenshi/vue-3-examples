<script setup>
import VsStatusDot from "@/components/vs-status-dot/vs-status-dot.vue";
import { BUTTON_COLOURS } from "@/constants/colours.js";

defineProps({
  variant: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <td>
    <div>
      <vs-status-dot
        v-if="variant === 'status'"
        :colour="BUTTON_COLOURS.SUCCESS"
      />
      <span><slot /></span>
    </div>
    <div
      v-if="variant === 'two-rows'"
    >
      <span>
        <slot
          name="secondary"
        />
      </span>
    </div>
  </td>
</template>

<style scoped>
td {
  padding: 16px;
}
</style>
