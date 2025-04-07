<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <td>{{ title }}</td>
</template>

<style scoped>
td {
  font-weight: bold;
  background-color: lightgrey;
  padding: 16px;
}
td:first-child {
  border-top-left-radius: 8px;
}
td:last-child {
  border-top-right-radius: 8px;
}
</style>
