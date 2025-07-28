import { type ValidationResult } from "@ts-validator-adapter/core";
import { type PackageNames } from "@ts-validator-adapter/periphery/test-kit";
import { expect, test } from "vitest";

export function testSuccessData<
  Input,
  Result extends ValidationResult<Input, any>
>(testName: PackageNames, input: Input, result: Result) {
  test(`[testAdapter] ${testName}`, () => {
    expect(result.success).toBe(true);
    expect(result.data).toEqual(input);
  });
}
