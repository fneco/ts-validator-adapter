import { adapt } from "@ts-validator-adapter/arktype";
import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/arktype";

export const validateSignup = adapt(schema);
