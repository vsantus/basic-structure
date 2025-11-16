import { mkdirSync, existsSync } from "fs";

const folders = [
  "src/components",
  "src/components/layout",
  "src/components/ui",
  "src/services",
  "src/store",
  "src/hooks",
  "src/lib",
  "src/types",
];

folders.forEach((folder) => {
  if (!existsSync(folder)) {
    mkdirSync(folder, { recursive: true });
    console.log(`Created: ${folder}`);
  } else {
    console.log(`Already exists: ${folder}`);
  }
});

console.log("\n Project structure created successfully! Thank Vsantos 🎉\n");