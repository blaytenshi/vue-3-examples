<script setup>
import { UseVirtualList } from "@vueuse/components";
import { useVirtualList } from "@vueuse/core";
import getRandomProfileList from "@/utils/data-generation/get-random-profile-list.js";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const randomProfilesList = getRandomProfileList(100000);

console.log("randomProfilesList: ", randomProfilesList);

const { list, containerProps, wrapperProps } = useVirtualList(randomProfilesList, {
  itemHeight: 22,
});

console.log("containerProps, wrapperProps", containerProps, wrapperProps);

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>VueUse Use Virtual List</h1>
    <p>
      This example demonstrates how to use the <a href="https://vueuse.org/core/useVirtualList/">useVirtualList</a> composable from VueUse.
    </p>
    <p>
      The useVirtualList composable is used to efficiently render large lists by only rendering the items that are currently visible in the viewport.
    </p>
    <p>
      This is particularly useful for performance optimization when dealing with large datasets.
    </p>
    <h2>Virtual List using renderless component</h2>
    <UseVirtualList
      :list="randomProfilesList"
      :options="{ itemHeight: 22 }"
      height="300px"
    >
      <template #default="props">
        <div style="height: 22px">
          {{ props.index }} {{ props.data }}
        </div>
      </template>
    </UseVirtualList>
    <h2>Virtual List using composition utility function</h2>
    <div
      v-bind="containerProps"
      style="height: 300px"
    >
      <div v-bind="wrapperProps">
        <div
          v-for="item in list"
          :key="item.index"
          style="height: 22px"
        >
          {{ item.index }} {{ item.data }}
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

</style>
