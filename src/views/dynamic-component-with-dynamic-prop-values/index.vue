<script setup>
/* eslint-disable no-unused-vars */
import { getSpecialUserList, getSpecialFruitList } from "./get-special-lists";
import { computed, reactive } from "vue";
import UserList from "./user-list.vue";
import FruitList from "./fruit-list.vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const state = reactive({
  componentList: [
    "user",
    "fruit",
  ],
});

const availableComponents = {
  user: UserList,
  fruit: FruitList,
};

/*
  Using the below with a <UserList :user-list="listMap['user']" />
  will not work. You'll just end up with unwrapped computed values,
  ie, CompRefImpls.
*/
const computedUserList = computed(() => getSpecialUserList());
const computedFruitList = computed(() => getSpecialFruitList());

const listMap = {
  user: computedUserList,
  fruit: computedFruitList,
};

/*
  This will work but you need to use the ugly .value accessor which you
  really shouldn't need to for a computed value.
*/
const listMapWithValue = {
  user: computedUserList.value,
  fruit: computedFruitList.value,
};

/*
  This is what you should actually be using, the whole value computed...
*/
const computedListMap = computed(() => ({
  user: getSpecialUserList(),
  fruit: getSpecialFruitList(),
}));

console.log("computedListMap", computedListMap);
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Dynamic Component with Dynamically assigned props</h1>
    <p>
      Here we're using a dynamic &lt;Component&gt; to instantiate a component and depending on what component is being
      instantiated, it will recieve a different value for the same list prop. This concept is very useful for building
      lists and dropdowns.
    </p>
    <p>
      Similar to computed-edge-cases example, what if we're in &lt;script setup&gt; syntax and we try and use a computed
      method to create a prop to pass into a Child Component. Using it within a computed value in the child component
      do we need to use .value on the prop to access it? No you don't or at least, you shouldn't need to.
    </p>
    <Component
      :is="availableComponents[componentName]"
      v-for="componentName in state.componentList"
      :key="componentName"
      :list="computedListMap[componentName]"
    />
  </Container>
</template>

<style scoped>

</style>
