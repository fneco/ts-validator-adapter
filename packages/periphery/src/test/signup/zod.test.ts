import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { adapt } from "@ts-validator-adapter/zod";
import { input } from "./input";
import { schema } from "./schema/zod";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "zod",
  schema,
  input,
  result,
});
