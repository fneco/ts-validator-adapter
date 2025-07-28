import { projectDir } from "@ts-validator-adapter/demo-with-vite/constant";

export function relativeFromProjectVite(path: string): string {
  return path.startsWith(projectDir + "/")
    ? path.replace(projectDir + "/", "")
    : path;
}
