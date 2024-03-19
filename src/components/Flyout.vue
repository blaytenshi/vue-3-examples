<script setup>
defineOptions({
  name: 'FlyoutComponent',
})
</script>

<template>
  <div class="flyout-wrapper">
    <div class="parent-element">
      <div class="flyout-button-wrapper">
        <slot />
      </div>
      <ul class="flyout">
        <li>Name Filter</li>
        <li>Zodiac Filter</li>
        <li>Year Filter</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.flyout-wrapper {
  min-width: 15rem;
}

.flyout-button-wrapper {
  display: flex;
  justify-content: flex-end;
}

.parent-element {
  position: relative;
  width: 100%;
}

.flyout {
  position: absolute;
  border: 1px solid red;
  width: 100%;
  background-color: #fcfcfc;
  padding: 0.5rem 0;
}

.flyout > li {
  padding: 0.25rem 0.5rem;
}

.flyout > li:hover {
  background-color: lightskyblue;
  cursor: pointer;
}
</style>