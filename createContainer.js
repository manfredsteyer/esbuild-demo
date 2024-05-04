import bundler_runtime_base from '@module-federation/webpack-bundler-runtime'
import instantiatePatch from "./federation";
export default async (federationOptions) => {
  await instantiatePatch(federationOptions, true)
  const {exposes, name, remotes = [], shared, plugins} = federationOptions
  var __webpack_modules__ = ({

    /***/
    "./node_modules/.federation/entry.1f2288102e035e2ed66b2efaf60ad043.js":
    /*!****************************************************************************!*\
    !*** ./node_modules/.federation/entry.1f2288102e035e2ed66b2efaf60ad043.js ***!
    \****************************************************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var bundler_runtime = /*#__PURE__*/__webpack_require__.n(bundler_runtime_base);
      var prevFederation = __webpack_require__.federation;
      __webpack_require__.federation = {}
      for (var key in (bundler_runtime())) {
        __webpack_require__.federation[key] = (bundler_runtime())[key];
      }
      for (var key in prevFederation) {
        __webpack_require__.federation[key] = prevFederation[key];
      }
      if(!__webpack_require__.federation.instance){
        const pluginsToAdd = plugins || []
        __webpack_require__.federation.initOptions.plugins = __webpack_require__.federation.initOptions.plugins ?
          __webpack_require__.federation.initOptions.plugins.concat(pluginsToAdd) : pluginsToAdd;
        __webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
        if(__webpack_require__.federation.attachShareScopeMap){
          __webpack_require__.federation.attachShareScopeMap(__webpack_require__)
        }
        if(__webpack_require__.federation.installInitialConsumes){
          __webpack_require__.federation.installInitialConsumes()
        }
      }

      /***/
    }),

    /***/
    "webpack/container/entry/app2":
    /*!***********************!*\
    !*** container entry ***!
    \***********************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {

      var moduleMap = {};
      for (var key in exposes) {
        if (Object.prototype.hasOwnProperty.call(exposes, key)) {
          moduleMap[key] = () => {
            return Promise.resolve(exposes[key]()).then((m) => {
              return () => m;
            });
          };
        }
      }
      var get = (module, getScope) => {
        __webpack_require__.R = getScope;
        getScope = (
          __webpack_require__.o(moduleMap, module)
            ? moduleMap[module]()
            : Promise.resolve().then(() => {
              throw new Error('Module "' + module + '" does not exist in container.');
            })
        );
        __webpack_require__.R = undefined;
        return getScope;
      };
      var init = (shareScope, initScope, remoteEntryInitOptions) => {
        return __webpack_require__.federation.bundlerRuntime.initContainerEntry({
          webpackRequire: __webpack_require__,
          shareScope: shareScope,
          initScope: initScope,
          remoteEntryInitOptions: remoteEntryInitOptions,
          shareScopeKey: "default"
        })
      };
      __webpack_require__(/*! ./node_modules/.federation/entry.1f2288102e035e2ed66b2efaf60ad043.js */ "./node_modules/.federation/entry.1f2288102e035e2ed66b2efaf60ad043.js")

// This exports getters to disallow modifications
      __webpack_require__.d(exports, {
        get: () => (get),
        init: () => (init),
        moduleMap: () => (moduleMap),
      });

      /***/
    })

  });
  /************************************************************************/
// The module cache
  var __webpack_module_cache__ = {};

// The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = __webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {}
    };

    // Execute the module function
    var execOptions = {
      id: moduleId,
      module: module,
      factory: __webpack_modules__[moduleId],
      require: __webpack_require__
    };
    __webpack_require__.i.forEach(function (handler) {
      handler(execOptions);
    });
    module = execOptions.module;
    execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

    // Flag the module as loaded
    module.loaded = true;

    // Return the exports of the module
    return module.exports;
  }

// expose the modules object (__webpack_modules__)
  __webpack_require__.m = __webpack_modules__;

