<script setup>
defineProps({
  tableData: {
    type: Array,
    default: () => ([]),
  },
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <slot name="table-head" />
      </tr>
    </thead>
    <tbody>
      <slot
        name="table-body"
        v-bind="{
          tableData
        }"
      />
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
