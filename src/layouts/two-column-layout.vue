<script setup>
import Container from "@/components/container.vue";
</script>

<template>
  <Container>
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
    <div class="main">
      <slot />
    </div>
  </Container>
</template>

<style scoped>
.sidebar {
  width: 250px;
}

.main {
  width: 100%;
}
</style>
