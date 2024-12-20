<script setup>
import simpleMiddlewareApi from "../../../api/simple-middleware.js";
import { useRoute } from "vue-router";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";
import { reactive } from "vue";

const route = useRoute();
const { query } = route;
const state = reactive({
  productsList: [],
  emptyState: {
    title: "",
    message: "",
  },
});

const getProductsList = async () => {
  try {
    const response = await simpleMiddlewareApi.get("/products", {
      // these are Query Params, ie the request URL will look like /products?page=0&filters[qty]=50&filters[name]=Protein+Powder&status[]=in_stock&status[]=out_of_stock
      params: {
        page: 0,
        pageSize: 5,
        filters: {
          qty: 50,
          name: "Protein Powder",
        },
        status: ["in_stock", "out_of_stock"],
      },
    });

    const { results } = response.data;
    console.log("results", results);
    state.productsList = results;
  } catch (error) {
    console.log("errrrrr", error);
    if (error.response) { // error response from the backend
      state.emptyState.title = error.response.data.code;
      state.emptyState.message = error.response.data.message;
    } else if (error.request && error.code === "ERR_NETWORK") { // request error, network issues
      state.emptyState.title = "Network Error";
      state.emptyState.message = "Unable to reach APIs";
    } else { // axios error
      state.emptyState.title = "Unknown Error";
      state.emptyState.message = "An Unknown Error has occurred. Please restart your application.";
    }
  }
};

getProductsList();

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <p>
      Query:
      {{ query }}
    </p>
    <div v-if="state.productsList.length > 0">
      {{ state.productsList }}
    </div>
    <div v-if="!state.productsList.length">
      <p>{{ state.emptyState.title }}</p>
      <p>{{ state.emptyState.message }}</p>
    </div>
  </Container>
</template>

<style scoped>

</style>
