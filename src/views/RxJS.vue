<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>RxJS example</h1>
    <button :onClick="handleClick">
      Event Please!
    </button>
  </Container>
</template>

<script>
import { of, map } from "rxjs";
import Container from "../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../constants/options.js";

export default {
  name: "RxJS",
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
  methods: {
    handleClick: () => {
      console.log("clicked!");

      const stream = of(1, 2, 3)
        .pipe(
          map((value) => {
            console.log("value", value);

            return value + 1;
          }),
        )
        .subscribe({
          next(data) {
            console.log("next value", data);
          },
        });

      console.log("stream", stream);

      stream.unsubscribe();
    },
  },
};
</script>
