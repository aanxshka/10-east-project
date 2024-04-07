(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7078, 3666, 9586], {
    53671: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/offerings", function() {
            return n(78521)
        }
        ])
    },
    19138: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return E
            }
        });
        var r = n(85893)
          , i = n(67294)
          , o = n(25675)
          , a = n(11163)
          , l = n(86010)
          , s = n(72148)
          , u = n(94279)
          , c = n(99317)
          , d = n(86080)
          , f = n.n(d)
          , m = n(56849)
          , v = function(e) {
            var t = e.ctaData
              , n = t.title
              , i = t.text
              , o = t.buttonText
              , a = t.buttonUrl;
            return (0,
            r.jsx)(c.JN, {
                context: "marketing",
                children: (0,
                r.jsx)("section", {
                    className: "bg-new-gray-450 font-amiri text-new-charcoal-primary",
                    children: (0,
                    r.jsxs)(m.W2, {
                        size: "full",
                        verticalPadding: !0,
                        className: "flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "lg:grow",
                            children: [(0,
                            r.jsx)(m.X6, {
                                tag: "h4",
                                level: 4,
                                children: n
                            }), !!i && (0,
                            r.jsx)(u.YI, {
                                value: i
                            })]
                        }), (0,
                        r.jsx)("div", {
                            children: (0,
                            r.jsx)(m.zx, {
                                elementType: "link",
                                type: "secondary",
                                url: a,
                                className: "w-full lg:w-auto track",
                                dataClickAction: "footer-cta-".concat(o),
                                dataClickSubjectName: o,
                                children: o
                            })
                        })]
                    })
                })
            })
        }
          , p = n(34051)
          , g = n.n(p)
          , h = n(55479)
          , b = n(23730);
        function x(e, t, n, r, i, o, a) {
            try {
                var l = e[o](a)
                  , s = l.value
            } catch (u) {
                return void n(u)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function w(e) {
            var t = (0,
            i.useState)({})
              , n = t[0]
              , r = t[1];
            return (0,
            i.useMemo)((function() {
                var t = function() {
                    var t, n = (t = g().mark((function t() {
                        var n;
                        return g().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    h.D4)(e);
                                case 2:
                                    n = t.sent,
                                    r({
                                        page: n
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )),
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, i) {
                            var o = t.apply(e, n);
                            function a(e) {
                                x(o, r, i, a, l, "next", e)
                            }
                            function l(e) {
                                x(o, r, i, a, l, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return n.apply(this, arguments)
                    }
                }();
                t().catch((function(e) {
                    (0,
                    b.S3)(e)
                }
                ))
            }
            ), [e]),
            n
        }
        var y = n(20148)
          , I = n.n(y);
        function j(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var k = {
            marks: {
                sup: function(e) {
                    var t = e.children;
                    return (0,
                    r.jsx)("sup", {
                        children: t
                    })
                }
            }
        }
          , E = function(e) {
            var t, n, i, d = e.isLoggedIn, p = e.routeOverride, g = (0,
            a.useRouter)().pathname, h = w(p || g), b = d ? null === (t = h.page) || void 0 === t ? void 0 : t.loggedInCta : null === (n = h.page) || void 0 === n ? void 0 : n.loggedOutCta, x = [{
                href: "/privacy-policy",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Privacy Policy"
            }, d ? {
                href: "/terms-of-use",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Terms of Use"
            } : {
                href: "/website-terms-of-use",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Website Terms of Use"
            }], y = function() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            };
            return (0,
            r.jsx)(c.JN, {
                context: "marketing",
                darkTheme: !0,
                children: (0,
                r.jsxs)("footer", {
                    className: (0,
                    l.Z)(I().footer, "bg-new-black-primary font-amiri"),
                    children: [b && (0,
                    r.jsx)(v, {
                        ctaData: b
                    }), (0,
                    r.jsxs)(m.W2, {
                        verticalPadding: !0,
                        className: "flex flex-col divide-solid lg:divide-none divide-[#666666]/25 divide-x-0 divide-y text-[#E8E8E8] text-center lg:text-left",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "lg:flex lg:mb-12 lg:items-center pb-5 lg:p-0",
                            children: [(0,
                            r.jsx)(o.default, {
                                src: f(),
                                width: "48",
                                height: "39",
                                alt: "",
                                "data-cy": "10-east-logo"
                            }), (0,
                            r.jsx)("div", {
                                className: "hidden lg:block lg:ml-auto",
                                children: (0,
                                r.jsxs)("a", {
                                    className: "flex items-end gap-4 text-primary-100 leading-none whitespace-nowrap cursor-pointer",
                                    onClick: y,
                                    children: ["Top of Page ", (0,
                                    r.jsx)(s.Z, {
                                        width: 18
                                    })]
                                })
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:mb-24 py-5 lg:p-0",
                            children: [(0,
                            r.jsx)(m.nv, {
                                className: "mb-5 lg:mb-10",
                                children: (0,
                                r.jsx)(m.rU, {
                                    href: "mailto:contact@10east.co",
                                    children: "contact@10east.co"
                                })
                            }), (0,
                            r.jsxs)(m.nv, {
                                children: ["10 East 53rd Street", (0,
                                r.jsx)("br", {}), "New York, NY 10022"]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:flex lg:gap-5 lg:mb-6 py-5 last:pb-0 lg:p0 text-xs",
                            children: [(0,
                            r.jsxs)(m.nv, {
                                className: "mb-5 lg:mb-0 lg:leading-none",
                                children: ["Copyright ", (new Date).getFullYear(), " Portage Technologies Inc. \u2014 All Rights Reserved."]
                            }), (0,
                            r.jsx)("div", {
                                className: "flex justify-center divide-solid divide-y-0 divide-x leading-none",
                                children: x.map((function(e) {
                                    return (0,
                                    r.jsx)(m.rU, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {}
                                              , r = Object.keys(n);
                                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }
                                            )))),
                                            r.forEach((function(t) {
                                                j(e, t, n[t])
                                            }
                                            ))
                                        }
                                        return e
                                    }({}, e, {
                                        className: "px-4 first:pl-0 last:pr-0 whitespace-nowrap"
                                    }), e.href)
                                }
                                ))
                            })]
                        }), !!(null === h || void 0 === h || null === (i = h.page) || void 0 === i ? void 0 : i.footnotes) && (0,
                        r.jsx)("div", {
                            className: (0,
                            l.Z)(I().footnotes, "py-5 last:pb-0 lg:p-0 text-left text-xs"),
                            children: h.page.footnotes.map((function(e, t) {
                                return (0,
                                r.jsx)(u.YI, {
                                    value: e.text,
                                    components: k
                                }, t)
                            }
                            ))
                        }), (0,
                        r.jsx)("div", {
                            className: "lg:hidden pt-5",
                            children: (0,
                            r.jsx)("a", {
                                title: "Top of Page",
                                className: "cursor-pointer",
                                onClick: y,
                                children: (0,
                                r.jsx)(m.dY, {
                                    width: 33
                                })
                            })
                        })]
                    })]
                })
            })
        }
    },
    65726: function(e, t, n) {
        "use strict";
        var r = n(85893)
          , i = n(80237)
          , o = n(11163)
          , a = n(67294)
          , l = n(50907);
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        t.Z = function(e, t) {
            return function(n) {
                var u = (0,
                i.ud)((function(e) {
                    return [e.route]
                }
                )).route
                  , c = (0,
                o.useRouter)();
                return (0,
                a.useEffect)((function() {
                    l.g.currentAuthenticatedUser().catch((function() {
                        sessionStorage.setItem("loginRedirectPath", c.asPath),
                        c.push(t || "/login")
                    }
                    ))
                }
                ), [c]),
                "authenticated" !== u ? (0,
                r.jsx)(a.Fragment, {}) : (0,
                r.jsx)(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                          , r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }
                        )))),
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }
                        ))
                    }
                    return e
                }({}, n))
            }
        }
    },
    78521: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(34051)
          , i = n.n(r)
          , o = n(85893)
          , a = n(67294)
          , l = n(86010)
          , s = n(2804)
          , u = n(98523)
          , c = n(90158)
          , d = n(73689)
          , f = n(19138)
          , m = n(74024)
          , v = n(76170)
          , p = n(2237)
          , g = n(68780)
          , h = n(49806)
          , b = n(99317)
          , x = n(93605)
          , w = n(7183)
          , y = n(93666)
          , I = n(65726)
          , j = n(91650)
          , k = n(44541)
          , E = n(56849)
          , R = n(75004);
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function P(e, t, n, r, i, o, a) {
            try {
                var l = e[o](a)
                  , s = l.value
            } catch (u) {
                return void n(u)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function T(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    T(e, t, n[t])
                }
                ))
            }
            return e
        }
        function M(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [], a = !0, l = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value),
                        !t || o.length !== t); a = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        i = s
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw i
                        }
                    }
                    return o
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return O(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var N = function(e) {
            var t = e.heading
              , n = e.description
              , r = e.emptyText
              , i = e.offeringType
              , s = e.offerings
              , u = e.onVisibilityChanged
              , c = (0,
            a.useRef)(null);
            if ((0,
            a.useEffect)((function() {
                if (u) {
                    var e = new IntersectionObserver((function(e) {
                        var t = M(e, 1)[0];
                        u(i, t.isIntersecting || t.boundingClientRect.top < 0)
                    }
                    ),{
                        rootMargin: "-100px 0px"
                    });
                    return c.current && e.observe(c.current),
                    function() {
                        e.disconnect()
                    }
                }
            }
            ), [c, i, u]),
            !(null === s || void 0 === s ? void 0 : s.length) && !r)
                return null;
            var d = "current" === i && !(null === s || void 0 === s ? void 0 : s.length);
            return (0,
            o.jsxs)("section", {
                ref: c,
                className: (0,
                l.Z)({
                    "-lg:px-6 lg:rounded border-solid border-new-gray-400 border-0 lg:border lg:p-6 lg:bg-new-gray-450": d
                }),
                children: [(0,
                o.jsx)("a", {
                    id: "".concat(i, "-offerings")
                }), (0,
                o.jsx)(E.X6, {
                    tag: "h2",
                    level: 2,
                    dataCy: "".concat(t.name.replace(/[^\w\s]|_/g, "").replace(/\s/g, "-").toLowerCase()),
                    className: (0,
                    l.Z)({
                        "mb-2": !0,
                        "mb-4 lg:mb-2 border-solid border-new-gray-400 border-0 border-b lg:border-b-0 pb-2 lg:pb-0 italic !text-new-gray-200": d
                    }),
                    children: (0,
                    o.jsx)(p.Z, S({}, t))
                }), !!(null === s || void 0 === s ? void 0 : s.length) && (0,
                o.jsx)(E.nv, {
                    className: "mb-8",
                    children: (0,
                    o.jsx)(p.Z, S({}, n))
                }), (null === s || void 0 === s ? void 0 : s.length) ? (0,
                o.jsx)("div", {
                    className: "flex flex-col gap-8",
                    children: s.map((function(e) {
                        return (0,
                        o.jsx)(h.Hp, {
                            offering: e
                        }, e._id)
                    }
                    ))
                }) : (0,
                o.jsx)(E.nv, {
                    className: (0,
                    l.Z)({
                        "border-solid border-new-gray-400 border lg:border-0 p-4 lg:p-0 bg-new-gray-450 lg:bg-transparent": d
                    }),
                    children: (0,
                    o.jsx)(p.Z, S({}, r))
                })]
            })
        };
        t.default = (0,
        I.Z)((function() {
            var e = (0,
            y.a)().user
              , t = (0,
            b.ZS)().activeProfile
              , n = (0,
            s.$P)((0,
            k.mX)(e.user_id)).state
              , r = (0,
            x.Z)().trackEvent
              , l = (0,
            R.K)()
              , p = (0,
            a.useMemo)((function() {
                return null === l || void 0 === l ? void 0 : l.filter((function(e) {
                    return "current" === (0,
                    h.Ld)(e)
                }
                ))
            }
            ), [l])
              , I = (0,
            a.useMemo)((function() {
                return null === l || void 0 === l ? void 0 : l.filter((function(e) {
                    return "past" === (0,
                    h.Ld)(e)
                }
                ))
            }
            ), [l])
              , O = (0,
            a.useMemo)((function() {
                return null === l || void 0 === l ? void 0 : l.filter((function(e) {
                    return "upcoming" === (0,
                    h.Ld)(e)
                }
                ))
            }
            ), [l])
              , M = (0,
            a.useState)()
              , C = M[0]
              , L = M[1]
              , D = (0,
            a.useState)({
                current: !0,
                upcoming: !1,
                past: !1
            })
              , Z = D[0]
              , A = D[1]
              , _ = (0,
            a.useMemo)((function() {
                return Z.past ? "past" : Z.upcoming ? "upcoming" : "current"
            }
            ), [Z]);
            (0,
            a.useEffect)((function() {
                r(w.w.VIEW_OFFERINGS_PAGE)
            }
            ), []),
            (0,
            a.useEffect)((function() {
                var n = function() {
                    var n, r = (n = i().mark((function n() {
                        var r, o, a, s, u, c, d, f;
                        return i().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (t && (null === e || void 0 === e ? void 0 : e.user_id) && l) {
                                        n.next = 3;
                                        break
                                    }
                                    return L(void 0),
                                    n.abrupt("return");
                                case 3:
                                    return n.next = 5,
                                    (0,
                                    j.oo)({
                                        userId: e.user_id,
                                        profileId: t.id
                                    });
                                case 5:
                                    r = n.sent,
                                    o = [],
                                    a = !0,
                                    s = !1,
                                    u = void 0,
                                    n.prev = 8,
                                    c = function(e, t) {
                                        var n = t.value;
                                        if (!n)
                                            return "continue";
                                        var r = h.gR.fromValue(Number.parseInt(n.status));
                                        if (r === h.gR.DOCS_INITIATED || r === h.gR.APPROVED) {
                                            var i = l.find((function(e) {
                                                return e._id === n.offeringId
                                            }
                                            ));
                                            if (!i)
                                                return "continue";
                                            o.push({
                                                id: i._id,
                                                projectName: i.name,
                                                documentsUrl: i.subDocUrl,
                                                offering: i,
                                                investmentState: r
                                            })
                                        }
                                    }
                                    ,
                                    d = r[Symbol.iterator]();
                                case 11:
                                    if (a = (f = d.next()).done) {
                                        n.next = 18;
                                        break
                                    }
                                    if ("continue" !== c(d, f)) {
                                        n.next = 15;
                                        break
                                    }
                                    return n.abrupt("continue", 15);
                                case 15:
                                    a = !0,
                                    n.next = 11;
                                    break;
                                case 18:
                                    n.next = 24;
                                    break;
                                case 20:
                                    n.prev = 20,
                                    n.t0 = n.catch(8),
                                    s = !0,
                                    u = n.t0;
                                case 24:
                                    n.prev = 24,
                                    n.prev = 25,
                                    a || null == d.return || d.return();
                                case 27:
                                    if (n.prev = 27,
                                    !s) {
                                        n.next = 30;
                                        break
                                    }
                                    throw u;
                                case 30:
                                    return n.finish(27);
                                case 31:
                                    return n.finish(24);
                                case 32:
                                    L(o);
                                case 33:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[8, 20, 24, 32], [25, , 27, 31]])
                    }
                    )),
                    function() {
                        var e = this
                          , t = arguments;
                        return new Promise((function(r, i) {
                            var o = n.apply(e, t);
                            function a(e) {
                                P(o, r, i, a, l, "next", e)
                            }
                            function l(e) {
                                P(o, r, i, a, l, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return r.apply(this, arguments)
                    }
                }();
                n()
            }
            ), [t, e, l]);
            var z = (0,
            a.useCallback)((function(e, t) {
                A((function(n) {
                    return S({}, n, T({}, e, t))
                }
                ))
            }
            ), []);
            return "loading" === n ? (0,
            o.jsx)(v.Z, {}) : (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(m.T, {}), (0,
                o.jsx)(g.Z, {}), (0,
                o.jsx)(E.XD, {
                    navigation: {
                        items: [{
                            id: "current",
                            name: "Current Offerings"
                        }, {
                            id: "upcoming",
                            name: "Investment Pipeline"
                        }, {
                            id: "past",
                            name: "Past Offerings"
                        }],
                        selectedItemId: _,
                        onItemSelected: function(e) {
                            var t = document.getElementById("".concat(e.id, "-offerings"));
                            t && scrollTo({
                                top: t.getBoundingClientRect().top + window.scrollY - 150,
                                left: 0,
                                behavior: "smooth"
                            })
                        }
                    }
                }), (0,
                o.jsx)("main", {
                    className: "bg-new-off-white-100",
                    children: (0,
                    o.jsxs)(E.W2, {
                        verticalPadding: !0,
                        className: "flex flex-col gap-20",
                        children: [!!(null === C || void 0 === C ? void 0 : C.length) && (0,
                        o.jsx)("section", {
                            className: "flex flex-col gap-8",
                            children: null === C || void 0 === C ? void 0 : C.map((function(e) {
                                var t = e.id
                                  , n = e.projectName
                                  , r = e.offering
                                  , i = e.investmentState;
                                return (0,
                                o.jsx)("div", {
                                    children: (0,
                                    o.jsx)(c.Z, {
                                        type: d.N.WARNING,
                                        title: "Complete Documents for ".concat(n),
                                        message: "To continue your allocation request, please complete subscription documents.",
                                        iconOverride: (0,
                                        o.jsx)(u.Z, {
                                            className: "w-8 h-8"
                                        }),
                                        buttons: (0,
                                        o.jsx)(h.QH, {
                                            offering: r,
                                            investmentState: i
                                        })
                                    })
                                }, t)
                            }
                            ))
                        }), (0,
                        o.jsx)(N, {
                            heading: {
                                name: "Offerings - Current Offerings - Heading",
                                defaultText: "Current Offerings"
                            },
                            description: {
                                name: "Offerings - Current Offerings - Description",
                                defaultText: "Learn more about our live offerings below."
                            },
                            emptyText: {
                                name: "Offerings - Current Offerings - Empty Text",
                                defaultText: "At the moment, there are no live offerings available. Please browse our investment pipeline for deals coming soon."
                            },
                            offeringType: "current",
                            offerings: p,
                            onVisibilityChanged: z
                        }), (0,
                        o.jsx)(N, {
                            heading: {
                                name: "Offerings - Investment Pipeline - Heading",
                                defaultText: "Investment Pipeline"
                            },
                            description: {
                                name: "Offerings - Investment Pipeline - Description",
                                defaultText: "Learn more about our investment pipeline below."
                            },
                            emptyText: {
                                name: "Offerings - Investment Pipeline - Empty Text",
                                defaultText: "There are no upcoming offerings that we're ready to share with you quite yet. Please check back soon!"
                            },
                            offeringType: "upcoming",
                            offerings: O,
                            onVisibilityChanged: z
                        }), (0,
                        o.jsx)(N, {
                            heading: {
                                name: "Offerings - Past Offerings - Heading",
                                defaultText: "Past Offerings"
                            },
                            description: {
                                name: "Offerings - Past Offerings - Description",
                                defaultText: "Learn more about our past offerings below."
                            },
                            offeringType: "past",
                            offerings: I,
                            onVisibilityChanged: z
                        })]
                    })
                }), (0,
                o.jsx)(f.Z, {
                    isLoggedIn: !0
                })]
            })
        }
        ), "/login")
    },
    75004: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return c
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , o = n(67294)
          , a = n(23730)
          , l = n(55479);
        function s(e, t, n, r, i, o, a) {
            try {
                var l = e[o](a)
                  , s = l.value
            } catch (u) {
                return void n(u)
            }
            l.done ? t(s) : Promise.resolve(s).then(r, i)
        }
        function u(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = e.apply(t, n);
                    function a(e) {
                        s(o, r, i, a, l, "next", e)
                    }
                    function l(e) {
                        s(o, r, i, a, l, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function c() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = (0,
            o.useState)()
              , r = n[0]
              , s = n[1];
            return (0,
            o.useMemo)((function() {
                var e = function() {
                    var e = u(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    l.si)(t);
                                case 2:
                                    n = e.sent,
                                    s(n);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                e().catch((function(e) {
                    (0,
                    a.S3)(e)
                }
                ))
            }
            ), [e]),
            r
        }
    },
    20148: function(e) {
        e.exports = {
            footer: "Footer_footer__1IwEk",
            footnotes: "Footer_footnotes__f5fkq"
        }
    },
    72510: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return z
            }
        });
        var r, i, o = n(67294), a = n(32984), l = n(12351), s = n(9362), u = n(94192), c = n(16723), d = n(23784), f = n(19946), m = n(61363), v = n(11497), p = n(64103), g = n(84575), h = n(39650), b = n(31591), x = n(16567), w = n(14157), y = n(51074), I = n(73781), j = n(40476), k = ((i = k || {})[i.Open = 0] = "Open",
        i[i.Closed = 1] = "Closed",
        i), E = (e=>(e[e.Pointer = 0] = "Pointer",
        e[e.Other = 1] = "Other",
        e))(E || {}), R = ((r = R || {})[r.OpenMenu = 0] = "OpenMenu",
        r[r.CloseMenu = 1] = "CloseMenu",
        r[r.GoToItem = 2] = "GoToItem",
        r[r.Search = 3] = "Search",
        r[r.ClearSearch = 4] = "ClearSearch",
        r[r.RegisterItem = 5] = "RegisterItem",
        r[r.UnregisterItem = 6] = "UnregisterItem",
        r);
        function O(e, t=(e=>e)) {
            let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null
              , r = (0,
            g.z2)(t(e.items.slice()), (e=>e.dataRef.current.domRef.current))
              , i = n ? r.indexOf(n) : null;
            return -1 === i && (i = null),
            {
                items: r,
                activeItemIndex: i
            }
        }
        let P = {
            1: e=>1 === e.menuState ? e : {
                ...e,
                activeItemIndex: null,
                menuState: 1
            },
            0: e=>0 === e.menuState ? e : {
                ...e,
                menuState: 0
            },
            2: (e,t)=>{
                var n;
                let r = O(e)
                  , i = (0,
                v.d)(t, {
                    resolveItems: ()=>r.items,
                    resolveActiveIndex: ()=>r.activeItemIndex,
                    resolveId: e=>e.id,
                    resolveDisabled: e=>e.dataRef.current.disabled
                });
                return {
                    ...e,
                    ...r,
                    searchQuery: "",
                    activeItemIndex: i,
                    activationTrigger: null != (n = t.trigger) ? n : 1
                }
            }
            ,
            3: (e,t)=>{
                let n = "" !== e.searchQuery ? 0 : 1
                  , r = e.searchQuery + t.value.toLowerCase()
                  , i = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e=>{
                    var t;
                    return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                }
                ))
                  , o = i ? e.items.indexOf(i) : -1;
                return -1 === o || o === e.activeItemIndex ? {
                    ...e,
                    searchQuery: r
                } : {
                    ...e,
                    searchQuery: r,
                    activeItemIndex: o,
                    activationTrigger: 1
                }
            }
            ,
            4: e=>"" === e.searchQuery ? e : {
                ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            },
            5: (e,t)=>{
                let n = O(e, (e=>[...e, {
                    id: t.id,
                    dataRef: t.dataRef
                }]));
                return {
                    ...e,
                    ...n
                }
            }
            ,
            6: (e,t)=>{
                let n = O(e, (e=>{
                    let n = e.findIndex((e=>e.id === t.id));
                    return -1 !== n && e.splice(n, 1),
                    e
                }
                ));
                return {
                    ...e,
                    ...n,
                    activationTrigger: 1
                }
            }
        }
          , T = (0,
        o.createContext)(null);
        function S(e) {
            let t = (0,
            o.useContext)(T);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, S),
                t
            }
            return t
        }
        function M(e, t) {
            return (0,
            a.E)(t.type, P, e, t)
        }
        T.displayName = "MenuContext";
        let N = o.Fragment;
        let C = l.AN.RenderStrategy | l.AN.Static;
        let L = o.Fragment;
        let D = (0,
        l.yV)((function(e, t) {
            let n = (0,
            o.useReducer)(M, {
                menuState: 1,
                buttonRef: (0,
                o.createRef)(),
                itemsRef: (0,
                o.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1
            })
              , [{menuState: r, itemsRef: i, buttonRef: s},u] = n
              , c = (0,
            d.T)(t);
            (0,
            h.O)([s, i], ((e,t)=>{
                var n;
                u({
                    type: 1
                }),
                (0,
                g.sP)(t, g.tJ.Loose) || (e.preventDefault(),
                null == (n = s.current) || n.focus())
            }
            ), 0 === r);
            let f = (0,
            I.z)((()=>{
                u({
                    type: 1
                })
            }
            ))
              , m = (0,
            o.useMemo)((()=>({
                open: 0 === r,
                close: f
            })), [r, f])
              , v = e
              , p = {
                ref: c
            };
            return o.createElement(T.Provider, {
                value: n
            }, o.createElement(x.up, {
                value: (0,
                a.E)(r, {
                    0: x.ZM.Open,
                    1: x.ZM.Closed
                })
            }, (0,
            l.sY)({
                ourProps: p,
                theirProps: v,
                slot: m,
                defaultTag: N,
                name: "Menu"
            })))
        }
        ))
          , Z = (0,
        l.yV)((function(e, t) {
            var n;
            let r = (0,
            f.M)()
              , {id: i=`headlessui-menu-button-${r}`, ...a} = e
              , [s,c] = S("Menu.Button")
              , g = (0,
            d.T)(s.buttonRef, t)
              , h = (0,
            u.G)()
              , b = (0,
            I.z)((e=>{
                switch (e.key) {
                case m.R.Space:
                case m.R.Enter:
                case m.R.ArrowDown:
                    e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: 0
                    }),
                    h.nextFrame((()=>c({
                        type: 2,
                        focus: v.T.First
                    })));
                    break;
                case m.R.ArrowUp:
                    e.preventDefault(),
                    e.stopPropagation(),
                    c({
                        type: 0
                    }),
                    h.nextFrame((()=>c({
                        type: 2,
                        focus: v.T.Last
                    })))
                }
            }
            ))
              , x = (0,
            I.z)((e=>{
                if (e.key === m.R.Space)
                    e.preventDefault()
            }
            ))
              , y = (0,
            I.z)((t=>{
                if ((0,
                p.P)(t.currentTarget))
                    return t.preventDefault();
                e.disabled || (0 === s.menuState ? (c({
                    type: 1
                }),
                h.nextFrame((()=>{
                    var e;
                    return null == (e = s.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))) : (t.preventDefault(),
                c({
                    type: 0
                })))
            }
            ))
              , j = (0,
            o.useMemo)((()=>({
                open: 0 === s.menuState
            })), [s])
              , k = {
                ref: g,
                id: i,
                type: (0,
                w.f)(e, s.buttonRef),
                "aria-haspopup": "menu",
                "aria-controls": null == (n = s.itemsRef.current) ? void 0 : n.id,
                "aria-expanded": e.disabled ? void 0 : 0 === s.menuState,
                onKeyDown: b,
                onKeyUp: x,
                onClick: y
            };
            return (0,
            l.sY)({
                ourProps: k,
                theirProps: a,
                slot: j,
                defaultTag: "button",
                name: "Menu.Button"
            })
        }
        ))
          , A = (0,
        l.yV)((function(e, t) {
            var n, r;
            let i = (0,
            f.M)()
              , {id: a=`headlessui-menu-items-${i}`, ...c} = e
              , [p,h] = S("Menu.Items")
              , w = (0,
            d.T)(p.itemsRef, t)
              , j = (0,
            y.i)(p.itemsRef)
              , k = (0,
            u.G)()
              , E = (0,
            x.oJ)()
              , R = null !== E ? (E & x.ZM.Open) === x.ZM.Open : 0 === p.menuState;
            (0,
            o.useEffect)((()=>{
                let e = p.itemsRef.current;
                e && 0 === p.menuState && e !== (null == j ? void 0 : j.activeElement) && e.focus({
                    preventScroll: !0
                })
            }
            ), [p.menuState, p.itemsRef, j]),
            (0,
            b.B)({
                container: p.itemsRef.current,
                enabled: 0 === p.menuState,
                accept: e=>"menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let O = (0,
            I.z)((e=>{
                var t, n;
                switch (k.dispose(),
                e.key) {
                case m.R.Space:
                    if ("" !== p.searchQuery)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        h({
                            type: 3,
                            value: e.key
                        });
                case m.R.Enter:
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 1
                    }),
                    null !== p.activeItemIndex) {
                        let {dataRef: e} = p.items[p.activeItemIndex];
                        null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                    }
                    (0,
                    g.wI)(p.buttonRef.current);
                    break;
                case m.R.ArrowDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 2,
                        focus: v.T.Next
                    });
                case m.R.ArrowUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 2,
                        focus: v.T.Previous
                    });
                case m.R.Home:
                case m.R.PageUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 2,
                        focus: v.T.First
                    });
                case m.R.End:
                case m.R.PageDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 2,
                        focus: v.T.Last
                    });
                case m.R.Escape:
                    e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 1
                    }),
                    (0,
                    s.k)().nextFrame((()=>{
                        var e;
                        return null == (e = p.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case m.R.Tab:
                    e.preventDefault(),
                    e.stopPropagation(),
                    h({
                        type: 1
                    }),
                    (0,
                    s.k)().nextFrame((()=>{
                        (0,
                        g.EO)(p.buttonRef.current, e.shiftKey ? g.TO.Previous : g.TO.Next)
                    }
                    ));
                    break;
                default:
                    1 === e.key.length && (h({
                        type: 3,
                        value: e.key
                    }),
                    k.setTimeout((()=>h({
                        type: 4
                    })), 350))
                }
            }
            ))
              , P = (0,
            I.z)((e=>{
                if (e.key === m.R.Space)
                    e.preventDefault()
            }
            ))
              , T = (0,
            o.useMemo)((()=>({
                open: 0 === p.menuState
            })), [p])
              , M = {
                "aria-activedescendant": null === p.activeItemIndex || null == (n = p.items[p.activeItemIndex]) ? void 0 : n.id,
                "aria-labelledby": null == (r = p.buttonRef.current) ? void 0 : r.id,
                id: a,
                onKeyDown: O,
                onKeyUp: P,
                role: "menu",
                tabIndex: 0,
                ref: w
            };
            return (0,
            l.sY)({
                ourProps: M,
                theirProps: c,
                slot: T,
                defaultTag: "div",
                features: C,
                visible: R,
                name: "Menu.Items"
            })
        }
        ))
          , _ = (0,
        l.yV)((function(e, t) {
            let n = (0,
            f.M)()
              , {id: r=`headlessui-menu-item-${n}`, disabled: i=!1, ...a} = e
              , [u,m] = S("Menu.Item")
              , p = null !== u.activeItemIndex && u.items[u.activeItemIndex].id === r
              , h = (0,
            o.useRef)(null)
              , b = (0,
            d.T)(t, h);
            (0,
            c.e)((()=>{
                if (0 !== u.menuState || !p || 0 === u.activationTrigger)
                    return;
                let e = (0,
                s.k)();
                return e.requestAnimationFrame((()=>{
                    var e, t;
                    null == (t = null == (e = h.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                }
                )),
                e.dispose
            }
            ), [h, p, u.menuState, u.activationTrigger, u.activeItemIndex]);
            let x = (0,
            o.useRef)({
                disabled: i,
                domRef: h
            });
            (0,
            c.e)((()=>{
                x.current.disabled = i
            }
            ), [x, i]),
            (0,
            c.e)((()=>{
                var e, t;
                x.current.textValue = null == (t = null == (e = h.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
            }
            ), [x, h]),
            (0,
            c.e)((()=>(m({
                type: 5,
                id: r,
                dataRef: x
            }),
            ()=>m({
                type: 6,
                id: r
            }))), [x, r]);
            let w = (0,
            I.z)((()=>{
                m({
                    type: 1
                })
            }
            ))
              , y = (0,
            I.z)((e=>{
                if (i)
                    return e.preventDefault();
                m({
                    type: 1
                }),
                (0,
                g.wI)(u.buttonRef.current)
            }
            ))
              , k = (0,
            I.z)((()=>{
                if (i)
                    return m({
                        type: 2,
                        focus: v.T.Nothing
                    });
                m({
                    type: 2,
                    focus: v.T.Specific,
                    id: r
                })
            }
            ))
              , E = (0,
            j.g)()
              , R = (0,
            I.z)((e=>E.update(e)))
              , O = (0,
            I.z)((e=>{
                E.wasMoved(e) && (i || p || m({
                    type: 2,
                    focus: v.T.Specific,
                    id: r,
                    trigger: 0
                }))
            }
            ))
              , P = (0,
            I.z)((e=>{
                E.wasMoved(e) && (i || p && m({
                    type: 2,
                    focus: v.T.Nothing
                }))
            }
            ))
              , T = (0,
            o.useMemo)((()=>({
                active: p,
                disabled: i,
                close: w
            })), [p, i, w]);
            return (0,
            l.sY)({
                ourProps: {
                    id: r,
                    ref: b,
                    role: "menuitem",
                    tabIndex: !0 === i ? void 0 : -1,
                    "aria-disabled": !0 === i || void 0,
                    disabled: void 0,
                    onClick: y,
                    onFocus: k,
                    onPointerEnter: R,
                    onMouseEnter: R,
                    onPointerMove: O,
                    onMouseMove: O,
                    onPointerLeave: P,
                    onMouseLeave: P
                },
                theirProps: a,
                slot: T,
                defaultTag: L,
                name: "Menu.Item"
            })
        }
        ))
          , z = Object.assign(D, {
            Button: Z,
            Items: A,
            Item: _
        })
    },
    31591: function(e, t, n) {
        "use strict";
        n.d(t, {
            B: function() {
                return a
            }
        });
        var r = n(67294)
          , i = n(16723)
          , o = n(15466);
        function a({container: e, accept: t, walk: n, enabled: a=!0}) {
            let l = (0,
            r.useRef)(t)
              , s = (0,
            r.useRef)(n);
            (0,
            r.useEffect)((()=>{
                l.current = t,
                s.current = n
            }
            ), [t, n]),
            (0,
            i.e)((()=>{
                if (!e || !a)
                    return;
                let t = (0,
                o.r)(e);
                if (!t)
                    return;
                let n = l.current
                  , r = s.current
                  , i = Object.assign((e=>n(e)), {
                    acceptNode: n
                })
                  , u = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, i, !1);
                for (; u.nextNode(); )
                    r(u.currentNode)
            }
            ), [e, a, l, s])
        }
    },
    65133: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            }))
        }
        ));
        t.Z = i
    },
    96055: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        }
        ));
        t.Z = i
    },
    66610: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.5 15.75l7.5-7.5 7.5 7.5"
            }))
        }
        ));
        t.Z = i
    },
    20445: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        }
        ));
        t.Z = i
    },
    18499: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            }))
        }
        ));
        t.Z = i
    },
    98523: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            }))
        }
        ));
        t.Z = i
    },
    6244: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            }))
        }
        ));
        t.Z = i
    },
    28771: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            }))
        }
        ));
        t.Z = i
    },
    79111: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            }))
        }
        ));
        t.Z = i
    },
    31415: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12"
            }))
        }
        ));
        t.Z = i
    },
    72148: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                fillRule: "evenodd",
                d: "M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z",
                clipRule: "evenodd"
            }))
        }
        ));
        t.Z = i
    },
    44149: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                fillRule: "evenodd",
                d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                clipRule: "evenodd"
            }))
        }
        ));
        t.Z = i
    },
    78438: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                fillRule: "evenodd",
                d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                clipRule: "evenodd"
            }))
        }
        ));
        t.Z = i
    },
    70256: function(e, t, n) {
        "use strict";
        var r = n(67294);
        const i = r.forwardRef((function({title: e, titleId: t, ...n}, i) {
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, n), e ? r.createElement("title", {
                id: t
            }, e) : null, r.createElement("path", {
                fillRule: "evenodd",
                d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                clipRule: "evenodd"
            }))
        }
        ));
        t.Z = i
    }
}, function(e) {
    e.O(0, [4231, 8691, 7806, 7517, 8780, 9774, 2888, 179], (function() {
        return t = 53671,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=offerings-23f3ecbd72b33a12.js.map
