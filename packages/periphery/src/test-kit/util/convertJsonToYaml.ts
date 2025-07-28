import { dump } from "js-yaml";

/**
 * JSON文字列をYAMLに変換する関数
 * @param jsonString JSON文字列
 * @returns YAML文字列
 */
export function convertJsonToYaml<T>(object: T): string {
  return dump(object);
}
