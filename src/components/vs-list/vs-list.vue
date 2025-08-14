<script setup>
import VsListItem from "../vs-list-item/vs-list-item.vue";

defineProps({
  title: {
    type: String,
  },
  items: {
    type: Array,
    required: true,
  },
});

const handleClick = (value) => {
  console.log("Item clicked:", value);
};
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <vs-list-item
      v-for="key in items"
      :key="key.value"
      @handle-click="handleClick"
    >
      {{ key.label }}
    </vs-list-item>
  </div>
</template>

<style scoped>

</style>
