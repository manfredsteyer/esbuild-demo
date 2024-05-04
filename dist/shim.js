// Built with esbuild

// shim.js
function encodeInlineESM(code2) {
  const encodedCode = encodeURIComponent(code2);
  const inlineESM2 = `data:text/javascript;charset=utf-8,${encodedCode}`;
  return inlineESM2;
}
var code = `
const container = __FEDERATION__.__INSTANCES__.find(container=>{
  return container.name === 'host'
})

export default await container.loadRemote('@my/remote')
`;
var inlineESM = encodeInlineESM(code);
var importMap = {
  imports: {}
};
importMap.imports["@my"] = "./remote.js";
importMap.imports["@my/remote"] = inlineESM;
importMap.imports["host"] = "./host.js";
importShim.addImportMap(importMap);
document.body.appendChild(Object.assign(document.createElement("script"), {
  type: "module-shim",
  src: "./host.js"
}));
//# sourceMappingURL=shim.js.map
