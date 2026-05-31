---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "HyPixelic"
  text: "Optimized TypeScript libraries for Hypixel."
  tagline: Built for developers, by developers. Modern, typed, and efficient.
  actions:
    - theme: brand
      text: View on JSR
      link: https://jsr.io/@hypixelic
    - theme: alt
      text: View on GitHub
      link: https://github.com/hypixelic
features:
  - title: Fully Typed
    details: Built with TypeScript from the ground up, providing excellent developer experience and type safety.
    icon: 🚦
  - title: Performant
    details: Optimized for speed, making it suitable for even high-usage applications.
    icon: ⚡
  - title: JSR Ready
    details: All packages are published to JSR, ensuring modern ESM compatibility and TypeScript compatibility.
    icon: ⚓
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/pixelicc.png',
    name: 'Pixelic',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/pixelicc' },
    ],
    sponsor: 'https://github.com/sponsors/pixelicc'
  },
]
</script>

<div class="team-section">
  <h1>Team</h1>
  <VPTeamMembers size="small" :members />
</div>
