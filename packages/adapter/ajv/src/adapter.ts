import type { Failure, Success } from "@ts-validator-adapter/core";
import addFormats from "ajv-formats";
import Ajv2020, { type JSONSchemaType } from "ajv/dist/2020";

export function adapt<T>(schema: JSONSchemaType<T>) {
  // https://ajv.js.org/json-schema.html#draft-2020-12
  const ajv = new Ajv2020();
  addFormats(ajv);
  const validate = ajv.compile(schema);
  return (input: any) => {
    if (validate(input)) {
      return { success: true, data: input } satisfies Success;
    }
    return { success: false, errors: validate.errors } satisfies Failure;
  };
}

export function toJsonSchema<T>(schema: JSONSchemaType<T>) {
  schema["$schema"] = "https://json-schema.org/draft/2020-12/schema";
  return schema;
}
