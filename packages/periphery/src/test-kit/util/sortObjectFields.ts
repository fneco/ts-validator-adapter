import { isArray, isString } from "remeda";

export function sortObjectFields<T extends Record<string, any>>(
  obj: T,
  compareFn?: (a: string, b: string) => number
): T {
  const ret: Record<string, any> = {};

  const sortedKeys = Object.keys(obj).sort(compareFn);

  for (const key of sortedKeys) {
    ret[key] = sortIfArray(obj[key]);
  }

  return ret as T;
}

function sortIfArray<T>(
  obj: T,
  compareFn?: (a: string, b: string) => number
): T {
  if (isArray(obj) && obj.every(isString)) {
    return [...obj].sort(compareFn) as T;
  }
  return obj;
}
