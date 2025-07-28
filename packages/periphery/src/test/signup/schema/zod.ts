import { z } from "zod/v4";

export const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
  addresses: z
    .object({
      address: z.string(),
      isPrimary: z.boolean().optional(),
    })
    .array(),
});

export type Data = z.infer<typeof schema>;
