!function (e) {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.videojs = e()
}(function () {
    var e;
    return function e(t, r, n) {
        function i(a, s) {
            if (!r[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)return l(a, !0);
                    if (o)return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[a] = {exports: {}};
                t[a][0].call(c.exports, function (e) {
                    var r = t[a][1][e];
                    return i(r ? r : e)
                }, c, c.exports, e, t, r, n)
            }
            return r[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < n.length; a++)i(n[a]);
        return i
    }({
        1: [function (e, t, r) {
        }, {}],
        2: [function (e, t, r) {
            "use strict";
            var n = e("object-keys"), i = e("foreach"), o = "function" == typeof Symbol && "symbol" == typeof Symbol(), a = Object.prototype.toString, s = function (e) {
                return "function" == typeof e && "[object Function]" === a.call(e)
            }, l = function () {
                var e = {};
                try {
                    Object.defineProperty(e, "x", {enumerable: !1, value: e});
                    for (var t in e)return !1;
                    return e.x === e
                } catch (e) {
                    return !1
                }
            }, u = Object.defineProperty && l(), c = function (e, t, r, n) {
                (!(t in e) || s(n) && n()) && (u ? Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0
                }) : e[t] = r)
            }, d = function (e, t) {
                var r = arguments.length > 2 ? arguments[2] : {}, a = n(t);
                o && (a = a.concat(Object.getOwnPropertySymbols(t))), i(a, function (n) {
                    c(e, n, t[n], r[n])
                })
            };
            d.supportsDescriptors = !!u, t.exports = d
        }, {foreach: 4, "object-keys": 49}],
        3: [function (e, t, r) {
            function n(e, t, r) {
                if (!s(t))throw new TypeError("iterator must be a function");
                arguments.length < 3 && (r = this), "[object Array]" === l.call(e) ? i(e, t, r) : "string" == typeof e ? o(e, t, r) : a(e, t, r)
            }

            function i(e, t, r) {
                for (var n = 0, i = e.length; n < i; n++)u.call(e, n) && t.call(r, e[n], n, e)
            }

            function o(e, t, r) {
                for (var n = 0, i = e.length; n < i; n++)t.call(r, e.charAt(n), n, e)
            }

            function a(e, t, r) {
                for (var n in e)u.call(e, n) && t.call(r, e[n], n, e)
            }

            var s = e("is-function");
            t.exports = n;
            var l = Object.prototype.toString, u = Object.prototype.hasOwnProperty
        }, {"is-function": 9}],
        4: [function (e, t, r) {
            var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString;
            t.exports = function (e, t, r) {
                if ("[object Function]" !== i.call(t))throw new TypeError("iterator must be a function");
                var o = e.length;
                if (o === +o)for (var a = 0; a < o; a++)t.call(r, e[a], a, e); else for (var s in e)n.call(e, s) && t.call(r, e[s], s, e)
            }
        }, {}],
        5: [function (e, t, r) {
            var n = "Function.prototype.bind called on incompatible ", i = Array.prototype.slice, o = Object.prototype.toString, a = "[object Function]";
            t.exports = function (e) {
                var t = this;
                if ("function" != typeof t || o.call(t) !== a)throw new TypeError(n + t);
                for (var r, s = i.call(arguments, 1), l = function () {
                    if (this instanceof r) {
                        var n = t.apply(this, s.concat(i.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return t.apply(e, s.concat(i.call(arguments)))
                }, u = Math.max(0, t.length - s.length), c = [], d = 0; d < u; d++)c.push("$" + d);
                if (r = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), t.prototype) {
                    var h = function () {
                    };
                    h.prototype = t.prototype, r.prototype = new h, h.prototype = null
                }
                return r
            }
        }, {}],
        6: [function (e, t, r) {
            var n = e("./implementation");
            t.exports = Function.prototype.bind || n
        }, {"./implementation": 5}],
        7: [function (e, t, r) {
            (function (r) {
                var n = "undefined" != typeof r ? r : "undefined" != typeof window ? window : {}, i = e("min-document");
                if ("undefined" != typeof document)t.exports = document; else {
                    var o = n["__GLOBAL_DOCUMENT_CACHE@4"];
                    o || (o = n["__GLOBAL_DOCUMENT_CACHE@4"] = i), t.exports = o
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"min-document": 1}],
        8: [function (e, t, r) {
            (function (e) {
                "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        9: [function (e, t, r) {
            function n(e) {
                var t = i.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            }

            t.exports = n;
            var i = Object.prototype.toString
        }, {}],
        10: [function (e, t, r) {
            var n = e("../internal/getNative"), i = n(Date, "now"), o = i || function () {
                    return (new Date).getTime()
                };
            t.exports = o
        }, {"../internal/getNative": 26}],
        11: [function (e, t, r) {
            function n(e, t, r) {
                function n() {
                    y && clearTimeout(y), f && clearTimeout(f), _ = 0, f = y = m = void 0
                }

                function l(t, r) {
                    r && clearTimeout(r), f = y = m = void 0, t && (_ = o(), p = e.apply(g, h), y || f || (h = g = void 0))
                }

                function u() {
                    var e = t - (o() - v);
                    e <= 0 || e > t ? l(m, f) : y = setTimeout(u, e)
                }

                function c() {
                    l(E, y)
                }

                function d() {
                    if (h = arguments, v = o(), g = this, m = E && (y || !T), b === !1)var r = T && !y; else {
                        f || T || (_ = v);
                        var n = b - (v - _), i = n <= 0 || n > b;
                        i ? (f && (f = clearTimeout(f)), _ = v, p = e.apply(g, h)) : f || (f = setTimeout(c, n))
                    }
                    return i && y ? y = clearTimeout(y) : y || t === b || (y = setTimeout(u, t)), r && (i = !0, p = e.apply(g, h)), !i || y || f || (h = g = void 0), p
                }

                var h, f, p, v, g, y, m, _ = 0, b = !1, E = !0;
                if ("function" != typeof e)throw new TypeError(a);
                if (t = t < 0 ? 0 : +t || 0, r === !0) {
                    var T = !0;
                    E = !1
                } else i(r) && (T = !!r.leading, b = "maxWait"in r && s(+r.maxWait || 0, t), E = "trailing"in r ? !!r.trailing : E);
                return d.cancel = n, d
            }

            var i = e("../lang/isObject"), o = e("../date/now"), a = "Expected a function", s = Math.max;
            t.exports = n
        }, {"../date/now": 10, "../lang/isObject": 39}],
        12: [function (e, t, r) {
            function n(e, t) {
                if ("function" != typeof e)throw new TypeError(i);
                return t = o(void 0 === t ? e.length - 1 : +t || 0, 0), function () {
                    for (var r = arguments, n = -1, i = o(r.length - t, 0), a = Array(i); ++n < i;)a[n] = r[t + n];
                    switch (t) {
                        case 0:
                            return e.call(this, a);
                        case 1:
                            return e.call(this, r[0], a);
                        case 2:
                            return e.call(this, r[0], r[1], a)
                    }
                    var s = Array(t + 1);
                    for (n = -1; ++n < t;)s[n] = r[n];
                    return s[t] = a, e.apply(this, s)
                }
            }

            var i = "Expected a function", o = Math.max;
            t.exports = n
        }, {}],
        13: [function (e, t, r) {
            function n(e, t, r) {
                var n = !0, s = !0;
                if ("function" != typeof e)throw new TypeError(a);
                return r === !1 ? n = !1 : o(r) && (n = "leading"in r ? !!r.leading : n, s = "trailing"in r ? !!r.trailing : s), i(e, t, {
                    leading: n,
                    maxWait: +t,
                    trailing: s
                })
            }

            var i = e("./debounce"), o = e("../lang/isObject"), a = "Expected a function";
            t.exports = n
        }, {"../lang/isObject": 39, "./debounce": 11}],
        14: [function (e, t, r) {
            function n(e, t) {
                var r = -1, n = e.length;
                for (t || (t = Array(n)); ++r < n;)t[r] = e[r];
                return t
            }

            t.exports = n
        }, {}],
        15: [function (e, t, r) {
            function n(e, t) {
                for (var r = -1, n = e.length; ++r < n && t(e[r], r, e) !== !1;);
                return e
            }

            t.exports = n
        }, {}],
        16: [function (e, t, r) {
            function n(e, t, r) {
                r || (r = {});
                for (var n = -1, i = t.length; ++n < i;) {
                    var o = t[n];
                    r[o] = e[o]
                }
                return r
            }

            t.exports = n
        }, {}],
        17: [function (e, t, r) {
            var n = e("./createBaseFor"), i = n();
            t.exports = i
        }, {"./createBaseFor": 24}],
        18: [function (e, t, r) {
            function n(e, t) {
                return i(e, t, o)
            }

            var i = e("./baseFor"), o = e("../object/keysIn");
            t.exports = n
        }, {"../object/keysIn": 45, "./baseFor": 17}],
        19: [function (e, t, r) {
            function n(e, t, r, h, f) {
                if (!l(e))return e;
                var p = s(t) && (a(t) || c(t)), v = p ? void 0 : d(t);
                return i(v || t, function (i, a) {
                    if (v && (a = i, i = t[a]), u(i))h || (h = []), f || (f = []), o(e, t, a, n, r, h, f); else {
                        var s = e[a], l = r ? r(s, i, a, e, t) : void 0, c = void 0 === l;
                        c && (l = i), void 0 === l && (!p || a in e) || !c && (l === l ? l === s : s !== s) || (e[a] = l)
                    }
                }), e
            }

            var i = e("./arrayEach"), o = e("./baseMergeDeep"), a = e("../lang/isArray"), s = e("./isArrayLike"), l = e("../lang/isObject"), u = e("./isObjectLike"), c = e("../lang/isTypedArray"), d = e("../object/keys");
            t.exports = n
        }, {
            "../lang/isArray": 36,
            "../lang/isObject": 39,
            "../lang/isTypedArray": 42,
            "../object/keys": 44,
            "./arrayEach": 15,
            "./baseMergeDeep": 20,
            "./isArrayLike": 27,
            "./isObjectLike": 32
        }],
        20: [function (e, t, r) {
            function n(e, t, r, n, d, h, f) {
                for (var p = h.length, v = t[r]; p--;)if (h[p] == v)return void(e[r] = f[p]);
                var g = e[r], y = d ? d(g, v, r, e, t) : void 0, m = void 0 === y;
                m && (y = v, s(v) && (a(v) || u(v)) ? y = a(g) ? g : s(g) ? i(g) : [] : l(v) || o(v) ? y = o(g) ? c(g) : l(g) ? g : {} : m = !1), h.push(v), f.push(y), m ? e[r] = n(y, v, d, h, f) : (y === y ? y !== g : g === g) && (e[r] = y)
            }

            var i = e("./arrayCopy"), o = e("../lang/isArguments"), a = e("../lang/isArray"), s = e("./isArrayLike"), l = e("../lang/isPlainObject"), u = e("../lang/isTypedArray"), c = e("../lang/toPlainObject");
            t.exports = n
        }, {
            "../lang/isArguments": 35,
            "../lang/isArray": 36,
            "../lang/isPlainObject": 40,
            "../lang/isTypedArray": 42,
            "../lang/toPlainObject": 43,
            "./arrayCopy": 14,
            "./isArrayLike": 27
        }],
        21: [function (e, t, r) {
            function n(e) {
                return function (t) {
                    return null == t ? void 0 : i(t)[e]
                }
            }

            var i = e("./toObject");
            t.exports = n
        }, {"./toObject": 34}],
        22: [function (e, t, r) {
            function n(e, t, r) {
                if ("function" != typeof e)return i;
                if (void 0 === t)return e;
                switch (r) {
                    case 1:
                        return function (r) {
                            return e.call(t, r)
                        };
                    case 3:
                        return function (r, n, i) {
                            return e.call(t, r, n, i)
                        };
                    case 4:
                        return function (r, n, i, o) {
                            return e.call(t, r, n, i, o)
                        };
                    case 5:
                        return function (r, n, i, o, a) {
                            return e.call(t, r, n, i, o, a)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            }

            var i = e("../utility/identity");
            t.exports = n
        }, {"../utility/identity": 48}],
        23: [function (e, t, r) {
            function n(e) {
                return a(function (t, r) {
                    var n = -1, a = null == t ? 0 : r.length, s = a > 2 ? r[a - 2] : void 0, l = a > 2 ? r[2] : void 0, u = a > 1 ? r[a - 1] : void 0;
                    for ("function" == typeof s ? (s = i(s, u, 5), a -= 2) : (s = "function" == typeof u ? u : void 0, a -= s ? 1 : 0), l && o(r[0], r[1], l) && (s = a < 3 ? void 0 : s, a = 1); ++n < a;) {
                        var c = r[n];
                        c && e(t, c, s)
                    }
                    return t
                })
            }

            var i = e("./bindCallback"), o = e("./isIterateeCall"), a = e("../function/restParam");
            t.exports = n
        }, {"../function/restParam": 12, "./bindCallback": 22, "./isIterateeCall": 30}],
        24: [function (e, t, r) {
            function n(e) {
                return function (t, r, n) {
                    for (var o = i(t), a = n(t), s = a.length, l = e ? s : -1; e ? l-- : ++l < s;) {
                        var u = a[l];
                        if (r(o[u], u, o) === !1)break
                    }
                    return t
                }
            }

            var i = e("./toObject");
            t.exports = n
        }, {"./toObject": 34}],
        25: [function (e, t, r) {
            var n = e("./baseProperty"), i = n("length");
            t.exports = i
        }, {"./baseProperty": 21}],
        26: [function (e, t, r) {
            function n(e, t) {
                var r = null == e ? void 0 : e[t];
                return i(r) ? r : void 0
            }

            var i = e("../lang/isNative");
            t.exports = n
        }, {"../lang/isNative": 38}],
        27: [function (e, t, r) {
            function n(e) {
                return null != e && o(i(e))
            }

            var i = e("./getLength"), o = e("./isLength");
            t.exports = n
        }, {"./getLength": 25, "./isLength": 31}],
        28: [function (e, t, r) {
            var n = function () {
                try {
                    Object({toString: 0} + "")
                } catch (e) {
                    return function () {
                        return !1
                    }
                }
                return function (e) {
                    return "function" != typeof e.toString && "string" == typeof(e + "")
                }
            }();
            t.exports = n
        }, {}],
        29: [function (e, t, r) {
            function n(e, t) {
                return e = "number" == typeof e || i.test(e) ? +e : -1, t = null == t ? o : t, e > -1 && e % 1 == 0 && e < t
            }

            var i = /^\d+$/, o = 9007199254740991;
            t.exports = n
        }, {}],
        30: [function (e, t, r) {
            function n(e, t, r) {
                if (!a(r))return !1;
                var n = typeof t;
                if ("number" == n ? i(r) && o(t, r.length) : "string" == n && t in r) {
                    var s = r[t];
                    return e === e ? e === s : s !== s
                }
                return !1
            }

            var i = e("./isArrayLike"), o = e("./isIndex"), a = e("../lang/isObject");
            t.exports = n
        }, {"../lang/isObject": 39, "./isArrayLike": 27, "./isIndex": 29}],
        31: [function (e, t, r) {
            function n(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i
            }

            var i = 9007199254740991;
            t.exports = n
        }, {}],
        32: [function (e, t, r) {
            function n(e) {
                return !!e && "object" == typeof e
            }

            t.exports = n
        }, {}],
        33: [function (e, t, r) {
            function n(e) {
                for (var t = u(e), r = t.length, n = r && e.length, c = !!n && s(n) && (o(e) || i(e) || l(e)), h = -1, f = []; ++h < r;) {
                    var p = t[h];
                    (c && a(p, n) || d.call(e, p)) && f.push(p)
                }
                return f
            }

            var i = e("../lang/isArguments"), o = e("../lang/isArray"), a = e("./isIndex"), s = e("./isLength"), l = e("../lang/isString"), u = e("../object/keysIn"), c = Object.prototype, d = c.hasOwnProperty;
            t.exports = n
        }, {
            "../lang/isArguments": 35,
            "../lang/isArray": 36,
            "../lang/isString": 41,
            "../object/keysIn": 45,
            "./isIndex": 29,
            "./isLength": 31
        }],
        34: [function (e, t, r) {
            function n(e) {
                if (a.unindexedChars && o(e)) {
                    for (var t = -1, r = e.length, n = Object(e); ++t < r;)n[t] = e.charAt(t);
                    return n
                }
                return i(e) ? e : Object(e)
            }

            var i = e("../lang/isObject"), o = e("../lang/isString"), a = e("../support");
            t.exports = n
        }, {"../lang/isObject": 39, "../lang/isString": 41, "../support": 47}],
        35: [function (e, t, r) {
            function n(e) {
                return o(e) && i(e) && s.call(e, "callee") && !l.call(e, "callee")
            }

            var i = e("../internal/isArrayLike"), o = e("../internal/isObjectLike"), a = Object.prototype, s = a.hasOwnProperty, l = a.propertyIsEnumerable;
            t.exports = n
        }, {"../internal/isArrayLike": 27, "../internal/isObjectLike": 32}],
        36: [function (e, t, r) {
            var n = e("../internal/getNative"), i = e("../internal/isLength"), o = e("../internal/isObjectLike"), a = "[object Array]", s = Object.prototype, l = s.toString, u = n(Array, "isArray"), c = u || function (e) {
                    return o(e) && i(e.length) && l.call(e) == a
                };
            t.exports = c
        }, {"../internal/getNative": 26, "../internal/isLength": 31, "../internal/isObjectLike": 32}],
        37: [function (e, t, r) {
            function n(e) {
                return i(e) && s.call(e) == o
            }

            var i = e("./isObject"), o = "[object Function]", a = Object.prototype, s = a.toString;
            t.exports = n
        }, {"./isObject": 39}],
        38: [function (e, t, r) {
            function n(e) {
                return null != e && (i(e) ? d.test(u.call(e)) : a(e) && (o(e) ? d : s).test(e))
            }

            var i = e("./isFunction"), o = e("../internal/isHostObject"), a = e("../internal/isObjectLike"), s = /^\[object .+?Constructor\]$/, l = Object.prototype, u = Function.prototype.toString, c = l.hasOwnProperty, d = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = n
        }, {"../internal/isHostObject": 28, "../internal/isObjectLike": 32, "./isFunction": 37}],
        39: [function (e, t, r) {
            function n(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            t.exports = n
        }, {}],
        40: [function (e, t, r) {
            function n(e) {
                var t;
                if (!s(e) || h.call(e) != u || a(e) || o(e) || !d.call(e, "constructor") && (t = e.constructor, "function" == typeof t && !(t instanceof t)))return !1;
                var r;
                return l.ownLast ? (i(e, function (e, t, n) {
                    return r = d.call(n, t), !1
                }), r !== !1) : (i(e, function (e, t) {
                    r = t
                }), void 0 === r || d.call(e, r))
            }

            var i = e("../internal/baseForIn"), o = e("./isArguments"), a = e("../internal/isHostObject"), s = e("../internal/isObjectLike"), l = e("../support"), u = "[object Object]", c = Object.prototype, d = c.hasOwnProperty, h = c.toString;
            t.exports = n
        }, {
            "../internal/baseForIn": 18,
            "../internal/isHostObject": 28,
            "../internal/isObjectLike": 32,
            "../support": 47,
            "./isArguments": 35
        }],
        41: [function (e, t, r) {
            function n(e) {
                return "string" == typeof e || i(e) && s.call(e) == o
            }

            var i = e("../internal/isObjectLike"), o = "[object String]", a = Object.prototype, s = a.toString;
            t.exports = n
        }, {"../internal/isObjectLike": 32}],
        42: [function (e, t, r) {
            function n(e) {
                return o(e) && i(e.length) && !!A[L.call(e)]
            }

            var i = e("../internal/isLength"), o = e("../internal/isObjectLike"), a = "[object Arguments]", s = "[object Array]", l = "[object Boolean]", u = "[object Date]", c = "[object Error]", d = "[object Function]", h = "[object Map]", f = "[object Number]", p = "[object Object]", v = "[object RegExp]", g = "[object Set]", y = "[object String]", m = "[object WeakMap]", _ = "[object ArrayBuffer]", b = "[object Float32Array]", E = "[object Float64Array]", T = "[object Int8Array]", w = "[object Int16Array]", k = "[object Int32Array]", O = "[object Uint8Array]", S = "[object Uint8ClampedArray]", C = "[object Uint16Array]", R = "[object Uint32Array]", A = {};
            A[b] = A[E] = A[T] = A[w] = A[k] = A[O] = A[S] = A[C] = A[R] = !0, A[a] = A[s] = A[_] = A[l] = A[u] = A[c] = A[d] = A[h] = A[f] = A[p] = A[v] = A[g] = A[y] = A[m] = !1;
            var j = Object.prototype, L = j.toString;
            t.exports = n
        }, {"../internal/isLength": 31, "../internal/isObjectLike": 32}],
        43: [function (e, t, r) {
            function n(e) {
                return i(e, o(e))
            }

            var i = e("../internal/baseCopy"), o = e("../object/keysIn");
            t.exports = n
        }, {"../internal/baseCopy": 16, "../object/keysIn": 45}],
        44: [function (e, t, r) {
            var n = e("../internal/getNative"), i = e("../internal/isArrayLike"), o = e("../lang/isObject"), a = e("../internal/shimKeys"), s = e("../support"), l = n(Object, "keys"), u = l ? function (e) {
                var t = null == e ? void 0 : e.constructor;
                return "function" == typeof t && t.prototype === e || ("function" == typeof e ? s.enumPrototypes : i(e)) ? a(e) : o(e) ? l(e) : []
            } : a;
            t.exports = u
        }, {
            "../internal/getNative": 26,
            "../internal/isArrayLike": 27,
            "../internal/shimKeys": 33,
            "../lang/isObject": 39,
            "../support": 47
        }],
        45: [function (e, t, r) {
            function n(e) {
                if (null == e)return [];
                c(e) || (e = Object(e));
                var t = e.length;
                t = t && u(t) && (a(e) || o(e) || d(e)) && t || 0;
                for (var r = e.constructor, n = -1, i = s(r) && r.prototype || k, f = i === e, p = Array(t), v = t > 0, y = h.enumErrorProps && (e === w || e instanceof Error), m = h.enumPrototypes && s(e); ++n < t;)p[n] = n + "";
                for (var b in e)m && "prototype" == b || y && ("message" == b || "name" == b) || v && l(b, t) || "constructor" == b && (f || !S.call(e, b)) || p.push(b);
                if (h.nonEnumShadows && e !== k) {
                    var A = e === O ? E : e === w ? g : C.call(e), j = R[A] || R[_];
                    for (A == _ && (i = k), t = T.length; t--;) {
                        b = T[t];
                        var L = j[b];
                        f && L || (L ? !S.call(e, b) : e[b] === i[b]) || p.push(b)
                    }
                }
                return p
            }

            var i = e("../internal/arrayEach"), o = e("../lang/isArguments"), a = e("../lang/isArray"), s = e("../lang/isFunction"), l = e("../internal/isIndex"), u = e("../internal/isLength"), c = e("../lang/isObject"), d = e("../lang/isString"), h = e("../support"), f = "[object Array]", p = "[object Boolean]", v = "[object Date]", g = "[object Error]", y = "[object Function]", m = "[object Number]", _ = "[object Object]", b = "[object RegExp]", E = "[object String]", T = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], w = Error.prototype, k = Object.prototype, O = String.prototype, S = k.hasOwnProperty, C = k.toString, R = {};
            R[f] = R[v] = R[m] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, R[p] = R[E] = {constructor: !0, toString: !0, valueOf: !0}, R[g] = R[y] = R[b] = {
                constructor: !0,
                toString: !0
            }, R[_] = {constructor: !0}, i(T, function (e) {
                for (var t in R)if (S.call(R, t)) {
                    var r = R[t];
                    r[e] = S.call(r, e)
                }
            }), t.exports = n
        }, {
            "../internal/arrayEach": 15,
            "../internal/isIndex": 29,
            "../internal/isLength": 31,
            "../lang/isArguments": 35,
            "../lang/isArray": 36,
            "../lang/isFunction": 37,
            "../lang/isObject": 39,
            "../lang/isString": 41,
            "../support": 47
        }],
        46: [function (e, t, r) {
            var n = e("../internal/baseMerge"), i = e("../internal/createAssigner"), o = i(n);
            t.exports = o
        }, {"../internal/baseMerge": 19, "../internal/createAssigner": 23}],
        47: [function (e, t, r) {
            var n = Array.prototype, i = Error.prototype, o = Object.prototype, a = o.propertyIsEnumerable, s = n.splice, l = {};
            !function (e) {
                var t = function () {
                    this.x = e
                }, r = {0: e, length: e}, n = [];
                t.prototype = {valueOf: e, y: e};
                for (var o in new t)n.push(o);
                l.enumErrorProps = a.call(i, "message") || a.call(i, "name"), l.enumPrototypes = a.call(t, "prototype"), l.nonEnumShadows = !/valueOf/.test(n), l.ownLast = "x" != n[0], l.spliceObjects = (s.call(r, 0, 1), !r[0]), l.unindexedChars = "x"[0] + Object("x")[0] != "xx"
            }(1, 0), t.exports = l
        }, {}],
        48: [function (e, t, r) {
            function n(e) {
                return e
            }

            t.exports = n
        }, {}],
        49: [function (e, t, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty, i = Object.prototype.toString, o = Array.prototype.slice, a = e("./isArguments"), s = Object.prototype.propertyIsEnumerable, l = !s.call({toString: null}, "toString"), u = s.call(function () {
            }, "prototype"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = function (e) {
                var t = e.constructor;
                return t && t.prototype === e
            }, h = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            }, f = function () {
                if ("undefined" == typeof window)return !1;
                for (var e in window)try {
                    if (!h["$" + e] && n.call(window, e) && null !== window[e] && "object" == typeof window[e])try {
                        d(window[e])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }(), p = function (e) {
                if ("undefined" == typeof window || !f)return d(e);
                try {
                    return d(e)
                } catch (e) {
                    return !1
                }
            }, v = function (e) {
                var t = null !== e && "object" == typeof e, r = "[object Function]" === i.call(e), o = a(e), s = t && "[object String]" === i.call(e), d = [];
                if (!t && !r && !o)throw new TypeError("Object.keys called on a non-object");
                var h = u && r;
                if (s && e.length > 0 && !n.call(e, 0))for (var f = 0; f < e.length; ++f)d.push(String(f));
                if (o && e.length > 0)for (var v = 0; v < e.length; ++v)d.push(String(v)); else for (var g in e)h && "prototype" === g || !n.call(e, g) || d.push(String(g));
                if (l)for (var y = p(e), m = 0; m < c.length; ++m)y && "constructor" === c[m] || !n.call(e, c[m]) || d.push(c[m]);
                return d
            };
            v.shim = function () {
                if (Object.keys) {
                    var e = function () {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2);
                    if (!e) {
                        var t = Object.keys;
                        Object.keys = function (e) {
                            return t(a(e) ? o.call(e) : e)
                        }
                    }
                } else Object.keys = v;
                return Object.keys || v
            }, t.exports = v
        }, {"./isArguments": 50}],
        50: [function (e, t, r) {
            "use strict";
            var n = Object.prototype.toString;
            t.exports = function (e) {
                var t = n.call(e), r = "[object Arguments]" === t;
                return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)), r
            }
        }, {}],
        51: [function (e, t, r) {
            "use strict";
            var n = e("object-keys");
            t.exports = function () {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)return !1;
                if ("symbol" == typeof Symbol.iterator)return !0;
                var e = {}, t = Symbol("test"), r = Object(t);
                if ("string" == typeof t)return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(t))return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(r))return !1;
                var i = 42;
                e[t] = i;
                for (t in e)return !1;
                if (0 !== n(e).length)return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)return !1;
                var o = Object.getOwnPropertySymbols(e);
                if (1 !== o.length || o[0] !== t)return !1;
                if (!Object.prototype.propertyIsEnumerable.call(e, t))return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var a = Object.getOwnPropertyDescriptor(e, t);
                    if (a.value !== i || a.enumerable !== !0)return !1
                }
                return !0
            }
        }, {"object-keys": 49}],
        52: [function (e, t, r) {
            "use strict";
            var n = e("object-keys"), i = e("function-bind"), o = function (e) {
                return "undefined" != typeof e && null !== e
            }, a = e("./hasSymbols")(), s = Object, l = i.call(Function.call, Array.prototype.push), u = i.call(Function.call, Object.prototype.propertyIsEnumerable), c = a ? Object.getOwnPropertySymbols : null;
            t.exports = function (e, t) {
                if (!o(e))throw new TypeError("target must be an object");
                var r, i, d, h, f, p, v, g = s(e);
                for (r = 1; r < arguments.length; ++r) {
                    i = s(arguments[r]), h = n(i);
                    var y = a && (Object.getOwnPropertySymbols || c);
                    if (y)for (f = y(i), d = 0; d < f.length; ++d)v = f[d], u(i, v) && l(h, v);
                    for (d = 0; d < h.length; ++d)v = h[d], p = i[v], u(i, v) && (g[v] = p)
                }
                return g
            }
        }, {"./hasSymbols": 51, "function-bind": 6, "object-keys": 49}],
        53: [function (e, t, r) {
            "use strict";
            var n = e("define-properties"), i = e("./implementation"), o = e("./polyfill"), a = e("./shim"), s = o();
            n(s, {implementation: i, getPolyfill: o, shim: a}), t.exports = s
        }, {"./implementation": 52, "./polyfill": 54, "./shim": 55, "define-properties": 2}],
        54: [function (e, t, r) {
            "use strict";
            var n = e("./implementation"), i = function () {
                if (!Object.assign)return !1;
                for (var e = "abcdefghijklmnopqrst", t = e.split(""), r = {}, n = 0; n < t.length; ++n)r[t[n]] = t[n];
                var i = Object.assign({}, r), o = "";
                for (var a in i)o += a;
                return e !== o
            }, o = function () {
                if (!Object.assign || !Object.preventExtensions)return !1;
                var e = Object.preventExtensions({1: 2});
                try {
                    Object.assign(e, "xy")
                } catch (t) {
                    return "y" === e[1]
                }
                return !1
            };
            t.exports = function () {
                return Object.assign ? i() ? n : o() ? n : Object.assign : n
            }
        }, {"./implementation": 52}],
        55: [function (e, t, r) {
            "use strict";
            var n = e("define-properties"), i = e("./polyfill");
            t.exports = function () {
                var e = i();
                return n(Object, {assign: e}, {
                    assign: function () {
                        return Object.assign !== e
                    }
                }), e
            }
        }, {"./polyfill": 54, "define-properties": 2}],
        56: [function (e, t, r) {
            var n = e("trim"), i = e("for-each"), o = function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            t.exports = function (e) {
                if (!e)return {};
                var t = {};
                return i(n(e).split("\n"), function (e) {
                    var r = e.indexOf(":"), i = n(e.slice(0, r)).toLowerCase(), a = n(e.slice(r + 1));
                    "undefined" == typeof t[i] ? t[i] = a : o(t[i]) ? t[i].push(a) : t[i] = [t[i], a]
                }), t
            }
        }, {"for-each": 3, trim: 58}],
        57: [function (e, t, r) {
            function n(e, t) {
                var r, n = null;
                try {
                    r = JSON.parse(e, t)
                } catch (e) {
                    n = e
                }
                return [n, r]
            }

            t.exports = n
        }, {}],
        58: [function (e, t, r) {
            function n(e) {
                return e.replace(/^\s*|\s*$/g, "")
            }

            r = t.exports = n, r.left = function (e) {
                return e.replace(/^\s*/, "")
            }, r.right = function (e) {
                return e.replace(/\s*$/, "")
            }
        }, {}],
        59: [function (e, t, r) {
            function n(e) {
                return e.replace(/\n\r?\s*/g, "")
            }

            t.exports = function (e) {
                for (var t = "", r = 0; r < arguments.length; r++)t += n(e[r]) + (arguments[r + 1] || "");
                return t
            }
        }, {}],
        60: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                for (var r = 0; r < e.length; r++)t(e[r])
            }

            function i(e) {
                for (var t in e)if (e.hasOwnProperty(t))return !1;
                return !0
            }

            function o(e, t, r) {
                var n = e;
                return d(t) ? (r = t, "string" == typeof e && (n = {uri: e})) : n = f(t, {uri: e}), n.callback = r, n
            }

            function a(e, t, r) {
                return t = o(e, t, r), s(t)
            }

            function s(e) {
                function t() {
                    4 === d.readyState && o()
                }

                function r() {
                    var e = void 0;
                    if (e = d.response ? d.response : d.responseText || l(d), E)try {
                        e = JSON.parse(e)
                    } catch (e) {
                    }
                    return e
                }

                function n(e) {
                    return clearTimeout(v), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, u(e, c)
                }

                function o() {
                    if (!p) {
                        var t;
                        clearTimeout(v), t = e.useXDR && void 0 === d.status ? 200 : 1223 === d.status ? 204 : d.status;
                        var n = c, i = null;
                        return 0 !== t ? (n = {
                            body: r(),
                            statusCode: t,
                            method: y,
                            headers: {},
                            url: g,
                            rawRequest: d
                        }, d.getAllResponseHeaders && (n.headers = h(d.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), u(i, n, n.body)
                    }
                }

                if ("undefined" == typeof e.callback)throw new Error("callback argument missing");
                var s = !1, u = function (t, r, n) {
                    s || (s = !0, e.callback(t, r, n))
                }, c = {body: void 0, headers: {}, statusCode: 0, method: y, url: g, rawRequest: d}, d = e.xhr || null;
                d || (d = e.cors || e.useXDR ? new a.XDomainRequest : new a.XMLHttpRequest);
                var f, p, v, g = d.url = e.uri || e.url, y = d.method = e.method || "GET", m = e.body || e.data || null, _ = d.headers = e.headers || {}, b = !!e.sync, E = !1;
                if ("json"in e && (E = !0, _.accept || _.Accept || (_.Accept = "application/json"), "GET" !== y && "HEAD" !== y && (_["content-type"] || _["Content-Type"] || (_["Content-Type"] = "application/json"), m = JSON.stringify(e.json))), d.onreadystatechange = t, d.onload = o, d.onerror = n, d.onprogress = function () {
                    }, d.ontimeout = n, d.open(y, g, !b, e.username, e.password), b || (d.withCredentials = !!e.withCredentials), !b && e.timeout > 0 && (v = setTimeout(function () {
                        p = !0, d.abort("timeout");
                        var e = new Error("XMLHttpRequest timeout");
                        e.code = "ETIMEDOUT", n(e)
                    }, e.timeout)), d.setRequestHeader)for (f in _)_.hasOwnProperty(f) && d.setRequestHeader(f, _[f]); else if (e.headers && !i(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType"in e && (d.responseType = e.responseType), "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(d), d.send(m), d
            }

            function l(e) {
                if ("document" === e.responseType)return e.responseXML;
                var t = 204 === e.status && e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                return "" !== e.responseType || t ? null : e.responseXML
            }

            function u() {
            }

            var c = e("global/window"), d = e("is-function"), h = e("parse-headers"), f = e("xtend");
            t.exports = a, a.XMLHttpRequest = c.XMLHttpRequest || u, a.XDomainRequest = "withCredentials"in new a.XMLHttpRequest ? a.XMLHttpRequest : c.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function (e) {
                a["delete" === e ? "del" : e] = function (t, r, n) {
                    return r = o(t, r, n), r.method = e.toUpperCase(), s(r)
                }
            })
        }, {"global/window": 8, "is-function": 9, "parse-headers": 56, xtend: 61}],
        61: [function (e, t, r) {
            function n() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)i.call(r, n) && (e[n] = r[n])
                }
                return e
            }

            t.exports = n;
            var i = Object.prototype.hasOwnProperty
        }, {}],
        62: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("./button.js"), s = n(a), l = e("./component.js"), u = n(l), c = function (e) {
                function t(r, n) {
                    i(this, t), e.call(this, r, n)
                }

                return o(t, e), t.prototype.buildCSSClass = function () {
                    return "vjs-bigPlay-button"
                }, t.prototype.handleClick = function () {
                    this.player_.play()
                }, t
            }(s.default);
            c.prototype.controlText_ = "Play Video", u.default.registerComponent("BigPlayButton", c), r.default = c, t.exports = r.default
        }, {"./button.js": 63, "./component.js": 65}],
        63: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("./clickable-component.js"), l = i(s), u = e("./component"), c = i(u), d = e("./utils/events.js"), h = (n(d), e("./utils/fn.js")), f = (n(h), e("./utils/log.js")), p = i(f), v = e("global/document"), g = (i(v), e("object.assign")), y = i(g), m = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n)
                }

                return a(t, e), t.prototype.createEl = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "button" : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    t = y.default({className: this.buildCSSClass()}, t), "button" !== e && (p.default.warn("Creating a Button with an HTML element of " + e + " is deprecated; use ClickableComponent instead."), t = y.default({tabIndex: 0}, t), r = y.default({role: "button"}, r)), r = y.default({
                        type: "button",
                        "aria-live": "polite"
                    }, r);
                    var n = c.default.prototype.createEl.call(this, e, t, r);
                    return this.createControlTextEl(n), n
                }, t.prototype.addChild = function (e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = this.constructor.name;
                    return p.default.warn("Adding an actionable (user controllable) child to a Button (" + r + ") is not supported; use a ClickableComponent instead."), c.default.prototype.addChild.call(this, e, t)
                }, t.prototype.handleKeyPress = function (t) {
                    13 === t.which || e.prototype.handleKeyPress.call(this, t)
                }, t
            }(l.default);
            c.default.registerComponent("Button", m), r.default = m, t.exports = r.default
        }, {
            "./clickable-component.js": 64,
            "./component": 65,
            "./utils/events.js": 116,
            "./utils/fn.js": 117,
            "./utils/log.js": 120,
            "global/document": 7,
            "object.assign": 53
        }],
        64: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("./component"), l = i(s), u = e("./utils/dom.js"), c = n(u), d = e("./utils/events.js"), h = n(d), f = e("./utils/fn.js"), p = n(f), v = e("./utils/log.js"), g = i(v), y = e("global/document"), m = i(y), _ = e("object.assign"), b = i(_), E = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.emitTapEvents(), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur)
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0], r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    r = b.default({
                        className: this.buildCSSClass(),
                        tabIndex: 0
                    }, r), "button" === t && g.default.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), n = b.default({
                        role: "button",
                        "aria-live": "polite"
                    }, n);
                    var i = e.prototype.createEl.call(this, t, r, n);
                    return this.createControlTextEl(i), i
                }, t.prototype.createControlTextEl = function (e) {
                    return this.controlTextEl_ = c.createEl("span", {className: "vjs-control-text"}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_), this.controlTextEl_
                }, t.prototype.controlText = function (e) {
                    return e ? (this.controlText_ = e, this.controlTextEl_.innerHTML = this.localize(this.controlText_), this) : this.controlText_ || "Need Text"
                }, t.prototype.buildCSSClass = function () {
                    return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.addChild = function (t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return e.prototype.addChild.call(this, t, r)
                }, t.prototype.enable = function () {
                    return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), this
                }, t.prototype.disable = function () {
                    return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), this
                }, t.prototype.handleClick = function () {
                }, t.prototype.handleFocus = function () {
                    h.on(m.default, "keydown", p.bind(this, this.handleKeyPress))
                }, t.prototype.handleKeyPress = function (t) {
                    13 === t.which ? (t.preventDefault(), this.handleClick(t)) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
                }, t.prototype.handleBlur = function () {
                    h.off(m.default, "keydown", p.bind(this, this.handleKeyPress))
                }, t
            }(l.default);
            l.default.registerComponent("ClickableComponent", E), r.default = E, t.exports = r.default
        }, {
            "./component": 65,
            "./utils/dom.js": 115,
            "./utils/events.js": 116,
            "./utils/fn.js": 117,
            "./utils/log.js": 120,
            "global/document": 7,
            "object.assign": 53
        }],
        65: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var a = e("global/window"), s = i(a), l = e("./utils/dom.js"), u = n(l), c = e("./utils/fn.js"), d = n(c), h = e("./utils/guid.js"), f = n(h), p = e("./utils/events.js"), v = n(p), g = e("./utils/log.js"), y = i(g), m = e("./utils/to-title-case.js"), _ = i(m), b = e("object.assign"), E = i(b), T = e("./utils/merge-options.js"), w = i(T), k = function () {
                function e(t, r, n) {
                    if (o(this, e), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = w.default({}, this.options_), r = this.options_ = w.default(this.options_, r), this.id_ = r.id || r.el && r.el.id, !this.id_) {
                        var i = t && t.id && t.id() || "no_player";
                        this.id_ = i + "_component_" + f.newGUID()
                    }
                    this.name_ = r.name || null, r.el ? this.el_ = r.el : r.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, r.initChildren !== !1 && this.initChildren(), this.ready(n), r.reportTouchActivity !== !1 && this.enableTouchActivity()
                }

                return e.prototype.dispose = function () {
                    if (this.trigger({
                            type: "dispose",
                            bubbles: !1
                        }), this.children_)for (var e = this.children_.length - 1; e >= 0; e--)this.children_[e].dispose && this.children_[e].dispose();
                    this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                }, e.prototype.player = function () {
                    return this.player_
                }, e.prototype.options = function (e) {
                    return y.default.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e ? (this.options_ = w.default(this.options_, e), this.options_) : this.options_
                }, e.prototype.el = function () {
                    return this.el_
                }, e.prototype.createEl = function (e, t, r) {
                    return u.createEl(e, t, r)
                }, e.prototype.localize = function (e) {
                    var t = this.player_.language && this.player_.language(), r = this.player_.languages && this.player_.languages();
                    if (!t || !r)return e;
                    var n = r[t];
                    if (n && n[e])return n[e];
                    var i = t.split("-")[0], o = r[i];
                    return o && o[e] ? o[e] : e
                }, e.prototype.contentEl = function () {
                    return this.contentEl_ || this.el_
                }, e.prototype.id = function () {
                    return this.id_
                }, e.prototype.name = function () {
                    return this.name_
                }, e.prototype.children = function () {
                    return this.children_
                }, e.prototype.getChildById = function (e) {
                    return this.childIndex_[e]
                }, e.prototype.getChild = function (e) {
                    return this.childNameIndex_[e]
                }, e.prototype.addChild = function (t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? this.children_.length : arguments[2], i = void 0, o = void 0;
                    if ("string" == typeof t) {
                        o = t, r || (r = {}), r === !0 && (y.default.warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."), r = {});
                        var a = r.componentClass || _.default(o);
                        r.name = o;
                        var s = e.getComponent(a);
                        if (!s)throw new Error("Component " + a + " does not exist");
                        if ("function" != typeof s)return null;
                        i = new s(this.player_ || this, r)
                    } else i = t;
                    if (this.children_.splice(n, 0, i), "function" == typeof i.id && (this.childIndex_[i.id()] = i), o = o || i.name && i.name(), o && (this.childNameIndex_[o] = i), "function" == typeof i.el && i.el()) {
                        var l = this.contentEl().children, u = l[n] || null;
                        this.contentEl().insertBefore(i.el(), u)
                    }
                    return i
                }, e.prototype.removeChild = function (e) {
                    if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                        for (var t = !1, r = this.children_.length - 1; r >= 0; r--)if (this.children_[r] === e) {
                            t = !0, this.children_.splice(r, 1);
                            break
                        }
                        if (t) {
                            this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                            var n = e.el();
                            n && n.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                        }
                    }
                }, e.prototype.initChildren = function () {
                    var t = this, r = this.options_.children;
                    r && !function () {
                        var n = t.options_, i = function (e) {
                            var r = e.name, i = e.opts;
                            if (void 0 !== n[r] && (i = n[r]), i !== !1) {
                                i === !0 && (i = {}), i.playerOptions = t.options_.playerOptions;
                                var o = t.addChild(r, i);
                                o && (t[r] = o)
                            }
                        }, o = void 0, a = e.getComponent("Tech");
                        o = Array.isArray(r) ? r : Object.keys(r), o.concat(Object.keys(t.options_).filter(function (e) {
                            return !o.some(function (t) {
                                return "string" == typeof t ? e === t : e === t.name
                            })
                        })).map(function (e) {
                            var n = void 0, i = void 0;
                            return "string" == typeof e ? (n = e, i = r[n] || t.options_[n] || {}) : (n = e.name, i = e), {
                                name: n,
                                opts: i
                            }
                        }).filter(function (t) {
                            var r = e.getComponent(t.opts.componentClass || _.default(t.name));
                            return r && !a.isTech(r)
                        }).forEach(i)
                    }()
                }, e.prototype.buildCSSClass = function () {
                    return ""
                }, e.prototype.on = function (e, t, r) {
                    var n = this;
                    return "string" == typeof e || Array.isArray(e) ? v.on(this.el_, e, d.bind(this, t)) : !function () {
                        var i = e, o = t, a = d.bind(n, r), s = function () {
                            return n.off(i, o, a)
                        };
                        s.guid = a.guid, n.on("dispose", s);
                        var l = function () {
                            return n.off("dispose", s)
                        };
                        l.guid = a.guid, e.nodeName ? (v.on(i, o, a), v.on(i, "dispose", l)) : "function" == typeof e.on && (i.on(o, a), i.on("dispose", l))
                    }(), this
                }, e.prototype.off = function (e, t, r) {
                    if (!e || "string" == typeof e || Array.isArray(e))v.off(this.el_, e, t); else {
                        var n = e, i = t, o = d.bind(this, r);
                        this.off("dispose", o), e.nodeName ? (v.off(n, i, o), v.off(n, "dispose", o)) : (n.off(i, o), n.off("dispose", o))
                    }
                    return this
                }, e.prototype.one = function (e, t, r) {
                    var n = this, i = arguments;
                    return "string" == typeof e || Array.isArray(e) ? v.one(this.el_, e, d.bind(this, t)) : !function () {
                        var o = e, a = t, s = d.bind(n, r), l = function e() {
                            n.off(o, a, e), s.apply(null, i)
                        };
                        l.guid = s.guid, n.on(o, a, l)
                    }(), this
                }, e.prototype.trigger = function (e, t) {
                    return v.trigger(this.el_, e, t), this
                }, e.prototype.ready = function (e) {
                    var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                    return e && (this.isReady_ ? t ? e.call(this) : this.setTimeout(e, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e))), this
                }, e.prototype.triggerReady = function () {
                    this.isReady_ = !0, this.setTimeout(function () {
                        var e = this.readyQueue_;
                        this.readyQueue_ = [], e && e.length > 0 && e.forEach(function (e) {
                            e.call(this)
                        }, this), this.trigger("ready")
                    }, 1)
                }, e.prototype.$ = function (e, t) {
                    return u.$(e, t || this.contentEl())
                }, e.prototype.$$ = function (e, t) {
                    return u.$$(e, t || this.contentEl())
                }, e.prototype.hasClass = function (e) {
                    return u.hasElClass(this.el_, e)
                }, e.prototype.addClass = function (e) {
                    return u.addElClass(this.el_, e), this
                }, e.prototype.removeClass = function (e) {
                    return u.removeElClass(this.el_, e), this
                }, e.prototype.toggleClass = function (e, t) {
                    return u.toggleElClass(this.el_, e, t), this
                }, e.prototype.show = function () {
                    return this.removeClass("vjs-hidden"), this
                }, e.prototype.hide = function () {
                    return this.addClass("vjs-hidden"), this
                }, e.prototype.lockShowing = function () {
                    return this.addClass("vjs-lock-showing"), this
                }, e.prototype.unlockShowing = function () {
                    return this.removeClass("vjs-lock-showing"), this
                }, e.prototype.width = function (e, t) {
                    return this.dimension("width", e, t)
                }, e.prototype.height = function (e, t) {
                    return this.dimension("height", e, t)
                }, e.prototype.dimensions = function (e, t) {
                    return this.width(e, !0).height(t)
                }, e.prototype.dimension = function (e, t, r) {
                    if (void 0 !== t)return null !== t && t === t || (t = 0), ("" + t).indexOf("%") !== -1 || ("" + t).indexOf("px") !== -1 ? this.el_.style[e] = t : "auto" === t ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", r || this.trigger("resize"), this;
                    if (!this.el_)return 0;
                    var n = this.el_.style[e], i = n.indexOf("px");
                    return i !== -1 ? parseInt(n.slice(0, i), 10) : parseInt(this.el_["offset" + _.default(e)], 10)
                }, e.prototype.currentDimension = function (e) {
                    var t = 0;
                    if ("width" !== e && "height" !== e)throw new Error("currentDimension only accepts width or height value");
                    if ("function" == typeof s.default.getComputedStyle) {
                        var r = s.default.getComputedStyle(this.el_);
                        t = r.getPropertyValue(e) || r[e]
                    } else if (this.el_.currentStyle) {
                        var n = "offset" + _.default(e);
                        t = this.el_[n]
                    }
                    return t = parseFloat(t)
                }, e.prototype.currentDimensions = function () {
                    return {width: this.currentDimension("width"), height: this.currentDimension("height")}
                }, e.prototype.currentWidth = function () {
                    return this.currentDimension("width")
                }, e.prototype.currentHeight = function () {
                    return this.currentDimension("height")
                }, e.prototype.emitTapEvents = function () {
                    var e = 0, t = null, r = 10, n = 200, i = void 0;
                    this.on("touchstart", function (r) {
                        1 === r.touches.length && (t = E.default({}, r.touches[0]), e = (new Date).getTime(), i = !0)
                    }), this.on("touchmove", function (e) {
                        if (e.touches.length > 1)i = !1; else if (t) {
                            var n = e.touches[0].pageX - t.pageX, o = e.touches[0].pageY - t.pageY, a = Math.sqrt(n * n + o * o);
                            a > r && (i = !1)
                        }
                    });
                    var o = function () {
                        i = !1
                    };
                    this.on("touchleave", o), this.on("touchcancel", o), this.on("touchend", function (r) {
                        if (t = null, i === !0) {
                            var o = (new Date).getTime() - e;
                            o < n && (r.preventDefault(), this.trigger("tap"))
                        }
                    })
                }, e.prototype.enableTouchActivity = function () {
                    if (this.player() && this.player().reportUserActivity) {
                        var e = d.bind(this.player(), this.player().reportUserActivity), t = void 0;
                        this.on("touchstart", function () {
                            e(), this.clearInterval(t), t = this.setInterval(e, 250)
                        });
                        var r = function (r) {
                            e(), this.clearInterval(t)
                        };
                        this.on("touchmove", e), this.on("touchend", r), this.on("touchcancel", r)
                    }
                }, e.prototype.setTimeout = function (e, t) {
                    e = d.bind(this, e);
                    var r = s.default.setTimeout(e, t), n = function () {
                        this.clearTimeout(r)
                    };
                    return n.guid = "vjs-timeout-" + r, this.on("dispose", n), r
                }, e.prototype.clearTimeout = function (e) {
                    s.default.clearTimeout(e);
                    var t = function () {
                    };
                    return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
                }, e.prototype.setInterval = function (e, t) {
                    e = d.bind(this, e);
                    var r = s.default.setInterval(e, t), n = function () {
                        this.clearInterval(r)
                    };
                    return n.guid = "vjs-interval-" + r, this.on("dispose", n), r
                }, e.prototype.clearInterval = function (e) {
                    s.default.clearInterval(e);
                    var t = function () {
                    };
                    return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
                }, e.registerComponent = function (t, r) {
                    return e.components_ || (e.components_ = {}), e.components_[t] = r, r
                }, e.getComponent = function (t) {
                    return e.components_ && e.components_[t] ? e.components_[t] : s.default && s.default.videojs && s.default.videojs[t] ? (y.default.warn("The " + t + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), s.default.videojs[t]) : void 0
                }, e.extend = function (t) {
                    t = t || {}, y.default.warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");
                    var r = t.init || t.init || this.prototype.init || this.prototype.init || function () {
                        }, n = function () {
                        r.apply(this, arguments)
                    };
                    n.prototype = Object.create(this.prototype), n.prototype.constructor = n, n.extend = e.extend;
                    for (var i in t)t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
                    return n
                }, e
            }();
            k.registerComponent("Component", k), r.default = k, t.exports = r.default
        }, {
            "./utils/dom.js": 115,
            "./utils/events.js": 116,
            "./utils/fn.js": 117,
            "./utils/guid.js": 119,
            "./utils/log.js": 120,
            "./utils/merge-options.js": 121,
            "./utils/to-title-case.js": 124,
            "global/window": 8,
            "object.assign": 53
        }],
        66: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../component.js"), s = n(a), l = e("./play-toggle.js"), u = (n(l), e("./time-controls/current-time-display.js")), c = (n(u), e("./time-controls/duration-display.js")), d = (n(c), e("./time-controls/time-divider.js")), h = (n(d), e("./time-controls/remaining-time-display.js")), f = (n(h), e("./live-display.js")), p = (n(f), e("./progress-control/progress-control.js")), v = (n(p), e("./fullscreen-toggle.js")), g = (n(v), e("./volume-control/volume-control.js")), y = (n(g), e("./volume-menu-button.js")), m = (n(y), e("./mute-toggle.js")), _ = (n(m), e("./playback-rate-menu/playback-rate-menu-button.js")), b = (n(_), e("./set-controls/control-set-display.js")), E = (n(b), function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {role: "group"})
                }, t
            }(s.default));
            E.prototype.options_ = {
                loadEvent: "play",
                children: ["playToggle", "remainingTimeDisplay", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "volumeMenuButton", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "setToggle", "fullscreenToggle"]
            }, s.default.registerComponent("ControlBar", E), r.default = E, t.exports = r.default
        }, {
            "../component.js": 65,
            "./fullscreen-toggle.js": 67,
            "./live-display.js": 202,
            "./mute-toggle.js": 68,
            "./play-toggle.js": 69,
            "./playback-rate-menu/playback-rate-menu-button.js": 70,
            "./progress-control/progress-control.js": 75,
            "./set-controls/control-set-display.js": 78,
            "./time-controls/current-time-display.js": 79,
            "./time-controls/duration-display.js": 80,
            "./time-controls/remaining-time-display.js": 81,
            "./time-controls/time-divider.js": 82,
            "./volume-control/volume-control.js": 84,
            "./volume-menu-button.js": 86
        }],
        67: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../button.js"), s = n(a), l = e("../component.js"), u = n(l), c = function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.buildCSSClass = function () {
                    return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.handleClick = function (e) {
                    e.target.blur(), this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText("Non-Fullscreen"))
                }, t
            }(s.default);
            c.prototype.controlText_ = "Fullscreen", u.default.registerComponent("FullscreenToggle", c), r.default = c, t.exports = r.default
        }, {"../button.js": 63, "../component.js": 65}],
        202: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../component"), l = i(s), u = e("../utils/dom.js"), c = n(u), d = e("global/document"), h = i(d), f = e("global/window"), p = i(f), v = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.parentel = r.el_;
                    var i = p.default.mocoplayer.config.get().ManualSwitchCdn;
                    this.line = i ? n.playerOptions.cdn : "auto"
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = this, r = e.prototype.createEl.call(this, "div", {className: "vjs-switchCdnLine-control vjs-control"}, {title: "线路选择"});
                    return this.contentEl_ = c.createEl("div", {
                        className: "vjs-switchCdnLine-display imv2-line",
                        innerHTML: ""
                    }), this.contentEl_.onclick = function () {
                        var e = h.default.getElementsByClassName("switch-cdn-line-wrap")[0], r = h.default.getElementById("setoverlay");
                        "visible" === r.style.visibility && (r.style.visibility = "hidden"), e ? e.parentNode.removeChild(e) : t.parentel.appendChild(t.CdnSwitchDOM(t.line))
                    }, r.appendChild(this.contentEl_), r
                }, t.prototype.CdnSwitchDOM = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], t = '<iframe class="report-wrap" src="/mocoplayer/report2.html?cdn=' + e + '"></iframe>';
                    return c.createEl("div", {className: "switch-cdn-line-wrap", id: "switchCdnLineWrap", innerHTML: t})
                }, t
            }(l.default);
            l.default.registerComponent("LiveDisplay", v), r.default = v, t.exports = r.default
        }, {"../component": 65, "../utils/dom.js": 115, "global/document": 7, "global/window": 8}],
        68: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../button"), l = i(s), u = e("../component"), c = i(u), d = e("../utils/dom.js"), h = n(d), f = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "volumechange", this.update), r.tech_ && r.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(r, "loadstart", function () {
                        this.update(), r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    })
                }

                return a(t, e), t.prototype.buildCSSClass = function () {
                    return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.handleClick = function () {
                    this.player_.muted(!this.player_.muted())
                }, t.prototype.update = function () {
                    var e = this.player_.volume(), t = 3;
                    0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
                    var r = this.player_.muted() ? "Unmute" : "Mute";
                    this.controlText() !== r && this.controlText(r);
                    for (var n = 0; n < 4; n++)h.removeElClass(this.el_, "vjs-vol-" + n);
                    h.addElClass(this.el_, "vjs-vol-" + t)
                }, t
            }(l.default);
            f.prototype.controlText_ = "Mute", c.default.registerComponent("MuteToggle", f), r.default = f, t.exports = r.default
        }, {"../button": 63, "../component": 65, "../utils/dom.js": 115}],
        69: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../button.js"), s = n(a), l = e("../component.js"), u = n(l), c = function (e) {
                function t(r, n) {
                    i(this, t), e.call(this, r, n), this.on(r, "play", this.handlePlay), this.on(r, "pause", this.handlePause)
                }

                return o(t, e), t.prototype.buildCSSClass = function () {
                    return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.handleClick = function (e) {
                    e.target.blur(), this.player_.clickFlag = "click", this.player_.paused() ? this.player_.play() : this.player_.pause()
                }, t.prototype.handlePlay = function () {
                    this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                }, t.prototype.handlePause = function () {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                }, t
            }(s.default);
            c.prototype.controlText_ = "Play", u.default.registerComponent("PlayToggle", c), r.default = c, t.exports = r.default
        }, {"../button.js": 63, "../component.js": 65}],
        70: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../menu/menu-button.js"), l = i(s), u = e("../../menu/menu.js"), c = i(u), d = e("./playback-rate-menu-item.js"), h = i(d), f = e("../../component.js"), p = i(f), v = e("../../utils/dom.js"), g = n(v), y = e("global/window"), m = (i(y), function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.updateVisibility(), this.updateLabel(), this.on(r, "loadstart", this.updateVisibility), this.on(r, "ratechange", this.updateLabel)
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this), r = this.playbackRates()[0];
                    return this.labelEl_ = g.createEl("div", {
                        className: "vjs-playback-rate-value",
                        innerHTML: r
                    }), t.appendChild(this.labelEl_), t.onmouseover = function () {
                        var e = g.getEl("vjsMenu");
                        e.style.visibility = "visible"
                    }, t
                }, t.prototype.buildCSSClass = function () {
                    return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.createMenu = function () {
                    var e = new c.default(this.player()), t = this.playbackRates();
                    if (t)for (var r = t.length - 1; r >= 0; r--)e.addChild(new h.default(this.player(), {rate: t[r] + "x"}));
                    return e
                }, t.prototype.updateARIAAttributes = function () {
                    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                }, t.prototype.handleClick = function () {
                }, t.prototype.playbackRates = function () {
                    var e = this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates;
                    return e
                }, t.prototype.playbackRateSupported = function () {
                    return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                }, t.prototype.updateVisibility = function () {
                    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                }, t.prototype.updateLabel = function () {
                    if (this.playbackRateSupported()) {
                        var e = this.player().playbackRate();
                        if (e !== this.player().options_.rate)return;
                        e.toString().indexOf(".") === -1 && (e += ".0"), this.labelEl_.innerHTML = e + "x"
                    }
                }, t
            }(l.default));
            m.prototype.controlText_ = "Playback Rate", p.default.registerComponent("PlaybackRateMenuButton", m), r.default = m, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../menu/menu-button.js": 92,
            "../../menu/menu.js": 94,
            "../../utils/dom.js": 115,
            "./playback-rate-menu-item.js": 71,
            "global/window": 8
        }],
        71: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s, l = e("../../menu/menu-item.js"), u = i(l), c = e("../../component.js"), d = i(c), h = e("../../utils/dom.js"), f = n(h), p = function (e) {
                function t(r, n) {
                    o(this, t);
                    var i = n.rate, a = parseFloat(i, 10);
                    n.label = i, n.selected = 1 === a, e.call(this, r, n), this.label = i, this.rate = a, r.options_.rate === this.rate ? (s = this.el(), this.el().style.color = "#f01414") : this.el().style.color = "#93999f", this.on(r, "ratechange", this.update)
                }

                return a(t, e), t.prototype.handleClick = function () {
                    e.prototype.handleClick.call(this), this.player().options_.rate = this.rate, this.player().playbackRate(this.rate);
                    var t = f.getEl("vjsMenu");
                    t.style.visibility = "hidden", s = this.el()
                }, t.prototype.update = function () {
                    this.selected(this.player().playbackRate() === this.rate), this.el().style.color = "#93999f", s.style.color = "#f01414"
                }, t
            }(u.default);
            p.prototype.contentElType = "button", d.default.registerComponent("PlaybackRateMenuItem", p), r.default = p, t.exports = r.default
        }, {"../../component.js": 65, "../../menu/menu-item.js": 93, "../../utils/dom.js": 115}],
        72: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/dom.js"), c = n(u), d = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "progress", this.update)
                }

                return a(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-load-progress",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                    })
                }, t.prototype.update = function () {
                    var e = this.player_.buffered(), t = this.player_.duration(), r = this.player_.bufferedEnd(), n = this.el_.children, i = function (e, t) {
                        var r = e / t || 0;
                        return 100 * (r >= 1 ? 1 : r) + "%"
                    };
                    this.el_.style.width = i(r, t);
                    for (var o = 0; o < e.length; o++) {
                        var a = e.start(o), s = e.end(o), l = n[o];
                        l || (l = this.el_.appendChild(c.createEl())), l.style.left = i(a, r), l.style.width = i(s - a, r)
                    }
                    for (var o = n.length; o > e.length; o--)this.el_.removeChild(n[o - 1])
                }, t
            }(l.default);
            l.default.registerComponent("LoadProgressBar", d), r.default = d, t.exports = r.default
        }, {"../../component.js": 65, "../../utils/dom.js": 115}],
        73: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("global/window"), l = i(s), u = e("../../component.js"), c = i(u), d = e("../../utils/dom.js"), h = n(d), f = e("../../utils/fn.js"), p = n(f), v = e("../../utils/format-time.js"), g = i(v), y = e("lodash-compat/function/throttle"), m = i(y), _ = function (e) {
                function t(r, n) {
                    var i = this;
                    o(this, t), e.call(this, r, n), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && (this.tooltip = h.createEl("div", {className: "vjs-time-tooltip"}), this.el().appendChild(this.tooltip), this.addClass("vjs-keep-tooltips-inside")), this.update(0, 0), r.on("ready", function () {
                        i.on(r.controlBar.progressControl.el(), "mousemove", m.default(p.bind(i, i.handleMouseMove), 25))
                    })
                }

                return a(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
                }, t.prototype.handleMouseMove = function (e) {
                    var t = this.player_.duration(), r = this.calculateDistance(e) * t, n = e.pageX - h.findElPosition(this.el().parentNode).left;
                    this.update(r, n)
                }, t.prototype.update = function (e, t) {
                    var r = g.default(e, this.player_.duration()), n = parseFloat(l.default.getComputedStyle(this.player().el()).width);
                    if (t < 20 && (t = 20), t > n - 20 && (t = n - 20), this.el().style.left = t + "px", this.el().setAttribute("data-current-time", r), this.keepTooltipsInside) {
                        var i = this.clampPosition_(t), o = t - i + 1, a = parseFloat(l.default.getComputedStyle(this.tooltip).width), s = a / 2;
                        this.tooltip.innerHTML = r, this.tooltip.style.right = "-" + (s - o) + "px"
                    }
                }, t.prototype.calculateDistance = function (e) {
                    return h.getPointerPosition(this.el().parentNode, e).x
                }, t.prototype.clampPosition_ = function (e) {
                    if (!this.keepTooltipsInside)return e;
                    var t = parseFloat(l.default.getComputedStyle(this.player().el()).width), r = parseFloat(l.default.getComputedStyle(this.tooltip).width), n = r / 2, i = e;
                    return e < n ? i = Math.ceil(n) : e > t - n && (i = Math.floor(t - n)), i
                }, t
            }(c.default);
            c.default.registerComponent("MouseTimeDisplay", _), r.default = _, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../utils/dom.js": 115,
            "../../utils/fn.js": 117,
            "../../utils/format-time.js": 118,
            "global/window": 8,
            "lodash-compat/function/throttle": 13
        }],
        74: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/fn.js"), c = n(u), d = e("../../utils/dom.js"), h = (n(d), e("../../utils/format-time.js")), f = i(h), p = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.updateDataAttr(), this.on(r, "timeupdate", this.updateDataAttr), r.ready(c.bind(this, this.updateDataAttr)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && this.addClass("vjs-keep-tooltips-inside")
                }

                return a(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-play-progress vjs-slider-bar",
                        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                    })
                }, t.prototype.updateDataAttr = function () {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.el_.setAttribute("data-current-time", f.default(e, this.player_.duration()))
                }, t
            }(l.default);
            l.default.registerComponent("PlayProgressBar", p), r.default = p, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../utils/dom.js": 115,
            "../../utils/fn.js": 117,
            "../../utils/format-time.js": 118
        }],
        75: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../../component.js"), s = n(a), l = e("./seek-bar.js"), u = (n(l), e("./mouse-time-display.js")), c = (n(u), function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
                }, t
            }(s.default));
            c.prototype.options_ = {children: ["seekBar"]}, s.default.registerComponent("ProgressControl", c), r.default = c, t.exports = r.default
        }, {"../../component.js": 65, "./mouse-time-display.js": 73, "./seek-bar.js": 76}],
        76: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("global/window"), l = i(s), u = e("../../slider/slider.js"), c = i(u), d = e("../../component.js"), h = i(d), f = e("./load-progress-bar.js"), p = (i(f),
                e("./play-progress-bar.js")), v = (i(p), e("./tooltip-progress-bar.js")), g = (i(v), e("../../utils/fn.js")), y = n(g), m = e("../../utils/format-time.js"), _ = i(m), b = e("object.assign"), E = (i(b), function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "timeupdate", this.updateProgress), this.on(r, "ended", this.updateProgress), r.ready(y.bind(this, this.updateProgress)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && (this.tooltipProgressBar = this.addChild("TooltipProgressBar"))
                }

                return a(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": "progress bar"})
                }, t.prototype.updateProgress = function () {
                    if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                        this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                        var e = parseFloat(l.default.getComputedStyle(this.player().el()).width), t = parseFloat(l.default.getComputedStyle(this.tooltipProgressBar.tooltip).width), r = this.tooltipProgressBar.el().style;
                        r.maxWidth = Math.floor(e - t / 2) + "px", r.minWidth = Math.ceil(t / 2) + "px", r.right = "-" + t / 2 + "px"
                    }
                }, t.prototype.updateAriaAttributes = function (e) {
                    var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    e.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), e.setAttribute("aria-valuetext", _.default(t, this.player_.duration()))
                }, t.prototype.getPercent = function () {
                    var e = this.player_.currentTime() / this.player_.duration();
                    return e >= 1 ? 1 : e
                }, t.prototype.handleMouseDown = function (t) {
                    "playing" !== l.default.playerState && "seeked" !== l.default.playerState || (e.prototype.handleMouseDown.call(this, t), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause())
                }, t.prototype.handleMouseMove = function (e) {
                    var t = this.calculateDistance(e) * this.player_.duration();
                    t === this.player_.duration() && (t -= .1), this.player_.currentTime(t)
                }, t.prototype.handleMouseUp = function (t) {
                    e.prototype.handleMouseUp.call(this, t), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, t.prototype.stepForward = function () {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, t.prototype.stepBack = function () {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, t
            }(c.default));
            E.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, E.prototype.playerEvent = "timeupdate", h.default.registerComponent("SeekBar", E), r.default = E, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../slider/slider.js": 100,
            "../../utils/fn.js": 117,
            "../../utils/format-time.js": 118,
            "./load-progress-bar.js": 72,
            "./play-progress-bar.js": 74,
            "./tooltip-progress-bar.js": 77,
            "global/window": 8,
            "object.assign": 53
        }],
        77: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/fn.js"), c = n(u), d = e("../../utils/dom.js"), h = (n(d), e("../../utils/format-time.js")), f = i(h), p = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.updateDataAttr(), this.on(r, "timeupdate", this.updateDataAttr), r.ready(c.bind(this, this.updateDataAttr))
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this, "div", {
                        className: "vjs-tooltip-progress-bar vjs-slider-bar",
                        innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                    });
                    return this.tooltip = t.querySelector(".vjs-time-tooltip"), t
                }, t.prototype.updateDataAttr = function () {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), t = f.default(e, this.player_.duration());
                    this.el_.setAttribute("data-current-time", t), this.tooltip.innerHTML = t
                }, t
            }(l.default);
            l.default.registerComponent("TooltipProgressBar", p), r.default = p, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../utils/dom.js": 115,
            "../../utils/fn.js": 117,
            "../../utils/format-time.js": 118
        }],
        78: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function s(e) {
                var t = b.getEl(e);
                g = b.createEl("div", {className: "vjs-set-menu-bg"}), g.id = "setoverlay", t.appendChild(g), g.zIndex = "999", p();
                for (var r = ["autoBtn", "lBtn", "mBtn", "hBtn"], n = 0; n < w.length; n++) {
                    var i = r[n], o = b.createEl("div", {className: "vjs-set-menu hd " + i, id: i + n});
                    o.innerHTML = w[n].name, S.level === n && (o.style.backgroundColor = "#f01414", k[0] = i + n), w[n].disabled === !0 ? (o.style.cursor = "default", o.style.color = "#4d555d") : o.addEventListener("click", l), g.appendChild(o)
                }
                var a = b.createEl("div", {className: "vjs-set-menu html5Btn", id: "html5Btn"});
                a.innerHTML = "HTML", g.appendChild(a), a.addEventListener("click", l);
                var s = b.createEl("div", {className: "vjs-set-menu flashBtn", id: "flashBtn"});
                s.innerHTML = "Flash", S.model.flash === !1 ? (s.style.cursor = "default", s.style.color = "#4d555d") : s.addEventListener("click", l), g.appendChild(s);
                var u = b.createEl("div", {className: "vjs-set-menu confimBtn", id: "confimBtn"});
                g.appendChild(u), u.addEventListener("click", l);
                var c = b.createEl("div", {className: "vjs-set-menu cancelBtn", id: "cancelBtn"});
                g.appendChild(c), c.addEventListener("click", l);
                var d = b.createEl("div", {className: "vjs-set-menu closeBtn", id: "closeBtn"});
                g.appendChild(d), d.addEventListener("click", l)
            }

            function l() {
                var e = this.id;
                switch (e) {
                    case"autoBtn0":
                    case"lBtn1":
                    case"mBtn2":
                    case"hBtn3":
                        u(e);
                        break;
                    case"confimBtn":
                        d();
                        break;
                    case"cancelBtn":
                    case"closeBtn":
                        c();
                        break;
                    case"flashBtn":
                    case"html5Btn":
                        h(e)
                }
            }

            function u(e) {
                if (e !== k[k.length - 1]) {
                    var t = b.getEl(e);
                    t.style.backgroundColor = "#f01414", k.push(e);
                    var r = b.getEl(k[k.length - 2]);
                    r.style.backgroundColor = "#202427"
                }
            }

            function c() {
                if (k.length >= 2) {
                    var e = k[k.length - 1], t = b.getEl(e);
                    t.style.backgroundColor = "#202427";
                    var r = b.getEl(k[0]);
                    r.style.backgroundColor = "#f01414", k.length = 1
                }
                "flashBtn" === O && (f(), O = "html5Btn"), p()
            }

            function d() {
                var e = k[k.length - 1], t = e.charAt(e.length - 1);
                k.length >= 2 && (k[0] = e, k.length = 1);
                var r = {};
                r.level = Number(t), r.cdn = S.cdn, "flashBtn" === O ? (r.primary = "flash", f(), O = "html5Btn") : r.primary = "html5", T.default.switchPlayer(r), p()
            }

            function h(e) {
                if (e !== O) {
                    var t = b.getEl(e);
                    t.style.backgroundColor = "#f01414";
                    var r = b.getEl(O);
                    r.style.backgroundColor = "#202427", O = e
                }
            }

            function f() {
                var e = b.getEl("html5Btn");
                e.style.backgroundColor = "#f01414";
                var t = b.getEl("flashBtn");
                t.style.backgroundColor = "#202427"
            }

            function p() {
                g.style.visibility = "hidden"
            }

            function v() {
                g.style.visibility = "visible"
            }

            r.__esModule = !0;
            var g, y = e("../../component.js"), m = i(y), _ = e("../../utils/dom.js"), b = n(_), E = e("global/window"), T = i(E), w = void 0, k = ["autoBtn00"], O = "html5Btn", S = void 0, C = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "loadedmetadata", this.updateContent), S = n.playerOptions, w = n.playerOptions.levels, s(r.id())
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this, "div", {className: "vjs-setting-control vjs-set-control-button"});
                    return this.contentEl_ = b.createEl("div", {className: "vjs-set-button"}), t.appendChild(this.contentEl_), t
                }, t.prototype.updateContent = function () {
                    this.contentEl_.onclick = function () {
                        "visible" === g.style.visibility ? p() : v()
                    }
                }, t
            }(m.default);
            m.default.registerComponent("SetToggle", C), r.default = C, t.exports = r.default
        }, {"../../component.js": 65, "../../utils/dom.js": 115, "global/window": 8}],
        79: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/dom.js"), c = n(u), d = e("../../utils/format-time.js"), h = i(d), f = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "timeupdate", this.updateContent)
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this, "div", {className: "vjs-current-time vjs-time-control vjs-control"});
                    return this.contentEl_ = c.createEl("div", {
                        className: "vjs-current-time-display",
                        innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                    }, {"aria-live": "off"}), t.appendChild(this.contentEl_), t
                }, t.prototype.updateContent = function () {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), t = this.localize("Current Time"), r = h.default(e, this.player_.duration());
                    r !== this.formattedTime_ && (this.formattedTime_ = r, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> " + r)
                }, t
            }(l.default);
            l.default.registerComponent("CurrentTimeDisplay", f), r.default = f, t.exports = r.default
        }, {"../../component.js": 65, "../../utils/dom.js": 115, "../../utils/format-time.js": 118}],
        80: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/dom.js"), c = n(u), d = e("../../utils/format-time.js"), h = i(d), f = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "timeupdate", this.updateContent), this.on(r, "loadedmetadata", this.updateContent)
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this, "div", {className: "vjs-duration vjs-time-control vjs-control"});
                    return this.contentEl_ = c.createEl("div", {
                        className: "vjs-duration-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                    }, {"aria-live": "off"}), t.appendChild(this.contentEl_), t
                }, t.prototype.updateContent = function () {
                    var e = this.player_.duration();
                    if (e && this.duration_ !== e) {
                        this.duration_ = e;
                        var t = this.localize("Duration Time"), r = h.default(e);
                        this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> " + r
                    }
                }, t
            }(l.default);
            l.default.registerComponent("DurationDisplay", f), r.default = f, t.exports = r.default
        }, {"../../component.js": 65, "../../utils/dom.js": 115, "../../utils/format-time.js": 118}],
        81: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../component.js"), l = i(s), u = e("../../utils/dom.js"), c = n(u), d = e("../../utils/format-time.js"), h = i(d), f = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "timeupdate", this.updateContent), this.on(r, "endprev", this.updateContent), this.endpre = !1
                }

                return a(t, e), t.prototype.createEl = function () {
                    var t = e.prototype.createEl.call(this, "div", {className: "vjs-remaining-time vjs-time-control vjs-control"});
                    return this.contentEl_ = c.createEl("div", {
                        className: "vjs-remaining-time-display",
                        innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> 00:00"
                    }, {"aria-live": "off"}), t.appendChild(this.contentEl_), t
                }, t.prototype.updateContent = function () {
                    if (this.player_.duration()) {
                        var e = (this.localize("Remaining Time"), h.default(this.player_.remainingTime()));
                        e !== this.formattedTime_ && (this.formattedTime_ = e)
                    }
                    var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    this.contentEl_.innerHTML = h.default(t, this.player_.duration()) + " / " + h.default(this.player_.duration())
                }, t
            }(l.default);
            l.default.registerComponent("RemainingTimeDisplay", f), r.default = f, t.exports = r.default
        }, {"../../component.js": 65, "../../utils/dom.js": 115, "../../utils/format-time.js": 118}],
        82: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../../component.js"), s = n(a), l = function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-time-control vjs-time-divider",
                        innerHTML: "<div><span>/</span></div>"
                    })
                }, t
            }(s.default);
            s.default.registerComponent("TimeDivider", l), r.default = l, t.exports = r.default
        }, {"../../component.js": 65}],
        83: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../../slider/slider.js"), l = i(s), u = e("../../component.js"), c = i(u), d = e("../../utils/fn.js"), h = n(d), f = e("./volume-level.js"), p = (i(f), function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.on(r, "volumechange", this.updateARIAAttributes), r.ready(h.bind(this, this.updateARIAAttributes)), this.update()
                }

                return a(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {"aria-label": "volume level"})
                }, t.prototype.handleMouseMove = function (e) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(e))
                }, t.prototype.checkMuted = function () {
                    this.player_.muted() && this.player_.muted(!1)
                }, t.prototype.getPercent = function () {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, t.prototype.stepForward = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, t.prototype.stepBack = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, t.prototype.updateARIAAttributes = function () {
                    var e = (100 * this.player_.volume()).toFixed(2);
                    this.el_.setAttribute("aria-valuenow", e), this.el_.setAttribute("aria-valuetext", e + "%")
                }, t
            }(l.default));
            p.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, p.prototype.playerEvent = "volumechange", c.default.registerComponent("VolumeBar", p), r.default = p, t.exports = r.default
        }, {
            "../../component.js": 65,
            "../../slider/slider.js": 100,
            "../../utils/fn.js": 117,
            "./volume-level.js": 85
        }],
        84: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../../component.js"), s = n(a), l = e("./volume-bar.js"), u = (n(l), function (e) {
                function t(r, n) {
                    i(this, t), e.call(this, r, n), r.tech_ && r.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(r, "loadstart", function () {
                        r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    })
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control"})
                }, t
            }(s.default));
            u.prototype.options_ = {children: ["volumeBar"]}, s.default.registerComponent("VolumeControl", u), r.default = u, t.exports = r.default
        }, {"../../component.js": 65, "./volume-bar.js": 83}],
        85: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../../component.js"), s = n(a), l = function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-level",
                        innerHTML: '<span class="vjs-control-text"></span>'
                    })
                }, t
            }(s.default);
            s.default.registerComponent("VolumeLevel", l), r.default = l, t.exports = r.default
        }, {"../../component.js": 65}],
        86: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../utils/fn.js"), l = i(s), u = e("../component.js"), c = n(u), d = e("../popup/popup.js"), h = n(d), f = e("../popup/popup-button.js"), p = n(f), v = e("./mute-toggle.js"), g = n(v), y = e("./volume-control/volume-bar.js"), m = n(y), _ = function (e) {
                function t(r) {
                    function n() {
                        r.tech_ && r.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }

                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, t), void 0 === i.inline && (i.inline = !0), void 0 === i.vertical && (i.inline ? i.vertical = !1 : i.vertical = !0), i.volumeBar = i.volumeBar || {}, i.volumeBar.vertical = !!i.vertical, e.call(this, r, i), this.on(r, "volumechange", this.volumeUpdate), this.on(r, "loadstart", this.volumeUpdate), n.call(this), this.on(r, "loadstart", n), this.on(this.volumeBar, ["slideractive", "focus"], function () {
                        this.addClass("vjs-slider-active")
                    }), this.on(this.volumeBar, ["sliderinactive", "blur"], function () {
                        this.removeClass("vjs-slider-active")
                    }), this.on(this.volumeBar, ["focus"], function () {
                        this.addClass("vjs-lock-showing")
                    }), this.on(this.volumeBar, ["blur"], function () {
                        this.removeClass("vjs-lock-showing")
                    })
                }

                return a(t, e), t.prototype.buildCSSClass = function () {
                    var t = "";
                    return t = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + e.prototype.buildCSSClass.call(this) + " " + t
                }, t.prototype.createPopup = function () {
                    var e = new h.default(this.player_, {contentElType: "div"}), t = new m.default(this.player_, this.options_.volumeBar);
                    return e.addChild(t), this.menuContent = e, this.volumeBar = t, this.attachVolumeBarEvents(), e
                }, t.prototype.handleClick = function () {
                    g.default.prototype.handleClick.call(this), e.prototype.handleClick.call(this)
                }, t.prototype.attachVolumeBarEvents = function () {
                    this.menuContent.on(["mousedown", "touchdown"], l.bind(this, this.handleMouseDown))
                }, t.prototype.handleMouseDown = function (e) {
                    this.on(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                }, t.prototype.handleMouseUp = function (e) {
                    this.off(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                }, t
            }(p.default);
            _.prototype.volumeUpdate = g.default.prototype.update, _.prototype.controlText_ = "Mute", c.default.registerComponent("VolumeMenuButton", _), r.default = _, t.exports = r.default
        }, {
            "../component.js": 65,
            "../popup/popup-button.js": 97,
            "../popup/popup.js": 98,
            "../utils/fn.js": 117,
            "./mute-toggle.js": 68,
            "./volume-control/volume-bar.js": 83
        }],
        87: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            r.__esModule = !0;
            var i = e("./utils/events.js"), o = n(i), a = function () {
            };
            a.prototype.allowedEvents_ = {}, a.prototype.on = function (e, t) {
                var r = this.addEventListener;
                this.addEventListener = Function.prototype, o.on(this, e, t), this.addEventListener = r
            }, a.prototype.addEventListener = a.prototype.on, a.prototype.off = function (e, t) {
                o.off(this, e, t)
            }, a.prototype.removeEventListener = a.prototype.off, a.prototype.one = function (e, t) {
                o.one(this, e, t)
            }, a.prototype.trigger = function (e) {
                var t = e.type || e;
                "string" == typeof e && (e = {type: t}), e = o.fixEvent(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), o.trigger(this, e)
            }, a.prototype.dispatchEvent = a.prototype.trigger, r.default = a, t.exports = r.default
        }, {"./utils/events.js": 116}],
        88: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("./utils/log"), o = n(i), a = function (e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (e.super_ = t)
            }, s = function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = function () {
                    e.apply(this, arguments)
                }, n = {};
                "object" == typeof t ? ("function" == typeof t.init && (o.default.warn("Constructor logic via init() is deprecated; please use constructor() instead."), t.constructor = t.init), t.constructor !== Object.prototype.constructor && (r = t.constructor), n = t) : "function" == typeof t && (r = t), a(r, e);
                for (var i in n)n.hasOwnProperty(i) && (r.prototype[i] = n[i]);
                return r
            };
            r.default = s, t.exports = r.default
        }, {"./utils/log": 120}],
        89: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            for (var i = e("global/document"), o = n(i), a = {}, s = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], l = s[0], u = void 0, c = 0; c < s.length; c++)if (s[c][1]in o.default) {
                u = s[c];
                break
            }
            if (u)for (var c = 0; c < u.length; c++)a[l[c]] = u[c];
            r.default = a, t.exports = r.default
        }, {"global/document": 7}],
        90: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("./component"), s = n(a), l = function (e) {
                function t() {
                    i(this, t), e.apply(this, arguments)
                }

                return o(t, e), t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"})
                }, t
            }(s.default);
            s.default.registerComponent("LoadingSpinner", l), r.default = l, t.exports = r.default
        }, {"./component": 65}],
        91: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("object.assign"), o = n(i), a = function e(t) {
                "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" == typeof t && o.default(this, t), this.message || (this.message = e.defaultMessages[this.code] || "")
            };
            a.prototype.code = 0, a.prototype.message = "", a.prototype.status = null, a.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], a.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var s = 0; s < a.errorTypes.length; s++)a[a.errorTypes[s]] = s, a.prototype[a.errorTypes[s]] = s;
            r.default = a, t.exports = r.default
        }, {"object.assign": 53}],
        92: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../clickable-component.js"), l = i(s), u = e("../component.js"), c = i(u), d = e("./menu.js"), h = i(d), f = e("../utils/dom.js"), p = n(f), v = e("../utils/fn.js"), g = n(v), y = e("../utils/to-title-case.js"), m = i(y), _ = function (e) {
                function t(r) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, t), e.call(this, r, n), this.update(), this.enabled_ = !0, this.el_.setAttribute("aria-haspopup", "true"), this.el_.setAttribute("role", "menuitem"), this.on("keydown", this.handleSubmenuKeyPress)
                }

                return a(t, e), t.prototype.update = function () {
                    var e = this.createMenu();
                    this.menu && this.removeChild(this.menu), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                }, t.prototype.createMenu = function () {
                    var e = new h.default(this.player_);
                    if (this.options_.title) {
                        var t = p.createEl("li", {
                            className: "vjs-menu-title",
                            innerHTML: m.default(this.options_.title),
                            tabIndex: -1
                        });
                        e.children_.unshift(t), p.insertElFirst(t, e.contentEl())
                    }
                    if (this.items = this.createItems(), this.items)for (var r = 0; r < this.items.length; r++)e.addItem(this.items[r]);
                    return e
                }, t.prototype.createItems = function () {
                }, t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                }, t.prototype.buildCSSClass = function () {
                    var t = "vjs-menu-button";
                    return t += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                }, t.prototype.handleClick = function () {
                    this.one("mouseout", g.bind(this, function () {
                        this.menu.unlockShowing(), this.el_.blur()
                    })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                }, t.prototype.handleKeyPress = function (t) {
                    27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault()) : 38 === t.which || 40 === t.which ? this.buttonPressed_ || (this.pressButton(), t.preventDefault()) : e.prototype.handleKeyPress.call(this, t)
                }, t.prototype.handleSubmenuKeyPress = function (e) {
                    27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault())
                }, t.prototype.pressButton = function () {
                    this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                }, t.prototype.unpressButton = function () {
                    this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                }, t.prototype.disable = function () {
                    return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, e.prototype.disable.call(this)
                }, t.prototype.enable = function () {
                    return this.enabled_ = !0, e.prototype.enable.call(this)
                }, t
            }(l.default);
            c.default.registerComponent("MenuButton", _), r.default = _, t.exports = r.default
        }, {
            "../clickable-component.js": 64,
            "../component.js": 65,
            "../utils/dom.js": 115,
            "../utils/fn.js": 117,
            "../utils/to-title-case.js": 124,
            "./menu.js": 94
        }],
        93: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../clickable-component.js"), s = n(a), l = e("../component.js"), u = n(l), c = e("object.assign"), d = n(c), h = function (e) {
                function t(r, n) {
                    i(this, t), e.call(this, r, n), this.selectable = n.selectable, this.selected(n.selected), this.selectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitem")
                }

                return o(t, e), t.prototype.createEl = function (t, r, n) {
                    return e.prototype.createEl.call(this, "li", d.default({
                        className: "vjs-menu-item",
                        innerHTML: this.localize(this.options_.label),
                        tabIndex: -1
                    }, r), n)
                }, t.prototype.handleClick = function () {
                    this.selected(!0)
                }, t.prototype.selected = function (e) {
                    this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                }, t
            }(s.default);
            u.default.registerComponent("MenuItem", h), r.default = h, t.exports = r.default
        }, {"../clickable-component.js": 64, "../component.js": 65, "object.assign": 53}],
        94: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../component.js"), l = i(s), u = e("../utils/dom.js"), c = n(u), d = e("../utils/fn.js"), h = n(d), f = e("../utils/events.js"), p = n(f), v = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.focusedChild_ = -1, this.on("keydown", this.handleKeyPress)
                }

                return a(t, e), t.prototype.addItem = function (e) {
                    this.addChild(e), e.on("click", h.bind(this, function () {
                        this.unlockShowing()
                    }))
                }, t.prototype.createEl = function () {
                    var t = this.options_.contentElType || "ul";
                    this.contentEl_ = c.createEl(t, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
                    var r = e.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                    return r.id = "vjsMenu", r.setAttribute("role", "presentation"), r.appendChild(this.contentEl_), p.on(r, "click", function (e) {
                        e.preventDefault(), e.stopImmediatePropagation()
                    }), r
                }, t.prototype.handleKeyPress = function (e) {
                    37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
                }, t.prototype.stepForward = function () {
                    var e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
                }, t.prototype.stepBack = function () {
                    var e = 0;
                    void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
                }, t.prototype.focus = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0], t = this.children().slice(), r = t.length && t[0].className && /vjs-menu-title/.test(t[0].className);
                    r && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
                }, t
            }(l.default);
            l.default.registerComponent("Menu", v), r.default = v, t.exports = r.default
        }, {"../component.js": 65, "../utils/dom.js": 115, "../utils/events.js": 116, "../utils/fn.js": 117}],
        95: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("./component.js"), l = i(s), u = e("global/document"), c = i(u), d = e("global/window"), h = i(d), f = e("./utils/events.js"), p = n(f), v = e("./utils/dom.js"), g = n(v), y = e("./utils/fn.js"), m = n(y), _ = e("./utils/guid.js"), b = n(_), E = e("./utils/browser.js"), T = n(E), w = e("./utils/log.js"), k = i(w), O = e("./utils/to-title-case.js"), S = i(O), C = e("./utils/time-ranges.js"), R = e("./utils/buffer.js"), A = e("./utils/stylesheet.js"), j = n(A), L = e("./fullscreen-api.js"), x = i(L), D = e("./media-error.js"), P = i(D), M = e("safe-json-parse/tuple"), I = i(M), N = e("object.assign"), F = i(N), B = e("./utils/merge-options.js"), U = i(B), G = e("./tech/loader.js"), H = (i(G), e("./loading-spinner.js")), V = (i(H), e("./big-play-button.js")), W = (i(V), e("./control-bar/control-bar.js")), K = (i(W), e("./tech/tech.js")), q = i(K), Y = e("./tech/html5.js"), X = (i(Y), function (e) {
                function t(r, n, i) {
                    var a = this;
                    if (o(this, t), r.id = r.id || "vjs_video_" + b.newGUID(), n = F.default(t.getTagSettings(r), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, e.call(this, null, n, i), !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                    this.tag = r, this.tagAttributes = r && g.getElAttributes(r), this.language(this.options_.language), n.languages ? !function () {
                        var e = {};
                        Object.getOwnPropertyNames(n.languages).forEach(function (t) {
                            e[t.toLowerCase()] = n.languages[t]
                        }), a.languages_ = e
                    }() : this.languages_ = t.prototype.options_.languages, this.cache_ = {}, this.poster_ = n.poster || "", this.controls_ = !!n.controls, h.default.playerState = "init", r.controls = !1, this.scrubbing_ = !1, this.el_ = this.createEl();
                    var s = U.default(this.options_);
                    n.plugins && !function () {
                        var e = n.plugins;
                        Object.getOwnPropertyNames(e).forEach(function (t) {
                            "function" == typeof this[t] ? this[t](e[t]) : k.default.error("Unable to find plugin:", t)
                        }, a)
                    }(), this.options_.playerOptions = s, this.initChildren(), this.isAudio("audio" === r.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", "audio player") : this.el_.setAttribute("aria-label", "video player"), this.isAudio() && this.addClass("vjs-audio"), this.flexNotSupported_() && this.addClass("vjs-no-flex"), T.IS_IOS || this.addClass("vjs-workinghover"), t.players[this.id_] = this, this.userActive(!0), this.reportUserActivity(), this.listenForUserActivity_(), this.on("fullscreenchange", this.handleFullscreenChange_), this.on("stageclick", this.handleStageClick_), this.playTime = 0
                }

                return a(t, e), t.prototype.dispose = function () {
                    this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), e.prototype.dispose.call(this)
                }, t.prototype.createEl = function () {
                    var t = this.el_ = e.prototype.createEl.call(this, "div"), r = this.tag;
                    r.removeAttribute("width"), r.removeAttribute("height");
                    var n = g.getElAttributes(r);
                    if (Object.getOwnPropertyNames(n).forEach(function (e) {
                            "class" === e ? t.className = n[e] : t.setAttribute(e, n[e])
                        }), r.playerId = r.id, r.id += "_html5_api", r.className = "vjs-tech", r.player = t.player = this, this.addClass("vjs-paused"), h.default.VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                        this.styleEl_ = j.createStyleElement("vjs-styles-dimensions");
                        var i = g.$(".vjs-styles-defaults"), o = g.$("head");
                        o.insertBefore(this.styleEl_, i ? i.nextSibling : o.firstChild)
                    }
                    this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                    for (var a = r.getElementsByTagName("a"), s = 0; s < a.length; s++) {
                        var l = a.item(s);
                        l.setAttribute("hidden", "hidden")
                    }
                    return r.initNetworkState_ = r.networkState, r.parentNode && r.parentNode.insertBefore(t, r), g.insertElFirst(r, t), this.children_.unshift(r), this.el_ = t, t
                }, t.prototype.width = function (e) {
                    return this.dimension("width", e)
                }, t.prototype.height = function (e) {
                    return this.dimension("height", e)
                }, t.prototype.dimension = function (e, t) {
                    var r = e + "_";
                    if (void 0 === t)return this[r] || 0;
                    if ("" === t)this[r] = void 0; else {
                        var n = parseFloat(t);
                        if (isNaN(n))return k.default.error('Improper value "' + t + '" supplied for for ' + e), this;
                        this[r] = n
                    }
                    return this.updateStyleEl_(), this
                }, t.prototype.fluid = function (e) {
                    return void 0 === e ? !!this.fluid_ : (this.fluid_ = !!e, void(e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid")))
                }, t.prototype.aspectRatio = function (e) {
                    if (void 0 === e)return this.aspectRatio_;
                    if (!/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                    this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                }, t.prototype.updateStyleEl_ = function () {
                    if (h.default.VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                        var e = "number" == typeof this.width_ ? this.width_ : this.options_.width, t = "number" == typeof this.height_ ? this.height_ : this.options_.height, r = this.tech_ && this.tech_.el();
                        return void(r && (e >= 0 && (r.width = e), t >= 0 && (r.height = t)))
                    }
                    var n = void 0, i = void 0, o = void 0, a = void 0;
                    o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                    var s = o.split(":"), l = s[1] / s[0];
                    n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, i = void 0 !== this.height_ ? this.height_ : n * l, a = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(a), j.setTextContent(this.styleEl_, "\n      ." + a + " {\n        width: " + n + "px;\n        height: " + i + "px;\n      }\n\n      ." + a + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                }, t.prototype.loadTech_ = function (e, t) {
                    this.tech_ && this.unloadTech_(), "Html5" !== e && this.tag && (q.default.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = e, this.isReady_ = !1;
                    var r = F.default({
                        nativeControlsForTouch: this.options_.nativeControlsForTouch,
                        source: t,
                        playerId: this.id(),
                        techId: this.id() + "_" + e + "_api",
                        textTracks: this.textTracks_,
                        autoplay: this.options_.autoplay,
                        preload: this.options_.preload,
                        loop: this.options_.loop,
                        muted: this.options_.muted,
                        poster: this.poster(),
                        language: this.language(),
                        "vtt.js": this.options_["vtt.js"]
                    }, this.options_[e.toLowerCase()]);
                    this.tag && (r.tag = this.tag), t && (this.currentType_ = t.type, t.src === this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.src = t.src);
                    var n = q.default.getTech(e);
                    n || (n = l.default.getComponent(e)), this.tech_ = new n(r), this.tech_.ready(m.bind(this, this.handleTechReady_), !0), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "progress", this.handleTechProgress_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "suspend", this.handleTechSuspend_), this.on(this.tech_, "abort", this.handleTechAbort_), this.on(this.tech_, "emptied", this.handleTechEmptied_), this.on(this.tech_, "stalled", this.handleTechStalled_), this.on(this.tech_, "loadedmetadata", this.handleTechLoadedMetaData_), this.on(this.tech_, "loadeddata", this.handleTechLoadedData_), this.on(this.tech_, "timeupdate", this.handleTechTimeUpdate_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.on(this.tech_, "volumechange", this.handleTechVolumeChange_), this.on(this.tech_, "texttrackchange", this.handleTechTextTrackChange_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "endprev", this.handleTechEndPrev_), this.usingNativeControls(this.techGet_("controls")), this.showBigBtn(), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === e && this.tag || g.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                }, t.prototype.unloadTech_ = function () {
                    this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                }, t.prototype.tech = function (e) {
                    if (e && e.IWillNotUseThisInPlugins)return this.tech_;
                    var t = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                    throw h.default.alert(t), new Error(t)
                }, t.prototype.addTechControlsListeners_ = function () {
                    this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                }, t.prototype.removeTechControlsListeners_ = function () {
                    this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                }, t.prototype.handleTechReady_ = function () {
                    this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), this.src() && this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                }, t.prototype.handleTechLoadStart_ = function () {
                    this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                }, t.prototype.hasStarted = function (e) {
                    return void 0 !== e ? (this.hasStarted_ !== e && (this.hasStarted_ = e, e ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                }, t.prototype.handleTechPlay_ = function () {
                    this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play"), h.default.playerState = "playing", this.clickFlag = "123"
                }, t.prototype.showBigBtn = function () {
                    this.createChapter()
                }, t.prototype.showBigIcon = function (e) {
                }, t.prototype.createChapter = function () {
                    if (this.isTitle() !== !1) {
                        var e = g.createEl("div", {className: "chaptertitle", id: "chapterId"}), t = g.getEl(this.id());
                        e.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + this.options_.playerOptions.title, t.appendChild(e), e.style.visibility = "hidden"
                    }
                }, t.prototype.hideChapter = function () {
                    if (this.isTitle() !== !1) {
                        var e = g.getEl("chapterId");
                        e.style.visibility = "hidden"
                    }
                }, t.prototype.showChapter = function () {
                    if (this.isTitle() !== !1) {
                        var e = g.getEl("chapterId");
                        e.style.visibility = "visible"
                    }
                }, t.prototype.isTitle = function () {
                    var e = this.options_.playerOptions.title;
                    return "" !== e && void 0 !== e
                }, t.prototype.handleTechWaiting_ = function () {
                    var e = this;
                    this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                        return e.removeClass("vjs-waiting")
                    }), h.default.playerState = "waiting"
                }, t.prototype.handleTechCanPlay_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplay")
                }, t.prototype.handleTechCanPlayThrough_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                }, t.prototype.handleTechPlaying_ = function () {
                    this.removeClass("vjs-waiting"), this.trigger("playing"), h.default.playerState = "playing"
                }, t.prototype.handleTechSeeking_ = function () {
                    this.addClass("vjs-seeking"), this.trigger("seeking"), h.default.playerState = "seeking"
                }, t.prototype.handleTechSeeked_ = function () {
                    this.removeClass("vjs-seeking"), this.trigger("seeked"), h.default.playerState = "seeked"
                }, t.prototype.handleTechFirstPlay_ = function () {
                    this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                }, t.prototype.handleTechPause_ = function () {
                    this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause"), h.default.playerState = "playing", this.clickFlag = "123"
                }, t.prototype.handleTechProgress_ = function () {
                    this.trigger("progress")
                }, t.prototype.handleTechEnded_ = function () {
                    this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                }, t.prototype.handleTechEndPrev_ = function () {
                    this.trigger("endprev")
                }, t.prototype.handleTechDurationChange_ = function () {
                    this.duration(this.techGet_("duration"))
                }, t.prototype.handleTechClick_ = function (e) {
                    0 === e.button && (this.clickFlag = "click", "playing" !== h.default.playerState && "seeked" !== h.default.playerState || this.controls() && (this.paused() ? this.play() : this.pause()))
                }, t.prototype.handleTechTap_ = function () {
                    this.userActive(!this.userActive())
                }, t.prototype.handleTechTouchStart_ = function () {
                    this.userWasActive = this.userActive()
                }, t.prototype.handleTechTouchMove_ = function () {
                    this.userWasActive && this.reportUserActivity()
                }, t.prototype.handleTechTouchEnd_ = function (e) {
                    e.preventDefault()
                }, t.prototype.handleFullscreenChange_ = function () {
                    this.isFullscreen() ? (this.showChapter(), this.addClass("vjs-fullscreen")) : (this.hideChapter(), this.removeClass("vjs-fullscreen"))
                }, t.prototype.handleStageClick_ = function () {
                    this.reportUserActivity()
                }, t.prototype.handleTechFullscreenChange_ = function (e, t) {
                    t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
                }, t.prototype.controlbarHide = function () {
                }, t.prototype.controlbarShow = function () {
                }, t.prototype.handleTechError_ = function () {
                    var e = this.tech_.error();
                    this.error(e && e.code)
                }, t.prototype.handleTechSuspend_ = function () {
                    this.trigger("suspend")
                }, t.prototype.handleTechAbort_ = function () {
                    this.trigger("abort")
                }, t.prototype.handleTechEmptied_ = function () {
                    this.trigger("emptied")
                }, t.prototype.handleTechStalled_ = function () {
                    this.trigger("stalled")
                }, t.prototype.handleTechLoadedMetaData_ = function () {
                    this.trigger("loadedmetadata")
                }, t.prototype.handleTechLoadedData_ = function () {
                    this.trigger("loadeddata")
                }, t.prototype.handleTechTimeUpdate_ = function () {
                    this.playTime++, 3 === this.playTime && this.trigger("endprev"), this.trigger("timeupdate")
                }, t.prototype.handleTechRateChange_ = function () {
                    this.trigger("ratechange")
                }, t.prototype.handleTechVolumeChange_ = function () {
                    this.trigger("volumechange")
                }, t.prototype.handleTechTextTrackChange_ = function () {
                    this.trigger("texttrackchange")
                }, t.prototype.getCache = function () {
                    return this.cache_
                }, t.prototype.techCall_ = function (e, t) {
                    if (this.tech_ && !this.tech_.isReady_)this.tech_.ready(function () {
                        this[e](t)
                    }, !0); else try {
                        this.tech_[e](t)
                    } catch (e) {
                        throw k.default(e), e
                    }
                }, t.prototype.techGet_ = function (e) {
                    if (this.tech_ && this.tech_.isReady_)try {
                        return this.tech_[e]()
                    } catch (t) {
                        void 0 === this.tech_[e] ? k.default("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t) : "TypeError" === t.name ? (k.default("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1) : k.default(t)
                    }
                }, t.prototype.play = function () {
                    return this.techCall_("play"), this
                }, t.prototype.pause = function () {
                    return this.techCall_("pause"), this
                }, t.prototype.paused = function () {
                    return this.techGet_("paused") !== !1
                }, t.prototype.scrubbing = function (e) {
                    return void 0 !== e ? (this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                }, t.prototype.currentTime = function (e) {
                    return void 0 !== e ? (this.techCall_("setCurrentTime", e), this) : this.cache_.currentTime = this.techGet_("currentTime") || 0
                }, t.prototype.duration = function (e) {
                    return void 0 === e ? this.cache_.duration || 0 : (e = parseFloat(e) || 0, e < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                }, t.prototype.remainingTime = function () {
                    return this.duration() - this.currentTime()
                }, t.prototype.buffered = function e() {
                    var e = this.techGet_("buffered");
                    return e && e.length || (e = C.createTimeRange(0, 0)), e
                }, t.prototype.bufferedPercent = function () {
                    return R.bufferedPercent(this.buffered(), this.duration())
                }, t.prototype.bufferedEnd = function () {
                    var e = this.buffered(), t = this.duration(), r = e.end(e.length - 1);
                    return r > t && (r = t), r
                }, t.prototype.volume = function (e) {
                    var t = void 0;
                    return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), this) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                }, t.prototype.muted = function (e) {
                    return void 0 !== e ? (this.techCall_("setMuted", e), this) : this.techGet_("muted") || !1
                }, t.prototype.supportsFullScreen = function () {
                    return this.techGet_("supportsFullScreen") || !1
                }, t.prototype.isFullscreen = function (e) {
                    return void 0 !== e ? (this.isFullscreen_ = !!e, this) : !!this.isFullscreen_
                }, t.prototype.requestFullscreen = function () {
                    var e = x.default;
                    return this.isFullscreen(!0), e.requestFullscreen ? (p.on(c.default, e.fullscreenchange, m.bind(this, function t(r) {
                        this.isFullscreen(c.default[e.fullscreenElement]), this.isFullscreen() === !1 && p.off(c.default, e.fullscreenchange, t), this.trigger("fullscreenchange")
                    })), this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                }, t.prototype.exitFullscreen = function () {
                    var e = x.default;
                    return this.isFullscreen(!1), e.requestFullscreen ? c.default[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                }, t.prototype.enterFullWindow = function () {
                    this.isFullWindow = !0, this.docOrigOverflow = c.default.documentElement.style.overflow, c.default.documentElement.style.overflow = "hidden", g.addElClass(c.default.body, "vjs-full-window"), this.trigger("enterFullWindow")
                }, t.prototype.fullWindowOnEscKey = function (e) {
                    if (this.ended() !== !0) {
                        var t = e.keyCode;
                        switch (t) {
                            case 27:
                                this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow();
                                break;
                            case 32:
                            case 13:
                                this.paused() ? this.play() : this.pause();
                                break;
                            case 37:
                                this.currentTime(this.currentTime() - 5);
                                break;
                            case 39:
                                this.currentTime(this.currentTime() + 5);
                                break;
                            case 38:
                                this.volume(this.volume() + .1);
                                break;
                            case 40:
                                this.volume(this.volume() - .1)
                        }
                    }
                }, t.prototype.exitFullWindow = function () {
                    this.isFullWindow = !1, p.off(c.default, "keydown", this.fullWindowOnEscKey), c.default.documentElement.style.overflow = this.docOrigOverflow, g.removeElClass(c.default.body, "vjs-full-window"), this.trigger("exitFullWindow")
                }, t.prototype.canPlayType = function (e) {
                    for (var t = void 0, r = 0, n = this.options_.techOrder; r < n.length; r++) {
                        var i = S.default(n[r]), o = q.default.getTech(i);
                        if (o || (o = l.default.getComponent(i)), o) {
                            if (o.isSupported() && (t = o.canPlayType(e)))return t
                        } else k.default.error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.')
                    }
                    return ""
                }, t.prototype.selectSource = function (e) {
                    var t = this.options_.techOrder.map(S.default).map(function (e) {
                        return [e, q.default.getTech(e) || l.default.getComponent(e)]
                    }).filter(function (e) {
                        var t = e[0], r = e[1];
                        return r ? r.isSupported() : (k.default.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                    }), r = function (e, t, r) {
                        var n = void 0;
                        return e.some(function (e) {
                            return t.some(function (t) {
                                if (n = r(e, t))return !0
                            })
                        }), n
                    }, n = void 0, i = function (e) {
                        return function (t, r) {
                            return e(r, t)
                        }
                    }, o = function (e, t) {
                        var r = e[0], n = e[1];
                        if (n.canPlaySource(t))return {source: t, tech: r}
                    };
                    return n = this.options_.sourceOrder ? r(e, t, i(o)) : r(t, e, o), n || !1
                }, t.prototype.src = function (e) {
                    if (void 0 === e)return this.techGet_("src");
                    var t = q.default.getTech(this.techName_);
                    return t || (t = l.default.getComponent(this.techName_)), Array.isArray(e) ? this.sourceList_(e) : "string" == typeof e ? this.src({src: e}) : e instanceof Object && (e.type && !t.canPlaySource(e) ? this.sourceList_([e]) : (this.cache_.src = e.src, this.currentType_ = e.type || "", this.ready(function () {
                        t.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                    }, !0))), this
                }, t.prototype.sourceList_ = function (e) {
                    var t = this.selectSource(e);
                    t ? t.tech === this.techName_ ? this.src(t.source) : this.loadTech_(t.tech, t.source) : (this.setTimeout(function () {
                        this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                    }, 0), this.triggerReady())
                }, t.prototype.load = function () {
                    return this.techCall_("load"), this
                }, t.prototype.reset = function () {
                    return this.loadTech_(S.default(this.options_.techOrder[0]), null), this.techCall_("reset"), this
                }, t.prototype.currentSrc = function () {
                    return this.techGet_("currentSrc") || this.cache_.src || ""
                }, t.prototype.currentType = function () {
                    return this.currentType_ || ""
                }, t.prototype.preload = function (e) {
                    return void 0 !== e ? (this.techCall_("setPreload", e), this.options_.preload = e, this) : this.techGet_("preload")
                }, t.prototype.autoplay = function (e) {
                    return void 0 !== e ? (this.techCall_("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet_("autoplay", e)
                }, t.prototype.loop = function (e) {
                    return void 0 !== e ? (this.techCall_("setLoop", e), this.options_.loop = e, this) : this.techGet_("loop")
                }, t.prototype.poster = function (e) {
                    return void 0 === e ? this.poster_ : (e || (e = ""), this.poster_ = e, this.techCall_("setPoster", e), this.trigger("posterchange"), this)
                }, t.prototype.handleTechPosterChange_ = function () {
                    !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                }, t.prototype.controls = function (e) {
                    return void 0 !== e ? (e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), e ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                }, t.prototype.usingNativeControls = function (e) {
                    return void 0 !== e ? (e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, e ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                }, t.prototype.error = function (e) {
                    return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), this) : (e instanceof P.default ? this.error_ = e : this.error_ = new P.default(e), k.default.error("(CODE:" + this.error_.code + " " + P.default.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                }, t.prototype.ended = function () {
                    return this.techGet_("ended")
                }, t.prototype.endprev = function () {
                    return this.techGet_("endprev")
                }, t.prototype.seeking = function () {
                    return this.techGet_("seeking")
                }, t.prototype.seekable = function () {
                    return this.techGet_("seekable")
                }, t.prototype.reportUserActivity = function (e) {
                    this.userActivity_ = !0
                }, t.prototype.userActive = function (e) {
                    return void 0 !== e ? (e = !!e, e !== this.userActive_ && (this.userActive_ = e, e ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive"), this.isFullscreen() === !0 && this.showChapter()) : this.isFullscreen() === !0 && (this.userActivity_ = !1, this.paused() === !1 && this.hideChapter(), this.tech_ && this.tech_.one("mousemove", function (e) {
                        e.stopPropagation(), e.preventDefault()
                    }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                },t.prototype.listenForUserActivity_ = function () {
                    var e = void 0, t = void 0, r = void 0, n = m.bind(this, this.reportUserActivity), i = function (e) {
                        e.screenX === t && e.screenY === r || (t = e.screenX, r = e.screenY, n())
                    }, o = function () {
                        n(), this.clearInterval(e), e = this.setInterval(n, 250)
                    }, a = function (t) {
                        n(), this.clearInterval(e)
                    };
                    this.on("mousedown", o), this.on("mousemove", i), this.on("mouseup", a), this.on("keydown", n), this.on("keyup", n);
                    var s = void 0;
                    this.setInterval(function () {
                        if (this.userActivity_) {
                            this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s);
                            var e = this.options_.inactivityTimeout;
                            e > 0 && (s = this.setTimeout(function () {
                                this.userActivity_ || this.userActive(!1)
                            }, e))
                        }
                    }, 250)
                },t.prototype.playbackRate = function (e) {
                    return void 0 !== e ? (this.techCall_("setPlaybackRate", e), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : e
                },t.prototype.isAudio = function (e) {
                    return void 0 !== e ? (this.isAudio_ = !!e, this) : !!this.isAudio_
                },t.prototype.networkState = function () {
                    return this.techGet_("networkState")
                },t.prototype.readyState = function () {
                    return this.techGet_("readyState")
                },t.prototype.textTracks = function () {
                    return this.tech_ && this.tech_.textTracks()
                },t.prototype.remoteTextTracks = function () {
                    return this.tech_ && this.tech_.remoteTextTracks()
                },t.prototype.remoteTextTrackEls = function () {
                    return this.tech_ && this.tech_.remoteTextTrackEls()
                },t.prototype.addTextTrack = function (e, t, r) {
                    return this.tech_ && this.tech_.addTextTrack(e, t, r)
                },t.prototype.addRemoteTextTrack = function (e) {
                    return this.tech_ && this.tech_.addRemoteTextTrack(e)
                },t.prototype.removeRemoteTextTrack = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = e.track, r = void 0 === t ? arguments[0] : t;
                    this.tech_ && this.tech_.removeRemoteTextTrack(r)
                },t.prototype.videoWidth = function () {
                    return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                },t.prototype.videoHeight = function () {
                    return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                },t.prototype.language = function (e) {
                    return void 0 === e ? this.language_ : (this.language_ = ("" + e).toLowerCase(), this)
                },t.prototype.languages = function () {
                    return U.default(t.prototype.options_.languages, this.languages_)
                },t.prototype.toJSON = function () {
                    var e = U.default(this.options_), t = e.tracks;
                    e.tracks = [];
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n = U.default(n), n.player = void 0, e.tracks[r] = n
                    }
                    return e
                },t.getTagSettings = function (e) {
                    var t = {sources: [], tracks: []}, r = g.getElAttributes(e), n = r["data-setup"];
                    if (null !== n) {
                        var i = I.default(n || "{}"), o = i[0], a = i[1];
                        o && k.default.error(o), F.default(r, a)
                    }
                    if (F.default(t, r), e.hasChildNodes())for (var s = e.childNodes, l = 0, u = s.length; l < u; l++) {
                        var c = s[l], d = c.nodeName.toLowerCase();
                        "source" === d ? t.sources.push(g.getElAttributes(c)) : "track" === d && t.tracks.push(g.getElAttributes(c))
                    }
                    return t
                },t
            }(l.default));
            X.players = {};
            var z = h.default.navigator;
            X.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "textTrackDisplay", "loadingSpinner", "controlBar", "errorDisplay", "textTrackSettings"],
                language: c.default.getElementsByTagName("html")[0].getAttribute("lang") || z.languages && z.languages[0] || z.userLanguage || z.language || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, X.prototype.handleLoadedMetaData_, X.prototype.handleLoadedData_, X.prototype.handleUserActive_, X.prototype.handleUserInactive_, X.prototype.handleTimeUpdate_, X.prototype.handleTechEnded_, X.prototype.handleTechEndprev_, X.prototype.handleVolumeChange_, X.prototype.handleError_, X.prototype.flexNotSupported_ = function () {
                var e = c.default.createElement("i");
                return !("flexBasis"in e.style || "webkitFlexBasis"in e.style || "mozFlexBasis"in e.style || "msFlexBasis"in e.style || "msFlexOrder"in e.style)
            }, l.default.registerComponent("Player", X), r.default = X, t.exports = r.default
        }, {
            "./big-play-button.js": 62,
            "./component.js": 65,
            "./control-bar/control-bar.js": 66,
            "./fullscreen-api.js": 89,
            "./loading-spinner.js": 90,
            "./media-error.js": 91,
            "./tech/html5.js": 103,
            "./tech/loader.js": 104,
            "./tech/tech.js": 105,
            "./utils/browser.js": 112,
            "./utils/buffer.js": 113,
            "./utils/dom.js": 115,
            "./utils/events.js": 116,
            "./utils/fn.js": 117,
            "./utils/guid.js": 119,
            "./utils/log.js": 120,
            "./utils/merge-options.js": 121,
            "./utils/stylesheet.js": 122,
            "./utils/time-ranges.js": 123,
            "./utils/to-title-case.js": 124,
            "global/document": 7,
            "global/window": 8,
            "object.assign": 53,
            "safe-json-parse/tuple": 57
        }],
        96: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("./player.js"), o = n(i), a = function (e, t) {
                o.default.prototype[e] = t
            };
            r.default = a, t.exports = r.default
        }, {"./player.js": 95}],
        97: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../clickable-component.js"), l = i(s), u = e("../component.js"), c = i(u), d = e("./popup.js"), h = (i(d), e("../utils/dom.js")), f = (n(h), e("../utils/fn.js")), p = (n(f), e("../utils/to-title-case.js")), v = (i(p), function (e) {
                function t(r) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, t), e.call(this, r, n), this.update()
                }

                return a(t, e), t.prototype.update = function () {
                    var e = this.createPopup();
                    this.popup && this.removeChild(this.popup), this.popup = e, this.addChild(e), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                }, t.prototype.createPopup = function () {
                }, t.prototype.createEl = function () {
                    return e.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                }, t.prototype.buildCSSClass = function () {
                    var t = "vjs-menu-button";
                    return t += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                }, t
            }(l.default));
            c.default.registerComponent("PopupButton", v), r.default = v, t.exports = r.default
        }, {
            "../clickable-component.js": 64,
            "../component.js": 65,
            "../utils/dom.js": 115,
            "../utils/fn.js": 117,
            "../utils/to-title-case.js": 124,
            "./popup.js": 98
        }],
        98: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../component.js"), l = i(s), u = e("../utils/dom.js"), c = n(u), d = e("../utils/fn.js"), h = n(d), f = e("../utils/events.js"), p = n(f), v = function (e) {
                function t() {
                    o(this, t), e.apply(this, arguments)
                }

                return a(t, e), t.prototype.addItem = function (e) {
                    this.addChild(e), e.on("click", h.bind(this, function () {
                        this.unlockShowing()
                    }))
                }, t.prototype.createEl = function () {
                    var t = this.options_.contentElType || "ul";
                    this.contentEl_ = c.createEl(t, {className: "vjs-menu-content"});
                    var r = e.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
                    return r.appendChild(this.contentEl_), p.on(r, "click", function (e) {
                        e.preventDefault(), e.stopImmediatePropagation()
                    }), r
                }, t
            }(l.default);
            l.default.registerComponent("Popup", v), r.default = v, t.exports = r.default
        }, {"../component.js": 65, "../utils/dom.js": 115, "../utils/events.js": 116, "../utils/fn.js": 117}],
        99: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            r.__esModule = !0;
            var o = e("./utils/events.js"), a = i(o), s = e("global/document"), l = n(s), u = e("global/window"), c = n(u), d = !1, h = void 0, f = function () {
                var e = l.default.getElementsByTagName("video"), t = l.default.getElementsByTagName("audio"), r = [];
                if (e && e.length > 0)for (var n = 0, i = e.length; n < i; n++)r.push(e[n]);
                if (t && t.length > 0)for (var n = 0, i = t.length; n < i; n++)r.push(t[n]);
                if (r && r.length > 0)for (var n = 0, i = r.length; n < i; n++) {
                    var o = r[n];
                    if (!o || !o.getAttribute) {
                        p(1);
                        break
                    }
                    if (void 0 === o.player) {
                        var a = o.getAttribute("data-setup");
                        if (null !== a) {
                            h(o)
                        }
                    }
                } else d || p(1)
            }, p = function (e, t) {
                t && (h = t), setTimeout(f, e)
            };
            "complete" === l.default.readyState ? d = !0 : a.one(c.default, "load", function () {
                d = !0
            });
            var v = function () {
                return d
            };
            r.autoSetup = f, r.autoSetupTimeout = p, r.hasLoaded = v
        }, {"./utils/events.js": 116, "global/document": 7, "global/window": 8}],
        100: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../component.js"), l = i(s), u = e("../utils/dom.js"), c = n(u), d = e("object.assign"), h = i(d), f = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(r, "controlsvisible", this.update), this.on(r, this.playerEvent, this.update)
                }

                return a(t, e), t.prototype.createEl = function (t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    return r.className = r.className + " vjs-slider", r = h.default({tabIndex: 0}, r), n = h.default({
                        role: "slider",
                        "aria-valuenow": 0,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        tabIndex: 0
                    }, n), e.prototype.createEl.call(this, t, r, n)
                }, t.prototype.handleMouseDown = function (e) {
                    var t = this.bar.el_.ownerDocument;
                    e.preventDefault(), c.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
                }, t.prototype.handleMouseMove = function () {
                }, t.prototype.handleMouseUp = function () {
                    var e = this.bar.el_.ownerDocument;
                    c.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
                }, t.prototype.update = function () {
                    if (this.el_) {
                        var e = this.getPercent(), t = this.bar;
                        if (t) {
                            ("number" != typeof e || e !== e || e < 0 || e === 1 / 0) && (e = 0);
                            var r = (100 * e).toFixed(2) + "%";
                            this.vertical() ? t.el().style.height = r : t.el().style.width = r
                        }
                    }
                }, t.prototype.calculateDistance = function (e) {
                    var t = c.getPointerPosition(this.el_, e);
                    return this.vertical() ? t.y : t.x
                }, t.prototype.handleFocus = function () {
                    this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, t.prototype.handleKeyPress = function (e) {
                    37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
                }, t.prototype.handleBlur = function () {
                    this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                }, t.prototype.handleClick = function (e) {
                    e.stopImmediatePropagation(), e.preventDefault()
                }, t.prototype.vertical = function (e) {
                    return void 0 === e ? this.vertical_ || !1 : (this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                }, t
            }(l.default);
            l.default.registerComponent("Slider", f), r.default = f, t.exports = r.default
        }, {"../component.js": 65, "../utils/dom.js": 115, "object.assign": 53}],
        101: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, e.streamFromParts = function (e, t) {
                    return e + "&" + t
                }, e.streamToParts = function (e) {
                    var t = {connection: "", stream: ""};
                    if (!e)return t;
                    var r = e.search(/&(?!\w+=)/), n = void 0;
                    return r !== -1 ? n = r + 1 : (r = n = e.lastIndexOf("/") + 1, 0 === r && (r = n = e.length)), t.connection = e.substring(0, r), t.stream = e.substring(n, e.length), t
                }, e.isStreamingType = function (t) {
                    return t in e.streamingFormats
                }, e.RTMP_RE = /^rtmp[set]?:\/\//i, e.isStreamingSrc = function (t) {
                    return e.RTMP_RE.test(t)
                }, e.rtmpSourceHandler = {}, e.rtmpSourceHandler.canPlayType = function (t) {
                    return e.isStreamingType(t) ? "maybe" : ""
                }, e.rtmpSourceHandler.canHandleSource = function (t) {
                    var r = e.rtmpSourceHandler.canPlayType(t.type);
                    return r ? r : e.isStreamingSrc(t.src) ? "maybe" : ""
                }, e.rtmpSourceHandler.handleSource = function (t, r) {
                    var n = e.streamToParts(t.src);
                    r.setRtmpConnection(n.connection), r.setRtmpStream(n.stream)
                }, e.registerSourceHandler(e.rtmpSourceHandler), e
            }

            r.__esModule = !0, r.default = n, t.exports = r.default
        }, {}],
        102: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function s(e) {
                var t = e.charAt(0).toUpperCase() + e.slice(1);
                S["set" + t] = function (t) {
                    return this.el_.vjs_setProperty(e, t)
                }
            }

            function l(e) {
                S[e] = function () {
                    return this.el_.vjs_getProperty(e)
                }
            }

            r.__esModule = !0;
            for (var u = e("./tech"), c = i(u), d = e("../utils/dom.js"), h = n(d), f = e("../utils/url.js"), p = n(f), v = e("../utils/time-ranges.js"), g = e("./flash-rtmp"), y = i(g), m = e("../component"), _ = i(m), b = e("global/window"), E = i(b), T = e("object.assign"), w = i(T), k = E.default.navigator, O = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n), r.source && this.ready(function () {
                        this.setSource(r.source)
                    }, !0), r.startTime && this.ready(function () {
                        this.load(), this.play(), this.currentTime(r.startTime)
                    }, !0), E.default.videojs = E.default.videojs || {}, E.default.videojs.Flash = E.default.videojs.Flash || {}, E.default.videojs.Flash.onReady = t.onReady, E.default.videojs.Flash.onEvent = t.onEvent, E.default.videojs.Flash.onError = t.onError, this.on("seeked", function () {
                        this.lastSeekTarget_ = void 0
                    })
                }

                return a(t, e), t.prototype.createEl = function () {
                    var e = this.options_;
                    e.swf || (e.swf = "//vjs.zencdn.net/swf/5.0.1/video-js.swf");
                    var r = e.techId, n = w.default({
                        readyFunction: "videojs.Flash.onReady",
                        eventProxyFunction: "videojs.Flash.onEvent",
                        errorEventProxyFunction: "videojs.Flash.onError",
                        autoplay: e.autoplay,
                        preload: e.preload,
                        loop: e.loop,
                        muted: e.muted
                    }, e.flashVars), i = w.default({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, e.params), o = w.default({id: r, name: r, class: "vjs-tech"}, e.attributes);
                    return this.el_ = t.embed(e.swf, n, i, o), this.el_.tech = this, this.el_
                }, t.prototype.play = function () {
                    this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                }, t.prototype.pause = function () {
                    this.el_.vjs_pause()
                }, t.prototype.src = function (e) {
                    return void 0 === e ? this.currentSrc() : this.setSrc(e)
                }, t.prototype.setSrc = function (e) {
                    if (e = p.getAbsoluteURL(e), this.el_.vjs_src(e), this.autoplay()) {
                        var t = this;
                        this.setTimeout(function () {
                            t.play()
                        }, 0)
                    }
                }, t.prototype.seeking = function () {
                    return void 0 !== this.lastSeekTarget_
                }, t.prototype.setCurrentTime = function (t) {
                    var r = this.seekable();
                    r.length && (t = t > r.start(0) ? t : r.start(0), t = t < r.end(r.length - 1) ? t : r.end(r.length - 1), this.lastSeekTarget_ = t, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", t), e.prototype.setCurrentTime.call(this))
                }, t.prototype.currentTime = function (e) {
                    return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                }, t.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                }, t.prototype.load = function () {
                    this.el_.vjs_load()
                }, t.prototype.poster = function () {
                    this.el_.vjs_getProperty("poster")
                }, t.prototype.setPoster = function () {
                }, t.prototype.seekable = function () {
                    var e = this.duration();
                    return 0 === e ? v.createTimeRange() : v.createTimeRange(0, e)
                }, t.prototype.buffered = function () {
                    var e = this.el_.vjs_getProperty("buffered");
                    return 0 === e.length ? v.createTimeRange() : v.createTimeRange(e[0][0], e[0][1])
                }, t.prototype.supportsFullScreen = function () {
                    return !1
                }, t.prototype.enterFullScreen = function () {
                    return !1
                }, t
            }(c.default), S = O.prototype, C = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), R = "networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(","), A = 0; A < C.length; A++)l(C[A]), s(C[A]);
            for (var A = 0; A < R.length; A++)l(R[A]);
            O.isSupported = function () {
                return O.version()[0] >= 10
            }, c.default.withSourceHandlers(O), O.nativeSourceHandler = {}, O.nativeSourceHandler.canPlayType = function (e) {
                return e in O.formats ? "maybe" : ""
            }, O.nativeSourceHandler.canHandleSource = function (e) {
                function t(e) {
                    var t = p.getFileExtension(e);
                    return t ? "video/" + t : ""
                }

                var r;
                return r = e.type ? e.type.replace(/;.*/, "").toLowerCase() : t(e.src), O.nativeSourceHandler.canPlayType(r)
            }, O.nativeSourceHandler.handleSource = function (e, t) {
                t.setSrc(e.src)
            }, O.nativeSourceHandler.dispose = function () {
            }, O.registerSourceHandler(O.nativeSourceHandler), O.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, O.onReady = function (e) {
                var t = h.getEl(e), r = t && t.tech;
                r && r.el() && O.checkReady(r)
            }, O.checkReady = function (e) {
                e.el() && (e.el().vjs_getProperty ? e.triggerReady() : this.setTimeout(function () {
                    O.checkReady(e)
                }, 50))
            }, O.onEvent = function (e, t) {
                var r = h.getEl(e).tech;
                r.trigger(t)
            }, O.onError = function (e, t) {
                var r = h.getEl(e).tech;
                return "srcnotfound" === t ? r.error(4) : void r.error("FLASH: " + t)
            }, O.version = function () {
                var e = "0,0,0";
                try {
                    e = new E.default.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (t) {
                    try {
                        k.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (k.plugins["Shockwave Flash 2.0"] || k.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (e) {
                    }
                }
                return e.split(",")
            }, O.embed = function (e, t, r, n) {
                var i = O.getEmbedCode(e, t, r, n), o = h.createEl("div", {innerHTML: i}).childNodes[0];
                return o
            }, O.getEmbedCode = function (e, t, r, n) {
                var i = '<object type="application/x-shockwave-flash" ', o = "", a = "", s = "";
                return t && Object.getOwnPropertyNames(t).forEach(function (e) {
                    o += e + "=" + t[e] + "&amp;"
                }), r = w.default({
                    movie: e,
                    flashvars: o,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, r), Object.getOwnPropertyNames(r).forEach(function (e) {
                    a += '<param name="' + e + '" value="' + r[e] + '" />'
                }), n = w.default({
                    data: e,
                    width: "100%",
                    height: "100%"
                }, n), Object.getOwnPropertyNames(n).forEach(function (e) {
                    s += e + '="' + n[e] + '" '
                }), "" + i + s + ">" + a + "</object>"
            }, y.default(O), _.default.registerComponent("Flash", O), c.default.registerTech("Flash", O), r.default = O, t.exports = r.default
        }, {
            "../component": 65,
            "../utils/dom.js": 115,
            "../utils/time-ranges.js": 123,
            "../utils/url.js": 125,
            "./flash-rtmp": 101,
            "./tech": 105,
            "global/window": 8,
            "object.assign": 53
        }],
        103: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("./tech.js"), l = i(s), u = e("../component"), c = i(u), d = e("../utils/dom.js"), h = n(d), f = e("../utils/url.js"), p = n(f), v = e("../utils/fn.js"), g = n(v), y = e("../utils/log.js"), m = i(y), _ = e("../utils/browser.js"), b = n(_), E = e("global/document"), T = i(E), w = e("global/window"), k = i(w), O = e("object.assign"), S = i(O), C = e("../utils/merge-options.js"), R = i(C), A = function (e) {
                function t(r, n) {
                    o(this, t), e.call(this, r, n);
                    var i = r.source;
                    if (i && (this.el_.currentSrc !== i.src || r.tag && 3 === r.tag.initNetworkState_) ? this.setSource(i) : this.handleLateInit_(this.el_), this.el_.hasChildNodes()) {
                        for (var a = this.el_.childNodes, s = a.length, l = []; s--;) {
                            var u = a[s], c = u.nodeName.toLowerCase();
                            "track" === c && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(u), this.remoteTextTracks().addTrack_(u.track)) : l.push(u))
                        }
                        for (var d = 0; d < l.length; d++)this.el_.removeChild(l[d])
                    }
                    this.featuresNativeTextTracks && (this.handleTextTrackChange_ = g.bind(this, this.handleTextTrackChange), this.handleTextTrackAdd_ = g.bind(this, this.handleTextTrackAdd), this.handleTextTrackRemove_ = g.bind(this, this.handleTextTrackRemove), this.proxyNativeTextTracks_()), (b.TOUCH_ENABLED && r.nativeControlsForTouch === !0 || b.IS_IPHONE || b.IS_NATIVE_ANDROID) && this.setControls(!0), this.triggerReady()
                }

                return a(t, e), t.prototype.dispose = function () {
                    var r = this.el().textTracks, n = this.textTracks();
                    r && r.removeEventListener && (r.removeEventListener("change", this.handleTextTrackChange_), r.removeEventListener("addtrack", this.handleTextTrackAdd_), r.removeEventListener("removetrack", this.handleTextTrackRemove_));
                    for (var i = n.length; i--;)n.removeTrack_(n[i]);
                    t.disposeMediaElement(this.el_), e.prototype.dispose.call(this)
                }, t.prototype.createEl = function () {
                    var e = this.options_.tag;
                    if (!e || this.movingMediaElementInDOM === !1)if (e) {
                        var r = e.cloneNode(!0);
                        e.parentNode.insertBefore(r, e), t.disposeMediaElement(e), e = r
                    } else {
                        e = T.default.createElement("video");
                        var n = this.options_.tag && h.getElAttributes(this.options_.tag), i = R.default({}, n);
                        b.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete i.controls, h.setElAttributes(e, S.default(i, {
                            id: this.options_.techId,
                            class: "vjs-tech"
                        }))
                    }
                    for (var o = ["autoplay", "preload", "loop", "muted"], a = o.length - 1; a >= 0; a--) {
                        var s = o[a], l = {};
                        "undefined" != typeof this.options_[s] && (l[s] = this.options_[s]), h.setElAttributes(e, l)
                    }
                    return e
                }, t.prototype.handleLateInit_ = function (e) {
                    var t = this;
                    if (0 !== e.networkState && 3 !== e.networkState) {
                        if (0 === e.readyState) {
                            var r = function () {
                                var e = !1, r = function () {
                                    e = !0
                                };
                                t.on("loadstart", r);
                                var n = function () {
                                    e || this.trigger("loadstart")
                                };
                                return t.on("loadedmetadata", n), t.ready(function () {
                                    this.off("loadstart", r), this.off("loadedmetadata", n), e || this.trigger("loadstart")
                                }), {v: void 0}
                            }();
                            if ("object" == typeof r)return r.v
                        }
                        var n = ["loadstart"];
                        n.push("loadedmetadata"), e.readyState >= 2 && n.push("loadeddata"), e.readyState >= 3 && n.push("canplay"), e.readyState >= 4 && n.push("canplaythrough"), this.ready(function () {
                            n.forEach(function (e) {
                                this.trigger(e)
                            }, this)
                        })
                    }
                }, t.prototype.proxyNativeTextTracks_ = function () {
                    var e = this.el().textTracks;
                    if (e) {
                        for (var t = 0; t < e.length; t++)this.textTracks().addTrack_(e[t]);
                        e.addEventListener && (e.addEventListener("change", this.handleTextTrackChange_), e.addEventListener("addtrack", this.handleTextTrackAdd_), e.addEventListener("removetrack", this.handleTextTrackRemove_))
                    }
                }, t.prototype.handleTextTrackChange = function (e) {
                    var t = this.textTracks();
                    this.textTracks().trigger({type: "change", target: t, currentTarget: t, srcElement: t})
                }, t.prototype.handleTextTrackAdd = function (e) {
                    this.textTracks().addTrack_(e.track)
                }, t.prototype.handleTextTrackRemove = function (e) {
                    this.textTracks().removeTrack_(e.track)
                }, t.prototype.play = function () {
                    this.el_.play()
                }, t.prototype.pause = function () {
                    this.el_.pause()
                }, t.prototype.paused = function () {
                    return this.el_.paused
                }, t.prototype.currentTime = function () {
                    return this.el_ ? this.el_.currentTime : 0
                }, t.prototype.setCurrentTime = function (e) {
                    try {
                        this.el_.currentTime = e
                    } catch (e) {
                        m.default(e, "Video is not ready. (Video.js)")
                    }
                }, t.prototype.duration = function () {
                    return this.el_.duration || 0
                }, t.prototype.buffered = function () {
                    return this.el_.buffered
                }, t.prototype.volume = function () {
                    return this.el_.volume
                }, t.prototype.setVolume = function (e) {
                    this.el_.volume = e
                }, t.prototype.muted = function () {
                    return this.el_.muted
                }, t.prototype.setMuted = function (e) {
                    this.el_.muted = e
                }, t.prototype.width = function () {
                    return this.el_.offsetWidth
                }, t.prototype.height = function () {
                    return this.el_.offsetHeight
                }, t.prototype.supportsFullScreen = function () {
                    if ("function" == typeof this.el_.webkitEnterFullScreen) {
                        var e = k.default.navigator.userAgent;
                        if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e))return !0
                    }
                    return !1
                }, t.prototype.enterFullScreen = function () {
                    var e = this.el_;
                    "webkitDisplayingFullscreen"in e && this.one("webkitbeginfullscreen", function () {
                        this.one("webkitendfullscreen", function () {
                            this.trigger("fullscreenchange", {isFullscreen: !1})
                        }), this.trigger("fullscreenchange", {isFullscreen: !0})
                    }), e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                        e.pause(), e.webkitEnterFullScreen()
                    }, 0)) : e.webkitEnterFullScreen()
                }, t.prototype.exitFullScreen = function () {
                    this.el_.webkitExitFullScreen()
                }, t.prototype.src = function (e) {
                    return void 0 === e ? this.el_.src : void this.setSrc(e)
                }, t.prototype.setSrc = function (e) {
                    this.el_.src = e
                }, t.prototype.load = function () {
                    this.el_.load()
                }, t.prototype.reset = function () {
                    t.resetMediaElement(this.el_)
                }, t.prototype.currentSrc = function () {
                    return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                }, t.prototype.poster = function () {
                    return this.el_.poster
                }, t.prototype.setPoster = function (e) {
                    this.el_.poster = e
                }, t.prototype.preload = function () {
                    return this.el_.preload
                }, t.prototype.setPreload = function (e) {
                    this.el_.preload = e
                }, t.prototype.autoplay = function () {
                    return this.el_.autoplay
                }, t.prototype.setAutoplay = function (e) {
                    this.el_.autoplay = e
                }, t.prototype.controls = function () {
                    return this.el_.controls
                }, t.prototype.setControls = function (e) {
                    this.el_.controls = !!e
                }, t.prototype.loop = function () {
                    return this.el_.loop
                }, t.prototype.setLoop = function (e) {
                    this.el_.loop = e
                }, t.prototype.error = function () {
                    return this.el_.error
                }, t.prototype.seeking = function () {
                    return this.el_.seeking
                }, t.prototype.seekable = function () {
                    return this.el_.seekable
                }, t.prototype.ended = function () {
                    return this.el_.ended
                }, t.prototype.endprev = function () {
                    return this.el_.endprev
                }, t.prototype.defaultMuted = function () {
                    return this.el_.defaultMuted
                }, t.prototype.playbackRate = function () {
                    return this.el_.playbackRate
                }, t.prototype.played = function () {
                    return this.el_.played
                }, t.prototype.setPlaybackRate = function (e) {
                    this.el_.playbackRate = e
                }, t.prototype.networkState = function () {
                    return this.el_.networkState
                }, t.prototype.readyState = function () {
                    return this.el_.readyState
                }, t.prototype.videoWidth = function () {
                    return this.el_.videoWidth
                }, t.prototype.videoHeight = function () {
                    return this.el_.videoHeight
                }, t.prototype.textTracks = function () {
                    return e.prototype.textTracks.call(this)
                }, t.prototype.addTextTrack = function (t, r, n) {
                    return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, r, n) : e.prototype.addTextTrack.call(this, t, r, n)
                }, t.prototype.addRemoteTextTrack = function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (!this.featuresNativeTextTracks)return e.prototype.addRemoteTextTrack.call(this, t);
                    var r = T.default.createElement("track");
                    return t.kind && (r.kind = t.kind), t.label && (r.label = t.label), (t.language || t.srclang) && (r.srclang = t.language || t.srclang), t.default && (r.default = t.default), t.id && (r.id = t.id), t.src && (r.src = t.src), this.el().appendChild(r), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack_(r.track), r
                }, t.prototype.removeRemoteTextTrack = function (t) {
                    if (!this.featuresNativeTextTracks)return e.prototype.removeRemoteTextTrack.call(this, t);
                    var r = void 0, n = void 0, i = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                    for (this.remoteTextTrackEls().removeTrackElement_(i), this.remoteTextTracks().removeTrack_(t), r = this.$$("track"), n = r.length; n--;)t !== r[n] && t !== r[n].track || this.el().removeChild(r[n])
                }, t
            }(l.default);
            A.TEST_VID = T.default.createElement("video");
            var j = T.default.createElement("track");
            j.kind = "captions", j.srclang = "en", j.label = "English", A.TEST_VID.appendChild(j), A.isSupported = function () {
                try {
                    A.TEST_VID.volume = .5
                } catch (e) {
                    return !1
                }
                return !!A.TEST_VID.canPlayType
            }, l.default.withSourceHandlers(A), A.nativeSourceHandler = {}, A.nativeSourceHandler.canPlayType = function (e) {
                try {
                    return A.TEST_VID.canPlayType(e)
                } catch (e) {
                    return ""
                }
            }, A.nativeSourceHandler.canHandleSource = function (e) {
                var t;
                return e.type ? A.nativeSourceHandler.canPlayType(e.type) : e.src ? (t = p.getFileExtension(e.src), A.nativeSourceHandler.canPlayType("video/" + t)) : ""
            }, A.nativeSourceHandler.handleSource = function (e, t) {
                t.setSrc(e.src)
            }, A.nativeSourceHandler.dispose = function () {
            }, A.registerSourceHandler(A.nativeSourceHandler), A.canControlVolume = function () {
                var e = A.TEST_VID.volume;
                return A.TEST_VID.volume = e / 2 + .1, e !== A.TEST_VID.volume
            }, A.canControlPlaybackRate = function () {
                if (b.IS_ANDROID && b.IS_CHROME)return !1;
                var e = A.TEST_VID.playbackRate;
                return A.TEST_VID.playbackRate = e / 2 + .1, e !== A.TEST_VID.playbackRate
            }, A.supportsNativeTextTracks = function () {
                var e;
                return e = !!A.TEST_VID.textTracks, e && A.TEST_VID.textTracks.length > 0 && (e = "number" != typeof A.TEST_VID.textTracks[0].mode), e && b.IS_FIREFOX && (e = !1), !e || "onremovetrack"in A.TEST_VID.textTracks || (e = !1), e
            }, A.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "endprev", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], A.prototype.featuresVolumeControl = A.canControlVolume(), A.prototype.featuresPlaybackRate = A.canControlPlaybackRate(), A.prototype.movingMediaElementInDOM = !b.IS_IOS, A.prototype.featuresFullscreenResize = !0, A.prototype.featuresProgressEvents = !0, A.prototype.featuresNativeTextTracks = A.supportsNativeTextTracks();
            var L = void 0, x = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, D = /^video\/mp4/i;
            A.patchCanPlayType = function () {
                b.ANDROID_VERSION >= 4 && (L || (L = A.TEST_VID.constructor.prototype.canPlayType), A.TEST_VID.constructor.prototype.canPlayType = function (e) {
                    return e && x.test(e) ? "maybe" : L.call(this, e)
                }), b.IS_OLD_ANDROID && (L || (L = A.TEST_VID.constructor.prototype.canPlayType), A.TEST_VID.constructor.prototype.canPlayType = function (e) {
                    return e && D.test(e) ? "maybe" : L.call(this, e)
                })
            }, A.unpatchCanPlayType = function () {
                var e = A.TEST_VID.constructor.prototype.canPlayType;
                return A.TEST_VID.constructor.prototype.canPlayType = L, L = null, e
            }, A.patchCanPlayType(), A.disposeMediaElement = function (e) {
                if (e) {
                    for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();)e.removeChild(e.firstChild);
                    e.removeAttribute("src"), "function" == typeof e.load && !function () {
                        try {
                            e.load()
                        } catch (e) {
                        }
                    }()
                }
            }, A.resetMediaElement = function (e) {
                if (e) {
                    for (var t = e.querySelectorAll("source"), r = t.length; r--;)e.removeChild(t[r]);
                    e.removeAttribute("src"), "function" == typeof e.load && !function () {
                        try {
                            e.load()
                        } catch (e) {
                        }
                    }()
                }
            }, c.default.registerComponent("Html5", A), l.default.registerTech("Html5", A), r.default = A, t.exports = r.default
        }, {
            "../component": 65,
            "../utils/browser.js": 112,
            "../utils/dom.js": 115,
            "../utils/fn.js": 117,
            "../utils/log.js": 120,
            "../utils/merge-options.js": 121,
            "../utils/url.js": 125,
            "./tech.js": 105,
            "global/document": 7,
            "global/window": 8,
            "object.assign": 53
        }],
        104: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var a = e("../component.js"), s = n(a), l = e("./tech.js"), u = n(l), c = e("global/window"), d = (n(c), e("../utils/to-title-case.js")), h = n(d), f = function (e) {
                function t(r, n, o) {
                    if (i(this, t), e.call(this, r, n, o), n.playerOptions.sources && 0 !== n.playerOptions.sources.length)r.src(n.playerOptions.sources); else for (var a = 0, l = n.playerOptions.techOrder; a < l.length; a++) {
                        var c = h.default(l[a]), d = u.default.getTech(c);
                        if (c || (d = s.default.getComponent(c)), d && d.isSupported()) {
                            r.loadTech_(c);
                            break
                        }
                    }
                }

                return o(t, e), t
            }(s.default);
            s.default.registerComponent("MediaLoader", f), r.default = f, t.exports = r.default
        }, {"../component.js": 65, "../utils/to-title-case.js": 124, "./tech.js": 105, "global/window": 8}],
        105: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../component"), l = i(s), u = e("../tracks/html-track-element"), c = i(u), d = e("../tracks/html-track-element-list"), h = i(d), f = e("../utils/merge-options.js"), p = i(f), v = e("../tracks/text-track"), g = i(v), y = e("../tracks/text-track-list"), m = i(y), _ = e("../utils/fn.js"), b = n(_), E = e("../utils/log.js"), T = i(E), w = e("../utils/time-ranges.js"), k = e("../utils/buffer.js"), O = e("../media-error.js"), S = i(O), C = e("global/window"), R = i(C), A = e("global/document"), j = i(A), L = function (e) {
                function t() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? function () {
                    } : arguments[1];
                    o(this, t), r.reportTouchActivity = !1, e.call(this, null, r, n), this.hasStarted_ = !1, this.on("playing", function () {
                        this.hasStarted_ = !0
                    }), this.on("loadstart", function () {
                        this.hasStarted_ = !1
                    }), this.textTracks_ = r.textTracks, this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), r.nativeCaptions !== !1 && r.nativeTextTracks !== !1 || (this.featuresNativeTextTracks = !1), this.featuresNativeTextTracks || this.on("ready", this.emulateTextTracks), this.initTextTrackListeners(), this.emitTapEvents()
                }

                return a(t, e), t.prototype.manualProgressOn = function () {
                    this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                }, t.prototype.manualProgressOff = function () {
                    this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                }, t.prototype.trackProgress = function () {
                    this.stopTrackingProgress(), this.progressInterval = this.setInterval(b.bind(this, function () {
                        var e = this.bufferedPercent();
                        this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
                    }), 500)
                }, t.prototype.onDurationChange = function () {
                    this.duration_ = this.duration()
                }, t.prototype.buffered = function () {
                    return w.createTimeRange(0, 0)
                }, t.prototype.bufferedPercent = function () {
                    return k.bufferedPercent(this.buffered(), this.duration_)
                }, t.prototype.stopTrackingProgress = function () {
                    this.clearInterval(this.progressInterval)
                }, t.prototype.manualTimeUpdatesOn = function () {
                    this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                }, t.prototype.manualTimeUpdatesOff = function () {
                    this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                }, t.prototype.trackCurrentTime = function () {
                    this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                        this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                    }, 250)
                }, t.prototype.stopTrackingCurrentTime = function () {
                    this.clearInterval(this.currentTimeInterval), this.trigger({
                        type: "timeupdate",
                        target: this,
                        manuallyTriggered: !0
                    })
                }, t.prototype.dispose = function () {
                    var t = this.textTracks();
                    if (t)for (var r = t.length; r--;)this.removeRemoteTextTrack(t[r]);
                    this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), e.prototype.dispose.call(this)
                }, t.prototype.reset = function () {
                }, t.prototype.error = function (e) {
                    return void 0 !== e && (e instanceof S.default ? this.error_ = e : this.error_ = new S.default(e), this.trigger("error")), this.error_
                }, t.prototype.played = function () {
                    return this.hasStarted_ ? w.createTimeRange(0, 0) : w.createTimeRange()
                }, t.prototype.setCurrentTime = function () {
                    this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                }, t.prototype.initTextTrackListeners = function () {
                    var e = b.bind(this, function () {
                        this.trigger("texttrackchange")
                    }), t = this.textTracks();
                    t && (t.addEventListener("removetrack", e), t.addEventListener("addtrack", e), this.on("dispose", b.bind(this, function () {
                        t.removeEventListener("removetrack", e), t.removeEventListener("addtrack", e)
                    })))
                }, t.prototype.emulateTextTracks = function () {
                    var e = this, t = this.textTracks();
                    if (t) {
                        R.default.WebVTT || null == this.el().parentNode || !function () {
                            var t = j.default.createElement("script");
                            t.src = e.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", t.onload = function () {
                                e.trigger("vttjsloaded")
                            }, t.onerror = function () {
                                e.trigger("vttjserror");
                            }, e.on("dispose", function () {
                                t.onload = null, t.onerror = null
                            }), e.el().parentNode.appendChild(t), R.default.WebVTT = !0
                        }();
                        var r = function () {
                            return e.trigger("texttrackchange")
                        }, n = function () {
                            r();
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                n.removeEventListener("cuechange", r), "showing" === n.mode && n.addEventListener("cuechange", r)
                            }
                        };
                        n(), t.addEventListener("change", n), this.on("dispose", function () {
                            t.removeEventListener("change", n)
                        })
                    }
                }, t.prototype.textTracks = function () {
                    return this.textTracks_ = this.textTracks_ || new m.default, this.textTracks_
                }, t.prototype.remoteTextTracks = function () {
                    return this.remoteTextTracks_ = this.remoteTextTracks_ || new m.default, this.remoteTextTracks_
                }, t.prototype.remoteTextTrackEls = function () {
                    return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new h.default, this.remoteTextTrackEls_
                }, t.prototype.addTextTrack = function (e, t, r) {
                    if (!e)throw new Error("TextTrack kind is required but was not provided");
                    return x(this, e, t, r)
                }, t.prototype.addRemoteTextTrack = function (e) {
                    var t = p.default(e, {tech: this}), r = new c.default(t);
                    return this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack_(r.track), this.textTracks().addTrack_(r.track), r
                }, t.prototype.removeRemoteTextTrack = function (e) {
                    this.textTracks().removeTrack_(e);
                    var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                    this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack_(e)
                }, t.prototype.setPoster = function () {
                }, t.prototype.canPlayType = function () {
                    return ""
                }, t.isTech = function (e) {
                    return e.prototype instanceof t || e instanceof t || e === t
                }, t.registerTech = function (e, r) {
                    if (t.techs_ || (t.techs_ = {}), !t.isTech(r))throw new Error("Tech " + e + " must be a Tech");
                    return t.techs_[e] = r, r
                }, t.getTech = function (e) {
                    return t.techs_ && t.techs_[e] ? t.techs_[e] : R.default && R.default.videojs && R.default.videojs[e] ? (T.default.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), R.default.videojs[e]) : void 0
                }, t
            }(l.default);
            L.prototype.textTracks_;
            var x = function (e, t, r, n) {
                var i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4], o = e.textTracks();
                i.kind = t, r && (i.label = r), n && (i.language = n), i.tech = e;
                var a = new g.default(i);
                return o.addTrack_(a), a
            };
            L.prototype.featuresVolumeControl = !0, L.prototype.featuresFullscreenResize = !1, L.prototype.featuresPlaybackRate = !1, L.prototype.featuresProgressEvents = !1, L.prototype.featuresTimeupdateEvents = !1, L.prototype.featuresNativeTextTracks = !1, L.withSourceHandlers = function (e) {
                e.registerSourceHandler = function (t, r) {
                    var n = e.sourceHandlers;
                    n || (n = e.sourceHandlers = []), void 0 === r && (r = n.length), n.splice(r, 0, t)
                }, e.canPlayType = function (t) {
                    for (var r = e.sourceHandlers || [], n = void 0, i = 0; i < r.length; i++)if (n = r[i].canPlayType(t))return n;
                    return ""
                }, e.selectSourceHandler = function (t) {
                    for (var r = e.sourceHandlers || [], n = void 0, i = 0; i < r.length; i++)if (n = r[i].canHandleSource(t))return r[i];
                    return null
                }, e.canPlaySource = function (t) {
                    var r = e.selectSourceHandler(t);
                    return r ? r.canHandleSource(t) : ""
                };
                var t = ["seekable", "duration"];
                t.forEach(function (e) {
                    var t = this[e];
                    "function" == typeof t && (this[e] = function () {
                        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                    })
                }, e.prototype), e.prototype.setSource = function (t) {
                    var r = e.selectSourceHandler(t);
                    return r || (e.nativeSourceHandler ? r = e.nativeSourceHandler : T.default.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = t, this.sourceHandler_ = r.handleSource(t, this), this.on("dispose", this.disposeSourceHandler), this
                }, e.prototype.disposeSourceHandler = function () {
                    this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
                }
            }, l.default.registerComponent("Tech", L), l.default.registerComponent("MediaTechController", L), L.registerTech("Tech", L), r.default = L, t.exports = r.default
        }, {
            "../component": 65,
            "../media-error.js": 91,
            "../tracks/html-track-element": 107,
            "../tracks/html-track-element-list": 106,
            "../tracks/text-track": 111,
            "../tracks/text-track-list": 110,
            "../utils/buffer.js": 113,
            "../utils/fn.js": 117,
            "../utils/log.js": 120,
            "../utils/merge-options.js": 121,
            "../utils/time-ranges.js": 123,
            "global/document": 7,
            "global/window": 8
        }],
        106: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var a = e("../utils/browser.js"), s = i(a), l = e("global/document"), u = n(l), c = function () {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    o(this, e);
                    var r = this;
                    if (s.IS_IE8) {
                        r = u.default.createElement("custom");
                        for (var n in e.prototype)"constructor" !== n && (r[n] = e.prototype[n])
                    }
                    r.trackElements_ = [], Object.defineProperty(r, "length", {
                        get: function () {
                            return this.trackElements_.length
                        }
                    });
                    for (var i = 0, a = t.length; i < a; i++)r.addTrackElement_(t[i]);
                    if (s.IS_IE8)return r
                }

                return e.prototype.addTrackElement_ = function (e) {
                    this.trackElements_.push(e)
                }, e.prototype.getTrackElementByTrack_ = function (e) {
                    for (var t = void 0, r = 0, n = this.trackElements_.length; r < n; r++)if (e === this.trackElements_[r].track) {
                        t = this.trackElements_[r];
                        break
                    }
                    return t
                }, e.prototype.removeTrackElement_ = function (e) {
                    for (var t = 0, r = this.trackElements_.length; t < r; t++)if (e === this.trackElements_[t]) {
                        this.trackElements_.splice(t, 1);
                        break
                    }
                }, e
            }();
            r.default = c, t.exports = r.default
        }, {"../utils/browser.js": 112, "global/document": 7}],
        107: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../utils/browser.js"), l = i(s), u = e("global/document"), c = n(u), d = e("../event-target"), h = n(d), f = e("../tracks/text-track"), p = n(f), v = 0, g = 1, y = 2, m = 3, _ = function (e) {
                function t() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    o(this, t), e.call(this);
                    var n = void 0, i = this;
                    if (l.IS_IE8) {
                        i = c.default.createElement("custom");
                        for (var a in t.prototype)"constructor" !== a && (i[a] = t.prototype[a])
                    }
                    var s = new p.default(r);
                    if (i.kind = s.kind, i.src = s.src, i.srclang = s.language, i.label = s.label, i.default = s.default, Object.defineProperty(i, "readyState", {
                            get: function () {
                                return n
                            }
                        }), Object.defineProperty(i, "track", {
                            get: function () {
                                return s
                            }
                        }), n = v, s.addEventListener("loadeddata", function () {
                            n = y, i.trigger({type: "load", target: i})
                        }), l.IS_IE8)return i
                }

                return a(t, e), t
            }(h.default);
            _.prototype.allowedEvents_ = {load: "load"}, _.NONE = v, _.LOADING = g, _.LOADED = y, _.ERROR = m, r.default = _, t.exports = r.default
        }, {"../event-target": 87, "../tracks/text-track": 111, "../utils/browser.js": 112, "global/document": 7}],
        108: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            r.__esModule = !0;
            var a = e("../utils/browser.js"), s = i(a), l = e("global/document"), u = n(l), c = function () {
                function e(t) {
                    o(this, e);
                    var r = this;
                    if (s.IS_IE8) {
                        r = u.default.createElement("custom");
                        for (var n in e.prototype)"constructor" !== n && (r[n] = e.prototype[n])
                    }
                    if (e.prototype.setCues_.call(r, t), Object.defineProperty(r, "length", {
                            get: function () {
                                return this.length_
                            }
                        }), s.IS_IE8)return r
                }

                return e.prototype.setCues_ = function (e) {
                    var t = this.length || 0, r = 0, n = e.length;
                    this.cues_ = e, this.length_ = e.length;
                    var i = function (e) {
                        "" + e in this || Object.defineProperty(this, "" + e, {
                            get: function () {
                                return this.cues_[e]
                            }
                        })
                    };
                    if (t < n)for (r = t; r < n; r++)i.call(this, r)
                }, e.prototype.getCueById = function (e) {
                    for (var t = null, r = 0, n = this.length; r < n; r++) {
                        var i = this[r];
                        if (i.id === e) {
                            t = i;
                            break
                        }
                    }
                    return t
                }, e
            }();
            r.default = c, t.exports = r.default
        }, {"../utils/browser.js": 112, "global/document": 7}],
        109: [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = {disabled: "disabled", hidden: "hidden", showing: "showing"}, i = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            };
            r.TextTrackMode = n, r.TextTrackKind = i
        }, {}],
        110: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("../event-target"), l = i(s), u = e("../utils/fn.js"), c = n(u), d = e("../utils/browser.js"), h = n(d), f = e("global/document"), p = i(f), v = function (e) {
                function t() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    o(this, t), e.call(this);
                    var n = this;
                    if (h.IS_IE8) {
                        n = p.default.createElement("custom");
                        for (var i in t.prototype)"constructor" !== i && (n[i] = t.prototype[i])
                    }
                    n.tracks_ = [], Object.defineProperty(n, "length", {
                        get: function () {
                            return this.tracks_.length
                        }
                    });
                    for (var a = 0; a < r.length; a++)n.addTrack_(r[a]);
                    if (h.IS_IE8)return n
                }

                return a(t, e), t.prototype.addTrack_ = function (e) {
                    var t = this.tracks_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get: function () {
                            return this.tracks_[t]
                        }
                    }), e.addEventListener("modechange", c.bind(this, function () {
                        this.trigger("change")
                    })), this.tracks_.indexOf(e) === -1 && (this.tracks_.push(e), this.trigger({
                        track: e,
                        type: "addtrack"
                    }))
                }, t.prototype.removeTrack_ = function (e) {
                    for (var t = void 0, r = 0, n = this.length; r < n; r++)if (this[r] === e) {
                        t = this[r], t.off && t.off(), this.tracks_.splice(r, 1);
                        break
                    }
                    t && this.trigger({track: t, type: "removetrack"})
                }, t.prototype.getTrackById = function (e) {
                    for (var t = null, r = 0, n = this.length; r < n; r++) {
                        var i = this[r];
                        if (i.id === e) {
                            t = i;
                            break
                        }
                    }
                    return t
                }, t
            }(l.default);
            v.prototype.allowedEvents_ = {change: "change", addtrack: "addtrack", removetrack: "removetrack"};
            for (var g in v.prototype.allowedEvents_)v.prototype["on" + g] = null;
            r.default = v, t.exports = r.default
        }, {"../event-target": 87, "../utils/browser.js": 112, "../utils/fn.js": 117, "global/document": 7}],
        111: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            r.__esModule = !0;
            var s = e("./text-track-cue-list"), l = i(s), u = e("../utils/fn.js"), c = n(u), d = e("../utils/guid.js"), h = n(d), f = e("../utils/browser.js"), p = n(f), v = e("./text-track-enums"), g = n(v), y = e("../utils/log.js"), m = i(y), _ = e("../event-target"), b = i(_), E = e("global/document"), T = i(E), w = e("global/window"), k = i(w), O = e("../utils/url.js"), S = e("xhr"), C = i(S), R = function (e, t) {
                var r = new k.default.WebVTT.Parser(k.default, k.default.vttjs, k.default.WebVTT.StringDecoder()), n = [];
                r.oncue = function (e) {
                    t.addCue(e)
                }, r.onparsingerror = function (e) {
                    n.push(e)
                }, r.onflush = function () {
                    t.trigger({type: "loadeddata", target: t})
                }, r.parse(e), n.length > 0 && (console.groupCollapsed, n.forEach(function (e) {
                    return m.default.error(e)
                }), console.groupEnd), r.flush()
            }, A = function (e, t) {
                var r = {uri: e}, n = O.isCrossOrigin(e);
                n && (r.cors = n), C.default(r, c.bind(this, function (e, r, n) {
                    return e ? m.default.error(e, r) : (t.loaded_ = !0, void("function" != typeof k.default.WebVTT ? t.tech_ && !function () {
                        var e = function () {
                            return R(n, t)
                        };
                        t.tech_.on("vttjsloaded", e), t.tech_.on("vttjserror", function () {
                            m.default.error("vttjs failed to load, stopping trying to process " + t.src), t.tech_.off("vttjsloaded", e)
                        })
                    }() : R(n, t)))
                }))
            }, j = function (e) {
                function t() {
                    var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (o(this, t), e.call(this), !r.tech)throw new Error("A tech was not provided.");
                    var n = this;
                    if (p.IS_IE8) {
                        n = T.default.createElement("custom");
                        for (var i in t.prototype)"constructor" !== i && (n[i] = t.prototype[i])
                    }
                    n.tech_ = r.tech;
                    var a = g.TextTrackMode[r.mode] || "disabled", s = g.TextTrackKind[r.kind] || "subtitles", u = r.default, d = r.label || "", f = r.language || r.srclang || "", v = r.id || "vjs_text_track_" + h.newGUID();
                    "metadata" !== s && "chapters" !== s || (a = "hidden"), n.cues_ = [], n.activeCues_ = [];
                    var y = new l.default(n.cues_), m = new l.default(n.activeCues_), _ = !1, b = c.bind(n, function () {
                        this.activeCues, _ && (this.trigger("cuechange"), _ = !1)
                    });
                    if ("disabled" !== a && n.tech_.on("timeupdate", b), Object.defineProperty(n, "kind", {
                            get: function () {
                                return s
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "label", {
                            get: function () {
                                return d
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "language", {
                            get: function () {
                                return f
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "id", {
                            get: function () {
                                return v
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "default", {
                            get: function () {
                                return u
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "mode", {
                            get: function () {
                                return a
                            }, set: function (e) {
                                g.TextTrackMode[e] && (a = e, "showing" === a && this.tech_.on("timeupdate", b), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(n, "cues", {
                            get: function () {
                                return this.loaded_ ? y : null
                            }, set: function () {
                            }
                        }), Object.defineProperty(n, "activeCues", {
                            get: function () {
                                if (!this.loaded_)return null;
                                if (0 === this.cues.length)return m;
                                for (var e = this.tech_.currentTime(), t = [], r = 0, n = this.cues.length; r < n; r++) {
                                    var i = this.cues[r];
                                    i.startTime <= e && i.endTime >= e ? t.push(i) : i.startTime === i.endTime && i.startTime <= e && i.startTime + .5 >= e && t.push(i)
                                }
                                if (_ = !1, t.length !== this.activeCues_.length)_ = !0; else for (var r = 0; r < t.length; r++)this.activeCues_.indexOf(t[r]) === -1 && (_ = !0);
                                return this.activeCues_ = t, m.setCues_(this.activeCues_), m
                            }, set: function () {
                            }
                        }), r.src ? (n.src = r.src, A(r.src, n)) : n.loaded_ = !0, p.IS_IE8)return n
                }

                return a(t, e), t.prototype.addCue = function (e) {
                    var t = this.tech_.textTracks();
                    if (t)for (var r = 0; r < t.length; r++)t[r] !== this && t[r].removeCue(e);
                    this.cues_.push(e), this.cues.setCues_(this.cues_)
                }, t.prototype.removeCue = function (e) {
                    for (var t = !1, r = 0, n = this.cues_.length; r < n; r++) {
                        var i = this.cues_[r];
                        i === e && (this.cues_.splice(r, 1), t = !0)
                    }
                    t && this.cues.setCues_(this.cues_)
                }, t
            }(b.default);
            j.prototype.allowedEvents_ = {cuechange: "cuechange"}, r.default = j, t.exports = r.default
        }, {
            "../event-target": 87,
            "../utils/browser.js": 112,
            "../utils/fn.js": 117,
            "../utils/guid.js": 119,
            "../utils/log.js": 120,
            "../utils/url.js": 125,
            "./text-track-cue-list": 108,
            "./text-track-enums": 109,
            "global/document": 7,
            "global/window": 8,
            xhr: 60
        }],
        112: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("global/document"), o = n(i), a = e("global/window"), s = n(a), l = s.default.navigator.userAgent, u = /AppleWebKit\/([\d.]+)/i.exec(l), c = u ? parseFloat(u.pop()) : null, d = /iPad/i.test(l);
            r.IS_IPAD = d;
            var h = /iPhone/i.test(l) && !d;
            r.IS_IPHONE = h;
            var f = /iPod/i.test(l);
            r.IS_IPOD = f;
            var p = h || d || f;
            r.IS_IOS = p;
            var v = function () {
                var e = l.match(/OS (\d+)_/i);
                if (e && e[1])return e[1]
            }();
            r.IOS_VERSION = v;
            var g = /Android/i.test(l);
            r.IS_ANDROID = g;
            var y = function () {
                var e, t, r = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                return r ? (e = r[1] && parseFloat(r[1]), t = r[2] && parseFloat(r[2]), e && t ? parseFloat(r[1] + "." + r[2]) : e ? e : null) : null
            }();
            r.ANDROID_VERSION = y;
            var m = g && /webkit/i.test(l) && y < 2.3;
            r.IS_OLD_ANDROID = m;
            var _ = g && y < 5 && c < 537;
            r.IS_NATIVE_ANDROID = _;
            var b = /Firefox/i.test(l);
            r.IS_FIREFOX = b;
            var E = /Edge/i.test(l);
            r.IS_EDGE = E;
            var T = !E && /Chrome/i.test(l);
            r.IS_CHROME = T;
            var w = /MSIE\s8\.0/.test(l);
            r.IS_IE8 = w;
            var k = !!("ontouchstart"in s.default || s.default.DocumentTouch && o.default instanceof s.default.DocumentTouch);
            r.TOUCH_ENABLED = k;
            var O = "backgroundSize"in o.default.createElement("video").style;
            r.BACKGROUND_SIZE_SUPPORTED = O
        }, {"global/document": 7, "global/window": 8}],
        113: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                var r, n, o = 0;
                if (!t)return 0;
                e && e.length || (e = i.createTimeRange(0, 0));
                for (var a = 0; a < e.length; a++)r = e.start(a), n = e.end(a), n > t && (n = t), o += n - r;
                return o / t
            }

            r.__esModule = !0, r.bufferedPercent = n;
            var i = e("./time-ranges.js")
        }, {"./time-ranges.js": 123}],
        114: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("./log.js"), o = n(i), a = {
                get: function (e, t) {
                    return e[t]
                }, set: function (e, t, r) {
                    return e[t] = r, !0
                }
            };
            r.default = function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if ("function" == typeof Proxy) {
                    var r = function () {
                        var r = {};
                        return Object.keys(t).forEach(function (e) {
                            a.hasOwnProperty(e) && (r[e] = function () {
                                return o.default.warn(t[e]), a[e].apply(this, arguments)
                            })
                        }), {v: new Proxy(e, r)}
                    }();
                    if ("object" == typeof r)return r.v
                }
                return e
            }, t.exports = r.default
        }, {"./log.js": 120}],
        115: [function (e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function o(e, t) {
                return e.raw = t, e
            }

            function a(e) {
                return "string" == typeof e && /\S/.test(e)
            }

            function s(e) {
                if (/\s/.test(e))throw new Error("class has illegal whitespace characters")
            }

            function l(e) {
                return new RegExp("(^|\\s)" + e + "($|\\s)")
            }

            function u(e) {
                return function (t, r) {
                    return a(t) ? (a(r) && (r = M.default.querySelector(r)), (C(r) ? r : M.default)[e](t)) : M.default[e](null)
                }
            }

            function c(e) {
                return 0 === e.indexOf("#") && (e = e.slice(1)), M.default.getElementById(e)
            }

            function d() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], n = M.default.createElement(e);
                return Object.getOwnPropertyNames(t).forEach(function (e) {
                    var r = t[e];
                    e.indexOf("aria-") !== -1 || "role" === e || "type" === e ? (G.default.warn(V.default(D, e, r)), n.setAttribute(e, r)) : n[e] = r
                }), Object.getOwnPropertyNames(r).forEach(function (e) {
                    r[e];
                    n.setAttribute(e, r[e])
                }), n
            }

            function h(e, t) {
                "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t
            }

            function f(e, t) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }

            function p(e) {
                var t = e[K];
                return t || (t = e[K] = B.newGUID()), W[t] || (W[t] = {}), W[t]
            }

            function v(e) {
                var t = e[K];
                return !!t && !!Object.getOwnPropertyNames(W[t]).length
            }

            function g(e) {
                var t = e[K];
                if (t) {
                    delete W[t];
                    try {
                        delete e[K]
                    } catch (t) {
                        e.removeAttribute ? e.removeAttribute(K) : e[K] = null
                    }
                }
            }

            function y(e, t) {
                return e.classList ? e.classList.contains(t) : (s(t), l(t).test(e.className))
            }

            function m(e, t) {
                return e.classList ? e.classList.add(t) : y(e, t) || (e.className = (e.className + " " + t).trim()), e
            }

            function _(e, t) {
                return e.classList ? e.classList.remove(t) : (s(t), e.className = e.className.split(/\s+/).filter(function (e) {
                    return e !== t
                }).join(" ")), e
            }

            function b(e, t, r) {
                var n = y(e, t);
                if ("function" == typeof r && (r = r(e, t)), "boolean" != typeof r && (r = !n), r !== n)return r ? m(e, t) : _(e, t), e
            }

            function E(e, t) {
                Object.getOwnPropertyNames(t).forEach(function (r) {
                    var n = t[r];
                    null === n || "undefined" == typeof n || n === !1 ? e.removeAttribute(r) : e.setAttribute(r, n === !0 ? "" : n)
                })
            }

            function T(e) {
                var t, r, n, i, o;
                if (t = {}, r = ",autoplay,controls,loop,muted,default,", e && e.attributes && e.attributes.length > 0) {
                    n = e.attributes;
                    for (var a = n.length - 1; a >= 0; a--)i = n[a].name, o = n[a].value, "boolean" != typeof e[i] && r.indexOf("," + i + ",") === -1 || (o = null !== o), t[i] = o
                }
                return t
            }

            function w() {
                M.default.body.focus(), M.default.onselectstart = function () {
                    return !1
                }
            }

            function k() {
                M.default.onselectstart = function () {
                    return !0
                }
            }

            function O(e) {
                var t = void 0;
                if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t)return {
                    left: 0,
                    top: 0
                };
                var r = M.default.documentElement, n = M.default.body, i = r.clientLeft || n.clientLeft || 0, o = N.default.pageXOffset || n.scrollLeft, a = t.left + o - i, s = r.clientTop || n.clientTop || 0, l = N.default.pageYOffset || n.scrollTop, u = t.top + l - s;
                return {left: Math.round(a), top: Math.round(u)}
            }

            function S(e, t) {
                var r = {}, n = O(e), i = e.offsetWidth, o = e.offsetHeight, a = n.top, s = n.left, l = t.pageY, u = t.pageX;
                return t.changedTouches && (u = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), r.y = Math.max(0, Math.min(1, (a - l + o) / o)), r.x = Math.max(0, Math.min(1, (u - s) / i)), r
            }

            function C(e) {
                return !!e && "object" == typeof e && 1 === e.nodeType
            }

            function R(e) {
                return !!e && "object" == typeof e && 3 === e.nodeType
            }

            function A(e) {
                for (; e.firstChild;)e.removeChild(e.firstChild);
                return e
            }

            function j(e) {
                return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function (e) {
                    return "function" == typeof e && (e = e()), C(e) || R(e) ? e : "string" == typeof e && /\S/.test(e) ? M.default.createTextNode(e) : void 0
                }).filter(function (e) {
                    return e
                })
            }

            function L(e, t) {
                return j(t).forEach(function (t) {
                    return e.appendChild(t)
                }), e
            }

            function x(e, t) {
                return L(A(e), t)
            }

            r.__esModule = !0, r.getEl = c, r.createEl = d, r.textContent = h, r.insertElFirst = f, r.getElData = p, r.hasElData = v, r.removeElData = g, r.hasElClass = y, r.addElClass = m, r.removeElClass = _, r.toggleElClass = b, r.setElAttributes = E, r.getElAttributes = T, r.blockTextSelection = w, r.unblockTextSelection = k, r.findElPosition = O, r.getPointerPosition = S, r.isEl = C, r.isTextNode = R, r.emptyEl = A, r.normalizeContent = j, r.appendContent = L, r.insertContent = x;
            var D = o(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]), P = e("global/document"), M = i(P), I = e("global/window"), N = i(I), F = e("./guid.js"), B = n(F), U = e("./log.js"), G = i(U), H = e("tsml"), V = i(H), W = {}, K = "vdata" + (new Date).getTime(), q = u("querySelector");
            r.$ = q;
            var Y = u("querySelectorAll");
            r.$$ = Y
        }, {"./guid.js": 119, "./log.js": 120, "global/document": 7, "global/window": 8, tsml: 59}],
        116: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e, t, r) {
                if (Array.isArray(t))return d(o, e, t, r);
                var n = f.getElData(e);
                n.handlers || (n.handlers = {}), n.handlers[t] || (n.handlers[t] = []), r.guid || (r.guid = v.newGUID()), n.handlers[t].push(r), n.dispatcher || (n.disabled = !1, n.dispatcher = function (t, r) {
                    if (!n.disabled) {
                        t = u(t);
                        var i = n.handlers[t.type];
                        if (i)for (var o = i.slice(0), a = 0, s = o.length; a < s && !t.isImmediatePropagationStopped(); a++)o[a].call(e, t, r)
                    }
                }), 1 === n.handlers[t].length && (e.addEventListener ? e.addEventListener(t, n.dispatcher, !1) : e.attachEvent && e.attachEvent("on" + t, n.dispatcher))
            }

            function a(e, t, r) {
                if (f.hasElData(e)) {
                    var n = f.getElData(e);
                    if (n.handlers) {
                        if (Array.isArray(t))return d(a, e, t, r);
                        var i = function (t) {
                            n.handlers[t] = [], c(e, t)
                        };
                        if (t) {
                            var o = n.handlers[t];
                            if (o) {
                                if (!r)return void i(t);
                                if (r.guid)for (var s = 0; s < o.length; s++)o[s].guid === r.guid && o.splice(s--, 1);
                                c(e, t)
                            }
                        } else for (var l in n.handlers)i(l)
                    }
                }
            }

            function s(e, t, r) {
                var n = f.hasElData(e) ? f.getElData(e) : {}, i = e.parentNode || e.ownerDocument;
                if ("string" == typeof t && (t = {
                        type: t,
                        target: e
                    }), t = u(t), n.dispatcher && n.dispatcher.call(e, t, r), i && !t.isPropagationStopped() && t.bubbles === !0)s.call(null, i, t, r); else if (!i && !t.defaultPrevented) {
                    var o = f.getElData(t.target);
                    t.target[t.type] && (o.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1)
                }
                return !t.defaultPrevented
            }

            function l(e, t, r) {
                if (Array.isArray(t))return d(l, e, t, r);
                var n = function n() {
                    a(e, t, n), r.apply(this, arguments)
                };
                n.guid = r.guid = r.guid || v.newGUID(), o(e, t, n)
            }

            function u(e) {
                function t() {
                    return !0
                }

                function r() {
                    return !1
                }

                if (!e || !e.isPropagationStopped) {
                    var n = e || y.default.event;
                    e = {};
                    for (var i in n)"layerX" !== i && "layerY" !== i && "keyLocation" !== i && "webkitMovementX" !== i && "webkitMovementY" !== i && ("returnValue" === i && n.preventDefault || (e[i] = n[i]));
                    if (e.target || (e.target = e.srcElement || _.default), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
                            n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0
                        }, e.defaultPrevented = !1, e.stopPropagation = function () {
                            n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = t
                        }, e.isPropagationStopped = r, e.stopImmediatePropagation = function () {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                        }, e.isImmediatePropagationStopped = r, null != e.clientX) {
                        var o = _.default.documentElement, a = _.default.body;
                        e.pageX = e.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
                    }
                    e.which = e.charCode || e.keyCode, null != e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
                }
                return e
            }

            function c(e, t) {
                var r = f.getElData(e);
                0 === r.handlers[t].length && (delete r.handlers[t], e.removeEventListener ? e.removeEventListener(t, r.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, r.dispatcher)), Object.getOwnPropertyNames(r.handlers).length <= 0 && (delete r.handlers, delete r.dispatcher, delete r.disabled), 0 === Object.getOwnPropertyNames(r).length && f.removeElData(e)
            }

            function d(e, t, r, n) {
                r.forEach(function (r) {
                    e(t, r, n)
                })
            }

            r.__esModule = !0, r.on = o, r.off = a, r.trigger = s, r.one = l, r.fixEvent = u;
            var h = e("./dom.js"), f = i(h), p = e("./guid.js"), v = i(p), g = e("global/window"), y = n(g), m = e("global/document"), _ = n(m)
        }, {"./dom.js": 115, "./guid.js": 119, "global/document": 7, "global/window": 8}],
        117: [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = e("./guid.js"), i = function (e, t, r) {
                t.guid || (t.guid = n.newGUID());
                var i = function () {
                    return t.apply(e, arguments)
                };
                return i.guid = r ? r + "_" + t.guid : t.guid, i
            };
            r.bind = i
        }, {"./guid.js": 119}],
        118: [function (e, t, r) {
            "use strict";
            function n(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? e : arguments[1];
                return function () {
                    e = e < 0 ? 0 : e;
                    var r = Math.floor(e % 60), n = Math.floor(e / 60 % 60), i = Math.floor(e / 3600), o = Math.floor(t / 60 % 60), a = Math.floor(t / 3600);
                    return (isNaN(e) || e === 1 / 0) && (i = n = r = "-"), i = i > 0 || a > 0 ? i + ":" : "", n = ((i || o >= 10) && n < 10 ? "0" + n : n) + ":", r = r < 10 ? "0" + r : r, i + n + r
                }()
            }

            r.__esModule = !0, r.default = n, t.exports = r.default
        }, {}],
        119: [function (e, t, r) {
            "use strict";
            function n() {
                return i++
            }

            r.__esModule = !0, r.newGUID = n;
            var i = 1
        }, {}],
        120: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                var r = Array.prototype.slice.call(t), n = function () {
                }, i = a.default.console || {log: n, warn: n, error: n};
                e ? r.unshift(e.toUpperCase() + ":") : e = "log", s.history.push(r), r.unshift("VIDEOJS:"), i[e].apply ? i[e].apply(i, r) : i[e](r.join(" "))
            }

            r.__esModule = !0;
            var o = e("global/window"), a = n(o), s = function () {
                i(null, arguments)
            };
            s.history = [], s.error = function () {
                i("error", arguments)
            }, s.warn = function () {
                i("warn", arguments)
            }, r.default = s, t.exports = r.default
        }, {"global/window": 8}],
        121: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e) {
                return !!e && "object" == typeof e && "[object Object]" === e.toString() && e.constructor === Object
            }

            function o() {
                var e = Array.prototype.slice.call(arguments);
                return e.unshift({}), e.push(l), s.default.apply(null, e), e[0]
            }

            r.__esModule = !0, r.default = o;
            var a = e("lodash-compat/object/merge"), s = n(a), l = function (e, t) {
                return i(t) ? i(e) ? void 0 : o(t) : t
            };
            t.exports = r.default
        }, {"lodash-compat/object/merge": 46}],
        122: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("global/document"), o = n(i), a = function (e) {
                var t = o.default.createElement("style");
                return t.className = e, t
            };
            r.createStyleElement = a;
            var s = function (e, t) {
                e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
            };
            r.setTextContent = s
        }, {"global/document": 7}],
        123: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                return Array.isArray(e) ? o(e) : void 0 === e || void 0 === t ? o() : o([[e, t]])
            }

            function o(e) {
                return void 0 === e || 0 === e.length ? {
                    length: 0, start: function () {
                        throw new Error("This TimeRanges object is empty")
                    }, end: function () {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {length: e.length, start: a.bind(null, "start", 0, e), end: a.bind(null, "end", 1, e)}
            }

            function a(e, t, r, n) {
                return void 0 === n && (u.default.warn("DEPRECATED: Function '" + e + "' on 'TimeRanges' called without an index argument."), n = 0), s(e, n, r.length - 1), r[n][t]
            }

            function s(e, t, r) {
                if (t < 0 || t > r)throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is greater than or equal to the maximum bound (" + r + ").")
            }

            r.__esModule = !0, r.createTimeRanges = i;
            var l = e("./log.js"), u = n(l);
            r.createTimeRange = i
        }, {"./log.js": 120}],
        124: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }

            r.__esModule = !0, r.default = n, t.exports = r.default
        }, {}],
        125: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            r.__esModule = !0;
            var i = e("global/document"), o = n(i), a = e("global/window"), s = n(a), l = function (e) {
                var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], r = o.default.createElement("a");
                r.href = e;
                var n = "" === r.host && "file:" !== r.protocol, i = void 0;
                n && (i = o.default.createElement("div"), i.innerHTML = '<a href="' + e + '"></a>', r = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), o.default.body.appendChild(i));
                for (var a = {}, s = 0; s < t.length; s++)a[t[s]] = r[t[s]];
                return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), n && o.default.body.removeChild(i), a
            };
            r.parseUrl = l;
            var u = function (e) {
                if (!e.match(/^https?:\/\//)) {
                    var t = o.default.createElement("div");
                    t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
                }
                return e
            };
            r.getAbsoluteURL = u;
            var c = function (e) {
                if ("string" == typeof e) {
                    var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i, r = t.exec(e);
                    if (r)return r.pop().toLowerCase()
                }
                return ""
            };
            r.getFileExtension = c;
            var d = function (e) {
                var t = s.default.location, r = l(e), n = ":" === r.protocol ? t.protocol : r.protocol, i = n + r.host !== t.protocol + t.host;
                return i
            };
            r.isCrossOrigin = d
        }, {"global/document": 7, "global/window": 8}],
        126: [function (t, r, n) {
            "use strict";
            function i(e) {
                if (e && e.__esModule)return e;
                var t = {};
                if (null != e)for (var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {default: e}
            }

            n.__esModule = !0;
            var a = t("global/window"), s = o(a), l = t("global/document"), u = o(l), c = t("./setup"), d = i(c), h = t("./utils/stylesheet.js"), f = i(h), p = t("./component"), v = o(p), g = t("./event-target"), y = o(g), m = t("./utils/events.js"), _ = i(m), b = t("./player"), E = o(b), T = t("./plugins.js"), w = o(T), k = t("../../src/js/utils/merge-options.js"), O = o(k), S = t("./utils/fn.js"), C = i(S), R = t("./tracks/text-track.js"), A = o(R), j = t("object.assign"), L = (o(j), t("./utils/time-ranges.js")), x = t("./utils/format-time.js"), D = o(x), P = t("./utils/log.js"), M = o(P), I = t("./utils/dom.js"), N = i(I), F = t("./utils/browser.js"), B = i(F), U = t("./utils/url.js"), G = i(U), H = t("./extend.js"), V = o(H), W = t("lodash-compat/object/merge"), K = o(W), q = t("./utils/create-deprecation-proxy.js"), Y = o(q), X = t("xhr"), z = o(X), $ = t("./tech/tech.js"), J = o($), Q = t("./tech/html5.js"), Z = (o(Q), t("./tech/flash.js"));
            o(Z);
            "undefined" == typeof HTMLVideoElement && (u.default.createElement("video"), u.default.createElement("audio"), u.default.createElement("track"));
            var ee = function e(t, r, n) {
                var i = void 0;
                if ("string" == typeof t) {
                    if (0 === t.indexOf("#") && (t = t.slice(1)), e.getPlayers()[t])return r && M.default.warn('Player "' + t + '" is already initialised. Options will not be applied.'), n && e.getPlayers()[t].ready(n), e.getPlayers()[t];
                    i = N.getEl(t)
                } else i = t;
                if (!i || !i.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");
                return i.player || E.default.players[i.playerId] || new E.default(i, r, n);
            };
            if (s.default.VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                var te = N.$(".vjs-styles-defaults");
                if (!te) {
                    te = f.createStyleElement("vjs-styles-defaults");
                    var re = N.$("head");
                    re.insertBefore(te, re.firstChild), f.setTextContent(te, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            d.autoSetupTimeout(1, ee), ee.VERSION = "5.9.2", ee.options = E.default.prototype.options_, ee.getPlayers = function () {
                return E.default.players
            }, ee.players = Y.default(E.default.players, {
                get: "Access to videojs.players is deprecated; use videojs.getPlayers instead",
                set: "Modification of videojs.players is deprecated"
            }), ee.getComponent = v.default.getComponent, ee.registerComponent = function (e, t) {
                J.default.isTech(t) && M.default.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), v.default.registerComponent.call(v.default, e, t)
            }, ee.getTech = J.default.getTech, ee.registerTech = J.default.registerTech, ee.browser = B, ee.TOUCH_ENABLED = B.TOUCH_ENABLED, ee.extend = V.default, ee.mergeOptions = O.default, ee.bind = C.bind, ee.plugin = w.default, ee.addLanguage = function (e, t) {
                var r;
                return e = ("" + e).toLowerCase(), K.default(ee.options.languages, (r = {}, r[e] = t, r))[e]
            }, ee.log = M.default, ee.createTimeRange = ee.createTimeRanges = L.createTimeRanges, ee.formatTime = D.default, ee.parseUrl = G.parseUrl, ee.isCrossOrigin = G.isCrossOrigin, ee.EventTarget = y.default, ee.on = _.on, ee.one = _.one, ee.off = _.off, ee.trigger = _.trigger, ee.xhr = z.default, ee.TextTrack = A.default, ee.isEl = N.isEl, ee.isTextNode = N.isTextNode, ee.createEl = N.createEl, ee.hasClass = N.hasElClass, ee.addClass = N.addElClass, ee.removeClass = N.removeElClass, ee.toggleClass = N.toggleElClass, ee.setAttributes = N.setElAttributes, ee.getAttributes = N.getElAttributes, ee.emptyEl = N.emptyEl, ee.appendContent = N.appendContent, ee.insertContent = N.insertContent, "function" == typeof e && e.amd ? e("videojs", [], function () {
                return ee
            }) : "object" == typeof n && "object" == typeof r && (r.exports = ee), n.default = ee, r.exports = n.default
        }, {
            "../../src/js/utils/merge-options.js": 121,
            "./component": 65,
            "./event-target": 87,
            "./extend.js": 88,
            "./player": 95,
            "./plugins.js": 96,
            "./setup": 99,
            "./tech/flash.js": 102,
            "./tech/html5.js": 103,
            "./tech/tech.js": 105,
            "./tracks/text-track.js": 111,
            "./utils/browser.js": 112,
            "./utils/create-deprecation-proxy.js": 114,
            "./utils/dom.js": 115,
            "./utils/events.js": 116,
            "./utils/fn.js": 117,
            "./utils/format-time.js": 118,
            "./utils/log.js": 120,
            "./utils/stylesheet.js": 122,
            "./utils/time-ranges.js": 123,
            "./utils/url.js": 125,
            "global/document": 7,
            "global/window": 8,
            "lodash-compat/object/merge": 46,
            "object.assign": 53,
            xhr: 60
        }]
    }, {}, [126])(126)
}), function (e) {
    var t = e.vttjs = {}, r = t.VTTCue, n = t.VTTRegion, i = e.VTTCue, o = e.VTTRegion;
    t.shim = function () {
        t.VTTCue = r, t.VTTRegion = n
    }, t.restore = function () {
        t.VTTCue = i, t.VTTRegion = o
    }
}(this), function (e, t) {
    function r(e) {
        if ("string" != typeof e)return !1;
        var t = s[e.toLowerCase()];
        return !!t && e.toLowerCase()
    }

    function n(e) {
        if ("string" != typeof e)return !1;
        var t = l[e.toLowerCase()];
        return !!t && e.toLowerCase()
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)e[n] = r[n]
        }
        return e
    }

    function o(e, t, o) {
        var s = this, l = /MSIE\s8\.0/.test(navigator.userAgent), u = {};
        l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
        var c = "", d = !1, h = e, f = t, p = o, v = null, g = "", y = !0, m = "auto", _ = "start", b = 50, E = "middle", T = 50, w = "middle";
        if (Object.defineProperty(s, "id", i({}, u, {
                get: function () {
                    return c
                }, set: function (e) {
                    c = "" + e
                }
            })), Object.defineProperty(s, "pauseOnExit", i({}, u, {
                get: function () {
                    return d
                }, set: function (e) {
                    d = !!e
                }
            })), Object.defineProperty(s, "startTime", i({}, u, {
                get: function () {
                    return h
                }, set: function (e) {
                    if ("number" != typeof e)throw new TypeError("Start time must be set to a number.");
                    h = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "endTime", i({}, u, {
                get: function () {
                    return f
                }, set: function (e) {
                    if ("number" != typeof e)throw new TypeError("End time must be set to a number.");
                    f = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "text", i({}, u, {
                get: function () {
                    return p
                }, set: function (e) {
                    p = "" + e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "region", i({}, u, {
                get: function () {
                    return v
                }, set: function (e) {
                    v = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "vertical", i({}, u, {
                get: function () {
                    return g
                }, set: function (e) {
                    var t = r(e);
                    if (t === !1)throw new SyntaxError("An invalid or illegal string was specified.");
                    g = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "snapToLines", i({}, u, {
                get: function () {
                    return y
                }, set: function (e) {
                    y = !!e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "line", i({}, u, {
                get: function () {
                    return m
                }, set: function (e) {
                    if ("number" != typeof e && e !== a)throw new SyntaxError("An invalid number or illegal string was specified.");
                    m = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "lineAlign", i({}, u, {
                get: function () {
                    return _
                }, set: function (e) {
                    var t = n(e);
                    if (!t)throw new SyntaxError("An invalid or illegal string was specified.");
                    _ = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "position", i({}, u, {
                get: function () {
                    return b
                }, set: function (e) {
                    if (e < 0 || e > 100)throw new Error("Position must be between 0 and 100.");
                    b = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "positionAlign", i({}, u, {
                get: function () {
                    return E
                }, set: function (e) {
                    var t = n(e);
                    if (!t)throw new SyntaxError("An invalid or illegal string was specified.");
                    E = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "size", i({}, u, {
                get: function () {
                    return T
                }, set: function (e) {
                    if (e < 0 || e > 100)throw new Error("Size must be between 0 and 100.");
                    T = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(s, "align", i({}, u, {
                get: function () {
                    return w
                }, set: function (e) {
                    var t = n(e);
                    if (!t)throw new SyntaxError("An invalid or illegal string was specified.");
                    w = t, this.hasBeenReset = !0
                }
            })), s.displayState = void 0, l)return s
    }

    var a = "auto", s = {"": !0, lr: !0, rl: !0}, l = {start: !0, middle: !0, end: !0, left: !0, right: !0};
    o.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, e.VTTCue = e.VTTCue || o, t.VTTCue = o
}(this, this.vttjs || {}), function (e, t) {
    function r(e) {
        if ("string" != typeof e)return !1;
        var t = o[e.toLowerCase()];
        return !!t && e.toLowerCase()
    }

    function n(e) {
        return "number" == typeof e && e >= 0 && e <= 100
    }

    function i() {
        var e = 100, t = 3, i = 0, o = 100, a = 0, s = 100, l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0, get: function () {
                    return e
                }, set: function (t) {
                    if (!n(t))throw new Error("Width must be between 0 and 100.");
                    e = t
                }
            }, lines: {
                enumerable: !0, get: function () {
                    return t
                }, set: function (e) {
                    if ("number" != typeof e)throw new TypeError("Lines must be set to a number.");
                    t = e
                }
            }, regionAnchorY: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (e) {
                    if (!n(e))throw new Error("RegionAnchorX must be between 0 and 100.");
                    o = e
                }
            }, regionAnchorX: {
                enumerable: !0, get: function () {
                    return i
                }, set: function (e) {
                    if (!n(e))throw new Error("RegionAnchorY must be between 0 and 100.");
                    i = e
                }
            }, viewportAnchorY: {
                enumerable: !0, get: function () {
                    return s
                }, set: function (e) {
                    if (!n(e))throw new Error("ViewportAnchorY must be between 0 and 100.");
                    s = e
                }
            }, viewportAnchorX: {
                enumerable: !0, get: function () {
                    return a
                }, set: function (e) {
                    if (!n(e))throw new Error("ViewportAnchorX must be between 0 and 100.");
                    a = e
                }
            }, scroll: {
                enumerable: !0, get: function () {
                    return l
                }, set: function (e) {
                    var t = r(e);
                    if (t === !1)throw new SyntaxError("An invalid or illegal string was specified.");
                    l = t
                }
            }
        })
    }

    var o = {"": !0, up: !0};
    e.VTTRegion = e.VTTRegion || i, t.VTTRegion = i
}(this, this.vttjs || {}), function (e) {
    function t(e, t) {
        this.name = "ParsingError", this.code = e.code, this.message = t || e.message
    }

    function r(e) {
        function t(e, t, r, n) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | n) / 1e3
        }

        var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
    }

    function n() {
        this.values = p(null)
    }

    function i(e, t, r, n) {
        var i = n ? e.split(n) : [e];
        for (var o in i)if ("string" == typeof i[o]) {
            var a = i[o].split(r);
            if (2 === a.length) {
                var s = a[0], l = a[1];
                t(s, l)
            }
        }
    }

    function o(e, o, a) {
        function s() {
            var n = r(e);
            if (null === n)throw new t(t.Errors.BadTimeStamp, "Malformed timestamp: " + c);
            return e = e.replace(/^[^\sa-zA-Z-]+/, ""), n
        }

        function l(e, t) {
            var r = new n;
            i(e, function (e, t) {
                switch (e) {
                    case"region":
                        for (var n = a.length - 1; n >= 0; n--)if (a[n].id === t) {
                            r.set(e, a[n].region);
                            break
                        }
                        break;
                    case"vertical":
                        r.alt(e, t, ["rl", "lr"]);
                        break;
                    case"line":
                        var i = t.split(","), o = i[0];
                        r.integer(e, o), r.percent(e, o) ? r.set("snapToLines", !1) : null, r.alt(e, o, ["auto"]), 2 === i.length && r.alt("lineAlign", i[1], ["start", "middle", "end"]);
                        break;
                    case"position":
                        i = t.split(","), r.percent(e, i[0]), 2 === i.length && r.alt("positionAlign", i[1], ["start", "middle", "end"]);
                        break;
                    case"size":
                        r.percent(e, t);
                        break;
                    case"align":
                        r.alt(e, t, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), t.region = r.get("region", null), t.vertical = r.get("vertical", ""), t.line = r.get("line", "auto"), t.lineAlign = r.get("lineAlign", "start"), t.snapToLines = r.get("snapToLines", !0), t.size = r.get("size", 100), t.align = r.get("align", "middle"), t.position = r.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, t.align), t.positionAlign = r.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, t.align)
        }

        function u() {
            e = e.replace(/^\s+/, "")
        }

        var c = e;
        if (u(), o.startTime = s(), u(), "-->" !== e.substr(0, 3))throw new t(t.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
        e = e.substr(3), u(), o.endTime = s(), u(), l(e, o)
    }

    function a(e, t) {
        function n() {
            function e(e) {
                return t = t.substr(e.length), e
            }

            if (!t)return null;
            var r = t.match(/^([^<]*)(<[^>]+>?)?/);
            return e(r[1] ? r[1] : r[2])
        }

        function i(e) {
            return v[e]
        }

        function o(e) {
            for (; p = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)e = e.replace(p[0], i);
            return e
        }

        function a(e, t) {
            return !m[t.localName] || m[t.localName] === e.localName
        }

        function s(t, r) {
            var n = g[t];
            if (!n)return null;
            var i = e.document.createElement(n);
            i.localName = n;
            var o = y[t];
            return o && r && (i[o] = r.trim()), i
        }

        for (var l, u = e.document.createElement("div"), c = u, d = []; null !== (l = n());)if ("<" !== l[0])c.appendChild(e.document.createTextNode(o(l))); else {
            if ("/" === l[1]) {
                d.length && d[d.length - 1] === l.substr(2).replace(">", "") && (d.pop(), c = c.parentNode);
                continue
            }
            var h, f = r(l.substr(1, l.length - 2));
            if (f) {
                h = e.document.createProcessingInstruction("timestamp", f), c.appendChild(h);
                continue
            }
            var p = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
            if (!p)continue;
            if (h = s(p[1], p[3]), !h)continue;
            if (!a(c, h))continue;
            p[2] && (h.className = p[2].substr(1).replace(".", " ")), d.push(p[1]), c.appendChild(h), c = h
        }
        return u
    }

    function s(e) {
        function t(e, t) {
            for (var r = t.childNodes.length - 1; r >= 0; r--)e.push(t.childNodes[r])
        }

        function r(e) {
            if (!e || !e.length)return null;
            var n = e.pop(), i = n.textContent || n.innerText;
            if (i) {
                var o = i.match(/^.*(\n|\r)/);
                return o ? (e.length = 0, o[0]) : i
            }
            return "ruby" === n.tagName ? r(e) : n.childNodes ? (t(e, n), r(e)) : void 0
        }

        var n, i = [], o = "";
        if (!e || !e.childNodes)return "ltr";
        for (t(i, e); o = r(i);)for (var a = 0; a < o.length; a++) {
            n = o.charCodeAt(a);
            for (var s = 0; s < _.length; s++)if (_[s] === n)return "rtl"
        }
        return "ltr"
    }

    function l(e) {
        if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100))return e.line;
        if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement)return -1;
        for (var t = e.track, r = t.textTrackList, n = 0, i = 0; i < r.length && r[i] !== t; i++)"showing" === r[i].mode && n++;
        return ++n * -1
    }

    function u() {
    }

    function c(e, t, r) {
        var n = /MSIE\s8\.0/.test(navigator.userAgent), i = "rgba(255, 255, 255, 1)", o = "rgba(0, 0, 0, 0.8)";
        n && (i = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), u.call(this), this.cue = t, this.cueDiv = a(e, t.text);
        var l = {
            color: i,
            backgroundColor: o,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        n || (l.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = e.document.createElement("div"), l = {
            textAlign: "middle" === t.align ? "center" : t.align,
            font: r.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, n || (l.direction = s(this.cueDiv), l.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var c = 0;
        switch (t.positionAlign) {
            case"start":
                c = t.position;
                break;
            case"middle":
                c = t.position - t.size / 2;
                break;
            case"end":
                c = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(c, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(c, "%"),
            height: this.formatStyle(t.size, "%")
        }), this.move = function (e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }

    function d(e) {
        var t, r, n, i, o = /MSIE\s8\.0/.test(navigator.userAgent);
        if (e.div) {
            r = e.div.offsetHeight, n = e.div.offsetWidth, i = e.div.offsetTop;
            var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
            e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
        }
        this.left = e.left, this.right = e.right, this.top = e.top || i, this.height = e.height || r, this.bottom = e.bottom || i + (e.height || r), this.width = e.width || n, this.lineHeight = void 0 !== t ? t : e.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
    }

    function h(e, t, r, n) {
        function i(e, t) {
            for (var i, o = new d(e), a = 1, s = 0; s < t.length; s++) {
                for (; e.overlapsOppositeAxis(r, t[s]) || e.within(r) && e.overlapsAny(n);)e.move(t[s]);
                if (e.within(r))return e;
                var l = e.intersectPercentage(r);
                a > l && (i = new d(e), a = l), e = new d(o)
            }
            return i || o
        }

        var o = new d(t), a = t.cue, s = l(a), u = [];
        if (a.snapToLines) {
            var c;
            switch (a.vertical) {
                case"":
                    u = ["+y", "-y"], c = "height";
                    break;
                case"rl":
                    u = ["+x", "-x"], c = "width";
                    break;
                case"lr":
                    u = ["-x", "+x"], c = "width"
            }
            var h = o.lineHeight, f = h * Math.round(s), p = r[c] + h, v = u[0];
            Math.abs(f) > p && (f = f < 0 ? -1 : 1, f *= Math.ceil(p / h) * h), s < 0 && (f += "" === a.vertical ? r.height : r.width, u = u.reverse()), o.move(v, f)
        } else {
            var g = o.lineHeight / r.height * 100;
            switch (a.lineAlign) {
                case"middle":
                    s -= g / 2;
                    break;
                case"end":
                    s -= g
            }
            switch (a.vertical) {
                case"":
                    t.applyStyles({top: t.formatStyle(s, "%")});
                    break;
                case"rl":
                    t.applyStyles({left: t.formatStyle(s, "%")});
                    break;
                case"lr":
                    t.applyStyles({right: t.formatStyle(s, "%")})
            }
            u = ["+y", "-x", "+x", "-y"], o = new d(t)
        }
        var y = i(o, u);
        t.move(y.toCSSCompatValues(r))
    }

    function f() {
    }

    var p = Object.create || function () {
            function e() {
            }

            return function (t) {
                if (1 !== arguments.length)throw new Error("Object.create shim only accepts one parameter.");
                return e.prototype = t, new e
            }
        }();
    t.prototype = p(Error.prototype), t.prototype.constructor = t, t.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
    }, n.prototype = {
        set: function (e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        }, get: function (e, t, r) {
            return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
        }, has: function (e) {
            return e in this.values
        }, alt: function (e, t, r) {
            for (var n = 0; n < r.length; ++n)if (t === r[n]) {
                this.set(e, t);
                break
            }
        }, integer: function (e, t) {
            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
        }, percent: function (e, t) {
            var r;
            return !!((r = t.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (t = parseFloat(t), t >= 0 && t <= 100)) && (this.set(e, t), !0)
        }
    };
    var v = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "}, g = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }, y = {
        v: "title",
        lang: "lang"
    }, m = {rt: "ruby"}, _ = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    u.prototype.applyStyles = function (e, t) {
        t = t || this.div;
        for (var r in e)e.hasOwnProperty(r) && (t.style[r] = e[r])
    }, u.prototype.formatStyle = function (e, t) {
        return 0 === e ? 0 : e + t
    }, c.prototype = p(u.prototype), c.prototype.constructor = c, d.prototype.move = function (e, t) {
        switch (t = void 0 !== t ? t : this.lineHeight, e) {
            case"+x":
                this.left += t, this.right += t;
                break;
            case"-x":
                this.left -= t, this.right -= t;
                break;
            case"+y":
                this.top += t, this.bottom += t;
                break;
            case"-y":
                this.top -= t, this.bottom -= t
        }
    }, d.prototype.overlaps = function (e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    }, d.prototype.overlapsAny = function (e) {
        for (var t = 0; t < e.length; t++)if (this.overlaps(e[t]))return !0;
        return !1
    }, d.prototype.within = function (e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    }, d.prototype.overlapsOppositeAxis = function (e, t) {
        switch (t) {
            case"+x":
                return this.left < e.left;
            case"-x":
                return this.right > e.right;
            case"+y":
                return this.top < e.top;
            case"-y":
                return this.bottom > e.bottom
        }
    }, d.prototype.intersectPercentage = function (e) {
        var t = Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)), r = Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)), n = t * r;
        return n / (this.height * this.width)
    }, d.prototype.toCSSCompatValues = function (e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    }, d.getSimpleBoxPosition = function (e) {
        var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0, r = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0, n = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
        e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e;
        var i = {
            left: e.left,
            right: e.right,
            top: e.top || n,
            height: e.height || t,
            bottom: e.bottom || n + (e.height || t),
            width: e.width || r
        };
        return i
    }, f.StringDecoder = function () {
        return {
            decode: function (e) {
                if (!e)return "";
                if ("string" != typeof e)throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    }, f.convertCueToDOMTree = function (e, t) {
        return e && t ? a(e, t) : null
    };
    var b = .05, E = "sans-serif", T = "1.5%";
    f.processCues = function (e, t, r) {
        function n(e) {
            for (var t = 0; t < e.length; t++)if (e[t].hasBeenReset || !e[t].displayState)return !0;
            return !1
        }

        if (!e || !t || !r)return null;
        for (; r.firstChild;)r.removeChild(r.firstChild);
        var i = e.document.createElement("div");
        if (i.style.position = "absolute", i.style.left = "0", i.style.right = "0", i.style.top = "0", i.style.bottom = "0", i.style.margin = T, r.appendChild(i), n(t)) {
            var o = [], a = d.getSimpleBoxPosition(i), s = Math.round(a.height * b * 100) / 100, l = {font: s + "px " + E};
            !function () {
                for (var r, n, s = 0; s < t.length; s++)n = t[s], r = new c(e, n, l), i.appendChild(r.div), h(e, r, a, o), n.displayState = r.div, o.push(d.getSimpleBoxPosition(r))
            }()
        } else for (var u = 0; u < t.length; u++)i.appendChild(t[u].displayState)
    }, f.Parser = function (e, t, r) {
        r || (r = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = r || new TextDecoder("utf8"), this.regionList = []
    }, f.Parser.prototype = {
        reportOrThrowError: function (e) {
            if (!(e instanceof t))throw e;
            this.onparsingerror && this.onparsingerror(e)
        }, parse: function (e) {
            function r() {
                for (var e = l.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];)++t;
                var r = e.substr(0, t);
                return "\r" === e[t] && ++t, "\n" === e[t] && ++t, l.buffer = e.substr(t), r
            }

            function a(e) {
                var t = new n;
                if (i(e, function (e, r) {
                        switch (e) {
                            case"id":
                                t.set(e, r);
                                break;
                            case"width":
                                t.percent(e, r);
                                break;
                            case"lines":
                                t.integer(e, r);
                                break;
                            case"regionanchor":
                            case"viewportanchor":
                                var i = r.split(",");
                                if (2 !== i.length)break;
                                var o = new n;
                                if (o.percent("x", i[0]), o.percent("y", i[1]), !o.has("x") || !o.has("y"))break;
                                t.set(e + "X", o.get("x")), t.set(e + "Y", o.get("y"));
                                break;
                            case"scroll":
                                t.alt(e, r, ["up"])
                        }
                    }, /=/, /\s/), t.has("id")) {
                    var r = new (l.vttjs.VTTRegion || l.window.VTTRegion);
                    r.width = t.get("width", 100), r.lines = t.get("lines", 3), r.regionAnchorX = t.get("regionanchorX", 0), r.regionAnchorY = t.get("regionanchorY", 100), r.viewportAnchorX = t.get("viewportanchorX", 0), r.viewportAnchorY = t.get("viewportanchorY", 100), r.scroll = t.get("scroll", ""), l.onregion && l.onregion(r), l.regionList.push({
                        id: t.get("id"),
                        region: r
                    })
                }
            }

            function s(e) {
                i(e, function (e, t) {
                    switch (e) {
                        case"Region":
                            a(t)
                    }
                }, /:/)
            }

            var l = this;
            e && (l.buffer += l.decoder.decode(e, {stream: !0}));
            try {
                var u;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer))return this;
                    u = r();
                    var c = u.match(/^WEBVTT([ \t].*)?$/);
                    if (!c || !c[0])throw new t(t.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var d = !1; l.buffer;) {
                    if (!/\r\n|\n/.test(l.buffer))return this;
                    switch (d ? d = !1 : u = r(), l.state) {
                        case"HEADER":
                            /:/.test(u) ? s(u) : u || (l.state = "ID");
                            continue;
                        case"NOTE":
                            u || (l.state = "ID");
                            continue;
                        case"ID":
                            if (/^NOTE($|[ \t])/.test(u)) {
                                l.state = "NOTE";
                                break
                            }
                            if (!u)continue;
                            if (l.cue = new (l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", u.indexOf("-->") === -1) {
                                l.cue.id = u;
                                continue
                            }
                        case"CUE":
                            try {
                                o(u, l.cue, l.regionList)
                            } catch (e) {
                                l.reportOrThrowError(e), l.cue = null, l.state = "BADCUE";
                                continue
                            }
                            l.state = "CUETEXT";
                            continue;
                        case"CUETEXT":
                            var h = u.indexOf("-->") !== -1;
                            if (!u || h && (d = !0)) {
                                l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                continue
                            }
                            l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                            continue;
                        case"BADCUE":
                            u || (l.state = "ID");
                            continue
                    }
                }
            } catch (e) {
                l.reportOrThrowError(e), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        }, flush: function () {
            var e = this;
            try {
                if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state)throw new t(t.Errors.BadSignature)
            } catch (t) {
                e.reportOrThrowError(t)
            }
            return e.onflush && e.onflush(), this
        }
    }, e.WebVTT = f
}(this, this.vttjs || {});
var Destm = function (e, t) {
    function r(e, t) {
        var r = "";
        if ("object" == typeof e)for (var n in e)r += String.fromCharCode(e[n]);
        e = r || e;
        for (var i, o, a = new Uint8Array(e.length), s = t.length, n = 0; n < e.length; n++)o = n % s, i = e[n], i = i.toString().charCodeAt(0), a[n] = i ^ t.charCodeAt(o);
        return a
    }

    function n(e) {
        var t = "";
        if ("object" == typeof e)for (var r in e)t += String.fromCharCode(e[r]);
        e = t || e;
        var n = new Uint8Array(e.length);
        for (r = 0; r < e.length; r++)n[r] = e[r].toString().charCodeAt(0);
        var i, o, r = 0;
        for (r = 0; r < n.length; r++)i = n[r] % 3, 0 != i && r + i < n.length && (o = n[r + 1], n[r + 1] = n[r + i], n[r + i] = o, r = r + i + 1);
        return n
    }

    function i(e) {
        var t = "";
        if ("object" == typeof e)for (var r in e)t += String.fromCharCode(e[r]);
        e = t || e;
        var n = new Uint8Array(e.length);
        for (r = 0; r < e.length; r++)n[r] = e[r].toString().charCodeAt(0);
        var r = 0, i = 0, o = 0, a = 0;
        for (r = 0; r < n.length; r++)o = n[r] % 2, o && r++, a++;
        var s = new Uint8Array(a);
        for (r = 0; r < n.length; r++)o = n[r] % 2, o ? s[i++] = n[r++] : s[i++] = n[r];
        return s
    }

    function o(e, t) {
        var r = 0, n = 0, i = 0, o = 0, a = "";
        if ("object" == typeof e)for (var r in e)a += String.fromCharCode(e[r]);
        e = a || e;
        var s = new Uint8Array(e.length);
        for (r = 0; r < e.length; r++)s[r] = e[r].toString().charCodeAt(0);
        for (r = 0; r < e.length; r++)if (o = s[r] % 5, 0 != o && 1 != o && r + o < s.length && (i = s[r + 1], n = r + 2, s[r + 1] = s[r + o], s[o + r] = i, r = r + o + 1, r - 2 > n))for (; n < r - 2; n++)s[n] = s[n] ^ t.charCodeAt(n % t.length);
        for (r = 0; r < e.length; r++)s[r] = s[r] ^ t.charCodeAt(r % t.length);
        return s
    }

    function a(e) {
        var t, r, n, i, o, a, s;
        for (a = e.length, o = 0, s = ""; o < a;) {
            do t = f[255 & e.charCodeAt(o++)]; while (o < a && t == -1);
            if (t == -1)break;
            do r = f[255 & e.charCodeAt(o++)]; while (o < a && r == -1);
            if (r == -1)break;
            s += String.fromCharCode(t << 2 | (48 & r) >> 4);
            do {
                if (n = 255 & e.charCodeAt(o++), 61 == n)return s;
                n = f[n]
            } while (o < a && n == -1);
            if (n == -1)break;
            s += String.fromCharCode((15 & r) << 4 | (60 & n) >> 2);
            do {
                if (i = 255 & e.charCodeAt(o++), 61 == i)return s;
                i = f[i]
            } while (o < a && i == -1);
            if (i == -1)break;
            s += String.fromCharCode((3 & n) << 6 | i)
        }
        return s
    }

    for (var s = {data: {info: e}}, l = {
        q: r,
        h: n,
        m: i,
        k: o
    }, u = s.data.info, c = u.substring(u.length - 4).split(""), d = 0; d < c.length; d++)c[d] = c[d].toString().charCodeAt(0) % 4;
    c.reverse();
    for (var h = [], d = 0; d < c.length; d++)h.push(u.substring(c[d] + 1, c[d] + 2)), u = u.substring(0, c[d] + 1) + u.substring(c[d] + 2);
    s.data.encrypt_table = h, s.data.key_table = [];
    for (var d in s.data.encrypt_table)"q" != s.data.encrypt_table[d] && "k" != s.data.encrypt_table[d] || (s.data.key_table.push(u.substring(u.length - 12)), u = u.substring(0, u.length - 12));
    s.data.key_table.reverse(), s.data.info = u;
    var f = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
    s.data.info = a(s.data.info);
    for (var d in s.data.encrypt_table) {
        var p = s.data.encrypt_table[d];
        if ("q" == p || "k" == p) {
            var v = s.data.key_table.pop();
            s.data.info = l[s.data.encrypt_table[d]](s.data.info, v)
        } else s.data.info = l[s.data.encrypt_table[d]](s.data.info)
    }
    if (t)return s.data.info;
    var g = "";
    for (d = 0; d < s.data.info.length; d++)g += String.fromCharCode(s.data.info[d]);
    return g
};
!function (e) {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Hls = e()
}(function () {
    var define, module, exports;
    return function e(t, r, n) {
        function i(a, s) {
            if (!r[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)return l(a, !0);
                    if (o)return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[a] = {exports: {}};
                t[a][0].call(c.exports, function (e) {
                    var r = t[a][1][e];
                    return i(r ? r : e)
                }, c, c.exports, e, t, r, n)
            }
            return r[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < n.length; a++)i(n[a]);
        return i
    }({
        1: [function (e, t, r) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function i(e) {
                return "function" == typeof e
            }

            function o(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "object" == typeof e && null !== e
            }

            function s(e) {
                return void 0 === e
            }

            t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
                if (!o(e) || e < 0 || isNaN(e))throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function (e) {
                var t, r, n, o, l, u;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error)throw t;
                    var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw c.context = t, c
                }
                if (r = this._events[e], s(r))return !1;
                if (i(r))switch (arguments.length) {
                    case 1:
                        r.call(this);
                        break;
                    case 2:
                        r.call(this, arguments[1]);
                        break;
                    case 3:
                        r.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        o = Array.prototype.slice.call(arguments, 1), r.apply(this, o)
                } else if (a(r))for (o = Array.prototype.slice.call(arguments, 1), u = r.slice(), n = u.length, l = 0; l < n; l++)u[l].apply(this, o);
                return !0
            }, n.prototype.addListener = function (e, t) {
                var r;
                if (!i(t))throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (r = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, "function" == typeof console.trace)), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
                function r() {
                    this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
                }

                if (!i(t))throw TypeError("listener must be a function");
                var n = !1;
                return r.listener = t, this.on(e, r), this
            }, n.prototype.removeListener = function (e, t) {
                var r, n, o, s;
                if (!i(t))throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])return this;
                if (r = this._events[e], o = r.length, n = -1, r === t || i(r.listener) && r.listener === t)delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t); else if (a(r)) {
                    for (s = o; s-- > 0;)if (r[s] === t || r[s].listener && r[s].listener === t) {
                        n = s;
                        break
                    }
                    if (n < 0)return this;
                    1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function (e) {
                var t, r;
                if (!this._events)return this;
                if (!this._events.removeListener)return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r = this._events[e], i(r))this.removeListener(e, r); else if (r)for (; r.length;)this.removeListener(e, r[r.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function (e) {
                var t;
                return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.prototype.listenerCount = function (e) {
                if (this._events) {
                    var t = this._events[e];
                    if (i(t))return 1;
                    if (t)return t.length
                }
                return 0
            }, n.listenerCount = function (e, t) {
                return e.listenerCount(t)
            }
        }, {}], 2: [function (e, t, r) {
            !function (e) {
                var n = {
                    buildAbsoluteURL: function (e, t) {
                        if (t = t.trim(), /^[a-z]+:/i.test(t))return t;
                        var r = null, i = null, o = /^([^#]*)(.*)$/.exec(t);
                        o && (i = o[2], t = o[1]);
                        var a = /^([^\?]*)(.*)$/.exec(t);
                        a && (r = a[2], t = a[1]);
                        var s = /^([^#]*)(.*)$/.exec(e);
                        s && (e = s[1]);
                        var l = /^([^\?]*)(.*)$/.exec(e);
                        l && (e = l[1]);
                        var u = /^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(e);
                        if (!u)throw new Error("Error trying to parse base URL.");
                        var c = u[2] || "", d = u[1] || "", h = u[4], f = null;
                        return f = /^\/\//.test(t) ? c + "//" + n.buildAbsolutePath("", t.substring(2)) : /^\//.test(t) ? d + "/" + n.buildAbsolutePath("", t.substring(1)) : n.buildAbsolutePath(d + h, t), r && (f += r), i && (f += i), f
                    }, buildAbsolutePath: function (e, t) {
                        for (var r, n, i = t, o = "", a = e.replace(/[^\/]*$/, i.replace(/(\/|^)(?:\.?\/+)+/g, "$1")), s = 0; n = a.indexOf("/../", s), n > -1; s = n + r)r = /^\/(?:\.\.\/)*/.exec(a.slice(n))[0].length, o = (o + a.substring(s, n)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (r - 1) / 3 + "}$"), "/");
                        return o + a.substr(s)
                    }
                };
                "object" == typeof r && "object" == typeof t ? t.exports = n : "function" == typeof define && define.amd ? define([], function () {
                    return n
                }) : "object" == typeof r ? r.URLToolkit = n : e.URLToolkit = n
            }(this)
        }, {}], 3: [function (e, t, r) {
            var n = arguments[3], i = arguments[4], o = arguments[5], a = JSON.stringify;
            t.exports = function (e, t) {
                function r(e) {
                    g[e] = !0;
                    for (var t in i[e][1]) {
                        var n = i[e][1][t];
                        g[n] || r(n)
                    }
                }

                for (var s, l = Object.keys(o), u = 0, c = l.length; u < c; u++) {
                    var d = l[u], h = o[d].exports;
                    if (h === e || h && h.default === e) {
                        s = d;
                        break
                    }
                }
                if (!s) {
                    s = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var f = {}, u = 0, c = l.length; u < c; u++) {
                        var d = l[u];
                        f[d] = d
                    }
                    i[s] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), f]
                }
                var p = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), v = {};
                v[s] = s, i[p] = [Function(["require"], "var f = require(" + a(s) + ");(f.default ? f.default : f)(self);"), v];
                var g = {};
                r(p);
                var y = "(" + n + ")({" + Object.keys(g).map(function (e) {
                        return a(e) + ":[" + i[e][0] + "," + a(i[e][1]) + "]"
                    }).join(",") + "},{},[" + a(p) + "])", m = window.URL || window.webkitURL || window.mozURL || window.msURL, _ = new Blob([y], {type: "text/javascript"});
                if (t && t.bare)return _;
                var b = m.createObjectURL(_), E = new Worker(b);
                return E.objectURL = b, E
            }
        }, {}], 4: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(30), f = n(h), p = e(26), v = e(45), g = e(9), y = n(g), m = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING, u.default.FRAG_LOADED, u.default.FRAG_BUFFERED, u.default.ERROR));
                    return r.lastLoadedFragLevel = 0, r._autoLevelCapping = -1, r._nextAutoLevel = -1, r.hls = e, r.onCheck = r.abandonRulesCheck.bind(r), r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.clearTimer(), d.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onFragLoading", value: function (e) {
                        var t = e.frag;
                        if ("main" === t.type) {
                            if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this.bwEstimator) {
                                var r = this.hls, n = e.frag.level, i = r.levels[n].details.live, o = r.config, a = void 0, s = void 0;
                                i ? (a = o.abrEwmaFastLive, s = o.abrEwmaSlowLive) : (a = o.abrEwmaFastVoD, s = o.abrEwmaSlowVoD), this.bwEstimator = new y.default(r, s, a, o.abrEwmaDefaultEstimate)
                            }
                            this.fragCurrent = t
                        }
                    }
                }, {
                    key: "abandonRulesCheck", value: function () {
                        var e = this.hls, t = e.media, r = this.fragCurrent, n = r.loader, i = this.minAutoLevel;
                        if (!n || n.stats && n.stats.aborted)return v.logger.warn("frag loader destroy or aborted, disarm abandonRules"), void this.clearTimer();
                        var o = n.stats;
                        if (t && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                            var a = performance.now() - o.trequest, s = Math.abs(t.playbackRate);
                            if (a > 500 * r.duration / s) {
                                var l = e.levels, c = Math.max(1, o.bw ? o.bw / 8 : 1e3 * o.loaded / a), d = o.total ? o.total : Math.max(o.loaded, Math.round(r.duration * l[r.level].bitrate / 8)), h = t.currentTime, p = (d - o.loaded) / c, g = (f.default.bufferInfo(t, h, e.config.maxBufferHole).end - h) / s;
                                if (g < 2 * r.duration / s && p > g) {
                                    var y = void 0, m = void 0;
                                    for (m = r.level - 1; m > i && (y = r.duration * l[m].bitrate / (6.4 * c), !(y < g)); m--);
                                    y < p && (v.logger.warn("loading too slow, abort fragment loading and switch to level " + m + ":fragLoadedDelay[" + m + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + y.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), e.nextLoadLevel = m, this.bwEstimator.sample(a, o.loaded), n.abort(), this.clearTimer(), e.trigger(u.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                        frag: r,
                                        stats: o
                                    }))
                                }
                            }
                        }
                    }
                }, {
                    key: "onFragLoaded", value: function (e) {
                        var t = e.frag;
                        if ("main" === t.type && (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, e.frag.bitrateTest)) {
                            var r = e.stats;
                            r.tparsed = r.tbuffered = r.tload, this.onFragBuffered(e)
                        }
                    }
                }, {
                    key: "onFragBuffered", value: function (e) {
                        var t = e.stats, r = e.frag;
                        if (t.aborted !== !0 && 1 === r.loadCounter && "main" === r.type && (!r.bitrateTest || t.tload === t.tbuffered)) {
                            var n = t.tparsed - t.trequest;
                            v.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this.bwEstimator.sample(n, t.loaded), r.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                        }
                    }
                }, {
                    key: "onError", value: function (e) {
                        switch (e.details) {
                            case p.ErrorDetails.FRAG_LOAD_ERROR:
                            case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                this.clearTimer()
                        }
                    }
                }, {
                    key: "clearTimer", value: function () {
                        this.timer && (clearInterval(this.timer), this.timer = null)
                    }
                }, {
                    key: "findBestLevel", value: function (e, t, r, n, i, o, a, s, l) {
                        for (var u = i; u >= n; u--) {
                            var c = l[u], d = c.details, h = d ? d.totalduration / d.fragments.length : t, f = !!d && d.live, p = void 0;
                            p = u <= e ? a * r : s * r;
                            var g = l[u].bitrate, y = g * h / p;
                            if (v.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(p) + "/" + g + "/" + h + "/" + o + "/" + y), p > g && (!y || f || y < o))return u
                        }
                        return -1
                    }
                }, {
                    key: "autoLevelCapping", get: function () {
                        return this._autoLevelCapping
                    }, set: function (e) {
                        this._autoLevelCapping = e
                    }
                }, {
                    key: "nextAutoLevel", get: function () {
                        var e = this._nextAutoLevel, t = this.bwEstimator, r = this.hls, n = r.levels, i = r.config.minAutoBitrate;
                        if (!(e === -1 || t && t.canEstimate()))return Math.min(e, this.maxAutoLevel);
                        var o = this.nextABRAutoLevel;
                        if (e !== -1 && (o = Math.min(e, o)), void 0 !== i)for (; n[o].bitrate < i;)o++;
                        return o
                    }, set: function (e) {
                        this._nextAutoLevel = e
                    }
                }, {
                    key: "minAutoLevel", get: function () {
                        for (var e = this.hls, t = e.levels, r = e.config.minAutoBitrate, n = t ? t.length : 0, i = 0; i < n; i++)if (t[i].bitrate > r)return i;
                        return 0
                    }
                }, {
                    key: "maxAutoLevel", get: function () {
                        var e, t = this.hls.levels, r = this._autoLevelCapping;
                        return e = r === -1 && t && t.length ? t.length - 1 : r
                    }
                }, {
                    key: "nextABRAutoLevel", get: function () {
                        var e = this.hls, t = this.maxAutoLevel, r = e.levels, n = e.config, i = this.minAutoLevel, o = e.media, a = this.lastLoadedFragLevel, s = this.fragCurrent ? this.fragCurrent.duration : 0, l = o ? o.currentTime : 0, u = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1, c = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate, d = (f.default.bufferInfo(o, l, n.maxBufferHole).end - l) / u, h = this.findBestLevel(a, s, c, i, t, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
                        if (h >= 0)return h;
                        v.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var p = n.maxStarvationDelay, g = n.abrBandWidthFactor, y = n.abrBandWidthUpFactor;
                        if (0 === d) {
                            var m = this.bitrateTestDelay;
                            m && (p = n.maxLoadingDelay - m, v.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * p) + " ms"), g = y = 1)
                        }
                        return h = this.findBestLevel(a, s, c, i, t, d + p, g, y, r), Math.max(h, 0)
                    }
                }]), t
            }(d.default);
            r.default = m
        }, {26: 26, 27: 27, 28: 28, 30: 30, 45: 45, 9: 9}], 5: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(41), u = n(l), c = e(30), d = n(c), h = e(22), f = n(h), p = e(28), v = n(p), g = e(27), y = n(g), m = e(31), _ = n(m), b = e(46), E = n(b), T = e(26), w = e(45), k = {
                STOPPED: "STOPPED",
                STARTING: "STARTING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_TRACK: "WAITING_TRACK",
                PARSING: "PARSING",
                PARSED: "PARSED",
                ENDED: "ENDED",
                ERROR: "ERROR"
            }, O = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, v.default.MEDIA_ATTACHED, v.default.MEDIA_DETACHING, v.default.AUDIO_TRACKS_UPDATED, v.default.AUDIO_TRACK_SWITCH, v.default.AUDIO_TRACK_LOADED, v.default.KEY_LOADED, v.default.FRAG_LOADED, v.default.FRAG_PARSING_INIT_SEGMENT, v.default.FRAG_PARSING_DATA, v.default.FRAG_PARSED, v.default.ERROR, v.default.BUFFER_CREATED, v.default.BUFFER_APPENDED, v.default.BUFFER_FLUSHED));
                    return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r.ontick = r.tick.bind(r), r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = k.STOPPED
                    }
                }, {
                    key: "startLoad", value: function (e) {
                        if (this.tracks) {
                            var t = this.lastCurrentTime;
                            this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, t > 0 && e === -1 ? (w.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = k.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = k.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                        } else this.startPosition = e, this.state = k.STOPPED
                    }
                }, {
                    key: "stopLoad", value: function () {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = k.STOPPED
                    }
                }, {
                    key: "tick", value: function () {
                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                    }
                }, {
                    key: "doTick", value: function () {
                        var e, t, r, n = this.hls, i = n.config;
                        switch (this.state) {
                            case k.ERROR:
                            case k.PAUSED:
                                break;
                            case k.STARTING:
                                this.state = k.WAITING_TRACK, this.loadedmetadata = !1;
                                break;
                            case k.IDLE:
                                if (!this.media && (this.startFragRequested || !i.startFragPrefetch))break;
                                e = this.loadedmetadata ? this.media.currentTime : this.nextLoadPosition;
                                var o = this.mediaBuffer ? this.mediaBuffer : this.media, a = d.default.bufferInfo(o, e, i.maxBufferHole), s = a.len, l = a.end, c = this.fragPrevious, h = i.maxMaxBufferLength;
                                if (s < h && this.trackId < this.tracks.length) {
                                    if (r = this.tracks[this.trackId].details, "undefined" == typeof r) {
                                        this.state = k.WAITING_TRACK;
                                        break
                                    }
                                    if (!r.live && c && c.sn === r.endSN && (!this.media.seeking || this.media.duration - l < c.duration / 2)) {
                                        this.hls.trigger(v.default.BUFFER_EOS, {type: "audio"}), this.state = k.ENDED;
                                        break
                                    }
                                    var f = r.fragments, p = f.length, g = f[0].start, y = f[p - 1].start + f[p - 1].duration, m = void 0;
                                    if (l < g ? m = f[0] : !function () {
                                            var e = void 0, t = i.maxFragLookUpTolerance;
                                            l < y ? (l > y - t && (t = 0), e = u.default.search(f, function (e) {
                                                return e.start + e.duration - t <= l ? 1 : e.start - t > l ? -1 : 0
                                            })) : e = f[p - 1], e && (m = e, g = e.start, c && m.level === c.level && m.sn === c.sn && (m.sn < r.endSN ? (m = f[m.sn + 1 - r.startSN], w.logger.log("SN just loaded, load next one: " + m.sn)) : m = null))
                                        }(), m)if (null != m.decryptdata.uri && null == m.decryptdata.key)w.logger.log("Loading key for " + m.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + this.trackId), this.state = k.KEY_LOADING, n.trigger(v.default.KEY_LOADING, {frag: m}); else {
                                        if (w.logger.log("Loading " + m.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + this.trackId + ", currentTime:" + e + ",bufferEnd:" + l.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, m.loadCounter) {
                                            m.loadCounter++;
                                            var _ = i.fragLoadingLoopThreshold;
                                            if (m.loadCounter > _ && Math.abs(this.fragLoadIdx - m.loadIdx) < _)return void n.trigger(v.default.ERROR, {
                                                type: T.ErrorTypes.MEDIA_ERROR,
                                                details: T.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                                fatal: !1,
                                                frag: m
                                            })
                                        } else m.loadCounter = 1;
                                        m.loadIdx = this.fragLoadIdx, this.fragCurrent = m, this.startFragRequested = !0, this.nextLoadPosition = m.start + m.duration, n.trigger(v.default.FRAG_LOADING, {frag: m}), this.state = k.FRAG_LOADING
                                    }
                                }
                                break;
                            case k.WAITING_TRACK:
                                t = this.tracks[this.trackId], t && t.details && (this.state = k.IDLE);
                                break;
                            case k.FRAG_LOADING_WAITING_RETRY:
                                var b = performance.now(), E = this.retryDate;
                                o = this.media;
                                var O = o && o.seeking;
                                (!E || b >= E || O) && (w.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = k.IDLE);
                                break;
                            case k.STOPPED:
                            case k.FRAG_LOADING:
                            case k.PARSING:
                            case k.PARSED:
                            case k.ENDED:
                        }
                    }
                }, {
                    key: "onMediaAttached", value: function (e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                        var r = this.config;
                        this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        var e = this.media;
                        e && e.ended && (w.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                        var t = this.tracks;
                        t && t.forEach(function (e) {
                            e.details && e.details.fragments.forEach(function (e) {
                                e.loadCounter = void 0
                            })
                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                    }
                }, {
                    key: "onMediaSeeking", value: function () {
                        this.state === k.ENDED && (this.state = k.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick()
                    }
                }, {
                    key: "onMediaEnded", value: function () {
                        this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onAudioTracksUpdated", value: function (e) {
                        w.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                    }
                }, {
                    key: "onAudioTrackSwitch", value: function (e) {
                        var t = !!e.url;
                        this.trackId = e.id, this.state = k.IDLE, this.fragCurrent = null, this.state = k.PAUSED, t ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.hls.trigger(v.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), this.tick()
                    }
                }, {
                    key: "onAudioTrackLoaded", value: function (e) {
                        var t = e.details, r = e.id, n = this.tracks[r], i = t.totalduration;
                        if (w.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), t.PTSKnown = !1, n.details = t, !this.startFragRequested) {
                            if (this.startPosition === -1) {
                                var o = t.startTimeOffset;
                                isNaN(o) ? this.startPosition = 0 : (w.logger.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o)
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === k.WAITING_TRACK && (this.state = k.IDLE), this.tick()
                    }
                }, {
                    key: "onKeyLoaded", value: function () {
                        this.state === k.KEY_LOADING && (this.state = k.IDLE, this.tick())
                    }
                }, {
                    key: "onFragLoaded", value: function (e) {
                        var t = this.fragCurrent;
                        if (this.state === k.FRAG_LOADING && t && "audio" === e.frag.type && e.frag.level === t.level && e.frag.sn === t.sn) {
                            this.state = k.PARSING, this.stats = e.stats;
                            var r = this.tracks[this.trackId], n = r.details, i = n.totalduration, o = t.start, a = t.level, s = t.sn, l = this.config.defaultAudioCodec || r.audioCodec;
                            this.pendingAppending = 0, this.demuxer || (this.demuxer = new f.default(this.hls, "audio")), w.logger.log("Demuxing " + s + " of [" + n.startSN + " ," + n.endSN + "],track " + a);
                            var u = n.PTSKnown || !n.live;
                            this.demuxer.push(e.payload, l, null, o, t.cc, a, s, i, t.decryptdata, u)
                        }
                        this.fragLoadError = 0
                    }
                }, {
                    key: "onFragParsingInitSegment", value: function (e) {
                        var t = this.fragCurrent;
                        if (t && "audio" === e.id && e.sn === t.sn && e.level === t.level && this.state === k.PARSING) {
                            var r = e.tracks, n = void 0;
                            if (n = r.audio) {
                                n.levelCodec = "mp4a.40.2", n.id = e.id, this.hls.trigger(v.default.BUFFER_CODECS, r), w.logger.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                var i = n.initSegment;
                                i && (this.pendingAppending++, this.hls.trigger(v.default.BUFFER_APPENDING, {
                                    type: "audio",
                                    data: i,
                                    parent: "audio",
                                    content: "initSegment"
                                })), this.tick()
                            }
                        }
                    }
                }, {
                    key: "onFragParsingData", value: function (e) {
                        var t = this, r = this.fragCurrent;
                        if (r && "audio" === e.id && e.sn === r.sn && e.level === r.level && this.state === k.PARSING) {
                            var n = this.tracks[this.trackId], i = this.fragCurrent;
                            w.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), _.default.updateFragPTSDTS(n.details, i.sn, e.startPTS, e.endPTS), [e.data1, e.data2].forEach(function (r) {
                                r && (t.pendingAppending++, t.hls.trigger(v.default.BUFFER_APPENDING, {
                                    type: e.type,
                                    data: r,
                                    parent: "audio",
                                    content: "data"
                                }))
                            }), this.tick()
                        }
                    }
                }, {
                    key: "onFragParsed", value: function (e) {
                        var t = this.fragCurrent;
                        t && "audio" === e.id && e.sn === t.sn && e.level === t.level && this.state === k.PARSING && (this.stats.tparsed = performance.now(), this.state = k.PARSED, this._checkAppendedParsed())
                    }
                }, {
                    key: "onBufferCreated", value: function (e) {
                        var t = e.tracks.audio;
                        t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0)
                    }
                }, {
                    key: "onBufferAppended", value: function (e) {
                        if ("audio" === e.parent)switch (this.state) {
                            case k.PARSING:
                            case k.PARSED:
                                this.pendingAppending--, this._checkAppendedParsed()
                        }
                    }
                }, {
                    key: "_checkAppendedParsed", value: function () {
                        if (this.state === k.PARSED && 0 === this.pendingAppending) {
                            var e = this.fragCurrent, t = this.stats;
                            if (e) {
                                this.fragPrevious = e, t.tbuffered = performance.now(), this.hls.trigger(v.default.FRAG_BUFFERED, {
                                    stats: t,
                                    frag: e,
                                    id: "audio"
                                });
                                var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                                w.logger.log("audio buffered : " + E.default.toString(r.buffered)), this.state = k.IDLE
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onError", value: function (e) {
                        var t = e.frag;
                        if (!t || "audio" === t.type)switch (e.details) {
                            case T.ErrorDetails.FRAG_LOAD_ERROR:
                            case T.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                if (!e.fatal) {
                                    var r = this.fragLoadError;
                                    r ? r++ : r = 1;
                                    var n = this.config;
                                    if (r <= n.fragLoadingMaxRetry) {
                                        this.fragLoadError = r, t.loadCounter = 0;
                                        var i = Math.min(Math.pow(2, r - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                        w.logger.warn("audioStreamController: frag loading failed, retry in " + i + " ms"), this.retryDate = performance.now() + i, this.state = k.FRAG_LOADING_WAITING_RETRY
                                    } else w.logger.error("audioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.trigger(v.default.ERROR, e), this.state = k.ERROR
                                }
                                break;
                            case T.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                            case T.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                            case T.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                            case T.ErrorDetails.KEY_LOAD_ERROR:
                            case T.ErrorDetails.KEY_LOAD_TIMEOUT:
                                this.state !== k.ERROR && (this.state = e.fatal ? k.ERROR : k.IDLE, w.logger.warn("audioStreamController: " + e.details + " while loading frag,switch to " + this.state + " state ..."))
                        }
                    }
                }, {
                    key: "onBufferFlushed", value: function () {
                        this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = k.IDLE, this.fragPrevious = null, this.tick()
                    }
                }]), t
            }(y.default);
            r.default = O
        }, {22: 22, 26: 26, 27: 27, 28: 28, 30: 30, 31: 31, 41: 41, 45: 45, 46: 46}], 6: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(45), f = function (e) {
                function t(e) {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADING, u.default.MANIFEST_LOADED, u.default.AUDIO_TRACK_LOADED))
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        d.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        this.tracks = [], this.trackId = -1
                    }
                }, {
                    key: "onManifestLoaded", value: function (e) {
                        var t = this, r = e.audioTracks || [], n = !1;
                        this.tracks = r, this.hls.trigger(u.default.AUDIO_TRACKS_UPDATED, {audioTracks: r});
                        var i = 0;
                        r.forEach(function (e) {
                            return e.default ? (t.audioTrack = i, void(n = !0)) : void i++
                        }), n === !1 && r.length && (h.logger.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                    }
                }, {
                    key: "onAudioTrackLoaded", value: function (e) {
                        e.id < this.tracks.length && (h.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * e.details.targetduration)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                    }
                }, {
                    key: "setAudioTrackInternal", value: function (e) {
                        if (e >= 0 && e < this.tracks.length) {
                            this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, h.logger.log("switching to audioTrack " + e);
                            var t = this.tracks[e], r = t.type, n = t.url;
                            this.hls.trigger(u.default.AUDIO_TRACK_SWITCH, {id: e, type: r, url: n});
                            var i = t.details;
                            !n || void 0 !== i && i.live !== !0 || (h.logger.log("(re)loading playlist for audioTrack " + e), this.hls.trigger(u.default.AUDIO_TRACK_LOADING, {
                                url: n,
                                id: e
                            }))
                        }
                    }
                }, {
                    key: "audioTracks", get: function () {
                        return this.tracks
                    }
                }, {
                    key: "audioTrack", get: function () {
                        return this.trackId
                    }, set: function (e) {
                        this.trackId === e && void 0 !== this.tracks[e].details || this.setAudioTrackInternal(e)
                    }
                }]), t
            }(d.default);
            r.default = f
        }, {27: 27, 28: 28, 45: 45}], 7: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(45), f = e(26), p = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.MANIFEST_PARSED, u.default.BUFFER_RESET, u.default.BUFFER_APPENDING, u.default.BUFFER_CODECS, u.default.BUFFER_EOS, u.default.BUFFER_FLUSHING, u.default.LEVEL_PTS_UPDATED, u.default.LEVEL_UPDATED));
                    return r._msDuration = null, r._levelDuration = null, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        d.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onLevelPtsUpdated", value: function (e) {
                        var t = e.type, r = this.tracks.audio;
                        if ("audio" === t && r && "audio/mpeg" === r.container) {
                            var n = this.sourceBuffer.audio, i = Math.abs(n.timestampOffset - e.start);
                            if (i > .1) {
                                var o = n.updating;
                                try {
                                    n.abort()
                                } catch (e) {
                                    o = !0, h.logger.warn("can not abort audio buffer: " + e)
                                }
                                o ? this.audioTimestampOffset = e.start : (h.logger.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + e.start), n.timestampOffset = e.start)
                            }
                        }
                    }
                }, {
                    key: "onManifestParsed", value: function (e) {
                        var t = e.audio, r = e.video, n = 0;
                        e.altAudio && (t || r) && (n = (t ? 1 : 0) + (r ? 1 : 0), h.logger.log(n + " sourceBuffer(s) expected")), this.sourceBufferNb = n
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        var t = this.media = e.media;
                        if (t) {
                            var r = this.mediaSource = new MediaSource;
                            this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), t.src = URL.createObjectURL(r)
                        }
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        h.logger.log("media source detaching");
                        var e = this.mediaSource;
                        if (e) {
                            if ("open" === e.readyState)try {
                                e.endOfStream()
                            } catch (e) {
                                h.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                            }
                            e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute("src"), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                        }
                        this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(u.default.MEDIA_DETACHED)
                    }
                }, {
                    key: "onMediaSourceOpen", value: function () {
                        h.logger.log("media source opened"), this.hls.trigger(u.default.MEDIA_ATTACHED, {media: this.media});
                        var e = this.mediaSource;
                        e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                    }
                }, {
                    key: "checkPendingTracks", value: function () {
                        var e = this.pendingTracks, t = Object.keys(e).length;
                        t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending())
                    }
                }, {
                    key: "onMediaSourceClose", value: function () {
                        h.logger.log("media source closed")
                    }
                }, {
                    key: "onMediaSourceEnded", value: function () {
                        h.logger.log("media source ended")
                    }
                }, {
                    key: "onSBUpdateEnd", value: function () {
                        if (this.audioTimestampOffset) {
                            var e = this.sourceBuffer.audio;
                            h.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                        }
                        this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1, this.hls.trigger(u.default.BUFFER_APPENDED, {parent: this.parent}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                    }
                }, {
                    key: "onSBUpdateError", value: function (e) {
                        h.logger.error("sourceBuffer error:" + e), this.hls.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.MEDIA_ERROR,
                            details: f.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                }, {
                    key: "onBufferReset", value: function () {
                        var e = this.sourceBuffer;
                        for (var t in e) {
                            var r = e[t];
                            try {
                                this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
                            } catch (e) {
                            }
                        }
                        this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    }
                }, {
                    key: "onBufferCodecs", value: function (e) {
                        if (0 === Object.keys(this.sourceBuffer).length) {
                            for (var t in e)this.pendingTracks[t] = e[t];
                            var r = this.mediaSource;
                            r && "open" === r.readyState && this.checkPendingTracks()
                        }
                    }
                }, {
                    key: "createSourceBuffers", value: function (e) {
                        var t = this.sourceBuffer, r = this.mediaSource;
                        for (var n in e)if (!t[n]) {
                            var i = e[n], o = i.levelCodec || i.codec, a = i.container + ";codecs=" + o;
                            h.logger.log("creating sourceBuffer(" + a + ")");
                            try {
                                var s = t[n] = r.addSourceBuffer(a);
                                s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), this.tracks[n] = {
                                    codec: o,
                                    container: i.container
                                }, i.buffer = s
                            } catch (e) {
                                h.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(u.default.ERROR, {
                                    type: f.ErrorTypes.MEDIA_ERROR,
                                    details: f.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    err: e,
                                    mimeType: a
                                })
                            }
                        }
                        this.hls.trigger(u.default.BUFFER_CREATED, {tracks: e})
                    }
                }, {
                    key: "onBufferAppending", value: function (e) {
                        this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                    }
                }, {
                    key: "onBufferAppendFail", value: function (e) {
                        h.logger.error("sourceBuffer error:" + e.event), this.hls.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.MEDIA_ERROR,
                            details: f.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1,
                            frag: this.fragCurrent
                        })
                    }
                }, {
                    key: "onBufferEos", value: function (e) {
                        var t = this.sourceBuffer, r = e.type;
                        for (var n in t)r && n !== r || t[n].ended || (t[n].ended = !0, h.logger.log(n + " sourceBuffer now EOS"));
                        this.checkEos()
                    }
                }, {
                    key: "checkEos", value: function () {
                        var e = this.sourceBuffer, t = this.mediaSource;
                        if (!t || "open" !== t.readyState)return void(this._needsEos = !1);
                        for (var r in e) {
                            var n = e[r];
                            if (!n.ended)return;
                            if (n.updating)return void(this._needsEos = !0)
                        }
                        h.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                        try {
                            t.endOfStream()
                        } catch (e) {
                            h.logger.warn("exception while calling mediaSource.endOfStream()")
                        }
                        this._needsEos = !1
                    }
                }, {
                    key: "onBufferFlushing", value: function (e) {
                        this.flushRange.push({
                            start: e.startOffset,
                            end: e.endOffset,
                            type: e.type
                        }), this.flushBufferCounter = 0, this.doFlush()
                    }
                }, {
                    key: "onLevelUpdated", value: function (e) {
                        var t = e.details;
                        0 !== t.fragments.length && (this._levelDuration = t.totalduration + t.fragments[0].start, this.updateMediaElementDuration())
                    }
                }, {
                    key: "updateMediaElementDuration", value: function () {
                        var e = this.media, t = this.mediaSource, r = this.sourceBuffer, n = this._levelDuration;
                        if (null !== n && e && t && r && 0 !== e.readyState && "open" === t.readyState) {
                            for (var i in r)if (r[i].updating)return;
                            null === this._msDuration && (this._msDuration = t.duration), n > this._msDuration && n > e.duration && (h.logger.log("Updating mediasource duration to " + n.toFixed(3)), this._msDuration = t.duration = n)
                        }
                    }
                }, {
                    key: "doFlush", value: function () {
                        for (; this.flushRange.length;) {
                            var e = this.flushRange[0];
                            if (!this.flushBuffer(e.start, e.end, e.type))return void(this._needsFlush = !0);
                            this.flushRange.shift(), this.flushBufferCounter = 0
                        }
                        if (0 === this.flushRange.length) {
                            this._needsFlush = !1;
                            var t = 0, r = this.sourceBuffer;
                            try {
                                for (var n in r)t += r[n].buffered.length
                            } catch (e) {
                                h.logger.error("error while accessing sourceBuffer.buffered")
                            }
                            this.appended = t, this.hls.trigger(u.default.BUFFER_FLUSHED)
                        }
                    }
                }, {
                    key: "doAppending", value: function () {
                        var e = this.hls, t = this.sourceBuffer, r = this.segments;
                        if (Object.keys(t).length) {
                            if (this.media.error)return this.segments = [], void h.logger.error("trying to append although a media error occured, flush segment and abort");
                            if (this.appending)return;
                            if (r && r.length) {
                                var n = r.shift();
                                try {
                                    var i = n.type;
                                    t[i] ? (t[i].ended = !1, this.parent = n.parent, t[i].appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                                } catch (t) {
                                    h.logger.error("error while trying to append buffer:" + t.message), r.unshift(n);
                                    var o = {type: f.ErrorTypes.MEDIA_ERROR};
                                    if (22 === t.code)return this.segments = [], o.details = f.ErrorDetails.BUFFER_FULL_ERROR, void e.trigger(u.default.ERROR, o);
                                    if (this.appendError ? this.appendError++ : this.appendError = 1, o.details = f.ErrorDetails.BUFFER_APPEND_ERROR, o.frag = this.fragCurrent, this.appendError > e.config.appendErrorMaxRetry)return h.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], o.fatal = !0, void e.trigger(u.default.ERROR, o);
                                    o.fatal = !1, e.trigger(u.default.ERROR, o)
                                }
                            }
                        }
                    }
                }, {
                    key: "flushBuffer", value: function (e, t, r) {
                        var n, i, o, a, s, l, u = this.sourceBuffer;
                        if (Object.keys(u).length) {
                            if (h.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
                                for (var c in u)if (!r || c === r) {
                                    if (n = u[c], n.ended = !1, n.updating)return h.logger.warn("cannot flush, sb updating in progress"), !1;
                                    try {
                                        for (i = 0; i < n.buffered.length; i++)if (o = n.buffered.start(i), a = n.buffered.end(i), navigator.userAgent.toLowerCase().indexOf("firefox") !== -1 && t === Number.POSITIVE_INFINITY ? (s = e, l = t) : (s = Math.max(o, e), l = Math.min(a, t)), Math.min(l, a) - s > .5)return this.flushBufferCounter++, h.logger.log("flush " + c + " [" + s + "," + l + "], of [" + o + "," + a + "], pos:" + this.media.currentTime), n.remove(s, l), !1
                                    } catch (e) {
                                        h.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                    }
                                }
                            } else h.logger.warn("abort flushing too many retries");
                            h.logger.log("buffer flushed")
                        }
                        return !0
                    }
                }]), t
            }(d.default);
            r.default = p
        }, {26: 26, 27: 27, 28: 28, 45: 45}], 8: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = function (e) {
                function t(e) {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FPS_DROP_LEVEL_CAPPING, u.default.MEDIA_ATTACHING, u.default.MANIFEST_PARSED))
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                    }
                }, {
                    key: "onFpsDropLevelCapping", value: function (e) {
                        this.restrictedLevels || (this.restrictedLevels = []), this.isLevelRestricted(e.droppedLevel) || this.restrictedLevels.push(e.droppedLevel)
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.media = e.media instanceof HTMLVideoElement ? e.media : null
                    }
                }, {
                    key: "onManifestParsed", value: function (e) {
                        this.hls.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, this.hls.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                    }
                }, {
                    key: "detectPlayerSize", value: function () {
                        if (this.media) {
                            var e = this.levels ? this.levels.length : 0;
                            e && (this.hls.autoLevelCapping = this.getMaxLevel(e - 1), this.hls.autoLevelCapping > this.autoLevelCapping && this.hls.streamController.nextLevelSwitch(), this.autoLevelCapping = this.hls.autoLevelCapping)
                        }
                    }
                }, {
                    key: "getMaxLevel", value: function (e) {
                        var t = 0, r = void 0, n = void 0, i = this.mediaWidth, o = this.mediaHeight, a = 0, s = 0;
                        for (r = 0; r <= e && (n = this.levels[r], !this.isLevelRestricted(r)) && (t = r, a = n.width, s = n.height, !(i <= a || o <= s)); r++);
                        return t
                    }
                }, {
                    key: "isLevelRestricted", value: function (e) {
                        return !(!this.restrictedLevels || this.restrictedLevels.indexOf(e) === -1)
                    }
                }, {
                    key: "contentScaleFactor", get: function () {
                        var e = 1;
                        try {
                            e = window.devicePixelRatio
                        } catch (e) {
                        }
                        return e
                    }
                }, {
                    key: "mediaWidth", get: function () {
                        var e = void 0;
                        return this.media && (e = this.media.width || this.media.clientWidth || this.media.offsetWidth, e *= this.contentScaleFactor), e
                    }
                }, {
                    key: "mediaHeight", get: function () {
                        var e = void 0;
                        return this.media && (e = this.media.height || this.media.clientHeight || this.media.offsetHeight, e *= this.contentScaleFactor), e
                    }
                }]), t
            }(d.default);
            r.default = h
        }, {27: 27, 28: 28}], 9: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(44), s = n(a), l = function () {
                function e(t, r, n, o) {
                    i(this, e), this.hls = t, this.defaultEstimate_ = o, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new s.default(r), this.fast_ = new s.default(n)
                }

                return o(e, [{
                    key: "sample", value: function (e, t) {
                        e = Math.max(e, this.minDelayMs_);
                        var r = 8e3 * t / e, n = e / 1e3;
                        this.fast_.sample(n, r), this.slow_.sample(n, r)
                    }
                }, {
                    key: "canEstimate", value: function () {
                        var e = this.fast_;
                        return e && e.getTotalWeight() >= this.minWeight_
                    }
                }, {
                    key: "getEstimate", value: function () {
                        return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                    }
                }, {
                    key: "destroy", value: function () {
                    }
                }]), e
            }();
            r.default = l
        }, {44: 44}], 10: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(45), f = function (e) {
                function t(e) {
                    return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING))
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.hls.config.capLevelOnFPSDrop && (this.video = e.media instanceof HTMLVideoElement ? e.media : null, "function" == typeof this.video.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), this.hls.config.fpsDroppedMonitoringPeriod))
                    }
                }, {
                    key: "checkFPS", value: function (e, t, r) {
                        var n = performance.now();
                        if (t) {
                            if (this.lastTime) {
                                var i = n - this.lastTime, o = r - this.lastDroppedFrames, a = t - this.lastDecodedFrames, s = 1e3 * o / i;
                                if (this.hls.trigger(u.default.FPS_DROP, {
                                        currentDropped: o,
                                        currentDecoded: a,
                                        totalDroppedFrames: r
                                    }), s > 0 && o > this.hls.config.fpsDroppedMonitoringThreshold * a) {
                                    var l = this.hls.currentLevel;
                                    h.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + l), l > 0 && (this.hls.autoLevelCapping === -1 || this.hls.autoLevelCapping >= l) && (l -= 1, this.hls.trigger(u.default.FPS_DROP_LEVEL_CAPPING, {
                                        level: l,
                                        droppedLevel: this.hls.currentLevel
                                    }), this.hls.autoLevelCapping = l, this.hls.streamController.nextLevelSwitch())
                                }
                            }
                            this.lastTime = n, this.lastDroppedFrames = r, this.lastDecodedFrames = t
                        }
                    }
                }, {
                    key: "checkFPSInterval", value: function () {
                        if (this.video)if (this.isVideoPlaybackQualityAvailable) {
                            var e = this.video.getVideoPlaybackQuality();
                            this.checkFPS(this.video, e.totalVideoFrames, e.droppedVideoFrames)
                        } else this.checkFPS(this.video, this.video.webkitDecodedFrameCount, this.video.webkitDroppedFrameCount)
                    }
                }]), t
            }(d.default);
            r.default = f
        }, {27: 27, 28: 28, 45: 45}], 11: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(45), f = e(26), p = e(30), v = n(p), g = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADED, u.default.LEVEL_LOADED, u.default.ERROR));
                    return r.ontick = r.tick.bind(r), r._manualLevel = r._autoLevelCapping = -1, r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.timer && (clearTimeout(this.timer), this.timer = null), this._manualLevel = -1
                    }
                }, {
                    key: "startLoad", value: function () {
                        this.canload = !0, this.timer && this.tick()
                    }
                }, {
                    key: "stopLoad", value: function () {
                        this.canload = !1
                    }
                }, {
                    key: "onManifestLoaded", value: function (e) {
                        var t, r = [], n = [], i = {}, o = !1, a = !1, s = this.hls, l = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), c = function (e, t) {
                            return MediaSource.isTypeSupported(e + "/mp4;codecs=" + t)
                        };
                        if (e.levels.forEach(function (e) {
                                e.videoCodec && (o = !0), l && e.audioCodec && e.audioCodec.indexOf("mp4a.40.34") !== -1 && (e.audioCodec = void 0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (a = !0);
                                var t = i[e.bitrate];
                                void 0 === t ? (i[e.bitrate] = r.length, e.url = [e.url], e.urlId = 0, r.push(e)) : r[t].url.push(e.url)
                            }), o && a ? r.forEach(function (e) {
                                e.videoCodec && n.push(e)
                            }) : n = r, n = n.filter(function (e) {
                                var t = e.audioCodec, r = e.videoCodec;
                                return (!t || c("audio", t)) && (!r || c("video", r))
                            }), n.length) {
                            t = n[0].bitrate, n.sort(function (e, t) {
                                return e.bitrate - t.bitrate
                            }), this._levels = n;
                            for (var d = 0; d < n.length; d++)if (n[d].bitrate === t) {
                                this._firstLevel = d, h.logger.log("manifest loaded," + n.length + " level(s) found, first bitrate:" + t);
                                break
                            }
                            s.trigger(u.default.MANIFEST_PARSED, {
                                levels: n,
                                firstLevel: this._firstLevel,
                                stats: e.stats,
                                audio: a,
                                video: o,
                                altAudio: e.audioTracks.length > 0
                            })
                        } else s.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.MEDIA_ERROR,
                            details: f.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: s.url,
                            reason: "no level with compatible codecs found in manifest"
                        })
                    }
                }, {
                    key: "setLevelInternal", value: function (e) {
                        var t = this._levels;
                        if (e >= 0 && e < t.length) {
                            this.timer && (clearTimeout(this.timer), this.timer = null), this._level !== e && (h.logger.log("switching to level " + e), this._level = e, this.hls.trigger(u.default.LEVEL_SWITCH, {level: e}));
                            var r = t[e], n = r.details;
                            if (!n || n.live === !0) {
                                var i = r.urlId;
                                this.hls.trigger(u.default.LEVEL_LOADING, {url: r.url[i], level: e, id: i})
                            }
                        } else this.hls.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.OTHER_ERROR,
                            details: f.ErrorDetails.LEVEL_SWITCH_ERROR,
                            level: e,
                            fatal: !1,
                            reason: "invalid level idx"
                        })
                    }
                }, {
                    key: "onError", value: function (e) {
                        if (!e.fatal) {
                            var t = e.details, r = this.hls, n = void 0, i = void 0, o = !1, a = r.abrController, s = a.minAutoLevel;
                            switch (t) {
                                case f.ErrorDetails.FRAG_LOAD_ERROR:
                                case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                case f.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                case f.ErrorDetails.KEY_LOAD_ERROR:
                                case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                                    n = e.frag.level;
                                    break;
                                case f.ErrorDetails.LEVEL_LOAD_ERROR:
                                case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    n = e.context.level, o = !0;
                                    break;
                                case f.ErrorDetails.REMUX_ALLOC_ERROR:
                                    n = e.level
                            }
                            if (void 0 !== n)if (i = this._levels[n], i.urlId < i.url.length - 1)i.urlId++, i.details = void 0, h.logger.warn("level controller," + t + " for level " + n + ": switching to redundant stream id " + i.urlId); else {
                                var l = this._manualLevel === -1 && n;
                                if (l = !1)h.logger.warn("level controller," + t + ": switch-down for next fragment"), a.nextAutoLevel = Math.max(s, n - 1); else if (i && i.details && i.details.live)h.logger.warn("level controller," + t + " on live stream, discard"), o && (this._level = void 0); else if (t === f.ErrorDetails.LEVEL_LOAD_ERROR || t === f.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                                    var c = r.media, d = c && v.default.isBuffered(c, c.currentTime) && v.default.isBuffered(c, c.currentTime + .5);
                                    if (d) {
                                        var p = r.config.levelLoadingRetryDelay;
                                        h.logger.warn("level controller," + t + ", but media buffered, retry in " + p + "ms"), this.timer = setTimeout(this.ontick, p)
                                    } else {
                                        if (this._levels[n].url[0].indexOf(".jpg") == -1)return void r.trigger(u.default.ERROR, {details: f.ErrorDetails.LEVEL_LOAD_RENAME});
                                        h.logger.error("cannot recover " + t + " error"), this._level = void 0, this.timer && (clearTimeout(this.timer), this.timer = null), e.fatal = !0, r.trigger(u.default.ERROR, e)
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "onLevelLoaded", value: function (e) {
                        if (e.level === this._level) {
                            var t = e.details;
                            if (t.live) {
                                var r = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration), n = this._levels[e.level], i = n.details;
                                i && t.endSN === i.endSN && (r /= 2, h.logger.log("same live playlist, reload twice faster")), r -= performance.now() - e.stats.trequest, r = Math.max(1e3, Math.round(r)), h.logger.log("live playlist, reload in " + r + " ms"), this.timer = setTimeout(this.ontick, r)
                            } else this.timer = null
                        }
                    }
                }, {
                    key: "tick", value: function () {
                        var e = this._level;
                        if (void 0 !== e && this.canload) {
                            var t = this._levels[e], r = t.urlId;
                            this.hls.trigger(u.default.LEVEL_LOADING, {url: t.url[r], level: e, id: r})
                        }
                    }
                }, {
                    key: "levels", get: function () {
                        return this._levels
                    }
                }, {
                    key: "level", get: function () {
                        return this._level
                    }, set: function (e) {
                        var t = this._levels;
                        t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e))
                    }
                }, {
                    key: "manualLevel", get: function () {
                        return this._manualLevel
                    }, set: function (e) {
                        this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), e !== -1 && (this.level = e)
                    }
                }, {
                    key: "firstLevel", get: function () {
                        return this._firstLevel
                    }, set: function (e) {
                        this._firstLevel = e
                    }
                }, {
                    key: "startLevel", get: function () {
                        if (void 0 === this._startLevel) {
                            var e = this.hls.config.startLevel;
                            return void 0 !== e ? e : this._firstLevel
                        }
                        return this._startLevel
                    }, set: function (e) {
                        e !== -1 && (e = Math.max(e, this.hls.abrController.minAutoLevel)), this._startLevel = e
                    }
                }, {
                    key: "nextLoadLevel", get: function () {
                        return this._manualLevel !== -1 ? this._manualLevel : this.hls.abrController.nextAutoLevel
                    }, set: function (e) {
                        this.level = e, this._manualLevel === -1 && (this.hls.abrController.nextAutoLevel = e)
                    }
                }]), t
            }(d.default);
            r.default = g
        }, {26: 26, 27: 27, 28: 28, 30: 30, 45: 45}], 12: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(41), u = n(l), c = e(30), d = n(c), h = e(22), f = n(h), p = e(28), v = n(p), g = e(27), y = n(g), m = e(31), _ = n(m), b = e(46), E = n(b), T = e(26), w = e(45), k = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_LEVEL: "WAITING_LEVEL",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BUFFER_FLUSHING: "BUFFER_FLUSHING",
                ENDED: "ENDED",
                ERROR: "ERROR"
            }, O = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, v.default.MEDIA_ATTACHED, v.default.MEDIA_DETACHING, v.default.MANIFEST_LOADING, v.default.MANIFEST_PARSED, v.default.LEVEL_LOADED, v.default.KEY_LOADED, v.default.FRAG_LOADED, v.default.FRAG_LOAD_EMERGENCY_ABORTED, v.default.FRAG_PARSING_INIT_SEGMENT, v.default.FRAG_PARSING_DATA, v.default.FRAG_PARSED, v.default.ERROR, v.default.AUDIO_TRACK_SWITCH, v.default.BUFFER_CREATED, v.default.BUFFER_APPENDED, v.default.BUFFER_FLUSHED));
                    return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r.ontick = r.tick.bind(r), r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = k.STOPPED
                    }
                }, {
                    key: "startLoad", value: function (e) {
                        if (this.levels) {
                            var t = this.lastCurrentTime, r = this.hls;
                            if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                var n = r.startLevel;
                                n === -1 && (n = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
                            }
                            t > 0 && e === -1 && (w.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = k.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                        } else w.logger.warn("cannot start loading as manifest not parsed yet"), this.state = k.STOPPED
                    }
                }, {
                    key: "stopLoad", value: function () {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = k.STOPPED
                    }
                }, {
                    key: "tick", value: function () {
                        this.ticks++, 1 === this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                    }
                }, {
                    key: "doTick", value: function () {
                        switch (this.state) {
                            case k.ERROR:
                                break;
                            case k.BUFFER_FLUSHING:
                                this.fragLoadError = 0;
                                break;
                            case k.IDLE:
                                if (!this._doTickIdle())return;
                                break;
                            case k.WAITING_LEVEL:
                                var e = this.levels[this.level];
                                e && e.details && (this.state = k.IDLE);
                                break;
                            case k.FRAG_LOADING_WAITING_RETRY:
                                var t = performance.now(), r = this.retryDate;
                                (!r || t >= r || this.media && this.media.seeking) && (w.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = k.IDLE);
                                break;
                            case k.ERROR:
                            case k.PAUSED:
                            case k.STOPPED:
                            case k.FRAG_LOADING:
                            case k.PARSING:
                            case k.PARSED:
                            case k.ENDED:
                        }
                        this._checkBuffer(), this._checkFragmentChanged()
                    }
                }, {
                    key: "_doTickIdle", value: function () {
                        var e = this.hls, t = e.config, r = this.media;
                        if (void 0 !== this.levelLastLoaded && !r && (this.startFragRequested || !t.startFragPrefetch))return !0;
                        var n = void 0;
                        n = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                        var i = e.nextLoadLevel, o = this.levels[i], a = (o.bitrate, void 0);
                        a = t.maxBufferLength;
                        var s = d.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, n, t.maxBufferHole), l = s.len;
                        if (l >= a)return !0;
                        w.logger.trace("buffer length of " + l.toFixed(3) + " is below max of " + a.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = i;
                        var u = o.details;
                        if ("undefined" == typeof u || u.live && this.levelLastLoaded !== i)return this.state = k.WAITING_LEVEL, !0;
                        var c = this.fragPrevious;
                        if (!u.live && c && c.sn === u.endSN && (!r.seeking && s.len || r.duration - s.end <= c.duration / 2)) {
                            var h = {};
                            return this.altAudio && (h.type = "video"), this.hls.trigger(v.default.BUFFER_EOS, h), this.state = k.ENDED, !0
                        }
                        return this._fetchPayloadOrEos({pos: n, bufferInfo: s, levelDetails: u})
                    }
                }, {
                    key: "_fetchPayloadOrEos", value: function (e) {
                        var t = e.pos, r = e.bufferInfo, n = e.levelDetails, i = this.fragPrevious, o = this.level, a = n.fragments, s = a.length;
                        if (0 === s)return !1;
                        var l = a[0].start, u = a[s - 1].start + a[s - 1].duration, c = r.end, d = void 0;
                        if (n.live) {
                            var h = this.config.initialLiveManifestSize;
                            if (s < h)return w.logger.warn("Can not start playback of a level, reason: not enough fragments " + s + " < " + h), !1;
                            if (d = this._ensureFragmentAtLivePoint({
                                    levelDetails: n,
                                    bufferEnd: c,
                                    start: l,
                                    end: u,
                                    fragPrevious: i,
                                    fragments: a,
                                    fragLen: s
                                }), null === d)return !1
                        } else c < l && (d = a[0]);
                        return d || (d = this._findFragment({
                            start: l,
                            fragPrevious: i,
                            fragLen: s,
                            fragments: a,
                            bufferEnd: c,
                            end: u,
                            levelDetails: n
                        })), !d || this._loadFragmentOrKey({frag: d, level: o, levelDetails: n, pos: t, bufferEnd: c})
                    }
                }, {
                    key: "_ensureFragmentAtLivePoint", value: function (e) {
                        var t = e.levelDetails, r = e.bufferEnd, n = e.start, i = e.end, o = e.fragPrevious, a = e.fragments, s = e.fragLen, l = this.hls.config, u = this.media, c = void 0, d = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * t.targetduration;
                        if (r < Math.max(n, i - d)) {
                            var h = this.liveSyncPosition = this.computeLivePosition(n, t);
                            w.logger.log("buffer end: " + r.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), r = h, u && u.readyState && u.duration > h && (u.currentTime = h)
                        }
                        if (t.PTSKnown && r > i && u && u.readyState)return null;
                        if (this.startFragRequested && !t.PTSKnown) {
                            if (o) {
                                var f = o.sn + 1;
                                f >= t.startSN && f <= t.endSN && (c = a[f - t.startSN], w.logger.log("live playlist, switching playlist, load frag with next SN: " + c.sn))
                            }
                            c || (c = a[Math.min(s - 1, Math.round(s / 2))], w.logger.log("live playlist, switching playlist, unknown, load middle frag : " + c.sn))
                        }
                        return c
                    }
                }, {
                    key: "_findFragment", value: function (e) {
                        var t = e.start, r = e.fragPrevious, n = e.fragLen, i = e.fragments, o = e.bufferEnd, a = e.end, s = e.levelDetails, l = this.hls.config, c = void 0, d = void 0, h = l.maxFragLookUpTolerance;
                        if (o < a ? (o > a - h && (h = 0), d = u.default.search(i, function (e) {
                                return e.start + e.duration - h <= o ? 1 : e.start - h > o && e.start ? -1 : 0
                            })) : d = i[n - 1], d && (c = d, t = d.start, r && c.level === r.level && c.sn === r.sn))if (c.sn < s.endSN) {
                            var f = r.deltaPTS, p = c.sn - s.startSN;
                            f && f > l.maxBufferHole && r.dropped && p ? (c = i[p - 1], w.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), r.loadCounter--) : (c = i[p + 1], w.logger.log("SN just loaded, load next one: " + c.sn))
                        } else c = null;
                        return c
                    }
                }, {
                    key: "_loadFragmentOrKey", value: function (e) {
                        var t = e.frag, r = e.level, n = e.levelDetails, i = e.pos, o = e.bufferEnd, a = this.hls, s = a.config;
                        if (null == t.decryptdata.uri || null != t.decryptdata.key) {
                            if (w.logger.log("Loading " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + r + ", currentTime:" + i.toFixed(3) + ",bufferEnd:" + o.toFixed(3)), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) {
                                t.loadCounter++;
                                var l = s.fragLoadingLoopThreshold;
                                if (t.loadCounter > l && Math.abs(this.fragLoadIdx - t.loadIdx) < l)return a.trigger(v.default.ERROR, {
                                    type: T.ErrorTypes.MEDIA_ERROR,
                                    details: T.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                    fatal: !1,
                                    frag: t
                                }), !1
                            } else t.loadCounter = 1;
                            return t.loadIdx = this.fragLoadIdx, this.fragCurrent = t, this.startFragRequested = !0, this.nextLoadPosition = t.start + t.duration, t.autoLevel = a.autoLevelEnabled, t.bitrateTest = this.bitrateTest, a.trigger(v.default.FRAG_LOADING, {frag: t}), this.demuxer || (this.demuxer = new f.default(a, "main")), this.state = k.FRAG_LOADING, !0
                        }
                        w.logger.log("Loading key for " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + r), this.state = k.KEY_LOADING, a.trigger(v.default.KEY_LOADING, {frag: t})
                    }
                }, {
                    key: "getBufferRange", value: function (e) {
                        var t, r, n = this.bufferRange;
                        if (n)for (t = n.length - 1; t >= 0; t--)if (r = n[t], e >= r.start && e <= r.end)return r;
                        return null
                    }
                }, {
                    key: "followingBufferRange", value: function (e) {
                        return e ? this.getBufferRange(e.end + .5) : null
                    }
                }, {
                    key: "_checkFragmentChanged", value: function () {
                        var e, t, r = this.media;
                        if (r && r.readyState && r.seeking === !1 && (t = r.currentTime, t > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = t), d.default.isBuffered(r, t) ? e = this.getBufferRange(t) : d.default.isBuffered(r, t + .1) && (e = this.getBufferRange(t + .1)), e)) {
                            var n = e.frag;
                            n !== this.fragPlaying && (this.fragPlaying = n, this.hls.trigger(v.default.FRAG_CHANGED, {frag: n}))
                        }
                    }
                }, {
                    key: "immediateLevelSwitch", value: function () {
                        if (w.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                            this.immediateSwitch = !0;
                            var e = this.media, t = void 0;
                            e ? (t = e.paused, e.pause()) : t = !0, this.previouslyPaused = t
                        }
                        var r = this.fragCurrent;
                        r && r.loader && r.loader.abort(), this.fragCurrent = null, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = k.BUFFER_FLUSHING, this.hls.trigger(v.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY
                        })
                    }
                }, {
                    key: "immediateLevelSwitchEnd", value: function () {
                        var e = this.media;
                        e && e.buffered.length && (this.immediateSwitch = !1, d.default.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                    }
                }, {
                    key: "nextLevelSwitch", value: function () {
                        var e = this.media;
                        if (e && e.readyState) {
                            var t = void 0, r = void 0, n = void 0;
                            if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, r = this.getBufferRange(e.currentTime), r && r.start > 1 && (this.state = k.BUFFER_FLUSHING, this.hls.trigger(v.default.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: r.start - 1
                                })), e.paused)t = 0; else {
                                var i = this.hls.nextLoadLevel, o = this.levels[i], a = this.fragLastKbps;
                                t = a && this.fragCurrent ? this.fragCurrent.duration * o.bitrate / (1e3 * a) + 1 : 0
                            }
                            if (n = this.getBufferRange(e.currentTime + t), n && (n = this.followingBufferRange(n))) {
                                var s = this.fragCurrent;
                                s && s.loader && s.loader.abort(), this.fragCurrent = null, this.state = k.BUFFER_FLUSHING, this.hls.trigger(v.default.BUFFER_FLUSHING, {
                                    startOffset: n.start,
                                    endOffset: Number.POSITIVE_INFINITY
                                })
                            }
                        }
                    }
                }, {
                    key: "onMediaAttached", value: function (e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                        var r = this.config;
                        this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition)
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        var e = this.media;
                        e && e.ended && (w.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                        var t = this.levels;
                        t && t.forEach(function (e) {
                            e.details && e.details.fragments.forEach(function (e) {
                                e.loadCounter = void 0
                            })
                        }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                    }
                }, {
                    key: "onMediaSeeking", value: function () {
                        var e = this.media, t = e ? e.currentTime : void 0, r = this.config;
                        if (w.logger.log("media seeking to " + t.toFixed(3)), this.state === k.FRAG_LOADING) {
                            var n = d.default.bufferInfo(e, t, this.config.maxBufferHole), i = this.fragCurrent;
                            if (0 === n.len && i) {
                                var o = r.maxFragLookUpTolerance, a = i.start - o, s = i.start + i.duration + o;
                                t < a || t > s ? (i.loader && (w.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = k.IDLE) : w.logger.log("seeking outside of buffer but within currently loaded fragment range")
                            }
                        } else this.state === k.ENDED && (this.state = k.IDLE);
                        e && (this.lastCurrentTime = t), this.state !== k.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * r.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = t), this.tick()
                    }
                }, {
                    key: "onMediaSeeked", value: function () {
                        w.logger.log("media seeked to " + this.media.currentTime.toFixed(3)), this.tick()
                    }
                }, {
                    key: "onMediaEnded", value: function () {
                        w.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        w.logger.log("trigger BUFFER_RESET"), this.hls.trigger(v.default.BUFFER_RESET), this.bufferRange = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                    }
                }, {
                    key: "onManifestParsed", value: function (e) {
                        var t, r = !1, n = !1;
                        e.levels.forEach(function (e) {
                            t = e.audioCodec, t && (t.indexOf("mp4a.40.2") !== -1 && (r = !0), t.indexOf("mp4a.40.5") !== -1 && (n = !0))
                        }), this.audioCodecSwitch = r && n, this.audioCodecSwitch && w.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;
                        var i = this.config;
                        i.autoStartLoad && this.hls.startLoad(i.startPosition)
                    }
                }, {
                    key: "onLevelLoaded", value: function (e) {
                        var t = e.details, r = e.level, n = this.levels[r], i = t.totalduration, o = 0;
                        if (w.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), this.levelLastLoaded = r, t.live) {
                            var a = n.details;
                            a && t.fragments.length > 0 ? (_.default.mergeDetails(a, t), o = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, a), t.PTSKnown ? w.logger.log("live playlist sliding:" + o.toFixed(3)) : w.logger.log("live playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, w.logger.log("live playlist - first load, unknown sliding"))
                        } else t.PTSKnown = !1;
                        if (n.details = t, this.hls.trigger(v.default.LEVEL_UPDATED, {
                                details: t,
                                level: r
                            }), this.startFragRequested === !1) {
                            if (this.startPosition === -1 || this.lastCurrentTime === -1) {
                                var s = t.startTimeOffset;
                                isNaN(s) ? t.live ? (this.startPosition = this.computeLivePosition(o, t), w.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (s < 0 && (w.logger.log("negative start time offset " + s + ", count from end of last fragment"), s = o + i + s), w.logger.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s), this.lastCurrentTime = this.startPosition
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === k.WAITING_LEVEL && (this.state = k.IDLE), this.tick()
                    }
                }, {
                    key: "onKeyLoaded", value: function () {
                        this.state === k.KEY_LOADING && (this.state = k.IDLE, this.tick())
                    }
                }, {
                    key: "onFragLoaded", value: function (e) {
                        var t = this.fragCurrent, r = e.frag;
                        if (this.state === k.FRAG_LOADING && t && "main" === r.type && r.level === t.level && r.sn === t.sn) {
                            var n = e.stats, i = this.levels[t.level], o = i.details;
                            if (w.logger.log("Loaded  " + t.sn + " of [" + o.startSN + " ," + o.endSN + "],level " + t.level), this.bitrateTest = !1, r.bitrateTest === !0 && this.hls.nextLoadLevel)this.state = k.IDLE, this.startFragRequested = !1, n.tparsed = n.tbuffered = performance.now(), this.hls.trigger(v.default.FRAG_BUFFERED, {
                                stats: n,
                                frag: t,
                                id: "main"
                            }), this.tick(); else {
                                this.state = k.PARSING, this.stats = n;
                                var a = o.totalduration, s = isNaN(t.startDTS) ? t.start : t.startDTS, l = t.level, u = t.sn, c = this.config.defaultAudioCodec || i.audioCodec;
                                this.audioCodecSwap && (w.logger.log("swapping playlist audio codec"), void 0 === c && (c = this.lastAudioCodec), c && (c = c.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5")), this.pendingAppending = 0, w.logger.log("Parsing " + u + " of [" + o.startSN + " ," + o.endSN + "],level " + l + ", cc " + t.cc);
                                var d = this.demuxer;
                                d || (d = this.demuxer = new f.default(this.hls, "main"));
                                var h = o.PTSKnown || !o.live;
                                d.push(e.payload, c, i.videoCodec, s, t.cc, l, u, a, t.decryptdata, h)
                            }
                        }
                        this.fragLoadError = 0
                    }
                }, {
                    key: "onFragParsingInitSegment", value: function (e) {
                        var t = this.fragCurrent;
                        if (t && "main" === e.id && e.sn === t.sn && e.level === t.level && this.state === k.PARSING) {
                            var r, n, i = e.tracks;
                            if (i.audio && this.altAudio && delete i.audio, n = i.audio) {
                                var o = this.levels[this.level].audioCodec, a = navigator.userAgent.toLowerCase();
                                o && this.audioCodecSwap && (w.logger.log("swapping playlist audio codec"), o = o.indexOf("mp4a.40.5") !== -1 ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && a.indexOf("firefox") === -1 && (o = "mp4a.40.5"), a.indexOf("android") !== -1 && "audio/mpeg" !== n.container && (o = "mp4a.40.2", w.logger.log("Android: force audio codec to " + o)), n.levelCodec = o, n.id = e.id
                            }
                            if (n = i.video, n && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), e.unique) {
                                var s = {codec: "", levelCodec: ""};
                                for (r in e.tracks)n = i[r], s.container = n.container, s.codec && (s.codec += ",", s.levelCodec += ","), n.codec && (s.codec += n.codec), n.levelCodec && (s.levelCodec += n.levelCodec);
                                i = {audiovideo: s}
                            }
                            this.hls.trigger(v.default.BUFFER_CODECS, i);
                            for (r in i) {
                                n = i[r], w.logger.log("main track:" + r + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                var l = n.initSegment;
                                l && (this.pendingAppending++, this.hls.trigger(v.default.BUFFER_APPENDING, {
                                    type: r,
                                    data: l,
                                    parent: "main",
                                    content: "initSegment"
                                }))
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onFragParsingData", value: function (e) {
                        var t = this, r = this.fragCurrent;
                        if (r && "main" === e.id && e.sn === r.sn && e.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === k.PARSING) {
                            var n = this.levels[this.level], i = this.fragCurrent;
                            w.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0));
                            var o = _.default.updateFragPTSDTS(n.details, i.sn, e.startPTS, e.endPTS, e.startDTS, e.endDTS), a = this.hls;
                            a.trigger(v.default.LEVEL_PTS_UPDATED, {
                                details: n.details,
                                level: this.level,
                                drift: o,
                                type: e.type,
                                start: e.startPTS,
                                end: e.endPTS
                            }), "video" === e.type && (i.dropped = e.dropped), [e.data1, e.data2].forEach(function (r) {
                                r && (t.pendingAppending++, a.trigger(v.default.BUFFER_APPENDING, {
                                    type: e.type,
                                    data: r,
                                    parent: "main",
                                    content: "data"
                                }))
                            }), this.bufferRange.push({
                                type: e.type,
                                start: e.startPTS,
                                end: e.endPTS,
                                frag: i
                            }), this.tick()
                        }
                    }
                }, {
                    key: "onFragParsed", value: function (e) {
                        var t = this.fragCurrent;
                        t && "main" === e.id && e.sn === t.sn && e.level === t.level && this.state === k.PARSING && (this.stats.tparsed = performance.now(), this.state = k.PARSED, this._checkAppendedParsed())
                    }
                }, {
                    key: "onAudioTrackSwitch", value: function (e) {
                        var t = !!e.url;
                        if (t)this.videoBuffer && this.mediaBuffer !== this.videoBuffer && (w.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = this.videoBuffer); else if (this.mediaBuffer !== this.media) {
                            w.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            var r = this.fragCurrent;
                            r.loader && (w.logger.log("switching to main audio track, cancel main fragment load"), r.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = k.IDLE
                        }
                        this.altAudio = t
                    }
                }, {
                    key: "onBufferCreated", value: function (e) {
                        var t = e.tracks, r = void 0, n = void 0, i = !1;
                        for (var o in t) {
                            var a = t[o];
                            "main" === a.id ? (n = o, r = a, "video" === o && (this.videoBuffer = t[o].buffer)) : i = !0
                        }
                        i && r ? (w.logger.log("alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                    }
                }, {
                    key: "onBufferAppended", value: function (e) {
                        if ("main" === e.parent)switch (this.state) {
                            case k.PARSING:
                            case k.PARSED:
                                this.pendingAppending--, this._checkAppendedParsed()
                        }
                    }
                }, {
                    key: "_checkAppendedParsed", value: function () {
                        if (this.state === k.PARSED && 0 === this.pendingAppending) {
                            var e = this.fragCurrent, t = this.stats;
                            if (e) {
                                this.fragPrevious = e, t.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * t.total / (t.tbuffered - t.tfirst)), this.hls.trigger(v.default.FRAG_BUFFERED, {
                                    stats: t,
                                    frag: e,
                                    id: "main"
                                });
                                var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                                w.logger.log("main buffered : " + E.default.toString(r.buffered)), this.state = k.IDLE
                            }
                            this.tick()
                        }
                    }
                }, {
                    key: "onError", value: function (e) {
                        var t = e.frag || this.fragCurrent;
                        if (!t || "main" === t.type) {
                            var r = this.media, n = r && d.default.isBuffered(r, r.currentTime) && d.default.isBuffered(r, r.currentTime + .5);
                            switch (e.details) {
                                case T.ErrorDetails.FRAG_LOAD_ERROR:
                                case T.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                case T.ErrorDetails.KEY_LOAD_ERROR:
                                case T.ErrorDetails.KEY_LOAD_TIMEOUT:
                                    if (!e.fatal) {
                                        var i = this.fragLoadError;
                                        i ? i++ : i = 1;
                                        var o = this.config;
                                        if (i <= o.fragLoadingMaxRetry) {
                                            this.fragLoadError = i, t.loadCounter = 0;
                                            var a = Math.min(Math.pow(2, i - 1) * o.fragLoadingRetryDelay, o.fragLoadingMaxRetryTimeout);
                                            w.logger.warn("mediaController: frag loading failed, retry in " + a + " ms"), this.retryDate = performance.now() + a, this.state = k.FRAG_LOADING_WAITING_RETRY
                                        } else w.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.trigger(v.default.ERROR, e), this.state = k.ERROR
                                    }
                                    break;
                                case T.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                    e.fatal || (n ? (this._reduceMaxBufferLength(t.duration), this.state = k.IDLE) : t.autoLevel && 0 !== t.level || (e.fatal = !0, this.hls.trigger(v.default.ERROR, e), this.state = k.ERROR));
                                    break;
                                case T.ErrorDetails.LEVEL_LOAD_ERROR:
                                case T.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    this.state !== k.ERROR && (e.fatal ? (this.state = k.ERROR, w.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : this.state === k.WAITING_LEVEL && (this.state = k.IDLE));
                                    break;
                                case T.ErrorDetails.BUFFER_FULL_ERROR:
                                    this.state !== k.PARSING && this.state !== k.PARSED || (n ? (this._reduceMaxBufferLength(t.duration), this.state = k.IDLE) : (w.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.state = k.PAUSED, this.hls.trigger(v.default.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY
                                    })))
                            }
                        }
                    }
                }, {
                    key: "_reduceMaxBufferLength", value: function (e) {
                        var t = this.config;
                        t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, w.logger.warn("reduce max buffer length to " + t.maxMaxBufferLength + "s and switch to IDLE state"), this.fragLoadIdx += 2 * t.fragLoadingLoopThreshold)
                    }
                }, {
                    key: "_checkBuffer", value: function () {
                        var e = this.media;
                        if (e && e.readyState) {
                            var t = e.currentTime, r = e.buffered;
                            if (this.loadedmetadata || !r.length || e.seeking)if (this.immediateSwitch)this.immediateLevelSwitchEnd(); else {
                                var n = d.default.bufferInfo(e, t, 0), i = !(e.paused || e.ended || 0 === e.buffered.length), o = .5, a = t > e.playbackRate * this.lastCurrentTime, s = this.config;
                                if (this.stalled && a && (this.stalled = !1, w.logger.log("playback not stuck anymore @" + t)), i && n.len <= o && (a ? (o = 0, this.seekHoleNudgeDuration = 0) : this.stalled ? this.seekHoleNudgeDuration += s.seekHoleNudgeDuration : (this.seekHoleNudgeDuration = 0, w.logger.log("playback seems stuck @" + t), this.hls.trigger(v.default.ERROR, {
                                        type: T.ErrorTypes.MEDIA_ERROR,
                                        details: T.ErrorDetails.BUFFER_STALLED_ERROR,
                                        fatal: !1
                                    }), this.stalled = !0), n.len <= o)) {
                                    var l = n.nextStart, u = l - t;
                                    if (l && u < s.maxSeekHole && u > 0) {
                                        w.logger.log("adjust currentTime from " + e.currentTime + " to next buffered @ " + l + " + nudge " + this.seekHoleNudgeDuration);
                                        var c = l + this.seekHoleNudgeDuration - e.currentTime;
                                        e.currentTime = l + this.seekHoleNudgeDuration, this.hls.trigger(v.default.ERROR, {
                                            type: T.ErrorTypes.MEDIA_ERROR,
                                            details: T.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                            fatal: !1,
                                            hole: c
                                        })
                                    }
                                }
                            } else {
                                this.loadedmetadata = !0;
                                var h = this.startPosition, f = d.default.isBuffered(e, h);
                                t === h && f || (w.logger.log("target start position:" + h), f || (h = r.start(0), w.logger.log("target start position not buffered, seek to buffered.start(0) " + h)), w.logger.log("adjust currentTime from " + t + " to " + h), e.currentTime = h)
                            }
                        }
                    }
                }, {
                    key: "onFragLoadEmergencyAborted", value: function () {
                        this.state = k.IDLE, this.loadedmetadata || (this.startFragRequested = !1), this.tick()
                    }
                }, {
                    key: "onBufferFlushed", value: function () {
                        var e = this.mediaBuffer ? this.mediaBuffer : this.media, t = this.bufferRange, r = [], n = void 0, i = void 0;
                        for (i = 0; i < t.length; i++)n = t[i], d.default.isBuffered(e, (n.start + n.end) / 2) && r.push(n);
                        this.bufferRange = r, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = k.IDLE, this.fragPrevious = null
                    }
                }, {
                    key: "swapAudioCodec", value: function () {
                        this.audioCodecSwap = !this.audioCodecSwap
                    }
                }, {
                    key: "computeLivePosition", value: function (e, t) {
                        var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                        return e + Math.max(0, t.totalduration - r)
                    }
                }, {
                    key: "state", set: function (e) {
                        if (this.state !== e) {
                            var t = this.state;
                            this._state = e, w.logger.log("engine state transition from " + t + " to " + e), this.hls.trigger(v.default.STREAM_STATE_TRANSITION, {
                                previousState: t,
                                nextState: e
                            })
                        }
                    }, get: function () {
                        return this._state
                    }
                }, {
                    key: "currentLevel", get: function () {
                        var e = this.media;
                        if (e) {
                            var t = this.getBufferRange(e.currentTime);
                            if (t)return t.frag.level
                        }
                        return -1
                    }
                }, {
                    key: "nextBufferRange", get: function () {
                        var e = this.media;
                        return e ? this.followingBufferRange(this.getBufferRange(e.currentTime)) : null
                    }
                }, {
                    key: "nextLevel", get: function () {
                        var e = this.nextBufferRange;
                        return e ? e.frag.level : -1
                    }
                }, {
                    key: "liveSyncPosition", get: function () {
                        return this._liveSyncPosition
                    }, set: function (e) {
                        this._liveSyncPosition = e
                    }
                }]), t
            }(y.default);
            r.default = O
        }, {22: 22, 26: 26, 27: 27, 28: 28, 30: 30, 31: 31, 41: 41, 45: 45, 46: 46}], 13: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(42), f = n(h), p = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.FRAG_PARSING_USERDATA, u.default.MANIFEST_LOADING, u.default.FRAG_LOADED, u.default.LEVEL_SWITCH));
                    if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.config.enableCEA708Captions) {
                        var n = r, a = function (e, t) {
                            var r = null;
                            try {
                                r = new window.Event("addtrack")
                            } catch (e) {
                                r = document.createEvent("Event"), r.initEvent("addtrack", !1, !1)
                            }
                            r.track = e, t.dispatchEvent(r)
                        }, s = {
                            newCue: function (e, t, r) {
                                if (!n.textTrack1) {
                                    var i = n.getExistingTrack("1");
                                    i ? (n.textTrack1 = i, n.clearCurrentCues(n.textTrack1), a(n.textTrack1, n.media)) : (n.textTrack1 = n.createTextTrack("captions", "English", "en"), n.textTrack1.textTrack1 = !0)
                                }
                                n.Cues.newCue(n.textTrack1, e, t, r)
                            }
                        }, l = {
                            newCue: function (e, t, r) {
                                if (!n.textTrack2) {
                                    var i = n.getExistingTrack("2");
                                    i ? (n.textTrack2 = i, n.clearCurrentCues(n.textTrack2), a(n.textTrack2, n.media)) : (n.textTrack2 = n.createTextTrack("captions", "Spanish", "es"), n.textTrack2.textTrack2 = !0)
                                }
                                n.Cues.newCue(n.textTrack2, e, t, r)
                            }
                        };
                        r.cea608Parser = new f.default(0, s, l)
                    }
                    return r
                }

                return a(t, e), s(t, [{
                    key: "clearCurrentCues", value: function (e) {
                        if (e && e.cues)for (; e.cues.length > 0;)e.removeCue(e.cues[0])
                    }
                }, {
                    key: "getExistingTrack", value: function (e) {
                        var t = this.media;
                        if (t)for (var r = 0; r < t.textTracks.length; r++) {
                            var n = t.textTracks[r], i = "textTrack" + e;
                            if (n[i] === !0)return n
                        }
                        return null
                    }
                }, {
                    key: "createTextTrack", value: function (e, t, r) {
                        if (this.media)return this.media.addTextTrack(e, t, r)
                    }
                }, {
                    key: "destroy", value: function () {
                        d.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onMediaAttaching", value: function (e) {
                        this.media = e.media
                    }
                }, {
                    key: "onMediaDetaching", value: function () {
                        this.clearCurrentCues(this.textTrack1), this.clearCurrentCues(this.textTrack2)
                    }
                }, {
                    key: "onManifestLoading", value: function () {
                        this.lastPts = Number.NEGATIVE_INFINITY
                    }
                }, {
                    key: "onLevelSwitch", value: function () {
                        "NONE" === this.hls.currentLevel.closedCaptions ? this.enabled = !1 : this.enabled = !0
                    }
                }, {
                    key: "onFragLoaded", value: function (e) {
                        if ("main" === e.frag.type) {
                            var t = e.frag.start;
                            t <= this.lastPts && (this.clearCurrentCues(this.textTrack1), this.clearCurrentCues(this.textTrack2)), this.lastPts = t
                        }
                    }
                }, {
                    key: "onFragParsingUserdata", value: function (e) {
                        if (this.enabled && this.config.enableCEA708Captions)for (var t = 0; t < e.samples.length; t++) {
                            var r = this.extractCea608Data(e.samples[t].bytes);
                            this.cea608Parser.addData(e.samples[t].pts, r)
                        }
                    }
                }, {
                    key: "extractCea608Data", value: function (e) {
                        for (var t, r, n, i, o, a = 31 & e[0], s = 2, l = [], u = 0; u < a; u++)t = e[s++], r = 127 & e[s++], n = 127 & e[s++], i = 0 !== (4 & t), o = 3 & t, 0 === r && 0 === n || i && 0 === o && (l.push(r), l.push(n));
                        return l
                    }
                }]), t
            }(d.default);
            r.default = p
        }, {27: 27, 28: 28, 42: 42}], 14: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e(t, r) {
                    n(this, e), this.subtle = t, this.aesIV = r
                }

                return i(e, [{
                    key: "decrypt", value: function (e, t) {
                        return this.subtle.decrypt({name: "AES-CBC", iv: this.aesIV}, t, e)
                    }
                }]), e
            }();
            r.default = o
        }, {}], 15: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e() {
                    n(this, e), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [], this.subMix[0] = new Uint32Array(256), this.subMix[1] = new Uint32Array(256), this.subMix[2] = new Uint32Array(256), this.subMix[3] = new Uint32Array(256), this.invSubMix = [], this.invSubMix[0] = new Uint32Array(256), this.invSubMix[1] = new Uint32Array(256), this.invSubMix[2] = new Uint32Array(256), this.invSubMix[3] = new Uint32Array(256), this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                }

                return i(e, [{
                    key: "uint8ArrayToUint32Array_", value: function (e) {
                        for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < r.length; n++)r[n] = t.getUint32(4 * n);
                        return r
                    }
                }, {
                    key: "initTable", value: function () {
                        var e = this.sBox, t = this.invSBox, r = this.subMix[0], n = this.subMix[1], i = this.subMix[2], o = this.subMix[3], a = this.invSubMix[0], s = this.invSubMix[1], l = this.invSubMix[2], u = this.invSubMix[3], c = new Uint32Array(256), d = 0, h = 0, f = 0;
                        for (f = 0; f < 256; f++)f < 128 ? c[f] = f << 1 : c[f] = f << 1 ^ 283;
                        for (f = 0; f < 256; f++) {
                            var p = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4;
                            p = p >>> 8 ^ 255 & p ^ 99, e[d] = p, t[p] = d;
                            var v = c[d], g = c[v], y = c[g], m = 257 * c[p] ^ 16843008 * p;
                            r[d] = m << 24 | m >>> 8, n[d] = m << 16 | m >>> 16, i[d] = m << 8 | m >>> 24, o[d] = m, m = 16843009 * y ^ 65537 * g ^ 257 * v ^ 16843008 * d, a[p] = m << 24 | m >>> 8, s[p] = m << 16 | m >>> 16, l[p] = m << 8 | m >>> 24, u[p] = m, d ? (d = v ^ c[c[c[y ^ v]]], h ^= c[c[h]]) : d = h = 1
                        }
                    }
                }, {
                    key: "expandKey", value: function (e) {
                        for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;)r = t[n] === this.key[n], n++;
                        if (!r) {
                            this.key = t;
                            var i = this.keySize = t.length;
                            if (4 !== i && 6 !== i && 8 !== i)throw new Error("Invalid aes key size=" + i);
                            var o = this.ksRows = 4 * (i + 6 + 1), a = void 0, s = void 0, l = this.keySchedule = new Uint32Array(this.ksRows), u = this.invKeySchedule = new Uint32Array(this.ksRows), c = this.sBox, d = this.rcon, h = this.invSubMix[0], f = this.invSubMix[1], p = this.invSubMix[2], v = this.invSubMix[3], g = void 0, y = void 0;
                            for (a = 0; a < o; a++)a < i ? g = l[a] = t[a] : (y = g, a % i === 0 ? (y = y << 8 | y >>> 24, y = c[y >>> 24] << 24 | c[y >>> 16 & 255] << 16 | c[y >>> 8 & 255] << 8 | c[255 & y], y ^= d[a / i | 0] << 24) : i > 6 && a % i === 4 && (y = c[y >>> 24] << 24 | c[y >>> 16 & 255] << 16 | c[y >>> 8 & 255] << 8 | c[255 & y]), l[a] = g = (l[a - i] ^ y) >>> 0);
                            for (s = 0; s < o; s++)a = o - s, y = 3 & s ? l[a] : l[a - 4], s < 4 || a <= 4 ? u[s] = y : u[s] = h[c[y >>> 24]] ^ f[c[y >>> 16 & 255]] ^ p[c[y >>> 8 & 255]] ^ v[c[255 & y]], u[s] = u[s] >>> 0
                        }
                    }
                }, {
                    key: "networkToHostOrderSwap", value: function (e) {
                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                    }
                }, {
                    key: "decrypt", value: function (e, t, r) {
                        for (var n, i, o = this.keySize + 6, a = this.invKeySchedule, s = this.invSBox, l = this.invSubMix[0], u = this.invSubMix[1], c = this.invSubMix[2], d = this.invSubMix[3], h = this.uint8ArrayToUint32Array_(r), f = h[0], p = h[1], v = h[2], g = h[3], y = new Int32Array(e), m = new Int32Array(y.length), _ = void 0, b = void 0, E = void 0, T = void 0, w = void 0, k = void 0, O = void 0, S = void 0, C = void 0, R = void 0, A = void 0, j = void 0; t < y.length;) {
                            for (C = this.networkToHostOrderSwap(y[t]), R = this.networkToHostOrderSwap(y[t + 1]), A = this.networkToHostOrderSwap(y[t + 2]), j = this.networkToHostOrderSwap(y[t + 3]), w = C ^ a[0], k = j ^ a[1], O = A ^ a[2], S = R ^ a[3], n = 4, i = 1; i < o; i++)_ = l[w >>> 24] ^ u[k >> 16 & 255] ^ c[O >> 8 & 255] ^ d[255 & S] ^ a[n], b = l[k >>> 24] ^ u[O >> 16 & 255] ^ c[S >> 8 & 255] ^ d[255 & w] ^ a[n + 1], E = l[O >>> 24] ^ u[S >> 16 & 255] ^ c[w >> 8 & 255] ^ d[255 & k] ^ a[n + 2], T = l[S >>> 24] ^ u[w >> 16 & 255] ^ c[k >> 8 & 255] ^ d[255 & O] ^ a[n + 3], w = _, k = b, O = E, S = T, n += 4;
                            _ = s[w >>> 24] << 24 ^ s[k >> 16 & 255] << 16 ^ s[O >> 8 & 255] << 8 ^ s[255 & S] ^ a[n], b = s[k >>> 24] << 24 ^ s[O >> 16 & 255] << 16 ^ s[S >> 8 & 255] << 8 ^ s[255 & w] ^ a[n + 1], E = s[O >>> 24] << 24 ^ s[S >> 16 & 255] << 16 ^ s[w >> 8 & 255] << 8 ^ s[255 & k] ^ a[n + 2], T = s[S >>> 24] << 24 ^ s[w >> 16 & 255] << 16 ^ s[k >> 8 & 255] << 8 ^ s[255 & O] ^ a[n + 3], n += 3, m[t] = this.networkToHostOrderSwap(_ ^ f), m[t + 1] = this.networkToHostOrderSwap(T ^ p), m[t + 2] = this.networkToHostOrderSwap(E ^ v), m[t + 3] = this.networkToHostOrderSwap(b ^ g), f = C, p = R, v = A, g = j, t += 4
                        }
                        return m.buffer
                    }
                }, {
                    key: "destroy", value: function () {
                        this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                    }
                }]), e
            }();
            r.default = o
        }, {}], 16: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(14), s = n(a), l = e(17), u = n(l), c = e(15), d = n(c), h = e(26), f = e(45), p = function () {
                function e(t) {
                    i(this, e), this.hls = t;
                    try {
                        var r = window ? window.crypto : crypto;
                        this.subtle = r.subtle || r.webkitSubtle
                    } catch (e) {
                    }
                    this.disableWebCrypto = !this.supportsWebCrypto()
                }

                return o(e, [{
                    key: "supportsWebCrypto", value: function () {
                        return this.subtle && "https:" === window.location.protocol
                    }
                }, {
                    key: "decrypt", value: function (e, t, r, n) {
                        var i = this;
                        this.disableWebCrypto && this.hls.config.enableSoftwareAES ? (f.logger.log("decrypting by JavaScript Implementation"), this.decryptor || (this.decryptor = new d.default), this.decryptor.expandKey(t), n(this.decryptor.decrypt(e, 0, r))) : !function () {
                            f.logger.log("decrypting by WebCrypto API");
                            var o = i.subtle;
                            i.key !== t && (i.key = t, i.fastAesKey = new u.default(o, t)), i.fastAesKey.expandKey().then(function (t) {
                                var i = new s.default(o, r);
                                i.decrypt(e, t).then(function (e) {
                                    n(e)
                                })
                            }).catch(function (o) {
                                i.onWebCryptoError(o, e, t, r, n)
                            })
                        }()
                    }
                }, {
                    key: "onWebCryptoError", value: function (e, t, r, n, i) {
                        var o = this.hls;
                        o.config.enableSoftwareAES ? (f.logger.log("disabling to use WebCrypto API"), this.disableWebCrypto = !0, this.decrypt(t, r, n, i)) : (f.logger.error("decrypting error : " + e.message), o.trigger(Event.ERROR, {
                            type: h.ErrorTypes.MEDIA_ERROR,
                            details: h.ErrorDetails.FRAG_DECRYPT_ERROR,
                            fatal: !0,
                            reason: e.message
                        }))
                    }
                }, {
                    key: "destroy", value: function () {
                        var e = this.decryptor;
                        e && (e.destroy(), this.decryptor = void 0)
                    }
                }]), e
            }();
            r.default = p
        }, {14: 14, 15: 15, 17: 17, 26: 26, 45: 45}], 17: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e(t, r) {
                    n(this, e), this.subtle = t, this.key = r
                }

                return i(e, [{
                    key: "expandKey", value: function () {
                        return this.subtle.importKey("raw", this.key, {name: "AES-CBC"}, !1, ["encrypt", "decrypt"])
                    }
                }]), e
            }();
            r.default = o
        }, {}], 18: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(19), s = n(a), l = e(45), u = e(24), c = n(u), d = function () {
                function e(t, r, n, o, a) {
                    i(this, e), this.observer = t, this.id = r, this.remuxerClass = n, this.config = o, this.remuxer = new this.remuxerClass(t, r, o, a), this.insertDiscontinuity()
                }

                return o(e, [{
                    key: "insertDiscontinuity", value: function () {
                        this._aacTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0
                        }
                    }
                }, {
                    key: "push", value: function (e, t, r, n, i, o, a, u, d) {
                        var h, f, p, v, g, y, m, _, b, E, T = new c.default(e), w = 90 * T.timeStamp, k = !1;
                        for (i !== this.lastCC ? (l.logger.log(this.id + " discontinuity detected"), this.lastCC = i, this.insertDiscontinuity(), this.remuxer.switchLevel(), this.remuxer.insertDiscontinuity()) : o !== this.lastLevel ? (l.logger.log("audio track switch detected"), this.lastLevel = o, this.remuxer.switchLevel(), this.insertDiscontinuity()) : a === this.lastSN + 1 && (k = !0), h = this._aacTrack, this.lastSN = a, this.lastLevel = o, y = T.length, b = e.length; y < b - 1 && (255 !== e[y] || 240 !== (240 & e[y + 1])); y++);
                        for (h.audiosamplerate || (f = s.default.getAudioConfig(this.observer, e, y, t), h.config = f.config, h.audiosamplerate = f.samplerate, h.channelCount = f.channelCount, h.codec = f.codec, h.duration = u, l.logger.log("parsed codec:" + h.codec + ",rate:" + f.samplerate + ",nb channel:" + f.channelCount)), g = 0, v = 9216e4 / h.audiosamplerate; y + 5 < b && (m = 1 & e[y + 1] ? 7 : 9, p = (3 & e[y + 3]) << 11 | e[y + 4] << 3 | (224 & e[y + 5]) >>> 5, p -= m, p > 0 && y + m + p <= b);)for (_ = w + g * v, E = {
                            unit: e.subarray(y + m, y + m + p),
                            pts: _,
                            dts: _
                        }, h.samples.push(E), h.len += p, y += p + m, g++; y < b - 1 && (255 !== e[y] || 240 !== (240 & e[y + 1])); y++);
                        this.remuxer.remux(o, a, this._aacTrack, {samples: []}, {
                            samples: [{
                                pts: w,
                                dts: w,
                                unit: T.payload
                            }]
                        }, {samples: []}, n, k, d)
                    }
                }, {
                    key: "destroy", value: function () {
                    }
                }], [{
                    key: "probe", value: function (e) {
                        var t, r, n = new c.default(e);
                        if (n.hasTimeStamp)for (t = n.length, r = e.length; t < r - 1; t++)if (255 === e[t] && 240 === (240 & e[t + 1]))return !0;
                        return !1
                    }
                }]), e
            }();
            r.default = d
        }, {19: 19, 24: 24, 45: 45}], 19: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = e(45), a = e(26), s = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "getAudioConfig", value: function (e, t, r, n) {
                        var i, s, l, u, c, d = navigator.userAgent.toLowerCase(), h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                        return i = ((192 & t[r + 2]) >>> 6) + 1, s = (60 & t[r + 2]) >>> 2, s > h.length - 1 ? void e.trigger(Event.ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "invalid ADTS sampling index:" + s
                        }) : (u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, o.logger.log("manifest codec:" + n + ",ADTS data:type:" + i + ",sampleingIndex:" + s + "[" + h[s] + "Hz],channelConfig:" + u), /firefox|OPR/i.test(d) ? s >= 6 ? (i = 5, c = new Array(4), l = s - 3) : (i = 2, c = new Array(2), l = s) : d.indexOf("android") !== -1 ? (i = 2, c = new Array(2), l = s) : (i = 5, c = new Array(4), n && (n.indexOf("mp4a.40.29") !== -1 || n.indexOf("mp4a.40.5") !== -1) || !n && s >= 6 ? l = s - 3 : ((n && n.indexOf("mp4a.40.2") !== -1 && s >= 6 && 1 === u || !n && 1 === u) && (i = 2, c = new Array(2)), l = s)), c[0] = i << 3, c[0] |= (14 & s) >> 1, c[1] |= (1 & s) << 7, c[1] |= u << 3, 5 === i && (c[1] |= (14 & l) >> 1, c[2] = (1 & l) << 7, c[2] |= 8, c[3] = 0), {
                            config: c,
                            samplerate: h[s],
                            channelCount: u,
                            codec: "mp4a.40." + i
                        })
                    }
                }]), e
            }();
            r.default = s
        }, {26: 26, 45: 45}], 20: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(28), s = n(a), l = e(26), u = e(18), c = n(u), d = e(25), h = n(d), f = e(38), p = n(f), v = e(39), g = n(v), y = function () {
                function e(t, r, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    i(this, e), this.hls = t, this.id = r, this.config = this.hls.config || o, this.typeSupported = n
                }

                return o(e, [{
                    key: "destroy", value: function () {
                        var e = this.demuxer;
                        e && e.destroy()
                    }
                }, {
                    key: "push", value: function (e, t, r, n, i, o, a, u, d) {
                        var f = this.demuxer;
                        if (!f) {
                            var v = this.hls, y = this.id, m = this.config, _ = this.typeSupported;
                            if (h.default.probe(e))f = this.typeSupported.mp2t === !0 ? new h.default(v, y, g.default, m, _) : new h.default(v, y, p.default, m, _); else {
                                if (!c.default.probe(e))return void v.trigger(s.default.ERROR, {
                                    type: l.ErrorTypes.MEDIA_ERROR,
                                    id: y,
                                    details: l.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                });
                                f = new c.default(v, y, p.default, m, _)
                            }
                            this.demuxer = f
                        }
                        f.push(e, t, r, n, i, o, a, u, d)
                    }
                }]), e
            }();
            r.default = y
        }, {18: 18, 25: 25, 26: 26, 28: 28, 38: 38, 39: 39}], 21: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = e(20), o = n(i), a = e(28), s = n(a), l = e(45), u = e(1), c = n(u), d = function (e) {
                var t = new c.default;
                t.trigger = function (e) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)n[i - 1] = arguments[i];
                    t.emit.apply(t, [e, e].concat(n))
                }, t.off = function (e) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)n[i - 1] = arguments[i];
                    t.removeListener.apply(t, [e].concat(n))
                };
                var r = function (t, r) {
                    e.postMessage({event: t, data: r})
                };
                e.addEventListener("message", function (n) {
                    var i = n.data;
                    switch (i.cmd) {
                        case"init":
                            var a = JSON.parse(i.config);
                            e.demuxer = new o.default(t, i.id, i.typeSupported, a);
                            try {
                                (0, l.enableLogs)(a.debug === !0)
                            } catch (e) {
                            }
                            r("init", null);
                            break;
                        case"demux":
                            e.demuxer.push(new Uint8Array(i.data), i.audioCodec, i.videoCodec, i.timeOffset, i.cc, i.level, i.sn, i.duration, i.accurateTimeOffset)
                    }
                }), t.on(s.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(s.default.FRAG_PARSED, r), t.on(s.default.ERROR, r), t.on(s.default.FRAG_PARSING_METADATA, r), t.on(s.default.FRAG_PARSING_USERDATA, r), t.on(s.default.FRAG_PARSING_DATA, function (t, r) {
                    var n = r.data1.buffer, i = r.data2.buffer;
                    delete r.data1, delete r.data2, e.postMessage({event: t, data: r, data1: n, data2: i}, [n, i])
                })
            };
            r.default = d
        }, {1: 1, 20: 20, 28: 28, 45: 45}], 22: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(28), s = n(a), l = e(20), u = n(l), c = e(21), d = n(c), h = e(45), f = e(16), p = n(f), v = e(26), g = function () {
                function t(r, n) {
                    i(this, t), this.hls = r, this.id = n;
                    var o = {
                        mp4: MediaSource.isTypeSupported("video/mp4"),
                        mp2t: r.config.enableMP2TPassThrough && MediaSource.isTypeSupported("video/mp2t"),
                        mpeg: MediaSource.isTypeSupported("audio/mpeg"),
                        mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')
                    };
                    if (r.config.enableWorker && "undefined" != typeof Worker) {
                        h.logger.log("demuxing in webworker");
                        var a = void 0;
                        try {
                            var l = e(3);
                            a = this.w = l(d.default), this.onwmsg = this.onWorkerMessage.bind(this), a.addEventListener("message", this.onwmsg), a.onerror = function (e) {
                                r.trigger(s.default.ERROR, {
                                    type: v.ErrorTypes.OTHER_ERROR,
                                    details: v.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {message: e.message + " (" + e.filename + ":" + e.lineno + ")"}
                                })
                            }, a.postMessage({cmd: "init", typeSupported: o, id: n, config: JSON.stringify(r.config)})
                        } catch (e) {
                            h.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), a && URL.revokeObjectURL(a.objectURL), this.demuxer = new u.default(r, n, o)
                        }
                    } else this.demuxer = new u.default(r, n, o);
                    this.demuxInitialized = !0
                }

                return o(t, [{
                    key: "destroy", value: function () {
                        var e = this.w;
                        if (e)e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null; else {
                            var t = this.demuxer;
                            t && (t.destroy(), this.demuxer = null)
                        }
                        var r = this.decrypter;
                        r && (r.destroy(), this.decrypter = null)
                    }
                }, {
                    key: "pushDecrypted", value: function (e, t, r, n, i, o, a, s, l) {
                        var u = this.w;
                        if (u)u.postMessage({
                            cmd: "demux",
                            data: e,
                            audioCodec: t,
                            videoCodec: r,
                            timeOffset: n,
                            cc: i,
                            level: o,
                            sn: a,
                            duration: s,
                            accurateTimeOffset: l
                        }, [e]); else {
                            var c = this.demuxer;
                            c && c.push(new Uint8Array(e), t, r, n, i, o, a, s, l)
                        }
                    }
                }, {
                    key: "push", value: function (e, t, r, n, i, o, a, l, u, c) {
                        if (e.byteLength > 0 && null != u && null != u.key && "AES-128" === u.method) {
                            null == this.decrypter && (this.decrypter = new p.default(this.hls));
                            var d = this, h = performance.now();
                            this.decrypter.decrypt(e, u.key.buffer, u.iv.buffer, function (e) {
                                d.hls.trigger(s.default.FRAG_DECRYPTED, {
                                    level: o,
                                    sn: a,
                                    stats: {tstart: h, tdecrypt: performance.now()}
                                }), d.pushDecrypted(e, t, r, n, i, o, a, l, c)
                            })
                        } else this.pushDecrypted(e, t, r, n, i, o, a, l, c)
                    }
                }, {
                    key: "onWorkerMessage", value: function (e) {
                        var t = e.data, r = this.hls;
                        switch (t.event) {
                            case"init":
                                URL.revokeObjectURL(this.w.objectURL);
                                break;
                            case s.default.FRAG_PARSING_DATA:
                                t.data.data1 = new Uint8Array(t.data1), t.data.data2 = new Uint8Array(t.data2);
                            default:
                                r.trigger(t.event, t.data)
                        }
                    }
                }]), t
            }();
            r.default = g
        }, {16: 16, 20: 20, 21: 21, 26: 26, 28: 28, 3: 3, 45: 45}], 23: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = e(45), a = function () {
                function e(t) {
                    n(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
                }

                return i(e, [{
                    key: "loadWord", value: function () {
                        var e = this.data, t = this.bytesAvailable, r = e.byteLength - t, n = new Uint8Array(4), i = Math.min(4, t);
                        if (0 === i)throw new Error("no bytes available");
                        n.set(e.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
                    }
                }, {
                    key: "skipBits", value: function (e) {
                        var t;
                        this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                    }
                }, {
                    key: "readBits", value: function (e) {
                        var t = Math.min(this.bitsAvailable, e), r = this.word >>> 32 - t;
                        return e > 32 && o.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
                    }
                }, {
                    key: "skipLZ", value: function () {
                        var e;
                        for (e = 0; e < this.bitsAvailable; ++e)if (0 !== (this.word & 2147483648 >>> e))return this.word <<= e, this.bitsAvailable -= e, e;
                        return this.loadWord(), e + this.skipLZ()
                    }
                }, {
                    key: "skipUEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "skipEG", value: function () {
                        this.skipBits(1 + this.skipLZ())
                    }
                }, {
                    key: "readUEG", value: function () {
                        var e = this.skipLZ();
                        return this.readBits(e + 1) - 1
                    }
                }, {
                    key: "readEG", value: function () {
                        var e = this.readUEG();
                        return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                    }
                }, {
                    key: "readBoolean", value: function () {
                        return 1 === this.readBits(1)
                    }
                }, {
                    key: "readUByte", value: function () {
                        return this.readBits(8)
                    }
                }, {
                    key: "readUShort", value: function () {
                        return this.readBits(16)
                    }
                }, {
                    key: "readUInt", value: function () {
                        return this.readBits(32)
                    }
                }, {
                    key: "skipScalingList", value: function (e) {
                        var t, r, n = 8, i = 8;
                        for (t = 0; t < e; t++)0 !== i && (r = this.readEG(), i = (n + r + 256) % 256), n = 0 === i ? n : i
                    }
                }, {
                    key: "readSPS", value: function () {
                        var e, t, r, n, i, o, a, s, l, u = 0, c = 0, d = 0, h = 0, f = 1, p = this.readUByte.bind(this), v = this.readBits.bind(this), g = this.readUEG.bind(this), y = this.readBoolean.bind(this), m = this.skipBits.bind(this), _ = this.skipEG.bind(this), b = this.skipUEG.bind(this), E = this.skipScalingList.bind(this);
                        if (p(), e = p(), t = v(5), m(3), r = p(), b(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                            var T = g();
                            if (3 === T && m(1), b(), b(), m(1), y())for (s = 3 !== T ? 8 : 12, l = 0; l < s; l++)y() && E(l < 6 ? 16 : 64)
                        }
                        b();
                        var w = g();
                        if (0 === w)g(); else if (1 === w)for (m(1), _(), _(), n = g(), l = 0; l < n; l++)_();
                        if (b(), m(1), i = g(), o = g(), a = v(1), 0 === a && m(1), m(1), y() && (u = g(), c = g(), d = g(), h = g()), y() && y()) {
                            var k = void 0, O = p();
                            switch (O) {
                                case 1:
                                    k = [1, 1];
                                    break;
                                case 2:
                                    k = [12, 11];
                                    break;
                                case 3:
                                    k = [10, 11];
                                    break;
                                case 4:
                                    k = [16, 11];
                                    break;
                                case 5:
                                    k = [40, 33];
                                    break;
                                case 6:
                                    k = [24, 11];
                                    break;
                                case 7:
                                    k = [20, 11];
                                    break;
                                case 8:
                                    k = [32, 11];
                                    break;
                                case 9:
                                    k = [80, 33];
                                    break;
                                case 10:
                                    k = [18, 11];
                                    break;
                                case 11:
                                    k = [15, 11];
                                    break;
                                case 12:
                                    k = [64, 33];
                                    break;
                                case 13:
                                    k = [160, 99];
                                    break;
                                case 14:
                                    k = [4, 3];
                                    break;
                                case 15:
                                    k = [3, 2];
                                    break;
                                case 16:
                                    k = [2, 1];
                                    break;
                                case 255:
                                    k = [p() << 8 | p(), p() << 8 | p()]
                            }
                            k && (f = k[0] / k[1])
                        }
                        return {
                            width: Math.ceil((16 * (i + 1) - 2 * u - 2 * c) * f),
                            height: (2 - a) * (o + 1) * 16 - (a ? 2 : 4) * (d + h)
                        }
                    }
                }, {
                    key: "readSliceType", value: function () {
                        return this.readUByte(), this.readUEG(), this.readUEG()
                    }
                }]), e
            }();
            r.default = a
        }, {45: 45}], 24: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = e(45), a = function () {
                function e(t) {
                    n(this, e), this._hasTimeStamp = !1;
                    for (var r, i, a, s, l, u, c, d, h = 0; ;)if (c = this.readUTF(t, h, 3), h += 3, "ID3" === c)h += 3, r = 127 & t[h++], i = 127 & t[h++], a = 127 & t[h++], s = 127 & t[h++], l = (r << 21) + (i << 14) + (a << 7) + s, u = h + l, this._parseID3Frames(t, h, u), h = u; else {
                        if ("3DI" !== c)return h -= 3, d = h, void(d && (this.hasTimeStamp || o.logger.warn("ID3 tag found, but no timestamp"), this._length = d, this._payload = t.subarray(0, d)));
                        h += 7, o.logger.log("3DI footer found, end: " + h)
                    }
                }

                return i(e, [{
                    key: "readUTF", value: function (e, t, r) {
                        var n = "", i = t, o = t + r;
                        do n += String.fromCharCode(e[i++]); while (i < o);
                        return n
                    }
                }, {
                    key: "_parseID3Frames", value: function (e, t, r) {
                        for (var n, i, a, s, l; t + 8 <= r;)switch (n = this.readUTF(e, t, 4), t += 4, i = e[t++] << 24 + e[t++] << 16 + e[t++] << 8 + e[t++], s = e[t++] << 8 + e[t++], a = t, n) {
                            case"PRIV":
                                if ("com.apple.streaming.transportStreamTimestamp" === this.readUTF(e, t, 44)) {
                                    t += 44, t += 4;
                                    var u = 1 & e[t++];
                                    this._hasTimeStamp = !0, l = ((e[t++] << 23) + (e[t++] << 15) + (e[t++] << 7) + e[t++]) / 45, u && (l += 47721858.84), l = Math.round(l), o.logger.trace("ID3 timestamp found: " + l), this._timeStamp = l
                                }
                        }
                    }
                }, {
                    key: "hasTimeStamp", get: function () {
                        return this._hasTimeStamp
                    }
                }, {
                    key: "timeStamp", get: function () {
                        return this._timeStamp
                    }
                }, {
                    key: "length", get: function () {
                        return this._length
                    }
                }, {
                    key: "payload", get: function () {
                        return this._payload
                    }
                }]), e
            }();
            r.default = a
        }, {45: 45}], 25: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(19), s = n(a), l = e(28), u = n(l), c = e(23), d = n(c), h = e(45), f = e(26), p = function () {
                function e(t, r, n, o, a) {
                    i(this, e), this.observer = t, this.id = r, this.remuxerClass = n, this.config = o, this.typeSupported = a, this.lastCC = 0, this.remuxer = new this.remuxerClass(t, r, o, a)
                }

                return o(e, [{
                    key: "switchLevel", value: function () {
                        this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = {
                            container: "video/mp2t",
                            type: "video",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0,
                            dropped: 0
                        }, this._audioTrack = {
                            container: "video/mp2t",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0,
                            isAAC: !0
                        }, this._id3Track = {
                            type: "id3",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0
                        }, this._txtTrack = {
                            type: "text",
                            id: -1,
                            sequenceNumber: 0,
                            samples: [],
                            len: 0
                        }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.remuxer.switchLevel()
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                        this.switchLevel(), this.remuxer.insertDiscontinuity()
                    }
                }, {
                    key: "push", value: function (e, t, r, n, i, o, a, s, l) {
                        var c, d, p, v, g, y, m = e.length, _ = this.remuxer.passthrough, b = !1;
                        this.audioCodec = t, this.videoCodec = r, this._duration = s, this.contiguous = !1, this.accurateTimeOffset = l, i !== this.lastCC && (h.logger.log("discontinuity detected"), this.insertDiscontinuity(), this.lastCC = i), o !== this.lastLevel ? (h.logger.log("level switch detected"), this.switchLevel(), this.lastLevel = o) : a === this.lastSN + 1 && (this.contiguous = !0), this.lastSN = a;
                        var E = this.pmtParsed, T = this._avcTrack, w = this._audioTrack, k = this._id3Track, O = T.id, S = w.id, C = k.id, R = this._pmtId, A = T.pesData, j = w.pesData, L = k.pesData, x = this._parsePAT, D = this._parsePMT, P = this._parsePES, M = this._parseAVCPES.bind(this), I = this._parseAACPES.bind(this), N = this._parseMPEGPES.bind(this), F = this._parseID3PES.bind(this);
                        for (m -= m % 188, c = 0; c < m; c += 188)if (71 === e[c]) {
                            if (d = !!(64 & e[c + 1]), p = ((31 & e[c + 1]) << 8) + e[c + 2], v = (48 & e[c + 3]) >> 4, v > 1) {
                                if (g = c + 5 + e[c + 4], g === c + 188)continue
                            } else g = c + 4;
                            switch (p) {
                                case O:
                                    if (d) {
                                        if (A && (y = P(A)) && (M(y, !1), _ && T.codec && (S === -1 || w.codec)))return void this.remux(o, a, e, n);
                                        A = {data: [], size: 0}
                                    }
                                    A && (A.data.push(e.subarray(g, c + 188)), A.size += c + 188 - g);
                                    break;
                                case S:
                                    if (d) {
                                        if (j && (y = P(j)) && (w.isAAC ? I(y) : N(y), _ && w.codec && (O === -1 || T.codec)))return void this.remux(o, a, e, n);
                                        j = {data: [], size: 0}
                                    }
                                    j && (j.data.push(e.subarray(g, c + 188)), j.size += c + 188 - g);
                                    break;
                                case C:
                                    d && (L && (y = P(L)) && F(y), L = {
                                        data: [],
                                        size: 0
                                    }), L && (L.data.push(e.subarray(g, c + 188)), L.size += c + 188 - g);
                                    break;
                                case 0:
                                    d && (g += e[g] + 1), R = this._pmtId = x(e, g);
                                    break;
                                case R:
                                    d && (g += e[g] + 1);
                                    var B = D(e, g, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0);
                                    O = B.avc, O > 0 && (T.id = O), S = B.audio, S > 0 && (w.id = S, w.isAAC = B.isAAC), C = B.id3, C > 0 && (k.id = C), b && !E && (h.logger.log("reparse from beginning"), b = !1, c = -188), E = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    b = !0
                            }
                        } else this.observer.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.MEDIA_ERROR,
                            id: this.id,
                            details: f.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                        A && (y = P(A)) ? (M(y, !0), T.pesData = null) : T.pesData = A, j && (y = P(j)) ? (w.isAAC ? I(y) : N(y), w.pesData = null) : (j && j.size && h.logger.log("last AAC PES packet truncated,might overlap between fragments"), w.pesData = j), L && (y = P(L)) ? (F(y), k.pesData = null) : k.pesData = L, this.remux(o, a, null, n)
                    }
                }, {
                    key: "remux", value: function (e, t, r, n) {
                        for (var i = this._avcTrack, o = i.samples, a = 0, s = 0, l = 0; l < o.length; l++) {
                            for (var u = o[l], c = u.units.units, d = c.length, h = 0, f = 0; f < d; f++)h += c[f].data.length;
                            s += h, a += d, u.length = h
                        }
                        i.len = s, i.nbNalu = a, this.remuxer.remux(e, t, this._audioTrack, this._avcTrack, this._id3Track, this._txtTrack, n, this.contiguous, this.accurateTimeOffset, r)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.switchLevel(), this._initPTS = this._initDTS = void 0, this._duration = 0
                    }
                }, {
                    key: "_parsePAT", value: function (e, t) {
                        return (31 & e[t + 10]) << 8 | e[t + 11]
                    }
                }, {
                    key: "_parsePMT", value: function (e, t, r) {
                        var n, i, o, a, s = {audio: -1, avc: -1, id3: -1, isAAC: !0};
                        for (n = (15 & e[t + 1]) << 8 | e[t + 2], i = t + 3 + n - 4, o = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + o; t < i;) {
                            switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                case 15:
                                    s.audio === -1 && (s.audio = a);
                                    break;
                                case 21:
                                    s.id3 === -1 && (s.id3 = a);
                                    break;
                                case 27:
                                    s.avc === -1 && (s.avc = a);
                                    break;
                                case 3:
                                case 4:
                                    r ? s.audio === -1 && (s.audio = a, s.isAAC = !1) : h.logger.log("MPEG audio found, not supported in this browser for now");
                                    break;
                                case 36:
                                    h.logger.warn("HEVC stream type found, not supported for now");
                                    break;
                                default:
                                    h.logger.log("unkown stream type:" + e[t])
                            }
                            t += ((15 & e[t + 3]) << 8 | e[t + 4]) + 5
                        }
                        return s
                    }
                }, {
                    key: "_parsePES", value: function (e) {
                        var t, r, n, i, o, a, s, l, u, c = 0, d = e.data;
                        if (!e || 0 === e.size)return null;
                        for (; d[0].length < 19 && d.length > 1;) {
                            var h = new Uint8Array(d[0].length + d[1].length);
                            h.set(d[0]), h.set(d[1], d[0].length), d[0] = h, d.splice(1, 1)
                        }
                        if (t = d[0], n = (t[0] << 16) + (t[1] << 8) + t[2], 1 === n) {
                            if (i = (t[4] << 8) + t[5], i && i > e.size - 6)return null;
                            for (r = t[7], 192 & r && (s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & r ? (l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, l > 4294967295 && (l -= 8589934592)) : l = s), o = t[8], u = o + 9, e.size -= u, a = new Uint8Array(e.size); d.length;) {
                                t = d.shift();
                                var f = t.byteLength;
                                if (u) {
                                    if (u > f) {
                                        u -= f;
                                        continue
                                    }
                                    t = t.subarray(u), f -= u, u = 0
                                }
                                a.set(t, c), c += f
                            }
                            return i && (i -= o + 3), {data: a, pts: s, dts: l, len: i}
                        }
                        return null
                    }
                }, {
                    key: "pushAccesUnit", value: function (e, t) {
                        e.units.units.length && e.frame && (!this.config.forceKeyFrameOnDiscontinuity || e.key === !0 || t.sps && (t.samples.length || this.contiguous) ? t.samples.push(e) : t.dropped++), e.debug.length && h.logger.log(e.pts + "/" + e.dts + ":" + e.debug + "," + e.units.length)
                    }
                }, {
                    key: "_parseAVCPES", value: function (e, t) {
                        var r, n, i, o = this, a = this._avcTrack, s = this._parseAVCNALu(e.data), l = !1, u = this.avcSample;
                        e.data = null, s.forEach(function (t) {
                            switch (t.type) {
                                case 1:
                                    n = !0, l && u && (u.debug += "NDR "), u.frame = !0;
                                    var s = t.data;
                                    if (s.length > 1) {
                                        var c = new d.default(s).readSliceType();
                                        2 !== c && 4 !== c && 7 !== c && 9 !== c || (u.key = !0)
                                    }
                                    break;
                                case 5:
                                    n = !0, u || (u = o.avcSample = o._createAVCSample(!0, e.pts, e.dts, "")), l && (u.debug += "IDR "), u.key = !0, u.frame = !0;
                                    break;
                                case 6:
                                    n = !0, l && u && (u.debug += "SEI "), r = new d.default(o.discardEPB(t.data)), r.readUByte();
                                    for (var h = 0, f = 0, p = !1, v = 0; !p && r.bytesAvailable > 1;) {
                                        h = 0;
                                        do v = r.readUByte(), h += v; while (255 === v);
                                        f = 0;
                                        do v = r.readUByte(), f += v; while (255 === v);
                                        if (4 === h && 0 !== r.bytesAvailable) {
                                            p = !0;
                                            var g = r.readUByte();
                                            if (181 === g) {
                                                var y = r.readUShort();
                                                if (49 === y) {
                                                    var m = r.readUInt();
                                                    if (1195456820 === m) {
                                                        var _ = r.readUByte();
                                                        if (3 === _) {
                                                            var b = r.readUByte(), E = r.readUByte(), T = 31 & b, w = [b, E];
                                                            for (i = 0; i < T; i++)w.push(r.readUByte()), w.push(r.readUByte()), w.push(r.readUByte());
                                                            o._insertSampleInOrder(o._txtTrack.samples, {
                                                                type: 3,
                                                                pts: e.pts,
                                                                bytes: w
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (f < r.bytesAvailable)for (i = 0; i < f; i++)r.readUByte()
                                    }
                                    break;
                                case 7:
                                    if (n = !0, l && u && (u.debug += "SPS "), !a.sps) {
                                        r = new d.default(t.data);
                                        var k = r.readSPS();
                                        a.width = k.width, a.height = k.height, a.sps = [t.data], a.duration = o._duration;
                                        var O = t.data.subarray(1, 4), S = "avc1.";
                                        for (i = 0; i < 3; i++) {
                                            var C = O[i].toString(16);
                                            C.length < 2 && (C = "0" + C), S += C
                                        }
                                        a.codec = S
                                    }
                                    break;
                                case 8:
                                    n = !0, l && u && (u.debug += "PPS "), a.pps || (a.pps = [t.data]);
                                    break;
                                case 9:
                                    n = !1, u && o.pushAccesUnit(u, a), u = o.avcSample = o._createAVCSample(!1, e.pts, e.dts, l ? "AUD " : "");
                                    break;
                                case 12:
                                    n = !1;
                                    break;
                                default:
                                    n = !1, u && (u.debug += "unknown NAL " + t.type + " ")
                            }
                            if (u && n) {
                                var R = u.units;
                                R.units.push(t)
                            }
                        }), t && u && (this.pushAccesUnit(u, a), this.avcSample = null)
                    }
                }, {
                    key: "_createAVCSample", value: function (e, t, r, n) {
                        return {key: e, pts: t, dts: r, units: {units: [], length: 0}, debug: n}
                    }
                }, {
                    key: "_insertSampleInOrder", value: function (e, t) {
                        var r = e.length;
                        if (r > 0) {
                            if (t.pts >= e[r - 1].pts)e.push(t); else for (var n = r - 1; n >= 0; n--)if (t.pts < e[n].pts) {
                                e.splice(n, 0, t);
                                break
                            }
                        } else e.push(t)
                    }
                }, {
                    key: "_getLastNalUnit", value: function () {
                        var e = this.avcSample, t = void 0;
                        if (!e || 0 === e.units.units.length) {
                            var r = this._avcTrack, n = r.samples;
                            e = n[n.length - 1]
                        }
                        if (e) {
                            var i = e.units.units;
                            t = i[i.length - 1]
                        }
                        return t
                    }
                }, {
                    key: "_parseAVCNALu", value: function (e) {
                        for (var t, r, n, i, o, a = 0, s = e.byteLength, l = this._avcTrack, u = l.naluState || 0, c = u, d = [], h = -1; a < s;)if (t = e[a++], u)if (1 !== u)switch (u) {
                            case 2:
                            case 3:
                                if (0 === t)u = 3; else if (1 === t) {
                                    if (h >= 0)n = {data: e.subarray(h, a - u - 1), type: o}, d.push(n); else {
                                        var f = this._getLastNalUnit();
                                        if (f && (c && a <= 4 - c && f.state && (f.data = f.data.subarray(0, f.data.byteLength - c)), r = a - u - 1, r > 0)) {
                                            var p = new Uint8Array(f.data.byteLength + r);
                                            p.set(f.data, 0), p.set(e.subarray(0, r), f.data.byteLength), f.data = p
                                        }
                                    }
                                    a < s ? (i = 31 & e[a], h = a, o = i, u = 0) : u = -1
                                } else u = 0;
                                break;
                            case-1:
                                h = 0, o = 31 & t, u = 0
                        } else u = t ? 0 : 2; else u = t ? 0 : 1;
                        if (h >= 0 && u >= 0 && (n = {
                                data: e.subarray(h, s),
                                type: o,
                                state: u
                            }, d.push(n)), 0 === d.length) {
                            var v = this._getLastNalUnit();
                            if (v) {
                                var g = new Uint8Array(v.data.byteLength + e.byteLength);
                                g.set(v.data, 0), g.set(e, v.data.byteLength), v.data = g
                            }
                        }
                        return l.naluState = u, d
                    }
                }, {
                    key: "discardEPB", value: function (e) {
                        for (var t, r, n = e.byteLength, i = [], o = 1; o < n - 2;)0 === e[o] && 0 === e[o + 1] && 3 === e[o + 2] ? (i.push(o + 2), o += 2) : o++;
                        if (0 === i.length)return e;
                        t = n - i.length, r = new Uint8Array(t);
                        var a = 0;
                        for (o = 0; o < t; a++, o++)a === i[0] && (a++, i.shift()), r[o] = e[a];
                        return r
                    }
                }, {
                    key: "_parseAACPES", value: function (e) {
                        var t, r, n, i, o, a, l, c, d, p = this._audioTrack, v = e.data, g = e.pts, y = 0, m = this.aacOverFlow, _ = this.aacLastPTS;
                        if (m) {
                            var b = new Uint8Array(m.byteLength + v.byteLength);
                            b.set(m, 0), b.set(v, m.byteLength), v = b
                        }
                        for (o = y, c = v.length; o < c - 1 && (255 !== v[o] || 240 !== (240 & v[o + 1])); o++);
                        if (o) {
                            var E, T;
                            if (o < c - 1 ? (E = "AAC PES did not start with ADTS header,offset:" + o, T = !1) : (E = "no ADTS header found in AAC PES", T = !0), h.logger.warn("parsing error:" + E), this.observer.trigger(u.default.ERROR, {
                                    type: f.ErrorTypes.MEDIA_ERROR,
                                    id: this.id,
                                    details: f.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: T,
                                    reason: E
                                }), T)return
                        }
                        if (p.audiosamplerate || (t = s.default.getAudioConfig(this.observer, v, o, this.audioCodec), p.config = t.config, p.audiosamplerate = t.samplerate, p.channelCount = t.channelCount, p.codec = t.codec, p.duration = this._duration, h.logger.log("parsed codec:" + p.codec + ",rate:" + t.samplerate + ",nb channel:" + t.channelCount)), i = 0, n = 9216e4 / p.audiosamplerate, m && _) {
                            var w = _ + n;
                            Math.abs(w - g) > 1 && (h.logger.log("AAC: align PTS for overlapping frames by " + Math.round((w - g) / 90)), g = w)
                        }
                        for (; o + 5 < c && (a = 1 & v[o + 1] ? 7 : 9, r = (3 & v[o + 3]) << 11 | v[o + 4] << 3 | (224 & v[o + 5]) >>> 5, r -= a, r > 0 && o + a + r <= c);)for (l = g + i * n, d = {
                            unit: v.subarray(o + a, o + a + r),
                            pts: l,
                            dts: l
                        }, p.samples.push(d), p.len += r, o += r + a, i++; o < c - 1 && (255 !== v[o] || 240 !== (240 & v[o + 1])); o++);
                        m = o < c ? v.subarray(o, c) : null, this.aacOverFlow = m, this.aacLastPTS = l
                    }
                }, {
                    key: "_parseMPEGPES", value: function (e) {
                        for (var t, r = e.data, n = e.pts, i = r.length, o = 0, a = 0; a < i && (t = this._parseMpeg(r, a, i, o++, n)) > 0;)a += t
                    }
                }, {
                    key: "_onMpegFrame", value: function (e, t, r, n, i, o) {
                        var a = 1152 / r * 1e3, s = o + i * a, l = this._audioTrack;
                        l.config = [], l.channelCount = n, l.audiosamplerate = r, l.duration = this._duration, l.samples.push({
                            unit: e,
                            pts: s,
                            dts: s
                        }), l.len += e.length
                    }
                }, {
                    key: "_onMpegNoise", value: function (e) {
                        h.logger.warn("mpeg audio has noise: " + e.length + " bytes")
                    }
                }, {
                    key: "_parseMpeg", value: function (e, t, r, n, i) {
                        var o = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], a = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3];
                        if (t + 2 > r)return -1;
                        if (255 === e[t] || 224 === (224 & e[t + 1])) {
                            if (t + 24 > r)return -1;
                            var s = e[t + 1] >> 3 & 3, l = e[t + 1] >> 1 & 3, u = e[t + 2] >> 4 & 15, c = e[t + 2] >> 2 & 3, d = !!(2 & e[t + 2]);
                            if (1 !== s && 0 !== u && 15 !== u && 3 !== c) {
                                var h = 3 === s ? 3 - l : 3 === l ? 3 : 4, f = 1e3 * o[14 * h + u - 1], p = 3 === s ? 0 : 2 === s ? 1 : 2, v = a[3 * p + c], g = d ? 1 : 0, y = e[t + 3] >> 6 === 3 ? 1 : 2, m = 3 === l ? (3 === s ? 12 : 6) * f / v + g << 2 : (3 === s ? 144 : 72) * f / v + g | 0;
                                return t + m > r ? -1 : (this._onMpegFrame && this._onMpegFrame(e.subarray(t, t + m), f, v, y, n, i), m)
                            }
                        }
                        for (var _ = t + 2; _ < r;) {
                            if (255 === e[_ - 1] && 224 === (224 & e[_]))return this._onMpegNoise && this._onMpegNoise(e.subarray(t, _ - 1)), _ - t - 1;
                            _++
                        }
                        return -1
                    }
                }, {
                    key: "_parseID3PES", value: function (e) {
                        this._id3Track.samples.push(e)
                    }
                }], [{
                    key: "probe", value: function (e) {
                        return e.length >= 564 && 71 === e[0] && 71 === e[188] && 71 === e[376]
                    }
                }]), e
            }();
            r.default = p
        }, {19: 19, 23: 23, 26: 26, 28: 28, 45: 45}], 26: [function (e, t, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0});
            r.ErrorTypes = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                MUX_ERROR: "muxError",
                OTHER_ERROR: "otherError"
            }, r.ErrorDetails = {
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_LOAD_RENAME: "levelLoadReName",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                REMUX_ALLOC_ERROR: "remuxAllocError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                INTERNAL_EXCEPTION: "internalException"
            }
        }, {}], 27: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, a = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), s = e(45), l = e(26), u = e(28), c = n(u), d = function () {
                function e(t) {
                    i(this, e), this.hls = t, this.onEvent = this.onEvent.bind(this);
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)n[o - 1] = arguments[o];
                    this.handledEvents = n, this.useGenericHandler = !0, this.registerListeners()
                }

                return a(e, [{
                    key: "destroy", value: function () {
                        this.unregisterListeners()
                    }
                }, {
                    key: "isEventHandler", value: function () {
                        return "object" === o(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                    }
                }, {
                    key: "registerListeners", value: function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (e) {
                            if ("hlsEventGeneric" === e)throw new Error("Forbidden event name: " + e);
                            this.hls.on(e, this.onEvent)
                        }.bind(this))
                    }
                }, {
                    key: "unregisterListeners", value: function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (e) {
                            this.hls.off(e, this.onEvent)
                        }.bind(this))
                    }
                }, {
                    key: "onEvent", value: function (e, t) {
                        this.onEventGeneric(e, t)
                    }
                }, {
                    key: "onEventGeneric", value: function (e, t) {
                        var r = function (e, t) {
                            var r = "on" + e.replace("hls", "");
                            if ("function" != typeof this[r])throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                            return this[r].bind(this, t)
                        };
                        try {
                            r.call(this, e, t).call()
                        } catch (t) {
                            s.logger.error("internal error happened while processing " + e + ":" + t.message), this.hls.trigger(c.default.ERROR, {
                                type: l.ErrorTypes.OTHER_ERROR,
                                details: l.ErrorDetails.INTERNAL_EXCEPTION,
                                fatal: !1,
                                event: e,
                                err: t
                            })
                        }
                    }
                }]), e
            }();
            r.default = d
        }, {26: 26, 28: 28, 45: 45}], 28: [function (e, t, r) {
            "use strict";
            t.exports = {
                MEDIA_ATTACHING: "hlsMediaAttaching",
                MEDIA_ATTACHED: "hlsMediaAttached",
                MEDIA_DETACHING: "hlsMediaDetaching",
                MEDIA_DETACHED: "hlsMediaDetached",
                BUFFER_RESET: "hlsBufferReset",
                BUFFER_CODECS: "hlsBufferCodecs",
                BUFFER_CREATED: "hlsBufferCreated",
                BUFFER_APPENDING: "hlsBufferAppending",
                BUFFER_APPENDED: "hlsBufferAppended",
                BUFFER_EOS: "hlsBufferEos",
                BUFFER_FLUSHING: "hlsBufferFlushing",
                BUFFER_FLUSHED: "hlsBufferFlushed",
                MANIFEST_LOADING: "hlsManifestLoading",
                MANIFEST_LOADED: "hlsManifestLoaded",
                MANIFEST_PARSED: "hlsManifestParsed",
                LEVEL_LOADING: "hlsLevelLoading",
                LEVEL_LOADED: "hlsLevelLoaded",
                LEVEL_UPDATED: "hlsLevelUpdated",
                LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                LEVEL_SWITCH: "hlsLevelSwitch",
                AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
                AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                FRAG_LOADING: "hlsFragLoading",
                FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                FRAG_LOADED: "hlsFragLoaded",
                FRAG_DECRYPTED: "hlsFragDecrypted",
                FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                FRAG_PARSING_DATA: "hlsFragParsingData",
                FRAG_PARSED: "hlsFragParsed",
                FRAG_BUFFERED: "hlsFragBuffered",
                FRAG_CHANGED: "hlsFragChanged",
                FPS_DROP: "hlsFpsDrop",
                FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                ERROR: "hlsError",
                DESTROYING: "hlsDestroying",
                KEY_LOADING: "hlsKeyLoading",
                KEY_LOADED: "hlsKeyLoaded",
                STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
            }
        }, {}], 29: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "getSilentFrame", value: function (e) {
                        return 1 === e ? new Uint8Array([0, 200, 0, 128, 35, 128]) : 2 === e ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : 3 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : 4 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : 5 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : 6 === e ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null
                    }
                }]), e
            }();
            r.default = o
        }, {}], 30: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "isBuffered", value: function (e, t) {
                        if (e)for (var r = e.buffered, n = 0; n < r.length; n++)if (t >= r.start(n) && t <= r.end(n))return !0;
                        return !1
                    }
                }, {
                    key: "bufferInfo", value: function (e, t, r) {
                        if (e) {
                            var n, i = e.buffered, o = [];
                            for (n = 0; n < i.length; n++)o.push({start: i.start(n), end: i.end(n)});
                            return this.bufferedInfo(o, t, r)
                        }
                        return {len: 0, start: 0, end: 0, nextStart: void 0}
                    }
                }, {
                    key: "bufferedInfo", value: function (e, t, r) {
                        var n, i, o, a, s, l = [];
                        for (e.sort(function (e, t) {
                            var r = e.start - t.start;
                            return r ? r : t.end - e.end
                        }), s = 0; s < e.length; s++) {
                            var u = l.length;
                            if (u) {
                                var c = l[u - 1].end;
                                e[s].start - c < r ? e[s].end > c && (l[u - 1].end = e[s].end) : l.push(e[s])
                            } else l.push(e[s])
                        }
                        for (s = 0, n = 0, i = o = t; s < l.length; s++) {
                            var d = l[s].start, h = l[s].end;
                            if (t + r >= d && t < h)i = d, o = h, n = o - t; else if (t + r < d) {
                                a = d;
                                break
                            }
                        }
                        return {len: n, start: i, end: o, nextStart: a}
                    }
                }]), e
            }();
            r.default = o
        }, {}], 31: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = e(45), a = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "mergeDetails", value: function (t, r) {
                        var n, i = Math.max(t.startSN, r.startSN) - r.startSN, a = Math.min(t.endSN, r.endSN) - r.startSN, s = r.startSN - t.startSN, l = t.fragments, u = r.fragments, c = 0;
                        if (a < i)return void(r.PTSKnown = !1);
                        for (var d = i; d <= a; d++) {
                            var h = l[s + d], f = u[d];
                            f && h && (c = h.cc - f.cc, isNaN(h.startPTS) || (f.start = f.startPTS = h.startPTS, f.endPTS = h.endPTS, f.duration = h.duration, n = f))
                        }
                        if (c)for (o.logger.log("discontinuity sliding from playlist, take drift into account"), d = 0; d < u.length; d++)u[d].cc += c;
                        if (n)e.updateFragPTSDTS(r, n.sn, n.startPTS, n.endPTS, n.startDTS, n.endDTS); else if (s >= 0 && s < l.length) {
                            var p = l[s].start;
                            for (d = 0; d < u.length; d++)u[d].start += p
                        }
                        r.PTSKnown = t.PTSKnown
                    }
                }, {
                    key: "updateFragPTSDTS", value: function (t, r, n, i, o, a) {
                        var s, l, u, c;
                        if (!t || r < t.startSN || r > t.endSN)return 0;
                        if (s = r - t.startSN, l = t.fragments, u = l[s], !isNaN(u.startPTS)) {
                            var d = Math.abs(u.startPTS - n);
                            isNaN(u.deltaPTS) ? u.deltaPTS = d : u.deltaPTS = Math.max(d, u.deltaPTS), n = Math.min(n, u.startPTS), i = Math.max(i, u.endPTS), o = Math.min(o, u.startDTS), a = Math.max(a, u.endDTS)
                        }
                        var h = n - u.start;
                        for (u.start = u.startPTS = n, u.endPTS = i, u.startDTS = o, u.endDTS = a, u.duration = i - n, c = s; c > 0; c--)e.updatePTS(l, c, c - 1);
                        for (c = s; c < l.length - 1; c++)e.updatePTS(l, c, c + 1);
                        return t.PTSKnown = !0, h
                    }
                }, {
                    key: "updatePTS", value: function (e, t, r) {
                        var n = e[t], i = e[r], a = i.startPTS;
                        isNaN(a) ? r > t ? i.start = n.start + n.duration : i.start = n.start - i.duration : r > t ? (n.duration = a - n.start, n.duration < 0 && o.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (i.duration = n.start - a, i.duration < 0 && o.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!"))
                    }
                }]), e
            }();
            r.default = a
        }, {45: 45}], 32: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(28), s = n(a), l = e(26), u = e(36), c = n(u), d = e(34), h = n(d), f = e(4), p = n(f), v = e(7), g = n(v), y = e(8), m = n(y), _ = e(5), b = n(_), E = e(12), T = n(E), w = e(11), k = n(w), O = e(13), S = n(O), C = e(10), R = n(C), A = e(6), j = n(A), L = e(45), x = e(47), D = n(x), P = e(1), M = n(P), I = e(35), N = n(I), F = e(43), B = n(F), U = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, e);
                    var r = e.DefaultConfig;
                    if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    for (var n in r)n in t || (t[n] = r[n]);
                    if (void 0 !== t.liveMaxLatencyDurationCount && t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (void 0 !== t.liveMaxLatencyDuration && (t.liveMaxLatencyDuration <= t.liveSyncDuration || void 0 === t.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    (0, L.enableLogs)(t.debug), this.config = t;
                    var o = this.observer = new M.default;
                    o.trigger = function (e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)r[n - 1] = arguments[n];
                        o.emit.apply(o, [e, e].concat(r))
                    }, o.off = function (e) {
                        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)r[n - 1] = arguments[n];
                        o.removeListener.apply(o, [e].concat(r))
                    }, this.on = o.on.bind(o), this.off = o.off.bind(o), this.trigger = o.trigger.bind(o), this.playlistLoader = new c.default(this), this.fragmentLoader = new h.default(this), this.levelController = new k.default(this), this.abrController = new t.abrController(this), this.bufferController = new t.bufferController(this), this.capLevelController = new t.capLevelController(this), this.fpsController = new t.fpsController(this), this.streamController = new t.streamController(this), this.audioStreamController = new t.audioStreamController(this), this.timelineController = new t.timelineController(this), this.audioTrackController = new j.default(this), this.keyLoader = new N.default(this)
                }

                return o(e, null, [{
                    key: "isSupported", value: function () {
                        return window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                    }
                }, {
                    key: "version", get: function () {
                        return "0.6.14"
                    }
                }, {
                    key: "Events", get: function () {
                        return s.default
                    }
                }, {
                    key: "ErrorTypes", get: function () {
                        return l.ErrorTypes;
                    }
                }, {
                    key: "ErrorDetails", get: function () {
                        return l.ErrorDetails
                    }
                }, {
                    key: "DefaultConfig", get: function () {
                        return e.defaultConfig || (e.defaultConfig = {
                            autoStartLoad: !0,
                            startPosition: -1,
                            defaultAudioCodec: void 0,
                            debug: !1,
                            capLevelOnFPSDrop: !1,
                            capLevelToPlayerSize: !1,
                            initialLiveManifestSize: 1,
                            maxBufferLength: 30,
                            maxBufferSize: 6e7,
                            maxBufferHole: .5,
                            maxSeekHole: 2,
                            seekHoleNudgeDuration: .01,
                            stalledInBufferedNudgeThreshold: 10,
                            maxFragLookUpTolerance: .2,
                            liveSyncDurationCount: 3,
                            liveMaxLatencyDurationCount: 1 / 0,
                            liveSyncDuration: void 0,
                            liveMaxLatencyDuration: void 0,
                            maxMaxBufferLength: 30,
                            enableWorker: !0,
                            enableSoftwareAES: !0,
                            enableLazyURLResolve: !1,
                            manifestLoadingTimeOut: 1e4,
                            manifestLoadingMaxRetry: 0,
                            manifestLoadingRetryDelay: 1e3,
                            manifestLoadingMaxRetryTimeout: 64e3,
                            startLevel: void 0,
                            levelLoadingTimeOut: 1e4,
                            levelLoadingMaxRetry: 4,
                            levelLoadingRetryDelay: 1e3,
                            levelLoadingMaxRetryTimeout: 64e3,
                            fragLoadingTimeOut: 1e4,
                            fragLoadingMaxRetry: 1,
                            fragLoadingRetryDelay: 1e3,
                            fragLoadingMaxRetryTimeout: 64e3,
                            fragLoadingLoopThreshold: 3,
                            startFragPrefetch: !1,
                            fpsDroppedMonitoringPeriod: 5e3,
                            fpsDroppedMonitoringThreshold: .2,
                            appendErrorMaxRetry: 3,
                            loader: D.default,
                            fLoader: void 0,
                            pLoader: void 0,
                            xhrSetup: void 0,
                            fetchSetup: void 0,
                            abrController: p.default,
                            bufferController: g.default,
                            capLevelController: m.default,
                            fpsController: R.default,
                            streamController: T.default,
                            audioStreamController: b.default,
                            timelineController: S.default,
                            cueHandler: B.default,
                            enableCEA708Captions: !0,
                            enableMP2TPassThrough: !1,
                            stretchShortVideoTrack: !1,
                            forceKeyFrameOnDiscontinuity: !0,
                            abrEwmaFastLive: 3,
                            abrEwmaSlowLive: 9,
                            abrEwmaFastVoD: 3,
                            abrEwmaSlowVoD: 9,
                            abrEwmaDefaultEstimate: 5e5,
                            abrBandWidthFactor: .95,
                            abrBandWidthUpFactor: .7,
                            maxStarvationDelay: 4,
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0
                        }), mocoplayer.utils.isFeesCourse() && (e.defaultConfig.maxBufferLength = 1200), e.defaultConfig
                    }, set: function (t) {
                        e.defaultConfig = t
                    }
                }]), o(e, [{
                    key: "destroy", value: function () {
                        L.logger.log("destroy"), this.trigger(s.default.DESTROYING), this.detachMedia(), this.playlistLoader.destroy(), this.fragmentLoader.destroy(), this.levelController.destroy(), this.abrController.destroy(), this.bufferController.destroy(), this.capLevelController.destroy(), this.fpsController.destroy(), this.streamController.destroy(), this.audioStreamController.destroy(), this.timelineController.destroy(), this.audioTrackController.destroy(), this.keyLoader.destroy(), this.url = null, this.observer.removeAllListeners()
                    }
                }, {
                    key: "attachMedia", value: function (e) {
                        L.logger.log("attachMedia"), this.media = e, this.trigger(s.default.MEDIA_ATTACHING, {media: e})
                    }
                }, {
                    key: "detachMedia", value: function () {
                        L.logger.log("detachMedia"), this.trigger(s.default.MEDIA_DETACHING), this.media = null
                    }
                }, {
                    key: "loadSource", value: function (e) {
                        L.logger.log("loadSource:" + e), this.url = e, this.trigger(s.default.MANIFEST_LOADING, {url: e})
                    }
                }, {
                    key: "startLoad", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        L.logger.log("startLoad(" + e + ")"), this.levelController.startLoad(), this.streamController.startLoad(e), this.audioStreamController.startLoad(e)
                    }
                }, {
                    key: "stopLoad", value: function () {
                        L.logger.log("stopLoad"), this.levelController.stopLoad(), this.streamController.stopLoad(), this.audioStreamController.stopLoad()
                    }
                }, {
                    key: "swapAudioCodec", value: function () {
                        L.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                    }
                }, {
                    key: "recoverMediaError", value: function () {
                        L.logger.log("recoverMediaError");
                        var e = this.media;
                        this.detachMedia(), this.attachMedia(e)
                    }
                }, {
                    key: "levels", get: function () {
                        return this.levelController.levels
                    }
                }, {
                    key: "currentLevel", get: function () {
                        return this.streamController.currentLevel
                    }, set: function (e) {
                        L.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                    }
                }, {
                    key: "nextLevel", get: function () {
                        return this.streamController.nextLevel
                    }, set: function (e) {
                        L.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                    }
                }, {
                    key: "loadLevel", get: function () {
                        return this.levelController.level
                    }, set: function (e) {
                        L.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                    }
                }, {
                    key: "nextLoadLevel", get: function () {
                        return this.levelController.nextLoadLevel
                    }, set: function (e) {
                        this.levelController.nextLoadLevel = e
                    }
                }, {
                    key: "firstLevel", get: function () {
                        return Math.max(this.levelController.firstLevel, this.abrController.minAutoLevel)
                    }, set: function (e) {
                        L.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                    }
                }, {
                    key: "startLevel", get: function () {
                        return this.levelController.startLevel
                    }, set: function (e) {
                        L.logger.log("set startLevel:" + e), this.levelController.startLevel = e
                    }
                }, {
                    key: "autoLevelCapping", get: function () {
                        return this.abrController.autoLevelCapping
                    }, set: function (e) {
                        L.logger.log("set autoLevelCapping:" + e), this.abrController.autoLevelCapping = e
                    }
                }, {
                    key: "autoLevelEnabled", get: function () {
                        return this.levelController.manualLevel === -1
                    }
                }, {
                    key: "manualLevel", get: function () {
                        return this.levelController.manualLevel
                    }
                }, {
                    key: "audioTracks", get: function () {
                        return this.audioTrackController.audioTracks
                    }
                }, {
                    key: "audioTrack", get: function () {
                        return this.audioTrackController.audioTrack
                    }, set: function (e) {
                        this.audioTrackController.audioTrack = e
                    }
                }, {
                    key: "liveSyncPosition", get: function () {
                        return this.streamController.liveSyncPosition
                    }
                }]), e
            }();
            r.default = U
        }, {
            1: 1,
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            26: 26,
            28: 28,
            34: 34,
            35: 35,
            36: 36,
            4: 4,
            43: 43,
            45: 45,
            47: 47,
            5: 5,
            6: 6,
            7: 7,
            8: 8
        }], 33: [function (e, t, r) {
            "use strict";
            t.exports = e(32).default
        }, {32: 32}], 34: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), l = e(28), u = n(l), c = e(27), d = n(c), h = e(26), f = e(45), p = e(2), v = n(p), g = function (e) {
                function t(e) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING));
                    return r.loaders = {}, r
                }

                return a(t, e), s(t, [{
                    key: "destroy", value: function () {
                        var e = this.loaders;
                        for (var t in e) {
                            var r = e[t];
                            r && r.destroy()
                        }
                        this.loaders = {}, d.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onFragLoading", value: function (e) {
                        var t = e.frag, r = t.type, n = this.loaders[r], i = this.hls.config;
                        t.loaded = 0, t.loadTimer = (new Date).getTime(), n && (f.logger.warn("abort previous fragment loader for type:" + r), n.abort()), n = this.loaders[r] = t.loader = "undefined" != typeof i.fLoader ? new i.fLoader(i) : new i.loader(i);
                        var o = void 0, a = void 0, s = void 0, l = t.url ? t.url : v.default.buildAbsoluteURL(t.baseurl, t.relurl);
                        o = {url: l, frag: t, responseType: "arraybuffer", progressData: !1};
                        var u = t.byteRangeStartOffset, c = t.byteRangeEndOffset;
                        isNaN(u) || isNaN(c) || (o.rangeStart = u, o.rangeEnd = c), a = {
                            timeout: i.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: i.fragLoadingMaxRetryTimeout
                        }, s = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this),
                            onProgress: this.loadprogress.bind(this)
                        }, n.load(o, a, s)
                    }
                }, {
                    key: "loadsuccess", value: function (e, t, r) {
                        var n = e.data, i = r.frag;
                        i.loader = void 0, i.loadTimer = (new Date).getTime() - i.loadTimer, this.loaders[i.type] = void 0, this.hls.trigger(u.default.FRAG_LOADED, {
                            payload: n,
                            frag: i,
                            stats: t
                        })
                    }
                }, {
                    key: "loaderror", value: function (e, t) {
                        var r = t.loader;
                        r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, {
                            type: h.ErrorTypes.NETWORK_ERROR,
                            details: h.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t.frag,
                            response: e
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (e, t) {
                        var r = t.loader;
                        r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, {
                            type: h.ErrorTypes.NETWORK_ERROR,
                            details: h.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t.frag
                        })
                    }
                }, {
                    key: "loadprogress", value: function (e, t, r) {
                        var n = t.frag;
                        n.loaded = e.loaded, this.hls.trigger(u.default.FRAG_LOAD_PROGRESS, {frag: n, stats: e})
                    }
                }]), t
            }(d.default);
            r.default = g
        }, {2: 2, 26: 26, 27: 27, 28: 28, 45: 45}], 35: [function (_dereq_, module, exports) {
            "use strict";
            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function _classCallCheck(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function _possibleConstructorReturn(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function _inherits(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(exports, "__esModule", {value: !0});
            var _createClass = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), _events = _dereq_(28), _events2 = _interopRequireDefault(_events), _eventHandler = _dereq_(27), _eventHandler2 = _interopRequireDefault(_eventHandler), _errors = _dereq_(26), _logger = _dereq_(45), _urlToolkit = _dereq_(2), _urlToolkit2 = _interopRequireDefault(_urlToolkit), KeyLoader = function (_EventHandler) {
                function KeyLoader(e) {
                    _classCallCheck(this, KeyLoader);
                    var t = _possibleConstructorReturn(this, (KeyLoader.__proto__ || Object.getPrototypeOf(KeyLoader)).call(this, e, _events2.default.KEY_LOADING));
                    return t.loaders = {}, t.decryptkey = null, t.decrypturl = null, t
                }

                return _inherits(KeyLoader, _EventHandler), _createClass(KeyLoader, [{
                    key: "destroy",
                    value: function () {
                        for (var e in this.loaders) {
                            var t = this.loaders[e];
                            t && t.destroy()
                        }
                        this.loaders = {}, _eventHandler2.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onKeyLoading", value: function (e) {
                        var t = e.frag, r = t.type, n = this.loaders[r], i = t.decryptdata, o = i.uri ? i.uri : _urlToolkit2.default.buildAbsoluteURL(i.baseuri, i.reluri);
                        if (o !== this.decrypturl || null === this.decryptkey) {
                            var a = this.hls.config;
                            n && (_logger.logger.warn("abort previous key loader for type:" + r), n.abort()), t.loader = this.loaders[r] = new a.loader(a), this.decrypturl = o, this.decryptkey = null;
                            var s = void 0, l = void 0, u = void 0;
                            s = {url: o, frag: t, responseType: ""}, l = {
                                timeout: a.fragLoadingTimeOut,
                                maxRetry: a.fragLoadingMaxRetry,
                                retryDelay: a.fragLoadingRetryDelay,
                                maxRetryDelay: a.fragLoadingMaxRetryTimeout
                            }, u = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this)
                            }, t.loader.load(s, l, u)
                        } else this.decryptkey && (i.key = this.decryptkey, this.hls.trigger(_events2.default.KEY_LOADED, {frag: t}))
                    }
                }, {
                    key: "loadsuccess", value: function loadsuccess(response, stats, context) {
                        var frag = context.frag, string = eval("(" + response.data + ")");
                        return string.data ? (string = Destm(string.data.info, 1), this.decryptkey = frag.decryptdata.key = new Uint8Array(string), frag.loader = void 0, this.loaders[frag.type] = void 0, void this.hls.trigger(_events2.default.KEY_LOADED, {frag: frag})) : void this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.MEDIA_ERROR,
                            details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: "url",
                            reason: "invalid targetduration"
                        })
                    }
                }, {
                    key: "loaderror", value: function (e, t) {
                        var r = t.frag, n = r.loader;
                        n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.NETWORK_ERROR,
                            details: _errors.ErrorDetails.KEY_LOAD_ERROR,
                            fatal: !1,
                            frag: r,
                            response: e
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (e, t) {
                        var r = t.frag, n = r.loader;
                        n && n.abort(), this.loaders[t.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.NETWORK_ERROR,
                            details: _errors.ErrorDetails.KEY_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: r
                        })
                    }
                }]), KeyLoader
            }(_eventHandler2.default);
            exports.default = KeyLoader
        }, {2: 2, 26: 26, 27: 27, 28: 28, 45: 45}], 36: [function (_dereq_, module, exports) {
            "use strict";
            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function _classCallCheck(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            function _possibleConstructorReturn(e, t) {
                if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function _inherits(e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            Object.defineProperty(exports, "__esModule", {value: !0});
            var _createClass = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), _urlToolkit = _dereq_(2), _urlToolkit2 = _interopRequireDefault(_urlToolkit), _events = _dereq_(28), _events2 = _interopRequireDefault(_events), _eventHandler = _dereq_(27), _eventHandler2 = _interopRequireDefault(_eventHandler), _errors = _dereq_(26), _attrList = _dereq_(40), _attrList2 = _interopRequireDefault(_attrList), _logger = _dereq_(45), MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g, MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g, LEVEL_PLAYLIST_REGEX = /(?:#EXT(INF): *(\d*(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(BYTERANGE): *(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g, PlaylistLoader = function (_EventHandler) {
                function PlaylistLoader(e) {
                    _classCallCheck(this, PlaylistLoader);
                    var t = _possibleConstructorReturn(this, (PlaylistLoader.__proto__ || Object.getPrototypeOf(PlaylistLoader)).call(this, e, _events2.default.MANIFEST_LOADING, _events2.default.LEVEL_LOADING, _events2.default.AUDIO_TRACK_LOADING));
                    return t.loaders = {}, t
                }

                return _inherits(PlaylistLoader, _EventHandler), _createClass(PlaylistLoader, [{
                    key: "destroy",
                    value: function () {
                        for (var e in this.loaders) {
                            var t = this.loaders[e];
                            t && t.destroy()
                        }
                        this.loaders = {}, _eventHandler2.default.prototype.destroy.call(this)
                    }
                }, {
                    key: "onManifestLoading", value: function (e) {
                        this.load(e.url, {type: "manifest"})
                    }
                }, {
                    key: "onLevelLoading", value: function (e) {
                        this.load(e.url, {type: "level", level: e.level, id: e.id})
                    }
                }, {
                    key: "onAudioTrackLoading", value: function (e) {
                        this.load(e.url, {type: "audioTrack", id: e.id})
                    }
                }, {
                    key: "load", value: function (e, t) {
                        var r = this.loaders[t.type];
                        if (r) {
                            var n = r.context;
                            if (n && n.url === e)return void _logger.logger.trace("playlist request ongoing");
                            _logger.logger.warn("abort previous loader for type:" + t.type), r.abort()
                        }
                        var i = this.hls.config, o = void 0, a = void 0, s = void 0, l = void 0;
                        "manifest" === t.type ? (o = i.manifestLoadingMaxRetry, a = i.manifestLoadingTimeOut, s = i.manifestLoadingRetryDelay, l = i.manifestLoadingMaxRetryTimeout) : (o = i.levelLoadingMaxRetry, a = i.levelLoadingTimeOut, s = i.levelLoadingRetryDelay, l = i.levelLoadingMaxRetryTimeout, _logger.logger.log("loading playlist for level " + t.level)), r = this.loaders[t.type] = t.loader = "undefined" != typeof i.pLoader ? new i.pLoader(i) : new i.loader(i), t.url = e, t.responseType = "";
                        var u = void 0, c = void 0;
                        u = {
                            timeout: a,
                            maxRetry: o,
                            retryDelay: s,
                            maxRetryDelay: l
                        }, c = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        }, r.load(t, u, c)
                    }
                }, {
                    key: "resolve", value: function (e, t) {
                        return _urlToolkit2.default.buildAbsoluteURL(t, e)
                    }
                }, {
                    key: "parseMasterPlaylist", value: function (e, t) {
                        var r = [], n = void 0;
                        for (MASTER_PLAYLIST_REGEX.lastIndex = 0; null != (n = MASTER_PLAYLIST_REGEX.exec(e));) {
                            var i = {}, o = i.attrs = new _attrList2.default(n[1]);
                            i.url = this.resolve(n[2], t);
                            var a = o.decimalResolution("RESOLUTION");
                            a && (i.width = a.width, i.height = a.height), i.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || 10 * o.decimalInteger("BANDWIDTH"), i.name = o.NAME;
                            var s = o.CODECS;
                            if (s) {
                                s = s.split(/[ ,]+/);
                                for (var l = 0; l < s.length; l++) {
                                    var u = s[l];
                                    u.indexOf("avc1") !== -1 ? i.videoCodec = this.avc1toavcoti(u) : i.audioCodec = u
                                }
                            }
                            r.push(i)
                        }
                        return r
                    }
                }, {
                    key: "parseMasterPlaylistMedia", value: function (e, t, r) {
                        var n = void 0, i = [];
                        for (MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0; null != (n = MASTER_PLAYLIST_MEDIA_REGEX.exec(e));) {
                            var o = {}, a = new _attrList2.default(n[1]);
                            a.TYPE === r && (o.groupId = a["GROUP-ID"], o.name = a.NAME, o.type = r, o.default = "YES" === a.DEFAULT, o.autoselect = "YES" === a.AUTOSELECT, o.forced = "YES" === a.FORCED, a.URI && (o.url = this.resolve(a.URI, t)), o.lang = a.LANGUAGE, o.name || (o.name = o.lang), i.push(o))
                        }
                        return i
                    }
                }, {
                    key: "createInitializationVector", value: function (e) {
                        for (var t = new Uint8Array(16), r = 12; r < 16; r++)t[r] = e >> 8 * (15 - r) & 255;
                        return t
                    }
                }, {
                    key: "fragmentDecryptdataFromLevelkey", value: function (e, t) {
                        var r = e;
                        return e && e.method && e.uri && !e.iv && (r = this.cloneObj(e), r.iv = this.createInitializationVector(t)), r
                    }
                }, {
                    key: "avc1toavcoti", value: function (e) {
                        var t, r = e.split(".");
                        return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t
                    }
                }, {
                    key: "cloneObj", value: function (e) {
                        return JSON.parse(JSON.stringify(e))
                    }
                }, {
                    key: "parseLevelPlaylist", value: function (e, t, r, n) {
                        var i, o, a, s = 0, l = 0, u = {
                            type: null,
                            version: null,
                            url: t,
                            fragments: [],
                            live: !0,
                            startSN: 0
                        }, c = {
                            method: null,
                            key: null,
                            iv: null,
                            uri: null
                        }, d = 0, h = null, f = null, p = null, v = null, g = null, y = null, m = [], _ = this.hls.config, b = !!_ && _.enableLazyURLResolve;
                        for (LEVEL_PLAYLIST_REGEX.lastIndex = 0; null !== (o = LEVEL_PLAYLIST_REGEX.exec(e));) {
                            for (a = 1; a < o.length && void 0 === o[a]; a++);
                            var E = o[a], T = o[a + 1], w = o[a + 2];
                            switch (E) {
                                case"PLAYLIST-TYPE":
                                    u.type = T.toUpperCase();
                                    break;
                                case"MEDIA-SEQUENCE":
                                    s = u.startSN = parseInt(T);
                                    break;
                                case"TARGETDURATION":
                                    u.targetduration = parseFloat(T);
                                    break;
                                case"VERSION":
                                    u.version = parseInt(T);
                                    break;
                                case"EXTM3U":
                                    break;
                                case"ENDLIST":
                                    u.live = !1;
                                    break;
                                case"DIS":
                                    d++, m.push([E]);
                                    break;
                                case"DISCONTINUITY-SEQ":
                                    d = parseInt(T);
                                    break;
                                case"BYTERANGE":
                                    var k = T.split("@");
                                    y = 1 === k.length ? g : parseInt(k[1]), g = parseInt(k[0]) + y;
                                    break;
                                case"INF":
                                    p = parseFloat(T), v = w ? w : null, m.push(w ? [E, T, w] : [E, T]);
                                    break;
                                case"":
                                    if (!isNaN(p)) {
                                        var O = s++;
                                        i = this.fragmentDecryptdataFromLevelkey(c, O), f = {
                                            type: n,
                                            duration: p,
                                            title: v,
                                            start: l,
                                            sn: O,
                                            level: r,
                                            cc: d,
                                            decryptdata: i,
                                            programDateTime: h,
                                            tagList: m
                                        }, b ? (f.relurl = T, f.baseurl = t) : f.url = T ? this.resolve(T, t) : null, null !== y && (f.byteRangeStartOffset = y, f.byteRangeEndOffset = g), u.fragments.push(f), l += p, p = null, v = null, y = null, h = null, m = []
                                    }
                                    break;
                                case"KEY":
                                    var S = T, C = new _attrList2.default(S), R = C.enumeratedString("METHOD"), A = C.URI, j = C.hexadecimalInteger("IV");
                                    R && (c = {
                                        method: null,
                                        key: null,
                                        iv: null,
                                        uri: null
                                    }, A && "AES-128" === R && (c.method = R, b ? (c.baseuri = t, c.reluri = A) : c.uri = this.resolve(A, t), c.key = null, c.iv = j));
                                    break;
                                case"START":
                                    var L = T, x = new _attrList2.default(L), D = x.decimalFloatingPoint("TIME-OFFSET");
                                    isNaN(D) || (u.startTimeOffset = D);
                                    break;
                                case"PROGRAM-DATE-TIME":
                                    h = new Date(Date.parse(T)), m.push([E, T]);
                                    break;
                                case"#":
                                    m.push(w ? [T, w] : [T]);
                                    break;
                                default:
                                    _logger.logger.warn("line parsed but not handled: " + o)
                            }
                        }
                        return !f || f.url || f.relurl || (u.fragments.pop(), l -= f.duration), u.totalduration = l, u.averagetargetduration = l / u.fragments.length, u.endSN = s - 1, u
                    }
                }, {
                    key: "loadsuccess", value: function loadsuccess(response, stats, context) {
                        var string = response.data, url = response.url, type = context.type, id = context.id, level = context.level, hls = this.hls;
                        if (string = eval("(" + string + ")"), !string.data)return void hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.MEDIA_ERROR,
                            details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: "url",
                            reason: "invalid targetduration"
                        });
                        if (string = Destm(string.data.info), this.loaders[type] = void 0, void 0 !== url && 0 !== url.indexOf("data:") || (url = context.url), stats.tload = performance.now(), 0 === string.indexOf("#EXTM3U"))if (string.indexOf("#EXTINF:") > 0) {
                            var isLevel = "audioTrack" !== type, levelDetails = this.parseLevelPlaylist(string, url, (isLevel ? level : id) || 0, isLevel ? "main" : "audio");
                            "manifest" === type && hls.trigger(_events2.default.MANIFEST_LOADED, {
                                levels: [{
                                    url: url,
                                    details: levelDetails
                                }], audioTracks: [], url: url, stats: stats
                            }), stats.tparsed = performance.now(), levelDetails.targetduration ? isLevel ? hls.trigger(_events2.default.LEVEL_LOADED, {
                                details: levelDetails,
                                level: level || 0,
                                id: id || 0,
                                stats: stats
                            }) : hls.trigger(_events2.default.AUDIO_TRACK_LOADED, {
                                details: levelDetails,
                                id: id,
                                stats: stats
                            }) : hls.trigger(_events2.default.ERROR, {
                                type: _errors.ErrorTypes.NETWORK_ERROR,
                                details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: url,
                                reason: "invalid targetduration"
                            })
                        } else {
                            var levels = this.parseMasterPlaylist(string, url);
                            if (levels.length) {
                                var audiotracks = this.parseMasterPlaylistMedia(string, url, "AUDIO");
                                if (audiotracks.length) {
                                    var embeddedAudioFound = !1;
                                    audiotracks.forEach(function (e) {
                                        e.url || (embeddedAudioFound = !0)
                                    }), embeddedAudioFound === !1 && levels[0].audioCodec && !levels[0].attrs.AUDIO && (_logger.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), audiotracks.unshift({
                                        type: "main",
                                        name: "main"
                                    }))
                                }
                                hls.trigger(_events2.default.MANIFEST_LOADED, {
                                    levels: levels,
                                    audioTracks: audiotracks,
                                    url: url,
                                    stats: stats
                                })
                            } else hls.trigger(_events2.default.ERROR, {
                                type: _errors.ErrorTypes.NETWORK_ERROR,
                                details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: url,
                                reason: "no level found in manifest"
                            })
                        } else hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.NETWORK_ERROR,
                            details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: url,
                            reason: "no EXTM3U delimiter"
                        })
                    }
                }, {
                    key: "loaderror", value: function (e, t) {
                        var r, n, i = t.loader;
                        switch (t.type) {
                            case"manifest":
                                r = _errors.ErrorDetails.MANIFEST_LOAD_ERROR, n = !0;
                                break;
                            case"level":
                                r = _errors.ErrorDetails.LEVEL_LOAD_ERROR, n = !1;
                                break;
                            case"audioTrack":
                                r = _errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, n = !1
                        }
                        i && (i.abort(), this.loaders[t.type] = void 0), this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.NETWORK_ERROR,
                            details: r,
                            fatal: n,
                            url: i.url,
                            loader: i,
                            response: e,
                            context: t
                        })
                    }
                }, {
                    key: "loadtimeout", value: function (e, t) {
                        var r, n, i = t.loader;
                        switch (t.type) {
                            case"manifest":
                                r = _errors.ErrorDetails.MANIFEST_LOAD_TIMEOUT, n = !0;
                                break;
                            case"level":
                                r = _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT, n = !1;
                                break;
                            case"audioTrack":
                                r = _errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, n = !1
                        }
                        i && (i.abort(), this.loaders[t.type] = void 0), this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.NETWORK_ERROR,
                            details: r,
                            fatal: n,
                            url: i.url,
                            loader: i,
                            context: t
                        })
                    }
                }]), PlaylistLoader
            }(_eventHandler2.default);
            exports.default = PlaylistLoader
        }, {2: 2, 26: 26, 27: 27, 28: 28, 40: 40, 45: 45}], 37: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "init", value: function () {
                        e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        };
                        var t;
                        for (t in e.types)e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                        e.HDLR_TYPES = {video: r, audio: n};
                        var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                        e.STTS = e.STSC = e.STCO = o, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                        var a = new Uint8Array([105, 115, 111, 109]), s = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
                        e.FTYP = e.box(e.types.ftyp, a, l, a, s), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
                    }
                }, {
                    key: "box", value: function (e) {
                        for (var t, r = Array.prototype.slice.call(arguments, 1), n = 8, i = r.length, o = i; i--;)n += r[i].byteLength;
                        for (t = new Uint8Array(n), t[0] = n >> 24 & 255, t[1] = n >> 16 & 255, t[2] = n >> 8 & 255, t[3] = 255 & n, t.set(e, 4), i = 0, n = 8; i < o; i++)t.set(r[i], n), n += r[i].byteLength;
                        return t
                    }
                }, {
                    key: "hdlr", value: function (t) {
                        return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                    }
                }, {
                    key: "mdat", value: function (t) {
                        return e.box(e.types.mdat, t)
                    }
                }, {
                    key: "mdhd", value: function (t, r) {
                        return r *= t, e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0]))
                    }
                }, {
                    key: "mdia", value: function (t) {
                        return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                    }
                }, {
                    key: "mfhd", value: function (t) {
                        return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                    }
                }, {
                    key: "minf", value: function (t) {
                        return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                    }
                }, {
                    key: "moof", value: function (t, r, n) {
                        return e.box(e.types.moof, e.mfhd(t), e.traf(n, r))
                    }
                }, {
                    key: "moov", value: function (t) {
                        for (var r = t.length, n = []; r--;)n[r] = e.trak(t[r]);
                        return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(e.mvex(t)))
                    }
                }, {
                    key: "mvex", value: function (t) {
                        for (var r = t.length, n = []; r--;)n[r] = e.trex(t[r]);
                        return e.box.apply(null, [e.types.mvex].concat(n))
                    }
                }, {
                    key: "mvhd", value: function (t, r) {
                        r *= t;
                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                        return e.box(e.types.mvhd, n)
                    }
                }, {
                    key: "sdtp", value: function (t) {
                        var r, n, i = t.samples || [], o = new Uint8Array(4 + i.length);
                        for (n = 0; n < i.length; n++)r = i[n].flags, o[n + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                        return e.box(e.types.sdtp, o)
                    }
                }, {
                    key: "stbl", value: function (t) {
                        return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                    }
                }, {
                    key: "avc1", value: function (t) {
                        var r, n, i, o = [], a = [];
                        for (r = 0; r < t.sps.length; r++)n = t.sps[r], i = n.byteLength, o.push(i >>> 8 & 255), o.push(255 & i), o = o.concat(Array.prototype.slice.call(n));
                        for (r = 0; r < t.pps.length; r++)n = t.pps[r], i = n.byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(n));
                        var s = e.box(e.types.avcC, new Uint8Array([1, o[3], o[4], o[5], 255, 224 | t.sps.length].concat(o).concat([t.pps.length]).concat(a))), l = t.width, u = t.height;
                        return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
                    }
                }, {
                    key: "esds", value: function (e) {
                        var t = e.config.length;
                        return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                    }
                }, {
                    key: "mp4a", value: function (t) {
                        var r = t.audiosamplerate;
                        return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
                    }
                }, {
                    key: "mp3", value: function (t) {
                        var r = t.audiosamplerate;
                        return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                    }
                }, {
                    key: "stsd", value: function (t) {
                        return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                    }
                }, {
                    key: "tkhd", value: function (t) {
                        var r = t.id, n = t.duration * t.timescale, i = t.width, o = t.height;
                        return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, o >> 8 & 255, 255 & o, 0, 0]))
                    }
                }, {
                    key: "traf", value: function (t, r) {
                        var n = e.sdtp(t), i = t.id;
                        return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), e.trun(t, n.length + 16 + 16 + 8 + 16 + 8 + 8), n)
                    }
                }, {
                    key: "trak", value: function (t) {
                        return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                    }
                }, {
                    key: "trex", value: function (t) {
                        var r = t.id;
                        return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                    }
                }, {
                    key: "trun", value: function (t, r) {
                        var n, i, o, a, s, l, u = t.samples || [], c = u.length, d = 12 + 16 * c, h = new Uint8Array(d);
                        for (r += 8 + d, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), n = 0; n < c; n++)i = u[n], o = i.duration, a = i.size, s = i.flags, l = i.cts, h.set([o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * n);
                        return e.box(e.types.trun, h)
                    }
                }, {
                    key: "initSegment", value: function (t) {
                        e.types || e.init();
                        var r, n = e.moov(t);
                        return r = new Uint8Array(e.FTYP.byteLength + n.byteLength), r.set(e.FTYP), r.set(n, e.FTYP.byteLength), r
                    }
                }]), e
            }();
            r.default = o
        }, {}], 38: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(29), s = n(a), l = e(28), u = n(l), c = e(45), d = e(37), h = n(d), f = e(26), p = function () {
                function e(t, r, n, o) {
                    i(this, e), this.observer = t, this.id = r, this.config = n, this.typeSupported = o, this.ISGenerated = !1, this.PES2MP4SCALEFACTOR = 4, this.PES_TIMESCALE = 9e4, this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR
                }

                return o(e, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                        this._initPTS = this._initDTS = void 0
                    }
                }, {
                    key: "switchLevel", value: function () {
                        this.ISGenerated = !1
                    }
                }, {
                    key: "remux", value: function (e, t, r, n, i, o, a, s, l) {
                        if (this.level = e, this.sn = t, this.ISGenerated || this.generateIS(r, n, a), this.ISGenerated)if (r.samples.length) {
                            var c = this.remuxAudio(r, a, s, l);
                            if (n.samples.length) {
                                var d = void 0;
                                c && (d = c.endPTS - c.startPTS), this.remuxVideo(n, a, s, d)
                            }
                        } else {
                            var h = void 0;
                            n.samples.length && (h = this.remuxVideo(n, a, s)), h && r.codec && this.remuxEmptyAudio(r, a, s, h)
                        }
                        i.samples.length && this.remuxID3(i, a), o.samples.length && this.remuxText(o, a), this.observer.trigger(u.default.FRAG_PARSED, {
                            id: this.id,
                            level: this.level,
                            sn: this.sn
                        })
                    }
                }, {
                    key: "generateIS", value: function (e, t, r) {
                        var n, i, o = this.observer, a = e.samples, s = t.samples, l = this.PES_TIMESCALE, d = this.typeSupported, p = "audio/mp4", v = {}, g = {
                            id: this.id,
                            level: this.level,
                            sn: this.sn,
                            tracks: v,
                            unique: !1
                        }, y = void 0 === this._initPTS;
                        y && (n = i = 1 / 0), e.config && a.length && (e.timescale = e.audiosamplerate, e.timescale * e.duration > Math.pow(2, 32) && !function () {
                            var t = function e(t, r) {
                                return r ? e(r, t % r) : t
                            };
                            e.timescale = e.audiosamplerate / t(e.audiosamplerate, e.isAAC ? 1024 : 1152)
                        }(), c.logger.log("audio mp4 timescale :" + e.timescale),
                        e.isAAC || (d.mpeg ? (p = "audio/mpeg", e.codec = "") : d.mp3 && (e.codec = "mp3")), v.audio = {
                            container: p,
                            codec: e.codec,
                            initSegment: !e.isAAC && d.mpeg ? new Uint8Array : h.default.initSegment([e]),
                            metadata: {channelCount: e.channelCount}
                        }, y && (n = i = a[0].pts - l * r)), t.sps && t.pps && s.length && (t.timescale = this.MP4_TIMESCALE, v.video = {
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: h.default.initSegment([t]),
                            metadata: {width: t.width, height: t.height}
                        }, y && (n = Math.min(n, s[0].pts - l * r), i = Math.min(i, s[0].dts - l * r))), Object.keys(v).length ? (o.trigger(u.default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, y && (this._initPTS = n, this._initDTS = i)) : o.trigger(u.default.ERROR, {
                            type: f.ErrorTypes.MEDIA_ERROR,
                            id: this.id,
                            details: f.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "no audio/video samples found"
                        })
                    }
                }, {
                    key: "remuxVideo", value: function (e, t, r, n) {
                        var i, o, a, s, l, d, p, v, g = 8, y = this.PES_TIMESCALE, m = this.PES2MP4SCALEFACTOR, _ = e.samples, b = [], E = this._PTSNormalize, T = this._initDTS;
                        _.sort(function (e, t) {
                            return e.dts - t.dts
                        });
                        var w = _.reduce(function (e, t) {
                            return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                        }, 0);
                        if (w < 0) {
                            c.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(w / 90) + " ms to overcome this issue");
                            for (var k = 0; k < _.length; k++)_[k].dts += w
                        }
                        var O = void 0;
                        O = r ? this.nextAvcDts : t * y;
                        var S = _[0];
                        l = Math.max(E(S.dts - T, O), 0), s = Math.max(E(S.pts - T, O), 0);
                        var C = Math.round((l - O) / 90);
                        r && C && (C > 1 ? c.logger.log("AVC:" + C + " ms hole between fragments detected,filling it") : C < -1 && c.logger.log("AVC:" + -C + " ms overlapping between fragments detected"), l = O, _[0].dts = l + T, s = Math.max(s - C, O), _[0].pts = s + T, c.logger.log("Video/PTS/DTS adjusted: " + Math.round(s / 90) + "/" + Math.round(l / 90) + ",delta:" + C + " ms")), d = l, S = _[_.length - 1], v = Math.max(E(S.dts - T, O), 0), p = Math.max(E(S.pts - T, O), 0), p = Math.max(p, v);
                        var R = navigator.vendor, A = navigator.userAgent, j = R && R.indexOf("Apple") > -1 && A && !A.match("CriOS");
                        j && (i = Math.round((v - l) / (m * (_.length - 1))));
                        for (var L = 0; L < _.length; L++) {
                            var x = _[L];
                            j ? x.dts = l + L * m * i : (x.dts = Math.max(E(x.dts - T, O), l), x.dts = Math.round(x.dts / m) * m), x.pts = Math.max(E(x.pts - T, O), x.dts), x.pts = Math.round(x.pts / m) * m
                        }
                        var D = e.len + 4 * e.nbNalu + 8;
                        try {
                            o = new Uint8Array(D)
                        } catch (e) {
                            return void this.observer.trigger(u.default.ERROR, {
                                type: f.ErrorTypes.MUX_ERROR,
                                level: this.level,
                                id: this.id,
                                details: f.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: D,
                                reason: "fail allocating video mdat " + D
                            })
                        }
                        var P = new DataView(o.buffer);
                        P.setUint32(0, o.byteLength), o.set(h.default.types.mdat, 4);
                        for (var M = 0; M < _.length; M++) {
                            for (var I = _[M], N = 0, F = void 0; I.units.units.length;) {
                                var B = I.units.units.shift();
                                P.setUint32(g, B.data.byteLength), g += 4, o.set(B.data, g), g += B.data.byteLength, N += 4 + B.data.byteLength
                            }
                            if (j)F = Math.max(0, i * Math.round((I.pts - I.dts) / (m * i))); else {
                                if (M < _.length - 1)i = _[M + 1].dts - I.dts; else {
                                    var U = this.config, G = I.dts - _[M > 0 ? M - 1 : M].dts;
                                    if (U.stretchShortVideoTrack) {
                                        var H = U.maxBufferHole, V = U.maxSeekHole, W = Math.floor(Math.min(H, V) * y), K = (n ? s + n * y : this.nextAudioPts) - I.pts;
                                        K > W ? (i = K - G, i < 0 && (i = G), c.logger.log("It is approximately " + K / 90 + " ms to the next segment; using duration " + i / 90 + " ms for the last video frame.")) : i = G
                                    } else i = G
                                }
                                i /= m, F = Math.round((I.pts - I.dts) / m)
                            }
                            b.push({
                                size: N,
                                duration: i,
                                cts: F,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: I.key ? 2 : 1,
                                    isNonSync: I.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = v + i * m;
                        var q = e.dropped;
                        if (e.len = 0, e.nbNalu = 0, e.dropped = 0, b.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var Y = b[0].flags;
                            Y.dependsOn = 2, Y.isNonSync = 0
                        }
                        e.samples = b, a = h.default.moof(e.sequenceNumber++, l / m, e), e.samples = [];
                        var X = {
                            id: this.id,
                            level: this.level,
                            sn: this.sn,
                            data1: a,
                            data2: o,
                            startPTS: s / y,
                            endPTS: (p + m * i) / y,
                            startDTS: l / y,
                            endDTS: this.nextAvcDts / y,
                            type: "video",
                            nb: b.length,
                            dropped: q
                        };
                        return this.observer.trigger(u.default.FRAG_PARSING_DATA, X), X
                    }
                }, {
                    key: "remuxAudio", value: function (e, t, r, n) {
                        var i, o, a, l, d, p, v, g, y, m, _, b, E, T, w, k, O = this.PES_TIMESCALE, S = e.timescale, C = O / S, R = e.timescale * (e.isAAC ? 1024 : 1152) / e.audiosamplerate, A = R * C, j = this._PTSNormalize, L = this._initDTS, x = !e.isAAC && this.typeSupported.mpeg, D = x ? 0 : 8, P = [], M = [];
                        if (e.samples.sort(function (e, t) {
                                return e.pts - t.pts
                            }), M = e.samples, k = this.nextAudioPts, r |= M.length && k && (Math.abs(t - k / O) < .1 || Math.abs(M[0].pts - k - this._initDTS) < 20 * A), r || (k = t * O), n && e.isAAC)for (var I = 0, N = k; I < M.length;) {
                            var F = M[I], B = j(F.pts - L, k), U = B - N;
                            if (U <= -A)c.logger.warn("Dropping 1 audio frame @ " + Math.round(N / 90) / 1e3 + "s due to " + Math.round(Math.abs(U / 90)) + " ms overlap."), M.splice(I, 1), e.len -= F.unit.length; else if (U >= A) {
                                var G = Math.round(U / A);
                                c.logger.warn("Injecting " + G + " audio frame @ " + Math.round(N / 90) / 1e3 + "s due to " + Math.round(U / 90) + " ms gap.");
                                for (var H = 0; H < G; H++)w = N + L, w = Math.max(w, L), T = s.default.getSilentFrame(e.channelCount), T || (c.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), T = F.unit.subarray()), M.splice(I, 0, {
                                    unit: T,
                                    pts: w,
                                    dts: w
                                }), e.len += T.length, N += A, I += 1;
                                F.pts = F.dts = N + L, N += A, I += 1
                            } else Math.abs(U) > .1 * A, N += A, 0 === I ? F.pts = F.dts = L + k : F.pts = F.dts = M[I - 1].pts + A, I += 1
                        }
                        for (; M.length;) {
                            if (o = M.shift(), l = o.unit, m = o.pts - L, _ = o.dts - L, void 0 !== y)b = j(m, y), E = j(_, y), a.duration = Math.round((E - y) / C); else {
                                b = j(m, k), E = j(_, k);
                                var V = Math.round(1e3 * (b - k) / O), W = 0;
                                if (r && e.isAAC && V) {
                                    if (V > 0)W = Math.round((b - k) / A), c.logger.log(V + " ms hole between AAC samples detected,filling it"), W > 0 && (T = s.default.getSilentFrame(e.channelCount), T || (T = l.subarray()), e.len += W * T.length); else if (V < -12) {
                                        c.logger.log(-V + " ms overlapping between AAC samples detected, drop frame"), e.len -= l.byteLength;
                                        continue
                                    }
                                    b = E = k
                                }
                                if (v = Math.max(0, b), g = Math.max(0, E), !(e.len > 0))return;
                                var K = x ? e.len : e.len + 8;
                                try {
                                    d = new Uint8Array(K)
                                } catch (e) {
                                    return void this.observer.trigger(u.default.ERROR, {
                                        type: f.ErrorTypes.MUX_ERROR,
                                        level: this.level,
                                        id: this.id,
                                        details: f.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: K,
                                        reason: "fail allocating audio mdat " + K
                                    })
                                }
                                x || (i = new DataView(d.buffer), i.setUint32(0, d.byteLength), d.set(h.default.types.mdat, 4));
                                for (var q = 0; q < W; q++)w = b - (W - q) * A, T = s.default.getSilentFrame(e.channelCount), T || (c.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), T = l.subarray()), d.set(T, D), D += T.byteLength, a = {
                                    size: T.byteLength,
                                    cts: 0,
                                    duration: 1024,
                                    flags: {
                                        isLeading: 0,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradPrio: 0,
                                        dependsOn: 1
                                    }
                                }, P.push(a)
                            }
                            d.set(l, D), D += l.byteLength, a = {
                                size: l.byteLength,
                                cts: 0,
                                duration: 0,
                                flags: {isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1}
                            }, P.push(a), y = E
                        }
                        var Y = 0, X = P.length;
                        if (X >= 2 && (Y = P[X - 2].duration, a.duration = Y), X) {
                            this.nextAudioPts = b + C * Y, e.len = 0, e.samples = P, p = x ? new Uint8Array : h.default.moof(e.sequenceNumber++, g / C, e), e.samples = [];
                            var z = {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                data1: p,
                                data2: d,
                                startPTS: v / O,
                                endPTS: this.nextAudioPts / O,
                                startDTS: g / O,
                                endDTS: (E + C * Y) / O,
                                type: "audio",
                                nb: X
                            };
                            return this.observer.trigger(u.default.FRAG_PARSING_DATA, z), z
                        }
                        return null
                    }
                }, {
                    key: "remuxEmptyAudio", value: function (e, t, r, n) {
                        var i = this.PES_TIMESCALE, o = e.timescale ? e.timescale : e.audiosamplerate, a = i / o, l = this.nextAudioPts, u = (void 0 !== l ? l : n.startDTS * i) + this._initDTS, d = n.endDTS * i + this._initDTS, h = 1024, f = a * h, p = Math.ceil((d - u) / f), v = s.default.getSilentFrame(e.channelCount);
                        if (c.logger.warn("remux empty Audio"), !v)return void c.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                        for (var g = [], y = 0; y < p; y++) {
                            var m = u + y * f;
                            g.push({unit: v, pts: m, dts: m}), e.len += v.length
                        }
                        e.samples = g, this.remuxAudio(e, t, r)
                    }
                }, {
                    key: "remuxID3", value: function (e, t) {
                        var r, n = e.samples.length;
                        if (n) {
                            for (var i = 0; i < n; i++)r = e.samples[i], r.pts = (r.pts - this._initPTS) / this.PES_TIMESCALE, r.dts = (r.dts - this._initDTS) / this.PES_TIMESCALE;
                            this.observer.trigger(u.default.FRAG_PARSING_METADATA, {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                samples: e.samples
                            })
                        }
                        e.samples = [], t = t
                    }
                }, {
                    key: "remuxText", value: function (e, t) {
                        e.samples.sort(function (e, t) {
                            return e.pts - t.pts
                        });
                        var r, n = e.samples.length;
                        if (n) {
                            for (var i = 0; i < n; i++)r = e.samples[i], r.pts = (r.pts - this._initPTS) / this.PES_TIMESCALE;
                            this.observer.trigger(u.default.FRAG_PARSING_USERDATA, {
                                id: this.id,
                                level: this.level,
                                sn: this.sn,
                                samples: e.samples
                            })
                        }
                        e.samples = [], t = t
                    }
                }, {
                    key: "_PTSNormalize", value: function (e, t) {
                        var r;
                        if (void 0 === t)return e;
                        for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;)e += r;
                        return e
                    }
                }, {
                    key: "passthrough", get: function () {
                        return !1
                    }
                }]), e
            }();
            r.default = p
        }, {26: 26, 28: 28, 29: 29, 37: 37, 45: 45}], 39: [function (e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var o = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), a = e(28), s = n(a), l = function () {
                function e(t, r) {
                    i(this, e), this.observer = t, this.id = r, this.ISGenerated = !1
                }

                return o(e, [{
                    key: "destroy", value: function () {
                    }
                }, {
                    key: "insertDiscontinuity", value: function () {
                    }
                }, {
                    key: "switchLevel", value: function () {
                        this.ISGenerated = !1
                    }
                }, {
                    key: "remux", value: function (e, t, r, n, i, o) {
                        var a = this.observer;
                        if (!this.ISGenerated) {
                            var l = {}, u = {id: this.id, tracks: l, unique: !0}, c = t, d = c.codec;
                            d && (u.tracks.video = {
                                container: c.container,
                                codec: d,
                                metadata: {width: c.width, height: c.height}
                            }), c = e, d = c.codec, d && (u.tracks.audio = {
                                container: c.container,
                                codec: d,
                                metadata: {channelCount: c.channelCount}
                            }), this.ISGenerated = !0, a.trigger(s.default.FRAG_PARSING_INIT_SEGMENT, u)
                        }
                        a.trigger(s.default.FRAG_PARSING_DATA, {
                            id: this.id,
                            data1: o,
                            startPTS: i,
                            startDTS: i,
                            type: "audiovideo",
                            nb: 1,
                            dropped: 0
                        })
                    }
                }, {
                    key: "passthrough", get: function () {
                        return !0
                    }
                }]), e
            }();
            r.default = l
        }, {28: 28}], 40: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = /^(\d+)x(\d+)$/, a = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, s = function () {
                function e(t) {
                    n(this, e), "string" == typeof t && (t = e.parseAttrList(t));
                    for (var r in t)t.hasOwnProperty(r) && (this[r] = t[r])
                }

                return i(e, [{
                    key: "decimalInteger", value: function (e) {
                        var t = parseInt(this[e], 10);
                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                    }
                }, {
                    key: "hexadecimalInteger", value: function (e) {
                        if (this[e]) {
                            var t = (this[e] || "0x").slice(2);
                            t = (1 & t.length ? "0" : "") + t;
                            for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++)r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
                            return r
                        }
                        return null
                    }
                }, {
                    key: "hexadecimalIntegerAsNumber", value: function (e) {
                        var t = parseInt(this[e], 16);
                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                    }
                }, {
                    key: "decimalFloatingPoint", value: function (e) {
                        return parseFloat(this[e])
                    }
                }, {
                    key: "enumeratedString", value: function (e) {
                        return this[e]
                    }
                }, {
                    key: "decimalResolution", value: function (e) {
                        var t = o.exec(this[e]);
                        if (null !== t)return {width: parseInt(t[1], 10), height: parseInt(t[2], 10)}
                    }
                }], [{
                    key: "parseAttrList", value: function (e) {
                        var t, r = {};
                        for (a.lastIndex = 0; null !== (t = a.exec(e));) {
                            var n = t[2], i = '"';
                            0 === n.indexOf(i) && n.lastIndexOf(i) === n.length - 1 && (n = n.slice(1, -1)), r[t[1]] = n
                        }
                        return r
                    }
                }]), e
            }();
            r.default = s
        }, {}], 41: [function (e, t, r) {
            "use strict";
            var n = {
                search: function (e, t) {
                    for (var r = 0, n = e.length - 1, i = null, o = null; r <= n;) {
                        i = (r + n) / 2 | 0, o = e[i];
                        var a = t(o);
                        if (a > 0)r = i + 1; else {
                            if (!(a < 0))return o;
                            n = i - 1
                        }
                    }
                    return null
                }
            };
            t.exports = n
        }, {}], 42: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, a = function (e) {
                var t = e;
                return o.hasOwnProperty(e) && (t = o[e]), String.fromCharCode(t)
            }, s = 15, l = 32, u = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14}, c = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }, d = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14}, h = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }, f = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], p = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                }, time: null, verboseLevel: 0, setTime: function (e) {
                    this.time = e
                }, log: function (e, t) {
                    var r = this.verboseFilter[e];
                    this.verboseLevel >= r
                }
            }, v = function (e) {
                for (var t = [], r = 0; r < e.length; r++)t.push(e[r].toString(16));
                return t
            }, g = function () {
                function e(t, r, i, o, a) {
                    n(this, e), this.foreground = t || "white", this.underline = r || !1, this.italics = i || !1, this.background = o || "black", this.flash = a || !1
                }

                return i(e, [{
                    key: "reset", value: function () {
                        this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                    }
                }, {
                    key: "setStyles", value: function (e) {
                        for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                            var n = t[r];
                            e.hasOwnProperty(n) && (this[n] = e[n])
                        }
                    }
                }, {
                    key: "isDefault", value: function () {
                        return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                    }
                }, {
                    key: "equals", value: function (e) {
                        return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                    }
                }, {
                    key: "copy", value: function (e) {
                        this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                    }
                }, {
                    key: "toString", value: function () {
                        return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                    }
                }]), e
            }(), y = function () {
                function e(t, r, i, o, a, s) {
                    n(this, e), this.uchar = t || " ", this.penState = new g(r, i, o, a, s)
                }

                return i(e, [{
                    key: "reset", value: function () {
                        this.uchar = " ", this.penState.reset()
                    }
                }, {
                    key: "setChar", value: function (e, t) {
                        this.uchar = e, this.penState.copy(t)
                    }
                }, {
                    key: "setPenState", value: function (e) {
                        this.penState.copy(e)
                    }
                }, {
                    key: "equals", value: function (e) {
                        return this.uchar === e.uchar && this.penState.equals(e.penState)
                    }
                }, {
                    key: "copy", value: function (e) {
                        this.uchar = e.uchar, this.penState.copy(e.penState)
                    }
                }, {
                    key: "isEmpty", value: function () {
                        return " " === this.uchar && this.penState.isDefault()
                    }
                }]), e
            }(), m = function () {
                function e() {
                    n(this, e), this.chars = [];
                    for (var t = 0; t < l; t++)this.chars.push(new y);
                    this.pos = 0, this.currPenState = new g
                }

                return i(e, [{
                    key: "equals", value: function (e) {
                        for (var t = !0, r = 0; r < l; r++)if (!this.chars[r].equals(e.chars[r])) {
                            t = !1;
                            break
                        }
                        return t
                    }
                }, {
                    key: "copy", value: function (e) {
                        for (var t = 0; t < l; t++)this.chars[t].copy(e.chars[t])
                    }
                }, {
                    key: "isEmpty", value: function () {
                        for (var e = !0, t = 0; t < l; t++)if (!this.chars[t].isEmpty()) {
                            e = !1;
                            break
                        }
                        return e
                    }
                }, {
                    key: "setCursor", value: function (e) {
                        this.pos !== e && (this.pos = e), this.pos < 0 ? (p.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > l && (p.log("ERROR", "Too large cursor position " + this.pos), this.pos = l)
                    }
                }, {
                    key: "moveCursor", value: function (e) {
                        var t = this.pos + e;
                        if (e > 1)for (var r = this.pos + 1; r < t + 1; r++)this.chars[r].setPenState(this.currPenState);
                        this.setCursor(t)
                    }
                }, {
                    key: "backSpace", value: function () {
                        this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                    }
                }, {
                    key: "insertChar", value: function (e) {
                        e >= 144 && this.backSpace();
                        var t = a(e);
                        return this.pos >= l ? void p.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), void this.moveCursor(1))
                    }
                }, {
                    key: "clearFromPos", value: function (e) {
                        var t;
                        for (t = e; t < l; t++)this.chars[t].reset()
                    }
                }, {
                    key: "clear", value: function () {
                        this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                    }
                }, {
                    key: "clearToEndOfRow", value: function () {
                        this.clearFromPos(this.pos)
                    }
                }, {
                    key: "getTextString", value: function () {
                        for (var e = [], t = !0, r = 0; r < l; r++) {
                            var n = this.chars[r].uchar;
                            " " !== n && (t = !1), e.push(n)
                        }
                        return t ? "" : e.join("")
                    }
                }, {
                    key: "setPenStyles", value: function (e) {
                        this.currPenState.setStyles(e);
                        var t = this.chars[this.pos];
                        t.setPenState(this.currPenState)
                    }
                }]), e
            }(), _ = function () {
                function e() {
                    n(this, e), this.rows = [];
                    for (var t = 0; t < s; t++)this.rows.push(new m);
                    this.currRow = s - 1, this.nrRollUpRows = null, this.reset()
                }

                return i(e, [{
                    key: "reset", value: function () {
                        for (var e = 0; e < s; e++)this.rows[e].clear();
                        this.currRow = s - 1
                    }
                }, {
                    key: "equals", value: function (e) {
                        for (var t = !0, r = 0; r < s; r++)if (!this.rows[r].equals(e.rows[r])) {
                            t = !1;
                            break
                        }
                        return t
                    }
                }, {
                    key: "copy", value: function (e) {
                        for (var t = 0; t < s; t++)this.rows[t].copy(e.rows[t])
                    }
                }, {
                    key: "isEmpty", value: function () {
                        for (var e = !0, t = 0; t < s; t++)if (!this.rows[t].isEmpty()) {
                            e = !1;
                            break
                        }
                        return e
                    }
                }, {
                    key: "backSpace", value: function () {
                        var e = this.rows[this.currRow];
                        e.backSpace()
                    }
                }, {
                    key: "clearToEndOfRow", value: function () {
                        var e = this.rows[this.currRow];
                        e.clearToEndOfRow()
                    }
                }, {
                    key: "insertChar", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.insertChar(e)
                    }
                }, {
                    key: "setPen", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.setPenStyles(e)
                    }
                }, {
                    key: "moveCursor", value: function (e) {
                        var t = this.rows[this.currRow];
                        t.moveCursor(e)
                    }
                }, {
                    key: "setCursor", value: function (e) {
                        p.log("INFO", "setCursor: " + e);
                        var t = this.rows[this.currRow];
                        t.setCursor(e)
                    }
                }, {
                    key: "setPAC", value: function (e, t) {
                        p.log("INFO", "pacData = " + JSON.stringify(e));
                        var r = e.row - 1;
                        if (this.nrRollUpRows && r < this.nrRollUpRows - 1 && (r = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== r) {
                            for (var n = 0; n < s; n++)this.rows[n].clear();
                            var i = this.currRow + 1 - this.nrRollUpRows, o = t.rows[i].cueStartTime;
                            if (o && o < p.time)for (n = 0; n < this.nrRollUpRows; n++)this.rows[r - this.nrRollUpRows + n + 1].copy(t.rows[i + n])
                        }
                        this.currRow = r;
                        var a = this.rows[this.currRow];
                        if (null !== e.indent) {
                            var l = e.indent, u = Math.max(l - 1, 0);
                            a.setCursor(e.indent), e.color = a.chars[u].penState.foreground
                        }
                        var c = {
                            foreground: e.color,
                            underline: e.underline,
                            italics: e.italics,
                            background: "black",
                            flash: !1
                        };
                        this.setPen(c)
                    }
                }, {
                    key: "setBkgData", value: function (e) {
                        p.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                    }
                }, {
                    key: "setRollUpRows", value: function (e) {
                        this.nrRollUpRows = e
                    }
                }, {
                    key: "rollUp", value: function () {
                        if (null === this.nrRollUpRows)return void p.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                        p.log("TEXT", this.getDisplayText());
                        var e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
                        t.clear(), this.rows.splice(this.currRow, 0, t), p.log("INFO", "Rolling up")
                    }
                }, {
                    key: "getDisplayText", value: function (e) {
                        e = e || !1;
                        for (var t = [], r = "", n = -1, i = 0; i < s; i++) {
                            var o = this.rows[i].getTextString();
                            o && (n = i + 1, e ? t.push("Row " + n + ": '" + o + "'") : t.push(o.trim()))
                        }
                        return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
                    }
                }, {
                    key: "getTextAndFormat", value: function () {
                        return this.rows
                    }
                }]), e
            }(), b = function () {
                function e(t, r) {
                    n(this, e), this.chNr = t, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new _, this.nonDisplayedMemory = new _, this.lastOutputScreen = new _, this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }

                return i(e, [{
                    key: "reset", value: function () {
                        this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[s - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                    }
                }, {
                    key: "getHandler", value: function () {
                        return this.outputFilter
                    }
                }, {
                    key: "setHandler", value: function (e) {
                        this.outputFilter = e
                    }
                }, {
                    key: "setPAC", value: function (e) {
                        this.writeScreen.setPAC(e, this.lastOutputScreen)
                    }
                }, {
                    key: "setBkgData", value: function (e) {
                        this.writeScreen.setBkgData(e)
                    }
                }, {
                    key: "setMode", value: function (e) {
                        e !== this.mode && (this.mode = e, p.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset(), this.lastOutputScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                    }
                }, {
                    key: "insertChars", value: function (e) {
                        for (var t = 0; t < e.length; t++)this.writeScreen.insertChar(e[t]);
                        var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                        p.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (p.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                    }
                }, {
                    key: "ccRCL", value: function () {
                        p.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                    }
                }, {
                    key: "ccBS", value: function () {
                        p.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                    }
                }, {
                    key: "ccAOF", value: function () {
                    }
                }, {
                    key: "ccAON", value: function () {
                    }
                }, {
                    key: "ccDER", value: function () {
                        p.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccRU", value: function (e) {
                        p.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                    }
                }, {
                    key: "ccFON", value: function () {
                        p.log("INFO", "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                    }
                }, {
                    key: "ccRDC", value: function () {
                        p.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                    }
                }, {
                    key: "ccTR", value: function () {
                        p.log("INFO", "TR"), this.setMode("MODE_TEXT")
                    }
                }, {
                    key: "ccRTD", value: function () {
                        p.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                    }
                }, {
                    key: "ccEDM", value: function () {
                        p.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccCR", value: function () {
                        p.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate()
                    }
                }, {
                    key: "ccENM", value: function () {
                        p.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                    }
                }, {
                    key: "ccEOC", value: function () {
                        if (p.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                            var e = this.displayedMemory;
                            this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, p.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                        }
                        this.outputDataUpdate()
                    }
                }, {
                    key: "ccTO", value: function (e) {
                        p.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
                    }
                }, {
                    key: "ccMIDROW", value: function (e) {
                        var t = {flash: !1};
                        if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)t.foreground = "white"; else {
                            var r = Math.floor(e / 2) - 16, n = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                            t.foreground = n[r]
                        }
                        p.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                    }
                }, {
                    key: "outputDataUpdate", value: function () {
                        var e = p.time;
                        null !== e && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                    }
                }, {
                    key: "cueSplitAtTime", value: function (e) {
                        this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                    }
                }]), e
            }(), E = function () {
                function e(t, r, i) {
                    n(this, e), this.field = t || 1, this.outputs = [r, i], this.channels = [new b(1, r), new b(2, i)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                        padding: 0,
                        char: 0,
                        cmd: 0,
                        other: 0
                    }
                }

                return i(e, [{
                    key: "getHandler", value: function (e) {
                        return this.channels[e].getHandler()
                    }
                }, {
                    key: "setHandler", value: function (e, t) {
                        this.channels[e].setHandler(t)
                    }
                }, {
                    key: "addData", value: function (e, t) {
                        var r, n, i, o = !1;
                        this.lastTime = e, p.setTime(e);
                        for (var a = 0; a < t.length; a += 2)if (n = 127 & t[a], i = 127 & t[a + 1], 0 !== n || 0 !== i) {
                            if (p.log("DATA", "[" + v([t[a], t[a + 1]]) + "] -> (" + v([n, i]) + ")"), r = this.parseCmd(n, i), r || (r = this.parseMidrow(n, i)), r || (r = this.parsePAC(n, i)), r || (r = this.parseBackgroundAttributes(n, i)), !r && (o = this.parseChars(n, i)))if (this.currChNr && this.currChNr >= 0) {
                                var s = this.channels[this.currChNr - 1];
                                s.insertChars(o)
                            } else p.log("WARNING", "No channel found yet. TEXT-MODE?");
                            r ? this.dataCounters.cmd += 2 : o ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, p.log("WARNING", "Couldn't parse cleaned data " + v([n, i]) + " orig: " + v([t[a], t[a + 1]])))
                        } else this.dataCounters.padding += 2
                    }
                }, {
                    key: "parseCmd", value: function (e, t) {
                        var r = null, n = (20 === e || 28 === e) && 32 <= t && t <= 47, i = (23 === e || 31 === e) && 33 <= t && t <= 35;
                        if (!n && !i)return !1;
                        if (e === this.lastCmdA && t === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, p.log("DEBUG", "Repeated command (" + v([e, t]) + ") is dropped"), !0;
                        r = 20 === e || 23 === e ? 1 : 2;
                        var o = this.channels[r - 1];
                        return 20 === e || 28 === e ? 32 === t ? o.ccRCL() : 33 === t ? o.ccBS() : 34 === t ? o.ccAOF() : 35 === t ? o.ccAON() : 36 === t ? o.ccDER() : 37 === t ? o.ccRU(2) : 38 === t ? o.ccRU(3) : 39 === t ? o.ccRU(4) : 40 === t ? o.ccFON() : 41 === t ? o.ccRDC() : 42 === t ? o.ccTR() : 43 === t ? o.ccRTD() : 44 === t ? o.ccEDM() : 45 === t ? o.ccCR() : 46 === t ? o.ccENM() : 47 === t && o.ccEOC() : o.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                    }
                }, {
                    key: "parseMidrow", value: function (e, t) {
                        var r = null;
                        if ((17 === e || 25 === e) && 32 <= t && t <= 47) {
                            if (r = 17 === e ? 1 : 2, r !== this.currChNr)return p.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                            var n = this.channels[r - 1];
                            return n.ccMIDROW(t), p.log("DEBUG", "MIDROW (" + v([e, t]) + ")"), !0
                        }
                        return !1
                    }
                }, {
                    key: "parsePAC", value: function (e, t) {
                        var r = null, n = null, i = (17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127, o = (16 === e || 24 === e) && 64 <= t && t <= 95;
                        if (!i && !o)return !1;
                        if (e === this.lastCmdA && t === this.lastCmdB)return this.lastCmdA = null, this.lastCmdB = null, !0;
                        r = e <= 23 ? 1 : 2, n = 64 <= t && t <= 95 ? 1 === r ? u[e] : d[e] : 1 === r ? c[e] : h[e];
                        var a = this.interpretPAC(n, t), s = this.channels[r - 1];
                        return s.setPAC(a), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                    }
                }, {
                    key: "interpretPAC", value: function (e, t) {
                        var r = t, n = {color: null, italics: !1, indent: null, underline: !1, row: e};
                        return r = t > 95 ? t - 96 : t - 64, n.underline = 1 === (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
                    }
                }, {
                    key: "parseChars", value: function (e, t) {
                        var r = null, n = null, i = null;
                        if (e >= 25 ? (r = 2, i = e - 8) : (r = 1, i = e), 17 <= i && i <= 19) {
                            var o = t;
                            o = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144, p.log("INFO", "Special char '" + a(o) + "' in channel " + r), n = [o]
                        } else 32 <= e && e <= 127 && (n = 0 === t ? [e] : [e, t]);
                        if (n) {
                            var s = v(n);
                            p.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
                        }
                        return n
                    }
                }, {
                    key: "parseBackgroundAttributes", value: function (e, t) {
                        var r, n, i, o, a = (16 === e || 24 === e) && 32 <= t && t <= 47, s = (23 === e || 31 === e) && 45 <= t && t <= 47;
                        return !(!a && !s) && (r = {}, 16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = f[n], t % 2 === 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), i = e < 24 ? 1 : 2, o = this.channels[i - 1], o.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
                    }
                }, {
                    key: "reset", value: function () {
                        for (var e = 0; e < this.channels.length; e++)this.channels[e] && this.channels[e].reset();
                        this.lastCmdA = null, this.lastCmdB = null
                    }
                }, {
                    key: "cueSplitAtTime", value: function (e) {
                        for (var t = 0; t < this.channels.length; t++)this.channels[t] && this.channels[t].cueSplitAtTime(e)
                    }
                }]), e
            }();
            r.default = E
        }, {}], 43: [function (e, t, r) {
            "use strict";
            var n = {
                newCue: function (e, t, r, n) {
                    for (var i, o, a, s, l, u = window.VTTCue || window.TextTrackCue, c = 0; c < n.rows.length; c++)if (i = n.rows[c], a = !0, s = 0, l = "", !i.isEmpty()) {
                        for (var d = 0; d < i.chars.length; d++)i.chars[d].uchar.match(/\s/) && a ? s++ : (l += i.chars[d].uchar, a = !1);
                        i.cueStartTime = t, o = new u(t, r, l.trim()), s >= 16 ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? o.line = c + 1 : o.line = c > 7 ? c - 2 : c + 1, o.align = "left", o.position = Math.max(0, Math.min(100, 100 * (s / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(o)
                    }
                }
            };
            t.exports = n
        }, {}], 44: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e(t) {
                    n(this, e), this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                }

                return i(e, [{
                    key: "sample", value: function (e, t) {
                        var r = Math.pow(this.alpha_, e);
                        this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
                    }
                }, {
                    key: "getTotalWeight", value: function () {
                        return this.totalWeight_
                    }
                }, {
                    key: "getEstimate", value: function () {
                        if (this.alpha_) {
                            var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                            return this.estimate_ / e
                        }
                        return this.estimate_
                    }
                }]), e
            }();
            r.default = o
        }, {}], 45: [function (e, t, r) {
            "use strict";
            function n() {
            }

            function i(e, t) {
                return t = "[" + e + "] > " + t
            }

            function o(e) {
                var t = self.console[e];
                return t ? function () {
                    for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)n[o] = arguments[o];
                    n[0] && (n[0] = i(e, n[0])), t.apply(self.console, n)
                } : n
            }

            function a(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)r[n - 1] = arguments[n];
                r.forEach(function (t) {
                    u[t] = e[t] ? e[t].bind(e) : o(t)
                })
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, l = {trace: n, debug: n, log: n, warn: n, info: n, error: n}, u = l;
            r.enableLogs = function (e) {
                if (e === !0 || "object" === ("undefined" == typeof e ? "undefined" : s(e))) {
                    a(e, "debug", "log", "info", "warn", "error");
                    try {
                        u.log()
                    } catch (e) {
                        u = l
                    }
                } else u = l
            }, r.logger = u
        }, {}], 46: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = function () {
                function e() {
                    n(this, e)
                }

                return i(e, null, [{
                    key: "toString", value: function (e) {
                        for (var t = "", r = e.length, n = 0; n < r; n++)t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
                        return t
                    }
                }]), e
            }();
            r.default = o
        }, {}], 47: [function (e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value"in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(), o = e(45), a = function () {
                function e(t) {
                    n(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
                }

                return i(e, [{
                    key: "destroy", value: function () {
                        this.abort(), this.loader = null
                    }
                }, {
                    key: "abort", value: function () {
                        var e = this.loader;
                        e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                    }
                }, {
                    key: "load", value: function (e, t, r) {
                        this.context = e, this.config = t, this.callbacks = r, this.stats = {
                            trequest: performance.now(),
                            retry: 0
                        }, this.retryDelay = t.retryDelay, this.loadInternal()
                    }
                }, {
                    key: "loadInternal", value: function () {
                        var e, t = this.context;
                        e = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest, e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.open("GET", t.url, !0), t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.responseType = t.responseType;
                        var r = this.stats;
                        r.tfirst = 0, r.loaded = 0, this.xhrSetup && this.xhrSetup(e, t.url), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                            e.send()
                    }
                }, {
                    key: "readystatechange", value: function (e) {
                        var t = e.currentTarget, r = t.readyState, n = this.stats, i = this.context, a = this.config;
                        if (!n.aborted && (window.clearTimeout(this.requestTimeout), r >= 2 && (0 === n.tfirst && (n.tfirst = Math.max(performance.now(), n.trequest), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout - (n.tfirst - n.trequest))), 4 === r))) {
                            var s = t.status;
                            if (s >= 200 && s < 300) {
                                n.tload = Math.max(n.tfirst, performance.now());
                                var l = void 0, u = void 0;
                                "arraybuffer" === i.responseType ? (l = t.response, u = l.byteLength) : (l = t.responseText, u = l.length), n.loaded = n.total = u;
                                var c = {url: t.responseURL, data: l};
                                this.callbacks.onSuccess(c, n, i)
                            } else n.retry >= a.maxRetry || s >= 400 && s < 499 ? (o.logger.error(s + " while loading " + i.url), this.callbacks.onError({
                                code: s,
                                text: t.statusText
                            }, i)) : (o.logger.warn(s + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
                        }
                    }
                }, {
                    key: "loadtimeout", value: function () {
                        o.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context)
                    }
                }, {
                    key: "loadprogress", value: function (e) {
                        var t = this.stats;
                        t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
                        var r = this.callbacks.onProgress;
                        r && r(t, this.context, null)
                    }
                }]), e
            }();
            r.default = a
        }, {45: 45}]
    }, {}, [33])(33)
}), function (e) {
    var t, r, n, i, o, a, s, l, u = e.html5 = function () {
    }, c = !0, d = 0, h = -1, f = "", p = void 0, v = {}, g = 0, y = 0, m = 0, _ = 0, b = 0, E = function (e, t) {
        for (var r = window.location.search.substring(1), n = r.split("&"), i = 0; i < n.length; i++) {
            var o = n[i].split("=");
            if (o[0] == e)return "undefined" == o[1] ? void 0 : o[1]
        }
        return t
    }, T = function (e, n) {
        if (Hls.isSupported())t && (t.destroy(), t.bufferTimer && (clearInterval(t.bufferTimer), t.bufferTimer = void 0), t = null), r = {
            url: e,
            t0: performance.now(),
            load: [],
            buffer: [],
            video: [],
            level: [],
            bitrate: []
        }, t = new Hls({
            debug: !1,
            enableWorker: c,
            defaultAudioCodec: p
        }), t.loadSource(e), h == -1 ? t.autoLevelCapping = h : t.loadLevel = h, t.attachMedia(n), t.on(Hls.Events.LEVEL_LOADED, function (e, t) {
            b = t.details.totalduration
        }), t.on(Hls.Events.FRAG_BUFFERED, function (e, t) {
            j(t.frag.loadTimer), N()
        }), t.on(Hls.Events.ERROR, function (e, t) {
            var r = "";
            switch (t.details) {
                case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                    t.fatal && !m && (m = 1, r = "H0x10001");
                    break;
                case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                    t.fatal && !m && (m = 1, r = "H0x20001");
                    break;
                case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
                    t.fatal && !m && (m = 1, r = "H0x10002");
                    break;
                case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
                    t.fatal && !m && (m = 1, r = "H0x20002");
                    break;
                case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                    t.fatal && !m && (m = 1, r = "H0x20003");
                    break;
                case Hls.ErrorDetails.LEVEL_LOAD_RENAME:
                    r = "00x10007", M();
                    break;
                case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
                    t.fatal && (r = "H0x20004");
                    break;
                case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                    if (1 == y)return;
                    t.fatal && !g ? (g = 1, P()) : t.fatal || (g = 0);
                    break;
                case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    t.fatal && !g ? (g = 1, y = 0, I()) : t.fatal ? g = 0 : (y = 1, g = 0);
                    break;
                case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                    break;
                case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
                    break;
                case Hls.ErrorDetails.FRAG_PARSING_ERROR:
                    break;
                case Hls.ErrorDetails.KEY_LOAD_ERROR:
                    break;
                case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
                    break;
                case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
                    break;
                case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
                    break;
                case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
                    break;
                case Hls.ErrorDetails.BUFFER_STALLED_ERROR:
                    f.currentTime = f.currentTime + .5
            }
            "" != r && v.events.onError(r)
        }); else if (v.model.flash) {
            var i = {primary: "flash", cdn: 0, level: 0, html5: !1};
            _ && (i.cdn = L, i.lockCdnChange = !0), switchPlayer(i), navigator.userAgent.toLowerCase().indexOf("firefox") !== -1 ? v.events.onError("00x10004") : v.events.onError("00x10005")
        } else navigator.userAgent.toLowerCase().indexOf("firefox") !== -1 ? v.events.onError("H0x10004") : v.events.onError("H0x10005")
    }, w = function (e) {
        e.addEventListener("resize", k), e.addEventListener("seeking", k), e.addEventListener("seeked", k), e.addEventListener("pause", k), e.addEventListener("play", k), e.addEventListener("canplay", k), e.addEventListener("canplaythrough", k), e.addEventListener("ended", k), e.addEventListener("playing", k), e.addEventListener("ratechange", k), e.addEventListener("volumechange", k), e.addEventListener("error", k), e.addEventListener("loadedmetadata", k), e.addEventListener("loadeddata", k), e.addEventListener("durationchange", k)
    }, k = function (t) {
        var o = "";
        switch (t.type) {
            case"durationchange":
                if (t.target.duration - l <= .5)return;
                l = t.target.duration, o = Math.round(1e3 * t.target.duration);
                break;
            case"resize":
                o = t.target.videoWidth + "/" + t.target.videoHeight;
                break;
            case"ended":
                x || (i.onComplete(), $(".mocoplayer-right-pause").remove());
                break;
            case"loadedmetadata":
            case"loadeddata":
                break;
            case"canplay":
                v.currentTime && (n.currentTime(v.currentTime), v.currentTime = 0);
                break;
            case"canplaythrough":
                break;
            case"seeking":
                s = t.target.currentTime;
                break;
            case"seeked":
                break;
            case"play":
                i.onPlay(), $(".mocoplayer-right-pause").hide();
                break;
            case"playing":
                $(".mocoplayer-error").length && $(".mocoplayer-error").remove(), s = t.target.currentTime;
                break;
            case"pause":
                F();
                break;
            case"waiting":
                break;
            case"ratechange":
                i.onRateChange();
                break;
            case"volumechange":
                i.volumeChange();
                break;
            case"stalled":
                break;
            case"error":
                if (o = Math.round(1e3 * t.target.currentTime), "error" === t.type) {
                    var u, c = t.currentTarget.error;
                    switch (c.code) {
                        case c.MEDIA_ERR_ABORTED:
                            u = "H0x00001";
                            break;
                        case c.MEDIA_ERR_DECODE:
                            u = "00x10006";
                            break;
                        case c.MEDIA_ERR_NETWORK:
                            u = "H0x00003";
                            break;
                        case c.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            u = e.utils.flashCanPlay ? "00x00004" : "H0x00004"
                    }
                    if (("00x00004" != u || "00x00004" == u && !d) && ("00x00004" == u && (d = 1), v.events.onError(u), "00x" == u.substr(0, 3))) {
                        var h = {primary: "flash", cdn: 0, level: 0};
                        _ && (h.cdn = L, h.lockCdnChange = !0), switchPlayer(h)
                    }
                }
        }
        var f = {time: performance.now() - r.t0, type: t.type, name: o};
        r.video.push(f), "seeking" === t.type && (a = r.video.length - 1), "seeked" === t.type && (r.video[a].duration = f.time - r.video[a].time)
    }, O = function () {
        $(document).on("contextmenu", "video", function () {
            return !1
        }), window.hdChange = function (e) {
            e -= 1, e != -1 && (t.nextLoadLevel = e, t.currentLevel = e, t.loadLevel = e)
        }
    }, S = [], C = 4e3, R = 30, A = 0, j = function (e) {
        var r = 0;
        10 == S.length && S.shift(), S.push(e);
        for (var n = 0; n < S.length; n++)S[n] > C && r++;
        r >= 6 ? (t.config.maxMaxBufferLength = Math.floor(b / 2), A || (A = 1, i.showTip())) : t.config.maxMaxBufferLength = R
    }, L = 0, x = 0, D = 0, P = function () {
        if (v.model.flash) {
            var e = {primary: "flash", cdn: 0, level: 0};
            _ && (e.cdn = L, e.lockCdnChange = !0), v.events.onError("00x10001"), switchPlayer(e)
        } else D ? I() : (D = 1, v.events.onError("00x10003"), M())
    }, M = function () {
        var t = v.line[L], r = "";
        r = v.url.indexOf("?") != -1 ? v.url + "&cdn=" + t.cdn : v.url + "?cdn=" + t.cdn, e.config.set("exe", "jpg"), r += "&type=jpg", T(decodeURIComponent(E("src", r)), f)
    }, I = function () {
        if (_)return v.events.onError("H0x00008"), e.reHTML.getCdnTestHTML(!0), !1;
        L++;
        var t = v.line[L];
        if (!t || "error" == t.cdn)return void v.events.onError("H0x00007");
        v.events.onError("00x2000" + L);
        var r = "";
        r = v.url.indexOf("?") != -1 ? v.url + "&cdn=" + t.cdn : v.url + "?cdn=" + t.cdn, "aliyun1" == t.cdn && (r += "&type=jpg"), v.currentTime = n.currentTime(), x = 1, T(decodeURIComponent(E("src", r)), f)
    }, N = function () {
        1 == x && (x = 0, v.currentTime < .5 && (v.currentTime = .5), e.config.set("cdn", L), e.config.set("time", Date.now()), n.currentTime(v.currentTime), n.play())
    }, F = function () {
        $(".mocoplayer-right-pause").length ? $(".mocoplayer-right-pause").show() : ($(n.el_).append('<div class="mocoplayer-right-pause" />'), $(".mocoplayer-right-pause").click(function () {
            $(this).hide(), n.play()
        }))
    }, B = function (e) {
        clearTimeout(o), o = null;
        var e = parseInt(100 * e);
        $(".mocoplayer-volume").length ? $(".mocoplayer-volume").text(e) : $(n.el_).append('<div class="mocoplayer-volume mocoplayer-volume-normal">' + e + "</div>"), 0 == e ? $(".mocoplayer-volume").addClass("mocoplayer-volume-muted").show() : $(".mocoplayer-volume").removeClass("mocoplayer-volume-muted").show(), o = setTimeout(function () {
            $(".mocoplayer-volume").fadeOut(500)
        }, 1e3)
    };
    u.init = function (r, o) {
        i = this;
        var r = $(r), a = r.get(0).id + "-hls-video";
        window.hdChange || O(), r.html('<video  id="' + a + '" class="video-js vjs-default-skin videoCentered"\t\t controls  preload="auto" autobuffer> </video>'), _ = e.config.get().ManualSwitchCdn, h = o.level - 1, L = o.cdn, f = $("#" + a)[0], f.volume = o.volume;
        var s = "";
        return s = o.url.indexOf("?") != -1 ? o.url + "&cdn=" + o.line[L].cdn : o.url + "?cdn=" + o.line[L].cdn, v = o, T(decodeURIComponent(E("src", s)), f), w(f), n = videojs(a, o), n.destroy = function () {
            this.dispose(), t.destroy()
        }, n.setVolume = function (e) {
            this.volume(e), B(e)
        }, n
    }
}(mocoplayer);