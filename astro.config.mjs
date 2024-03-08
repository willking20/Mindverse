import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

const SERVER_PORT = 3000;
const LOCALHOST_URL = 'http://localhost:'+ SERVER_PORT;
const SCRIPT = process.env.npm_lifecycle_script || "";
const LIVE_URL = "https://willking20.github.io";
const isBuild = SCRIPT.includes("astro build");
const BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    svelte()],
  output: "server",
  adapter: netlify(),
  site: BASE_URL,
  base: '/Myndverse',
});