import { isPlainObject } from "remeda";

export const applyRecursively = (
  objectTransformer: (obj: Record<string, any>) => Record<string, any>
) => {
  return (obj: Record<string, any>): Record<string, any> => {
    if (!isPlainObject(obj)) {
      return obj;
    }
    const result: Record<string, any> = {};
    for (const key in obj) {
      result[key] = applyRecursively(objectTransformer)(obj[key]);
    }
    return objectTransformer(result);
  };
};
