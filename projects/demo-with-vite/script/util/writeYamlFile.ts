import { makeDirFileSync } from "@fneco/node-util";
import * as yaml from "js-yaml";

/**
 * オブジェクトをYAML形式で指定されたパスに出力する関数
 * @param filePath 出力先のファイルパス
 * @param data 出力するオブジェクト
 */
export const writeYamlFile =
  (filePath: string) =>
  (data: any): void => {
    const yamlContent = yaml.dump(data);
    makeDirFileSync({ filePath, content: yamlContent });
  };
