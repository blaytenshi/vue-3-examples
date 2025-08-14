<script setup>
import ExamplePopper from "./example-popper.vue";
import SimpleSelect from "./simple-select.vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import VsToolTip from "@/components/vs-tool-tip/vs-tool-tip.vue";
import VsSingleSelectDropdownNoVirtualList from "@/components/vs-single-select-dropdown-no-virtual-list/vs-single-select-dropdown-no-virtual-list.vue";
import getRandomProfileList from "@/utils/data-generation/get-random-profile-list.js";
import VsSingleSelectDropdown from "@/components/vs-single-select-dropdown/vs-single-select-dropdown.vue";

const listOfProfiles = getRandomProfileList(100000);
const formattedListOfProfiles = listOfProfiles.map(({ id, firstName, lastName }) => ({
  label: `${firstName} ${lastName}`,
  value: id,
}));

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
    <div>
      <p>
        This div here is so the tooltip component does not expand to the full width of the page
      </p>
      <vs-tool-tip message="Hello There!">
        <template #trigger="{ onTriggerClick }">
          <button @click="onTriggerClick">
            Open Tooltip
          </button>
        </template>
      </vs-tool-tip>
    </div>
    <h3>Single Select Dropdown (No virtual list)</h3>
    <p>Single select dropdown example. The following component does not use virtual lists. It makes the rendering much slower. Especially when we are rendering 100000 profiles.</p>
    <p>Try clicking on the button to open the pop up.</p>
    <div>
      <vs-single-select-dropdown-no-virtual-list
        :items="formattedListOfProfiles"
      >
        <template #trigger="{ onTriggerClick }">
          <button @click="onTriggerClick">
            Show Profiles List (Without Virtual List)
          </button>
        </template>
      </vs-single-select-dropdown-no-virtual-list>
    </div>
    <h3>Single Select Dropdown (With Virtual List)</h3>
    <p>Using virtual list the list should render faster. The following component renders much, much faster because it reuses dom elements underneath.</p>
    <p>Compare it to the one above</p>
    <div>
      <vs-single-select-dropdown
        :items="formattedListOfProfiles"
      >
        <template #trigger="{ onTriggerClick }">
          <button @click="onTriggerClick">
            Show Profiles List (With Virtual List)
          </button>
        </template>
      </vs-single-select-dropdown>
    </div>
  </Container>
</template>

<style scoped>

</style>
