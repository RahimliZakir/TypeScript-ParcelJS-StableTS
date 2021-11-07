parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    cDeq: [
      function (require, module, exports) {
        "use strict";
        function e(e, s) {
          if (!(e instanceof s))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Person = void 0);
        var s = function s(t, n, o) {
          e(this, s), (this.name = t), (this.surname = n), (this.age = o);
        };
        exports.Person = s;
      },
      {},
    ],
    c6P5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Student = void 0);
        var t = require("./person.js");
        function e(t) {
          return (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && o(t, e);
        }
        function o(t, e) {
          return (o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function u(t) {
          var e = f();
          return function () {
            var r,
              n = s(t);
            if (e) {
              var o = s(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return c(this, r);
          };
        }
        function c(t, r) {
          if (r && ("object" === e(r) || "function" == typeof r)) return r;
          if (void 0 !== r)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return i(t);
        }
        function i(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        }
        function s(t) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var l = (function (e) {
          n(c, t.Person);
          var o = u(c);
          function c(t, e, n, u) {
            var i;
            return r(this, c), ((i = o.call(this, t, e, n)).university = u), i;
          }
          return c;
        })();
        exports.Student = l;
        var p = new l("Ali", "Aliyev", 27, "ASOIU");
        console.log(p);
      },
      { "./person.js": "cDeq" },
    ],
    QnXv: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          return e + t;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Sum = e);
      },
      {},
    ],
    I4rp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
      },
      {},
    ],
    wR3D: [
      function (require, module, exports) {
        "use strict";
        function e(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function n(e, n) {
          for (var r = 0; r < n.length; r++) {
            var t = n[r];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              "value" in t && (t.writable = !0),
              Object.defineProperty(e, t.key, t);
          }
        }
        function r(e, r, t) {
          return r && n(e.prototype, r), t && n(e, t), e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Printer = void 0);
        var t = (function () {
          function n() {
            e(this, n);
          }
          return (
            r(n, [
              {
                key: "print",
                value: function () {
                  console.log("Check printed!");
                },
              },
            ]),
            n
          );
        })();
        exports.Printer = t;
      },
      {},
    ],
    aRYt: [
      function (require, module, exports) {
        "use strict";
        var r = require("./person"),
          e = require("./student"),
          i = require("./func");
        require("./iprinter");
        var u = require("./printer");
      },
      {
        "./person": "cDeq",
        "./student": "c6P5",
        "./func": "QnXv",
        "./iprinter": "I4rp",
        "./printer": "wR3D",
      },
    ],
  },
  {},
  ["aRYt"],
  null
);
//# sourceMappingURL=/main.4806a292.js.map
