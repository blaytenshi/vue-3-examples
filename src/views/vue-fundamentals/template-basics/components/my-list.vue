<script setup>
import { object, func } from "vue-types";
import { noop } from "lodash";

defineProps({
  items: object(),
  handleOnClick: func().def(noop),
});

const insideFunc = () => {
  console.log("inside func invoked!");
};
</script>

<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      @click="() => handleOnClick(item.id)"
    >
      <slot
        :item="item"
        :inside-func="insideFunc"
      />
      <!-- <slot :item="item" @click="() => handleOnClick(item.id)" /> # This does not work, cannot put an event listener on a slot -->
    </li>
  </ul>
</template>

<style scoped>

</style>
