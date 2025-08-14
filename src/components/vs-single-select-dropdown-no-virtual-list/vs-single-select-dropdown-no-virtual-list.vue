<script setup>
import FloatingUi from "../../base/floating-ui/index.vue";
import VsListItem from "@/components/vs-list-item/vs-list-item.vue";
import VsInput from "@/components/vs-input/vs-input.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  lang: {
    type: Object,
    default: () => ({
      noItems: "No items found",
      searchPlaceholder: "Search...",
    }),
  },
});
</script>
<!--
  DO NOT USE THIS COMPONENT IN PRODUCTION!
  While this component works fine, it's not a very scalable component to use. When we need to render alot of items,
  this popup would take forever to upload. See the floating-ui example to see the problem.
-->
<template>
  <floating-ui>
    <template #trigger="{ onTriggerClick }">
      <slot
        name="trigger"
        :on-trigger-click="onTriggerClick"
      />
    </template>
    <template #floatingElement>
      <div class="vs-single-select-dropdown">
        <div>
          <vs-input />
        </div>
        <div class="vs-single-select-dropdown-items-container">
          <vs-list-item
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            :label="item.label"
            @handle-click="$emit('itemSelect', item)"
          />
        </div>
      </div>
    </template>
  </floating-ui>
</template>

<style scoped>
.vs-single-select-dropdown {
  border: 1px solid #0a3069;
  background: white;
}
.vs-single-select-dropdown-items-container {
  height: 300px;
  width: 200px;
  overflow: auto;
}
</style>
