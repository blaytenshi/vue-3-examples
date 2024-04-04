<script setup>
import { reactive, ref } from "vue";
import ProfilesList from "./profiles-list.vue";
import ProductsList from "./products-list.vue";
import { fetchProducts, fetchProfiles } from "../../api/index.js";

const myRef = ref("Hi there");

const data = reactive({
  timesButtonClicked: 0,
  clickedButtonColor: "red",
  profilesList: [],
  productsList: [],
});

const getProfiles = async() => {
  data.profilesList = await fetchProfiles();
};

const getProducts = async() => {
  data.productsList = await fetchProducts();
};

getProfiles();
getProducts();

const incrementTimesClicked = () => {
  data.timesButtonClicked++;
};

const updateMyRef = () => {
  myRef.value = "Hi there updated";
};
</script>

<template>
  <h2>This is a real example of how ref and reactive might be used.</h2>
  <p>{{ myRef }}</p>
  <button @click="updateMyRef">
    Update myRef
  </button>
  <button @click="incrementTimesClicked">
    Times Clicked: {{ data.timesButtonClicked }}
  </button>
  <profiles-list :profiles-list="data.profilesList" />
  <products-list :products-list="data.productsList" />
</template>

<style scoped>

</style>