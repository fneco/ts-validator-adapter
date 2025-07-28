import { adapters } from "@ts-validator-adapter/periphery/constant";
import fs from "fs";
import { absDistributePath, absGeneratedPath } from "../constant";
import { build, deleteAnalysisYamlFile, getOutputFiles } from "./build";
import { changePackage } from "./change-package";

deleteAnalysisYamlFile();

(async () => {
  for (const adapter of adapters) {
    changePackage(adapter);
    await build({ package: adapter });
  }
  console.log("Output files:", getOutputFiles());

  if (fs.existsSync(absGeneratedPath)) {
    // Remove existing dist directory if it exists
    if (fs.existsSync(absDistributePath)) {
      fs.rmSync(absDistributePath, { recursive: true, force: true });
    }

    // Copy generated to dist
    fs.cpSync(absGeneratedPath, absDistributePath, { recursive: true });
    console.log("Copied generated directory to dist");
  }
})();
