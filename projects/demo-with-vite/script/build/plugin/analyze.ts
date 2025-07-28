import { makeDirFileSync } from "@fneco/node-util";
import analyzeOriginal from "rollup-plugin-analyzer";
import { type PluginOption } from "vite";
import { absGeneratedPath } from "../../../constant";
import { updateYamlFile } from "../../util/updateYamlFile";
import { registerOutputFile } from "../files";

export const analyserGenDirPath = `${absGeneratedPath}/analyze`;
export const analysisYamlPath = `${analyserGenDirPath}/bundleSize.yaml`;

export const analyze = (params: { package: string }) => {
  return analyzeOriginal({
    summaryOnly: true,
    writeTo: (analysisString: string) => {
      makeDirFileSync({
        filePath: registerOutputFile(
          `${analyserGenDirPath}/${params.package}-report.txt`
        ),
        content: analysisString,
      });
    },
    onAnalysis: (analysisObject) => {
      updateYamlFile({
        yamlFilePath: registerOutputFile(analysisYamlPath),
        update: (obj) => {
          return [
            ...(obj as []),
            {
              ["package"]: params.package,
              bundleSize: analysisObject.bundleSize,
              bundleOrigSize: analysisObject.bundleOrigSize,
              bundleReduction: analysisObject.bundleReduction,
              moduleCount: analysisObject.moduleCount,
            },
          ];
        },
      });
    },
  }) as PluginOption;
};
