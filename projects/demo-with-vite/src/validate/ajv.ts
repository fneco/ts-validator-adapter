import { adapt } from "@ts-validator-adapter/ajv";
import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/ajv";

export const validateSignup = adapt(schema);
