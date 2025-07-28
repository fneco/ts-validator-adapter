import { describe, expect, it } from "vitest";
import { sortObjectFields } from "./sortObjectFields";

describe("sortObjectFields", () => {
  it("should sort object fields alphabetically", () => {
    const input = { b: 2, a: 1, c: 3 };
    const result = sortObjectFields(input, (a, b) => a.localeCompare(b));
    const expected = { a: 1, b: 2, c: 3 };

    expect(result).toEqual(expected);
  });

  it("should sort object fields in reverse alphabetical order", () => {
    const input = { b: 2, a: 1, c: 3 };
    const result = sortObjectFields(input, (a, b) => b.localeCompare(a));
    const expected = { c: 3, b: 2, a: 1 };

    expect(result).toEqual(expected);
  });

  it("should handle an empty object", () => {
    const input = {};
    const result = sortObjectFields(input, (a, b) => a.localeCompare(b));
    const expected = {};

    expect(result).toEqual(expected);
  });

  it("should handle an object with one field", () => {
    const input = { a: 1 };
    const result = sortObjectFields(input, (a, b) => a.localeCompare(b));
    const expected = { a: 1 };

    expect(result).toEqual(expected);
  });

  it("should sort string array", () => {
    const input = { a: ["b", "a", "c"] };
    const result = sortObjectFields(input, (a, b) => a.localeCompare(b));
    const expected = { a: ["a", "b", "c"] };

    expect(result).toEqual(expected);
  });
});
