// TypeScript Limitation with is:inline:
// - When using is:inline, Astro bypasses all processing including TypeScript transpilation
// - Scripts with is:inline are rendered exactly as written without type checking or compilation
// - Therefore, this script must be written in plain JavaScript, not TypeScript

// Check system preference and apply theme immediately
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
