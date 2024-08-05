<template>
  <div>
    <label>{{ inputLabel }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    // modelValue is the default name of the prop it will map to if we simply use
    // the v-model directive when using this component. When this component is emitting
    // the event, it will emit as '@update:modelValue'. Otherwise it will use whatever
    // custom name you append to the v-model directive. Ie, v-model:myCustomName will
    // map to a 'myCustomName' prop and will emit as '@update:myCustomName'.
    modelValue: {
      type: String,
      default() {
        return "";
      },
    },
    inputLabel: {
      type: String,
      default() {
        return "";
      },
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
label {
  display: block;
}
</style>
