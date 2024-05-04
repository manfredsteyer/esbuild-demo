const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: {
      rxjs: "node_modules/rxjs/dist/esm/index.js",
      react: "node_modules/react"
    },
    bundle: true,
// external:[''],
    outdir: "dist",
    platform: "browser",
    target: "es2020",
    sourcemap: true,
    minify: false,
    format: "esm",
    loader: { ".ts": "ts" },
    write: true,
  }).then(result => {
// Manually saving bundles to respective file names
})
  .catch((err) => console.error(err));
