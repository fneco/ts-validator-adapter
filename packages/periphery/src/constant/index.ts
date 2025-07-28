import { packageInfo } from "./package-info";

const adapters = packageInfo.map((info) => info.shortName);

export { adapters };
export type AdapterNames = (typeof adapters)[number];
