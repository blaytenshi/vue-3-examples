<script setup>
import { func, string } from "vue-types";
import CloseButton from "../../../../components/CloseButton.vue";

defineOptions({
  name: "FilterTagZodiac",
});

defineProps({
  label: string(),
  type: string(),
  handleDeleteTag: func(),
});
</script>

<template>
  <div>
    <span>{{ label }}</span>
    <CloseButton
      :handle-close="handleDeleteTag"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  background-color: #c3e8c3;
  border: 1px solid #5ea85e;
  padding: 0.5rem 1rem;
  gap: 1rem;
  border-radius: 4px;
}
</style>
