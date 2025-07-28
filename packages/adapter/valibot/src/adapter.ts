import type { Failure, Success } from "@ts-validator-adapter/core";
import { toJsonSchema as toJsonSchemaOriginal } from "@valibot/to-json-schema";
import * as v from "valibot"; // 1.31 kB

export function adapt<const TEntries extends v.ObjectEntries>(
  schema: v.ObjectSchema<TEntries, undefined>
) {
  return (input: any) => {
    const result = v.safeParse(schema, input);
    if (result.success) {
      return { success: true, data: result.output } satisfies Success;
    }
    return { success: false, errors: result.issues } satisfies Failure;
  };
}

export function toJsonSchema<const TEntries extends v.ObjectEntries>(
  schema: v.ObjectSchema<TEntries, undefined>
) {
  return toJsonSchemaOriginal(schema);
}
