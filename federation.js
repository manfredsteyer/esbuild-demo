import {init, loadRemote} from "@module-federation/runtime";

function encodeInlineESM(code) {
  // Encode the JavaScript code
  const encodedCode = encodeURIComponent(code);

  // Create the inline ESM string
  const inlineESM = `data:text/javascript;charset=utf-8,${encodedCode}`;

  return inlineESM;
}

function createVirtualModule(name, ref) {
  const code = `
// find this FederationHost instance. 
// Each virtual module needs to know what FederationHost to connect to for loading modules
const container = __FEDERATION__.__INSTANCES__.find(container=>{
  return container.name === ${JSON.stringify(name)}
})
// Federation Runtime takes care of script injection
export default await container.loadRemote(${JSON.stringify(ref)})
`;

  return code;
}

function createVirtualModuleShare(name, ref) {
  const code = `
// find this FederationHost instance. 
// Each virtual module needs to know what FederationHost to connect to for loading modules
const container = __FEDERATION__.__INSTANCES__.find(container=>{
  return container.name === ${JSON.stringify(name)}
})
// Federation Runtime takes care of script injection
export default await container.loadShare(${JSON.stringify(ref)})
`;

  return code;
}
const instantiatePatch = async (federationOptions, skipInit) => {

  const importMap = {
    imports: {}
  }

  if(!skipInit) {
    // initalize federation
    init(federationOptions);
  }

  if(federationOptions.remotes) {
    federationOptions.remotes.forEach((remote) => {
      importMap.imports[remote.alias || remote.name] = remote.entry
    })


    const remotes = await Promise.all(federationOptions.remotes.map(async (remote) => {
      // extract expose maps from remotes
      const container = await import(remote.entry)
      const moduleMap = await container.moduleMap()
      return {...remote, moduleMap}
    }))

    remotes.forEach((remote) => {
      Object.keys(remote.moduleMap).forEach(k => {
        // build import maps for expose module maps
        k = k.replace('.', remote.alias || remote.name)
        importMap.imports[k] = encodeInlineESM(createVirtualModule(federationOptions.name, k))
      })
    })
  }

  if(federationOptions.shared) {
    const oimp = importShim.getImportMap();
    Object.keys(federationOptions.shared).forEach(share => {
      // already patched import map to federation
      if(oimp.imports[share]) return
      importMap.imports[share] = './external/mf_' + share + '.js'
      // importMap.imports[share] = encodeInlineESM(createVirtualModuleShare(federationOptions.name, share))
      // console.log(importMap.imports[share], share )
    })
  }

  //@ts-ignore
  importShim.addImportMap(importMap);
}

export default instantiatePatch
