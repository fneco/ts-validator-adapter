import { relativeFromProjectVite } from "@ts-validator-adapter/demo-with-vite/script/util/relativeFromProjectVite";
import { useSet } from "@ts-validator-adapter/demo-with-vite/script/util/useSet";
import * as fs from "fs";
import { analysisYamlPath } from "./plugin/analyze";

export const [outputFiles, tapAdd] = useSet<string>();

export const registerOutputFile = tapAdd;
export const getOutputFiles = () =>
  [...outputFiles.values()].map(relativeFromProjectVite);

export const deleteAnalysisYamlFile = () => {
  fs.existsSync(analysisYamlPath) && fs.unlinkSync(analysisYamlPath);
};
