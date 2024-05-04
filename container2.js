import createContainer from './createContainer'

const createdContainer = createContainer({
  name: '@my',
  exposes: {
    './remote': ()=> import('./remote'),
  },
  remotes: [
    {
      type:'esm',
      name: "other",
      // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
      // Preloading depends on the use of the mf-manifest.json file type
      entry: "http://localhost:3000/remote2.js",
      alias: "other"
    },
  ],
  shared: {
    react: {
      version: '18.0.0',
      scope: 'default',
      get: async () => await import('https://esm.sh/react'),
      shareConfig: {
        singleton: true,
        requiredVersion: '^18.0.0',
      },
    },
  },
})

export const get = async (a,b)=> (await createdContainer).get(a,b)
export const init = async (a,b) => (await createdContainer).init(a,b)
export const moduleMap = async ()=> (await createdContainer).moduleMap // needs to be exposed from my runtime or plugin or use json remote
