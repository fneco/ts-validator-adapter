import * as v from "valibot"; // 1.31 kB

export const schema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
  addresses: v.array(
    v.object({
      address: v.string(),
      isPrimary: v.optional(v.boolean()),
    })
  ),
});

export type Data = v.InferOutput<typeof schema>;
