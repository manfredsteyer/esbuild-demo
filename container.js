
const __webpack_require__ = {};
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))

var moduleMap = {
  "./remote": () => {
    return import('./remote').then((m)=>{
      return ()=>m
    })
  }
};
export const get = (module, getScope) => {
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

export const init = ()=> {
  console.log('calling init');
}
