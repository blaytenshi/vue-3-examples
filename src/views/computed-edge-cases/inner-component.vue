<script>
export default {
  props: {
    userList: {
      type: Array,
      default() {
        return [];
      }
    },
  }
};
</script>

<template>
  <p>
    Should still print the formatted userlist even if it's been v-bind into this
    child component, even if the content of userList is loaded asynchronously.
  </p>
  <p>Inside of InnerComponent: {{ userList }}</p>
</template>