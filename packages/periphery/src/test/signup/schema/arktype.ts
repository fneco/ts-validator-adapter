import { type } from "arktype";

const PasswordSchema = type("string >= 8").configure({ actual: () => "" });

export const schema = type({
  email: "string.email",
  password: PasswordSchema,
  addresses: type({
    address: "string",
    "isPrimary?": "boolean",
  }).array(),
});

export type Data = typeof schema.infer;
