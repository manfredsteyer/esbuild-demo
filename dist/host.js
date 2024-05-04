// Built with esbuild

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error3) {
    e = { error: error3 };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v) {
    if (f2(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error3) {
  return createNotification("E", void 0, error3);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error3) {
  return {
    kind,
    value,
    error: error3
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb2) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb2();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error3 = _a.error;
      context = null;
      if (errorThrown) {
        throw error3;
      }
    }
  } else {
    cb2();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error3, complete) {
    return new SafeSubscriber(next, error3, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error3) {
        handleUnhandledError(error3);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error3) {
        handleUnhandledError(error3);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error3) {
        handleUnhandledError(error3);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error3, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error3 !== null && error3 !== void 0 ? error3 : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error3) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error3);
  } else {
    reportUnhandledError(error3);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error3, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error3, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init2) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init2(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process2(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process2(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/@module-federation/runtime/dist/share.esm.js
function getBuilderId() {
  return typeof FEDERATION_BUILD_IDENTIFIER !== "undefined" ? FEDERATION_BUILD_IDENTIFIER : "";
}
function isDebugMode() {
  return Boolean("");
}
function isBrowserEnv() {
  return typeof window !== "undefined";
}
var LOG_CATEGORY = "[ Federation Runtime ]";
function assert(condition, msg) {
  if (!condition) {
    error(msg);
  }
}
function error(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    throw msg;
  }
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    console.warn(msg);
  } else {
    console.warn(`${LOG_CATEGORY}: ${msg}`);
  }
}
function addUniqueItem(arr, item) {
  if (arr.findIndex((name2) => name2 === item) === -1) {
    arr.push(item);
  }
  return arr;
}
function getFMId(remoteInfo) {
  if ("version" in remoteInfo && remoteInfo.version) {
    return `${remoteInfo.name}:${remoteInfo.version}`;
  } else if ("entry" in remoteInfo && remoteInfo.entry) {
    return `${remoteInfo.name}:${remoteInfo.entry}`;
  } else {
    return `${remoteInfo.name}`;
  }
}
function isRemoteInfoWithEntry(remote) {
  return typeof remote.entry !== "undefined";
}
function isPureRemoteEntry(remote) {
  return !remote.entry.includes(".json") && remote.entry.includes(".js");
}
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return "";
  }
}
function isObject(val) {
  return val && typeof val === "object";
}
var objectToString = Object.prototype.toString;
function isPlainObject(val) {
  return objectToString.call(val) === "[object Object]";
}
function arrayOptions(options) {
  return Array.isArray(options) ? options : [
    options
  ];
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var nativeGlobal = (() => {
  try {
    return new Function("return this")();
  } catch (e) {
    return globalThis;
  }
})();
var Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
  Object.defineProperty(target, key, {
    value: val,
    configurable: false,
    writable: true
  });
}
function includeOwnProperty(target, key) {
  return Object.hasOwnProperty.call(target, key);
}
if (!includeOwnProperty(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__")) {
  definePropertyGlobalVal(globalThis, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
}
var globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
  var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
  if (includeOwnProperty(target, "__VMOK__") && !includeOwnProperty(target, "__FEDERATION__")) {
    definePropertyGlobalVal(target, "__FEDERATION__", target.__VMOK__);
  }
  if (!includeOwnProperty(target, "__FEDERATION__")) {
    definePropertyGlobalVal(target, "__FEDERATION__", {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    });
    definePropertyGlobalVal(target, "__VMOK__", target.__FEDERATION__);
  }
  var ___GLOBAL_PLUGIN__;
  (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
  var ___INSTANCES__;
  (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
  var _moduleInfo;
  (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
  var ___SHARE__;
  (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
  var ___MANIFEST_LOADING__;
  (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
  var ___PRELOADED_MAP__;
  (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = /* @__PURE__ */ new Map();
}
setGlobalDefaultVal(globalThis);
setGlobalDefaultVal(nativeGlobal);
function getGlobalFederationInstance(name2, version) {
  const buildId = getBuilderId();
  return globalThis.__FEDERATION__.__INSTANCES__.find((GMInstance) => {
    if (buildId && GMInstance.options.id === getBuilderId()) {
      return true;
    }
    if (GMInstance.options.name === name2 && !GMInstance.options.version && !version) {
      return true;
    }
    if (GMInstance.options.name === name2 && version && GMInstance.options.version === version) {
      return true;
    }
    return false;
  });
}
function setGlobalFederationInstance(FederationInstance2) {
  globalThis.__FEDERATION__.__INSTANCES__.push(FederationInstance2);
}
function getGlobalFederationConstructor() {
  return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = isDebugMode()) {
  if (isDebug) {
    globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
    globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.1.11";
  }
}
function getInfoWithoutType(target, key) {
  if (typeof key === "string") {
    const keyRes = target[key];
    if (keyRes) {
      return {
        value: target[key],
        key
      };
    } else {
      const targetKeys = Object.keys(target);
      for (const targetKey of targetKeys) {
        const [targetTypeOrName, _] = targetKey.split(":");
        const nKey = `${targetTypeOrName}:${key}`;
        const typeWithKeyRes = target[nKey];
        if (typeWithKeyRes) {
          return {
            value: typeWithKeyRes,
            key: nKey
          };
        }
      }
      return {
        value: void 0,
        key
      };
    }
  } else {
    throw new Error("key must be string");
  }
}
var getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo;
var getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot) => {
  const moduleKey = getFMId(moduleInfo);
  const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
  if (getModuleInfo && !getModuleInfo.version && "version" in moduleInfo && moduleInfo["version"]) {
    getModuleInfo.version = moduleInfo["version"];
  }
  if (getModuleInfo) {
    return getModuleInfo;
  }
  if ("version" in moduleInfo && moduleInfo["version"]) {
    const { version } = moduleInfo, resModuleInfo = _object_without_properties_loose(moduleInfo, [
      "version"
    ]);
    const moduleKeyWithoutVersion = getFMId(resModuleInfo);
    const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
    if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
      return getModuleInfoWithoutVersion;
    }
  }
  return;
};
var getGlobalSnapshotInfoByModuleInfo = (moduleInfo) => getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
var setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo) => {
  const moduleKey = getFMId(remoteInfo);
  nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
  return nativeGlobal.__FEDERATION__.moduleInfo;
};
var addGlobalSnapshot = (moduleInfos) => {
  nativeGlobal.__FEDERATION__.moduleInfo = _extends$1({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
  return () => {
    const keys = Object.keys(moduleInfos);
    for (const key of keys) {
      delete nativeGlobal.__FEDERATION__.moduleInfo[key];
    }
  };
};
var getRemoteEntryExports = (name2, globalName) => {
  const remoteEntryKey = globalName || `__FEDERATION_${name2}:custom__`;
  const entryExports = globalThis[remoteEntryKey];
  return {
    remoteEntryKey,
    entryExports
  };
};
var getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
var getPreloaded = (id) => globalThis.__FEDERATION__.__PRELOADED_MAP__.get(id);
var setPreloaded = (id) => globalThis.__FEDERATION__.__PRELOADED_MAP__.set(id, true);
var DEFAULT_SCOPE = "default";
var DEFAULT_REMOTE_TYPE = "global";
var buildIdentifier = "[0-9A-Za-z-]+";
var build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
var numericIdentifier = "0|[1-9]\\d*";
var numericIdentifierLoose = "[0-9]+";
var nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
var preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
var preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
var preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
var preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
var xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
var xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
var hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
var mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
var loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
var gtlt = "((?:<|>)?=?)";
var comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
var loneTilde = "(?:~>?)";
var tildeTrim = `(\\s*)${loneTilde}\\s+`;
var loneCaret = "(?:\\^)";
var caretTrim = `(\\s*)${loneCaret}\\s+`;
var star = "(<|>)?=?\\s*\\*";
var caret = `^${loneCaret}${xRangePlain}$`;
var mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
var fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
var tilde = `^${loneTilde}${xRangePlain}$`;
var xRange = `^${gtlt}\\s*${xRangePlain}$`;
var comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
var gte0 = "^\\s*>=\\s*0.0.0\\s*$";
function parseRegex(source) {
  return new RegExp(source);
}
function isXVersion(version) {
  return !version || version.toLowerCase() === "x" || version === "*";
}
function pipe(...fns) {
  return (x) => fns.reduce((v, f2) => f2(v), x);
}
function extractComparator(comparatorString) {
  return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease2) {
  const mainVersion2 = `${major}.${minor}.${patch}`;
  if (preRelease2) {
    return `${mainVersion2}-${preRelease2}`;
  }
  return mainVersion2;
}
function parseHyphen(range) {
  return range.replace(parseRegex(hyphenRange), (_range, from2, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
    if (isXVersion(fromMajor)) {
      from2 = "";
    } else if (isXVersion(fromMinor)) {
      from2 = `>=${fromMajor}.0.0`;
    } else if (isXVersion(fromPatch)) {
      from2 = `>=${fromMajor}.${fromMinor}.0`;
    } else {
      from2 = `>=${from2}`;
    }
    if (isXVersion(toMajor)) {
      to = "";
    } else if (isXVersion(toMinor)) {
      to = `<${Number(toMajor) + 1}.0.0-0`;
    } else if (isXVersion(toPatch)) {
      to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
    } else if (toPreRelease) {
      to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
    } else {
      to = `<=${to}`;
    }
    return `${from2} ${to}`.trim();
  });
}
function parseComparatorTrim(range) {
  return range.replace(parseRegex(comparatorTrim), "$1$2$3");
}
function parseTildeTrim(range) {
  return range.replace(parseRegex(tildeTrim), "$1~");
}
function parseCaretTrim(range) {
  return range.replace(parseRegex(caretTrim), "$1^");
}
function parseCarets(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease2) => {
    if (isXVersion(major)) {
      return "";
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      if (major === "0") {
        return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
      } else {
        return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
      }
    } else if (preRelease2) {
      if (major === "0") {
        if (minor === "0") {
          return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
        }
      } else {
        return `>=${major}.${minor}.${patch}-${preRelease2} <${Number(major) + 1}.0.0-0`;
      }
    } else {
      if (major === "0") {
        if (minor === "0") {
          return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        }
      }
      return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
    }
  })).join(" ");
}
function parseTildes(range) {
  return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease2) => {
    if (isXVersion(major)) {
      return "";
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
    } else if (preRelease2) {
      return `>=${major}.${minor}.${patch}-${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
    }
    return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
  })).join(" ");
}
function parseXRanges(range) {
  return range.split(/\s+/).map((rangeVersion) => rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt2, major, minor, patch, preRelease2) => {
    const isXMajor = isXVersion(major);
    const isXMinor = isXMajor || isXVersion(minor);
    const isXPatch = isXMinor || isXVersion(patch);
    if (gtlt2 === "=" && isXPatch) {
      gtlt2 = "";
    }
    preRelease2 = "";
    if (isXMajor) {
      if (gtlt2 === ">" || gtlt2 === "<") {
        return "<0.0.0-0";
      } else {
        return "*";
      }
    } else if (gtlt2 && isXPatch) {
      if (isXMinor) {
        minor = 0;
      }
      patch = 0;
      if (gtlt2 === ">") {
        gtlt2 = ">=";
        if (isXMinor) {
          major = Number(major) + 1;
          minor = 0;
          patch = 0;
        } else {
          minor = Number(minor) + 1;
          patch = 0;
        }
      } else if (gtlt2 === "<=") {
        gtlt2 = "<";
        if (isXMinor) {
          major = Number(major) + 1;
        } else {
          minor = Number(minor) + 1;
        }
      }
      if (gtlt2 === "<") {
        preRelease2 = "-0";
      }
      return `${gtlt2 + major}.${minor}.${patch}${preRelease2}`;
    } else if (isXMinor) {
      return `>=${major}.0.0${preRelease2} <${Number(major) + 1}.0.0-0`;
    } else if (isXPatch) {
      return `>=${major}.${minor}.0${preRelease2} <${major}.${Number(minor) + 1}.0-0`;
    }
    return ret;
  })).join(" ");
}
function parseStar(range) {
  return range.trim().replace(parseRegex(star), "");
}
function parseGTE0(comparatorString) {
  return comparatorString.trim().replace(parseRegex(gte0), "");
}
function compareAtom(rangeAtom, versionAtom) {
  rangeAtom = Number(rangeAtom) || rangeAtom;
  versionAtom = Number(versionAtom) || versionAtom;
  if (rangeAtom > versionAtom) {
    return 1;
  }
  if (rangeAtom === versionAtom) {
    return 0;
  }
  return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
  const { preRelease: rangePreRelease } = rangeAtom;
  const { preRelease: versionPreRelease } = versionAtom;
  if (rangePreRelease === void 0 && Boolean(versionPreRelease)) {
    return 1;
  }
  if (Boolean(rangePreRelease) && versionPreRelease === void 0) {
    return -1;
  }
  if (rangePreRelease === void 0 && versionPreRelease === void 0) {
    return 0;
  }
  for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
    const rangeElement = rangePreRelease[i];
    const versionElement = versionPreRelease[i];
    if (rangeElement === versionElement) {
      continue;
    }
    if (rangeElement === void 0 && versionElement === void 0) {
      return 0;
    }
    if (!rangeElement) {
      return 1;
    }
    if (!versionElement) {
      return -1;
    }
    return compareAtom(rangeElement, versionElement);
  }
  return 0;
}
function compareVersion(rangeAtom, versionAtom) {
  return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
  return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
  switch (rangeAtom.operator) {
    case "":
    case "=":
      return eq(rangeAtom, versionAtom);
    case ">":
      return compareVersion(rangeAtom, versionAtom) < 0;
    case ">=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
    case "<":
      return compareVersion(rangeAtom, versionAtom) > 0;
    case "<=":
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
    case void 0: {
      return true;
    }
    default:
      return false;
  }
}
function parseComparatorString(range) {
  return pipe(
    // handle caret
    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets,
    // handle tilde
    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes,
    parseXRanges,
    parseStar
  )(range);
}
function parseRange(range) {
  return pipe(
    // handle hyphenRange
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen,
    // handle trim comparator
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim,
    // handle trim tilde
    // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim,
    // handle trim caret
    // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim
  )(range.trim()).split(/\s+/).join(" ");
}
function satisfy(version, range) {
  if (!version) {
    return false;
  }
  const parsedRange = parseRange(range);
  const parsedComparator = parsedRange.split(" ").map((rangeVersion) => parseComparatorString(rangeVersion)).join(" ");
  const comparators = parsedComparator.split(/\s+/).map((comparator2) => parseGTE0(comparator2));
  const extractedVersion = extractComparator(version);
  if (!extractedVersion) {
    return false;
  }
  const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
  const versionAtom = {
    operator: versionOperator,
    version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
    major: versionMajor,
    minor: versionMinor,
    patch: versionPatch,
    preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split(".")
  };
  for (const comparator2 of comparators) {
    const extractedComparator = extractComparator(comparator2);
    if (!extractedComparator) {
      return false;
    }
    const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
    const rangeAtom = {
      operator: rangeOperator,
      version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
      major: rangeMajor,
      minor: rangeMinor,
      patch: rangePatch,
      preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split(".")
    };
    if (!compare(rangeAtom, versionAtom)) {
      return false;
    }
  }
  return true;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function formatShare(shareArgs, from2, name2) {
  let get;
  if ("get" in shareArgs) {
    get = shareArgs.get;
  } else if ("lib" in shareArgs) {
    get = () => Promise.resolve(shareArgs.lib);
  } else {
    get = () => Promise.resolve(() => {
      throw new Error(`Can not get shared '${name2}'!`);
    });
  }
  var _shareArgs_version, _shareArgs_scope;
  return _extends({
    deps: [],
    useIn: [],
    from: from2,
    loading: null
  }, shareArgs, {
    shareConfig: _extends({
      requiredVersion: `^${shareArgs.version}`,
      singleton: false,
      eager: false,
      strictVersion: false
    }, shareArgs.shareConfig),
    get,
    loaded: "lib" in shareArgs ? true : void 0,
    version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : "0",
    scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
      (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : "default"
    ],
    strategy: shareArgs.strategy || "version-first"
  });
}
function formatShareConfigs(shareArgs, from2) {
  if (!shareArgs) {
    return {};
  }
  return Object.keys(shareArgs).reduce((res, pkgName) => {
    const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
    res[pkgName] = res[pkgName] || [];
    arrayShareArgs.forEach((shareConfig) => {
      res[pkgName].push(formatShare(shareConfig, from2, pkgName));
    });
    return res;
  }, {});
}
function versionLt(a, b) {
  const transformInvalidVersion = (version) => {
    const isNumberVersion = !Number.isNaN(Number(version));
    if (isNumberVersion) {
      const splitArr = version.split(".");
      let validVersion = version;
      for (let i = 0; i < 3 - splitArr.length; i++) {
        validVersion += ".0";
      }
      return validVersion;
    }
    return version;
  };
  if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
    return true;
  } else {
    return false;
  }
}
var findVersion = (shareVersionMap, cb2) => {
  const callback = cb2 || function(prev, cur) {
    return versionLt(prev, cur);
  };
  return Object.keys(shareVersionMap).reduce((prev, cur) => {
    if (!prev) {
      return cur;
    }
    if (callback(prev, cur)) {
      return cur;
    }
    if (prev === "0") {
      return cur;
    }
    return prev;
  }, 0);
};
var isLoaded = (shared) => {
  return Boolean(shared.loaded) || typeof shared.lib === "function";
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function(prev, cur) {
    return !isLoaded(versions[prev]) && versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function(prev, cur) {
    if (isLoaded(versions[cur])) {
      if (isLoaded(versions[prev])) {
        return Boolean(versionLt(prev, cur));
      } else {
        return true;
      }
    }
    if (isLoaded(versions[prev])) {
      return false;
    }
    return versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
  if (strategy === "loaded-first") {
    return findSingletonVersionOrderByLoaded;
  }
  return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
  if (!localShareScopeMap) {
    return;
  }
  const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
  const scopes = Array.isArray(scope) ? scope : [
    scope
  ];
  for (const sc of scopes) {
    if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
      const { requiredVersion } = shareConfig;
      const findShareFunction = getFindShareFunction(strategy);
      const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
      const defaultResolver = () => {
        if (shareConfig.singleton) {
          if (typeof requiredVersion === "string" && !satisfy(maxOrSingletonVersion, requiredVersion)) {
            const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
            if (shareConfig.strictVersion) {
              error(msg);
            } else {
              warn(msg);
            }
          }
          return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
        } else {
          if (requiredVersion === false || requiredVersion === "*") {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          if (satisfy(maxOrSingletonVersion, requiredVersion)) {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) {
            if (satisfy(versionKey, requiredVersion)) {
              return versionValue;
            }
          }
        }
      };
      const params = {
        shareScopeMap: localShareScopeMap,
        scope: sc,
        pkgName,
        version: maxOrSingletonVersion,
        GlobalFederation: Global.__FEDERATION__,
        resolver: defaultResolver
      };
      const resolveShared = resolveShare.emit(params) || params;
      return resolveShared.resolver();
    }
  }
}
function getGlobalShareScope() {
  return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
  const { pkgName, extraOptions, shareInfos } = options;
  const defaultResolver = (sharedOptions) => {
    if (!sharedOptions) {
      return void 0;
    }
    const shareVersionMap = {};
    sharedOptions.forEach((shared) => {
      shareVersionMap[shared.version] = shared;
    });
    const callback = function(prev, cur) {
      return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
    };
    const maxVersion = findVersion(shareVersionMap, callback);
    return shareVersionMap[maxVersion];
  };
  var _extraOptions_resolver;
  const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
  return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}

// node_modules/@module-federation/sdk/dist/index.esm.js
function _define_property$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var FederationModuleManifest = "federation-manifest.json";
var MANIFEST_EXT = ".json";
var BROWSER_LOG_KEY = "FEDERATION_DEBUG";
var BROWSER_LOG_VALUE = "1";
var NameTransformSymbol = {
  AT: "@",
  HYPHEN: "-",
  SLASH: "/"
};
var _obj;
var NameTransformMap = (_obj = {}, _define_property$3(_obj, NameTransformSymbol.AT, "scope_"), _define_property$3(_obj, NameTransformSymbol.HYPHEN, "_"), _define_property$3(_obj, NameTransformSymbol.SLASH, "__"), _obj);
var _obj1;
var EncodedNameTransformMap = (_obj1 = {}, _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.AT], NameTransformSymbol.AT), _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.HYPHEN], NameTransformSymbol.HYPHEN), _define_property$3(_obj1, NameTransformMap[NameTransformSymbol.SLASH], NameTransformSymbol.SLASH), _obj1);
var SEPARATOR = ":";
var ManifestFileName = "mf-manifest.json";
var StatsFileName = "mf-stats.json";
var MFModuleType = {
  NPM: "npm",
  APP: "app"
};
var MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
var ContainerPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ContainerReferencePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var SharePlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
function isBrowserEnv2() {
  return typeof window !== "undefined";
}
function isDebugMode2() {
  if (typeof process !== "undefined" && process.env && process.env["FEDERATION_DEBUG"]) {
    return Boolean(process.env["FEDERATION_DEBUG"]);
  }
  return typeof FEDERATION_DEBUG !== "undefined" && Boolean(FEDERATION_DEBUG);
}
var getProcessEnv = function getProcessEnv2() {
  return typeof process !== "undefined" && process.env ? process.env : {};
};
function _array_like_to_array$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _array_without_holes(arr) {
  if (Array.isArray(arr))
    return _array_like_to_array$2(arr);
}
function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _create_class(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _define_property$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _iterable_to_array$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _non_iterable_spread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
  return _array_without_holes(arr) || _iterable_to_array$1(arr) || _unsupported_iterable_to_array$2(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _array_like_to_array$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _array_like_to_array$2(o, minLen);
}
function safeToString2(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return "";
  }
}
var DEBUG_LOG = "[ FEDERATION DEBUG ]";
function safeGetLocalStorageItem() {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
    }
  } catch (error3) {
    return typeof document !== "undefined";
  }
  return false;
}
var Logger = /* @__PURE__ */ function() {
  function Logger2(identifier) {
    _class_call_check(this, Logger2);
    _define_property$2(this, "enable", false);
    _define_property$2(this, "identifier", void 0);
    this.identifier = identifier || DEBUG_LOG;
    if (isBrowserEnv2() && safeGetLocalStorageItem()) {
      this.enable = true;
    } else if (isDebugMode2()) {
      this.enable = true;
    }
  }
  _create_class(Logger2, [
    {
      key: "info",
      value: function info(msg, info) {
        if (this.enable) {
          var argsToString = safeToString2(info) || "";
          if (isBrowserEnv2()) {
            console.info("%c ".concat(this.identifier, ": ").concat(msg, " ").concat(argsToString), "color:#3300CC");
          } else {
            console.info("\x1B[34m%s", "".concat(this.identifier, ": ").concat(msg, " ").concat(argsToString ? "\n".concat(argsToString) : ""));
          }
        }
      }
    },
    {
      key: "logOriginalInfo",
      value: function logOriginalInfo() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (this.enable) {
          if (isBrowserEnv2()) {
            var _console;
            console.info("%c ".concat(this.identifier, ": OriginalInfo"), "color:#3300CC");
            (_console = console).log.apply(_console, _to_consumable_array(args));
          } else {
            var _console1;
            console.info("%c ".concat(this.identifier, ": OriginalInfo"), "color:#3300CC");
            (_console1 = console).log.apply(_console1, _to_consumable_array(args));
          }
        }
      }
    }
  ]);
  return Logger2;
}();
function _array_like_to_array$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _array_with_holes$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterable_to_array(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterable_to_array_limit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _non_iterable_rest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array$1(arr, i) {
  return _array_with_holes$1(arr) || _iterable_to_array_limit$1(arr, i) || _unsupported_iterable_to_array$1(arr, i) || _non_iterable_rest$1();
}
function _to_array(arr) {
  return _array_with_holes$1(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array$1(arr) || _non_iterable_rest$1();
}
function _unsupported_iterable_to_array$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _array_like_to_array$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _array_like_to_array$1(o, minLen);
}
var LOG_CATEGORY2 = "[ Federation Runtime ]";
var parseEntry = function(str, devVerOrUrl) {
  var separator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : SEPARATOR;
  var strSplit = str.split(separator);
  var devVersionOrUrl = getProcessEnv()["NODE_ENV"] === "development" && devVerOrUrl;
  var defaultVersion = "*";
  var isEntry = function(s) {
    return s.startsWith("http") || s.includes(MANIFEST_EXT);
  };
  if (strSplit.length >= 2) {
    var _strSplit = _to_array(strSplit), name2 = _strSplit[0], versionOrEntryArr = _strSplit.slice(1);
    var versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name: name2,
        entry: versionOrEntry
      };
    } else {
      return {
        name: name2,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    var _strSplit1 = _sliced_to_array$1(strSplit, 1), name1 = _strSplit1[0];
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name: name1,
        entry: devVersionOrUrl
      };
    }
    return {
      name: name1,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw "Invalid entry value: ".concat(str);
  }
};
var logger = new Logger();
var composeKeyWithSeparator = function composeKeyWithSeparator2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (!args.length) {
    return "";
  }
  return args.reduce(function(sum, cur) {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return "".concat(sum).concat(SEPARATOR).concat(cur);
  }, "");
};
var encodeName = function encodeName2(name2) {
  var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", withExt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  try {
    var ext = withExt ? ".js" : "";
    return "".concat(prefix).concat(name2.replace(new RegExp("".concat(NameTransformSymbol.AT), "g"), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp("".concat(NameTransformSymbol.HYPHEN), "g"), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp("".concat(NameTransformSymbol.SLASH), "g"), NameTransformMap[NameTransformSymbol.SLASH])).concat(ext);
  } catch (err) {
    throw err;
  }
};
var decodeName = function decodeName2(name2, prefix, withExt) {
  try {
    var decodedName = name2;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, "g"), "");
    }
    decodedName = decodedName.replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.AT]), "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.SLASH]), "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.HYPHEN]), "g"), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace(".js", "");
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
var generateExposeFilename = function(exposeName, withExt) {
  if (!exposeName) {
    return "";
  }
  var expose = exposeName;
  if (expose === ".") {
    expose = "default_export";
  }
  if (expose.startsWith("./")) {
    expose = expose.replace("./", "");
  }
  return encodeName(expose, "__federation_expose_", withExt);
};
var generateShareFilename = function(pkgName, withExt) {
  if (!pkgName) {
    return "";
  }
  return encodeName(pkgName, "__federation_shared_", withExt);
};
var getResourceUrl = function(module, sourceUrl) {
  if ("getPublicPath" in module) {
    var publicPath = new Function(module.getPublicPath)();
    return "".concat(publicPath).concat(sourceUrl);
  } else if ("publicPath" in module) {
    return "".concat(module.publicPath).concat(sourceUrl);
  } else {
    console.warn("Can not get resource url, if in debug mode, please ignore", module, sourceUrl);
    return "";
  }
};
var assert2 = function(condition, msg) {
  if (!condition) {
    error2(msg);
  }
};
var error2 = function(msg) {
  throw new Error("".concat(LOG_CATEGORY2, ": ").concat(msg));
};
var warn2 = function(msg) {
  console.warn("".concat(LOG_CATEGORY2, ": ").concat(msg));
};
function _define_property$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _object_spread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _define_property$1(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var simpleJoinRemoteEntry = function(rPath, rName) {
  if (!rPath) {
    return rName;
  }
  var transformPath = function(str) {
    if (str === ".") {
      return "";
    }
    if (str.startsWith("./")) {
      return str.replace("./", "");
    }
    if (str.startsWith("/")) {
      var strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith("/")) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  var transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith("/")) {
    return "".concat(transformedPath).concat(rName);
  }
  return "".concat(transformedPath, "/").concat(rName);
};
function generateSnapshotFromManifest(manifest) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _manifest_metaData, _manifest_metaData1;
  var _options_remotes = options.remotes, remotes = _options_remotes === void 0 ? {} : _options_remotes, _options_overrides = options.overrides, overrides = _options_overrides === void 0 ? {} : _options_overrides, version = options.version;
  var remoteSnapshot;
  var getPublicPath = function() {
    if ("publicPath" in manifest.metaData) {
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  var overridesKeys = Object.keys(overrides);
  var remotesInfo = {};
  if (!Object.keys(remotes).length) {
    var _manifest_remotes;
    remotesInfo = ((_manifest_remotes = manifest.remotes) === null || _manifest_remotes === void 0 ? void 0 : _manifest_remotes.reduce(function(res, next) {
      var matchedVersion;
      var name3 = next.federationContainerName;
      if (overridesKeys.includes(name3)) {
        matchedVersion = overrides[name3];
      } else {
        if ("version" in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res[name3] = {
        matchedVersion
      };
      return res;
    }, {})) || {};
  }
  Object.keys(remotes).forEach(function(key) {
    return remotesInfo[key] = {
      // overrides will override dependencies
      matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
    };
  });
  var _manifest_metaData2 = manifest.metaData, _manifest_metaData_remoteEntry = _manifest_metaData2.remoteEntry, remoteEntryPath = _manifest_metaData_remoteEntry.path, remoteEntryName = _manifest_metaData_remoteEntry.name, remoteEntryType = _manifest_metaData_remoteEntry.type, remoteTypes = _manifest_metaData2.types, buildVersion = _manifest_metaData2.buildInfo.buildVersion, globalName = _manifest_metaData2.globalName;
  var exposes = manifest.exposes;
  var basicRemoteSnapshot = {
    version: version ? version : "",
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || "",
    remoteTypesAPI: remoteTypes.api || "",
    remotesInfo,
    shared: manifest === null || manifest === void 0 ? void 0 : manifest.shared.map(function(item) {
      return {
        assets: item.assets,
        sharedName: item.name,
        version: item.version
      };
    }),
    modules: exposes === null || exposes === void 0 ? void 0 : exposes.map(function(expose) {
      return {
        moduleName: expose.name,
        modulePath: expose.path,
        assets: expose.assets
      };
    })
  };
  if ((_manifest_metaData = manifest.metaData) === null || _manifest_metaData === void 0 ? void 0 : _manifest_metaData.prefetchInterface) {
    var prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = _object_spread_props(_object_spread$1({}, basicRemoteSnapshot), {
      prefetchInterface
    });
  }
  if ((_manifest_metaData1 = manifest.metaData) === null || _manifest_metaData1 === void 0 ? void 0 : _manifest_metaData1.prefetchEntry) {
    var _manifest_metaData_prefetchEntry = manifest.metaData.prefetchEntry, path2 = _manifest_metaData_prefetchEntry.path, name2 = _manifest_metaData_prefetchEntry.name, type = _manifest_metaData_prefetchEntry.type;
    basicRemoteSnapshot = _object_spread_props(_object_spread$1({}, basicRemoteSnapshot), {
      prefetchEntry: simpleJoinRemoteEntry(path2, name2),
      prefetchEntryType: type
    });
  }
  if ("publicPath" in manifest.metaData) {
    remoteSnapshot = _object_spread_props(_object_spread$1({}, basicRemoteSnapshot), {
      publicPath: getPublicPath()
    });
  } else {
    remoteSnapshot = _object_spread_props(_object_spread$1({}, basicRemoteSnapshot), {
      getPublicPath: getPublicPath()
    });
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ("remoteEntry" in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error3) {
    reject(error3);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _async_to_generator$1(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}
function _ts_generator$1(thisArg, body) {
  var f2, y, t, g, _ = {
    label: 0,
    sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  };
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([
        n,
        v
      ]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [
            op[0] & 2,
            t.value
          ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [
          6,
          e
        ];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function safeWrapper(callback, disableWarn) {
  return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
  _safeWrapper = _async_to_generator$1(function(callback, disableWarn) {
    var res, e;
    return _ts_generator$1(this, function(_state2) {
      switch (_state2.label) {
        case 0:
          _state2.trys.push([
            0,
            2,
            ,
            3
          ]);
          return [
            4,
            callback()
          ];
        case 1:
          res = _state2.sent();
          return [
            2,
            res
          ];
        case 2:
          e = _state2.sent();
          !disableWarn && warn2(e);
          return [
            2
          ];
        case 3:
          return [
            2
          ];
      }
    });
  });
  return _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(url1, url2) {
  var REG_EXP = /^(https?:)?\/\//i;
  var relativeUrl1 = url1.replace(REG_EXP, "").replace(/\/$/, "");
  var relativeUrl2 = url2.replace(REG_EXP, "").replace(/\/$/, "");
  return relativeUrl1 === relativeUrl2;
}
function createScript(url2, cb2, attrs2, createScriptHook2) {
  var script2 = null;
  var needAttach = true;
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i];
    var scriptSrc = s.getAttribute("src");
    if (scriptSrc && isStaticResourcesEqual(scriptSrc, url2)) {
      script2 = s;
      needAttach = false;
      break;
    }
  }
  if (!script2) {
    script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = url2;
    if (createScriptHook2) {
      var createScriptRes = createScriptHook2(url2);
      if (_instanceof(createScriptRes, HTMLScriptElement)) {
        script2 = createScriptRes;
      }
    }
  }
  if (attrs2) {
    Object.keys(attrs2).forEach(function(name2) {
      if (script2) {
        if (name2 === "async" || name2 === "defer") {
          script2[name2] = attrs2[name2];
        } else {
          script2.setAttribute(name2, attrs2[name2]);
        }
      }
    });
  }
  var onScriptComplete = function(prev, event) {
    if (script2) {
      script2.onerror = null;
      script2.onload = null;
      safeWrapper(function() {
        (script2 === null || script2 === void 0 ? void 0 : script2.parentNode) && script2.parentNode.removeChild(script2);
      });
      if (prev) {
        var res = prev(event);
        cb2();
        return res;
      }
    }
    cb2();
  };
  script2.onerror = onScriptComplete.bind(null, script2.onerror);
  script2.onload = onScriptComplete.bind(null, script2.onload);
  return {
    script: script2,
    needAttach
  };
}
function createLink(url2, cb2) {
  var attrs2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, createLinkHook = arguments.length > 3 ? arguments[3] : void 0;
  var link = null;
  var needAttach = true;
  var links = document.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    var l = links[i];
    var linkHref = l.getAttribute("href");
    var linkRef = l.getAttribute("ref");
    if (linkHref && isStaticResourcesEqual(linkHref, url2) && linkRef === attrs2["ref"]) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("href", url2);
    if (createLinkHook) {
      var createLinkRes = createLinkHook(url2);
      if (_instanceof(createLinkRes, HTMLLinkElement)) {
        link = createLinkRes;
      }
    }
  }
  if (attrs2) {
    Object.keys(attrs2).forEach(function(name2) {
      if (link) {
        link.setAttribute(name2, attrs2[name2]);
      }
    });
  }
  var onLinkComplete = function(prev, event) {
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper(function() {
        (link === null || link === void 0 ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
      });
      if (prev) {
        var res = prev(event);
        cb2();
        return res;
      }
    }
    cb2();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url2, info) {
  var attrs2 = info.attrs, createScriptHook2 = info.createScriptHook;
  return new Promise(function(resolve, _reject) {
    var _createScript = createScript(url2, resolve, attrs2, createScriptHook2), script2 = _createScript.script, needAttach = _createScript.needAttach;
    needAttach && document.getElementsByTagName("head")[0].appendChild(script2);
  });
}
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _array_with_holes(arr) {
  if (Array.isArray(arr))
    return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error3) {
    reject(error3);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _async_to_generator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _iterable_to_array_limit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _non_iterable_rest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
  return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _array_like_to_array(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
  var f2, y, t, g, _ = {
    label: 0,
    sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  };
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([
        n,
        v
      ]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [
            op[0] & 2,
            t.value
          ];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [
              0
            ];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [
          6,
          e
        ];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function importNodeModule(name2) {
  if (!name2) {
    throw new Error("import specifier is required");
  }
  var importModule = new Function("name", "return import(name)");
  return importModule(name2).then(function(res) {
    return res.default;
  }).catch(function(error3) {
    console.error("Error importing module ".concat(name2, ":"), error3);
    throw error3;
  });
}
function createScriptNode(url, cb, attrs, createScriptHook) {
  if (createScriptHook) {
    var hookResult = createScriptHook(url);
    if (hookResult && typeof hookResult === "object" && "url" in hookResult) {
      url = hookResult.url;
    }
  }
  var urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error("Error constructing URL:", e);
    cb(new Error("Invalid URL: ".concat(e)));
    return;
  }
  var getFetch = function() {
    var _ref2 = _async_to_generator(function() {
      var fetchModule;
      return _ts_generator(this, function(_state2) {
        switch (_state2.label) {
          case 0:
            if (!(typeof fetch === "undefined"))
              return [
                3,
                2
              ];
            return [
              4,
              importNodeModule("node-fetch")
            ];
          case 1:
            fetchModule = _state2.sent();
            return [
              2,
              (fetchModule === null || fetchModule === void 0 ? void 0 : fetchModule.default) || fetchModule
            ];
          case 2:
            return [
              2,
              fetch
            ];
          case 3:
            return [
              2
            ];
        }
      });
    });
    return function getFetch2() {
      return _ref2.apply(this, arguments);
    };
  }();
  console.log("fetching", urlObj.href);
  getFetch().then(function(f) {
    f(urlObj.href).then(function(res) {
      return res.text();
    }).then(function() {
      var _ref = _async_to_generator(function(data) {
        var _ref, path, vm, scriptContext, urlDirname, filename, script, exportedInterface, container;
        return _ts_generator(this, function(_state) {
          switch (_state.label) {
            case 0:
              return [
                4,
                Promise.all([
                  importNodeModule("path"),
                  importNodeModule("vm")
                ])
              ];
            case 1:
              _ref = _sliced_to_array.apply(void 0, [
                _state.sent(),
                2
              ]), path = _ref[0], vm = _ref[1];
              scriptContext = {
                exports: {},
                module: {
                  exports: {}
                }
              };
              urlDirname = urlObj.pathname.split("/").slice(0, -1).join("/");
              filename = path.basename(urlObj.pathname);
              try {
                script = new vm.Script("(function(exports, module, require, __dirname, __filename) {".concat(data, "\n})"), filename);
                script.runInThisContext()(scriptContext.exports, scriptContext.module, eval("require"), urlDirname, filename);
                exportedInterface = scriptContext.module.exports || scriptContext.exports;
                if (attrs && exportedInterface && attrs["globalName"]) {
                  container = exportedInterface[attrs["globalName"]] || exportedInterface;
                  cb(void 0, container);
                  return [
                    2
                  ];
                }
                cb(void 0, exportedInterface);
              } catch (e) {
                cb(new Error("Script execution error: ".concat(e)));
              }
              return [
                2
              ];
          }
        });
      });
      return function(data2) {
        return _ref.apply(this, arguments);
      };
    }()).catch(function(err) {
      cb(err);
    });
  });
}
function loadScriptNode(url2, info) {
  return new Promise(function(resolve, reject) {
    createScriptNode(url2, function(error3, scriptContext2) {
      if (error3) {
        reject(error3);
      } else {
        var _info_attrs, _info_attrs1;
        var remoteEntryKey = (info === null || info === void 0 ? void 0 : (_info_attrs = info.attrs) === null || _info_attrs === void 0 ? void 0 : _info_attrs["globalName"]) || "__FEDERATION_".concat(info === null || info === void 0 ? void 0 : (_info_attrs1 = info.attrs) === null || _info_attrs1 === void 0 ? void 0 : _info_attrs1["name"], ":custom__");
        var entryExports = globalThis[remoteEntryKey] = scriptContext2;
        resolve(entryExports);
      }
    }, info.attrs, info.createScriptHook);
  });
}
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function _type_of(obj) {
  "@swc/helpers - typeof";
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function(options) {
    if (options === false) {
      return false;
    }
    if (typeof options === "undefined") {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === "object") {
      return _object_spread({}, defaultOptions, options);
    }
    throw new Error("Unexpected type for `".concat(key, "`, expect boolean/undefined/object, got: ").concat(typeof options === "undefined" ? "undefined" : _type_of(options)));
  };
}

// node_modules/@module-federation/runtime/dist/index.esm.js
function matchRemoteWithNameAndExpose(remotes, id) {
  for (const remote of remotes) {
    const isNameMatched = id.startsWith(remote.name);
    let expose = id.replace(remote.name, "");
    if (isNameMatched) {
      if (expose.startsWith("/")) {
        const pkgNameOrAlias = remote.name;
        expose = `.${expose}`;
        return {
          pkgNameOrAlias,
          expose,
          remote
        };
      } else if (expose === "") {
        return {
          pkgNameOrAlias: remote.name,
          expose: ".",
          remote
        };
      }
    }
    const isAliasMatched = remote.alias && id.startsWith(remote.alias);
    let exposeWithAlias = remote.alias && id.replace(remote.alias, "");
    if (remote.alias && isAliasMatched) {
      if (exposeWithAlias && exposeWithAlias.startsWith("/")) {
        const pkgNameOrAlias = remote.alias;
        exposeWithAlias = `.${exposeWithAlias}`;
        return {
          pkgNameOrAlias,
          expose: exposeWithAlias,
          remote
        };
      } else if (exposeWithAlias === "") {
        return {
          pkgNameOrAlias: remote.alias,
          expose: ".",
          remote
        };
      }
    }
  }
  return;
}
function matchRemote(remotes, nameOrAlias) {
  for (const remote of remotes) {
    const isNameMatched = nameOrAlias === remote.name;
    if (isNameMatched) {
      return remote;
    }
    const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
    if (isAliasMatched) {
      return remote;
    }
  }
  return;
}
function registerPlugins$1(plugins, hookInstances) {
  const globalPlugins = getGlobalHostPlugins();
  if (globalPlugins.length > 0) {
    globalPlugins.forEach((plugin) => {
      if (plugins == null ? void 0 : plugins.find((item) => item.name !== plugin.name)) {
        plugins.push(plugin);
      }
    });
  }
  if (plugins && plugins.length > 0) {
    plugins.forEach((plugin) => {
      hookInstances.forEach((hookInstance) => {
        hookInstance.applyPlugin(plugin);
      });
    });
  }
  return plugins;
}
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
async function loadEsmEntry({ entry, remoteEntryExports }) {
  return new Promise((resolve, reject) => {
    try {
      if (!remoteEntryExports) {
        new Function("callbacks", `import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([
          resolve,
          reject
        ]);
      } else {
        resolve(remoteEntryExports);
      }
    } catch (e) {
      reject(e);
    }
  });
}
async function loadEntryScript({ name: name2, globalName, entry, createScriptHook: createScriptHook2 }) {
  const { entryExports: remoteEntryExports } = getRemoteEntryExports(name2, globalName);
  if (remoteEntryExports) {
    return remoteEntryExports;
  }
  if (typeof document === "undefined") {
    return loadScriptNode(entry, {
      attrs: {
        name: name2,
        globalName
      },
      createScriptHook: createScriptHook2
    }).then(() => {
      const { remoteEntryKey, entryExports } = getRemoteEntryExports(name2, globalName);
      assert(entryExports, `
        Unable to use the ${name2}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
        Possible reasons could be:

        1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.

        2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
      `);
      return entryExports;
    }).catch((e) => {
      return e;
    });
  }
  return loadScript(entry, {
    attrs: {},
    createScriptHook: createScriptHook2
  }).then(() => {
    const { remoteEntryKey, entryExports } = getRemoteEntryExports(name2, globalName);
    assert(entryExports, `
      Unable to use the ${name2}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
      Possible reasons could be:

      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.

      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
    `);
    return entryExports;
  }).catch((e) => {
    return e;
  });
}
function getRemoteEntryUniqueKey(remoteInfo) {
  const { entry, name: name2 } = remoteInfo;
  return composeKeyWithSeparator(name2, entry);
}
async function getRemoteEntry({ remoteEntryExports, remoteInfo, createScriptHook: createScriptHook2 }) {
  const { entry, name: name2, type, entryGlobalName } = remoteInfo;
  const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
  if (remoteEntryExports) {
    return remoteEntryExports;
  }
  if (!globalLoading[uniqueKey]) {
    if (type === "esm") {
      globalLoading[uniqueKey] = loadEsmEntry({
        entry,
        remoteEntryExports
      });
    } else {
      globalLoading[uniqueKey] = loadEntryScript({
        name: name2,
        globalName: entryGlobalName,
        entry,
        createScriptHook: createScriptHook2
      });
    }
  }
  return globalLoading[uniqueKey];
}
function getRemoteInfo(remote) {
  return _extends$5({}, remote, {
    entry: "entry" in remote ? remote.entry : "",
    type: remote.type || DEFAULT_REMOTE_TYPE,
    entryGlobalName: remote.entryGlobalName || remote.name,
    shareScope: remote.shareScope || DEFAULT_SCOPE
  });
}
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var Module = class Module2 {
  async getEntry() {
    if (this.remoteEntryExports) {
      return this.remoteEntryExports;
    }
    const remoteEntryExports = await getRemoteEntry({
      remoteInfo: this.remoteInfo,
      remoteEntryExports: this.remoteEntryExports,
      createScriptHook: (url2) => {
        const res = this.host.loaderHook.lifecycle.createScript.emit({
          url: url2
        });
        if (typeof document === "undefined") {
          return res;
        }
        if (res instanceof HTMLScriptElement) {
          return res;
        }
        return;
      }
    });
    assert(remoteEntryExports, `remoteEntryExports is undefined 
 ${safeToString(this.remoteInfo)}`);
    this.remoteEntryExports = remoteEntryExports;
    return this.remoteEntryExports;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async get(expose, options) {
    const { loadFactory = true } = options || {
      loadFactory: true
    };
    const remoteEntryExports = await this.getEntry();
    if (!this.inited) {
      const localShareScopeMap = this.host.shareScopeMap;
      const remoteShareScope = this.remoteInfo.shareScope || "default";
      if (!localShareScopeMap[remoteShareScope]) {
        localShareScopeMap[remoteShareScope] = {};
      }
      const shareScope = localShareScopeMap[remoteShareScope];
      const initScope = [];
      const remoteEntryInitOptions = {
        version: this.remoteInfo.version || ""
      };
      Object.defineProperty(remoteEntryInitOptions, "hostId", {
        value: this.host.options.id || this.host.name,
        // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
        enumerable: false
      });
      const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
        shareScope,
        // @ts-ignore hostId will be set by Object.defineProperty
        remoteEntryInitOptions,
        initScope,
        remoteInfo: this.remoteInfo,
        origin: this.host
      });
      await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
      await this.host.hooks.lifecycle.initContainer.emit(_extends$4({}, initContainerOptions, {
        remoteEntryExports
      }));
    }
    this.lib = remoteEntryExports;
    this.inited = true;
    const moduleFactory = await remoteEntryExports.get(expose);
    console.log("module factory", moduleFactory);
    assert(moduleFactory, `${getFMId(this.remoteInfo)} remote don't export ${expose}.`);
    if (!loadFactory) {
      return moduleFactory;
    }
    const exposeContent = await moduleFactory();
    return exposeContent;
  }
  constructor({ remoteInfo, host: host2 }) {
    this.inited = false;
    this.lib = void 0;
    this.remoteInfo = remoteInfo;
    this.host = host2;
  }
};
var SyncHook = class {
  on(fn) {
    if (typeof fn === "function") {
      this.listeners.add(fn);
    }
  }
  once(fn) {
    const self = this;
    this.on(function wrapper(...args) {
      self.remove(wrapper);
      return fn.apply(null, args);
    });
  }
  emit(...data2) {
    let result;
    if (this.listeners.size > 0) {
      this.listeners.forEach((fn) => {
        result = fn(...data2);
      });
    }
    return result;
  }
  remove(fn) {
    this.listeners.delete(fn);
  }
  removeAll() {
    this.listeners.clear();
  }
  constructor(type) {
    this.type = "";
    this.listeners = /* @__PURE__ */ new Set();
    if (type) {
      this.type = type;
    }
  }
};
var AsyncHook = class extends SyncHook {
  emit(...data2) {
    let result;
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const call = (prev) => {
        if (prev === false) {
          return false;
        } else if (i < ls.length) {
          return Promise.resolve(ls[i++].apply(null, data2)).then(call);
        } else {
          return prev;
        }
      };
      result = call();
    }
    return Promise.resolve(result);
  }
};
function checkReturnData(originalData, returnedData) {
  if (!isObject(returnedData)) {
    return false;
  }
  if (originalData !== returnedData) {
    for (const key in originalData) {
      if (!(key in returnedData)) {
        return false;
      }
    }
  }
  return true;
}
var SyncWaterfallHook = class extends SyncHook {
  emit(data2) {
    if (!isObject(data2)) {
      error(`The data for the "${this.type}" hook should be an object.`);
    }
    for (const fn of this.listeners) {
      try {
        const tempData = fn(data2);
        if (checkReturnData(data2, tempData)) {
          data2 = tempData;
        } else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (e) {
        warn(e);
        this.onerror(e);
      }
    }
    return data2;
  }
  constructor(type) {
    super();
    this.onerror = error;
    this.type = type;
  }
};
var AsyncWaterfallHook = class extends SyncHook {
  emit(data2) {
    if (!isObject(data2)) {
      error(`The response data for the "${this.type}" hook must be an object.`);
    }
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const processError = (e) => {
        warn(e);
        this.onerror(e);
        return data2;
      };
      const call = (prevData) => {
        if (checkReturnData(data2, prevData)) {
          data2 = prevData;
          if (i < ls.length) {
            try {
              return Promise.resolve(ls[i++](data2)).then(call, processError);
            } catch (e) {
              return processError(e);
            }
          }
        } else {
          this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
        }
        return data2;
      };
      return Promise.resolve(call(data2));
    }
    return Promise.resolve(data2);
  }
  constructor(type) {
    super();
    this.onerror = error;
    this.type = type;
  }
};
var PluginSystem = class {
  applyPlugin(plugin) {
    assert(isPlainObject(plugin), "Plugin configuration is invalid.");
    const pluginName = plugin.name;
    assert(pluginName, "A name must be provided by the plugin.");
    if (!this.registerPlugins[pluginName]) {
      this.registerPlugins[pluginName] = plugin;
      Object.keys(this.lifecycle).forEach((key) => {
        const pluginLife = plugin[key];
        if (pluginLife) {
          this.lifecycle[key].on(pluginLife);
        }
      });
    }
  }
  removePlugin(pluginName) {
    assert(pluginName, "A name is required.");
    const plugin = this.registerPlugins[pluginName];
    assert(plugin, `The plugin "${pluginName}" is not registered.`);
    Object.keys(plugin).forEach((key) => {
      if (key !== "name") {
        this.lifecycle[key].remove(plugin[key]);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  inherit({ lifecycle, registerPlugins }) {
    Object.keys(lifecycle).forEach((hookName) => {
      assert(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
      this.lifecycle[hookName] = lifecycle[hookName];
    });
    Object.keys(registerPlugins).forEach((pluginName) => {
      assert(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
      this.applyPlugin(registerPlugins[pluginName]);
    });
  }
  constructor(lifecycle) {
    this.registerPlugins = {};
    this.lifecycle = lifecycle;
    this.lifecycleKeys = Object.keys(lifecycle);
  }
};
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function defaultPreloadArgs(preloadConfig) {
  return _extends$3({
    resourceCategory: "sync",
    share: true,
    depsRemote: true,
    prefetchInterface: false
  }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
  return preloadArgs.map((args) => {
    const remoteInfo = matchRemote(remotes, args.nameOrAlias);
    assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && safeToString({
      remoteInfo,
      remotes
    })}`);
    return {
      remote: remoteInfo,
      preloadConfig: defaultPreloadArgs(args)
    };
  });
}
function normalizePreloadExposes(exposes) {
  if (!exposes) {
    return [];
  }
  return exposes.map((expose) => {
    if (expose === ".") {
      return expose;
    }
    if (expose.startsWith("./")) {
      return expose.replace("./", "");
    }
    return expose;
  });
}
function preloadAssets(remoteInfo, host2, assets) {
  const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
  if (host2.options.inBrowser) {
    entryAssets.forEach((asset) => {
      const { moduleInfo } = asset;
      const module = host2.moduleCache.get(remoteInfo.name);
      if (module) {
        getRemoteEntry({
          remoteInfo: moduleInfo,
          remoteEntryExports: module.remoteEntryExports,
          createScriptHook: (url2) => {
            const res = host2.loaderHook.lifecycle.createScript.emit({
              url: url2
            });
            if (res instanceof HTMLScriptElement) {
              return res;
            }
            return;
          }
        });
      } else {
        getRemoteEntry({
          remoteInfo: moduleInfo,
          remoteEntryExports: void 0,
          createScriptHook: (url2) => {
            const res = host2.loaderHook.lifecycle.createScript.emit({
              url: url2
            });
            if (res instanceof HTMLScriptElement) {
              return res;
            }
            return;
          }
        });
      }
    });
    const fragment = document.createDocumentFragment();
    cssAssets.forEach((cssUrl) => {
      const { link: cssEl, needAttach } = createLink(cssUrl, () => {
      }, {
        rel: "preload",
        as: "style"
      }, (url2) => {
        const res = host2.loaderHook.lifecycle.createLink.emit({
          url: url2
        });
        if (res instanceof HTMLLinkElement) {
          return res;
        }
        return;
      });
      needAttach && fragment.appendChild(cssEl);
    });
    jsAssetsWithoutEntry.forEach((jsUrl) => {
      const { link: linkEl, needAttach } = createLink(jsUrl, () => {
      }, {
        rel: "preload",
        as: "script"
      }, (url2) => {
        const res = host2.loaderHook.lifecycle.createLink.emit({
          url: url2
        });
        if (res instanceof HTMLLinkElement) {
          return res;
        }
        return;
      });
      needAttach && document.head.appendChild(linkEl);
    });
    document.head.appendChild(fragment);
  }
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
  if (!("remoteEntry" in remoteSnapshot) || !remoteSnapshot.remoteEntry) {
    error(`The attribute remoteEntry of ${name} must not be undefined.`);
  }
  const { remoteEntry } = remoteSnapshot;
  const entryUrl = getResourceUrl(remoteSnapshot, remoteEntry);
  remoteInfo.type = remoteSnapshot.remoteEntryType;
  remoteInfo.entryGlobalName = remoteSnapshot.globalName;
  remoteInfo.entry = entryUrl;
  remoteInfo.version = remoteSnapshot.version;
  remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
  return {
    name: "snapshot-plugin",
    async afterResolve(args) {
      const { remote, pkgNameOrAlias, expose, origin, remoteInfo } = args;
      if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
        const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo(remote);
        assignRemoteInfo(remoteInfo, remoteSnapshot);
        const preloadOptions = {
          remote,
          preloadConfig: {
            nameOrAlias: pkgNameOrAlias,
            exposes: [
              expose
            ],
            resourceCategory: "sync",
            share: false,
            depsRemote: false
          }
        };
        const assets = await origin.hooks.lifecycle.generatePreloadAssets.emit({
          origin,
          preloadOptions,
          remoteInfo,
          remote,
          remoteSnapshot,
          globalSnapshot
        });
        if (assets) {
          preloadAssets(remoteInfo, origin, assets);
        }
        return _extends$2({}, args, {
          remoteSnapshot
        });
      }
      return args;
    }
  };
}
function splitId(id) {
  const splitInfo = id.split(":");
  if (splitInfo.length === 1) {
    return {
      name: splitInfo[0],
      version: void 0
    };
  } else if (splitInfo.length === 2) {
    return {
      name: splitInfo[0],
      version: splitInfo[1]
    };
  } else {
    return {
      name: splitInfo[1],
      version: splitInfo[2]
    };
  }
}
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
  const id = getFMId(remoteInfo);
  const { value: snapshotValue } = getInfoWithoutType(globalSnapshot, id);
  const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
  if (effectiveRemoteSnapshot && !isManifestProvider(effectiveRemoteSnapshot)) {
    traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
    if (effectiveRemoteSnapshot.remotesInfo) {
      const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
      for (const key of remoteKeys) {
        if (memo[key]) {
          continue;
        }
        memo[key] = true;
        const subRemoteInfo = splitId(key);
        const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
        traverseModuleInfo(globalSnapshot, {
          name: subRemoteInfo.name,
          version: remoteValue.matchedVersion
        }, traverse, false, memo, void 0);
      }
    }
  }
}
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
  const cssAssets = [];
  const jsAssets = [];
  const entryAssets = [];
  const loadedSharedJsAssets = /* @__PURE__ */ new Set();
  const loadedSharedCssAssets = /* @__PURE__ */ new Set();
  const { options } = origin;
  const { preloadConfig: rootPreloadConfig } = preloadOptions;
  const { depsRemote } = rootPreloadConfig;
  const memo = {};
  traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot) => {
    let preloadConfig;
    if (isRoot) {
      preloadConfig = rootPreloadConfig;
    } else {
      if (Array.isArray(depsRemote)) {
        const findPreloadConfig = depsRemote.find((remoteConfig) => {
          if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
            return true;
          }
          return false;
        });
        if (!findPreloadConfig) {
          return;
        }
        preloadConfig = defaultPreloadArgs(findPreloadConfig);
      } else if (depsRemote === true) {
        preloadConfig = rootPreloadConfig;
      } else {
        return;
      }
    }
    const remoteEntryUrl = getResourceUrl(moduleInfoSnapshot, "remoteEntry" in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntry : "");
    if (remoteEntryUrl) {
      entryAssets.push({
        name: remoteInfo.name,
        moduleInfo: {
          name: remoteInfo.name,
          entry: remoteEntryUrl,
          type: "remoteEntryType" in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : "global",
          entryGlobalName: "globalName" in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
          shareScope: "",
          version: "version" in moduleInfoSnapshot ? moduleInfoSnapshot.version : void 0
        },
        url: remoteEntryUrl
      });
    }
    let moduleAssetsInfo = "modules" in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
    const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
    if (normalizedPreloadExposes.length && "modules" in moduleInfoSnapshot) {
      var _moduleInfoSnapshot_modules;
      moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo) => {
        if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
          assets.push(moduleAssetInfo);
        }
        return assets;
      }, []);
    }
    function handleAssets(assets) {
      const assetsRes = assets.map((asset) => getResourceUrl(moduleInfoSnapshot, asset));
      if (preloadConfig.filter) {
        return assetsRes.filter(preloadConfig.filter);
      }
      return assetsRes;
    }
    if (moduleAssetsInfo) {
      const assetsLength = moduleAssetsInfo.length;
      for (let index = 0; index < assetsLength; index++) {
        const assetsInfo = moduleAssetsInfo[index];
        const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
        origin.hooks.lifecycle.handlePreloadModule.emit({
          id: assetsInfo.moduleName === "." ? remoteInfo.name : exposeFullPath,
          name: remoteInfo.name,
          remoteSnapshot: moduleInfoSnapshot,
          preloadConfig,
          remote: remoteInfo,
          origin
        });
        const preloaded = getPreloaded(exposeFullPath);
        if (preloaded) {
          continue;
        }
        if (preloadConfig.resourceCategory === "all") {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        } else if (preloadConfig.resourceCategory = "sync") {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        }
        setPreloaded(exposeFullPath);
      }
    }
  }, true, memo, remoteSnapshot);
  if (remoteSnapshot.shared) {
    const collectSharedAssets = (shareInfo, snapshotShared) => {
      const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.hooks.lifecycle.resolveShare);
      if (registeredShared && typeof registeredShared.lib === "function") {
        snapshotShared.assets.js.sync.forEach((asset) => {
          loadedSharedJsAssets.add(asset);
        });
        snapshotShared.assets.css.sync.forEach((asset) => {
          loadedSharedCssAssets.add(asset);
        });
      }
    };
    remoteSnapshot.shared.forEach((shared) => {
      var _options_shared;
      const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
      if (!shareInfos) {
        return;
      }
      const sharedOptions = shared.version ? shareInfos.find((s) => s.version === shared.version) : shareInfos;
      if (!sharedOptions) {
        return;
      }
      const arrayShareInfo = arrayOptions(sharedOptions);
      arrayShareInfo.forEach((s) => {
        collectSharedAssets(s, shared);
      });
    });
  }
  const needPreloadJsAssets = jsAssets.filter((asset) => !loadedSharedJsAssets.has(asset));
  const needPreloadCssAssets = cssAssets.filter((asset) => !loadedSharedCssAssets.has(asset));
  return {
    cssAssets: needPreloadCssAssets,
    jsAssetsWithoutEntry: needPreloadJsAssets,
    entryAssets
  };
}
var generatePreloadAssetsPlugin = function() {
  return {
    name: "generate-preload-assets-plugin",
    async generatePreloadAssets(args) {
      const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
      if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
        return {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: remote.name,
              url: remote.entry,
              moduleInfo: {
                name: remoteInfo.name,
                entry: remote.entry,
                type: "global",
                entryGlobalName: "",
                shareScope: ""
              }
            }
          ]
        };
      }
      assignRemoteInfo(remoteInfo, remoteSnapshot);
      const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
      return assets;
    }
  };
};
function _extends$12() {
  _extends$12 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$12.apply(this, arguments);
}
var SnapshotHandler = class {
  async loadSnapshot(moduleInfo) {
    const { options } = this.HostInstance;
    const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
    const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
      options,
      moduleInfo,
      hostGlobalSnapshot,
      remoteSnapshot,
      globalSnapshot
    });
    return {
      remoteSnapshot: globalRemoteSnapshot,
      globalSnapshot: globalSnapshotRes
    };
  }
  // eslint-disable-next-line max-lines-per-function
  async loadRemoteSnapshotInfo(moduleInfo) {
    const { options } = this.HostInstance;
    await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
      options,
      moduleInfo
    });
    let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
      name: this.HostInstance.options.name,
      version: this.HostInstance.options.version
    });
    if (!hostSnapshot) {
      hostSnapshot = {
        version: this.HostInstance.options.version || "",
        remoteEntry: "",
        remotesInfo: {}
      };
      addGlobalSnapshot({
        [this.HostInstance.options.name]: hostSnapshot
      });
    }
    if (hostSnapshot && "remotesInfo" in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
      if ("version" in moduleInfo || "entry" in moduleInfo) {
        hostSnapshot.remotesInfo = _extends$12({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
          [moduleInfo.name]: {
            matchedVersion: "version" in moduleInfo ? moduleInfo.version : moduleInfo.entry
          }
        });
      }
    }
    const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
    const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
      options,
      moduleInfo,
      hostGlobalSnapshot,
      remoteSnapshot,
      globalSnapshot
    });
    if (globalRemoteSnapshot) {
      if (isManifestProvider(globalRemoteSnapshot)) {
        const moduleSnapshot = await this.getManifestJson(globalRemoteSnapshot.remoteEntry, moduleInfo, {});
        const globalSnapshotRes2 = setGlobalSnapshotInfoByModuleInfo(_extends$12({}, moduleInfo, {
          // The global remote may be overridden
          // Therefore, set the snapshot key to the global address of the actual request
          entry: globalRemoteSnapshot.remoteEntry
        }), moduleSnapshot);
        return {
          remoteSnapshot: moduleSnapshot,
          globalSnapshot: globalSnapshotRes2
        };
      } else {
        const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo,
          remoteSnapshot: globalRemoteSnapshot,
          from: "global"
        });
        return {
          remoteSnapshot: remoteSnapshotRes,
          globalSnapshot: globalSnapshotRes
        };
      }
    } else {
      if (isRemoteInfoWithEntry(moduleInfo)) {
        const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
        const globalSnapshotRes2 = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
        const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo,
          remoteSnapshot: moduleSnapshot,
          from: "global"
        });
        return {
          remoteSnapshot: remoteSnapshotRes,
          globalSnapshot: globalSnapshotRes2
        };
      } else {
        error(`
          Cannot get remoteSnapshot with the name: '${moduleInfo.name}', version: '${moduleInfo.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:

          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.

          2. The remote '${moduleInfo.name}' version '${moduleInfo.version}' is not released.

          The transformed module info: ${JSON.stringify(globalSnapshotRes)}
        `);
      }
    }
  }
  getGlobalRemoteInfo(moduleInfo) {
    const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
      name: this.HostInstance.options.name,
      version: this.HostInstance.options.version
    });
    const globalRemoteInfo = hostGlobalSnapshot && "remotesInfo" in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
      return {
        hostGlobalSnapshot,
        globalSnapshot: getGlobalSnapshot(),
        remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
          name: moduleInfo.name,
          version: globalRemoteInfo.matchedVersion
        })
      };
    }
    return {
      hostGlobalSnapshot: void 0,
      globalSnapshot: getGlobalSnapshot(),
      remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
        name: moduleInfo.name,
        version: "version" in moduleInfo ? moduleInfo.version : void 0
      })
    };
  }
  async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
    const getManifest = async () => {
      let manifestJson = this.manifestCache.get(manifestUrl);
      if (manifestJson) {
        return manifestJson;
      }
      try {
        let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
        if (!res || !(res instanceof Response)) {
          res = await fetch(manifestUrl, {});
        }
        manifestJson = await res.json();
        assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
        this.manifestCache.set(manifestUrl, manifestJson);
        return manifestJson;
      } catch (err) {
        error(`Failed to get manifestJson for ${moduleInfo.name}. The manifest URL is ${manifestUrl}. Please ensure that the manifestUrl is accessible.
          
 Error message:
          
 ${err}`);
      }
    };
    const asyncLoadProcess = async () => {
      const manifestJson = await getManifest();
      const remoteSnapshot = generateSnapshotFromManifest(manifestJson, {
        version: manifestUrl
      });
      const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
        options: this.HostInstance.options,
        moduleInfo,
        manifestJson,
        remoteSnapshot,
        manifestUrl,
        from: "manifest"
      });
      return remoteSnapshotRes;
    };
    if (!this.manifestLoading[manifestUrl]) {
      this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res) => res);
    }
    return this.manifestLoading[manifestUrl];
  }
  constructor(HostInstance) {
    this.loadingHostSnapshot = null;
    this.manifestCache = /* @__PURE__ */ new Map();
    this.hooks = new PluginSystem({
      beforeLoadRemoteSnapshot: new AsyncHook("beforeLoadRemoteSnapshot"),
      loadSnapshot: new AsyncWaterfallHook("loadGlobalSnapshot"),
      loadRemoteSnapshot: new AsyncWaterfallHook("loadRemoteSnapshot")
    });
    this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
    this.HostInstance = HostInstance;
    this.loaderHook = HostInstance.loaderHook;
  }
};
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _object_without_properties_loose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var FederationHost = class {
  _setGlobalShareScopeMap() {
    const globalShareScopeMap = getGlobalShareScope();
    const identifier = this.options.id || this.options.name;
    if (identifier && !globalShareScopeMap[identifier]) {
      globalShareScopeMap[identifier] = this.shareScopeMap;
    }
  }
  initOptions(userOptions) {
    this.registerPlugins(userOptions.plugins);
    const options = this.formatOptions(this.options, userOptions);
    this.options = options;
    return options;
  }
  async loadShare(pkgName, extraOptions) {
    const shareInfo = getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: this.options.shared
    });
    if (shareInfo == null ? void 0 : shareInfo.scope) {
      await Promise.all(shareInfo.scope.map(async (shareScope) => {
        await Promise.all(this.initializeSharing(shareScope, shareInfo.strategy));
        return;
      }));
    }
    const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
      pkgName,
      shareInfo,
      shared: this.options.shared,
      origin: this
    });
    const { shareInfo: shareInfoRes } = loadShareRes;
    assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${this.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
    const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
    const addUseIn = (shared) => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      addUniqueItem(shared.useIn, this.options.name);
    };
    if (registeredShared && registeredShared.lib) {
      addUseIn(registeredShared);
      return registeredShared.lib;
    } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
      const factory = await registeredShared.loading;
      registeredShared.loaded = true;
      if (!registeredShared.lib) {
        registeredShared.lib = factory;
      }
      addUseIn(registeredShared);
      return factory;
    } else if (registeredShared) {
      const asyncLoadProcess = async () => {
        const factory = await registeredShared.get();
        shareInfoRes.lib = factory;
        shareInfoRes.loaded = true;
        addUseIn(shareInfoRes);
        const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        if (gShared) {
          gShared.lib = factory;
          gShared.loaded = true;
        }
        return factory;
      };
      const loading = asyncLoadProcess();
      this.setShared({
        pkgName,
        loaded: false,
        shared: registeredShared,
        from: this.options.name,
        lib: null,
        loading
      });
      return loading;
    } else {
      if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
        return false;
      }
      const asyncLoadProcess = async () => {
        const factory = await shareInfoRes.get();
        shareInfoRes.lib = factory;
        shareInfoRes.loaded = true;
        addUseIn(shareInfoRes);
        const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);
        if (gShared) {
          gShared.lib = factory;
          gShared.loaded = true;
        }
        return factory;
      };
      const loading = asyncLoadProcess();
      this.setShared({
        pkgName,
        loaded: false,
        shared: shareInfoRes,
        from: this.options.name,
        lib: null,
        loading
      });
      return loading;
    }
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    const shareInfo = getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: this.options.shared
    });
    if (shareInfo == null ? void 0 : shareInfo.scope) {
      shareInfo.scope.forEach((shareScope) => {
        this.initializeSharing(shareScope, shareInfo.strategy);
      });
    }
    const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
    const addUseIn = (shared) => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      addUniqueItem(shared.useIn, this.options.name);
    };
    if (registeredShared) {
      if (typeof registeredShared.lib === "function") {
        addUseIn(registeredShared);
        if (!registeredShared.loaded) {
          registeredShared.loaded = true;
          if (registeredShared.from === this.options.name) {
            shareInfo.loaded = true;
          }
        }
        return registeredShared.lib;
      }
      if (typeof registeredShared.get === "function") {
        const module = registeredShared.get();
        if (!(module instanceof Promise)) {
          addUseIn(registeredShared);
          this.setShared({
            pkgName,
            loaded: true,
            from: this.options.name,
            lib: module,
            shared: registeredShared
          });
          return module;
        }
      }
    }
    if (shareInfo.lib) {
      if (!shareInfo.loaded) {
        shareInfo.loaded = true;
      }
      return shareInfo.lib;
    }
    if (shareInfo.get) {
      const module = shareInfo.get();
      if (module instanceof Promise) {
        throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${this.options.name}.
        Possible reasons for failure: 

        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${pkgName} share was not registered with the 'lib' attribute.

      `);
      }
      shareInfo.lib = module;
      this.setShared({
        pkgName,
        loaded: true,
        from: this.options.name,
        lib: shareInfo.lib,
        shared: shareInfo
      });
      return shareInfo.lib;
    }
    throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${this.options.name}.
        Possible reasons for failure: 

        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.

        2. The ${pkgName} share was not registered with the 'lib' attribute.

      `);
  }
  initRawContainer(name2, url2, container2) {
    const remoteInfo = getRemoteInfo({
      name: name2,
      entry: url2
    });
    const module = new Module({
      host: this,
      remoteInfo
    });
    module.remoteEntryExports = container2;
    this.moduleCache.set(name2, module);
    return module;
  }
  async _getRemoteModuleAndOptions(id) {
    const loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
      id,
      options: this.options,
      origin: this
    });
    const { id: idRes } = loadRemoteArgs;
    const remoteSplitInfo = matchRemoteWithNameAndExpose(this.options.remotes, idRes);
    assert(remoteSplitInfo, `
        Unable to locate ${idRes} in ${this.options.name}. Potential reasons for failure include:

        1. ${idRes} was not included in the 'remotes' parameter of ${this.options.name || "the host"}.

        2. ${idRes} could not be found in the 'remotes' of ${this.options.name} with either 'name' or 'alias' attributes.
        3. ${idRes} is not online, injected, or loaded.
        4. ${idRes}  cannot be accessed on the expected.
        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${idRes}.
      `);
    const { remote: rawRemote } = remoteSplitInfo;
    const remoteInfo = getRemoteInfo(rawRemote);
    const matchInfo = await this.hooks.lifecycle.afterResolve.emit(_extends2({
      id: idRes
    }, remoteSplitInfo, {
      options: this.options,
      origin: this,
      remoteInfo
    }));
    const { remote, expose } = matchInfo;
    assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
    let module = this.moduleCache.get(remote.name);
    const moduleOptions = {
      host: this,
      remoteInfo
    };
    if (!module) {
      module = new Module(moduleOptions);
      this.moduleCache.set(remote.name, module);
    }
    return {
      module,
      moduleOptions,
      remoteMatchInfo: matchInfo
    };
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async loadRemote(id, options) {
    try {
      const { loadFactory = true } = options || {
        loadFactory: true
      };
      const { module, moduleOptions, remoteMatchInfo } = await this._getRemoteModuleAndOptions(id);
      const { pkgNameOrAlias, remote, expose, id: idRes } = remoteMatchInfo;
      const moduleOrFactory = await module.get(expose, options);
      const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
        id: idRes,
        pkgNameOrAlias,
        expose,
        exposeModule: loadFactory ? moduleOrFactory : void 0,
        exposeModuleFactory: loadFactory ? void 0 : moduleOrFactory,
        remote,
        options: moduleOptions,
        moduleInstance: module,
        origin: this
      });
      if (typeof moduleWrapper === "function") {
        return moduleWrapper;
      }
      return moduleOrFactory;
    } catch (error3) {
      const { from: from2 = "runtime" } = options || {
        from: "runtime"
      };
      const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
        id,
        error: error3,
        from: from2,
        origin: this
      });
      if (!failOver) {
        throw error3;
      }
      return failOver;
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async preloadRemote(preloadOptions) {
    await this.hooks.lifecycle.beforePreloadRemote.emit({
      preloadOptions,
      options: this.options,
      origin: this
    });
    const preloadOps = formatPreloadArgs(this.options.remotes, preloadOptions);
    await Promise.all(preloadOps.map(async (ops) => {
      const { remote } = ops;
      const remoteInfo = getRemoteInfo(remote);
      const { globalSnapshot, remoteSnapshot } = await this.snapshotHandler.loadRemoteSnapshotInfo(remote);
      const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
        origin: this,
        preloadOptions: ops,
        remote,
        remoteInfo,
        globalSnapshot,
        remoteSnapshot
      });
      if (!assets) {
        return;
      }
      preloadAssets(remoteInfo, this, assets);
    }));
  }
  /**
  * This function initializes the sharing sequence (executed only once per share scope).
  * It accepts one argument, the name of the share scope.
  * If the share scope does not exist, it creates one.
  */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  initializeSharing(shareScopeName = DEFAULT_SCOPE, strategy) {
    const shareScope = this.shareScopeMap;
    const hostName = this.options.name;
    if (!shareScope[shareScopeName]) {
      shareScope[shareScopeName] = {};
    }
    const scope = shareScope[shareScopeName];
    const register = (name2, shared) => {
      var _activeVersion_shareConfig;
      const { version, eager } = shared;
      scope[name2] = scope[name2] || {};
      const versions = scope[name2];
      const activeVersion = versions[version];
      const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
      if (!activeVersion || activeVersion.strategy !== "loaded-first" && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
        versions[version] = shared;
      }
    };
    const promises = [];
    const initFn = (mod) => mod && mod.init && mod.init(shareScope[shareScopeName]);
    const initRemoteModule = async (key) => {
      const { module } = await this._getRemoteModuleAndOptions(key);
      if (module.getEntry) {
        const entry = await module.getEntry();
        if (!module.inited) {
          initFn(entry);
          module.inited = true;
        }
      }
    };
    Object.keys(this.options.shared).forEach((shareName) => {
      const sharedArr = this.options.shared[shareName];
      sharedArr.forEach((shared) => {
        if (shared.scope.includes(shareScopeName)) {
          register(shareName, shared);
        }
      });
    });
    if (strategy === "version-first") {
      this.options.remotes.forEach((remote) => {
        if (remote.shareScope === shareScopeName) {
          promises.push(initRemoteModule(remote.name));
        }
      });
    }
    return promises;
  }
  initShareScopeMap(scopeName, shareScope) {
    this.shareScopeMap[scopeName] = shareScope;
    this.hooks.lifecycle.initContainerShareScopeMap.emit({
      shareScope,
      options: this.options,
      origin: this
    });
  }
  formatOptions(globalOptions, userOptions) {
    const formatShareOptions = formatShareConfigs(userOptions.shared || {}, userOptions.name);
    const shared = _extends2({}, globalOptions.shared);
    Object.keys(formatShareOptions).forEach((shareKey) => {
      if (!shared[shareKey]) {
        shared[shareKey] = formatShareOptions[shareKey];
      } else {
        formatShareOptions[shareKey].forEach((newUserSharedOptions) => {
          const isSameVersion = shared[shareKey].find((sharedVal) => sharedVal.version === newUserSharedOptions.version);
          if (!isSameVersion) {
            shared[shareKey].push(newUserSharedOptions);
          }
        });
      }
    });
    const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
      origin: this,
      userOptions,
      options: globalOptions,
      shareInfo: shared
    });
    const userRemotes = userOptionsRes.remotes || [];
    const remotes = userRemotes.reduce((res, remote) => {
      this.registerRemote(remote, res, {
        force: false
      });
      return res;
    }, globalOptionsRes.remotes);
    const sharedKeys = Object.keys(formatShareOptions);
    sharedKeys.forEach((sharedKey) => {
      const sharedVals = formatShareOptions[sharedKey];
      sharedVals.forEach((sharedVal) => {
        const registeredShared = getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
        if (!registeredShared && sharedVal && sharedVal.lib) {
          this.setShared({
            pkgName: sharedKey,
            lib: sharedVal.lib,
            get: sharedVal.get,
            loaded: true,
            shared: sharedVal,
            from: userOptions.name
          });
        }
      });
    });
    const plugins = [
      ...globalOptionsRes.plugins
    ];
    if (userOptionsRes.plugins) {
      userOptionsRes.plugins.forEach((plugin) => {
        if (!plugins.includes(plugin)) {
          plugins.push(plugin);
        }
      });
    }
    const optionsRes = _extends2({}, globalOptions, userOptions, {
      plugins,
      remotes,
      shared
    });
    this.hooks.lifecycle.init.emit({
      origin: this,
      options: optionsRes
    });
    return optionsRes;
  }
  registerPlugins(plugins) {
    const pluginRes = registerPlugins$1(plugins, [
      this.hooks,
      this.snapshotHandler.hooks,
      this.loaderHook
    ]);
    this.options.plugins = this.options.plugins.reduce((res, plugin) => {
      if (!plugin)
        return res;
      if (res && !res.find((item) => item.name === plugin.name)) {
        res.push(plugin);
      }
      return res;
    }, pluginRes || []);
  }
  setShared({ pkgName, shared, from: from2, lib, loading, loaded, get }) {
    const { version, scope = "default" } = shared, shareInfo = _object_without_properties_loose2(shared, [
      "version",
      "scope"
    ]);
    const scopes = Array.isArray(scope) ? scope : [
      scope
    ];
    scopes.forEach((sc) => {
      if (!this.shareScopeMap[sc]) {
        this.shareScopeMap[sc] = {};
      }
      if (!this.shareScopeMap[sc][pkgName]) {
        this.shareScopeMap[sc][pkgName] = {};
      }
      if (this.shareScopeMap[sc][pkgName][version]) {
        return;
      }
      this.shareScopeMap[sc][pkgName][version] = _extends2({
        version,
        scope: [
          "default"
        ]
      }, shareInfo, {
        lib,
        loaded,
        loading
      });
      if (get) {
        this.shareScopeMap[sc][pkgName][version].get = get;
      }
    });
  }
  removeRemote(remote) {
    const { name: name2 } = remote;
    const remoteIndex = this.options.remotes.findIndex((item) => item.name === name2);
    if (remoteIndex !== -1) {
      this.options.remotes.splice(remoteIndex, 1);
    }
    const loadedModule = this.moduleCache.get(remote.name);
    if (loadedModule) {
      const key = loadedModule.remoteInfo.entryGlobalName;
      if (globalThis[key]) {
        delete globalThis[key];
      }
      const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
      if (globalLoading[remoteEntryUniqueKey]) {
        delete globalLoading[remoteEntryUniqueKey];
      }
      this.moduleCache.delete(remote.name);
    }
  }
  registerRemote(remote, targetRemotes, options) {
    const normalizeRemote = () => {
      if (remote.alias) {
        const findEqual = targetRemotes.find((item) => {
          var _item_alias;
          return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
        });
        assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
      }
      if ("entry" in remote) {
        if (isBrowserEnv() && !remote.entry.startsWith("http")) {
          remote.entry = new URL(remote.entry, window.location.origin).href;
        }
      }
      if (!remote.shareScope) {
        remote.shareScope = DEFAULT_SCOPE;
      }
      if (!remote.type) {
        remote.type = DEFAULT_REMOTE_TYPE;
      }
    };
    const registeredRemote = targetRemotes.find((item) => item.name === remote.name);
    if (!registeredRemote) {
      normalizeRemote();
      targetRemotes.push(remote);
    } else {
      const messages = [
        `The remote "${remote.name}" is already registered.`,
        (options == null ? void 0 : options.force) ? "Hope you have known that OVERRIDE it may have some unexpected errors" : 'If you want to merge the remote, you can set "force: true".'
      ];
      if (options == null ? void 0 : options.force) {
        this.removeRemote(registeredRemote);
        normalizeRemote();
        targetRemotes.push(remote);
      }
      warn(messages.join(" "));
    }
  }
  registerRemotes(remotes, options) {
    remotes.forEach((remote) => {
      this.registerRemote(remote, this.options.remotes, {
        force: options == null ? void 0 : options.force
      });
    });
  }
  constructor(userOptions) {
    this.hooks = new PluginSystem({
      beforeInit: new SyncWaterfallHook("beforeInit"),
      init: new SyncHook(),
      beforeRequest: new AsyncWaterfallHook("beforeRequest"),
      afterResolve: new AsyncWaterfallHook("afterResolve"),
      // maybe will change, temporarily for internal use only
      beforeInitContainer: new AsyncWaterfallHook("beforeInitContainer"),
      // maybe will change, temporarily for internal use only
      initContainerShareScopeMap: new AsyncWaterfallHook("initContainer"),
      // maybe will change, temporarily for internal use only
      initContainer: new AsyncWaterfallHook("initContainer"),
      onLoad: new AsyncHook("onLoad"),
      handlePreloadModule: new SyncHook("handlePreloadModule"),
      errorLoadRemote: new AsyncHook("errorLoadRemote"),
      beforeLoadShare: new AsyncWaterfallHook("beforeLoadShare"),
      // not used yet
      loadShare: new AsyncHook(),
      resolveShare: new SyncWaterfallHook("resolveShare"),
      beforePreloadRemote: new AsyncHook(),
      generatePreloadAssets: new AsyncHook("generatePreloadAssets"),
      // not used yet
      afterPreloadRemote: new AsyncHook()
    });
    this.version = "0.1.11";
    this.moduleCache = /* @__PURE__ */ new Map();
    this.loaderHook = new PluginSystem({
      // FIXME: may not be suitable , not open to the public yet
      getModuleInfo: new SyncHook(),
      createScript: new SyncHook(),
      createLink: new SyncHook(),
      // only work for manifest , so not open to the public yet
      fetch: new AsyncHook("fetch")
    });
    const defaultOptions = {
      id: getBuilderId(),
      name: userOptions.name,
      plugins: [
        snapshotPlugin(),
        generatePreloadAssetsPlugin()
      ],
      remotes: [],
      shared: {},
      inBrowser: isBrowserEnv()
    };
    this.name = userOptions.name;
    this.options = defaultOptions;
    this.shareScopeMap = {};
    this._setGlobalShareScopeMap();
    this.snapshotHandler = new SnapshotHandler(this);
    this.registerPlugins([
      ...defaultOptions.plugins,
      ...userOptions.plugins || []
    ]);
    this.options = this.formatOptions(defaultOptions, userOptions);
  }
};
var FederationInstance = null;
function init(options) {
  const instance = getGlobalFederationInstance(options.name, options.version);
  if (!instance) {
    const FederationConstructor = getGlobalFederationConstructor() || FederationHost;
    FederationInstance = new FederationConstructor(options);
    setGlobalFederationInstance(FederationInstance);
    return FederationInstance;
  } else {
    instance.initOptions(options);
    if (!FederationInstance) {
      FederationInstance = instance;
    }
    return instance;
  }
}
setGlobalFederationConstructor(FederationHost);

// federation.js
function encodeInlineESM(code) {
  const encodedCode = encodeURIComponent(code);
  const inlineESM = `data:text/javascript;charset=utf-8,${encodedCode}`;
  return inlineESM;
}
var instantiatePatch = (federationOptions) => {
  init(federationOptions);
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
  };
  importMap.imports["@my/remote"] = inlineESM;
  importShim.addImportMap(importMap);
};
var federation_default = instantiatePatch;

// host.ts
federation_default({
  name: "host",
  remotes: [
    {
      type: "esm",
      name: "@my",
      // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
      // Preloading depends on the use of the mf-manifest.json file type
      entry: "http://localhost:3000/remote.js",
      alias: "@my"
    }
  ]
});
function host() {
  const host$ = of("Hello from the host!");
  host$.subscribe((msg) => {
    console.log(msg);
  });
  console.log("The host was build on 2024-05-04T02:28:27.003Z");
  import("@my/remote").then((m) => {
    m = m.default;
    console.log("from native import", m);
    const remote$ = m.remote();
    remote$.subscribe((msg) => {
      console.log(msg);
    });
  });
}
var host_default = host();
export {
  host_default as default,
  host
};
//# sourceMappingURL=host.js.map
