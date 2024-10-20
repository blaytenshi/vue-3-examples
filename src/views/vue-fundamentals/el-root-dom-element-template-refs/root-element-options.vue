<script>
export default {
  name: "RootElementOptions",
  mounted() {
    console.log("$el", this.$el); // this is a component instance, it can only be accessed from Options API
  },
  methods: {
    handleColorChange() {
      // you can use the below method (getting the root dom element) to select descendent elements
      const divElement = this.$el.querySelector("div").style.backgroundColor = "red";
      console.log(divElement);

      // You can also use the $ref in Options API
      this.$refs.helloWorldEl.style.backgroundColor = "red";
    },
  },
};

</script>

<template>
  <div>
    <p
      ref="helloWorldEl"
      class="text"
    >
      Hello World Options API
    </p>
    <div>div inside</div>
    <button @click="handleColorChange">
      Change BG Color
    </button>
  </div>
</template>

<style scoped>

</style>
