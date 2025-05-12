<script setup>
import OuterAttrsComponent from "./outer-attrs-component.vue";
import WrappedOuterAttrsComponent from "./wrapped-outer-attrs.vue";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const dynamicComponent = OuterAttrsComponent;
const dynamicWrappedComponent = WrappedOuterAttrsComponent;
const hello = "hello";
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Vue Attrs</h1>
    <p>Below is a dynamic component that is told to render an OuterAttrsComponent. We pass in a 'testProp' with a value of 'hello'.</p>
    <p>Within the OutterAttrsComponent, there is a single child component called InnerAttrsComponent.</p>
    <p>
      However, the value of 'testProp' is NOT passed to the InnerAttrsComponent. BUT, the Inner component is able to define a
      'testProp' prop and STILL display the value of 'hello' in the InnerAttrsComponent. Why is that?
    </p>
    <p>
      This is happening due to Vue's 'transparent wrapper' behaviour. When a component has a single child component as its root,
      non-prop attributes are passed on through.
    </p>
    <p>
      In our case, there is a single child component called InnerAttrsComponent inside the OuterAttrsComponent, so when we pass
      the 'testProp' to it, the InnerAttrsComponent will get the prop.
    </p>
    <p>
      You can prevent the prop from automatically propagating by <a href="https://vuejs.org/guide/components/attrs#disabling-attribute-inheritance">setting 'inheritAtts: false'</a>.
    </p>
    <component
      :is="dynamicComponent"
      :test-prop="hello"
    />
    <component
      :is="dynamicWrappedComponent"
      test-prop="hello again!"
    />
  </Container>
</template>
