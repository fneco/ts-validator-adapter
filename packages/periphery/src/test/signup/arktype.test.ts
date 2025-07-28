import { adapt } from "@ts-validator-adapter/arktype";
import { testKit } from "@ts-validator-adapter/periphery/test-kit";
import { input } from "./input";
import { schema } from "./schema/arktype";

const validate = adapt(schema);
const result = validate(input);

testKit({
  name: "arktype",
  schema,
  input,
  result,
});
