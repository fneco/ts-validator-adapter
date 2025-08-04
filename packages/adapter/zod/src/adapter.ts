import { z } from "zod/v4";
import {
  $ZodType,
  type $strip,
  type $ZodLooseShape,
  type SomeType,
} from "zod/v4/core";

// Define Writeable utility type locally since it's not exported from zod v4
type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
} & {};

export function adapt<
  T extends $ZodLooseShape = Partial<Record<never, SomeType>>
>(schema: z.ZodObject<Writeable<T>, $strip>) {
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
