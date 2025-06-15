function Jc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity),
        l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
}
)();
function Zc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ca = {
    exports: {}
}
  , xl = {}
  , Ea = {
    exports: {}
}
  , R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Symbol.for("react.element")
  , qc = Symbol.for("react.portal")
  , ed = Symbol.for("react.fragment")
  , td = Symbol.for("react.strict_mode")
  , nd = Symbol.for("react.profiler")
  , rd = Symbol.for("react.provider")
  , ld = Symbol.for("react.context")
  , id = Symbol.for("react.forward_ref")
  , od = Symbol.for("react.suspense")
  , sd = Symbol.for("react.memo")
  , ad = Symbol.for("react.lazy")
  , as = Symbol.iterator;
function ud(e) {
    return e === null || typeof e != "object" ? null : (e = as && e[as] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ta = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Pa = Object.assign
  , Ma = {};
function vn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ma,
    this.updater = n || Ta
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
vn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Da() {}
Da.prototype = vn.prototype;
function fo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ma,
    this.updater = n || Ta
}
var ho = fo.prototype = new Da;
ho.constructor = fo;
Pa(ho, vn.prototype);
ho.isPureReactComponent = !0;
var us = Array.isArray
  , _a = Object.prototype.hasOwnProperty
  , po = {
    current: null
}
  , La = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ra(e, t, n) {
    var r, l = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            _a.call(t, r) && !La.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        l.children = n;
    else if (1 < a) {
        for (var u = Array(a), c = 0; c < a; c++)
            u[c] = arguments[c + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: ar,
        type: e,
        key: o,
        ref: s,
        props: l,
        _owner: po.current
    }
}
function cd(e, t) {
    return {
        $$typeof: ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function mo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ar
}
function dd(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var cs = /\/+/g;
function Al(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? dd("" + e.key) : t.toString(36)
}
function Or(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ar:
            case qc:
                s = !0
            }
        }
    if (s)
        return s = e,
        l = l(s),
        e = r === "" ? "." + Al(s, 0) : r,
        us(l) ? (n = "",
        e != null && (n = e.replace(cs, "$&/") + "/"),
        Or(l, t, n, "", function(c) {
            return c
        })) : l != null && (mo(l) && (l = cd(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(cs, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    us(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Al(o, a);
            s += Or(o, t, n, u, l)
        }
    else if (u = ud(e),
    typeof u == "function")
        for (e = u.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            u = r + Al(o, a++),
            s += Or(o, t, n, u, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function vr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Or(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function fd(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ce = {
    current: null
}
  , Ir = {
    transition: null
}
  , hd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Ir,
    ReactCurrentOwner: po
};
function Oa() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: vr,
    forEach: function(e, t, n) {
        vr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return vr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return vr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!mo(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = vn;
R.Fragment = ed;
R.Profiler = nd;
R.PureComponent = fo;
R.StrictMode = td;
R.Suspense = od;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hd;
R.act = Oa;
R.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Pa({}, e.props)
      , l = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = po.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (u in t)
            _a.call(t, u) && !La.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var c = 0; c < u; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: ar,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: s
    }
}
;
R.createContext = function(e) {
    return e = {
        $$typeof: ld,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: rd,
        _context: e
    },
    e.Consumer = e
}
;
R.createElement = Ra;
R.createFactory = function(e) {
    var t = Ra.bind(null, e);
    return t.type = e,
    t
}
;
R.createRef = function() {
    return {
        current: null
    }
}
;
R.forwardRef = function(e) {
    return {
        $$typeof: id,
        render: e
    }
}
;
R.isValidElement = mo;
R.lazy = function(e) {
    return {
        $$typeof: ad,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: fd
    }
}
;
R.memo = function(e, t) {
    return {
        $$typeof: sd,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
R.startTransition = function(e) {
    var t = Ir.transition;
    Ir.transition = {};
    try {
        e()
    } finally {
        Ir.transition = t
    }
}
;
R.unstable_act = Oa;
R.useCallback = function(e, t) {
    return ce.current.useCallback(e, t)
}
;
R.useContext = function(e) {
    return ce.current.useContext(e)
}
;
R.useDebugValue = function() {}
;
R.useDeferredValue = function(e) {
    return ce.current.useDeferredValue(e)
}
;
R.useEffect = function(e, t) {
    return ce.current.useEffect(e, t)
}
;
R.useId = function() {
    return ce.current.useId()
}
;
R.useImperativeHandle = function(e, t, n) {
    return ce.current.useImperativeHandle(e, t, n)
}
;
R.useInsertionEffect = function(e, t) {
    return ce.current.useInsertionEffect(e, t)
}
;
R.useLayoutEffect = function(e, t) {
    return ce.current.useLayoutEffect(e, t)
}
;
R.useMemo = function(e, t) {
    return ce.current.useMemo(e, t)
}
;
R.useReducer = function(e, t, n) {
    return ce.current.useReducer(e, t, n)
}
;
R.useRef = function(e) {
    return ce.current.useRef(e)
}
;
R.useState = function(e) {
    return ce.current.useState(e)
}
;
R.useSyncExternalStore = function(e, t, n) {
    return ce.current.useSyncExternalStore(e, t, n)
}
;
R.useTransition = function() {
    return ce.current.useTransition()
}
;
R.version = "18.3.1";
Ea.exports = R;
var k = Ea.exports;
const Ia = Zc(k)
  , pd = Jc({
    __proto__: null,
    default: Ia
}, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md = k
  , gd = Symbol.for("react.element")
  , vd = Symbol.for("react.fragment")
  , xd = Object.prototype.hasOwnProperty
  , yd = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , wd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function za(e, t, n) {
    var r, l = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        xd.call(t, r) && !wd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: gd,
        type: e,
        key: o,
        ref: s,
        props: l,
        _owner: yd.current
    }
}
xl.Fragment = vd;
xl.jsx = za;
xl.jsxs = za;
Ca.exports = xl;
var i = Ca.exports
  , pi = {}
  , Fa = {
    exports: {}
}
  , Se = {}
  , ba = {
    exports: {}
}
  , Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, D) {
        var L = C.length;
        C.push(D);
        e: for (; 0 < L; ) {
            var Q = L - 1 >>> 1
              , Z = C[Q];
            if (0 < l(Z, D))
                C[Q] = D,
                C[L] = Z,
                L = Q;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var D = C[0]
          , L = C.pop();
        if (L !== D) {
            C[0] = L;
            e: for (var Q = 0, Z = C.length, mr = Z >>> 1; Q < mr; ) {
                var St = 2 * (Q + 1) - 1
                  , Ul = C[St]
                  , Nt = St + 1
                  , gr = C[Nt];
                if (0 > l(Ul, L))
                    Nt < Z && 0 > l(gr, Ul) ? (C[Q] = gr,
                    C[Nt] = L,
                    Q = Nt) : (C[Q] = Ul,
                    C[St] = L,
                    Q = St);
                else if (Nt < Z && 0 > l(gr, L))
                    C[Q] = gr,
                    C[Nt] = L,
                    Q = Nt;
                else
                    break e
            }
        }
        return D
    }
    function l(C, D) {
        var L = C.sortIndex - D.sortIndex;
        return L !== 0 ? L : C.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var u = []
      , c = []
      , g = 1
      , p = null
      , m = 3
      , y = !1
      , x = !1
      , w = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(C) {
        for (var D = n(c); D !== null; ) {
            if (D.callback === null)
                r(c);
            else if (D.startTime <= C)
                r(c),
                D.sortIndex = D.expirationTime,
                t(u, D);
            else
                break;
            D = n(c)
        }
    }
    function v(C) {
        if (w = !1,
        h(C),
        !x)
            if (n(u) !== null)
                x = !0,
                Fl(S);
            else {
                var D = n(c);
                D !== null && bl(v, D.startTime - C)
            }
    }
    function S(C, D) {
        x = !1,
        w && (w = !1,
        f(M),
        M = -1),
        y = !0;
        var L = m;
        try {
            for (h(D),
            p = n(u); p !== null && (!(p.expirationTime > D) || C && !xe()); ) {
                var Q = p.callback;
                if (typeof Q == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var Z = Q(p.expirationTime <= D);
                    D = e.unstable_now(),
                    typeof Z == "function" ? p.callback = Z : p === n(u) && r(u),
                    h(D)
                } else
                    r(u);
                p = n(u)
            }
            if (p !== null)
                var mr = !0;
            else {
                var St = n(c);
                St !== null && bl(v, St.startTime - D),
                mr = !1
            }
            return mr
        } finally {
            p = null,
            m = L,
            y = !1
        }
    }
    var T = !1
      , P = null
      , M = -1
      , A = 5
      , _ = -1;
    function xe() {
        return !(e.unstable_now() - _ < A)
    }
    function wn() {
        if (P !== null) {
            var C = e.unstable_now();
            _ = C;
            var D = !0;
            try {
                D = P(!0, C)
            } finally {
                D ? jn() : (T = !1,
                P = null)
            }
        } else
            T = !1
    }
    var jn;
    if (typeof d == "function")
        jn = function() {
            d(wn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ss = new MessageChannel
          , Yc = ss.port2;
        ss.port1.onmessage = wn,
        jn = function() {
            Yc.postMessage(null)
        }
    } else
        jn = function() {
            E(wn, 0)
        }
        ;
    function Fl(C) {
        P = C,
        T || (T = !0,
        jn())
    }
    function bl(C, D) {
        M = E(function() {
            C(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || y || (x = !0,
        Fl(S))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(C) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = m
        }
        var L = m;
        m = D;
        try {
            return C()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, D) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var L = m;
        m = C;
        try {
            return D()
        } finally {
            m = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, D, L) {
        var Q = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q,
        C) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = L + Z,
        C = {
            id: g++,
            callback: D,
            priorityLevel: C,
            startTime: L,
            expirationTime: Z,
            sortIndex: -1
        },
        L > Q ? (C.sortIndex = L,
        t(c, C),
        n(u) === null && C === n(c) && (w ? (f(M),
        M = -1) : w = !0,
        bl(v, L - Q))) : (C.sortIndex = Z,
        t(u, C),
        x || y || (x = !0,
        Fl(S))),
        C
    }
    ,
    e.unstable_shouldYield = xe,
    e.unstable_wrapCallback = function(C) {
        var D = m;
        return function() {
            var L = m;
            m = D;
            try {
                return C.apply(this, arguments)
            } finally {
                m = L
            }
        }
    }
}
)(Ua);
ba.exports = Ua;
var jd = ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd = k
  , ke = jd;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Aa = new Set
  , Vn = {};
function Ft(e, t) {
    un(e, t),
    un(e + "Capture", t)
}
function un(e, t) {
    for (Vn[e] = t,
    e = 0; e < t.length; e++)
        Aa.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mi = Object.prototype.hasOwnProperty
  , Sd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ds = {}
  , fs = {};
function Nd(e) {
    return mi.call(fs, e) ? !0 : mi.call(ds, e) ? !1 : Sd.test(e) ? fs[e] = !0 : (ds[e] = !0,
    !1)
}
function Cd(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Ed(e, t, n, r) {
    if (t === null || typeof t > "u" || Cd(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function de(e, t, n, r, l, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    re[e] = new de(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    re[t] = new de(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    re[e] = new de(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    re[e] = new de(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    re[e] = new de(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    re[e] = new de(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    re[e] = new de(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    re[e] = new de(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    re[e] = new de(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var go = /[\-:]([a-z])/g;
function vo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(go, vo);
    re[t] = new de(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(go, vo);
    re[t] = new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(go, vo);
    re[t] = new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    re[e] = new de(e,1,!1,e.toLowerCase(),null,!1,!1)
});
re.xlinkHref = new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    re[e] = new de(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function xo(e, t, n, r) {
    var l = re.hasOwnProperty(t) ? re[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ed(t, n, l, r) && (n = null),
    r || l === null ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qe = kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , xr = Symbol.for("react.element")
  , $t = Symbol.for("react.portal")
  , Xt = Symbol.for("react.fragment")
  , yo = Symbol.for("react.strict_mode")
  , gi = Symbol.for("react.profiler")
  , Wa = Symbol.for("react.provider")
  , Ba = Symbol.for("react.context")
  , wo = Symbol.for("react.forward_ref")
  , vi = Symbol.for("react.suspense")
  , xi = Symbol.for("react.suspense_list")
  , jo = Symbol.for("react.memo")
  , tt = Symbol.for("react.lazy")
  , Va = Symbol.for("react.offscreen")
  , hs = Symbol.iterator;
function kn(e) {
    return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var $ = Object.assign, Wl;
function Dn(e) {
    if (Wl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Wl = t && t[1] || ""
        }
    return `
` + Wl + e
}
var Bl = !1;
function Vl(e, t) {
    if (!e || Bl)
        return "";
    Bl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), s = l.length - 1, a = o.length - 1; 1 <= s && 0 <= a && l[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (l[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || l[s] !== o[a]) {
                                var u = `
` + l[s].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Bl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Dn(e) : ""
}
function Td(e) {
    switch (e.tag) {
    case 5:
        return Dn(e.type);
    case 16:
        return Dn("Lazy");
    case 13:
        return Dn("Suspense");
    case 19:
        return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Vl(e.type, !1),
        e;
    case 11:
        return e = Vl(e.type.render, !1),
        e;
    case 1:
        return e = Vl(e.type, !0),
        e;
    default:
        return ""
    }
}
function yi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Xt:
        return "Fragment";
    case $t:
        return "Portal";
    case gi:
        return "Profiler";
    case yo:
        return "StrictMode";
    case vi:
        return "Suspense";
    case xi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ba:
            return (e.displayName || "Context") + ".Consumer";
        case Wa:
            return (e._context.displayName || "Context") + ".Provider";
        case wo:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case jo:
            return t = e.displayName || null,
            t !== null ? t : yi(e.type) || "Memo";
        case tt:
            t = e._payload,
            e = e._init;
            try {
                return yi(e(t))
            } catch {}
        }
    return null
}
function Pd(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yi(t);
    case 8:
        return t === yo ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function vt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function $a(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Md(e) {
    var t = $a(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function yr(e) {
    e._valueTracker || (e._valueTracker = Md(e))
}
function Xa(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = $a(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Hr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function wi(e, t) {
    var n = t.checked;
    return $({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ps(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = vt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ha(e, t) {
    t = t.checked,
    t != null && xo(e, "checked", t, !1)
}
function ji(e, t) {
    Ha(e, t);
    var n = vt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && ki(e, t.type, vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ki(e, t, n) {
    (t !== "number" || Hr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var _n = Array.isArray;
function nn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + vt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function Si(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return $({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function gs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (_n(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: vt(n)
    }
}
function Qa(e, t) {
    var n = vt(t.value)
      , r = vt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ga(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ni(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ga(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var wr, Ka = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (wr = wr || document.createElement("div"),
        wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = wr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function $n(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
    Dd.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        On[t] = On[e]
    })
});
function Ya(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px"
}
function Ja(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Ya(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var _d = $({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ci(e, t) {
    if (t) {
        if (_d[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Ei(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ti = null;
function ko(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Pi = null
  , rn = null
  , ln = null;
function xs(e) {
    if (e = dr(e)) {
        if (typeof Pi != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Sl(t),
        Pi(e.stateNode, e.type, t))
    }
}
function Za(e) {
    rn ? ln ? ln.push(e) : ln = [e] : rn = e
}
function qa() {
    if (rn) {
        var e = rn
          , t = ln;
        if (ln = rn = null,
        xs(e),
        t)
            for (e = 0; e < t.length; e++)
                xs(t[e])
    }
}
function eu(e, t) {
    return e(t)
}
function tu() {}
var $l = !1;
function nu(e, t, n) {
    if ($l)
        return e(t, n);
    $l = !0;
    try {
        return eu(e, t, n)
    } finally {
        $l = !1,
        (rn !== null || ln !== null) && (tu(),
        qa())
    }
}
function Xn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Sl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var Mi = !1;
if (Ke)
    try {
        var Sn = {};
        Object.defineProperty(Sn, "passive", {
            get: function() {
                Mi = !0
            }
        }),
        window.addEventListener("test", Sn, Sn),
        window.removeEventListener("test", Sn, Sn)
    } catch {
        Mi = !1
    }
function Ld(e, t, n, r, l, o, s, a, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (g) {
        this.onError(g)
    }
}
var In = !1
  , Qr = null
  , Gr = !1
  , Di = null
  , Rd = {
    onError: function(e) {
        In = !0,
        Qr = e
    }
};
function Od(e, t, n, r, l, o, s, a, u) {
    In = !1,
    Qr = null,
    Ld.apply(Rd, arguments)
}
function Id(e, t, n, r, l, o, s, a, u) {
    if (Od.apply(this, arguments),
    In) {
        if (In) {
            var c = Qr;
            In = !1,
            Qr = null
        } else
            throw Error(j(198));
        Gr || (Gr = !0,
        Di = c)
    }
}
function bt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ru(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ys(e) {
    if (bt(e) !== e)
        throw Error(j(188))
}
function zd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = bt(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return ys(l),
                    e;
                if (o === r)
                    return ys(l),
                    t;
                o = o.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var s = !1, a = l.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = l,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = l,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function lu(e) {
    return e = zd(e),
    e !== null ? iu(e) : null
}
function iu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = iu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ou = ke.unstable_scheduleCallback
  , ws = ke.unstable_cancelCallback
  , Fd = ke.unstable_shouldYield
  , bd = ke.unstable_requestPaint
  , G = ke.unstable_now
  , Ud = ke.unstable_getCurrentPriorityLevel
  , So = ke.unstable_ImmediatePriority
  , su = ke.unstable_UserBlockingPriority
  , Kr = ke.unstable_NormalPriority
  , Ad = ke.unstable_LowPriority
  , au = ke.unstable_IdlePriority
  , yl = null
  , We = null;
function Wd(e) {
    if (We && typeof We.onCommitFiberRoot == "function")
        try {
            We.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : $d
  , Bd = Math.log
  , Vd = Math.LN2;
function $d(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Bd(e) / Vd | 0) | 0
}
var jr = 64
  , kr = 4194304;
function Ln(e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Yr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~l;
        a !== 0 ? r = Ln(a) : (o &= s,
        o !== 0 && (r = Ln(o)))
    } else
        s = n & ~l,
        s !== 0 ? r = Ln(s) : o !== 0 && (r = Ln(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ie(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Xd(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Hd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - Ie(o)
          , a = 1 << s
          , u = l[s];
        u === -1 ? (!(a & n) || a & r) && (l[s] = Xd(a, t)) : u <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function _i(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function uu() {
    var e = jr;
    return jr <<= 1,
    !(jr & 4194240) && (jr = 64),
    e
}
function Xl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ur(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ie(t),
    e[t] = n
}
function Qd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ie(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function No(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ie(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var I = 0;
function cu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var du, Co, fu, hu, pu, Li = !1, Sr = [], at = null, ut = null, ct = null, Hn = new Map, Qn = new Map, rt = [], Gd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function js(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        at = null;
        break;
    case "dragenter":
    case "dragleave":
        ut = null;
        break;
    case "mouseover":
    case "mouseout":
        ct = null;
        break;
    case "pointerover":
    case "pointerout":
        Hn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qn.delete(t.pointerId)
    }
}
function Nn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = dr(t),
    t !== null && Co(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Kd(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return at = Nn(at, e, t, n, r, l),
        !0;
    case "dragenter":
        return ut = Nn(ut, e, t, n, r, l),
        !0;
    case "mouseover":
        return ct = Nn(ct, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return Hn.set(o, Nn(Hn.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Qn.set(o, Nn(Qn.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function mu(e) {
    var t = Tt(e.target);
    if (t !== null) {
        var n = bt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ru(n),
                t !== null) {
                    e.blockedOn = t,
                    pu(e.priority, function() {
                        fu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ti = r,
            n.target.dispatchEvent(r),
            Ti = null
        } else
            return t = dr(n),
            t !== null && Co(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ks(e, t, n) {
    zr(e) && n.delete(t)
}
function Yd() {
    Li = !1,
    at !== null && zr(at) && (at = null),
    ut !== null && zr(ut) && (ut = null),
    ct !== null && zr(ct) && (ct = null),
    Hn.forEach(ks),
    Qn.forEach(ks)
}
function Cn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Li || (Li = !0,
    ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Yd)))
}
function Gn(e) {
    function t(l) {
        return Cn(l, e)
    }
    if (0 < Sr.length) {
        Cn(Sr[0], e);
        for (var n = 1; n < Sr.length; n++) {
            var r = Sr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (at !== null && Cn(at, e),
    ut !== null && Cn(ut, e),
    ct !== null && Cn(ct, e),
    Hn.forEach(t),
    Qn.forEach(t),
    n = 0; n < rt.length; n++)
        r = rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rt.length && (n = rt[0],
    n.blockedOn === null); )
        mu(n),
        n.blockedOn === null && rt.shift()
}
var on = qe.ReactCurrentBatchConfig
  , Jr = !0;
function Jd(e, t, n, r) {
    var l = I
      , o = on.transition;
    on.transition = null;
    try {
        I = 1,
        Eo(e, t, n, r)
    } finally {
        I = l,
        on.transition = o
    }
}
function Zd(e, t, n, r) {
    var l = I
      , o = on.transition;
    on.transition = null;
    try {
        I = 4,
        Eo(e, t, n, r)
    } finally {
        I = l,
        on.transition = o
    }
}
function Eo(e, t, n, r) {
    if (Jr) {
        var l = Ri(e, t, n, r);
        if (l === null)
            ti(e, t, r, Zr, n),
            js(e, r);
        else if (Kd(l, e, t, n, r))
            r.stopPropagation();
        else if (js(e, r),
        t & 4 && -1 < Gd.indexOf(e)) {
            for (; l !== null; ) {
                var o = dr(l);
                if (o !== null && du(o),
                o = Ri(e, t, n, r),
                o === null && ti(e, t, r, Zr, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            ti(e, t, r, null, n)
    }
}
var Zr = null;
function Ri(e, t, n, r) {
    if (Zr = null,
    e = ko(r),
    e = Tt(e),
    e !== null)
        if (t = bt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ru(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Zr = e,
    null
}
function gu(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ud()) {
        case So:
            return 1;
        case su:
            return 4;
        case Kr:
        case Ad:
            return 16;
        case au:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var it = null
  , To = null
  , Fr = null;
function vu() {
    if (Fr)
        return Fr;
    var e, t = To, n = t.length, r, l = "value"in it ? it.value : it.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[o - r]; r++)
        ;
    return Fr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function br(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Nr() {
    return !0
}
function Ss() {
    return !1
}
function Ne(e) {
    function t(n, r, l, o, s) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nr : Ss,
        this.isPropagationStopped = Ss,
        this
    }
    return $(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Nr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Nr)
        },
        persist: function() {},
        isPersistent: Nr
    }),
    t
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Po = Ne(xn), cr = $({}, xn, {
    view: 0,
    detail: 0
}), qd = Ne(cr), Hl, Ql, En, wl = $({}, cr, {
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
    getModifierState: Mo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Hl = e.screenX - En.screenX,
        Ql = e.screenY - En.screenY) : Ql = Hl = 0,
        En = e),
        Hl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ql
    }
}), Ns = Ne(wl), ef = $({}, wl, {
    dataTransfer: 0
}), tf = Ne(ef), nf = $({}, cr, {
    relatedTarget: 0
}), Gl = Ne(nf), rf = $({}, xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), lf = Ne(rf), of = $({}, xn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), sf = Ne(of), af = $({}, xn, {
    data: 0
}), Cs = Ne(af), uf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, cf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, df = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function ff(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = df[e]) ? !!t[e] : !1
}
function Mo() {
    return ff
}
var hf = $({}, cr, {
    key: function(e) {
        if (e.key) {
            var t = uf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = br(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mo,
    charCode: function(e) {
        return e.type === "keypress" ? br(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , pf = Ne(hf)
  , mf = $({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Es = Ne(mf)
  , gf = $({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mo
})
  , vf = Ne(gf)
  , xf = $({}, xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , yf = Ne(xf)
  , wf = $({}, wl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , jf = Ne(wf)
  , kf = [9, 13, 27, 32]
  , Do = Ke && "CompositionEvent"in window
  , zn = null;
Ke && "documentMode"in document && (zn = document.documentMode);
var Sf = Ke && "TextEvent"in window && !zn
  , xu = Ke && (!Do || zn && 8 < zn && 11 >= zn)
  , Ts = " "
  , Ps = !1;
function yu(e, t) {
    switch (e) {
    case "keyup":
        return kf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function wu(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Ht = !1;
function Nf(e, t) {
    switch (e) {
    case "compositionend":
        return wu(t);
    case "keypress":
        return t.which !== 32 ? null : (Ps = !0,
        Ts);
    case "textInput":
        return e = t.data,
        e === Ts && Ps ? null : e;
    default:
        return null
    }
}
function Cf(e, t) {
    if (Ht)
        return e === "compositionend" || !Do && yu(e, t) ? (e = vu(),
        Fr = To = it = null,
        Ht = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return xu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Ef = {
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
    week: !0
};
function Ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ef[e.type] : t === "textarea"
}
function ju(e, t, n, r) {
    Za(r),
    t = qr(t, "onChange"),
    0 < t.length && (n = new Po("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Fn = null
  , Kn = null;
function Tf(e) {
    Lu(e, 0)
}
function jl(e) {
    var t = Kt(e);
    if (Xa(t))
        return e
}
function Pf(e, t) {
    if (e === "change")
        return t
}
var ku = !1;
if (Ke) {
    var Kl;
    if (Ke) {
        var Yl = "oninput"in document;
        if (!Yl) {
            var Ds = document.createElement("div");
            Ds.setAttribute("oninput", "return;"),
            Yl = typeof Ds.oninput == "function"
        }
        Kl = Yl
    } else
        Kl = !1;
    ku = Kl && (!document.documentMode || 9 < document.documentMode)
}
function _s() {
    Fn && (Fn.detachEvent("onpropertychange", Su),
    Kn = Fn = null)
}
function Su(e) {
    if (e.propertyName === "value" && jl(Kn)) {
        var t = [];
        ju(t, Kn, e, ko(e)),
        nu(Tf, t)
    }
}
function Mf(e, t, n) {
    e === "focusin" ? (_s(),
    Fn = t,
    Kn = n,
    Fn.attachEvent("onpropertychange", Su)) : e === "focusout" && _s()
}
function Df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return jl(Kn)
}
function _f(e, t) {
    if (e === "click")
        return jl(t)
}
function Lf(e, t) {
    if (e === "input" || e === "change")
        return jl(t)
}
function Rf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Fe = typeof Object.is == "function" ? Object.is : Rf;
function Yn(e, t) {
    if (Fe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!mi.call(t, l) || !Fe(e[l], t[l]))
            return !1
    }
    return !0
}
function Ls(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Rs(e, t) {
    var n = Ls(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ls(n)
    }
}
function Nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Cu() {
    for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Hr(e.document)
    }
    return t
}
function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Of(e) {
    var t = Cu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Nu(n.ownerDocument.documentElement, n)) {
        if (r !== null && _o(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = Rs(n, o);
                var s = Rs(n, r);
                l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var If = Ke && "documentMode"in document && 11 >= document.documentMode
  , Qt = null
  , Oi = null
  , bn = null
  , Ii = !1;
function Os(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ii || Qt == null || Qt !== Hr(r) || (r = Qt,
    "selectionStart"in r && _o(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    bn && Yn(bn, r) || (bn = r,
    r = qr(Oi, "onSelect"),
    0 < r.length && (t = new Po("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Qt)))
}
function Cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Gt = {
    animationend: Cr("Animation", "AnimationEnd"),
    animationiteration: Cr("Animation", "AnimationIteration"),
    animationstart: Cr("Animation", "AnimationStart"),
    transitionend: Cr("Transition", "TransitionEnd")
}
  , Jl = {}
  , Eu = {};
Ke && (Eu = document.createElement("div").style,
"AnimationEvent"in window || (delete Gt.animationend.animation,
delete Gt.animationiteration.animation,
delete Gt.animationstart.animation),
"TransitionEvent"in window || delete Gt.transitionend.transition);
function kl(e) {
    if (Jl[e])
        return Jl[e];
    if (!Gt[e])
        return e;
    var t = Gt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Eu)
            return Jl[e] = t[n];
    return e
}
var Tu = kl("animationend")
  , Pu = kl("animationiteration")
  , Mu = kl("animationstart")
  , Du = kl("transitionend")
  , _u = new Map
  , Is = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yt(e, t) {
    _u.set(e, t),
    Ft(t, [e])
}
for (var Zl = 0; Zl < Is.length; Zl++) {
    var ql = Is[Zl]
      , zf = ql.toLowerCase()
      , Ff = ql[0].toUpperCase() + ql.slice(1);
    yt(zf, "on" + Ff)
}
yt(Tu, "onAnimationEnd");
yt(Pu, "onAnimationIteration");
yt(Mu, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Du, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function zs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Id(r, t, void 0, e),
    e.currentTarget = null
}
function Lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , u = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    u !== o && l.isPropagationStopped())
                        break e;
                    zs(l, a, c),
                    o = u
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    u = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    u !== o && l.isPropagationStopped())
                        break e;
                    zs(l, a, c),
                    o = u
                }
        }
    }
    if (Gr)
        throw e = Di,
        Gr = !1,
        Di = null,
        e
}
function F(e, t) {
    var n = t[Ai];
    n === void 0 && (n = t[Ai] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ru(t, e, 2, !1),
    n.add(r))
}
function ei(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ru(n, e, r, t)
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
    if (!e[Er]) {
        e[Er] = !0,
        Aa.forEach(function(n) {
            n !== "selectionchange" && (bf.has(n) || ei(n, !1, e),
            ei(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Er] || (t[Er] = !0,
        ei("selectionchange", !1, t))
    }
}
function Ru(e, t, n, r) {
    switch (gu(t)) {
    case 1:
        var l = Jd;
        break;
    case 4:
        l = Zd;
        break;
    default:
        l = Eo
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function ti(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var u = s.tag;
                        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo,
                        u === l || u.nodeType === 8 && u.parentNode === l))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Tt(a),
                    s === null)
                        return;
                    if (u = s.tag,
                    u === 5 || u === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    nu(function() {
        var c = o
          , g = ko(n)
          , p = [];
        e: {
            var m = _u.get(e);
            if (m !== void 0) {
                var y = Po
                  , x = e;
                switch (e) {
                case "keypress":
                    if (br(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = pf;
                    break;
                case "focusin":
                    x = "focus",
                    y = Gl;
                    break;
                case "focusout":
                    x = "blur",
                    y = Gl;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Gl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Ns;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = tf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = vf;
                    break;
                case Tu:
                case Pu:
                case Mu:
                    y = lf;
                    break;
                case Du:
                    y = yf;
                    break;
                case "scroll":
                    y = qd;
                    break;
                case "wheel":
                    y = jf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = sf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Es
                }
                var w = (t & 4) !== 0
                  , E = !w && e === "scroll"
                  , f = w ? m !== null ? m + "Capture" : null : m;
                w = [];
                for (var d = c, h; d !== null; ) {
                    h = d;
                    var v = h.stateNode;
                    if (h.tag === 5 && v !== null && (h = v,
                    f !== null && (v = Xn(d, f),
                    v != null && w.push(Zn(d, v, h)))),
                    E)
                        break;
                    d = d.return
                }
                0 < w.length && (m = new y(m,x,null,n,g),
                p.push({
                    event: m,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                m && n !== Ti && (x = n.relatedTarget || n.fromElement) && (Tt(x) || x[Ye]))
                    break e;
                if ((y || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window,
                y ? (x = n.relatedTarget || n.toElement,
                y = c,
                x = x ? Tt(x) : null,
                x !== null && (E = bt(x),
                x !== E || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null,
                x = c),
                y !== x)) {
                    if (w = Ns,
                    v = "onMouseLeave",
                    f = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = Es,
                    v = "onPointerLeave",
                    f = "onPointerEnter",
                    d = "pointer"),
                    E = y == null ? m : Kt(y),
                    h = x == null ? m : Kt(x),
                    m = new w(v,d + "leave",y,n,g),
                    m.target = E,
                    m.relatedTarget = h,
                    v = null,
                    Tt(g) === c && (w = new w(f,d + "enter",x,n,g),
                    w.target = h,
                    w.relatedTarget = E,
                    v = w),
                    E = v,
                    y && x)
                        t: {
                            for (w = y,
                            f = x,
                            d = 0,
                            h = w; h; h = Vt(h))
                                d++;
                            for (h = 0,
                            v = f; v; v = Vt(v))
                                h++;
                            for (; 0 < d - h; )
                                w = Vt(w),
                                d--;
                            for (; 0 < h - d; )
                                f = Vt(f),
                                h--;
                            for (; d--; ) {
                                if (w === f || f !== null && w === f.alternate)
                                    break t;
                                w = Vt(w),
                                f = Vt(f)
                            }
                            w = null
                        }
                    else
                        w = null;
                    y !== null && Fs(p, m, y, w, !1),
                    x !== null && E !== null && Fs(p, E, x, w, !0)
                }
            }
            e: {
                if (m = c ? Kt(c) : window,
                y = m.nodeName && m.nodeName.toLowerCase(),
                y === "select" || y === "input" && m.type === "file")
                    var S = Pf;
                else if (Ms(m))
                    if (ku)
                        S = Lf;
                    else {
                        S = Df;
                        var T = Mf
                    }
                else
                    (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = _f);
                if (S && (S = S(e, c))) {
                    ju(p, S, n, g);
                    break e
                }
                T && T(e, m, c),
                e === "focusout" && (T = m._wrapperState) && T.controlled && m.type === "number" && ki(m, "number", m.value)
            }
            switch (T = c ? Kt(c) : window,
            e) {
            case "focusin":
                (Ms(T) || T.contentEditable === "true") && (Qt = T,
                Oi = c,
                bn = null);
                break;
            case "focusout":
                bn = Oi = Qt = null;
                break;
            case "mousedown":
                Ii = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ii = !1,
                Os(p, n, g);
                break;
            case "selectionchange":
                if (If)
                    break;
            case "keydown":
            case "keyup":
                Os(p, n, g)
            }
            var P;
            if (Do)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var M = "onCompositionStart";
                        break e;
                    case "compositionend":
                        M = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        M = "onCompositionUpdate";
                        break e
                    }
                    M = void 0
                }
            else
                Ht ? yu(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
            M && (xu && n.locale !== "ko" && (Ht || M !== "onCompositionStart" ? M === "onCompositionEnd" && Ht && (P = vu()) : (it = g,
            To = "value"in it ? it.value : it.textContent,
            Ht = !0)),
            T = qr(c, M),
            0 < T.length && (M = new Cs(M,e,null,n,g),
            p.push({
                event: M,
                listeners: T
            }),
            P ? M.data = P : (P = wu(n),
            P !== null && (M.data = P)))),
            (P = Sf ? Nf(e, n) : Cf(e, n)) && (c = qr(c, "onBeforeInput"),
            0 < c.length && (g = new Cs("onBeforeInput","beforeinput",null,n,g),
            p.push({
                event: g,
                listeners: c
            }),
            g.data = P))
        }
        Lu(p, t)
    })
}
function Zn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = Xn(e, n),
        o != null && r.unshift(Zn(e, o, l)),
        o = Xn(e, t),
        o != null && r.push(Zn(e, o, l))),
        e = e.return
    }
    return r
}
function Vt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Fs(e, t, n, r, l) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , u = a.alternate
          , c = a.stateNode;
        if (u !== null && u === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        l ? (u = Xn(n, o),
        u != null && s.unshift(Zn(n, u, a))) : l || (u = Xn(n, o),
        u != null && s.push(Zn(n, u, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Uf = /\r\n?/g
  , Af = /\u0000|\uFFFD/g;
function bs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uf, `
`).replace(Af, "")
}
function Tr(e, t, n) {
    if (t = bs(t),
    bs(e) !== t && n)
        throw Error(j(425))
}
function el() {}
var zi = null
  , Fi = null;
function bi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0
  , Wf = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Us = typeof Promise == "function" ? Promise : void 0
  , Bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Us < "u" ? function(e) {
    return Us.resolve(null).then(e).catch(Vf)
}
: Ui;
function Vf(e) {
    setTimeout(function() {
        throw e
    })
}
function ni(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Gn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Gn(t)
}
function dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function As(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var yn = Math.random().toString(36).slice(2)
  , Ae = "__reactFiber$" + yn
  , qn = "__reactProps$" + yn
  , Ye = "__reactContainer$" + yn
  , Ai = "__reactEvents$" + yn
  , $f = "__reactListeners$" + yn
  , Xf = "__reactHandles$" + yn;
function Tt(e) {
    var t = e[Ae];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ye] || n[Ae]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = As(e); e !== null; ) {
                    if (n = e[Ae])
                        return n;
                    e = As(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function dr(e) {
    return e = e[Ae] || e[Ye],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Kt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Sl(e) {
    return e[qn] || null
}
var Wi = []
  , Yt = -1;
function wt(e) {
    return {
        current: e
    }
}
function b(e) {
    0 > Yt || (e.current = Wi[Yt],
    Wi[Yt] = null,
    Yt--)
}
function z(e, t) {
    Yt++,
    Wi[Yt] = e.current,
    e.current = t
}
var xt = {}
  , se = wt(xt)
  , me = wt(!1)
  , Lt = xt;
function cn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function ge(e) {
    return e = e.childContextTypes,
    e != null
}
function tl() {
    b(me),
    b(se)
}
function Ws(e, t, n) {
    if (se.current !== xt)
        throw Error(j(168));
    z(se, t),
    z(me, n)
}
function Ou(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(j(108, Pd(e) || "Unknown", l));
    return $({}, n, r)
}
function nl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt,
    Lt = se.current,
    z(se, e),
    z(me, me.current),
    !0
}
function Bs(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Ou(e, t, Lt),
    r.__reactInternalMemoizedMergedChildContext = e,
    b(me),
    b(se),
    z(se, e)) : b(me),
    z(me, n)
}
var Xe = null
  , Nl = !1
  , ri = !1;
function Iu(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}
function Hf(e) {
    Nl = !0,
    Iu(e)
}
function jt() {
    if (!ri && Xe !== null) {
        ri = !0;
        var e = 0
          , t = I;
        try {
            var n = Xe;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Xe = null,
            Nl = !1
        } catch (l) {
            throw Xe !== null && (Xe = Xe.slice(e + 1)),
            ou(So, jt),
            l
        } finally {
            I = t,
            ri = !1
        }
    }
    return null
}
var Jt = []
  , Zt = 0
  , rl = null
  , ll = 0
  , Ce = []
  , Ee = 0
  , Rt = null
  , He = 1
  , Qe = "";
function Ct(e, t) {
    Jt[Zt++] = ll,
    Jt[Zt++] = rl,
    rl = e,
    ll = t
}
function zu(e, t, n) {
    Ce[Ee++] = He,
    Ce[Ee++] = Qe,
    Ce[Ee++] = Rt,
    Rt = e;
    var r = He;
    e = Qe;
    var l = 32 - Ie(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - Ie(t) + l;
    if (30 < o) {
        var s = l - l % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        l -= s,
        He = 1 << 32 - Ie(t) + l | n << l | r,
        Qe = o + e
    } else
        He = 1 << o | n << l | r,
        Qe = e
}
function Lo(e) {
    e.return !== null && (Ct(e, 1),
    zu(e, 1, 0))
}
function Ro(e) {
    for (; e === rl; )
        rl = Jt[--Zt],
        Jt[Zt] = null,
        ll = Jt[--Zt],
        Jt[Zt] = null;
    for (; e === Rt; )
        Rt = Ce[--Ee],
        Ce[Ee] = null,
        Qe = Ce[--Ee],
        Ce[Ee] = null,
        He = Ce[--Ee],
        Ce[Ee] = null
}
var je = null
  , we = null
  , U = !1
  , Oe = null;
function Fu(e, t) {
    var n = Te(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Vs(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        je = e,
        we = dt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        je = e,
        we = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Rt !== null ? {
            id: He,
            overflow: Qe
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Te(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        je = e,
        we = null,
        !0) : !1;
    default:
        return !1
    }
}
function Bi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vi(e) {
    if (U) {
        var t = we;
        if (t) {
            var n = t;
            if (!Vs(e, t)) {
                if (Bi(e))
                    throw Error(j(418));
                t = dt(n.nextSibling);
                var r = je;
                t && Vs(e, t) ? Fu(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                je = e)
            }
        } else {
            if (Bi(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            je = e
        }
    }
}
function $s(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    je = e
}
function Pr(e) {
    if (e !== je)
        return !1;
    if (!U)
        return $s(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !bi(e.type, e.memoizedProps)),
    t && (t = we)) {
        if (Bi(e))
            throw bu(),
            Error(j(418));
        for (; t; )
            Fu(e, t),
            t = dt(t.nextSibling)
    }
    if ($s(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            we = null
        }
    } else
        we = je ? dt(e.stateNode.nextSibling) : null;
    return !0
}
function bu() {
    for (var e = we; e; )
        e = dt(e.nextSibling)
}
function dn() {
    we = je = null,
    U = !1
}
function Oo(e) {
    Oe === null ? Oe = [e] : Oe.push(e)
}
var Qf = qe.ReactCurrentBatchConfig;
function Tn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = l.refs;
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Mr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Xs(e) {
    var t = e._init;
    return t(e._payload)
}
function Uu(e) {
    function t(f, d) {
        if (e) {
            var h = f.deletions;
            h === null ? (f.deletions = [d],
            f.flags |= 16) : h.push(d)
        }
    }
    function n(f, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(f, d),
            d = d.sibling;
        return null
    }
    function r(f, d) {
        for (f = new Map; d !== null; )
            d.key !== null ? f.set(d.key, d) : f.set(d.index, d),
            d = d.sibling;
        return f
    }
    function l(f, d) {
        return f = mt(f, d),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, d, h) {
        return f.index = h,
        e ? (h = f.alternate,
        h !== null ? (h = h.index,
        h < d ? (f.flags |= 2,
        d) : h) : (f.flags |= 2,
        d)) : (f.flags |= 1048576,
        d)
    }
    function s(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function a(f, d, h, v) {
        return d === null || d.tag !== 6 ? (d = ci(h, f.mode, v),
        d.return = f,
        d) : (d = l(d, h),
        d.return = f,
        d)
    }
    function u(f, d, h, v) {
        var S = h.type;
        return S === Xt ? g(f, d, h.props.children, v, h.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Xs(S) === d.type) ? (v = l(d, h.props),
        v.ref = Tn(f, d, h),
        v.return = f,
        v) : (v = Xr(h.type, h.key, h.props, null, f.mode, v),
        v.ref = Tn(f, d, h),
        v.return = f,
        v)
    }
    function c(f, d, h, v) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = di(h, f.mode, v),
        d.return = f,
        d) : (d = l(d, h.children || []),
        d.return = f,
        d)
    }
    function g(f, d, h, v, S) {
        return d === null || d.tag !== 7 ? (d = _t(h, f.mode, v, S),
        d.return = f,
        d) : (d = l(d, h),
        d.return = f,
        d)
    }
    function p(f, d, h) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = ci("" + d, f.mode, h),
            d.return = f,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case xr:
                return h = Xr(d.type, d.key, d.props, null, f.mode, h),
                h.ref = Tn(f, null, d),
                h.return = f,
                h;
            case $t:
                return d = di(d, f.mode, h),
                d.return = f,
                d;
            case tt:
                var v = d._init;
                return p(f, v(d._payload), h)
            }
            if (_n(d) || kn(d))
                return d = _t(d, f.mode, h, null),
                d.return = f,
                d;
            Mr(f, d)
        }
        return null
    }
    function m(f, d, h, v) {
        var S = d !== null ? d.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return S !== null ? null : a(f, d, "" + h, v);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case xr:
                return h.key === S ? u(f, d, h, v) : null;
            case $t:
                return h.key === S ? c(f, d, h, v) : null;
            case tt:
                return S = h._init,
                m(f, d, S(h._payload), v)
            }
            if (_n(h) || kn(h))
                return S !== null ? null : g(f, d, h, v, null);
            Mr(f, h)
        }
        return null
    }
    function y(f, d, h, v, S) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return f = f.get(h) || null,
            a(d, f, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case xr:
                return f = f.get(v.key === null ? h : v.key) || null,
                u(d, f, v, S);
            case $t:
                return f = f.get(v.key === null ? h : v.key) || null,
                c(d, f, v, S);
            case tt:
                var T = v._init;
                return y(f, d, h, T(v._payload), S)
            }
            if (_n(v) || kn(v))
                return f = f.get(h) || null,
                g(d, f, v, S, null);
            Mr(d, v)
        }
        return null
    }
    function x(f, d, h, v) {
        for (var S = null, T = null, P = d, M = d = 0, A = null; P !== null && M < h.length; M++) {
            P.index > M ? (A = P,
            P = null) : A = P.sibling;
            var _ = m(f, P, h[M], v);
            if (_ === null) {
                P === null && (P = A);
                break
            }
            e && P && _.alternate === null && t(f, P),
            d = o(_, d, M),
            T === null ? S = _ : T.sibling = _,
            T = _,
            P = A
        }
        if (M === h.length)
            return n(f, P),
            U && Ct(f, M),
            S;
        if (P === null) {
            for (; M < h.length; M++)
                P = p(f, h[M], v),
                P !== null && (d = o(P, d, M),
                T === null ? S = P : T.sibling = P,
                T = P);
            return U && Ct(f, M),
            S
        }
        for (P = r(f, P); M < h.length; M++)
            A = y(P, f, M, h[M], v),
            A !== null && (e && A.alternate !== null && P.delete(A.key === null ? M : A.key),
            d = o(A, d, M),
            T === null ? S = A : T.sibling = A,
            T = A);
        return e && P.forEach(function(xe) {
            return t(f, xe)
        }),
        U && Ct(f, M),
        S
    }
    function w(f, d, h, v) {
        var S = kn(h);
        if (typeof S != "function")
            throw Error(j(150));
        if (h = S.call(h),
        h == null)
            throw Error(j(151));
        for (var T = S = null, P = d, M = d = 0, A = null, _ = h.next(); P !== null && !_.done; M++,
        _ = h.next()) {
            P.index > M ? (A = P,
            P = null) : A = P.sibling;
            var xe = m(f, P, _.value, v);
            if (xe === null) {
                P === null && (P = A);
                break
            }
            e && P && xe.alternate === null && t(f, P),
            d = o(xe, d, M),
            T === null ? S = xe : T.sibling = xe,
            T = xe,
            P = A
        }
        if (_.done)
            return n(f, P),
            U && Ct(f, M),
            S;
        if (P === null) {
            for (; !_.done; M++,
            _ = h.next())
                _ = p(f, _.value, v),
                _ !== null && (d = o(_, d, M),
                T === null ? S = _ : T.sibling = _,
                T = _);
            return U && Ct(f, M),
            S
        }
        for (P = r(f, P); !_.done; M++,
        _ = h.next())
            _ = y(P, f, M, _.value, v),
            _ !== null && (e && _.alternate !== null && P.delete(_.key === null ? M : _.key),
            d = o(_, d, M),
            T === null ? S = _ : T.sibling = _,
            T = _);
        return e && P.forEach(function(wn) {
            return t(f, wn)
        }),
        U && Ct(f, M),
        S
    }
    function E(f, d, h, v) {
        if (typeof h == "object" && h !== null && h.type === Xt && h.key === null && (h = h.props.children),
        typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case xr:
                e: {
                    for (var S = h.key, T = d; T !== null; ) {
                        if (T.key === S) {
                            if (S = h.type,
                            S === Xt) {
                                if (T.tag === 7) {
                                    n(f, T.sibling),
                                    d = l(T, h.props.children),
                                    d.return = f,
                                    f = d;
                                    break e
                                }
                            } else if (T.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Xs(S) === T.type) {
                                n(f, T.sibling),
                                d = l(T, h.props),
                                d.ref = Tn(f, T, h),
                                d.return = f,
                                f = d;
                                break e
                            }
                            n(f, T);
                            break
                        } else
                            t(f, T);
                        T = T.sibling
                    }
                    h.type === Xt ? (d = _t(h.props.children, f.mode, v, h.key),
                    d.return = f,
                    f = d) : (v = Xr(h.type, h.key, h.props, null, f.mode, v),
                    v.ref = Tn(f, d, h),
                    v.return = f,
                    f = v)
                }
                return s(f);
            case $t:
                e: {
                    for (T = h.key; d !== null; ) {
                        if (d.key === T)
                            if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                                n(f, d.sibling),
                                d = l(d, h.children || []),
                                d.return = f,
                                f = d;
                                break e
                            } else {
                                n(f, d);
                                break
                            }
                        else
                            t(f, d);
                        d = d.sibling
                    }
                    d = di(h, f.mode, v),
                    d.return = f,
                    f = d
                }
                return s(f);
            case tt:
                return T = h._init,
                E(f, d, T(h._payload), v)
            }
            if (_n(h))
                return x(f, d, h, v);
            if (kn(h))
                return w(f, d, h, v);
            Mr(f, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h,
        d !== null && d.tag === 6 ? (n(f, d.sibling),
        d = l(d, h),
        d.return = f,
        f = d) : (n(f, d),
        d = ci(h, f.mode, v),
        d.return = f,
        f = d),
        s(f)) : n(f, d)
    }
    return E
}
var fn = Uu(!0)
  , Au = Uu(!1)
  , il = wt(null)
  , ol = null
  , qt = null
  , Io = null;
function zo() {
    Io = qt = ol = null
}
function Fo(e) {
    var t = il.current;
    b(il),
    e._currentValue = t
}
function $i(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function sn(e, t) {
    ol = e,
    Io = qt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0),
    e.firstContext = null)
}
function Me(e) {
    var t = e._currentValue;
    if (Io !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        qt === null) {
            if (ol === null)
                throw Error(j(308));
            qt = e,
            ol.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            qt = qt.next = e;
    return t
}
var Pt = null;
function bo(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}
function Wu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    bo(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    Je(e, r)
}
function Je(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nt = !1;
function Uo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Bu(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ge(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ft(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    O & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        Je(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    bo(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    Je(e, n)
}
function Ur(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        No(e, n)
    }
}
function Hs(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function sl(e, t, n, r) {
    var l = e.updateQueue;
    nt = !1;
    var o = l.firstBaseUpdate
      , s = l.lastBaseUpdate
      , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a
          , c = u.next;
        u.next = null,
        s === null ? o = c : s.next = c,
        s = u;
        var g = e.alternate;
        g !== null && (g = g.updateQueue,
        a = g.lastBaseUpdate,
        a !== s && (a === null ? g.firstBaseUpdate = c : a.next = c,
        g.lastBaseUpdate = u))
    }
    if (o !== null) {
        var p = l.baseState;
        s = 0,
        g = c = u = null,
        a = o;
        do {
            var m = a.lane
              , y = a.eventTime;
            if ((r & m) === m) {
                g !== null && (g = g.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , w = a;
                    switch (m = t,
                    y = n,
                    w.tag) {
                    case 1:
                        if (x = w.payload,
                        typeof x == "function") {
                            p = x.call(y, p, m);
                            break e
                        }
                        p = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = w.payload,
                        m = typeof x == "function" ? x.call(y, p, m) : x,
                        m == null)
                            break e;
                        p = $({}, p, m);
                        break e;
                    case 2:
                        nt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [a] : m.push(a))
            } else
                y = {
                    eventTime: y,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                g === null ? (c = g = y,
                u = p) : g = g.next = y,
                s |= m;
            if (a = a.next,
            a === null) {
                if (a = l.shared.pending,
                a === null)
                    break;
                m = a,
                a = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (g === null && (u = p),
        l.baseState = u,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = g,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                s |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        It |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function Qs(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(j(191, l));
                l.call(r)
            }
        }
}
var fr = {}
  , Be = wt(fr)
  , er = wt(fr)
  , tr = wt(fr);
function Mt(e) {
    if (e === fr)
        throw Error(j(174));
    return e
}
function Ao(e, t) {
    switch (z(tr, t),
    z(er, e),
    z(Be, fr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ni(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ni(t, e)
    }
    b(Be),
    z(Be, t)
}
function hn() {
    b(Be),
    b(er),
    b(tr)
}
function Vu(e) {
    Mt(tr.current);
    var t = Mt(Be.current)
      , n = Ni(t, e.type);
    t !== n && (z(er, e),
    z(Be, n))
}
function Wo(e) {
    er.current === e && (b(Be),
    b(er))
}
var B = wt(0);
function al(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var li = [];
function Bo() {
    for (var e = 0; e < li.length; e++)
        li[e]._workInProgressVersionPrimary = null;
    li.length = 0
}
var Ar = qe.ReactCurrentDispatcher
  , ii = qe.ReactCurrentBatchConfig
  , Ot = 0
  , V = null
  , Y = null
  , q = null
  , ul = !1
  , Un = !1
  , nr = 0
  , Gf = 0;
function le() {
    throw Error(j(321))
}
function Vo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fe(e[n], t[n]))
            return !1;
    return !0
}
function $o(e, t, n, r, l, o) {
    if (Ot = o,
    V = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ar.current = e === null || e.memoizedState === null ? Zf : qf,
    e = n(r, l),
    Un) {
        o = 0;
        do {
            if (Un = !1,
            nr = 0,
            25 <= o)
                throw Error(j(301));
            o += 1,
            q = Y = null,
            t.updateQueue = null,
            Ar.current = eh,
            e = n(r, l)
        } while (Un)
    }
    if (Ar.current = cl,
    t = Y !== null && Y.next !== null,
    Ot = 0,
    q = Y = V = null,
    ul = !1,
    t)
        throw Error(j(300));
    return e
}
function Xo() {
    var e = nr !== 0;
    return nr = 0,
    e
}
function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? V.memoizedState = q = e : q = q.next = e,
    q
}
function De() {
    if (Y === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Y.next;
    var t = q === null ? V.memoizedState : q.next;
    if (t !== null)
        q = t,
        Y = e;
    else {
        if (e === null)
            throw Error(j(310));
        Y = e,
        e = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null
        },
        q === null ? V.memoizedState = q = e : q = q.next = e
    }
    return q
}
function rr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function oi(e) {
    var t = De()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Y
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var s = l.next;
            l.next = o.next,
            o.next = s
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var a = s = null
          , u = null
          , c = o;
        do {
            var g = c.lane;
            if ((Ot & g) === g)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var p = {
                    lane: g,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (a = u = p,
                s = r) : u = u.next = p,
                V.lanes |= g,
                It |= g
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? s = r : u.next = a,
        Fe(r, t.memoizedState) || (pe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            V.lanes |= o,
            It |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function si(e) {
    var t = De()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var s = l = l.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== l);
        Fe(o, t.memoizedState) || (pe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function $u() {}
function Xu(e, t) {
    var n = V
      , r = De()
      , l = t()
      , o = !Fe(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    pe = !0),
    r = r.queue,
    Ho(Gu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        lr(9, Qu.bind(null, n, r, l, t), void 0, null),
        ee === null)
            throw Error(j(349));
        Ot & 30 || Hu(n, t, l)
    }
    return l
}
function Hu(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Qu(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ku(t) && Yu(e)
}
function Gu(e, t, n) {
    return n(function() {
        Ku(t) && Yu(e)
    })
}
function Ku(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Fe(e, n)
    } catch {
        return !0
    }
}
function Yu(e) {
    var t = Je(e, 1);
    t !== null && ze(t, e, 1, -1)
}
function Gs(e) {
    var t = Ue();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Jf.bind(null, V, e),
    [t.memoizedState, e]
}
function lr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Ju() {
    return De().memoizedState
}
function Wr(e, t, n, r) {
    var l = Ue();
    V.flags |= e,
    l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Cl(e, t, n, r) {
    var l = De();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) {
        var s = Y.memoizedState;
        if (o = s.destroy,
        r !== null && Vo(r, s.deps)) {
            l.memoizedState = lr(t, n, o, r);
            return
        }
    }
    V.flags |= e,
    l.memoizedState = lr(1 | t, n, o, r)
}
function Ks(e, t) {
    return Wr(8390656, 8, e, t)
}
function Ho(e, t) {
    return Cl(2048, 8, e, t)
}
function Zu(e, t) {
    return Cl(4, 2, e, t)
}
function qu(e, t) {
    return Cl(4, 4, e, t)
}
function ec(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function tc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Cl(4, 4, ec.bind(null, t, e), n)
}
function Qo() {}
function nc(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function rc(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function lc(e, t, n) {
    return Ot & 21 ? (Fe(n, t) || (n = uu(),
    V.lanes |= n,
    It |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    pe = !0),
    e.memoizedState = n)
}
function Kf(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ii.transition;
    ii.transition = {};
    try {
        e(!1),
        t()
    } finally {
        I = n,
        ii.transition = r
    }
}
function ic() {
    return De().memoizedState
}
function Yf(e, t, n) {
    var r = pt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    oc(e))
        sc(t, n);
    else if (n = Wu(e, t, n, r),
    n !== null) {
        var l = ue();
        ze(n, e, r, l),
        ac(n, t, r)
    }
}
function Jf(e, t, n) {
    var r = pt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (oc(e))
        sc(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (l.hasEagerState = !0,
                l.eagerState = a,
                Fe(a, s)) {
                    var u = t.interleaved;
                    u === null ? (l.next = l,
                    bo(t)) : (l.next = u.next,
                    u.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Wu(e, t, l, r),
        n !== null && (l = ue(),
        ze(n, e, r, l),
        ac(n, t, r))
    }
}
function oc(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}
function sc(e, t) {
    Un = ul = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ac(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        No(e, n)
    }
}
var cl = {
    readContext: Me,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1
}
  , Zf = {
    readContext: Me,
    useCallback: function(e, t) {
        return Ue().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Me,
    useEffect: Ks,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Wr(4194308, 4, ec.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Wr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Wr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ue();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ue();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Yf.bind(null, V, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ue();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Gs,
    useDebugValue: Qo,
    useDeferredValue: function(e) {
        return Ue().memoizedState = e
    },
    useTransition: function() {
        var e = Gs(!1)
          , t = e[0];
        return e = Kf.bind(null, e[1]),
        Ue().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = V
          , l = Ue();
        if (U) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            ee === null)
                throw Error(j(349));
            Ot & 30 || Hu(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        Ks(Gu.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        lr(9, Qu.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ue()
          , t = ee.identifierPrefix;
        if (U) {
            var n = Qe
              , r = He;
            n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = nr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Gf++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , qf = {
    readContext: Me,
    useCallback: nc,
    useContext: Me,
    useEffect: Ho,
    useImperativeHandle: tc,
    useInsertionEffect: Zu,
    useLayoutEffect: qu,
    useMemo: rc,
    useReducer: oi,
    useRef: Ju,
    useState: function() {
        return oi(rr)
    },
    useDebugValue: Qo,
    useDeferredValue: function(e) {
        var t = De();
        return lc(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = oi(rr)[0]
          , t = De().memoizedState;
        return [e, t]
    },
    useMutableSource: $u,
    useSyncExternalStore: Xu,
    useId: ic,
    unstable_isNewReconciler: !1
}
  , eh = {
    readContext: Me,
    useCallback: nc,
    useContext: Me,
    useEffect: Ho,
    useImperativeHandle: tc,
    useInsertionEffect: Zu,
    useLayoutEffect: qu,
    useMemo: rc,
    useReducer: si,
    useRef: Ju,
    useState: function() {
        return si(rr)
    },
    useDebugValue: Qo,
    useDeferredValue: function(e) {
        var t = De();
        return Y === null ? t.memoizedState = e : lc(t, Y.memoizedState, e)
    },
    useTransition: function() {
        var e = si(rr)[0]
          , t = De().memoizedState;
        return [e, t]
    },
    useMutableSource: $u,
    useSyncExternalStore: Xu,
    useId: ic,
    unstable_isNewReconciler: !1
};
function Le(e, t) {
    if (e && e.defaultProps) {
        t = $({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Xi(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : $({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var El = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? bt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = pt(e)
          , o = Ge(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = ft(e, o, l),
        t !== null && (ze(t, e, l, r),
        Ur(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , l = pt(e)
          , o = Ge(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = ft(e, o, l),
        t !== null && (ze(t, e, l, r),
        Ur(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = pt(e)
          , l = Ge(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = ft(e, l, r),
        t !== null && (ze(t, e, r, n),
        Ur(t, e, r))
    }
};
function Ys(e, t, n, r, l, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, o) : !0
}
function uc(e, t, n) {
    var r = !1
      , l = xt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Me(o) : (l = ge(t) ? Lt : se.current,
    r = t.contextTypes,
    o = (r = r != null) ? cn(e, l) : xt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = El,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Js(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null)
}
function Hi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Uo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Me(o) : (o = ge(t) ? Lt : se.current,
    l.context = cn(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Xi(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && El.enqueueReplaceState(l, l.state, null),
    sl(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function pn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Td(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function ai(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Qi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var th = typeof WeakMap == "function" ? WeakMap : Map;
function cc(e, t, n) {
    n = Ge(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fl || (fl = !0,
        ro = r),
        Qi(e, t)
    }
    ,
    n
}
function dc(e, t, n) {
    n = Ge(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Qi(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Qi(e, t),
        typeof r != "function" && (ht === null ? ht = new Set([this]) : ht.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Zs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new th;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = mh.bind(null, e, t, n),
    t.then(e, e))
}
function qs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ea(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1),
    t.tag = 2,
    ft(n, t, 1))),
    n.lanes |= 1),
    e)
}
var nh = qe.ReactCurrentOwner
  , pe = !1;
function ae(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : fn(t, e.child, n, r)
}
function ta(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return sn(t, l),
    r = $o(e, t, n, r, o, l),
    n = Xo(),
    e !== null && !pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ze(e, t, l)) : (U && n && Lo(t),
    t.flags |= 1,
    ae(e, t, r, l),
    t.child)
}
function na(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ts(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        fc(e, t, o, r, l)) : (e = Xr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Yn,
        n(s, r) && e.ref === t.ref)
            return Ze(e, t, l)
    }
    return t.flags |= 1,
    e = mt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function fc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Yn(o, r) && e.ref === t.ref)
            if (pe = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (pe = !0);
            else
                return t.lanes = e.lanes,
                Ze(e, t, l)
    }
    return Gi(e, t, n, r, l)
}
function hc(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            z(tn, ye),
            ye |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                z(tn, ye),
                ye |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            z(tn, ye),
            ye |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        z(tn, ye),
        ye |= r;
    return ae(e, t, l, n),
    t.child
}
function pc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Gi(e, t, n, r, l) {
    var o = ge(n) ? Lt : se.current;
    return o = cn(t, o),
    sn(t, l),
    n = $o(e, t, n, r, o, l),
    r = Xo(),
    e !== null && !pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    Ze(e, t, l)) : (U && r && Lo(t),
    t.flags |= 1,
    ae(e, t, n, l),
    t.child)
}
function ra(e, t, n, r, l) {
    if (ge(n)) {
        var o = !0;
        nl(t)
    } else
        o = !1;
    if (sn(t, l),
    t.stateNode === null)
        Br(e, t),
        uc(t, n, r),
        Hi(t, n, r, l),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var u = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Me(c) : (c = ge(n) ? Lt : se.current,
        c = cn(t, c));
        var g = n.getDerivedStateFromProps
          , p = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== c) && Js(t, s, r, c),
        nt = !1;
        var m = t.memoizedState;
        s.state = m,
        sl(t, r, s, l),
        u = t.memoizedState,
        a !== r || m !== u || me.current || nt ? (typeof g == "function" && (Xi(t, n, g, r),
        u = t.memoizedState),
        (a = nt || Ys(t, n, a, r, m, u, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        s.props = r,
        s.state = u,
        s.context = c,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Bu(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Le(t.type, a),
        s.props = c,
        p = t.pendingProps,
        m = s.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Me(u) : (u = ge(n) ? Lt : se.current,
        u = cn(t, u));
        var y = n.getDerivedStateFromProps;
        (g = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== p || m !== u) && Js(t, s, r, u),
        nt = !1,
        m = t.memoizedState,
        s.state = m,
        sl(t, r, s, l);
        var x = t.memoizedState;
        a !== p || m !== x || me.current || nt ? (typeof y == "function" && (Xi(t, n, y, r),
        x = t.memoizedState),
        (c = nt || Ys(t, n, c, r, m, x, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, u),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, u)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = u,
        r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ki(e, t, n, r, o, l)
}
function Ki(e, t, n, r, l, o) {
    pc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return l && Bs(t, n, !1),
        Ze(e, t, o);
    r = t.stateNode,
    nh.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = fn(t, e.child, null, o),
    t.child = fn(t, null, a, o)) : ae(e, t, a, o),
    t.memoizedState = r.state,
    l && Bs(t, n, !0),
    t.child
}
function mc(e) {
    var t = e.stateNode;
    t.pendingContext ? Ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ws(e, t.context, !1),
    Ao(e, t.containerInfo)
}
function la(e, t, n, r, l) {
    return dn(),
    Oo(l),
    t.flags |= 256,
    ae(e, t, n, r),
    t.child
}
var Yi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ji(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function gc(e, t, n) {
    var r = t.pendingProps, l = B.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    z(B, l & 1),
    e === null)
        return Vi(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Ml(s, r, 0, null),
        e = _t(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Ji(n),
        t.memoizedState = Yi,
        e) : Go(t, s));
    if (l = e.memoizedState,
    l !== null && (a = l.dehydrated,
    a !== null))
        return rh(e, t, s, r, a, l, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        l = e.child,
        a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = mt(l, u),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        a !== null ? o = mt(a, o) : (o = _t(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Ji(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Yi,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = mt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Go(e, t) {
    return t = Ml({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Dr(e, t, n, r) {
    return r !== null && Oo(r),
    fn(t, e.child, null, n),
    e = Go(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function rh(e, t, n, r, l, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ai(Error(j(422))),
        Dr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = Ml({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = _t(o, l, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && fn(t, e.child, null, s),
        t.child.memoizedState = Ji(s),
        t.memoizedState = Yi,
        o);
    if (!(t.mode & 1))
        return Dr(e, t, s, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(j(419)),
        r = ai(o, r, void 0),
        Dr(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    pe || a) {
        if (r = ee,
        r !== null) {
            switch (s & -s) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | s) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            Je(e, l),
            ze(r, e, l, -1))
        }
        return es(),
        r = ai(Error(j(421))),
        Dr(e, t, s, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = gh.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    we = dt(l.nextSibling),
    je = t,
    U = !0,
    Oe = null,
    e !== null && (Ce[Ee++] = He,
    Ce[Ee++] = Qe,
    Ce[Ee++] = Rt,
    He = e.id,
    Qe = e.overflow,
    Rt = t),
    t = Go(t, r.children),
    t.flags |= 4096,
    t)
}
function ia(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    $i(e.return, t, n)
}
function ui(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function vc(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (ae(e, t, r.children, n),
    r = B.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ia(e, n, t);
                else if (e.tag === 19)
                    ia(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (z(B, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && al(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            ui(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && al(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            ui(t, !0, n, null, o);
            break;
        case "together":
            ui(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Br(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ze(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    It |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = mt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = mt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function lh(e, t, n) {
    switch (t.tag) {
    case 3:
        mc(t),
        dn();
        break;
    case 5:
        Vu(t);
        break;
    case 1:
        ge(t.type) && nl(t);
        break;
    case 4:
        Ao(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        z(il, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (z(B, B.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? gc(e, t, n) : (z(B, B.current & 1),
            e = Ze(e, t, n),
            e !== null ? e.sibling : null);
        z(B, B.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return vc(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        z(B, B.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        hc(e, t, n)
    }
    return Ze(e, t, n)
}
var xc, Zi, yc, wc;
xc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Zi = function() {}
;
yc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Mt(Be.current);
        var o = null;
        switch (n) {
        case "input":
            l = wi(e, l),
            r = wi(e, r),
            o = [];
            break;
        case "select":
            l = $({}, l, {
                value: void 0
            }),
            r = $({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = Si(e, l),
            r = Si(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = el)
        }
        Ci(n, r);
        var s;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var a = l[c];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (a = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && u !== a && (u != null || a != null))
                if (c === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in u)
                            u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}),
                            n[s] = u[s])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    a = a ? a.__html : void 0,
                    u != null && a !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vn.hasOwnProperty(c) ? (u != null && c === "onScroll" && F("scroll", e),
                    o || a === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
wc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Pn(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ih(e, t, n) {
    var r = t.pendingProps;
    switch (Ro(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ie(t),
        null;
    case 1:
        return ge(t.type) && tl(),
        ie(t),
        null;
    case 3:
        return r = t.stateNode,
        hn(),
        b(me),
        b(se),
        Bo(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Oe !== null && (oo(Oe),
        Oe = null))),
        Zi(e, t),
        ie(t),
        null;
    case 5:
        Wo(t);
        var l = Mt(tr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            yc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return ie(t),
                null
            }
            if (e = Mt(Be.current),
            Pr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Ae] = t,
                r[qn] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    F("cancel", r),
                    F("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    F("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Rn.length; l++)
                        F(Rn[l], r);
                    break;
                case "source":
                    F("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    F("error", r),
                    F("load", r);
                    break;
                case "details":
                    F("toggle", r);
                    break;
                case "input":
                    ps(r, o),
                    F("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    F("invalid", r);
                    break;
                case "textarea":
                    gs(r, o),
                    F("invalid", r)
                }
                Ci(n, o),
                l = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Tr(r.textContent, a, e),
                        l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Tr(r.textContent, a, e),
                        l = ["children", "" + a]) : Vn.hasOwnProperty(s) && a != null && s === "onScroll" && F("scroll", r)
                    }
                switch (n) {
                case "input":
                    yr(r),
                    ms(r, o, !0);
                    break;
                case "textarea":
                    yr(r),
                    vs(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = el)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ga(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Ae] = t,
                e[qn] = r,
                xc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Ei(n, r),
                    n) {
                    case "dialog":
                        F("cancel", e),
                        F("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        F("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Rn.length; l++)
                            F(Rn[l], e);
                        l = r;
                        break;
                    case "source":
                        F("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        F("error", e),
                        F("load", e),
                        l = r;
                        break;
                    case "details":
                        F("toggle", e),
                        l = r;
                        break;
                    case "input":
                        ps(e, r),
                        l = wi(e, r),
                        F("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = $({}, r, {
                            value: void 0
                        }),
                        F("invalid", e);
                        break;
                    case "textarea":
                        gs(e, r),
                        l = Si(e, r),
                        F("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Ci(n, l),
                    a = l;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var u = a[o];
                            o === "style" ? Ja(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Ka(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && $n(e, u) : typeof u == "number" && $n(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vn.hasOwnProperty(o) ? u != null && o === "onScroll" && F("scroll", e) : u != null && xo(e, o, u, s))
                        }
                    switch (n) {
                    case "input":
                        yr(e),
                        ms(e, r, !1);
                        break;
                    case "textarea":
                        yr(e),
                        vs(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + vt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = el)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            wc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Mt(tr.current),
            Mt(Be.current),
            Pr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ae] = t,
                (o = r.nodeValue !== n) && (e = je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Tr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ae] = t,
                t.stateNode = r
        }
        return ie(t),
        null;
    case 13:
        if (b(B),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && we !== null && t.mode & 1 && !(t.flags & 128))
                bu(),
                dn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Pr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(j(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(j(317));
                    o[Ae] = t
                } else
                    dn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ie(t),
                o = !1
            } else
                Oe !== null && (oo(Oe),
                Oe = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || B.current & 1 ? J === 0 && (J = 3) : es())),
        t.updateQueue !== null && (t.flags |= 4),
        ie(t),
        null);
    case 4:
        return hn(),
        Zi(e, t),
        e === null && Jn(t.stateNode.containerInfo),
        ie(t),
        null;
    case 10:
        return Fo(t.type._context),
        ie(t),
        null;
    case 17:
        return ge(t.type) && tl(),
        ie(t),
        null;
    case 19:
        if (b(B),
        o = t.memoizedState,
        o === null)
            return ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                Pn(o, !1);
            else {
                if (J !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = al(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Pn(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return z(B, B.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && G() > mn && (t.flags |= 128,
                r = !0,
                Pn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = al(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Pn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !U)
                        return ie(t),
                        null
                } else
                    2 * G() - o.renderingStartTime > mn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Pn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = G(),
        t.sibling = null,
        n = B.current,
        z(B, r ? n & 1 | 2 : n & 1),
        t) : (ie(t),
        null);
    case 22:
    case 23:
        return qo(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ye & 1073741824 && (ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function oh(e, t) {
    switch (Ro(t),
    t.tag) {
    case 1:
        return ge(t.type) && tl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return hn(),
        b(me),
        b(se),
        Bo(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Wo(t),
        null;
    case 13:
        if (b(B),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            dn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return b(B),
        null;
    case 4:
        return hn(),
        null;
    case 10:
        return Fo(t.type._context),
        null;
    case 22:
    case 23:
        return qo(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _r = !1
  , oe = !1
  , sh = typeof WeakSet == "function" ? WeakSet : Set
  , N = null;
function en(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function qi(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var oa = !1;
function ah(e, t) {
    if (zi = Jr,
    e = Cu(),
    _o(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , u = -1
                      , c = 0
                      , g = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (a = s + l),
                        p !== o || r !== 0 && p.nodeType !== 3 || (u = s + r),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (y = p.firstChild) !== null; )
                            m = p,
                            p = y;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++c === l && (a = s),
                            m === o && ++g === r && (u = s),
                            (y = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = y
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Fi = {
        focusedElem: e,
        selectionRange: n
    },
    Jr = !1,
    N = t; N !== null; )
        if (t = N,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            N = e;
        else
            for (; N !== null; ) {
                t = N;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps
                                  , E = x.memoizedState
                                  , f = t.stateNode
                                  , d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Le(t.type, w), E);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (v) {
                    X(t, t.return, v)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    N = e;
                    break
                }
                N = t.return
            }
    return x = oa,
    oa = !1,
    x
}
function An(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && qi(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function Tl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function eo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function jc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    jc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ae],
    delete t[qn],
    delete t[Ai],
    delete t[$f],
    delete t[Xf])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function kc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function sa(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || kc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function to(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = el));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (to(e, t, n),
        e = e.sibling; e !== null; )
            to(e, t, n),
            e = e.sibling
}
function no(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (no(e, t, n),
        e = e.sibling; e !== null; )
            no(e, t, n),
            e = e.sibling
}
var te = null
  , Re = !1;
function et(e, t, n) {
    for (n = n.child; n !== null; )
        Sc(e, t, n),
        n = n.sibling
}
function Sc(e, t, n) {
    if (We && typeof We.onCommitFiberUnmount == "function")
        try {
            We.onCommitFiberUnmount(yl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        oe || en(n, t);
    case 6:
        var r = te
          , l = Re;
        te = null,
        et(e, t, n),
        te = r,
        Re = l,
        te !== null && (Re ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
        break;
    case 18:
        te !== null && (Re ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? ni(e.parentNode, n) : e.nodeType === 1 && ni(e, n),
        Gn(e)) : ni(te, n.stateNode));
        break;
    case 4:
        r = te,
        l = Re,
        te = n.stateNode.containerInfo,
        Re = !0,
        et(e, t, n),
        te = r,
        Re = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!oe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && qi(n, t, s),
                l = l.next
            } while (l !== r)
        }
        et(e, t, n);
        break;
    case 1:
        if (!oe && (en(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                X(n, t, a)
            }
        et(e, t, n);
        break;
    case 21:
        et(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null,
        et(e, t, n),
        oe = r) : et(e, t, n);
        break;
    default:
        et(e, t, n)
    }
}
function aa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new sh),
        t.forEach(function(r) {
            var l = vh.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function _e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        te = a.stateNode,
                        Re = !1;
                        break e;
                    case 3:
                        te = a.stateNode.containerInfo,
                        Re = !0;
                        break e;
                    case 4:
                        te = a.stateNode.containerInfo,
                        Re = !0;
                        break e
                    }
                    a = a.return
                }
                if (te === null)
                    throw Error(j(160));
                Sc(o, s, l),
                te = null,
                Re = !1;
                var u = l.alternate;
                u !== null && (u.return = null),
                l.return = null
            } catch (c) {
                X(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Nc(t, e),
            t = t.sibling
}
function Nc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (_e(t, e),
        be(e),
        r & 4) {
            try {
                An(3, e, e.return),
                Tl(3, e)
            } catch (w) {
                X(e, e.return, w)
            }
            try {
                An(5, e, e.return)
            } catch (w) {
                X(e, e.return, w)
            }
        }
        break;
    case 1:
        _e(t, e),
        be(e),
        r & 512 && n !== null && en(n, n.return);
        break;
    case 5:
        if (_e(t, e),
        be(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                $n(l, "")
            } catch (w) {
                X(e, e.return, w)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Ha(l, o),
                    Ei(a, s);
                    var c = Ei(a, o);
                    for (s = 0; s < u.length; s += 2) {
                        var g = u[s]
                          , p = u[s + 1];
                        g === "style" ? Ja(l, p) : g === "dangerouslySetInnerHTML" ? Ka(l, p) : g === "children" ? $n(l, p) : xo(l, g, p, c)
                    }
                    switch (a) {
                    case "input":
                        ji(l, o);
                        break;
                    case "textarea":
                        Qa(l, o);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var y = o.value;
                        y != null ? nn(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? nn(l, !!o.multiple, o.defaultValue, !0) : nn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[qn] = o
                } catch (w) {
                    X(e, e.return, w)
                }
        }
        break;
    case 6:
        if (_e(t, e),
        be(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (w) {
                X(e, e.return, w)
            }
        }
        break;
    case 3:
        if (_e(t, e),
        be(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Gn(t.containerInfo)
            } catch (w) {
                X(e, e.return, w)
            }
        break;
    case 4:
        _e(t, e),
        be(e);
        break;
    case 13:
        _e(t, e),
        be(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (Jo = G())),
        r & 4 && aa(e);
        break;
    case 22:
        if (g = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (oe = (c = oe) || g,
        _e(t, e),
        oe = c) : _e(t, e),
        be(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !g && e.mode & 1)
                for (N = e,
                g = e.child; g !== null; ) {
                    for (p = N = g; N !== null; ) {
                        switch (m = N,
                        y = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            An(4, m, m.return);
                            break;
                        case 1:
                            en(m, m.return);
                            var x = m.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (w) {
                                    X(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            en(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                ca(p);
                                continue
                            }
                        }
                        y !== null ? (y.return = m,
                        N = y) : ca(p)
                    }
                    g = g.sibling
                }
            e: for (g = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (g === null) {
                        g = p;
                        try {
                            l = p.stateNode,
                            c ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = p.stateNode,
                            u = p.memoizedProps.style,
                            s = u != null && u.hasOwnProperty("display") ? u.display : null,
                            a.style.display = Ya("display", s))
                        } catch (w) {
                            X(e, e.return, w)
                        }
                    }
                } else if (p.tag === 6) {
                    if (g === null)
                        try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (w) {
                            X(e, e.return, w)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    g === p && (g = null),
                    p = p.return
                }
                g === p && (g = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        _e(t, e),
        be(e),
        r & 4 && aa(e);
        break;
    case 21:
        break;
    default:
        _e(t, e),
        be(e)
    }
}
function be(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (kc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && ($n(l, ""),
                r.flags &= -33);
                var o = sa(e);
                no(e, o, l);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = sa(e);
                to(e, a, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (u) {
            X(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function uh(e, t, n) {
    N = e,
    Cc(e)
}
function Cc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
        var l = N
          , o = l.child;
        if (l.tag === 22 && r) {
            var s = l.memoizedState !== null || _r;
            if (!s) {
                var a = l.alternate
                  , u = a !== null && a.memoizedState !== null || oe;
                a = _r;
                var c = oe;
                if (_r = s,
                (oe = u) && !c)
                    for (N = l; N !== null; )
                        s = N,
                        u = s.child,
                        s.tag === 22 && s.memoizedState !== null ? da(l) : u !== null ? (u.return = s,
                        N = u) : da(l);
                for (; o !== null; )
                    N = o,
                    Cc(o),
                    o = o.sibling;
                N = l,
                _r = a,
                oe = c
            }
            ua(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            N = o) : ua(e)
    }
}
function ua(e) {
    for (; N !== null; ) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        oe || Tl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !oe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Qs(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Qs(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var g = c.memoizedState;
                                if (g !== null) {
                                    var p = g.dehydrated;
                                    p !== null && Gn(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                oe || t.flags & 512 && eo(t)
            } catch (m) {
                X(t, t.return, m)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function ca(e) {
    for (; N !== null; ) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function da(e) {
    for (; N !== null; ) {
        var t = N;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Tl(4, t)
                } catch (u) {
                    X(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        X(t, l, u)
                    }
                }
                var o = t.return;
                try {
                    eo(t)
                } catch (u) {
                    X(t, o, u)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    eo(t)
                } catch (u) {
                    X(t, s, u)
                }
            }
        } catch (u) {
            X(t, t.return, u)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            N = a;
            break
        }
        N = t.return
    }
}
var ch = Math.ceil
  , dl = qe.ReactCurrentDispatcher
  , Ko = qe.ReactCurrentOwner
  , Pe = qe.ReactCurrentBatchConfig
  , O = 0
  , ee = null
  , K = null
  , ne = 0
  , ye = 0
  , tn = wt(0)
  , J = 0
  , ir = null
  , It = 0
  , Pl = 0
  , Yo = 0
  , Wn = null
  , he = null
  , Jo = 0
  , mn = 1 / 0
  , $e = null
  , fl = !1
  , ro = null
  , ht = null
  , Lr = !1
  , ot = null
  , hl = 0
  , Bn = 0
  , lo = null
  , Vr = -1
  , $r = 0;
function ue() {
    return O & 6 ? G() : Vr !== -1 ? Vr : Vr = G()
}
function pt(e) {
    return e.mode & 1 ? O & 2 && ne !== 0 ? ne & -ne : Qf.transition !== null ? ($r === 0 && ($r = uu()),
    $r) : (e = I,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : gu(e.type)),
    e) : 1
}
function ze(e, t, n, r) {
    if (50 < Bn)
        throw Bn = 0,
        lo = null,
        Error(j(185));
    ur(e, n, r),
    (!(O & 2) || e !== ee) && (e === ee && (!(O & 2) && (Pl |= n),
    J === 4 && lt(e, ne)),
    ve(e, r),
    n === 1 && O === 0 && !(t.mode & 1) && (mn = G() + 500,
    Nl && jt()))
}
function ve(e, t) {
    var n = e.callbackNode;
    Hd(e, t);
    var r = Yr(e, e === ee ? ne : 0);
    if (r === 0)
        n !== null && ws(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ws(n),
        t === 1)
            e.tag === 0 ? Hf(fa.bind(null, e)) : Iu(fa.bind(null, e)),
            Bf(function() {
                !(O & 6) && jt()
            }),
            n = null;
        else {
            switch (cu(r)) {
            case 1:
                n = So;
                break;
            case 4:
                n = su;
                break;
            case 16:
                n = Kr;
                break;
            case 536870912:
                n = au;
                break;
            default:
                n = Kr
            }
            n = Rc(n, Ec.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Ec(e, t) {
    if (Vr = -1,
    $r = 0,
    O & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (an() && e.callbackNode !== n)
        return null;
    var r = Yr(e, e === ee ? ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = pl(e, r);
    else {
        t = r;
        var l = O;
        O |= 2;
        var o = Pc();
        (ee !== e || ne !== t) && ($e = null,
        mn = G() + 500,
        Dt(e, t));
        do
            try {
                hh();
                break
            } catch (a) {
                Tc(e, a)
            }
        while (!0);
        zo(),
        dl.current = o,
        O = l,
        K !== null ? t = 0 : (ee = null,
        ne = 0,
        t = J)
    }
    if (t !== 0) {
        if (t === 2 && (l = _i(e),
        l !== 0 && (r = l,
        t = io(e, l))),
        t === 1)
            throw n = ir,
            Dt(e, 0),
            lt(e, r),
            ve(e, G()),
            n;
        if (t === 6)
            lt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !dh(l) && (t = pl(e, r),
            t === 2 && (o = _i(e),
            o !== 0 && (r = o,
            t = io(e, o))),
            t === 1))
                throw n = ir,
                Dt(e, 0),
                lt(e, r),
                ve(e, G()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Et(e, he, $e);
                break;
            case 3:
                if (lt(e, r),
                (r & 130023424) === r && (t = Jo + 500 - G(),
                10 < t)) {
                    if (Yr(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Ui(Et.bind(null, e, he, $e), t);
                    break
                }
                Et(e, he, $e);
                break;
            case 4:
                if (lt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var s = 31 - Ie(r);
                    o = 1 << s,
                    s = t[s],
                    s > l && (l = s),
                    r &= ~o
                }
                if (r = l,
                r = G() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ch(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ui(Et.bind(null, e, he, $e), r);
                    break
                }
                Et(e, he, $e);
                break;
            case 5:
                Et(e, he, $e);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return ve(e, G()),
    e.callbackNode === n ? Ec.bind(null, e) : null
}
function io(e, t) {
    var n = Wn;
    return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    e = pl(e, t),
    e !== 2 && (t = he,
    he = n,
    t !== null && oo(t)),
    e
}
function oo(e) {
    he === null ? he = e : he.push.apply(he, e)
}
function dh(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Fe(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function lt(e, t) {
    for (t &= ~Yo,
    t &= ~Pl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ie(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function fa(e) {
    if (O & 6)
        throw Error(j(327));
    an();
    var t = Yr(e, 0);
    if (!(t & 1))
        return ve(e, G()),
        null;
    var n = pl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = _i(e);
        r !== 0 && (t = r,
        n = io(e, r))
    }
    if (n === 1)
        throw n = ir,
        Dt(e, 0),
        lt(e, t),
        ve(e, G()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Et(e, he, $e),
    ve(e, G()),
    null
}
function Zo(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
        O === 0 && (mn = G() + 500,
        Nl && jt())
    }
}
function zt(e) {
    ot !== null && ot.tag === 0 && !(O & 6) && an();
    var t = O;
    O |= 1;
    var n = Pe.transition
      , r = I;
    try {
        if (Pe.transition = null,
        I = 1,
        e)
            return e()
    } finally {
        I = r,
        Pe.transition = n,
        O = t,
        !(O & 6) && jt()
    }
}
function qo() {
    ye = tn.current,
    b(tn)
}
function Dt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Wf(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (Ro(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && tl();
                break;
            case 3:
                hn(),
                b(me),
                b(se),
                Bo();
                break;
            case 5:
                Wo(r);
                break;
            case 4:
                hn();
                break;
            case 13:
                b(B);
                break;
            case 19:
                b(B);
                break;
            case 10:
                Fo(r.type._context);
                break;
            case 22:
            case 23:
                qo()
            }
            n = n.return
        }
    if (ee = e,
    K = e = mt(e.current, null),
    ne = ye = t,
    J = 0,
    ir = null,
    Yo = Pl = It = 0,
    he = Wn = null,
    Pt !== null) {
        for (t = 0; t < Pt.length; t++)
            if (n = Pt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = l,
                    r.next = s
                }
                n.pending = r
            }
        Pt = null
    }
    return e
}
function Tc(e, t) {
    do {
        var n = K;
        try {
            if (zo(),
            Ar.current = cl,
            ul) {
                for (var r = V.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                ul = !1
            }
            if (Ot = 0,
            q = Y = V = null,
            Un = !1,
            nr = 0,
            Ko.current = null,
            n === null || n.return === null) {
                J = 1,
                ir = t,
                K = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , u = t;
                if (t = ne,
                a.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , g = a
                      , p = g.tag;
                    if (!(g.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = g.alternate;
                        m ? (g.updateQueue = m.updateQueue,
                        g.memoizedState = m.memoizedState,
                        g.lanes = m.lanes) : (g.updateQueue = null,
                        g.memoizedState = null)
                    }
                    var y = qs(s);
                    if (y !== null) {
                        y.flags &= -257,
                        ea(y, s, a, o, t),
                        y.mode & 1 && Zs(o, c, t),
                        t = y,
                        u = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(u),
                            t.updateQueue = w
                        } else
                            x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zs(o, c, t),
                            es();
                            break e
                        }
                        u = Error(j(426))
                    }
                } else if (U && a.mode & 1) {
                    var E = qs(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        ea(E, s, a, o, t),
                        Oo(pn(u, a));
                        break e
                    }
                }
                o = u = pn(u, a),
                J !== 4 && (J = 2),
                Wn === null ? Wn = [o] : Wn.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = cc(o, u, t);
                        Hs(o, f);
                        break e;
                    case 1:
                        a = u;
                        var d = o.type
                          , h = o.stateNode;
                        if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (ht === null || !ht.has(h)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var v = dc(o, a, t);
                            Hs(o, v);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Dc(n)
        } catch (S) {
            t = S,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Pc() {
    var e = dl.current;
    return dl.current = cl,
    e === null ? cl : e
}
function es() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || !(It & 268435455) && !(Pl & 268435455) || lt(ee, ne)
}
function pl(e, t) {
    var n = O;
    O |= 2;
    var r = Pc();
    (ee !== e || ne !== t) && ($e = null,
    Dt(e, t));
    do
        try {
            fh();
            break
        } catch (l) {
            Tc(e, l)
        }
    while (!0);
    if (zo(),
    O = n,
    dl.current = r,
    K !== null)
        throw Error(j(261));
    return ee = null,
    ne = 0,
    J
}
function fh() {
    for (; K !== null; )
        Mc(K)
}
function hh() {
    for (; K !== null && !Fd(); )
        Mc(K)
}
function Mc(e) {
    var t = Lc(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps,
    t === null ? Dc(e) : K = t,
    Ko.current = null
}
function Dc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = oh(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                J = 6,
                K = null;
                return
            }
        } else if (n = ih(n, t, ye),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}
function Et(e, t, n) {
    var r = I
      , l = Pe.transition;
    try {
        Pe.transition = null,
        I = 1,
        ph(e, t, n, r)
    } finally {
        Pe.transition = l,
        I = r
    }
    return null
}
function ph(e, t, n, r) {
    do
        an();
    while (ot !== null);
    if (O & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Qd(e, o),
    e === ee && (K = ee = null,
    ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = !0,
    Rc(Kr, function() {
        return an(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Pe.transition,
        Pe.transition = null;
        var s = I;
        I = 1;
        var a = O;
        O |= 4,
        Ko.current = null,
        ah(e, n),
        Nc(n, e),
        Of(Fi),
        Jr = !!zi,
        Fi = zi = null,
        e.current = n,
        uh(n),
        bd(),
        O = a,
        I = s,
        Pe.transition = o
    } else
        e.current = n;
    if (Lr && (Lr = !1,
    ot = e,
    hl = l),
    o = e.pendingLanes,
    o === 0 && (ht = null),
    Wd(n.stateNode),
    ve(e, G()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (fl)
        throw fl = !1,
        e = ro,
        ro = null,
        e;
    return hl & 1 && e.tag !== 0 && an(),
    o = e.pendingLanes,
    o & 1 ? e === lo ? Bn++ : (Bn = 0,
    lo = e) : Bn = 0,
    jt(),
    null
}
function an() {
    if (ot !== null) {
        var e = cu(hl)
          , t = Pe.transition
          , n = I;
        try {
            if (Pe.transition = null,
            I = 16 > e ? 16 : e,
            ot === null)
                var r = !1;
            else {
                if (e = ot,
                ot = null,
                hl = 0,
                O & 6)
                    throw Error(j(331));
                var l = O;
                for (O |= 4,
                N = e.current; N !== null; ) {
                    var o = N
                      , s = o.child;
                    if (N.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                for (N = c; N !== null; ) {
                                    var g = N;
                                    switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        An(8, g, o)
                                    }
                                    var p = g.child;
                                    if (p !== null)
                                        p.return = g,
                                        N = p;
                                    else
                                        for (; N !== null; ) {
                                            g = N;
                                            var m = g.sibling
                                              , y = g.return;
                                            if (jc(g),
                                            g === c) {
                                                N = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y,
                                                N = m;
                                                break
                                            }
                                            N = y
                                        }
                                }
                            }
                            var x = o.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null,
                                        w = E
                                    } while (w !== null)
                                }
                            }
                            N = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        N = s;
                    else
                        e: for (; N !== null; ) {
                            if (o = N,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    An(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                N = f;
                                break e
                            }
                            N = o.return
                        }
                }
                var d = e.current;
                for (N = d; N !== null; ) {
                    s = N;
                    var h = s.child;
                    if (s.subtreeFlags & 2064 && h !== null)
                        h.return = s,
                        N = h;
                    else
                        e: for (s = d; N !== null; ) {
                            if (a = N,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Tl(9, a)
                                    }
                                } catch (S) {
                                    X(a, a.return, S)
                                }
                            if (a === s) {
                                N = null;
                                break e
                            }
                            var v = a.sibling;
                            if (v !== null) {
                                v.return = a.return,
                                N = v;
                                break e
                            }
                            N = a.return
                        }
                }
                if (O = l,
                jt(),
                We && typeof We.onPostCommitFiberRoot == "function")
                    try {
                        We.onPostCommitFiberRoot(yl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            I = n,
            Pe.transition = t
        }
    }
    return !1
}
function ha(e, t, n) {
    t = pn(n, t),
    t = cc(e, t, 1),
    e = ft(e, t, 1),
    t = ue(),
    e !== null && (ur(e, 1, t),
    ve(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        ha(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ha(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
                    e = pn(n, e),
                    e = dc(t, e, 1),
                    t = ft(t, e, 1),
                    e = ue(),
                    t !== null && (ur(t, 1, e),
                    ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function mh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > G() - Jo ? Dt(e, 0) : Yo |= n),
    ve(e, t)
}
function _c(e, t) {
    t === 0 && (e.mode & 1 ? (t = kr,
    kr <<= 1,
    !(kr & 130023424) && (kr = 4194304)) : t = 1);
    var n = ue();
    e = Je(e, t),
    e !== null && (ur(e, t, n),
    ve(e, n))
}
function gh(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    _c(e, n)
}
function vh(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    _c(e, n)
}
var Lc;
Lc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current)
            pe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return pe = !1,
                lh(e, t, n);
            pe = !!(e.flags & 131072)
        }
    else
        pe = !1,
        U && t.flags & 1048576 && zu(t, ll, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Br(e, t),
        e = t.pendingProps;
        var l = cn(t, se.current);
        sn(t, n),
        l = $o(null, t, r, e, l, n);
        var o = Xo();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ge(r) ? (o = !0,
        nl(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Uo(t),
        l.updater = El,
        t.stateNode = l,
        l._reactInternals = t,
        Hi(t, r, e, n),
        t = Ki(null, t, r, !0, o, n)) : (t.tag = 0,
        U && o && Lo(t),
        ae(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Br(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = yh(r),
            e = Le(r, e),
            l) {
            case 0:
                t = Gi(null, t, r, e, n);
                break e;
            case 1:
                t = ra(null, t, r, e, n);
                break e;
            case 11:
                t = ta(null, t, r, e, n);
                break e;
            case 14:
                t = na(null, t, r, Le(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Gi(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        ra(e, t, r, l, n);
    case 3:
        e: {
            if (mc(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            Bu(e, t),
            sl(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = pn(Error(j(423)), t),
                    t = la(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = pn(Error(j(424)), t),
                    t = la(e, t, r, n, l);
                    break e
                } else
                    for (we = dt(t.stateNode.containerInfo.firstChild),
                    je = t,
                    U = !0,
                    Oe = null,
                    n = Au(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (dn(),
                r === l) {
                    t = Ze(e, t, n);
                    break e
                }
                ae(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Vu(t),
        e === null && Vi(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = l.children,
        bi(r, l) ? s = null : o !== null && bi(r, o) && (t.flags |= 32),
        pc(e, t),
        ae(e, t, s, n),
        t.child;
    case 6:
        return e === null && Vi(t),
        null;
    case 13:
        return gc(e, t, n);
    case 4:
        return Ao(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = fn(t, null, r, n) : ae(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        ta(e, t, r, l, n);
    case 7:
        return ae(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ae(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ae(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            s = l.value,
            z(il, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (Fe(o.value, s)) {
                    if (o.children === l.children && !me.current) {
                        t = Ze(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var u = a.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (o.tag === 1) {
                                        u = Ge(-1, n & -n),
                                        u.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var g = c.pending;
                                            g === null ? u.next = u : (u.next = g.next,
                                            g.next = u),
                                            c.pending = u
                                        }
                                    }
                                    o.lanes |= n,
                                    u = o.alternate,
                                    u !== null && (u.lanes |= n),
                                    $i(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            $i(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            ae(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        sn(t, n),
        l = Me(l),
        r = r(l),
        t.flags |= 1,
        ae(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Le(r, t.pendingProps),
        l = Le(r.type, l),
        na(e, t, r, l, n);
    case 15:
        return fc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Br(e, t),
        t.tag = 1,
        ge(r) ? (e = !0,
        nl(t)) : e = !1,
        sn(t, n),
        uc(t, r, l),
        Hi(t, r, l, n),
        Ki(null, t, r, !0, e, n);
    case 19:
        return vc(e, t, n);
    case 22:
        return hc(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Rc(e, t) {
    return ou(e, t)
}
function xh(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Te(e, t, n, r) {
    return new xh(e,t,n,r)
}
function ts(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function yh(e) {
    if (typeof e == "function")
        return ts(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === wo)
            return 11;
        if (e === jo)
            return 14
    }
    return 2
}
function mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Te(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Xr(e, t, n, r, l, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        ts(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Xt:
            return _t(n.children, l, o, t);
        case yo:
            s = 8,
            l |= 8;
            break;
        case gi:
            return e = Te(12, n, t, l | 2),
            e.elementType = gi,
            e.lanes = o,
            e;
        case vi:
            return e = Te(13, n, t, l),
            e.elementType = vi,
            e.lanes = o,
            e;
        case xi:
            return e = Te(19, n, t, l),
            e.elementType = xi,
            e.lanes = o,
            e;
        case Va:
            return Ml(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wa:
                    s = 10;
                    break e;
                case Ba:
                    s = 9;
                    break e;
                case wo:
                    s = 11;
                    break e;
                case jo:
                    s = 14;
                    break e;
                case tt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = Te(s, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function _t(e, t, n, r) {
    return e = Te(7, e, r, t),
    e.lanes = n,
    e
}
function Ml(e, t, n, r) {
    return e = Te(22, e, r, t),
    e.elementType = Va,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ci(e, t, n) {
    return e = Te(6, e, null, t),
    e.lanes = n,
    e
}
function di(e, t, n) {
    return t = Te(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function wh(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Xl(0),
    this.expirationTimes = Xl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Xl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function ns(e, t, n, r, l, o, s, a, u) {
    return e = new wh(e,t,n,a,u),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Te(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Uo(o),
    e
}
function jh(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $t,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Oc(e) {
    if (!e)
        return xt;
    e = e._reactInternals;
    e: {
        if (bt(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ge(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ge(n))
            return Ou(e, n, t)
    }
    return t
}
function Ic(e, t, n, r, l, o, s, a, u) {
    return e = ns(n, r, !0, e, l, o, s, a, u),
    e.context = Oc(null),
    n = e.current,
    r = ue(),
    l = pt(n),
    o = Ge(r, l),
    o.callback = t ?? null,
    ft(n, o, l),
    e.current.lanes = l,
    ur(e, l, r),
    ve(e, r),
    e
}
function Dl(e, t, n, r) {
    var l = t.current
      , o = ue()
      , s = pt(l);
    return n = Oc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ge(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ft(l, t, s),
    e !== null && (ze(e, l, s, o),
    Ur(e, l, s)),
    s
}
function ml(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function pa(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function rs(e, t) {
    pa(e, t),
    (e = e.alternate) && pa(e, t)
}
function kh() {
    return null
}
var zc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ls(e) {
    this._internalRoot = e
}
_l.prototype.render = ls.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Dl(e, t, null, null)
}
;
_l.prototype.unmount = ls.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zt(function() {
            Dl(null, e, null, null)
        }),
        t[Ye] = null
    }
}
;
function _l(e) {
    this._internalRoot = e
}
_l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = hu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++)
            ;
        rt.splice(n, 0, e),
        n === 0 && mu(e)
    }
}
;
function is(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ma() {}
function Sh(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = ml(s);
                o.call(c)
            }
        }
        var s = Ic(t, r, e, 0, null, !1, !1, "", ma);
        return e._reactRootContainer = s,
        e[Ye] = s.current,
        Jn(e.nodeType === 8 ? e.parentNode : e),
        zt(),
        s
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = ml(u);
            a.call(c)
        }
    }
    var u = ns(e, 0, !1, null, null, !1, !1, "", ma);
    return e._reactRootContainer = u,
    e[Ye] = u.current,
    Jn(e.nodeType === 8 ? e.parentNode : e),
    zt(function() {
        Dl(t, u, n, r)
    }),
    u
}
function Rl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = ml(s);
                a.call(u)
            }
        }
        Dl(t, s, e, l)
    } else
        s = Sh(n, t, e, l, r);
    return ml(s)
}
du = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Ln(t.pendingLanes);
            n !== 0 && (No(t, n | 1),
            ve(t, G()),
            !(O & 6) && (mn = G() + 500,
            jt()))
        }
        break;
    case 13:
        zt(function() {
            var r = Je(e, 1);
            if (r !== null) {
                var l = ue();
                ze(r, e, 1, l)
            }
        }),
        rs(e, 1)
    }
}
;
Co = function(e) {
    if (e.tag === 13) {
        var t = Je(e, 134217728);
        if (t !== null) {
            var n = ue();
            ze(t, e, 134217728, n)
        }
        rs(e, 134217728)
    }
}
;
fu = function(e) {
    if (e.tag === 13) {
        var t = pt(e)
          , n = Je(e, t);
        if (n !== null) {
            var r = ue();
            ze(n, e, t, r)
        }
        rs(e, t)
    }
}
;
hu = function() {
    return I
}
;
pu = function(e, t) {
    var n = I;
    try {
        return I = e,
        t()
    } finally {
        I = n
    }
}
;
Pi = function(e, t, n) {
    switch (t) {
    case "input":
        if (ji(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Sl(r);
                    if (!l)
                        throw Error(j(90));
                    Xa(r),
                    ji(r, l)
                }
            }
        }
        break;
    case "textarea":
        Qa(e, n);
        break;
    case "select":
        t = n.value,
        t != null && nn(e, !!n.multiple, t, !1)
    }
}
;
eu = Zo;
tu = zt;
var Nh = {
    usingClientEntryPoint: !1,
    Events: [dr, Kt, Sl, Za, qa, Zo]
}
  , Mn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ch = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || kh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rr.isDisabled && Rr.supportsFiber)
        try {
            yl = Rr.inject(Ch),
            We = Rr
        } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
Se.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!is(t))
        throw Error(j(200));
    return jh(e, t, null, n)
}
;
Se.createRoot = function(e, t) {
    if (!is(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , l = zc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = ns(e, 1, !1, null, null, n, !1, r, l),
    e[Ye] = t.current,
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new ls(t)
}
;
Se.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = lu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Se.flushSync = function(e) {
    return zt(e)
}
;
Se.hydrate = function(e, t, n) {
    if (!Ll(t))
        throw Error(j(200));
    return Rl(null, e, t, !0, n)
}
;
Se.hydrateRoot = function(e, t, n) {
    if (!is(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , s = zc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Ic(t, null, e, 1, n ?? null, l, !1, o, s),
    e[Ye] = t.current,
    Jn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new _l(t)
}
;
Se.render = function(e, t, n) {
    if (!Ll(t))
        throw Error(j(200));
    return Rl(null, e, t, !1, n)
}
;
Se.unmountComponentAtNode = function(e) {
    if (!Ll(e))
        throw Error(j(40));
    return e._reactRootContainer ? (zt(function() {
        Rl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ye] = null
        })
    }),
    !0) : !1
}
;
Se.unstable_batchedUpdates = Zo;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ll(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Rl(e, t, n, !1, r)
}
;
Se.version = "18.3.1-next-f1338f8080-20240426";
function Fc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)
        } catch (e) {
            console.error(e)
        }
}
Fc(),
Fa.exports = Se;
var Eh = Fa.exports
  , ga = Eh;
pi.createRoot = ga.createRoot,
pi.hydrateRoot = ga.hydrateRoot;
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function or() {
    return or = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    or.apply(this, arguments)
}
var st;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(st || (st = {}));
const va = "popstate";
function Th(e) {
    e === void 0 && (e = {});
    function t(l, o) {
        let {pathname: s="/", search: a="", hash: u=""} = Ut(l.location.hash.substr(1));
        return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
        so("", {
            pathname: s,
            search: a,
            hash: u
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(l, o) {
        let s = l.document.querySelector("base")
          , a = "";
        if (s && s.getAttribute("href")) {
            let u = l.location.href
              , c = u.indexOf("#");
            a = c === -1 ? u : u.slice(0, c)
        }
        return a + "#" + (typeof o == "string" ? o : gl(o))
    }
    function r(l, o) {
        os(l.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")")
    }
    return Mh(t, n, r, e)
}
function H(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function os(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Ph() {
    return Math.random().toString(36).substr(2, 8)
}
function xa(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function so(e, t, n, r) {
    return n === void 0 && (n = null),
    or({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ut(t) : t, {
        state: n,
        key: t && t.key || r || Ph()
    })
}
function gl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ut(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Mh(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: o=!1} = r
      , s = l.history
      , a = st.Pop
      , u = null
      , c = g();
    c == null && (c = 0,
    s.replaceState(or({}, s.state, {
        idx: c
    }), ""));
    function g() {
        return (s.state || {
            idx: null
        }).idx
    }
    function p() {
        a = st.Pop;
        let E = g()
          , f = E == null ? null : E - c;
        c = E,
        u && u({
            action: a,
            location: w.location,
            delta: f
        })
    }
    function m(E, f) {
        a = st.Push;
        let d = so(w.location, E, f);
        n && n(d, E),
        c = g() + 1;
        let h = xa(d, c)
          , v = w.createHref(d);
        try {
            s.pushState(h, "", v)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            l.location.assign(v)
        }
        o && u && u({
            action: a,
            location: w.location,
            delta: 1
        })
    }
    function y(E, f) {
        a = st.Replace;
        let d = so(w.location, E, f);
        n && n(d, E),
        c = g();
        let h = xa(d, c)
          , v = w.createHref(d);
        s.replaceState(h, "", v),
        o && u && u({
            action: a,
            location: w.location,
            delta: 0
        })
    }
    function x(E) {
        let f = l.location.origin !== "null" ? l.location.origin : l.location.href
          , d = typeof E == "string" ? E : gl(E);
        return d = d.replace(/ $/, "%20"),
        H(f, "No window.location.(origin|href) available to create URL for href: " + d),
        new URL(d,f)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(l, s)
        },
        listen(E) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(va, p),
            u = E,
            () => {
                l.removeEventListener(va, p),
                u = null
            }
        },
        createHref(E) {
            return t(l, E)
        },
        createURL: x,
        encodeLocation(E) {
            let f = x(E);
            return {
                pathname: f.pathname,
                search: f.search,
                hash: f.hash
            }
        },
        push: m,
        replace: y,
        go(E) {
            return s.go(E)
        }
    };
    return w
}
var ya;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ya || (ya = {}));
function Dh(e, t, n) {
    return n === void 0 && (n = "/"),
    _h(e, t, n)
}
function _h(e, t, n, r) {
    let l = typeof t == "string" ? Ut(t) : t
      , o = gn(l.pathname || "/", n);
    if (o == null)
        return null;
    let s = bc(e);
    Lh(s);
    let a = null;
    for (let u = 0; a == null && u < s.length; ++u) {
        let c = Vh(o);
        a = Wh(s[u], c)
    }
    return a
}
function bc(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (o, s, a) => {
        let u = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        u.relativePath.startsWith("/") && (H(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let c = gt([r, u.relativePath])
          , g = n.concat(u);
        o.children && o.children.length > 0 && (H(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        bc(o.children, t, g, c)),
        !(o.path == null && !o.index) && t.push({
            path: c,
            score: Uh(c, o.index),
            routesMeta: g
        })
    }
    ;
    return e.forEach( (o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            l(o, s);
        else
            for (let u of Uc(o.path))
                l(o, s, u)
    }
    ),
    t
}
function Uc(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [o, ""] : [o];
    let s = Uc(r.join("/"))
      , a = [];
    return a.push(...s.map(u => u === "" ? o : [o, u].join("/"))),
    l && a.push(...s),
    a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function Lh(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Ah(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Rh = /^:[\w-]+$/
  , Oh = 3
  , Ih = 2
  , zh = 1
  , Fh = 10
  , bh = -2
  , wa = e => e === "*";
function Uh(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(wa) && (r += bh),
    t && (r += Ih),
    n.filter(l => !wa(l)).reduce( (l, o) => l + (Rh.test(o) ? Oh : o === "" ? zh : Fh), r)
}
function Ah(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Wh(e, t, n) {
    let {routesMeta: r} = e
      , l = {}
      , o = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a]
          , c = a === r.length - 1
          , g = o === "/" ? t : t.slice(o.length) || "/"
          , p = ao({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, g)
          , m = u.route;
        if (!p)
            return null;
        Object.assign(l, p.params),
        s.push({
            params: l,
            pathname: gt([o, p.pathname]),
            pathnameBase: Qh(gt([o, p.pathnameBase])),
            route: m
        }),
        p.pathnameBase !== "/" && (o = gt([o, p.pathnameBase]))
    }
    return s
}
function ao(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Bh(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let o = l[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , a = l.slice(1);
    return {
        params: r.reduce( (c, g, p) => {
            let {paramName: m, isOptional: y} = g;
            if (m === "*") {
                let w = a[p] || "";
                s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[p];
            return y && !x ? c[m] = void 0 : c[m] = (x || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function Bh(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    os(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, u) => (r.push({
        paramName: a,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function Vh(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return os(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function gn(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function $h(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? Ut(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Xh(n, t) : t,
        search: Gh(r),
        hash: Kh(l)
    }
}
function Xh(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function fi(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Hh(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Ac(e, t) {
    let n = Hh(e);
    return t ? n.map( (r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Wc(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Ut(e) : (l = or({}, e),
    H(!l.pathname || !l.pathname.includes("?"), fi("?", "pathname", "search", l)),
    H(!l.pathname || !l.pathname.includes("#"), fi("#", "pathname", "hash", l)),
    H(!l.search || !l.search.includes("#"), fi("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", s = o ? "/" : l.pathname, a;
    if (s == null)
        a = n;
    else {
        let p = t.length - 1;
        if (!r && s.startsWith("..")) {
            let m = s.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                p -= 1;
            l.pathname = m.join("/")
        }
        a = p >= 0 ? t[p] : "/"
    }
    let u = $h(l, a)
      , c = s && s !== "/" && s.endsWith("/")
      , g = (o || s === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || g) && (u.pathname += "/"),
    u
}
const gt = e => e.join("/").replace(/\/\/+/g, "/")
  , Qh = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Gh = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Kh = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Yh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Bc = ["post", "put", "patch", "delete"];
new Set(Bc);
const Jh = ["get", ...Bc];
new Set(Jh);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function sr() {
    return sr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    sr.apply(this, arguments)
}
const Ol = k.createContext(null)
  , Vc = k.createContext(null)
  , kt = k.createContext(null)
  , Il = k.createContext(null)
  , At = k.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , $c = k.createContext(null);
function Zh(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    hr() || H(!1);
    let {basename: r, navigator: l} = k.useContext(kt)
      , {hash: o, pathname: s, search: a} = zl(e, {
        relative: n
    })
      , u = s;
    return r !== "/" && (u = s === "/" ? r : gt([r, s])),
    l.createHref({
        pathname: u,
        search: a,
        hash: o
    })
}
function hr() {
    return k.useContext(Il) != null
}
function pr() {
    return hr() || H(!1),
    k.useContext(Il).location
}
function Xc(e) {
    k.useContext(kt).static || k.useLayoutEffect(e)
}
function qh() {
    let {isDataRoute: e} = k.useContext(At);
    return e ? fp() : ep()
}
function ep() {
    hr() || H(!1);
    let e = k.useContext(Ol)
      , {basename: t, future: n, navigator: r} = k.useContext(kt)
      , {matches: l} = k.useContext(At)
      , {pathname: o} = pr()
      , s = JSON.stringify(Ac(l, n.v7_relativeSplatPath))
      , a = k.useRef(!1);
    return Xc( () => {
        a.current = !0
    }
    ),
    k.useCallback(function(c, g) {
        if (g === void 0 && (g = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let p = Wc(c, JSON.parse(s), o, g.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : gt([t, p.pathname])),
        (g.replace ? r.replace : r.push)(p, g.state, g)
    }, [t, r, s, o, e])
}
function zl(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = k.useContext(kt)
      , {matches: l} = k.useContext(At)
      , {pathname: o} = pr()
      , s = JSON.stringify(Ac(l, r.v7_relativeSplatPath));
    return k.useMemo( () => Wc(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}
function tp(e, t) {
    return np(e, t)
}
function np(e, t, n, r) {
    hr() || H(!1);
    let {navigator: l, static: o} = k.useContext(kt)
      , {matches: s} = k.useContext(At)
      , a = s[s.length - 1]
      , u = a ? a.params : {};
    a && a.pathname;
    let c = a ? a.pathnameBase : "/";
    a && a.route;
    let g = pr(), p;
    if (t) {
        var m;
        let f = typeof t == "string" ? Ut(t) : t;
        c === "/" || (m = f.pathname) != null && m.startsWith(c) || H(!1),
        p = f
    } else
        p = g;
    let y = p.pathname || "/"
      , x = y;
    if (c !== "/") {
        let f = c.replace(/^\//, "").split("/");
        x = "/" + y.replace(/^\//, "").split("/").slice(f.length).join("/")
    }
    let w = Dh(e, {
        pathname: x
    })
      , E = sp(w && w.map(f => Object.assign({}, f, {
        params: Object.assign({}, u, f.params),
        pathname: gt([c, l.encodeLocation ? l.encodeLocation(f.pathname).pathname : f.pathname]),
        pathnameBase: f.pathnameBase === "/" ? c : gt([c, l.encodeLocation ? l.encodeLocation(f.pathnameBase).pathname : f.pathnameBase])
    })), s, n, r);
    return t && E ? k.createElement(Il.Provider, {
        value: {
            location: sr({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, p),
            navigationType: st.Pop
        }
    }, E) : E
}
function rp() {
    let e = dp()
      , t = Yh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? k.createElement("pre", {
        style: l
    }, n) : null, null)
}
const lp = k.createElement(rp, null);
class ip extends k.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? k.createElement(At.Provider, {
            value: this.props.routeContext
        }, k.createElement($c.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function op(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = k.useContext(Ol);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(At.Provider, {
        value: t
    }, r)
}
function sp(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let g = s.findIndex(p => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
        g >= 0 || H(!1),
        s = s.slice(0, Math.min(s.length, g + 1))
    }
    let u = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let g = 0; g < s.length; g++) {
            let p = s[g];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = g),
            p.route.id) {
                let {loaderData: m, errors: y} = n
                  , x = p.route.loader && m[p.route.id] === void 0 && (!y || y[p.route.id] === void 0);
                if (p.route.lazy || x) {
                    u = !0,
                    c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (g, p, m) => {
        let y, x = !1, w = null, E = null;
        n && (y = a && p.route.id ? a[p.route.id] : void 0,
        w = p.route.errorElement || lp,
        u && (c < 0 && m === 0 ? (hp("route-fallback"),
        x = !0,
        E = null) : c === m && (x = !0,
        E = p.route.hydrateFallbackElement || null)));
        let f = t.concat(s.slice(0, m + 1))
          , d = () => {
            let h;
            return y ? h = w : x ? h = E : p.route.Component ? h = k.createElement(p.route.Component, null) : p.route.element ? h = p.route.element : h = g,
            k.createElement(op, {
                match: p,
                routeContext: {
                    outlet: g,
                    matches: f,
                    isDataRoute: n != null
                },
                children: h
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? k.createElement(ip, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: d(),
            routeContext: {
                outlet: null,
                matches: f,
                isDataRoute: !0
            }
        }) : d()
    }
    , null)
}
var Hc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Hc || {})
  , Qc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Qc || {});
function ap(e) {
    let t = k.useContext(Ol);
    return t || H(!1),
    t
}
function up(e) {
    let t = k.useContext(Vc);
    return t || H(!1),
    t
}
function cp(e) {
    let t = k.useContext(At);
    return t || H(!1),
    t
}
function Gc(e) {
    let t = cp()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || H(!1),
    n.route.id
}
function dp() {
    var e;
    let t = k.useContext($c)
      , n = up(Qc.UseRouteError)
      , r = Gc();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function fp() {
    let {router: e} = ap(Hc.UseNavigateStable)
      , t = Gc()
      , n = k.useRef(!1);
    return Xc( () => {
        n.current = !0
    }
    ),
    k.useCallback(function(l, o) {
        o === void 0 && (o = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, sr({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const ja = {};
function hp(e, t, n) {
    ja[e] || (ja[e] = !0)
}
function pp(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Ve(e) {
    H(!1)
}
function mp(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=st.Pop, navigator: o, static: s=!1, future: a} = e;
    hr() && H(!1);
    let u = t.replace(/^\/*/, "/")
      , c = k.useMemo( () => ({
        basename: u,
        navigator: o,
        static: s,
        future: sr({
            v7_relativeSplatPath: !1
        }, a)
    }), [u, a, o, s]);
    typeof r == "string" && (r = Ut(r));
    let {pathname: g="/", search: p="", hash: m="", state: y=null, key: x="default"} = r
      , w = k.useMemo( () => {
        let E = gn(g, u);
        return E == null ? null : {
            location: {
                pathname: E,
                search: p,
                hash: m,
                state: y,
                key: x
            },
            navigationType: l
        }
    }
    , [u, g, p, m, y, x, l]);
    return w == null ? null : k.createElement(kt.Provider, {
        value: c
    }, k.createElement(Il.Provider, {
        children: n,
        value: w
    }))
}
function gp(e) {
    let {children: t, location: n} = e;
    return tp(uo(t), n)
}
new Promise( () => {}
);
function uo(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return k.Children.forEach(e, (r, l) => {
        if (!k.isValidElement(r))
            return;
        let o = [...t, l];
        if (r.type === k.Fragment) {
            n.push.apply(n, uo(r.props.children, o));
            return
        }
        r.type !== Ve && H(!1),
        !r.props.index || !r.props.children || H(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = uo(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function vl() {
    return vl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    vl.apply(this, arguments)
}
function Kc(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), l, o;
    for (o = 0; o < r.length; o++)
        l = r[o],
        !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}
function vp(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function xp(e, t) {
    return e.button === 0 && (!t || t === "_self") && !vp(e)
}
const yp = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , wp = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
  , jp = "6";
try {
    window.__reactRouterVersion = jp
} catch {}
const kp = k.createContext({
    isTransitioning: !1
})
  , Sp = "startTransition"
  , ka = pd[Sp];
function Np(e) {
    let {basename: t, children: n, future: r, window: l} = e
      , o = k.useRef();
    o.current == null && (o.current = Th({
        window: l,
        v5Compat: !0
    }));
    let s = o.current
      , [a,u] = k.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: c} = r || {}
      , g = k.useCallback(p => {
        c && ka ? ka( () => u(p)) : u(p)
    }
    , [u, c]);
    return k.useLayoutEffect( () => s.listen(g), [s, g]),
    k.useEffect( () => pp(r), [r]),
    k.createElement(mp, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
const Cp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Ep = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Tp = k.forwardRef(function(t, n) {
    let {onClick: r, relative: l, reloadDocument: o, replace: s, state: a, target: u, to: c, preventScrollReset: g, viewTransition: p} = t, m = Kc(t, yp), {basename: y} = k.useContext(kt), x, w = !1;
    if (typeof c == "string" && Ep.test(c) && (x = c,
    Cp))
        try {
            let h = new URL(window.location.href)
              , v = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c)
              , S = gn(v.pathname, y);
            v.origin === h.origin && S != null ? c = S + v.search + v.hash : w = !0
        } catch {}
    let E = Zh(c, {
        relative: l
    })
      , f = Mp(c, {
        replace: s,
        state: a,
        target: u,
        preventScrollReset: g,
        relative: l,
        viewTransition: p
    });
    function d(h) {
        r && r(h),
        h.defaultPrevented || f(h)
    }
    return k.createElement("a", vl({}, m, {
        href: x || E,
        onClick: w || o ? r : d,
        ref: n,
        target: u
    }))
})
  , fe = k.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: l=!1, className: o="", end: s=!1, style: a, to: u, viewTransition: c, children: g} = t
      , p = Kc(t, wp)
      , m = zl(u, {
        relative: p.relative
    })
      , y = pr()
      , x = k.useContext(Vc)
      , {navigator: w, basename: E} = k.useContext(kt)
      , f = x != null && Dp(m) && c === !0
      , d = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname
      , h = y.pathname
      , v = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    l || (h = h.toLowerCase(),
    v = v ? v.toLowerCase() : null,
    d = d.toLowerCase()),
    v && E && (v = gn(v, E) || v);
    const S = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let T = h === d || !s && h.startsWith(d) && h.charAt(S) === "/", P = v != null && (v === d || !s && v.startsWith(d) && v.charAt(d.length) === "/"), M = {
        isActive: T,
        isPending: P,
        isTransitioning: f
    }, A = T ? r : void 0, _;
    typeof o == "function" ? _ = o(M) : _ = [o, T ? "active" : null, P ? "pending" : null, f ? "transitioning" : null].filter(Boolean).join(" ");
    let xe = typeof a == "function" ? a(M) : a;
    return k.createElement(Tp, vl({}, p, {
        "aria-current": A,
        className: _,
        ref: n,
        style: xe,
        to: u,
        viewTransition: c
    }), typeof g == "function" ? g(M) : g)
});
var co;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(co || (co = {}));
var Sa;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Sa || (Sa = {}));
function Pp(e) {
    let t = k.useContext(Ol);
    return t || H(!1),
    t
}
function Mp(e, t) {
    let {target: n, replace: r, state: l, preventScrollReset: o, relative: s, viewTransition: a} = t === void 0 ? {} : t
      , u = qh()
      , c = pr()
      , g = zl(e, {
        relative: s
    });
    return k.useCallback(p => {
        if (xp(p, n)) {
            p.preventDefault();
            let m = r !== void 0 ? r : gl(c) === gl(g);
            u(e, {
                replace: m,
                state: l,
                preventScrollReset: o,
                relative: s,
                viewTransition: a
            })
        }
    }
    , [c, u, g, r, l, n, e, o, s, a])
}
function Dp(e, t) {
    t === void 0 && (t = {});
    let n = k.useContext(kp);
    n == null && H(!1);
    let {basename: r} = Pp(co.useViewTransitionState)
      , l = zl(e, {
        relative: t.relative
    });
    if (!n.isTransitioning)
        return !1;
    let o = gn(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , s = gn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return ao(l.pathname, s) != null || ao(l.pathname, o) != null
}
const W = ({children: e, title: t, image: n}) => i.jsxs(i.Fragment, {
    children: [i.jsxs("div", {
        className: "flex",
        children: [i.jsx("div", {
            className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
        }), i.jsx("h1", {
            className: "text-3xl",
            children: t
        })]
    }), i.jsxs("h1", {
        className: "max-w-3xl text-2xl font-extrabold text-justify",
        children: [e, i.jsx("br", {}), i.jsx("br", {}), n ? i.jsx("img", {
            src: n
        }) : null]
    }), i.jsx("br", {}), i.jsx("br", {})]
})
  , Wt = () => {
    const [e,t] = k.useState(!1);
    return k.useEffect( () => {
        e ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
    }
    , [e]),
    i.jsxs(i.Fragment, {
        children: [i.jsxs("div", {
            className: "flex items-center justify-center gap-10 mb-16",
            children: [i.jsx("img", {
                src: "/assets/logo-large.png",
                alt: "Mig-Flash Logo",
                className: "w-[90px] md:w-[130px]"
            }), i.jsxs("ul", {
                className: "items-start hidden text-2xl lg:flex menu-items",
                children: [i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "首页"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/product",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "产品"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/backup",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "备份你的游戏"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/downloads",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "下载 & 介绍"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/faq",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "常见问题 & 指示灯状态"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/where-to-buy",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "购买地点"
                    })
                }), i.jsx("li", {
                    children: i.jsx(fe, {
                        to: "/contact",
                        className: ({isActive: n}) => n ? "border-b-4" : "",
                        children: "联系我们"
                    })
                })]
            })]
        }), i.jsxs("div", {
            className: "block lg:hidden",
            children: [i.jsx("div", {
                className: "absolute z-20 left-8 top-10",
                children: i.jsx("img", {
                    src: e ? "/assets/close.png" : "/assets/menu.png",
                    width: "32px",
                    onClick: () => t(!e)
                })
            }), e && i.jsx("div", {
                className: "absolute top-0 left-0 z-10 w-full h-[100dvh] text-center bg-mig-red mobile-menu",
                children: i.jsxs("ul", {
                    className: "flex flex-col items-center justify-center h-full gap-10 text-2xl menu-items menu-items-mobile",
                    children: [i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "首页"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/product",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "产品"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/backup",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "备份你的游戏"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/downloads",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "下载 & 介绍"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/faq",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "常见问题 & 指示灯状态"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/where-to-buy",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "购买地点"
                        })
                    }), i.jsx("li", {
                        onClick: () => {
                            t(!1)
                        }
                        ,
                        children: i.jsx(fe, {
                            to: "/contact",
                            className: ({isActive: n}) => n ? "border-b-4" : "",
                            children: "联系我们"
                        })
                    })]
                })
            })]
        })]
    })
}
  , Bt = e => {
    const {flag: t} = e;
    return i.jsxs("div", {
        className: "mt-48 md:mt-32 footer",
        children: [i.jsx("img", {
            src: "/assets/city2.png",
            className: "city"
        }), t && i.jsx("img", {
            src: "/assets/mig-flag.png",
            className: "absolute -z-[1] bottom-0 w-full right-0 max-w-sm md:right-12"
        }), i.jsxs("div", {
            className: "absolute left-0 right-0 ml-auto mr-auto footer-text bottom-8",
            children: [i.jsxs("p", {
                children: ["版权所有 Mig-Flash ", new Date().getFullYear(), " —— 一个 Mig Flash 产品，在俄罗斯联邦开发和生产。"]
            }), i.jsx("br", {}), i.jsxs("p", {
                children: ["Авторские права «Миг-флэш» ", new Date().getFullYear(), " - Являются продуктом «Миг-флэш», разработанного и произведенного в Российской Федерации. Все права защищены."]
            })]
        })]
    })
}
  , Na = () => i.jsxs("div", {
    className: "m-5 max-w-[1350px] md:m-12 w-full",
    children: [i.jsx(Wt, {}), i.jsxs("div", {
        className: "flex flex-col items-center text-center max-w-[825px] mx-auto",
        children: [i.jsxs("div", {
            className: "relative",
            children: [i.jsxs("div", {
                children: [i.jsx("img", {
                    src: "/assets/live-free.png",
                    className: "mt-12 z-[-1]"
                }), i.jsx("img", {
                    src: "/assets/plugnplay.png",
                    className: "z-[-1] absolute left-0 w-[400px] sm:left-[25%] plugnplay:block plugnplay:left-[675px] plugnplay:top-[590px]"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsxs(W, {
                title: "14/06/2025: Firmware 1.2.0, adds support for Switch 1 games on Nintendo Switch 2 consoles.",
                children: ["As announced earlier this week, please find in our DOWNLOAD section our latest 1.2.0 firmware, which adds Switch 1 games support for the new Nintendo Switch 2 console.", i.jsx("br", {}), "Nothing else in this update, more will come in the future firmware we will release.", i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "10/06/2025: Playing Switch 1 games on Switch 2",
                children: ["While we are working on the next updates for Mig Flash card and dumper, we obviously had to take a break to add the function everyone have been mailing us for: playing Switch 1 games on the brand new Nintendo Switch 2.", i.jsx("br", {}), "So that everyone remains calm, here is first a quick video of our new beta firmware running on the Switch 2.", i.jsx("br", {}), "We are very rigorous and serious about any update, and do not want to rush an update. So we ask you to be a little patient. But the wait won't be long for the release of the final firmware.", i.jsx("br", {}), "Thank you all for your support and your patience!", i.jsx("br", {}), i.jsx("br", {}), i.jsx("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "0px",
                        paddingBottom: "56.250%"
                    },
                    children: i.jsx("iframe", {
                        allow: "fullscreen",
                        allowFullScreen: !0,
                        height: "100%",
                        src: "https://streamable.com/e/wn8csp?",
                        width: "100%",
                        style: {
                            border: "none",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            overflow: "hidden"
                        }
                    })
                })]
            }), i.jsxs(W, {
                title: "10/04/2025: Minor update for Mac users",
                children: ["We have a lot in the works for 2025, and like all of you, we are eagerly waiting for Nintendo new console: the Switch 2!", i.jsx("br", {}), i.jsx("br", {}), "Firmware 1.1.9 fixes a Mig card issue for Mac users where hidden XCI files are inadvertently created by Mac OS starting with a dot. A long button press in such an instance could cause no ROM to be loaded. This is now fixed, and we wanted to push this update as it was annoying for some Mac users.", i.jsx("br", {}), i.jsx("br", {}), "But don't worry, a lot of good things are coming in 2025 for Mig users.", i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "27/02/2025: Firmware 1.1.8 update",
                children: ["Today we present a quick firmware update.", i.jsx("br", {}), "1.1.8 fixes an issue in Mig Dumper where dumping certain gamecard types would stop early and drop to zero transfer speed.", i.jsx("br", {}), "More is in the works, but we wanted to push this little update as we had several users with that issue that were stuck backing up some of their beloved games!", i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "18/02/2025: MigUpdater and firmware 1.1.7",
                children: [i.jsx("img", {
                    src: "https://i.postimg.cc/prXf9Shd/mig.png",
                    alt: ""
                }), "Today we present firmware 1.1.7 which fixes an issue where updating Mig Dumper did not work for Mac and Linux users.", i.jsx("br", {}), "Additionally, starting from firmware 1.1.7, the Mig Dumper will show the firmware version as a file ('1.1.7') in the GameCard root folder to easily see what firmware version is running.", i.jsx("br", {}), i.jsx("br", {}), "To help with updating Mig Dumper for all users, we also present a new tool called: migupdater", i.jsx("br", {}), "Migupdater is a Desktop application for Windows, Mac and Linux to easily check and update the Mig Dumper firmware version.", i.jsx("br", {}), "This is a handy fallback method if the drag and drop method does not work.", i.jsx("br", {}), "Check it out in the Downloads and instruction section", i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "14/01/2025: Happy new year! Turning V1 into V2.",
                children: ["First and foremost: Happy new year everyone! We have a lot more coming this year, and although we do not talk much, we are working hard in the background and you can expect many update and news from us in 2025.", i.jsx("br", {}), i.jsx("br", {}), "On a side note, we had hundreds of email requests of Mig Card V1 (the model without the switch to go from one game to next/previous) on how to turn your V1 card into a V2 card.", i.jsx("br", {}), "Although we don't recommend this modification, if you are electronically skilled AND are accepting the risk of losing your Mig Card V1, you can find", " ", i.jsx("a", {
                    href: "https://m.dzen.ru/a/Z4ODpnoJExv3cV8Z",
                    target: "_blank",
                    children: "HERE A DIY GUIDE"
                }), " ", "made by a Mig user which we think is the best one we had so far for converting a Mig Card V1 to V2.", i.jsx("br", {}), "The text being in Russian, you can use webpage translator such as:", i.jsx("br", {}), i.jsx("a", {
                    href: "https://translate.yandex.com/en/translate",
                    target: "_blank",
                    children: "Yandex"
                }), i.jsx("br", {}), "One last time: Do it at your own risks!"]
            }), i.jsxs(W, {
                title: "07/12/2024: New Mig card cases",
                children: ["At Mig Flash, we always try to improve both our software and hardware. And we also listen to all our end users feedback to try to improve your product experience.", i.jsx("br", {}), i.jsx("br", {}), "Today, we bring you a hardware update to the Mig Flash card, for which we had regular requests.", i.jsx("br", {}), i.jsx("br", {}), "Mig Flash case V2 is currently the default set being sent for all new orders. It features a clip-on case with a modified game switch button that seems to be more convenient to use without ejecting the Mig Flash. Remember, we recommend to always close the game card slot to operate.", i.jsx("br", {}), i.jsx("br", {}), "Because some of us at Mig like the more sturdy screw design, it will still be available for distributors, so you can choose the case you prefer.", i.jsx("br", {}), i.jsx("br", {}), "You can see the new case in action in the short video below.", i.jsx("br", {}), i.jsx("br", {}), "We wish you all a happy holiday season, and for those of you who still don't own a Mig Flash Card and/or Dumper, we hope Santa will think about you on Christmas' night!", i.jsx("br", {}), i.jsx("br", {}), i.jsx("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "0px",
                        paddingBottom: "56.250%"
                    },
                    children: i.jsx("iframe", {
                        allow: "fullscreen",
                        allowFullScreen: !0,
                        height: "100%",
                        src: "https://streamable.com/e/ycmp44?",
                        width: "100%",
                        style: {
                            border: "none",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            overflow: "hidden"
                        }
                    })
                })]
            }), i.jsxs(W, {
                title: "08/10/2024: Urgent update for Mig Dumper Windows users",
                children: ["Firmware 1.1.6 brings an urgent update to the Mig Dumper for users with latest Windows 11 23H2, 24H2 or higher version which implement a new Disk Signature Collision check.", i.jsx("br", {}), i.jsx("img", {
                    src: "https://www.thewindowsclub.com/wp-content/uploads/2018/11/Disk-signature-collision-1.png",
                    alt: ""
                }), i.jsx("br", {}), "With recent Windows 11 updates, Mig Dumper drive will no longer appear because of a Disk Signature Collion as seen above.", i.jsx("br", {}), "Firmware 1.1.6 fixes this, but users with this problem are not able to update firmware because the drive is not online.", i.jsx("br", {}), i.jsx("br", {}), "To solve this we recommend a few options:", i.jsx("br", {}), "- Borrow an older Windows system from a friend to update Mig Dumper to firmware 1.1.6, or", i.jsx("br", {}), "- Download a Windows 10 ISO and create a Windows To Go USB stick with Rufus, then boot into Windows To Go and perform the firmware update, or", i.jsx("br", {}), "- Download a Linux ISO to launch a Live Boot system to perform the firmware update", i.jsx("br", {}), i.jsx("br", {}), "If you are still on an older Windows system we recommend you install the firmware to avoid the above problem in the future.", i.jsx("br", {}), i.jsx("br", {}), "Our sincere apologies to all users affected. Rest assure we will always offer 100% support for our products for the years to come.", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "01/10/2024: Important clarification about console bans",
                children: ["From reports we have received and seen with Mig Flash, ALL console bans to date have been because incomplete dumps have been used OR the BIN files have been mixed and matched from other gamecard dumps.", i.jsx("br", {}), "We have not seen a single ban yet when using 100% complete gamecard dumps with all BIN files and XCI coming from the same gamecard.", i.jsx("br", {}), i.jsx("br", {}), "Additionally, turning off the Switch console WiFi does not erase any activity with incomplete dumps.", i.jsx("br", {}), "All offline activity on the console is saved and WILL be transmitted next time WiFi is enabled on the console again.", i.jsx("br", {}), i.jsx("br", {}), "Keep this information in mind, and NEVER use dumps that are incomplete to avoid console bans."]
            }), i.jsxs(W, {
                title: "11/09/2024: Mig Dumper firmware update 1.1.5",
                children: ["There was a little bug with our Mig Dumper on some rare games randomly on some dumpers. With the much appreciated assistance from members of our community (they will recognize themselves, thanks!), our team was finally able to zoom in this issue and it is now fixed with this new firmware update.", i.jsx("br", {}), i.jsx("br", {}), "Change log: 1.1.5: Fixed issue in mig dumper when drive could end up suddenly disconnected at some rare occasions", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "15/07/2024: NAME CHANGE, WE ARE NOW MIG FLASH!",
                children: ["We become Mig Flash. Reason is again the powerful lobbying (corruption in most case) between large companies and lawmakers in certain powerful countries (we won't give any name, everyone knows :).", i.jsx("br", {}), i.jsx("br", {}), "For some reason, the word 'Switch' now can't be used without the consent from the company Nintendo©. Even if it is just to explain a product is made for (or compatible with) a device made by another company.", i.jsx("br", {}), i.jsx("br", {}), "To us, it is scandalous. But that is the way it is, and although we are not located in the USA, since they seem to control ICANN and a few other institutions we need to operate with, we decided to change our name to Mig Flash.", i.jsx("br", {}), i.jsx("br", {}), "Please note there is no other change beside this cosmetic one. Product is the same and work the same, new or old.", i.jsx("br", {}), i.jsx("br", {}), "Sorry about this, and we will keep bringing you good surprises in the future."]
            }), i.jsxs(W, {
                title: "01/07/2024: Temporary new site for MigFlash to access firmwares and more: www.migswitchru.com",
                children: ["Although the situation is still not clear, it seems our company has lost the ownership of our domain name www.migswitch.com", i.jsx("br", {}), i.jsx("br", {}), "First and most important: We are operating as usual. We are shipping our products. All orders are being fulfilled and nothing has changed beside the domain name.", i.jsx("br", {}), i.jsx("br", {}), "We are shocked by what happened for several reasons, and we feel this is not only shocking for us but for the freedom of Internet in general.", i.jsx("br", {}), i.jsx("br", {}), "First, we were not warned or had a chance to answer and defend our products or at least the simple fact that whatever the complaint is, it applies only to a few countries and in no way allows to take down a domain for all users in the world. Can Afghanistan request to take down a .com website that goes again its interests? We don't think so.", i.jsx("br", {}), "But more than that, this is a .com domain, meaning a universal domain applying to many countries.", i.jsx("br", {}), '".com" domains sell products like drug/medications which are only legal in certain countries, or gambling. US sites selling or promoting weapons which are illegal in just about every country on the planet are registered in .com. We never heard any of them being seized as they are operating legally in their markets.', i.jsx("br", {}), "We clearly indicate on our site that our product is for legal use only in countries/jurisdictions where backing up your legally owned games is authorized. And there are many.", i.jsx("br", {}), "We do not even sell our products directly from our website. And there is no copyrighted material to be found anywhere.", i.jsx("br", {}), "If what we suspect is true, this is another proof of the abuse and bullying from some governments and companies which think they are above the laws of the world and do not respect anyone who think different.", i.jsx("br", {}), i.jsx("br", {}), "We will not tolerate that attitude and bow down to those bullies.", i.jsx("br", {}), i.jsx("br", {}), "Of course, IP blocking our site in countries where our products are considered illegal is totally acceptable. And we would never challenge it. In fact, it is the case for many companies. Some of our distributors even enforce that on their own.", i.jsx("br", {}), "But trying to tell the world what is right or wrong based on your country point of view is really unacceptable and add to the hate of certain countries for their bullies' attitude.", i.jsx("br", {}), i.jsx("br", {}), "Please note this site is likely only temporary as we know our many users need access to files and support and is a quick fix. We will likely move again to a more secure domain in the weeks to come.", i.jsx("br", {}), i.jsx("br", {}), "Thank you for your understanding and for your support against the bullies of the world. As soon as we find out more about what happened, we will post about it so all of us can report to pro-freedom NGO and hopefully contribute to making Internet a better place.", i.jsx("br", {}), i.jsx("br", {}), "P.S.: If you are not able to access this website, we will post news and update on our .onion website accessible by TOR:", i.jsx("br", {}), i.jsx("strong", {
                    children: "4gnoefk5zilujdkixixlsiagd3al5cejg3ooiwq2uuxgizgpnpwq7cqd.onion"
                })]
            }), i.jsxs(W, {
                title: "20/06/2024: Clarification on button use on V2 card.",
                children: ["With the feedback we received from the first Mig Card V2 users, we realize we had to clarify something about the game switching button.", i.jsx("br", {}), i.jsx("br", {}), "We use purposely a thin button because, as you can see in the video below, it is meant to also be used with the game card slot cover closed.", i.jsx("br", {}), i.jsx("br", {}), "We think it is more convenient and since you don't really need to open it once your games are on the Mig microSD, it is just cleaner and looks better.", i.jsx("br", {}), i.jsx("br", {}), "Of course, you can also use it with the game card slot cover opened.", i.jsx("br", {}), i.jsx("br", {}), i.jsx("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "0px",
                        paddingBottom: "56.250%"
                    },
                    children: i.jsx("iframe", {
                        allow: "fullscreen",
                        allowFullScreen: !0,
                        height: "100%",
                        src: "https://streamable.com/e/6gjaos?",
                        width: "100%",
                        style: {
                            border: "none",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            overflow: "hidden"
                        }
                    })
                })]
            }), i.jsxs(W, {
                title: "05/06/2024: Games sorting",
                children: ["By default, games are sorted by the time they were copied to the microSD. This is because we believe most people want their favorite games showing first.", i.jsx("br", {}), i.jsx("br", {}), "But if you want to have the games sorted alphabetically, head to our Q&A section, we explain how.", i.jsx("br", {}), i.jsx("br", {}), "Also on V2, remember that a quick push takes you to the next game, and a long one to the previous game. For easy navigation."]
            }), i.jsxs(W, {
                title: "25/05/2024: Announcing Mig Card “V2”",
                children: ["So finally, as requested by many of you, it is here.", i.jsx("br", {}), "Mig Flash Card “V2”, our first hardware revision, is now in production and replacing the original “V1”. From now on, we are manufacturing only this new version, which now features a game changing switch/button.", i.jsx("br", {}), i.jsx("br", {}), "A quick press of the button will take you to the next game on your microSD, and a long push to the previous one.", i.jsx("br", {}), "Because your requests were pretty unanimous, we decided to discontinue “V1”, so any new or pending order will now receive this new version.", i.jsx("br", {}), i.jsx("br", {}), "“V1” owners don't need to worry, their card will be updated exactly as the “V2” and will have the same new features as “V2” coming with future updates. Only the game switching method will be different.", i.jsx("br", {}), i.jsx("br", {}), "And for all new customers or people expecting their Mig Flash card, we hope you will enjoy this new way to navigate between your games!", i.jsx("br", {}), i.jsx("br", {}), "Samples are underway to reviewers, and you will see the first independent reviews next week."]
            }), i.jsxs(W, {
                title: "21/05/2024 : Firmware 1.1.4 , stability improvement for microSD and sleep mode.",
                children: ["Today we bring you another firmware update that will improve your Mig Card support of various microSD brands as well as sleep mode stability. But stay tuned, as this Saturday, we will have an official announcement for our most requested update that is finally coming soon.", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "09/04/2024: MigDumpTool 0.0.2",
                children: ["A quick update for our Mig Dump Tool:", i.jsx("br", {}), i.jsx("br", {}), i.jsxs("ul", {
                    className: "self-start pl-5 list-disc",
                    children: [i.jsx("li", {
                        children: "Implement cherrypicked improvements from latest nxdumptool revision."
                    }), i.jsx("li", {
                        children: "Fix dump path generation for multi title game cards."
                    })]
                }), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "31/03/2024: Firmware 1.1.3 - Bug fixes",
                children: ["Another day, another small update thanks to user's feedback. The 2 key improvements this time are:", i.jsx("br", {}), i.jsx("br", {}), "- Improved sleep mode support", i.jsx("br", {}), "- Improved bootup of microSD card", i.jsx("br", {}), i.jsx("br", {}), "We are always happy to receive suggestions and bug reports from Mig users, so do not hesitate to contact us if you think something can be improved!", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "21/03/2024: Firmware 1.1.2 - Bug fixes",
                children: ["We did all we can to test in depth our Mig products before released, but nothing can compete with a large user base testing daily the Mig Flash under all conditions. So again, one of our dear users pinpointed us to a bug with some type of microSD card not working with Mig Flash.", i.jsx("br", {}), i.jsx("br", {}), "After careful investigating, we found the problem, and corrected it. And so here is firmware 1.1.2 which correct this issue.", i.jsx("br", {}), i.jsx("br", {}), "Change log: - Added support for Kingston microSD and several other models & brands.", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "16/03/2024 : Firmware 1.1.1",
                children: ["A quick update today to correct a bug some Mig users discoverer with non-Latin or special characters (Chinese, special symbols etc.).", i.jsx("br", {}), i.jsx("br", {}), "We want to thank our community for all the feedback and suggestions, it helps us improve the product, correct bugs, and is beneficial to everyone. Thank you!!", i.jsx("br", {}), i.jsx("br", {}), "Change log: - Added support for filenames containing Unicode characters", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "26/02/2024: New firmware 1.1.0 update and production news.",
                children: ["First, today we release a new update you can find in a the '", i.jsx("a", {
                    href: "/#/downloads",
                    children: "DOWNLOAD"
                }), "' section.", i.jsx("br", {}), i.jsx("br", {}), "Key improvements are:", i.jsxs("ul", {
                    className: "self-start pl-5 list-disc",
                    children: [i.jsx("li", {
                        children: "Improve boot up time for exfat fragmented XCI files"
                    }), i.jsx("li", {
                        children: "Improves ROM launch detection."
                    })]
                }), i.jsx("br", {}), "Also, we want to confirm that the Mig Dumper design is final and we are slowly started production while trying to keep a strong pace with the Mig Card for which we are still behind. But trust us, our little team is working full-time on this to get your gateway card in your hands swiftly.", i.jsx("br", {}), i.jsx("br", {}), "Thanks for your support and patience!", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "02/02/2024: Introducing MigDumpTool, Mig Flash's gamecard dumper app",
                children: ["For people not using our Mig Dumper (hardware), this application provides a hassle-free way to backup all your Nintendo Switch games and retrieve all the data required by our Mig Flash flashcard in one simple click!", i.jsx("br", {}), i.jsx("br", {}), i.jsxs("ul", {
                    className: "self-start pl-5 list-disc",
                    children: [i.jsx("li", {
                        children: "Supports multiple output storage devices (micro SD card, PC, USB storage)."
                    }), i.jsx("li", {
                        children: "Offers an advanced settings menu to control the dump process."
                    }), i.jsx("li", {
                        children: "Sleek and easy to use UI."
                    }), i.jsx("li", {
                        children: "Free to use."
                    }), i.jsx("li", {
                        children: "Completely open source (licensed under GPLv3)."
                    })]
                }), i.jsx("br", {}), "Available now in our “", i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Downloads"
                }), "” section.", i.jsx("br", {}), i.jsx("br", {}), "Credits:", i.jsx("br", {}), i.jsx("ul", {
                    className: "self-start pl-5 list-disc",
                    children: i.jsx("li", {
                        children: "DarkMatterCore, for nxdumptool, which was used as the basis for this project."
                    })
                })]
            }), i.jsxs(W, {
                title: "22/01/2024: Firmware 1.0.9 is available",
                children: ["Just some minor bug update thanks to the feedback from reviewer.", i.jsx("br", {}), i.jsx("br", {}), "- Fixed issue when split XCI folder is placed in root (only subfolder was working).", i.jsx("br", {}), "- Added current firmware version in nxindex file.", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "17/01/2024: FIRST FIRMWARE UPDATE",
                children: ["Today we release our first firmware update. 1.0.8 adds full support for split game files (you no longer need to concatenate them). 1.0.8 is already added to retail units of Mig Flash Cart and Dumper, so this is for review and testing units only!", i.jsx("br", {}), i.jsx("br", {}), i.jsx("a", {
                    onClick: () => window.scrollTo(0, 0),
                    href: "/#/downloads",
                    children: "Click here to download the latest firmware."
                })]
            }), i.jsxs(W, {
                title: "08/01/2024 - Clarification on online play.",
                children: ["Mig Flash is a backup and development device. As such, we only support and guarantee your gaming with your own games backups.", i.jsx("br", {}), i.jsx("br", {}), "This applies to online too. If you want to play online with the full Mig Flash warranty, you need to use your own dumped backups with genuine Certificate, UID and Card Set ID.", i.jsx("br", {}), i.jsx("br", {}), "Failure to respect this rule might end up in bans from Nintendo© online service, which we won't be held responsible for."]
            })]
        }), i.jsx(Bt, {})]
    })]
})
  , _p = () => i.jsxs("div", {
    className: "m-5 max-w-[1350px] md:m-12 w-full",
    children: [i.jsx(Wt, {}), i.jsxs("div", {
        className: "flex flex-col items-center text-center max-w-[825px] md:max-w-[1350px] mx-auto",
        children: [i.jsxs("div", {
            className: "flex flex-col items-center gap-10 md:flex-row",
            children: [i.jsx("img", {
                src: "/assets/cartridge-02.png",
                alt: "Hero",
                className: "max-w-xs my-12 md:max-w-lg"
            }), i.jsxs("div", {
                className: "text-left",
                children: [i.jsxs("div", {
                    className: "flex justify-center md:justify-start",
                    children: [i.jsx("div", {
                        className: "hidden md:block w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                    }), i.jsx("h1", {
                        className: "w-full text-2xl text-center text-mig-red bg-mig-white md:text-start md:text-mig-white md:bg-mig-red md:w-auto",
                        children: "MIG-FLASH:"
                    })]
                }), i.jsxs("div", {
                    className: "ml-0 mt-5 md:ml-[57px] text-center md:text-left",
                    children: [i.jsxs("p", {
                        className: "max-w-xl text-xl",
                        children: ["Mig-Flash 是一个仅用于", " ", i.jsx("span", {
                            className: "font-black",
                            children: "备份和开发 Nintendo Switch© 主机的设备，无论什么版本、固件、型号"
                        }), " ", "（ OLED 、普通版或 Lite ） 无需额外的安装和修改你的主机。 ", i.jsx("b", {
                            children: "简单的即插即玩！"
                        })]
                    }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("p", {
                        className: "max-w-xl text-xl",
                        children: ["在开发 Mig Flash 时，我们始终将易用性放在首位，您可以在我们网站的", " ", i.jsx("a", {
                            href: "/#/downloads",
                            className: "font-black",
                            children: "下载"
                        }), " ", "中看到结果。"]
                    }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("p", {
                        className: "uppercase md:normal-case",
                        children: "该设备由 2 个产品组成，单独出售："
                    }), i.jsxs("ul", {
                        className: "max-w-xl text-left list-disc pl-7",
                        children: [i.jsx("li", {
                            className: "font-black",
                            children: "Mig Flash 卡带（需要 microSD 卡，但不包含在内），您将始终需要它来运行备份。"
                        }), i.jsx("li", {
                            className: "font-black",
                            children: "Mig Flash Dumper，用于备份您合法拥有的 Nintendo Switch© 游戏，这是可选的。"
                        })]
                    })]
                })]
            })]
        }), i.jsx(Bt, {})]
    })]
})
  , Lp = () => i.jsxs("div", {
    className: "m-5 max-w-[1350px] md:m-12 w-full",
    children: [i.jsx(Wt, {}), i.jsxs("div", {
        className: "max-w-[825px] mx-auto",
        children: [i.jsxs("div", {
            className: "flex",
            children: [i.jsx("div", {
                className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
            }), i.jsx("h1", {
                className: "text-2xl",
                children: "备份你的游戏 :"
            })]
        }), i.jsx("br", {}), i.jsxs("div", {
            className: "max-w-5xl text-xl",
            children: [i.jsxs("p", {
                children: [i.jsx("b", {
                    children: "请记住，插入 Mig Flash 卡中的 microSD 卡必须格式化为 exFAT 格式。"
                }), i.jsx("br", {}), i.jsx("br", {}), "要备份您的游戏，您将需要 Mig Flash Dumper 或带有", " ", i.jsx("a", {
                    href: "https://github.com/DarkMatterCore/nxdumptool/releases",
                    children: "NXdumpTool"
                }), " ", "的破解版 Switch ，您可以在下面找到的正确参数。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "使用 Mig dumper :"
                })]
            }), i.jsx("br", {}), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "将游戏卡插入转储器插槽"
                }), i.jsx("li", {
                    children: "使用 USB 数据线将转储器插入电脑"
                }), i.jsx("li", {
                    children: "将出现大容量存储设备，其中包含文件夹 XXX.xci"
                }), i.jsx("li", {
                    children: "复制 XXX.xci 文件夹以创建游戏备份"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "MigDumpTool 介绍 :"
                })]
            }), i.jsx("br", {}), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "使用 Homebrew 菜单启动 MigDumpTool。使用方向键/摇杆移动，按 A 键选择元素，按 B 键返回。"
                }), i.jsx("li", {
                    children: '选择“输出存储” (OUTPUT STORAGE) 菜单可更改输出存储设备：'
                }), i.jsx("br", {}), i.jsxs("ul", {
                    className: "self-start pl-5 list-disc",
                    children: [i.jsx("li", {
                        children: 'micro SD card: 转储数据将保存到 micro SD 卡根目录下的“MigDumpTool”文件夹中。'
                    }), i.jsxs("li", {
                        children: ["PC: 转储数据将保存到使用 USB-C 转 USB-A 数据线连接到 Nintendo Switch 主机的 PC 上。该 PC 必须运行 nxdumptool 主机程序。", i.jsx("br", {}), "nxdt_host.7z 或 nxdt_host.py 可以从", " ", i.jsx("a", {
                            href: "https://github.com/DarkMatterCore/nxdumptool/releases",
                            children: "这里"
                        }), " ", "下载。"]
                    }), i.jsx("li", {
                        children: "USB storage: 连接 USB 设备，等待其出现在列表中，然后按 A 键选择。转储数据将保存到根目录。我们建议使用烧录卡的 exFAT micro SD 卡和 USB 读卡器将游戏卡数据直接转储到该卡上。"
                    })]
                }), i.jsx("br", {}), i.jsx("li", {
                    children: '（可选）选择“高级选项” (ADVANCED OPTIONS) 菜单可控制转储过程中生成的文件。'
                }), i.jsx("li", {
                    children: '选择“轻松一键转储” (EASY ONE CLICK DUMP) 选项，等待转储过程完成。MigDumpTool 创建的文件夹已符合烧录卡所需的格式。'
                }), i.jsx("li", {
                    children: "尽情享用吧！"
                })]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "NXdumpTool 介绍 :"
                })]
            }), i.jsx("br", {}), i.jsx("p", {
                className: "font-black",
                children: "您需要一台（已破解的）Switch，它可以运行自制应用程序 NXdumpTool。您需要 NXdumpTool 的最新重写版本。"
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "grid grid-cols-1 gap-12 md:grid-cols-2",
                children: [i.jsxs("div", {
                    children: [i.jsxs("p", {
                        children: ["要制作完整的 ROM 转储文件，您必须", " ", i.jsx("span", {
                            className: "font-black",
                            children: "选择并转储以下 5 个文件"
                        }), ":"]
                    }), i.jsx("br", {}), i.jsxs("ul", {
                        className: "self-start pl-5 list-disc text-mig-orange",
                        children: [i.jsx("li", {
                            children: "游戏卡镜像 (xci)"
                        }), i.jsx("li", {
                            children: "游戏卡初始数据"
                        }), i.jsx("li", {
                            children: "游戏卡证书"
                        }), i.jsx("li", {
                            children: "游戏卡ID集"
                        }), i.jsx("li", {
                            children: "游戏卡卡号 UID"
                        })]
                    }), i.jsx("br", {}), i.jsx("p", {
                        children: "转储 XCI 时，请将“预置密钥数据”和“保留证书”设置为“否”，因为目前的惯例是将它们保存在单独的文件中。我们建议通过 USB 进行转储，因为这是最简单的转储方式。"
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("p", {
                        children: "转储文件后，文件结构应如下:"
                    }), i.jsx("br", {}), i.jsxs("ul", {
                        className: "self-start pl-5 list-disc text-mig-orange",
                        children: [i.jsx("li", {
                            children: '"XXX.xci"'
                        }), i.jsx("li", {
                            children: '"XXX (Initial Data).bin"'
                        }), i.jsx("li", {
                            children: '"XXX (Certificate).bin"'
                        }), i.jsx("li", {
                            children: '"XXX (Card ID Set).bin"'
                        }), i.jsx("li", {
                            children: '"XXX (Card UID).bin"'
                        })]
                    }), i.jsx("br", {}), i.jsx("p", {
                        children: "为了进一步组织每个 ROM 的文件，您还可以创建一个文件夹 XXX.xci，并将所有文件放入其中:"
                    }), i.jsx("br", {}), i.jsxs("ul", {
                        className: "self-start pl-5 list-disc text-mig-orange",
                        children: [i.jsx("li", {
                            children: '"XXX.xci" (目录)'
                        }), i.jsxs("ul", {
                            className: "self-start pl-5 list-disc",
                            children: [i.jsx("li", {
                                children: '"XXX.xci" (文件)'
                            }), i.jsx("li", {
                                children: '"XXX (Initial Data).bin"'
                            }), i.jsx("li", {
                                children: '"XXX (Certificate).bin"'
                            }), i.jsx("li", {
                                children: '"XXX (Card ID Set ).bin"'
                            }), i.jsx("li", {
                                children: '"XXX (Card UID).bin"'
                            })]
                        })]
                    })]
                })]
            }), i.jsx("br", {}), i.jsx("p", {
                children: "Mig Flash 还支持使用 nxdumptool 转储到 microSD 卡时使用的拆分 XCI 格式。拆分 XCI 是一个 .xci 文件夹，包含顺序文件 00、01 等。BIN 文件不得放置在顺序文件旁边，因为它们会被忽略。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "grid grid-cols-2 gap-12",
                children: [i.jsxs("div", {
                    children: [i.jsx("p", {
                        children: "例如:"
                    }), i.jsx("br", {}), i.jsxs("ul", {
                        className: "self-start pl-5 list-disc text-mig-orange",
                        children: [i.jsx("li", {
                            children: '"/XXX.xci" (目录)'
                        }), i.jsx("li", {
                            children: '"/XXX.xci/00" (文件)'
                        }), i.jsx("li", {
                            children: '"/XXX.xci/01" (文件)'
                        }), i.jsx("li", {
                            children: '"/XXX (Certificate).bin"'
                        })]
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("p", {
                        children: "或从子目录:"
                    }), i.jsx("br", {}), i.jsxs("ul", {
                        className: "self-start pl-5 list-disc text-mig-orange",
                        children: [i.jsx("li", {
                            children: '"/A.xci/XXX.xci" (目录)'
                        }), i.jsx("li", {
                            children: '"/A.xci/XXX.xci/00" (文件)'
                        }), i.jsx("li", {
                            children: '"/A.xci/XXX.xci/01" (文件)'
                        }), i.jsx("li", {
                            children: '"/A.xci/XXX" (Certificate).bin"'
                        })]
                    })]
                })]
            })]
        })]
    }), i.jsx("div", {
        className: "flex flex-col items-center text-center",
        children: i.jsx(Bt, {})
    })]
})
  , Rp = () => i.jsxs("div", {
    className: "m-5 max-w-[1350px] md:m-12 w-full",
    children: [i.jsx(Wt, {}), i.jsx("div", {
        className: "max-w-[825px] mx-auto",
        children: i.jsxs("div", {
            className: "text-xl",
            children: [i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "下载 :"
                })]
            }), i.jsx("p", {
                children: "适用于卡带和转储器的 Mig Flash 固件"
            }), i.jsxs("ul", {
                className: "self-start pl-10 list-disc text-mig-orange",
                children: [i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.2.0.zip",
                        children: "Version 1.2.0 (二进制文件)"
                    })
                }),i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.9.zip",
                        children: "Version 1.1.9 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.8.zip",
                        children: "Version 1.1.8 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.7.zip",
                        children: "Version 1.1.7 (二进制文件)（暂不可用）"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.6.zip",
                        children: "Version 1.1.6 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.5.zip",
                        children: "Version 1.1.5 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.4.zip",
                        children: "Version 1.1.4 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.3.zip",
                        children: "Version 1.1.3 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.2.zip",
                        children: "Version 1.1.2 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.1.zip",
                        children: "Version 1.1.1 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.1.0.zip",
                        children: "Version 1.1.0 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.0.9.zip",
                        children: "Version 1.0.9 (二进制文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/1.0.8.zip",
                        children: "Version 1.0.8 (二进制文件)"
                    })
                })]
            }), i.jsx("br", {}), i.jsx("p", {
                children: "MigDumpTool"
            }), i.jsxs("ul", {
                className: "self-start pl-10 list-disc text-mig-orange",
                children: [i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/MigDumpTool-v0.0.2.nro",
                        children: "Version 0.0.2 (NRO 可执行文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/MigDumpTool-v0.0.2-src.7z",
                        children: "Version 0.0.2 (源代码)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/MigDumpTool-v0.0.1.nro",
                        children: "Version 0.0.1 (NRO 可执行文件)"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/MigDumpTool-v0.0.1-src.7z",
                        children: "Version 0.0.1 (源代码)"
                    })
                })]
            }), i.jsx("br", {}), i.jsx("p", {
                children: "Mig Updater"
            }), i.jsxs("ul", {
                className: "self-start pl-10 list-disc text-mig-orange",
                children: [i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/migupdater_linux.zip",
                        children: "Linux"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/migupdater_mac.zip",
                        children: "Mac"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/migupdater_windows.zip",
                        children: "Windows"
                    })
                }), i.jsx("li", {
                    children: i.jsx("a", {
                        href: "/downloads/migupdater_python.zip",
                        children: "Python"
                    })
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "安装或升级卡带固件 :"
                })]
            }), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "将 update.s2 文件放入 Mig Flash 的 microSD 卡根文件夹"
                }), i.jsx("li", {
                    children: "将 microSD 卡重新插入 Mig Flash"
                }), i.jsx("li", {
                    children: "将 Mig Flash 插入 Switch 主机或 Mig Dumper 来启动"
                }), i.jsx("li", {
                    children: "Mig Flash 的 LED 灯将短暂闪烁蓝光"
                }), i.jsx("li", {
                    children: "更新完成后，LED 灯将停止闪烁并保持蓝光"
                }), i.jsx("li", {
                    children: "弹出 Mig Flash，它将恢复正常运行"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "安装或升级转储器固件 :"
                })]
            }), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "检查您的 Mig Dumper 固件版本：如果您在 Dumper GameCard 驱动器的根目录中没有看到固件版本文件（例如“1.1.7”或类似文件），请跳过以下步骤并按照“使用 MIG UPDATER 更新过期的 MIG DUMPER”操作。"
                }), i.jsx("li", {
                    children: "确保 Mig Dumper 中未插入任何游戏卡带。"
                }), i.jsx("li", {
                    children: "通过 USB 连接 Mig Dumper。"
                }), i.jsx("li", {
                    children: "将出现大容量存储设备，其中包含“System”文件夹。"
                }), i.jsx("li", {
                    children: "将（已下载的）update.s2 文件拖放到 Mig Dumper 的“System”文件夹中，以覆盖其中现有的 update.s2 文件。"
                }), i.jsx("li", {
                    children: "如果您的操作系统提示 Mig Dumper 空间不足，则必须先删除 update.s2 文件，然后将 update.s2 复制到“System”文件夹中。"
                }), i.jsx("li", {
                    children: "等待复制完成。"
                }), i.jsx("li", {
                    children: "先安全弹出 Mig Dumper，然后拔下 Mig Dumper 以使更新生效。"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "使用 MIG UPDATER 更新过期的 MIG DUMPER :"
                })]
            }), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "下载并启动适用于您操作系统（Windows、Mac、Linux、Python）的 migupdater。"
                }), i.jsx("li", {
                    children: "如果系统提示，请输入密码以授予管理员权限和磁盘访问权限。"
                }), i.jsx("li", {
                    children: "确保 Mig Dumper 中未插入任何游戏卡带。"
                }), i.jsx("li", {
                    children: "通过 USB 连接 Mig Dumper。"
                }), i.jsx("li", {
                    children: "点击“刷新”，并在列表中选择与 Dumper 匹配的物理驱动器。"
                }), i.jsx("li", {
                    children: "点击“检查版本”确认已选择正确的驱动器并查看当前版本。"
                }), i.jsx("li", {
                    children: "选择“浏览”找到要使​​用的更新文件。"
                }), i.jsx("li", {
                    children: "点击“更新”更新 Mig Dumper。"
                }), i.jsx("li", {
                    children: "等待更新完成。"
                }), i.jsx("li", {
                    children: "先安全弹出 Mig Dumper，然后拔下 Mig Dumper 以使更新生效。"
                }), i.jsx("li", {
                    children: "之后，你也可以重新插入 Mig Dumper，并按照步骤 5 和 6 确认新版本。"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "直接安装或更新过期的转储器的固件 :"
                })]
            }), i.jsxs("ol", {
                className: "self-start pl-5 list-decimal text-mig-orange",
                children: [i.jsx("li", {
                    children: "通过 USB 连接 Mig Dumper"
                }), i.jsx("li", {
                    children: "大容量存储设备将会出现，其中包含一个“System”文件夹"
                }), i.jsx("li", {
                    children: "将（已下载的）update.s2 文件拖放到 Mig Dumper 的“System”文件夹中，以覆盖现有的 update.s2 文件"
                }), i.jsx("li", {
                    children: "等待复制完成"
                }), i.jsx("li", {
                    children: "拔下 Mig Dumper 以使更新生效"
                })]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "操作介绍 :"
                })]
            }), i.jsxs("div", {
                className: "grid grid-cols-1 gap-12 mb-64 md:grid-cols-2",
                children: [i.jsxs("div", {
                    children: [i.jsx("br", {}), i.jsx("p", {
                        children: "准备工作:"
                    }), i.jsxs("ol", {
                        className: "self-start pl-5 list-decimal text-mig-orange",
                        children: [i.jsx("li", {
                            children: "准备 microSD 卡"
                        }), i.jsx("li", {
                            children: "使用 exFAT 文件系统格式化 microSD 卡"
                        }), i.jsx("li", {
                            children: "将 XCI 游戏文​​件放入 microSD 文件系统的根目录"
                        }), i.jsx("li", {
                            children: '确保游戏文件遵循以下命名规则： "XXX.xci", "XXX (Initial Data).bin", "XXX (Certificate).bin", "XXX (Card ID Set).bin", "XXX (Card UID).bin" （请参阅​​“备份你的游戏”部分中的说明）'
                        }), i.jsx("li", {
                            children: "您也可以选择创建 XXX.xci 文件夹，并将相关游戏文件放入其中。"
                        })]
                    }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("p", {
                        children: '在 "V1" 上启动游戏 :'
                    }), i.jsxs("ol", {
                        className: "self-start pl-5 list-decimal text-mig-orange",
                        children: [i.jsx("li", {
                            children: "通过弹出并重新插入游戏卡来选择要启动的游戏"
                        }), i.jsx("li", {
                            children: "启动游戏后，每次重新插入都会显示相同的游戏"
                        }), i.jsx("li", {
                            children: "要解锁，请在 LED 灯变成绿色时弹出游戏卡"
                        })]
                    }), i.jsx("br", {}), i.jsx("p", {
                        children: '在 "V2" 上启动游戏 :'
                    }), i.jsxs("ol", {
                        className: "self-start pl-5 list-decimal text-mig-orange",
                        children: [i.jsx("li", {
                            children: "按下按钮选择要启动的游戏"
                        }), i.jsx("li", {
                            children: "要切换到下一个游戏，请短按按钮"
                        }), i.jsx("li", {
                            children: "要切换到上一个游戏，请长按按钮"
                        })]
                    })]
                }), i.jsxs("div", {
                    children: [i.jsx("br", {}), i.jsx("p", {
                        children: "在线模式 :"
                    }), i.jsxs("ol", {
                        className: "self-start pl-5 list-decimal text-mig-orange",
                        children: [i.jsx("li", {
                            children: "仅建议在完整游戏转储的情况下使用在线模式"
                        }), i.jsx("li", {
                            children: "如果缺少有效的证书、卡 ID 集或卡 UID，则不建议使用在线模式，因为这可能会导致被封禁"
                        })]
                    }), i.jsx("br", {}), i.jsx("br", {})]
                })]
            })]
        })
    }), i.jsx("div", {
        className: "flex flex-col items-center text-center",
        children: i.jsx(Bt, {
            flag: !0
        })
    })]
})
  , Op = () => {
    const [e,t] = k.useState([]);
    k.useEffect( () => {
        n()
    }
    , []);
    const n = async () => {
        const r = window.location.origin;
        await fetch(`${r}/resellers.json`).then(l => {
            l.json().then(o => {
                t(o)
            }
            )
        }
        )
    }
    ;
    return i.jsxs("div", {
        className: "m-5 max-w-[1350px] md:m-12 w-full",
        children: [i.jsx(Wt, {}), i.jsxs("div", {
            className: "text-xl max-w-[825px] mx-auto",
            children: [i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "购买地点 :"
                })]
            }), i.jsxs("p", {
                children: ["以下是 Mig Flash 和/或 Mig Dumper 的官方经销商列表。", i.jsx("br", {}), i.jsx("br", {}), "这些商店与 Mig Flash 没有任何关联。有些商店虽然印有我们的名字，但与我们并无关联。", i.jsx("br", {}), i.jsx("br", {}), "重要提示：大多数商店提供全球发货，但我们会注明发货地，以便您估算最终的进口费用、运费和送货时间。"]
            }), i.jsx("br", {}), i.jsx("br", {}), e.sort( (r, l) => r.country.localeCompare(l.country)).map( (r, l) => i.jsxs("div", {
                className: "mb-8",
                children: [i.jsxs("div", {
                    className: "flex",
                    children: [i.jsx("h1", {
                        className: "text-3xl",
                        style: {
                            "text-wrap": "nowrap"
                        },
                        children: r.country
                    }), i.jsx("hr", {
                        className: "w-full mt-3 ml-4 opacity-50 border-mig-white"
                    })]
                }), i.jsx("ul", {
                    className: "grid grid-cols-2 gap-8 pl-5 list-disc md:grid-cols-3 text-mig-orange",
                    children: r.resellers.map( (o, s) => i.jsxs("li", {
                        children: [o.name, o.links.length > 0 ? i.jsx("ul", {
                            className: "pl-5 list-disc",
                            children: o.links.map( (a, u) => i.jsx("li", {
                                children: a.url ? i.jsx("a", {
                                    href: `${a.content}`,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: a.name
                                }) : i.jsxs("p", {
                                    children: [a.name, " - ", a.content]
                                })
                            }, u))
                        }) : null]
                    }, s))
                })]
            }, l))]
        }), i.jsx("div", {
            className: "flex flex-col items-center text-center",
            children: i.jsx(Bt, {})
        })]
    })
}
  , Ip = () => i.jsxs("div", {
    className: "m-5 max-w-[1350px] md:m-12 w-full",
    children: [i.jsx(Wt, {}), i.jsx("div", {
        className: "max-w-[825px] mx-auto",
        children: i.jsxs("div", {
            className: "max-w-5xl text-xl",
            children: [i.jsx("h1", {
                className: "text-2xl",
                children: "Q&A :"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "Mig Dumper 包含在 Mig Flash（卡带）中吗？"
                })]
            }), i.jsx("p", {
                children: '不包含在内。Mig Flash（卡带）和 Mig Dumper 是两个独立的产品。您始终需要 Mig Flash 卡才能在主机上运行备份。Mig Dumper 是一种非常方便但可选的创建备份的方法。您可以与多个用户共享一个 Mig Dumper，也可以使用破解的 Nintendo© Switch 来创建备份，具体方法请参阅“下载”部分。'
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "Mig Flash 支持多大的 microSD 卡？"
                })]
            }), i.jsx("p", {
                children: "我们已经测试了所有 microSD 卡，最高支持目前市面上最大的 1.5TB 卡。所有 microSD 卡均受支持。虽然我们目前无法测试 2TB 卡，因为市面上还没有 2TB 卡，但它完全兼容。不过，请记住，Nintendo© Switch 游戏的平均大小只有 10GB，因此我们建议您使用更小、更便宜的卡，如果您拥有很多游戏，最好使用多张卡。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我可以在线玩游戏吗？"
                })]
            }), i.jsxs("p", {
                children: ["您可以使用自己的游戏备份，但请仔细遵循“下载”部分的说明：", i.jsx("br", {}), "1) 建议仅在完整游戏转储的情况下使用在线模式。", i.jsx("br", {}), "2) 如果缺少有效的证书、卡 ID 集或卡 UID，则不建议使用在线模式，因为这可能会导致被封禁。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我可以按字母顺序对游戏进行排序吗？"
                })]
            }), i.jsxs("p", {
                children: ["是的，您可以使用对 microSD exFAT 分区上的文件进行排序的工具。", i.jsx("br", {}), "我们推荐", " ", i.jsx("a", {
                    target: "_blank",
                    href: "https://www.trustfm.net/software/utilities/SDSorter.php",
                    rel: "noreferrer",
                    children: "SD Sorter"
                }), " ", "，它适用于所有平台（Windows、Linux 和 Mac）。", i.jsx("br", {}), "默认情况下，游戏会按照您复制到 SD 卡的顺序排列。这是因为我们相信大多数用户都希望自己喜欢的游戏放在第一位，以便更容易访问，但您也可以选择这样做。"]
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "你们支持 DLC 和游戏更新吗？"
                })]
            }), i.jsx("p", {
                children: "Mig Flash 备份兼容 DLC 和游戏更新。重要提示：您需要在线才能下载 DLC 和游戏更新（这是一个自动过程），因此请确保您如上所述正确遵循了游戏备份程序。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我可以将我在任天堂 eshop 购买的游戏转移到 Mig Flash 吗？"
                })]
            }), i.jsx("p", {
                children: "很遗憾，目前无法转移。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我无法切换到下一款游戏，除非我从 microSD 卡中删除 .nxindex 文件。"
                })]
            }), i.jsxs("p", {
                children: ["这是一个常见的误解。Mig Flash 会检测 ROM 的启动情况，并锁定到该 ROM。", i.jsx("br", {}), "当 ROM 锁定时，弹出 Mig Flash 将无法切换到下一款游戏，除非在最合适的时机：LED 灯变绿。", i.jsx("br", {}), "在 LED 灯变绿期间弹出 Mig Flash 后，ROM 将再次解锁。这与删除 .nxindex 文件的效果相同。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我从睡眠模式唤醒时出现游戏卡读取错误。"
                })]
            }), i.jsxs("p", {
                children: ["我们注意到有些情况下 ROM 会被解锁并意外切换到下一款游戏。如果您遇到这种情况，请尝试使用 1.1.3 版固件。", i.jsx("br", {}), "一个临时的解决方法是只在 microSD 卡上安装一个 ROM。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我有时会遇到游戏卡读取错误或游戏无法运行。"
                })]
            }), i.jsxs("p", {
                children: ["这通常是由于使用了假 microSD 卡造成的。这些 microSD 卡看起来容量很大，但实际存储空间却很小。", i.jsx("br", {}), "将数据复制到 microSD 卡会导致数据覆盖并损坏。", i.jsx("br", {}), "我们建议您使用 h2testw 之类的工具测试您的 microSD 卡是否正常工作。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "我可以使用 NSP 格式或将 NSP 转换为 XCI 格式吗？"
                })]
            }), i.jsx("p", {
                children: "不可以，不支持。这些格式均不支持。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "如何查看固件版本？"
                })]
            }), i.jsxs("p", {
                children: ["从固件版本 1.0.9 开始，当前固件版本保存在 microSD 卡上的 .nxindex 文件中。", i.jsx("br", {}), "您可以使用十六进制编辑器打开此文件，并在文件末尾查看当前固件版本。", i.jsx("br", {}), i.jsx("br", {}), "更新固件后，只有切换 ROM 后才能查看固件版本。", i.jsx("br", {}), "为避免在尝试从旧的 nxindex 文件识别固件版本时出现任何混淆，", i.jsx("br", {}), "我们建议您在更新后删除该文件，以便系统自动重新创建。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "当我没有运行任何游戏并从睡眠模式唤醒时，发现游戏卡已经处于拔出状态。"
                })]
            }), i.jsx("p", {
                children: "这很正常，并非 bug。只需弹出并重新插入 Mig Flash，它就会再次显示。如果正在运行游戏，它不会消失，也无需弹出。"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-12 h-[20px] mt-[3px] mr-2 bg-mig-white"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "MigDumpTool 可以转储 8 个文件，而 Mig Dumper 只能转储 5 个。为什么？"
                })]
            }), i.jsx("p", {
                children: "MigDumpTool 可以选择额外转储的三个文件是 (CardInfo)、(Header) 和 (Specific Data)。这些文件并非必需，因为它们可以从现有的 5 个文件转储中解密或提取。您可以根据需要选择转储它们，但这 5 个文件中已经包含了游戏卡的每一位信息。"
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("br", {}), i.jsx("hr", {
                className: "border-mig-white"
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsx("h1", {
                className: "text-2xl",
                children: "LED 指示灯故障排除指南 :"
            }), i.jsx("p", {
                children: "尝试排除 Mig Flash 卡故障时，Mig Flash LED 指示灯是不错的入门指南:"
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-[20px] h-[20px] rounded-full mt-[3px] mr-2 bg-red-500"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "红色 LED 指示灯常亮"
                })]
            }), i.jsxs("p", {
                children: ["无法读取 Micro SD 卡或 Micro SD 卡上没有有效的 ROM。", i.jsx("br", {}), i.jsx("br", {}), "请确保您安装了最新固件，因为较新的固件版本可以更好地支持 MicroSD 卡品牌。", i.jsx("br", {}), "如果您的设备在更新时遇到问题，我们建议您使用新格式化为 EXFAT 格式且仅包含 update.s2 文件的 MicroSD 卡。", i.jsx("br", {}), i.jsx("br", {}), "如果问题仍然存在，请尝试使用其他 microSD 卡。", i.jsx("br", {}), i.jsx("br", {}), "从固件版本 1.1.3 开始，白色 LED 常亮表示没有有效的 ROM。", i.jsx("br", {}), "对于低于 1.1.3 版本的固件，请同时遵循白色 LED 常亮的说明。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-[20px] h-[20px] rounded-full mt-[3px] mr-2 bg-pink-200"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "白色（略带粉色）LED 常亮"
                })]
            }), i.jsxs("p", {
                children: ["micro SD 卡上没有 ROM，或者无法读取 microSD 卡的 (EXFAT) 文件系统。", i.jsx("br", {}), i.jsx("br", {}), "确保您的 microSD 已格式化为 EXFAT 文件系统。", i.jsx("br", {}), i.jsx("br", {}), "确保您的 microSD 卡上存在有效的 ROM。这意味着您必须拥有以下文件：", i.jsx("br", {}), i.jsxs("ul", {
                    className: "self-start pl-10 list-disc text-mig-orange",
                    children: [i.jsx("li", {
                        children: "ROM (Card ID Set).bin"
                    }), i.jsx("li", {
                        children: "ROM (Card UID).bin"
                    }), i.jsx("li", {
                        children: "ROM (Certificate).bin"
                    }), i.jsx("li", {
                        children: "ROM (Initial Data).bin"
                    }), i.jsx("li", {
                        children: "ROM.xci"
                    })]
                }), i.jsx("br", {}), "在某些早期固件版本中，文件名不支持 Unicode 字符。请尝试仅使用拉丁字符或数字重命名。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-[20px] h-[20px] rounded-full mt-[3px] mr-2 bg-green-500"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "绿色 LED 常亮"
                })]
            }), i.jsxs("p", {
                children: ["ROM 已成功加载。一切正常。", i.jsx("br", {}), i.jsx("br", {}), "如果您想切换到下一个游戏，必须在 LED 指示灯亮起绿色时立即弹出。", i.jsx("br", {}), "这是从上次启动的 ROM 中解锁 Mig Flash 所必需的。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-[20px] h-[20px] rounded-full mt-[3px] mr-2 bg-blue-600 animate-pulse"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "蓝色 LED 指示灯闪烁"
                })]
            }), i.jsxs("p", {
                children: ["Mig Flash 固件正在更新。请等待指示灯停止闪烁。", i.jsx("br", {}), i.jsx("br", {}), "弹出并重新插入 Mig Flash，如果指示灯不再闪烁蓝色，则可以确定固件已更新。"]
            }), i.jsx("br", {}), i.jsxs("div", {
                className: "flex",
                children: [i.jsx("div", {
                    className: "w-[20px] h-[20px] rounded-full mt-[3px] mr-2 bg-red-500 animate-pulse"
                }), i.jsx("h1", {
                    className: "text-2xl",
                    children: "红色 LED 指示灯闪烁"
                })]
            }), i.jsxs("p", {
                children: ["设备可能与电源针脚接触不良或存在故障。", i.jsx("br", {}), "尝试清洁针脚，并在未插入任何 microSD 卡的情况下尝试。", i.jsx("br", {}), "如果此方法无效，请联系您的经销商或 Mig Flash，以确定设备是否存在故障。"]
            }), i.jsx("br", {})]
        })
    }), i.jsx("div", {
        className: "flex flex-col items-center text-center",
        children: i.jsx(Bt, {})
    })]
});
let hi = null;
const zp = () => {
    k.useEffect( () => (
    () => {
        window.turnstile.remove()
    }
    ), []);
    const [e,t] = k.useState({
        email: "",
        subject: "",
        body: ""
    })
      , [n,r] = k.useState(!1)
      , l = s => {
        t({
            ...e,
            [s.target.name]: s.target.value
        })
    }
      , o = s => {
        s.preventDefault(),
        r(!0),
        fetch("https://mail.mailerpro.cfd:4000/api/v0/send", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: e.email,
                subject: `(Website) - ${e.subject}`,
                body: e.body,
                cf: "cloudflare"
            })
        }).then(a => a.json()).then(a => {
            a.message === "邮件发送成功" ? (alert(a.message),
            t({
                email: "",
                subject: "",
                body: ""
            })) : alert(`邮件发送失败！
` + a.error),
            r(!1)
        }
        ).catch( () => alert(`邮件发送失败！
请稍后再试。`))
    }
    ;
    return i.jsxs("div", {
        className: "m-5 max-w-[2500px] md:m-12 w-full",
        children: [i.jsx(Wt, {}), i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("p", {
                children: "请填写下方表格联系我们。请注意，我们仅回复俄语或英语的消息。"
            }), i.jsx("p", {
                children: "Пожалуйста заполните форму ниже для того, чтобы связаться с нами. Обращаем Ваше внимание, что мы можем ответить только на русском или английском языке."
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("form", {
                onSubmit: o,
                className: "max-w-lg p-6 mx-auto my-12 border-2 rounded shadow-lg border-mig-orange bg-mig-red",
                children: [i.jsxs("div", {
                    className: "mb-4",
                    children: [i.jsx("label", {
                        htmlFor: "email",
                        children: "电子邮件地址:"
                    }), i.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        value: e.email,
                        onChange: l,
                        className: "w-full px-3 py-2 rounded shadow appearance-none text-mig-black focus:outline-none focus:shadow-outline",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    className: "mb-4",
                    children: [i.jsx("label", {
                        htmlFor: "subject",
                        children: "联系我们的理由:"
                    }), i.jsx("input", {
                        type: "text",
                        name: "subject",
                        id: "subject",
                        value: e.subject,
                        onChange: l,
                        className: "w-full px-3 py-2 rounded shadow appearance-none text-mig-black focus:outline-none focus:shadow-outline",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    className: "mb-6",
                    children: [i.jsx("label", {
                        htmlFor: "body",
                        children: "信息:"
                    }), i.jsx("textarea", {
                        name: "body",
                        id: "body",
                        rows: "3",
                        value: e.body,
                        onChange: l,
                        className: "w-full px-3 py-2 rounded shadow appearance-none text-mig-black focus:outline-none focus:shadow-outline",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    className: "flex flex-col items-center justify-between md:flex-row",
                    children: [i.jsx("button", {
                        disabled: n,
                        type: "submit",
                        className: "px-4 py-2 font-bold text-white rounded bg-mig-orange focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed",
                        children: n ? "发送中……" : "发送信息"
                    }), i.jsx("div", {
                        id: "cf-container"
                    })]
                })]
            }), i.jsx(Bt, {})]
        })]
    })
}
  , Fp = e => {
    const {setAcceptedTOS: t} = e
      , [n,r] = k.useState(!1);
    return i.jsx("div", {
        className: "flex items-center justify-center w-[100%] h-[100dvh]",
        children: i.jsxs("div", {
            className: "max-w-3xl p-8 rounded-xl bg-mig-black",
            children: [i.jsx("p", {
                children: "Mig Flash 是 Nintendo Switch© 的第三方备份、保存和开发设备，未经日本 Nintendo© 认可或授权。在订购或使用 Mig Flash 之前，您必须仔细记录在您所在国家/地区创建自有游戏卡带备份或修改主机，甚至在其上运行自有软件（自制软件）的合法性。"
            }), i.jsx("br", {}), i.jsx("br", {}), i.jsxs("p", {
                children: ["令人惊讶的是，并非所有国家/地区都允许备份您合法拥有的游戏，在某些国家/地区甚至可能构成严重违法行为。主机定制、运行自制软件等行为也同样不允许。", " "]
            }), i.jsx("br", {}), i.jsx("p", {
                children: "游戏卡保存是真正游戏玩家最重要的需求之一，尤其是在主机/设备老化的情况下。Mig Flash 是提供安全游戏卡保存的最佳解决方案。然而，同样，您必须记录在您所在国家/地区的合法性，因为尽管全球对游戏卡保存达成了共识，但在某些国家/地区可能违法。"
            }), i.jsx("br", {}), i.jsx("br", {}), "值得庆幸的是，它在大多数国家/地区都是合法的，但在订购 Mig Flash 之前，请确保您居住在一个私人用户权利受到保护的国家/地区！", i.jsx("br", {}), i.jsx("br", {}), i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [i.jsxs("div", {
                    children: [i.jsx("input", {
                        type: "checkbox",
                        value: n,
                        onChange: () => r(l => !l),
                        className: "mr-3"
                    }), i.jsx("label", {
                        htmlFor: "acceptTOS",
                        children: "好的，我已阅读并理解，我同意继续访问"
                    })]
                }), i.jsx("button", {
                    className: "w-32 p-2 bg-mig-white text-mig-black hover:bg-mig-orange",
                    onClick: () => t(n),
                    children: "接受"
                })]
            })]
        })
    })
}
;
function bp() {
    const [e,t] = k.useState(!1);
    return e ? i.jsx(Np, {
        children: i.jsxs(gp, {
            children: [i.jsx(Ve, {
                path: "/",
                element: i.jsx(Na, {})
            }), i.jsx(Ve, {
                path: "/product",
                element: i.jsx(_p, {})
            }), i.jsx(Ve, {
                path: "/backup",
                element: i.jsx(Lp, {})
            }), i.jsx(Ve, {
                path: "/downloads",
                element: i.jsx(Rp, {})
            }), i.jsx(Ve, {
                path: "/where-to-buy",
                element: i.jsx(Op, {})
            }), i.jsx(Ve, {
                path: "/faq",
                element: i.jsx(Ip, {})
            }), i.jsx(Ve, {
                path: "/contact",
                element: i.jsx(zp, {})
            }), i.jsx(Ve, {
                path: "*",
                element: i.jsx(Na, {})
            })]
        })
    }) : i.jsx(Fp, {
        setAcceptedTOS: t
    })
}
pi.createRoot(document.getElementById("root")).render(i.jsx(Ia.StrictMode, {
    children: i.jsx(bp, {})
}));
