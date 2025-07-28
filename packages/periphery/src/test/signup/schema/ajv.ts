import type { JSONSchemaType } from "ajv";
import type { Input } from "../input";

export const schema: JSONSchemaType<Input> = {
  type: "object",
  properties: {
    addresses: {
      items: {
        type: "object",
        properties: {
          address: {
            type: "string",
          },
          isPrimary: {
            type: "boolean",
            nullable: true,
          },
        },
        required: ["address"],
      },
      type: "array",
    },
    email: {
      format: "email",
      pattern: "^[\\w%+.-]+@[\\d.A-Za-z-]+\\.[A-Za-z]{2,}$",
      type: "string",
    },
    password: {
      minLength: 8,
      type: "string",
    },
  },
  required: ["email", "password", "addresses"],
};

export type Data = Input;
