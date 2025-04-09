import VsButton from "./vs-button.vue";
import { fn } from "@storybook/test";
import { BUTTON_COLOURS } from "@/constants/colours.js";

export default {
  title: "Atoms / VS Button",
  component: VsButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text label for the button.",
    },
    colour: {
      control: {
        type: "select",
      },
      options: Object.values(BUTTON_COLOURS),
    },
  },
  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    label: "Primary",
    colour: BUTTON_COLOURS.PRIMARY,
  },
};

export const Success = {
  args: {
    label: "Success",
    colour: BUTTON_COLOURS.SUCCESS,
  },
};

export const Warning = {
  args: {
    label: "Warning",
    colour: BUTTON_COLOURS.WARNING,
  },
};

export const Danger = {
  args: {
    label: "Danger",
    colour: BUTTON_COLOURS.DANGER,
  },
};
