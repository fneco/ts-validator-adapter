import { Type, type Static } from "@sinclair/typebox";

export const schema = Type.Object({
  email: Type.String({ pattern: "^[^@]+@[^@]+\\.[^@]+$" }),
  password: Type.String({ minLength: 8 }),
  addresses: Type.Array(
    Type.Object({
      address: Type.String(),
      isPrimary: Type.Optional(Type.Boolean()),
    })
  ),
});

export type Data = Static<typeof schema>;