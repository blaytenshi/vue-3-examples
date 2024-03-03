<script setup>
const greetingMessage = "Howdy Pardner"
</script>

<template>
  <div class="singleColumnWrapper">
    <!-- These are props and the values that can be passed back and accessed by the parent component. Here, 'my-prop' can be accessed as 'myProp' -->
    <slot
      :text="greetingMessage"
      :count="1"
      my-prop="My Prop!"
    />
  </div>
</template>

<style scoped>
.singleColumnWrapper {
  background-color: lightgrey;
  border-radius: 0.25rem;
  padding: 1rem;
}
</style>