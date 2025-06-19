<script setup>
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import Container from "../../../components/Container.vue";
import ButtonEmits from "./button-emits.vue";
import ButtonNonEmits from "./button-non-emits.vue";
import CustomTextInput from "./custom-text-input.vue";

const handleClick = (emitValue) => {
  console.log(`emitValue: ${emitValue}`);
};

const handleTextChange = (emitValue) => {
  console.log(`emitValue: ${emitValue}`);
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Component Emits</h1>
    <p>
      Below is a component that uses the emit syntax where the @[name-here] is the name of the function you want the
      emit function to call. The format of the [name-here] can be in kebab-case or camelCase. Inside the defineEmits
      inside the component, you don't have to match the same kebab-case or camelCase but the spelling has to be the
      same in order for it to match.
    </p>
    <p>
      This format of using @[event-name] here allows us to use the defineEmits function inside the component instead
      of passing a function to a prop like :handle-click="handleClick" makes it harder to tell when it is a function
      or just a value.
    </p>
    <button-emits
      label="Button component uses defineEmits"
      @handle-click="handleClick"
    />
    <button-non-emits
      :handle-click="handleClick"
      label="Button component uses prop function"
    />
    <p>The emits can also emit from a custom input field</p>
    <custom-text-input
      label="Custom Text Input"
      @change="handleTextChange"
    />
  </Container>
</template>

<style scoped>

</style>
