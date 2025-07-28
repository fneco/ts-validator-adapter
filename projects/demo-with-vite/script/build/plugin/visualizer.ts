import { visualizer as visualizerOriginal } from "rollup-plugin-visualizer";
import { type PluginOption } from "vite";
import { absGeneratedPath } from "../../../constant";
import { registerOutputFile } from "../files";

export const visualizerGenDirPath = `${absGeneratedPath}/stats`;

export const visualizer = (params: { package: string }) => {
  return visualizerOriginal({
    filename: registerOutputFile(
      `${visualizerGenDirPath}/${params.package}.html`
    ),
    template: "flamegraph",
  }) as PluginOption;
};
