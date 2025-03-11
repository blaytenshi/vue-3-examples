<script setup>
import { reactive, ref } from "vue";
import { func, string } from "vue-types";
import { useFloating } from "@floating-ui/vue";
import useClickOutside from "../../../composables/useClickOutside.js";
import { noop } from "lodash";

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

defineProps({
  onItemClick: func().def(noop),
  label: string().def("Button"),
});
</script>

<template>
  <button
    ref="reference"
    @click="handleClick"
  >
    {{ label }}
  </button>
  <div
    v-if="state.flyoutIsOpen"
    ref="floating"
    class="tooltip"
    :style="floatingStyles"
  >
    <slot name="flyout" />
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  width: max-content;
  top: 0;
  left: 0;
  background: #4e94ce;
  padding: 5px;
  color: white;
  border-radius: 4px;
}
</style>
