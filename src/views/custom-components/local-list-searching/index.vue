<script setup>
import LocalListSearch from "./local-list-search.vue";
import { fetchProfiles } from "../../../api/index.js";
import { reactive } from "vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

const state = reactive({
  filteredUserList: [],
  userList: [],
});

const getUsers = async () => {
  const data = await fetchProfiles(); // simualted service layer API call
  console.log("data", data);
  state.userList = data.map(({ firstName, lastName }) => ({ label: `${firstName} ${lastName}` }));
  state.filteredUserList = state.userList;
};

getUsers();

function handleSearchChange(event) {
  state.searchValue = event.target.value;

  console.log("searchValue", state.searchValue);

  if (state.searchValue !== "") {
    state.filteredUserList = state.userList.filter(({ label }) => label.toLowerCase().includes(state.searchValue.toLowerCase()));
  } else {
    state.filteredUserList = state.userList;
  }
}
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Local List Searching</h1>
    <p>
      This is how a local list search should be implemented in the simplest of ways. The searching function should be
      handled at the top layer and passed down into the LocalListSearch component.
    </p>
    <p>Available UserList: {{ state.userList }}</p>
    <LocalListSearch
      :user-list="state.filteredUserList"
      :on-search-change="handleSearchChange"
    />
  </Container>
</template>
