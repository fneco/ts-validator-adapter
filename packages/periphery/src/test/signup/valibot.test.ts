import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { adapt } from "@ts-validator-adapter/valibot";
import { input } from "./input";
import { schema } from "./schema/valibot";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "valibot",
  schema,
  input,
  result,
});
