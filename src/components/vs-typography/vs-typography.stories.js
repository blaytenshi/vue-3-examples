import VsTypography from "@/components/vs-typography/vs-typography.vue";

export default {
  title: "Atoms / VS Typography",
  component: VsTypography,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      description: "Type of typography to render.",
      options: ["text", "subtitle"],
      table: {
        type: { summary: "text|subtitle" },
        defaultValue: { summary: "text" },
      },
    },
    bold: {
      control: { type: "boolean" },
      description: "Whether the text rendered should be bold.",
    },
    emphasis: {
      control: { type: "boolean" },
      description: "Whether the text rendered should be in italics.",
    },
    default: {
      control: { type: "text" },
      description: "The text to render on the table",
    },
  },
  args: {
    default: "Some default text to render",
  },
};

export const Primary = {};
