// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://fneco.github.io',
  base: '/ts-validator-adapter',
  vite: {
    plugins: [tailwindcss()],
  },
});
