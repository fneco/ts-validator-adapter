import { relToAbs } from "@fneco/node-util";
import { describe, expect, it } from "vitest";
import { readYamlFile } from "./readYamlFile";
import { writeYamlFile } from "./writeYamlFile";

const abs = relToAbs.curried(import.meta.url);
const absPath = abs("yamlFile.yaml");
const data = { valibot: "16007", ["zod-mini"]: "35740" };

describe("writeYamlFile", () => {
  it("should write the YAML content to the specified file", () => {
    writeYamlFile(absPath)(data);
  });
});

describe("readYamlFile", () => {
  it("should read and parse the YAML content from the specified file", () => {
    const readData = readYamlFile({ defaultTo: {} })(absPath);
    expect(readData).toEqual(data);
  });

  it("should default value", () => {
    const readData = readYamlFile({ defaultTo: {} })(abs("not-exist.yaml"));
    expect(readData).toEqual({});
  });
});
