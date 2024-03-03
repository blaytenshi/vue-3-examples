<script setup>
const greetingMessage = "Howdy Pardner"
</script>

<template>
  <div class="twoColumnWrapper">
    <!-- These are props and the values that can be passed back and accessed by the parent component. Here, 'my-prop' can be accessed as 'myProp' -->
    <div class="columnOne">
      <slot
        :text="greetingMessage"
        :count="1"
        my-prop="My Prop!"
      />
    </div>
    <div class="columnTwo">
      <slot
        name="secondarySlot"
        :text="greetingMessage"
        secondary-slot-prop="secondaryValue"
      />
    </div>
  </div>
</template>

<style scoped>
.twoColumnWrapper {
  display: flex;
  gap: 0.5rem;
}

.twoColumnWrapper > div {
  display: flex;
  flex: 1 1 auto;
  border-radius: 0.25rem;
  padding: 1rem;
}

.columnOne {
  background-color: lightsalmon;
}

.columnTwo {
  background-color: lightcyan;
}
</style>