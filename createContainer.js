import bundler_runtime_base from '@module-federation/webpack-bundler-runtime'
export default ({exposes, name, remotes, shared}) => {

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

      if (!__webpack_require__.federation.instance) {

        __webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
        if (__webpack_require__.federation.attachShareScopeMap) {
          __webpack_require__.federation.attachShareScopeMap(__webpack_require__)
        }
        if (__webpack_require__.federation.installInitialConsumes) {
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
            "alias": remote.alias,
            "name": remote.name,
            "entry": remote.entry,
            "shareScope": remote.shareScope || "default"
          }))
        },
        chunkMatcher: function (chunkId) {
          return !/^webpack_sharing_consume_default_(|lodash_lodash\-webpack_sharing_consume_default_)react_react$/.test(chunkId)
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
    __webpack_require__.S = {};
    var initPromises = {};
    var initTokens = {};
    __webpack_require__.I = (name, initScope) => {
      if (!initScope) initScope = [];
      // handling circular init calls
      var initToken = initTokens[name];
      if (!initToken) initToken = initTokens[name] = {};
      if (initScope.indexOf(initToken) >= 0) return;
      initScope.push(initToken);
      // only runs once
      if (initPromises[name]) return initPromises[name];
      // creates a new share scope if needed
      if (!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
      // runs all init snippets from all modules reachable
      var scope = __webpack_require__.S[name];
      var warn = (msg) => {
        if (typeof console !== "undefined" && console.warn) console.warn(msg);
      };
      var uniqueName = "offline-remote_app2";
      var register = (name, version, factory, eager) => {
        var versions = scope[name] = scope[name] || {};
        var activeVersion = versions[version];
        if (!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = {
          get: factory,
          from: uniqueName,
          eager: !!eager
        };
      };
      var initExternal = (id) => {
        var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
        try {
          var module = __webpack_require__(id);
          if (!module) return;
          var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
          if (module.then) return promises.push(module.then(initFn, handleError));
          var initResult = initFn(module);
          if (initResult && initResult.then) return promises.push(initResult['catch'](handleError));
        } catch (err) {
          handleError(err);
        }
      }
      var promises = [];
      switch (name) {
        case "default": {
          // share not connected yet
          // register("lodash", "3.10.1", () => (__webpack_require__.e("vendors-node_modules_pnpm_lodash_3_10_1_node_modules_lodash_index_js").then(() => (() => (__webpack_require__(/*! ../../../node_modules/.pnpm/lodash@3.10.1/node_modules/lodash/index.js */ "../../../node_modules/.pnpm/lodash@3.10.1/node_modules/lodash/index.js"))))));
          // register("react-dom", "16.14.0", () => (Promise.all([__webpack_require__.e("vendors-node_modules_pnpm_react-dom_16_14_0_react_16_14_0_node_modules_react-dom_index_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => (() => (__webpack_require__(/*! ../../../node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js */ "../../../node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js"))))));
          // register("react", "16.14.0", () => (Promise.all([__webpack_require__.e("vendors-node_modules_pnpm_react_16_14_0_node_modules_react_index_js"), __webpack_require__.e("node_modules_pnpm_object-assign_4_1_1_node_modules_object-assign_index_js-node_modules_pnpm_p-178302")]).then(() => (() => (__webpack_require__(/*! ../../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js */ "../../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"))))));
        }
          break;
      }
      if (!promises.length) return initPromises[name] = 1;
      return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
    };
  })();

  /* webpack/runtime/sharing */
  (() => {

    console.log('shared', shared)
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
      "webpack/sharing/consume/default/react/react?9c7e": {
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
        shareKey: "react",
      },
      "webpack/sharing/consume/default/react/react?eb04": {
        getter: () => (Promise.all([__webpack_require__.e("vendors-node_modules_pnpm_react_16_14_0_node_modules_react_index_js"), __webpack_require__.e("node_modules_pnpm_object-assign_4_1_1_node_modules_object-assign_index_js-node_modules_pnpm_p-178302")]).then(() => (() => (__webpack_require__(/*! react */ "../../../node_modules/.pnpm/react@16.14.0/node_modules/react/index.js"))))),
        shareInfo: {
          shareConfig: {
            "fixedDependencies": false,
            "requiredVersion": "^16.13.0",
            "strictVersion": false,
            "singleton": true,
            "eager": false
          },
          scope: ["default"],
        },
        shareKey: "react",
      },
      "webpack/sharing/consume/default/lodash/lodash": {
        getter: () => (__webpack_require__.e("vendors-node_modules_pnpm_lodash_3_10_1_node_modules_lodash_index_js").then(() => (() => (__webpack_require__(/*! lodash */ "../../../node_modules/.pnpm/lodash@3.10.1/node_modules/lodash/index.js"))))),
        shareInfo: {
          shareConfig: {
            "fixedDependencies": false,
            "requiredVersion": "^3.10.1",
            "strictVersion": true,
            "singleton": false,
            "eager": false
          },
          scope: ["default"],
        },
        shareKey: "lodash",
      }
    };
    // no consumes in initial chunks
    var chunkMapping = {
      "webpack_sharing_consume_default_react_react": [
        "webpack/sharing/consume/default/react/react?9c7e"
      ],
      "webpack_sharing_consume_default_lodash_lodash-webpack_sharing_consume_default_react_react": [
        "webpack/sharing/consume/default/react/react?eb04",
        "webpack/sharing/consume/default/lodash/lodash"
      ]
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
      "app2": 0
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

    __webpack_require__.f.j = (chunkId, promises) => {
      // import() chunk loading for javascript
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
      if (installedChunkData !== 0) { // 0 means "already installed".

        // a Promise means "currently loading".
        if (installedChunkData) {
          promises.push(installedChunkData[1]);
        } else {
          if (!/^webpack_sharing_consume_default_(|lodash_lodash\-webpack_sharing_consume_default_)react_react$/.test(chunkId)) {
            const importFactory = (path) => import(path)
            // setup Promise in chunk cache
            var promise = importFactory("./" + __webpack_require__.u(chunkId)).then(installChunk, (e) => {
              if (installedChunks[chunkId] !== 0) installedChunks[chunkId] = undefined;
              throw e;
            });
            var promise = Promise.race([promise, new Promise((resolve) => (installedChunkData = installedChunks[chunkId] = [resolve]))])
            promises.push(installedChunkData[1] = promise);
          } else installedChunks[chunkId] = 0;
        }
      }
    };

    // no external install chunk

    // no on chunks loaded
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

