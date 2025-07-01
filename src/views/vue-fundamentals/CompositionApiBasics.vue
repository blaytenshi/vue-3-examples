<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Composition API Basics Page</h1>
    <p>
      This template uses the new Composition API. It is the new standard over the
      old Options API. The basics for the new Composition API is that everything
      now exists in the setup() function.
    </p>
    <div>
      <h2>profiles</h2>
      {{ profiles }}
    </div>
  </Container>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchProfiles } from "@/api/local-fake-api.js";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

export default {
  name: "CompositionApiBasicsPage",
  components: {
    Container,
  },
  setup() {
    const profiles = ref([]);

    const loadProfiles = async () => {
      profiles.value = await fetchProfiles();
    };

    onMounted(loadProfiles);

    return {
      profiles,
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>
