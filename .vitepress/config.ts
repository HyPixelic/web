import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

const packages = fs.existsSync(path.resolve(dir, "../src/packages"))
  ? fs
      .readdirSync(path.resolve(dir, "../src/packages"))
      .filter((f) => f.endsWith(".md") && f !== "index.md")
      .map((f) => ({
        text: f.replace(".md", ""),
        link: `/packages/${f.replace(".md", "")}`,
      }))
  : [];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HyPixelic",
  description: "Optimized TypeScript libraries for Hypixel",
  lang: "en-US",
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Packages", link: "/packages/", activeMatch: "/packages/" },
    ],
    sidebar: {
      "/packages/": [
        {
          text: "Packages",
          items: packages,
        },
      ],
    },
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
