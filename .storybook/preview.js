/** @type { import('@storybook/vue3').Preview } */
import loadDesignTokens from "@/utils/load-design-tokens.js";

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

loadDesignTokens();

export default preview;
