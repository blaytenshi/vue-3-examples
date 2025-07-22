<script setup>
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import simpleMiddleware from "@/services/simple-middleware.js";

const downloadCSVMiddleware = async () => {
  try {
    const blobResponse = await simpleMiddleware.getProductsExportCsv();

    console.log("blob", blobResponse);
    // The Blob constructor takes an array of data parts Blob([data1, data2, ...]) but we only have one part here.
    const blob = new Blob([blobResponse], { type: "text/csv" });

    // We create an object URL here and create a link to download the CSV file.
    const csvUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = "export.csv";
    a.click(); // This will trigger the download of the CSV file.

    // Clean up the object URL after the download is triggered.
    window.URL.revokeObjectURL(a.href);
  } catch (error) {
    console.error("Error downloading CSV:", error);
  }
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Download CSV Example</h1>
    <p>
      This page contains an example of downloading a CSV file using JavaScript.
    </p>
    <h2>Download from ExpressJS Backend/Middleware</h2>
    <button @click="downloadCSVMiddleware">
      Download CSV
    </button>
  </container>
</template>

<style scoped>

</style>