// expose the module cache
  __webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
  __webpack_require__.i = [];

  /************************************************************************/
  /* webpack/runtime/federation runtime */
  (() => {
    if (!__webpack_require__.federation) {
      __webpack_require__.federation = {
        initOptions: {
          "name": name,
          "remotes": remotes.map(remote => ({
            "type": remote.type,
            "alias": remote.alias,
            "name": remote.name,
            "entry": remote.entry,
            "shareScope": remote.shareScope || "default"
          }))
        },
        chunkMatcher: function (chunkId) {
          return true
        },
        rootOutputDir: "",
        initialConsumes: undefined,
        bundlerRuntimeOptions: {}
      };
    }
  })();

  /* webpack/runtime/compat get default export */
  (() => {
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = (module) => {
      var getter = module && module.__esModule ?
        () => (module['default']) :
        () => (module);
      __webpack_require__.d(getter, {a: getter});
      return getter;
    };
  })();

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
        }
      }
    };
  })();

  /* webpack/runtime/ensure chunk */
  (() => {
    __webpack_require__.f = {};
    // This file contains only the entry chunk.
    // The chunk loading function for additional chunks
    __webpack_require__.e = (chunkId) => {
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        __webpack_require__.f[key](chunkId, promises);
        return promises;
      }, []));
    };
  })();

  /* webpack/runtime/get javascript chunk filename */
  (() => {
    // This function allow to reference async chunks
    __webpack_require__.u = (chunkId) => {
      // return url for filenames based on template
      return "" + chunkId + ".mjs";
    };
  })();

  /* webpack/runtime/global */
  (() => {
    __webpack_require__.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })();
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
      }
      Object.defineProperty(exports, '__esModule', {value: true});
    };
  })();

  /* webpack/runtime/node module decorator */
  (() => {
    __webpack_require__.nmd = (module) => {
      module.paths = [];
      if (!module.children) module.children = [];
      return module;
    };
  })();

  /* webpack/runtime/remotes loading */
  (() => {
    var chunkMapping = {};
    var idToExternalAndNameMapping = {};
    var idToRemoteMap = {};
    __webpack_require__.federation.bundlerRuntimeOptions.remotes = {
      idToRemoteMap,
      chunkMapping,
      idToExternalAndNameMapping,
      webpackRequire: __webpack_require__
    };
    __webpack_require__.f.remotes = (chunkId, promises) => {
      __webpack_require__.federation.bundlerRuntime.remotes({
        idToRemoteMap,
        chunkMapping,
        idToExternalAndNameMapping,
        chunkId,
        promises,
        webpackRequire: __webpack_require__
      });
    }
  })();

  /* webpack/runtime/sharing */
  (() => {

    __webpack_require__.federation.initOptions.shared = shared
    __webpack_require__.S = {};
    var initPromises = {};
    var initTokens = {};
    __webpack_require__.I = (name, initScope) => {
      return __webpack_require__.federation.bundlerRuntime.I({
        shareScopeName: name,
        webpackRequire: __webpack_require__,
        initPromises: initPromises,
        initTokens: initTokens,
        initScope: initScope,
      })
    };
  })();

  /* webpack/runtime/consumes */
  (() => {
    var installedModules = {};
    var moduleToHandlerMapping = {
      "void": {
        getter: () => (__webpack_require__.e("vendors-node_modules_pnpm_react_16_14_0_node_modules_react_index_js").then(() => (() => (__webpack_require__(/*! react */ "../../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"))))),
        shareInfo: {
          shareConfig: {
            "fixedDependencies": false,
            "requiredVersion": "^16.14.0",
            "strictVersion": false,
            "singleton": true,
            "eager": false
          },
          scope: ["default"],
        },
        shareKey: "void",
      },
    };
    // no consumes in initial chunks
    var chunkMapping = {
      "void": [
        "void"
      ],
    };
    __webpack_require__.f.consumes = (chunkId, promises) => {
      __webpack_require__.federation.bundlerRuntime.consumes({
        chunkMapping: chunkMapping,
        installedModules: installedModules,
        chunkId: chunkId,
        moduleToHandlerMapping: moduleToHandlerMapping,
        promises: promises,
        webpackRequire: __webpack_require__
      });
    }
  })();

  /* webpack/runtime/import chunk loading */
  (() => {
    // no baseURI

    // object to store loaded and loading chunks
    // undefined = chunk not loaded, null = chunk preloaded/prefetched
    // [resolve, Promise] = chunk loading, 0 = chunk loaded
    var installedChunks = {
      [name]: 0
    };

    var installChunk = (data) => {
      var {ids, modules, runtime} = data;
      // add "modules" to the modules object,
      // then flag all "ids" as loaded and fire callback
      var moduleId, chunkId, i = 0;
      for (moduleId in modules) {
        if (__webpack_require__.o(modules, moduleId)) {
          __webpack_require__.m[moduleId] = modules[moduleId];
        }
      }
      if (runtime) runtime(__webpack_require__);
      for (; i < ids.length; i++) {
        chunkId = ids[i];
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          installedChunks[chunkId][0]();
        }
        installedChunks[ids[i]] = 0;
      }

    }
  })();

  /************************************************************************/

// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
  var __webpack_exports__ = __webpack_require__("webpack/container/entry/app2");
  var __webpack_exports__get = __webpack_exports__.get;
  var __webpack_exports__init = __webpack_exports__.init;
  return __webpack_exports__
}

