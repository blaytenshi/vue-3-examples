import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3030,
  },
  // vitest configuration, automatically detected by vite
  test: {
    globals: true,
    include: ["tests/**/*.test.{js,ts,jsx,tsx}"], // include only *.test files in the src folder
    exclude: [
      "tests/e2e/**",
      "node_modules/**",
      "dist/**",
    ],
    coverage: {
      enabled: true,
      include: ["src/**"],
      provider: "istanbul", // using istanbul to do code coverage
      reporter: ["text", "html"], // coverage should be displayed as text as well as generate HTML report
      reportsDirectory: "./tests/unit/test-reports/coverage/", // coverage reports should be saved into coverage/ subdirectory
    },
    reporters: ["verbose", "html"], // should report a verbose report along with an HTML report
    outputFile: "./tests/unit/test-reports/index.html", // HTML test reports to be written to this file
  },
});
