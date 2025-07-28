import { type AdapterNames } from "@ts-validator-adapter/periphery/constant";
import { writeFileSync } from "fs";
import { resolve } from "path";
import { projectDir } from "../constant";

const content = (pkg: AdapterNames) =>
  `export { validateSignup } from "./${pkg}.ts";`;

const filePath = resolve(projectDir, `src/validate/index.ts`);

export const changePackage = (packageName: AdapterNames) => {
  writeFileSync(filePath, content(packageName), { encoding: "utf-8" });
};
