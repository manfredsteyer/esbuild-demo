const {
    withFederation,
    shareAll,
  } = require('@module-federation/esbuild/build');

  module.exports = withFederation({
    name: 'host',
    filename: './shell-remote.js',
    remotes: {
      'remote': 'http://localhost:3000/remoteEntry.js',
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
