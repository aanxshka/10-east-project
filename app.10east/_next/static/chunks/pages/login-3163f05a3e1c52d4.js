(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3459], {
    95496: function(e, t, r) {
        "use strict";
        r.d(t, {
            X: function() {
                return o
            }
        });
        var n = r(87536)
          , a = function(e, t, r) {
            if (e && "reportValidity"in e) {
                var a = (0,
                n.U2)(r, t);
                e.setCustomValidity(a && a.message || ""),
                e.reportValidity()
            }
        }
          , i = function(e, t) {
            var r = function(r) {
                var n = t.fields[r];
                n && n.ref && "reportValidity"in n.ref ? a(n.ref, r, e) : n.refs && n.refs.forEach((function(t) {
                    return a(t, r, e)
                }
                ))
            };
            for (var n in t.fields)
                r(n)
        }
          , s = function(e, t) {
            t.shouldUseNativeValidation && i(e, t);
            var r = {};
            for (var a in e) {
                var s = (0,
                n.U2)(t.fields, a);
                (0,
                n.t8)(r, a, Object.assign(e[a], {
                    ref: s && s.ref
                }))
            }
            return r
        }
          , o = function(e, t, r) {
            return void 0 === t && (t = {}),
            void 0 === r && (r = {}),
            function(o, l, c) {
                try {
                    return Promise.resolve(function(n, s) {
                        try {
                            var u = (t.context,
                            Promise.resolve(e["sync" === r.mode ? "validateSync" : "validate"](o, Object.assign({
                                abortEarly: !1
                            }, t, {
                                context: l
                            }))).then((function(e) {
                                return c.shouldUseNativeValidation && i({}, c),
                                {
                                    values: r.rawValues ? o : e,
                                    errors: {}
                                }
                            }
                            )))
                        } catch (a) {
                            return s(a)
                        }
                        return u && u.then ? u.then(void 0, s) : u
                    }(0, (function(e) {
                        if (!e.inner)
                            throw e;
                        return {
                            values: {},
                            errors: s((t = e,
                            r = !c.shouldUseNativeValidation && "all" === c.criteriaMode,
                            (t.inner || []).reduce((function(e, t) {
                                if (e[t.path] || (e[t.path] = {
                                    message: t.message,
                                    type: t.type
                                }),
                                r) {
                                    var a = e[t.path].types
                                      , i = a && a[t.type];
                                    e[t.path] = (0,
                                    n.KN)(t.path, r, e, t.type, i ? [].concat(i, t.message) : t.message)
                                }
                                return e
                            }
                            ), {})), c)
                        };
                        var t, r
                    }
                    )))
                } catch (a) {
                    return Promise.reject(a)
                }
            }
        }
    },
    87237: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
            return r(87777)
        }
        ])
    },
    10152: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , a = (r(67294),
        r(25675))
          , i = r(41664)
          , s = r(11163)
          , o = r(86010)
          , l = r(13454)
          , c = r(2804)
          , u = r(66394)
          , d = r(17152)
          , f = r(45342)
          , m = r(86080)
          , v = r.n(m);
        t.Z = function(e) {
            var t = e.children
              , r = e.heading
              , m = (0,
            c.sJ)(u.z)
              , p = (0,
            s.useRouter)()
              , h = null === p || void 0 === p ? void 0 : p.pathname
              , x = !0;
            "/forgot-password" !== m && "/forgot-password" !== h || (x = !1);
            var g = (0,
            f.Wo)();
            return (0,
            n.jsx)(l.E.span, {
                variants: x ? g : void 0,
                initial: x ? g.initial : void 0,
                animate: x ? g.animate : void 0,
                children: (0,
                n.jsx)("main", {
                    className: "flex items-start justify-center bg-off-white-100 min-h-screen",
                    "data-cy": "auth-page",
                    children: (0,
                    n.jsxs)("div", {
                        className: "flex flex-col grow max-w-[644px] md:max-w-[1450px] px-8 md:px-12 lg:px-24 mb-20",
                        children: [(0,
                        n.jsx)("section", {
                            className: "grid grid-cols-1 items-center h-26",
                            children: (0,
                            n.jsx)(d.Z, {
                                onClick: function() {
                                    m && "/login" !== m ? p.back() : p.push("/")
                                },
                                "data-cy": "auth-back-btn"
                            })
                        }), (0,
                        n.jsx)(l.E.span, {
                            initial: f.bk.initial,
                            animate: f.bk.animate,
                            children: (0,
                            n.jsx)("div", {
                                className: "flex justify-center sm:mt-[3vh]",
                                children: (0,
                                n.jsxs)("div", {
                                    className: (0,
                                    o.Z)("flex flex-col justify-center self-center bg-white w-full sm:w-[495px] h-auto px-7 sm:px-20 py-16 sm:py-20", "shadow-300 rounded-lg border border-solid border-1 border-silver-300"),
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        n.jsx)(i.default, {
                                            href: "/",
                                            children: (0,
                                            n.jsx)("a", {
                                                children: (0,
                                                n.jsx)(a.default, {
                                                    src: v(),
                                                    width: "43",
                                                    height: "36",
                                                    alt: "10 East Logo",
                                                    "data-cy": "10-east-logo"
                                                })
                                            })
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "mt-3 font-amiri font-normal text-3xl leading-14",
                                            children: r
                                        })]
                                    }), t]
                                })
                            })
                        })]
                    })
                })
            })
        }
    },
    64566: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , a = (r(67294),
        r(41664));
        t.Z = function() {
            return (0,
            n.jsxs)("div", {
                className: "text-center font-light font-franklin text-md",
                children: [(0,
                n.jsx)("span", {
                    className: "text-charcoal-100 leading-4",
                    children: "Don't have an account? "
                }), (0,
                n.jsx)(a.default, {
                    href: "/onboarding",
                    children: (0,
                    n.jsx)("a", {
                        className: "leading-4 text-primary-1 link-hover-effect link-hover-effect-leading-4",
                        children: "Request Access"
                    })
                })]
            })
        }
    },
    75015: function(e, t, r) {
        "use strict";
        r.d(t, {
            I: function() {
                return f
            }
        });
        var n = r(85893)
          , a = r(67294)
          , i = r(11163)
          , s = r(86010)
          , o = r(65820)
          , l = r(13454)
          , c = r(45342);
        function u(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    u(e, t, r[t])
                }
                ))
            }
            return e
        }
        var f = function(e) {
            var t, r, f, m, v, p = e.name, h = e.type, x = void 0 === h ? "text" : h, g = e.labelText, y = e.children, b = e.additionalProps, w = e.register, j = e.errors, N = e.placeholder, k = e.additionalInputClassNames, O = e.labelClassNames, S = e.errorClassNames, C = e.containerWidth, E = e.disabled, I = e.autoComplete, P = e.autoFocus, Z = e.autoFocusDelay, _ = e.dataCy, U = e.dataRecurly, R = (0,
            i.useRouter)(), L = function() {
                return (0,
                n.jsxs)("div", {
                    className: "flex mt-2 text-sm",
                    children: [(0,
                    n.jsx)("div", {
                        children: "Try a different email address or go to our "
                    }), (0,
                    n.jsx)("div", {
                        className: "underline text-blue-600 hover:text-blue-800 inline cursor-pointer ml-2",
                        onClick: function() {
                            return R.push("/login")
                        },
                        children: "login page."
                    }), (0,
                    n.jsxs)("div", {
                        className: "ml-2",
                        children: ["If your issue persists, contact", " ", (0,
                        n.jsx)("a", {
                            href: "mailto:ir@10east.co",
                            className: "text-blue-800 underline",
                            children: "ir@10east.co"
                        })]
                    })]
                })
            }, q = j.email && "A user with this email already exists." === j.email.message, F = Z || 150;
            (0,
            a.useEffect)((function() {
                P && setTimeout((function() {
                    var e = document.getElementById(p);
                    null === e || void 0 === e || e.focus()
                }
                ), F)
            }
            ), [P]);
            var T = null === k || void 0 === k ? void 0 : k.includes("styled-input")
              , V = null === O || void 0 === O ? void 0 : O.includes("styled-input-label")
              , M = null === S || void 0 === S ? void 0 : S.includes("styled-input-error");
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col items-start ".concat(null !== C && void 0 !== C ? C : ""),
                children: [g && (0,
                n.jsx)("label", {
                    className: (0,
                    s.Z)("".concat(O), !V && "font-franklin font-semibold uppercase text-silver-100 block mb-1 text-base"),
                    htmlFor: p,
                    children: g
                }), (0,
                n.jsxs)("div", {
                    className: "w-full relative",
                    children: [(0,
                    n.jsx)("input", d({
                        type: x,
                        className: (0,
                        s.Z)(!T && "block w-full py-2 px-3 text-base border outline-none disabled:opacity-70", " ".concat(k || ""), !k && "styled-input", (null === (t = j[p]) || void 0 === t ? void 0 : t.message) && "border-red-100"),
                        name: p,
                        placeholder: N,
                        id: p
                    }, w ? w(p) : {}, {
                        disabled: E
                    }, I ? {
                        autoComplete: I
                    } : {}, {
                        "data-cy": _
                    }, b || {}, U ? u({}, "data-recurly", U) : {})), y, (0,
                    n.jsx)(o.M, {
                        children: (!M || M && (null === (r = j[p]) || void 0 === r ? void 0 : r.message)) && (0,
                        n.jsx)(l.E.p, {
                            initial: "initial",
                            animate: "animate",
                            exit: "exit",
                            variants: c.Zv,
                            children: (0,
                            n.jsxs)("p", {
                                className: (0,
                                s.Z)("".concat(S), !M && (null === (f = j[p]) || void 0 === f ? void 0 : f.message) && "font-normal text-sm text-red-600 mt-2"),
                                children: [null === (m = j[p]) || void 0 === m ? void 0 : m.message, (null === (v = j[p]) || void 0 === v ? void 0 : v.message) && q && (0,
                                n.jsx)(L, {})]
                            })
                        }, "input-".concat(p))
                    })]
                })]
            })
        }
    },
    17152: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , a = (r(67294),
        r(86010))
          , i = r(13454)
          , s = r(45342);
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    o(e, t, r[t])
                }
                ))
            }
            return e
        }
        function c(e, t) {
            if (null == e)
                return {};
            var r, n, a = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        t.Z = function(e) {
            var t = e.onClick
              , r = e.className
              , o = c(e, ["onClick", "className"]);
            return (0,
            n.jsx)(i.E.span, {
                whileHover: s.b6.hover,
                whileTap: s.b6.tap,
                className: "w-fit",
                children: (0,
                n.jsx)("button", l({
                    type: "button",
                    "aria-label": "Go back",
                    "data-cy": "go-back",
                    onClick: t,
                    className: (0,
                    a.Z)("group flex justify-start items-center w-fit -ml-4 px-4 py-3 box-content cursor-pointer bg-transparent border-0", r)
                }, o, {
                    children: (0,
                    n.jsx)("svg", {
                        className: "fill-black/50 group-hover:fill-primary-100 group-active:fill-black/50 group-active:opacity-50",
                        width: "22",
                        height: "16",
                        viewBox: "0 0 22 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.792968 7.79289L8.50008 0.0857865L9.91429 1.5L4.6214 6.79289L21.2072 6.79289L21.2072 8.79289L4.6214 8.79289L9.91429 14.0858L8.50008 15.5L0.792968 7.79289Z"
                        })
                    })
                }))
            })
        }
    },
    76342: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , a = r(67294)
          , i = r(50907);
        t.Z = function(e) {
            var t = e.children
              , r = (0,
            a.useState)(!0)
              , s = r[0]
              , o = r[1];
            return (0,
            a.useEffect)((function() {
                i.g.currentAuthenticatedUser().then((function() {
                    o(!1)
                }
                )).catch((function() {
                    o(!1)
                }
                ))
            }
            ), []),
            s ? (0,
            n.jsx)(a.Fragment, {}) : (0,
            n.jsx)(a.Fragment, {
                children: t
            })
        }
    },
    87777: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            Login: function() {
                return J
            },
            default: function() {
                return K
            }
        });
        var n = r(85893)
          , a = r(67294)
          , i = r(11163)
          , s = r(34051)
          , o = r.n(s)
          , l = r(87536)
          , c = r(41664)
          , u = r(50907)
          , d = r(65820)
          , f = r(13454)
          , m = r(74231)
          , v = r(95496)
          , p = r(75015)
          , h = r(50964)
          , x = r(19377)
          , g = r(30423)
          , y = r(93769)
          , b = r(72236)
          , w = r(54946)
          , j = r(52153)
          , N = r.n(j)
          , k = r(98269)
          , O = r.n(k)
          , S = function(e) {
            for (var t = "", r = e, n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; r > 0; --r)
                t += n[Math.round(Math.random() * (n.length - 1))];
            return t
        }
          , C = function(e) {
            return e.toString(O()).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
          , E = function(e) {
            var t = new Uint8Array(e);
            if (window.crypto)
                window.crypto.getRandomValues(t);
            else
                for (var r = 0; r < e; r += 1)
                    t[r] = Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~".length | 0;
            return I(t)
        }
          , I = function(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = [], n = 0; n < e.byteLength; n += 1) {
                var a = e[n] % t.length;
                r.push(t[a])
            }
            return r.join("")
        }
          , P = function(e) {
            window.sessionStorage.setItem("oauth_state", e)
        };
        function Z(e, t, r, n, a, i, s) {
            try {
                var o = e[i](s)
                  , l = o.value
            } catch (c) {
                return void r(c)
            }
            o.done ? t(l) : Promise.resolve(l).then(n, a)
        }
        var _ = new y.k(w.U.OAUTH)
          , U = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return e.prototype.oauthSignIn = function(e, t, r, n, a, i) {
                return (s = o().mark((function s() {
                    var l, c, u, d;
                    return o().wrap((function(s) {
                        for (; ; )
                            switch (s.prev = s.next) {
                            case 0:
                                return l = S(32),
                                P(l),
                                c = E(128),
                                f = c,
                                window.sessionStorage.setItem("ouath_pkce_key", f),
                                o = c,
                                u = C(N()(o)),
                                _.debug("Starting Oauth flow [Server]"),
                                s.next = 8,
                                (0,
                                b.U7)("userapi", "/user/login", {
                                    username: e,
                                    password: t,
                                    clientId: r,
                                    redirectURI: a,
                                    oauthDomain: n,
                                    code_challenge: u,
                                    state: l
                                });
                            case 8:
                                if ((d = s.sent).state === l) {
                                    s.next = 13;
                                    break
                                }
                                throw new Error("Invalid login");
                            case 13:
                                if (!i) {
                                    s.next = 16;
                                    break
                                }
                                return s.next = 16,
                                i();
                            case 16:
                                window.location.href = "/?code=".concat(d.code, "&state=").concat(d.state);
                            case 17:
                            case "end":
                                return s.stop()
                            }
                        var o, f
                    }
                    ), s)
                }
                )),
                function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(r, n) {
                        var a = s.apply(e, t);
                        function i(e) {
                            Z(a, r, n, i, o, "next", e)
                        }
                        function o(e) {
                            Z(a, r, n, i, o, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                )();
                var s
            }
            ,
            e
        }()
          , R = r(98258)
          , L = r(23730)
          , q = r(45342)
          , F = r(88782)
          , T = r(75012)
          , V = r(70003)
          , M = r(10152)
          , D = r(64566);
        function A(e, t, r, n, a, i, s) {
            try {
                var o = e[i](s)
                  , l = o.value
            } catch (c) {
                return void r(c)
            }
            o.done ? t(l) : Promise.resolve(l).then(n, a)
        }
        function X(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, a) {
                    var i = e.apply(t, r);
                    function s(e) {
                        A(i, n, a, s, o, "next", e)
                    }
                    function o(e) {
                        A(i, n, a, s, o, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        var B = m.Ry().shape({
            email: m.Z_().required("Please enter an email").email("Please enter a valid email"),
            password: m.Z_().required("Please enter a password").min(8, "Passwords are 8 characters at minimum"),
            rememberMe: m.O7()
        }).required()
          , G = function() {
            var e = (0,
            a.useState)()
              , t = e[0]
              , r = e[1]
              , s = (0,
            a.useState)(!1)
              , m = s[0]
              , y = s[1]
              , b = (0,
            a.useState)(null)
              , w = b[0]
              , j = b[1]
              , N = (0,
            i.useRouter)()
              , k = u.g.configure()
              , O = new U
              , S = (0,
            l.cI)({
                resolver: (0,
                v.X)(B)
            })
              , C = S.register
              , E = S.handleSubmit
              , I = S.formState.errors;
            (0,
            a.useEffect)((function() {
                var e, t;
                N.query && N.query.source && "reset-successful" === N.query.source && (j("Your password has been reset successfully"),
                N.replace("/login", void 0, {
                    shallow: !0
                })),
                (null === (e = N.query) || void 0 === e ? void 0 : e.redirectUrl) && "string" === typeof N.query.redirectUrl && sessionStorage.setItem("loginRedirectPath", N.query.redirectUrl),
                (null === (t = N.query) || void 0 === t ? void 0 : t.redirectUrl) && "string" === typeof N.query.redirectUrl && sessionStorage.setItem("loginRedirectPath", N.query.redirectUrl)
            }
            ), [N.query]);
            var P = function() {
                var e = X(o().mark((function e(t) {
                    var n, a, i, s, l, c;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.email,
                                a = t.password,
                                i = !1,
                                y(!0),
                                r(""),
                                j(null),
                                e.prev = 5,
                                e.next = 9,
                                O.oauthSignIn(n, a, k.userPoolWebClientId, null === (s = k.oauth) || void 0 === s ? void 0 : s.domain, null === (l = k.oauth) || void 0 === l ? void 0 : l.redirectSignIn, X(o().mark((function e() {
                                    var t, r, a;
                                    return o().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0,
                                                e.next = 4,
                                                (0,
                                                R.xV)(n);
                                            case 4:
                                                return r = e.sent.contactId,
                                                e.next = 7,
                                                (0,
                                                R.mn)(r);
                                            case 7:
                                                if (a = e.sent,
                                                !(r && a && !(null === a || void 0 === a || null === (t = a.properties) || void 0 === t ? void 0 : t.first_login) && a.properties && a.properties.email_verified && "true" === a.properties.email_verified)) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.next = 11,
                                                (0,
                                                R.r_)(r);
                                            case 11:
                                                i = !0;
                                            case 12:
                                                sessionStorage.setItem("isFirstLogin", String(i)),
                                                g.$.event(x.Z.LOGIN),
                                                e.next = 18;
                                                break;
                                            case 16:
                                                e.prev = 16,
                                                e.t0 = e.catch(0);
                                            case 18:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e, null, [[0, 16]])
                                }
                                ))));
                            case 9:
                                e.next = 17;
                                break;
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(5),
                                (0,
                                L.S3)(e.t0),
                                (null === (c = null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.toString()) || void 0 === c ? void 0 : c.includes("401")) ? r("Invalid username or password") : r(h.B.GENERIC),
                                y(!1);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            n.jsx)(M.Z, {
                heading: "Sign In",
                children: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsxs)("form", {
                        id: "login",
                        name: "Login",
                        onSubmit: E(P),
                        className: "mt-0",
                        noValidate: !0,
                        children: [(0,
                        n.jsxs)("div", {
                            className: "my-4 space-y-7",
                            children: [(0,
                            n.jsx)(d.M, {
                                children: w && (0,
                                n.jsx)(f.E.span, {
                                    initial: "initial",
                                    animate: "animate",
                                    exit: "exit",
                                    variants: q.Zv,
                                    children: (0,
                                    n.jsx)(F.Z, {
                                        message: w,
                                        variant: V.U.SUCCESS,
                                        className: "mb-7"
                                    })
                                }, "alert-reset-success")
                            }), (0,
                            n.jsx)(F.Z, {
                                message: t,
                                variant: V.U.ERROR,
                                className: "mb-7"
                            }), (0,
                            n.jsx)(p.I, {
                                name: "email",
                                type: "email",
                                labelText: "Email",
                                labelClassNames: "styled-input-label text-xs",
                                additionalInputClassNames: "styled-input",
                                errorClassNames: "styled-input-error",
                                dataCy: "login-email",
                                register: C,
                                errors: I,
                                disabled: m,
                                autoComplete: "email",
                                autoFocus: !0,
                                autoFocusDelay: 250
                            }), (0,
                            n.jsx)(p.I, {
                                name: "password",
                                type: "password",
                                labelText: "Password",
                                labelClassNames: "styled-input-label text-xs",
                                additionalInputClassNames: "styled-input",
                                errorClassNames: "styled-input-error",
                                dataCy: "login-password",
                                register: C,
                                errors: I,
                                disabled: m,
                                autoComplete: "current-password"
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "mt-9",
                            children: (0,
                            n.jsx)(T.Z, {
                                text: "Sign In",
                                type: "submit",
                                disabled: m,
                                loading: m,
                                className: "w-full",
                                "data-cy": "submit-login-form"
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "flex flex-row justify-center mt-9",
                        children: (0,
                        n.jsx)("div", {
                            className: "flex items-center",
                            children: (0,
                            n.jsx)(c.default, {
                                href: "/forgot-password",
                                children: (0,
                                n.jsx)("a", {
                                    className: "font-franklin font-light text-md leading-4 text-primary-1 link-hover-effect link-hover-effect-leading-4",
                                    "data-cy": "login-reset-link",
                                    children: "Forgot your password?"
                                })
                            })
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "mt-5",
                        children: (0,
                        n.jsx)(D.Z, {})
                    })]
                })
            })
        }
          , W = r(74024)
          , H = r(93666)
          , z = r(76342)
          , J = function() {
            var e = (0,
            H.a)().user
              , t = (0,
            i.useRouter)();
            return (0,
            a.useEffect)((function() {
                e && t.push("/")
            }
            ), [e]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(W.T, {}), !e && (0,
                n.jsx)(z.Z, {
                    children: (0,
                    n.jsx)(G, {})
                })]
            })
        }
          , K = J
    }
}, function(e) {
    e.O(0, [4231, 9774, 2888, 179], (function() {
        return t = 87237,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=login-3163f05a3e1c52d4.js.map
