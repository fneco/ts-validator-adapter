import type { Failure, Success } from "@ts-validator-adapter/core";
import { type TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export function adapt<T extends TSchema>(schema: T) {
  return (input: unknown) => {
    if (Value.Check(schema, input)) {
      return { success: true, data: input } satisfies Success;
    } else {
      const errors = [...Value.Errors(schema, input)];
      return { success: false, errors } satisfies Failure;
    }
  };
}

export function toJsonSchema<T extends TSchema>(schema: T) {
  return schema;
}