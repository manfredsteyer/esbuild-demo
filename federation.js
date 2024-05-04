import {init, loadRemote} from "@module-federation/runtime";

function encodeInlineESM(code) {
  // Encode the JavaScript code
  const encodedCode = encodeURIComponent(code);

  // Create the inline ESM string
  const inlineESM = `data:text/javascript;charset=utf-8,${encodedCode}`;

  return inlineESM;
}

const instantiatePatch = (federationOptions) => {

  init(federationOptions);

// Usage
  const code = `
// find this FederationHost instance. 
// Each virtual module needs to know what FederationHost to connect to for loading modules
const container = __FEDERATION__.__INSTANCES__.find(container=>{
  return container.name === ${JSON.stringify(federationOptions.name)}
})
// Federation Runtime takes care of script injection
export default await container.loadRemote('@my/remote')
`;

  const inlineESM = encodeInlineESM(code);

  const importMap = {
    imports: {}
  }

//@ts-ignore
  importMap.imports['@my/remote'] = inlineESM;
//@ts-ignore
  importShim.addImportMap(importMap);
}

export default instantiatePatch
