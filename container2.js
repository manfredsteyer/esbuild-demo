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
      entry: "http://localhost:3003/remote.js",
      alias: "other"
    },
  ],
})

export const get = createdContainer.get
export const init = createdContainer.init
