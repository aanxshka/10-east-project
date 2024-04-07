"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4673], {
    76638: function(e, t, r) {
        r.d(t, {
            mY: function() {
                return o
            },
            If: function() {
                return n
            },
            sZ: function() {
                return a
            },
            nj: function() {
                return s
            },
            ND: function() {
                return i
            },
            Z8: function() {
                return l
            },
            Fe: function() {
                return u
            },
            Am: function() {
                return c
            },
            r4: function() {
                return b
            },
            IA: function() {
                return h
            },
            EB: function() {
                return f
            },
            hz: function() {
                return _
            },
            qf: function() {
                return d
            },
            Yk: function() {
                return y
            },
            qt: function() {
                return p
            },
            JW: function() {
                return m
            },
            V5: function() {
                return v
            },
            pn: function() {
                return g
            },
            Q2: function() {
                return K
            },
            Rc: function() {
                return $
            },
            tX: function() {
                return k
            },
            FQ: function() {
                return w
            }
        });
        var o = [{
            score: 1,
            label: "Your annual income is greater than $200k (for the last two years)",
            hubspotKey: "greater_200k"
        }, {
            score: 1,
            label: "Your household income (jointly with your spouse, if married) is greater than $300k (for the last two years)",
            hubspotKey: "greater_300k"
        }, {
            score: 1,
            label: "Your net worth is greater than $1M (excluding your primary residence)",
            hubspotKey: "greater_1m"
        }, {
            score: 1,
            label: "You are a holder in good standing of a Series 7, Series 65 or Series 82 license",
            hubspotKey: "series7_series65_series82"
        }, {
            score: 0,
            isDisqualified: !0,
            label: "None of the above",
            hubspotKey: "none_of_the_above",
            isExclusive: !0
        }]
          , n = [{
            score: 1,
            label: "Your annual income is greater than $200k (for the last two years)",
            hubspotKey: "greater_200k"
        }, {
            score: 1,
            label: "Your household income (jointly with your spouse, if married) is greater than $300k (for the last two years)",
            hubspotKey: "greater_300k"
        }, {
            score: 1,
            label: "Your net worth is greater than $1M (excluding your primary residence)",
            hubspotKey: "greater_1m"
        }, {
            score: 1,
            label: "You are a holder in good standing of a Series 7, Series 65 or Series 82 license",
            hubspotKey: "series7_series65_series82"
        }, {
            score: 0,
            isDisqualified: !0,
            label: "I am not an Accredited Investor",
            hubspotKey: "i_am_not_an_accredited_investor",
            isExclusive: !0
        }]
          , a = {
            greater_200k: {
                score: 1,
                label: "Your annual income is greater than $200k (for the last two years)",
                hubspotKey: "greater_200k"
            },
            greater_300k: {
                score: 1,
                label: "Your household income (jointly with your spouse, if married) is greater than $300k (for the last two years)",
                hubspotKey: "greater_300k"
            },
            greater_1m: {
                score: 1,
                label: "Your net worth is greater than $1M (excluding your primary residence)",
                hubspotKey: "greater_1m"
            },
            series7_series65_series82: {
                score: 1,
                label: "You are a holder in good standing of a Series 7, Series 65 or Series 82 license",
                hubspotKey: "series7_series65_series82"
            },
            none_of_the_above: {
                score: 0,
                isDisqualified: !0,
                label: "None of the above",
                hubspotKey: "none_of_the_above",
                isExclusive: !0
            }
        }
          , s = {
            greater_200k: {
                score: 1,
                label: "Your annual income is greater than $200k (for the last two years)",
                hubspotKey: "greater_200k"
            },
            greater_300k: {
                score: 1,
                label: "Your household income (jointly with your spouse, if married) is greater than $300k (for the last two years)",
                hubspotKey: "greater_300k"
            },
            greater_1m: {
                score: 1,
                label: "Your net worth is greater than $1M (excluding your primary residence)",
                hubspotKey: "greater_1m"
            },
            series7_series65_series82: {
                score: 1,
                label: "You are a holder in good standing of a Series 7, Series 65 or Series 82 license",
                hubspotKey: "series7_series65_series82"
            },
            i_am_not_an_accredited_investor: {
                score: 0,
                isDisqualified: !0,
                label: "I am not an Accredited Investor",
                hubspotKey: "i_am_not_an_accredited_investor",
                isExclusive: !0
            }
        }
          , i = [{
            score: 1,
            label: "You (individually or jointly with your spouse) own at least $5M in investments.",
            hubspotKey: "greater_5m",
            skipQualifiedClient: !0
        }, {
            score: 1,
            label: "You invest on behalf of a family investment entity with at least $5M in investments.",
            hubspotKey: "on_behalf_greater_5m",
            skipQualifiedClient: !0
        }, {
            score: 1,
            label: "You invest at least $25M on a discretionary basis on behalf of yourself or other qualified purchasers.",
            hubspotKey: "greater_25m",
            skipQualifiedClient: !0
        }, {
            score: 0,
            label: "None of the above",
            hubspotKey: "none_of_the_above",
            isExclusive: !0,
            skipQualifiedClient: !1
        }]
          , l = [{
            score: 1,
            label: "You (individually or jointly with your spouse) own at least $5M in investments.",
            hubspotKey: "greater_5m",
            skipQualifiedClient: !0
        }, {
            score: 1,
            label: "You invest on behalf of a family investment entity with at least $5M in investments.",
            hubspotKey: "on_behalf_greater_5m",
            skipQualifiedClient: !0
        }, {
            score: 1,
            label: "You invest at least $25M on a discretionary basis on behalf of yourself or other qualified purchasers.",
            hubspotKey: "greater_25m",
            skipQualifiedClient: !0
        }, {
            score: 0,
            label: "I am not a Qualified Purchaser",
            hubspotKey: "i_am_not_a_qualified_purchaser",
            isExclusive: !0,
            skipQualifiedClient: !1
        }]
          , u = {
            greater_5m: {
                score: 1,
                label: "You (individually or jointly with your spouse) own at least $5M in investments.",
                hubspotKey: "greater_5m",
                skipQualifiedClient: !0
            },
            on_behalf_greater_5m: {
                score: 1,
                label: "You invest on behalf of a family Investment entity with at least $5M in investments.",
                hubspotKey: "on_behalf_greater_5m",
                skipQualifiedClient: !0
            },
            greater_25m: {
                score: 1,
                label: "You invest at least $25M on a discretionary basis on behalf of yourself or other qualified purchasers.",
                hubspotKey: "greater_25m",
                skipQualifiedClient: !0
            },
            none_of_the_above: {
                score: 0,
                label: "None of the above",
                hubspotKey: "none_of_the_above",
                isExclusive: !0,
                skipQualifiedClient: !1
            }
        }
          , c = {
            greater_5m: {
                score: 1,
                label: "You (individually or jointly with your spouse) own at least $5M in investments.",
                hubspotKey: "greater_5m",
                skipQualifiedClient: !0
            },
            on_behalf_greater_5m: {
                score: 1,
                label: "You invest on behalf of a family Investment entity with at least $5M in investments.",
                hubspotKey: "on_behalf_greater_5m",
                skipQualifiedClient: !0
            },
            greater_25m: {
                score: 1,
                label: "You invest at least $25M on a discretionary basis on behalf of yourself or other qualified purchasers.",
                hubspotKey: "greater_25m",
                skipQualifiedClient: !0
            },
            i_am_not_a_qualified_purchaser: {
                score: 0,
                label: "I am not a Qualified Purchaser",
                hubspotKey: "i_am_not_a_qualified_purchaser",
                isExclusive: !0,
                skipQualifiedClient: !1
            }
        }
          , b = [{
            score: 1,
            label: "You have at least $1.1M under management by 10 East.",
            hubspotKey: "greater_1m"
        }, {
            score: 1,
            label: "You have a net worth (individually or jointly with your spouse) of more than $2.2M, excluding your primary residence.",
            hubspotKey: "greater_2m"
        }, {
            score: 1,
            label: "You invest on behalf of a company that meets any of the foregoing tests.",
            hubspotKey: "on_behalf_any"
        }, {
            score: 0,
            label: "None of the above",
            hubspotKey: "none_of_the_above",
            isExclusive: !0
        }]
          , h = [{
            score: 1,
            label: "You have at least $1.1M under management by 10 East.",
            hubspotKey: "greater_1m"
        }, {
            score: 1,
            label: "You have a net worth (individually or jointly with your spouse) of more than $2.2M, excluding your primary residence.",
            hubspotKey: "greater_2m"
        }, {
            score: 1,
            label: "You invest on behalf of a company that meets any of the foregoing tests.",
            hubspotKey: "on_behalf_any"
        }, {
            score: 0,
            label: "I am not a Qualified Client",
            hubspotKey: "i_am_not_a_qualified_client",
            isExclusive: !0
        }]
          , f = {
            greater_1m: {
                score: 1,
                label: "You have at least $1.1M under management by 10 East.",
                hubspotKey: "greater_1m"
            },
            greater_2m: {
                score: 1,
                label: "You have a net worth (individually or jointly with your spouse) of more than $2.2M, excluding your primary residence.",
                hubspotKey: "greater_2m"
            },
            on_behalf_any: {
                score: 1,
                label: "You invest on behalf of a company that meets any of the foregoing tests.",
                hubspotKey: "on_behalf_any"
            },
            none_of_the_above: {
                score: 0,
                label: "None of the above",
                hubspotKey: "none_of_the_above",
                isExclusive: !0
            }
        }
          , _ = {
            greater_1m: {
                score: 1,
                label: "You have at least $1.1M under management by 10 East.",
                hubspotKey: "greater_1m"
            },
            greater_2m: {
                score: 1,
                label: "You have a net worth (individually or jointly with your spouse) of more than $2.2M, excluding your primary residence.",
                hubspotKey: "greater_2m"
            },
            on_behalf_any: {
                score: 1,
                label: "You invest on behalf of a company that meets any of the foregoing tests.",
                hubspotKey: "on_behalf_any"
            },
            i_am_not_a_qualified_client: {
                score: 0,
                label: "I am not a Qualified Client",
                hubspotKey: "i_am_not_a_qualified_client",
                isExclusive: !0
            }
        }
          , d = [{
            score: 5,
            label: "Greater than $25,000,000",
            hubspotKey: "greater_25m"
        }, {
            score: 1,
            label: "Between $10,000,000 and $25,000,000",
            hubspotKey: "between_10m_25m"
        }, {
            score: 1,
            label: "Between $5,000,000 and $10,000,000",
            hubspotKey: "between_5m_10m"
        }, {
            score: 1,
            label: "Between $1,000,000 and $5,000,000",
            hubspotKey: "between_1m_5m"
        }, {
            score: 0,
            label: "Less than $1,000,000",
            hubspotKey: "less_1m"
        }]
          , y = [{
            score: 5,
            label: "Greater than $100,000,000",
            hubspotKey: "greater_100m"
        }, {
            score: 1,
            label: "Between $50,000,000 and $100,000,000",
            hubspotKey: "between_50m_100m"
        }, {
            score: 1,
            label: "Between $25,000,000 and $50,000,000",
            hubspotKey: "between_25m_50m"
        }, {
            score: 1,
            label: "Between $10,000,000 and $25,000,000",
            hubspotKey: "between_10m_25m"
        }, {
            score: 1,
            label: "Between $5,000,000 and $10,000,000",
            hubspotKey: "between_5m_10m"
        }, {
            score: 0,
            label: "Less than $5,000,000",
            hubspotKey: "less_5m"
        }]
          , p = [{
            score: 1,
            label: "Private companies and/or startups",
            hubspotKey: "private_companies_startups"
        }, {
            score: 1,
            label: "Hedge funds",
            hubspotKey: "hedge_funds"
        }, {
            score: 1,
            label: "Private equity funds",
            hubspotKey: "private_equity_funds"
        }, {
            score: 1,
            label: "Venture capital funds",
            hubspotKey: "venture_capital_funds"
        }, {
            score: 1,
            label: "Real estate, real estate securities and/or real estate funds",
            hubspotKey: "real_estate_securities_funds"
        }, {
            score: 1,
            label: "Private credit/direct lending and/or private credit funds",
            hubspotKey: "private_credit_direct_lending"
        }, {
            score: 0,
            label: "None of the above",
            hubspotKey: "none_of_the_above",
            isExclusive: !0
        }]
          , m = {
            private_companies_startups: {
                score: 1,
                label: "Private companies and/or startups",
                hubspotKey: "private_companies_startups"
            },
            hedge_funds: {
                score: 1,
                label: "Hedge funds",
                hubspotKey: "hedge_funds"
            },
            private_equity_funds: {
                score: 1,
                label: "Private equity funds",
                hubspotKey: "private_equity_funds"
            },
            venture_capital_funds: {
                score: 1,
                label: "Venture capital funds",
                hubspotKey: "venture_capital_funds"
            },
            real_estate_securities_funds: {
                score: 1,
                label: "Real estate, real estate securities and/or real estate funds",
                hubspotKey: "real_estate_securities_funds"
            },
            private_credit_direct_lending: {
                score: 1,
                label: "Private credit/direct lending and/or private credit funds",
                hubspotKey: "private_credit_direct_lending"
            },
            none_of_the_above: {
                score: 0,
                label: "None of the above",
                hubspotKey: "none_of_the_above",
                isExclusive: !0
            }
        }
          , v = [{
            score: 1,
            label: "More than $1,000,000",
            hubspotKey: "greater_1m"
        }, {
            score: 1,
            label: "$500,000-$1,000,000",
            hubspotKey: "500k_1m"
        }, {
            score: 1,
            label: "$200,000-$500,000",
            hubspotKey: "200k_500k"
        }, {
            score: 1,
            label: "$100,000-$200,000",
            hubspotKey: "100k_250k"
        }, {
            score: 0,
            label: "$50,000-$100,000",
            hubspotKey: "50k_100k"
        }, {
            score: 0,
            label: "Less than $50,000",
            hubspotKey: "less_50k"
        }]
          , g = [{
            score: 1,
            label: "More than $5,000,000",
            hubspotKey: "greater_5m"
        }, {
            score: 1,
            label: "$1,000,000-$5,000,000",
            hubspotKey: "1m_5m"
        }, {
            score: 1,
            label: "$500,000-$1,000,000",
            hubspotKey: "500k_1m"
        }, {
            score: 1,
            label: "$250,000-$500,000",
            hubspotKey: "250k_500k"
        }, {
            score: 0,
            label: "Less than $250,000",
            hubspotKey: "less_250k"
        }]
          , K = [{
            score: 1,
            label: "More than $10,000,000",
            hubspotKey: "greater_10m"
        }, {
            score: 1,
            label: "$5,000,000 - $10,000,000",
            hubspotKey: "5m_10m"
        }, {
            score: 1,
            label: "$1,000,000 - $5,000,000",
            hubspotKey: "1m_5m"
        }, {
            score: 1,
            label: "$250,000 - $1,000,000",
            hubspotKey: "250k_1m"
        }, {
            score: 0,
            label: "$100,000 - $250,000",
            hubspotKey: "100ka_250ka"
        }]
          , $ = [{
            score: 1,
            label: "More than $5,000,000",
            hubspotKey: "greater_5m"
        }, {
            score: 1,
            label: "$3,000,000 - $5,000,000",
            hubspotKey: "3m_5m"
        }, {
            score: 1,
            label: "$1,000,000 - $3,000,000",
            hubspotKey: "1m_3m"
        }, {
            score: 1,
            label: "$250,000 - $1,000,000",
            hubspotKey: "250k_1m"
        }, {
            score: 0,
            label: "$100,000 - $250,000",
            hubspotKey: "100ka_250ka"
        }, {
            score: 0,
            label: "Less than $50,000",
            hubspotKey: "less_50k"
        }]
          , k = {
            contactInfo: {
                enabled: !0
            },
            verifyEmail: {
                enabled: !1
            },
            accreditedInfo: {
                enabled: !0
            },
            qualifiedPurchaser: {
                enabled: !0
            },
            qualifiedClient: {
                enabled: !0
            },
            currentNetWorthInfo: {
                enabled: !0
            },
            pastInvestments: {
                enabled: !0
            },
            plannedInvestments: {
                enabled: !0
            },
            freeFormComment: {
                enabled: !0
            },
            confirmation: {
                enabled: !0
            }
        }
          , w = {
            contactInfo: {
                enabled: !0
            },
            verifyEmail: {
                enabled: !1
            },
            accreditedInfo: {
                enabled: !0
            },
            qualifiedPurchaser: {
                enabled: !0
            },
            qualifiedClient: {
                enabled: !1
            },
            currentNetWorthInfo: {
                enabled: !0
            },
            pastInvestments: {
                enabled: !0
            },
            plannedInvestments: {
                enabled: !0
            },
            freeFormComment: {
                enabled: !0
            },
            confirmation: {
                enabled: !0
            }
        }
    },
    77498: function(e, t, r) {
        r.d(t, {
            lP: function() {
                return n
            },
            rE: function() {
                return a
            },
            kV: function() {
                return s
            },
            nN: function() {
                return i
            },
            aH: function() {
                return l
            },
            pC: function() {
                return u
            },
            $B: function() {
                return c
            },
            cj: function() {
                return b
            },
            ie: function() {
                return h
            },
            YG: function() {
                return f
            }
        });
        var o = r(76638)
          , n = function(e) {
            return {
                2: o.sZ,
                3: o.sZ,
                4: o.nj,
                5: o.nj
            }[e] || o.nj
        }
          , a = function(e) {
            return {
                2: o.EB,
                3: o.EB,
                4: o.hz,
                5: o.hz
            }[e] || o.hz
        }
          , s = function(e) {
            return {
                2: o.Fe,
                3: o.Fe,
                4: o.Am,
                5: o.Am
            }[e] || o.Am
        }
          , i = function(e) {
            return {
                2: o.ND,
                3: o.ND,
                4: o.Z8,
                5: o.Z8
            }[e] || o.Z8
        }
          , l = function(e) {
            return {
                2: o.r4,
                3: o.r4,
                4: o.IA,
                5: o.IA
            }[e] || o.IA
        }
          , u = function(e) {
            return {
                2: o.mY,
                3: o.mY,
                4: o.If,
                5: o.If
            }[e] || o.If
        }
          , c = function(e, t) {
            return e.some((function(e) {
                return s(t)[e].skipQualifiedClient
            }
            ))
        }
          , b = function(e) {
            return {
                2: o.qt,
                3: o.qt,
                4: o.qt,
                5: o.qt
            }[e] || o.qt
        }
          , h = function(e) {
            return {
                2: o.V5,
                3: o.pn,
                4: o.Q2,
                5: o.Rc
            }[e] || o.Rc
        }
          , f = function(e) {
            return {
                2: o.qf,
                3: o.qf,
                4: o.Yk,
                5: o.Yk
            }[e] || o.Yk
        }
    },
    53331: function(e, t, r) {
        r.d(t, {
            G: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "accreditedInfoAtom",
            default: []
        })
    },
    41739: function(e, t, r) {
        r.d(t, {
            H: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "contactInfoAtom",
            default: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                countryOfResidence: {
                    label: "United States",
                    secondaryLabel: "+1",
                    id: "US"
                },
                countryCode: {
                    label: "United States",
                    secondaryLabel: "+1",
                    id: "US"
                },
                terms: !1
            }
        })
    },
    88810: function(e, t, r) {
        r.d(t, {
            u: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "investorTypeAtom",
            default: {
                investorType: ""
            }
        })
    },
    32508: function(e, t, r) {
        r.d(t, {
            v: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "netWorthInfoAtom",
            default: ""
        })
    },
    74777: function(e, t, r) {
        r.d(t, {
            D: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "onboardingApplicationAtom",
            default: {
                onboardingApplication: {},
                hubSpotContactId: "",
                cognitoUserId: "",
                currentStep: 0
            }
        })
    },
    59466: function(e, t, r) {
        r.d(t, {
            D: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "pastInvestmentsInfoAtom",
            default: []
        })
    },
    1628: function(e, t, r) {
        r.d(t, {
            F: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "plannedInvestmentsInfoAtom",
            default: ""
        })
    },
    57132: function(e, t, r) {
        r.d(t, {
            S: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "qualiiedClientInfoAtom",
            default: []
        })
    },
    65864: function(e, t, r) {
        r.d(t, {
            H: function() {
                return o
            }
        });
        var o = (0,
        r(2804).cn)({
            key: "qualiiedPurchaserInfoAtom",
            default: []
        })
    }
}]);
//# sourceMappingURL=4673-4d4b7ce4ed62bf99.js.map
