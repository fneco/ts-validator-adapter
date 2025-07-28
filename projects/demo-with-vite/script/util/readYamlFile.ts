import { existsSync, readFileSync } from "fs";
import * as yaml from "js-yaml";
import { isObjectType } from "remeda";

/**
 * YAMLファイルを読み込む関数
 * @param filePath 読み込むYAMLファイルのパス
 * @returns パースされたオブジェクト
 */
export const readYamlFile =
  <Default extends object>({ defaultTo }: { defaultTo: Default }) =>
  (filePath: string): object | Default => {
    if (!existsSync(filePath)) {
      return defaultTo;
    }
    const fileContent = readFileSync(filePath, "utf8");
    if (!fileContent) {
      return defaultTo;
    }
    const loaded = yaml.load(fileContent);
    if (!isObjectType(loaded)) {
      return defaultTo;
    }
    return loaded;
  };
