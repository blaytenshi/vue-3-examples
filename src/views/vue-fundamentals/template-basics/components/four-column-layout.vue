<script setup>
</script>

<template>
  <div class="four-column-layout">
    <div class="column-1">
      <slot name="columnOne" />
    </div>
    <div class="column-2">
      <slot />
    </div>
    <div class="column-3">
      <slot name="columnThree" />
    </div>
    <div class="column-4">
      <slot name="columnFour" />
    </div>
  </div>
</template>

<style scoped>
.four-column-layout {
  display: flex;
  gap: 0.5rem;
}
.four-column-layout > div {
  flex: 1 1 auto;
  border-radius: 0.25rem;
  padding: 1rem;
}
.column-1 {
  background-color: lightskyblue;
}
.column-2 {
  background-color: lightpink;
}
.column-3 {
  background-color: lightgreen;
}
.column-4 {
  background-color: lightgoldenrodyellow;
}
</style>