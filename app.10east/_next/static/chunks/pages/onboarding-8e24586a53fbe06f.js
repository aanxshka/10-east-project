(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7411], {
    56697: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/onboarding", function() {
            return n(82319)
        }
        ])
    },
    82319: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n(85893)
          , i = n(67294)
          , r = n(25675)
          , c = n(11163)
          , l = n(10699)
          , a = n(17152)
          , o = n(19334)
          , u = n(74024)
          , d = n(4555)
          , f = n(71542)
          , p = n(29092)
          , g = n(63453)
          , h = n(11605)
          , x = n(21220)
          , m = n.n(x)
          , j = n(41734)
          , b = n.n(j);
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , s = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                s.forEach((function(t) {
                    v(e, t, n[t])
                }
                ))
            }
            return e
        }
        t.default = function() {
            var e = (0,
            c.useRouter)()
              , t = (0,
            i.useState)(!1)
              , n = t[0]
              , x = t[1]
              , j = (0,
            i.useState)(!1)
              , v = j[0]
              , y = j[1]
              , S = (0,
            i.useState)("")
              , N = S[0]
              , O = S[1]
              , _ = function() {
                O(""),
                y(!1)
            }
              , k = function() {
                if (P.isFirstStep)
                    return e.push("/");
                P.prevStep()
            }
              , P = (0,
            f.q)(k)
              , C = (0,
            l.o)((function(e) {
                O(e),
                y(!0)
            }
            ))
              , E = C.steps
              , Q = C.isAI
              , I = C.isQC
              , T = C.isQP
              , Z = C.toggleQualifiedPurchaser
              , A = C.toggleAccreditedInvestor
              , F = C.toggleQualifiedClient
              , X = C.removeNonIndividualSteps;
            return (0,
            i.useEffect)((function() {
                P.setTotalSteps(E.length)
            }
            ), [E]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(u.T, {}), (0,
                s.jsx)("div", {
                    className: "flex items-start justify-center bg-off-white-100 min-h-screen",
                    children: (0,
                    s.jsxs)("div", {
                        className: "flex flex-col grow max-w-[644px] md:max-w-[1450px] px-8 md:px-12 lg:px-24 pb-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "grid grid-cols-3 items-center h-24",
                            children: [(0,
                            s.jsx)(a.Z, {
                                onClick: k
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex justify-center",
                                children: [(0,
                                s.jsx)(r.default, {
                                    src: m(),
                                    layout: "raw",
                                    width: "126",
                                    height: "18",
                                    alt: "10 East",
                                    className: "!hidden md:!block",
                                    "data-cy": "10-east-logo"
                                }), (0,
                                s.jsx)(r.default, {
                                    src: b(),
                                    layout: "raw",
                                    width: "39",
                                    height: "29",
                                    alt: "10 East",
                                    className: "!block md:!hidden"
                                })]
                            })]
                        }), (0,
                        s.jsx)(p.Z, {
                            currentStep: P.currentStep,
                            numberOfSteps: E.length,
                            isFirstStep: P.isFirstStep
                        }), (0,
                        s.jsx)("div", {
                            className: "",
                            children: (0,
                            s.jsx)(d.Z, {
                                useSteps: P,
                                children: E.map((function(e) {
                                    var t = e.title
                                      , i = e.subTitle
                                      , r = e.content
                                      , c = e.directions
                                      , l = e.key
                                      , a = e.centeredHeader;
                                    return (0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)(h.Z, {
                                            title: t,
                                            subTitle: i,
                                            centerContent: a
                                        }), c && (0,
                                        s.jsx)(g.Z, {
                                            children: c
                                        }), r(w({}, P, {
                                            key: l,
                                            setLoading: x,
                                            isAI: Q,
                                            isQP: T,
                                            isQC: I,
                                            toggleAccreditedInvestor: A,
                                            toggleQualifiedPurchaser: Z,
                                            toggleQualifiedClient: F,
                                            removeNonIndividualSteps: X,
                                            loading: n
                                        })), (0,
                                        s.jsx)(o.Z, {
                                            isOpened: v,
                                            selectedKey: N,
                                            onClose: _
                                        })]
                                    }, l)
                                }
                                ))
                            })
                        })]
                    })
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [4231, 8691, 7806, 4673, 8001, 9774, 2888, 179], (function() {
        return t = 56697,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=onboarding-8e24586a53fbe06f.js.map
