import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  server: 3000,
  site: "https://willking20.github.io",
  integrations: [
    tailwind(), 
    svelte()],
  output: "docs",
  adapter: netlify(),
  base: "/Myndverse/"
});