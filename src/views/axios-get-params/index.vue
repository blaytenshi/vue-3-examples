<script setup>
import simpleMiddlewareApi from "../../api/simple-middleware.js";
import { useRoute } from "vue-router";

const route = useRoute();
const { query } = route;

const getProducts = async () => {
  const response = await simpleMiddlewareApi.get("/products", {
    // these are Query Params, ie the request URL will look like /products?page=0&filters[qty]=50&filters[name]=Protein+Powder&status[]=in_stock&status[]=out_of_stock
    params: {
      page: 0,
      filters: {
        qty: 50,
        name: "Protein Powder",
      },
      status: [ "in_stock", "out_of_stock" ],
    },
  });

  console.log("response", response);
};

try {
  getProducts();
} catch(err) {
  console.log(err);
}

</script>

<template>
  <p>
    {{ query }}
  </p>
</template>

<style scoped>

</style>
