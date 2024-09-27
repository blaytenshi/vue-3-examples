<script setup>
import Tag from "../../components/Tag.vue";
import humanizeDuration from "humanize-duration";

const duration = 12000;
</script>

<template>
  <Tag color="green">
    {{ humanizeDuration(duration) }}
  </Tag>
</template>

<style scoped>

</style>
