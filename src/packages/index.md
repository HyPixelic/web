---
title: Packages
---

# Packages

Explore the HyPixelic ecosystem. Our packages are designed to be lightweight, performant, and fully typed.

<div class="packages-grid">
  <a href="/packages/mineflayer" class="package-card">
    <h3>mineflayer</h3>
    <p>Hypixel support for Mineflayer.</p>
  </a>
  <a href="/packages/constants" class="package-card">
    <h3>constants</h3>
    <p>Hypixel API constants and enumerations.</p>
  </a>
  <a href="/packages/mc-data" class="package-card">
    <h3>mc-data</h3>
    <p>Minecraft data tailored for Hypixel.</p>
  </a>
</div>

<style scoped>
.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.package-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  text-decoration: none !important;
}
.package-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}
.package-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}
.package-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
