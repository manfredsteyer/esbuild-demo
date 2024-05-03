const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["remote.ts"],
    bundle: true,
    outfile: "dist/remote.js",
    platform: "browser",
    target: "es2020",
    sourcemap: true,
    minify: false,
    format: "esm",
    loader: { ".ts": "ts" },
  })
  .catch(() => process.exit(1));
