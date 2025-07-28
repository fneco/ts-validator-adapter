import { describe, expect, it } from "vitest";
import { applyRecursively } from "./applyRecursively";

describe("applyRecursively", () => {
  const transformer = (obj: Record<string, any>) => {
    const transformed: Record<string, any> = {};
    for (const key in obj) {
      transformed[`${key}Transformed`] = obj[key];
    }
    return transformed;
  };

  it("should apply the transformer to all objects recursively", () => {
    const input = {
      a: {
        b: {
          c: "value1",
        },
        d: "value2",
      },
      e: "value3",
    };

    const expectedOutput = {
      aTransformed: {
        bTransformed: {
          cTransformed: "value1",
        },
        dTransformed: "value2",
      },
      eTransformed: "value3",
    };

    const result = applyRecursively(transformer)(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty objects", () => {
    const input = {};
    const result = applyRecursively(transformer)(input);
    expect(result).toEqual({});
  });

  it("should not transform non-object values", () => {
    const input = "string";
    // @ts-expect-error: input is not an object
    const result = applyRecursively(transformer)(input);
    expect(result).toEqual("string");
  });
});
