import * as ajv from "@ts-validator-adapter/ajv";
import * as arktype from "@ts-validator-adapter/arktype";
import type { ValidationResult } from "@ts-validator-adapter/core/type";
import { packageInfo } from "@ts-validator-adapter/periphery/constant/package-info";
import * as typebox from "@ts-validator-adapter/typebox";
import * as valibot from "@ts-validator-adapter/valibot";
import * as zod from "@ts-validator-adapter/zod";
import * as zodMini from "@ts-validator-adapter/zod-mini";
import { testSuccessData } from "./testAdapter";
import { testToJsonSchema } from "./testToJsonSchema";

const packageNames = packageInfo.map((pkg) => pkg.shortName);
export type PackageNames = (typeof packageNames)[number];

function getFunctions(name: PackageNames) {
  const functions = {
    ajv,
    arktype,
    typebox,
    valibot,
    zod,
    ["zod-mini"]: zodMini,
  }[name];
  if (!functions) {
    throw new Error(`Unknown adapter: ${name}`);
  }
  return functions;
}

export function testKit<
  Input,
  Result extends ValidationResult<Input, any>
>(params: { name: PackageNames; schema: any; input: Input; result: Result }) {
  const { name, schema, input, result } = params;
  const { toJsonSchema } = getFunctions(name);

  testSuccessData(name, input, result);
  testToJsonSchema(name, toJsonSchema, schema);
}
