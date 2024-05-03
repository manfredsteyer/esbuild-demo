// Demo Plugin
// More Details: https://esbuild.github.io/plugins/#using-plugins

module.exports = demoEsBuildPlugin = {
  name: 'demoEsBuildPlugin', 
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      const contents = await require('fs').promises.readFile(args.path, 'utf8');
      const modified = contents.replace(/__BUILD_DATE__/g, new Date().toISOString());

      return {
        contents: modified,
        loader: 'ts' 
      };
    });
  }
};
