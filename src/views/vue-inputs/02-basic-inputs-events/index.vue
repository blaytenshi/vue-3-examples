<script setup>
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";
import { ref } from "vue";
import Container from "../../../components/Container.vue";

const changeEventInputValue = ref("");
const inputEventInputValue = ref("");

function handleChangeEvent(event) {
  console.log(event.target.value);
  changeEventInputValue.value = event.target.value;
}

function handleInputEvent(event) {
  console.log(event.target.value);
  inputEventInputValue.value = event.target.value;
}
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Input Events</h1>
    <h2>Difference between @input and @change</h2>
    <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
      <p>
        @change - used for &lt;select&gt;, &lt;input&gt; that are radio/checkboxes. This also fires every time the input's
        value changes however only after the user "commits" the change, ie hitting 'enter' or changing focus.
      </p>
      <p>
        Changing the below input field will cause a log message to fire when the input field blurs or the user presses
        enter. The ref is updated when the new value is 'committed'.
      </p>
      <label for="change-event-input">Change Event Input Field</label>
      <input
        name="change-event-input"
        :value="changeEventInputValue"
        @change="handleChangeEvent"
      >
    </Container>
    <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
      <p>
        @input - used for &lt;input&gt;, &lt;textarea&gt; and &lt;select&gt; elements. This fires every time the input's
        value changes, basically every keystroke.
      </p>
      <p>
        Changing the below input field will cause a log message to fire when a new key is pressed. The ref is updated
        as you type.
      </p>
      <label for="input-event-input">Input Event Input Field</label>
      <input
        name="input-event-input"
        @input="handleInputEvent"
      >
    </Container>
  </Container>
</template>

<style scoped>
p {
  padding: 10px 0;
}

input {
  margin: 10px 0;
}
</style>
