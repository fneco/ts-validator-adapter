import { resolve } from "path";

export const projectDir = import.meta.dirname;
export const generateFolder = "generated";
export const distributeFolder = "dist";
export const absGeneratedPath = resolve(projectDir, generateFolder);
export const absDistributePath = resolve(projectDir, distributeFolder);
