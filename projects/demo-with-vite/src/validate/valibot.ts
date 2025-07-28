import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/valibot";
import { adapt } from "@ts-validator-adapter/valibot";

export const validateSignup = adapt(schema);
