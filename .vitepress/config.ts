import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HyPixelic",
  description: "Optimized TypeScript libraries for Hypixel",
  lang: "en-US",
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: "github", link: "https://github.com/hypixelic" },
      { icon: "jsr", link: "https://jsr.io/@hypixelic" },
    ],
    footer: {
      message:
        'Released under the MIT License.<br/>Inspired by <a href="https://github.com/hypixel-api-reborn" target="_blank">Hypixel-API-Reborn</a>.',
      copyright: "Copyright © 2026 - HyPixelic by Pixelic(c) and Collaborators",
    },
  },
  srcDir: "src",
});
