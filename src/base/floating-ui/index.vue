<script setup>
import { ref } from "vue";
import { useFloating } from "@floating-ui/vue";
import useClickOutside from "@/composables/useClickOutside.js";

const showFloating = ref(false);

const triggerRef = ref(null);
const cardRef = ref(null);

const { floatingStyles } = useFloating(triggerRef, cardRef);

useClickOutside([cardRef, triggerRef], () => showFloating.value = false);

const toggleShowFloating = () => {
  console.log("triggered!", showFloating.value);
  showFloating.value = !showFloating.value;
};
</script>
<!--
  This component is not designed to be used by itself as a component. It is supposed to be wrapped by other components
  in order to create other reusable components from. See vs-tooltip.
-->
<template>
  <div
    ref="triggerRef"
    class="triggerWrapper"
  >
    <slot
      name="trigger"
      :on-trigger-click="toggleShowFloating"
    />
  </div>
  <div
    v-if="showFloating"
    ref="cardRef"
    :style="floatingStyles"
  >
    <slot name="floatingElement" />
  </div>
</template>

<style scoped>
.triggerWrapper{
  display: inline-block;
}
</style>
