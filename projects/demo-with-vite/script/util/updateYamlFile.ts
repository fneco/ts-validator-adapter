import { relToAbs } from "@fneco/node-util";
import { pipe } from "remeda";
import { readYamlFile } from "./readYamlFile";
import { writeYamlFile } from "./writeYamlFile";

export const updateYamlFile = ({
  metaUrl,
  yamlFilePath,
  update,
}: {
  metaUrl?: Parameters<typeof relToAbs>[0];
  yamlFilePath: string;
  update: (obj: object) => object;
}) => {
  const absPath = metaUrl ? relToAbs(yamlFilePath, metaUrl) : yamlFilePath;
  pipe(
    absPath,
    readYamlFile({ defaultTo: [] as object[] }),
    update,
    writeYamlFile(absPath)
  );
};
