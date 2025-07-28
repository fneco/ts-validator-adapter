import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { adapt } from "@ts-validator-adapter/zod-mini";
import { input } from "./input";
import { schema } from "./schema/zod-mini";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "zod-mini",
  schema,
  input,
  result,
});
