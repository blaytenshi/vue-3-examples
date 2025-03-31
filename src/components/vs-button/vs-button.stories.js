import VsButton from "./vs-button.vue";
import { fn } from "@storybook/test";

export default {
  title: "Atoms / VS Button",
  component: VsButton,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    label: "Hellos",
  },
};
