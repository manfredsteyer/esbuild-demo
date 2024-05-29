import {
  init
} from "./chunk-QGCPSAJB.js";
import "./chunk-CSAU5B4Q.js";

// remote.ts
var createVirtualRemoteModule = (name, ref, exports) => {
  const genExports = exports.map(
    (e) => e === "default" ? "export default mfLsZJ92.default;" : `export const ${e} = mfLsZJ92[${JSON.stringify(e)}];`
  ).join("");
  const loadRef = `const mfLsZJ92 = await container.loadRemote(${JSON.stringify(ref)});`;
  return `
        const container = __FEDERATION__.__INSTANCES__.find(container => container.name === name) || __FEDERATION__.__INSTANCES__[0];
        ${loadRef}
        ${genExports}
      `;
};
function encodeInlineESM(code) {
  return "data:text/javascript;charset=utf-8," + encodeURIComponent(code);
}
var runtimePlugin = () => ({
  name: "import-maps-plugin",
  async init(args) {
    const remotePrefetch = args.options.remotes.map(async (remote) => {
      console.log("remote", remote);
      if (remote.type === "esm") {
        await import(remote.entry);
      }
    });
    await Promise.all(remotePrefetch);
    if (typeof moduleMap !== "undefined") {
      const map = Object.keys(moduleMap).reduce((acc, expose) => {
        const importMap = importShim.getImportMap().imports;
        const key = args.origin.name + expose.replace(".", "");
        if (!importMap[key]) {
          const encodedModule = encodeInlineESM(
            createVirtualRemoteModule(args.origin.name, key, moduleMap[expose].exports)
          );
          acc[key] = encodedModule;
        }
        return acc;
      }, {});
      await importShim.addImportMap({ imports: map });
    }
    return args;
  }
});
init({
  name: "remote",
  remotes: [],
  shared: {
    "react": {
      "package": "react",
      "version": "18.3.1",
      "scope": "default",
      "get": async () => await import("./react-6PBZ6XWC.js"),
      "shareConfig": {
        "singleton": true,
        "requiredVersion": "^18.3.1",
        "eager": void 0,
        "strictVersion": true
      }
    },
    "rxjs": {
      "package": "rxjs",
      "version": "7.8.1",
      "scope": "default",
      "get": async () => await import("./rxjs-G6LWOP5S.js"),
      "shareConfig": {
        "singleton": true,
        "requiredVersion": "^7.8.1",
        "eager": void 0,
        "strictVersion": true
      }
    }
  },
  plugins: [runtimePlugin()]
});
(async () => {
  setTimeout(async () => {
    const bootstrap = (await import("./bootstrap-remote-Y2ZNTQER.js")).remote;
    bootstrap();
  }, 400);
})();
export {
  createVirtualRemoteModule
};
//# sourceMappingURL=remote.js.map
