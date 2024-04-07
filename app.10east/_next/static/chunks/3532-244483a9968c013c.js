(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3532], {
    19138: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return P
            }
        });
        var r = n(85893)
          , i = n(67294)
          , l = n(25675)
          , s = n(11163)
          , a = n(86010)
          , c = n(72148)
          , o = n(94279)
          , d = n(99317)
          , u = n(86080)
          , f = n.n(u)
          , h = n(56849)
          , x = function(e) {
            var t = e.ctaData
              , n = t.title
              , i = t.text
              , l = t.buttonText
              , s = t.buttonUrl;
            return (0,
            r.jsx)(d.JN, {
                context: "marketing",
                children: (0,
                r.jsx)("section", {
                    className: "bg-new-gray-450 font-amiri text-new-charcoal-primary",
                    children: (0,
                    r.jsxs)(h.W2, {
                        size: "full",
                        verticalPadding: !0,
                        className: "flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "lg:grow",
                            children: [(0,
                            r.jsx)(h.X6, {
                                tag: "h4",
                                level: 4,
                                children: n
                            }), !!i && (0,
                            r.jsx)(o.YI, {
                                value: i
                            })]
                        }), (0,
                        r.jsx)("div", {
                            children: (0,
                            r.jsx)(h.zx, {
                                elementType: "link",
                                type: "secondary",
                                url: s,
                                className: "w-full lg:w-auto track",
                                dataClickAction: "footer-cta-".concat(l),
                                dataClickSubjectName: l,
                                children: l
                            })
                        })]
                    })
                })
            })
        }
          , p = n(34051)
          , v = n.n(p)
          , g = n(55479)
          , m = n(23730);
        function j(e, t, n, r, i, l, s) {
            try {
                var a = e[l](s)
                  , c = a.value
            } catch (o) {
                return void n(o)
            }
            a.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function b(e) {
            var t = (0,
            i.useState)({})
              , n = t[0]
              , r = t[1];
            return (0,
            i.useMemo)((function() {
                var t = function() {
                    var t, n = (t = v().mark((function t() {
                        var n;
                        return v().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    g.D4)(e);
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
                            var l = t.apply(e, n);
                            function s(e) {
                                j(l, r, i, s, a, "next", e)
                            }
                            function a(e) {
                                j(l, r, i, s, a, "throw", e)
                            }
                            s(void 0)
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
                    m.S3)(e)
                }
                ))
            }
            ), [e]),
            n
        }
        var y = n(20148)
          , w = n.n(y);
        function N(e, t, n) {
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
          , P = function(e) {
            var t, n, i, u = e.isLoggedIn, p = e.routeOverride, v = (0,
            s.useRouter)().pathname, g = b(p || v), m = u ? null === (t = g.page) || void 0 === t ? void 0 : t.loggedInCta : null === (n = g.page) || void 0 === n ? void 0 : n.loggedOutCta, j = [{
                href: "/privacy-policy",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Privacy Policy"
            }, u ? {
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
            r.jsx)(d.JN, {
                context: "marketing",
                darkTheme: !0,
                children: (0,
                r.jsxs)("footer", {
                    className: (0,
                    a.Z)(w().footer, "bg-new-black-primary font-amiri"),
                    children: [m && (0,
                    r.jsx)(x, {
                        ctaData: m
                    }), (0,
                    r.jsxs)(h.W2, {
                        verticalPadding: !0,
                        className: "flex flex-col divide-solid lg:divide-none divide-[#666666]/25 divide-x-0 divide-y text-[#E8E8E8] text-center lg:text-left",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "lg:flex lg:mb-12 lg:items-center pb-5 lg:p-0",
                            children: [(0,
                            r.jsx)(l.default, {
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
                                    r.jsx)(c.Z, {
                                        width: 18
                                    })]
                                })
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:mb-24 py-5 lg:p-0",
                            children: [(0,
                            r.jsx)(h.nv, {
                                className: "mb-5 lg:mb-10",
                                children: (0,
                                r.jsx)(h.rU, {
                                    href: "mailto:contact@10east.co",
                                    children: "contact@10east.co"
                                })
                            }), (0,
                            r.jsxs)(h.nv, {
                                children: ["10 East 53rd Street", (0,
                                r.jsx)("br", {}), "New York, NY 10022"]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:flex lg:gap-5 lg:mb-6 py-5 last:pb-0 lg:p0 text-xs",
                            children: [(0,
                            r.jsxs)(h.nv, {
                                className: "mb-5 lg:mb-0 lg:leading-none",
                                children: ["Copyright ", (new Date).getFullYear(), " Portage Technologies Inc. \u2014 All Rights Reserved."]
                            }), (0,
                            r.jsx)("div", {
                                className: "flex justify-center divide-solid divide-y-0 divide-x leading-none",
                                children: j.map((function(e) {
                                    return (0,
                                    r.jsx)(h.rU, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {}
                                              , r = Object.keys(n);
                                            "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }
                                            )))),
                                            r.forEach((function(t) {
                                                N(e, t, n[t])
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
                        }), !!(null === g || void 0 === g || null === (i = g.page) || void 0 === i ? void 0 : i.footnotes) && (0,
                        r.jsx)("div", {
                            className: (0,
                            a.Z)(w().footnotes, "py-5 last:pb-0 lg:p-0 text-left text-xs"),
                            children: g.page.footnotes.map((function(e, t) {
                                return (0,
                                r.jsx)(o.YI, {
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
                                r.jsx)(h.dY, {
                                    width: 33
                                })
                            })
                        })]
                    })]
                })
            })
        }
    },
    33532: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return u
            }
        });
        var r = n(85893)
          , i = n(19138)
          , l = n(74024)
          , s = n(68780)
          , a = (n(67294),
        n(94279))
          , c = n(22734)
          , o = {
            list: {
                bullet: function(e) {
                    var t, n = e.children;
                    switch (e.value.level) {
                    case 1:
                    default:
                        t = "list-disc list-inside";
                        break;
                    case 2:
                        t = "list-circle list-inside";
                        break;
                    case 3:
                        t = "list-square list-inside"
                    }
                    return (0,
                    r.jsx)("ul", {
                        className: t,
                        children: n
                    })
                },
                number: function(e) {
                    var t, n = e.children;
                    switch (e.value.level) {
                    case 1:
                    default:
                        t = "list-decimal list-inside";
                        break;
                    case 2:
                        t = "list-alpha list-inside";
                        break;
                    case 3:
                        t = "list-roman list-inside"
                    }
                    return (0,
                    r.jsx)("ol", {
                        className: t,
                        children: n
                    })
                }
            },
            types: {
                privacyPolicyTable: function(e) {
                    return (0,
                    r.jsxs)("table", {
                        cellPadding: 18,
                        cellSpacing: 0,
                        border: 1,
                        style: {
                            textAlign: "left"
                        },
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsx)("th", {
                                    children: "Category"
                                }), (0,
                                r.jsx)("th", {
                                    children: "Example"
                                }), (0,
                                r.jsx)("th", {
                                    children: "Collected"
                                })]
                            })
                        }), (0,
                        r.jsx)("tbody", {
                            children: e.value.rows.map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("td", {
                                        valign: "top",
                                        children: e.category
                                    }), (0,
                                    r.jsx)("td", {
                                        valign: "top",
                                        children: e.example
                                    }), (0,
                                    r.jsx)("td", {
                                        valign: "top",
                                        children: e.collected ? "YES" : "NO"
                                    })]
                                }, t)
                            }
                            ))
                        })]
                    })
                }
            }
        }
          , d = function(e) {
            var t = e.route
              , n = (0,
            c.L)(t);
            return (0,
            r.jsx)("div", {
                className: "max-w-5xl mx-auto space-y-6 general",
                children: n && n.map((function(e, t) {
                    return (0,
                    r.jsx)(a.YI, {
                        value: e.text,
                        components: o
                    }, t)
                }
                ))
            })
        }
          , u = function(e) {
            var t = e.route;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(l.T, {}), (0,
                r.jsx)(s.Z, {}), (0,
                r.jsx)("main", {
                    className: "relative",
                    children: (0,
                    r.jsx)("section", {
                        className: "bg-white px-8 py-20 lg:py-32",
                        children: (0,
                        r.jsx)(d, {
                            route: t
                        })
                    })
                }), (0,
                r.jsx)(i.Z, {})]
            })
        }
    },
    22734: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return o
            }
        });
        var r = n(34051)
          , i = n.n(r)
          , l = n(67294)
          , s = n(55479)
          , a = n(23730);
        function c(e, t, n, r, i, l, s) {
            try {
                var a = e[l](s)
                  , c = a.value
            } catch (o) {
                return void n(o)
            }
            a.done ? t(c) : Promise.resolve(c).then(r, i)
        }
        function o(e) {
            var t = (0,
            l.useState)()
              , n = t[0]
              , r = t[1];
            return (0,
            l.useMemo)((function() {
                var t = function() {
                    var t, n = (t = i().mark((function t() {
                        var n;
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    s.sL)(e);
                                case 2:
                                    n = t.sent,
                                    r(n);
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
                            var l = t.apply(e, n);
                            function s(e) {
                                c(l, r, i, s, a, "next", e)
                            }
                            function a(e) {
                                c(l, r, i, s, a, "throw", e)
                            }
                            s(void 0)
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
                    a.S3)(e)
                }
                ))
            }
            ), [e]),
            n
        }
    },
    20148: function(e) {
        e.exports = {
            footer: "Footer_footer__1IwEk",
            footnotes: "Footer_footnotes__f5fkq"
        }
    }
}]);
//# sourceMappingURL=3532-244483a9968c013c.js.map
