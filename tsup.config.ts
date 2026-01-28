import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts", "icons.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
})
