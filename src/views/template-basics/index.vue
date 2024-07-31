<script setup>
import FancyButton from "./components/fancy-button.vue";
import FourColumnLayout from "./components/four-column-layout.vue";
import { computed } from "vue";
import TwoColumnLayout from "./components/two-column-layout.vue";
import SingleColumnLayout from "./components/single-column-layout.vue";
import UserItem from "./components/user-item.vue";
import MyList from "./components/my-list.vue";
import ShoppingItem from "./components/shopping-item.vue";

const four = "Four";
const dynamicSlotName = computed(() => `column${four}`);

const usersList = [
  { id: 1, initials: "JT", name: "Jimmy Tang" },
  { id: 2, initials: "SL", name: "Shirley Lui" },
  { id: 3, initials: "BF", name: "Ben Franzi" },
];

const shoppingList = [
  {
    id: 1,
    done: true,
    itemName: "Apples",
  },
  {
    id: 2,
    done: false,
    itemName: "Oreos",
  },
  {
    id: 3,
    done: false,
    itemName: "Coke Zero",
  },
  {
    id: 4,
    done: true,
    itemName: "Milk",
  },
];
</script>

<template>
  <h1>Template Basics</h1>
  <p>Let's look at some basics of the <code>&lt;template /&gt;</code>! More specifically, slots!</p>
  <div class="buttons-wrapper">
    <!-- One single default slot! -->
    <h2>Single Default Slot with Custom content</h2>
    <p>Here the `fancy-button` component's default slot has been filled with content we want to actually show.</p>
    <fancy-button>
      This is actually filling a slot!
    </fancy-button>
    <h2>Single Default Slot with Default Content</h2>
    <p>However, if you don't provide custom content to fill it with, the `fancy-button` component can render it's own default content.</p>
    <fancy-button />

    <!-- Named Slots! -->
    <h2>Named Slots</h2>
    <p>Below are four different slots. We use the `template` tag to 'pick' which content should render into which slot.</p>
    <four-column-layout>
      <!--
        We can use v-slot plus the name of the slot along with the <template> tag to specify which slot it
      -->
      <!-- eslint-disable-next-line --> <!-- this is to prevent eslint from automatically fixing v-slot: to use #slotname shorthand -->
      <template v-slot:columnOne>
        Hi there! I have a 'template' tag to say I should be rendered to a slot named 'columnOne'.
      </template>
      <p>I'm gonna appear in the default slot because i don't have a template tag!</p>
      <pre>Me too!</pre>
      <!-- You can also wrap it in a template with the default lot name
      <template #default>
        Default column!
      </template>
      -->
      <template #columnThree>
        Column Three! I also have a template tag with columnThree but i use the # shorthand to replace `v-slot:` syntax
      </template>
      <template #[dynamicSlotName]>
        Column Four! I have a dynamically set slot name it uses the syntax #[]
      </template>
    </four-column-layout>

    <!-- Slot props for accessing props from a child component in the parent. Single Default slot -->
    <h2>Accessing a slot's props</h2>
    <p>Here, `single-column-layout` has a default slot. You can use slot-props to access the slot's props</p>
    <single-column-layout v-slot="slotProps">
      {{ slotProps.text }}
      {{ slotProps.count }}
      {{ slotProps.myProp }}
    </single-column-layout>

    <!-- Multiple slots returning slot props. You need to wrap them in a template tag! -->
    <two-column-layout>
      <template #default="slotProps">
        {{ slotProps.text }}
        {{ slotProps.count }}
        {{ slotProps.myProp }}
      </template>
      <template #secondarySlot="{text, count, secondarySlotProp}">
        {{ text }}
        {{ count }}
        {{ secondarySlotProp }}
      </template>
    </two-column-layout>

    <h2>Practical Slot Props Example</h2>
    <p>So why would you need to use Slot Props? Imagine if you had to render two separate list of items:</p>
    <ul>
      <li>List of users with an initials prefix</li>
      <li>List of shopping list items</li>
    </ul>
    <p>
      So you would have a custom `List` component that takes in a list and whose sole purpose is to iterate through
      the list of 'items' and render them. The items this `List` component renders will fill a 'slot' component and can
      be anything you want it to be. By using the `List` component with a slot, you've reused the code within it instead
      of replicating the same v-for code into a custom `UserList` and `ShoppingList` component.
    </p>
    <p>
      The slot inside the `List` component will pass back out the item it is rendering (regardless of whether it's a User
      Item or a Shopping Item) so that you can pass the content (item) into the UserItem or ShoppingItem component you're
      rendering in the slot.
    </p>
    <MyList :items="usersList">
      <template #default="{item}">
        <UserItem :user="item" />
      </template>
    </MyList>
    <MyList :items="shoppingList">
      <template #default="{item}">
        <ShoppingItem :item="item" />
      </template>
    </MyList>
  </div>
</template>

<style scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
