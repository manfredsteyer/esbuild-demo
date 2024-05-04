const esbuild = require("esbuild");
const demoEsBuildPlugin = require("./demo-esbuild-plugin.js");
const fs = require('fs');


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
    plugins: [demoEsBuildPlugin],
    loader: { ".ts": "ts" },

    // Setting write to false gives us the possibility
    // to manually write and perhaps transform the bundles,
    // as in the then clause below
    write: false
  }).then(result => {

    // Manually writing files
    if (result.outputFiles) {
      result.outputFiles.forEach(file => {
        fs.mkdirSync(require('path').dirname(file.path), { recursive: true });

        // Add comment for demo purposes
        fs.writeFileSync(file.path, '// Built with esbuild\n\n' + file.text);
        console.log(`Wrote file: ${file.path}`);
      });
    }
  })
  .catch((err) => console.error(err));
