<script setup>
import ExamplePopper from "./example-popper.vue";
import SimpleSelect from "./simple-select.vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Floating UI examples</h1>
    <h2>Simple Popper Example</h2>
    <p>This is a simple popper with a fixed button and a fixed tooltip. Kinda useless but demonstrates what floating-ui can do.</p>
    <example-popper />
    <h2>Popper UI with custom flyout</h2>
    <p>
      This is a select dropdown component that utilises the floating-ui popper. This demonstrates a fixed trigger element but a customisable flyout component.
    </p>
    <simple-select label="Click Me">
      <template #flyout>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </template>
    </simple-select>
    <h2>Tooltip</h2>
    <p>The Tooltip component allows the developer to insert their own trigger element but the flyout element is fixed</p>
    <div>Yet to come...</div>
  </Container>
</template>

<style scoped>

</style>
