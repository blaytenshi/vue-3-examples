<template>
  <h1>RxJS example</h1>
  <button :onClick="handleClick">
    Event Please!
  </button>
</template>

<script>
import { of, map } from "rxjs";

export default {
  name: "RxJS",
  methods: {
    handleClick: () => {
      console.log("clicked!");

      const stream = of(1, 2, 3)
        .pipe(
          map((value) => {
            console.log("value", value);

            return value + 1;
          })
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