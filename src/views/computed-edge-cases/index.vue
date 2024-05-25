<script>
import { fetchProfiles } from "../../api/index.js";
import InnerComponent from "./inner-component.vue";

export default {
  components: { InnerComponent },
  data() {
    return {
      userList: [],
    };
  },
  computed: {
    formattedUserList() {
      return [
        {
          firstName: "Ben",
          lastName: "Franzi",
        },
        ...this.userList.map(({ firstName, lastName }) => ({
          firstName,
          lastName,
        })),
      ];
    },
  },
  async mounted() {
    this.userList = await fetchProfiles();
  },
};
</script>

<template>
  <h1>Computed Function Edge Cases</h1>
  <p>
    If we have a userList in data that is fetched asynchronously and then calculated with a computed property,
    should it reactively rerender when the computed property is passed to an inner component? Short answer, yes.
  </p>
  <p>Outside of InnerComponent: {{ formattedUserList }}</p>
  <InnerComponent
    v-bind="{
      userList: formattedUserList
    }"
  />
</template>