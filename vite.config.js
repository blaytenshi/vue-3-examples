import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  // vitest configuration, automatically detected by vite
  test: {
    coverage: {
      enabled: true,
      include: ["**/src"], // only do code coverage for everything in src directory otherwise it will scan root dir
      provider: "istanbul", // using istanbul to do code coverage
      reporter: ["text", "html"], // coverage should be displayed as text as well as generate HTML report
      reportsDirectory: "./test-reports/coverage/", // coverage reports should be saved into coverage/ subdirectory
    },
    reporters: ["verbose", "html"], // should report a verbose report along with an HTML report
    outputFile: "./test-reports/index.html", // HTML test reports to be written to this file
  },
});
