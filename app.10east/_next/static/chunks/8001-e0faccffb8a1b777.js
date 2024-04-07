(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8001], {
    41799: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , i = r(67294)
          , a = r(86010)
          , o = r(64729)
          , s = r(44080)
          , l = r(13245)
          , c = r(82911);
        t.Z = function(e) {
            var t, r = e.labelText, u = e.defaultValue, d = e.value, f = e.options, m = e.onChange, p = e.compactMode, v = void 0 !== p && p, h = e.jestId, b = e.cypressId, y = (0,
            i.useState)(null !== (t = f.find((function(e) {
                return e.id === (null === u || void 0 === u ? void 0 : u.id) || e.id === (null === d || void 0 === d ? void 0 : d.id)
            }
            ))) && void 0 !== t ? t : null), x = y[0], g = y[1];
            return (0,
            i.useEffect)((function() {
                var e;
                u || g(null !== (e = f.find((function(e) {
                    return e.id === (null === d || void 0 === d ? void 0 : d.id)
                }
                ))) && void 0 !== e ? e : null)
            }
            ), [d]),
            (0,
            n.jsx)("div", {
                className: "block w-full",
                "data-testid": h,
                "data-cy": b,
                children: (0,
                n.jsx)(o.R, {
                    value: null !== x && void 0 !== x ? x : null,
                    onChange: function(e) {
                        m(e),
                        g(e)
                    },
                    children: function(e) {
                        var t = e.open;
                        return (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)(o.R.Label, {
                                className: "text-left font-semibold uppercase text-gray-700 block !font-franklin tracking-wide text-xs",
                                children: r
                            }), (0,
                            n.jsxs)("div", {
                                className: "mt-1 relative w-full",
                                children: [(0,
                                n.jsx)(o.R.Button, {
                                    className: "".concat(v && "w-10", " bg-white relative shadow-sm px-4 text-left cursor-default focus:outline-none text-lg tracking-wide font-franklin border-2 border-solid border-silver-200 rounded-[3px] ").concat(v ? "h-[30px]" : " w-full h-[45px]"),
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: "flex items-center w-full",
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "flex-1 ".concat(v && "z-50"),
                                            children: x && (0,
                                            n.jsxs)("span", {
                                                className: "block truncate",
                                                children: [!v && (0,
                                                n.jsx)("div", {
                                                    className: "mt-1",
                                                    children: x.label
                                                }), v && (0,
                                                n.jsxs)("div", {
                                                    className: "flex",
                                                    children: [(0,
                                                    n.jsx)("div", {
                                                        children: x.id
                                                    }), (0,
                                                    n.jsx)("div", {
                                                        children: (0,
                                                        n.jsx)(l.Z, {
                                                            className: "mt-1 h-4 w-4 text-gray80",
                                                            "aria-hidden": "true"
                                                        })
                                                    }), (0,
                                                    n.jsx)("div", {
                                                        className: "mb-2",
                                                        children: null === x || void 0 === x ? void 0 : x.secondaryLabel
                                                    })]
                                                })]
                                            })
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "flex items-center pr-2 ".concat(v && "z-50", " pointer-events-none justify-between"),
                                            children: !v && (0,
                                            n.jsx)(l.Z, {
                                                className: "h-4 w-4 text-gray80",
                                                "aria-hidden": "true"
                                            })
                                        })]
                                    })
                                }), t && (0,
                                n.jsx)(s.u, {
                                    show: t,
                                    as: i.Fragment,
                                    leave: "transition ease-in duration-100",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    n.jsx)(o.R.Options, {
                                        static: !0,
                                        className: (0,
                                        a.Z)("absolute list-none mt-1 w-full bg-white z-20", "m-0 p-0", "shadow-lg max-h-60 py-1 text-base ring-1", "ring-black ring-opacity-5 overflow-auto focus:outline-none", " sm:text-sm"),
                                        children: f.map((function(e, t) {
                                            return (0,
                                            n.jsx)(o.R.Option, {
                                                "data-cy": "".concat(b, "-option-").concat(t),
                                                className: function(e) {
                                                    var t = e.active;
                                                    return (0,
                                                    a.Z)(t ? "text-white bg-primary-start" : "text-gray80", "pl-8 pr-4", "cursor-default select-none relative py-2")
                                                },
                                                value: e,
                                                children: function(t) {
                                                    var r = t.selected
                                                      , i = t.active;
                                                    return (0,
                                                    n.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [(0,
                                                        n.jsx)("span", {
                                                            className: (0,
                                                            a.Z)(r ? "font-semibold" : "font-normal", "block truncate"),
                                                            children: e.label
                                                        }), r && (0,
                                                        n.jsx)("span", {
                                                            className: (0,
                                                            a.Z)(i ? "text-white" : "text-primary-start", "absolute inset-y-0 flex items-center", "right-0 pr-4"),
                                                            children: (0,
                                                            n.jsx)(c.Z, {
                                                                className: "h-5 w-5"
                                                            })
                                                        })]
                                                    })
                                                }
                                            }, e.id)
                                        }
                                        ))
                                    })
                                })]
                            })]
                        })
                    }
                })
            })
        }
    },
    94600: function(e, t, r) {
        "use strict";
        r.d(t, {
            K: function() {
                return o
            }
        });
        var n = r(85893);
        r(67294);
        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    i(e, t, r[t])
                }
                ))
            }
            return e
        }
        var o = function(e) {
            var t, r = e.name, i = e.labelText, o = e.register, s = e.errors, l = e.placeholder, c = e.rows, u = e.styles;
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col items-start",
                children: [i && (0,
                n.jsx)("label", {
                    className: "font-barlow text-base font-semibold uppercase text-gray-700 block mb-1",
                    htmlFor: r,
                    children: i
                }), (0,
                n.jsx)("div", {
                    className: "w-full relative",
                    children: (0,
                    n.jsx)("textarea", a({
                        placeholder: l,
                        rows: c || 12,
                        name: r,
                        className: "font-franklin block w-full text-base p-3 shadow-sm border border-surface-foreground outline-none " + u,
                        id: r
                    }, o(r)))
                }), (0,
                n.jsx)("p", {
                    className: "mt-2 text-sm text-red-600",
                    children: null === (t = s[r]) || void 0 === t ? void 0 : t.message
                })]
            })
        }
    },
    19334: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , i = (r(67294),
        r(94279))
          , a = r(16402)
          , o = r(22734);
        function s(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        t.Z = function(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                      , n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }
                    )))),
                    n.forEach((function(t) {
                        s(e, t, r[t])
                    }
                    ))
                }
                return e
            }({}, e)
              , r = t.isOpened
              , l = t.selectedKey
              , c = t.onClose
              , u = (0,
            o.L)("/".concat(l));
            return (0,
            n.jsx)("div", {
                className: (r ? "" : "hidden") + " fixed inset-0 z-[100] block items-center overflow-y-auto",
                children: (0,
                n.jsxs)("div", {
                    className: "text-center p-10 md:p-0",
                    children: [(0,
                    n.jsx)("div", {
                        onClick: function() {
                            c()
                        },
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    }), (0,
                    n.jsx)("span", {
                        className: "sm:inline-block sm:h-screen sm:align-middle"
                    }), (0,
                    n.jsxs)("div", {
                        className: "inline-block transform overflow-hidden align-middle shadow-xl transition-all bg-off-white w-full max-w-[644px] md:max-w-[768px]",
                        children: [(0,
                        n.jsx)("div", {
                            className: "px-4 pt-6",
                            children: (0,
                            n.jsx)("div", {
                                className: "sm:block sm:items-start",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "text-left sm:mt-0",
                                    children: [(0,
                                    n.jsx)("h3", {
                                        className: "mb-4 font-amiri font-medium text-3.5xl text-black",
                                        children: u && u.map((function(e) {
                                            return e.title
                                        }
                                        ))
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "font-franklin text-md font-light text-body",
                                        children: u && u.map((function(e) {
                                            return e.text.map((function(e) {
                                                return (0,
                                                n.jsx)(i.YI, {
                                                    value: e
                                                }, e._key)
                                            }
                                            ))
                                        }
                                        ))
                                    })]
                                })
                            })
                        }), (0,
                        n.jsx)("div", {
                            className: "flex justify-center md:justify-end",
                            children: (0,
                            n.jsx)(a.Z, {
                                onClick: function() {
                                    return c()
                                },
                                classNames: "mt-5 mx-4 w-fit justify-end",
                                children: "Close"
                            })
                        })]
                    })]
                })
            })
        }
    },
    71542: function(e, t, r) {
        "use strict";
        r.d(t, {
            q: function() {
                return i
            }
        });
        var n = r(67294)
          , i = function(e) {
            var t = (0,
            n.useState)(1)
              , r = t[0]
              , i = t[1]
              , a = (0,
            n.useState)(r)
              , o = a[0]
              , s = a[1]
              , l = (0,
            n.useState)(0)
              , c = l[0]
              , u = l[1]
              , d = function() {
                return window.scrollTo({
                    top: 0
                })
            };
            return {
                currentStep: o,
                nextStep: function() {
                    if (o < c)
                        return s(o + 1),
                        void (window.scrollY > 0 && d());
                    e && e()
                },
                prevStep: function() {
                    if (o > 1)
                        return s(o - 1),
                        void (window.scrollY > 0 && d());
                    e && e()
                },
                isFirstStep: 1 === o,
                isLastStep: o === c,
                setTotalSteps: u,
                setStartStep: i,
                setCurrentStep: s
            }
        }
    },
    4555: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , i = r(67294);
        t.Z = function(e) {
            var t = i.Children.toArray(e.children)
              , r = e.useSteps
              , a = (0,
            i.useState)()
              , o = a[0]
              , s = a[1];
            return (0,
            i.useEffect)((function() {
                r.setTotalSteps(t.length),
                s(t[r.currentStep - 1])
            }
            ), [e.children]),
            (0,
            n.jsx)(n.Fragment, {
                children: t && o
            })
        }
    },
    29092: function(e, t, r) {
        "use strict";
        var n = r(85893);
        r(67294);
        t.Z = function(e) {
            var t = e.currentStep
              , r = e.numberOfSteps
              , i = e.isFirstStep;
            return (0,
            n.jsxs)("div", {
                className: "flex justify-center mt-2 mb-9 text-3xl font-amiri font-thin text-silver-150",
                "data-cy": "step-".concat(t),
                children: [!i && (0,
                n.jsxs)(n.Fragment, {
                    children: ["Step ", t, " of ", r]
                }), !!i && (0,
                n.jsxs)(n.Fragment, {
                    children: ["Step ", t]
                })]
            })
        }
    },
    63453: function(e, t, r) {
        "use strict";
        var n = r(85893);
        r(67294);
        t.Z = function(e) {
            var t = e.children;
            return (0,
            n.jsx)("p", {
                className: "max-w-[870px] uppercase font-semibold text-md font-barlow text-grey-80 py-6",
                children: t
            })
        }
    },
    11605: function(e, t, r) {
        "use strict";
        var n = r(85893);
        r(67294);
        t.Z = function(e) {
            var t = e.title
              , r = e.subTitle
              , i = e.centerContent;
            return (0,
            n.jsxs)("div", {
                className: i ? "text-center" : "",
                children: [(0,
                n.jsx)("h1", {
                    className: "font-amiri font-normal text-charcoal-1 tracking-normal text-4xl lg:text-4.5xl mb-2 lg:mb-0 lg:leading-12",
                    children: t
                }), (0,
                n.jsx)("p", {
                    className: "mb-6 text-charcoal-1 text-md text-left font-light font-franklin",
                    children: r
                })]
            })
        }
    },
    17152: function(e, t, r) {
        "use strict";
        var n = r(85893)
          , i = (r(67294),
        r(86010))
          , a = r(13454)
          , o = r(45342);
        function s(e, t, r) {
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
                    s(e, t, r[t])
                }
                ))
            }
            return e
        }
        function c(e, t) {
            if (null == e)
                return {};
            var r, n, i = function(e, t) {
                if (null == e)
                    return {};
                var r, n, i = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
            return i
        }
        t.Z = function(e) {
            var t = e.onClick
              , r = e.className
              , s = c(e, ["onClick", "className"]);
            return (0,
            n.jsx)(a.E.span, {
                whileHover: o.b6.hover,
                whileTap: o.b6.tap,
                className: "w-fit",
                children: (0,
                n.jsx)("button", l({
                    type: "button",
                    "aria-label": "Go back",
                    "data-cy": "go-back",
                    onClick: t,
                    className: (0,
                    i.Z)("group flex justify-start items-center w-fit -ml-4 px-4 py-3 box-content cursor-pointer bg-transparent border-0", r)
                }, s, {
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
    44775: function(e, t, r) {
        "use strict";
        r.d(t, {
            kM: function() {
                return nr
            },
            gT: function() {
                return or
            },
            Uu: function() {
                return ar
            },
            LB: function() {
                return ir
            }
        });
        var n = r(85893)
          , i = r(67294)
          , a = r(2237)
          , o = r(41664)
          , s = r(2804)
          , l = r(88262)
          , c = r(88810)
          , u = r(86010)
          , d = function(e) {
            var t = e.onClick
              , r = e.isActive
              , i = e.label
              , a = e.description
              , o = e.dataCy;
            return (0,
            n.jsxs)("div", {
                className: (0,
                u.Z)("shadow-[2px_2px_10px_0px_rgba(0,0,0,0.08)] bg-off-white-100 rounded py-8 px-4 flex flex-col gap-y-4 items-center flex-1 cursor-pointer border-solid border-1 border-transparent hover:border-primary-1", r ? "!border-primary-1" : ""),
                onClick: t,
                "data-cy": o,
                children: [(0,
                n.jsx)("div", {
                    className: "font-amiri font-normal italic text-charcoal-100 text-2xl leading-7.5",
                    children: i
                }), (0,
                n.jsx)("div", {
                    className: "w-[90%] h-[1px] bg-silver-300"
                }), (0,
                n.jsx)("div", {
                    className: "font-franklin text-base font-light text-charcoal-100 leading-6 text-center",
                    children: a
                })]
            })
        };
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function p(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return f(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return f(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var v = function(e) {
            var t = e.nextStep
              , r = (e.removeNonIndividualSteps,
            p((0,
            s.FV)(c.u), 2))
              , i = r[0]
              , a = r[1]
              , u = function(e) {
                a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {}
                          , n = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }
                        )))),
                        n.forEach((function(t) {
                            m(e, t, r[t])
                        }
                        ))
                    }
                    return e
                }({}, i, {
                    investorType: e
                })),
                t && t()
            };
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-y-10 my-14",
                children: [(0,
                n.jsxs)("div", {
                    className: "flex flex-col lg:flex-row gap-x-10 gap-y-4 justify-center",
                    children: [(0,
                    n.jsx)(d, {
                        onClick: function() {
                            return u(l.N.INDIVIDUAL.value)
                        },
                        isActive: i.investorType === l.N.INDIVIDUAL.value,
                        label: l.N.INDIVIDUAL.label,
                        description: l.N.INDIVIDUAL.description,
                        dataCy: "investor_type_card_individual"
                    }), (0,
                    n.jsx)(d, {
                        onClick: function() {
                            return u(l.N.INSTITUTIONAL.value)
                        },
                        isActive: i.investorType === l.N.INSTITUTIONAL.value,
                        label: l.N.INSTITUTIONAL.label,
                        description: l.N.INSTITUTIONAL.description,
                        dataCy: "investor_type_card_institutional"
                    }), (0,
                    n.jsx)(d, {
                        onClick: function() {
                            return u(l.N.INDIVIDUAL_AND_INSTITUTIONAL.value)
                        },
                        isActive: i.investorType === l.N.INDIVIDUAL_AND_INSTITUTIONAL.value,
                        label: l.N.INDIVIDUAL_AND_INSTITUTIONAL.label,
                        description: l.N.INDIVIDUAL_AND_INSTITUTIONAL.description,
                        dataCy: "investor_type_card_individual_and_institutional"
                    })]
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col gap-y-1 items-center font-franklin font-light text-base leading-6",
                    children: [(0,
                    n.jsx)("div", {
                        className: "text-charcoal-100",
                        children: "Already a member?"
                    }), (0,
                    n.jsx)("div", {
                        children: (0,
                        n.jsx)(o.default, {
                            passHref: !0,
                            href: "/login",
                            children: (0,
                            n.jsx)("a", {
                                className: "text-primary-1",
                                children: "Sign in"
                            })
                        })
                    })]
                })]
            })
        }
          , h = r(34051)
          , b = r.n(h)
          , y = r(87536)
          , x = r(11163)
          , g = r(74231)
          , j = r(95496)
          , w = function(e, t, r) {
            var n = (0,
            i.useState)([])
              , a = n[0]
              , o = (n[1],
            t("choices"))
              , s = r || "none_of_the_above";
            return (0,
            i.useEffect)((function() {
                var r = t((function(t, r) {
                    if ("change" === r.type)
                        if (N(o, s)) {
                            var n = function(e, t) {
                                if (Array.isArray(e))
                                    return e.filter((function(e) {
                                        return e !== t
                                    }
                                    ));
                                return []
                            }(t.choices, s);
                            e("choices", n)
                        } else
                            N(t.choices, s) && e("choices", [s])
                }
                ));
                return function() {
                    return r.unsubscribe()
                }
            }
            )),
            {
                newValues: a
            }
        };
        function N(e, t) {
            return !!Array.isArray(e) && e.filter((function(e) {
                return e === t
            }
            )).length > 0
        }
        var I = r(77498)
          , S = r(19377)
          , _ = r(30423)
          , O = r(98258)
          , A = r(74777)
          , k = r(57132)
          , C = r(65864)
          , T = r(41609)
          , P = r.n(T)
          , M = r(41739)
          , D = r(53331)
          , E = r(59466)
          , L = r(1628)
          , Z = r(32508)
          , q = r(51828)
          , U = r(76638);
        function F(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var R = (0,
        s.nZ)({
            key: "onboardingFormState",
            get: function(e) {
                var t = e.get
                  , r = t(M.H)
                  , n = t(D.G)
                  , i = t(C.H)
                  , a = t(k.S)
                  , o = t(E.D)
                  , s = t(L.F)
                  , l = t(Z.v)
                  , c = r.firstname
                  , u = r.lastname
                  , d = r.email
                  , f = t(A.D).onboardingApplication.app_version || "5";
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {}
                          , n = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }
                        )))),
                        n.forEach((function(t) {
                            F(e, t, r[t])
                        }
                        ))
                    }
                    return e
                }({
                    firstname: c,
                    lastname: u,
                    email: d,
                    residence_country: r.countryOfResidence.label,
                    phone: "".concat(r.countryCode.secondaryLabel).concat(r.phone),
                    is_accredited: z(n),
                    is_qualified_purchaser: Q(i),
                    is_qualified_client: H(i, a),
                    already_invested: B(o),
                    current_net_worth: G(l, f),
                    plan_to_invest: K(s),
                    is_disqualified: W(n, f),
                    total_score: Y(n, i, a, o, l, s, f)
                }, V(t(q.P)))
            }
        })
          , V = function(e) {
            return {
                is_invited_by_admin: e.createdByAdmin ? e.createdByAdmin.toString() : "false",
                is_invited: !P()(e)
            }
        }
          , z = function(e) {
            return e.map((function(e) {
                return e
            }
            )).join(";")
        }
          , Q = function(e) {
            return e.map((function(e) {
                return e
            }
            )).join(";")
        }
          , B = function(e) {
            return e.map((function(e) {
                return e
            }
            )).join(";")
        }
          , H = function(e, t) {
            return (!!e.find((function(e) {
                return "none_of_the_above" === e || "i_am_not_a_qualified_purchaser" === e
            }
            )) && t || []).join(";")
        }
          , G = function(e, t) {
            var r;
            return (null === (r = (0,
            I.YG)(t).find((function(t) {
                return t.hubspotKey === e
            }
            ))) || void 0 === r ? void 0 : r.hubspotKey) || ""
        }
          , K = function(e) {
            return e
        }
          , W = function(e, t) {
            var r = (0,
            I.lP)(t);
            return (!!e.find((function(e) {
                return r[e].isDisqualified
            }
            )) || !1).toString()
        }
          , Y = function(e, t, r, n, i, a, o) {
            var s, l, c = U.JW, u = (0,
            I.YG)(o), d = (0,
            I.ie)(o), f = (0,
            I.kV)(o), m = (0,
            I.rE)(o), p = (0,
            I.lP)(o);
            return (s = [e.map((function(e) {
                return p[e]
            }
            )), t.map((function(e) {
                return f[e]
            }
            )), r.map((function(e) {
                return m[e]
            }
            )), n.map((function(e) {
                return c[e]
            }
            ))],
            l = [u.find((function(e) {
                return e.hubspotKey === i
            }
            )), d.find((function(e) {
                return e.hubspotKey === a
            }
            ))],
            s.reduce((function(e, t) {
                return e + t.reduce((function(e, t) {
                    return e + t.score
                }
                ), 0)
            }
            ), 0) + l.reduce((function(e, t) {
                return e + (t ? t.score : 0)
            }
            ), 0)).toString()
        }
          , $ = r(23730)
          , X = r(56547)
          , J = r(16402)
          , ee = function(e) {
            var t = e.disabled
              , r = e.loading
              , i = e.final
              , a = e.cyNext;
            return (0,
            n.jsx)("div", {
                className: "flex items-start flex-between w-full m-0 p-0 mt-10",
                children: (0,
                n.jsx)(J.Z, {
                    type: "submit",
                    disabled: t || r,
                    loading: r,
                    cy: a,
                    children: i ? "Submit" : "Next"
                })
            })
        }
          , te = r(13454)
          , re = r(45342)
          , ne = function() {
            return (0,
            n.jsx)(te.E.p, {
                initial: "initial",
                animate: "animate",
                exit: "exit",
                variants: re.Zv,
                children: (0,
                n.jsx)("p", {
                    className: "!text-red-100 font-franklin italic font-light text-md block mt-1 tracking-wider",
                    children: "Please make a selection"
                })
            })
        };
        function ie(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function ae(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function oe(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        ae(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        ae(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function se(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    se(e, t, r[t])
                }
                ))
            }
            return e
        }
        function ce(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ie(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return ie(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ue = g.Ry().shape({
            choices: g.IX().min(1, "Selection Required")
        }).required()
          , de = function() {
            var e = oe(b().mark((function e(t, r, n, i, a, o) {
                var s, l, c, u, d, f, m;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (i) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return i(!0),
                            e.prev = 3,
                            e.t0 = ce,
                            e.next = 7,
                            (0,
                            O.QL)([{
                                key: "is_qualified_client",
                                value: H(r, t)
                            }], n);
                        case 7:
                            return e.t1 = e.sent,
                            s = (0,
                            e.t0)(e.t1, 2),
                            l = s[0],
                            c = s[1],
                            e.abrupt("return", [l, c]);
                        case 14:
                            return e.prev = 14,
                            e.t2 = e.catch(3),
                            u = ce((0,
                            $.Z)(e.t2), 3),
                            d = u[0],
                            f = u[1],
                            m = u[2],
                            (0,
                            $.S3)(e.t2),
                            a({
                                code: d,
                                message: f,
                                source: m
                            }),
                            o(),
                            e.abrupt("return", []);
                        case 21:
                            return e.prev = 21,
                            i(!1),
                            e.finish(21);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 14, 21, 24]])
            }
            )));
            return function(t, r, n, i, a, o) {
                return e.apply(this, arguments)
            }
        }()
          , fe = function(e) {
            var t, r = e.loading, i = e.nextStep, a = e.prevStep, o = e.setLoading, l = e.toggleQualifiedClient, c = ce((0,
            s.FV)(k.S), 2), u = c[0], d = c[1], f = ce((0,
            s.FV)(A.D), 2), m = f[0], p = f[1], v = (null === m || void 0 === m || null === (t = m.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", h = (0,
            I.aH)(v), g = (0,
            s.sJ)(C.H), N = (0,
            x.useRouter)(), O = function() {
                return N.push("/onboarding-error")
            }, T = (0,
            y.cI)({
                resolver: (0,
                j.X)(ue),
                defaultValues: {
                    choices: u
                }
            }), P = T.handleSubmit, M = T.register, D = T.setValue, E = T.formState.errors, L = T.watch, Z = (w(D, L, parseInt(v) >= 4 ? "i_am_not_a_qualified_client" : "none_of_the_above"),
            function() {
                var e = oe(b().mark((function e(t) {
                    var r, n, a, s, c, u;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return d(t.choices),
                                e.t0 = ce,
                                e.next = 5,
                                de(t.choices, g, m, o, $.bS, O);
                            case 5:
                                e.t1 = e.sent,
                                a = (0,
                                e.t0)(e.t1, 2),
                                s = a[0],
                                c = a[1],
                                p(le({}, m, {
                                    onboardingApplication: s,
                                    hubSpotContactId: c
                                })),
                                _.$.onboardingEvent(s.cognitoUserId, s.hubSpotContactId, S.Z.ONBOARDING_QUALIFIED_CLIENT),
                                u = !(null === t || void 0 === t || null === (r = t.choices) || void 0 === r ? void 0 : r.includes("i_am_not_a_qualified_client")) && !(null === (n = t.choices) || void 0 === n ? void 0 : n.includes("none_of_the_above")),
                                null === l || void 0 === l || l(u),
                                null === i || void 0 === i || i();
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }());
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-qualified-client",
                    name: "Onboarding - Qualified Client",
                    onSubmit: P(Z),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: h.map((function(e, t) {
                            var r = h.length
                              , i = r - 1 === t
                              , a = r - 2 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(i ? "" : a ? "border-0 border-b border-solid border-black" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(X.Z, {
                                    register: M,
                                    labelText: e.label,
                                    name: "choices",
                                    id: "checkbox_".concat(t, "_id"),
                                    value: e.hubspotKey,
                                    inputStyles: "!mt-2"
                                })
                            }, t)
                        }
                        ))
                    }), E.choices && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        prevStep: a && a,
                        loading: r
                    })]
                })
            })
        }
          , me = r(4298)
          , pe = r(31038)
          , ve = r(74024)
          , he = function(e) {
            var t = e.prevStep
              , r = (0,
            i.useState)(!1)
              , a = r[0]
              , o = r[1];
            if (!t)
                return (0,
                n.jsx)(n.Fragment, {});
            var s = "".concat("https://meetings.hubspot.com/shawn-israilov/10-east-introductory-call", "?embed=true");
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)(ve.T, {}), (0,
                n.jsx)("div", {
                    className: "flex items-start justify-start bg-off-white-100 min-h-screen",
                    children: (0,
                    n.jsx)("div", {
                        className: "flex flex-col grow max-w-[644px] md:max-w-[1450px] px-8 md:px-12 lg:px-24 pb-4",
                        children: (0,
                        n.jsx)("div", {
                            children: a ? (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)(me.default, {
                                    src: "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                                }), (0,
                                n.jsx)("div", {
                                    className: "meetings-iframe-container",
                                    "data-src": s
                                })]
                            }) : (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)("h1", {
                                    className: "font-amiri font-normal text-charcoal-1 tracking-normal xs:text-xl md:text-4xl lg:text-4.5xl mb-8 lg:leading-12",
                                    children: "Schedule your Introductory Call to complete your application."
                                }), (0,
                                n.jsx)("p", {
                                    className: "mb-20 text-charcoal-1 text-lg md:text-3xl text-left font-normal font-amiri",
                                    children: "To protect the integrity and quality of our ecosystem, all applicants undergo an approval process to assess mutual fit."
                                }), (0,
                                n.jsx)("div", {
                                    className: "w-full",
                                    children: (0,
                                    n.jsxs)(J.Z, {
                                        onClick: function() {
                                            return o(!0)
                                        },
                                        classNames: "w-fit",
                                        children: ["Schedule Call", (0,
                                        n.jsx)(pe.Z, {
                                            className: "w-4 h-4 ml-1.5 mt-0.5 font-extrabold",
                                            "aria-hidden": "true"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        }
          , be = function(e) {
            var t = e.contentKey
              , r = e.introText
              , i = e.linkText
              , a = e.showModal;
            return (0,
            n.jsx)("div", {
                className: "flex gap-2",
                children: (0,
                n.jsxs)("div", {
                    children: [r, " ", (0,
                    n.jsx)("a", {
                        onClick: function() {
                            return a(t)
                        },
                        className: "font-bold text-secondary text-base hover:underline hover:cursor-pointer ml-1",
                        children: i
                    })]
                })
            })
        };
        function ye(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function xe(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function ge(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        xe(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        xe(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function je(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    je(e, t, r[t])
                }
                ))
            }
            return e
        }
        function Ne(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ye(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return ye(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Ie = g.Ry().shape({
            choices: g.IX().min(1, "Selection Required")
        }).required()
          , Se = function() {
            var e = ge(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n(!0),
                            e.prev = 1,
                            e.t0 = Ne,
                            e.next = 5,
                            (0,
                            O.QL)([{
                                key: "is_accredited",
                                value: t.join(";")
                            }], r);
                        case 5:
                            return e.t1 = e.sent,
                            o = (0,
                            e.t0)(e.t1, 2),
                            s = o[0],
                            l = o[1],
                            n(!1),
                            e.abrupt("return", [s, l]);
                        case 13:
                            return e.prev = 13,
                            e.t2 = e.catch(1),
                            c = Ne((0,
                            $.Z)(e.t2), 3),
                            u = c[0],
                            d = c[1],
                            f = c[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: u,
                                message: d,
                                source: f
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 20:
                            return e.prev = 20,
                            n(!1),
                            e.finish(20);
                        case 23:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 13, 20, 23]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , _e = function(e) {
            var t, r = e.nextStep, i = e.loading, a = e.setLoading, o = e.toggleAccreditedInvestor, l = Ne((0,
            s.FV)(D.G), 2), c = l[0], u = l[1], d = Ne((0,
            s.FV)(A.D), 2), f = d[0], m = d[1], p = (null === f || void 0 === f || null === (t = f.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", v = (0,
            I.pC)(p), h = (0,
            x.useRouter)(), g = function() {
                return h.push("/onboarding-error")
            }, N = (0,
            y.cI)({
                resolver: (0,
                j.X)(Ie),
                defaultValues: {
                    choices: c
                }
            }), O = N.handleSubmit, k = N.register, C = N.setValue, T = N.formState.errors, P = N.watch, M = (w(C, P, parseInt(p) > 3 ? "i_am_not_an_accredited_investor" : "none_of_the_above"),
            function() {
                var e = ge(b().mark((function e(t) {
                    var n, i, s, l;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(a && r && o)) {
                                    e.next = 14;
                                    break
                                }
                                return u(t.choices),
                                n = !t.choices.includes("none_of_the_above") && !t.choices.includes("i_am_not_an_accredited_investor"),
                                o(n),
                                e.t0 = Ne,
                                e.next = 7,
                                Se(t.choices, f, a, $.bS, g);
                            case 7:
                                e.t1 = e.sent,
                                i = (0,
                                e.t0)(e.t1, 2),
                                s = i[0],
                                l = i[1],
                                m(we({}, f, {
                                    onboardingApplication: s,
                                    hubSpotContactId: l
                                })),
                                _.$.onboardingEvent(s.cognitoUserId, l, S.Z.ONBOARDING_ACCREDITATION),
                                r();
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }());
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-accreditation",
                    name: "Onboarding - Accreditation",
                    onSubmit: O(M),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: v.map((function(e, t) {
                            var r = v.length
                              , i = r - 1 === t
                              , a = r - 2 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(i ? "" : a ? "border-0 border-b border-solid border-grey-50" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(X.Z, {
                                    register: k,
                                    labelText: "".concat(e.label).concat(t === v.length - 1 ? "" : "."),
                                    name: "choices",
                                    id: "toggle_".concat(e.hubspotKey),
                                    value: e.hubspotKey,
                                    inputStyles: "!mt-2"
                                })
                            }, t)
                        }
                        ))
                    }), T.choices && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        loading: i,
                        hideBackBtn: !0
                    })]
                })
            })
        }
          , Oe = r(4069)
          , Ae = r(43550);
        function ke(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        var Ce = function(e) {
            var t, r = e.show, a = e.setOpen, o = e.title, s = e.subTitle, l = e.action, c = e.actionUrl, u = e.actionType, d = e.actionButtonText, f = e.actionSuccessMessage, m = (0,
            i.useState)(!1), p = m[0], v = m[1];
            return (0,
            i.useEffect)((function() {
                v(!1)
            }
            ), [r]),
            (0,
            n.jsx)("div", {
                className: (r ? "" : "hidden") + " fixed inset-0 z-[100] block items-center overflow-y-auto",
                children: (0,
                n.jsxs)("div", {
                    className: "text-center",
                    children: [(0,
                    n.jsx)("div", {
                        onClick: function() {
                            return a(!1)
                        },
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    }), (0,
                    n.jsx)("span", {
                        className: "sm:inline-block sm:h-screen sm:align-middle"
                    }), (0,
                    n.jsxs)("div", {
                        className: "inline-block transform overflow-hidden align-middle shadow-xl transition-all bg-off-white w-full max-w-[644px] md:max-w-[768px]",
                        children: [(0,
                        n.jsx)("div", {
                            className: "px-4 pt-6",
                            children: (0,
                            n.jsx)("div", {
                                className: "sm:block sm:items-start",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "text-center sm:mt-0 sm:text-left",
                                    children: [(0,
                                    n.jsx)("h3", {
                                        className: "mb-4 font-amiri font-medium text-3.5xl text-black",
                                        children: o
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "font-franklin text-md font-light text-body",
                                        children: [(0,
                                        n.jsx)("p", {
                                            children: s
                                        }), r && (0,
                                        n.jsx)(n.Fragment, {
                                            children: p && (0,
                                            n.jsx)(n.Fragment, {
                                                children: f && (0,
                                                n.jsx)("div", {
                                                    className: "text-dash-success text-lg mt-3",
                                                    children: f
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (l || c) && r && (0,
                        n.jsxs)("div", {
                            className: "mt-5 sm:mt-6 mr-3 px-3",
                            children: ["function" === u && l && (0,
                            n.jsx)(J.Z, {
                                classNames: "w-fit",
                                onClick: p ? function() {
                                    return a(!1)
                                }
                                : (t = b().mark((function e() {
                                    return b().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                l();
                                            case 2:
                                                v(!0);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )),
                                function() {
                                    var e = this
                                      , r = arguments;
                                    return new Promise((function(n, i) {
                                        var a = t.apply(e, r);
                                        function o(e) {
                                            ke(a, n, i, o, s, "next", e)
                                        }
                                        function s(e) {
                                            ke(a, n, i, o, s, "throw", e)
                                        }
                                        o(void 0)
                                    }
                                    ))
                                }
                                ),
                                children: p ? "Close" : d
                            }), "link" === u && (0,
                            n.jsx)("a", {
                                href: c,
                                children: (0,
                                n.jsx)(J.Z, {
                                    classNames: "w-fit",
                                    children: d
                                })
                            })]
                        })]
                    })]
                })
            })
        }
          , Te = r(87072)
          , Pe = r(77090)
          , Me = r(94574)
          , De = r(65452)
          , Ee = r(41799)
          , Le = r(29715)
          , Ze = r.n(Le)
          , qe = r(75015)
          , Ue = function(e) {
            var t = e.additionalInputClassNames
              , r = e.labelClassNames
              , i = e.errorClassNames
              , a = e.name
              , o = e.type
              , s = e.labelText
              , l = e.register
              , c = e.errors
              , u = e.placeholder
              , d = e.disabled;
            return (0,
            n.jsx)("div", {
                children: (0,
                n.jsx)(qe.I, {
                    additionalInputClassNames: t + " !pl-11",
                    labelClassNames: r,
                    errorClassNames: i || void 0,
                    name: a,
                    type: o,
                    labelText: s,
                    placeholder: u,
                    register: l,
                    errors: c,
                    disabled: d,
                    children: (0,
                    n.jsx)("div", {
                        className: "absolute ".concat(i ? "top-0.5" : "top-1/2 -translate-y-1/2", " inset-0 w-10 h-10 flex justify-center items-center"),
                        children: (0,
                        n.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "pointer-events-none w-15 ml-3 opacity-30",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: [(0,
                            n.jsx)("path", {
                                d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            }), (0,
                            n.jsx)("path", {
                                d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                            })]
                        })
                    })
                })
            })
        };
        function Fe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function Re(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function Ve(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        Re(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        Re(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function ze(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    ze(e, t, r[t])
                }
                ))
            }
            return e
        }
        function Be(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Fe(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return Fe(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var He = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
            return e ? g.Ry().shape({
                firstname: g.Z_().trim().required("First name is required"),
                lastname: g.Z_().trim().required("Last name is required"),
                firmName: t ? g.Z_().trim().required("Firm name is required") : g.Z_(),
                email: g.Z_().trim().required("Email is required").email("Invalid email format"),
                countryOfResidence: g.Ry().required("Country of residence is required"),
                phone: g.Z_().when("countryCode", (function(e, t) {
                    return e && "US" === e.id ? t.length(10, "Phone number must be 10 digits") : t.required("Phone number can not be empty").matches(r, "Invalid phone number")
                }
                )),
                terms: g.O7().oneOf([!0], "Please read, and indicate your agreement to, the 10 East Non-Disclosure Agreement, Terms of Use and Privacy Policy.")
            }).required() : g.Ry().shape({
                firstname: g.Z_().trim().required("First name is required"),
                lastname: g.Z_().trim().required("Last name is required"),
                firmName: t ? g.Z_().trim().required("Firm name is required") : g.Z_(),
                email: g.Z_().trim().required("Email is required").email("Invalid email format"),
                password: g.Z_().trim().required("Password can not be empty").min(8, "Password must be 8 characters"),
                confirmPassword: g.Z_().trim().required("Confirm password can not be empty").min(8, "Confirm password must be 8 characters").oneOf([g.iH("password"), null], "Passwords must match"),
                countryOfResidence: g.Ry().required("Country of residence is required"),
                phone: g.Z_().when("countryCode", (function(e, t) {
                    return e && "US" === e.id ? t.length(10, "Phone number must be 10 digits") : t.required("Phone number can not be empty").matches(r, "Invalid phone number")
                }
                )),
                terms: g.O7().oneOf([!0], "Please read, and indicate your agreement to, the 10 East Non-Disclosure Agreement, Terms of Use and Privacy Policy.")
            }).required()
        }
          , Ge = (0,
        u.Z)("flex items-center pl-4 pr-4 pt-[12px] h-[43px] md:max-w-[300px] w-full", "text-black font-franklin font-normal text-lg tracking-wide proportional-nums", "border-2 border-solid border-silver-200 rounded-[3px]")
          , Ke = "!font-franklin tracking-wide !mb-2 text-xs"
          , We = function(e, t) {
            return (0,
            u.Z)("!text-red-100 font-franklin italic font-light text-md block mt-1 tracking-wider", !e[t] && "hidden")
        }
          , Ye = function() {
            var e = Ve(b().mark((function e(t, r, n, i, a, o, s, l, c) {
                var u, d, f, m, p, v, h;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (a) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return t.firstname = (0,
                            Me.WA)(t.firstname),
                            t.lastname = (0,
                            Me.WA)(t.lastname),
                            a(!0),
                            e.prev = 5,
                            e.t0 = Be,
                            e.next = 9,
                            (0,
                            O.PK)(t, n, i, r, Boolean(l), c);
                        case 9:
                            return e.t1 = e.sent,
                            u = (0,
                            e.t0)(e.t1, 2),
                            d = u[0],
                            f = u[1],
                            a(!1),
                            e.abrupt("return", [d, f]);
                        case 17:
                            return e.prev = 17,
                            e.t2 = e.catch(5),
                            m = Be((0,
                            $.Z)(e.t2), 3),
                            p = m[0],
                            v = m[1],
                            h = m[2],
                            (0,
                            $.S3)(e.t2),
                            o({
                                code: p,
                                message: v,
                                source: h
                            }),
                            s(),
                            e.abrupt("return", []);
                        case 24:
                            return e.prev = 24,
                            a(!1),
                            e.finish(24);
                        case 27:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[5, 17, 24, 27]])
            }
            )));
            return function(t, r, n, i, a, o, s, l, c) {
                return e.apply(this, arguments)
            }
        }()
          , $e = function(e) {
            var t, r, a = e.nextStep, u = e.setLoading, d = e.loading, f = Be((0,
            s.FV)(M.H), 2), m = f[0], p = f[1], v = Be((0,
            s.FV)(A.D), 2), h = v[0], g = v[1], w = (0,
            s.sJ)(q.P), N = (0,
            s.sJ)(De.d), I = (0,
            s.sJ)(c.u), k = (0,
            i.useState)(!1), C = k[0], T = k[1], P = (0,
            i.useState)(!1), D = P[0], E = P[1], L = (0,
            i.useState)(""), Z = L[0], U = L[1], F = (0,
            i.useState)(""), R = F[0], V = F[1], z = (0,
            x.useRouter)(), Q = Boolean(null === z || void 0 === z || null === (t = z.query) || void 0 === t ? void 0 : t.spoblfpc), B = function() {
                return z.push("/onboarding-error")
            }, H = function() {
                return (0,
                O.SH)(h.onboardingApplication)
            }, G = (0,
            y.cI)({
                defaultValues: Qe({}, m),
                resolver: (0,
                j.X)(He(H(), h.onboardingApplication && h.onboardingApplication.institutionalFlow && null !== h.onboardingApplication.institutionalFlow && [l.N.INSTITUTIONAL, l.N.INDIVIDUAL_AND_INSTITUTIONAL].map((function(e) {
                    return e.system_value
                }
                )).includes(h.onboardingApplication.institutionalFlow) || !1))
            }), K = G.control, W = G.watch, Y = G.register, J = G.handleSubmit, te = G.setValue, re = G.getValues, ne = G.setError, ie = G.formState, ae = ie.errors, oe = ie.isSubmitting, se = W("countryCode"), le = function() {
                var e = Ve(b().mark((function e(t) {
                    var r, n, i, o;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((0,
                                O.Pp)(t.email, w)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", ne("email", {
                                    type: "Invite email mismatched",
                                    message: "Email address does not match invitation."
                                }));
                            case 2:
                                return e.next = 4,
                                ce(t.email, w);
                            case 4:
                                if (!e.sent) {
                                    e.next = 24;
                                    break
                                }
                                return e.next = 9,
                                ue(t);
                            case 9:
                                if (!e.sent) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return", ne("email", {
                                    type: "User Already Exists",
                                    message: "A user with this email already exists."
                                }));
                            case 12:
                                return e.t0 = Be,
                                e.next = 15,
                                Ye(t, h, w, (0,
                                Pe.x6)(z) ? {
                                    utmSource: z.query.utm_source || "",
                                    utmCampaign: z.query.utm_campaign || "",
                                    utmMedium: z.query.utm_medium || "",
                                    utmTerm: z.query.utm_term || ""
                                } : N, u, $.bS, B, Q, null === (r = l.N.fromValue(I.investorType)) || void 0 === r ? void 0 : r.system_value);
                            case 15:
                                e.t1 = e.sent,
                                n = (0,
                                e.t0)(e.t1, 2),
                                i = n[0],
                                o = n[1],
                                g(Qe({}, h, {
                                    onboardingApplication: i,
                                    hubSpotContactId: o
                                })),
                                p(Qe({}, m, t)),
                                _.$.event(S.Z.ONBOARDING_CONTACT_INFO),
                                (0,
                                Ae.u8)("setProperties", {
                                    type: "user",
                                    properties: {
                                        displayName: i.firstname + " " + i.lastname,
                                        email: i.email
                                    }
                                }),
                                a && a();
                            case 24:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), ce = function() {
                var e = Ve(b().mark((function e(t, r) {
                    var n, i, a, o, s, l, c, d, f, m;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = !0,
                                H() || !u) {
                                    e.next = 20;
                                    break
                                }
                                return u(!0),
                                e.next = 5,
                                (0,
                                O.Ti)(t);
                            case 5:
                                if (i = e.sent,
                                a = i.applicationExists,
                                o = void 0 !== a && a,
                                s = i.applicationType,
                                l = void 0 === s ? "" : s,
                                o && (V(l),
                                T(!0),
                                u(!1),
                                n = !1),
                                o) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 14,
                                (0,
                                O._m)(t);
                            case 14:
                                c = e.sent,
                                d = c.inviteExists,
                                f = void 0 !== d && d,
                                m = c.inviteId,
                                u(!1),
                                f && r.id !== m && (E(!0),
                                U(m),
                                n = !1);
                            case 20:
                                return e.abrupt("return", n);
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(), ue = function() {
                var e = Ve(b().mark((function e(t) {
                    var r, n;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (u) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 2:
                                return r = !1,
                                e.prev = 3,
                                u(!0),
                                e.next = 7,
                                (0,
                                O.Bh)(t.email);
                            case 7:
                                n = e.sent,
                                u(!1),
                                n && !H() && (r = !0),
                                e.next = 17;
                                break;
                            case 12:
                                return e.prev = 12,
                                e.t0 = e.catch(3),
                                u(!1),
                                (0,
                                $.S3)(e.t0),
                                e.abrupt("return");
                            case 17:
                                return e.abrupt("return", r);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[3, 12]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)("form", {
                    id: "onboarding-contact-info",
                    name: "Onboarding - Contact Info",
                    onSubmit: J(le),
                    children: [(0,
                    n.jsxs)("div", {
                        className: "my-2",
                        children: [(r = I,
                        [l.N.INSTITUTIONAL, l.N.INDIVIDUAL_AND_INSTITUTIONAL].map((function(e) {
                            return e.value
                        }
                        )).includes(r.investorType) && (0,
                        n.jsx)("div", {
                            className: "flex flex-col md:flex-row mb-6",
                            children: (0,
                            n.jsx)(qe.I, {
                                additionalInputClassNames: Ge + " !mr-8",
                                labelClassNames: Ke,
                                errorClassNames: We(ae, "firmName"),
                                name: "firmName",
                                type: "text",
                                labelText: "Firm Name",
                                register: Y,
                                errors: ae
                            })
                        })), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col md:flex-row",
                            children: [(0,
                            n.jsx)(qe.I, {
                                additionalInputClassNames: Ge + " !mr-8 capitalize",
                                labelClassNames: Ke,
                                errorClassNames: We(ae, "firstname"),
                                name: "firstname",
                                type: "text",
                                labelText: "First Name",
                                register: Y,
                                errors: ae
                            }), (0,
                            n.jsx)(qe.I, {
                                additionalInputClassNames: Ge + " md:ml-8 capitalize",
                                labelClassNames: Ke + " mt-6 md:ml-8 md:mt-0",
                                errorClassNames: We(ae, "lastname"),
                                name: "lastname",
                                type: "text",
                                labelText: "Last Name",
                                register: Y,
                                errors: ae
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "my-6",
                            children: (0,
                            n.jsx)(Ue, {
                                additionalInputClassNames: Ge + " md:!max-w-[450px] ",
                                labelClassNames: Ke,
                                errorClassNames: We(ae, "email"),
                                name: "email",
                                type: "email",
                                labelText: "Email",
                                register: Y,
                                errors: ae,
                                disabled: H()
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "my-6",
                            children: ["US" === se.id && (0,
                            n.jsx)(Oe.HH, {
                                type: "tel",
                                format: "(###) ###-####",
                                mask: "_",
                                allowEmptyFormatting: "US" === se.id,
                                defaultValue: m.phone,
                                onValueChange: function(e) {
                                    te("phone", e.value)
                                },
                                customInput: function(e) {
                                    return (0,
                                    n.jsx)(qe.I, {
                                        additionalInputClassNames: Ge + " !pl-24 relative z-50",
                                        labelClassNames: Ke,
                                        errorClassNames: We(ae, "phone"),
                                        name: "phone",
                                        labelText: "Phone Number",
                                        errors: ae,
                                        placeholder: "(999) 999-9999",
                                        additionalProps: e,
                                        children: (0,
                                        n.jsx)("div", {
                                            className: "absolute inset-0 h-[45px] flex justify-center items-center",
                                            children: (0,
                                            n.jsx)(y.Qr, {
                                                name: "countryCode",
                                                control: K,
                                                render: function(e) {
                                                    var t = e.field
                                                      , r = t.onChange
                                                      , i = t.value;
                                                    return (0,
                                                    n.jsx)(Ee.Z, {
                                                        onChange: r,
                                                        defaultValue: i,
                                                        labelText: "",
                                                        compactMode: !0,
                                                        options: Te.J
                                                    })
                                                }
                                            })
                                        })
                                    })
                                }
                            }), "US" !== se.id && (0,
                            n.jsx)(qe.I, {
                                additionalInputClassNames: Ge + " !pl-28 mt-[2px] relative z-50",
                                labelClassNames: Ke,
                                errorClassNames: We(ae, "phone"),
                                name: "phone",
                                labelText: "Phone Number",
                                errors: ae,
                                register: Y,
                                children: (0,
                                n.jsx)("div", {
                                    className: "absolute inset-0 h-[45px] flex justify-center items-center",
                                    children: (0,
                                    n.jsx)(y.Qr, {
                                        name: "countryCode",
                                        control: K,
                                        render: function(e) {
                                            var t = e.field
                                              , r = t.onChange
                                              , i = t.value;
                                            return (0,
                                            n.jsx)(Ee.Z, {
                                                onChange: r,
                                                defaultValue: i,
                                                labelText: "",
                                                compactMode: !0,
                                                options: Te.J
                                            })
                                        }
                                    })
                                })
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "my-6 w-[300px]",
                            children: (0,
                            n.jsx)(y.Qr, {
                                name: "countryOfResidence",
                                control: K,
                                render: function(e) {
                                    var t = e.field.onChange;
                                    return (0,
                                    n.jsx)(Ee.Z, {
                                        onChange: t,
                                        defaultValue: m.countryOfResidence,
                                        labelText: "Country of Residence",
                                        compactMode: !1,
                                        options: Te.J
                                    })
                                }
                            })
                        }), !H() && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("h2", {
                                className: "font-amiri font-normal text-charcoal-1 tracking-normal text-3xl my-10 mb-2 lg:leading-12",
                                children: "Create a password for your account"
                            }), (0,
                            n.jsxs)("div", {
                                className: "flex flex-col md:flex-row",
                                children: [(0,
                                n.jsx)(qe.I, {
                                    additionalInputClassNames: Ge + " md:!max-w-[445px] mr-16",
                                    labelClassNames: Ke,
                                    errorClassNames: We(ae, "password"),
                                    name: "password",
                                    type: "password",
                                    labelText: "Password",
                                    register: Y,
                                    errors: ae,
                                    autoComplete: "password"
                                }), (0,
                                n.jsx)(qe.I, {
                                    additionalInputClassNames: Ge + " md:!max-w-[445px] md:ml-8",
                                    labelClassNames: Ke + " mt-6 md:ml-8 md:mt-0",
                                    errorClassNames: We(ae, "confirmPassword"),
                                    name: "confirmPassword",
                                    type: "password",
                                    labelText: "Confirm Password",
                                    register: Y,
                                    errors: ae,
                                    autoComplete: "password"
                                })]
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "my-6 max-w-[885px]",
                            children: (0,
                            n.jsx)(X.Z, {
                                alignLeft: !0,
                                id: "terms",
                                register: Y,
                                name: "terms",
                                labelStyles: "mt-2",
                                labelText: (0,
                                n.jsxs)("div", {
                                    className: "font-franklin",
                                    children: ["I agree to 10 East's", " ", (0,
                                    n.jsx)(o.default, {
                                        href: "/nda",
                                        passHref: !0,
                                        children: (0,
                                        n.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "font-franklin text-primary-1 link-hover-effect",
                                            children: "Non-Disclosure Agreement"
                                        })
                                    }), ",", " ", (0,
                                    n.jsx)(o.default, {
                                        href: "/terms-of-use",
                                        passHref: !0,
                                        children: (0,
                                        n.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "font-franklin text-primary-1 link-hover-effect",
                                            children: "Terms of Use"
                                        })
                                    }), ", and", " ", (0,
                                    n.jsx)(o.default, {
                                        href: "/privacy-policy",
                                        passHref: !0,
                                        children: (0,
                                        n.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer noopener",
                                            className: "font-franklin text-primary-1 link-hover-effect",
                                            children: "Privacy Policy"
                                        })
                                    }), "."]
                                })
                            })
                        })]
                    }), (0,
                    n.jsx)(ee, {
                        hideBackBtn: !0,
                        disabled: oe,
                        loading: d,
                        cyNext: "submit-contact-form"
                    })]
                }), (0,
                n.jsx)(Ce, {
                    show: C,
                    setOpen: T,
                    logo: Ze(),
                    title: "Application Already In Progress",
                    subTitle: "An ".concat(R, " application is already in progress for this email address. Click the button below to receive a link and continue your application."),
                    highlightedContent: re().email,
                    action: Ve(b().mark((function e() {
                        return b().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!u) {
                                        e.next = 5;
                                        break
                                    }
                                    return u(!0),
                                    e.next = 4,
                                    (0,
                                    O.KW)(re().email);
                                case 4:
                                    u(!1);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    actionType: "function",
                    actionButtonText: "Email Secure Application Link",
                    actionSuccessMessage: "Email has been sent."
                }), (0,
                n.jsx)(Ce, {
                    show: D,
                    setOpen: E,
                    logo: Ze(),
                    title: "Invite Already Exists",
                    subTitle: "An invite is already created for this email address. Click the button below to navigate to the invite page and request access.",
                    highlightedContent: re().email,
                    actionUrl: "https://app.10east.co/onboarding/".concat(Z, "?utm_source=member-referral"),
                    actionType: "link",
                    actionButtonText: "Go to Invite Page"
                })]
            })
        }
          , Xe = r(25934)
          , Je = r(92094)
          , et = r(62278)
          , tt = (0,
        s.cn)({
            key: "freeFormCommentAtom",
            default: {
                comment: "",
                referralName: ""
            }
        })
          , rt = r(94600)
          , nt = r(76170);
        function it(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function at(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function ot(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        at(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        at(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function st(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function lt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    st(e, t, r[t])
                }
                ))
            }
            return e
        }
        function ct(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return it(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return it(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ut = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "false";
            return "true" === e ? g.Ry().shape({
                comment: g.Z_().trim()
            }).shape({
                referralName: g.Z_().trim().required("How did you hear about us is required")
            }).required() : g.Ry().shape({
                comment: g.Z_().trim().required("Comment field is required")
            }).shape({
                referralName: g.Z_().trim().required("How did you hear about us is required")
            }).required()
        }
          , dt = (0,
        u.Z)("flex items-center pl-4 pr-4 pt-[12px] h-[43px] max-w-[600px] w-full", "text-black font-franklin font-normal tracking-wide proportional-nums", "border-2 border-solid border-silver-200 rounded-[3px]")
          , ft = function(e, t) {
            return (0,
            u.Z)("!text-red-100 font-franklin italic font-light text-md block mt-1 tracking-wider", !e[t] && "hidden")
        }
          , mt = function() {
            var e = ot(b().mark((function e(t, r, n, i, a, o, s, l, c, u) {
                var d, f, m, p, v, h, y, x, g, j, w, N, S, _, A, k, C, T, P, M, D, E, L, Z, q, U, F, R, V, z;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (d = r.email,
                            f = r.firstname,
                            m = r.lastname,
                            p = r.phone,
                            v = r.total_score,
                            h = r.is_disqualified,
                            y = r.is_accredited,
                            x = r.is_qualified_purchaser,
                            g = r.is_qualified_client,
                            j = r.is_invited_by_admin,
                            w = r.current_net_worth,
                            e.prev = 1,
                            u(!0),
                            S = Je._.ELIGIBILITY_CHECK,
                            _ = Je._.PENDING,
                            "true" === h && (S = Je._.DISQUALIFIED,
                            _ = Je._.DENIED),
                            A = [{
                                key: "total_score",
                                value: parseInt(v)
                            }, {
                                key: "is_disqualified",
                                value: "true" === h
                            }, {
                                key: "status",
                                value: S.toString()
                            }, {
                                key: "application_status",
                                value: _.value
                            }],
                            (0,
                            Pe.Ox)(t.onboardingApplication)) {
                                e.next = 16;
                                break
                            }
                            return e.t0 = ct,
                            e.next = 12,
                            (0,
                            O.sm)(d, (0,
                            Xe.Z)(), f, m, p, j, "V1-".concat(t.onboardingApplication.id));
                        case 12:
                            e.t1 = e.sent,
                            k = (0,
                            e.t0)(e.t1, 1),
                            C = k[0],
                            A.push({
                                key: "cognitoUserId",
                                value: C
                            });
                        case 16:
                            return e.t2 = ct,
                            e.next = 19,
                            (0,
                            O.QL)(A, t);
                        case 19:
                            return e.t3 = e.sent,
                            T = (0,
                            e.t2)(e.t3, 2),
                            T[0],
                            P = T[1],
                            M = t.onboardingApplication.app_version || "5",
                            D = (0,
                            I.YG)(M),
                            E = null === (N = D.find((function(e) {
                                return e.hubspotKey === w
                            }
                            ))) || void 0 === N ? void 0 : N.label,
                            L = "none_of_the_above" !== x && "i_am_not_a_qualified_purchaser" !== x ? "Qualified Purchaser" : "none_of_the_above" !== g && "i_am_not_a_qualified_client" !== g ? "Qualified Client" : "none_of_the_above" !== y && "i_am_not_an_accredited_investor" !== y ? "Accredited Investor" : "Non-Accredited Investor",
                            Z = (0,
                            O.DG)(o || "", s || "", P),
                            q = (0,
                            O.X4)(),
                            U = "".concat(q, "/admin/users/pending"),
                            "See response in HubSpot",
                            e.next = 33,
                            (0,
                            O.LH)(n, f, m, x, a, i, U, E, L, "See response in HubSpot", Z, t.onboardingApplication.firmName);
                        case 33:
                            u(!1),
                            e.next = 42;
                            break;
                        case 36:
                            e.prev = 36,
                            e.t4 = e.catch(1),
                            F = ct((0,
                            $.Z)(e.t4), 3),
                            R = F[0],
                            V = F[1],
                            z = F[2],
                            (0,
                            $.S3)(e.t4),
                            l({
                                code: R,
                                message: V,
                                source: z
                            }),
                            c();
                        case 42:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 36]])
            }
            )));
            return function(t, r, n, i, a, o, s, l, c, u) {
                return e.apply(this, arguments)
            }
        }()
          , pt = function() {
            var e = ot(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f, m;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return null === n || void 0 === n || n(!0),
                            e.prev = 1,
                            o = [{
                                key: "free_comment",
                                value: t.comment
                            }, {
                                key: "referral_name",
                                value: t.referralName
                            }],
                            e.t0 = ct,
                            e.next = 6,
                            (0,
                            O.QL)(o, r);
                        case 6:
                            return e.t1 = e.sent,
                            s = (0,
                            e.t0)(e.t1, 2),
                            l = s[0],
                            c = s[1],
                            e.abrupt("return", [l, c]);
                        case 13:
                            return e.prev = 13,
                            e.t2 = e.catch(1),
                            u = ct((0,
                            $.Z)(e.t2), 3),
                            d = u[0],
                            f = u[1],
                            m = u[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: d,
                                message: f,
                                source: m
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 13]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , vt = function(e) {
            var t, r, a, o, l = e.loading, u = e.nextStep, d = e.prevStep, f = e.isQP, m = e.isLastStep, p = e.setLoading, v = (0,
            i.useState)(!0), h = v[0], g = v[1], w = (0,
            x.useRouter)(), N = Boolean(null === w || void 0 === w || null === (t = w.query) || void 0 === t ? void 0 : t.spoblfpc), I = et.Y.trackBehavioralEvent, O = et.Y.CustomTrackingEvents, k = et.Y.APP_BASE_URL, C = et.Y.ACCOUNT_ID, T = ct((0,
            s.FV)(tt), 2), P = T[0], M = T[1], D = (0,
            s.sJ)(A.D), E = (0,
            s.sJ)(c.u);
            sessionStorage.setItem("applicationId", (null === D || void 0 === D || null === (r = D.onboardingApplication) || void 0 === r ? void 0 : r.id) || "");
            var L = (0,
            s.sJ)(R)
              , Z = "US" !== (null === D || void 0 === D || null === (a = D.onboardingApplication) || void 0 === a ? void 0 : a.residence_country) && "PR" !== (null === D || void 0 === D || null === (o = D.onboardingApplication) || void 0 === o ? void 0 : o.residence_country)
              , q = function() {
                return w.push("/onboarding-error")
            };
            (0,
            i.useEffect)((function() {
                D.onboardingApplication.status === Je._.CREATED.value ? mt(D, L, E.investorType, N, Z, k, C, $.bS, q, g) : g(!1)
            }
            ), [D.onboardingApplication.status]);
            var U = (0,
            y.cI)({
                defaultValues: lt({}, P),
                resolver: (0,
                j.X)(ut(L.is_invited_by_admin))
            })
              , F = U.register
              , V = U.handleSubmit
              , z = U.formState.errors
              , Q = N || m || Z && !(f && "greater_100m" === D.onboardingApplication.current_net_worth)
              , B = function() {
                var e = ot(b().mark((function e(t) {
                    var r, n, i;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return M(lt({}, P, t)),
                                e.t0 = ct,
                                e.next = 4,
                                pt(t, D, p, $.bS, q);
                            case 4:
                                e.t1 = e.sent,
                                r = (0,
                                e.t0)(e.t1, 1),
                                (n = r[0]) && u && (I(L.email, O.APPLIED),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.ONBOARDING_FREE_FORM),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.SIGN_UP),
                                p && p(!1),
                                Q ? (i = "/confirmation/".concat(n.id),
                                N && (i += "?hadCall=1"),
                                w.push(i)) : u());
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return h ? (0,
            n.jsx)(nt.Z, {}) : (0,
            n.jsxs)("form", {
                id: "onboarding-comment",
                name: "Onboarding - Comment",
                onSubmit: V(B),
                children: [(0,
                n.jsx)("div", {
                    className: "my-2 max-w-[600px]",
                    children: (0,
                    n.jsx)(rt.K, {
                        rows: 3,
                        name: "comment",
                        placeholder: "Write your response here",
                        errors: z,
                        register: F,
                        styles: "font-franklin font-normal tracking-wide mb-14"
                    })
                }), (0,
                n.jsx)("div", {
                    className: "my-2",
                    children: (0,
                    n.jsx)(qe.I, {
                        name: "referralName",
                        type: "text",
                        labelText: "Who referred you to 10 East?",
                        register: F,
                        errors: z,
                        additionalInputClassNames: dt + " mb-10",
                        labelClassNames: "!font-franklin tracking-wide !mb-0.5 text-md",
                        errorClassNames: ft(z, "password")
                    })
                }), (0,
                n.jsx)(ee, {
                    prevStep: d && d,
                    loading: l,
                    final: Q
                })]
            })
        }
          , ht = r(79023);
        function bt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function yt(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function xt(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        yt(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        yt(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function gt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function jt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    gt(e, t, r[t])
                }
                ))
            }
            return e
        }
        function wt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return bt(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return bt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Nt = g.Ry().shape({
            choice: g.Z_().required("This field is required")
        }).required()
          , It = function() {
            var e = xt(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f, m;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return n(!0),
                            e.prev = 3,
                            o = r.onboardingApplication.app_version || "5",
                            e.t0 = wt,
                            e.next = 8,
                            (0,
                            O.QL)([{
                                key: "current_net_worth",
                                value: G(t, o)
                            }], r);
                        case 8:
                            return e.t1 = e.sent,
                            s = (0,
                            e.t0)(e.t1, 2),
                            l = s[0],
                            c = s[1],
                            e.abrupt("return", [l, c]);
                        case 15:
                            return e.prev = 15,
                            e.t2 = e.catch(3),
                            u = wt((0,
                            $.Z)(e.t2), 3),
                            d = u[0],
                            f = u[1],
                            m = u[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: d,
                                message: f,
                                source: m
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 22:
                            return e.prev = 22,
                            n(!1),
                            e.finish(22);
                        case 25:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 15, 22, 25]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , St = function(e) {
            var t, r = e.loading, i = e.nextStep, a = e.prevStep, o = e.setLoading, l = wt((0,
            s.FV)(Z.v), 2), c = l[0], u = l[1], d = wt((0,
            s.FV)(A.D), 2), f = d[0], m = d[1], p = (null === f || void 0 === f || null === (t = f.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", v = (0,
            I.YG)(p), h = (0,
            x.useRouter)(), g = function() {
                return h.push("/onboarding-error")
            }, w = (0,
            y.cI)({
                resolver: (0,
                j.X)(Nt),
                defaultValues: {
                    choice: c
                }
            }), N = w.handleSubmit, O = w.register, k = w.formState.errors, C = function() {
                var e = xt(b().mark((function e(t) {
                    var r, n, a;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return u(t.choice),
                                e.t0 = wt,
                                e.next = 4,
                                It(t.choice, f, o, $.bS, g);
                            case 4:
                                e.t1 = e.sent,
                                r = (0,
                                e.t0)(e.t1, 2),
                                n = r[0],
                                a = r[1],
                                m(jt({}, f, {
                                    onboardingApplication: n,
                                    hubSpotContactId: a
                                })),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.ONBOARDING_NET_WORTH),
                                i && i();
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-net-worth",
                    name: "Onboarding - Net Worth",
                    onSubmit: N(C),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: v.map((function(e, t) {
                            var r = v.length - 1 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(r ? "" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(ht.r, {
                                    name: "choice",
                                    id: e.hubspotKey,
                                    labelText: e.label,
                                    value: e.hubspotKey,
                                    register: O
                                })
                            }, t)
                        }
                        ))
                    }), k && (null === k || void 0 === k ? void 0 : k.choice) && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        prevStep: a && a,
                        loading: r
                    })]
                })
            })
        };
        function _t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function Ot(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function At(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        Ot(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        Ot(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function kt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    kt(e, t, r[t])
                }
                ))
            }
            return e
        }
        function Tt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return _t(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return _t(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Pt = g.Ry().shape({
            choices: g.IX().min(1, "Selection Required")
        }).required()
          , Mt = function() {
            var e = At(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return n(!0),
                            e.prev = 3,
                            e.t0 = Tt,
                            e.next = 7,
                            (0,
                            O.QL)([{
                                key: "already_invested",
                                value: t.join(";")
                            }], r);
                        case 7:
                            return e.t1 = e.sent,
                            o = (0,
                            e.t0)(e.t1, 2),
                            s = o[0],
                            l = o[1],
                            e.abrupt("return", [s, l]);
                        case 14:
                            return e.prev = 14,
                            e.t2 = e.catch(3),
                            c = Tt((0,
                            $.Z)(e.t2), 3),
                            u = c[0],
                            d = c[1],
                            f = c[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: u,
                                message: d,
                                source: f
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 21:
                            return e.prev = 21,
                            n(!1),
                            e.finish(21);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 14, 21, 24]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , Dt = function(e) {
            var t, r = e.loading, i = e.nextStep, a = e.prevStep, o = e.setLoading, l = Tt((0,
            s.FV)(E.D), 2), c = l[0], u = l[1], d = Tt((0,
            s.FV)(A.D), 2), f = d[0], m = d[1], p = (null === f || void 0 === f || null === (t = f.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", v = (0,
            I.cj)(p), h = (0,
            x.useRouter)(), g = function() {
                return h.push("/onboarding-error")
            }, N = (0,
            y.cI)({
                resolver: (0,
                j.X)(Pt),
                defaultValues: {
                    choices: c
                }
            }), O = N.handleSubmit, k = N.register, C = N.setValue, T = N.formState.errors, P = N.watch, M = (w(C, P),
            function() {
                var e = At(b().mark((function e(t) {
                    var r, n, a;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return u(t.choices),
                                e.t0 = Tt,
                                e.next = 4,
                                Mt(t.choices, f, o, $.bS, g);
                            case 4:
                                e.t1 = e.sent,
                                r = (0,
                                e.t0)(e.t1, 2),
                                n = r[0],
                                a = r[1],
                                m(Ct({}, f, {
                                    onboardingApplication: n,
                                    hubSpotContactId: a
                                })),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.ONBOARDING_PAST_INVESTMENTS),
                                i && i();
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }());
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-past-investments",
                    name: "Onboarding - Past Investments",
                    onSubmit: O(M),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: v.map((function(e, t) {
                            var r = v.length
                              , i = r - 1 === t
                              , a = r - 2 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(i ? "" : a ? "border-0 border-b border-solid border-grey-50" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(X.Z, {
                                    register: k,
                                    labelText: e.label,
                                    name: "choices",
                                    id: "checkbox_".concat(t, "_id"),
                                    value: e.hubspotKey,
                                    inputStyles: "!mt-2"
                                })
                            }, t)
                        }
                        ))
                    }), T.choices && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        prevStep: a && a,
                        loading: r
                    })]
                })
            })
        };
        function Et(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function Lt(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function Zt(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        Lt(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        Lt(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function qt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    qt(e, t, r[t])
                }
                ))
            }
            return e
        }
        function Ft(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Et(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return Et(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Rt = g.Ry().shape({
            choice: g.Z_().required("This field is required")
        }).required()
          , Vt = function() {
            var e = Zt(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return n(!0),
                            e.prev = 3,
                            e.t0 = Ft,
                            e.next = 7,
                            (0,
                            O.QL)([{
                                key: "plan_to_invest",
                                value: K(t)
                            }], r);
                        case 7:
                            return e.t1 = e.sent,
                            o = (0,
                            e.t0)(e.t1, 2),
                            s = o[0],
                            l = o[1],
                            e.abrupt("return", [s, l]);
                        case 14:
                            return e.prev = 14,
                            e.t2 = e.catch(3),
                            c = Ft((0,
                            $.Z)(e.t2), 3),
                            u = c[0],
                            d = c[1],
                            f = c[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: u,
                                message: d,
                                source: f
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 21:
                            return e.prev = 21,
                            n(!1),
                            e.finish(21);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 14, 21, 24]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , zt = function(e) {
            var t, r = e.loading, i = e.nextStep, a = e.prevStep, o = e.setLoading, l = Ft((0,
            s.FV)(L.F), 2), c = l[0], u = l[1], d = Ft((0,
            s.FV)(A.D), 2), f = d[0], m = d[1], p = (null === f || void 0 === f || null === (t = f.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", v = (0,
            I.ie)(p), h = (0,
            x.useRouter)(), g = function() {
                return h.push("/onboarding-error")
            }, w = (0,
            y.cI)({
                resolver: (0,
                j.X)(Rt),
                defaultValues: {
                    choice: c
                }
            }), N = w.handleSubmit, O = w.register, k = w.formState.errors, C = function() {
                var e = Zt(b().mark((function e(t) {
                    var r, n, a;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return u(t.choice),
                                e.t0 = Ft,
                                e.next = 4,
                                Vt(t.choice, f, o, $.bS, g);
                            case 4:
                                e.t1 = e.sent,
                                r = (0,
                                e.t0)(e.t1, 2),
                                n = r[0],
                                a = r[1],
                                m(Ut({}, f, {
                                    onboardingApplication: n,
                                    hubSpotContactId: a
                                })),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.ONBOARDING_PLANNED_INVESTMENTS),
                                i && i();
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-planned-investments",
                    name: "Onboarding - Planned Investments",
                    onSubmit: N(C),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: v.map((function(e, t) {
                            var r = v.length - 1 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(r ? "" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(ht.r, {
                                    name: "choice",
                                    id: e.hubspotKey,
                                    labelText: e.label,
                                    value: e.hubspotKey,
                                    register: O
                                })
                            }, t)
                        }
                        ))
                    }), k && (null === k || void 0 === k ? void 0 : k.choice) && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        prevStep: a && a,
                        loading: r
                    })]
                })
            })
        };
        function Qt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function Bt(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function Ht(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise((function(n, i) {
                    var a = e.apply(t, r);
                    function o(e) {
                        Bt(a, n, i, o, s, "next", e)
                    }
                    function s(e) {
                        Bt(a, n, i, o, s, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
        }
        function Gt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    Gt(e, t, r[t])
                }
                ))
            }
            return e
        }
        function Wt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, i, a = [], o = !0, s = !1;
                    try {
                        for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        i = l
                    } finally {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Qt(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return Qt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Yt = g.Ry().shape({
            choices: g.IX().min(1, "Selection Required")
        }).required()
          , $t = function() {
            var e = Ht(b().mark((function e(t, r, n, i, a) {
                var o, s, l, c, u, d, f;
                return b().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return n(!0),
                            e.prev = 3,
                            e.t0 = Wt,
                            e.next = 7,
                            (0,
                            O.QL)([{
                                key: "is_qualified_purchaser",
                                value: t.join(";")
                            }], r);
                        case 7:
                            return e.t1 = e.sent,
                            o = (0,
                            e.t0)(e.t1, 2),
                            s = o[0],
                            l = o[1],
                            e.abrupt("return", [s, l]);
                        case 14:
                            return e.prev = 14,
                            e.t2 = e.catch(3),
                            c = Wt((0,
                            $.Z)(e.t2), 3),
                            u = c[0],
                            d = c[1],
                            f = c[2],
                            (0,
                            $.S3)(e.t2),
                            i({
                                code: u,
                                message: d,
                                source: f
                            }),
                            a(),
                            e.abrupt("return", []);
                        case 21:
                            return e.prev = 21,
                            n(!1),
                            e.finish(21);
                        case 24:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[3, 14, 21, 24]])
            }
            )));
            return function(t, r, n, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , Xt = function(e) {
            var t, r = e.loading, i = e.setLoading, a = e.nextStep, o = e.prevStep, l = e.toggleQualifiedPurchaser, c = Wt((0,
            s.FV)(A.D), 2), u = c[0], d = c[1], f = Wt((0,
            s.FV)(C.H), 2), m = f[0], p = f[1], v = (null === u || void 0 === u || null === (t = u.onboardingApplication) || void 0 === t ? void 0 : t.app_version) || "5", h = (0,
            I.nN)(v), g = (0,
            x.useRouter)(), N = function() {
                return g.push("/onboarding-error")
            }, O = (0,
            y.cI)({
                resolver: (0,
                j.X)(Yt),
                defaultValues: {
                    choices: m
                }
            }), k = O.handleSubmit, T = O.register, P = O.setValue, M = O.formState.errors, D = O.watch, E = (w(P, D, parseInt(v) >= 4 ? "i_am_not_a_qualified_purchaser" : "none_of_the_above"),
            function() {
                var e = Ht(b().mark((function e(t) {
                    var r, n, o, s;
                    return b().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.t0 = Wt,
                                e.next = 3,
                                $t(t.choices, u, i, $.bS, N);
                            case 3:
                                e.t1 = e.sent,
                                r = (0,
                                e.t0)(e.t1, 2),
                                n = r[0],
                                o = r[1],
                                d(Kt({}, u, {
                                    onboardingApplication: n,
                                    hubSpotContactId: o
                                })),
                                p(t.choices),
                                s = (0,
                                I.$B)(t.choices, v),
                                null === l || void 0 === l || l(s),
                                _.$.onboardingEvent(n.cognitoUserId, n.hubSpotContactId, S.Z.ONBOARDING_QUALIFIED_PURCHASER),
                                null === a || void 0 === a || a();
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }());
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("form", {
                    id: "onboarding-qualified-purchaser",
                    name: "Onboarding - Qualified Purchaser",
                    onSubmit: k(E),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-full max-w-[870px]",
                        children: h.map((function(e, t) {
                            var r = h.length
                              , i = r - 1 === t
                              , a = r - 2 === t;
                            return (0,
                            n.jsx)("div", {
                                className: "flex flex-col justify-center py-4 ".concat(i ? "" : a ? "border-0 border-b border-solid border-grey-50" : "border-0 border-b border-solid border-grey-10"),
                                children: (0,
                                n.jsx)(X.Z, {
                                    register: T,
                                    labelText: e.label,
                                    name: "choices",
                                    id: "checkbox_".concat(t, "_id"),
                                    value: e.hubspotKey,
                                    inputStyles: "!mt-2"
                                })
                            }, t)
                        }
                        ))
                    }), M.choices && (0,
                    n.jsx)(ne, {}), (0,
                    n.jsx)(ee, {
                        prevStep: o && o,
                        loading: r
                    })]
                })
            })
        };
        function Jt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function er(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function tr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    er(e, t, r[t])
                }
                ))
            }
            return e
        }
        function rr(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Jt(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Jt(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return Jt(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var nr = function(e, t) {
            var r = [];
            return r.push({
                key: "contactInfo",
                title: "Let us know how to contact you.",
                subTitle: "",
                content: function(e) {
                    return (0,
                    n.jsx)($e, tr({}, e))
                }
            }, {
                key: "accreditedInfo",
                title: "Are you an accredited investor?",
                directions: "Select all that apply",
                subTitle: (0,
                n.jsx)(be, {
                    contentKey: "accreditedInfo",
                    introText: " To be eligible for 10 East membership consideration, you must meet one or more",
                    linkText: "SEC Accredited Investor criteria.",
                    showModal: e
                }),
                content: function(e) {
                    return (0,
                    n.jsx)(_e, tr({}, e))
                }
            }, {
                key: "qualifiedPurchaser",
                title: "Are you a Qualified Purchaser?",
                directions: "Select all that apply",
                subTitle: (0,
                n.jsx)(be, {
                    contentKey: "qualifiedPurchaser",
                    introText: "To be eligible for 10 East membership consideration, you must meet one or more",
                    linkText: "SEC Qualified Purchaser criteria.",
                    showModal: e
                }),
                content: function(e) {
                    return (0,
                    n.jsx)(Xt, tr({}, e))
                }
            }, {
                key: "currentNetWorthInfo",
                title: "What is your current net worth (jointly with your spouse, if married)?",
                subTitle: "",
                directions: "Select One",
                content: function(e) {
                    return (0,
                    n.jsx)(St, tr({}, e))
                }
            }, {
                key: "pastInvestments",
                title: "Have you invested in the following areas in the past?",
                subTitle: "",
                directions: "Select all that apply",
                content: function(e) {
                    return (0,
                    n.jsx)(Dt, tr({}, e))
                }
            }),
            parseInt(t || "5") >= 5 ? r.push({
                key: "plannedInvestments",
                title: "What is your typical investment amount in a private market opportunity?",
                subTitle: "",
                directions: "Select One",
                content: function(e) {
                    return (0,
                    n.jsx)(zt, tr({}, e))
                }
            }) : r.push({
                key: "plannedInvestments",
                title: "Approximately how much do you plan to invest in private markets over the next year?",
                subTitle: "(Whether through your advisors, existing network or other sources such as 10 East.)",
                directions: "Select One",
                content: function(e) {
                    return (0,
                    n.jsx)(zt, tr({}, e))
                }
            }),
            r.push({
                key: "freeFormComment",
                title: "Please share any additional information that may help our evaluation process.",
                subTitle: "(e.g., LinkedIn profile, investing experience or goals)",
                content: function(e) {
                    return (0,
                    n.jsx)(vt, tr({}, e))
                }
            }),
            r
        }
          , ir = function() {
            return {
                key: "scheduleCall",
                title: "",
                subTitle: "",
                content: function(e) {
                    return (0,
                    n.jsx)(he, {
                        prevStep: e.prevStep
                    })
                }
            }
        }
          , ar = function(e) {
            return {
                key: "qualifiedClient",
                title: "Are you a Qualified Client?",
                directions: "Select all that apply",
                subTitle: (0,
                n.jsx)(be, {
                    contentKey: "qualifiedClient",
                    introText: "To be eligible for 10 East membership consideration, you must meet one or more",
                    linkText: "SEC Qualified Client criteria.",
                    showModal: e
                }),
                content: function(e) {
                    return (0,
                    n.jsx)(fe, tr({}, e))
                }
            }
        }
          , or = function(e, t) {
            return [{
                key: "investorType",
                title: (0,
                n.jsx)(a.Z, {
                    name: "Investor Type Question Header"
                }),
                subTitle: "",
                centeredHeader: !0,
                content: function(e) {
                    return (0,
                    n.jsx)(v, tr({}, e))
                }
            }].concat(rr(nr(e, t)))
        }
    },
    10699: function(e, t, r) {
        "use strict";
        r.d(t, {
            o: function() {
                return l
            }
        });
        var n = r(67294)
          , i = r(11163)
          , a = r(44775)
          , o = r(98258)
          , s = r(74567)
          , l = function(e) {
            var t, r = (0,
            i.useRouter)(), l = (0,
            s.Z)(), c = (0,
            n.useState)([]), u = c[0], d = c[1], f = (0,
            n.useState)(!1), m = f[0], p = f[1], v = (0,
            n.useState)(!1), h = v[0], b = v[1], y = (0,
            n.useState)(!1), x = y[0], g = y[1], j = Boolean(null === r || void 0 === r || null === (t = r.query) || void 0 === t ? void 0 : t.spoblfpc);
            (0,
            n.useEffect)((function() {
                l && ((null === l || void 0 === l ? void 0 : l.type) && "ind" === (null === l || void 0 === l ? void 0 : l.type) ? d((0,
                a.kM)(e)) : d((0,
                a.gT)(e)))
            }
            ), [l]);
            var w = function(e, t) {
                return p(t),
                e
            }
              , N = function(t, r) {
                b(r);
                var n = (0,
                o.n8)(t, (function() {
                    return (0,
                    a.Uu)(e)
                }
                ), !r, "qualifiedPurchaser");
                return n = (0,
                o.n8)(n, a.LB, r && !j, "freeFormComment")
            }
              , I = function(e, t) {
                return g(t),
                (0,
                o.n8)(e, a.LB, t && !j, "freeFormComment")
            };
            return {
                steps: u,
                setSteps: d,
                isAI: m,
                isQP: h,
                isQC: x,
                _toggleAccreditedInvestor: w,
                toggleAccreditedInvestor: function(e) {
                    var t = w(u, e);
                    d(t)
                },
                _toggleQualifiedPurchaser: N,
                toggleQualifiedPurchaser: function(e) {
                    var t = N(u, e);
                    d(t)
                },
                _toggleQualifiedClient: I,
                toggleQualifiedClient: function(e) {
                    var t = I(u, e);
                    d(t)
                },
                removeNonIndividualSteps: function(t) {
                    d(t ? (0,
                    o.Ll)((0,
                    a.gT)(e), "verifyEmail") : (0,
                    a.gT)(e))
                }
            }
        }
    },
    74567: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return i
            }
        });
        var n = r(11163);
        function i() {
            var e = (0,
            n.useRouter)();
            return !(/\[.+\]/.test(e.route) || /\?./.test(e.asPath)) || Object.keys(e.query).length > 0 ? e.query : null
        }
    },
    51828: function(e, t, r) {
        "use strict";
        r.d(t, {
            P: function() {
                return n
            }
        });
        var n = (0,
        r(2804).cn)({
            key: "inviteAtom",
            default: {}
        })
    },
    22734: function(e, t, r) {
        "use strict";
        r.d(t, {
            L: function() {
                return c
            }
        });
        var n = r(34051)
          , i = r.n(n)
          , a = r(67294)
          , o = r(55479)
          , s = r(23730);
        function l(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (c) {
                return void r(c)
            }
            s.done ? t(l) : Promise.resolve(l).then(n, i)
        }
        function c(e) {
            var t = (0,
            a.useState)()
              , r = t[0]
              , n = t[1];
            return (0,
            a.useMemo)((function() {
                var t = function() {
                    var t, r = (t = i().mark((function t() {
                        var r;
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    o.sL)(e);
                                case 2:
                                    r = t.sent,
                                    n(r);
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
                          , r = arguments;
                        return new Promise((function(n, i) {
                            var a = t.apply(e, r);
                            function o(e) {
                                l(a, n, i, o, s, "next", e)
                            }
                            function s(e) {
                                l(a, n, i, o, s, "throw", e)
                            }
                            o(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return r.apply(this, arguments)
                    }
                }();
                t().catch((function(e) {
                    (0,
                    s.S3)(e)
                }
                ))
            }
            ), [e]),
            r
        }
    },
    29715: function(e) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iI0ZGQzcwRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjkwODMgMTUuNzE4NkMyMi44MjU4IDE0LjA4NzQgMjUuMTc0NCAxNC4wODc0IDI2LjA5MTkgMTUuNzE4NkwzMi43ODgyIDI3LjYyMzNDMzMuNjg4MiAyOS4yMjMxIDMyLjUzMiAzMS4xOTk5IDMwLjY5NjUgMzEuMTk5OUgxNy4zMDM3QzE1LjQ2ODEgMzEuMTk5OSAxNC4zMTIgMjkuMjIzMSAxNS4yMTIgMjcuNjIzM0wyMS45MDgzIDE1LjcxODZaTTI1LjIgMjcuNkMyNS4yIDI4LjI2MjggMjQuNjYyNyAyOC44IDI0IDI4LjhDMjMuMzM3MyAyOC44IDIyLjggMjguMjYyOCAyMi44IDI3LjZDMjIuOCAyNi45MzczIDIzLjMzNzMgMjYuNCAyNCAyNi40QzI0LjY2MjcgMjYuNCAyNS4yIDI2LjkzNzMgMjUuMiAyNy42Wk0yNCAxOEMyMy4zMzczIDE4IDIyLjggMTguNTM3MyAyMi44IDE5LjJWMjIuOEMyMi44IDIzLjQ2MjggMjMuMzM3MyAyNCAyNCAyNEMyNC42NjI3IDI0IDI1LjIgMjMuNDYyOCAyNS4yIDIyLjhWMTkuMkMyNS4yIDE4LjUzNzMgMjQuNjYyNyAxOCAyNCAxOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
    },
    31038: function(e, t, r) {
        "use strict";
        var n = r(67294);
        const i = n.forwardRef((function({title: e, titleId: t, ...r}, i) {
            return n.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: i,
                "aria-labelledby": t
            }, r), e ? n.createElement("title", {
                id: t
            }, e) : null, n.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 4.5l7.5 7.5-7.5 7.5"
            }))
        }
        ));
        t.Z = i
    }
}]);
//# sourceMappingURL=8001-e0faccffb8a1b777.js.map
