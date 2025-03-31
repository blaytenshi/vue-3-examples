import VsIcon from "./vs-icon.vue";

export default {
  title: "Atoms / VS Icon",
  component: VsIcon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Icon name to be used",
    },
    fill: {
      control: "color",
      description: "Colour of the icon",
    },
    width: {
      control: "text",
      description: "Width of the Icon",
    },
    height: {
      control: "text",
      description: "Height of the Icon",
    },
  },
};

export const Balloon = {
  render: (args) => ({
    components: { VsFetchIcon: VsIcon },
    setup() {
      return {
        ...args,
      };
    },
    template: "<vs-fetch-icon :name='name' :fill='fill' :width='width' :height='height' />",
  }),
  args: {
    name: "balloon",
    fill: "#ff0000",
    width: "64px",
    height: "64px",
  },
};
