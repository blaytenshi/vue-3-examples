<script>
import { fetchProfiles } from "@/api/local-fake-api.js";
import InnerComponent from "./inner-component.vue";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

export default {
  components: { Container, InnerComponent },
  data() {
    return {
      userList: [],
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
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
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
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
  </Container>
</template>
