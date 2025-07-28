import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@ts-validator-adapter/periphery": resolve(__dirname, "./src"),
    },
  },
});
