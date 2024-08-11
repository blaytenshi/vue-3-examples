<script setup>
import myObject from "./my-object.json";
console.log("myObject", myObject);

// localStorage only stores things as a string
// so make sure you stringify whatever javascript object first before you store it!
// (Try not to make the object too big, JSON.stringify is quite slow...)
localStorage.setItem("my-object", JSON.stringify(myObject));

const myRetrievedObject = localStorage.getItem("my-object");
const alsoMyRetrievedObject = window.localStorage.getItem("my-object");

console.log("What is the type of 'myRetrievedObject'?", typeof myRetrievedObject); // comes back as a string!
console.log("Can I access 'myRetrievedObject' prior to parsing it? No because it's...", myRetrievedObject["name"]); // this will return undefined! coz it's still a string!
console.log("alsoMyRetirevedObject", alsoMyRetrievedObject); // no difference accessing the item with window.localStorage
console.log("parsed myRetrievedObject", JSON.parse(myRetrievedObject));

</script>

<template>
  <h1>Local Storage Examples</h1>
  <p>This example mostly looks at how to use local storage</p>
</template>

<style scoped>

</style>
