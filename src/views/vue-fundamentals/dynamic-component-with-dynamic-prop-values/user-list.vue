<script setup>
import { computed } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

console.log("userlist prop", props.list);

const computedSpecialUserList = computed(() => props.list.map(user => `${user} + 1`));
</script>

<template>
  <div
    v-for="user in computedSpecialUserList"
    :key="user"
  >
    {{ user }}
  </div>
</template>

<style scoped>

</style>
