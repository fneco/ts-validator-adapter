import { cpSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { absGeneratedPath } from "../../demo-with-vite/constant";

function copyGenerated() {
  const sourceDir = absGeneratedPath;
  const targetDir = resolve(import.meta.dirname, "../public");

  if (!existsSync(sourceDir)) {
    console.error(`Source directory does not exist: ${sourceDir}`);
    return;
  }

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  try {
    cpSync(sourceDir, targetDir, { recursive: true, force: true });
    console.log(`Successfully copied ${sourceDir} to ${targetDir}`);
  } catch (error) {
    console.error(`Error copying files: ${error}`);
  }
}

copyGenerated();
