<script setup>
import { func, string } from "vue-types";
import CloseButton from "../../../components/CloseButton.vue";

defineOptions({
  name: "FilterTagName",
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
  background-color: lightskyblue;
  border: 1px solid #659bbb;
  padding: 0.5rem 1rem;
  gap: 1rem;
  border-radius: 4px;
}
</style>