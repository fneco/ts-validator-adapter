import { adapt } from "@ts-validator-adapter/ajv";
import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { input } from "./input";
import { schema } from "./schema/ajv";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "ajv",
  schema,
  input,
  result,
});
