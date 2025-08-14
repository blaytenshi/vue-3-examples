<script setup>
import FloatingUi from "../../base/floating-ui/index.vue";
import VsListItem from "@/components/vs-list-item/vs-list-item.vue";
import VsInput from "@/components/vs-input/vs-input.vue";
import { UseVirtualList } from "@vueuse/components";

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
          <UseVirtualList
            :list="items"
            :options="{ itemHeight: 22 }"
            height="300px"
          >
            <template #default="{ data: item }">
              <vs-list-item
                :key="item.value"
                :value="item.value"
                :label="item.label"
                @handle-click="$emit('itemSelect', item)"
              />
            </template>
          </UseVirtualList>
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
}
</style>
