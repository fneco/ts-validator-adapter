import { readFileSync } from "fs";
import memoize from "memoize-one";
import { resolve } from "path";
import { getSubdirectories } from "./getSubdirectories";

export const getAdaptersInfo = memoize(() => {
  const adapterDir = resolve(import.meta.dirname, "../../../adapter");
  const subdirectories = getSubdirectories(adapterDir);

  return subdirectories.map((name) => {
    const packageJsonPath = resolve(adapterDir, name, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    return {
      packageName: packageJson.name || "(failed to read name)",
      shortName: name,
      ...(packageJson.customFields.target || {}),
    };
  });
});
