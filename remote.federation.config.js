const { withFederation, shareAll } = require('@module-federation/esbuild/build');

module.exports = withFederation({
  name: 'remote',
  filename: './remoteEntry.js',
  exposes: {
    './remote': './bootstrap-remote',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false,
    }),
  },
});

