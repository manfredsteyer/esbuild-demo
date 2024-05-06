const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

function createVirtualModuleShare(name, ref, exports) {
  const code = `
// find this FederationHost instance. 
// Each virtual module needs to know what FederationHost to connect to for loading modules
const container = __FEDERATION__.__INSTANCES__.find(container=>{
  return container.name === ${JSON.stringify(name)}
})
// Federation Runtime takes care of script injection
const mfLsZJ92 = await container.loadShare(${JSON.stringify(ref)})

${exports.map((e)=>{

    if(e === 'default') return `export default mfLsZJ92.default`
    return `export const ${e} = mfLsZJ92[${JSON.stringify(e)}];`
  }).join('\n')}
`;
  return code
}

const cwd = process.cwd()
const externalDir = path.join(cwd, 'dist/external');

if (!fs.existsSync(externalDir)) {
  fs.mkdirSync(externalDir, { recursive: true });
}

esbuild
  .build({
    entryPoints: {
      rxjs: "node_modules/rxjs/dist/esm/index.js",
      react: "node_modules/react"
    },
    metafile: true,
    bundle: true,
    outdir: externalDir,
    platform: "browser",
    target: "es2020",
    sourcemap: true,
    minify: false,
    format: "esm",
    loader: {".ts": "ts"},
    write: false,
  }).then(result => {
  result.outputFiles.forEach(file => {
    let filename = path.basename(file.path);
    let originalFile = file.path
    if (file.path.endsWith(".js")) {
      file.path = file.path.replace(filename, 'mf_' + filename);
      const exports = result.metafile.outputs[path.relative(cwd, originalFile)].exports

      fs.writeFileSync(file.path, createVirtualModuleShare('host', path.parse(originalFile).name, exports));
    }
    fs.writeFileSync(originalFile, file.text);
  })
})
  .catch((err) => console.error(err));
