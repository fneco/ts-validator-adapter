import { z } from "zod/v4-mini";

export const schema = z.object({
  email: z.pipe(z.string(), z.email()),
  password: z.string().check(z.minLength(8)),
  addresses: z.array(
    z.object({
      address: z.string(),
      isPrimary: z.optional(z.boolean()),
    })
  ),
});

export type Data = z.infer<typeof schema>;
