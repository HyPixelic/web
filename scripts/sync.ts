import fs from "node:fs";
import path from "node:path";

const ORG = "HyPixelic";
const REPOS = ["mineflayer", "constants", "mc-data"];
const DIR = path.join(process.cwd(), "src", "packages");

async function sync() {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR, { recursive: true });
  }

  console.log(`Syncing repositories: ${REPOS.join(", ")}\n`);

  for (const repoName of REPOS) {
    try {
      console.log(`Syncing ${repoName}...`);
      const readmeUrl = `https://raw.githubusercontent.com/${ORG}/${repoName}/main/README.md`;
      const response = await fetch(readmeUrl);

      if (response.ok) {
        const content = await response.text();
        const frontmatter = ["---", `title: ${repoName}`, "editLink: false", "---", "", ""].join("\n");

        fs.writeFileSync(path.join(DIR, `${repoName}.md`), frontmatter + content);
      } else {
        console.warn(`Failed to fetch README.md for ${repoName}`);
      }
    } catch (error) {
      console.error(`Error syncing ${repoName}:`, error);
    }
  }

  console.log("\nSync completed!");
}

sync();
