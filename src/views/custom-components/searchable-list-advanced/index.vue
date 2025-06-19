<script setup>
import List from "./list.vue";
import { useSearchListStore } from "./search-list-store.js";
import { storeToRefs } from "pinia";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS, LIST_COMPONENT_MODES } from "@/constants/options.js";
import { fetchLargeProfiles } from "@/api/index.js";
import { ref } from "vue";

const usersList = ref([]);

const getUsersList = async () => {
  const fetchedLargeProfiles = await fetchLargeProfiles();

  // format the list to { label, value }
  usersList.value = fetchedLargeProfiles.map((profile) => ({
    label: `${profile.firstName} ${profile.lastName}`,
    value: profile.id,
  }));
};

const searchListStore = useSearchListStore();

const { selectedValues } = storeToRefs(searchListStore);

const { handleListItemSelect } = searchListStore;

getUsersList();
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Searchable List - Advanced</h1>
    <p>This is a fully built out searchable multi-select list.</p>
    <p>
      The List component below can be used along with a popper component. The List component is mostly 'smart' on it's own.
      The only exception is that the itemSelect handler must be passed in as it is responsible for changing the :values
      that will be fed back into the component itself.
    </p>
    <p>
      The List component is also fixed in height so as to emulate the feel of a 'dropdown' when there are more items than
      the allowable space thus forcing scrolling to appear.
    </p>
    <p>
      There is also a local item search that can be enabled and disabled. Note styling hasn't been taken into full
      consideration when building this component so there maybe some weird spacing if you turn off the search.
    </p>
    <p>
      For fun, the list is routed through a Pinia store just so i can see how the data and data-handling functions need
      to be wired back into the component and subsequent child components.
    </p>
    <h2>Multi Select Mode with Search</h2>
    <p>Selected Items: {{ selectedValues }}</p>
    <List
      :items="usersList"
      :values="selectedValues"
      :searchable="true"
      :mode="LIST_COMPONENT_MODES.MULTI_SELECT"
      search-placeholder-text="Search Name..."
      @handle-list-item-select="handleListItemSelect"
    />
    <h2>Single Select Mode with Search</h2>
    <p>Selected Item: {{ selectedValues }}</p>
    <List
      :items="usersList"
      :values="selectedValues"
      :searchable="true"
      search-placeholder-text="Search Name..."
      @handle-list-item-select="handleListItemSelect"
    />
    <h2>Multi Select Mode without Search</h2>
    <p>Selected Items: {{ selectedValues }}</p>
    <List
      :items="usersList"
      :values="selectedValues"
      :mode="LIST_COMPONENT_MODES.MULTI_SELECT"
      :searchable="false"
      @handle-list-item-select="handleListItemSelect"
    />
    <h2>Single Select Mode without Search</h2>
    <p>Selected Items: {{ selectedValues }}</p>
    <List
      :items="usersList"
      :values="selectedValues"
      :mode="LIST_COMPONENT_MODES.SINGLE_SELECT"
      :searchable="false"
      @handle-list-item-select="handleListItemSelect"
    />
  </Container>
</template>

<style scoped>

</style>
