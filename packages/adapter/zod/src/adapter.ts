import { type Writeable } from "zod";
import { z } from "zod/v4";
import { $ZodType, type $ZodLooseShape } from "zod/v4/core";

export function adapt<
  T extends $ZodLooseShape = Partial<Record<never, $ZodType>>
>(schema: z.ZodObject<Writeable<T> & {}>) {
  return (input: unknown) => {
    const result = schema.safeParse(input);
    if (result.success) {
      // It does not work well with `satisfies Success`
      return { success: true, data: result.data } as const;
    }
    return { success: false, errors: result.error } as const;
  };
}

export function toJsonSchema<
  T extends $ZodLooseShape = Partial<Record<never, $ZodType>>
>(schema: z.ZodObject<Writeable<T> & {}>) {
  return z.toJSONSchema(schema);
}
