import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/zod";
import { adapt } from "@ts-validator-adapter/zod";

export const validateSignup = adapt(schema);
