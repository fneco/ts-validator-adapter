import { build as viteBuild } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { analyze } from "./plugin/analyze";
import { visualizer } from "./plugin/visualizer";

export function build(params: { package: string }) {
  return viteBuild({
    build: {
      rollupOptions: {
        plugins: [visualizer(params), analyze(params)],
      },
    },
    plugins: [tsconfigPaths()],
  });
}
