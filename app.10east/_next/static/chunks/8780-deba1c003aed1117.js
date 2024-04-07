(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8780], {
    68780: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return K
            }
        });
        var r = n(85893)
          , i = n(93666)
          , l = n(67294)
          , s = n(91650)
          , a = n(23765)
          , o = n(23730)
          , d = n(62128)
          , c = n(97517)
          , x = n(25675)
          , m = n(41664)
          , u = n(75012)
          , h = n(88746)
          , f = n(43879)
          , p = n.n(f)
          , j = n(73155)
          , v = n.n(j)
          , g = n(86080)
          , b = n.n(g)
          , y = function() {
            var e = (0,
            i.a)().user
              , t = (0,
            l.useState)(!0)
              , n = t[0]
              , s = t[1];
            return (0,
            r.jsxs)(h.Z, {
                onClose: function() {
                    s(!1)
                },
                open: n,
                children: [(0,
                r.jsx)("div", {
                    className: " text-center",
                    children: (0,
                    r.jsx)(x.default, {
                        src: b(),
                        alt: "10 East logo",
                        width: "42",
                        height: "42",
                        layout: "fixed",
                        "data-cy": "10-east-logo"
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "text-charcoal max-w-[685px]",
                    children: [(0,
                    r.jsxs)("h1", {
                        className: "text-3xl font-normal font-amiri",
                        children: ["Hi ", e.given_name, ","]
                    }), (0,
                    r.jsx)("p", {
                        className: "mt-4 text-md font-light",
                        children: "As a valued member of 10 East, you can extend membership invitations to your network."
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-row items-center mt-4",
                        children: [(0,
                        r.jsx)("div", {
                            className: "w-[50%] h-px bg-silver-200 -mr-[2px]"
                        }), (0,
                        r.jsx)(x.default, {
                            src: p(),
                            width: 35,
                            height: 34,
                            "aria-hidden": "true",
                            alt: "",
                            className: "",
                            layout: "raw"
                        }), (0,
                        r.jsx)("div", {
                            className: "w-[50%] h-px bg-silver-200 -mt-px -ml-[2px]"
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "text-md font-light mt-4",
                        children: "Invited members will benefit from:"
                    }), (0,
                    r.jsx)("ul", {
                        className: "list-none font-medium text-md mt-4 mb-8 space-y-4",
                        children: ["Waived upfront membership dues", "Opportunity to invest in live 10 East offerings", "Access to 10 East network via our member concierge", "Member-only in-person and virtual events"].map((function(e, t) {
                            return (0,
                            r.jsxs)("li", {
                                children: [(0,
                                r.jsx)(x.default, {
                                    src: v(),
                                    width: 14,
                                    height: 11,
                                    "aria-hidden": "true",
                                    alt: "",
                                    className: "ml-1 mr-[21px]",
                                    layout: "raw"
                                }), e]
                            }, t)
                        }
                        ))
                    }), (0,
                    r.jsx)(m.default, {
                        href: "/invite-a-member",
                        children: (0,
                        r.jsx)("a", {
                            children: (0,
                            r.jsx)(u.Z, {
                                "data-cy": "invite-a-member-modal-button",
                                text: "Invite a Member",
                                type: "button",
                                size: "md",
                                className: "w-full"
                            })
                        })
                    })]
                })]
            })
        }
          , w = function() {
            var e = (0,
            i.a)()
              , t = e.user
              , n = e.userId
              , x = (0,
            l.useState)(!1)
              , m = x[0]
              , u = x[1];
            return (0,
            l.useEffect)((function() {
                if (n) {
                    if ("true" === sessionStorage.getItem("redirectingPage"))
                        return void sessionStorage.removeItem("redirectingPage");
                    (0,
                    s.eJ)(n, {
                        eq: c.gR.APPROVED.value
                    }).then((function(e) {
                        var t = e.map((function(e) {
                            return !0 === (null === e || void 0 === e ? void 0 : e.referMemberPopup) ? null : e
                        }
                        )).filter((function(e) {
                            return null != e
                        }
                        ));
                        0 !== t.length && (u(!0),
                        t.forEach((function(e) {
                            (null === e || void 0 === e ? void 0 : e.id) && d.t.userMutation({
                                query: a.Gi,
                                input: {
                                    id: null === e || void 0 === e ? void 0 : e.id,
                                    referMemberPopup: "true"
                                }
                            }).catch((function(e) {
                                (0,
                                o.S3)(e)
                            }
                            ))
                        }
                        )))
                    }
                    ))
                }
            }
            ), [n]),
            (0,
            r.jsx)(r.Fragment, {
                children: t && m && (0,
                r.jsx)(y, {})
            })
        }
          , N = n(11163)
          , I = n(86010)
          , M = n(18968)
          , k = n(96445)
          , C = n(44149)
          , D = n(34051)
          , T = n.n(D)
          , Z = n(65820)
          , O = n(13454)
          , A = n(72510)
          , E = n(66610)
          , z = n(13245)
          , P = n(99317)
          , L = n(19377)
          , S = n(30423)
          , U = n(45342);
        function Q(e, t, n, r, i, l, s) {
            try {
                var a = e[l](s)
                  , o = a.value
            } catch (d) {
                return void n(d)
            }
            a.done ? t(o) : Promise.resolve(o).then(r, i)
        }
        function H(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var l = e.apply(t, n);
                    function s(e) {
                        Q(l, r, i, s, a, "next", e)
                    }
                    function a(e) {
                        Q(l, r, i, s, a, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        var F = function() {
            var e = (0,
            N.useRouter)()
              , t = (0,
            i.a)()
              , n = t.user
              , l = t.userAuthContext
              , s = (0,
            P.ZS)()
              , a = s.activeProfile
              , o = s.profiles
              , d = s.selectProfile
              , c = function() {
                var t = H(T().mark((function t() {
                    return T().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.push("/account/profiles");
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
              , x = function() {
                var e = H(T().mark((function e() {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                l.signOut();
                            case 2:
                                S.$.removeUserProperties(),
                                window.location.href = "/?signOut=1";
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
            return n ? (0,
            r.jsx)(A.v, {
                as: "div",
                className: "relative inline-block text-left w-full xl:w-fit",
                "data-cy": "nav-menu",
                children: function(e) {
                    var t = e.open;
                    return (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsxs)(A.v.Button, {
                            className: (0,
                            I.Z)("inline-flex w-full justify-center items-center text-left mb-1.5 xl:mb-0 px-7 py-[16px] xl:px-4 xl:pt-[17px] xl:pb-[17px]", "text-sm font-medium text-white bg-transparent border-0", "group"),
                            "data-cy": "nav-dropdown-button",
                            "data-testid": "nav-dropdown-button",
                            "aria-label": "Account menu",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "block xl:hidden w-full",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-xs font-medium font-franklin uppercase text-off-white-100",
                                    children: "Account"
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-row justify-between mt-2.5",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "text-off-white-100 text-md font-bold leading-normal tracking-normal truncate max-w-[14rem]",
                                            title: n.name,
                                            children: n.name
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "text-off-white-100 text-md font-light leading-snug tracking-normal truncate max-w-[14rem]",
                                            title: n.email,
                                            children: n.email
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        children: [!!t && (0,
                                        r.jsx)(E.Z, {
                                            className: "w-5 h-5"
                                        }), !t && (0,
                                        r.jsx)(z.Z, {
                                            className: "w-5 h-5"
                                        })]
                                    })]
                                })]
                            }), (0,
                            r.jsx)("svg", {
                                className: "hidden xl:block group-active:opacity-80 transition-all duration-200",
                                width: "26",
                                height: "26",
                                viewBox: "0 0 26 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                r.jsx)("path", {
                                    d: "M3.82805 20.7383C6.53689 19.2072 9.6664 18.3333 13 18.3333C16.3336 18.3333 19.4631 19.2072 22.172 20.7383M17 10.3333C17 12.5425 15.2091 14.3333 13 14.3333C10.7909 14.3333 9 12.5425 9 10.3333C9 8.12419 10.7909 6.33333 13 6.33333C15.2091 6.33333 17 8.12419 17 10.3333ZM25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z",
                                    stroke: "#FBFBFB",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })]
                        }), (0,
                        r.jsx)(Z.M, {
                            children: t && (0,
                            r.jsx)(O.E.div, {
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                variants: U.er,
                                children: (0,
                                r.jsxs)(A.v.Items, {
                                    static: !0,
                                    className: (0,
                                    I.Z)("absolute right-0 w-full xl:w-[236px] xl:mt-[1px] xl:-mr-0.5 origin-top-right", "styled-dropdown"),
                                    "data-cy": "nav-dropdown-menu",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "hidden xl:block mt-3.5 px-[1.1875rem]",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "styled-dropdown-label",
                                            children: "Account"
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "mt-1.5",
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "text-charcoal-100 text-md font-bold leading-normal tracking-normal truncate max-w-[12rem]",
                                                title: n.name,
                                                "data-cy": "member-name",
                                                children: n.name
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "text-charcoal-100 text-sm font-light leading-snug tracking-normal truncate max-w-[12rem]",
                                                title: n.email,
                                                "data-cy": "member-email",
                                                children: n.email
                                            })]
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "hidden xl:block my-4 w-full h-[1px] bg-silver-300"
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "mt-3.5 px-[1.1875rem]",
                                        "data-cy": "nav-member-profiles",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "styled-dropdown-label",
                                            children: "Your Profiles"
                                        })
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "max-h-[185px] overflow-y-auto",
                                        children: null === o || void 0 === o ? void 0 : o.map((function(e) {
                                            return (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)("span", {
                                                    className: (0,
                                                    I.Z)({
                                                        "styled-dropdown-item cursor-pointer": !0,
                                                        "!font-semibold": e.id === (null === a || void 0 === a ? void 0 : a.id)
                                                    }),
                                                    onClick: function() {
                                                        return function(e) {
                                                            setTimeout((function() {
                                                                d(e.id)
                                                            }
                                                            ), 100),
                                                            S.$.event(L.Z.SELECT_PROFILE, null, {
                                                                profile_id: e.id
                                                            })
                                                        }(e)
                                                    },
                                                    "data-cy": "nav-member-profile: ".concat(e.name),
                                                    children: e.name
                                                })
                                            }, e.id)
                                        }
                                        ))
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "group",
                                        children: (0,
                                        r.jsx)("span", {
                                            className: "styled-dropdown-item cursor-pointer",
                                            onClick: c,
                                            "data-cy": "nav-add-member-profile",
                                            children: "+ Add Profile"
                                        })
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "pt-2 xl:pt-4 py-4 pb-2",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "my-2 mt-[-1px] w-full h-[1px] bg-silver-300"
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/account",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "account-overview-dropdown",
                                                        children: "Account Overview"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/account/membership",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "membership-dropdown",
                                                        children: "Membership"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/account/profiles",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "investment-profiles-dropdown",
                                                        children: "Investment Profiles"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/account/investments",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "portfolio-dropdown",
                                                        children: "Portfolio"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/account/documents/overview",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "documents-dropdown",
                                                        children: "Documents"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "block my-2 w-full h-[1px] bg-silver-300"
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "group",
                                                children: (0,
                                                r.jsx)(m.default, {
                                                    href: "/invite-a-member",
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "styled-dropdown-item",
                                                        "data-cy": "invite-a-member-dropdown",
                                                        children: "Invite a Member"
                                                    })
                                                })
                                            })
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "block my-2 w-full h-[1px] bg-silver-300"
                                        }), (0,
                                        r.jsx)(A.v.Item, {
                                            children: (0,
                                            r.jsx)("button", {
                                                onClick: function() {
                                                    return x()
                                                },
                                                "data-cy": "nav-dropdown-signout",
                                                className: "styled-dropdown-item border-0 bg-transparent",
                                                children: "Sign Out"
                                            })
                                        })]
                                    })]
                                })
                            }, "nav-dropdown")
                        })]
                    })
                }
            }) : null
        }
          , R = function(e) {
            var t = e.href
              , n = e.txt
              , i = e.classes
              , l = e.isDropdown
              , s = e.dropdownOpen
              , a = e.selected
              , o = e.dataCy
              , d = null;
            l && (d = function(e) {
                return e ? (0,
                r.jsx)(E.Z, {
                    className: "group-hover:text-primary-1 transition duration-200 -mr-1 ml-2 mb-1 h-3 w-3 text-white align-top",
                    "aria-hidden": "true"
                }) : (0,
                r.jsx)(z.Z, {
                    className: "group-hover:text-primary-1 transition duration-200 -mr-1 ml-2 mb-1 h-3 w-3 text-white align-top",
                    "aria-hidden": "true"
                })
            }(null !== s && void 0 !== s && s));
            var c = a ? "text-primary-1" : s ? "font-bold" : ""
              , x = (0,
            r.jsxs)("a", {
                tabIndex: 0,
                className: (0,
                I.Z)(null === i || void 0 === i ? void 0 : i.anchor, "flex my-auto h-full items-center pt-[21px] pb-[18px] pr-10 cursor-pointer py-8", "font-amiri text-lg 1xl:text-base text-off-white-100 xl:font-normal leading-6", "group xs:px-6 xs:text-xl", c),
                "data-cy": o,
                children: [n, " ", d]
            });
            return t && (x = (0,
            r.jsx)(m.default, {
                href: t,
                children: x
            })),
            (0,
            r.jsx)("div", {
                className: (0,
                I.Z)("xl:flex xl:flex-col xl:items-start w-full xl:w-max h-full", null === i || void 0 === i ? void 0 : i.container),
                children: x
            })
        }
          , B = function(e) {
            var t = e.sectionId
              , n = e.name
              , i = e.menuItems
              , l = e.classes
              , s = (0,
            N.useRouter)().pathname;
            return (0,
            r.jsx)(A.v, {
                as: "div",
                className: (0,
                I.Z)("relative inline-block w-full text-left xl:w-fit", l),
                children: function(e) {
                    var l = e.open;
                    return (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(A.v.Button, {
                            className: (0,
                            I.Z)("w-full", "bg-transparent border-0", "group", "h-full"),
                            "data-cy": "nav-".concat(t, "-button"),
                            "aria-label": "".concat(n, " menu"),
                            children: (0,
                            r.jsx)(R, {
                                txt: n,
                                isDropdown: !0,
                                dropdownOpen: l
                            })
                        }), (0,
                        r.jsx)(Z.M, {
                            children: l && (0,
                            r.jsx)(O.E.div, {
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                variants: (0,
                                U.Ru)(),
                                children: (0,
                                r.jsx)(A.v.Items, {
                                    static: !0,
                                    className: (0,
                                    I.Z)("xl:absolute min-w-[320px] list-none bg-charcoal-100 text-off-white-100 mt-px px-7 xl:px-8 xl:pt-4 pb-4 xl:pb-4 xl:shadow-2xl"),
                                    as: "ul",
                                    "data-cy": "nav-".concat(t, "-menu"),
                                    children: i.map((function(e) {
                                        return (0,
                                        r.jsx)(A.v.Item, {
                                            className: (0,
                                            I.Z)("border-0 xl:border-t xl:border-silver-100 xl:first:!border-t-0 xl:border-solid first:pt-[5px] last:pb-[9px] py-3 xl:!py-4 text-left xl:text-left"),
                                            as: "li",
                                            children: (0,
                                            r.jsx)(m.default, {
                                                href: e.href,
                                                children: (0,
                                                r.jsxs)("a", {
                                                    className: "cursor-pointer transition-all hover:text-primary-1 active:opacity-70",
                                                    children: [(0,
                                                    r.jsx)("div", {
                                                        className: "xs:text-lg text-md font-normal font-amiri ".concat(s === e.href ? "text-primary-1" : ""),
                                                        role: "none",
                                                        "data-cy": "nav-".concat(e.title.toLowerCase().replace(" ", "-"), "-item"),
                                                        children: e.title
                                                    }), (0,
                                                    r.jsx)("div", {
                                                        className: "pt-1 text-xs font-light font-franklin text-off-white-100 xl:text-xs",
                                                        role: "none"
                                                    })]
                                                })
                                            })
                                        }, e.href + e.title)
                                    }
                                    ))
                                })
                            }, "nav-".concat(t, "-menu"))
                        })]
                    })
                }
            })
        }
          , G = n(916)
          , J = n.n(G)
          , Y = function() {
            var e = [{
                title: "Investment Philosophy",
                href: "/investment-philosophy"
            }, {
                title: "Sourcing and Due Diligence",
                href: "/sourcing-and-due-diligence"
            }, {
                title: "Track Record",
                href: "/track-record"
            }]
              , t = [{
                title: "Events",
                href: "/events"
            }, {
                title: "Member Concierge",
                href: "/concierge"
            }]
              , n = [{
                title: "About",
                href: "/about"
            }, {
                title: "Team",
                href: "/team"
            }, {
                title: "How It Works",
                href: "/how-it-works"
            }, {
                title: "Member Benefits",
                href: "/member-benefits"
            }, {
                title: "FAQ",
                href: "/faq"
            }]
              , s = (0,
            i.a)().user
              , a = (0,
            l.useState)(!1)
              , o = a[0]
              , d = a[1]
              , c = (0,
            N.useRouter)().pathname
              , u = (0,
            r.jsx)(M.V, {
                open: o,
                onClose: function() {
                    return d(!1)
                },
                className: (0,
                I.Z)("bg-charcoal-100 fixed inset-0 z-[100] h-full items-center overflow-y-scroll flex xl:hidden"),
                children: (0,
                r.jsx)(M.V.Panel, {
                    className: (0,
                    I.Z)("m-0 flex grow list-none flex-col items-start xl:px-8 mt-[120px] min-h-full"),
                    as: "ul",
                    children: (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(R, {
                            txt: "Offerings",
                            href: "/offerings",
                            classes: {
                                anchor: "mb-0 border-0 border-solid border-b-1 border-t-1 border-silver-100 w-full"
                            },
                            selected: "/offerings" === c,
                            dataCy: "offerings-nav"
                        }), (0,
                        r.jsx)(B, {
                            sectionId: "investment",
                            name: "Investment Process",
                            menuItems: e,
                            classes: "border-0 border-solid border-b-1 border-silver-100"
                        }), (0,
                        r.jsx)(B, {
                            sectionId: "community",
                            name: "Community",
                            menuItems: t
                        }), (0,
                        r.jsx)(R, {
                            txt: "Insights",
                            href: "/insights",
                            classes: {
                                anchor: "mb-0 border-0 border-solid border-b-1 border-t-1 border-silver-100 w-full"
                            },
                            selected: "/insights" === c,
                            dataCy: "insights-nav"
                        }), (0,
                        r.jsx)(B, {
                            sectionId: "our-story",
                            name: "Our Story",
                            menuItems: n
                        }), (0,
                        r.jsx)(R, {
                            txt: "Invite a Member",
                            href: "/invite-a-member",
                            classes: {
                                anchor: "mb-0 border-0 border-solid border-t-1 border-b-1 border-silver-100 w-full"
                            },
                            selected: "/invite-a-member" === c,
                            dataCy: "invite-a-member-nav"
                        }), (0,
                        r.jsx)(F, {})]
                    })
                })
            })
              , h = (0,
            r.jsxs)("div", {
                role: "button",
                "aria-expanded": !0,
                tabIndex: 0,
                onClick: function() {
                    return d((function(e) {
                        return !e
                    }
                    ))
                },
                className: "inline-flex cursor-pointer items-center p-2 pl-6 focus:outline-none xl:hidden",
                children: [(0,
                r.jsxs)("span", {
                    className: "sr-only",
                    children: ["`$", o ? "hide" : "show", " main menu`"]
                }), o ? (0,
                r.jsx)(k.Z, {
                    width: 26
                }) : (0,
                r.jsx)(C.Z, {
                    width: 26
                })]
            });
            return s ? (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(w, {}), (0,
                r.jsx)("div", {
                    className: "h-[60px]"
                }), (0,
                r.jsxs)("nav", {
                    className: "fixed top-0 left-0 right-0 flex flex-wrap border-0 border-solid bg-charcoal-100 border-b-[1px] border-silver-100 text-off-white-100 z-[120] min-h-[60px]",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex w-full items-center justify-between px-4 h-[60px] xl:container xl:mx-auto",
                        children: [(0,
                        r.jsx)("div", {
                            className: "h-full basis-1 pr-8",
                            children: (0,
                            r.jsx)(m.default, {
                                href: "/",
                                children: (0,
                                r.jsx)("a", {
                                    className: "flex h-full items-center justify-start xl:justify-left",
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "relative ml-3 py-auto w-[92px] h-[14px] md:w-[126px] md:h-[19px] xl:ml-0",
                                        children: (0,
                                        r.jsx)(x.default, {
                                            src: J(),
                                            layout: "fill",
                                            objectFit: "cover",
                                            alt: "10 East",
                                            "data-cy": "10-east-logo"
                                        })
                                    })
                                })
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "hidden h-full basis-2/5 xl:flex",
                            children: [(0,
                            r.jsx)(R, {
                                href: "/offerings",
                                txt: "Offerings",
                                selected: "/offerings" === c,
                                dataCy: "offerings-nav"
                            }), (0,
                            r.jsx)(B, {
                                sectionId: "investment",
                                name: "Investment Process",
                                menuItems: e
                            }), (0,
                            r.jsx)(B, {
                                sectionId: "community",
                                name: "Community",
                                menuItems: t
                            }), (0,
                            r.jsx)(R, {
                                txt: "Insights",
                                href: "/insights",
                                selected: "/insights" === c,
                                dataCy: "insights-nav"
                            }), (0,
                            r.jsx)(B, {
                                sectionId: "our-story",
                                name: "Our Story",
                                menuItems: n
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex h-full basis-2/5 justify-end",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "hidden xl:flex",
                                children: [(0,
                                r.jsx)(R, {
                                    href: "/invite-a-member",
                                    txt: "Invite a Member",
                                    selected: "/invite-a-member" === c,
                                    dataCy: "invite-a-member"
                                }), (0,
                                r.jsx)(F, {})]
                            }), h]
                        })]
                    }), u]
                })]
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
          , W = n(56849)
          , _ = n(2237);
        function q(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    q(e, t, n[t])
                }
                ))
            }
            return e
        }
        var X = function() {
            var e = (0,
            l.useState)(!1)
              , t = e[0]
              , n = e[1]
              , i = (0,
            l.useState)(!1)
              , s = i[0]
              , a = i[1]
              , o = (0,
            N.useRouter)()
              , d = "/login?redirectUrl=".concat(encodeURIComponent(o.asPath))
              , c = function() {
                return n((function(e) {
                    return !e
                }
                ))
            }
              , x = function() {
                a((function(e) {
                    return !e
                }
                ))
            }
              , u = (0,
            r.jsx)(W.mB, {
                width: 15,
                className: "-mb-[3px] align-baseline"
            })
              , h = [{
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-offerings",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " Offerings"]
                })
            }, {
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-philosophy",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " Philosophy"]
                })
            }, {
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-track-record",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " Track Record"]
                })
            }, {
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-team",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " Team"]
                })
            }, {
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-diligence",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " Diligence"]
                })
            }, {
                elementType: "button",
                type: "tertiary",
                onClick: x,
                dataCy: "locked-faqs",
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [u, " FAQs"]
                })
            }]
              , f = [{
                elementType: "link",
                url: d,
                children: "Login",
                dataCy: "nav-login"
            }, {
                elementType: "link",
                url: "/events",
                children: "Events",
                dataCy: "nav-events"
            }, {
                elementType: "link",
                url: "/insights",
                children: "Insights",
                dataCy: "nav-insights"
            }, {
                elementType: "link",
                url: "/onboarding",
                type: "highlighted",
                children: "Inquire",
                dataCy: "nav-inquire"
            }];
            return (0,
            r.jsxs)(P.JN, {
                context: "marketing",
                children: [(0,
                r.jsxs)("header", {
                    className: "sticky top-0 z-10 bg-new-black-primary font-amiri",
                    children: [(0,
                    r.jsxs)(W.W2, {
                        className: "flex items-center text-new-off-white-100",
                        verticalPadding: !0,
                        children: [(0,
                        r.jsx)("div", {
                            children: (0,
                            r.jsx)(m.default, {
                                href: "/",
                                passHref: !0,
                                children: (0,
                                r.jsx)("a", {
                                    className: "flex hover:text-new-gold-primary",
                                    children: (0,
                                    r.jsx)(W.TR, {
                                        width: 126,
                                        dataCy: "10-east-logo"
                                    })
                                })
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex items-center gap-4 md:gap-6 ml-auto leading-none uppercase",
                            children: [(0,
                            r.jsx)(W.zx, {
                                elementType: "link",
                                type: "highlighted",
                                size: {
                                    base: "sm",
                                    xl: "md"
                                },
                                url: "/onboarding",
                                className: "-my-2 xl:-my-5",
                                "data-cy": "header-inquire",
                                children: "Inquire"
                            }), (0,
                            r.jsx)(m.default, {
                                href: d,
                                passHref: !0,
                                children: (0,
                                r.jsx)("a", {
                                    className: "hidden md:inline hover:text-new-gold-primary",
                                    "data-cy": "member-login",
                                    children: "Login"
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: "-mb-[2px] hover:text-new-gold-primary cursor-pointer",
                                "data-cy": "menu-toggle",
                                title: "Show main menu",
                                onClick: c,
                                children: (0,
                                r.jsx)(C.Z, {
                                    width: 26
                                })
                            })]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: (0,
                        I.Z)("fixed inset-0 bg-charcoal-100/80 backdrop-blur-sm z-40 text-new-gray-100", {
                            hidden: !t,
                            block: t
                        }),
                        onClick: function(e) {
                            e.preventDefault(),
                            c()
                        },
                        children: (0,
                        r.jsx)("div", {
                            className: "h-full xl:h-auto bg-[#D1D1D1]",
                            onClick: function(e) {
                                e.stopPropagation()
                            },
                            "data-cy": "navigation-panel",
                            children: (0,
                            r.jsxs)(W.W2, {
                                verticalPadding: !0,
                                className: "flex flex-col gap-8 h-full xl:h-auto xl:py-10",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "grow-0 flex items-center",
                                    children: [(0,
                                    r.jsx)(m.default, {
                                        href: "/",
                                        passHref: !0,
                                        children: (0,
                                        r.jsx)("a", {
                                            children: (0,
                                            r.jsx)(W.TR, {
                                                width: 126
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("span", {
                                        className: "ml-auto cursor-pointer",
                                        title: "Hide main menu",
                                        onClick: c,
                                        children: (0,
                                        r.jsx)(k.Z, {
                                            width: 26
                                        })
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "grow flex flex-col xl:flex-row h-full xl:h-auto overflow-y-auto",
                                    children: [(0,
                                    r.jsxs)("nav", {
                                        className: "xl:order-2 xl:grow flex flex-col xl:flex-row gap-6 xl:gap-0 xl:items-start xl:pb-0",
                                        children: [(0,
                                        r.jsx)("ul", {
                                            className: "xl:order-2 xl:basis-2/5 flex flex-col gap-6 list-none border-dotted border-[#666666] border-0 border-b xl:border-b-0 xl:border-l pb-6 xl:pb-0 xl:pl-6",
                                            children: f.map((function(e, t) {
                                                return (0,
                                                r.jsx)("li", {
                                                    children: (0,
                                                    r.jsx)(W.zx, V({}, e, {
                                                        className: "w-full"
                                                    }))
                                                }, t)
                                            }
                                            ))
                                        }), (0,
                                        r.jsx)("ul", {
                                            className: "xl:order-1 xl:basis-3/5 flex flex-wrap gap-6 list-none pb-6 xl:pb-0 xl:px-6",
                                            children: h.map((function(e, t) {
                                                return (0,
                                                r.jsx)("li", {
                                                    className: "w-[calc(50%-12px)]",
                                                    children: (0,
                                                    r.jsx)(W.zx, V({}, e, {
                                                        className: "w-full !px-4"
                                                    }))
                                                }, t)
                                            }
                                            ))
                                        })]
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "xl:order-1 xl:shrink-0 mt-auto mx-auto xl:mt-0 xl:mx-0 w-full xl:w-[350px] border-dotted border-[#666666] border-0 border-t xl:border-t-0 xl:border-r pt-6 xl:pt-0 xl:pr-6",
                                        children: (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col gap-8 mx-auto max-w-[590px] xl:max-w-none xl:h-full text-xl italic text-center xl:text-left overflow-hidden",
                                            children: [(0,
                                            r.jsx)(W.nv, {
                                                children: (0,
                                                r.jsx)(_.Z, {
                                                    name: "Navigation - Description",
                                                    defaultText: "10 East is a membership-based investment firm focused on capacity-constrained exposures across private markets for a select community of institutional and individual investors."
                                                })
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex justify-center xl:justify-start gap-8 xl:mt-auto",
                                                children: [(0,
                                                r.jsx)("a", {
                                                    href: "https://www.linkedin.com/company/10east",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    title: "LinkedIn",
                                                    children: (0,
                                                    r.jsx)(W.nI, {
                                                        width: 24
                                                    })
                                                }), (0,
                                                r.jsx)("a", {
                                                    href: "https://x.com/invest10east",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    title: "X",
                                                    children: (0,
                                                    r.jsx)(W.b0, {
                                                        width: 24
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsx)(W.dp, {
                    open: s,
                    onClose: x
                })]
            })
        }
          , K = function() {
            var e = (0,
            i.a)().user;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(w, {}), e ? (0,
                r.jsx)(Y, {}) : (0,
                r.jsx)(X, {})]
            })
        }
    },
    43879: function(e) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNSAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjY5NTEgNC45NzY3NUwxNy41MDAxIDAuNTk5NDAxTDEzLjMwNTIgNC45NzY3NUwxNy41MDAxIDkuMzU0MUwyMS42OTUxIDQuOTc2NzVaIiBzdHJva2U9IiNCQ0JDQkMiIHN0cm9rZS13aWR0aD0iMC44Mjk0NTgiLz4KPHBhdGggZD0iTTI1LjAwMTQgMTYuNzk2N0wxNy41MDA3IDkuMjk1OTlMOS45OTk5NyAxNi43OTY3TDE3LjUwMDcgMjQuMjk3NEwyNS4wMDE0IDE2Ljc5NjdaIiBzdHJva2U9IiNCQ0JDQkMiIHN0cm9rZS13aWR0aD0iMC44Mjk0NTgiLz4KPHBhdGggZD0iTTUuNjgwODUgMTIuNjAxOEwxLjMwMzUgMTYuNzk2N0w1LjY4MDg1IDIwLjk5MTdMMTAuMDU4MiAxNi43OTY3TDUuNjgwODUgMTIuNjAxOFoiIHN0cm9rZT0iI0JDQkNCQyIgc3Ryb2tlLXdpZHRoPSIwLjgyOTQ1OCIvPgo8cGF0aCBkPSJNMjEuNjk1MSAyOC42MTY0TDE3LjUwMDEgMjQuMjM5TDEzLjMwNTIgMjguNjE2NEwxNy41MDAxIDMyLjk5MzdMMjEuNjk1MSAyOC42MTY0WiIgc3Ryb2tlPSIjQkNCQ0JDIiBzdHJva2Utd2lkdGg9IjAuODI5NDU4Ii8+CjxwYXRoIGQ9Ik0yOS4zMjA1IDEyLjYwMThMMjQuOTQzMiAxNi43OTY3TDI5LjMyMDUgMjAuOTkxN0wzMy42OTc4IDE2Ljc5NjdMMjkuMzIwNSAxMi42MDE4WiIgc3Ryb2tlPSIjQkNCQ0JDIiBzdHJva2Utd2lkdGg9IjAuODI5NDU4Ii8+Cjwvc3ZnPgo="
    },
    73155: function(e) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43OTYyIDAuMjY0NjQ4TDEzLjE3NDcgMS42OTM4NUw0LjU3NTEyIDEwLjA5MjdMMC45MTIxMDkgNi42MTE2OEwyLjI4Njc1IDUuMTc4NjZMNC41NzEwOSA3LjI5NjlMMTEuNzk2MiAwLjI2NDY0OFoiIGZpbGw9IiMzNUJEMzIiLz4KPC9zdmc+Cg=="
    }
}]);
//# sourceMappingURL=8780-deba1c003aed1117.js.map
