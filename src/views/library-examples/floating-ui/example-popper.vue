<script setup>
import { reactive, ref } from "vue";
import { useFloating } from "@floating-ui/vue";
import useClickOutside from "../../../composables/useClickOutside.js";

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating);

const state = reactive({
  flyoutIsOpen: false,
});

const handleClick = () => {
  state.flyoutIsOpen = !state.flyoutIsOpen;
};

useClickOutside([reference, floating, state], () => state.flyoutIsOpen = false);
</script>

<template>
  <button
    ref="reference"
    @click="handleClick"
  >
    Button
  </button>
  <div
    v-if="state.flyoutIsOpen"
    ref="floating"
    class="tooltip"
    :style="floatingStyles"
  >
    tooltip
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  width: max-content;
  top: 0;
  left: 0;
  background: #222;
  padding: 5px;
  color: white;
  border-radius: 4px;
}
</style>
