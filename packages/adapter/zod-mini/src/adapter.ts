import {
  ZodMiniObject,
  toJSONSchema as toJSONSchemaOriginal,
} from "zod/v4-mini";
import { $ZodType, type $ZodLooseShape, type $strip } from "zod/v4/core";

type SomeType = $ZodType;
export function adapt<T extends $ZodLooseShape = Record<never, SomeType>>(
  schema: ZodMiniObject<T, $strip>
) {
  return (input: any) => {
    const result = schema.safeParse(input);
    if (result.success) {
      return { success: true, data: result.data } as const;
    }
    return { success: false, errors: result.error } as const;
  };
}

export function toJsonSchema<
  T extends $ZodLooseShape = Record<never, SomeType>
>(schema: ZodMiniObject<T, $strip>) {
  return toJSONSchemaOriginal(schema);
}
