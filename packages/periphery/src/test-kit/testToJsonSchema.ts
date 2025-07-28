import { type PackageNames } from "@ts-validator-adapter/periphery/test-kit";
import {
  applyRecursively,
  convertJsonToYaml,
  sortObjectFields,
} from "@ts-validator-adapter/periphery/test-kit/util";
import { pipe } from "remeda";
import { expect, test } from "vitest";

const folder = "json-schema";

export function testToJsonSchema(
  testName: PackageNames,
  toJsonSchema: (schema: any) => any,
  schema: any
) {
  test(`[testToJsonSchema] ${testName}`, async () => {
    const yaml = pipe(
      schema,
      toJsonSchema,
      applyRecursively(sortObjectFields),
      convertJsonToYaml
    );
    await expect(yaml).toMatchFileSnapshot(
      `./${folder}/${testName}.schema.yaml`
    );
  });
}
