import { readdirSync, statSync } from "fs";
import { resolve } from "path";

export function getSubdirectories(fullPath: string): string[] {
  return readdirSync(fullPath).filter((entry) => {
    const entryPath = resolve(fullPath, entry);
    return statSync(entryPath).isDirectory();
  });
}
