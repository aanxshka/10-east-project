"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7806], {
    75015: function(a, e, l) {
        l.d(e, {
            I: function() {
                return L
            }
        });
        var d = l(85893)
          , n = l(67294)
          , i = l(11163)
          , b = l(86010)
          , r = l(65820)
          , o = l(13454)
          , s = l(45342);
        function c(a, e, l) {
            return e in a ? Object.defineProperty(a, e, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[e] = l,
            a
        }
        function y(a) {
            for (var e = 1; e < arguments.length; e++) {
                var l = null != arguments[e] ? arguments[e] : {}
                  , d = Object.keys(l);
                "function" === typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(l).filter((function(a) {
                    return Object.getOwnPropertyDescriptor(l, a).enumerable
                }
                )))),
                d.forEach((function(e) {
                    c(a, e, l[e])
                }
                ))
            }
            return a
        }
        var L = function(a) {
            var e, l, L, t, u, m = a.name, S = a.type, M = void 0 === S ? "text" : S, h = a.labelText, C = a.children, p = a.additionalProps, g = a.register, A = a.errors, G = a.placeholder, N = a.additionalInputClassNames, v = a.labelClassNames, f = a.errorClassNames, I = a.containerWidth, T = a.disabled, B = a.autoComplete, P = a.autoFocus, R = a.autoFocusDelay, E = a.dataCy, x = a.dataRecurly, K = (0,
            i.useRouter)(), F = function() {
                return (0,
                d.jsxs)("div", {
                    className: "flex mt-2 text-sm",
                    children: [(0,
                    d.jsx)("div", {
                        children: "Try a different email address or go to our "
                    }), (0,
                    d.jsx)("div", {
                        className: "underline text-blue-600 hover:text-blue-800 inline cursor-pointer ml-2",
                        onClick: function() {
                            return K.push("/login")
                        },
                        children: "login page."
                    }), (0,
                    d.jsxs)("div", {
                        className: "ml-2",
                        children: ["If your issue persists, contact", " ", (0,
                        d.jsx)("a", {
                            href: "mailto:ir@10east.co",
                            className: "text-blue-800 underline",
                            children: "ir@10east.co"
                        })]
                    })]
                })
            }, k = A.email && "A user with this email already exists." === A.email.message, D = R || 150;
            (0,
            n.useEffect)((function() {
                P && setTimeout((function() {
                    var a = document.getElementById(m);
                    null === a || void 0 === a || a.focus()
                }
                ), D)
            }
            ), [P]);
            var O = null === N || void 0 === N ? void 0 : N.includes("styled-input")
              , w = null === v || void 0 === v ? void 0 : v.includes("styled-input-label")
              , U = null === f || void 0 === f ? void 0 : f.includes("styled-input-error");
            return (0,
            d.jsxs)("div", {
                className: "flex flex-col items-start ".concat(null !== I && void 0 !== I ? I : ""),
                children: [h && (0,
                d.jsx)("label", {
                    className: (0,
                    b.Z)("".concat(v), !w && "font-franklin font-semibold uppercase text-silver-100 block mb-1 text-base"),
                    htmlFor: m,
                    children: h
                }), (0,
                d.jsxs)("div", {
                    className: "w-full relative",
                    children: [(0,
                    d.jsx)("input", y({
                        type: M,
                        className: (0,
                        b.Z)(!O && "block w-full py-2 px-3 text-base border outline-none disabled:opacity-70", " ".concat(N || ""), !N && "styled-input", (null === (e = A[m]) || void 0 === e ? void 0 : e.message) && "border-red-100"),
                        name: m,
                        placeholder: G,
                        id: m
                    }, g ? g(m) : {}, {
                        disabled: T
                    }, B ? {
                        autoComplete: B
                    } : {}, {
                        "data-cy": E
                    }, p || {}, x ? c({}, "data-recurly", x) : {})), C, (0,
                    d.jsx)(r.M, {
                        children: (!U || U && (null === (l = A[m]) || void 0 === l ? void 0 : l.message)) && (0,
                        d.jsx)(o.E.p, {
                            initial: "initial",
                            animate: "animate",
                            exit: "exit",
                            variants: s.Zv,
                            children: (0,
                            d.jsxs)("p", {
                                className: (0,
                                b.Z)("".concat(f), !U && (null === (L = A[m]) || void 0 === L ? void 0 : L.message) && "font-normal text-sm text-red-600 mt-2"),
                                children: [null === (t = A[m]) || void 0 === t ? void 0 : t.message, (null === (u = A[m]) || void 0 === u ? void 0 : u.message) && k && (0,
                                d.jsx)(F, {})]
                            })
                        }, "input-".concat(m))
                    })]
                })]
            })
        }
    },
    87072: function(a, e, l) {
        l.d(e, {
            J: function() {
                return d
            }
        });
        var d = [{
            label: "United States",
            secondaryLabel: "+1",
            id: "US"
        }, {
            label: "Afghanistan",
            secondaryLabel: "+93",
            id: "AF"
        }, {
            label: "Aland Islands",
            secondaryLabel: "+358",
            id: "AX"
        }, {
            label: "Albania",
            secondaryLabel: "+355",
            id: "AL"
        }, {
            label: "Algeria",
            secondaryLabel: "+213",
            id: "DZ"
        }, {
            label: "AmericanSamoa",
            secondaryLabel: "+1684",
            id: "AS"
        }, {
            label: "Andorra",
            secondaryLabel: "+376",
            id: "AD"
        }, {
            label: "Angola",
            secondaryLabel: "+244",
            id: "AO"
        }, {
            label: "Anguilla",
            secondaryLabel: "+1264",
            id: "AI"
        }, {
            label: "Antarctica",
            secondaryLabel: "+672",
            id: "AQ"
        }, {
            label: "Antigua and Barbuda",
            secondaryLabel: "+1268",
            id: "AG"
        }, {
            label: "Argentina",
            secondaryLabel: "+54",
            id: "AR"
        }, {
            label: "Armenia",
            secondaryLabel: "+374",
            id: "AM"
        }, {
            label: "Aruba",
            secondaryLabel: "+297",
            id: "AW"
        }, {
            label: "Australia",
            secondaryLabel: "+61",
            id: "AU"
        }, {
            label: "Austria",
            secondaryLabel: "+43",
            id: "AT"
        }, {
            label: "Azerbaijan",
            secondaryLabel: "+994",
            id: "AZ"
        }, {
            label: "Bahamas",
            secondaryLabel: "+1242",
            id: "BS"
        }, {
            label: "Bahrain",
            secondaryLabel: "+973",
            id: "BH"
        }, {
            label: "Bangladesh",
            secondaryLabel: "+880",
            id: "BD"
        }, {
            label: "Barbados",
            secondaryLabel: "+1246",
            id: "BB"
        }, {
            label: "Belarus",
            secondaryLabel: "+375",
            id: "BY"
        }, {
            label: "Belgium",
            secondaryLabel: "+32",
            id: "BE"
        }, {
            label: "Belize",
            secondaryLabel: "+501",
            id: "BZ"
        }, {
            label: "Benin",
            secondaryLabel: "+229",
            id: "BJ"
        }, {
            label: "Bermuda",
            secondaryLabel: "+1441",
            id: "BM"
        }, {
            label: "Bhutan",
            secondaryLabel: "+975",
            id: "BT"
        }, {
            label: "Bolivia, Plurinational State of",
            secondaryLabel: "+591",
            id: "BO"
        }, {
            label: "Bosnia and Herzegovina",
            secondaryLabel: "+387",
            id: "BA"
        }, {
            label: "Botswana",
            secondaryLabel: "+267",
            id: "BW"
        }, {
            label: "Brazil",
            secondaryLabel: "+55",
            id: "BR"
        }, {
            label: "British Indian Ocean Territory",
            secondaryLabel: "+246",
            id: "IO"
        }, {
            label: "Brunei Darussalam",
            secondaryLabel: "+673",
            id: "BN"
        }, {
            label: "Bulgaria",
            secondaryLabel: "+359",
            id: "BG"
        }, {
            label: "Burkina Faso",
            secondaryLabel: "+226",
            id: "BF"
        }, {
            label: "Burundi",
            secondaryLabel: "+257",
            id: "BI"
        }, {
            label: "Cambodia",
            secondaryLabel: "+855",
            id: "KH"
        }, {
            label: "Cameroon",
            secondaryLabel: "+237",
            id: "CM"
        }, {
            label: "Canada",
            secondaryLabel: "+1",
            id: "CA"
        }, {
            label: "Cape Verde",
            secondaryLabel: "+238",
            id: "CV"
        }, {
            label: "Cayman Islands",
            secondaryLabel: "+ 345",
            id: "KY"
        }, {
            label: "Central African Republic",
            secondaryLabel: "+236",
            id: "CF"
        }, {
            label: "Chad",
            secondaryLabel: "+235",
            id: "TD"
        }, {
            label: "Chile",
            secondaryLabel: "+56",
            id: "CL"
        }, {
            label: "China",
            secondaryLabel: "+86",
            id: "CN"
        }, {
            label: "Christmas Island",
            secondaryLabel: "+61",
            id: "CX"
        }, {
            label: "Cocos (Keeling) Islands",
            secondaryLabel: "+61",
            id: "CC"
        }, {
            label: "Colombia",
            secondaryLabel: "+57",
            id: "CO"
        }, {
            label: "Comoros",
            secondaryLabel: "+269",
            id: "KM"
        }, {
            label: "Congo",
            secondaryLabel: "+242",
            id: "CG"
        }, {
            label: "Congo, The Democratic Republic of the Congo",
            secondaryLabel: "+243",
            id: "CD"
        }, {
            label: "Cook Islands",
            secondaryLabel: "+682",
            id: "CK"
        }, {
            label: "Costa Rica",
            secondaryLabel: "+506",
            id: "CR"
        }, {
            label: "Cote d'Ivoire",
            secondaryLabel: "+225",
            id: "CI"
        }, {
            label: "Croatia",
            secondaryLabel: "+385",
            id: "HR"
        }, {
            label: "Cuba",
            secondaryLabel: "+53",
            id: "CU"
        }, {
            label: "Cyprus",
            secondaryLabel: "+357",
            id: "CY"
        }, {
            label: "Czech Republic",
            secondaryLabel: "+420",
            id: "CZ"
        }, {
            label: "Denmark",
            secondaryLabel: "+45",
            id: "DK"
        }, {
            label: "Djibouti",
            secondaryLabel: "+253",
            id: "DJ"
        }, {
            label: "Dominica",
            secondaryLabel: "+1767",
            id: "DM"
        }, {
            label: "Dominican Republic",
            secondaryLabel: "+1849",
            id: "DO"
        }, {
            label: "Ecuador",
            secondaryLabel: "+593",
            id: "EC"
        }, {
            label: "Egypt",
            secondaryLabel: "+20",
            id: "EG"
        }, {
            label: "El Salvador",
            secondaryLabel: "+503",
            id: "SV"
        }, {
            label: "Equatorial Guinea",
            secondaryLabel: "+240",
            id: "GQ"
        }, {
            label: "Eritrea",
            secondaryLabel: "+291",
            id: "ER"
        }, {
            label: "Estonia",
            secondaryLabel: "+372",
            id: "EE"
        }, {
            label: "Ethiopia",
            secondaryLabel: "+251",
            id: "ET"
        }, {
            label: "Falkland Islands (Malvinas)",
            secondaryLabel: "+500",
            id: "FK"
        }, {
            label: "Faroe Islands",
            secondaryLabel: "+298",
            id: "FO"
        }, {
            label: "Fiji",
            secondaryLabel: "+679",
            id: "FJ"
        }, {
            label: "Finland",
            secondaryLabel: "+358",
            id: "FI"
        }, {
            label: "France",
            secondaryLabel: "+33",
            id: "FR"
        }, {
            label: "French Guiana",
            secondaryLabel: "+594",
            id: "GF"
        }, {
            label: "French Polynesia",
            secondaryLabel: "+689",
            id: "PF"
        }, {
            label: "Gabon",
            secondaryLabel: "+241",
            id: "GA"
        }, {
            label: "Gambia",
            secondaryLabel: "+220",
            id: "GM"
        }, {
            label: "Georgia",
            secondaryLabel: "+995",
            id: "GE"
        }, {
            label: "Germany",
            secondaryLabel: "+49",
            id: "DE"
        }, {
            label: "Ghana",
            secondaryLabel: "+233",
            id: "GH"
        }, {
            label: "Gibraltar",
            secondaryLabel: "+350",
            id: "GI"
        }, {
            label: "Greece",
            secondaryLabel: "+30",
            id: "GR"
        }, {
            label: "Greenland",
            secondaryLabel: "+299",
            id: "GL"
        }, {
            label: "Grenada",
            secondaryLabel: "+1473",
            id: "GD"
        }, {
            label: "Guadeloupe",
            secondaryLabel: "+590",
            id: "GP"
        }, {
            label: "Guam",
            secondaryLabel: "+1671",
            id: "GU"
        }, {
            label: "Guatemala",
            secondaryLabel: "+502",
            id: "GT"
        }, {
            label: "Guernsey",
            secondaryLabel: "+44",
            id: "GG"
        }, {
            label: "Guinea",
            secondaryLabel: "+224",
            id: "GN"
        }, {
            label: "Guinea-Bissau",
            secondaryLabel: "+245",
            id: "GW"
        }, {
            label: "Guyana",
            secondaryLabel: "+595",
            id: "GY"
        }, {
            label: "Haiti",
            secondaryLabel: "+509",
            id: "HT"
        }, {
            label: "Holy See (Vatican City State)",
            secondaryLabel: "+379",
            id: "VA"
        }, {
            label: "Honduras",
            secondaryLabel: "+504",
            id: "HN"
        }, {
            label: "Hong Kong",
            secondaryLabel: "+852",
            id: "HK"
        }, {
            label: "Hungary",
            secondaryLabel: "+36",
            id: "HU"
        }, {
            label: "Iceland",
            secondaryLabel: "+354",
            id: "IS"
        }, {
            label: "India",
            secondaryLabel: "+91",
            id: "IN"
        }, {
            label: "Indonesia",
            secondaryLabel: "+62",
            id: "ID"
        }, {
            label: "Iran, Islamic Republic of Persian Gulf",
            secondaryLabel: "+98",
            id: "IR"
        }, {
            label: "Iraq",
            secondaryLabel: "+964",
            id: "IQ"
        }, {
            label: "Ireland",
            secondaryLabel: "+353",
            id: "IE"
        }, {
            label: "Isle of Man",
            secondaryLabel: "+44",
            id: "IM"
        }, {
            label: "Israel",
            secondaryLabel: "+972",
            id: "IL"
        }, {
            label: "Italy",
            secondaryLabel: "+39",
            id: "IT"
        }, {
            label: "Jamaica",
            secondaryLabel: "+1876",
            id: "JM"
        }, {
            label: "Japan",
            secondaryLabel: "+81",
            id: "JP"
        }, {
            label: "Jersey",
            secondaryLabel: "+44",
            id: "JE"
        }, {
            label: "Jordan",
            secondaryLabel: "+962",
            id: "JO"
        }, {
            label: "Kazakhstan",
            secondaryLabel: "+77",
            id: "KZ"
        }, {
            label: "Kenya",
            secondaryLabel: "+254",
            id: "KE"
        }, {
            label: "Kiribati",
            secondaryLabel: "+686",
            id: "KI"
        }, {
            label: "Korea, Democratic People's Republic of Korea",
            secondaryLabel: "+850",
            id: "KP"
        }, {
            label: "Korea, Republic of South Korea",
            secondaryLabel: "+82",
            id: "KR"
        }, {
            label: "Kuwait",
            secondaryLabel: "+965",
            id: "KW"
        }, {
            label: "Kyrgyzstan",
            secondaryLabel: "+996",
            id: "KG"
        }, {
            label: "Laos",
            secondaryLabel: "+856",
            id: "LA"
        }, {
            label: "Latvia",
            secondaryLabel: "+371",
            id: "LV"
        }, {
            label: "Lebanon",
            secondaryLabel: "+961",
            id: "LB"
        }, {
            label: "Lesotho",
            secondaryLabel: "+266",
            id: "LS"
        }, {
            label: "Liberia",
            secondaryLabel: "+231",
            id: "LR"
        }, {
            label: "Libyan Arab Jamahiriya",
            secondaryLabel: "+218",
            id: "LY"
        }, {
            label: "Liechtenstein",
            secondaryLabel: "+423",
            id: "LI"
        }, {
            label: "Lithuania",
            secondaryLabel: "+370",
            id: "LT"
        }, {
            label: "Luxembourg",
            secondaryLabel: "+352",
            id: "LU"
        }, {
            label: "Macao",
            secondaryLabel: "+853",
            id: "MO"
        }, {
            label: "Macedonia",
            secondaryLabel: "+389",
            id: "MK"
        }, {
            label: "Madagascar",
            secondaryLabel: "+261",
            id: "MG"
        }, {
            label: "Malawi",
            secondaryLabel: "+265",
            id: "MW"
        }, {
            label: "Malaysia",
            secondaryLabel: "+60",
            id: "MY"
        }, {
            label: "Maldives",
            secondaryLabel: "+960",
            id: "MV"
        }, {
            label: "Mali",
            secondaryLabel: "+223",
            id: "ML"
        }, {
            label: "Malta",
            secondaryLabel: "+356",
            id: "MT"
        }, {
            label: "Marshall Islands",
            secondaryLabel: "+692",
            id: "MH"
        }, {
            label: "Martinique",
            secondaryLabel: "+596",
            id: "MQ"
        }, {
            label: "Mauritania",
            secondaryLabel: "+222",
            id: "MR"
        }, {
            label: "Mauritius",
            secondaryLabel: "+230",
            id: "MU"
        }, {
            label: "Mayotte",
            secondaryLabel: "+262",
            id: "YT"
        }, {
            label: "Mexico",
            secondaryLabel: "+52",
            id: "MX"
        }, {
            label: "Micronesia, Federated States of Micronesia",
            secondaryLabel: "+691",
            id: "FM"
        }, {
            label: "Moldova",
            secondaryLabel: "+373",
            id: "MD"
        }, {
            label: "Monaco",
            secondaryLabel: "+377",
            id: "MC"
        }, {
            label: "Mongolia",
            secondaryLabel: "+976",
            id: "MN"
        }, {
            label: "Montenegro",
            secondaryLabel: "+382",
            id: "ME"
        }, {
            label: "Montserrat",
            secondaryLabel: "+1664",
            id: "MS"
        }, {
            label: "Morocco",
            secondaryLabel: "+212",
            id: "MA"
        }, {
            label: "Mozambique",
            secondaryLabel: "+258",
            id: "MZ"
        }, {
            label: "Myanmar",
            secondaryLabel: "+95",
            id: "MM"
        }, {
            label: "Namibia",
            secondaryLabel: "+264",
            id: "NA"
        }, {
            label: "Nauru",
            secondaryLabel: "+674",
            id: "NR"
        }, {
            label: "Nepal",
            secondaryLabel: "+977",
            id: "NP"
        }, {
            label: "Netherlands",
            secondaryLabel: "+31",
            id: "NL"
        }, {
            label: "Netherlands Antilles",
            secondaryLabel: "+599",
            id: "AN"
        }, {
            label: "New Caledonia",
            secondaryLabel: "+687",
            id: "NC"
        }, {
            label: "New Zealand",
            secondaryLabel: "+64",
            id: "NZ"
        }, {
            label: "Nicaragua",
            secondaryLabel: "+505",
            id: "NI"
        }, {
            label: "Niger",
            secondaryLabel: "+227",
            id: "NE"
        }, {
            label: "Nigeria",
            secondaryLabel: "+234",
            id: "NG"
        }, {
            label: "Niue",
            secondaryLabel: "+683",
            id: "NU"
        }, {
            label: "Norfolk Island",
            secondaryLabel: "+672",
            id: "NF"
        }, {
            label: "Northern Mariana Islands",
            secondaryLabel: "+1670",
            id: "MP"
        }, {
            label: "Norway",
            secondaryLabel: "+47",
            id: "NO"
        }, {
            label: "Oman",
            secondaryLabel: "+968",
            id: "OM"
        }, {
            label: "Pakistan",
            secondaryLabel: "+92",
            id: "PK"
        }, {
            label: "Palau",
            secondaryLabel: "+680",
            id: "PW"
        }, {
            label: "Palestinian Territory, Occupied",
            secondaryLabel: "+970",
            id: "PS"
        }, {
            label: "Panama",
            secondaryLabel: "+507",
            id: "PA"
        }, {
            label: "Papua New Guinea",
            secondaryLabel: "+675",
            id: "PG"
        }, {
            label: "Paraguay",
            secondaryLabel: "+595",
            id: "PY"
        }, {
            label: "Peru",
            secondaryLabel: "+51",
            id: "PE"
        }, {
            label: "Philippines",
            secondaryLabel: "+63",
            id: "PH"
        }, {
            label: "Pitcairn",
            secondaryLabel: "+872",
            id: "PN"
        }, {
            label: "Poland",
            secondaryLabel: "+48",
            id: "PL"
        }, {
            label: "Portugal",
            secondaryLabel: "+351",
            id: "PT"
        }, {
            label: "Puerto Rico",
            secondaryLabel: "+1939",
            id: "PR"
        }, {
            label: "Qatar",
            secondaryLabel: "+974",
            id: "QA"
        }, {
            label: "Romania",
            secondaryLabel: "+40",
            id: "RO"
        }, {
            label: "Russia",
            secondaryLabel: "+7",
            id: "RU"
        }, {
            label: "Rwanda",
            secondaryLabel: "+250",
            id: "RW"
        }, {
            label: "Reunion",
            secondaryLabel: "+262",
            id: "RE"
        }, {
            label: "Saint Barthelemy",
            secondaryLabel: "+590",
            id: "BL"
        }, {
            label: "Saint Helena, Ascension and Tristan Da Cunha",
            secondaryLabel: "+290",
            id: "SH"
        }, {
            label: "Saint Kitts and Nevis",
            secondaryLabel: "+1869",
            id: "KN"
        }, {
            label: "Saint Lucia",
            secondaryLabel: "+1758",
            id: "LC"
        }, {
            label: "Saint Martin",
            secondaryLabel: "+590",
            id: "MF"
        }, {
            label: "Saint Pierre and Miquelon",
            secondaryLabel: "+508",
            id: "PM"
        }, {
            label: "Saint Vincent and the Grenadines",
            secondaryLabel: "+1784",
            id: "VC"
        }, {
            label: "Samoa",
            secondaryLabel: "+685",
            id: "WS"
        }, {
            label: "San Marino",
            secondaryLabel: "+378",
            id: "SM"
        }, {
            label: "Sao Tome and Principe",
            secondaryLabel: "+239",
            id: "ST"
        }, {
            label: "Saudi Arabia",
            secondaryLabel: "+966",
            id: "SA"
        }, {
            label: "Senegal",
            secondaryLabel: "+221",
            id: "SN"
        }, {
            label: "Serbia",
            secondaryLabel: "+381",
            id: "RS"
        }, {
            label: "Seychelles",
            secondaryLabel: "+248",
            id: "SC"
        }, {
            label: "Sierra Leone",
            secondaryLabel: "+232",
            id: "SL"
        }, {
            label: "Singapore",
            secondaryLabel: "+65",
            id: "SG"
        }, {
            label: "Slovakia",
            secondaryLabel: "+421",
            id: "SK"
        }, {
            label: "Slovenia",
            secondaryLabel: "+386",
            id: "SI"
        }, {
            label: "Solomon Islands",
            secondaryLabel: "+677",
            id: "SB"
        }, {
            label: "Somalia",
            secondaryLabel: "+252",
            id: "SO"
        }, {
            label: "South Africa",
            secondaryLabel: "+27",
            id: "ZA"
        }, {
            label: "South Sudan",
            secondaryLabel: "+211",
            id: "SS"
        }, {
            label: "South Georgia and the South Sandwich Islands",
            secondaryLabel: "+500",
            id: "GS"
        }, {
            label: "Spain",
            secondaryLabel: "+34",
            id: "ES"
        }, {
            label: "Sri Lanka",
            secondaryLabel: "+94",
            id: "LK"
        }, {
            label: "Sudan",
            secondaryLabel: "+249",
            id: "SD"
        }, {
            label: "Suriname",
            secondaryLabel: "+597",
            id: "SR"
        }, {
            label: "Svalbard and Jan Mayen",
            secondaryLabel: "+47",
            id: "SJ"
        }, {
            label: "Swaziland",
            secondaryLabel: "+268",
            id: "SZ"
        }, {
            label: "Sweden",
            secondaryLabel: "+46",
            id: "SE"
        }, {
            label: "Switzerland",
            secondaryLabel: "+41",
            id: "CH"
        }, {
            label: "Syrian Arab Republic",
            secondaryLabel: "+963",
            id: "SY"
        }, {
            label: "Taiwan",
            secondaryLabel: "+886",
            id: "TW"
        }, {
            label: "Tajikistan",
            secondaryLabel: "+992",
            id: "TJ"
        }, {
            label: "Tanzania, United Republic of Tanzania",
            secondaryLabel: "+255",
            id: "TZ"
        }, {
            label: "Thailand",
            secondaryLabel: "+66",
            id: "TH"
        }, {
            label: "Timor-Leste",
            secondaryLabel: "+670",
            id: "TL"
        }, {
            label: "Togo",
            secondaryLabel: "+228",
            id: "TG"
        }, {
            label: "Tokelau",
            secondaryLabel: "+690",
            id: "TK"
        }, {
            label: "Tonga",
            secondaryLabel: "+676",
            id: "TO"
        }, {
            label: "Trinidad and Tobago",
            secondaryLabel: "+1868",
            id: "TT"
        }, {
            label: "Tunisia",
            secondaryLabel: "+216",
            id: "TN"
        }, {
            label: "Turkey",
            secondaryLabel: "+90",
            id: "TR"
        }, {
            label: "Turkmenistan",
            secondaryLabel: "+993",
            id: "TM"
        }, {
            label: "Turks and Caicos Islands",
            secondaryLabel: "+1649",
            id: "TC"
        }, {
            label: "Tuvalu",
            secondaryLabel: "+688",
            id: "TV"
        }, {
            label: "Uganda",
            secondaryLabel: "+256",
            id: "UG"
        }, {
            label: "Ukraine",
            secondaryLabel: "+380",
            id: "UA"
        }, {
            label: "United Arab Emirates",
            secondaryLabel: "+971",
            id: "AE"
        }, {
            label: "United Kingdom",
            secondaryLabel: "+44",
            id: "GB"
        }, {
            label: "Uruguay",
            secondaryLabel: "+598",
            id: "UY"
        }, {
            label: "Uzbekistan",
            secondaryLabel: "+998",
            id: "UZ"
        }, {
            label: "Vanuatu",
            secondaryLabel: "+678",
            id: "VU"
        }, {
            label: "Venezuela, Bolivarian Republic of Venezuela",
            secondaryLabel: "+58",
            id: "VE"
        }, {
            label: "Vietnam",
            secondaryLabel: "+84",
            id: "VN"
        }, {
            label: "Virgin Islands, British",
            secondaryLabel: "+1284",
            id: "VG"
        }, {
            label: "Virgin Islands, U.S.",
            secondaryLabel: "+1340",
            id: "VI"
        }, {
            label: "Wallis and Futuna",
            secondaryLabel: "+681",
            id: "WF"
        }, {
            label: "Yemen",
            secondaryLabel: "+967",
            id: "YE"
        }, {
            label: "Zambia",
            secondaryLabel: "+260",
            id: "ZM"
        }, {
            label: "Zimbabwe",
            secondaryLabel: "+263",
            id: "ZW"
        }]
    }
}]);
//# sourceMappingURL=7806-3151cd289ceecd2b.js.map
