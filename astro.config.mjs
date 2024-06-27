import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  compressHTML: true,
  prefetch: true,
  integrations: [tailwind(), astroI18next(), sitemap()]
});