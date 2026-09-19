var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function k(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;
    function ee(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }
    function te(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ne(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ne(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ee(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              ne(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ee(a, u)), (c += ne(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + ee(a, u++)), (c += ne(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ne(te(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function re(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ne(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ie(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var j =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      M = {
        map: re,
        forEach: function (e, t, n) {
          re(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            re(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            re(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = M),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ie,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, j));
        } catch (e) {
          j(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.8`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), O()));
        else {
          var t = n(l);
          t !== null && ee(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ee(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var k = new MessageChannel(),
        A = k.port2;
      ((k.port1.onmessage = D),
        (O = function () {
          A.postMessage(null);
        }));
    } else
      O = function () {
        _(D, 0);
      };
    function ee(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ee(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`));
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      D = Symbol.for(`react.memo`),
      O = Symbol.for(`react.lazy`),
      k = Symbol.for(`react.activity`),
      A = Symbol.for(`react.memo_cache_sentinel`),
      ee = Symbol.iterator;
    function te(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ee && e[ee]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var ne = Symbol.for(`react.client.reference`);
    function re(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case T:
          return `Suspense`;
        case E:
          return `SuspenseList`;
        case k:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case D:
            return (
              (t = e.displayName || null),
              t === null ? re(e.type) || `Memo` : t
            );
          case O:
            ((t = e._payload), (e = e._init));
            try {
              return re(e(t));
            } catch {}
        }
      return null;
    }
    var ie = Array.isArray,
      j = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      M = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ae = { pending: !1, data: null, method: null, action: null },
      oe = [],
      N = -1;
    function se(e) {
      return { current: e };
    }
    function P(e) {
      0 > N || ((e.current = oe[N]), (oe[N] = null), N--);
    }
    function F(e, t) {
      (N++, (oe[N] = e.current), (e.current = t));
    }
    var ce = se(null),
      le = se(null),
      ue = se(null),
      de = se(null);
    function fe(e, t) {
      switch ((F(ue, t), F(le, e), F(ce, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (P(ce), F(ce, e));
    }
    function pe() {
      (P(ce), P(le), P(ue));
    }
    function me(e) {
      e.memoizedState !== null && F(de, e);
      var t = ce.current,
        n = Hd(t, e.type);
      t !== n && (F(le, e), F(ce, n));
    }
    function he(e) {
      (le.current === e && (P(ce), P(le)),
        de.current === e && (P(de), (Qf._currentValue = ae)));
    }
    var I, ge;
    function _e(e) {
      if (I === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((I = (t && t[1]) || ``),
            (ge =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        I +
        e +
        ge
      );
    }
    var ve = !1;
    function ye(e, t) {
      if (!e || ve) return ``;
      ve = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((ve = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? _e(n) : ``;
    }
    function be(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return _e(e.type);
        case 16:
          return _e(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? _e(`Suspense Fallback`)
            : _e(`Suspense`);
        case 19:
          return _e(`SuspenseList`);
        case 0:
        case 15:
          return ye(e.type, !1);
        case 11:
          return ye(e.type.render, !1);
        case 1:
          return ye(e.type, !0);
        case 31:
          return _e(`Activity`);
        default:
          return ``;
      }
    }
    function xe(e) {
      try {
        var t = ``,
          n = null;
        do ((t += be(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Se = Object.prototype.hasOwnProperty,
      Ce = t.unstable_scheduleCallback,
      we = t.unstable_cancelCallback,
      Te = t.unstable_shouldYield,
      Ee = t.unstable_requestPaint,
      De = t.unstable_now,
      L = t.unstable_getCurrentPriorityLevel,
      Oe = t.unstable_ImmediatePriority,
      ke = t.unstable_UserBlockingPriority,
      Ae = t.unstable_NormalPriority,
      je = t.unstable_LowPriority,
      Me = t.unstable_IdlePriority,
      Ne = t.log,
      Pe = t.unstable_setDisableYieldValue,
      Fe = null,
      Ie = null;
    function Le(e) {
      if (
        (typeof Ne == `function` && Pe(e),
        Ie && typeof Ie.setStrictMode == `function`)
      )
        try {
          Ie.setStrictMode(Fe, e);
        } catch {}
    }
    var Re = Math.clz32 ? Math.clz32 : Ve,
      ze = Math.log,
      Be = Math.LN2;
    function Ve(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((ze(e) / Be) | 0)) | 0);
    }
    var He = 256,
      Ue = 262144,
      We = 4194304;
    function Ge(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ke(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ge(n)))
                : (i = Ge(o))
              : (i = Ge(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ge(n)))
                  : (i = Ge(o)))
              : (i = Ge(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function qe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Je(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ye() {
      var e = We;
      return ((We <<= 1), !(We & 62914560) && (We = 4194304), e);
    }
    function Xe(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ze(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Qe(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Re(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && $e(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function $e(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Re(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function et(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Re(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function tt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : nt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function nt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function rt(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function it() {
      var e = M.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function at(e, t) {
      var n = M.p;
      try {
        return ((M.p = e), t());
      } finally {
        M.p = n;
      }
    }
    var ot = Math.random().toString(36).slice(2),
      R = `__reactFiber$` + ot,
      st = `__reactProps$` + ot,
      ct = `__reactContainer$` + ot,
      lt = `__reactEvents$` + ot,
      ut = `__reactListeners$` + ot,
      dt = `__reactHandles$` + ot,
      ft = `__reactResources$` + ot,
      pt = `__reactMarker$` + ot;
    function mt(e) {
      (delete e[R], delete e[st], delete e[lt], delete e[ut], delete e[dt]);
    }
    function ht(e) {
      var t = e[R];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[ct] || n[R])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null;) {
              if ((n = e[R])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function gt(e) {
      if ((e = e[R] || e[ct])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function _t(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function vt(e) {
      var t = e[ft];
      return (
        (t ||= e[ft] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function z(e) {
      e[pt] = !0;
    }
    var yt = new Set(),
      bt = {};
    function xt(e, t) {
      (St(e, t), St(e + `Capture`, t));
    }
    function St(e, t) {
      for (bt[e] = t, e = 0; e < t.length; e++) yt.add(t[e]);
    }
    var Ct = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      wt = {},
      Tt = {};
    function Et(e) {
      return Se.call(Tt, e)
        ? !0
        : Se.call(wt, e)
          ? !1
          : Ct.test(e)
            ? (Tt[e] = !0)
            : ((wt[e] = !0), !1);
    }
    function Dt(e, t, n) {
      if (Et(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }
    function Ot(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function kt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function At(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function jt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Mt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Nt(e) {
      if (!e._valueTracker) {
        var t = jt(e) ? `checked` : `value`;
        e._valueTracker = Mt(e, t, `` + e[t]);
      }
    }
    function Pt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = jt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Ft(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var It = /[\n"\\]/g;
    function Lt(e) {
      return e.replace(It, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Rt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + At(t))
            : e.value !== `` + At(t) && (e.value = `` + At(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Bt(e, o, At(n))
          : Bt(e, o, At(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + At(s))
          : e.removeAttribute(`name`));
    }
    function zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Nt(e);
          return;
        }
        ((n = n == null ? `` : `` + At(n)),
          (t = t == null ? n : `` + At(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Nt(e));
    }
    function Bt(e, t, n) {
      (t === `number` && Ft(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Vt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + At(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ht(e, t, n) {
      if (
        t != null &&
        ((t = `` + At(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + At(n);
    }
    function Ut(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ie(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = At(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Nt(e));
    }
    function Wt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Kt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Gt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function qt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Kt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Kt(e, o, t[o]);
    }
    function Jt(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Yt = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Xt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Zt(e) {
      return Xt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function Qt() {}
    var $t = null;
    function en(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var tn = null,
      nn = null;
    function rn(e) {
      var t = gt(e);
      if (t && (e = t.stateNode)) {
        var n = e[st] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Rt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Lt(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[st] || null;
                  if (!a) throw Error(i(90));
                  Rt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Pt(r));
            }
            break a;
          case `textarea`:
            Ht(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Vt(e, !!n.multiple, t, !1));
        }
      }
    }
    var an = !1;
    function on(e, t, n) {
      if (an) return e(t, n);
      an = !0;
      try {
        return e(t);
      } finally {
        if (
          ((an = !1),
          (tn !== null || nn !== null) &&
            (bu(), tn && ((t = tn), (e = nn), (nn = tn = null), rn(t), e)))
        )
          for (t = 0; t < e.length; t++) rn(e[t]);
      }
    }
    function sn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[st] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var cn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      ln = !1;
    if (cn)
      try {
        var un = {};
        (Object.defineProperty(un, "passive", {
          get: function () {
            ln = !0;
          },
        }),
          window.addEventListener(`test`, un, un),
          window.removeEventListener(`test`, un, un));
      } catch {
        ln = !1;
      }
    var dn = null,
      fn = null,
      pn = null;
    function mn() {
      if (pn) return pn;
      var e,
        t = fn,
        n = t.length,
        r,
        i = `value` in dn ? dn.value : dn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (pn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function hn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function gn() {
      return !0;
    }
    function _n() {
      return !1;
    }
    function vn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? gn
            : _n),
          (this.isPropagationStopped = _n),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = gn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = gn));
          },
          persist: function () {},
          isPersistent: gn,
        }),
        t
      );
    }
    var yn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      bn = vn(yn),
      xn = h({}, yn, { view: 0, detail: 0 }),
      Sn = vn(xn),
      Cn,
      wn,
      Tn,
      En = h({}, xn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ln,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Tn &&
                (Tn && e.type === `mousemove`
                  ? ((Cn = e.screenX - Tn.screenX),
                    (wn = e.screenY - Tn.screenY))
                  : (wn = Cn = 0),
                (Tn = e)),
              Cn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : wn;
        },
      }),
      Dn = vn(En),
      On = vn(h({}, En, { dataTransfer: 0 })),
      kn = vn(h({}, xn, { relatedTarget: 0 })),
      An = vn(
        h({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      jn = vn(
        h({}, yn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Mn = vn(h({}, yn, { data: 0 })),
      Nn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Pn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Fn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function In(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Fn[e])
          ? !!t[e]
          : !1;
    }
    function Ln() {
      return In;
    }
    var Rn = vn(
        h({}, xn, {
          key: function (e) {
            if (e.key) {
              var t = Nn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = hn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Pn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Ln,
          charCode: function (e) {
            return e.type === `keypress` ? hn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? hn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      zn = vn(
        h({}, En, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Bn = vn(
        h({}, xn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Ln,
        }),
      ),
      Vn = vn(h({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = vn(
        h({}, En, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Un = vn(h({}, yn, { newState: 0, oldState: 0 })),
      Wn = [9, 13, 27, 32],
      Gn = cn && `CompositionEvent` in window,
      Kn = null;
    cn && `documentMode` in document && (Kn = document.documentMode);
    var qn = cn && `TextEvent` in window && !Kn,
      Jn = cn && (!Gn || (Kn && 8 < Kn && 11 >= Kn)),
      Yn = ` `,
      Xn = !1;
    function Zn(e, t) {
      switch (e) {
        case `keyup`:
          return Wn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Qn(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var $n = !1;
    function er(e, t) {
      switch (e) {
        case `compositionend`:
          return Qn(t);
        case `keypress`:
          return t.which === 32 ? ((Xn = !0), Yn) : null;
        case `textInput`:
          return ((e = t.data), e === Yn && Xn ? null : e);
        default:
          return null;
      }
    }
    function tr(e, t) {
      if ($n)
        return e === `compositionend` || (!Gn && Zn(e, t))
          ? ((e = mn()), (pn = fn = dn = null), ($n = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Jn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var nr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!nr[e.type] : t === `textarea`;
    }
    function ir(e, t, n, r) {
      (tn ? (nn ? nn.push(r) : (nn = [r])) : (tn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new bn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var ar = null,
      or = null;
    function sr(e) {
      yd(e, 0);
    }
    function cr(e) {
      if (Pt(_t(e))) return e;
    }
    function lr(e, t) {
      if (e === `change`) return t;
    }
    var ur = !1;
    if (cn) {
      var dr;
      if (cn) {
        var fr = `oninput` in document;
        if (!fr) {
          var pr = document.createElement(`div`);
          (pr.setAttribute(`oninput`, `return;`),
            (fr = typeof pr.oninput == `function`));
        }
        dr = fr;
      } else dr = !1;
      ur = dr && (!document.documentMode || 9 < document.documentMode);
    }
    function mr() {
      ar && (ar.detachEvent(`onpropertychange`, hr), (or = ar = null));
    }
    function hr(e) {
      if (e.propertyName === `value` && cr(or)) {
        var t = [];
        (ir(t, or, e, en(e)), on(sr, t));
      }
    }
    function gr(e, t, n) {
      e === `focusin`
        ? (mr(), (ar = t), (or = n), ar.attachEvent(`onpropertychange`, hr))
        : e === `focusout` && mr();
    }
    function _r(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return cr(or);
    }
    function vr(e, t) {
      if (e === `click`) return cr(t);
    }
    function yr(e, t) {
      if (e === `input` || e === `change`) return cr(t);
    }
    function br(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var xr = typeof Object.is == `function` ? Object.is : br;
    function Sr(e, t) {
      if (xr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Se.call(t, i) || !xr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Cr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function wr(e, t) {
      var n = Cr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Cr(n);
      }
    }
    function Tr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Tr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Er(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Ft(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ft(e.document);
      }
      return t;
    }
    function Dr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Or = cn && `documentMode` in document && 11 >= document.documentMode,
      kr = null,
      Ar = null,
      jr = null,
      Mr = !1;
    function Nr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Mr ||
        kr == null ||
        kr !== Ft(r) ||
        ((r = kr),
        `selectionStart` in r && Dr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (jr && Sr(jr, r)) ||
          ((jr = r),
          (r = Ed(Ar, `onSelect`)),
          0 < r.length &&
            ((t = new bn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = kr))));
    }
    function Pr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Fr = {
        animationend: Pr(`Animation`, `AnimationEnd`),
        animationiteration: Pr(`Animation`, `AnimationIteration`),
        animationstart: Pr(`Animation`, `AnimationStart`),
        transitionrun: Pr(`Transition`, `TransitionRun`),
        transitionstart: Pr(`Transition`, `TransitionStart`),
        transitioncancel: Pr(`Transition`, `TransitionCancel`),
        transitionend: Pr(`Transition`, `TransitionEnd`),
      },
      Ir = {},
      Lr = {};
    cn &&
      ((Lr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Fr.animationend.animation,
        delete Fr.animationiteration.animation,
        delete Fr.animationstart.animation),
      `TransitionEvent` in window || delete Fr.transitionend.transition);
    function Rr(e) {
      if (Ir[e]) return Ir[e];
      if (!Fr[e]) return e;
      var t = Fr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Lr) return (Ir[e] = t[n]);
      return e;
    }
    var zr = Rr(`animationend`),
      Br = Rr(`animationiteration`),
      Vr = Rr(`animationstart`),
      Hr = Rr(`transitionrun`),
      Ur = Rr(`transitionstart`),
      Wr = Rr(`transitioncancel`),
      Gr = Rr(`transitionend`),
      Kr = new Map(),
      qr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    qr.push(`scrollEnd`);
    function Jr(e, t) {
      (Kr.set(e, t), xt(t, [e]));
    }
    var Yr =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Xr = [],
      Zr = 0,
      Qr = 0;
    function $r() {
      for (var e = Zr, t = (Qr = Zr = 0); t < e;) {
        var n = Xr[t];
        Xr[t++] = null;
        var r = Xr[t];
        Xr[t++] = null;
        var i = Xr[t];
        Xr[t++] = null;
        var a = Xr[t];
        if (((Xr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && ri(n, i, a);
      }
    }
    function ei(e, t, n, r) {
      ((Xr[Zr++] = e),
        (Xr[Zr++] = t),
        (Xr[Zr++] = n),
        (Xr[Zr++] = r),
        (Qr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ti(e, t, n, r) {
      return (ei(e, t, n, r), ii(e));
    }
    function ni(e, t) {
      return (ei(e, null, null, t), ii(e));
    }
    function ri(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Re(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ii(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var ai = {};
    function oi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function si(e, t, n, r) {
      return new oi(e, t, n, r);
    }
    function ci(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function li(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = si(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function ui(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function di(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) ci(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, ce.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case k:
            return (
              (e = si(31, n, t, a)),
              (e.elementType = k),
              (e.lanes = o),
              e
            );
          case y:
            return fi(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = si(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case T:
            return (
              (e = si(13, n, t, a)),
              (e.elementType = T),
              (e.lanes = o),
              e
            );
          case E:
            return (
              (e = si(19, n, t, a)),
              (e.elementType = E),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case D:
                  s = 14;
                  break a;
                case O:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = si(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function fi(e, t, n, r) {
      return ((e = si(7, e, r, t)), (e.lanes = n), e);
    }
    function pi(e, t, n) {
      return ((e = si(6, e, null, t)), (e.lanes = n), e);
    }
    function mi(e) {
      var t = si(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function hi(e, t, n) {
      return (
        (t = si(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var gi = new WeakMap();
    function _i(e, t) {
      if (typeof e == `object` && e) {
        var n = gi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: xe(t) }), gi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: xe(t) };
    }
    var vi = [],
      yi = 0,
      bi = null,
      xi = 0,
      Si = [],
      Ci = 0,
      wi = null,
      Ti = 1,
      Ei = ``;
    function Di(e, t) {
      ((vi[yi++] = xi), (vi[yi++] = bi), (bi = e), (xi = t));
    }
    function Oi(e, t, n) {
      ((Si[Ci++] = Ti), (Si[Ci++] = Ei), (Si[Ci++] = wi), (wi = e));
      var r = Ti;
      e = Ei;
      var i = 32 - Re(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Re(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ti = (1 << (32 - Re(t) + i)) | (n << i) | r),
          (Ei = a + e));
      } else ((Ti = (1 << a) | (n << i) | r), (Ei = e));
    }
    function ki(e) {
      e.return !== null && (Di(e, 1), Oi(e, 1, 0));
    }
    function Ai(e) {
      for (; e === bi;)
        ((bi = vi[--yi]), (vi[yi] = null), (xi = vi[--yi]), (vi[yi] = null));
      for (; e === wi;)
        ((wi = Si[--Ci]),
          (Si[Ci] = null),
          (Ei = Si[--Ci]),
          (Si[Ci] = null),
          (Ti = Si[--Ci]),
          (Si[Ci] = null));
    }
    function ji(e, t) {
      ((Si[Ci++] = Ti),
        (Si[Ci++] = Ei),
        (Si[Ci++] = wi),
        (Ti = t.id),
        (Ei = t.overflow),
        (wi = e));
    }
    var Mi = null,
      B = null,
      V = !1,
      Ni = null,
      Pi = !1,
      Fi = Error(i(519));
    function Ii(e) {
      throw (
        Hi(
          _i(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Fi
      );
    }
    function Li(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[R] = e), (t[st] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            zt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Ut(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = Qt),
            (t = !0))
          : (t = !1),
        t || Ii(e, !0));
    }
    function Ri(e) {
      for (Mi = e.return; Mi;)
        switch (Mi.tag) {
          case 5:
          case 31:
          case 13:
            Pi = !1;
            return;
          case 27:
          case 3:
            Pi = !0;
            return;
          default:
            Mi = Mi.return;
        }
    }
    function zi(e) {
      if (e !== Mi) return !1;
      if (!V) return (Ri(e), (V = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && B && Ii(e),
        Ri(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        B = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        B = uf(e);
      } else
        t === 27
          ? ((t = B), Zd(e.type) ? ((e = lf), (lf = null), (B = e)) : (B = t))
          : (B = Mi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Bi() {
      ((B = Mi = null), (V = !1));
    }
    function Vi() {
      var e = Ni;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Ni = null)),
        e
      );
    }
    function Hi(e) {
      Ni === null ? (Ni = [e]) : Ni.push(e);
    }
    var Ui = se(null),
      Wi = null,
      Gi = null;
    function Ki(e, t, n) {
      (F(Ui, t._currentValue), (t._currentValue = n));
    }
    function qi(e) {
      ((e._currentValue = Ui.current), P(Ui));
    }
    function Ji(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Yi(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Ji(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Ji(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function Xi(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            xr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === de.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && Yi(t, e, n, r), (t.flags |= 262144));
    }
    function Zi(e) {
      for (e = e.firstContext; e !== null;) {
        if (!xr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Qi(e) {
      ((Wi = e),
        (Gi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function $i(e) {
      return ta(Wi, e);
    }
    function ea(e, t) {
      return (Wi === null && Qi(e), ta(e, t));
    }
    function ta(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Gi === null)) {
        if (e === null) throw Error(i(308));
        ((Gi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Gi = Gi.next = t;
      return n;
    }
    var na =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      ra = t.unstable_scheduleCallback,
      ia = t.unstable_NormalPriority,
      aa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function oa() {
      return { controller: new na(), data: new Map(), refCount: 0 };
    }
    function sa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ra(ia, function () {
            e.controller.abort();
          }));
    }
    var ca = null,
      la = 0,
      ua = 0,
      da = null;
    function fa(e, t) {
      if (ca === null) {
        var n = (ca = []);
        ((la = 0),
          (ua = dd()),
          (da = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (la++, t.then(pa, pa), t);
    }
    function pa() {
      if (--la === 0 && ca !== null) {
        da !== null && (da.status = `fulfilled`);
        var e = ca;
        ((ca = null), (ua = 0), (da = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ma(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var ha = j.S;
    j.S = function (e, t) {
      ((eu = De()),
        typeof t == `object` && t && typeof t.then == `function` && fa(e, t),
        ha !== null && ha(e, t));
    };
    var ga = se(null);
    function _a() {
      var e = ga.current;
      return e === null ? q.pooledCache : e;
    }
    function va(e, t) {
      t === null ? F(ga, ga.current) : F(ga, t.pool);
    }
    function ya() {
      var e = _a();
      return e === null ? null : { parent: aa._currentValue, pool: e };
    }
    var ba = Error(i(460)),
      xa = Error(i(474)),
      Sa = Error(i(542)),
      Ca = { then: function () {} };
    function wa(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ta(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(Qt, Qt), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), ka(e), e);
        default:
          if (typeof t.status == `string`) t.then(Qt, Qt);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), ka(e), e);
          }
          throw ((Da = t), ba);
      }
    }
    function Ea(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Da = e), ba)
          : e;
      }
    }
    var Da = null;
    function Oa() {
      if (Da === null) throw Error(i(459));
      var e = Da;
      return ((Da = null), e);
    }
    function ka(e) {
      if (e === ba || e === Sa) throw Error(i(483));
    }
    var Aa = null,
      ja = 0;
    function Ma(e) {
      var t = ja;
      return ((ja += 1), Aa === null && (Aa = []), Ta(Aa, e, t));
    }
    function Na(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Pa(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Fa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = li(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = pi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === O &&
                  Ea(i) === t.type))
            ? ((t = a(t, n.props)), Na(t, n), (t.return = e), t)
            : ((t = di(n.type, n.key, n.props, null, e.mode, r)),
              Na(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = hi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = fi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = pi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = di(t.type, t.key, t.props, null, e.mode, n)),
                Na(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = hi(t, e.mode, n)), (t.return = e), t);
            case O:
              return ((t = Ea(t)), f(e, t, n));
          }
          if (ie(t) || te(t))
            return ((t = fi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ma(t), n);
          if (t.$$typeof === C) return f(e, ea(e, t), n);
          Pa(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case O:
              return ((n = Ea(n)), p(e, t, n, r));
          }
          if (ie(n) || te(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ma(n), r);
          if (n.$$typeof === C) return p(e, t, ea(e, n), r);
          Pa(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case O:
              return ((r = Ea(r)), m(e, t, n, r, i));
          }
          if (ie(r) || te(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Ma(r), i);
          if (r.$$typeof === C) return m(e, t, n, ea(t, r), i);
          Pa(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), V && Di(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (V && Di(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          V && Di(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), V && Di(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (V && Di(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          V && Di(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === O &&
                        Ea(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        Na(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === y
                  ? ((c = fi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = di(o.type, o.key, o.props, null, e.mode, c)),
                    Na(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = hi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case O:
              return ((o = Ea(o)), b(e, r, o, c));
          }
          if (ie(o)) return h(e, r, o, c);
          if (te(o)) {
            if (((l = te(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, Ma(o), c);
          if (o.$$typeof === C) return b(e, r, ea(e, o), c);
          Pa(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = pi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          ja = 0;
          var i = b(e, t, n, r);
          return ((Aa = null), i);
        } catch (t) {
          if (t === ba || t === Sa) throw t;
          var a = si(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ia = Fa(!0),
      La = Fa(!1),
      Ra = !1;
    function za(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ba(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Va(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ha(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ii(e)),
          ri(e, null, n),
          t
        );
      }
      return (ei(e, r, t, n), ii(e));
    }
    function Ua(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), et(e, n));
      }
    }
    function Wa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Ga = !1;
    function Ka() {
      if (Ga) {
        var e = da;
        if (e !== null) throw e;
      }
    }
    function qa(e, t, n, r) {
      Ga = !1;
      var i = e.updateQueue;
      Ra = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === ua && (Ga = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ra = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ja(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ya(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Ja(n[e], t);
    }
    var Xa = se(null),
      Za = se(0);
    function Qa(e, t) {
      ((e = Ul), F(Za, e), F(Xa, t), (Ul = e | t.baseLanes));
    }
    function $a() {
      (F(Za, Ul), F(Xa, Xa.current));
    }
    function eo() {
      ((Ul = Za.current), P(Xa), P(Za));
    }
    var to = se(null),
      no = null;
    function ro(e) {
      var t = e.alternate;
      (F(co, co.current & 1),
        F(to, e),
        no === null &&
          (t === null || Xa.current !== null || t.memoizedState !== null) &&
          (no = e));
    }
    function io(e) {
      (F(co, co.current), F(to, e), no === null && (no = e));
    }
    function ao(e) {
      e.tag === 22
        ? (F(co, co.current), F(to, e), no === null && (no = e))
        : oo(e);
    }
    function oo() {
      (F(co, co.current), F(to, to.current));
    }
    function so(e) {
      (P(to), no === e && (no = null), P(co));
    }
    var co = se(0);
    function lo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var uo = 0,
      H = null,
      U = null,
      fo = null,
      po = !1,
      mo = !1,
      ho = !1,
      go = 0,
      _o = 0,
      vo = null,
      yo = 0;
    function bo() {
      throw Error(i(321));
    }
    function xo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!xr(e[n], t[n])) return !1;
      return !0;
    }
    function So(e, t, n, r, i, a) {
      return (
        (uo = a),
        (H = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (j.H = e === null || e.memoizedState === null ? zs : Bs),
        (ho = !1),
        (a = n(r, i)),
        (ho = !1),
        mo && (a = wo(t, n, r, i)),
        Co(e),
        a
      );
    }
    function Co(e) {
      j.H = Rs;
      var t = U !== null && U.next !== null;
      if (((uo = 0), (fo = U = H = null), (po = !1), (_o = 0), (vo = null), t))
        throw Error(i(300));
      e === null ||
        rc ||
        ((e = e.dependencies), e !== null && Zi(e) && (rc = !0));
    }
    function wo(e, t, n, r) {
      H = e;
      var a = 0;
      do {
        if ((mo && (vo = null), (_o = 0), (mo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (fo = U = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((j.H = Vs), (o = t(n, r)));
      } while (mo);
      return o;
    }
    function To() {
      var e = j.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Mo(t) : t),
        (e = e.useState()[0]),
        (U === null ? null : U.memoizedState) !== e && (H.flags |= 1024),
        t
      );
    }
    function Eo() {
      var e = go !== 0;
      return ((go = 0), e);
    }
    function Do(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Oo(e) {
      if (po) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        po = !1;
      }
      ((uo = 0), (fo = U = H = null), (mo = !1), (_o = go = 0), (vo = null));
    }
    function ko() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        fo === null ? (H.memoizedState = fo = e) : (fo = fo.next = e),
        fo
      );
    }
    function Ao() {
      if (U === null) {
        var e = H.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = U.next;
      var t = fo === null ? H.memoizedState : fo.next;
      if (t !== null) ((fo = t), (U = e));
      else {
        if (e === null)
          throw H.alternate === null ? Error(i(467)) : Error(i(310));
        ((U = e),
          (e = {
            memoizedState: U.memoizedState,
            baseState: U.baseState,
            baseQueue: U.baseQueue,
            queue: U.queue,
            next: null,
          }),
          fo === null ? (H.memoizedState = fo = e) : (fo = fo.next = e));
      }
      return fo;
    }
    function jo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Mo(e) {
      var t = _o;
      return (
        (_o += 1),
        vo === null && (vo = []),
        (e = Ta(vo, e, t)),
        (t = H),
        (fo === null ? t.memoizedState : fo.next) === null &&
          ((t = t.alternate),
          (j.H = t === null || t.memoizedState === null ? zs : Bs)),
        e
      );
    }
    function No(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Mo(e);
        if (e.$$typeof === C) return $i(e);
      }
      throw Error(i(438, String(e)));
    }
    function Po(e) {
      var t = null,
        n = H.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = H.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = jo()), (H.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
      return (t.index++, n);
    }
    function Fo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Io(e) {
      return Lo(Ao(), U, e);
    }
    function Lo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (uo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ua && (d = !0));
            else if ((uo & p) === p) {
              ((u = u.next), p === ua && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (H.lanes |= p),
                (Gl |= p));
            ((f = u.action),
              ho && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (H.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !xr(o, e.memoizedState) && ((rc = !0), d && ((n = da), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ro(e) {
      var t = Ao(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (xr(o, t.memoizedState) || (rc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function zo(e, t, n) {
      var r = H,
        a = Ao(),
        o = V;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !xr((U || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (rc = !0)),
        (a = a.queue),
        us(Ho.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (fo !== null && fo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          as(9, { destroy: void 0 }, Vo.bind(null, r, a, n, t), null),
          q === null)
        )
          throw Error(i(349));
        o || uo & 127 || Bo(r, t, n);
      }
      return n;
    }
    function Bo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = H.updateQueue),
        t === null
          ? ((t = jo()), (H.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Vo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Uo(t) && Wo(e));
    }
    function Ho(e, t, n) {
      return n(function () {
        Uo(t) && Wo(e);
      });
    }
    function Uo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !xr(e, n);
      } catch {
        return !0;
      }
    }
    function Wo(e) {
      var t = ni(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Go(e) {
      var t = ko();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), ho)) {
          Le(!0);
          try {
            n();
          } finally {
            Le(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ko(e, t, n, r) {
      return ((e.baseState = n), Lo(e, U, typeof r == `function` ? r : Fo));
    }
    function qo(e, t, n, r, a) {
      if (Fs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (j.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Jo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Jo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = j.T,
          o = {};
        j.T = o;
        try {
          var s = n(i, r),
            c = j.S;
          (c !== null && c(o, s), Yo(e, t, s));
        } catch (n) {
          Zo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (j.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Yo(e, t, a));
        } catch (n) {
          Zo(e, t, n);
        }
    }
    function Yo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Xo(e, t, n);
            },
            function (n) {
              return Zo(e, t, n);
            },
          )
        : Xo(e, t, n);
    }
    function Xo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Qo(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Jo(e, n))));
    }
    function Zo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Qo(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Qo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function $o(e, t) {
      return t;
    }
    function es(e, t) {
      if (V) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = H;
            if (V) {
              if (B) {
                b: {
                  for (var i = B, a = Pi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((B = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ii(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = ko()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $o,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ms.bind(null, H, r)),
        (r.dispatch = n),
        (r = Go(!1)),
        (a = Ps.bind(null, H, !1, r.queue)),
        (r = ko()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = qo.bind(null, H, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ts(e) {
      return ns(Ao(), U, e);
    }
    function ns(e, t, n) {
      if (
        ((t = Lo(e, t, $o)[0]),
        (e = Io(Fo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Mo(t);
        } catch (e) {
          throw e === ba ? Sa : e;
        }
      else r = t;
      t = Ao();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((H.flags |= 2048),
          as(9, { destroy: void 0 }, rs.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function rs(e, t) {
      e.action = t;
    }
    function is(e) {
      var t = Ao(),
        n = U;
      if (n !== null) return ns(t, n, e);
      (Ao(), (t = t.memoizedState), (n = Ao()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function as(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = H.updateQueue),
        t === null && ((t = jo()), (H.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function os() {
      return Ao().memoizedState;
    }
    function ss(e, t, n, r) {
      var i = ko();
      ((H.flags |= e),
        (i.memoizedState = as(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function cs(e, t, n, r) {
      var i = Ao();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      U !== null && r !== null && xo(r, U.memoizedState.deps)
        ? (i.memoizedState = as(t, a, n, r))
        : ((H.flags |= e), (i.memoizedState = as(1 | t, a, n, r)));
    }
    function ls(e, t) {
      ss(8390656, 8, e, t);
    }
    function us(e, t) {
      cs(2048, 8, e, t);
    }
    function ds(e) {
      H.flags |= 4;
      var t = H.updateQueue;
      if (t === null) ((t = jo()), (H.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function fs(e) {
      var t = Ao().memoizedState;
      return (
        ds({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ps(e, t) {
      return cs(4, 2, e, t);
    }
    function ms(e, t) {
      return cs(4, 4, e, t);
    }
    function hs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function gs(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        cs(4, 4, hs.bind(null, t, e), n));
    }
    function _s() {}
    function vs(e, t) {
      var n = Ao();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && xo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ys(e, t) {
      var n = Ao();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && xo(t, r[1])) return r[0];
      if (((r = e()), ho)) {
        Le(!0);
        try {
          e();
        } finally {
          Le(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function bs(e, t, n) {
      return n === void 0 || (uo & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (H.lanes |= e), (Gl |= e), n);
    }
    function xs(e, t, n, r) {
      return xr(n, t)
        ? n
        : Xa.current === null
          ? !(uo & 42) || (uo & 1073741824 && !(Y & 261930))
            ? ((rc = !0), (e.memoizedState = n))
            : ((e = mu()), (H.lanes |= e), (Gl |= e), t)
          : ((e = bs(e, n, r)), xr(e, t) || (rc = !0), e);
    }
    function Ss(e, t, n, r, i) {
      var a = M.p;
      M.p = a !== 0 && 8 > a ? a : 8;
      var o = j.T,
        s = {};
      ((j.T = s), Ps(e, !1, t, n));
      try {
        var c = i(),
          l = j.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ns(e, t, ma(c, r), pu(e))
            : Ns(e, t, r, pu(e)));
      } catch (n) {
        Ns(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((M.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (j.T = o));
      }
    }
    function Cs() {}
    function ws(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Ts(e).queue;
      Ss(
        e,
        a,
        t,
        ae,
        n === null
          ? Cs
          : function () {
              return (Es(e), n(r));
            },
      );
    }
    function Ts(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ae,
        baseState: ae,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fo,
          lastRenderedState: ae,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Es(e) {
      var t = Ts(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Ns(e, t.next.queue, {}, pu()));
    }
    function Ds() {
      return $i(Qf);
    }
    function Os() {
      return Ao().memoizedState;
    }
    function ks() {
      return Ao().memoizedState;
    }
    function As(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Va(n);
            var r = Ha(t, e, n);
            (r !== null && (hu(r, t, n), Ua(r, t, n)),
              (t = { cache: oa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function js(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Fs(e)
          ? Is(t, n)
          : ((n = ti(e, t, n, r)), n !== null && (hu(n, e, r), Ls(n, t, r))));
    }
    function Ms(e, t, n) {
      Ns(e, t, n, pu());
    }
    function Ns(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Fs(e)) Is(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), xr(s, o)))
              return (ei(e, t, i, 0), q === null && $r(), !1);
          } catch {}
        if (((n = ti(e, t, i, r)), n !== null))
          return (hu(n, e, r), Ls(n, t, r), !0);
      }
      return !1;
    }
    function Ps(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Fs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ti(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Fs(e) {
      var t = e.alternate;
      return e === H || (t !== null && t === H);
    }
    function Is(e, t) {
      mo = po = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Ls(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), et(e, n));
      }
    }
    var Rs = {
      readContext: $i,
      use: No,
      useCallback: bo,
      useContext: bo,
      useEffect: bo,
      useImperativeHandle: bo,
      useLayoutEffect: bo,
      useInsertionEffect: bo,
      useMemo: bo,
      useReducer: bo,
      useRef: bo,
      useState: bo,
      useDebugValue: bo,
      useDeferredValue: bo,
      useTransition: bo,
      useSyncExternalStore: bo,
      useId: bo,
      useHostTransitionStatus: bo,
      useFormState: bo,
      useActionState: bo,
      useOptimistic: bo,
      useMemoCache: bo,
      useCacheRefresh: bo,
    };
    Rs.useEffectEvent = bo;
    var zs = {
        readContext: $i,
        use: No,
        useCallback: function (e, t) {
          return ((ko().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: $i,
        useEffect: ls,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            ss(4194308, 4, hs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return ss(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ss(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = ko();
          t = t === void 0 ? null : t;
          var r = e();
          if (ho) {
            Le(!0);
            try {
              e();
            } finally {
              Le(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = ko();
          if (n !== void 0) {
            var i = n(t);
            if (ho) {
              Le(!0);
              try {
                n(t);
              } finally {
                Le(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = js.bind(null, H, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = ko();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Go(e);
          var t = e.queue,
            n = Ms.bind(null, H, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: _s,
        useDeferredValue: function (e, t) {
          return bs(ko(), e, t);
        },
        useTransition: function () {
          var e = Go(!1);
          return (
            (e = Ss.bind(null, H, e.queue, !0, !1)),
            (ko().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = H,
            a = ko();
          if (V) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(i(349));
            Y & 127 || Bo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ls(Ho.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            as(9, { destroy: void 0 }, Vo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = ko(),
            t = q.identifierPrefix;
          if (V) {
            var n = Ei,
              r = Ti;
            ((n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = go++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = yo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ds,
        useFormState: es,
        useActionState: es,
        useOptimistic: function (e) {
          var t = ko();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ps.bind(null, H, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Po,
        useCacheRefresh: function () {
          return (ko().memoizedState = As.bind(null, H));
        },
        useEffectEvent: function (e) {
          var t = ko(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Bs = {
        readContext: $i,
        use: No,
        useCallback: vs,
        useContext: $i,
        useEffect: us,
        useImperativeHandle: gs,
        useInsertionEffect: ps,
        useLayoutEffect: ms,
        useMemo: ys,
        useReducer: Io,
        useRef: os,
        useState: function () {
          return Io(Fo);
        },
        useDebugValue: _s,
        useDeferredValue: function (e, t) {
          return xs(Ao(), U.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Io(Fo)[0],
            t = Ao().memoizedState;
          return [typeof e == `boolean` ? e : Mo(e), t];
        },
        useSyncExternalStore: zo,
        useId: Os,
        useHostTransitionStatus: Ds,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: function (e, t) {
          return Ko(Ao(), U, e, t);
        },
        useMemoCache: Po,
        useCacheRefresh: ks,
      };
    Bs.useEffectEvent = fs;
    var Vs = {
      readContext: $i,
      use: No,
      useCallback: vs,
      useContext: $i,
      useEffect: us,
      useImperativeHandle: gs,
      useInsertionEffect: ps,
      useLayoutEffect: ms,
      useMemo: ys,
      useReducer: Ro,
      useRef: os,
      useState: function () {
        return Ro(Fo);
      },
      useDebugValue: _s,
      useDeferredValue: function (e, t) {
        var n = Ao();
        return U === null ? bs(n, e, t) : xs(n, U.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ro(Fo)[0],
          t = Ao().memoizedState;
        return [typeof e == `boolean` ? e : Mo(e), t];
      },
      useSyncExternalStore: zo,
      useId: Os,
      useHostTransitionStatus: Ds,
      useFormState: is,
      useActionState: is,
      useOptimistic: function (e, t) {
        var n = Ao();
        return U === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Ko(n, U, e, t);
      },
      useMemoCache: Po,
      useCacheRefresh: ks,
    };
    Vs.useEffectEvent = fs;
    function Hs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Us = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Va(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ha(e, i, r)),
          t !== null && (hu(t, e, r), Ua(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Va(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ha(e, i, r)),
          t !== null && (hu(t, e, r), Ua(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Va(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ha(e, r, n)),
          t !== null && (hu(t, e, n), Ua(t, e, n)));
      },
    };
    function Ws(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Sr(n, r) || !Sr(i, a)
            : !0
      );
    }
    function Gs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Us.enqueueReplaceState(t, t.state, null));
    }
    function Ks(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function qs(e) {
      Yr(e);
    }
    function Js(e) {
      console.error(e);
    }
    function Ys(e) {
      Yr(e);
    }
    function Xs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Zs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      return (
        (n = Va(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Xs(e, t);
        }),
        n
      );
    }
    function $s(e) {
      return ((e = Va(e)), (e.tag = 3), e);
    }
    function ec(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Zs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Zs(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function tc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Xi(t, n, a, !0),
          (n = to.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                no === null
                  ? Du()
                  : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Ca
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ca
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Gu(e, r, a), Du(), !1);
      }
      if (V)
        return (
          (t = to.current),
          t === null
            ? (r !== Fi && ((t = Error(i(423), { cause: r })), Hi(_i(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = _i(r, n)),
              (a = Qs(e.stateNode, r, a)),
              Wa(e, a),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Fi && ((e = Error(i(422), { cause: r })), Hi(_i(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = _i(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
      )
        return !0;
      ((r = _i(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = Qs(n.stateNode, r, e)),
              Wa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = $s(a)),
                ec(a, e, n, r),
                Wa(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var nc = Error(i(461)),
      rc = !1;
    function ic(e, t, n, r) {
      t.child = e === null ? La(t, null, n, r) : Ia(t, e.child, n, r);
    }
    function ac(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Qi(t),
        (r = So(e, t, n, o, a, i)),
        (s = Eo()),
        e !== null && !rc
          ? (Do(e, t, i), kc(e, t, i))
          : (V && s && ki(t), (t.flags |= 1), ic(e, t, r, i), t.child)
      );
    }
    function oc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !ci(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), sc(e, t, a, r, i))
          : ((e = di(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Ac(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Sr : n),
          n(o, r) && e.ref === t.ref)
        )
          return kc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = li(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function sc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Sr(a, r) && e.ref === t.ref) {
          if (((rc = !1), (t.pendingProps = r = a), Ac(e, i)))
            e.flags & 131072 && (rc = !0);
          else return ((t.lanes = e.lanes), kc(e, t, i));
        }
      }
      return hc(e, t, n, r, i);
    }
    function cc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && va(t, a === null ? null : a.cachePool),
            a === null ? $a() : Qa(t, a),
            ao(t));
        else
          return (
            (r = t.lanes = 536870912),
            uc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && va(t, null), $a(), oo(t))
          : (va(t, a.cachePool), Qa(t, a), oo(t), (t.memoizedState = null));
      return (ic(e, t, i, n), t.child);
    }
    function lc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function uc(e, t, n, r, i) {
      var a = _a();
      return (
        (a = a === null ? null : { parent: aa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && va(t, null),
        $a(),
        ao(t),
        e !== null && Xi(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function dc(e, t) {
      return (
        (t = wc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function fc(e, t, n) {
      return (
        Ia(t, e.child, null, n),
        (e = dc(t, t.pendingProps)),
        (e.flags |= 2),
        so(t),
        (t.memoizedState = null),
        e
      );
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (V) {
          if (r.mode === `hidden`)
            return ((e = dc(t, r)), (t.lanes = 536870912), lc(null, e));
          if (
            (io(t),
            (e = B)
              ? ((e = rf(e, Pi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: wi === null ? null : { id: Ti, overflow: Ei },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = mi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Mi = t),
                  (B = null)))
              : (e = null),
            e === null)
          )
            throw Ii(t);
          return ((t.lanes = 536870912), null);
        }
        return dc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((io(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = fc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if (
          (rc || Xi(e, t, n, !1), (a = (n & e.childLanes) !== 0), rc || a)
        ) {
          if (
            ((r = q),
            r !== null && ((s = tt(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), ni(e, s), hu(r, e, s), nc);
          (Du(), (t = fc(e, t, n)));
        } else
          ((e = o.treeContext),
            (B = cf(s.nextSibling)),
            (Mi = t),
            (V = !0),
            (Ni = null),
            (Pi = !1),
            e !== null && ji(t, e),
            (t = dc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = li(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function mc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function hc(e, t, n, r, i) {
      return (
        Qi(t),
        (n = So(e, t, n, r, void 0, i)),
        (r = Eo()),
        e !== null && !rc
          ? (Do(e, t, i), kc(e, t, i))
          : (V && r && ki(t), (t.flags |= 1), ic(e, t, n, i), t.child)
      );
    }
    function gc(e, t, n, r, i, a) {
      return (
        Qi(t),
        (t.updateQueue = null),
        (n = wo(t, r, n, i)),
        Co(e),
        (r = Eo()),
        e !== null && !rc
          ? (Do(e, t, a), kc(e, t, a))
          : (V && r && ki(t), (t.flags |= 1), ic(e, t, n, a), t.child)
      );
    }
    function _c(e, t, n, r, i) {
      if ((Qi(t), t.stateNode === null)) {
        var a = ai,
          o = n.contextType;
        (typeof o == `object` && o && (a = $i(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Us),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          za(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? $i(o) : ai),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Hs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Us.enqueueReplaceState(a, a.state, null),
            qa(t, r, a, i),
            Ka(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ks(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = ai), typeof u == `object` && u && (o = $i(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Gs(t, a, r, o)),
          (Ra = !1));
        var f = t.memoizedState;
        ((a.state = f),
          qa(t, r, a, i),
          Ka(),
          (l = t.memoizedState),
          s || f !== l || Ra
            ? (typeof d == `function` &&
                (Hs(t, n, d, r), (l = t.memoizedState)),
              (c = Ra || Ws(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Ba(e, t),
          (o = t.memoizedProps),
          (u = Ks(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ai),
          typeof l == `object` && l && (c = $i(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Gs(t, a, r, c)),
          (Ra = !1),
          (f = t.memoizedState),
          (a.state = f),
          qa(t, r, a, i),
          Ka());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ra ||
        (e !== null && e.dependencies !== null && Zi(e.dependencies))
          ? (typeof s == `function` && (Hs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ra ||
              Ws(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Zi(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        mc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ia(t, e.child, null, i)),
                (t.child = Ia(t, null, n, i)))
              : ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = kc(e, t, i)),
        e
      );
    }
    function vc(e, t, n, r) {
      return (Bi(), (t.flags |= 256), ic(e, t, n, r), t.child);
    }
    var yc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function bc(e) {
      return { baseLanes: e, cachePool: ya() };
    }
    function xc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function Sc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : !!(co.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (V) {
          if (
            (a ? ro(t) : oo(t),
            (e = B)
              ? ((e = rf(e, Pi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: wi === null ? null : { id: Ti, overflow: Ei },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = mi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Mi = t),
                  (B = null)))
              : (e = null),
            e === null)
          )
            throw Ii(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (oo(t),
              (a = t.mode),
              (c = wc({ mode: `hidden`, children: c }, a)),
              (r = fi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = bc(n)),
              (r.childLanes = xc(e, s, n)),
              (t.memoizedState = yc),
              lc(null, r))
            : (ro(t), Cc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (ro(t), (t.flags &= -257), (t = Tc(e, t, n)))
            : t.memoizedState === null
              ? (oo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = wc({ mode: `visible`, children: r.children }, a)),
                (c = fi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ia(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = bc(n)),
                (r.childLanes = xc(e, s, n)),
                (t.memoizedState = yc),
                (t = lc(null, r)))
              : (oo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((ro(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Hi({ value: r, source: null, stack: null }),
            (t = Tc(e, t, n)));
        } else if (
          (rc || Xi(e, t, n, !1), (s = (n & e.childLanes) !== 0), rc || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = tt(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ni(e, r), hu(s, e, r), nc);
          (af(c) || Du(), (t = Tc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (B = cf(c.nextSibling)),
              (Mi = t),
              (V = !0),
              (Ni = null),
              (Pi = !1),
              e !== null && ji(t, e),
              (t = Cc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (oo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = li(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = fi(c, a, n, null)), (c.flags |= 2))
            : (c = li(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          lc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = bc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = ya())
                : ((l = aa._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = xc(e, s, n)),
          (t.memoizedState = yc),
          lc(e.child, r))
        : (ro(t),
          (n = e.child),
          (e = n.sibling),
          (n = li(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Cc(e, t) {
      return (
        (t = wc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function wc(e, t) {
      return ((e = si(22, e, null, t)), (e.lanes = 0), e);
    }
    function Tc(e, t, n) {
      return (
        Ia(t, e.child, null, n),
        (e = Cc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ec(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Ji(e.return, t, n));
    }
    function Dc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = co.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        F(co, o),
        ic(e, t, r, n),
        (r = V ? xi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
          else if (e.tag === 19) Ec(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && lo(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Dc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && lo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Dc(t, !0, n, null, a, r);
          break;
        case `together`:
          Dc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function kc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((Xi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = li(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = li(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Ac(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Zi(e)))
      );
    }
    function jc(e, t, n) {
      switch (t.tag) {
        case 3:
          (fe(t, t.stateNode.containerInfo),
            Ki(t, aa, e.memoizedState.cache),
            Bi());
          break;
        case 27:
        case 5:
          me(t);
          break;
        case 4:
          fe(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ki(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), io(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (ro(t), (e = kc(e, t, n)), e === null ? null : e.sibling)
                : Sc(e, t, n)
              : (ro(t), (t.flags |= 128), null);
          ro(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (Xi(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Oc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            F(co, co.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), cc(e, t, n, t.pendingProps));
        case 24:
          Ki(t, aa, e.memoizedState.cache);
      }
      return kc(e, t, n);
    }
    function Mc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) rc = !0;
        else {
          if (!Ac(e, n) && !(t.flags & 128)) return ((rc = !1), jc(e, t, n));
          rc = !!(e.flags & 131072);
        }
      } else ((rc = !1), V && t.flags & 1048576 && Oi(t, xi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ea(t.elementType)), (t.type = e), typeof e == `function`))
              ci(e)
                ? ((r = Ks(e, r)), (t.tag = 1), (t = _c(null, t, e, r, n)))
                : ((t.tag = 0), (t = hc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  ((t.tag = 11), (t = ac(null, t, e, r, n)));
                  break a;
                }
                if (a === D) {
                  ((t.tag = 14), (t = oc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = re(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return hc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ks(r, t.pendingProps)), _c(e, t, r, a, n));
        case 3:
          a: {
            if ((fe(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ba(e, t), qa(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ki(t, aa, r),
              r !== o.cache && Yi(t, [aa], n, !0),
              Ka(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = vc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = _i(Error(i(424)), t)), Hi(a), (t = vc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                B = cf(e.firstChild),
                  Mi = t,
                  V = !0,
                  Ni = null,
                  Pi = !0,
                  n = La(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Bi(), r === a)) {
                t = kc(e, t, n);
                break a;
              }
              ic(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            mc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : V ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ue.current).createElement(n)),
                  (r[R] = t),
                  (r[st] = e),
                  Pd(r, n, e),
                  z(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            me(t),
            e === null &&
              V &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ue.current)),
              (Mi = t),
              (Pi = !0),
              (a = B),
              Zd(t.type) ? ((lf = a), (B = cf(r.firstChild))) : (B = a)),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              V &&
              ((a = r = B) &&
                ((r = tf(r, t.type, t.pendingProps, Pi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Mi = t),
                    (B = cf(r.firstChild)),
                    (Pi = !1),
                    (a = !0))),
              a || Ii(t)),
            me(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = So(e, t, To, null, null, n)), (Qf._currentValue = a)),
            mc(e, t),
            ic(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              V &&
              ((e = n = B) &&
                ((n = nf(n, t.pendingProps, Pi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Mi = t), (B = null), (e = !0))),
              e || Ii(t)),
            null
          );
        case 13:
          return Sc(e, t, n);
        case 4:
          return (
            fe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ia(t, null, r, n)) : ic(e, t, r, n),
            t.child
          );
        case 11:
          return ac(e, t, t.type, t.pendingProps, n);
        case 7:
          return (ic(e, t, t.pendingProps, n), t.child);
        case 8:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Ki(t, t.type, r.value),
            ic(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            Qi(t),
            (a = $i(a)),
            (r = r(a)),
            (t.flags |= 1),
            ic(e, t, r, n),
            t.child
          );
        case 14:
          return oc(e, t, t.type, t.pendingProps, n);
        case 15:
          return sc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Oc(e, t, n);
        case 31:
          return pc(e, t, n);
        case 22:
          return cc(e, t, n, t.pendingProps);
        case 24:
          return (
            Qi(t),
            (r = $i(aa)),
            e === null
              ? ((a = _a()),
                a === null &&
                  ((a = q),
                  (o = oa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                za(t),
                Ki(t, aa, a))
              : ((e.lanes & n) !== 0 && (Ba(e, t), qa(t, null, null, n), Ka()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ki(t, aa, r),
                    r !== a.cache && Yi(t, [aa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ki(t, aa, r))),
            ic(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Nc(e) {
      e.flags |= 4;
    }
    function Pc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Da = Ca), xa);
        }
      } else e.flags &= -16777217;
    }
    function Fc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t))) {
        if (wu()) e.flags |= 8192;
        else throw ((Da = Ca), xa);
      }
    }
    function Ic(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : Ye()), (e.lanes |= t), (Yl |= t)));
    }
    function Lc(e, t) {
      if (!V)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function W(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Rc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ai(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (W(t), null);
        case 1:
          return (W(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            qi(aa),
            pe(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (zi(t)
                ? Nc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Vi())),
            W(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Nc(t),
                o === null ? (W(t), Pc(t, a, null, r, n)) : (W(t), Fc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (W(t), (t.flags &= -16777217))
                  : (Nc(t), W(t), Fc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Nc(t),
                  W(t),
                  Pc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (he(t),
            (n = ue.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (W(t), null);
            }
            ((e = ce.current),
              zi(t) ? Li(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Nc(t)));
          }
          return (W(t), null);
        case 5:
          if ((he(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (W(t), null);
            }
            if (((o = ce.current), zi(t))) Li(t, o);
            else {
              var s = Bd(ue.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[R] = t), (o[st] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Nc(t);
            }
          }
          return (
            W(t),
            Pc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = ue.current), zi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Mi),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[R] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Ii(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[R] = t), (t.stateNode = e));
          }
          return (W(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = zi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[R] = t;
              } else
                (Bi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (W(t), (e = !1));
            } else
              ((n = Vi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (so(t), t) : (so(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (W(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = zi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[R] = t;
              } else
                (Bi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (W(t), (a = !1));
            } else
              ((a = Vi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (so(t), t) : (so(t), null);
          }
          return (
            so(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Ic(t, t.updateQueue),
                W(t),
                null)
          );
        case 4:
          return (
            pe(),
            e === null && Sd(t.stateNode.containerInfo),
            W(t),
            null
          );
        case 10:
          return (qi(t.type), W(t), null);
        case 19:
          if ((P(co), (r = t.memoizedState), r === null)) return (W(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) Lc(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = lo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Lc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Ic(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (ui(n, e), (n = n.sibling));
                    return (
                      F(co, (co.current & 1) | 2),
                      V && Di(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                De() > tu &&
                ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = lo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ic(t, e),
                  Lc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !V)
                )
                  return (W(t), null);
              } else
                2 * De() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (W(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = De()),
              (e.sibling = null),
              (n = co.current),
              F(co, a ? (n & 1) | 2 : n & 1),
              V && Di(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            so(t),
            eo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (W(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : W(t),
            (n = t.updateQueue),
            n !== null && Ic(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && P(ga),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            qi(aa),
            W(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function zc(e, t) {
      switch ((Ai(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            qi(aa),
            pe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (he(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((so(t), t.alternate === null)) throw Error(i(340));
            Bi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (so(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Bi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (P(co), null);
        case 4:
          return (pe(), null);
        case 10:
          return (qi(t.type), null);
        case 22:
        case 23:
          return (
            so(t),
            eo(),
            e !== null && P(ga),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (qi(aa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Bc(e, t) {
      switch ((Ai(t), t.tag)) {
        case 3:
          (qi(aa), pe());
          break;
        case 26:
        case 27:
        case 5:
          he(t);
          break;
        case 4:
          pe();
          break;
        case 31:
          t.memoizedState !== null && so(t);
          break;
        case 13:
          so(t);
          break;
        case 19:
          P(co);
          break;
        case 10:
          qi(t.type);
          break;
        case 22:
        case 23:
          (so(t), eo(), e !== null && P(ga));
          break;
        case 24:
          qi(aa);
      }
    }
    function Vc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Hc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Uc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ya(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Wc(e, t, n) {
      ((n.props = Ks(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Gc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Kc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function qc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Jc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[st] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Yc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Xc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Yc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Qt)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Zc(e, t, n), e = e.sibling; e !== null;)
          (Zc(e, t, n), (e = e.sibling));
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;)
          (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[R] = e), (t[st] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var el = !1,
      tl = !1,
      nl = !1,
      rl = typeof WeakSet == `function` ? WeakSet : Set,
      il = null;
    function al(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Er(e)), Dr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, il = t;
        il !== null;
      )
        if (((t = il), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (il = e));
        else
          for (; il !== null;) {
            switch (((t = il), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Ks(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (il = e));
              break;
            }
            il = t.return;
          }
    }
    function ol(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && Vc(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Ks(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && Uc(n), r & 512 && Gc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ya(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && $c(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && qc(n), r & 512 && Gc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || el), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || tl), (i = el));
            var a = tl;
            ((el = r),
              (tl = t) && !a ? Sl(e, n, !!(n.subtreeFlags & 8772)) : bl(e, n),
              (el = i),
              (tl = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function sl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), sl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && mt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var G = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null;) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (Ie && typeof Ie.onCommitFiberUnmount == `function`)
        try {
          Ie.onCommitFiberUnmount(Fe, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (tl || Kc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          tl || Kc(n, t);
          var r = G,
            i = cl;
          (Zd(n.type) && ((G = n.stateNode), (cl = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (G = r),
            (cl = i));
          break;
        case 5:
          tl || Kc(n, t);
        case 6:
          if (
            ((r = G),
            (i = cl),
            (G = null),
            ll(e, t, n),
            (G = r),
            (cl = i),
            G !== null)
          ) {
            if (cl)
              try {
                (G.nodeType === 9
                  ? G.body
                  : G.nodeName === `HTML`
                    ? G.ownerDocument.body
                    : G
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                G.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          G !== null &&
            (cl
              ? ((e = G),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(G, n.stateNode));
          break;
        case 4:
          ((r = G),
            (i = cl),
            (G = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (G = r),
            (cl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Hc(2, n, t), tl || Hc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (tl ||
            (Kc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Wc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((tl = (r = tl) || n.memoizedState !== null), ll(e, t, n), (tl = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new rl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new rl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((G = c.stateNode), (cl = !1));
                  break a;
                }
                break;
              case 5:
                ((G = c.stateNode), (cl = !1));
                break a;
              case 3:
              case 4:
                ((G = c.stateNode.containerInfo), (cl = !0));
                break a;
            }
            c = c.return;
          }
          if (G === null) throw Error(i(160));
          (ul(o, s, a),
            (G = null),
            (cl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e),
            vl(e),
            r & 4 && (Hc(3, e, e.return), Vc(3, e), Hc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            r & 64 &&
              el &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[pt] ||
                            o[R] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[R] = e),
                          z(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[R] = e), z(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              } else e.stateNode = If(a, r, e.memoizedProps);
            } else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Jc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            n !== null && r & 4 && Jc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Wt(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Jc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (nl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = a),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          nl && ((nl = !1), yl(e));
          break;
        case 4:
          ((r = gl),
            (gl = gf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = De()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = el,
            d = tl;
          if (
            ((el = u || a),
            (tl = d || l),
            hl(t, e),
            (tl = d),
            (el = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || el || tl || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Yc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Qc(e, Xc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Wt(o, ``), (n.flags &= -33)), Qc(e, Xc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Zc(e, Xc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (ol(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Hc(4, t, t.return), xl(t));
            break;
          case 1:
            Kc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Wc(t, t.return, n),
              xl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (Kc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), Vc(4, a));
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Ja(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Uc(a), Gc(a, a.return));
            break;
          case 27:
            $c(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && qc(a), Gc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Gc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && sa(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && sa(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && Vc(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && sa(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), Vc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null;) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Il(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Hc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Il(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Hc(8, t, t.return), Fl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; il !== null;) {
        var n = il;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Hc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            sa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (il = r));
        else
          a: for (n = e; il !== null;) {
            r = il;
            var i = r.sibling,
              a = r.return;
            if ((sl(r), r === n)) {
              il = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (il = i));
              break a;
            }
            il = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = $i(aa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return $i(aa).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : j.T === null ? it() : dd();
    }
    function mu() {
      if (Jl === 0) {
        if (!(Y & 536870912) || V) {
          var e = Ue;
          ((Ue <<= 1), !(Ue & 3932160) && (Ue = 262144), (Jl = e));
        } else Jl = 536870912;
      }
      return ((e = to.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        Ze(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)),
          rd(e)));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || qe(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !vu(n))) {
          ((a = Ou(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = Xl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)) {
                if (Hl && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (a = 4));
                  break a;
                }
                ((o = Zl),
                  (Zl = a),
                  o !== null &&
                    (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Su(e, 0), yu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(r, t, Jl, !Bl);
              break a;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = $l + 300 - De()), 10 < a)) {
            if ((yu(r, t, Jl, !Bl), Ke(r, 0, !0) !== 0)) break a;
            ((su = t),
              (r.timeoutHandle = Kd(
                _u.bind(
                  null,
                  r,
                  n,
                  Zl,
                  nu,
                  Ql,
                  t,
                  Jl,
                  Kl,
                  Yl,
                  Bl,
                  o,
                  `Throttled`,
                  -0,
                  0,
                ),
                a,
              )));
            break a;
          }
          _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Qt,
        }),
          jl(t, a, d));
        var m =
          (a & 62914560) === a
            ? $l - De()
            : (a & 4194048) === a
              ? eu - De()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!xr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Re(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && $e(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (Gi = Wi = null), Oo(e), (Aa = null), (ja = 0), (e = J));
        for (; e !== null;) (Bc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = li(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = qe(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Re(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ul = t), $r(), n);
    }
    function Cu(e, t) {
      ((H = null),
        (j.H = Rs),
        t === ba || t === Sa
          ? ((t = Oa()), (X = 3))
          : t === xa
            ? ((t = Oa()), (X = 4))
            : (X =
                t === nc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (zl = t),
        J === null && ((Wl = 1), Xs(e, _i(t, e.current))));
    }
    function wu() {
      var e = to.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? no === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === no
            : !1;
    }
    function Tu() {
      var e = j.H;
      return ((j.H = Rs), e === null ? Rs : e);
    }
    function Eu() {
      var e = j.A;
      return ((j.A = Ll), e);
    }
    function Du() {
      ((Wl = 4),
        Bl || ((Y & 4194048) !== Y && to.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          q === null ||
          yu(q, Y, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      ((q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                to.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (zl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = Wl));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Gi = Wi = null),
        (K = r),
        (j.H = i),
        (j.A = a),
        J === null && ((q = null), (Y = 0), $r()),
        o
      );
    }
    function ku() {
      for (; J !== null;) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        a = Eu();
      q !== e || Y !== t
        ? ((nu = null), (tu = De() + 500), Su(e, t))
        : (Vl = qe(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = zl;
            b: switch (X) {
              case 1:
                ((X = 0), (zl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (wa(o)) {
                  ((X = 0), (zl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                wa(o)
                  ? ((X = 0), (zl = null), Nu(t))
                  : ((X = 0), (zl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((X = 0), (zl = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (zl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((X = 0), (zl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (Wl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (Gi = Wi = null),
        (j.H = r),
        (j.A = a),
        (K = n),
        J === null ? ((q = null), (Y = 0), $r(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Te();) Mu(J);
    }
    function Mu(e) {
      var t = Mc(e.alternate, e, Ul);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = gc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = gc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          Oo(t);
        default:
          (Bc(n, t), (t = J = ui(t, Ul)), (t = Mc(n, t, Ul)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Pu(e, t, n, r) {
      ((Gi = Wi = null), Oo(t), (Aa = null), (ja = 0));
      var i = t.return;
      try {
        if (tc(e, i, t, n, Y)) {
          ((Wl = 1), Xs(e, _i(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Wl = 1), Xs(e, _i(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (V || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = to.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = Rc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = zc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Wl = 6), (J = null));
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= Qr),
          Qe(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Ae, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = j.T), (j.T = null), (a = M.p), (M.p = 2), (s = K), (K |= 4));
          try {
            al(e, t, n);
          } finally {
            ((K = s), (M.p = a), (j.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = j.T), (j.T = null));
          var r = M.p;
          M.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Er(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Tr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Dr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = wr(s, h),
                      v = wr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((K = i), (M.p = r), (j.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = j.T), (j.T = null));
          var r = M.p;
          M.p = 2;
          var i = K;
          K |= 4;
          try {
            ol(e, t.alternate, t);
          } finally {
            ((K = i), (M.p = r), (j.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Ee());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          rt(n),
          (t = t.stateNode),
          Ie && typeof Ie.onCommitFiberRoot == `function`)
        )
          try {
            Ie.onCommitFiberRoot(Fe, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = j.T), (i = M.p), (M.p = 2), (j.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((j.T = t), (M.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), sa(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = rt(su),
        r = j.T,
        a = M.p;
      try {
        ((M.p = 32 > n ? 32 : n), (j.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          id(0, !1),
          Ie && typeof Ie.onPostCommitFiberRoot == `function`)
        )
          try {
            Ie.onPostCommitFiberRoot(Fe, o);
          } catch {}
        return !0;
      } finally {
        ((M.p = a), (j.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = _i(n, t)),
        (t = Qs(e.stateNode, t, 2)),
        (e = Ha(e, t, 2)),
        e !== null && (Ze(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              ((e = _i(n, e)),
                (n = $s(2)),
                (r = Ha(t, n, 2)),
                r !== null && (ec(n, r, t, e), Ze(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > De() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = Ye()), (e = ni(e, t)), e !== null && (Ze(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return Ce(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Re(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = Y),
                  (a = Ke(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || qe(r, a) || ((n = !0), ld(r, a)));
            }
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = De(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Re(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Je(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = Ke(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && we(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || qe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && we(r), rt(n))) {
          case 2:
          case 8:
            n = ke;
            break;
          case 32:
            n = Ae;
            break;
          case 268435456:
            n = Me;
            break;
          default:
            n = Ae;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Ce(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && we(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = Ke(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, De()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? Ce(Oe, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = ua;
        (e === 0 && ((e = He), (He <<= 1), !(He & 261888) && (He = 256)),
          (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Zt(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[st] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[st] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new bn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    ws(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    ws(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < qr.length; hd++) {
      var gd = qr[hd];
      Jr(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (Jr(zr, `onAnimationEnd`),
      Jr(Br, `onAnimationIteration`),
      Jr(Vr, `onAnimationStart`),
      Jr(`dblclick`, `onDoubleClick`),
      Jr(`focusin`, `onFocus`),
      Jr(`focusout`, `onBlur`),
      Jr(Hr, `onTransitionRun`),
      Jr(Ur, `onTransitionStart`),
      Jr(Wr, `onTransitionCancel`),
      Jr(Gr, `onTransitionEnd`),
      St(`onMouseEnter`, [`mouseout`, `mouseover`]),
      St(`onMouseLeave`, [`mouseout`, `mouseover`]),
      St(`onPointerEnter`, [`pointerout`, `pointerover`]),
      St(`onPointerLeave`, [`pointerout`, `pointerover`]),
      xt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      xt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      xt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      xt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      xt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      xt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Yr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Yr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[lt];
      n === void 0 && (n = t[lt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          yt.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !ln ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = ht(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      on(function () {
        var r = a,
          i = en(n),
          s = [];
        a: {
          var c = Kr.get(e);
          if (c !== void 0) {
            var l = bn,
              u = e;
            switch (e) {
              case `keypress`:
                if (hn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Rn;
                break;
              case `focusin`:
                ((u = `focus`), (l = kn));
                break;
              case `focusout`:
                ((u = `blur`), (l = kn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = kn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Dn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = On;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Bn;
                break;
              case zr:
              case Br:
              case Vr:
                l = An;
                break;
              case Gr:
                l = Vn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Sn;
                break;
              case `wheel`:
                l = Hn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = jn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = zn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Un;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = sn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== $t &&
                (u = n.relatedTarget || n.fromElement) &&
                (ht(u) || u[ct]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? ht(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Dn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = zn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : _t(l)),
                (h = u == null ? c : _t(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                ht(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? _t(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = lr;
            else if (rr(c)) {
              if (ur) v = yr;
              else {
                v = _r;
                var y = gr;
              }
            } else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Jt(r.elementType) && (v = lr)
                  : (v = vr));
            if ((v &&= v(e, r))) {
              ir(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Bt(c, `number`, c.value));
          }
          switch (((y = r ? _t(r) : window), e)) {
            case `focusin`:
              (rr(y) || y.contentEditable === `true`) &&
                ((kr = y), (Ar = r), (jr = null));
              break;
            case `focusout`:
              jr = Ar = kr = null;
              break;
            case `mousedown`:
              Mr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Mr = !1), Nr(s, n, i));
              break;
            case `selectionchange`:
              if (Or) break;
            case `keydown`:
            case `keyup`:
              Nr(s, n, i);
          }
          var b;
          if (Gn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            $n
              ? Zn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (Jn &&
              n.locale !== `ko` &&
              ($n || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && $n && (b = mn())
                : ((dn = i),
                  (fn = `value` in dn ? dn.value : dn.textContent),
                  ($n = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Mn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = Qn(n)), b !== null && (x.data = b)))),
            (b = qn ? er(e, n) : tr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Mn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i));
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = sn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = sn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = sn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = sn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Wt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Wt(e, `` + r);
          break;
        case `className`:
          Ot(e, `class`, r);
          break;
        case `tabIndex`:
          Ot(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Ot(e, n, r);
          break;
        case `style`:
          qt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Ot(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Zt(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Zt(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = Qt);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Zt(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Dt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Dt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Yt.get(n) || n), Dt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          qt(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Wt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Wt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = Qt);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!bt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[st] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Dt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          zt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Vt(e, !!r, n, !0) : Vt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          Ut(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (Jt(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Rt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? Vt(e, !!n, n ? [] : ``, !1) : Vt(e, !!n, t, !0))
              : Vt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Ht(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (Jt(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== Wd && ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[pt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), mt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[pt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      mt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = M.d;
    M.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = gt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Es(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Lt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              z(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Lt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Lt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Lt(n.imageSizes) + `"]`))
          : (i += `[href="` + Lt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            z(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Lt(r) +
            `"][href="` +
            Lt(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            z(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = vt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (z(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = vt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            z(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = vt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            z(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = ue.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = vt(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = vt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = vt(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + Lt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          z(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Lt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Lt(n.href) + `"]`);
            if (r) return ((t.instance = r), z(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              z(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), z(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              z(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), z(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  z(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[pt] ||
            a[R] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              z(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            z(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: ae,
      _currentValue2: ae,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Xe(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Xe(0)),
        (this.hiddenUpdates = Xe(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = si(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = oa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        za(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = ai), e) : ai;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Va(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ha(e, r, t)),
        n !== null && (hu(n, e, t), Ua(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ni(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = nt(t);
        var n = ni(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = j.T;
      j.T = null;
      var a = M.p;
      try {
        ((M.p = 2), up(e, t, n, r));
      } finally {
        ((M.p = a), (j.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = j.T;
      j.T = null;
      var a = M.p;
      try {
        ((M.p = 8), up(e, t, n, r));
      } finally {
        ((M.p = a), (j.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = gt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ge(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Re(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(K & 6) && ((tu = De() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ni(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = en(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = ht(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (L()) {
            case Oe:
              return 2;
            case ke:
              return 8;
            case Ae:
            case je:
              return 32;
            case Me:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = gt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = ht(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                at(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                at(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (($t = r), n.target.dispatchEvent(r), ($t = null));
        } else return ((t = gt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = gt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              ws(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[st] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[st] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[ct] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = it();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.8`) throw Error(i(527, Lp, `19.2.8`));
    M.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: j,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((Fe = zp.inject(Rp)), (Ie = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = qs,
        s = Js,
        c = Ys;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[ct] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u(), 1),
  v = g(),
  y = [
    { code: `ur`, label: `Urdu`, native: `اردو`, dir: `rtl` },
    { code: `ps`, label: `Pashto`, native: `پښتو`, dir: `rtl` },
    { code: `ar`, label: `Arabic`, native: `العربية`, dir: `rtl` },
    { code: `en`, label: `English`, native: `English`, dir: `ltr` },
  ],
  b = {
    Dashboard: {
      ur: `ڈیش بورڈ`,
      ps: `ډشبورډ`,
      ar: `لوحة التحكم`,
      en: `Dashboard`,
    },
    Students: {
      ur: `طلباء و طالبات`,
      ps: `زده‌کوونکي`,
      ar: `الطلاب والطالبات`,
      en: `Students`,
    },
    Teachers: {
      ur: `اساتذہ و معلمات`,
      ps: `استاذان`,
      ar: `المعلمون والمعلمات`,
      en: `Teachers`,
    },
    Classes: {
      ur: `کلاسز و درجات`,
      ps: `ټولګي او درجې`,
      ar: `الصفوف والمراحل`,
      en: `Classes`,
    },
    Attendance: {
      ur: `روزانہ حاضری`,
      ps: `ورځنۍ حاضري`,
      ar: `الحضور اليومي`,
      en: `Attendance`,
    },
    Exams: {
      ur: `امتحانات و نتائج`,
      ps: `ازموینې او پایلې`,
      ar: `الامتحانات والنتائج`,
      en: `Exams & Results`,
    },
    Fees: {
      ur: `فیس انتظام`,
      ps: `د فیس مدیریت`,
      ar: `إدارة الرسوم`,
      en: `Student Fees`,
    },
    Accounts: {
      ur: `آمدنی و اخراجات`,
      ps: `عاید او مصرف`,
      ar: `الإيرادات والمصروفات`,
      en: `Income & Expense`,
    },
    Salaries: {
      ur: `اساتذہ تنخواہ`,
      ps: `د استاذانو تنخواګانې`,
      ar: `رواتب المعلمين`,
      en: `Teacher Salary`,
    },
    Reports: {
      ur: `رپورٹس سینٹر`,
      ps: `د راپورونو مرکز`,
      ar: `مركز التقارير`,
      en: `Reports Center`,
    },
    Settings: {
      ur: `تنظیمات و ترتیبات`,
      ps: `تنظیمات او امستنې`,
      ar: `الإعدادات والتهيئة`,
      en: `Settings`,
    },
    SectionMain: {
      ur: `بنیادی مینیو`,
      ps: `اصلي مینو`,
      ar: `القائمة الرئيسية`,
      en: `Main Navigation`,
    },
    SectionAcademics: {
      ur: `تعلیم و تدریس`,
      ps: `ښوونه او روزنه`,
      ar: `التعليم والتدريس`,
      en: `Academics`,
    },
    SectionFinance: {
      ur: `مالیات و نظامت`,
      ps: `مالي او اداري چارې`,
      ar: `المالية والإدارة`,
      en: `Finance & System`,
    },
    SectionTeacher: {
      ur: `استاد پورٹل`,
      ps: `د استاذ مینو`,
      ar: `بوابة المعلم`,
      en: `Teacher Menu`,
    },
    SwitchTeacher: {
      ur: `استاد پر جائیں`,
      ps: `استاذ ته اوښتل`,
      ar: `التبديل إلى المعلم`,
      en: `Switch to Teacher`,
    },
    SwitchAdmin: {
      ur: `ایڈمن پر جائیں`,
      ps: `اډمن ته اوښتل`,
      ar: `التبديل إلى المدير`,
      en: `Switch to Admin`,
    },
    CloudSyncActive: {
      ur: `کلاؤڈ ہم آہنگ ہے`,
      ps: `کلاوډ همغږی دی`,
      ar: `المزامنة السحابية نشطة`,
      en: `Cloud Sync Active`,
    },
    ProVersion: {
      ur: `ورژن 2.0 پرو`,
      ps: `نسخه ۲.۰ پرو`,
      ar: `الإصدار 2.0 برو`,
      en: `v2.0 Pro`,
    },
    MyDashboard: {
      ur: `میرا ڈیش بورڈ`,
      ps: `زما ډشبورډ`,
      ar: `لوحتي`,
      en: `My Dashboard`,
    },
    MyStudents: {
      ur: `میرے طلباء`,
      ps: `زما زده‌کوونکي`,
      ar: `طلابي`,
      en: `My Students`,
    },
    MarkAttendance: {
      ur: `حاضری لگائیں`,
      ps: `حاضري ثبتول`,
      ar: `تسجيل الحضور`,
      en: `Mark Attendance`,
    },
    SabaqEntry: {
      ur: `سبق و منزل اندراج`,
      ps: `د سبق او منزل ثبت`,
      ar: `تسجيل الحفظ والمراجعة`,
      en: `Hifz Sabaq Entry`,
    },
    MarksEntry: {
      ur: `نمبر اندراج`,
      ps: `د نمرو ثبت`,
      ar: `إدخال الدرجات`,
      en: `Marks Entry`,
    },
    ClassResults: {
      ur: `کلاس نتائج`,
      ps: `د ټولګي پایلې`,
      ar: `نتائج الصف`,
      en: `Class Results`,
    },
    Save: { ur: `محفوظ کریں`, ps: `خوندي کول`, ar: `حفظ`, en: `Save` },
    Cancel: { ur: `منسوخ کریں`, ps: `لغوه کول`, ar: `إلغاء`, en: `Cancel` },
    Add: {
      ur: `نیا شامل کریں`,
      ps: `نوی زیاتول`,
      ar: `إضافة جديد`,
      en: `Add New`,
    },
    Edit: { ur: `ترمیم`, ps: `سمول`, ar: `تعديل`, en: `Edit` },
    Delete: { ur: `حذف کریں`, ps: `ړنګول`, ar: `حذف`, en: `Delete` },
    Search: {
      ur: `تلاش کریں...`,
      ps: `لټون وکړئ...`,
      ar: `بحث...`,
      en: `Search...`,
    },
    Filter: { ur: `فلٹر`, ps: `فلټر`, ar: `تصفية`, en: `Filter` },
    Print: { ur: `پرنٹ کریں`, ps: `چاپ کړئ`, ar: `طباعة`, en: `Print` },
    DownloadPDF: {
      ur: `ڈاؤن لوڈ PDF`,
      ps: `PDF ډاونلوډ`,
      ar: `تحميل PDF`,
      en: `Download PDF`,
    },
    SendWhatsApp: {
      ur: `WhatsApp بھیجیں`,
      ps: `واټساپ واستوئ`,
      ar: `إرسال واتساب`,
      en: `Send WhatsApp`,
    },
    Refresh: { ur: `تازہ کریں`, ps: `تازه کول`, ar: `تحديث`, en: `Refresh` },
    Logout: { ur: `لاگ آؤٹ`, ps: `وتل`, ar: `تسجيل الخروج`, en: `Logout` },
    ThemeToggle: {
      ur: `تھیم تبدیل کریں`,
      ps: `د ښکارنې بدلون`,
      ar: `تبديل المظهر`,
      en: `Toggle Theme`,
    },
    Close: { ur: `بند کریں`, ps: `بندول`, ar: `إغلاق`, en: `Close` },
    Actions: { ur: `کارروائی`, ps: `کړنې`, ar: `الإجراءات`, en: `Actions` },
    Status: { ur: `حالت`, ps: `حالت`, ar: `الحالة`, en: `Status` },
    All: { ur: `تمام`, ps: `ټول`, ar: `الكل`, en: `All` },
    TotalStudents: {
      ur: `کل طلباء و طالبات`,
      ps: `ټول زده‌کوونکي`,
      ar: `إجمالي الطلاب`,
      en: `Total Students`,
    },
    TotalTeachers: {
      ur: `اساتذہ کی تعداد`,
      ps: `د استاذانو شمېر`,
      ar: `هيئة التدريس`,
      en: `Teaching Staff`,
    },
    TodayAttendance: {
      ur: `آج کی حاضری`,
      ps: `د نن ورځې حاضري`,
      ar: `حضور اليوم`,
      en: `Today's Attendance`,
    },
    MonthlyFeeCollected: {
      ur: `اس ماہ وصول شدہ فیس`,
      ps: `د دې میاشتې راټول شوی فیس`,
      ar: `رسوم الشهر المحصلة`,
      en: `Monthly Fee Collected`,
    },
    PendingFees: {
      ur: `بقایا فیس`,
      ps: `پاتې فیس`,
      ar: `الرسوم المتأخرة`,
      en: `Pending Fees`,
    },
    NetBalance: {
      ur: `خالص کیش بیلنس`,
      ps: `خالص نغدي پاتې`,
      ar: `الرصيد الصافي`,
      en: `Net Cash Balance`,
    },
    Sabaq: {
      ur: `سبق (نیا سبق)`,
      ps: `سبق (نوی درس)`,
      ar: `السبق (الحفظ الجديد)`,
      en: `Sabaq (New Lesson)`,
    },
    Sabqi: {
      ur: `سبقی (حالیہ دہرائی)`,
      ps: `سبقي (تازه تکرار)`,
      ar: `السبقي (المراجعة القريبة)`,
      en: `Sabqi (Recent Revision)`,
    },
    Manzil: {
      ur: `منزل (پچھلے پارے)`,
      ps: `منزل (تیر سپارې)`,
      ar: `المنزل (المراجعة الكبرى)`,
      en: `Manzil (Cumulative Revision)`,
    },
    Behaviour: {
      ur: `کردار و اخلاق`,
      ps: `سلوک او اخلاق`,
      ar: `السلوك والأخلاق`,
      en: `Behaviour & Conduct`,
    },
    Rating: {
      ur: `کارکردگی ریٹنگ`,
      ps: `د کارکردګۍ درجه`,
      ar: `تقييم الأداء`,
      en: `Performance Rating`,
    },
    Para: { ur: `پارہ / سپارہ`, ps: `سپاره`, ar: `الجزء`, en: `Juz / Para` },
    Surah: { ur: `سورت`, ps: `سورت`, ar: `السورة`, en: `Surah` },
    Ayat: { ur: `آیات`, ps: `ایتونه`, ar: `الآيات`, en: `Ayat` },
    Present: { ur: `حاضر`, ps: `حاضر`, ar: `حاضر`, en: `Present` },
    Absent: { ur: `غیر حاضر`, ps: `غیرحاضر`, ar: `غائب`, en: `Absent` },
    Late: { ur: `دیر سے`, ps: `ناوخته`, ar: `متأخر`, en: `Late` },
    Leave: { ur: `رخصت`, ps: `رخصت`, ar: `إجازة`, en: `Leave` },
    Yateem: { ur: `یتیم`, ps: `یتیم`, ar: `يتيم`, en: `Orphan (Yateem)` },
    Mazoor: {
      ur: `معذور`,
      ps: `معذور`,
      ar: `ذوو الاحتياجات`,
      en: `Disabled (Mazoor)`,
    },
    Ghareeb: {
      ur: `مستحق / غریب`,
      ps: `غریب / مستحق`,
      ar: `مستحق / فقير`,
      en: `Underprivileged (Ghareeb)`,
    },
    None: {
      ur: `کوئی رعایت نہیں`,
      ps: `هیڅ رعایت نشته`,
      ar: `بدون خصم`,
      en: `Standard / None`,
    },
    AdminPanel: {
      ur: `منتظمِ اعلیٰ (Admin)`,
      ps: `مدیر اعلیٰ (Admin)`,
      ar: `الإدارة العامة`,
      en: `Admin Portal`,
    },
    TeacherPanel: {
      ur: `استاد / معلمہ (Teacher)`,
      ps: `استاذ / ښوونکی`,
      ar: `بوابة المعلم`,
      en: `Teacher Portal`,
    },
    AdmissionCardTitle: {
      ur: `داخلہ فارم و اسٹوڈنٹ کارڈ`,
      ps: `د داخلې فورم او زده‌کوونکي کارت`,
      ar: `استمارة القبول وبطاقة الطالب`,
      en: `Admission Form & Student Card`,
    },
    FeeVoucherTitle: {
      ur: `فیس وصولی رسید واؤچر`,
      ps: `د فیس د ترلاسه کولو رسید واؤچر`,
      ar: `سند قبض الرسوم المدرسية`,
      en: `Fee Collection Receipt Voucher`,
    },
    SalarySlipTitle: {
      ur: `تنخواہ سلپ برائے استاذ / ملازم`,
      ps: `د استاذ / کارکوونکي د تنخوا سلپ`,
      ar: `قسيمة راتب المعلم / الموظف`,
      en: `Staff Salary Pay Slip`,
    },
    ResultCardTitle: {
      ur: `امتحانی رزلٹ کارڈ و سند`,
      ps: `د ازموینې د پایلې کارت او سند`,
      ar: `بطاقة النتائج والشهادة`,
      en: `Official Examination Result Card`,
    },
    ReceiptNo: {
      ur: `رسید نمبر`,
      ps: `د رسید شمېره`,
      ar: `رقم السند`,
      en: `Receipt No`,
    },
    SlipNo: {
      ur: `سلپ نمبر`,
      ps: `د سلپ شمېره`,
      ar: `رقم القسيمة`,
      en: `Slip No`,
    },
    Date: { ur: `تاریخ`, ps: `نېټه`, ar: `التاريخ`, en: `Date` },
    StudentName: {
      ur: `طالب علم / طالبہ کا نام`,
      ps: `د زده‌کوونکي / زده‌کوونکې نوم`,
      ar: `اسم الطالب / الطالبة`,
      en: `Student Name`,
    },
    FatherName: {
      ur: `ولدیت (والد کا نام)`,
      ps: `د پلار نوم`,
      ar: `اسم ولي الأمر`,
      en: `Father's Name`,
    },
    AdmissionNo: {
      ur: `داخلہ نمبر`,
      ps: `د داخلې شمېره`,
      ar: `رقم القبول`,
      en: `Admission No`,
    },
    ClassName: {
      ur: `کلاس / درجہ`,
      ps: `ټولګی / درجه`,
      ar: `الصف / المرحلة`,
      en: `Class / Grade`,
    },
    RollNo: {
      ur: `رول نمبر`,
      ps: `د حاضري رول نمبر`,
      ar: `رقم الجلوس`,
      en: `Roll No`,
    },
    MonthYear: {
      ur: `مہینہ و سال`,
      ps: `میاشت او کال`,
      ar: `الشهر والسنة`,
      en: `Month & Year`,
    },
    PaymentMethod: {
      ur: `طریقۂ ادائیگی`,
      ps: `د تادیې لاره`,
      ar: `طريقة الدفع`,
      en: `Payment Method`,
    },
    OriginalFee: {
      ur: `ماہانہ فیس`,
      ps: `میاشتنی فیس`,
      ar: `الرسوم الشهرية المقررة`,
      en: `Monthly Fee`,
    },
    ConcessionScholarship: {
      ur: `رعایت / وظیفہ`,
      ps: `رعایت / تخفیف`,
      ar: `الخصم / المنحة الدراسية`,
      en: `Discount / Concession`,
    },
    PaidAmount: {
      ur: `وصول شدہ رقم`,
      ps: `تادیه شوې پیسې`,
      ar: `المبلغ المستلم`,
      en: `Amount Paid`,
    },
    Notes: { ur: `خصوصی نوٹ`, ps: `ځانګړی نوټ`, ar: `ملاحظات`, en: `Notes` },
    DOB: {
      ur: `تاریخ پیدائش`,
      ps: `د زېږېدو نېټه`,
      ar: `تاريخ الميلاد`,
      en: `Date of Birth`,
    },
    CNICFormB: {
      ur: `ب فارم / CNIC`,
      ps: `ب فارم / تذکره`,
      ar: `الرقم الوطني / شهادة الميلاد`,
      en: `B-Form / CNIC`,
    },
    ContactPhone: {
      ur: `رابطہ نمبر`,
      ps: `د اړیکې شمېره`,
      ar: `رقم التواصل`,
      en: `Contact Phone`,
    },
    BloodGroup: {
      ur: `بلڈ گروپ`,
      ps: `د وینې ګروپ`,
      ar: `فصيلة الدم`,
      en: `Blood Group`,
    },
    Address: {
      ur: `رہائشی پتہ`,
      ps: `د اوسیدو پته`,
      ar: `العنوان السكني`,
      en: `Residential Address`,
    },
    AcademicYear: {
      ur: `تعلیمی سال`,
      ps: `تعلیمي کال`,
      ar: `العام الدراسي`,
      en: `Academic Year`,
    },
    AdmissionCardForYear: {
      ur: `داخلہ کارڈ برائے تعلیمی سال`,
      ps: `د تعلیمي کال د داخلې کارت`,
      ar: `بطاقة القبول للعام الدراسي`,
      en: `Admission Card for Academic Year`,
    },
    EmployeeName: {
      ur: `استاد / ملازم کا نام`,
      ps: `د استاذ / کارکوونکي نوم`,
      ar: `اسم المعلم / الموظف`,
      en: `Employee / Teacher Name`,
    },
    EmployeeID: {
      ur: `ملازمت نمبر (Emp ID)`,
      ps: `د دندې نمبر (Emp ID)`,
      ar: `الرقم الوظيفي`,
      en: `Employee ID`,
    },
    BasicPay: {
      ur: `بنیادی تنخواہ (Basic Pay)`,
      ps: `اساسي تنخوا`,
      ar: `الراتب الأساسي`,
      en: `Basic Pay`,
    },
    Allowances: {
      ur: `الاؤنسز / مراعات (Allowances)`,
      ps: `الاؤنسونه او امتیازات`,
      ar: `البدلات والمكافآت`,
      en: `Allowances`,
    },
    Deductions: {
      ur: `کٹوتیاں (Deductions)`,
      ps: `وضع کول / کټوتې`,
      ar: `الخصومات`,
      en: `Deductions`,
    },
    NetAmountPaid: {
      ur: `خالص ادا شدہ تنخواہ (Net Amount)`,
      ps: `خالصه ورکړل شوې تنخوا`,
      ar: `صافي الراتب المستلم`,
      en: `Net Paid Salary`,
    },
    ExamTitle: {
      ur: `امتحان`,
      ps: `ازموینه`,
      ar: `الاختبار`,
      en: `Examination`,
    },
    ExamDepartment: {
      ur: `امتحانی شعبہ`,
      ps: `د ازموینې څانګه`,
      ar: `القسم / المادة`,
      en: `Exam Section`,
    },
    TotalMarksHeader: {
      ur: `کل نمبرات`,
      ps: `ټولې نمرې`,
      ar: `الدرجة العظمى`,
      en: `Total Marks`,
    },
    ObtainedMarksHeader: {
      ur: `حاصل کردہ نمبرات`,
      ps: `اخیستل شوې نمرې`,
      ar: `الدرجة المحصلة`,
      en: `Obtained Marks`,
    },
    OralExam: {
      ur: `زبانی امتحان (Oral / Hifz / Tajweed)`,
      ps: `شفاهي ازموینه (حفظ او تجوید)`,
      ar: `الاختبار الشفهي (الحفظ والتجويد)`,
      en: `Oral Exam (Hifz & Tajweed)`,
    },
    WrittenExam: {
      ur: `تحریری امتحان (Written)`,
      ps: `تحریري ازموینه`,
      ar: `الاختبار التحريري`,
      en: `Written Exam`,
    },
    CumulativeTotal: {
      ur: `مجموعی میزان (Total Marks)`,
      ps: `ټولګه نمرې (Total Marks)`,
      ar: `المجموع الإجمالي`,
      en: `Cumulative Total`,
    },
    GradeResult: {
      ur: `درجہ / گریڈ:`,
      ps: `درجه / ګریډ:`,
      ar: `التقدير العام:`,
      en: `Grade / Position:`,
    },
    RemarksResult: {
      ur: `کیفیت و ریمارکس:`,
      ps: `کیفیت او تبصره:`,
      ar: `الملاحظات والتقييم:`,
      en: `Remarks / Evaluation:`,
    },
    SignCashier: {
      ur: `دستخط کیشیئر / اکاؤنٹنٹ`,
      ps: `د کیشیر / محاسب لاسلیک`,
      ar: `توقيع المحاسب`,
      en: `Cashier / Accountant Signature`,
    },
    SignPrincipal: {
      ur: `دستخط و مہر ناظم / مہتمم`,
      ps: `د ناظم / مهتمم لاسلیک او ټاپه`,
      ar: `توقيع وختم المدير`,
      en: `Principal / Director Stamp & Sign`,
    },
    ComputerGeneratedNotice: {
      ur: `یہ رسید کمپیوٹر سے تیار کردہ ہے اور ادارے کی تصدیق کے بعد قابلِ قبول ہے۔`,
      ps: `دا رسید د کمپیوټر لخوا جوړ شوی او د ادارې تر تایید وروسته د اعتبار وړ دی.`,
      ar: `هذا السند صادر آلياً من النظام ومعتمد بختم الإدارة.`,
      en: `This is a computer-generated voucher and is valid upon official verification.`,
    },
    ContactLabel: {
      ur: `رابطہ:`,
      ps: `اړیکه:`,
      ar: `للتواصل:`,
      en: `Contact:`,
    },
    Cash: {
      ur: `نقد رقم (Cash)`,
      ps: `نغدې پیسې (Cash)`,
      ar: `نقداً`,
      en: `Cash`,
    },
    BankTransfer: {
      ur: `بینک ٹرانسفر`,
      ps: `بانکي لیږد`,
      ar: `تحويل بنكي`,
      en: `Bank Transfer`,
    },
    EasyPaisaJazzCash: {
      ur: `ایزی پیسہ / جاز کیش`,
      ps: `ایزي پیسه / جاز کیش`,
      ar: `محفظة إلكترونية`,
      en: `EasyPaisa / JazzCash`,
    },
    WelcomeTitle: {
      ur: `خوش آمدید! السلام علیکم ورحمۃ اللہ`,
      ps: `ښه راغلاست! السلام علیکم ورحمة الله`,
      ar: `أهلاً وسهلاً! السلام عليكم ورحمة الله`,
      en: `Welcome! Peace & Blessings`,
    },
    AdminSubtitle: {
      ur: `مدرسہ کا تمام تر تعلیمی و مالی ریکارڈ کلاؤڈ پر ریئل ٹائم اپڈیٹ ہو رہا ہے۔`,
      ps: `د مدرسې ټول تعلیمي او مالي ریکارډ په ریښتیني وخت کې په کلاوډ کې ثبت کیږي.`,
      ar: `يتم تحديث جميع السجلات التعليمية والمالية سحابياً بشكل فوري.`,
      en: `All educational and financial records are synchronized live in the cloud.`,
    },
    TeacherSubtitle: {
      ur: `آپ کے زیرِ نگرانی تفویض کردہ درجات اور طلباء کی روزمرہ تعلیمی کارکردگی۔`,
      ps: `ستاسو تر څارنې لاندې د سپارل شویو ټولګیو او زده‌کوونکو ورځنی تعلیمي فعالیت.`,
      ar: `الصفوف والطلاب المكلف بهم ومتابعة الأداء اليومي.`,
      en: `Your assigned classes, students, and daily academic progress.`,
    },
    NewAdmissionBtn: {
      ur: `+ نیا داخلہ`,
      ps: `+ نوی داخله`,
      ar: `+ قبول جديد`,
      en: `+ New Admission`,
    },
    TodayAttendanceBtn: {
      ur: `آج کی حاضری`,
      ps: `د نن ورځې حاضري`,
      ar: `حضور اليوم`,
      en: `Today's Attendance`,
    },
    CollectFeeBtn: {
      ur: `فیس وصولی`,
      ps: `د فیس راټولول`,
      ar: `تحصيل الرسوم`,
      en: `Collect Fee`,
    },
    MarkAllPresent: {
      ur: `سب کو حاضر لگائیں`,
      ps: `ټول حاضر کړئ`,
      ar: `تحضير الجميع`,
      en: `Mark All Present`,
    },
    SaveAttendance: {
      ur: `حاضری محفوظ کریں`,
      ps: `حاضري خوندي کړئ`,
      ar: `حفظ الحضور`,
      en: `Save Attendance`,
    },
    AttendanceSavedSuccess: {
      ur: `حاضری کامیابی سے محفوظ ہو گئی!`,
      ps: `حاضري په بریالیتوب سره خوندي شوه!`,
      ar: `تم حفظ الحضور بنجاح!`,
      en: `Attendance saved successfully!`,
    },
    DailyAttendancePortal: {
      ur: `روزانہ حاضری پورٹل`,
      ps: `د ورځنۍ حاضرۍ پورټل`,
      ar: `بوابة الحضور اليومي`,
      en: `Daily Attendance Portal`,
    },
    ByQariSummary: {
      ur: `👥 اساتذہ وار حاضری جائزہ`,
      ps: `👥 د استاذانو له مخې حاضري`,
      ar: `👥 تقرير الحضور حسب المعلم`,
      en: `👥 By Teacher Summary`,
    },
    ClassRegisterSheet: {
      ur: `📋 کلاس وار تفصیلی رجسٹر`,
      ps: `📋 د ټولګي مفصل راجستر`,
      ar: `📋 سجل الصف التفصيلي`,
      en: `📋 Class Register Sheet`,
    },
    AttendanceAdminDesc: {
      ur: `تمام اساتذہ اور قراء کرام کی کلاس وار حاضری رپورٹ، حاضر و غیر حاضر طلباء کی تعداد`,
      ps: `د ټولو استاذانو او قاري صاحبانو د ټولګي له مخې د حاضرۍ راپور، حاضر او غیر حاضر زده‌کوونکي`,
      ar: `تقرير حضور الطلاب حسب الصفوف والمعلمين، وإحصاءات الحاضرين والغائبين`,
      en: `Class-wise attendance report for all teachers with present and absent student counts`,
    },
    AttendanceTeacherDesc: {
      ur: `محترم قاری صاحب! اپنے تفویض کردہ درجات کی حاضری لگائیں`,
      ps: `محترم قاري صاحب! خپلو سپارل شویو ټولګیو حاضري وټاکئ`,
      ar: `فضيلة المعلم! يرجى تسجيل حضور الصفوف المسندة إليك`,
      en: `Respected Teacher! Please record attendance for your assigned classes`,
    },
    SearchTeacherClass: {
      ur: `قاری کا نام، کلاس، یا موبائل نمبر درج کریں...`,
      ps: `د قاري نوم، ټولګی، یا ټلیفون شمېره ولیکئ...`,
      ar: `ابحث باسم المعلم، الصف، أو رقم الهاتف...`,
      en: `Search by teacher name, class, or phone...`,
    },
    AttendanceDate: {
      ur: `تاریخ حاضری`,
      ps: `د حاضرۍ نېټه`,
      ar: `تاريخ التحضير`,
      en: `Attendance Date`,
    },
    TotalStaffTeachers: {
      ur: `کل اساتذہ و معلمات`,
      ps: `ټول استاذان او ښوونکي`,
      ar: `إجمالي هيئة التدريس`,
      en: `Total Teaching Staff`,
    },
    StaffTeachingBadge: {
      ur: `عملہ برائے تدریس`,
      ps: `تدریسي عمله`,
      ar: `الكادر التدريسي`,
      en: `Teaching Faculty`,
    },
    AttendanceMarked: {
      ur: `حاضری درج شدہ`,
      ps: `حاضري ثبت شوه`,
      ar: `تم تسجيل الحضور`,
      en: `Attendance Marked`,
    },
    AttendancePending: {
      ur: `حاضری باقی ہے`,
      ps: `حاضري پاتې ده`,
      ar: `بانتظار التسجيل`,
      en: `Attendance Pending`,
    },
    TotalPresentStudents: {
      ur: `کل حاضر طلبہ`,
      ps: `ټول حاضر زده‌کوونکي`,
      ar: `إجمالي الحاضرين`,
      en: `Total Present`,
    },
    TotalAbsentStudents: {
      ur: `کل غیر حاضر طلبہ`,
      ps: `ټول غير حاضر زده‌کوونکي`,
      ar: `إجمالي الغائبين`,
      en: `Total Absent`,
    },
    AttendanceRate: {
      ur: `تناسب حاضری`,
      ps: `د حاضرۍ فیصدي`,
      ar: `نسبة الحضور`,
      en: `Attendance Rate`,
    },
    TeacherReportTitle: {
      ur: `اساتذہ و قراء کرام کی حاضری رپورٹ`,
      ps: `د استاذانو او قاریانو د حاضرۍ راپور`,
      ar: `تقرير حضور المعلمين`,
      en: `Faculty Attendance Overview`,
    },
    TeacherReportSubtitle: {
      ur: `ہر قاری کے زیرِ نگرانی طلباء کے حاضر و غیر حاضر ہونے کی تفصیلی کیفیت`,
      ps: `د هر قاري تر څارنې لاندې د زده‌کوونکو د حاضرۍ تفصيلي حالت`,
      ar: `تفاصيل حضور وغياب الطلاب لكل معلم`,
      en: `Detailed attendance status of students under each teacher`,
    },
    NoTeacherFound: {
      ur: `کوئی استاد یا قاری نہیں ملا۔`,
      ps: `هیڅ استاذ ونه موندل شو.`,
      ar: `لم يتم العثور على أي معلم.`,
      en: `No teacher found.`,
    },
    ViewRegister: {
      ur: `رجسٹر دیکھیں`,
      ps: `راجستر وګورئ`,
      ar: `عرض السجل`,
      en: `View Register`,
    },
    BackToSummary: {
      ur: `واپس اساتذہ خلاصہ`,
      ps: `د استاذانو لنډیز ته بېرته`,
      ar: `العودة لملخص المعلمين`,
      en: `Back to Summary`,
    },
    SelectClass: {
      ur: `کلاس / درجہ منتخب کریں`,
      ps: `ټولګی / درجه وټاکئ`,
      ar: `اختر الصف`,
      en: `Select Class`,
    },
    NoStudentsInClass: {
      ur: `اس کلاس میں فی الحال کوئی طالب علم رجسٹرڈ نہیں ہے۔`,
      ps: `په دې ټولګي کې اوس مهال کوم زده‌کوونکی نه دی ثبت شوی.`,
      ar: `لا يوجد طلاب مسجلون في هذا الصف حالياً.`,
      en: `No students registered in this class currently.`,
    },
    FeesTitle: {
      ur: `شعبۂ فیس انتظام و رسیدات`,
      ps: `د فیس مدیریت او رسیدونه`,
      ar: `إدارة الرسوم والسندات`,
      en: `Student Fees & Receipts`,
    },
    FeesSubtitle: {
      ur: `ماہانہ فیس کی وصولی، واجبات، کمپیوٹرائزڈ رسیدات اور واٹس ایپ نوٹیفکیشن`,
      ps: `د میاشتني فیس راټولول، پاتې حسابونه، کمپیوټري رسیدونه او واټساپ خبرتیاوې`,
      ar: `تحصيل الرسوم الشهرية، السندات الآلية وإشعارات واتساب`,
      en: `Monthly fee collection, dues, computerized receipts, and WhatsApp alerts`,
    },
    TotalCollectedThisMonth: {
      ur: `منتخب ماہ کی کل وصولی`,
      ps: `د دې میاشتې ټول راټول شوي فیس`,
      ar: `إجمالي المحصل لهذا الشهر`,
      en: `Total Collected This Month`,
    },
    ReceiptsCount: {
      ur: `وصول شدہ رسیدات کی تعداد`,
      ps: `د راټولو شوو رسیدونو شمېر`,
      ar: `عدد السندات الصادرة`,
      en: `Total Receipts Count`,
    },
    CollectFeeModalTitle: {
      ur: `فیس وصولی فارم (نئی رسید)`,
      ps: `د فیس د ترلاسه کولو فورمه (نوی رسید)`,
      ar: `نموذج سند قبض رسوم جديد`,
      en: `Fee Collection Form (New Receipt)`,
    },
    StudentsTitle: {
      ur: `شعبۂ طلباء و طالبات`,
      ps: `د زده‌کوونکو او زده‌کوونکو څانګه`,
      ar: `شؤون الطلاب والطالبات`,
      en: `Students Management`,
    },
    StudentsSubtitle: {
      ur: `تمام زیرِ تعلیم طالبات کے کوائف، رابطہ، تصاویر اور داخلہ فارم`,
      ps: `د ټولو زده‌کوونکو معلومات، اړیکې، عکسونه او د داخلې فورمې`,
      ar: `سجلات الطلاب، بيانات التواصل، الصور واستمارات القبول`,
      en: `Student profiles, contact numbers, photos, and admission records`,
    },
    PhotoAndStudent: {
      ur: `تصویر و طالب علم`,
      ps: `عکس او زده‌کوونکی`,
      ar: `الصورة والطالب`,
      en: `Photo & Student`,
    },
    StudentStatusRegular: {
      ur: `باقاعدہ`,
      ps: `منظم / باقاعده`,
      ar: `منتظم`,
      en: `Regular`,
    },
    StudentStatusNew: {
      ur: `نیا داخلہ`,
      ps: `نوی داخله`,
      ar: `مستجد`,
      en: `New`,
    },
    StudentStatusFeeDue: {
      ur: `فیس واجب الادا`,
      ps: `د فیس پاتې`,
      ar: `مستحق الرسوم`,
      en: `Fee Due`,
    },
    StudentStatusGraduated: {
      ur: `فارغ التحصیل`,
      ps: `فارغ شوی`,
      ar: `متخرج`,
      en: `Graduated`,
    },
    SalariesTitle: {
      ur: `شعبۂ اساتذہ تنخواہ و ڈسبرسمنٹ`,
      ps: `د استاذانو تنخواګانې او اجرا`,
      ar: `رواتب المعلمين والموظفين`,
      en: `Teacher Salaries & Payroll`,
    },
    SalariesSubtitle: {
      ur: `ماہانہ تنخواہوں کی تیاری، کٹوتیاں، الاؤنسز، کمپیوٹرائزڈ سیلری سلپ اور ریکارڈ`,
      ps: `د میاشتنیو تنخواګانو چمتو کول، کټوتې، الاؤنسونه او د تنخواګانو سلپونه`,
      ar: `إعداد الرواتب الشهرية، البدلات، الخصومات وإصدار قسائم الرواتب`,
      en: `Monthly payroll, deductions, allowances, computerized slips, and records`,
    },
    DisburseSalaryBtn: {
      ur: `تنخواہ جاری کریں`,
      ps: `تنخوا اجرا کړئ`,
      ar: `صرف راتب`,
      en: `Disburse Salary`,
    },
    ExamsTitle: {
      ur: `شعبۂ امتحانات و نتائج`,
      ps: `د ازموینو او پایلو څانګه`,
      ar: `الامتحانات والنتائج الرسمية`,
      en: `Exams & Results Department`,
    },
    ExamsSubtitle: {
      ur: `زبانی و تحریری امتحانات، گریڈنگ اور اسٹوڈنٹ رزلٹ کارڈز`,
      ps: `شفاهي او تحریري ازموینې، نمرو وېش او د پایلو کارټونه`,
      ar: `الامتحانات الشفهية والتحريرية وإصدار بطاقات النتائج`,
      en: `Oral and written examinations, grading, and student result cards`,
    },
    EnterMarksBtn: {
      ur: `نمبرات درج کریں`,
      ps: `نمرې ثبت کړئ`,
      ar: `رصد الدرجات`,
      en: `Enter Marks`,
    },
    NewExamBtn: {
      ur: `نیا امتحان`,
      ps: `نوې ازموینه`,
      ar: `اختبار جديد`,
      en: `New Exam`,
    },
  };
function x(e, t = `ur`) {
  return b[e] && b[e][t] ? b[e][t] : e;
}
var S = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  C = o((e, t) => {
    t.exports = S();
  })(),
  w = (0, _.createContext)(void 0),
  T = ({ children: e }) => {
    let [t, n] = (0, _.useState)(() => {
        let e = localStorage.getItem(`madrasa_lang`);
        return e && [`ur`, `ps`, `ar`, `en`].includes(e) ? e : `ur`;
      }),
      r = (y.find((e) => e.code === t) || y[0]).dir;
    return (
      (0, _.useEffect)(() => {
        (localStorage.setItem(`madrasa_lang`, t),
          (document.documentElement.lang = t),
          (document.documentElement.dir = r));
      }, [t, r]),
      (0, C.jsx)(w.Provider, {
        value: {
          language: t,
          setLanguage: (e) => {
            n(e);
          },
          dir: r,
          t: (e) => x(e, t),
        },
        children: e,
      })
    );
  },
  E = () => {
    let e = (0, _.useContext)(w);
    if (!e) throw Error(`useLanguage must be used within a LanguageProvider`);
    return e;
  },
  D = (0, _.createContext)(void 0),
  O = ({ children: e }) => {
    let [t, n] = (0, _.useState)(() => {
      let e = localStorage.getItem(`madrasa_dark`);
      return e === null
        ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
        : e === `1`;
    });
    return (
      (0, _.useEffect)(() => {
        (localStorage.setItem(`madrasa_dark`, t ? `1` : `0`),
          t
            ? document.documentElement.classList.add(`dark`)
            : document.documentElement.classList.remove(`dark`));
      }, [t]),
      (0, C.jsx)(D.Provider, {
        value: {
          isDark: t,
          toggleTheme: () => {
            n((e) => !e);
          },
        },
        children: e,
      })
    );
  },
  k = () => {
    let e = (0, _.useContext)(D);
    if (!e) throw Error(`useTheme must be used within a ThemeProvider`);
    return e;
  },
  A = {
    madrasaNameEn: `Institute Of Islamic Education (Girl's) Quetta`,
    madrasaNameUr: `إدارة العلوم الإسلامية للبنات كوئٹہ`,
    founderEn: `Shaikh Maulana Muhammad Abu Turab (Hafizahullah)`,
    founderUr: `فضیلۃ الشیخ مولانا محمد ابو تراب حفظہ اللہ`,
    address: `Muslim Bagh, Airport Road, Quetta (Balochistan)`,
    addressUr: `مسلم باغ، ایئرپورٹ روڈ، کوئٹہ (بلوچستان)`,
    uiLanguage: `ur`,
    phonePrimary: `0335-8381111`,
    phoneSecondary: `0312-1293406`,
    academicYear: `1447H — 2025/2026`,
    currency: `PKR`,
    darkMode: !1,
    financialPin: `1234`,
    twoFactorAdminRequired: !0,
    twoFactorAdminSecret: `JBSWY3DPEHPK3PXP`,
    twoFactorAdminBackupCode: `87654321`,
  },
  ee = [
    {
      id: 1,
      username: `admin`,
      password: `madrasa@123`,
      role: `admin`,
      fullName: `Administrator`,
      fullNameUrdu: `ناظمِ اعلیٰ / ایڈمنسٹریٹر`,
      title: `Principal`,
      phone: `0335-8381111`,
      twoFactorEnabled: !0,
      twoFactorSecret: `JBSWY3DPEHPK3PXP`,
      twoFactorBackupCode: `87654321`,
    },
    {
      id: 2,
      username: `teacher`,
      password: `teacher@123`,
      role: `teacher`,
      fullName: `Qari Muhammad Ishaq`,
      fullNameUrdu: `قاری محمد اسحاق`,
      title: `Senior Hifz Teacher`,
      phone: `0333-9876543`,
      teacherId: 1,
      twoFactorEnabled: !1,
      twoFactorSecret: `MFRGGZDFMZTWQ2LK`,
      twoFactorBackupCode: `11223344`,
    },
    {
      id: 3,
      username: `quddus`,
      password: `quddus@123`,
      role: `teacher`,
      fullName: `Mufti Abdul Quddus`,
      fullNameUrdu: `مفتی عبد القدوس`,
      title: `Head of Fiqh & Hadith`,
      phone: `0312-1293406`,
      teacherId: 2,
      twoFactorEnabled: !1,
      twoFactorSecret: `NVXW63TPOJ2WE2LK`,
      twoFactorBackupCode: `22334455`,
    },
    {
      id: 4,
      username: `maryam`,
      password: `maryam@123`,
      role: `teacher`,
      fullName: `Qaria Maryam`,
      fullNameUrdu: `قاریہ مریم`,
      title: `Tajweed & Nazra Incharge`,
      phone: `0345-9876543`,
      teacherId: 3,
      twoFactorEnabled: !1,
      twoFactorSecret: `ONUGK4TFMRQWO2LK`,
      twoFactorBackupCode: `33445566`,
    },
  ],
  te = [
    {
      id: 1,
      name: `Hifz-1`,
      nameUrdu: `حفظ القرآن - اول`,
      department: `Hifz`,
      teacherId: 1,
      teacherName: `قاری محمد اسحاق`,
      feeAmount: 3500,
      capacity: 30,
      schedule: `07:00 – 10:00`,
      isActive: !0,
    },
    {
      id: 2,
      name: `Hifz-2`,
      nameUrdu: `حفظ القرآن - دوم`,
      department: `Hifz`,
      teacherId: 3,
      teacherName: `قاریہ مریم`,
      feeAmount: 3500,
      capacity: 25,
      schedule: `11:00 – 13:30`,
      isActive: !0,
    },
    {
      id: 3,
      name: `Tajweed-Qiraat`,
      nameUrdu: `تجوید و قراءت`,
      department: `Hifz`,
      teacherId: 3,
      teacherName: `قاریہ مریم`,
      feeAmount: 3e3,
      capacity: 35,
      schedule: `14:00 – 16:00`,
      isActive: !0,
    },
    {
      id: 4,
      name: `Hadith-1`,
      nameUrdu: `درجہ اولیٰ - حدیث`,
      department: `Hadith`,
      teacherId: 2,
      teacherName: `مفتی عبد القدوس`,
      feeAmount: 4500,
      capacity: 25,
      schedule: `08:00 – 11:00`,
      isActive: !0,
    },
    {
      id: 5,
      name: `Nazra-A`,
      nameUrdu: `ناظرہ - الف`,
      department: `Nazra`,
      teacherId: 3,
      teacherName: `قاریہ مریم`,
      feeAmount: 2500,
      capacity: 40,
      schedule: `08:00 – 10:00`,
      isActive: !0,
    },
  ],
  ne = [
    {
      id: 1,
      userId: 2,
      employeeNo: `TCH-001`,
      fullName: `Qari Muhammad Ishaq`,
      fullNameUrdu: `قاری محمد اسحاق`,
      cnic: `54400-1234567-1`,
      designation: `Senior Hifz Teacher`,
      subjectSpecialty: `Hifz & Tajweed`,
      qualification: `Shahadat-ul-Alimiyyah & Qiraat Ashara`,
      joiningDate: `2023-01-15`,
      monthlySalary: 45e3,
      contractType: `Permanent`,
      bankAccount: `HBL 1234-56789012-03`,
      phone: `0333-9876543`,
      status: `Active`,
      username: `teacher`,
      password: `teacher@123`,
      assignedClassId: 1,
      twoFactorEnabled: !1,
      twoFactorSecret: `MFRGGZDFMZTWQ2LK`,
      twoFactorBackupCode: `11223344`,
    },
    {
      id: 2,
      userId: 3,
      employeeNo: `TCH-002`,
      fullName: `Mufti Abdul Quddus`,
      fullNameUrdu: `مفتی عبد القدوس`,
      cnic: `54400-7654321-3`,
      designation: `Head of Islamic Jurisprudence`,
      subjectSpecialty: `Fiqh & Hadith`,
      qualification: `Takhassus Fil Fiqh`,
      joiningDate: `2022-08-01`,
      monthlySalary: 55e3,
      contractType: `Permanent`,
      bankAccount: `Meezan Bank 9988-77665544-01`,
      phone: `0312-1293406`,
      status: `Active`,
      username: `quddus`,
      password: `quddus@123`,
      assignedClassId: 4,
      twoFactorEnabled: !1,
      twoFactorSecret: `NVXW63TPOJ2WE2LK`,
      twoFactorBackupCode: `22334455`,
    },
    {
      id: 3,
      userId: 4,
      employeeNo: `TCH-003`,
      fullName: `Qaria Maryam`,
      fullNameUrdu: `قاریہ مریم`,
      cnic: `54400-9988776-5`,
      designation: `Tajweed & Nazra Incharge`,
      subjectSpecialty: `Nazra, Qaida & Tajweed`,
      qualification: `Fazilat Course & Qiraat Hafs`,
      joiningDate: `2024-02-10`,
      monthlySalary: 35e3,
      contractType: `Permanent`,
      phone: `0345-9876543`,
      status: `Active`,
      username: `maryam`,
      password: `maryam@123`,
      assignedClassId: 5,
      twoFactorEnabled: !1,
      twoFactorSecret: `ONUGK4TFMRQWO2LK`,
      twoFactorBackupCode: `33445566`,
    },
  ],
  re = [
    {
      id: 1,
      admissionNo: `STD-0001`,
      fullName: `Fatima Bibi`,
      fullNameUrdu: `فاطمہ بی بی`,
      fatherName: `Muhammad Ishaq`,
      fatherNameUrdu: `محمد اسحاق`,
      dob: `2013-05-12`,
      gender: `Female`,
      cnicFormB: `54400-1234567-2`,
      photoPath: `./assets/STD-0001.jpg`,
      classId: 1,
      admissionDate: `2024-03-01`,
      address: `Airport Road, Muslim Bagh, Quetta`,
      phone: `0333-1234567`,
      guardianPhone: `0333-1234567`,
      whatsapp: `923331234567`,
      bloodGroup: `B+`,
      monthlyFee: 3500,
      feeConcessionPct: 0,
      status: `Regular`,
      notes: `ماشاءاللہ بہت ذہین اور محنتی بچی ہے`,
    },
    {
      id: 2,
      admissionNo: `STD-0002`,
      fullName: `Zainab Khan`,
      fullNameUrdu: `زینب خان`,
      fatherName: `Late Abdul Rehman`,
      fatherNameUrdu: `مرحوم عبد الرحمٰن`,
      dob: `2014-08-20`,
      gender: `Female`,
      cnicFormB: `54400-9876543-4`,
      photoPath: `./assets/STD-0002.jpg`,
      classId: 1,
      admissionDate: `2024-03-15`,
      address: `Nawa Killi, Quetta`,
      phone: `0312-9876543`,
      guardianPhone: `0312-9876543`,
      whatsapp: `923129876543`,
      bloodGroup: `O+`,
      monthlyFee: 3500,
      feeConcessionPct: 50,
      feeConcessionReason: `Yateem`,
      status: `Regular`,
      notes: `یتیم کوٹہ — 50 فیصد فیس رعایت`,
    },
    {
      id: 3,
      admissionNo: `STD-0003`,
      fullName: `Maryam Noor`,
      fullNameUrdu: `مریم نور`,
      fatherName: `Noorullah`,
      fatherNameUrdu: `نور اللہ`,
      dob: `2015-11-04`,
      gender: `Female`,
      cnicFormB: `54400-5566778-6`,
      photoPath: `./assets/STD-0003.jpg`,
      classId: 5,
      admissionDate: `2024-04-01`,
      address: `Pashtoonabad, Quetta`,
      phone: `0345-7654321`,
      guardianPhone: `0345-7654321`,
      whatsapp: `923457654321`,
      bloodGroup: `A+`,
      monthlyFee: 2500,
      feeConcessionPct: 100,
      feeConcessionReason: `Ghareeb`,
      status: `FeeDue`,
      notes: `مستحق و نادار خاندان — 100% وظیفہ`,
    },
    {
      id: 4,
      admissionNo: `STD-0004`,
      fullName: `Ayesha Tariq`,
      fullNameUrdu: `عائشہ طارق`,
      fatherName: `Tariq Mehmood`,
      fatherNameUrdu: `طارق محمود`,
      dob: `2012-02-18`,
      gender: `Female`,
      cnicFormB: `54400-3344556-8`,
      classId: 4,
      admissionDate: `2024-02-10`,
      address: `Samungli Road, Quetta`,
      phone: `0300-1122334`,
      guardianPhone: `0300-1122334`,
      whatsapp: `923001122334`,
      bloodGroup: `AB+`,
      monthlyFee: 4500,
      feeConcessionPct: 0,
      status: `Regular`,
    },
    {
      id: 5,
      admissionNo: `STD-0005`,
      fullName: `Sumayya Riaz`,
      fullNameUrdu: `سمیہ ریاض`,
      fatherName: `Muhammad Riaz`,
      fatherNameUrdu: `محمد ریاض`,
      dob: `2011-06-14`,
      gender: `Female`,
      cnicFormB: `54400-8899001-2`,
      classId: 4,
      admissionDate: `2024-02-15`,
      address: `Brewery Road, Quetta`,
      phone: `0334-5566778`,
      guardianPhone: `0334-5566778`,
      whatsapp: `923345566778`,
      bloodGroup: `B+`,
      monthlyFee: 4500,
      feeConcessionPct: 0,
      status: `Regular`,
      notes: `حدیث شریف کی باصلاحیت طالبہ`,
    },
    {
      id: 6,
      admissionNo: `STD-0006`,
      fullName: `Hafsa Siddiqua`,
      fullNameUrdu: `حفصہ صدیقہ`,
      fatherName: `Abu Bakr`,
      fatherNameUrdu: `ابو بکر`,
      dob: `2016-09-05`,
      gender: `Female`,
      cnicFormB: `54400-4433221-5`,
      classId: 5,
      admissionDate: `2024-04-10`,
      address: `Sariab Road, Quetta`,
      phone: `0313-9988776`,
      guardianPhone: `0313-9988776`,
      whatsapp: `923139988776`,
      bloodGroup: `O+`,
      monthlyFee: 2500,
      feeConcessionPct: 0,
      status: `Regular`,
      notes: `ناظرہ قرآن کریم اور ابتدائی قاعدہ`,
    },
  ],
  ie = [
    {
      id: 1,
      studentId: 1,
      teacherId: 1,
      teacherName: `قاری محمد اسحاق`,
      reportDate: new Date().toISOString().split(`T`)[0],
      rating: 5,
      behaviour: `Excellent`,
      sabaq: `سورۃ البقرۃ: آیات 142 تا 152 (نصف پاؤ)`,
      sabqi: `پارہ 2: رکوع 1 تا 3`,
      manzil: `پارہ 1 (مکمل)`,
      progressText: `تجوید اور مخارج کی ادائیگی شاندار ہے۔ سبق بہت پختہ سنایا۔`,
    },
    {
      id: 2,
      studentId: 2,
      teacherId: 1,
      teacherName: `قاری محمد اسحاق`,
      reportDate: new Date().toISOString().split(`T`)[0],
      rating: 4,
      behaviour: `Good`,
      sabaq: `سورۃ آل عمران: آیات 10 تا 20`,
      sabqi: `سورۃ البقرۃ آخری رکوع`,
      manzil: `پارہ 2 (نصف)`,
      progressText: `سبق اچھا یاد تھا، سبقی میں مزید توجہ کی ضرورت ہے۔`,
    },
  ],
  j = [
    {
      id: 1,
      studentId: 1,
      studentName: `Fatima Bibi`,
      admissionNo: `STD-0001`,
      periodYear: 2026,
      periodMonth: 9,
      monthlyFee: 3500,
      concessionPct: 0,
      amountPaid: 3500,
      paymentDate: `2026-09-02`,
      paymentMethod: `Cash`,
      receiptNo: `FEE-260902143001`,
      notes: `ماہانہ فیس ادا شدہ`,
    },
    {
      id: 2,
      studentId: 2,
      studentName: `Zainab Khan`,
      admissionNo: `STD-0002`,
      periodYear: 2026,
      periodMonth: 9,
      monthlyFee: 3500,
      concessionPct: 50,
      concessionReason: `Yateem`,
      amountPaid: 1750,
      paymentDate: `2026-09-05`,
      paymentMethod: `Cash`,
      receiptNo: `FEE-260905101502`,
      notes: `یتیم کوٹہ 50% رعایت`,
    },
  ],
  M = [
    {
      id: 1,
      type: `Income`,
      category: `Donation (Chanda)`,
      amount: 15e4,
      date: `2026-09-01`,
      description: `جامعہ کی تعمیر و ترقی کے لیے امدادی رقم`,
      partyName: `حاجی محمد اسماعیل صاحب`,
      receiptNo: `RCT-260901001`,
    },
    {
      id: 2,
      type: `Income`,
      category: `Student Fee`,
      amount: 5250,
      date: `2026-09-02`,
      description: `ماہ ستمبر کی فیس وصولی`,
      partyName: `طلباء فیس`,
      receiptNo: `FEE-260902143001`,
    },
    {
      id: 3,
      type: `Expense`,
      category: `Utility Bills`,
      amount: 28500,
      date: `2026-09-03`,
      description: `بجلی اور گیس کا بل برائے اگست`,
      partyName: `QESCO / SSGC`,
      receiptNo: `EXP-260903001`,
    },
    {
      id: 4,
      type: `Expense`,
      category: `Food/Kitchen`,
      amount: 45e3,
      date: `2026-09-04`,
      description: `طالبات کے دارالاقامہ کے لیے راشن و گوشت`,
      partyName: `مدینہ جنرل اسٹور`,
      receiptNo: `EXP-260904002`,
    },
  ],
  ae = [
    {
      id: 1,
      studentId: 1,
      classId: 1,
      date: new Date().toISOString().split(`T`)[0],
      status: `Present`,
      markedBy: 1,
      markedByName: `قاری محمد اسحاق`,
    },
    {
      id: 2,
      studentId: 2,
      classId: 1,
      date: new Date().toISOString().split(`T`)[0],
      status: `Absent`,
      markedBy: 1,
      markedByName: `قاری محمد اسحاق`,
    },
    {
      id: 3,
      studentId: 4,
      classId: 4,
      date: new Date().toISOString().split(`T`)[0],
      status: `Present`,
      markedBy: 2,
      markedByName: `مفتی عبد القدوس`,
    },
    {
      id: 4,
      studentId: 5,
      classId: 4,
      date: new Date().toISOString().split(`T`)[0],
      status: `Present`,
      markedBy: 2,
      markedByName: `مفتی عبد القدوس`,
    },
  ],
  oe = [
    {
      id: 1,
      teacherId: 1,
      teacherName: `قاری محمد اسحاق`,
      employeeNo: `TCH-001`,
      periodYear: 2026,
      periodMonth: 8,
      basic: 45e3,
      allowances: 3e3,
      deductions: 0,
      netAmount: 48e3,
      isPaid: !0,
      paymentDate: `2026-09-01`,
      paymentMethod: `Bank Transfer`,
      slipNo: `SLP-260901001`,
    },
  ],
  N = [
    {
      id: 1,
      name: `Monthly Exam — Ramadan 1447`,
      nameUrdu: `ماہانہ امتحان — رمضان المبارک`,
      classId: 1,
      className: `Hifz-1`,
      examType: `Monthly`,
      oralMax: 70,
      writtenMax: 30,
      totalMax: 100,
      examDate: `2026-03-20`,
      status: `Completed`,
    },
    {
      id: 2,
      name: `Mid-Term Exam — 1447H`,
      nameUrdu: `ششماہی امتحان — ۱۴۴۷ھ`,
      classId: 4,
      className: `Hadith-1`,
      examType: `MidTerm`,
      oralMax: 40,
      writtenMax: 60,
      totalMax: 100,
      examDate: `2026-06-15`,
      status: `Completed`,
    },
  ],
  se = [
    {
      id: 1,
      examId: 1,
      studentId: 1,
      studentName: `فاطمہ بی بی`,
      admissionNo: `STD-0001`,
      oralMarks: 68,
      writtenMarks: 28,
      totalMarks: 96,
      grade: `ممتاز (A+)`,
      remarks: `ماشاءاللہ شاندار کارکردگی`,
    },
    {
      id: 2,
      examId: 1,
      studentId: 2,
      studentName: `زینب خان`,
      admissionNo: `STD-0002`,
      oralMarks: 60,
      writtenMarks: 25,
      totalMarks: 85,
      grade: `جید جداً (A)`,
      remarks: `بہترین، مزید محنت جاری رکھیں`,
    },
  ],
  supabaseConfig = (() => {
    const env = import.meta.env || {};
    const url = env.VITE_SUPABASE_URL || globalThis.__SUPABASE_URL__;
    const key = env.VITE_SUPABASE_ANON_KEY || globalThis.__SUPABASE_ANON_KEY__;
    return url && key ? { url: url.replace(/\/$/, ``), key } : null;
  })(),
  supabaseTables = {
    students: `students`,
    attendance: `attendance`,
    fees: `fee_collections`,
    transactions: `transactions`,
    progress: `progress`,
    exams: `exams`,
    results: `results`,
  },
  supabaseRequest = async (table, options = {}) => {
    if (!supabaseConfig) return null;
    const response = await fetch(`${supabaseConfig.url}/rest/v1/${table}`, {
      ...options,
      headers: {
        apikey: supabaseConfig.key,
        Authorization: `Bearer ${supabaseConfig.key}`,
        'Content-Type': `application/json`,
        ...(options.headers || {}),
      },
    });
    if (!response.ok) throw Error(`Supabase ${response.status}: ${await response.text()}`);
    return response.status === 204 ? null : response.json();
  },
  P = new (class {
    constructor() {
      this.hydrateFromSupabase();
    }
    async hydrateFromSupabase() {
      if (!supabaseConfig || !navigator.onLine) return;
      for (const [cacheKey, table] of Object.entries(supabaseTables)) {
        try {
          const rows = await supabaseRequest(table, { headers: { Prefer: `return=representation` } });
          if (Array.isArray(rows)) {
            this.setStorage(cacheKey, rows);
            window.dispatchEvent(new CustomEvent(`madrasa-data-updated`, { detail: { cacheKey } }));
          }
        } catch (error) {
          console.warn(`Supabase read failed for ${table}; using offline cache.`, error);
        }
      }
    }
    async syncSupabase(cacheKey, operation, payload, id) {
      const table = supabaseTables[cacheKey];
      if (!table || !supabaseConfig || !navigator.onLine) return;
      try {
        const query = id === void 0 ? `` : `?id=eq.${encodeURIComponent(id)}`;
        await supabaseRequest(`${table}${query}`, {
          method: operation === `delete` ? `DELETE` : operation === `insert` ? `POST` : `PATCH`,
          body: operation === `delete` ? void 0 : JSON.stringify(payload),
          headers: { Prefer: `return=minimal` },
        });
      } catch (error) {
        console.warn(`Supabase ${operation} failed for ${table}; local cache retained.`, error);
      }
    }
    getStorage(e, t) {
      let n = localStorage.getItem(`madrasa_${e}`);
      if (!n)
        return (localStorage.setItem(`madrasa_${e}`, JSON.stringify(t)), t);
      try {
        return JSON.parse(n);
      } catch {
        return t;
      }
    }
    setStorage(e, t) {
      localStorage.setItem(`madrasa_${e}`, JSON.stringify(t));
    }
    getSettings() {
      return this.getStorage(`settings`, A);
    }
    updateSettings(e) {
      let t = { ...this.getSettings(), ...e };
      if (
        (this.setStorage(`settings`, t),
        e.twoFactorAdminRequired !== void 0 ||
          e.twoFactorAdminSecret ||
          e.twoFactorAdminBackupCode)
      ) {
        let t = this.getUsers(),
          n = t.findIndex((e) => e.role === `admin` || e.username === `admin`);
        n >= 0 &&
          (e.twoFactorAdminRequired !== void 0 &&
            (t[n].twoFactorEnabled = e.twoFactorAdminRequired),
          e.twoFactorAdminSecret &&
            (t[n].twoFactorSecret = e.twoFactorAdminSecret),
          e.twoFactorAdminBackupCode &&
            (t[n].twoFactorBackupCode = e.twoFactorAdminBackupCode),
          this.setStorage(`users`, t));
      }
      return t;
    }
    getUsers() {
      let e = this.getStorage(`users`, ee),
        t = this.getTeachers(),
        n = !1;
      for (let r of t)
        r.username &&
          !e.some(
            (e) => e.username.toLowerCase() === r.username.toLowerCase(),
          ) &&
          (e.push({
            id: e.length > 0 ? Math.max(...e.map((e) => e.id)) + 1 : 1,
            username: r.username,
            password: r.password || `teacher@123`,
            role: `teacher`,
            fullName: r.fullName,
            fullNameUrdu: r.fullNameUrdu,
            title: r.designation || `Teacher`,
            phone: r.phone,
            teacherId: r.id,
            twoFactorEnabled: r.twoFactorEnabled ?? !1,
            twoFactorSecret: r.twoFactorSecret,
            twoFactorBackupCode: r.twoFactorBackupCode,
          }),
          (n = !0));
      return (n && this.setStorage(`users`, e), e);
    }
    getAdminUser() {
      let e = this.getUsers().find((e) => e.role === `admin`);
      return ((e ||= ee[0]), e);
    }
    updateAdminCredentials(e, t, n) {
      let r = e.trim().toLowerCase();
      if (!r) return { success: !1, message: `یوزر نیم درج کرنا لازمی ہے۔` };
      let i = this.getUsers(),
        a = i.findIndex((e) => e.role === `admin`);
      if (a === -1)
        return { success: !1, message: `ایڈمن اکاؤنٹ سسٹم میں نہیں ملا۔` };
      if (i.find((e, t) => t !== a && e.username.toLowerCase() === r))
        return {
          success: !1,
          message: `یہ یوزر نیم پہلے سے کسی دوسرے صارف کے پاس موجود ہے۔`,
        };
      if (t !== void 0 && t.trim().length > 0) {
        if (t.trim().length < 4)
          return {
            success: !1,
            message: `پاس ورڈ کم از کم 4 حروف یا ہندسوں پر مشتمل ہونا چاہیے۔`,
          };
        i[a].password = t.trim();
      }
      ((i[a].username = r),
        n && (i[a].fullNameUrdu = n),
        this.setStorage(`users`, i));
      let o = this.getCurrentUser();
      if (o && (o.role === `admin` || o.id === i[a].id)) {
        let e = {
          ...o,
          username: r,
          password: i[a].password,
          ...(n ? { fullNameUrdu: n } : {}),
        };
        this.setStorage(`current_user`, e);
      }
      return {
        success: !0,
        message: `ایڈمن کا یوزر نیم اور پاس ورڈ کامیابی سے تبدیل ہو گیا ہے۔`,
        user: i[a],
      };
    }
    getCurrentUser() {
      let e = localStorage.getItem(`madrasa_current_user`);
      if (!e) return null;
      try {
        let t = JSON.parse(e);
        if (t.role === `teacher` && !t.teacherId) {
          let e = this.getTeachers().find(
            (e) =>
              e.userId === t.id ||
              e.username?.toLowerCase() === t.username.toLowerCase() ||
              e.fullName.toLowerCase() === t.fullName.toLowerCase(),
          );
          e &&
            ((t.teacherId = e.id),
            localStorage.setItem(`madrasa_current_user`, JSON.stringify(t)));
        }
        return t;
      } catch {
        return null;
      }
    }
    authenticate(e, t) {
      let n = e.trim().toLowerCase(),
        r = this.getUsers(),
        i = r.find(
          (e) =>
            e.username.toLowerCase() === n ||
            (n === `ishaq` &&
              (e.username === `teacher` ||
                e.fullName.toLowerCase().includes(`ishaq`))),
        );
      if (!i) {
        let e = this.getTeachers().find(
          (e) =>
            e.username?.toLowerCase() === n ||
            (n === `ishaq` && e.fullName.toLowerCase().includes(`ishaq`)),
        );
        e &&
          ((i = {
            id: r.length > 0 ? Math.max(...r.map((e) => e.id)) + 1 : 10,
            username: e.username || n,
            password: e.password || `teacher@123`,
            role: `teacher`,
            fullName: e.fullName,
            fullNameUrdu: e.fullNameUrdu,
            title: e.designation,
            phone: e.phone,
            teacherId: e.id,
            twoFactorEnabled: e.twoFactorEnabled ?? !1,
            twoFactorSecret: e.twoFactorSecret,
            twoFactorBackupCode: e.twoFactorBackupCode,
          }),
          r.push(i),
          this.setStorage(`users`, r));
      }
      if (!i || (i.password && t && i.password !== t.trim())) return null;
      if (i.role === `teacher` && !i.teacherId) {
        let e = this.getTeachers().find(
          (e) =>
            e.userId === i.id ||
            e.username?.toLowerCase() === i.username.toLowerCase() ||
            e.fullName.toLowerCase() === i.fullName.toLowerCase(),
        );
        e ? (i.teacherId = e.id) : (i.teacherId = 1);
      }
      return (this.setStorage(`current_user`, i), i);
    }
    logout() {
      localStorage.removeItem(`madrasa_current_user`);
    }
    switchUser(e) {
      let t = this.getUsers(),
        n = t.find((t) => t.role === e) || t[0];
      return (this.setStorage(`current_user`, n), n);
    }
    verifyFinancialPin(e) {
      let t = this.getSettings().financialPin || `1234`;
      return e.trim() === t.trim();
    }
    getStudents() {
      let e = this.getStorage(`students`, re),
        t = !1;
      for (let n of re) e.some((e) => e.id === n.id) || (e.push(n), (t = !0));
      for (let n of e)
        n.photoPath &&
          n.photoPath.startsWith(`/assets`) &&
          ((n.photoPath = `.` + n.photoPath), (t = !0));
      return (t && this.setStorage(`students`, e), e);
    }
    addStudent(e) {
      let t = this.getStudents(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n },
        i = [r, ...t];
      return (this.setStorage(`students`, i), this.syncSupabase(`students`, `insert`, r), r);
    }
    updateStudent(e, t) {
      let n = this.getStudents(),
        r = n.findIndex((t) => t.id === e);
      if (r === -1) throw Error(`Student not found`);
      return ((n[r] = { ...n[r], ...t }), this.setStorage(`students`, n), this.syncSupabase(`students`, `update`, n[r], e), n[r]);
    }
    deleteStudent(e) {
      let t = this.getStudents().filter((t) => t.id !== e);
      this.setStorage(`students`, t), this.syncSupabase(`students`, `delete`, void 0, e);
    }
    getTeachers() {
      let e = this.getStorage(`teachers`, ne),
        t = !1;
      for (let n of ne) {
        let r = e.find((e) => e.id === n.id);
        r &&
          (!r.username && n.username && ((r.username = n.username), (t = !0)),
          !r.password && n.password && ((r.password = n.password), (t = !0)),
          !r.assignedClassId &&
            n.assignedClassId &&
            ((r.assignedClassId = n.assignedClassId), (t = !0)));
      }
      return (t && this.setStorage(`teachers`, e), e);
    }
    addTeacher(e) {
      let t = this.getTeachers(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      this.setStorage(`teachers`, [...t, r]);
      let i = this.getUsers(),
        a = (e.username || `tch${String(n).padStart(3, `0`)}`)
          .toLowerCase()
          .trim(),
        o = e.password || `teacher@123`;
      if (!i.some((e) => e.username.toLowerCase() === a)) {
        let t = {
          id: i.length > 0 ? Math.max(...i.map((e) => e.id)) + 1 : 1,
          username: a,
          password: o,
          role: `teacher`,
          fullName: e.fullName,
          fullNameUrdu: e.fullNameUrdu,
          title: e.designation || `Teacher`,
          phone: e.phone,
          teacherId: n,
          twoFactorEnabled: e.twoFactorEnabled || !1,
          twoFactorSecret: e.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
          twoFactorBackupCode: e.twoFactorBackupCode || `87654321`,
        };
        this.setStorage(`users`, [...i, t]);
      }
      return (
        e.assignedClassId &&
          this.assignClassToTeacher(
            e.assignedClassId,
            n,
            e.fullNameUrdu || e.fullName,
          ),
        r
      );
    }
    updateTeacher(e, t) {
      let n = this.getTeachers(),
        r = n.findIndex((t) => t.id === e);
      if (r === -1) throw Error(`Teacher not found`);
      ((n[r] = { ...n[r], ...t }), this.setStorage(`teachers`, n));
      let i = this.getUsers(),
        a = i.findIndex(
          (n) =>
            n.teacherId === e ||
            n.username.toLowerCase() === t.username?.toLowerCase(),
        );
      return (
        a >= 0 &&
          (t.username && (i[a].username = t.username),
          t.password && (i[a].password = t.password),
          t.fullName && (i[a].fullName = t.fullName),
          t.fullNameUrdu && (i[a].fullNameUrdu = t.fullNameUrdu),
          t.designation && (i[a].title = t.designation),
          t.phone && (i[a].phone = t.phone),
          t.twoFactorEnabled !== void 0 &&
            (i[a].twoFactorEnabled = t.twoFactorEnabled),
          t.twoFactorSecret && (i[a].twoFactorSecret = t.twoFactorSecret),
          t.twoFactorBackupCode &&
            (i[a].twoFactorBackupCode = t.twoFactorBackupCode),
          this.setStorage(`users`, i)),
        t.assignedClassId &&
          this.assignClassToTeacher(
            t.assignedClassId,
            e,
            t.fullNameUrdu || t.fullName,
          ),
        n[r]
      );
    }
    toggleTeacherTwoFactor(e, t) {
      let n = this.getTeachers().find((t) => t.id === e);
      if (!n) return !1;
      let r = t === void 0 ? !n.twoFactorEnabled : t;
      return (this.updateTeacher(e, { twoFactorEnabled: r }), r);
    }
    confirmLogin(e) {
      this.setStorage(`current_user`, e);
    }
    deleteTeacher(e) {
      let t = this.getTeachers().filter((t) => t.id !== e);
      this.setStorage(`teachers`, t);
      let n = this.getUsers().filter((t) => t.teacherId !== e);
      this.setStorage(`users`, n);
      let r = this.getClasses().map((t) =>
        t.teacherId === e
          ? { ...t, teacherId: void 0, teacherName: void 0 }
          : t,
      );
      this.setStorage(`classes`, r);
    }
    getTeacherClasses(e) {
      return this.getClasses().filter((t) => t.teacherId === e);
    }
    getTeacherStudents(e) {
      let t = this.getTeacherClasses(e).map((e) => e.id);
      return this.getStudents().filter(
        (e) => e.classId && t.includes(e.classId),
      );
    }
    assignClassToTeacher(e, t, n) {
      let r = this.getClasses(),
        i = r.findIndex((t) => t.id === e);
      i >= 0 &&
        ((r[i].teacherId = t),
        n && (r[i].teacherName = n),
        this.setStorage(`classes`, r));
    }
    getClasses() {
      let e = this.getStorage(`classes`, te),
        t = !1;
      for (let n of te) {
        let r = e.find((e) => e.id === n.id);
        r &&
          !r.teacherId &&
          n.teacherId &&
          ((r.teacherId = n.teacherId),
          (r.teacherName = n.teacherName),
          (t = !0));
      }
      return (t && this.setStorage(`classes`, e), e);
    }
    addClass(e) {
      let t = this.getClasses(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (this.setStorage(`classes`, [...t, r]), r);
    }
    getAttendance(e, t) {
      let n = this.getStorage(`attendance`, ae);
      return (
        e && (n = n.filter((t) => t.date === e)),
        t && (n = n.filter((e) => e.classId === t)),
        n
      );
    }
    saveAttendance(e) {
      let t = [...this.getStorage(`attendance`, ae)];
      for (let n of e) {
        let e = t.findIndex(
          (e) => e.studentId === n.studentId && e.date === n.date,
        );
        e >= 0
          ? (t[e] = n)
          : t.push({
              ...n,
              id: t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
            });
        this.syncSupabase(`attendance`, e >= 0 ? `update` : `insert`, n, n.id);
      }
      this.setStorage(`attendance`, t);
    }
    getTeacherAttendanceSummary(e) {
      let t = e || new Date().toISOString().split(`T`)[0],
        n = this.getTeachers(),
        r = this.getClasses(),
        i = this.getStudents(),
        a = this.getAttendance(t);
      return n.map((e) => {
        let t = r.filter(
            (t) =>
              t.teacherId === e.id ||
              (e.assignedClassId && t.id === e.assignedClassId) ||
              (t.teacherName &&
                (t.teacherName === e.fullName ||
                  t.teacherName === e.fullNameUrdu)),
          ),
          n = t.map((e) => e.id),
          o = i.filter((e) => e.classId && n.includes(e.classId)),
          s = o.map((e) => e.id),
          c = a.filter((e) => s.includes(e.studentId)),
          l = c.length > 0,
          u = c.filter((e) => e.status === `Present`).length,
          d = c.filter((e) => e.status === `Absent`).length,
          f = c.filter((e) => e.status === `Late`).length,
          p = c.filter((e) => e.status === `Leave`).length,
          m = l && o.length > 0 ? Math.round((u / o.length) * 100) : null;
        return {
          teacher: e,
          classes: t,
          students: o,
          totalStudents: o.length,
          presentCount: u,
          absentCount: d,
          lateCount: f,
          leaveCount: p,
          rate: m,
          isMarked: l,
        };
      });
    }
    getProgress(e) {
      let t = this.getStorage(`progress`, ie);
      return e ? t.filter((t) => t.studentId === e) : t;
    }
    addProgress(e) {
      let t = this.getProgress(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (this.setStorage(`progress`, [r, ...t]), this.syncSupabase(`progress`, `insert`, r), r);
    }
    getFees(e, t) {
      let n = this.getStorage(`fees`, j);
      return (
        e && (n = n.filter((t) => t.periodMonth === e)),
        t && (n = n.filter((e) => e.periodYear === t)),
        n
      );
    }
    addFee(e) {
      let t = this.getStorage(`fees`, j),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (
        this.setStorage(`fees`, [r, ...t]),
        this.syncSupabase(`fees`, `insert`, r),
        this.addTransaction({
          type: `Income`,
          category: `Student Fee`,
          amount: e.amountPaid,
          date: e.paymentDate || new Date().toISOString().split(`T`)[0],
          description: `Student Fee: ${e.studentName || e.admissionNo}`,
          partyName: e.studentName || e.admissionNo,
          receiptNo: e.receiptNo,
        }),
        r
      );
    }
    getTransactions() {
      return this.getStorage(`transactions`, M);
    }
    addTransaction(e) {
      let t = this.getTransactions(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (this.setStorage(`transactions`, [r, ...t]), this.syncSupabase(`transactions`, `insert`, r), r);
    }
    getSalaries(e, t) {
      let n = this.getStorage(`salaries`, oe);
      return (
        e && (n = n.filter((t) => t.periodMonth === e)),
        t && (n = n.filter((e) => e.periodYear === t)),
        n
      );
    }
    addSalary(e) {
      let t = this.getStorage(`salaries`, oe),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (
        this.setStorage(`salaries`, [r, ...t]),
        this.addTransaction({
          type: `Expense`,
          category: `Salary`,
          amount: e.netAmount,
          date: e.paymentDate || new Date().toISOString().split(`T`)[0],
          description: `Staff Salary: ${e.teacherName} (${e.slipNo})`,
          partyName: e.teacherName,
          receiptNo: e.slipNo,
        }),
        r
      );
    }
    getExams() {
      return this.getStorage(`exams`, N);
    }
    addExam(e) {
      let t = this.getExams(),
        n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
        r = { ...e, id: n };
      return (this.setStorage(`exams`, [r, ...t]), this.syncSupabase(`exams`, `insert`, r), r);
    }
    getResults(e) {
      let t = this.getStorage(`results`, se);
      return (e && (t = t.filter((t) => t.examId === e)), t);
    }
    saveResult(e) {
      let t = this.getStorage(`results`, se),
        n = t.findIndex(
          (t) => t.examId === e.examId && t.studentId === e.studentId,
        );
      if (n >= 0)
        return (
          (t[n] = { ...t[n], ...e }),
          this.setStorage(`results`, t),
          this.syncSupabase(`results`, `update`, t[n], t[n].id),
          t[n]
        );
      {
        let n = t.length > 0 ? Math.max(...t.map((e) => e.id)) + 1 : 1,
          r = { ...e, id: n };
        return (this.setStorage(`results`, [...t, r]), this.syncSupabase(`results`, `insert`, r), r);
      }
    }
  })(),
  F = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  ce = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  le = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  ue = (e) => {
    let t = le(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  de = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  fe = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  pe = (0, _.createContext)({}),
  me = () => (0, _.useContext)(pe),
  he = (0, _.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) => {
      let {
          size: l = 24,
          strokeWidth: u = 2,
          absoluteStrokeWidth: d = !1,
          color: f = `currentColor`,
          className: p = ``,
        } = me() ?? {},
        m = (r ?? d) ? (Number(n ?? u) * 24) / Number(t ?? l) : (n ?? u);
      return (0, _.createElement)(
        `svg`,
        {
          ref: c,
          ...de,
          width: t ?? l ?? de.width,
          height: t ?? l ?? de.height,
          stroke: e ?? f,
          strokeWidth: m,
          className: F(`lucide`, p, i),
          ...(!a && !fe(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, _.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      );
    },
  ),
  I = (e, t) => {
    let n = (0, _.forwardRef)(({ className: n, ...r }, i) =>
      (0, _.createElement)(he, {
        ref: i,
        iconNode: t,
        className: F(`lucide-${ce(ue(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = ue(e)), n);
  },
  ge = I(`arrow-down-left`, [
    [`path`, { d: `M17 7 7 17`, key: `15tmo1` }],
    [`path`, { d: `M17 17H7V7`, key: `1org7z` }],
  ]),
  _e = I(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  ve = I(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  ye = I(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]),
  be = I(`award`, [
    [
      `path`,
      {
        d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,
        key: `1yiouv`,
      },
    ],
    [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }],
  ]),
  xe = I(`badge-dollar-sign`, [
    [
      `path`,
      {
        d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
        key: `3c2336`,
      },
    ],
    [`path`, { d: `M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`, key: `1h4pet` }],
    [`path`, { d: `M12 18V6`, key: `zqpxq5` }],
  ]),
  Se = I(`banknote`, [
    [
      `rect`,
      { width: `20`, height: `12`, x: `2`, y: `6`, rx: `2`, key: `9lu3g6` },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
    [`path`, { d: `M6 12h.01M18 12h.01`, key: `113zkx` }],
  ]),
  Ce = I(`book-open-check`, [
    [`path`, { d: `M12 5v16`, key: `1f6ucr` }],
    [`path`, { d: `m16 12 2 2 4-4`, key: `mdajum` }],
    [
      `path`,
      {
        d: `M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344`,
        key: `144kbk`,
      },
    ],
  ]),
  we = I(`book-open`, [
    [`path`, { d: `M12 5v16`, key: `1f6ucr` }],
    [
      `path`,
      {
        d: `M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,
        key: `1fyvmf`,
      },
    ],
  ]),
  Te = I(`calendar`, [
    [`path`, { d: `M8 2v3`, key: `1ioesn` }],
    [`path`, { d: `M16 2v3`, key: `otl347` }],
    [
      `rect`,
      { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, key: `h1oib` },
    ],
    [`path`, { d: `M3 9h18`, key: `1pudct` }],
  ]),
  Ee = I(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  De = I(`chart-column`, [
    [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
    [`path`, { d: `M18 17V9`, key: `2bz60n` }],
    [`path`, { d: `M13 17V5`, key: `1frdt8` }],
    [`path`, { d: `M8 17v-3`, key: `17ska0` }],
  ]),
  L = I(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  Oe = I(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  ke = I(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  Ae = I(`circle-alert`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
    [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
  ]),
  je = I(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
  ]),
  Me = I(`clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
  ]),
  Ne = I(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  Pe = I(`credit-card`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `2`, key: `ynyp8z` },
    ],
    [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
  ]),
  Fe = I(`crown`, [
    [
      `path`,
      {
        d: `M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,
        key: `1vdc57`,
      },
    ],
    [`path`, { d: `M5 21h14`, key: `11awu3` }],
  ]),
  Ie = I(`database`, [
    [`ellipse`, { cx: `12`, cy: `5`, rx: `9`, ry: `3`, key: `msslwz` }],
    [`path`, { d: `M3 5V19A9 3 0 0 0 21 19V5`, key: `1wlel7` }],
    [`path`, { d: `M3 12A9 3 0 0 0 21 12`, key: `mv7ke4` }],
  ]),
  Le = I(`download`, [
    [`path`, { d: `M12 15V3`, key: `m9g1x1` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
    [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }],
  ]),
  Re = I(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [
      `path`,
      {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`,
      },
    ],
  ]),
  ze = I(`eye-off`, [
    [
      `path`,
      {
        d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
        key: `ct8e1f`,
      },
    ],
    [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
    [
      `path`,
      {
        d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
        key: `13bj9a`,
      },
    ],
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
  ]),
  Be = I(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  Ve = I(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  He = I(`graduation-cap`, [
    [
      `path`,
      {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`,
      },
    ],
    [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
    [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
  ]),
  Ue = I(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [
      `circle`,
      { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` },
    ],
  ]),
  We = I(`layout-dashboard`, [
    [
      `rect`,
      { width: `7`, height: `9`, x: `3`, y: `3`, rx: `1`, key: `10lvy0` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `14`, y: `3`, rx: `1`, key: `16une8` },
    ],
    [
      `rect`,
      { width: `7`, height: `9`, x: `14`, y: `12`, rx: `1`, key: `1hutg5` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `ldoo1y` },
    ],
  ]),
  Ge = I(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  Ke = I(`log-out`, [
    [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
    [`path`, { d: `M21 12H9`, key: `dn1m92` }],
    [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
  ]),
  qe = I(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  Je = I(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  Ye = I(`message-square`, [
    [
      `path`,
      {
        d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,
        key: `18887p`,
      },
    ],
  ]),
  Xe = I(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  Ze = I(`pen-line`, [
    [`path`, { d: `M13 21h8`, key: `1jsn5i` }],
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
  ]),
  Qe = I(`pen`, [
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
  ]),
  $e = I(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  et = I(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  tt = I(`printer`, [
    [
      `path`,
      {
        d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,
        key: `143wyd`,
      },
    ],
    [`path`, { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`, key: `1itne7` }],
    [
      `rect`,
      { x: `6`, y: `14`, width: `12`, height: `8`, rx: `1`, key: `1ue0tg` },
    ],
  ]),
  nt = I(`qr-code`, [
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `3`, rx: `1`, key: `1tu5fj` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `16`, y: `3`, rx: `1`, key: `1v8r4q` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `1x03jg` },
    ],
    [`path`, { d: `M21 16h-3a2 2 0 0 0-2 2v3`, key: `177gqh` }],
    [`path`, { d: `M21 21v.01`, key: `ents32` }],
    [`path`, { d: `M12 7v3a2 2 0 0 1-2 2H7`, key: `8crl2c` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M12 3h.01`, key: `n36tog` }],
    [`path`, { d: `M12 16v.01`, key: `133mhm` }],
    [`path`, { d: `M16 12h1`, key: `1slzba` }],
    [`path`, { d: `M21 12v.01`, key: `1lwtk9` }],
    [`path`, { d: `M12 21v-1`, key: `1880an` }],
  ]),
  rt = I(`rotate-ccw-clock`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
    [`path`, { d: `M12 7v5l4 2`, key: `1fdv2h` }],
  ]),
  it = I(`save`, [
    [
      `path`,
      {
        d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,
        key: `1c8476`,
      },
    ],
    [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }],
    [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }],
  ]),
  at = I(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  ot = I(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  R = I(`shield-check`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  st = I(`smartphone`, [
    [
      `rect`,
      {
        width: `14`,
        height: `20`,
        x: `5`,
        y: `2`,
        rx: `2`,
        ry: `2`,
        key: `1yt0o3`,
      },
    ],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  ct = I(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  lt = I(`square-check-big`, [
    [
      `path`,
      {
        d: `M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,
        key: `2acyp4`,
      },
    ],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  ut = I(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  dt = I(`trash`, [
    [`path`, { d: `M10 11v6`, key: `nco0om` }],
    [`path`, { d: `M14 11v6`, key: `outv1u` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  ft = I(`user-check`, [
    [`path`, { d: `m16 11 2 2 4-4`, key: `9rsbq5` }],
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  pt = I(`user-plus`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
    [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
  ]),
  mt = I(`user`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  ht = I(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  gt = I(`wallet`, [
    [
      `path`,
      {
        d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
        key: `18etb6`,
      },
    ],
    [`path`, { d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`, key: `xoc0q4` }],
  ]),
  _t = I(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  vt = ({
    currentTab: e,
    onTabChange: t,
    role: n,
    onRoleSwitch: r,
    onLogout: i,
    madrasaNameUr: a,
    madrasaNameEn: o,
  }) => {
    let { language: s, setLanguage: c, t: l } = E(),
      { isDark: u, toggleTheme: d } = k(),
      f = [
        {
          title: l(`SectionMain`),
          items: [
            { id: `dashboard`, label: l(`Dashboard`), icon: We },
            { id: `students`, label: l(`Students`), icon: ht },
            { id: `teachers`, label: l(`Teachers`), icon: He },
            { id: `classes`, label: l(`Classes`), icon: we },
          ],
        },
        {
          title: l(`SectionAcademics`),
          items: [
            { id: `attendance`, label: l(`Attendance`), icon: lt },
            { id: `hifz`, label: l(`SabaqEntry`), icon: Ce },
            { id: `exams`, label: l(`Exams`), icon: Ve },
          ],
        },
        {
          title: l(`SectionFinance`),
          items: [
            { id: `fees`, label: l(`Fees`), icon: xe },
            { id: `accounts`, label: l(`Accounts`), icon: gt },
            { id: `salaries`, label: l(`Salaries`), icon: Pe },
            { id: `reports`, label: l(`Reports`), icon: De },
            { id: `settings`, label: l(`Settings`), icon: ot },
          ],
        },
      ],
      p = [
        {
          title: l(`SectionTeacher`),
          items: [
            { id: `dashboard`, label: l(`MyDashboard`), icon: We },
            { id: `students`, label: l(`MyStudents`), icon: ht },
            { id: `attendance`, label: l(`MarkAttendance`), icon: lt },
            { id: `hifz`, label: l(`SabaqEntry`), icon: Ce },
            { id: `exams`, label: l(`MarksEntry`), icon: Ve },
          ],
        },
      ],
      m = n === `admin` ? f : p;
    return (0, C.jsxs)(`aside`, {
      className: `no-print hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white/95 dark:bg-[#061412]/95 border-e border-stone-200/90 dark:border-emerald-950/80 backdrop-blur-2xl z-30 transition-colors select-none relative overflow-hidden`,
      children: [
        (0, C.jsx)(`div`, {
          className: `absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 dark:bg-[#39FFC8]/10 rounded-full blur-3xl pointer-events-none`,
        }),
        (0, C.jsx)(`div`, {
          className: `absolute top-1/2 -left-20 w-44 h-44 bg-teal-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none`,
        }),
        (0, C.jsxs)(`div`, {
          className: `p-4 sm:p-5 border-b border-stone-100 dark:border-emerald-950/80 relative z-10`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                (0, C.jsx)(`div`, {
                  className: `relative group`,
                  children: (0, C.jsx)(`div`, {
                    className: `h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-500 p-[1.5px] shadow-md shadow-emerald-950/20 group-hover:shadow-[0_0_15px_rgba(57,255,200,0.4)] transition-all`,
                    children: (0, C.jsxs)(`div`, {
                      className: `h-full w-full rounded-2xl overflow-hidden bg-stone-900 flex items-center justify-center`,
                      children: [
                        (0, C.jsx)(`img`, {
                          src: `./assets/logo.jpg`,
                          alt: `Logo`,
                          className: `h-full w-full object-cover transition-transform duration-300 group-hover:scale-110`,
                          onError: (e) => {
                            e.target.style.display = `none`;
                          },
                        }),
                        (0, C.jsx)(ct, {
                          className: `h-5 w-5 text-emerald-400`,
                        }),
                      ],
                    }),
                  }),
                }),
                (0, C.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, C.jsx)(`h1`, {
                      className: `text-sm font-black text-stone-900 dark:text-[#9CFFE3] line-clamp-1 leading-tight font-serif drop-shadow-xs`,
                      children: s === `en` ? o : a,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-[11px] font-bold text-stone-500 dark:text-emerald-300/80 line-clamp-1 mt-0.5 tracking-wide uppercase font-sans`,
                      children: s === `en` ? a : o,
                    }),
                  ],
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `mt-3.5 flex items-center justify-between px-3 py-2 rounded-xl bg-stone-50/90 dark:bg-emerald-950/40 border border-stone-200/80 dark:border-emerald-800/50 shadow-xs backdrop-blur-md`,
              children: [
                (0, C.jsxs)(`span`, {
                  className: `font-bold text-xs text-emerald-800 dark:text-[#39FFC8] flex items-center gap-1.5 drop-shadow-xs`,
                  children: [
                    n === `admin`
                      ? (0, C.jsx)(Fe, {
                          className: `h-3.5 w-3.5 text-amber-500 shrink-0`,
                        })
                      : (0, C.jsx)(He, {
                          className: `h-3.5 w-3.5 text-emerald-500 shrink-0`,
                        }),
                    l(n === `admin` ? `AdminPanel` : `TeacherPanel`),
                  ],
                }),
                (0, C.jsxs)(`button`, {
                  onClick: () => r(n === `admin` ? `teacher` : `admin`),
                  className: `text-[11px] font-semibold text-stone-600 dark:text-emerald-200/80 hover:text-emerald-700 dark:hover:text-[#39FFC8] transition-all underline cursor-pointer flex items-center gap-1 active:scale-95`,
                  title: `پاس ورڈ کی تصدیق کے بعد سوئچ کریں`,
                  children: [
                    (0, C.jsx)(Ge, {
                      className: `h-3 w-3 text-stone-400 dark:text-emerald-400/60`,
                    }),
                    l(n === `admin` ? `SwitchTeacher` : `SwitchAdmin`),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `flex-1 overflow-y-auto px-3 py-3 space-y-4 relative z-10`,
          children: m.map((n, r) =>
            (0, C.jsxs)(
              `div`,
              {
                className: `space-y-1`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `px-3 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-emerald-400/60 font-sans`,
                    children: n.title,
                  }),
                  n.items.map((n) => {
                    let r = n.icon,
                      i = e === n.id;
                    return (0, C.jsxs)(
                      `button`,
                      {
                        onClick: () => t(n.id),
                        className: `group relative w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer overflow-hidden ${i ? `bg-gradient-to-r from-[#0A6B63] to-[#085750] text-white shadow-md shadow-[#0A6B63]/30 dark:bg-gradient-to-r dark:from-emerald-950/90 dark:via-[#08382e] dark:to-emerald-950/70 dark:text-[#39FFC8] dark:border dark:border-[#39FFC8]/40 dark:shadow-[0_0_20px_rgba(57,255,200,0.22)]` : `text-stone-700 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-[#9CFFE3] hover:bg-stone-100/90 dark:hover:bg-emerald-950/40 hover:border hover:border-emerald-500/20`}`,
                        children: [
                          i &&
                            (0, C.jsx)(`span`, {
                              className: `absolute start-0 inset-y-1.5 w-1.5 rounded-e-full bg-amber-300 dark:bg-[#39FFC8] shadow-[0_0_12px_#39FFC8]`,
                            }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center gap-2.5 min-w-0`,
                            children: [
                              (0, C.jsx)(`div`, {
                                className: `p-1.5 rounded-xl transition-all duration-200 shrink-0 ${i ? `bg-white/20 text-white dark:bg-[#39FFC8]/15 dark:text-[#39FFC8] shadow-xs` : `bg-stone-100 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 group-hover:bg-emerald-100/80 dark:group-hover:bg-emerald-900/50 group-hover:text-emerald-700 dark:group-hover:text-[#39FFC8] group-hover:scale-110`}`,
                                children: (0, C.jsx)(r, {
                                  className: `h-4 w-4`,
                                }),
                              }),
                              (0, C.jsx)(`span`, {
                                className: `truncate transition-transform duration-200 group-hover:translate-x-1`,
                                children: n.label,
                              }),
                            ],
                          }),
                          i
                            ? (0, C.jsx)(`span`, {
                                className: `h-1.5 w-1.5 rounded-full bg-amber-300 dark:bg-[#39FFC8] shadow-[0_0_8px_#39FFC8] shrink-0`,
                              })
                            : (0, C.jsx)(Oe, {
                                className: `h-3.5 w-3.5 text-stone-300 dark:text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-0 rotate-180 shrink-0`,
                              }),
                        ],
                      },
                      n.id,
                    );
                  }),
                ],
              },
              r,
            ),
          ),
        }),
        (0, C.jsxs)(`div`, {
          className: `p-3.5 border-t border-stone-100 dark:border-emerald-950/80 space-y-3 bg-stone-50/70 dark:bg-[#040e0c]/80 relative z-10 backdrop-blur-md`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, C.jsx)(`div`, {
                  className: `flex-1 relative`,
                  children: (0, C.jsx)(`select`, {
                    value: s,
                    onChange: (e) => c(e.target.value),
                    className: `w-full text-xs font-bold bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-emerald-900/60 rounded-xl px-2.5 py-2 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs cursor-pointer`,
                    children: y.map((e) =>
                      (0, C.jsxs)(
                        `option`,
                        {
                          value: e.code,
                          children: [e.native, ` (`, e.label, `)`],
                        },
                        e.code,
                      ),
                    ),
                  }),
                }),
                (0, C.jsx)(`button`, {
                  onClick: d,
                  title: l(`ThemeToggle`),
                  className: `p-2 rounded-xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-emerald-900/60 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-emerald-950/60 hover:shadow-[0_0_12px_rgba(57,255,200,0.3)] transition-all cursor-pointer shadow-2xs`,
                  children: u
                    ? (0, C.jsx)(ut, { className: `h-4 w-4 text-amber-400` })
                    : (0, C.jsx)(Xe, { className: `h-4 w-4 text-indigo-500` }),
                }),
                i &&
                  (0, C.jsx)(`button`, {
                    onClick: i,
                    title: `لاگ آؤٹ (Logout)`,
                    className: `p-2 rounded-xl bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-emerald-900/60 text-stone-500 dark:text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:shadow-[0_0_12px_rgba(244,63,94,0.3)] transition-all cursor-pointer shadow-2xs`,
                    children: (0, C.jsx)(Ke, { className: `h-4 w-4` }),
                  }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `flex items-center justify-between text-[11px] font-semibold text-stone-500 dark:text-emerald-300/70 px-1 pt-0.5`,
              children: [
                (0, C.jsxs)(`span`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, C.jsxs)(`span`, {
                      className: `relative flex h-2.5 w-2.5`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`,
                        }),
                        (0, C.jsx)(`span`, {
                          className: `relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]`,
                        }),
                      ],
                    }),
                    l(`CloudSyncActive`),
                  ],
                }),
                (0, C.jsx)(`span`, {
                  className: `font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-800 dark:text-[#39FFC8] border border-emerald-300/60 dark:border-emerald-800/60`,
                  children: l(`ProVersion`),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function z(e) {
  return new Intl.NumberFormat(`en-PK`, {
    style: `currency`,
    currency: `PKR`,
    maximumFractionDigits: 0,
  }).format(e);
}
function yt(e) {
  let t = new Date();
  return `${e}-${String(t.getFullYear()).slice(2)}${String(t.getMonth() + 1).padStart(2, `0`)}${String(t.getDate()).padStart(2, `0`)}${String(t.getHours()).padStart(2, `0`)}${String(t.getMinutes()).padStart(2, `0`)}${String(t.getSeconds()).padStart(2, `0`)}`;
}
function bt() {
  let e = new Date(),
    t = e.toLocaleDateString(`en-GB`, {
      weekday: `long`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
    });
  try {
    return {
      hijri: `${new Intl.DateTimeFormat(`en-u-ca-islamic-umalqura`, { day: `numeric`, month: `long`, year: `numeric` }).format(e)}H`,
      gregorian: t,
    };
  } catch {
    return { hijri: `1447H — رمضان المبارك`, gregorian: t };
  }
}
function xt(e, t) {
  let n = e.replace(/[^0-9]/g, ``);
  return (
    n.startsWith(`0`) && (n = `92` + n.slice(1)),
    `https://wa.me/${n}?text=${encodeURIComponent(t)}`
  );
}
var St = ({
    title: e,
    subtitle: t,
    currentUser: n,
    onOpenMobileMenu: r,
    onLogout: i,
  }) => {
    let { hijri: a, gregorian: o } = bt(),
      { isDark: s, toggleTheme: c } = k();
    return (0, C.jsxs)(`header`, {
      className: `no-print sticky top-0 z-20 w-full bg-white/85 dark:bg-[#061412]/90 border-b border-stone-200/80 dark:border-emerald-950/80 backdrop-blur-2xl px-4 lg:px-8 py-3 flex items-center justify-between transition-colors shadow-2xs`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            (0, C.jsx)(`button`, {
              onClick: r,
              className: `lg:hidden p-2 rounded-xl text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-emerald-950/60 focus:outline-none cursor-pointer`,
              children: (0, C.jsx)(qe, { className: `h-5 w-5` }),
            }),
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsx)(`h1`, {
                  className: `text-xl font-black tracking-tight text-stone-900 dark:text-[#9CFFE3] font-serif drop-shadow-xs`,
                  children: e,
                }),
                t &&
                  (0, C.jsx)(`p`, {
                    className: `text-xs font-semibold text-stone-500 dark:text-emerald-300/70 hidden sm:block`,
                    children: t,
                  }),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `flex items-center gap-3 sm:gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `hidden md:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/50 dark:from-emerald-950/60 dark:via-teal-950/50 dark:to-stone-900/60 border border-emerald-300/70 dark:border-emerald-500/30 text-xs text-emerald-900 dark:text-[#39FFC8] shadow-xs`,
              children: [
                (0, C.jsx)(Te, {
                  className: `h-3.5 w-3.5 text-emerald-600 dark:text-[#39FFC8] shrink-0`,
                }),
                (0, C.jsx)(`span`, { className: `font-bold`, children: a }),
                (0, C.jsx)(`span`, {
                  className: `text-emerald-400 dark:text-emerald-600`,
                  children: `•`,
                }),
                (0, C.jsx)(`span`, {
                  className: `text-stone-600 dark:text-stone-300 text-[11px] font-sans`,
                  children: o,
                }),
              ],
            }),
            (0, C.jsx)(`button`, {
              onClick: c,
              title: s ? `لائٹ موڈ پر تبدیل کریں` : `ڈارک موڈ پر تبدیل کریں`,
              className: `p-2.5 rounded-xl bg-stone-100/80 dark:bg-emerald-950/40 border border-stone-200/80 dark:border-emerald-900/60 text-stone-700 dark:text-stone-200 hover:bg-stone-200/80 dark:hover:bg-emerald-900/50 hover:shadow-[0_0_15px_rgba(57,255,200,0.3)] transition-all cursor-pointer`,
              children: s
                ? (0, C.jsx)(ut, { className: `h-4.5 w-4.5 text-amber-400` })
                : (0, C.jsx)(Xe, { className: `h-4.5 w-4.5 text-indigo-500` }),
            }),
            (0, C.jsxs)(`div`, {
              className: `flex items-center gap-2.5 ps-2 sm:ps-3 border-s border-stone-200 dark:border-emerald-950`,
              children: [
                (0, C.jsx)(`div`, {
                  className: `h-9 w-9 rounded-xl bg-gradient-to-tr from-[#0A6B63] to-teal-500 text-white font-black text-sm flex items-center justify-center shadow-md shadow-emerald-950/30 ring-2 ring-emerald-500/30`,
                  children: n.fullName ? n.fullName.charAt(0) : `U`,
                }),
                (0, C.jsxs)(`div`, {
                  className: `hidden sm:block text-start`,
                  children: [
                    (0, C.jsx)(`p`, {
                      className: `text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1 leading-tight`,
                      children: n.fullNameUrdu || n.fullName,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-[10px] uppercase font-bold text-emerald-600 dark:text-[#39FFC8] tracking-wider`,
                      children: n.title || n.role,
                    }),
                  ],
                }),
                i &&
                  (0, C.jsx)(`button`, {
                    onClick: i,
                    title: `لاگ آؤٹ (Logout)`,
                    className: `p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:shadow-[0_0_12px_rgba(244,63,94,0.3)] transition-all ms-1 cursor-pointer`,
                    children: (0, C.jsx)(Ke, { className: `h-4 w-4` }),
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ct = ({ currentTab: e, onTabChange: t, role: n }) => {
    let { t: r } = E(),
      i = [
        {
          id: `dashboard`,
          label: r(n === `admin` ? `Dashboard` : `MyDashboard`),
          icon: We,
        },
        {
          id: `students`,
          label: r(n === `admin` ? `Students` : `MyStudents`),
          icon: ht,
        },
        {
          id: `attendance`,
          label: r(n === `admin` ? `Attendance` : `MarkAttendance`),
          icon: lt,
        },
        { id: `hifz`, label: r(`SabaqEntry`), icon: Ce },
        ...(n === `admin`
          ? [{ id: `fees`, label: r(`Fees`), icon: xe }]
          : [{ id: `exams`, label: r(`MarksEntry`), icon: Ve }]),
      ];
    return (0, C.jsx)(`nav`, {
      className: `no-print lg:hidden fixed bottom-2 inset-x-3 z-40 bg-white/90 dark:bg-[#061412]/95 border border-stone-200/90 dark:border-emerald-500/30 backdrop-blur-2xl px-2 py-2 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]`,
      children: (0, C.jsx)(`div`, {
        className: `flex items-center justify-around`,
        children: i.map((n) => {
          let r = n.icon,
            i = e === n.id;
          return (0, C.jsxs)(
            `button`,
            {
              onClick: () => t(n.id),
              className: `flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl transition-all duration-200 cursor-pointer relative ${i ? `text-emerald-700 dark:text-[#39FFC8] font-black` : `text-stone-500 hover:text-stone-900 dark:hover:text-[#9CFFE3]`}`,
              children: [
                (0, C.jsx)(`div`, {
                  className: `p-1.5 rounded-xl transition-all duration-200 ${i ? `bg-gradient-to-tr from-[#0A6B63] to-teal-500 text-white dark:bg-gradient-to-tr dark:from-emerald-950 dark:to-teal-900 dark:text-[#39FFC8] dark:border dark:border-[#39FFC8]/50 shadow-md dark:shadow-[0_0_15px_rgba(57,255,200,0.35)] scale-105` : `text-stone-400`}`,
                  children: (0, C.jsx)(r, { className: `h-5 w-5` }),
                }),
                (0, C.jsx)(`span`, {
                  className: `text-[10px] font-bold leading-none tracking-tight`,
                  children: n.label,
                }),
                i &&
                  (0, C.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#39FFC8] shadow-[0_0_8px_#39FFC8] mt-0.5`,
                  }),
              ],
            },
            n.id,
          );
        }),
      }),
    });
  },
  wt = ({
    title: e,
    value: t,
    subtitle: n,
    icon: r,
    trend: i,
    accent: a = `emerald`,
    onClick: o,
  }) => {
    let s = {
      emerald: {
        bg: `bg-emerald-500/15 dark:bg-[#39FFC8]/15 text-emerald-700 dark:text-[#39FFC8] shadow-xs dark:shadow-[0_0_12px_rgba(57,255,200,0.25)]`,
        border: `hover:border-emerald-400/60 dark:hover:border-[#39FFC8]/50 hover:shadow-[0_6px_25px_rgba(16,185,129,0.18)] dark:hover:shadow-[0_6px_25px_rgba(57,255,200,0.15)]`,
        pill: `text-emerald-700 dark:text-[#39FFC8] bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/60 dark:border-emerald-800/60`,
      },
      blue: {
        bg: `bg-sky-500/15 dark:bg-sky-400/20 text-sky-700 dark:text-sky-300 shadow-xs dark:shadow-[0_0_12px_rgba(56,189,248,0.25)]`,
        border: `hover:border-sky-400/60 dark:hover:border-sky-400/50 hover:shadow-[0_6px_25px_rgba(14,165,233,0.18)]`,
        pill: `text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/80 border border-sky-200/60 dark:border-sky-800/60`,
      },
      amber: {
        bg: `bg-amber-500/15 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 shadow-xs dark:shadow-[0_0_12px_rgba(251,191,36,0.25)]`,
        border: `hover:border-amber-400/60 dark:hover:border-amber-400/50 hover:shadow-[0_6px_25px_rgba(245,158,11,0.18)]`,
        pill: `text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 border border-amber-200/60 dark:border-amber-800/60`,
      },
      purple: {
        bg: `bg-purple-500/15 dark:bg-purple-400/20 text-purple-700 dark:text-purple-300 shadow-xs dark:shadow-[0_0_12px_rgba(192,132,252,0.25)]`,
        border: `hover:border-purple-400/60 dark:hover:border-purple-400/50 hover:shadow-[0_6px_25px_rgba(168,85,247,0.18)]`,
        pill: `text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60`,
      },
      rose: {
        bg: `bg-rose-500/15 dark:bg-rose-400/20 text-rose-700 dark:text-rose-300 shadow-xs dark:shadow-[0_0_12px_rgba(251,113,133,0.25)]`,
        border: `hover:border-rose-400/60 dark:hover:border-rose-400/50 hover:shadow-[0_6px_25px_rgba(244,63,94,0.18)]`,
        pill: `text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/80 border border-rose-200/60 dark:border-rose-800/60`,
      },
    }[a];
    return (0, C.jsx)(`div`, {
      onClick: o,
      className: `group relative overflow-hidden rounded-2xl bg-white/95 dark:bg-[#071916]/80 backdrop-blur-xl border border-stone-200/80 dark:border-emerald-950/70 p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 ${s.border} ${o ? `cursor-pointer` : ``}`,
      children: (0, C.jsxs)(`div`, {
        className: `flex items-start justify-between`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, C.jsx)(`p`, {
                className: `text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-emerald-300/70`,
                children: e,
              }),
              (0, C.jsxs)(`div`, {
                className: `flex items-baseline gap-2`,
                children: [
                  (0, C.jsx)(`span`, {
                    className: `text-2xl lg:text-3xl font-black tracking-tight text-stone-900 dark:text-stone-100 font-sans`,
                    children: t,
                  }),
                  i &&
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-bold px-2.5 py-0.5 rounded-full ${s.pill}`,
                      children: i,
                    }),
                ],
              }),
              n &&
                (0, C.jsx)(`p`, {
                  className: `text-xs font-semibold text-stone-500 dark:text-stone-400 line-clamp-1`,
                  children: n,
                }),
            ],
          }),
          (0, C.jsx)(`div`, {
            className: `rounded-2xl p-3.5 ${s.bg} transition-all duration-300 group-hover:scale-110`,
            children: (0, C.jsx)(r, { className: `h-6 w-6` }),
          }),
        ],
      }),
    });
  },
  Tt = ({ children: e, tone: t = `green`, size: n = `sm` }) => {
    let r = {
      green: `bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800`,
      blue: `bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800`,
      orange: `bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800`,
      red: `bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800`,
      purple: `bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800`,
      teal: `bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800`,
      gray: `bg-stone-100 text-stone-700 border-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700`,
    }[t];
    return (0, C.jsx)(`span`, {
      className: `inline-flex items-center font-medium rounded-full border shadow-xs ${r} ${n === `sm` ? `text-xs px-2.5 py-0.5` : `text-sm px-3 py-1`}`,
      children: e,
    });
  };
function Et(e) {
  return e
    ? e.startsWith(`http://`) ||
      e.startsWith(`https://`) ||
      e.startsWith(`data:`)
      ? e
      : e.startsWith(`/`)
        ? `.${e}`
        : e.startsWith(`./`)
          ? e
          : `./${e}`
    : `./assets/app.ico`;
}
var Dt = ({
    role: e,
    students: t,
    teachers: n,
    transactions: r,
    progress: i,
    attendanceRate: a,
    monthlyFeeCollected: o,
    netBalance: s,
    onNavigate: c,
    onNewAdmission: l,
    onRecordFee: u,
    classes: d = [],
    currentUser: f,
    attendanceRecords: p = [],
  }) => {
    let { t: m } = E(),
      [h, g] = (0, _.useState)(!1),
      [v, y] = (0, _.useState)(!1),
      [b, x] = (0, _.useState)(``),
      [S, w] = (0, _.useState)(``),
      T = t.slice(0, 4),
      D = r.slice(0, 4),
      O = i.slice(0, 3),
      k = _.useMemo(() => P.getTeacherAttendanceSummary(), [p, n, d]),
      A = () => {
        h ? g(!1) : (x(``), w(``), y(!0));
      };
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-emerald-800 to-teal-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `relative z-10 space-y-1`,
              children: [
                (0, C.jsx)(`span`, {
                  className: `text-emerald-200 text-xs font-semibold uppercase tracking-wider`,
                  children: m(e === `admin` ? `AdminPanel` : `TeacherPanel`),
                }),
                (0, C.jsx)(`h2`, {
                  className: `text-2xl lg:text-3xl font-bold tracking-tight`,
                  children: m(`WelcomeTitle`),
                }),
                (0, C.jsx)(`p`, {
                  className: `text-emerald-100/90 text-sm max-w-xl`,
                  children: m(
                    e === `admin` ? `AdminSubtitle` : `TeacherSubtitle`,
                  ),
                }),
              ],
            }),
            (0, C.jsx)(`div`, {
              className: `relative z-10 flex flex-wrap gap-2.5`,
              children:
                e === `admin`
                  ? (0, C.jsxs)(C.Fragment, {
                      children: [
                        (0, C.jsxs)(`button`, {
                          onClick: l,
                          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer`,
                          children: [
                            (0, C.jsx)(pt, { className: `h-4 w-4` }),
                            m(`NewAdmissionBtn`),
                          ],
                        }),
                        (0, C.jsxs)(`button`, {
                          onClick: () => c(`attendance`),
                          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600/90 text-white font-semibold text-xs transition-all border border-emerald-500/40 cursor-pointer`,
                          children: [
                            (0, C.jsx)(lt, { className: `h-4 w-4` }),
                            m(`TodayAttendanceBtn`),
                          ],
                        }),
                        (0, C.jsxs)(`button`, {
                          onClick: u,
                          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600/90 text-white font-semibold text-xs transition-all border border-emerald-500/40 cursor-pointer`,
                          children: [
                            (0, C.jsx)(xe, { className: `h-4 w-4` }),
                            m(`CollectFeeBtn`),
                          ],
                        }),
                      ],
                    })
                  : (0, C.jsxs)(C.Fragment, {
                      children: [
                        (0, C.jsxs)(`button`, {
                          onClick: () => c(`attendance`),
                          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer`,
                          children: [
                            (0, C.jsx)(lt, { className: `h-4 w-4` }),
                            m(`MarkAttendance`),
                          ],
                        }),
                        (0, C.jsxs)(`button`, {
                          onClick: () => c(`hifz`),
                          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600/90 text-white font-semibold text-xs transition-all border border-emerald-500/40 cursor-pointer`,
                          children: [
                            (0, C.jsx)(Ce, { className: `h-4 w-4` }),
                            m(`SabaqEntry`),
                          ],
                        }),
                      ],
                    }),
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5`,
          children: [
            (0, C.jsx)(wt, {
              title:
                e === `admin` ? m(`TotalStudents`) : `میرے طلبہ (My Students)`,
              value: t.length,
              subtitle:
                e === `admin` ? `زیرِ تعلیم طلباء` : `آپ کی کلاسز کے کل طلبہ`,
              icon: ht,
              trend: e === `admin` ? `+4 اس ماہ` : `${t.length} طلبہ`,
              accent: `emerald`,
              onClick: () => c(`students`),
            }),
            e === `admin`
              ? (0, C.jsx)(wt, {
                  title: m(`TotalTeachers`),
                  value: n.length,
                  subtitle: `اساتذہ و معلمات کا عملہ`,
                  icon: He,
                  accent: `blue`,
                  onClick: () => c(`teachers`),
                })
              : (0, C.jsx)(wt, {
                  title: `میرے درجات (My Classes)`,
                  value: d.length,
                  subtitle: `آپ کے اسائن کردہ درجات`,
                  icon: He,
                  accent: `blue`,
                  onClick: () => c(`attendance`),
                }),
            (0, C.jsx)(wt, {
              title: m(`TodayAttendance`),
              value: `${a}%`,
              subtitle:
                e === `admin`
                  ? `آج کے حاضر طلباء کا تناسب`
                  : `آپ کی کلاسز کی آج کی حاضری`,
              icon: lt,
              trend: a >= 80 ? `شاندار` : `توجہ طلب`,
              accent: `amber`,
              onClick: () => c(`attendance`),
            }),
            e === `admin`
              ? (0, C.jsxs)(`div`, {
                  className: `relative group`,
                  children: [
                    (0, C.jsx)(wt, {
                      title: m(`MonthlyFeeCollected`),
                      value: h ? z(o) : `••••••••`,
                      subtitle: `ماہِ رواں کی وصولی (کلک کر کے کھولیں)`,
                      icon: xe,
                      accent: `emerald`,
                      onClick: A,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: A,
                      title: h
                        ? `رقم چھپائیں`
                        : `خفیہ کوڈ درج کر کے رقم دیکھیں`,
                      className: `absolute top-4 end-4 p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 transition-colors z-10 cursor-pointer`,
                      children: h
                        ? (0, C.jsx)(ze, {
                            className: `h-4 w-4 text-emerald-600`,
                          })
                        : (0, C.jsx)(Be, {
                            className: `h-4 w-4 text-stone-500`,
                          }),
                    }),
                  ],
                })
              : (0, C.jsx)(wt, {
                  title: `آج کے اسباق (Sabaq Log)`,
                  value: i.length,
                  subtitle: `درج شدہ اسباق کی تعداد`,
                  icon: Ce,
                  accent: `emerald`,
                  onClick: () => c(`hifz`),
                }),
          ],
        }),
        e === `admin` &&
          (0, C.jsxs)(`div`, {
            className: `bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/80 dark:border-stone-800 p-5 shadow-xs space-y-4`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center justify-between flex-wrap gap-2`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [
                      (0, C.jsx)(`div`, {
                        className: `p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300`,
                        children: (0, C.jsx)(lt, { className: `h-5 w-5` }),
                      }),
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`h3`, {
                            className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                            children: `اساتذہ و قراء کرام کی کلاس وار حاضری رپورٹ (Today's Attendance by Qari)`,
                          }),
                          (0, C.jsx)(`p`, {
                            className: `text-xs text-stone-500 dark:text-stone-400`,
                            children: `کس قاری کے کتنے طلباء حاضر اور کتنے غیر حاضر ہیں`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`button`, {
                    onClick: () => c(`attendance`),
                    className: `text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer`,
                    children: [
                      `مکمل حاضری پورٹل کھولیں`,
                      (0, C.jsx)(ke, { className: `h-4 w-4 rtl:rotate-180` }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,
                children: k.map((e) => {
                  let t = e.teacher;
                  return (0, C.jsxs)(
                    `div`,
                    {
                      onClick: () => c(`attendance`),
                      className: `p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 hover:border-emerald-500/60 hover:shadow-xs transition-all cursor-pointer space-y-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              className: `flex items-center gap-2.5 min-w-0`,
                              children: [
                                (0, C.jsx)(`div`, {
                                  className: `h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold flex items-center justify-center text-sm shrink-0 border border-emerald-300 dark:border-emerald-800`,
                                  children: t.fullNameUrdu
                                    ? t.fullNameUrdu.charAt(0)
                                    : t.fullName.charAt(0),
                                }),
                                (0, C.jsxs)(`div`, {
                                  className: `min-w-0`,
                                  children: [
                                    (0, C.jsx)(`p`, {
                                      className: `font-bold text-sm text-stone-900 dark:text-stone-100 truncate`,
                                      children: t.fullNameUrdu || t.fullName,
                                    }),
                                    (0, C.jsxs)(`p`, {
                                      className: `text-[11px] text-stone-500 dark:text-stone-400 truncate`,
                                      children: [
                                        `درجہ: `,
                                        e.classes
                                          .map((e) => e.nameUrdu || e.name)
                                          .join(`، `) || `کوئی کلاس نہیں`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.isMarked
                              ? (0, C.jsxs)(`span`, {
                                  className: `inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800`,
                                  children: [
                                    (0, C.jsx)(je, {
                                      className: `h-3 w-3 text-emerald-600`,
                                    }),
                                    `درج شدہ`,
                                  ],
                                })
                              : (0, C.jsxs)(`span`, {
                                  className: `inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-800 animate-pulse`,
                                  children: [
                                    (0, C.jsx)(Me, {
                                      className: `h-3 w-3 text-amber-600`,
                                    }),
                                    `باقی ہے`,
                                  ],
                                }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          className: `grid grid-cols-3 gap-2 text-center pt-2 border-t border-stone-200/60 dark:border-stone-700/60`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              className: `p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800`,
                              children: [
                                (0, C.jsx)(`span`, {
                                  className: `text-[10px] text-stone-400 block font-semibold`,
                                  children: `کل طلبہ`,
                                }),
                                (0, C.jsx)(`span`, {
                                  className: `text-sm font-black text-stone-800 dark:text-stone-100`,
                                  children: e.totalStudents,
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`div`, {
                              className: `p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800`,
                              children: [
                                (0, C.jsx)(`span`, {
                                  className: `text-[10px] font-bold text-emerald-700 dark:text-emerald-300 block`,
                                  children: `حاضر (P)`,
                                }),
                                (0, C.jsx)(`span`, {
                                  className: `text-sm font-black text-emerald-800 dark:text-emerald-200`,
                                  children: e.isMarked ? e.presentCount : `—`,
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`div`, {
                              className: `p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800`,
                              children: [
                                (0, C.jsx)(`span`, {
                                  className: `text-[10px] font-bold text-rose-700 dark:text-rose-300 block`,
                                  children: `غیر حاضر (A)`,
                                }),
                                (0, C.jsx)(`span`, {
                                  className: `text-sm font-black text-rose-800 dark:text-rose-200`,
                                  children: e.isMarked ? e.absentCount : `—`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.rate !== null &&
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-[11px] text-stone-500 pt-1`,
                            children: [
                              (0, C.jsx)(`span`, { children: `حاضری تناسب:` }),
                              (0, C.jsxs)(`span`, {
                                className: `font-bold text-emerald-700 dark:text-emerald-400`,
                                children: [e.rate, `%`],
                              }),
                            ],
                          }),
                      ],
                    },
                    t.id,
                  );
                }),
              }),
            ],
          }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 ${e === `admin` ? `lg:grid-cols-3` : `lg:grid-cols-2`} gap-6`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `${e === `admin` ? `lg:col-span-2` : `lg:col-span-1`} bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-5 shadow-xs`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between mb-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`h3`, {
                          className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                          children: `حالیہ داخلے (Recent Students)`,
                        }),
                        (0, C.jsx)(`p`, {
                          className: `text-xs text-stone-500 dark:text-stone-400`,
                          children: `طالبات کی فہرست و تعلیمی کیفیت`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`button`, {
                      onClick: () => c(`students`),
                      className: `text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer`,
                      children: [
                        `تمام دیکھیں`,
                        (0, C.jsx)(ke, {
                          className: `h-3.5 w-3.5 rtl:rotate-180`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsx)(`div`, {
                  className: `space-y-3`,
                  children: T.map((t) =>
                    (0, C.jsxs)(
                      `div`,
                      {
                        className: `flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 hover:bg-stone-100/80 dark:hover:bg-stone-800 transition-colors border border-stone-100 dark:border-stone-700/50`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center gap-3 min-w-0`,
                            children: [
                              (0, C.jsx)(`div`, {
                                className: `h-10 w-10 rounded-full overflow-hidden bg-stone-200 dark:bg-stone-700 shrink-0 border border-stone-300 dark:border-stone-600`,
                                children: (0, C.jsx)(`img`, {
                                  src: Et(t.photoPath),
                                  alt: t.fullName,
                                  className: `h-full w-full object-cover`,
                                  onError: (e) => {
                                    e.target.src = `./assets/app.ico`;
                                  },
                                }),
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `min-w-0`,
                                children: [
                                  (0, C.jsx)(`p`, {
                                    className: `text-sm font-bold text-stone-900 dark:text-stone-100 truncate`,
                                    children: t.fullNameUrdu || t.fullName,
                                  }),
                                  (0, C.jsxs)(`p`, {
                                    className: `text-xs text-stone-500 dark:text-stone-400 truncate`,
                                    children: [
                                      `ولدیت: `,
                                      t.fatherNameUrdu || t.fatherName,
                                      ` • `,
                                      t.admissionNo,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center gap-2 shrink-0`,
                            children: [
                              (0, C.jsx)(Tt, {
                                tone:
                                  t.status === `Regular`
                                    ? `green`
                                    : t.status === `FeeDue`
                                      ? `orange`
                                      : `blue`,
                                children: t.status,
                              }),
                              e === `admin` &&
                                (0, C.jsx)(`span`, {
                                  className: `text-xs font-semibold text-stone-700 dark:text-stone-300`,
                                  children: h ? z(t.monthlyFee) : `••••`,
                                }),
                            ],
                          }),
                        ],
                      },
                      t.id,
                    ),
                  ),
                }),
              ],
            }),
            e === `admin`
              ? (0, C.jsxs)(`div`, {
                  className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-5 shadow-xs flex flex-col justify-between`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-center justify-between mb-4`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, C.jsx)(`h3`, {
                                  className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                                  children: `مالیاتی خلاصہ (Ledger)`,
                                }),
                                (0, C.jsx)(`button`, {
                                  onClick: A,
                                  className: `p-1 rounded-md text-stone-400 hover:text-emerald-600 transition-colors`,
                                  title: h
                                    ? `رقم چھپائیں`
                                    : `خفیہ کوڈ سے رقم کھولیں`,
                                  children: h
                                    ? (0, C.jsx)(ze, {
                                        className: `h-4 w-4 text-emerald-600`,
                                      })
                                    : (0, C.jsx)(Be, { className: `h-4 w-4` }),
                                }),
                              ],
                            }),
                            (0, C.jsx)(`button`, {
                              onClick: () => c(`accounts`),
                              className: `text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer`,
                              children: `کھاتہ کھولیں`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          onClick: A,
                          className: `p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 mb-4 cursor-pointer hover:border-emerald-400 transition-all`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              className: `flex items-center justify-between`,
                              children: [
                                (0, C.jsx)(`span`, {
                                  className: `text-xs font-medium text-emerald-800 dark:text-emerald-300`,
                                  children: `خالص کیش بیلنس (Net Available)`,
                                }),
                                !h &&
                                  (0, C.jsx)(Ge, {
                                    className: `h-3.5 w-3.5 text-emerald-600`,
                                  }),
                              ],
                            }),
                            (0, C.jsx)(`p`, {
                              className: `text-2xl font-black text-emerald-900 dark:text-emerald-200 mt-1`,
                              children: h ? z(s) : `••••••••••••`,
                            }),
                            !h &&
                              (0, C.jsx)(`p`, {
                                className: `text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5`,
                                children: `خفیہ کوڈ کے بغیر رقم مخفی رکھی گئی ہے`,
                              }),
                          ],
                        }),
                        (0, C.jsx)(`div`, {
                          className: `space-y-2.5`,
                          children: D.map((e) =>
                            (0, C.jsxs)(
                              `div`,
                              {
                                className: `flex items-center justify-between text-xs py-1.5 border-b border-stone-100 dark:border-stone-800 last:border-none`,
                                children: [
                                  (0, C.jsxs)(`div`, {
                                    className: `flex items-center gap-2 min-w-0`,
                                    children: [
                                      (0, C.jsx)(`div`, {
                                        className: `p-1.5 rounded-lg shrink-0 ${e.type === `Income` ? `bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300` : `bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300`}`,
                                        children:
                                          e.type === `Income`
                                            ? (0, C.jsx)(ge, {
                                                className: `h-3.5 w-3.5`,
                                              })
                                            : (0, C.jsx)(ye, {
                                                className: `h-3.5 w-3.5`,
                                              }),
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `truncate`,
                                        children: [
                                          (0, C.jsx)(`p`, {
                                            className: `font-semibold text-stone-800 dark:text-stone-200 truncate`,
                                            children: e.category,
                                          }),
                                          (0, C.jsx)(`p`, {
                                            className: `text-[10px] text-stone-400 truncate`,
                                            children: e.partyName,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.jsx)(`span`, {
                                    className: `font-bold shrink-0 ${e.type === `Income` ? `text-emerald-600 dark:text-emerald-400` : `text-rose-600 dark:text-rose-400`}`,
                                    children: h
                                      ? `${e.type === `Income` ? `+` : `-`}${z(e.amount)}`
                                      : `••••••`,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => c(`accounts`),
                      className: `w-full mt-4 py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-xs font-bold text-stone-700 dark:text-stone-300 transition-colors text-center cursor-pointer`,
                      children: `نیا چندہ یا خرچ درج کریں`,
                    }),
                  ],
                })
              : (0, C.jsxs)(`div`, {
                  className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-5 shadow-xs flex flex-col justify-between`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-center justify-between mb-4`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, C.jsx)(He, {
                                  className: `h-5 w-5 text-emerald-600 dark:text-emerald-400`,
                                }),
                                (0, C.jsx)(`h3`, {
                                  className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                                  children: `میرے تفویض کردہ درجات (My Classes)`,
                                }),
                              ],
                            }),
                            (0, C.jsx)(`button`, {
                              onClick: () => c(`attendance`),
                              className: `text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer`,
                              children: `حاضری لگائیں`,
                            }),
                          ],
                        }),
                        (0, C.jsx)(`div`, {
                          className: `space-y-3`,
                          children:
                            d.length === 0
                              ? (0, C.jsx)(`p`, {
                                  className: `text-xs text-stone-400 italic p-4 text-center`,
                                  children: `فی الوقت آپ کو کوئی کلاس اسائن نہیں کی گئی۔ ایڈمن سے رابطہ کریں۔`,
                                })
                              : d.map((e) => {
                                  let n = t.filter(
                                    (t) => t.classId === e.id,
                                  ).length;
                                  return (0, C.jsxs)(
                                    `div`,
                                    {
                                      className: `p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/50 flex items-center justify-between`,
                                      children: [
                                        (0, C.jsxs)(`div`, {
                                          children: [
                                            (0, C.jsxs)(`div`, {
                                              className: `flex items-center gap-2`,
                                              children: [
                                                (0, C.jsx)(`span`, {
                                                  className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                                                  children:
                                                    e.nameUrdu || e.name,
                                                }),
                                                (0, C.jsx)(`span`, {
                                                  className: `text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold`,
                                                  children:
                                                    e.department || `عام`,
                                                }),
                                              ],
                                            }),
                                            (0, C.jsxs)(`p`, {
                                              className: `text-xs text-stone-500 mt-0.5`,
                                              children: [
                                                `اوقات: `,
                                                e.schedule || `08:00 – 11:00`,
                                                ` • گنجائش: `,
                                                e.capacity || 30,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, C.jsxs)(`div`, {
                                          className: `text-end`,
                                          children: [
                                            (0, C.jsxs)(`span`, {
                                              className: `text-xs font-bold text-emerald-700 dark:text-emerald-400 block`,
                                              children: [n, ` طالبات`],
                                            }),
                                            (0, C.jsx)(`button`, {
                                              onClick: () => c(`attendance`),
                                              className: `text-[10px] font-semibold text-emerald-600 hover:underline cursor-pointer`,
                                              children: `حاضری مارک کریں`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `pt-3 border-t border-stone-100 dark:border-stone-800 mt-4 flex gap-2`,
                      children: [
                        (0, C.jsx)(`button`, {
                          onClick: () => c(`attendance`),
                          className: `flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs text-center cursor-pointer`,
                          children: `✓ کلاس حاضری`,
                        }),
                        (0, C.jsx)(`button`, {
                          onClick: () => c(`hifz`),
                          className: `flex-1 py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-800 dark:text-stone-200 text-xs font-bold transition-all text-center cursor-pointer`,
                          children: `📖 سبق اندراج`,
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-5 shadow-xs`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex items-center justify-between mb-4`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(Ce, {
                      className: `h-5 w-5 text-emerald-600 dark:text-emerald-400`,
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `شعبہ حفظ و ناظرہ کی آج کی کارکردگی (Daily Hifz Log)`,
                    }),
                  ],
                }),
                (0, C.jsxs)(`button`, {
                  onClick: () => c(`hifz`),
                  className: `text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer`,
                  children: [
                    `مکمل ڈائری دیکھیں`,
                    (0, C.jsx)(ke, { className: `h-3.5 w-3.5 rtl:rotate-180` }),
                  ],
                }),
              ],
            }),
            (0, C.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,
              children: O.map((e) => {
                let n = t.find((t) => t.id === e.studentId);
                return (0, C.jsxs)(
                  `div`,
                  {
                    className: `p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-2.5`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, C.jsx)(`span`, {
                            className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                            children: n
                              ? n.fullNameUrdu || n.fullName
                              : `طالب علم`,
                          }),
                          (0, C.jsx)(`span`, {
                            className: `text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold`,
                            children: `⭐`.repeat(e.rating),
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `space-y-1 text-xs`,
                        children: [
                          (0, C.jsxs)(`p`, {
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-emerald-700 dark:text-emerald-400`,
                                children: `سبق: `,
                              }),
                              (0, C.jsx)(`span`, {
                                className: `text-stone-800 dark:text-stone-200`,
                                children: e.sabaq || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`p`, {
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-sky-700 dark:text-sky-400`,
                                children: `سبقی: `,
                              }),
                              (0, C.jsx)(`span`, {
                                className: `text-stone-800 dark:text-stone-200`,
                                children: e.sabqi || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`p`, {
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-amber-700 dark:text-amber-400`,
                                children: `منزل: `,
                              }),
                              (0, C.jsx)(`span`, {
                                className: `text-stone-800 dark:text-stone-200`,
                                children: e.manzil || `—`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`p`, {
                        className: `text-[11px] text-stone-500 italic bg-white dark:bg-stone-900/60 p-2 rounded-lg border border-stone-200/40 dark:border-stone-800`,
                        children: [`"`, e.progressText, `"`],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
          ],
        }),
        v &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-stone-200 dark:border-stone-800 p-6 space-y-4`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, C.jsx)(R, {
                          className: `h-5 w-5 text-emerald-600`,
                        }),
                        (0, C.jsx)(`h3`, {
                          className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                          children: `مالیاتی کوڈ درج کریں (Financial PIN)`,
                        }),
                      ],
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => y(!1),
                      className: `p-1 rounded-lg text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-4 w-4` }),
                    }),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: `مالیاتی رقوم، کیش بیلنس اور فیس کلیکشن دیکھنے کے لیے ایڈمن کا خفیہ کوڈ درج کریں۔`,
                }),
                S &&
                  (0, C.jsx)(`div`, {
                    className: `p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-xs font-semibold text-center border border-rose-200 dark:border-rose-800`,
                    children: S,
                  }),
                (0, C.jsxs)(`form`, {
                  onSubmit: (e) => {
                    (e.preventDefault(),
                      P.verifyFinancialPin(b)
                        ? (g(!0), y(!1), w(``))
                        : w(`غلط مالیاتی پن کوڈ! براہ کرم درست کوڈ درج کریں۔`));
                  },
                  className: `space-y-4`,
                  children: [
                    (0, C.jsx)(`div`, {
                      children: (0, C.jsx)(`input`, {
                        type: `password`,
                        autoFocus: !0,
                        required: !0,
                        placeholder: `خفیہ پن کوڈ (ڈیفالٹ: 1234)`,
                        value: b,
                        onChange: (e) => x(e.target.value),
                        className: `w-full text-center tracking-widest text-lg font-mono font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-3 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`,
                      }),
                    }),
                    (0, C.jsx)(`button`, {
                      type: `submit`,
                      className: `w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer`,
                      children: `کوڈ تصدیق کریں (Unlock)`,
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Ot = ({
    students: e,
    classes: t,
    onAddStudent: n,
    onUpdateStudent: r,
    onDeleteStudent: i,
    onPrintAdmission: a,
    role: o = `admin`,
  }) => {
    let { t: s, language: c } = E(),
      [l, u] = (0, _.useState)(``),
      [d, f] = (0, _.useState)(`all`),
      [p, m] = (0, _.useState)(`all`),
      [h, g] = (0, _.useState)(!1),
      [v, y] = (0, _.useState)(null),
      [b, x] = (0, _.useState)({
        admissionNo: `STD-${String(e.length + 1).padStart(4, `0`)}`,
        fullName: ``,
        fullNameUrdu: ``,
        fatherName: ``,
        fatherNameUrdu: ``,
        dob: `2014-01-01`,
        gender: `Female`,
        cnicFormB: ``,
        classId: t[0]?.id || 1,
        admissionDate: new Date().toISOString().split(`T`)[0],
        address: ``,
        phone: ``,
        guardianPhone: ``,
        whatsapp: ``,
        bloodGroup: `B+`,
        monthlyFee: 3500,
        feeConcessionPct: 0,
        feeConcessionReason: ``,
        status: `Regular`,
        notes: ``,
        photoPath: ``,
      }),
      S = () => {
        (y(null),
          x({
            admissionNo: `STD-${String(e.length + 1).padStart(4, `0`)}`,
            fullName: ``,
            fullNameUrdu: ``,
            fatherName: ``,
            fatherNameUrdu: ``,
            dob: `2014-01-01`,
            gender: `Female`,
            cnicFormB: ``,
            classId: t[0]?.id || 1,
            admissionDate: new Date().toISOString().split(`T`)[0],
            address: ``,
            phone: ``,
            guardianPhone: ``,
            whatsapp: ``,
            bloodGroup: `B+`,
            monthlyFee: 3500,
            feeConcessionPct: 0,
            feeConcessionReason: ``,
            status: `Regular`,
            notes: ``,
            photoPath: ``,
          }),
          g(!0));
      },
      w = (e) => {
        (y(e),
          x({
            admissionNo: e.admissionNo,
            fullName: e.fullName,
            fullNameUrdu: e.fullNameUrdu || ``,
            fatherName: e.fatherName,
            fatherNameUrdu: e.fatherNameUrdu || ``,
            dob: e.dob || `2014-01-01`,
            gender: e.gender || `Female`,
            cnicFormB: e.cnicFormB || ``,
            classId: e.classId || t[0]?.id || 1,
            admissionDate:
              e.admissionDate || new Date().toISOString().split(`T`)[0],
            address: e.address || ``,
            phone: e.phone || ``,
            guardianPhone: e.guardianPhone || ``,
            whatsapp: e.whatsapp || ``,
            bloodGroup: e.bloodGroup || `B+`,
            monthlyFee: e.monthlyFee,
            feeConcessionPct: e.feeConcessionPct,
            feeConcessionReason: e.feeConcessionReason || ``,
            status: e.status,
            notes: e.notes || ``,
            photoPath: e.photoPath || ``,
          }),
          g(!0));
      },
      T = (e) => {
        if ((e.preventDefault(), !b.fullName || !b.fatherName)) {
          alert(`براہ کرم طالب علم اور والد کا نام درج کریں۔`);
          return;
        }
        (v ? r(v.id, b) : n(b), g(!1));
      },
      D = (e) => {
        let t = e.target.files?.[0];
        if (t) {
          let e = new FileReader();
          ((e.onloadend = () => {
            x((t) => ({ ...t, photoPath: e.result }));
          }),
            e.readAsDataURL(t));
        }
      },
      O = e.filter((e) => {
        let t =
            e.fullName.toLowerCase().includes(l.toLowerCase()) ||
            (e.fullNameUrdu && e.fullNameUrdu.includes(l)) ||
            e.admissionNo.toLowerCase().includes(l.toLowerCase()) ||
            e.fatherName.toLowerCase().includes(l.toLowerCase()),
          n = d === `all` || e.classId === Number(d),
          r = p === `all` || e.status === p;
        return t && n && r;
      });
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(ht, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    s(o === `teacher` ? `MyStudents` : `StudentsTitle`),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: s(
                    o === `teacher` ? `TeacherSubtitle` : `StudentsSubtitle`,
                  ),
                }),
              ],
            }),
            o !== `teacher` &&
              (0, C.jsxs)(`button`, {
                onClick: S,
                className: `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
                children: [
                  (0, C.jsx)(et, { className: `h-4 w-4` }),
                  s(`NewAdmissionBtn`),
                ],
              }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, C.jsx)(at, {
                  className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                }),
                (0, C.jsx)(`input`, {
                  type: `text`,
                  placeholder: s(`Search`),
                  value: l,
                  onChange: (e) => u(e.target.value),
                  className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500`,
                }),
              ],
            }),
            (0, C.jsxs)(`select`, {
              value: d,
              onChange: (e) => f(e.target.value),
              className: `text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
              children: [
                (0, C.jsx)(`option`, {
                  value: `all`,
                  children: s(o === `teacher` ? `MyStudents` : `Classes`),
                }),
                t.map((e) =>
                  (0, C.jsx)(
                    `option`,
                    {
                      value: e.id,
                      children:
                        c === `en` ? e.name : `${e.name} — ${e.nameUrdu}`,
                    },
                    e.id,
                  ),
                ),
              ],
            }),
            (0, C.jsxs)(`select`, {
              value: p,
              onChange: (e) => m(e.target.value),
              className: `text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
              children: [
                (0, C.jsxs)(`option`, {
                  value: `all`,
                  children: [s(`All`), ` (`, s(`Status`), `)`],
                }),
                (0, C.jsx)(`option`, {
                  value: `Regular`,
                  children: s(`StudentStatusRegular`),
                }),
                (0, C.jsx)(`option`, {
                  value: `New`,
                  children: s(`StudentStatusNew`),
                }),
                (0, C.jsx)(`option`, {
                  value: `FeeDue`,
                  children: s(`StudentStatusFeeDue`),
                }),
                (0, C.jsx)(`option`, {
                  value: `Graduated`,
                  children: s(`StudentStatusGraduated`),
                }),
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden shadow-xs`,
          children: (0, C.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, C.jsxs)(`table`, {
              className: `w-full text-start text-xs border-collapse`,
              children: [
                (0, C.jsx)(`thead`, {
                  children: (0, C.jsxs)(`tr`, {
                    className: `border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 font-bold`,
                    children: [
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-4 text-start`,
                        children: s(`PhotoAndStudent`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`AdmissionNo`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`FatherName`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`ClassName`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`OriginalFee`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`ConcessionScholarship`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-3 text-start`,
                        children: s(`Status`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3.5 px-4 text-end`,
                        children: s(`Actions`),
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)(`tbody`, {
                  className: `divide-y divide-stone-100 dark:divide-stone-800`,
                  children: O.map((e) => {
                    let n = t.find((t) => t.id === e.classId),
                      r = e.whatsapp
                        ? xt(
                            e.whatsapp,
                            `السلام علیکم ورحمۃ اللہ، محترم سرپرست! طالب علم ${e.fullNameUrdu || e.fullName} (داخلہ نمبر: ${e.admissionNo}) جامعہ السلفیہ دعوۃ الحق کوئٹہ میں زیر تعلیم ہے۔`,
                          )
                        : `#`;
                    return (0, C.jsxs)(
                      `tr`,
                      {
                        className: `hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors`,
                        children: [
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-4`,
                            children: (0, C.jsxs)(`div`, {
                              className: `flex items-center gap-3`,
                              children: [
                                (0, C.jsx)(`div`, {
                                  className: `h-10 w-10 rounded-full overflow-hidden bg-stone-200 dark:bg-stone-700 shrink-0 border border-stone-300 dark:border-stone-600`,
                                  children: (0, C.jsx)(`img`, {
                                    src: Et(e.photoPath),
                                    alt: e.fullName,
                                    className: `h-full w-full object-cover`,
                                    onError: (e) => {
                                      e.target.src = `./assets/app.ico`;
                                    },
                                  }),
                                }),
                                (0, C.jsxs)(`div`, {
                                  children: [
                                    (0, C.jsx)(`p`, {
                                      className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                                      children: e.fullNameUrdu || e.fullName,
                                    }),
                                    (0, C.jsx)(`p`, {
                                      className: `text-[11px] text-stone-500 dark:text-stone-400`,
                                      children: e.fullName,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 font-mono font-bold text-emerald-700 dark:text-emerald-400`,
                            children: e.admissionNo,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 font-medium text-stone-700 dark:text-stone-300`,
                            children: e.fatherNameUrdu || e.fatherName,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3`,
                            children: (0, C.jsx)(`span`, {
                              className: `px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 font-semibold text-stone-700 dark:text-stone-300`,
                              children: n?.name || `—`,
                            }),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 font-bold text-stone-900 dark:text-stone-100`,
                            children: z(e.monthlyFee),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3`,
                            children:
                              e.feeConcessionPct > 0
                                ? (0, C.jsxs)(`span`, {
                                    className: `text-emerald-600 font-bold`,
                                    children: [
                                      e.feeConcessionPct,
                                      `% (`,
                                      e.feeConcessionReason || `رعایت`,
                                      `)`,
                                    ],
                                  })
                                : (0, C.jsx)(`span`, {
                                    className: `text-stone-400`,
                                    children: `—`,
                                  }),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3`,
                            children: (0, C.jsx)(Tt, {
                              tone:
                                e.status === `Regular`
                                  ? `green`
                                  : e.status === `FeeDue`
                                    ? `orange`
                                    : e.status === `New`
                                      ? `blue`
                                      : `teal`,
                              children: e.status,
                            }),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-4 text-end`,
                            children: (0, C.jsxs)(`div`, {
                              className: `flex items-center justify-end gap-1.5`,
                              children: [
                                (0, C.jsx)(`button`, {
                                  onClick: () => a(e),
                                  title: s(`AdmissionCardTitle`),
                                  className: `p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 transition-colors cursor-pointer`,
                                  children: (0, C.jsx)(tt, {
                                    className: `h-4 w-4`,
                                  }),
                                }),
                                e.whatsapp &&
                                  (0, C.jsx)(`a`, {
                                    href: r,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    title: s(`SendWhatsApp`),
                                    className: `p-1.5 rounded-lg bg-green-50 hover:bg-green-100 dark:bg-green-950/60 dark:hover:bg-green-900 text-green-700 dark:text-green-300 transition-colors`,
                                    children: (0, C.jsx)(Je, {
                                      className: `h-4 w-4`,
                                    }),
                                  }),
                                (0, C.jsx)(`button`, {
                                  onClick: () => w(e),
                                  title: s(`Edit`),
                                  className: `p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer`,
                                  children: (0, C.jsx)(Qe, {
                                    className: `h-4 w-4`,
                                  }),
                                }),
                                o !== `teacher` &&
                                  (0, C.jsx)(`button`, {
                                    onClick: () => {
                                      confirm(
                                        `کیا آپ واقعی اس طالب علم کا ریکارڈ حذف کرنا چاہتے ہیں؟`,
                                      ) && i(e.id);
                                    },
                                    title: s(`Delete`),
                                    className: `p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 transition-colors cursor-pointer`,
                                    children: (0, C.jsx)(dt, {
                                      className: `h-4 w-4`,
                                    }),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                }),
              ],
            }),
          }),
        }),
        h &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden border border-stone-200 dark:border-stone-800 my-8`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-lg font-bold text-stone-900 dark:text-stone-100`,
                      children: v
                        ? `طالب علم کے کوائف میں ترمیم`
                        : `نئے طالب علم / طالبہ کا داخلہ`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => g(!1),
                      className: `p-2 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: T,
                  className: `p-6 space-y-4 max-h-[75vh] overflow-y-auto`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `relative group`,
                          children: [
                            (0, C.jsx)(`div`, {
                              className: `h-20 w-20 rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-700 border-2 border-emerald-500 shadow-sm flex items-center justify-center`,
                              children: b.photoPath
                                ? (0, C.jsx)(`img`, {
                                    src: b.photoPath,
                                    alt: `Preview`,
                                    className: `h-full w-full object-cover`,
                                  })
                                : (0, C.jsx)(Ee, {
                                    className: `h-8 w-8 text-stone-400`,
                                  }),
                            }),
                            (0, C.jsxs)(`label`, {
                              className: `absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl cursor-pointer`,
                              children: [
                                `تصویر منتخب کریں`,
                                (0, C.jsx)(`input`, {
                                  type: `file`,
                                  accept: `image/*`,
                                  onChange: D,
                                  className: `hidden`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          className: `space-y-1 text-center sm:text-start flex-1`,
                          children: [
                            (0, C.jsxs)(`p`, {
                              className: `text-xs font-bold text-emerald-800 dark:text-emerald-300`,
                              children: [
                                `داخلہ نمبر (Admission Number): `,
                                b.admissionNo,
                              ],
                            }),
                            (0, C.jsx)(`p`, {
                              className: `text-[11px] text-stone-500`,
                              children: `تصویر کیمرہ سے یا فائل سے اپلوڈ کریں۔ تصویر کارڈ اور ریکارڈ کا حصہ بنے گی۔`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `نام (اردو) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: b.fullNameUrdu,
                              onChange: (e) =>
                                x({ ...b, fullNameUrdu: e.target.value }),
                              placeholder: `مثلاً: فاطمہ بی بی`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `نام (انگلش) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: b.fullName,
                              onChange: (e) =>
                                x({ ...b, fullName: e.target.value }),
                              placeholder: `e.g. Fatima Bibi`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ولدیت (اردو) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: b.fatherNameUrdu,
                              onChange: (e) =>
                                x({ ...b, fatherNameUrdu: e.target.value }),
                              placeholder: `مثلاً: محمد اسحاق`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ولدیت (انگلش) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: b.fatherName,
                              onChange: (e) =>
                                x({ ...b, fatherName: e.target.value }),
                              placeholder: `e.g. Muhammad Ishaq`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-3 gap-4`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `کلاس / شعبہ *`,
                            }),
                            (0, C.jsx)(`select`, {
                              value: b.classId,
                              onChange: (e) => {
                                let n = Number(e.target.value),
                                  r = t.find((e) => e.id === n);
                                x({
                                  ...b,
                                  classId: n,
                                  monthlyFee: r ? r.feeAmount : b.monthlyFee,
                                });
                              },
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              children: t.map((e) =>
                                (0, C.jsxs)(
                                  `option`,
                                  {
                                    value: e.id,
                                    children: [e.name, ` — `, e.nameUrdu],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ماہانہ فیس (PKR) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              value: b.monthlyFee,
                              onChange: (e) =>
                                x({ ...b, monthlyFee: Number(e.target.value) }),
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `فیس رعایت (Concession %)`,
                            }),
                            (0, C.jsxs)(`select`, {
                              value: b.feeConcessionReason,
                              onChange: (e) => {
                                let t = e.target.value,
                                  n = 0;
                                (t === `Yateem` && (n = 50),
                                  t === `Ghareeb` && (n = 100),
                                  t === `Mazoor/Disabled` && (n = 50),
                                  x({
                                    ...b,
                                    feeConcessionReason: t,
                                    feeConcessionPct: n,
                                  }));
                              },
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              children: [
                                (0, C.jsx)(`option`, {
                                  value: ``,
                                  children: `کوئی رعایت نہیں (0%)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Yateem`,
                                  children: `یتیم کوٹہ (50% رعایت)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Ghareeb`,
                                  children: `مستحق و نادار (100% وظیفہ)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Mazoor/Disabled`,
                                  children: `معذور طالبہ (50% رعایت)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `والدین کا WhatsApp نمبر *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: b.whatsapp,
                              onChange: (e) =>
                                x({ ...b, whatsapp: e.target.value }),
                              placeholder: `مثلاً: 03331234567`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ب فارم / CNIC نمبر`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: b.cnicFormB,
                              onChange: (e) =>
                                x({ ...b, cnicFormB: e.target.value }),
                              placeholder: `مثلاً: 54400-1234567-2`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `مکمل پتہ (Address)`,
                        }),
                        (0, C.jsx)(`input`, {
                          type: `text`,
                          value: b.address,
                          onChange: (e) => x({ ...b, address: e.target.value }),
                          placeholder: `گھر یا علاقے کا مکمل پتہ`,
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => g(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: `منسوخ کریں`,
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: `محفوظ کریں (Save Student)`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  kt = ({
    students: e,
    classes: t,
    attendanceRecords: n,
    onSaveAttendance: r,
    role: i = `admin`,
    teachers: a = [],
    allStudents: o = [],
    allClasses: s = [],
    currentUserName: c,
    currentUser: l,
  }) => {
    let { t: u, language: d } = E(),
      f = i === `admin`,
      [p, m] = (0, _.useState)(f ? `summary` : `sheet`),
      [h, g] = (0, _.useState)(t[0]?.id || 1),
      [v, y] = (0, _.useState)(new Date().toISOString().split(`T`)[0]),
      [b, x] = (0, _.useState)(``),
      [S, w] = (0, _.useState)(!1);
    (0, _.useEffect)(() => {
      t.length > 0 && !t.some((e) => e.id === h) && g(t[0].id);
    }, [t, h]);
    let T = f && s.length > 0 ? s : t,
      D = (f && o.length > 0 ? o : e).filter((e) => e.classId === h),
      [O, k] = (0, _.useState)({});
    (0, _.useEffect)(() => {
      let e = {};
      for (let t of D) {
        let r = n.find((e) => e.studentId === t.id && e.date === v);
        e[t.id] = {
          status: r ? r.status : `Present`,
          lateMinutes: r?.lateMinutes || 0,
        };
      }
      k(e);
    }, [v, h, n.length]);
    let A = (e, t) => {
        (k((n) => ({ ...n, [e]: { ...n[e], status: t } })), w(!1));
      },
      ee = () => {
        let e = { ...O };
        for (let t of D) e[t.id] = { status: `Present`, lateMinutes: 0 };
        (k(e), w(!1));
      },
      te = () => {
        let e = l?.teacherId || (i === `teacher` ? 1 : void 0),
          t =
            c || l?.fullNameUrdu || l?.fullName || (f ? `ایڈمن` : `قاری صاحب`);
        (r(
          D.map((n) => ({
            id: 0,
            studentId: n.id,
            classId: h,
            date: v,
            status: O[n.id]?.status || `Present`,
            lateMinutes: O[n.id]?.lateMinutes || 0,
            markedBy: e,
            markedByName: t,
          })),
        ),
          w(!0),
          setTimeout(() => w(!1), 3500));
      },
      ne = n.find((e) => e.classId === h && e.date === v && e.markedByName),
      re = (0, _.useMemo)(() => {
        let e = a.length > 0 ? a : P.getTeachers(),
          t = s.length > 0 ? s : P.getClasses(),
          r = o.length > 0 ? o : P.getStudents(),
          i = n.filter((e) => e.date === v);
        return e.map((e) => {
          let n = t.filter(
              (t) =>
                t.teacherId === e.id ||
                (e.assignedClassId && t.id === e.assignedClassId) ||
                (t.teacherName &&
                  (t.teacherName === e.fullName ||
                    t.teacherName === e.fullNameUrdu)),
            ),
            a = n.map((e) => e.id),
            o = r.filter((e) => e.classId && a.includes(e.classId)),
            s = o.map((e) => e.id),
            c = i.filter((e) => s.includes(e.studentId)),
            l = c.length > 0,
            u = c.filter((e) => e.status === `Present`).length,
            d = c.filter((e) => e.status === `Absent`).length,
            f = c.filter((e) => e.status === `Late`).length,
            p = c.filter((e) => e.status === `Leave`).length,
            m = l && o.length > 0 ? Math.round((u / o.length) * 100) : null,
            h = c.find((e) => e.markedByName)?.markedByName;
          return {
            teacher: e,
            classes: n,
            students: o,
            totalStudents: o.length,
            presentCount: u,
            absentCount: d,
            lateCount: f,
            leaveCount: p,
            rate: m,
            isMarked: l,
            lastMarker: h,
          };
        });
      }, [a, s, o, n, v]),
      ie = (0, _.useMemo)(() => {
        if (!b.trim()) return re;
        let e = b.toLowerCase().trim();
        return re.filter(
          (t) =>
            t.teacher.fullName.toLowerCase().includes(e) ||
            (t.teacher.fullNameUrdu &&
              t.teacher.fullNameUrdu.toLowerCase().includes(e)) ||
            (t.teacher.phone && t.teacher.phone.includes(e)) ||
            t.classes.some(
              (t) =>
                t.name.toLowerCase().includes(e) ||
                (t.nameUrdu && t.nameUrdu.toLowerCase().includes(e)),
            ),
        );
      }, [re, b]),
      j = re.length,
      M = re.filter((e) => e.isMarked).length,
      ae = j - M,
      oe = re.reduce((e, t) => e + t.totalStudents, 0),
      N = re.reduce((e, t) => e + t.presentCount, 0),
      se = re.reduce((e, t) => e + t.absentCount, 0),
      F = D.length,
      ce = D.filter((e) => O[e.id]?.status === `Present`).length,
      le = D.filter((e) => O[e.id]?.status === `Absent`).length,
      ue = D.filter((e) => O[e.id]?.status === `Late`).length;
    D.filter((e) => O[e.id]?.status === `Leave`).length;
    let de = F > 0 ? Math.round((ce / F) * 100) : 0,
      fe = (e) => {
        (e && g(e), m(`sheet`));
      };
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-xs`,
          children: [
            (0, C.jsx)(`div`, {
              children: (0, C.jsxs)(`div`, {
                className: `flex items-center gap-2.5`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300`,
                    children: (0, C.jsx)(lt, { className: `h-6 w-6` }),
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsx)(`h2`, {
                        className: `text-xl font-bold text-stone-900 dark:text-stone-100`,
                        children: u(`DailyAttendancePortal`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xs text-stone-500 dark:text-stone-400 mt-0.5`,
                        children: f
                          ? u(`AttendanceAdminDesc`)
                          : `${u(`AttendanceTeacherDesc`)} (${c || l?.fullNameUrdu || `قاری صاحب`})`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            f &&
              (0, C.jsxs)(`div`, {
                className: `flex items-center gap-1.5 bg-stone-100/90 dark:bg-emerald-950/40 p-1.5 rounded-2xl border border-stone-200/90 dark:border-emerald-800/50 backdrop-blur-md shadow-2xs`,
                children: [
                  (0, C.jsx)(`button`, {
                    onClick: () => m(`summary`),
                    className: `px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${p === `summary` ? `bg-gradient-to-r from-[#0A6B63] to-teal-600 text-white shadow-md dark:bg-gradient-to-r dark:from-emerald-950 dark:to-teal-900 dark:text-[#39FFC8] dark:border dark:border-[#39FFC8]/50 dark:shadow-[0_0_15px_rgba(57,255,200,0.3)]` : `text-stone-700 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-[#9CFFE3] hover:bg-white/60 dark:hover:bg-emerald-900/30`}`,
                    children: u(`ByQariSummary`),
                  }),
                  (0, C.jsx)(`button`, {
                    onClick: () => m(`sheet`),
                    className: `px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${p === `sheet` ? `bg-gradient-to-r from-[#0A6B63] to-teal-600 text-white shadow-md dark:bg-gradient-to-r dark:from-emerald-950 dark:to-teal-900 dark:text-[#39FFC8] dark:border dark:border-[#39FFC8]/50 dark:shadow-[0_0_15px_rgba(57,255,200,0.3)]` : `text-stone-700 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-[#9CFFE3] hover:bg-white/60 dark:hover:bg-emerald-900/30`}`,
                    children: u(`ClassRegisterSheet`),
                  }),
                ],
              }),
          ],
        }),
        f &&
          p === `summary` &&
          (0, C.jsxs)(`div`, {
            className: `space-y-6`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `sm:col-span-2`,
                    children: [
                      (0, C.jsx)(`label`, {
                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                        children: u(`SearchTeacherClass`),
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, C.jsx)(at, {
                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `text`,
                            placeholder: u(`SearchTeacherClass`),
                            value: b,
                            onChange: (e) => x(e.target.value),
                            className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsxs)(`label`, {
                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                        children: [u(`AttendanceDate`), ` (`, u(`Date`), `):`],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, C.jsx)(Te, {
                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `date`,
                            value: v,
                            onChange: (e) => y(e.target.value),
                            className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `grid grid-cols-2 sm:grid-cols-5 gap-3.5`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-center shadow-xs`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs font-semibold text-stone-500 block`,
                        children: u(`TotalStaffTeachers`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-2xl font-black text-stone-900 dark:text-stone-100 mt-1`,
                        children: j,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-[10px] text-stone-400 mt-0.5 block`,
                        children: u(`StaffTeachingBadge`),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center shadow-xs`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs font-semibold text-emerald-700 dark:text-emerald-300 block`,
                        children: u(`AttendanceMarked`),
                      }),
                      (0, C.jsxs)(`p`, {
                        className: `text-2xl font-black text-emerald-800 dark:text-emerald-200 mt-1`,
                        children: [
                          M,
                          ` `,
                          (0, C.jsxs)(`span`, {
                            className: `text-sm font-normal text-emerald-600`,
                            children: [`/ `, j],
                          }),
                        ],
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 block`,
                        children: u(`AttendanceMarked`),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center shadow-xs`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs font-semibold text-amber-700 dark:text-amber-300 block`,
                        children: u(`AttendancePending`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-2xl font-black text-amber-800 dark:text-amber-200 mt-1`,
                        children: ae,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-[10px] text-amber-600 dark:text-amber-400 mt-0.5 block`,
                        children: u(`AttendancePending`),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center shadow-xs`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs font-semibold text-teal-700 dark:text-teal-300 block`,
                        children: u(`TotalPresentStudents`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-2xl font-black text-teal-800 dark:text-teal-200 mt-1`,
                        children: N,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-[10px] text-teal-600 dark:text-teal-400 mt-0.5 block`,
                        children:
                          oe > 0
                            ? `${Math.round((N / oe) * 100)}% ${u(`AttendanceRate`)}`
                            : `0%`,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-center shadow-xs`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs font-semibold text-rose-700 dark:text-rose-300 block`,
                        children: u(`TotalAbsentStudents`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-2xl font-black text-rose-800 dark:text-rose-200 mt-1`,
                        children: se,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-[10px] text-rose-600 dark:text-rose-400 mt-0.5 block`,
                        children: u(`Absent`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `bg-white dark:bg-stone-900 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-sm overflow-hidden`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between`,
                    children: (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsxs)(`h3`, {
                          className: `text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                          children: [
                            (0, C.jsx)(He, {
                              className: `h-5 w-5 text-emerald-600`,
                            }),
                            u(`TeacherReportTitle`),
                            ` (`,
                            u(`Date`),
                            `: `,
                            v,
                            `)`,
                          ],
                        }),
                        (0, C.jsx)(`p`, {
                          className: `text-xs text-stone-500 dark:text-stone-400 mt-0.5`,
                          children: u(`TeacherReportSubtitle`),
                        }),
                      ],
                    }),
                  }),
                  (0, C.jsx)(`div`, {
                    className: `divide-y divide-stone-100 dark:divide-stone-800`,
                    children:
                      ie.length === 0
                        ? (0, C.jsx)(`div`, {
                            className: `p-8 text-center text-xs text-stone-400`,
                            children: u(`NoTeacherFound`),
                          })
                        : ie.map((e) => {
                            let t = e.teacher,
                              n = e.classes[0];
                            return (0, C.jsxs)(
                              `div`,
                              {
                                className: `p-5 hover:bg-stone-50/70 dark:hover:bg-stone-800/40 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4`,
                                children: [
                                  (0, C.jsxs)(`div`, {
                                    className: `flex items-center gap-3.5 min-w-0`,
                                    children: [
                                      (0, C.jsx)(`div`, {
                                        className: `h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 flex items-center justify-center font-bold text-lg shrink-0 border border-emerald-300 dark:border-emerald-800`,
                                        children: t.fullNameUrdu
                                          ? t.fullNameUrdu.charAt(0)
                                          : t.fullName.charAt(0),
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `min-w-0`,
                                        children: [
                                          (0, C.jsxs)(`div`, {
                                            className: `flex items-center gap-2 flex-wrap`,
                                            children: [
                                              (0, C.jsx)(`h4`, {
                                                className: `font-bold text-base text-stone-900 dark:text-stone-100 truncate`,
                                                children:
                                                  d === `en`
                                                    ? t.fullName
                                                    : t.fullNameUrdu ||
                                                      t.fullName,
                                              }),
                                              (0, C.jsx)(`span`, {
                                                className: `text-[11px] px-2 py-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-semibold`,
                                                children:
                                                  t.designation || `استاد`,
                                              }),
                                              e.isMarked
                                                ? (0, C.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-800`,
                                                    children: [
                                                      (0, C.jsx)(je, {
                                                        className: `h-3 w-3 text-emerald-600`,
                                                      }),
                                                      u(`AttendanceMarked`),
                                                    ],
                                                  })
                                                : (0, C.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold border border-amber-300 dark:border-amber-800 animate-pulse`,
                                                    children: [
                                                      (0, C.jsx)(Me, {
                                                        className: `h-3 w-3 text-amber-600`,
                                                      }),
                                                      u(`AttendancePending`),
                                                    ],
                                                  }),
                                            ],
                                          }),
                                          (0, C.jsxs)(`div`, {
                                            className: `flex items-center gap-2 mt-1 text-xs text-stone-500 dark:text-stone-400 flex-wrap`,
                                            children: [
                                              (0, C.jsxs)(`span`, {
                                                children: [
                                                  u(`ClassName`),
                                                  `:`,
                                                  ` `,
                                                  (0, C.jsx)(`strong`, {
                                                    className: `text-stone-800 dark:text-stone-200`,
                                                    children:
                                                      e.classes.length > 0
                                                        ? e.classes
                                                            .map((e) =>
                                                              d === `en`
                                                                ? e.name
                                                                : e.nameUrdu ||
                                                                  e.name,
                                                            )
                                                            .join(`، `)
                                                        : `—`,
                                                  }),
                                                ],
                                              }),
                                              (0, C.jsx)(`span`, {
                                                children: `•`,
                                              }),
                                              (0, C.jsxs)(`span`, {
                                                children: [
                                                  u(`ContactPhone`),
                                                  `: `,
                                                  t.phone,
                                                ],
                                              }),
                                              e.lastMarker &&
                                                (0, C.jsxs)(C.Fragment, {
                                                  children: [
                                                    (0, C.jsx)(`span`, {
                                                      children: `•`,
                                                    }),
                                                    (0, C.jsx)(`span`, {
                                                      className: `text-emerald-700 dark:text-emerald-400 font-semibold`,
                                                      children: e.lastMarker,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    className: `flex items-center gap-3 sm:gap-4 flex-wrap lg:flex-nowrap justify-between lg:justify-end`,
                                    children: [
                                      (0, C.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, C.jsxs)(`div`, {
                                            className: `px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-center min-w-[64px]`,
                                            children: [
                                              (0, C.jsx)(`span`, {
                                                className: `text-[10px] font-semibold text-stone-500 block`,
                                                children: u(`TotalStudents`),
                                              }),
                                              (0, C.jsx)(`span`, {
                                                className: `text-sm font-black text-stone-800 dark:text-stone-100`,
                                                children: e.totalStudents,
                                              }),
                                            ],
                                          }),
                                          (0, C.jsxs)(`div`, {
                                            className: `px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center min-w-[70px]`,
                                            children: [
                                              (0, C.jsx)(`span`, {
                                                className: `text-[10px] font-bold text-emerald-700 dark:text-emerald-300 block`,
                                                children: u(`Present`),
                                              }),
                                              (0, C.jsx)(`span`, {
                                                className: `text-base font-black text-emerald-800 dark:text-emerald-200`,
                                                children: e.isMarked
                                                  ? e.presentCount
                                                  : `—`,
                                              }),
                                            ],
                                          }),
                                          (0, C.jsxs)(`div`, {
                                            className: `px-3.5 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-center min-w-[70px]`,
                                            children: [
                                              (0, C.jsx)(`span`, {
                                                className: `text-[10px] font-bold text-rose-700 dark:text-rose-300 block`,
                                                children: u(`Absent`),
                                              }),
                                              (0, C.jsx)(`span`, {
                                                className: `text-base font-black text-rose-800 dark:text-rose-200`,
                                                children: e.isMarked
                                                  ? e.absentCount
                                                  : `—`,
                                              }),
                                            ],
                                          }),
                                          e.lateCount > 0 &&
                                            (0, C.jsxs)(`div`, {
                                              className: `px-2.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center min-w-[55px]`,
                                              children: [
                                                (0, C.jsx)(`span`, {
                                                  className: `text-[10px] font-semibold text-amber-700 block`,
                                                  children: u(`Late`),
                                                }),
                                                (0, C.jsx)(`span`, {
                                                  className: `text-sm font-black text-amber-800 dark:text-amber-200`,
                                                  children: e.lateCount,
                                                }),
                                              ],
                                            }),
                                          e.rate !== null &&
                                            (0, C.jsxs)(`div`, {
                                              className: `px-3 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center min-w-[65px]`,
                                              children: [
                                                (0, C.jsx)(`span`, {
                                                  className: `text-[10px] font-semibold text-teal-700 block`,
                                                  children: u(`AttendanceRate`),
                                                }),
                                                (0, C.jsxs)(`span`, {
                                                  className: `text-sm font-black text-teal-800 dark:text-teal-200`,
                                                  children: [e.rate, `%`],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, C.jsxs)(`button`, {
                                            onClick: () => fe(n?.id),
                                            className: `px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer`,
                                            title: u(`ViewRegister`),
                                            children: [
                                              (0, C.jsx)(Re, {
                                                className: `h-3.5 w-3.5`,
                                              }),
                                              u(`ViewRegister`),
                                            ],
                                          }),
                                          t.phone &&
                                            (0, C.jsx)(`a`, {
                                              href: `https://wa.me/92${t.phone.replace(/[^0-9]/g, ``).slice(-10)}?text=${encodeURIComponent(`السلام علیکم ورحمۃ اللہ محترم ${t.fullNameUrdu || t.fullName} صاحب! برائے مہربانی آج بتاریخ (${v}) کی کلاس حاضری ایپ میں درج فرما دیں۔ جزاکم اللہ خیرا۔`)}`,
                                              target: `_blank`,
                                              rel: `noreferrer`,
                                              className: `p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-colors`,
                                              title: `استاد کو واٹس ایپ پر یاد دہانی میسج بھیجیں`,
                                              children: (0, C.jsx)(Ye, {
                                                className: `h-4 w-4 text-emerald-600`,
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t.id,
                            );
                          }),
                  }),
                ],
              }),
            ],
          }),
        (!f || p === `sheet`) &&
          (0, C.jsxs)(`div`, {
            className: `space-y-6`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      f &&
                        (0, C.jsxs)(`button`, {
                          onClick: () => m(`summary`),
                          className: `px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold text-xs flex items-center gap-1 cursor-pointer`,
                          children: [
                            (0, C.jsx)(ve, { className: `h-4 w-4` }),
                            u(`BackToSummary`),
                          ],
                        }),
                      (0, C.jsxs)(`span`, {
                        className: `text-xs font-bold text-stone-700 dark:text-stone-300`,
                        children: [
                          u(`ClassName`),
                          `:`,
                          ` `,
                          (0, C.jsx)(`span`, {
                            className: `text-emerald-600 font-extrabold`,
                            children:
                              d === `en`
                                ? T.find((e) => e.id === h)?.name
                                : T.find((e) => e.id === h)?.nameUrdu ||
                                  T.find((e) => e.id === h)?.name ||
                                  `Class`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, C.jsx)(`button`, {
                        onClick: ee,
                        className: `px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold text-xs transition-colors cursor-pointer`,
                        children: u(`MarkAllPresent`),
                      }),
                      (0, C.jsxs)(`button`, {
                        onClick: te,
                        className: `flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer`,
                        children: [
                          (0, C.jsx)(ft, { className: `h-4 w-4` }),
                          u(`SaveAttendance`),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              S &&
                (0, C.jsxs)(`div`, {
                  className: `p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2.5 animate-in fade-in`,
                  children: [
                    (0, C.jsx)(je, { className: `h-5 w-5 text-emerald-600` }),
                    (0, C.jsxs)(`span`, {
                      children: [
                        u(`AttendanceSavedSuccess`),
                        ` (`,
                        u(`Date`),
                        `: `,
                        (0, C.jsx)(`strong`, { children: v }),
                        `)`,
                      ],
                    }),
                  ],
                }),
              ne &&
                (0, C.jsxs)(`div`, {
                  className: `p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between`,
                  children: [
                    (0, C.jsxs)(`span`, {
                      className: `flex items-center gap-1.5 font-semibold`,
                      children: [
                        (0, C.jsx)(L, {
                          className: `h-4 w-4 text-emerald-600`,
                        }),
                        u(`AttendanceMarked`),
                        ` — `,
                        u(`Date`),
                        `: `,
                        (0, C.jsx)(`strong`, { children: v }),
                        ` (`,
                        ne.markedByName || `Teacher`,
                        `)`,
                      ],
                    }),
                    (0, C.jsx)(`span`, {
                      className: `text-[11px] text-stone-400`,
                      children: u(`CloudSyncActive`),
                    }),
                  ],
                }),
              (0, C.jsxs)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
                children: [
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsxs)(`label`, {
                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                        children: [u(`SelectClass`), `:`],
                      }),
                      (0, C.jsx)(`select`, {
                        value: h,
                        onChange: (e) => g(Number(e.target.value)),
                        className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                        children: T.map((e) =>
                          (0, C.jsxs)(
                            `option`,
                            {
                              value: e.id,
                              children: [
                                e.name,
                                ` — `,
                                e.nameUrdu,
                                ` (`,
                                e.teacherName || `—`,
                                `)`,
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsxs)(`label`, {
                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                        children: [u(`AttendanceDate`), `:`],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, C.jsx)(Te, {
                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `date`,
                            value: v,
                            onChange: (e) => y(e.target.value),
                            className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `grid grid-cols-2 sm:grid-cols-5 gap-3`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-center`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-[11px] font-semibold text-stone-500`,
                        children: u(`TotalStudents`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xl font-bold text-stone-900 dark:text-stone-100`,
                        children: F,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-[11px] font-bold text-emerald-700 dark:text-emerald-300`,
                        children: u(`Present`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xl font-bold text-emerald-800 dark:text-emerald-200`,
                        children: ce,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-center`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-[11px] font-bold text-rose-700 dark:text-rose-300`,
                        children: u(`Absent`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xl font-bold text-rose-800 dark:text-rose-200`,
                        children: le,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-[11px] font-semibold text-amber-700 dark:text-amber-300`,
                        children: u(`Late`),
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xl font-bold text-amber-800 dark:text-amber-200`,
                        children: ue,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center col-span-2 sm:col-span-1`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-[11px] font-semibold text-teal-700 dark:text-teal-300`,
                        children: u(`AttendanceRate`),
                      }),
                      (0, C.jsxs)(`p`, {
                        className: `text-xl font-bold text-teal-800 dark:text-teal-200`,
                        children: [de, `%`],
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(`div`, {
                className: `space-y-3`,
                children:
                  D.length === 0
                    ? (0, C.jsx)(`div`, {
                        className: `p-8 text-center rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-400`,
                        children: u(`NoStudentsInClass`),
                      })
                    : D.map((e) => {
                        let t = O[e.id]?.status || `Present`;
                        return (0, C.jsxs)(
                          `div`,
                          {
                            className: `flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:border-emerald-500/40 transition-all`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, C.jsx)(`div`, {
                                    className: `h-10 w-10 rounded-full overflow-hidden bg-stone-100 dark:bg-stone-800 shrink-0 border border-stone-300 dark:border-stone-700`,
                                    children: (0, C.jsx)(`img`, {
                                      src: Et(e.photoPath),
                                      alt: e.fullName,
                                      className: `h-full w-full object-cover`,
                                      onError: (e) => {
                                        e.target.src = `./assets/app.ico`;
                                      },
                                    }),
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    children: [
                                      (0, C.jsx)(`p`, {
                                        className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                                        children:
                                          d === `en`
                                            ? e.fullName
                                            : e.fullNameUrdu || e.fullName,
                                      }),
                                      (0, C.jsxs)(`p`, {
                                        className: `text-xs text-stone-500 dark:text-stone-400`,
                                        children: [
                                          u(`AdmissionNo`),
                                          `: `,
                                          e.admissionNo,
                                          ` • `,
                                          u(`FatherName`),
                                          `: `,
                                          d === `en`
                                            ? e.fatherName
                                            : e.fatherNameUrdu || e.fatherName,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `flex items-center gap-1.5 sm:gap-2`,
                                children: [
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => A(e.id, `Present`),
                                    className: `flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${t === `Present` ? `bg-emerald-600 text-white shadow-xs` : `bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200`}`,
                                    children: u(`Present`),
                                  }),
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => A(e.id, `Absent`),
                                    className: `flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${t === `Absent` ? `bg-rose-600 text-white shadow-xs` : `bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200`}`,
                                    children: u(`Absent`),
                                  }),
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => A(e.id, `Late`),
                                    className: `flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${t === `Late` ? `bg-amber-600 text-white shadow-xs` : `bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200`}`,
                                    children: u(`Late`),
                                  }),
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => A(e.id, `Leave`),
                                    className: `flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${t === `Leave` ? `bg-teal-600 text-white shadow-xs` : `bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200`}`,
                                    children: u(`Leave`),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
              }),
            ],
          }),
      ],
    });
  },
  At = ({
    students: e,
    progressRecords: t,
    onAddProgress: n,
    currentUser: r,
  }) => {
    let [i, a] = (0, _.useState)(e[0]?.id || 1);
    (0, _.useEffect)(() => {
      e.length > 0 && !e.some((e) => e.id === i) && a(e[0].id);
    }, [e, i]);
    let [o, s] = (0, _.useState)(new Date().toISOString().split(`T`)[0]),
      [c, l] = (0, _.useState)(5),
      [u, d] = (0, _.useState)(`Excellent`),
      [f, p] = (0, _.useState)(``),
      [m, h] = (0, _.useState)(``),
      [g, v] = (0, _.useState)(``),
      [y, b] = (0, _.useState)(``),
      [x, S] = (0, _.useState)(!1),
      w = e.find((e) => e.id === i),
      T = t.filter((e) => e.studentId === i);
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          children: [
            (0, C.jsxs)(`h2`, {
              className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
              children: [
                (0, C.jsx)(Ce, {
                  className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                }),
                `روزانہ سبق، سبقی و منزل ڈائری (Daily Hifz & Nazra Tracker)`,
              ],
            }),
            (0, C.jsx)(`p`, {
              className: `text-xs text-stone-500 dark:text-stone-400`,
              children: `قرآن مجید کے حفظ و ناظرہ کا روزمرہ تعلیمی ریکارڈ اور تکرار کی نگرانی`,
            }),
          ],
        }),
        x &&
          (0, C.jsxs)(`div`, {
            className: `p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2`,
            children: [
              (0, C.jsx)(L, { className: `h-4 w-4 text-emerald-600` }),
              `آج کا سبق کامیابی سے ڈائری میں محفوظ ہو گیا ہے۔`,
            ],
          }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-12 gap-6`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `lg:col-span-7 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 shadow-xs`,
              children: [
                (0, C.jsx)(`h3`, {
                  className: `text-base font-bold text-stone-900 dark:text-stone-100 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800`,
                  children: `آج کا نیا سبق درج کریں`,
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !f)) {
                      alert(`براہ کرم آج کا سبق درج کریں۔`);
                      return;
                    }
                    (n({
                      studentId: i,
                      teacherId: r?.teacherId || 1,
                      teacherName:
                        r?.fullNameUrdu || r?.fullName || `استاد محترم`,
                      reportDate: o,
                      rating: c,
                      behaviour: u,
                      sabaq: f,
                      sabqi: m,
                      manzil: g,
                      progressText: y || `سبق سنا دیا گیا۔`,
                    }),
                      S(!0),
                      p(``),
                      h(``),
                      v(``),
                      b(``),
                      setTimeout(() => S(!1), 3e3));
                  },
                  className: `space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `طالب علم / طالبہ منتخب کریں *`,
                            }),
                            (0, C.jsx)(`select`, {
                              value: i,
                              onChange: (e) => a(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: e.map((e) =>
                                (0, C.jsxs)(
                                  `option`,
                                  {
                                    value: e.id,
                                    children: [
                                      e.fullNameUrdu || e.fullName,
                                      ` (`,
                                      e.admissionNo,
                                      `)`,
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `تاریخ سبق`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `date`,
                              value: o,
                              onChange: (e) => s(e.target.value),
                              className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1`,
                          children: `📖 آج کا سبق (Sabaq - New Lesson) *`,
                        }),
                        (0, C.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          value: f,
                          onChange: (e) => p(e.target.value),
                          placeholder: `مثلاً: سورۃ البقرۃ آیات 142 تا 152 (نصف پاؤ)`,
                          className: `w-full text-xs bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500 font-semibold`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-bold text-sky-800 dark:text-sky-300 mb-1`,
                              children: `🔄 سبقی (Sabqi - Recent Revision)`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: m,
                              onChange: (e) => h(e.target.value),
                              placeholder: `مثلاً: پارہ 2، رکوع 1 تا 3`,
                              className: `w-full text-xs bg-sky-50/40 dark:bg-sky-950/20 border border-sky-300 dark:border-sky-800 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-sky-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-bold text-amber-800 dark:text-amber-300 mb-1`,
                              children: `⭐ منزل (Manzil - Major Revision)`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: g,
                              onChange: (e) => v(e.target.value),
                              placeholder: `مثلاً: پارہ 1 مکمل تکرار`,
                              className: `w-full text-xs bg-amber-50/40 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsxs)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: [
                                `کارکردگی ریٹنگ (Rating): `,
                                c,
                                ` / 5`,
                              ],
                            }),
                            (0, C.jsx)(`div`, {
                              className: `flex gap-2 items-center`,
                              children: [1, 2, 3, 4, 5].map((e) =>
                                (0, C.jsx)(
                                  `button`,
                                  {
                                    type: `button`,
                                    onClick: () => l(e),
                                    className: `p-1 text-2xl transition-transform hover:scale-125 cursor-pointer`,
                                    children: e <= c ? `⭐` : `☆`,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `اخلاق و رویہ (Behaviour)`,
                            }),
                            (0, C.jsxs)(`select`, {
                              value: u,
                              onChange: (e) => d(e.target.value),
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: [
                                (0, C.jsx)(`option`, {
                                  value: `Excellent`,
                                  children: `بہترین (Excellent)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Good`,
                                  children: `اچھا (Good)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Average`,
                                  children: `مناسب (Average)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Needs Work`,
                                  children: `مزید محنت درکار (Needs Work)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `استاد کے تفصیلی نوٹس / ہدایات`,
                        }),
                        (0, C.jsx)(`textarea`, {
                          rows: 2,
                          value: y,
                          onChange: (e) => b(e.target.value),
                          placeholder: `تجوید، مخارج یا یادداشت کے متعلق ہدایات لکھیں...`,
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsx)(`button`, {
                      type: `submit`,
                      className: `w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer`,
                      children: `سبق محفوظ کریں (Save Progress Record)`,
                    }),
                  ],
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `lg:col-span-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 shadow-xs flex flex-col`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800`,
                  children: [
                    (0, C.jsx)(rt, {
                      className: `h-5 w-5 text-emerald-600 dark:text-emerald-400`,
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`h3`, {
                          className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                          children: `پچھلا تعلیمی ریکارڈ (History)`,
                        }),
                        (0, C.jsx)(`p`, {
                          className: `text-[11px] text-stone-500`,
                          children: w?.fullNameUrdu || w?.fullName,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto space-y-3 max-h-[500px] pe-1`,
                  children:
                    T.length === 0
                      ? (0, C.jsx)(`p`, {
                          className: `text-xs text-stone-400 text-center py-8`,
                          children: `اس طالب علم کا ابھی تک کوئی سابقہ ریکارڈ درج نہیں ہے۔`,
                        })
                      : T.map((e) =>
                          (0, C.jsxs)(
                            `div`,
                            {
                              className: `p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-2`,
                              children: [
                                (0, C.jsxs)(`div`, {
                                  className: `flex items-center justify-between text-xs`,
                                  children: [
                                    (0, C.jsx)(`span`, {
                                      className: `font-bold text-stone-600 dark:text-stone-300`,
                                      children: e.reportDate,
                                    }),
                                    (0, C.jsx)(`span`, {
                                      className: `text-xs`,
                                      children: `⭐`.repeat(e.rating),
                                    }),
                                  ],
                                }),
                                (0, C.jsxs)(`div`, {
                                  className: `text-xs space-y-1`,
                                  children: [
                                    (0, C.jsxs)(`p`, {
                                      children: [
                                        (0, C.jsx)(`span`, {
                                          className: `font-bold text-emerald-700 dark:text-emerald-400`,
                                          children: `سبق: `,
                                        }),
                                        (0, C.jsx)(`span`, {
                                          className: `text-stone-900 dark:text-stone-100 font-semibold`,
                                          children: e.sabaq,
                                        }),
                                      ],
                                    }),
                                    e.sabqi &&
                                      (0, C.jsxs)(`p`, {
                                        children: [
                                          (0, C.jsx)(`span`, {
                                            className: `font-bold text-sky-700 dark:text-sky-400`,
                                            children: `سبقی: `,
                                          }),
                                          (0, C.jsx)(`span`, {
                                            className: `text-stone-700 dark:text-stone-300`,
                                            children: e.sabqi,
                                          }),
                                        ],
                                      }),
                                    e.manzil &&
                                      (0, C.jsxs)(`p`, {
                                        children: [
                                          (0, C.jsx)(`span`, {
                                            className: `font-bold text-amber-700 dark:text-amber-400`,
                                            children: `منزل: `,
                                          }),
                                          (0, C.jsx)(`span`, {
                                            className: `text-stone-700 dark:text-stone-300`,
                                            children: e.manzil,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                e.progressText &&
                                  (0, C.jsxs)(`p`, {
                                    className: `text-[11px] text-stone-500 italic bg-white dark:bg-stone-900/60 p-2 rounded border border-stone-200/40 dark:border-stone-800`,
                                    children: [`"`, e.progressText, `"`],
                                  }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  jt = ({ students: e, fees: t, onAddFee: n, onPrintReceipt: r }) => {
    let { t: i, language: a } = E(),
      [o, s] = (0, _.useState)(new Date().getMonth() + 1),
      [c, l] = (0, _.useState)(new Date().getFullYear()),
      [u, d] = (0, _.useState)(``),
      [f, p] = (0, _.useState)(!1),
      [m, h] = (0, _.useState)(e[0]?.id || 1),
      [g, v] = (0, _.useState)(3500),
      [y, b] = (0, _.useState)(`Cash`),
      [x, S] = (0, _.useState)(`ماہانہ فیس وصول شدہ`),
      w = e.find((e) => e.id === m),
      T = (t) => {
        let n = e.find((e) => e.id === (t || m)) || e[0];
        if (n) {
          h(n.id);
          let e = (n.monthlyFee * n.feeConcessionPct) / 100;
          v(n.monthlyFee - e);
        }
        p(!0);
      },
      D = (t) => {
        h(t);
        let n = e.find((e) => e.id === t);
        if (n) {
          let e = (n.monthlyFee * n.feeConcessionPct) / 100;
          v(n.monthlyFee - e);
        }
      },
      O = (e) => {
        if ((e.preventDefault(), !w)) return;
        let t = yt(`FEE`);
        (n({
          studentId: w.id,
          studentName: w.fullNameUrdu || w.fullName,
          admissionNo: w.admissionNo,
          periodYear: c,
          periodMonth: o,
          monthlyFee: w.monthlyFee,
          concessionPct: w.feeConcessionPct,
          concessionReason: w.feeConcessionReason,
          amountPaid: g,
          paymentDate: new Date().toISOString().split(`T`)[0],
          paymentMethod: y,
          receiptNo: t,
          notes: x,
        }),
          p(!1));
      },
      k = t.filter((e) => {
        let t = e.periodMonth === o && e.periodYear === c,
          n =
            !u ||
            (e.studentName &&
              e.studentName.toLowerCase().includes(u.toLowerCase())) ||
            (e.receiptNo &&
              e.receiptNo.toLowerCase().includes(u.toLowerCase()));
        return t && n;
      }),
      A = k.reduce((e, t) => e + t.amountPaid, 0);
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(xe, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    i(`FeesTitle`),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: i(`FeesSubtitle`),
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: () => T(),
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(et, { className: `h-4 w-4` }),
                i(`CollectFeeBtn`),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `sm:col-span-2 relative`,
              children: [
                (0, C.jsx)(at, {
                  className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                }),
                (0, C.jsx)(`input`, {
                  type: `text`,
                  placeholder: i(`Search`),
                  value: u,
                  onChange: (e) => d(e.target.value),
                  className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                }),
              ],
            }),
            (0, C.jsx)(`div`, {
              children: (0, C.jsx)(`select`, {
                value: o,
                onChange: (e) => s(Number(e.target.value)),
                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                children: [
                  `جنوری (January)`,
                  `فروری (February)`,
                  `مارچ (March)`,
                  `اپریل (April)`,
                  `مئی (May)`,
                  `جون (June)`,
                  `جولائی (July)`,
                  `اگست (August)`,
                  `ستمبر (September)`,
                  `اکتوبر (October)`,
                  `نومبر (November)`,
                  `دسمبر (December)`,
                ].map((e, t) =>
                  (0, C.jsx)(`option`, { value: t + 1, children: e }, t + 1),
                ),
              }),
            }),
            (0, C.jsx)(`div`, {
              children: (0, C.jsxs)(`select`, {
                value: c,
                onChange: (e) => l(Number(e.target.value)),
                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                children: [
                  (0, C.jsx)(`option`, { value: 2025, children: `2025` }),
                  (0, C.jsx)(`option`, { value: 2026, children: `2026` }),
                  (0, C.jsx)(`option`, { value: 2027, children: `2027` }),
                ],
              }),
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-between`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`span`, {
                  className: `text-xs font-semibold text-emerald-800 dark:text-emerald-300`,
                  children: [i(`TotalCollectedThisMonth`), `:`],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-2xl font-black text-emerald-950 dark:text-emerald-100 mt-0.5`,
                  children: z(A),
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `text-end`,
              children: [
                (0, C.jsxs)(`span`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: [i(`ReceiptsCount`), `:`],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-lg font-bold text-stone-800 dark:text-stone-200`,
                  children: k.length,
                }),
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden shadow-xs`,
          children: (0, C.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, C.jsxs)(`table`, {
              className: `w-full text-start text-xs border-collapse`,
              children: [
                (0, C.jsx)(`thead`, {
                  children: (0, C.jsxs)(`tr`, {
                    className: `border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 font-bold`,
                    children: [
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-start`,
                        children: i(`ReceiptNo`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`StudentName`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`OriginalFee`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`ConcessionScholarship`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`PaidAmount`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`PaymentMethod`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`Date`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-end`,
                        children: i(`Actions`),
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)(`tbody`, {
                  className: `divide-y divide-stone-100 dark:divide-stone-800`,
                  children:
                    k.length === 0
                      ? (0, C.jsx)(`tr`, {
                          children: (0, C.jsx)(`td`, {
                            colSpan: 8,
                            className: `py-8 text-center text-stone-400`,
                            children: `اس ماہ کے لیے ابھی تک کوئی فیس ریکارڈ درج نہیں ہے۔`,
                          }),
                        })
                      : k.map((t) => {
                          let n = e.find((e) => e.id === t.studentId),
                            a = `محترم سرپرست! طالب علم ${t.studentName} کی ماہ ${t.periodMonth}/${t.periodYear} کی فیس مبلغ ${z(t.amountPaid)} وصول پا کر رسید نمبر ${t.receiptNo} جاری کر دی گئی ہے۔ شکریہ، جامعہ السلفیہ دعوۃ الحق کوئٹہ۔`,
                            o = n?.whatsapp ? xt(n.whatsapp, a) : `#`;
                          return (0, C.jsxs)(
                            `tr`,
                            {
                              className: `hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-4 font-mono font-bold text-emerald-700 dark:text-emerald-400`,
                                  children: t.receiptNo,
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-3 px-3 font-bold text-stone-900 dark:text-stone-100`,
                                  children: [
                                    t.studentName,
                                    ` (`,
                                    t.admissionNo,
                                    `)`,
                                  ],
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 text-stone-600 dark:text-stone-300 font-medium`,
                                  children: z(t.monthlyFee),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3`,
                                  children:
                                    t.concessionPct > 0
                                      ? (0, C.jsxs)(`span`, {
                                          className: `text-emerald-600 font-bold`,
                                          children: [
                                            t.concessionPct,
                                            `% (`,
                                            t.concessionReason || `رعایت`,
                                            `)`,
                                          ],
                                        })
                                      : (0, C.jsx)(`span`, {
                                          className: `text-stone-400`,
                                          children: `—`,
                                        }),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 font-extrabold text-stone-900 dark:text-stone-100 text-sm`,
                                  children: z(t.amountPaid),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 font-medium text-stone-700 dark:text-stone-300`,
                                  children: t.paymentMethod || `Cash`,
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 text-stone-500 font-mono text-[11px]`,
                                  children: t.paymentDate || `—`,
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-4 text-end`,
                                  children: (0, C.jsxs)(`div`, {
                                    className: `flex items-center justify-end gap-2`,
                                    children: [
                                      (0, C.jsxs)(`button`, {
                                        onClick: () => r(t),
                                        title: i(`Print`),
                                        className: `flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-xs transition-colors cursor-pointer`,
                                        children: [
                                          (0, C.jsx)(tt, {
                                            className: `h-3.5 w-3.5`,
                                          }),
                                          i(`Print`),
                                        ],
                                      }),
                                      n?.whatsapp &&
                                        (0, C.jsx)(`a`, {
                                          href: o,
                                          target: `_blank`,
                                          rel: `noreferrer`,
                                          title: i(`SendWhatsApp`),
                                          className: `p-1.5 rounded-lg bg-green-50 hover:bg-green-100 dark:bg-green-950/60 dark:hover:bg-green-900 text-green-700 dark:text-green-300 transition-colors`,
                                          children: (0, C.jsx)(Je, {
                                            className: `h-4 w-4`,
                                          }),
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            t.id,
                          );
                        }),
                }),
              ],
            }),
          }),
        }),
        f &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: i(`CollectFeeModalTitle`),
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => p(!1),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: O,
                  className: `p-6 space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsxs)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: [i(`StudentName`), ` *`],
                        }),
                        (0, C.jsx)(`select`, {
                          value: m,
                          onChange: (e) => D(Number(e.target.value)),
                          className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          children: e.map((e) =>
                            (0, C.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [
                                  a === `en`
                                    ? e.fullName
                                    : e.fullNameUrdu || e.fullName,
                                  ` (`,
                                  e.admissionNo,
                                  `) — `,
                                  i(`OriginalFee`),
                                  `:`,
                                  ` `,
                                  z(e.monthlyFee),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    w &&
                      w.feeConcessionPct > 0 &&
                      (0, C.jsxs)(`div`, {
                        className: `p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300`,
                        children: [
                          (0, C.jsxs)(`span`, {
                            className: `font-bold`,
                            children: [i(`ConcessionScholarship`), `: `],
                          }),
                          w.feeConcessionPct,
                          `% (`,
                          w.feeConcessionReason || `رعایت`,
                          `)`,
                        ],
                      }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsxs)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: [i(`PaidAmount`), ` (PKR) *`],
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              required: !0,
                              value: g,
                              onChange: (e) => v(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: i(`PaymentMethod`),
                            }),
                            (0, C.jsxs)(`select`, {
                              value: y,
                              onChange: (e) => b(e.target.value),
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: [
                                (0, C.jsx)(`option`, {
                                  value: `Cash`,
                                  children: i(`Cash`),
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Bank Transfer`,
                                  children: i(`BankTransfer`),
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Online`,
                                  children: i(`EasyPaisaJazzCash`),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: i(`Notes`),
                        }),
                        (0, C.jsx)(`input`, {
                          type: `text`,
                          value: x,
                          onChange: (e) => S(e.target.value),
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => p(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: i(`Cancel`),
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: i(`Save`),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Mt = ({ transactions: e, onAddTransaction: t }) => {
    let [n, r] = (0, _.useState)(`All`),
      [i, a] = (0, _.useState)(``),
      [o, s] = (0, _.useState)(!1),
      [c, l] = (0, _.useState)(`Income`),
      [u, d] = (0, _.useState)(`Donation (Chanda)`),
      [f, p] = (0, _.useState)(1e4),
      [m, h] = (0, _.useState)(``),
      [g, v] = (0, _.useState)(``),
      y = [
        `Donation (Chanda)`,
        `Zakat`,
        `Sadqa`,
        `Fitrana`,
        `Student Fee`,
        `Other Income`,
      ],
      b = [
        `Salary`,
        `Utility Bills`,
        `Maintenance`,
        `Food/Kitchen`,
        `Printing/Stationery`,
        `Other Expense`,
      ],
      x = (e) => {
        if ((e.preventDefault(), !m)) {
          alert(`براہ کرم پارٹی / وصول کنندہ کا نام درج کریں۔`);
          return;
        }
        let n = yt(`RCT`);
        (t({
          type: c,
          category: u,
          amount: f,
          date: new Date().toISOString().split(`T`)[0],
          partyName: m,
          description: g || `${c}: ${u}`,
          receiptNo: n,
        }),
          s(!1),
          h(``),
          v(``));
      },
      S = e
        .filter((e) => e.type === `Income`)
        .reduce((e, t) => e + t.amount, 0),
      w = e
        .filter((e) => e.type === `Expense`)
        .reduce((e, t) => e + t.amount, 0),
      T = S - w,
      E = e.filter((e) => {
        let t = n === `All` || e.type === n,
          r =
            !i ||
            (e.category &&
              e.category.toLowerCase().includes(i.toLowerCase())) ||
            (e.partyName &&
              e.partyName.toLowerCase().includes(i.toLowerCase())) ||
            (e.description &&
              e.description.toLowerCase().includes(i.toLowerCase())) ||
            (e.receiptNo &&
              e.receiptNo.toLowerCase().includes(i.toLowerCase()));
        return t && r;
      });
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(gt, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    `شعبۂ آمدنی، چندہ و اخراجات (Income & Expense Ledger)`,
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: `جامعہ کی تمام تر مالیاتی لین دین، عطیات، زکوٰۃ، بلز اور یومیہ اخراجات کا ریکارڈ`,
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: () => s(!0),
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(et, { className: `h-4 w-4` }),
                `نیا لین دین (Record Transaction)`,
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-3 gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-stone-500`,
                      children: `کل آمدنی (Total Income)`,
                    }),
                    (0, C.jsx)(`div`, {
                      className: `p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600`,
                      children: (0, C.jsx)(ge, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-2`,
                  children: z(S),
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-stone-500`,
                      children: `کل اخراجات (Total Expense)`,
                    }),
                    (0, C.jsx)(`div`, {
                      className: `p-2 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600`,
                      children: (0, C.jsx)(ye, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-2xl font-black text-rose-700 dark:text-rose-400 mt-2`,
                  children: z(w),
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-xs`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-emerald-800 dark:text-emerald-300`,
                      children: `خالص بیلنس (Net Cash Balance)`,
                    }),
                    (0, C.jsx)(`div`, {
                      className: `p-2 rounded-xl bg-emerald-600 text-white`,
                      children: (0, C.jsx)(gt, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-2xl font-black text-emerald-950 dark:text-emerald-100 mt-2`,
                  children: z(T),
                }),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `relative flex-1 w-full`,
              children: [
                (0, C.jsx)(at, {
                  className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                }),
                (0, C.jsx)(`input`, {
                  type: `text`,
                  placeholder: `پارٹی، تفصیل، رسید نمبر تلاش کریں...`,
                  value: i,
                  onChange: (e) => a(e.target.value),
                  className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                }),
              ],
            }),
            (0, C.jsx)(`div`, {
              className: `flex gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl w-full sm:w-auto`,
              children: [`All`, `Income`, `Expense`].map((e) =>
                (0, C.jsxs)(
                  `button`,
                  {
                    onClick: () => r(e),
                    className: `flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${n === e ? `bg-white dark:bg-stone-900 text-emerald-600 dark:text-emerald-400 shadow-xs` : `text-stone-600 dark:text-stone-400 hover:text-stone-900`}`,
                    children: [
                      e === `All` && `تمام (All)`,
                      e === `Income` && `آمدنی (Income)`,
                      e === `Expense` && `اخراجات (Expense)`,
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden shadow-xs`,
          children: (0, C.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, C.jsxs)(`table`, {
              className: `w-full text-start text-xs border-collapse`,
              children: [
                (0, C.jsx)(`thead`, {
                  children: (0, C.jsxs)(`tr`, {
                    className: `border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 font-bold`,
                    children: [
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-start`,
                        children: `رسید نمبر`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: `نوعیت (Type)`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: `مد / کیٹیگری`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: `پارٹی کا نام`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: `تفصیل`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: `تاریخ`,
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-end`,
                        children: `رقم (Amount)`,
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)(`tbody`, {
                  className: `divide-y divide-stone-100 dark:divide-stone-800`,
                  children: E.map((e) =>
                    (0, C.jsxs)(
                      `tr`,
                      {
                        className: `hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors`,
                        children: [
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-4 font-mono font-bold text-stone-600 dark:text-stone-300`,
                            children: e.receiptNo || `—`,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3`,
                            children: (0, C.jsx)(`span`, {
                              className: `inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-full text-[11px] ${e.type === `Income` ? `bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300` : `bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300`}`,
                              children:
                                e.type === `Income` ? `آمدنی (+)` : `خرچ (-)`,
                            }),
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 font-semibold text-stone-900 dark:text-stone-100`,
                            children: e.category,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 text-stone-700 dark:text-stone-300 font-medium`,
                            children: e.partyName || `—`,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 text-stone-500 max-w-xs truncate`,
                            children: e.description || `—`,
                          }),
                          (0, C.jsx)(`td`, {
                            className: `py-3 px-3 font-mono text-[11px] text-stone-500`,
                            children: e.date,
                          }),
                          (0, C.jsxs)(`td`, {
                            className: `py-3 px-4 text-end font-extrabold text-sm ${e.type === `Income` ? `text-emerald-600 dark:text-emerald-400` : `text-rose-600 dark:text-rose-400`}`,
                            children: [
                              e.type === `Income` ? `+` : `-`,
                              z(e.amount),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
        }),
        o &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `نیا لین دین درج کریں (New Transaction)`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => s(!1),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: x,
                  className: `p-6 space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `قسم (Type) *`,
                            }),
                            (0, C.jsxs)(`select`, {
                              value: c,
                              onChange: (e) => {
                                let t = e.target.value;
                                (l(t), d(t === `Income` ? y[0] : b[0]));
                              },
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: [
                                (0, C.jsx)(`option`, {
                                  value: `Income`,
                                  children: `آمدنی / چندہ (Income)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Expense`,
                                  children: `اخراجات / بلز (Expense)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `مد / کیٹیگری *`,
                            }),
                            (0, C.jsx)(`select`, {
                              value: u,
                              onChange: (e) => d(e.target.value),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: (c === `Income` ? y : b).map((e) =>
                                (0, C.jsx)(
                                  `option`,
                                  { value: e, children: e },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `پارٹی کا نام (جس سے لیا / جسے دیا) *`,
                        }),
                        (0, C.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          value: m,
                          onChange: (e) => h(e.target.value),
                          placeholder: `مثلاً: حاجی محمد اسماعیل صاحب / واپڈا بل`,
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `رقم (PKR) *`,
                        }),
                        (0, C.jsx)(`input`, {
                          type: `number`,
                          required: !0,
                          value: f,
                          onChange: (e) => p(Number(e.target.value)),
                          className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `تفصیل / مقصد (Description)`,
                        }),
                        (0, C.jsx)(`textarea`, {
                          rows: 2,
                          value: g,
                          onChange: (e) => v(e.target.value),
                          placeholder: `لین دین کی مختصر تفصیل لکھیں...`,
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => s(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: `منسوخ کریں`,
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: `محفوظ کریں (Save Transaction)`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Nt = o((e, t) => {
    t.exports = function () {
      return (
        typeof Promise == `function` &&
        Promise.prototype &&
        Promise.prototype.then
      );
    };
  }),
  Pt = o((e) => {
    var t,
      n = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
    ((e.getSymbolSize = function (e) {
      if (!e) throw Error(`"version" cannot be null or undefined`);
      if (e < 1 || e > 40)
        throw Error(`"version" should be in range from 1 to 40`);
      return e * 4 + 17;
    }),
      (e.getSymbolTotalCodewords = function (e) {
        return n[e];
      }),
      (e.getBCHDigit = function (e) {
        let t = 0;
        for (; e !== 0;) (t++, (e >>>= 1));
        return t;
      }),
      (e.setToSJISFunction = function (e) {
        if (typeof e != `function`)
          throw Error(`"toSJISFunc" is not a valid function.`);
        t = e;
      }),
      (e.isKanjiModeEnabled = function () {
        return t !== void 0;
      }),
      (e.toSJIS = function (e) {
        return t(e);
      }));
  }),
  Ft = o((e) => {
    ((e.L = { bit: 1 }),
      (e.M = { bit: 0 }),
      (e.Q = { bit: 3 }),
      (e.H = { bit: 2 }));
    function t(t) {
      if (typeof t != `string`) throw Error(`Param is not a string`);
      switch (t.toLowerCase()) {
        case `l`:
        case `low`:
          return e.L;
        case `m`:
        case `medium`:
          return e.M;
        case `q`:
        case `quartile`:
          return e.Q;
        case `h`:
        case `high`:
          return e.H;
        default:
          throw Error(`Unknown EC Level: ` + t);
      }
    }
    ((e.isValid = function (e) {
      return e && e.bit !== void 0 && e.bit >= 0 && e.bit < 4;
    }),
      (e.from = function (n, r) {
        if (e.isValid(n)) return n;
        try {
          return t(n);
        } catch {
          return r;
        }
      }));
  }),
  It = o((e, t) => {
    function n() {
      ((this.buffer = []), (this.length = 0));
    }
    ((n.prototype = {
      get: function (e) {
        let t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
      },
      put: function (e, t) {
        for (let n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        let t = Math.floor(this.length / 8);
        (this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (t.exports = n));
  }),
  Lt = o((e, t) => {
    function n(e) {
      if (!e || e < 1)
        throw Error(`BitMatrix size must be defined and greater than 0`);
      ((this.size = e),
        (this.data = new Uint8Array(e * e)),
        (this.reservedBit = new Uint8Array(e * e)));
    }
    ((n.prototype.set = function (e, t, n, r) {
      let i = e * this.size + t;
      ((this.data[i] = n), r && (this.reservedBit[i] = !0));
    }),
      (n.prototype.get = function (e, t) {
        return this.data[e * this.size + t];
      }),
      (n.prototype.xor = function (e, t, n) {
        this.data[e * this.size + t] ^= n;
      }),
      (n.prototype.isReserved = function (e, t) {
        return this.reservedBit[e * this.size + t];
      }),
      (t.exports = n));
  }),
  Rt = o((e) => {
    var t = Pt().getSymbolSize;
    ((e.getRowColCoords = function (e) {
      if (e === 1) return [];
      let n = Math.floor(e / 7) + 2,
        r = t(e),
        i = r === 145 ? 26 : Math.ceil((r - 13) / (2 * n - 2)) * 2,
        a = [r - 7];
      for (let e = 1; e < n - 1; e++) a[e] = a[e - 1] - i;
      return (a.push(6), a.reverse());
    }),
      (e.getPositions = function (t) {
        let n = [],
          r = e.getRowColCoords(t),
          i = r.length;
        for (let e = 0; e < i; e++)
          for (let t = 0; t < i; t++)
            (e === 0 && t === 0) ||
              (e === 0 && t === i - 1) ||
              (e === i - 1 && t === 0) ||
              n.push([r[e], r[t]]);
        return n;
      }));
  }),
  zt = o((e) => {
    var t = Pt().getSymbolSize,
      n = 7;
    e.getPositions = function (e) {
      let r = t(e);
      return [
        [0, 0],
        [r - n, 0],
        [0, r - n],
      ];
    };
  }),
  Bt = o((e) => {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7,
    };
    var t = { N1: 3, N2: 3, N3: 40, N4: 10 };
    ((e.isValid = function (e) {
      return e != null && e !== `` && !isNaN(e) && e >= 0 && e <= 7;
    }),
      (e.from = function (t) {
        return e.isValid(t) ? parseInt(t, 10) : void 0;
      }),
      (e.getPenaltyN1 = function (e) {
        let n = e.size,
          r = 0,
          i = 0,
          a = 0,
          o = null,
          s = null;
        for (let c = 0; c < n; c++) {
          ((i = a = 0), (o = s = null));
          for (let l = 0; l < n; l++) {
            let n = e.get(c, l);
            (n === o
              ? i++
              : (i >= 5 && (r += t.N1 + (i - 5)), (o = n), (i = 1)),
              (n = e.get(l, c)),
              n === s
                ? a++
                : (a >= 5 && (r += t.N1 + (a - 5)), (s = n), (a = 1)));
          }
          (i >= 5 && (r += t.N1 + (i - 5)), a >= 5 && (r += t.N1 + (a - 5)));
        }
        return r;
      }),
      (e.getPenaltyN2 = function (e) {
        let n = e.size,
          r = 0;
        for (let t = 0; t < n - 1; t++)
          for (let i = 0; i < n - 1; i++) {
            let n =
              e.get(t, i) +
              e.get(t, i + 1) +
              e.get(t + 1, i) +
              e.get(t + 1, i + 1);
            (n === 4 || n === 0) && r++;
          }
        return r * t.N2;
      }),
      (e.getPenaltyN3 = function (e) {
        let n = e.size,
          r = 0,
          i = 0,
          a = 0;
        for (let t = 0; t < n; t++) {
          i = a = 0;
          for (let o = 0; o < n; o++)
            ((i = ((i << 1) & 2047) | e.get(t, o)),
              o >= 10 && (i === 1488 || i === 93) && r++,
              (a = ((a << 1) & 2047) | e.get(o, t)),
              o >= 10 && (a === 1488 || a === 93) && r++);
        }
        return r * t.N3;
      }),
      (e.getPenaltyN4 = function (e) {
        let n = 0,
          r = e.data.length;
        for (let t = 0; t < r; t++) n += e.data[t];
        return Math.abs(Math.ceil((n * 100) / r / 5) - 10) * t.N4;
      }));
    function n(t, n, r) {
      switch (t) {
        case e.Patterns.PATTERN000:
          return (n + r) % 2 == 0;
        case e.Patterns.PATTERN001:
          return n % 2 == 0;
        case e.Patterns.PATTERN010:
          return r % 3 == 0;
        case e.Patterns.PATTERN011:
          return (n + r) % 3 == 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
        case e.Patterns.PATTERN101:
          return ((n * r) % 2) + ((n * r) % 3) == 0;
        case e.Patterns.PATTERN110:
          return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
        case e.Patterns.PATTERN111:
          return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
        default:
          throw Error(`bad maskPattern:` + t);
      }
    }
    ((e.applyMask = function (e, t) {
      let r = t.size;
      for (let i = 0; i < r; i++)
        for (let a = 0; a < r; a++)
          t.isReserved(a, i) || t.xor(a, i, n(e, a, i));
    }),
      (e.getBestMask = function (t, n) {
        let r = Object.keys(e.Patterns).length,
          i = 0,
          a = 1 / 0;
        for (let o = 0; o < r; o++) {
          (n(o), e.applyMask(o, t));
          let r =
            e.getPenaltyN1(t) +
            e.getPenaltyN2(t) +
            e.getPenaltyN3(t) +
            e.getPenaltyN4(t);
          (e.applyMask(o, t), r < a && ((a = r), (i = o)));
        }
        return i;
      }));
  }),
  Vt = o((e) => {
    var t = Ft(),
      n = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4,
        2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10,
        11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16,
        19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17,
        23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37,
        12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31,
        43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63,
        20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49,
        68, 81,
      ],
      r = [
        7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
        72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
        160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104,
        198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408,
        480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224,
        416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750,
        900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360,
        700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812,
        1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440,
        1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680,
        1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950,
        2310, 750, 1372, 2040, 2430,
      ];
    ((e.getBlocksCount = function (e, r) {
      switch (r) {
        case t.L:
          return n[(e - 1) * 4 + 0];
        case t.M:
          return n[(e - 1) * 4 + 1];
        case t.Q:
          return n[(e - 1) * 4 + 2];
        case t.H:
          return n[(e - 1) * 4 + 3];
        default:
          return;
      }
    }),
      (e.getTotalCodewordsCount = function (e, n) {
        switch (n) {
          case t.L:
            return r[(e - 1) * 4 + 0];
          case t.M:
            return r[(e - 1) * 4 + 1];
          case t.Q:
            return r[(e - 1) * 4 + 2];
          case t.H:
            return r[(e - 1) * 4 + 3];
          default:
            return;
        }
      }));
  }),
  Ht = o((e) => {
    var t = new Uint8Array(512),
      n = new Uint8Array(256);
    ((function () {
      let e = 1;
      for (let r = 0; r < 255; r++)
        ((t[r] = e), (n[e] = r), (e <<= 1), e & 256 && (e ^= 285));
      for (let e = 255; e < 512; e++) t[e] = t[e - 255];
    })(),
      (e.log = function (e) {
        if (e < 1) throw Error(`log(` + e + `)`);
        return n[e];
      }),
      (e.exp = function (e) {
        return t[e];
      }),
      (e.mul = function (e, r) {
        return e === 0 || r === 0 ? 0 : t[n[e] + n[r]];
      }));
  }),
  Ut = o((e) => {
    var t = Ht();
    ((e.mul = function (e, n) {
      let r = new Uint8Array(e.length + n.length - 1);
      for (let i = 0; i < e.length; i++)
        for (let a = 0; a < n.length; a++) r[i + a] ^= t.mul(e[i], n[a]);
      return r;
    }),
      (e.mod = function (e, n) {
        let r = new Uint8Array(e);
        for (; r.length - n.length >= 0;) {
          let e = r[0];
          for (let i = 0; i < n.length; i++) r[i] ^= t.mul(n[i], e);
          let i = 0;
          for (; i < r.length && r[i] === 0;) i++;
          r = r.slice(i);
        }
        return r;
      }),
      (e.generateECPolynomial = function (n) {
        let r = new Uint8Array([1]);
        for (let i = 0; i < n; i++) r = e.mul(r, new Uint8Array([1, t.exp(i)]));
        return r;
      }));
  }),
  Wt = o((e, t) => {
    var n = Ut();
    function r(e) {
      ((this.genPoly = void 0),
        (this.degree = e),
        this.degree && this.initialize(this.degree));
    }
    ((r.prototype.initialize = function (e) {
      ((this.degree = e), (this.genPoly = n.generateECPolynomial(this.degree)));
    }),
      (r.prototype.encode = function (e) {
        if (!this.genPoly) throw Error(`Encoder not initialized`);
        let t = new Uint8Array(e.length + this.degree);
        t.set(e);
        let r = n.mod(t, this.genPoly),
          i = this.degree - r.length;
        if (i > 0) {
          let e = new Uint8Array(this.degree);
          return (e.set(r, i), e);
        }
        return r;
      }),
      (t.exports = r));
  }),
  Gt = o((e) => {
    e.isValid = function (e) {
      return !isNaN(e) && e >= 1 && e <= 40;
    };
  }),
  Kt = o((e) => {
    var t = `[0-9]+`,
      n = `[A-Z $%*+\\-./:]+`,
      r = `(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;
    r = r.replace(/u/g, `\\u`);
    var i =
      `(?:(?![A-Z0-9 $%*+\\-./:]|` +
      r +
      `)(?:.|[\r
]))+`;
    ((e.KANJI = new RegExp(r, `g`)),
      (e.BYTE_KANJI = RegExp(`[^A-Z0-9 $%*+\\-./:]+`, `g`)),
      (e.BYTE = new RegExp(i, `g`)),
      (e.NUMERIC = new RegExp(t, `g`)),
      (e.ALPHANUMERIC = new RegExp(n, `g`)));
    var a = RegExp(`^` + r + `$`),
      o = RegExp(`^[0-9]+$`),
      s = RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);
    ((e.testKanji = function (e) {
      return a.test(e);
    }),
      (e.testNumeric = function (e) {
        return o.test(e);
      }),
      (e.testAlphanumeric = function (e) {
        return s.test(e);
      }));
  }),
  qt = o((e) => {
    var t = Gt(),
      n = Kt();
    ((e.NUMERIC = { id: `Numeric`, bit: 1, ccBits: [10, 12, 14] }),
      (e.ALPHANUMERIC = { id: `Alphanumeric`, bit: 2, ccBits: [9, 11, 13] }),
      (e.BYTE = { id: `Byte`, bit: 4, ccBits: [8, 16, 16] }),
      (e.KANJI = { id: `Kanji`, bit: 8, ccBits: [8, 10, 12] }),
      (e.MIXED = { bit: -1 }),
      (e.getCharCountIndicator = function (e, n) {
        if (!e.ccBits) throw Error(`Invalid mode: ` + e);
        if (!t.isValid(n)) throw Error(`Invalid version: ` + n);
        return n >= 1 && n < 10
          ? e.ccBits[0]
          : n < 27
            ? e.ccBits[1]
            : e.ccBits[2];
      }),
      (e.getBestModeForData = function (t) {
        return n.testNumeric(t)
          ? e.NUMERIC
          : n.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : n.testKanji(t)
              ? e.KANJI
              : e.BYTE;
      }),
      (e.toString = function (e) {
        if (e && e.id) return e.id;
        throw Error(`Invalid mode`);
      }),
      (e.isValid = function (e) {
        return e && e.bit && e.ccBits;
      }));
    function r(t) {
      if (typeof t != `string`) throw Error(`Param is not a string`);
      switch (t.toLowerCase()) {
        case `numeric`:
          return e.NUMERIC;
        case `alphanumeric`:
          return e.ALPHANUMERIC;
        case `kanji`:
          return e.KANJI;
        case `byte`:
          return e.BYTE;
        default:
          throw Error(`Unknown mode: ` + t);
      }
    }
    e.from = function (t, n) {
      if (e.isValid(t)) return t;
      try {
        return r(t);
      } catch {
        return n;
      }
    };
  }),
  Jt = o((e) => {
    var t = Pt(),
      n = Vt(),
      r = Ft(),
      i = qt(),
      a = Gt(),
      o = 7973,
      s = t.getBCHDigit(o);
    function c(t, n, r) {
      for (let i = 1; i <= 40; i++) if (n <= e.getCapacity(i, r, t)) return i;
    }
    function l(e, t) {
      return i.getCharCountIndicator(e, t) + 4;
    }
    function u(e, t) {
      let n = 0;
      return (
        e.forEach(function (e) {
          let r = l(e.mode, t);
          n += r + e.getBitsLength();
        }),
        n
      );
    }
    function d(t, n) {
      for (let r = 1; r <= 40; r++)
        if (u(t, r) <= e.getCapacity(r, n, i.MIXED)) return r;
    }
    ((e.from = function (e, t) {
      return a.isValid(e) ? parseInt(e, 10) : t;
    }),
      (e.getCapacity = function (e, r, o) {
        if (!a.isValid(e)) throw Error(`Invalid QR Code version`);
        o === void 0 && (o = i.BYTE);
        let s =
          (t.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r)) * 8;
        if (o === i.MIXED) return s;
        let c = s - l(o, e);
        switch (o) {
          case i.NUMERIC:
            return Math.floor((c / 10) * 3);
          case i.ALPHANUMERIC:
            return Math.floor((c / 11) * 2);
          case i.KANJI:
            return Math.floor(c / 13);
          case i.BYTE:
          default:
            return Math.floor(c / 8);
        }
      }),
      (e.getBestVersionForData = function (e, t) {
        let n,
          i = r.from(t, r.M);
        if (Array.isArray(e)) {
          if (e.length > 1) return d(e, i);
          if (e.length === 0) return 1;
          n = e[0];
        } else n = e;
        return c(n.mode, n.getLength(), i);
      }),
      (e.getEncodedBits = function (e) {
        if (!a.isValid(e) || e < 7) throw Error(`Invalid QR Code version`);
        let n = e << 12;
        for (; t.getBCHDigit(n) - s >= 0;) n ^= o << (t.getBCHDigit(n) - s);
        return (e << 12) | n;
      }));
  }),
  Yt = o((e) => {
    var t = Pt(),
      n = 1335,
      r = 21522,
      i = t.getBCHDigit(n);
    e.getEncodedBits = function (e, a) {
      let o = (e.bit << 3) | a,
        s = o << 10;
      for (; t.getBCHDigit(s) - i >= 0;) s ^= n << (t.getBCHDigit(s) - i);
      return ((o << 10) | s) ^ r;
    };
  }),
  Xt = o((e, t) => {
    var n = qt();
    function r(e) {
      ((this.mode = n.NUMERIC), (this.data = e.toString()));
    }
    ((r.getBitsLength = function (e) {
      return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
    }),
      (r.prototype.getLength = function () {
        return this.data.length;
      }),
      (r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length);
      }),
      (r.prototype.write = function (e) {
        let t, n, r;
        for (t = 0; t + 3 <= this.data.length; t += 3)
          ((n = this.data.substr(t, 3)), (r = parseInt(n, 10)), e.put(r, 10));
        let i = this.data.length - t;
        i > 0 &&
          ((n = this.data.substr(t)),
          (r = parseInt(n, 10)),
          e.put(r, i * 3 + 1));
      }),
      (t.exports = r));
  }),
  Zt = o((e, t) => {
    var n = qt(),
      r = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);
    function i(e) {
      ((this.mode = n.ALPHANUMERIC), (this.data = e));
    }
    ((i.getBitsLength = function (e) {
      return 11 * Math.floor(e / 2) + (e % 2) * 6;
    }),
      (i.prototype.getLength = function () {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function (e) {
        let t = 0;
        for (; t + 2 <= this.data.length; t += 2) {
          let n = r.indexOf(this.data[t]) * 45;
          ((n += r.indexOf(this.data[t + 1])), e.put(n, 11));
        }
        this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6);
      }),
      (t.exports = i));
  }),
  Qt = o((e, t) => {
    var n = qt();
    function r(e) {
      ((this.mode = n.BYTE),
        (this.data =
          typeof e == `string`
            ? new TextEncoder().encode(e)
            : new Uint8Array(e)));
    }
    ((r.getBitsLength = function (e) {
      return e * 8;
    }),
      (r.prototype.getLength = function () {
        return this.data.length;
      }),
      (r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length);
      }),
      (r.prototype.write = function (e) {
        for (let t = 0, n = this.data.length; t < n; t++)
          e.put(this.data[t], 8);
      }),
      (t.exports = r));
  }),
  $t = o((e, t) => {
    var n = qt(),
      r = Pt();
    function i(e) {
      ((this.mode = n.KANJI), (this.data = e));
    }
    ((i.getBitsLength = function (e) {
      return e * 13;
    }),
      (i.prototype.getLength = function () {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function (e) {
        let t = 0;
        for (; t < this.data.length; t++) {
          let n = r.toSJIS(this.data[t]);
          if (n >= 33088 && n <= 40956) n -= 33088;
          else if (n >= 57408 && n <= 60351) n -= 49472;
          else
            throw Error(
              `Invalid SJIS character: ` +
                this.data[t] +
                `
Make sure your charset is UTF-8`,
            );
          ((n = ((n >>> 8) & 255) * 192 + (n & 255)), e.put(n, 13));
        }
      }),
      (t.exports = i));
  }),
  en = o((e, t) => {
    var n = {
      single_source_shortest_paths: function (e, t, r) {
        var i = {},
          a = {};
        a[t] = 0;
        var o = n.PriorityQueue.make();
        o.push(t, 0);
        for (var s, c, l, u, d, f, p, m, h; !o.empty();)
          for (l in ((s = o.pop()),
          (c = s.value),
          (u = s.cost),
          (d = e[c] || {}),
          d))
            d.hasOwnProperty(l) &&
              ((f = d[l]),
              (p = u + f),
              (m = a[l]),
              (h = a[l] === void 0),
              (h || m > p) && ((a[l] = p), o.push(l, p), (i[l] = c)));
        if (r !== void 0 && a[r] === void 0) {
          var g = [`Could not find a path from `, t, ` to `, r, `.`].join(``);
          throw Error(g);
        }
        return i;
      },
      extract_shortest_path_from_predecessor_list: function (e, t) {
        for (var n = [], r = t; r;) (n.push(r), e[r], (r = e[r]));
        return (n.reverse(), n);
      },
      find_path: function (e, t, r) {
        var i = n.single_source_shortest_paths(e, t, r);
        return n.extract_shortest_path_from_predecessor_list(i, r);
      },
      PriorityQueue: {
        make: function (e) {
          var t = n.PriorityQueue,
            r = {},
            i;
          for (i in ((e ||= {}), t)) t.hasOwnProperty(i) && (r[i] = t[i]);
          return ((r.queue = []), (r.sorter = e.sorter || t.default_sorter), r);
        },
        default_sorter: function (e, t) {
          return e.cost - t.cost;
        },
        push: function (e, t) {
          var n = { value: e, cost: t };
          (this.queue.push(n), this.queue.sort(this.sorter));
        },
        pop: function () {
          return this.queue.shift();
        },
        empty: function () {
          return this.queue.length === 0;
        },
      },
    };
    t !== void 0 && (t.exports = n);
  }),
  tn = o((e) => {
    var t = qt(),
      n = Xt(),
      r = Zt(),
      i = Qt(),
      a = $t(),
      o = Kt(),
      s = Pt(),
      c = en();
    function l(e) {
      return unescape(encodeURIComponent(e)).length;
    }
    function u(e, t, n) {
      let r = [],
        i;
      for (; (i = e.exec(n)) !== null;)
        r.push({ data: i[0], index: i.index, mode: t, length: i[0].length });
      return r;
    }
    function d(e) {
      let n = u(o.NUMERIC, t.NUMERIC, e),
        r = u(o.ALPHANUMERIC, t.ALPHANUMERIC, e),
        i,
        a;
      return (
        s.isKanjiModeEnabled()
          ? ((i = u(o.BYTE, t.BYTE, e)), (a = u(o.KANJI, t.KANJI, e)))
          : ((i = u(o.BYTE_KANJI, t.BYTE, e)), (a = [])),
        n
          .concat(r, i, a)
          .sort(function (e, t) {
            return e.index - t.index;
          })
          .map(function (e) {
            return { data: e.data, mode: e.mode, length: e.length };
          })
      );
    }
    function f(e, o) {
      switch (o) {
        case t.NUMERIC:
          return n.getBitsLength(e);
        case t.ALPHANUMERIC:
          return r.getBitsLength(e);
        case t.KANJI:
          return a.getBitsLength(e);
        case t.BYTE:
          return i.getBitsLength(e);
      }
    }
    function p(e) {
      return e.reduce(function (e, t) {
        let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
        return n && n.mode === t.mode
          ? ((e[e.length - 1].data += t.data), e)
          : (e.push(t), e);
      }, []);
    }
    function m(e) {
      let n = [];
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        switch (i.mode) {
          case t.NUMERIC:
            n.push([
              i,
              { data: i.data, mode: t.ALPHANUMERIC, length: i.length },
              { data: i.data, mode: t.BYTE, length: i.length },
            ]);
            break;
          case t.ALPHANUMERIC:
            n.push([i, { data: i.data, mode: t.BYTE, length: i.length }]);
            break;
          case t.KANJI:
            n.push([i, { data: i.data, mode: t.BYTE, length: l(i.data) }]);
            break;
          case t.BYTE:
            n.push([{ data: i.data, mode: t.BYTE, length: l(i.data) }]);
        }
      }
      return n;
    }
    function h(e, n) {
      let r = {},
        i = { start: {} },
        a = [`start`];
      for (let o = 0; o < e.length; o++) {
        let s = e[o],
          c = [];
        for (let e = 0; e < s.length; e++) {
          let l = s[e],
            u = `` + o + e;
          (c.push(u), (r[u] = { node: l, lastCount: 0 }), (i[u] = {}));
          for (let e = 0; e < a.length; e++) {
            let o = a[e];
            r[o] && r[o].node.mode === l.mode
              ? ((i[o][u] =
                  f(r[o].lastCount + l.length, l.mode) -
                  f(r[o].lastCount, l.mode)),
                (r[o].lastCount += l.length))
              : (r[o] && (r[o].lastCount = l.length),
                (i[o][u] =
                  f(l.length, l.mode) +
                  4 +
                  t.getCharCountIndicator(l.mode, n)));
          }
        }
        a = c;
      }
      for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
      return { map: i, table: r };
    }
    function g(e, o) {
      let c,
        l = t.getBestModeForData(e);
      if (((c = t.from(o, l)), c !== t.BYTE && c.bit < l.bit))
        throw Error(
          `"` +
            e +
            `" cannot be encoded with mode ` +
            t.toString(c) +
            `.
 Suggested mode is: ` +
            t.toString(l),
        );
      switch ((c === t.KANJI && !s.isKanjiModeEnabled() && (c = t.BYTE), c)) {
        case t.NUMERIC:
          return new n(e);
        case t.ALPHANUMERIC:
          return new r(e);
        case t.KANJI:
          return new a(e);
        case t.BYTE:
          return new i(e);
      }
    }
    ((e.fromArray = function (e) {
      return e.reduce(function (e, t) {
        return (
          typeof t == `string`
            ? e.push(g(t, null))
            : t.data && e.push(g(t.data, t.mode)),
          e
        );
      }, []);
    }),
      (e.fromString = function (t, n) {
        let r = h(m(d(t, s.isKanjiModeEnabled())), n),
          i = c.find_path(r.map, `start`, `end`),
          a = [];
        for (let e = 1; e < i.length - 1; e++) a.push(r.table[i[e]].node);
        return e.fromArray(p(a));
      }),
      (e.rawSplit = function (t) {
        return e.fromArray(d(t, s.isKanjiModeEnabled()));
      }));
  }),
  nn = o((e) => {
    var t = Pt(),
      n = Ft(),
      r = It(),
      i = Lt(),
      a = Rt(),
      o = zt(),
      s = Bt(),
      c = Vt(),
      l = Wt(),
      u = Jt(),
      d = Yt(),
      f = qt(),
      p = tn();
    function m(e, t) {
      let n = e.size,
        r = o.getPositions(t);
      for (let t = 0; t < r.length; t++) {
        let i = r[t][0],
          a = r[t][1];
        for (let t = -1; t <= 7; t++)
          if (!(i + t <= -1 || n <= i + t))
            for (let r = -1; r <= 7; r++)
              a + r <= -1 ||
                n <= a + r ||
                ((t >= 0 && t <= 6 && (r === 0 || r === 6)) ||
                (r >= 0 && r <= 6 && (t === 0 || t === 6)) ||
                (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                  ? e.set(i + t, a + r, !0, !0)
                  : e.set(i + t, a + r, !1, !0));
      }
    }
    function h(e) {
      let t = e.size;
      for (let n = 8; n < t - 8; n++) {
        let t = n % 2 == 0;
        (e.set(n, 6, t, !0), e.set(6, n, t, !0));
      }
    }
    function g(e, t) {
      let n = a.getPositions(t);
      for (let t = 0; t < n.length; t++) {
        let r = n[t][0],
          i = n[t][1];
        for (let t = -2; t <= 2; t++)
          for (let n = -2; n <= 2; n++)
            t === -2 || t === 2 || n === -2 || n === 2 || (t === 0 && n === 0)
              ? e.set(r + t, i + n, !0, !0)
              : e.set(r + t, i + n, !1, !0);
      }
    }
    function _(e, t) {
      let n = e.size,
        r = u.getEncodedBits(t),
        i,
        a,
        o;
      for (let t = 0; t < 18; t++)
        ((i = Math.floor(t / 3)),
          (a = (t % 3) + n - 8 - 3),
          (o = ((r >> t) & 1) == 1),
          e.set(i, a, o, !0),
          e.set(a, i, o, !0));
    }
    function v(e, t, n) {
      let r = e.size,
        i = d.getEncodedBits(t, n),
        a,
        o;
      for (a = 0; a < 15; a++)
        ((o = ((i >> a) & 1) == 1),
          a < 6
            ? e.set(a, 8, o, !0)
            : a < 8
              ? e.set(a + 1, 8, o, !0)
              : e.set(r - 15 + a, 8, o, !0),
          a < 8
            ? e.set(8, r - a - 1, o, !0)
            : a < 9
              ? e.set(8, 15 - a - 1 + 1, o, !0)
              : e.set(8, 15 - a - 1, o, !0));
      e.set(r - 8, 8, 1, !0);
    }
    function y(e, t) {
      let n = e.size,
        r = -1,
        i = n - 1,
        a = 7,
        o = 0;
      for (let s = n - 1; s > 0; s -= 2)
        for (s === 6 && s--; ;) {
          for (let n = 0; n < 2; n++)
            if (!e.isReserved(i, s - n)) {
              let r = !1;
              (o < t.length && (r = ((t[o] >>> a) & 1) == 1),
                e.set(i, s - n, r),
                a--,
                a === -1 && (o++, (a = 7)));
            }
          if (((i += r), i < 0 || n <= i)) {
            ((i -= r), (r = -r));
            break;
          }
        }
    }
    function b(e, n, i) {
      let a = new r();
      i.forEach(function (t) {
        (a.put(t.mode.bit, 4),
          a.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
          t.write(a));
      });
      let o =
        (t.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, n)) * 8;
      for (
        a.getLengthInBits() + 4 <= o && a.put(0, 4);
        a.getLengthInBits() % 8 != 0;
      )
        a.putBit(0);
      let s = (o - a.getLengthInBits()) / 8;
      for (let e = 0; e < s; e++) a.put(e % 2 ? 17 : 236, 8);
      return x(a, e, n);
    }
    function x(e, n, r) {
      let i = t.getSymbolTotalCodewords(n),
        a = i - c.getTotalCodewordsCount(n, r),
        o = c.getBlocksCount(n, r),
        s = o - (i % o),
        u = Math.floor(i / o),
        d = Math.floor(a / o),
        f = d + 1,
        p = u - d,
        m = new l(p),
        h = 0,
        g = Array(o),
        _ = Array(o),
        v = 0,
        y = new Uint8Array(e.buffer);
      for (let e = 0; e < o; e++) {
        let t = e < s ? d : f;
        ((g[e] = y.slice(h, h + t)),
          (_[e] = m.encode(g[e])),
          (h += t),
          (v = Math.max(v, t)));
      }
      let b = new Uint8Array(i),
        x = 0,
        S,
        C;
      for (S = 0; S < v; S++)
        for (C = 0; C < o; C++) S < g[C].length && (b[x++] = g[C][S]);
      for (S = 0; S < p; S++) for (C = 0; C < o; C++) b[x++] = _[C][S];
      return b;
    }
    function S(e, n, r, a) {
      let o;
      if (Array.isArray(e)) o = p.fromArray(e);
      else if (typeof e == `string`) {
        let t = n;
        if (!t) {
          let n = p.rawSplit(e);
          t = u.getBestVersionForData(n, r);
        }
        o = p.fromString(e, t || 40);
      } else throw Error(`Invalid data`);
      let c = u.getBestVersionForData(o, r);
      if (!c)
        throw Error(`The amount of data is too big to be stored in a QR Code`);
      if (!n) n = c;
      else if (n < c)
        throw Error(
          `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
            c +
            `.
`,
        );
      let l = b(n, r, o),
        d = new i(t.getSymbolSize(n));
      return (
        m(d, n),
        h(d),
        g(d, n),
        v(d, r, 0),
        n >= 7 && _(d, n),
        y(d, l),
        isNaN(a) && (a = s.getBestMask(d, v.bind(null, d, r))),
        s.applyMask(a, d),
        v(d, r, a),
        {
          modules: d,
          version: n,
          errorCorrectionLevel: r,
          maskPattern: a,
          segments: o,
        }
      );
    }
    e.create = function (e, r) {
      if (e === void 0 || e === ``) throw Error(`No input text`);
      let i = n.M,
        a,
        o;
      return (
        r !== void 0 &&
          ((i = n.from(r.errorCorrectionLevel, n.M)),
          (a = u.from(r.version)),
          (o = s.from(r.maskPattern)),
          r.toSJISFunc && t.setToSJISFunction(r.toSJISFunc)),
        S(e, a, i, o)
      );
    };
  }),
  rn = o((e) => {
    function t(e) {
      if ((typeof e == `number` && (e = e.toString()), typeof e != `string`))
        throw Error(`Color should be defined as hex string`);
      let t = e.slice().replace(`#`, ``).split(``);
      if (t.length < 3 || t.length === 5 || t.length > 8)
        throw Error(`Invalid hex color: ` + e);
      ((t.length === 3 || t.length === 4) &&
        (t = Array.prototype.concat.apply(
          [],
          t.map(function (e) {
            return [e, e];
          }),
        )),
        t.length === 6 && t.push(`F`, `F`));
      let n = parseInt(t.join(``), 16);
      return {
        r: (n >> 24) & 255,
        g: (n >> 16) & 255,
        b: (n >> 8) & 255,
        a: n & 255,
        hex: `#` + t.slice(0, 6).join(``),
      };
    }
    ((e.getOptions = function (e) {
      ((e ||= {}), e.color || (e.color = {}));
      let n =
          e.margin === void 0 || e.margin === null || e.margin < 0
            ? 4
            : e.margin,
        r = e.width && e.width >= 21 ? e.width : void 0,
        i = e.scale || 4;
      return {
        width: r,
        scale: r ? 4 : i,
        margin: n,
        color: {
          dark: t(e.color.dark || `#000000ff`),
          light: t(e.color.light || `#ffffffff`),
        },
        type: e.type,
        rendererOpts: e.rendererOpts || {},
      };
    }),
      (e.getScale = function (e, t) {
        return t.width && t.width >= e + t.margin * 2
          ? t.width / (e + t.margin * 2)
          : t.scale;
      }),
      (e.getImageWidth = function (t, n) {
        let r = e.getScale(t, n);
        return Math.floor((t + n.margin * 2) * r);
      }),
      (e.qrToImageData = function (t, n, r) {
        let i = n.modules.size,
          a = n.modules.data,
          o = e.getScale(i, r),
          s = Math.floor((i + r.margin * 2) * o),
          c = r.margin * o,
          l = [r.color.light, r.color.dark];
        for (let e = 0; e < s; e++)
          for (let n = 0; n < s; n++) {
            let u = (e * s + n) * 4,
              d = r.color.light;
            if (e >= c && n >= c && e < s - c && n < s - c) {
              let t = Math.floor((e - c) / o),
                r = Math.floor((n - c) / o);
              d = l[+!!a[t * i + r]];
            }
            ((t[u++] = d.r), (t[u++] = d.g), (t[u++] = d.b), (t[u] = d.a));
          }
      }));
  }),
  an = o((e) => {
    var t = rn();
    function n(e, t, n) {
      (e.clearRect(0, 0, t.width, t.height),
        (t.style ||= {}),
        (t.height = n),
        (t.width = n),
        (t.style.height = n + `px`),
        (t.style.width = n + `px`));
    }
    function r() {
      try {
        return document.createElement(`canvas`);
      } catch {
        throw Error(`You need to specify a canvas element`);
      }
    }
    ((e.render = function (e, i, a) {
      let o = a,
        s = i;
      (o === void 0 && (!i || !i.getContext) && ((o = i), (i = void 0)),
        i || (s = r()),
        (o = t.getOptions(o)));
      let c = t.getImageWidth(e.modules.size, o),
        l = s.getContext(`2d`),
        u = l.createImageData(c, c);
      return (
        t.qrToImageData(u.data, e, o),
        n(l, s, c),
        l.putImageData(u, 0, 0),
        s
      );
    }),
      (e.renderToDataURL = function (t, n, r) {
        let i = r;
        (i === void 0 && (!n || !n.getContext) && ((i = n), (n = void 0)),
          (i ||= {}));
        let a = e.render(t, n, i),
          o = i.type || `image/png`,
          s = i.rendererOpts || {};
        return a.toDataURL(o, s.quality);
      }));
  }),
  on = o((e) => {
    var t = rn();
    function n(e, t) {
      let n = e.a / 255,
        r = t + `="` + e.hex + `"`;
      return n < 1
        ? r + ` ` + t + `-opacity="` + n.toFixed(2).slice(1) + `"`
        : r;
    }
    function r(e, t, n) {
      let r = e + t;
      return (n !== void 0 && (r += ` ` + n), r);
    }
    function i(e, t, n) {
      let i = ``,
        a = 0,
        o = !1,
        s = 0;
      for (let c = 0; c < e.length; c++) {
        let l = Math.floor(c % t),
          u = Math.floor(c / t);
        (!l && !o && (o = !0),
          e[c]
            ? (s++,
              (c > 0 && l > 0 && e[c - 1]) ||
                ((i += o ? r(`M`, l + n, 0.5 + u + n) : r(`m`, a, 0)),
                (a = 0),
                (o = !1)),
              (l + 1 < t && e[c + 1]) || ((i += r(`h`, s)), (s = 0)))
            : a++);
      }
      return i;
    }
    e.render = function (e, r, a) {
      let o = t.getOptions(r),
        s = e.modules.size,
        c = e.modules.data,
        l = s + o.margin * 2,
        u = o.color.light.a
          ? `<path ` +
            n(o.color.light, `fill`) +
            ` d="M0 0h` +
            l +
            `v` +
            l +
            `H0z"/>`
          : ``,
        d =
          `<path ` +
          n(o.color.dark, `stroke`) +
          ` d="` +
          i(c, s, o.margin) +
          `"/>`,
        f = `viewBox="0 0 ` + l + ` ` + l + `"`,
        p =
          `<svg xmlns="http://www.w3.org/2000/svg" ` +
          (o.width ? `width="` + o.width + `" height="` + o.width + `" ` : ``) +
          f +
          ` shape-rendering="crispEdges">` +
          u +
          d +
          `</svg>
`;
      return (typeof a == `function` && a(null, p), p);
    };
  }),
  sn = c(
    o((e) => {
      var t = Nt(),
        n = nn(),
        r = an(),
        i = on();
      function a(e, r, i, a, o) {
        let s = [].slice.call(arguments, 1),
          c = s.length,
          l = typeof s[c - 1] == `function`;
        if (!l && !t()) throw Error(`Callback required as last argument`);
        if (l) {
          if (c < 2) throw Error(`Too few arguments provided`);
          c === 2
            ? ((o = i), (i = r), (r = a = void 0))
            : c === 3 &&
              (r.getContext && o === void 0
                ? ((o = a), (a = void 0))
                : ((o = a), (a = i), (i = r), (r = void 0)));
        } else {
          if (c < 1) throw Error(`Too few arguments provided`);
          return (
            c === 1
              ? ((i = r), (r = a = void 0))
              : c === 2 && !r.getContext && ((a = i), (i = r), (r = void 0)),
            new Promise(function (t, o) {
              try {
                t(e(n.create(i, a), r, a));
              } catch (e) {
                o(e);
              }
            })
          );
        }
        try {
          let t = n.create(i, a);
          o(null, e(t, r, a));
        } catch (e) {
          o(e);
        }
      }
      ((e.create = n.create),
        (e.toCanvas = a.bind(null, r.render)),
        (e.toDataURL = a.bind(null, r.renderToDataURL)),
        (e.toString = a.bind(null, function (e, t, n) {
          return i.render(e, n);
        })));
    })(),
    1,
  ),
  cn = `ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`;
function ln(e) {
  let t = e.toUpperCase().replace(/[\s=-]/g, ``),
    n = 0,
    r = 0,
    i = 0,
    a = new Uint8Array(Math.floor((t.length * 5) / 8));
  for (let e = 0; e < t.length; e++) {
    let o = cn.indexOf(t[e]);
    o !== -1 &&
      ((r = (r << 5) | o),
      (n += 5),
      n >= 8 && ((a[i++] = (r >>> (n - 8)) & 255), (n -= 8)));
  }
  return a;
}
function un(e) {
  let t = e.toUpperCase().replace(/[\s-]/g, ``);
  return t.match(/.{1,4}/g)?.join(` `) || t;
}
async function dn(e, t = 30, n) {
  let r = ln(e),
    i = n === void 0 ? Math.floor(Date.now() / 1e3) : n,
    a = Math.floor(i / t),
    o = new ArrayBuffer(8);
  new DataView(o).setBigUint64(0, BigInt(a), !1);
  let s = await window.crypto.subtle.importKey(
      `raw`,
      r,
      { name: `HMAC`, hash: { name: `SHA-1` } },
      !1,
      [`sign`],
    ),
    c = await window.crypto.subtle.sign(`HMAC`, s, o),
    l = new Uint8Array(c),
    u = l[l.length - 1] & 15;
  return (
    (((l[u] & 127) << 24) |
      ((l[u + 1] & 255) << 16) |
      ((l[u + 2] & 255) << 8) |
      (l[u + 3] & 255)) %
    1e6
  )
    .toString()
    .padStart(6, `0`);
}
async function fn(e, t, n, r = 1) {
  let i = e.replace(/[\s-]/g, ``).trim();
  if (n) {
    let e = n.replace(/[\s-]/g, ``).trim();
    if (i.toUpperCase() === e.toUpperCase())
      return { valid: !0, reason: `backup` };
  }
  if (i.length !== 6 || !/^\d{6}$/.test(i)) return { valid: !1 };
  let a = Math.floor(Date.now() / 1e3);
  for (let e = -r; e <= r; e++)
    if ((await dn(t, 30, a + e * 30)) === i)
      return { valid: !0, reason: `totp` };
  return { valid: !1 };
}
function pn(e, t = `Madrasa Taleem Portal`, n) {
  let r = n.toUpperCase().replace(/[\s-]/g, ``);
  return `otpauth://totp/${encodeURIComponent(t)}:${encodeURIComponent(e)}?secret=${r}&issuer=${encodeURIComponent(t)}&algorithm=SHA1&digits=6&period=30`;
}
async function mn(e) {
  try {
    return await sn.toDataURL(e, {
      width: 220,
      margin: 1.5,
      color: { dark: `#064E3B`, light: `#FFFFFF` },
    });
  } catch (e) {
    return (console.error(`Failed to generate QR code data URL`, e), ``);
  }
}
var hn = ({
    teachers: e,
    classes: t,
    onAddTeacher: n,
    onUpdateTeacher: r,
    onDeleteTeacher: i,
  }) => {
    let [a, o] = (0, _.useState)(!1),
      [s, c] = (0, _.useState)(null),
      [l, u] = (0, _.useState)(null),
      [d, f] = (0, _.useState)(``),
      [p, m] = (0, _.useState)(!1),
      [h, g] = (0, _.useState)({
        employeeNo: `TCH-${String(e.length + 1).padStart(3, `0`)}`,
        fullName: ``,
        fullNameUrdu: ``,
        cnic: ``,
        designation: `Hifz Teacher`,
        subjectSpecialty: `Hifz & Tajweed`,
        qualification: `Shahadat-ul-Alimiyyah`,
        joiningDate: new Date().toISOString().split(`T`)[0],
        monthlySalary: 35e3,
        phone: ``,
        bankAccount: ``,
        status: `Active`,
        username: ``,
        password: ``,
        assignedClassId: t[0]?.id || 1,
        twoFactorEnabled: !1,
        twoFactorSecret: `JBSWY3DPEHPK3PXP`,
        twoFactorBackupCode: `87654321`,
      }),
      v = () => {
        c(null);
        let n = e.length + 1;
        (g({
          employeeNo: `TCH-${String(n).padStart(3, `0`)}`,
          fullName: ``,
          fullNameUrdu: ``,
          cnic: ``,
          designation: `Hifz Teacher`,
          subjectSpecialty: `Hifz & Tajweed`,
          qualification: `Shahadat-ul-Alimiyyah`,
          joiningDate: new Date().toISOString().split(`T`)[0],
          monthlySalary: 35e3,
          phone: ``,
          bankAccount: ``,
          status: `Active`,
          username: `teacher${n}`,
          password: `teacher@123`,
          assignedClassId: t[0]?.id || 1,
          twoFactorEnabled: !1,
          twoFactorSecret: `JBSWY3DPEHPK3PXP`,
          twoFactorBackupCode: `87654321`,
        }),
          o(!0));
      },
      y = (e) => {
        c(e);
        let n = t.find((t) => t.teacherId === e.id);
        (g({
          employeeNo: e.employeeNo,
          fullName: e.fullName || ``,
          fullNameUrdu: e.fullNameUrdu || ``,
          cnic: e.cnic || ``,
          designation: e.designation || ``,
          subjectSpecialty: e.subjectSpecialty || ``,
          qualification: e.qualification || ``,
          joiningDate: e.joiningDate,
          monthlySalary: e.monthlySalary,
          phone: e.phone || ``,
          bankAccount: e.bankAccount || ``,
          status: e.status,
          username: e.username || ``,
          password: e.password || ``,
          assignedClassId: n?.id || t[0]?.id || 1,
          twoFactorEnabled: e.twoFactorEnabled || !1,
          twoFactorSecret: e.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
          twoFactorBackupCode: e.twoFactorBackupCode || `87654321`,
        }),
          o(!0));
      };
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(He, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    `شعبۂ اساتذہ و معلمات (Teachers & Staff HR)`,
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: `تدریسی عملہ کے کوائف، تنخواہ، اسائن کردہ درجات اور ریکارڈ`,
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: v,
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(et, { className: `h-4 w-4` }),
                `نیا استاد شامل کریں (Add Teacher)`,
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: e.map((e) => {
            let n = t.filter((t) => t.teacherId === e.id);
            return (0, C.jsxs)(
              `div`,
              {
                className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between`,
                children: [
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex items-start justify-between gap-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, C.jsx)(`div`, {
                                className: `h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-base flex items-center justify-center border border-emerald-300/40`,
                                children: e.fullNameUrdu
                                  ? e.fullNameUrdu.charAt(0)
                                  : `T`,
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsx)(`h3`, {
                                    className: `font-bold text-base text-stone-900 dark:text-stone-100`,
                                    children: e.fullNameUrdu || e.fullName,
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `text-xs font-semibold text-emerald-700 dark:text-emerald-400`,
                                    children: e.designation || `استاد`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsx)(`span`, {
                            className: `font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300`,
                            children: e.employeeNo,
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `space-y-2 text-xs pt-3 border-t border-stone-100 dark:border-stone-800 mt-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)(R, {
                                    className: `h-3.5 w-3.5 text-emerald-600`,
                                  }),
                                  `شناختی کارڈ (CNIC):`,
                                ],
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-mono font-bold text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded`,
                                children: e.cnic || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)(be, { className: `h-3.5 w-3.5` }),
                                  `تعلیمی قابلیت:`,
                                ],
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-semibold text-stone-900 dark:text-stone-100`,
                                children: e.qualification || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)(Se, { className: `h-3.5 w-3.5` }),
                                  `ماہانہ تنخواہ:`,
                                ],
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-emerald-700 dark:text-emerald-400`,
                                children: z(e.monthlySalary),
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)($e, { className: `h-3.5 w-3.5` }),
                                  `رابطہ نمبر:`,
                                ],
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-mono text-stone-800 dark:text-stone-200`,
                                children: e.phone || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)(Ge, {
                                    className: `h-3.5 w-3.5 text-indigo-500`,
                                  }),
                                  `لاگ ان اکاؤنٹ:`,
                                ],
                              }),
                              (0, C.jsxs)(`span`, {
                                className: `font-mono text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-200/70 dark:border-indigo-800/70`,
                                children: [
                                  e.username || `teacher`,
                                  ` / `,
                                  e.password || `••••••`,
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `flex items-center gap-1.5 text-stone-500`,
                                children: [
                                  (0, C.jsx)(R, {
                                    className: `h-3.5 w-3.5 text-emerald-600`,
                                  }),
                                  `2FA تصدیق (گوگل کوڈ):`,
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => {
                                      let t = !e.twoFactorEnabled;
                                      r(e.id, {
                                        twoFactorEnabled: t,
                                        twoFactorSecret:
                                          e.twoFactorSecret ||
                                          `JBSWY3DPEHPK3PXP`,
                                        twoFactorBackupCode:
                                          e.twoFactorBackupCode || `87654321`,
                                      });
                                    },
                                    className: `px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer border ${e.twoFactorEnabled ? `bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100` : `bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:bg-stone-200`}`,
                                    title: `کلک کر کے 2FA آن یا آف کریں`,
                                    children: e.twoFactorEnabled
                                      ? `✓ آن (Active)`
                                      : `✗ آف (Off)`,
                                  }),
                                  e.twoFactorEnabled &&
                                    (0, C.jsx)(`button`, {
                                      type: `button`,
                                      onClick: async () => {
                                        let t =
                                            e.twoFactorSecret ||
                                            `JBSWY3DPEHPK3PXP`,
                                          n = await mn(
                                            pn(
                                              e.username || e.employeeNo,
                                              `Madrasa Taleem Portal`,
                                              t,
                                            ),
                                          );
                                        (f(n), u(e));
                                      },
                                      className: `p-1 rounded bg-stone-100 hover:bg-emerald-50 dark:bg-stone-800 dark:hover:bg-emerald-950/60 text-stone-600 hover:text-emerald-600 transition-colors cursor-pointer`,
                                      title: `QR کوڈ اور سیکریٹ کی دیکھیں`,
                                      children: (0, C.jsx)(nt, {
                                        className: `h-3 w-3`,
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `pt-2`,
                        children: [
                          (0, C.jsx)(`span`, {
                            className: `text-[11px] font-semibold text-stone-500 block mb-1`,
                            children: `اسائن کردہ کلاسز:`,
                          }),
                          (0, C.jsx)(`div`, {
                            className: `flex flex-wrap gap-1.5`,
                            children:
                              n.length === 0
                                ? (0, C.jsx)(`span`, {
                                    className: `text-xs text-stone-400 italic`,
                                    children: `کوئی کلاس اسائن نہیں`,
                                  })
                                : n.map((e) =>
                                    (0, C.jsx)(
                                      `span`,
                                      {
                                        className: `px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold border border-emerald-200/50 dark:border-emerald-800/40`,
                                        children: e.nameUrdu || e.name,
                                      },
                                      e.id,
                                    ),
                                  ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-between items-center text-xs`,
                    children: [
                      (0, C.jsxs)(`span`, {
                        className: `text-[11px] text-stone-400`,
                        children: [`تاریخ شمولیت: `, e.joiningDate],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          (0, C.jsx)(`button`, {
                            onClick: () => y(e),
                            title: `ترمیم کریں`,
                            className: `p-1.5 rounded-lg bg-stone-100 hover:bg-emerald-50 dark:bg-stone-800 dark:hover:bg-emerald-950/50 text-stone-600 hover:text-emerald-600 dark:text-stone-400 dark:hover:text-emerald-300 transition-colors cursor-pointer`,
                            children: (0, C.jsx)(Qe, {
                              className: `h-3.5 w-3.5`,
                            }),
                          }),
                          i &&
                            (0, C.jsx)(`button`, {
                              onClick: () => {
                                confirm(
                                  `کیا آپ واقعی ${e.fullNameUrdu || e.fullName} کو حذف کرنا چاہتے ہیں؟`,
                                ) && i(e.id);
                              },
                              title: `حذف کریں`,
                              className: `p-1.5 rounded-lg bg-stone-100 hover:bg-rose-50 dark:bg-stone-800 dark:hover:bg-rose-950/50 text-stone-600 hover:text-rose-600 dark:text-stone-400 dark:hover:text-rose-400 transition-colors cursor-pointer`,
                              children: (0, C.jsx)(dt, {
                                className: `h-3.5 w-3.5`,
                              }),
                            }),
                          (0, C.jsx)(`span`, {
                            className: `px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold`,
                            children: e.status,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        a &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: s
                        ? `استاد کے کوائف میں ترمیم`
                        : `نئے استاد کا اندراج`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => o(!1),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: (t) => {
                    if ((t.preventDefault(), !h.fullNameUrdu && !h.fullName)) {
                      alert(`براہ کرم استاد کا نام درج کریں۔`);
                      return;
                    }
                    (s ? r(s.id, h) : n({ ...h, userId: e.length + 10 }),
                      o(!1));
                  },
                  className: `p-6 space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `نام (اردو) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: h.fullNameUrdu,
                              onChange: (e) =>
                                g({ ...h, fullNameUrdu: e.target.value }),
                              placeholder: `مثلاً: قاری محمد اسحاق`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `عہدہ / شعبہ *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: h.designation,
                              onChange: (e) =>
                                g({ ...h, designation: e.target.value }),
                              placeholder: `مثلاً: سینئر استاد حفظ`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `شناختی کارڈ نمبر (CNIC) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: h.cnic,
                              onChange: (e) =>
                                g({ ...h, cnic: e.target.value }),
                              placeholder: `54400-1234567-1`,
                              className: `w-full text-xs font-mono bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `تعلیمی قابلیت`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: h.qualification,
                              onChange: (e) =>
                                g({ ...h, qualification: e.target.value }),
                              placeholder: `شہادۃ العالمیہ، قراءت عشره`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ماہانہ تنخواہ (PKR) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              required: !0,
                              value: h.monthlySalary,
                              onChange: (e) =>
                                g({
                                  ...h,
                                  monthlySalary: Number(e.target.value),
                                }),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `فون نمبر *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: h.phone,
                              onChange: (e) =>
                                g({ ...h, phone: e.target.value }),
                              placeholder: `0333-1234567`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `بینک اکاؤنٹ تفصیل`,
                        }),
                        (0, C.jsx)(`input`, {
                          type: `text`,
                          value: h.bankAccount,
                          onChange: (e) =>
                            g({ ...h, bankAccount: e.target.value }),
                          placeholder: `HBL / Meezan Bank Acc`,
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `اسائن کردہ درجہ / کلاس (Assigned Class)`,
                        }),
                        (0, C.jsxs)(`select`, {
                          value: h.assignedClassId || ``,
                          onChange: (e) =>
                            g({
                              ...h,
                              assignedClassId: Number(e.target.value),
                            }),
                          className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          children: [
                            (0, C.jsx)(`option`, {
                              value: ``,
                              children: `-- کلاس منتخب کریں --`,
                            }),
                            t.map((e) =>
                              (0, C.jsxs)(
                                `option`,
                                {
                                  value: e.id,
                                  children: [
                                    e.nameUrdu || e.name,
                                    ` (`,
                                    e.department || `عام`,
                                    `)`,
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60 space-y-2.5`,
                      children: [
                        (0, C.jsxs)(`span`, {
                          className: `text-[11px] font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5`,
                          children: [
                            (0, C.jsx)(Ge, {
                              className: `h-3.5 w-3.5 text-indigo-600`,
                            }),
                            `ٹیچر پورٹل لاگ ان معلومات (Portal Login Account)`,
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          className: `grid grid-cols-2 gap-3`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              children: [
                                (0, C.jsx)(`label`, {
                                  className: `block text-[10px] font-semibold text-stone-600 dark:text-stone-400 mb-1`,
                                  children: `یوزر نیم (Username) *`,
                                }),
                                (0, C.jsx)(`input`, {
                                  type: `text`,
                                  required: !0,
                                  value: h.username,
                                  onChange: (e) =>
                                    g({ ...h, username: e.target.value }),
                                  placeholder: `مثلاً: rashid`,
                                  className: `w-full text-xs font-mono bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-indigo-500`,
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`div`, {
                              children: [
                                (0, C.jsx)(`label`, {
                                  className: `block text-[10px] font-semibold text-stone-600 dark:text-stone-400 mb-1`,
                                  children: `پاس ورڈ (Password) *`,
                                }),
                                (0, C.jsx)(`input`, {
                                  type: `text`,
                                  required: !0,
                                  value: h.password,
                                  onChange: (e) =>
                                    g({ ...h, password: e.target.value }),
                                  placeholder: `مثلاً: teacher@123`,
                                  className: `w-full text-xs font-mono bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-indigo-500`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, C.jsxs)(`div`, {
                              children: [
                                (0, C.jsxs)(`span`, {
                                  className: `text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5`,
                                  children: [
                                    (0, C.jsx)(R, {
                                      className: `h-3.5 w-3.5 text-emerald-600`,
                                    }),
                                    `ٹو فیکٹر سیکیورٹی (Google Authenticator 2FA)`,
                                  ],
                                }),
                                (0, C.jsx)(`p`, {
                                  className: `text-[10px] text-stone-500 dark:text-stone-400`,
                                  children: `اختیاری (Optional): لاگ ان پر 6 ہندسوں کا گوگل کوڈ لازمی کرنا`,
                                }),
                              ],
                            }),
                            (0, C.jsx)(`button`, {
                              type: `button`,
                              onClick: () =>
                                g({
                                  ...h,
                                  twoFactorEnabled: !h.twoFactorEnabled,
                                }),
                              className: `px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${h.twoFactorEnabled ? `bg-emerald-600 text-white shadow-xs` : `bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300`}`,
                              children: h.twoFactorEnabled
                                ? `آن (Active)`
                                : `آف (Off)`,
                            }),
                          ],
                        }),
                        h.twoFactorEnabled &&
                          (0, C.jsxs)(`p`, {
                            className: `text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800`,
                            children: [
                              `استاد کو لاگ ان کے وقت Google Authenticator سے 6 ہندسوں کا کوڈ درج کرنا ہوگا۔ ہنگامی بیک اپ کوڈ: `,
                              (0, C.jsx)(`span`, {
                                className: `font-mono font-bold`,
                                children: `87654321`,
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => o(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: `منسوخ کریں`,
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: `محفوظ کریں`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        l &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-stone-200 dark:border-stone-800 text-center p-6 space-y-4`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-right`,
                      children: [
                        (0, C.jsx)(`div`, {
                          className: `p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600`,
                          children: (0, C.jsx)(nt, { className: `h-5 w-5` }),
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`h4`, {
                              className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                              children: l.fullNameUrdu || l.fullName,
                            }),
                            (0, C.jsx)(`p`, {
                              className: `text-[10px] text-stone-500`,
                              children: `Google Authenticator 2FA سیٹ اپ`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => u(null),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-4 w-4` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`div`, {
                  className: `flex flex-col items-center justify-center p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700`,
                  children: [
                    d
                      ? (0, C.jsx)(`img`, {
                          src: d,
                          alt: `Teacher 2FA QR`,
                          className: `w-44 h-44 rounded-xl shadow-xs border border-white`,
                        })
                      : (0, C.jsx)(`div`, {
                          className: `w-44 h-44 flex items-center justify-center text-stone-400 text-xs`,
                          children: `QR کوڈ تیار ہو رہا ہے...`,
                        }),
                    (0, C.jsx)(`span`, {
                      className: `text-[10px] text-stone-500 mt-2`,
                      children: `Google Authenticator یا 2FAS ایپ سے اسکین کریں`,
                    }),
                  ],
                }),
                (0, C.jsxs)(`div`, {
                  className: `space-y-2 text-right`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-between`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`span`, {
                              className: `text-[10px] text-stone-400 block`,
                              children: `دستی خفیہ کی (Secret Key):`,
                            }),
                            (0, C.jsx)(`span`, {
                              className: `font-mono text-xs font-bold text-stone-900 dark:text-stone-100`,
                              children: un(
                                l.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
                              ),
                            }),
                          ],
                        }),
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => {
                            (navigator.clipboard.writeText(
                              l.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
                            ),
                              m(!0),
                              setTimeout(() => m(!1), 2e3));
                          },
                          className: `p-1.5 rounded-lg bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-200 hover:text-emerald-600 shadow-xs cursor-pointer`,
                          title: `سیکریٹ کاپی کریں`,
                          children: p
                            ? (0, C.jsx)(L, {
                                className: `h-3.5 w-3.5 text-emerald-600`,
                              })
                            : (0, C.jsx)(Ne, { className: `h-3.5 w-3.5` }),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-between text-[11px]`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `text-amber-800 dark:text-amber-300 font-medium`,
                          children: `ہنگامی بیک اپ کوڈ:`,
                        }),
                        (0, C.jsx)(`span`, {
                          className: `font-mono font-bold text-amber-900 dark:text-amber-200`,
                          children: l.twoFactorBackupCode || `87654321`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsx)(`button`, {
                  type: `button`,
                  onClick: () => u(null),
                  className: `w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs cursor-pointer`,
                  children: `ٹھیک ہے، بند کریں`,
                }),
              ],
            }),
          }),
      ],
    });
  },
  gn = ({ teachers: e, salaries: t, onAddSalary: n, onPrintSlip: r }) => {
    let { t: i, language: a } = E(),
      [o, s] = (0, _.useState)(new Date().getMonth() + 1),
      [c, l] = (0, _.useState)(new Date().getFullYear()),
      [u, d] = (0, _.useState)(!1),
      [f, p] = (0, _.useState)(e[0]?.id || 1),
      [m, h] = (0, _.useState)(35e3),
      [g, v] = (0, _.useState)(0),
      [y, b] = (0, _.useState)(0),
      [x, S] = (0, _.useState)(`Bank Transfer`),
      w = e.find((e) => e.id === f),
      T = m + g - y,
      D = () => {
        let t = e[0];
        (t && (p(t.id), h(t.monthlySalary)), v(0), b(0), d(!0));
      },
      O = (t) => {
        p(t);
        let n = e.find((e) => e.id === t);
        n && h(n.monthlySalary);
      },
      k = (e) => {
        if ((e.preventDefault(), !w)) return;
        let t = yt(`SLP`);
        (n({
          teacherId: w.id,
          teacherName: w.fullNameUrdu || w.fullName,
          employeeNo: w.employeeNo,
          periodYear: c,
          periodMonth: o,
          basic: m,
          allowances: g,
          deductions: y,
          netAmount: T,
          isPaid: !0,
          paymentDate: new Date().toISOString().split(`T`)[0],
          paymentMethod: x,
          slipNo: t,
        }),
          d(!1));
      },
      A = t.filter((e) => e.periodMonth === o && e.periodYear === c),
      ee = A.reduce((e, t) => e + t.netAmount, 0);
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(Pe, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    i(`SalariesTitle`),
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: i(`SalariesSubtitle`),
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: D,
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(et, { className: `h-4 w-4` }),
                i(`DisburseSalaryBtn`),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`label`, {
                  className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                  children: [i(`MonthYear`), `:`],
                }),
                (0, C.jsx)(`select`, {
                  value: o,
                  onChange: (e) => s(Number(e.target.value)),
                  className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                  children: [
                    `جنوری (January)`,
                    `فروری (February)`,
                    `مارچ (March)`,
                    `اپریل (April)`,
                    `مئی (May)`,
                    `جون (June)`,
                    `جولائی (July)`,
                    `اگست (August)`,
                    `ستمبر (September)`,
                    `اکتوبر (October)`,
                    `نومبر (November)`,
                    `دسمبر (December)`,
                  ].map((e, t) =>
                    (0, C.jsx)(`option`, { value: t + 1, children: e }, t + 1),
                  ),
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`label`, {
                  className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                  children: [i(`AcademicYear`), `:`],
                }),
                (0, C.jsxs)(`select`, {
                  value: c,
                  onChange: (e) => l(Number(e.target.value)),
                  className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                  children: [
                    (0, C.jsx)(`option`, { value: 2025, children: `2025` }),
                    (0, C.jsx)(`option`, { value: 2026, children: `2026` }),
                    (0, C.jsx)(`option`, { value: 2027, children: `2027` }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-between`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`span`, {
                  className: `text-xs font-semibold text-emerald-800 dark:text-emerald-300`,
                  children: [i(`SalariesTitle`), `:`],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-2xl font-black text-emerald-950 dark:text-emerald-100 mt-0.5`,
                  children: z(ee),
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `text-end`,
              children: [
                (0, C.jsxs)(`span`, {
                  className: `text-xs text-stone-500`,
                  children: [i(`SalarySlipTitle`), `:`],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-lg font-bold text-stone-800 dark:text-stone-200`,
                  children: A.length,
                }),
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden shadow-xs`,
          children: (0, C.jsx)(`div`, {
            className: `overflow-x-auto`,
            children: (0, C.jsxs)(`table`, {
              className: `w-full text-start text-xs border-collapse`,
              children: [
                (0, C.jsx)(`thead`, {
                  children: (0, C.jsxs)(`tr`, {
                    className: `border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 font-bold`,
                    children: [
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-start`,
                        children: i(`SlipNo`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`EmployeeName`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`BasicPay`),
                      }),
                      (0, C.jsxs)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: [i(`Allowances`), ` (+)`],
                      }),
                      (0, C.jsxs)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: [i(`Deductions`), ` (-)`],
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`NetAmountPaid`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-3 text-start`,
                        children: i(`PaymentMethod`),
                      }),
                      (0, C.jsx)(`th`, {
                        className: `py-3 px-4 text-end`,
                        children: i(`SalarySlipTitle`),
                      }),
                    ],
                  }),
                }),
                (0, C.jsx)(`tbody`, {
                  className: `divide-y divide-stone-100 dark:divide-stone-800`,
                  children:
                    A.length === 0
                      ? (0, C.jsx)(`tr`, {
                          children: (0, C.jsx)(`td`, {
                            colSpan: 8,
                            className: `py-8 text-center text-stone-400`,
                            children: `اس ماہ کے لیے ابھی تک کوئی تنخواہ ریکارڈ درج نہیں ہے۔`,
                          }),
                        })
                      : A.map((e) =>
                          (0, C.jsxs)(
                            `tr`,
                            {
                              className: `hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-4 font-mono font-bold text-emerald-700 dark:text-emerald-400`,
                                  children: e.slipNo,
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-3 px-3 font-bold text-stone-900 dark:text-stone-100`,
                                  children: [
                                    e.teacherName,
                                    ` (`,
                                    e.employeeNo,
                                    `)`,
                                  ],
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 text-stone-600 dark:text-stone-300`,
                                  children: z(e.basic),
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-3 px-3 text-emerald-600 font-medium`,
                                  children: [`+`, z(e.allowances)],
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-3 px-3 text-rose-600 font-medium`,
                                  children: [`-`, z(e.deductions)],
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 font-extrabold text-sm text-stone-900 dark:text-stone-100`,
                                  children: z(e.netAmount),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-3 font-medium text-stone-700 dark:text-stone-300`,
                                  children: e.paymentMethod || `Bank`,
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-3 px-4 text-end`,
                                  children: (0, C.jsxs)(`button`, {
                                    onClick: () => r(e),
                                    className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-xs cursor-pointer`,
                                    children: [
                                      (0, C.jsx)(tt, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                      `سلپ پرنٹ کریں`,
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
              ],
            }),
          }),
        }),
        u &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `ماہانہ تنخواہ ادائیگی (Salary Disbursement)`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => d(!1),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: k,
                  className: `p-6 space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `استاد / ملازم منتخب کریں *`,
                        }),
                        (0, C.jsx)(`select`, {
                          value: f,
                          onChange: (e) => O(Number(e.target.value)),
                          className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          children: e.map((e) =>
                            (0, C.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [
                                  e.fullNameUrdu || e.fullName,
                                  ` (`,
                                  e.designation,
                                  `) — تنخواہ: `,
                                  z(e.monthlySalary),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-3 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `بنیادی رقم (Basic)`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              required: !0,
                              value: m,
                              onChange: (e) => h(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `الاؤنسز (+)`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              value: g,
                              onChange: (e) => v(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-emerald-600 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `کٹوتیاں (-)`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              value: y,
                              onChange: (e) => b(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-rose-600 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex justify-between items-center`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `text-xs font-bold text-emerald-800 dark:text-emerald-300`,
                          children: `خالص قابلِ ادائیگی رقم (Net Payable):`,
                        }),
                        (0, C.jsx)(`span`, {
                          className: `text-lg font-black text-emerald-900 dark:text-emerald-100`,
                          children: z(T),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`label`, {
                          className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                          children: `طریقۂ ادائیگی`,
                        }),
                        (0, C.jsxs)(`select`, {
                          value: x,
                          onChange: (e) => S(e.target.value),
                          className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                          children: [
                            (0, C.jsx)(`option`, {
                              value: `Bank Transfer`,
                              children: `بینک ٹرانسفر (Bank Transfer)`,
                            }),
                            (0, C.jsx)(`option`, {
                              value: `Cash`,
                              children: `نقدی (Cash)`,
                            }),
                            (0, C.jsx)(`option`, {
                              value: `EasyPaisa / JazzCash`,
                              children: `ایزی پیسہ / جاز کیش`,
                            }),
                            (0, C.jsx)(`option`, {
                              value: `Cheque`,
                              children: `بینک چیک (Cheque)`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => d(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: `منسوخ کریں`,
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: `تنخواہ ادا و محفوظ کریں`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  _n = ({ classes: e, teachers: t, onAddClass: n }) => {
    let [r, i] = (0, _.useState)(!1),
      [a, o] = (0, _.useState)(``),
      [s, c] = (0, _.useState)(``),
      [l, u] = (0, _.useState)(`Hifz`),
      [d, f] = (0, _.useState)(t[0]?.id || 1),
      [p, m] = (0, _.useState)(3500),
      [h, g] = (0, _.useState)(30),
      [v, y] = (0, _.useState)(`08:00 – 11:00`);
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(we, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    `شعبہ جات و درجات (Classes & Departments)`,
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: `حفظ، ناظرہ، تجوید، حدیث، عربی اور عصری تعلیم کے تمام درجات کا انتظام`,
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: () => i(!0),
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(et, { className: `h-4 w-4` }),
                `نئی کلاس شامل کریں (Add Class)`,
              ],
            }),
          ],
        }),
        (0, C.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: e.map((e) =>
            (0, C.jsxs)(
              `div`,
              {
                className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-3.5 hover:border-emerald-500/40 transition-all flex flex-col justify-between`,
                children: [
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex items-start justify-between`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300`,
                                children: [`شعبہ: `, e.department || `عام`],
                              }),
                              (0, C.jsx)(`h3`, {
                                className: `text-lg font-bold text-stone-900 dark:text-stone-100 mt-1.5`,
                                children: e.nameUrdu || e.name,
                              }),
                              (0, C.jsx)(`p`, {
                                className: `text-xs text-stone-500`,
                                children: e.name,
                              }),
                            ],
                          }),
                          (0, C.jsx)(`div`, {
                            className: `p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300`,
                            children: (0, C.jsx)(we, { className: `h-5 w-5` }),
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `space-y-2 text-xs pt-3 border-t border-stone-100 dark:border-stone-800 mt-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `text-stone-500`,
                                children: `نگران استاد:`,
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-stone-900 dark:text-stone-100`,
                                children: e.teacherName || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `text-stone-500`,
                                children: `اوقات کار:`,
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-mono text-stone-800 dark:text-stone-200`,
                                children: e.schedule || `08:00 – 11:00`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center justify-between text-stone-600 dark:text-stone-300`,
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `text-stone-500`,
                                children: `گنجائش (Capacity):`,
                              }),
                              (0, C.jsxs)(`span`, {
                                className: `font-semibold text-stone-800 dark:text-stone-200`,
                                children: [e.capacity, ` طلباء`],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between`,
                    children: [
                      (0, C.jsx)(`span`, {
                        className: `text-xs text-stone-500`,
                        children: `ماہانہ فیس:`,
                      }),
                      (0, C.jsx)(`span`, {
                        className: `text-base font-black text-emerald-700 dark:text-emerald-400`,
                        children: z(e.feeAmount),
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
        }),
        r &&
          (0, C.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
            children: (0, C.jsxs)(`div`, {
              className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `نئی کلاس کا اندراج (Add Class)`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => i(!1),
                      className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsxs)(`form`, {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !a || !s)) {
                      alert(`براہ کرم کلاس کا نام درج کریں۔`);
                      return;
                    }
                    let r = t.find((e) => e.id === d);
                    (n({
                      name: a,
                      nameUrdu: s,
                      department: l,
                      teacherId: d,
                      teacherName: r ? r.fullNameUrdu || r.fullName : ``,
                      feeAmount: p,
                      capacity: h,
                      schedule: v,
                      isActive: !0,
                    }),
                      i(!1),
                      o(``),
                      c(``));
                  },
                  className: `p-6 space-y-4`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `کلاس کا نام (اردو) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: s,
                              onChange: (e) => c(e.target.value),
                              placeholder: `مثلاً: حفظ القرآن - اول`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `کلاس کا نام (انگلش) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              value: a,
                              onChange: (e) => o(e.target.value),
                              placeholder: `e.g. Hifz-1`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `شعبہ (Department)`,
                            }),
                            (0, C.jsxs)(`select`, {
                              value: l,
                              onChange: (e) => u(e.target.value),
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: [
                                (0, C.jsx)(`option`, {
                                  value: `Hifz`,
                                  children: `حفظ القرآن (Hifz)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Nazra`,
                                  children: `ناظرہ و تجوید (Nazra)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Hadith`,
                                  children: `درسِ نظامی / حدیث (Hadith)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `Arabic`,
                                  children: `عربی زبان و گرامر (Arabic)`,
                                }),
                                (0, C.jsx)(`option`, {
                                  value: `General`,
                                  children: `کمپیوٹر و انگلش (General)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `نگران استاد *`,
                            }),
                            (0, C.jsx)(`select`, {
                              value: d,
                              onChange: (e) => f(Number(e.target.value)),
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                              children: t.map((e) =>
                                (0, C.jsx)(
                                  `option`,
                                  {
                                    value: e.id,
                                    children: e.fullNameUrdu || e.fullName,
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `ماہانہ فیس (PKR) *`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `number`,
                              required: !0,
                              value: p,
                              onChange: (e) => m(Number(e.target.value)),
                              className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                        (0, C.jsxs)(`div`, {
                          children: [
                            (0, C.jsx)(`label`, {
                              className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                              children: `کلاس کے اوقات`,
                            }),
                            (0, C.jsx)(`input`, {
                              type: `text`,
                              value: v,
                              onChange: (e) => y(e.target.value),
                              placeholder: `07:00 – 10:00`,
                              className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                      children: [
                        (0, C.jsx)(`button`, {
                          type: `button`,
                          onClick: () => i(!1),
                          className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                          children: `منسوخ کریں`,
                        }),
                        (0, C.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                          children: `کلاس شامل کریں`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  vn = ({ students: e, classes: t, onPrintResult: n, role: r = `admin` }) => {
    let { t: i, language: a } = E(),
      [o, s] = (0, _.useState)(() => P.getExams()),
      [c, l] = (0, _.useState)(() => P.getResults()),
      u =
        r === `teacher`
          ? o.filter((e) => !e.classId || t.some((t) => t.id === e.classId))
          : o,
      [d, f] = (0, _.useState)(() => {
        let e = P.getExams(),
          n =
            r === `teacher`
              ? e.filter((e) => !e.classId || t.some((t) => t.id === e.classId))
              : e;
        return n.length > 0 ? n[0].id : 1;
      });
    (0, _.useEffect)(() => {
      u.length > 0 && !u.some((e) => e.id === d) && f(u[0].id);
    }, [u, d]);
    let [p, m] = (0, _.useState)(!1),
      [h, g] = (0, _.useState)(!1),
      [v, y] = (0, _.useState)(``),
      [b, x] = (0, _.useState)(``),
      [S, w] = (0, _.useState)(t[0]?.id || 1),
      [T, D] = (0, _.useState)(`Monthly`),
      [O, k] = (0, _.useState)(70),
      [A, ee] = (0, _.useState)(30),
      [te, ne] = (0, _.useState)(e[0]?.id || 1),
      [re, ie] = (0, _.useState)(65),
      [j, M] = (0, _.useState)(25),
      [ae, oe] = (0, _.useState)(`ماشاءاللہ شاندار کارکردگی`),
      N = u.find((e) => e.id === d) || u[0],
      se = c.filter((e) => e.examId === N?.id),
      F = N ? e.filter((e) => e.classId === N.classId) : e;
    return (
      (0, _.useEffect)(() => {
        F.length > 0 && !F.some((e) => e.id === te) && ne(F[0].id);
      }, [F, te]),
      (0, C.jsxs)(`div`, {
        className: `space-y-6 pb-20 lg:pb-8`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
            children: [
              (0, C.jsxs)(`div`, {
                children: [
                  (0, C.jsxs)(`h2`, {
                    className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                    children: [
                      (0, C.jsx)(Ve, {
                        className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                      }),
                      i(`ExamsTitle`),
                    ],
                  }),
                  (0, C.jsx)(`p`, {
                    className: `text-xs text-stone-500 dark:text-stone-400`,
                    children: i(`ExamsSubtitle`),
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `flex items-center gap-2.5`,
                children: [
                  (0, C.jsxs)(`button`, {
                    onClick: () => g(!0),
                    className: `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer`,
                    children: [
                      (0, C.jsx)(Ze, { className: `h-4 w-4` }),
                      i(`EnterMarksBtn`),
                    ],
                  }),
                  (0, C.jsxs)(`button`, {
                    onClick: () => m(!0),
                    className: `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer`,
                    children: [
                      (0, C.jsx)(et, { className: `h-4 w-4` }),
                      i(`NewExamBtn`),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, C.jsx)(`div`, {
            className: `flex gap-2 overflow-x-auto pb-2`,
            children:
              u.length === 0
                ? (0, C.jsx)(`p`, {
                    className: `text-xs text-stone-400 italic py-2`,
                    children: `—`,
                  })
                : u.map((e) =>
                    (0, C.jsxs)(
                      `button`,
                      {
                        onClick: () => f(e.id),
                        className: `px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${d === e.id ? `bg-emerald-600 text-white shadow-sm` : `bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100`}`,
                        children: [
                          a === `en` ? e.name : e.nameUrdu || e.name,
                          ` (`,
                          e.className,
                          `)`,
                        ],
                      },
                      e.id,
                    ),
                  ),
          }),
          N &&
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
              children: [
                (0, C.jsxs)(`div`, {
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300`,
                      children: N.examType,
                    }),
                    (0, C.jsxs)(`h3`, {
                      className: `text-lg font-bold text-stone-900 dark:text-stone-100 mt-1`,
                      children: [
                        a === `en` ? N.name : N.nameUrdu || N.name,
                        ` — `,
                        N.className,
                      ],
                    }),
                    (0, C.jsxs)(`p`, {
                      className: `text-xs text-stone-500`,
                      children: [i(`Date`), `: `, N.examDate],
                    }),
                  ],
                }),
                (0, C.jsxs)(`div`, {
                  className: `flex gap-4 text-center text-xs`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      className: `p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `text-stone-500 block`,
                          children: i(`OralExam`),
                        }),
                        (0, C.jsx)(`span`, {
                          className: `font-bold text-base text-emerald-800 dark:text-emerald-200`,
                          children: N.oralMax,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `text-stone-500 block`,
                          children: i(`WrittenExam`),
                        }),
                        (0, C.jsx)(`span`, {
                          className: `font-bold text-base text-sky-800 dark:text-sky-200`,
                          children: N.writtenMax,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      className: `p-3 rounded-xl bg-stone-100 dark:bg-stone-800`,
                      children: [
                        (0, C.jsx)(`span`, {
                          className: `text-stone-500 block`,
                          children: i(`TotalMarksHeader`),
                        }),
                        (0, C.jsx)(`span`, {
                          className: `font-bold text-base text-stone-900 dark:text-stone-100`,
                          children: N.totalMax,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          (0, C.jsx)(`div`, {
            className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 overflow-hidden shadow-xs`,
            children: (0, C.jsx)(`div`, {
              className: `overflow-x-auto`,
              children: (0, C.jsxs)(`table`, {
                className: `w-full text-start text-xs border-collapse`,
                children: [
                  (0, C.jsx)(`thead`, {
                    children: (0, C.jsxs)(`tr`, {
                      className: `border-b border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 font-bold`,
                      children: [
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-4 text-start`,
                          children: i(`StudentName`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-start`,
                          children: i(`AdmissionNo`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-start`,
                          children: i(`OralExam`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-start`,
                          children: i(`WrittenExam`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-start`,
                          children: i(`CumulativeTotal`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-start`,
                          children: i(`GradeResult`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-4 text-start`,
                          children: i(`RemarksResult`),
                        }),
                        (0, C.jsx)(`th`, {
                          className: `py-3 px-3 text-center`,
                          children: i(`Print`),
                        }),
                      ],
                    }),
                  }),
                  (0, C.jsx)(`tbody`, {
                    className: `divide-y divide-stone-100 dark:divide-stone-800`,
                    children:
                      se.length === 0
                        ? (0, C.jsx)(`tr`, {
                            children: (0, C.jsx)(`td`, {
                              colSpan: 8,
                              className: `py-8 text-center text-stone-400`,
                              children: `اس امتحان کے لیے ابھی نتائج درج نہیں کیے گئے۔ اوپر "نمبرات درج کریں" پر کلک کر کے اندراج کریں۔`,
                            }),
                          })
                        : se.map((e) =>
                            (0, C.jsxs)(
                              `tr`,
                              {
                                className: `hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors`,
                                children: [
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-4 font-bold text-stone-900 dark:text-stone-100 text-sm`,
                                    children: e.studentName,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-3 font-mono font-bold text-emerald-700 dark:text-emerald-400`,
                                    children: e.admissionNo,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-3 font-semibold text-stone-700 dark:text-stone-300`,
                                    children: e.oralMarks,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-3 font-semibold text-stone-700 dark:text-stone-300`,
                                    children: e.writtenMarks,
                                  }),
                                  (0, C.jsxs)(`td`, {
                                    className: `py-3 px-3 font-extrabold text-sm text-stone-900 dark:text-stone-100`,
                                    children: [
                                      e.totalMarks,
                                      ` / `,
                                      N?.totalMax || 100,
                                    ],
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-3`,
                                    children: (0, C.jsx)(`span`, {
                                      className: `px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold`,
                                      children: e.grade,
                                    }),
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-4 text-stone-500 italic text-[11px]`,
                                    children: e.remarks || `—`,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `py-3 px-3 text-center`,
                                    children:
                                      n &&
                                      (0, C.jsxs)(`button`, {
                                        onClick: () =>
                                          n({
                                            ...e,
                                            examName: N?.name,
                                            examNameUrdu: N?.nameUrdu,
                                            examDate: N?.examDate,
                                            oralMax: N?.oralMax,
                                            writtenMax: N?.writtenMax,
                                          }),
                                        className: `p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 transition-colors inline-flex items-center gap-1 text-[11px] font-bold cursor-pointer`,
                                        title: i(`Print`),
                                        children: [
                                          (0, C.jsx)(tt, {
                                            className: `h-3.5 w-3.5`,
                                          }),
                                          i(`Print`),
                                        ],
                                      }),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                  }),
                ],
              }),
            }),
          }),
          p &&
            (0, C.jsx)(`div`, {
              className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
              children: (0, C.jsxs)(`div`, {
                className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                    children: [
                      (0, C.jsx)(`h3`, {
                        className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                        children: `نیا امتحان بنائیں (Create New Exam)`,
                      }),
                      (0, C.jsx)(`button`, {
                        onClick: () => m(!1),
                        className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                        children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`form`, {
                    onSubmit: (e) => {
                      if ((e.preventDefault(), !b)) {
                        alert(`براہ کرم امتحان کا نام درج کریں۔`);
                        return;
                      }
                      let n = t.find((e) => e.id === S),
                        r = P.addExam({
                          name: v || b,
                          nameUrdu: b,
                          classId: S,
                          className: n?.name,
                          examType: T,
                          oralMax: O,
                          writtenMax: A,
                          totalMax: O + A,
                          examDate: new Date().toISOString().split(`T`)[0],
                          status: `Ongoing`,
                        });
                      (s(P.getExams()), f(r.id), m(!1), x(``));
                    },
                    className: `p-6 space-y-4`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`label`, {
                            className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                            children: `امتحان کا نام (اردو) *`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `text`,
                            required: !0,
                            value: b,
                            onChange: (e) => x(e.target.value),
                            placeholder: `مثلاً: سالانہ امتحان برائے حفظ القرآن`,
                            className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `کلاس منتخب کریں *`,
                              }),
                              (0, C.jsx)(`select`, {
                                value: S,
                                onChange: (e) => w(Number(e.target.value)),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                                children: t.map((e) =>
                                  (0, C.jsxs)(
                                    `option`,
                                    {
                                      value: e.id,
                                      children: [e.name, ` — `, e.nameUrdu],
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `قسم (Exam Type)`,
                              }),
                              (0, C.jsxs)(`select`, {
                                value: T,
                                onChange: (e) => D(e.target.value),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                                children: [
                                  (0, C.jsx)(`option`, {
                                    value: `Monthly`,
                                    children: `ماہانہ ٹیسٹ (Monthly)`,
                                  }),
                                  (0, C.jsx)(`option`, {
                                    value: `MidTerm`,
                                    children: `ششماہی امتحان (Mid-Term)`,
                                  }),
                                  (0, C.jsx)(`option`, {
                                    value: `Final`,
                                    children: `سالانہ امتحان (Final)`,
                                  }),
                                  (0, C.jsx)(`option`, {
                                    value: `Surprise`,
                                    children: `اچانک ٹیسٹ (Surprise)`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `زبانی نمبرات (Oral Max)`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `number`,
                                value: O,
                                onChange: (e) => k(Number(e.target.value)),
                                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `تحریری نمبرات (Written Max)`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `number`,
                                value: A,
                                onChange: (e) => ee(Number(e.target.value)),
                                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                        children: [
                          (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: () => m(!1),
                            className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                            children: `منسوخ کریں`,
                          }),
                          (0, C.jsx)(`button`, {
                            type: `submit`,
                            className: `px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer`,
                            children: `امتحان تشکیل دیں`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          h &&
            (0, C.jsx)(`div`, {
              className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs`,
              children: (0, C.jsxs)(`div`, {
                className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-stone-200 dark:border-stone-800`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-center justify-between p-6 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`h3`, {
                            className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                            children: `امتحانی نمبرات درج کریں (Enter Exam Marks)`,
                          }),
                          (0, C.jsxs)(`p`, {
                            className: `text-xs text-stone-500`,
                            children: [N?.nameUrdu, ` — `, N?.className],
                          }),
                        ],
                      }),
                      (0, C.jsx)(`button`, {
                        onClick: () => g(!1),
                        className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer`,
                        children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`form`, {
                    onSubmit: (t) => {
                      if ((t.preventDefault(), !N)) return;
                      let n = e.find((e) => e.id === te);
                      if (!n) return;
                      let r = Number(re) + Number(j),
                        i = (r / (N.totalMax || 100)) * 100,
                        a = `جید (B)`;
                      ((a =
                        i >= 85
                          ? `ممتاز (A+)`
                          : i >= 75
                            ? `جید جداً (A)`
                            : i >= 60
                              ? `جید (B)`
                              : i >= 50
                                ? `مقبول (C)`
                                : `راسب (F)`),
                        P.saveResult({
                          examId: N.id,
                          studentId: n.id,
                          studentName: n.fullNameUrdu || n.fullName,
                          admissionNo: n.admissionNo,
                          oralMarks: Number(re),
                          writtenMarks: Number(j),
                          totalMarks: r,
                          grade: a,
                          remarks: ae,
                        }),
                        l(P.getResults()),
                        g(!1));
                    },
                    className: `p-6 space-y-4`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`label`, {
                            className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                            children: `طالبہ منتخب کریں *`,
                          }),
                          (0, C.jsx)(`select`, {
                            value: te,
                            onChange: (e) => ne(Number(e.target.value)),
                            className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500 cursor-pointer`,
                            children: F.map((e) =>
                              (0, C.jsxs)(
                                `option`,
                                {
                                  value: e.id,
                                  children: [
                                    e.fullNameUrdu || e.fullName,
                                    ` (`,
                                    e.admissionNo,
                                    `)`,
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-3`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: [
                                  `زبانی نمبرات (Max: `,
                                  N?.oralMax || 70,
                                  `) *`,
                                ],
                              }),
                              (0, C.jsx)(`input`, {
                                type: `number`,
                                required: !0,
                                max: N?.oralMax || 100,
                                value: re,
                                onChange: (e) => ie(Number(e.target.value)),
                                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: [
                                  `تحریری نمبرات (Max: `,
                                  N?.writtenMax || 30,
                                  `) *`,
                                ],
                              }),
                              (0, C.jsx)(`input`, {
                                type: `number`,
                                required: !0,
                                max: N?.writtenMax || 100,
                                value: j,
                                onChange: (e) => M(Number(e.target.value)),
                                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`label`, {
                            className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                            children: `اساتذہ کے تاثرات و ریمارکس (Remarks)`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `text`,
                            value: ae,
                            onChange: (e) => oe(e.target.value),
                            placeholder: `ماشاءاللہ شاندار، مزید توجہ کی ضرورت...`,
                            className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-800 dark:text-stone-200 focus:ring-2 focus:ring-emerald-500`,
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-end gap-3 pt-4 border-t border-stone-100 dark:border-stone-800`,
                        children: [
                          (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: () => g(!1),
                            className: `px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer`,
                            children: `منسوخ کریں`,
                          }),
                          (0, C.jsx)(`button`, {
                            type: `submit`,
                            className: `px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm cursor-pointer`,
                            children: `نمبرات محفوظ کریں`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      })
    );
  },
  yn = ({
    students: e,
    classes: t,
    fees: n,
    transactions: r,
    onNavigate: i,
  }) => {
    let a = () => {
        window.print();
      },
      o = r
        .filter((e) => e.type === `Income`)
        .reduce((e, t) => e + t.amount, 0),
      s = r
        .filter((e) => e.type === `Expense`)
        .reduce((e, t) => e + t.amount, 0);
    return (0, C.jsxs)(`div`, {
      className: `space-y-6 pb-20 lg:pb-8`,
      children: [
        (0, C.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-4`,
          children: [
            (0, C.jsxs)(`div`, {
              children: [
                (0, C.jsxs)(`h2`, {
                  className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                  children: [
                    (0, C.jsx)(De, {
                      className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                    }),
                    `رپورٹس سینٹر (Reports & Data Center)`,
                  ],
                }),
                (0, C.jsx)(`p`, {
                  className: `text-xs text-stone-500 dark:text-stone-400`,
                  children: `ماہانہ مالیاتی رپورٹ، فیس واجبات، حاضری گوشوارہ اور تعلیمی نتائج`,
                }),
              ],
            }),
            (0, C.jsxs)(`button`, {
              onClick: a,
              className: `flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer`,
              children: [
                (0, C.jsx)(tt, { className: `h-4 w-4` }),
                `موجودہ رپورٹ پرنٹ کریں (Print Report)`,
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-3 flex flex-col justify-between`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 inline-block`,
                      children: (0, C.jsx)(Ve, { className: `h-5 w-5` }),
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `ماہانہ مالیاتی گوشوارہ (Financial Statement)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-xs text-stone-500 dark:text-stone-400`,
                      children: `کل آمدنی، عطیات، زکوٰۃ، فیس وصولی، اساتذہ تنخواہیں اور ماہانہ اخراجات کا جامع بیلنس۔`,
                    }),
                  ],
                }),
                (0, C.jsx)(`button`, {
                  onClick: () => i(`accounts`),
                  className: `w-full py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors cursor-pointer`,
                  children: `مالیات کھاتہ کھولیں`,
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-3 flex flex-col justify-between`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `p-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 inline-block`,
                      children: (0, C.jsx)(Ve, { className: `h-5 w-5` }),
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `فیس وصولی و واجبات فہرست (Fee Dues Report)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-xs text-stone-500 dark:text-stone-400`,
                      children: `کلاس وائز ادا شدہ فیس، رعایت حاصل کرنے والے طلباء اور بقایا جات کی مکمل فہرست۔`,
                    }),
                  ],
                }),
                (0, C.jsx)(`button`, {
                  onClick: () => i(`fees`),
                  className: `w-full py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors cursor-pointer`,
                  children: `فیس پورٹل کھولیں`,
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-3 flex flex-col justify-between`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 inline-block`,
                      children: (0, C.jsx)(Ve, { className: `h-5 w-5` }),
                    }),
                    (0, C.jsx)(`h3`, {
                      className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                      children: `حاضری و غیر حاضری رجسٹر (Attendance Register)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-xs text-stone-500 dark:text-stone-400`,
                      children: `طلباء و طالبات کی کلاس وائز یومیہ حاضری اور ماہانہ حاضری کا تناسب۔`,
                    }),
                  ],
                }),
                (0, C.jsx)(`button`, {
                  onClick: () => i(`attendance`),
                  className: `w-full py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors cursor-pointer`,
                  children: `حاضری پورٹل کھولیں`,
                }),
              ],
            }),
          ],
        }),
        (0, C.jsxs)(`div`, {
          className: `p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs space-y-4`,
          children: [
            (0, C.jsxs)(`div`, {
              className: `flex justify-between items-center pb-3 border-b border-stone-100 dark:border-stone-800`,
              children: [
                (0, C.jsxs)(`div`, {
                  children: [
                    (0, C.jsx)(`h3`, {
                      className: `font-bold text-base text-stone-900 dark:text-stone-100`,
                      children: `جامع مالیاتی خلاصہ برائے سالِ رواں`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-xs text-stone-500`,
                      children: `کلاؤڈ ڈیٹا بیس سے خودکار حساب کتاب`,
                    }),
                  ],
                }),
                (0, C.jsx)(`span`, {
                  className: `font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200`,
                  children: `Status: Balanced`,
                }),
              ],
            }),
            (0, C.jsxs)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-3 gap-4`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 text-center`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-emerald-800 dark:text-emerald-300`,
                      children: `کل آمدنی (Total Inflow)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-2xl font-black text-emerald-900 dark:text-emerald-100 mt-1`,
                      children: z(o),
                    }),
                  ],
                }),
                (0, C.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 text-center`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-rose-800 dark:text-rose-300`,
                      children: `کل اخراجات (Total Outflow)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-2xl font-black text-rose-900 dark:text-rose-100 mt-1`,
                      children: z(s),
                    }),
                  ],
                }),
                (0, C.jsxs)(`div`, {
                  className: `p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 text-center`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `text-xs font-semibold text-teal-800 dark:text-teal-300`,
                      children: `خالص محفوظ کیش (Net Reserve)`,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-2xl font-black text-teal-900 dark:text-teal-100 mt-1`,
                      children: z(o - s),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  bn = ({
    settings: e,
    onUpdateSettings: t,
    onExportBackup: n,
    currentUser: r,
    onUpdateCurrentUser: i,
  }) => {
    let [a, o] = (0, _.useState)(e),
      [s, c] = (0, _.useState)(!1),
      [l, u] = (0, _.useState)(() => P.getAdminUser().username || `admin`),
      [d, f] = (0, _.useState)(``),
      [p, m] = (0, _.useState)(``),
      [h, g] = (0, _.useState)(!1),
      [v, y] = (0, _.useState)(!1),
      [b, x] = (0, _.useState)(``),
      [S, w] = (0, _.useState)(``),
      [T, E] = (0, _.useState)(!1),
      D = a.twoFactorAdminSecret || `JBSWY3DPEHPK3PXP`,
      O = a.twoFactorAdminBackupCode || `87654321`,
      [k, A] = (0, _.useState)(``),
      [ee, te] = (0, _.useState)(!1),
      [ne, re] = (0, _.useState)(!1),
      [ie, j] = (0, _.useState)(``),
      [M, ae] = (0, _.useState)(null);
    return (
      (0, _.useEffect)(() => {
        async function e() {
          let e = await mn(
            pn(`admin`, a.madrasaNameEn || `Madrasa Taleem Portal`, D),
          );
          A(e);
        }
        e();
      }, [a.madrasaNameEn, D]),
      (0, C.jsxs)(`div`, {
        className: `space-y-6 pb-20 lg:pb-8`,
        children: [
          (0, C.jsxs)(`div`, {
            children: [
              (0, C.jsxs)(`h2`, {
                className: `text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                children: [
                  (0, C.jsx)(ot, {
                    className: `h-6 w-6 text-emerald-600 dark:text-emerald-400`,
                  }),
                  `تنظیمات و پروفائل (Settings & System Configuration)`,
                ],
              }),
              (0, C.jsx)(`p`, {
                className: `text-xs text-stone-500 dark:text-stone-400`,
                children: `ادارے کی بنیادی معلومات، تعلیمی سال، رابطہ نمبرز اور کلاؤڈ ڈیٹا بیک اپ`,
              }),
            ],
          }),
          s &&
            (0, C.jsxs)(`div`, {
              className: `p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2`,
              children: [
                (0, C.jsx)(L, { className: `h-4 w-4 text-emerald-600` }),
                `تنظیمات کامیابی سے محفوظ ہو گئی ہیں۔`,
              ],
            }),
          (0, C.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-12 gap-6`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 shadow-xs`,
                children: [
                  (0, C.jsx)(`h3`, {
                    className: `text-base font-bold text-stone-900 dark:text-stone-100 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800`,
                    children: `جامعہ کی بنیادی معلومات (Madrasa Profile)`,
                  }),
                  (0, C.jsxs)(`form`, {
                    onSubmit: (e) => {
                      (e.preventDefault(),
                        t(a),
                        c(!0),
                        setTimeout(() => c(!1), 3e3));
                    },
                    className: `space-y-4`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `جامعہ کا نام (اردو) *`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                required: !0,
                                value: a.madrasaNameUr,
                                onChange: (e) =>
                                  o({ ...a, madrasaNameUr: e.target.value }),
                                className: `w-full text-xs font-bold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `جامعہ کا نام (انگلش) *`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                required: !0,
                                value: a.madrasaNameEn,
                                onChange: (e) =>
                                  o({ ...a, madrasaNameEn: e.target.value }),
                                className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `بانی و سرپرستِ اعلیٰ (اردو)`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                value: a.founderUr,
                                onChange: (e) =>
                                  o({ ...a, founderUr: e.target.value }),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `تعلیمی سال (Academic Year)`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                value: a.academicYear,
                                onChange: (e) =>
                                  o({ ...a, academicYear: e.target.value }),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `پرائمری رابطہ فون نمبر *`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                value: a.phonePrimary,
                                onChange: (e) =>
                                  o({ ...a, phonePrimary: e.target.value }),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                children: `ثانوی فون نمبر`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                value: a.phoneSecondary,
                                onChange: (e) =>
                                  o({ ...a, phoneSecondary: e.target.value }),
                                className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`label`, {
                            className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                            children: `جامعہ کا پتہ (اردو)`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `text`,
                            value: a.addressUr,
                            onChange: (e) =>
                              o({ ...a, addressUr: e.target.value }),
                            className: `w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-emerald-500`,
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-2.5`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-xs`,
                            children: [
                              (0, C.jsx)(Ue, {
                                className: `h-4 w-4 text-amber-600 dark:text-amber-400`,
                              }),
                              `خفیہ مالیاتی پن کوڈ (Financial Secret PIN Code)`,
                            ],
                          }),
                          (0, C.jsx)(`p`, {
                            className: `text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed`,
                            children: `یہ خفیہ 4 ہندسوں والا پن کوڈ ڈیش بورڈ پر کل کیش فنڈز اور فیس ریکوری کی رقم کو چھپانے / دیکھنے (Eye Toggle) کے لیے استعمال ہوتا ہے۔`,
                          }),
                          (0, C.jsx)(`div`, {
                            className: `max-w-xs`,
                            children: (0, C.jsx)(`input`, {
                              type: `text`,
                              maxLength: 8,
                              value: a.financialPin || `1234`,
                              onChange: (e) =>
                                o({ ...a, financialPin: e.target.value }),
                              placeholder: `1234`,
                              className: `w-full text-center tracking-widest font-mono text-base font-bold bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700/60 rounded-xl px-3 py-2 text-amber-950 dark:text-amber-200 focus:ring-2 focus:ring-amber-500`,
                            }),
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `p-5 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50/40 dark:from-stone-800/80 dark:to-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 shadow-xs space-y-4`,
                        children: [
                          (0, C.jsx)(`div`, {
                            className: `flex items-center justify-between pb-3 border-b border-amber-200/60 dark:border-amber-800/40`,
                            children: (0, C.jsxs)(`div`, {
                              className: `flex items-center gap-2.5`,
                              children: [
                                (0, C.jsx)(`div`, {
                                  className: `p-2.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20`,
                                  children: (0, C.jsx)(Ge, {
                                    className: `h-5 w-5`,
                                  }),
                                }),
                                (0, C.jsxs)(`div`, {
                                  children: [
                                    (0, C.jsxs)(`h4`, {
                                      className: `font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-2`,
                                      children: [
                                        `ایڈمن اکاؤنٹ لاگ ان و پاس ورڈ تبدیلی`,
                                        (0, C.jsx)(`span`, {
                                          className: `text-[10px] px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-mono font-bold`,
                                          children: `Admin Login`,
                                        }),
                                      ],
                                    }),
                                    (0, C.jsx)(`p`, {
                                      className: `text-[11px] text-stone-500 dark:text-stone-400`,
                                      children: `ایڈمن پینل، لاگ ان اسکرین اور رول سوئچنگ کے لیے نیا یوزر نیم اور پاس ورڈ سیٹ کریں`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          b &&
                            (0, C.jsxs)(`div`, {
                              className: `p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2 animate-in fade-in`,
                              children: [
                                (0, C.jsx)(je, {
                                  className: `h-4 w-4 text-emerald-600 shrink-0`,
                                }),
                                b,
                              ],
                            }),
                          S &&
                            (0, C.jsxs)(`div`, {
                              className: `p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-700 text-rose-800 dark:text-rose-200 text-xs font-bold flex items-center gap-2 animate-in fade-in`,
                              children: [
                                (0, C.jsx)(Ae, {
                                  className: `h-4 w-4 text-rose-600 shrink-0`,
                                }),
                                S,
                              ],
                            }),
                          (0, C.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsx)(`label`, {
                                    className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                    children: `ایڈمن یوزر نیم (Admin Username) *`,
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    className: `relative max-w-sm`,
                                    children: [
                                      (0, C.jsx)(ft, {
                                        className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                                      }),
                                      (0, C.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: l,
                                        onChange: (e) => u(e.target.value),
                                        placeholder: `admin`,
                                        className: `w-full text-xs font-mono font-bold bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500`,
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)(`span`, {
                                    className: `text-[10px] text-stone-400 mt-1 block`,
                                    children: [
                                      `موجودہ لاگ ان یوزر: `,
                                      (0, C.jsx)(`strong`, {
                                        className: `font-mono text-stone-700 dark:text-stone-300`,
                                        children: P.getAdminUser().username,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl`,
                                children: [
                                  (0, C.jsxs)(`div`, {
                                    children: [
                                      (0, C.jsx)(`label`, {
                                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                        children: `نیا پاس ورڈ (New Password)`,
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `relative`,
                                        children: [
                                          (0, C.jsx)(Ue, {
                                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                                          }),
                                          (0, C.jsx)(`input`, {
                                            type: h ? `text` : `password`,
                                            value: d,
                                            onChange: (e) => f(e.target.value),
                                            placeholder: `نیا پاس ورڈ درج کریں`,
                                            className: `w-full text-xs font-mono bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-9 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500`,
                                          }),
                                          (0, C.jsx)(`button`, {
                                            type: `button`,
                                            onClick: () => g(!h),
                                            className: `absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 cursor-pointer`,
                                            title: h
                                              ? `پاس ورڈ چھپائیں`
                                              : `پاس ورڈ دیکھیں`,
                                            children: h
                                              ? (0, C.jsx)(ze, {
                                                  className: `h-4 w-4`,
                                                })
                                              : (0, C.jsx)(Be, {
                                                  className: `h-4 w-4`,
                                                }),
                                          }),
                                        ],
                                      }),
                                      (0, C.jsx)(`span`, {
                                        className: `text-[10px] text-stone-400 mt-1 block`,
                                        children: `اگر پاس ورڈ وہی رکھنا ہو تو خالی چھوڑ دیں`,
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    children: [
                                      (0, C.jsx)(`label`, {
                                        className: `block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1`,
                                        children: `نئے پاس ورڈ کی تصدیق (Confirm Password)`,
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `relative`,
                                        children: [
                                          (0, C.jsx)(Ue, {
                                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                                          }),
                                          (0, C.jsx)(`input`, {
                                            type: v ? `text` : `password`,
                                            value: p,
                                            onChange: (e) => m(e.target.value),
                                            placeholder: `دوبارہ نیا پاس ورڈ درج کریں`,
                                            disabled: !d,
                                            className: `w-full text-xs font-mono bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-9 py-2.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 disabled:opacity-50`,
                                          }),
                                          (0, C.jsx)(`button`, {
                                            type: `button`,
                                            onClick: () => y(!v),
                                            className: `absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 cursor-pointer`,
                                            title: v
                                              ? `پاس ورڈ چھپائیں`
                                              : `پاس ورڈ دیکھیں`,
                                            children: v
                                              ? (0, C.jsx)(ze, {
                                                  className: `h-4 w-4`,
                                                })
                                              : (0, C.jsx)(Be, {
                                                  className: `h-4 w-4`,
                                                }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsx)(`div`, {
                                className: `pt-2`,
                                children: (0, C.jsxs)(`button`, {
                                  type: `button`,
                                  onClick: (e) => {
                                    if (
                                      (e.preventDefault(),
                                      w(``),
                                      x(``),
                                      !l.trim())
                                    ) {
                                      w(`براہ کرم ایڈمن کا یوزر نیم درج کریں۔`);
                                      return;
                                    }
                                    if (d) {
                                      if (d.length < 4) {
                                        w(
                                          `نیا پاس ورڈ کم از کم 4 حروف یا ہندسوں پر مشتمل ہونا چاہیے۔`,
                                        );
                                        return;
                                      }
                                      if (d !== p) {
                                        w(
                                          `نئے پاس ورڈ اور تصدیقی پاس ورڈ میں مطابقت نہیں ہے۔`,
                                        );
                                        return;
                                      }
                                    }
                                    E(!0);
                                    let t = P.updateAdminCredentials(
                                      l.trim(),
                                      d.trim() || void 0,
                                    );
                                    (E(!1),
                                      t.success
                                        ? (x(t.message),
                                          t.user && i && i(t.user),
                                          f(``),
                                          m(``),
                                          setTimeout(() => x(``), 6e3))
                                        : w(t.message));
                                  },
                                  disabled: T,
                                  className: `flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-sm transition-all active:scale-95 cursor-pointer disabled:opacity-50`,
                                  children: [
                                    (0, C.jsx)(it, { className: `h-4 w-4` }),
                                    T
                                      ? `محفوظ ہو رہا ہے...`
                                      : `ایڈمن لاگ ان معلومات تبدیل کریں (Save Admin Login)`,
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-4`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200/80 dark:border-stone-700`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                className: `flex items-center gap-2.5`,
                                children: [
                                  (0, C.jsx)(`div`, {
                                    className: `p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300`,
                                    children: (0, C.jsx)(st, {
                                      className: `h-5 w-5`,
                                    }),
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    children: [
                                      (0, C.jsxs)(`h4`, {
                                        className: `font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5`,
                                        children: [
                                          `دو مرحلہ تصدیق (2FA - Google Authenticator)`,
                                          (0, C.jsx)(`span`, {
                                            className: `text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold`,
                                            children: `100% آف لائن`,
                                          }),
                                        ],
                                      }),
                                      (0, C.jsx)(`p`, {
                                        className: `text-[11px] text-stone-500 dark:text-stone-400`,
                                        children: `ایڈمن لاگ ان پر Google Authenticator یا 2FAS ایپ سے 6 ہندسوں کا OTP کوڈ`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`button`, {
                                type: `button`,
                                onClick: () => {
                                  let e = !a.twoFactorAdminRequired;
                                  (o({ ...a, twoFactorAdminRequired: e }),
                                    t({ twoFactorAdminRequired: e }));
                                },
                                className: `px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center gap-1.5 ${a.twoFactorAdminRequired ? `bg-emerald-600 hover:bg-emerald-700 text-white` : `bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-700 dark:text-stone-300`}`,
                                children: [
                                  (0, C.jsx)(R, { className: `h-4 w-4` }),
                                  a.twoFactorAdminRequired
                                    ? `2FA فعال ہے (Active)`
                                    : `2FA غیر فعال ہے (Disabled)`,
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-12 gap-4 items-center`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                className: `md:col-span-4 flex flex-col items-center justify-center p-3 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 text-center`,
                                children: [
                                  k
                                    ? (0, C.jsx)(`img`, {
                                        src: k,
                                        alt: `Admin 2FA QR`,
                                        className: `w-36 h-36 rounded-xl border border-stone-100 dark:border-stone-800 shadow-xs`,
                                      })
                                    : (0, C.jsx)(`div`, {
                                        className: `w-36 h-36 flex items-center justify-center text-xs text-stone-400`,
                                        children: `کیو آر کوڈ لوڈ ہو رہا ہے...`,
                                      }),
                                  (0, C.jsx)(`span`, {
                                    className: `text-[10px] text-stone-500 mt-2 font-medium`,
                                    children: `Google Authenticator سے اسکین کریں`,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `md:col-span-8 space-y-3`,
                                children: [
                                  (0, C.jsxs)(`div`, {
                                    className: `p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-between`,
                                    children: [
                                      (0, C.jsxs)(`div`, {
                                        children: [
                                          (0, C.jsx)(`span`, {
                                            className: `text-[10px] text-stone-400 block font-medium`,
                                            children: `دستی خفیہ کوڈ (Secret Key):`,
                                          }),
                                          (0, C.jsx)(`span`, {
                                            className: `font-mono text-xs font-bold tracking-wider text-emerald-800 dark:text-emerald-300`,
                                            children: un(D),
                                          }),
                                        ],
                                      }),
                                      (0, C.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => {
                                          (navigator.clipboard.writeText(D),
                                            te(!0),
                                            setTimeout(() => te(!1), 2e3));
                                        },
                                        className: `p-1.5 rounded-lg bg-stone-100 hover:bg-emerald-50 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 hover:text-emerald-600 transition-colors cursor-pointer`,
                                        title: `کاپی کریں`,
                                        children: ee
                                          ? (0, C.jsx)(L, {
                                              className: `h-4 w-4 text-emerald-600`,
                                            })
                                          : (0, C.jsx)(Ne, {
                                              className: `h-4 w-4`,
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    className: `p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 flex items-center justify-between`,
                                    children: [
                                      (0, C.jsxs)(`div`, {
                                        children: [
                                          (0, C.jsx)(`span`, {
                                            className: `text-[10px] text-amber-800 dark:text-amber-300 font-medium block`,
                                            children: `ہنگامی بحالی کوڈ (Emergency Backup Code):`,
                                          }),
                                          (0, C.jsx)(`span`, {
                                            className: `font-mono text-xs font-bold text-amber-950 dark:text-amber-100`,
                                            children: O,
                                          }),
                                        ],
                                      }),
                                      (0, C.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => {
                                          (navigator.clipboard.writeText(O),
                                            re(!0),
                                            setTimeout(() => re(!1), 2e3));
                                        },
                                        className: `p-1.5 rounded-lg bg-white dark:bg-stone-800 text-amber-800 dark:text-amber-200 hover:text-amber-900 shadow-xs cursor-pointer`,
                                        title: `کاپی کریں`,
                                        children: ne
                                          ? (0, C.jsx)(L, {
                                              className: `h-4 w-4 text-emerald-600`,
                                            })
                                          : (0, C.jsx)(Ne, {
                                              className: `h-4 w-4`,
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    className: `p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-800/60 space-y-2`,
                                    children: [
                                      (0, C.jsx)(`span`, {
                                        className: `text-[11px] font-bold text-indigo-950 dark:text-indigo-200 block`,
                                        children: `لائیو ٹیسٹ: موبائل سے 6 ہندسوں کا کوڈ چیک کریں`,
                                      }),
                                      (0, C.jsxs)(`div`, {
                                        className: `flex gap-2`,
                                        children: [
                                          (0, C.jsx)(`input`, {
                                            type: `text`,
                                            maxLength: 8,
                                            value: ie,
                                            onChange: (e) => {
                                              (j(e.target.value), ae(null));
                                            },
                                            placeholder: `000000`,
                                            className: `w-28 text-center font-mono font-bold text-sm tracking-widest bg-white dark:bg-stone-900 border border-indigo-200 dark:border-indigo-700 rounded-lg px-2 py-1.5 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-indigo-500`,
                                          }),
                                          (0, C.jsx)(`button`, {
                                            type: `button`,
                                            onClick: async () => {
                                              if (!ie.trim()) {
                                                ae({
                                                  success: !1,
                                                  message: `براہ کرم کوڈ درج کریں۔`,
                                                });
                                                return;
                                              }
                                              let e = await fn(ie, D, O);
                                              e.valid
                                                ? ae({
                                                    success: !0,
                                                    message:
                                                      e.reason === `backup`
                                                        ? `✓ ہنگامی بیک اپ کوڈ درست ہے!`
                                                        : `✓ گوگل کوڈ درست ہے! 2FA کامیابی سے کام کر رہا ہے۔`,
                                                  })
                                                : ae({
                                                    success: !1,
                                                    message: `✗ کوڈ غلط ہے یا وقت کی مطابقت ختم ہو چکی ہے۔ دوبارہ کوشش کریں۔`,
                                                  });
                                            },
                                            className: `px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer`,
                                            children: `کوڈ کی تصدیق کریں`,
                                          }),
                                        ],
                                      }),
                                      M &&
                                        (0, C.jsxs)(`div`, {
                                          className: `text-[11px] font-semibold flex items-center gap-1.5 pt-1 ${M.success ? `text-emerald-700 dark:text-emerald-300` : `text-rose-600 dark:text-rose-400`}`,
                                          children: [
                                            M.success
                                              ? (0, C.jsx)(je, {
                                                  className: `h-3.5 w-3.5`,
                                                })
                                              : (0, C.jsx)(Ae, {
                                                  className: `h-3.5 w-3.5`,
                                                }),
                                            M.message,
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] text-emerald-900 dark:text-emerald-200 flex items-start gap-2`,
                            children: [
                              (0, C.jsx)(R, {
                                className: `h-4 w-4 text-emerald-600 shrink-0 mt-0.5`,
                              }),
                              (0, C.jsxs)(`p`, {
                                className: `leading-relaxed`,
                                children: [
                                  (0, C.jsx)(`strong`, {
                                    children: `اساتذہ کے لیے 2FA اختیاری ہے:`,
                                  }),
                                  ` اساتذہ پر 2FA زبردستی لاگو نہیں کیا گیا۔ اگر آپ کسی مخصوص استاد کے لیے 2FA آن کرنا چاہتے ہیں تو آپ `,
                                  (0, C.jsx)(`strong`, {
                                    children: `شعبۂ اساتذہ (Teachers)`,
                                  }),
                                  ` میں جا کر اس استاد کے کارڈ پر موجود بٹن سے باآسانی 1-کلک میں آن یا آف کر سکتے ہیں۔`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsx)(`div`, {
                        className: `pt-3`,
                        children: (0, C.jsxs)(`button`, {
                          type: `submit`,
                          className: `flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer`,
                          children: [
                            (0, C.jsx)(it, { className: `h-4 w-4` }),
                            `تنظیمات محفوظ کریں (Save Settings)`,
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `lg:col-span-4 space-y-6`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/80 dark:border-stone-800 p-6 shadow-xs space-y-4`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex items-center gap-2 pb-2 border-b border-stone-100 dark:border-stone-800`,
                        children: [
                          (0, C.jsx)(Ie, {
                            className: `h-5 w-5 text-emerald-600`,
                          }),
                          (0, C.jsx)(`h3`, {
                            className: `text-base font-bold text-stone-900 dark:text-stone-100`,
                            children: `بیک اپ و ڈیٹا حفاظت`,
                          }),
                        ],
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xs text-stone-500 dark:text-stone-400`,
                        children: `آپ اپنے تمام طلباء، اساتذہ، فیس اور حاضری کے ریکارڈ کا مکمل ڈیٹا بیک اپ 1 کلک میں ڈاؤن لوڈ کر کے اپنے پاس محفوظ رکھ سکتے ہیں۔`,
                      }),
                      (0, C.jsxs)(`button`, {
                        onClick: n,
                        className: `w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs transition-colors cursor-pointer`,
                        children: [
                          (0, C.jsx)(Le, {
                            className: `h-4 w-4 text-emerald-600`,
                          }),
                          `مکمل ڈیٹا بیک اپ ڈاؤن لوڈ کریں`,
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl border border-emerald-200/60 dark:border-emerald-800/40 p-5 space-y-3`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs`,
                        children: [
                          (0, C.jsx)(R, {
                            className: `h-4 w-4 text-emerald-600`,
                          }),
                          `کلاؤڈ سیکیورٹی و انکرپشن`,
                        ],
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed`,
                        children: `ڈیٹا کلاؤڈ پر 256-bit انکرپشن کے ساتھ محفوظ ہے۔ تمام کمپیوٹرز اور موبائل فونز پر خودکار ریئل ٹائم ہم آہنگی (Real-time Sync) فعال ہے۔`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  xn = ({ settings: e, onLoginSuccess: t }) => {
    let { isDark: n, toggleTheme: r } = k(),
      [i, a] = (0, _.useState)(`admin`),
      [o, s] = (0, _.useState)(``),
      [c, l] = (0, _.useState)(``),
      [u, d] = (0, _.useState)(!1),
      [f, p] = (0, _.useState)(``),
      [m, h] = (0, _.useState)(`credentials`),
      [g, v] = (0, _.useState)(null),
      [y, b] = (0, _.useState)(``),
      [x, S] = (0, _.useState)(!1),
      [w, T] = (0, _.useState)(!1),
      E = (e) => {
        (a(e), h(`credentials`), v(null), p(``), s(``), l(``));
      },
      D = async (e) => {
        if ((e.preventDefault(), p(``), m === `credentials`)) {
          if (!o.trim() || !c.trim()) {
            p(`براہ کرم یوزر آئی ڈی اور پاس ورڈ درج کریں۔`);
            return;
          }
          let e = P.authenticate(o.trim(), c.trim());
          if (!e) {
            p(`غلط یوزر نیم یا پاس ورڈ! براہ کرم دوبارہ چیک کریں۔`);
            return;
          }
          if (e.role !== i) {
            p(
              `یہ اکاؤنٹ '${e.role === `admin` ? `منتظمِ اعلیٰ` : `استاد`}' کا ہے — آپ نے '${i === `admin` ? `منتظمِ اعلیٰ` : `استاد`}' ٹیب منتخب کیا ہے۔`,
            );
            return;
          }
          e.twoFactorEnabled
            ? (v(e), h(`2fa`), b(``), p(``))
            : (P.confirmLogin(e), t(e));
        } else if (m === `2fa`) {
          if (!g) return;
          if (!y.trim()) {
            p(
              w
                ? `براہ کرم 8 ہندسوں کا بیک اپ کوڈ درج کریں۔`
                : `براہ کرم 6 ہندسوں کا گوگل کوڈ درج کریں۔`,
            );
            return;
          }
          S(!0);
          let e = g.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
            n = g.twoFactorBackupCode || `87654321`,
            r = await fn(y, e, n);
          (S(!1),
            r.valid
              ? (P.confirmLogin(g), t(g))
              : p(
                  `غلط سیکیورٹی کوڈ! براہ کرم گوگل اتھینٹیکیٹر میں موجود تازہ ترین 6 ہندسوں کا کوڈ یا درست ہنگامی بیک اپ کوڈ درج کریں۔`,
                ));
        }
      };
    return (0, C.jsx)(`div`, {
      className: `min-h-screen flex items-center justify-center p-3 sm:p-6 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-950 text-stone-900 dark:text-stone-100 font-sans`,
      children: (0, C.jsxs)(`div`, {
        className: `w-full max-w-5xl bg-[#FAF8F2] dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden flex flex-col md:flex-row min-h-[580px]`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `md:w-7/12 bg-gradient-to-b from-[#02110F] via-[#073D38] to-[#0A4A6E] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden`,
            children: [
              (0, C.jsx)(`div`, {
                className: `absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#39FFC8_1px,transparent_1px)] [background-size:16px_16px]`,
              }),
              (0, C.jsxs)(`div`, {
                className: `relative z-10 p-4 rounded-2xl bg-black/40 border border-[#39FFC8]/40 backdrop-blur-md flex items-center gap-4 shadow-lg`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0A6B63] to-[#074F49] border-2 border-[#E0B243]/80 flex items-center justify-center overflow-hidden shrink-0 shadow-lg shadow-[#E0B243]/20`,
                    children: (0, C.jsx)(`img`, {
                      src: `./assets/logo.jpg`,
                      alt: `Logo`,
                      className: `h-full w-full object-cover`,
                      onError: (e) => {
                        e.target.src = `./assets/app.ico`;
                      },
                    }),
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `min-w-0`,
                    children: [
                      (0, C.jsx)(`h2`, {
                        className: `text-lg sm:text-xl font-black text-[#F2C75C] tracking-wide leading-tight drop-shadow-md font-serif`,
                        children: e.madrasaNameUr,
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-[11px] font-bold text-white/90 tracking-widest uppercase mt-0.5`,
                        children: e.madrasaNameEn,
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `relative z-10 py-6 text-center space-y-4 my-auto`,
                children: [
                  (0, C.jsxs)(`h1`, {
                    className: `text-2xl sm:text-3xl font-black text-[#9CFFE3] tracking-wide drop-shadow-[0_0_20px_rgba(57,255,200,0.6)]`,
                    children: [
                      `Deeni Taleem ka Digital Nizaam`,
                      (0, C.jsx)(`span`, {
                        className: `block text-sm font-semibold text-emerald-200 mt-1 font-sans`,
                        children: `دینی تعلیم اور جامعہ کا مکمل کلاؤڈ مینجمنٹ پورٹل`,
                      }),
                    ],
                  }),
                  (0, C.jsx)(`div`, {
                    className: `max-w-[340px] mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/80 bg-black/30`,
                    children: (0, C.jsx)(`img`, {
                      src: `./assets/masjid.jpg`,
                      alt: `Masjid`,
                      className: `w-full h-44 object-cover hover:scale-105 transition-transform duration-500`,
                      onError: (e) => {
                        e.target.src = `./assets/campus.jpg`;
                      },
                    }),
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `relative z-10 flex items-center justify-between text-xs pt-4 border-t border-emerald-500/20 text-emerald-200`,
                children: [
                  (0, C.jsxs)(`span`, {
                    className: `font-bold flex items-center gap-1.5`,
                    children: [
                      (0, C.jsx)(R, { className: `h-4 w-4 text-[#39FFC8]` }),
                      `Quetta, Balochistan`,
                    ],
                  }),
                  (0, C.jsx)(`span`, {
                    className: `font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/30`,
                    children: `v2.0 Cloud Web & App • 2FA Protected`,
                  }),
                ],
              }),
            ],
          }),
          (0, C.jsxs)(`div`, {
            className: `md:w-5/12 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-stone-900`,
            children: [
              (0, C.jsxs)(`div`, {
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `flex items-start justify-between gap-2 pb-2`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, C.jsx)(`h2`, {
                            className: `text-2xl font-black text-stone-900 dark:text-stone-100`,
                            children: `سسٹم لاگ ان (System Login)`,
                          }),
                          (0, C.jsx)(`p`, {
                            className: `text-xs text-stone-500 dark:text-stone-400`,
                            children:
                              m === `credentials`
                                ? `اپنا رول منتخب کریں اور یوزر آئی ڈی و پاس ورڈ درج کریں۔`
                                : `مرحلہ 2: دو رخی تصدیقی کوڈ (2FA Code) داخل کریں۔`,
                          }),
                        ],
                      }),
                      (0, C.jsx)(`button`, {
                        type: `button`,
                        onClick: r,
                        title: n
                          ? `لائٹ موڈ پر تبدیل کریں`
                          : `ڈارک موڈ پر تبدیل کریں`,
                        className: `p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer shrink-0 shadow-xs`,
                        children: n
                          ? (0, C.jsx)(ut, {
                              className: `h-4 w-4 text-amber-400`,
                            })
                          : (0, C.jsx)(Xe, {
                              className: `h-4 w-4 text-indigo-500`,
                            }),
                      }),
                    ],
                  }),
                  m === `credentials` &&
                    (0, C.jsxs)(`div`, {
                      className: `mt-5 p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl flex gap-1 border border-stone-200 dark:border-stone-700`,
                      children: [
                        (0, C.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => E(`admin`),
                          className: `flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${i === `admin` ? `bg-[#0A6B63] text-white shadow-md` : `text-stone-600 dark:text-stone-400 hover:text-stone-900`}`,
                          children: [
                            (0, C.jsx)(Fe, { className: `h-3.5 w-3.5` }),
                            `منتظمِ اعلیٰ (Admin)`,
                          ],
                        }),
                        (0, C.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => E(`teacher`),
                          className: `flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${i === `teacher` ? `bg-[#0A6B63] text-white shadow-md` : `text-stone-600 dark:text-stone-400 hover:text-stone-900`}`,
                          children: [
                            (0, C.jsx)(He, { className: `h-4 w-4` }),
                            `استاد / معلمہ (Teacher)`,
                          ],
                        }),
                      ],
                    }),
                  f &&
                    (0, C.jsx)(`div`, {
                      className: `mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs font-bold animate-in fade-in text-center`,
                      children: f,
                    }),
                  m === `credentials`
                    ? (0, C.jsxs)(`form`, {
                        onSubmit: D,
                        className: `mt-5 space-y-4`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5`,
                                children: `یوزر آئی ڈی (User ID) *`,
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, C.jsx)(mt, {
                                    className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                                  }),
                                  (0, C.jsx)(`input`, {
                                    type: `text`,
                                    required: !0,
                                    autoComplete: `off`,
                                    value: o,
                                    onChange: (e) => s(e.target.value),
                                    placeholder:
                                      i === `admin`
                                        ? `admin`
                                        : `اپنا یوزر آئی ڈی درج کریں`,
                                    className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-3 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-[#0A6B63]`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`label`, {
                                className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5`,
                                children: `پاس ورڈ (Password) *`,
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, C.jsx)(Ge, {
                                    className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                                  }),
                                  (0, C.jsx)(`input`, {
                                    type: u ? `text` : `password`,
                                    required: !0,
                                    autoComplete: `off`,
                                    value: c,
                                    onChange: (e) => l(e.target.value),
                                    placeholder: `••••••••••••`,
                                    className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-10 py-3 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-[#0A6B63]`,
                                  }),
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => d(!u),
                                    className: `absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer`,
                                    children: u
                                      ? (0, C.jsx)(ze, { className: `h-4 w-4` })
                                      : (0, C.jsx)(Be, {
                                          className: `h-4 w-4`,
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i === `admin`
                            ? (0, C.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-2.5`,
                                children: [
                                  (0, C.jsx)(R, {
                                    className: `h-4 w-4 text-[#0A6B63] shrink-0`,
                                  }),
                                  (0, C.jsx)(`span`, {
                                    children: `محفوظ ایڈمن پورٹل — براہ کرم اپنی تصدیق شدہ شناخت اور پاس ورڈ درج کریں۔`,
                                  }),
                                ],
                              })
                            : (0, C.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs space-y-1.5`,
                                children: [
                                  (0, C.jsxs)(`div`, {
                                    className: `flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100`,
                                    children: [
                                      (0, C.jsx)(R, {
                                        className: `h-4 w-4 text-emerald-600 shrink-0`,
                                      }),
                                      (0, C.jsx)(`span`, {
                                        children: `اساتذہ و معلمات کا محفوظ لاگ ان:`,
                                      }),
                                    ],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed`,
                                    children: `ہر استاد ایڈمن کی طرف سے جاری کردہ اپنا ذاتی یوزر آئی ڈی اور پاس ورڈ درج کریں۔`,
                                  }),
                                ],
                              }),
                          (0, C.jsxs)(`button`, {
                            type: `submit`,
                            className: `w-full py-3.5 rounded-xl bg-[#0A6B63] hover:bg-[#085750] text-white font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2`,
                            children: [
                              `🔓 ڈیش بورڈ میں داخل ہوں (Sign In)`,
                              (0, C.jsx)(ve, {
                                className: `h-4 w-4 rtl:rotate-180`,
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, C.jsxs)(`div`, {
                        className: `mt-5 space-y-4 animate-in fade-in`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            className: `p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-2`,
                            children: [
                              (0, C.jsx)(`div`, {
                                className: `w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md`,
                                children: (0, C.jsx)(st, {
                                  className: `h-6 w-6`,
                                }),
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsx)(`h3`, {
                                    className: `font-bold text-sm text-emerald-900 dark:text-emerald-200`,
                                    children: `ٹو فیکٹر تصدیقی کوڈ (2FA Verification)`,
                                  }),
                                  (0, C.jsxs)(`p`, {
                                    className: `text-xs text-emerald-700 dark:text-emerald-300 mt-0.5`,
                                    children: [
                                      `محترم `,
                                      g?.fullNameUrdu || g?.fullName,
                                      `! اپنے موبائل کے `,
                                      (0, C.jsx)(`strong`, {
                                        children: `گوگل اتھینٹیکیٹر (Google Authenticator)`,
                                      }),
                                      ` سے 6 ہندسوں کا کوڈ درج کریں۔`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`form`, {
                            onSubmit: D,
                            className: `space-y-4`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsx)(`label`, {
                                    className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5 text-center`,
                                    children: w
                                      ? `8 ہندسوں کا ہنگامی بیک اپ کوڈ درج کریں:`
                                      : `6 ہندسوں کا سیکیورٹی کوڈ:`,
                                  }),
                                  (0, C.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, C.jsx)(Ue, {
                                        className: `absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600`,
                                      }),
                                      (0, C.jsx)(`input`, {
                                        type: `text`,
                                        autoFocus: !0,
                                        required: !0,
                                        autoComplete: `off`,
                                        maxLength: w ? 10 : 8,
                                        value: y,
                                        onChange: (e) => b(e.target.value),
                                        placeholder: w
                                          ? `بیک اپ کوڈ درج کریں`
                                          : `• • •  • • •`,
                                        className: `w-full text-center text-xl tracking-[0.3em] font-mono font-bold bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl py-3.5 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-[#0A6B63]`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                className: `flex items-center justify-between text-xs`,
                                children: [
                                  (0, C.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => {
                                      (T(!w), b(``), p(``));
                                    },
                                    className: `text-emerald-700 dark:text-emerald-400 hover:underline font-semibold cursor-pointer`,
                                    children: w
                                      ? `← موبائل کوڈ استعمال کریں`
                                      : `ہنگامی بیک اپ کوڈ استعمال کریں`,
                                  }),
                                  (0, C.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => {
                                      (h(`credentials`), v(null), b(``), p(``));
                                    },
                                    className: `text-stone-500 hover:underline cursor-pointer flex items-center gap-1`,
                                    children: [
                                      (0, C.jsx)(_e, {
                                        className: `h-3.5 w-3.5`,
                                      }),
                                      `واپس`,
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`button`, {
                                type: `submit`,
                                disabled: x,
                                className: `w-full py-3.5 rounded-xl bg-[#0A6B63] hover:bg-[#085750] text-white font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer`,
                                children: [
                                  (0, C.jsx)(R, { className: `h-4 w-4` }),
                                  x
                                    ? `تصدیق جاری ہے...`
                                    : `کوڈ تصدیق کریں اور لاگ ان ہوں`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
              (0, C.jsx)(`div`, {
                className: `pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 space-y-2 text-center`,
                children: (0, C.jsxs)(`div`, {
                  className: `text-center text-[10px] text-stone-400 pt-1`,
                  children: [e.founderUr, ` • `, e.addressUr],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Sn = ({ isOpen: e, onClose: t, targetRole: n, onSuccess: r }) => {
    let [i, a] = (0, _.useState)(`credentials`),
      [o, s] = (0, _.useState)(null),
      [c, l] = (0, _.useState)(``),
      [u, d] = (0, _.useState)(``),
      [f, p] = (0, _.useState)(``),
      [m, h] = (0, _.useState)(!1),
      [g, v] = (0, _.useState)(``),
      [y, b] = (0, _.useState)(!1),
      [x, S] = (0, _.useState)(!1);
    if (!e) return null;
    let w = () => {
        (a(`credentials`), s(null), l(``), d(``), p(``), v(``), t());
      },
      T = async (e) => {
        if ((e.preventDefault(), v(``), i === `credentials`)) {
          if (!c.trim() || !u.trim()) {
            v(`براہ کرم یوزر آئی ڈی اور پاس ورڈ درج کریں۔`);
            return;
          }
          let e = P.authenticate(c.trim(), u.trim());
          if (!e) {
            v(`غلط یوزر نیم یا پاس ورڈ! تصدیق میں ناکامی۔`);
            return;
          }
          if (e.role !== n) {
            v(
              `یہ اکاؤنٹ '${e.role === `admin` ? `ایڈمن` : `استاد`}' کا ہے — آپ '${n === `admin` ? `ایڈمن` : `استاد`}' پینل پر سوئچ کر رہے ہیں۔`,
            );
            return;
          }
          if (e.twoFactorEnabled) {
            (s(e), a(`2fa`), p(``), v(``));
            return;
          }
          (P.confirmLogin(e), r(e), w());
        } else {
          if (!f.trim()) {
            v(`براہ کرم 6 ہندسوں کا کوڈ یا بیک اپ کوڈ درج کریں۔`);
            return;
          }
          if (!o) return;
          b(!0);
          let e = o.twoFactorSecret || `JBSWY3DPEHPK3PXP`,
            t = o.twoFactorBackupCode || `87654321`,
            n = await fn(f, e, t);
          (b(!1),
            n.valid
              ? (P.confirmLogin(o), r(o), w())
              : v(
                  `غلط 2FA کوڈ! گوگل اتھینٹیکیٹر یا ہنگامی بیک اپ کوڈ کی تصدیق کریں۔`,
                ));
        }
      },
      E = n === `admin`;
    return (0, C.jsx)(`div`, {
      className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in`,
      children: (0, C.jsxs)(`div`, {
        className: `bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-stone-200 dark:border-stone-800 p-6 space-y-5`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center gap-2.5`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `p-2 rounded-xl ${E ? `bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300` : `bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300`}`,
                    children: E
                      ? (0, C.jsx)(Fe, { className: `h-5 w-5` })
                      : (0, C.jsx)(He, { className: `h-5 w-5` }),
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsx)(`h3`, {
                        className: `font-bold text-base text-stone-900 dark:text-stone-100`,
                        children: E
                          ? `ایڈمن پینل لاگ ان (Switch to Admin)`
                          : `استاد پینل لاگ ان (Switch to Teacher)`,
                      }),
                      (0, C.jsx)(`p`, {
                        className: `text-xs text-stone-500 dark:text-stone-400`,
                        children:
                          i === `credentials`
                            ? `سیکیورٹی تصدیق: آگے بڑھنے کے لیے یوزر و پاس ورڈ درج کریں`
                            : `مرحلہ 2: دو رخی تصدیقی کوڈ (2FA Code) داخل کریں`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(`button`, {
                type: `button`,
                onClick: w,
                className: `p-1.5 rounded-xl text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer transition-colors`,
                children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
              }),
            ],
          }),
          g &&
            (0, C.jsx)(`div`, {
              className: `p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs font-bold text-center animate-in fade-in`,
              children: g,
            }),
          i === `credentials`
            ? (0, C.jsxs)(`form`, {
                onSubmit: T,
                className: `space-y-4`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs flex items-center gap-2`,
                    children: [
                      (0, C.jsx)(R, {
                        className: `h-4 w-4 text-emerald-600 shrink-0`,
                      }),
                      (0, C.jsx)(`span`, {
                        children: E
                          ? `ایڈمنسٹریٹر پینل پر سوئچ کرنے کے لیے ایڈمن کا یوزر نیم اور پاس ورڈ درکار ہے۔`
                          : `استاد کے پینل پر سوئچ کرنے کے لیے متعلقہ استاد کا یوزر نیم اور پاس ورڈ درکار ہے۔`,
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsx)(`label`, {
                        className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5`,
                        children: `یوزر آئی ڈی (User ID) *`,
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, C.jsx)(mt, {
                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: `text`,
                            autoFocus: !0,
                            required: !0,
                            autoComplete: `off`,
                            value: c,
                            onChange: (e) => l(e.target.value),
                            placeholder: E ? `admin` : `استاد کا یوزر نیم`,
                            className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-3 py-3 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    children: [
                      (0, C.jsx)(`label`, {
                        className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5`,
                        children: `پاس ورڈ (Password) *`,
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, C.jsx)(Ge, {
                            className: `absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400`,
                          }),
                          (0, C.jsx)(`input`, {
                            type: m ? `text` : `password`,
                            required: !0,
                            autoComplete: `off`,
                            value: u,
                            onChange: (e) => d(e.target.value),
                            placeholder: `••••••••••••`,
                            className: `w-full text-xs font-semibold bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl ps-9 pe-10 py-3 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`,
                          }),
                          (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: () => h(!m),
                            className: `absolute end-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer`,
                            children: m
                              ? (0, C.jsx)(ze, { className: `h-4 w-4` })
                              : (0, C.jsx)(Be, { className: `h-4 w-4` }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`div`, {
                    className: `pt-2 flex items-center gap-3`,
                    children: [
                      (0, C.jsx)(`button`, {
                        type: `button`,
                        onClick: w,
                        className: `flex-1 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold transition-colors cursor-pointer`,
                        children: `منسوخ کریں (Cancel)`,
                      }),
                      (0, C.jsxs)(`button`, {
                        type: `submit`,
                        className: `flex-1 py-3 px-4 rounded-xl text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${E ? `bg-amber-700 hover:bg-amber-800` : `bg-emerald-600 hover:bg-emerald-700`}`,
                        children: [
                          `تصدیق و آگے بڑھیں`,
                          (0, C.jsx)(ve, {
                            className: `h-4 w-4 rtl:rotate-180`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, C.jsxs)(`div`, {
                className: `space-y-4 animate-in fade-in`,
                children: [
                  (0, C.jsxs)(`div`, {
                    className: `p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-2`,
                    children: [
                      (0, C.jsx)(`div`, {
                        className: `w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md`,
                        children: (0, C.jsx)(st, { className: `h-5 w-5` }),
                      }),
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`h4`, {
                            className: `font-bold text-sm text-emerald-900 dark:text-emerald-200`,
                            children: `ٹو فیکٹر سیکیورٹی تصدیق (2FA Code)`,
                          }),
                          (0, C.jsxs)(`p`, {
                            className: `text-xs text-emerald-700 dark:text-emerald-300 mt-0.5`,
                            children: [
                              `اکاؤنٹ `,
                              (0, C.jsx)(`strong`, {
                                children: o?.fullNameUrdu || o?.fullName,
                              }),
                              ` پر 2FA فعال ہے۔ اپنے گوگل اتھینٹیکیٹر سے 6 ہندسوں کا کوڈ درج کریں۔`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)(`form`, {
                    onSubmit: T,
                    className: `space-y-4`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        children: [
                          (0, C.jsx)(`label`, {
                            className: `block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5 text-center`,
                            children: x
                              ? `8 ہندسوں کا ہنگامی بیک اپ کوڈ:`
                              : `6 ہندسوں کا اتھینٹیکیٹر کوڈ:`,
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `relative`,
                            children: [
                              (0, C.jsx)(Ue, {
                                className: `absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600`,
                              }),
                              (0, C.jsx)(`input`, {
                                type: `text`,
                                autoFocus: !0,
                                required: !0,
                                autoComplete: `off`,
                                maxLength: x ? 10 : 8,
                                value: f,
                                onChange: (e) => p(e.target.value),
                                placeholder: x
                                  ? `مثلاً: 87654321`
                                  : `• • •  • • •`,
                                className: `w-full text-center text-xl tracking-[0.3em] font-mono font-bold bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl py-3.5 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `flex items-center justify-between text-xs`,
                        children: [
                          (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: () => {
                              (S(!x), p(``), v(``));
                            },
                            className: `text-emerald-700 dark:text-emerald-400 hover:underline font-semibold cursor-pointer`,
                            children: x
                              ? `← موبائل کوڈ استعمال کریں`
                              : `ہنگامی بیک اپ کوڈ`,
                          }),
                          (0, C.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => {
                              (a(`credentials`), s(null), p(``), v(``));
                            },
                            className: `text-stone-500 hover:underline cursor-pointer flex items-center gap-1`,
                            children: [
                              (0, C.jsx)(_e, { className: `h-3.5 w-3.5` }),
                              `واپس`,
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `pt-2 flex items-center gap-3`,
                        children: [
                          (0, C.jsx)(`button`, {
                            type: `button`,
                            onClick: w,
                            className: `flex-1 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold transition-colors cursor-pointer`,
                            children: `منسوخ کریں`,
                          }),
                          (0, C.jsxs)(`button`, {
                            type: `submit`,
                            disabled: y,
                            className: `flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer`,
                            children: [
                              (0, C.jsx)(R, { className: `h-4 w-4` }),
                              y ? `تصدیق جاری ہے...` : `تصدیق و لاگ ان`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    });
  },
  Cn = ({ isOpen: e, onClose: t, type: n, data: r, settings: i }) => {
    let { language: a, t: o, dir: s } = E();
    if (!e || !r) return null;
    let c = () => {
        window.print();
      },
      l = () => {
        switch (n) {
          case `admission`:
            return o(`AdmissionCardTitle`);
          case `fee`:
            return o(`FeeVoucherTitle`);
          case `salary`:
            return o(`SalarySlipTitle`);
          case `result`:
            return o(`ResultCardTitle`);
          default:
            return o(`FeeVoucherTitle`);
        }
      },
      u = a === `en`;
    return (0, C.jsx)(`div`, {
      className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm`,
      children: (0, C.jsxs)(`div`, {
        className: `bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 dark:border-stone-800 animate-in fade-in zoom-in-95 duration-150`,
        children: [
          (0, C.jsxs)(`div`, {
            className: `no-print flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50`,
            children: [
              (0, C.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, C.jsx)(tt, {
                    className: `h-5 w-5 text-emerald-600 dark:text-emerald-400`,
                  }),
                  (0, C.jsx)(`h3`, {
                    className: `font-bold text-stone-900 dark:text-stone-100`,
                    children: l(),
                  }),
                ],
              }),
              (0, C.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, C.jsxs)(`button`, {
                    onClick: c,
                    className: `flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-xs cursor-pointer`,
                    children: [
                      (0, C.jsx)(tt, { className: `h-4 w-4` }),
                      o(`Print`),
                    ],
                  }),
                  (0, C.jsx)(`button`, {
                    onClick: t,
                    className: `p-2 rounded-xl text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer`,
                    children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                  }),
                ],
              }),
            ],
          }),
          (0, C.jsx)(`div`, {
            className: `flex-1 overflow-y-auto p-6 bg-stone-100 dark:bg-stone-950/70 flex justify-center`,
            children: (0, C.jsxs)(`div`, {
              dir: s,
              className: `print-page-a5 w-full max-w-[148mm] bg-white text-stone-900 p-6 rounded-xl shadow-md border border-stone-200 print:border-none print:shadow-none ${u ? `font-sans` : `font-serif`}`,
              children: [
                (0, C.jsxs)(`div`, {
                  className: `text-center border-b-2 border-emerald-800 pb-3 mb-4`,
                  children: [
                    (0, C.jsx)(`div`, {
                      className: `flex justify-center mb-1`,
                      children: (0, C.jsx)(`img`, {
                        src: `./assets/logo.jpg`,
                        alt: `Logo`,
                        className: `h-14 w-14 object-cover rounded-full border border-emerald-700`,
                        onError: (e) => {
                          e.target.style.display = `none`;
                        },
                      }),
                    }),
                    (0, C.jsx)(`h2`, {
                      className: `text-xl font-bold text-emerald-900 tracking-wide font-sans`,
                      children: u ? i.madrasaNameEn : i.madrasaNameUr,
                    }),
                    (0, C.jsx)(`p`, {
                      className: `text-xs font-semibold text-stone-700 mt-0.5 font-sans`,
                      children: u ? i.madrasaNameUr : i.madrasaNameEn,
                    }),
                    (0, C.jsxs)(`p`, {
                      className: `text-[11px] text-stone-500 mt-0.5`,
                      children: [i.founderUr, ` • `, i.addressUr],
                    }),
                    (0, C.jsxs)(`p`, {
                      className: `text-[10px] text-stone-500`,
                      children: [
                        o(`ContactLabel`),
                        ` `,
                        i.phonePrimary,
                        ` | `,
                        i.phoneSecondary,
                      ],
                    }),
                  ],
                }),
                (0, C.jsx)(`div`, {
                  className: `text-center bg-emerald-50 border border-emerald-200 rounded-lg py-1.5 px-3 mb-3`,
                  children: (0, C.jsx)(`h3`, {
                    className: `text-sm font-black text-emerald-950 tracking-wide`,
                    children: l(),
                  }),
                }),
                n === `fee` &&
                  (0, C.jsxs)(`div`, {
                    className: `space-y-3 text-sm`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-between items-center bg-stone-50 p-2 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 font-sans`,
                        children: [
                          (0, C.jsxs)(`span`, {
                            children: [o(`ReceiptNo`), `: `, r.receiptNo],
                          }),
                          (0, C.jsxs)(`span`, {
                            children: [
                              o(`Date`),
                              `: `,
                              r.paymentDate ||
                                new Date().toISOString().split(`T`)[0],
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2 text-xs py-2 border-b border-stone-200`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`StudentName`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-sm text-stone-900`,
                                children: r.studentName,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`AdmissionNo`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-sm text-stone-900`,
                                children: r.admissionNo || `—`,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`MonthYear`), `:`],
                              }),
                              (0, C.jsxs)(`p`, {
                                className: `font-bold text-stone-800`,
                                children: [r.periodMonth, `/`, r.periodYear],
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`PaymentMethod`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-stone-800`,
                                children:
                                  r.paymentMethod === `Cash`
                                    ? o(`Cash`)
                                    : r.paymentMethod === `Bank`
                                      ? o(`BankTransfer`)
                                      : o(`EasyPaisaJazzCash`),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsx)(`table`, {
                        className: `w-full text-xs text-start border-collapse my-2`,
                        children: (0, C.jsxs)(`tbody`, {
                          children: [
                            (0, C.jsxs)(`tr`, {
                              className: `border-b border-stone-200`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5 text-stone-600`,
                                  children: o(`OriginalFee`),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5 text-end font-semibold`,
                                  children: z(r.monthlyFee),
                                }),
                              ],
                            }),
                            r.concessionPct > 0 &&
                              (0, C.jsxs)(`tr`, {
                                className: `border-b border-stone-200 text-emerald-700`,
                                children: [
                                  (0, C.jsxs)(`td`, {
                                    className: `py-1.5`,
                                    children: [
                                      o(`ConcessionScholarship`),
                                      ` (`,
                                      r.concessionReason || o(`Yateem`),
                                      `)`,
                                    ],
                                  }),
                                  (0, C.jsxs)(`td`, {
                                    className: `py-1.5 text-end font-semibold`,
                                    children: [`-`, r.concessionPct, `%`],
                                  }),
                                ],
                              }),
                            (0, C.jsxs)(`tr`, {
                              className: `border-t-2 border-emerald-800 font-bold text-sm text-emerald-950 bg-emerald-50/50`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-2 px-1`,
                                  children: o(`PaidAmount`),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-2 px-1 text-end text-base`,
                                  children: z(r.amountPaid),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      r.notes &&
                        (0, C.jsxs)(`p`, {
                          className: `text-[11px] text-stone-500 italic bg-stone-50 p-2 rounded`,
                          children: [o(`Notes`), `: `, r.notes],
                        }),
                    ],
                  }),
                n === `admission` &&
                  (0, C.jsxs)(`div`, {
                    className: `space-y-3 text-sm`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-between items-center bg-stone-50 p-2 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 font-sans`,
                        children: [
                          (0, C.jsxs)(`span`, {
                            children: [
                              o(`AdmissionCardForYear`),
                              ` `,
                              i.academicYear,
                            ],
                          }),
                          (0, C.jsxs)(`span`, {
                            children: [o(`AdmissionNo`), `: `, r.admissionNo],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `flex gap-4 items-start py-2 border-b border-stone-200`,
                        children: [
                          (0, C.jsx)(`div`, {
                            className: `h-24 w-20 rounded-lg border border-stone-300 overflow-hidden bg-stone-100 shrink-0`,
                            children: (0, C.jsx)(`img`, {
                              src: Et(r.photoPath),
                              alt: `Student`,
                              className: `h-full w-full object-cover`,
                              onError: (e) => {
                                e.target.src = `./assets/app.ico`;
                              },
                            }),
                          }),
                          (0, C.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-2 text-xs flex-1`,
                            children: [
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`StudentName`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-sm text-stone-900`,
                                    children: u
                                      ? r.fullName || r.fullNameUrdu
                                      : r.fullNameUrdu || r.fullName,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`FatherName`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-sm text-stone-900`,
                                    children: u
                                      ? r.fatherName || r.fatherNameUrdu
                                      : r.fatherNameUrdu || r.fatherName,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`DOB`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-stone-800`,
                                    children: r.dob || `—`,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`CNICFormB`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-stone-800`,
                                    children: r.cnicFormB || `—`,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`ContactPhone`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-stone-800`,
                                    children: r.guardianPhone || r.phone || `—`,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`div`, {
                                children: [
                                  (0, C.jsxs)(`span`, {
                                    className: `text-stone-500`,
                                    children: [o(`BloodGroup`), `:`],
                                  }),
                                  (0, C.jsx)(`p`, {
                                    className: `font-bold text-stone-800`,
                                    children: r.bloodGroup || `—`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `text-xs space-y-1`,
                        children: [
                          (0, C.jsxs)(`p`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`Address`), `:`],
                              }),
                              ` `,
                              r.address || `—`,
                            ],
                          }),
                          (0, C.jsxs)(`p`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`OriginalFee`), `:`],
                              }),
                              ` `,
                              (0, C.jsx)(`span`, {
                                className: `font-bold`,
                                children: z(r.monthlyFee),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                n === `salary` &&
                  (0, C.jsxs)(`div`, {
                    className: `space-y-3 text-sm`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-between items-center bg-stone-50 p-2 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 font-sans`,
                        children: [
                          (0, C.jsxs)(`span`, {
                            children: [o(`SlipNo`), `: `, r.slipNo],
                          }),
                          (0, C.jsxs)(`span`, {
                            children: [
                              o(`MonthYear`),
                              `: `,
                              r.periodMonth,
                              `/`,
                              r.periodYear,
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2 text-xs py-2 border-b border-stone-200`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`EmployeeName`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-sm text-stone-900`,
                                children: r.teacherName,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`EmployeeID`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-stone-800`,
                                children: r.employeeNo || `—`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsx)(`table`, {
                        className: `w-full text-xs text-start border-collapse my-2`,
                        children: (0, C.jsxs)(`tbody`, {
                          children: [
                            (0, C.jsxs)(`tr`, {
                              className: `border-b border-stone-200`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5 text-stone-600`,
                                  children: o(`BasicPay`),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5 text-end font-semibold`,
                                  children: z(r.basic),
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`tr`, {
                              className: `border-b border-stone-200 text-emerald-700`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5`,
                                  children: o(`Allowances`),
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-1.5 text-end font-semibold`,
                                  children: [`+`, z(r.allowances || 0)],
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`tr`, {
                              className: `border-b border-stone-200 text-rose-700`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-1.5`,
                                  children: o(`Deductions`),
                                }),
                                (0, C.jsxs)(`td`, {
                                  className: `py-1.5 text-end font-semibold`,
                                  children: [`-`, z(r.deductions || 0)],
                                }),
                              ],
                            }),
                            (0, C.jsxs)(`tr`, {
                              className: `border-t-2 border-emerald-800 font-bold text-sm text-emerald-950 bg-emerald-50/50`,
                              children: [
                                (0, C.jsx)(`td`, {
                                  className: `py-2 px-1`,
                                  children: o(`NetAmountPaid`),
                                }),
                                (0, C.jsx)(`td`, {
                                  className: `py-2 px-1 text-end text-base`,
                                  children: z(r.netAmount),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                n === `result` &&
                  (0, C.jsxs)(`div`, {
                    className: `space-y-4 text-sm`,
                    children: [
                      (0, C.jsxs)(`div`, {
                        className: `flex justify-between items-center bg-stone-50 p-2.5 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 font-sans`,
                        children: [
                          (0, C.jsxs)(`span`, {
                            children: [
                              o(`ExamTitle`),
                              `: `,
                              r.examName || r.examNameUrdu || o(`ExamTitle`),
                            ],
                          }),
                          (0, C.jsxs)(`span`, {
                            children: [
                              o(`Date`),
                              `: `,
                              r.examDate ||
                                new Date().toISOString().split(`T`)[0],
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-2 text-xs py-2 border-b border-stone-200`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`StudentName`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold text-sm text-stone-900`,
                                children: r.studentName,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsxs)(`span`, {
                                className: `text-stone-500`,
                                children: [o(`AdmissionNo`), `:`],
                              }),
                              (0, C.jsx)(`p`, {
                                className: `font-bold font-mono text-stone-800`,
                                children: r.admissionNo,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`table`, {
                        className: `w-full text-xs text-center border-collapse my-3`,
                        children: [
                          (0, C.jsx)(`thead`, {
                            children: (0, C.jsxs)(`tr`, {
                              className: `bg-stone-100 font-bold border border-stone-300`,
                              children: [
                                (0, C.jsx)(`th`, {
                                  className: `p-2 border border-stone-300`,
                                  children: o(`ExamDepartment`),
                                }),
                                (0, C.jsx)(`th`, {
                                  className: `p-2 border border-stone-300`,
                                  children: o(`TotalMarksHeader`),
                                }),
                                (0, C.jsx)(`th`, {
                                  className: `p-2 border border-stone-300`,
                                  children: o(`ObtainedMarksHeader`),
                                }),
                              ],
                            }),
                          }),
                          (0, C.jsxs)(`tbody`, {
                            children: [
                              (0, C.jsxs)(`tr`, {
                                children: [
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300 font-semibold text-start`,
                                    children: o(`OralExam`),
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300`,
                                    children: r.oralMax || 50,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300 font-bold text-emerald-700`,
                                    children: r.oralMarks,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`tr`, {
                                children: [
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300 font-semibold text-start`,
                                    children: o(`WrittenExam`),
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300`,
                                    children: r.writtenMax || 50,
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2 border border-stone-300 font-bold text-emerald-700`,
                                    children: r.writtenMarks,
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(`tr`, {
                                className: `bg-emerald-50/60 font-bold text-emerald-950`,
                                children: [
                                  (0, C.jsx)(`td`, {
                                    className: `p-2.5 border border-stone-300 text-start`,
                                    children: o(`CumulativeTotal`),
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2.5 border border-stone-300`,
                                    children:
                                      (r.oralMax || 50) + (r.writtenMax || 50),
                                  }),
                                  (0, C.jsx)(`td`, {
                                    className: `p-2.5 border border-stone-300 text-base`,
                                    children: r.totalMarks,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsxs)(`div`, {
                        className: `p-3 bg-stone-50 rounded-xl border border-stone-200 flex justify-between items-center text-xs`,
                        children: [
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `text-stone-500 block`,
                                children: o(`GradeResult`),
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-bold text-emerald-800 text-sm`,
                                children: r.grade,
                              }),
                            ],
                          }),
                          (0, C.jsxs)(`div`, {
                            children: [
                              (0, C.jsx)(`span`, {
                                className: `text-stone-500 block`,
                                children: o(`RemarksResult`),
                              }),
                              (0, C.jsx)(`span`, {
                                className: `font-medium text-stone-800`,
                                children: r.remarks || `ماشاءاللہ جید`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, C.jsxs)(`div`, {
                  className: `pt-8 mt-6 border-t border-dashed border-stone-300 grid grid-cols-2 text-center text-xs`,
                  children: [
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`div`, {
                          className: `w-28 border-b border-stone-400 mx-auto mb-1`,
                        }),
                        (0, C.jsx)(`span`, {
                          className: `text-stone-500 font-sans`,
                          children: o(`SignCashier`),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(`div`, {
                      children: [
                        (0, C.jsx)(`div`, {
                          className: `w-28 border-b border-stone-400 mx-auto mb-1`,
                        }),
                        (0, C.jsx)(`span`, {
                          className: `text-stone-500 font-sans`,
                          children: o(`SignPrincipal`),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, C.jsx)(`div`, {
                  className: `text-center text-[9px] text-stone-400 mt-4 leading-relaxed`,
                  children: o(`ComputerGeneratedNotice`),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  wn = () => {
    let { t: e } = E(),
      [t, n] = (0, _.useState)(() => P.getSettings()),
      [r, i] = (0, _.useState)(() => P.getCurrentUser()),
      [a, o] = (0, _.useState)(`dashboard`),
      [s, c] = (0, _.useState)(!1),
      [l, u] = (0, _.useState)(!1),
      [d, f] = (0, _.useState)(`admin`),
      [p, m] = (0, _.useState)(() => P.getStudents()),
      [h, g] = (0, _.useState)(() => P.getTeachers()),
      [v, y] = (0, _.useState)(() => P.getClasses()),
      [b, x] = (0, _.useState)(() => P.getAttendance()),
      [S, w] = (0, _.useState)(() => P.getProgress()),
      [T, D] = (0, _.useState)(() => P.getFees()),
      [O, k] = (0, _.useState)(() => P.getTransactions()),
      [A, ee] = (0, _.useState)(() => P.getSalaries()),
      [te, ne] = (0, _.useState)(!1),
      [re, ie] = (0, _.useState)(`fee`),
      [j, M] = (0, _.useState)(null),
      ae = (e) => {
        (f(e), u(!0));
      },
      oe = (e) => {
        (i(e), o(`dashboard`), u(!1));
      },
      N = () => {
        (P.logout(), i(null), o(`dashboard`));
      },
      se = (e) => {
        let t = P.addStudent(e);
        (m(P.getStudents()), ve(t));
      },
      F = (e, t) => {
        (P.updateStudent(e, t), m(P.getStudents()));
      },
      ce = (e) => {
        (P.deleteStudent(e), m(P.getStudents()));
      },
      le = (e) => {
        (P.saveAttendance(e), x(P.getAttendance()));
      },
      ue = (e) => {
        (P.addProgress(e), w(P.getProgress()));
      },
      de = (e) => {
        let t = P.addFee(e);
        (D(P.getFees()), k(P.getTransactions()), ye(t));
      },
      fe = (e) => {
        (P.addTransaction(e), k(P.getTransactions()));
      },
      pe = (e) => {
        (P.addTeacher(e), g(P.getTeachers()), y(P.getClasses()));
      },
      me = (e, t) => {
        (P.updateTeacher(e, t), g(P.getTeachers()), y(P.getClasses()));
      },
      he = (e) => {
        (P.deleteTeacher(e), g(P.getTeachers()), y(P.getClasses()));
      },
      I = (e) => {
        let t = P.addSalary(e);
        (ee(P.getSalaries()), k(P.getTransactions()), be(t));
      },
      ge = (e) => {
        (P.addClass(e), y(P.getClasses()), g(P.getTeachers()));
      },
      _e = (e) => {
        let t = P.updateSettings(e);
        n(t);
      },
      ve = (e) => {
        (ie(`admission`), M(e), ne(!0));
      },
      ye = (e) => {
        (ie(`fee`), M(e), ne(!0));
      },
      be = (e) => {
        (ie(`salary`), M(e), ne(!0));
      },
      xe = (e) => {
        (ie(`result`), M(e), ne(!0));
      },
      Se = () => {
        let e = {
            version: `2.0-cloud`,
            exportedAt: new Date().toISOString(),
            settings: t,
            students: p,
            teachers: h,
            classes: v,
            attendance: b,
            progress: S,
            fees: T,
            transactions: O,
            salaries: A,
          },
          n = new Blob([JSON.stringify(e, null, 2)], {
            type: `application/json`,
          }),
          r = URL.createObjectURL(n),
          i = document.createElement(`a`);
        ((i.href = r),
          (i.download = `madrasa_backup_${new Date().toISOString().split(`T`)[0]}.json`),
          i.click(),
          URL.revokeObjectURL(r));
      },
      Ce = new Date().getMonth() + 1,
      we = new Date().getFullYear(),
      Te = T.filter((e) => e.periodMonth === Ce && e.periodYear === we).reduce(
        (e, t) => e + t.amountPaid,
        0,
      ),
      Ee =
        O.filter((e) => e.type === `Income`).reduce((e, t) => e + t.amount, 0) -
        O.filter((e) => e.type === `Expense`).reduce((e, t) => e + t.amount, 0);
    if (!r)
      return (0, C.jsx)(xn, {
        settings: t,
        onLoginSuccess: (e) => {
          (i(e), o(`dashboard`));
        },
      });
    let De = [
        `fees`,
        `accounts`,
        `salaries`,
        `reports`,
        `settings`,
        `teachers`,
        `classes`,
      ].includes(a),
      L = r.role === `teacher` && De ? `dashboard` : a,
      Oe = r.role === `teacher`,
      ke = Oe ? r.teacherId : void 0,
      Ae = Oe && ke ? v.filter((e) => e.teacherId === ke) : v,
      je = Ae.map((e) => e.id),
      Me = Oe ? p.filter((e) => e.classId && je.includes(e.classId)) : p,
      Ne = Me.map((e) => e.id),
      Pe = Oe
        ? b.filter((e) => Ne.includes(e.studentId) || je.includes(e.classId))
        : b,
      Fe = Oe
        ? S.filter((e) => Ne.includes(e.studentId) || e.teacherId === ke)
        : S,
      Ie = new Date().toISOString().split(`T`)[0],
      Le = (Oe ? Pe : b).filter((e) => e.date === Ie),
      Re = Le.filter((e) => e.status === `Present`).length,
      ze = Le.length > 0 ? Math.round((Re / Le.length) * 100) : 95,
      Be = () => {
        switch (L) {
          case `dashboard`:
            return r.role === `admin` ? e(`Dashboard`) : e(`MyDashboard`);
          case `students`:
            return r.role === `admin` ? e(`Students`) : e(`MyStudents`);
          case `teachers`:
            return e(`Teachers`);
          case `classes`:
            return e(`Classes`);
          case `attendance`:
            return e(`Attendance`);
          case `hifz`:
            return e(`SabaqEntry`);
          case `fees`:
            return e(`Fees`);
          case `accounts`:
            return e(`Accounts`);
          case `salaries`:
            return e(`Salaries`);
          case `exams`:
            return e(`Exams`);
          case `reports`:
            return e(`Reports`);
          case `settings`:
            return e(`Settings`);
          default:
            return `Madrasa System`;
        }
      },
      Ve =
        r.role === `admin`
          ? [
              { id: `dashboard`, label: e(`Dashboard`) },
              { id: `students`, label: e(`Students`) },
              { id: `teachers`, label: e(`Teachers`) },
              { id: `classes`, label: e(`Classes`) },
              { id: `attendance`, label: e(`Attendance`) },
              { id: `hifz`, label: e(`SabaqEntry`) },
              { id: `fees`, label: e(`Fees`) },
              { id: `accounts`, label: e(`Accounts`) },
              { id: `salaries`, label: e(`Salaries`) },
              { id: `exams`, label: e(`Exams`) },
              { id: `reports`, label: e(`Reports`) },
              { id: `settings`, label: e(`Settings`) },
            ]
          : [
              { id: `dashboard`, label: e(`MyDashboard`) },
              { id: `students`, label: e(`MyStudents`) },
              { id: `attendance`, label: e(`MarkAttendance`) },
              { id: `hifz`, label: e(`SabaqEntry`) },
              { id: `exams`, label: e(`MarksEntry`) },
            ];
    return (0, C.jsxs)(`div`, {
      className: `flex min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors`,
      children: [
        (0, C.jsx)(vt, {
          currentTab: L,
          onTabChange: (e) => {
            (o(e), c(!1));
          },
          role: r.role,
          onRoleSwitch: ae,
          onLogout: N,
          madrasaNameUr: t.madrasaNameUr,
          madrasaNameEn: t.madrasaNameEn,
        }),
        s &&
          (0, C.jsx)(`div`, {
            className: `lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex`,
            onClick: () => c(!1),
            children: (0, C.jsxs)(`div`, {
              className: `w-72 bg-white dark:bg-stone-900 h-full p-4 flex flex-col shadow-2xl border-e border-stone-200 dark:border-stone-800`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, C.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800`,
                  children: [
                    (0, C.jsx)(`span`, {
                      className: `font-bold text-sm text-stone-900 dark:text-stone-100`,
                      children: `مدرسہ مینیو (Menu)`,
                    }),
                    (0, C.jsx)(`button`, {
                      onClick: () => c(!1),
                      className: `p-1 rounded-lg text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800`,
                      children: (0, C.jsx)(_t, { className: `h-5 w-5` }),
                    }),
                  ],
                }),
                (0, C.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto py-3 space-y-1`,
                  children: Ve.map((e) =>
                    (0, C.jsx)(
                      `button`,
                      {
                        onClick: () => {
                          (o(e.id), c(!1));
                        },
                        className: `w-full text-start px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${L === e.id ? `bg-emerald-600 text-white` : `text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800`}`,
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, C.jsx)(`div`, {
                  className: `pt-3 border-t border-stone-100 dark:border-stone-800 mt-auto`,
                  children: (0, C.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => {
                      (c(!1), ae(r.role === `admin` ? `teacher` : `admin`));
                    },
                    className: `w-full py-2.5 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-emerald-600 flex items-center justify-center gap-1.5 transition-colors cursor-pointer`,
                    children: [
                      (0, C.jsx)(Ge, {
                        className: `h-3.5 w-3.5 text-emerald-600`,
                      }),
                      r.role === `admin`
                        ? `Switch Teacher 🔒`
                        : `Switch Admin 🔒`,
                    ],
                  }),
                }),
              ],
            }),
          }),
        (0, C.jsxs)(`div`, {
          className: `flex-1 flex flex-col min-w-0`,
          children: [
            (0, C.jsx)(St, {
              title: Be(),
              currentUser: r,
              onOpenMobileMenu: () => c(!0),
              onLogout: N,
            }),
            (0, C.jsxs)(`main`, {
              className: `flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto`,
              children: [
                L === `dashboard` &&
                  (0, C.jsx)(Dt, {
                    role: r.role,
                    students: Me,
                    teachers: h,
                    transactions: O,
                    progress: Fe,
                    attendanceRate: ze,
                    monthlyFeeCollected: Te,
                    netBalance: Ee,
                    onNavigate: o,
                    onNewAdmission: () => o(`students`),
                    onRecordFee: () => o(`fees`),
                    classes: Ae,
                    currentUser: r,
                    attendanceRecords: b,
                  }),
                L === `students` &&
                  (0, C.jsx)(Ot, {
                    students: Me,
                    classes: Ae,
                    onAddStudent: se,
                    onUpdateStudent: F,
                    onDeleteStudent: ce,
                    onPrintAdmission: ve,
                    role: r.role,
                  }),
                L === `teachers` &&
                  (0, C.jsx)(hn, {
                    teachers: h,
                    classes: v,
                    onAddTeacher: pe,
                    onUpdateTeacher: me,
                    onDeleteTeacher: he,
                  }),
                L === `classes` &&
                  (0, C.jsx)(_n, { classes: v, teachers: h, onAddClass: ge }),
                L === `attendance` &&
                  (0, C.jsx)(kt, {
                    students: Me,
                    classes: Ae,
                    attendanceRecords: b,
                    onSaveAttendance: le,
                    role: r.role,
                    teachers: h,
                    allStudents: p,
                    allClasses: v,
                    currentUserName: r.fullNameUrdu || r.fullName,
                    currentUser: r,
                  }),
                L === `hifz` &&
                  (0, C.jsx)(At, {
                    students: Me,
                    progressRecords: Fe,
                    onAddProgress: ue,
                    currentUser: r,
                  }),
                L === `fees` &&
                  (0, C.jsx)(jt, {
                    students: p,
                    fees: T,
                    onAddFee: de,
                    onPrintReceipt: ye,
                  }),
                L === `accounts` &&
                  (0, C.jsx)(Mt, { transactions: O, onAddTransaction: fe }),
                L === `salaries` &&
                  (0, C.jsx)(gn, {
                    teachers: h,
                    salaries: A,
                    onAddSalary: I,
                    onPrintSlip: be,
                  }),
                L === `exams` &&
                  (0, C.jsx)(vn, {
                    students: Me,
                    classes: Ae,
                    onPrintResult: xe,
                    role: r.role,
                  }),
                L === `reports` &&
                  (0, C.jsx)(yn, {
                    students: p,
                    classes: v,
                    fees: T,
                    transactions: O,
                    onNavigate: o,
                  }),
                L === `settings` &&
                  r.role === `admin` &&
                  (0, C.jsx)(bn, {
                    settings: t,
                    onUpdateSettings: _e,
                    onExportBackup: Se,
                    currentUser: r,
                    onUpdateCurrentUser: (e) => i(e),
                  }),
              ],
            }),
            (0, C.jsx)(Ct, { currentTab: L, onTabChange: o, role: r.role }),
          ],
        }),
        (0, C.jsx)(Cn, {
          isOpen: te,
          onClose: () => ne(!1),
          type: re,
          data: j,
          settings: t,
        }),
        (0, C.jsx)(Sn, {
          isOpen: l,
          onClose: () => u(!1),
          targetRole: d,
          onSuccess: oe,
        }),
      ],
    });
  };
(0, v.createRoot)(document.getElementById(`root`)).render(
  (0, C.jsx)(_.StrictMode, {
    children: (0, C.jsx)(
      () =>
        (0, C.jsx)(O, {
          children: (0, C.jsx)(T, { children: (0, C.jsx)(wn, {}) }),
        }),
      {},
    ),
  }),
);
