import VsStatusDot from "@/components/vs-status-dot/vs-status-dot.vue";
import { BUTTON_COLOURS } from "@/constants/colours.js";

export default {
  title: "Atoms / VS Status Dot",
  component: VsStatusDot,
  tags: ["autodocs"],
  argTypes: {
    colour: {
      control: { type: "select" },
      description: "Dot colour",
      options: Object.values(BUTTON_COLOURS),
    },
  },
};

export const Primary = {
  args: {
    colour: BUTTON_COLOURS.PRIMARY,
  },
};

export const Warning = {
  args: {
    colour: BUTTON_COLOURS.WARNING,
  },
};
