//@ts-nocheck

const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const {
  moduleFederationPlugin,
} = require('@module-federation/esbuild/esbuild-adapter');
const { federationBuilder } = require('@module-federation/esbuild/build');

async function buildProject() {
  const tsConfig = 'tsconfig.json';
  const outputPath = path.join('dist');



  const result = await esbuild.build({
    external: federationBuilder.externals,
    outdir: outputPath,
    bundle: true,
    platform: 'browser',
    format: 'esm',
    mainFields: ['es2020', 'browser', 'module', 'main'],
    conditions: ['es2020', 'es2015', 'module'],
    resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
    tsconfig: tsConfig,
    splitting: true,
    sourcemap: true,
    minify: false,
    loader: { ".ts": "ts" },
    plugins: [moduleFederationPlugin(require('./remote.federation.config'))],
  });

  // if (result.outputFiles) {
  //   for (const file of result.outputFiles) {
  //     fs.mkdirSync(path.dirname(file.path), { recursive: true });
  //     fs.writeFileSync(file.path, '// Built with esbuild\n\n' + file.text);
  //     console.log(`Wrote file: ${file.path}`);
  //   }
  // }
}

buildProject().catch((err) => console.error(err));

