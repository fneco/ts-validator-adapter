import type { Failure, Success } from "@ts-validator-adapter/core";
import { Type, type } from "arktype";

export function adapt<t = unknown, $ = {}>(schema: Type<t, $>) {
  return (input: any) => {
    const result = schema(input);
    if (result instanceof type.errors) {
      return { success: false, errors: result } satisfies Failure;
    }
    return { success: true, data: result } satisfies Success;
  };
}

export function toJsonSchema<t = unknown, $ = {}>(schema: Type<t, $>) {
  return schema.toJsonSchema();
}
