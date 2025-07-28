import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { adapt } from "@ts-validator-adapter/typebox";
import { input } from "./input";
import { schema } from "./schema/typebox";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "typebox",
  schema,
  input,
  result,
});
