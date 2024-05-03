const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["host.ts"],
    external: ["@my/remote"],
    bundle: true,
    outfile: "dist/host.js",
    platform: "browser",
    target: "es2020",
    sourcemap: true,
    minify: false,
    format: "esm",
    loader: { ".ts": "ts" },
  })
  .catch(() => process.exit(1));
