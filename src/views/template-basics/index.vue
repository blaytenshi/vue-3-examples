<script setup>
import FancyButton from "./components/fancy-button.vue";
import FourColumnLayout from "./components/four-column-layout.vue";
import { computed } from "vue";
import TwoColumnLayout from "./components/two-column-layout.vue";
import SingleColumnLayout from "./components/single-column-layout.vue";

const four = 'Four';
const dynamicSlotName = computed(() => `column${four}`)
</script>

<template>
  <h1>Template Basics</h1>
  <p>Let's look at some basics of the <code>&lt;template /&gt;</code>! More specifically, slots!</p>
  <div class="buttons-wrapper">
    <!-- One single default slot! -->
    <fancy-button>
      This is actually filling a slot!
    </fancy-button>
    <fancy-button />

    <!-- Named Slots! -->
    <four-column-layout>
      <!--
        We can use v-slot plus the name of the slot along with the <template> tag to specify which slot it
      -->
      <!-- eslint-disable-next-line -->
      <template v-slot:columnOne>
        Hi there!
      </template>
      <p>I'm gonna appear in the default slot!</p>
      <pre>Me too!</pre>
      <!-- You can also wrap it in a template with the default lot name
      <template #default>
        Default column!
      </template>
      -->
      <template #columnThree>
        Column Three!
      </template>
      <template #[dynamicSlotName]>
        Column Four!
      </template>
    </four-column-layout>

    <!-- Slot props for accessing props from a child component in the parent. Single Default slot -->
    <single-column-layout v-slot="slotProps">
      {{ slotProps.text }}
      {{ slotProps.count }}
      {{ slotProps.myProp }}
    </single-column-layout>

    <!-- Multiple slots returning slot props. You need to wrap them in a template tag! -->
    <two-column-layout>
      <template #default="slotProps">
        {{ slotProps.text }}
        {{ slotProps.count }}
        {{ slotProps.myProp }}
      </template>
      <template #secondarySlot="{text, count, secondarySlotProp}">
        {{ text }}
        {{ count }}
        {{ secondarySlotProp }}
      </template>
    </two-column-layout>
  </div>
</template>

<style scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>