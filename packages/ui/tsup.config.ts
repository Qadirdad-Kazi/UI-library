import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  onSuccess: async () => {
    mkdirSync(join(__dirname, "dist"), { recursive: true });
    copyFileSync(
      join(__dirname, "src/styles.css"),
      join(__dirname, "dist/styles.css")
    );
  },
});
