//@ts-nocheck

const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const {
  moduleFederationPlugin,
} = require('@module-federation/esbuild/esbuild-adapter');
const { federationBuilder } = require('@module-federation/esbuild/build');

async function buildProject() {
  const projectName = 'host';
  const tsConfig = 'tsconfig.json';
  const outputPath = path.join('dist');

  await federationBuilder.init({
    options: {
      workspaceRoot: path.join(__dirname),
      outputPath,
      tsConfig,
      federationConfig: path.join('host.federation.config.js'),
      verbose: false,
      watch: false,
    },
  });


  const federationConfig = federationBuilder.config;

  const result = await esbuild.build({
    entryPoints: [path.join('host.ts')],
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
    plugins: [moduleFederationPlugin(federationBuilder)],
  });
}

buildProject().catch((err) => console.error(err));

