// Demo Plugin
// More Details: https://esbuild.github.io/plugins/#using-plugins

module.exports = demoEsBuildPlugin = {
  name: 'demoEsBuildPlugin',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      const contents = await require('fs').promises.readFile(args.path, 'utf8');
      let modified = contents.replace(/(?<!pure)import\(/g, 'globalThis.import(');
       modified = modified.replace(/pureimport\(/g, 'import(');

      console.log(modified)
      return {
        contents: modified,
        loader: 'ts'
      };
    });
  }
};
