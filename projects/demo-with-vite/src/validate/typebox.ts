import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/typebox";
import { adapt } from "@ts-validator-adapter/typebox";

export const validateSignup = adapt(schema);
