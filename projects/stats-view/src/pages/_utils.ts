import fs from "fs";
import path from "path";

export function getFilePreview(
  filename: string,
  startLine: number = 1,
  endLine: number = 10,
): string {
  try {
    const filePath = path.join(
      import.meta.dirname,
      "../../public/analyze",
      filename,
    );
    const content = fs.readFileSync(filePath).toString("utf8");

    // Get lines from x to y (1-based index)
    const allLines = content.split("\n");
    const previewLines = allLines.slice(startLine - 1, endLine);

    return previewLines.join("\n");
  } catch (error) {
    return `Error reading ${filename}`;
  }
}
