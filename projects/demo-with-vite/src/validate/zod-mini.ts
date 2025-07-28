import { schema } from "@ts-validator-adapter/periphery/src/test/signup/schema/zod-mini";
import { adapt } from "@ts-validator-adapter/zod-mini";

export const validateSignup = adapt(schema);
