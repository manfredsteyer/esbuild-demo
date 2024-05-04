const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["container3.js"],
    bundle: true,
    external:['react'],
    outfile: "dist/remote2.js",
    platform: "browser",
    target: "es2020",
    sourcemap: true,
    minify: false,
    format: "esm",
    loader: { ".ts": "ts" },
    write: true,
  })
  .catch((err) => console.error(err));
