"use strict";

webpackJsonp([1], { "4zzB": function zzB(e, t, i) {
    "use strict";
    function n(e) {
      i("UUVa");
    }var a = i("Zw/b"),
        s = i.n(a),
        o = i("jiPD"),
        l = i("VU/8"),
        c = n,
        u = l(s.a, o.a, !1, c, "data-v-45595ebe", null);t.default = u.exports;
  }, "98fC": function fC(e, t) {}, "99Y/": function Y(e, t) {}, GZrA: function GZrA(e, t) {}, LdSD: function LdSD(e, t) {}, NHnr: function NHnr(e, t, i) {
    "use strict";
    function n(e) {
      i("vPpa");
    }function a(e) {
      i("LdSD");
    }function s(e) {
      i("98fC");
    }function o(e) {
      i("hdH6");
    }function l(e) {
      i("cihy");
    }function c(e) {
      i("l14S");
    }function u(e) {
      i("sffx");
    }function r(e) {
      i("GZrA");
    }function m(e) {
      i("99Y/");
    }Object.defineProperty(t, "__esModule", { value: !0 });var v = i("7+uW"),
        d = i("/ocq"),
        p = { props: ["device"], methods: { selectDevice: function selectDevice(e) {
          var t = e.id,
              i = e;console.log("selectedDeviceId is: ", t), console.log("selectedDeviceData is: ", i), this.$store.dispatch("selectedDevice", t);
        } } },
        f = function f() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-card", { attrs: { modifier: "material" }, on: { click: function click(t) {
            e.selectDevice(e.device);
          } } }, [i("v-ons-list", [i("v-ons-list", [i("v-ons-list-title", { staticClass: "device-header", attrs: { modifier: "material" } }, [e.device.connected ? i("div", { staticClass: "active-icon" }) : i("div", { staticClass: "inactive-icon" }), e._v("\n        " + e._s(e.device.name) + "\n      ")]), e._v(" "), i("v-ons-list-header", [e._v("Last Online")]), e._v(" "), i("v-ons-list-item", [e._v(e._s(e.device.last_heard))]), e._v(" "), i("v-ons-list-header", [e._v("Device ID")]), e._v(" "), i("v-ons-list-item", [e._v(e._s(e.device.id))]), e._v(" "), i("v-ons-list-header", [e._v("Status")]), e._v(" "), i("v-ons-list-item", [e._v("Status: " + e._s(e.device.status))])], 1)], 1)], 1);
    },
        _ = [],
        g = { render: f, staticRenderFns: _ },
        x = g,
        h = i("VU/8"),
        D = n,
        b = h(p, x, !1, D, "data-v-d71310e6", null),
        k = b.exports,
        N = { components: { appDevice: k }, computed: { devices: function devices() {
          return console.log("getters data", this.$store.getters.data), this.$store.getters.data;
        } }, created: function created() {
        this.$store.dispatch("fetchDevices");
      } },
        M = function M() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-page", { attrs: { modifier: "material" } }, [i("div", { staticClass: "background" }), e._v(" "), e._l(e.devices, function (e) {
        return i("app-device", { key: e.id, staticClass: "list-style", attrs: { device: e } });
      })], 2);
    },
        S = [],
        w = { render: M, staticRenderFns: S },
        C = w,
        y = i("VU/8"),
        T = a,
        R = y(N, C, !1, T, "data-v-72079f3b", null),
        A = R.exports,
        V = { data: function data() {
        return { username: "", password: "" };
      }, methods: { onSubmit: function onSubmit() {
          var e = { username: this.username, password: this.password };this.$store.dispatch("login", { username: e.username, password: e.password });
        } } },
        E = function E() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-page", [i("div", { staticClass: "background" }), e._v(" "), i("div", { staticClass: "container" }, [i("form", { ref: "indexform", staticClass: "login-container", attrs: { id: "indexform" }, on: { submit: function submit(t) {
            t.preventDefault(), e.onSubmit({ username: e.username, password: e.password });
          } } }, [i("h1", [e._v("LOGIN")]), e._v(" "), i("hr"), e._v(" "), i("v-ons-input", { attrs: { type: "text", placeholder: "Username", modifier: "material" }, model: { value: e.username, callback: function callback(t) {
            e.username = t;
          }, expression: "username" } }), e._v(" "), i("v-ons-input", { attrs: { type: "password", placeholder: "Password", modifier: "material" }, model: { value: e.password, callback: function callback(t) {
            e.password = t;
          }, expression: "password" } }), e._v(" "), i("button", { staticClass: "login-button", attrs: { type: "submit" } }, [e._v("LOGIN")])], 1)])]);
    },
        P = [],
        I = { render: E, staticRenderFns: P },
        H = I,
        L = i("VU/8"),
        $ = s,
        B = L(V, H, !1, $, "data-v-48e27b46", null),
        O = B.exports,
        W = {},
        U = function U() {
      var e = this,
          t = e.$createElement;e._self._c;return e._m(0);
    },
        F = [function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "slidecontainer" } }, [i("input", { staticClass: "slider", attrs: { type: "range", min: "0", max: "9999", value: "50", id: "myRange" } })]);
    }],
        j = { render: U, staticRenderFns: F },
        G = j,
        Y = i("VU/8"),
        Z = o,
        z = Y(W, G, !1, Z, "data-v-13494030", null),
        q = z.exports,
        X = { props: ["singleDevice"], data: function data() {
        return { edited: "color:#777" };
      }, created: function created() {
        console.log("created: ", this.singleDevice);
      }, methods: { confirmBoolValue: function confirmBoolValue() {
          var e = this.singleDevice.value ? "1" : "0",
              t = { val: this.singleDevice };console.log("changedVal: ", t, "bool: ", e), this.$store.dispatch("editSetting", { name: t.val.name, value: e, key: t.val.key }), this.onEdit = !1, this.edited = "color:green";
        } } },
        J = function J() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "text-input-wrapper" }, [i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }), e._v(" "), "useVoltSense" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update\n  ")]) : e._e()], 1);
    },
        K = [],
        Q = { render: J, staticRenderFns: K },
        ee = Q,
        te = i("VU/8"),
        ie = l,
        ne = te(X, ee, !1, ie, "data-v-a9aa4a44", null),
        ae = ne.exports,
        se = { props: ["singleDevice"], data: function data() {
        return { onEdit: !1, edited: "color:#777", editText: "", editNum: this.singleDevice.value, autoRandomText: "", wifiModes: [{ text: "Always On", value: 0 }, { text: "Off when sleeping", value: 1 }, { text: "Off after MiFi search", value: 2 }, { text: "Off after WiFi Direct", value: 3 }], effects: [{ text: "Off", value: 0 }, { text: "Default", value: 1 }], appModes: [{ text: "Open", value: 0 }, { text: "Closed", value: 1 }, { text: "Open Color", value: 2 }, { text: "Open Color and Brightness", value: 3 }], masterSlaveModes: [{ text: "Test", value: 0 }, { text: "Burn In", value: 1 }, { text: "Standalone", value: 2 }, { text: "Master", value: 3 }, { text: "Slave-Sync-Color", value: 4 }, { text: "Slave-Sync-Complete", value: 5 }, { text: "Slave-Sync-Pattern", value: 6 }], buttonPins: [{ text: "D0", value: 0 }, { text: "D1", value: 1 }, { text: "D2", value: 2 }, { text: "D3", value: 3 }, { text: "D4", value: 4 }, { text: "D5", value: 5 }, { text: "D6", value: 6 }, { text: "D7", value: 7 }, { text: "A0", value: 10 }, { text: "A1", value: 11 }, { text: "A2", value: 12 }, { text: "A3", value: 13 }, { text: "A4", value: 14 }, { text: "A5", value: 15 }, { text: "A6", value: 16 }, { text: "A7", value: 17 }], timer: [{ text: "Off", value: 0 }, { text: "Everyday", value: 1 }, { text: "Weekdays Only", value: 2 }, { text: "Weekends Only", value: 3 }], randoms: [{ text: "Hue and Harmony", value: 0 }, { text: "Only Warm Hues", value: 1 }, { text: "Only Cold Hues", value: 2 }, { text: "Hue Range", value: 3 }, { text: "Hue and Analogic Harmonies", value: 4 }], autoRandoms: [{ text: "At Wake-up", value: 0 }, { text: "1 Minute", value: 60 }, { text: "5 Minutes", value: 300 }, { text: "10 Minutes", value: 600 }, { text: "20 Minutes", value: 1200 }, { text: "30 Minutes", value: 1800 }, { text: "1 Hour", value: 3600 }, { text: "2 Hours", value: 7200 }, { text: "4 Hours", value: 14400 }], autoRandomsEvery: [{ text: "No Auto Random", value: 0 }, { text: "1 Minute", value: 60 }, { text: "5 Minutes", value: 300 }, { text: "10 Minutes", value: 600 }, { text: "20 Minutes", value: 1200 }, { text: "30 Minutes", value: 1800 }, { text: "1 Hour", value: 3600 }, { text: "2 Hours", value: 7200 }, { text: "4 Hours", value: 14400 }], selectedAutoRandom: this.singleDevice.value, selectedEffectMode: this.singleDevice.value, selectedAutoRandomEvery: this.singleDevice.value, selectedRandom: this.singleDevice.value, selectedTimer: this.singleDevice.value, selectedButtonPin: this.singleDevice.value, selectedAppMode: this.singleDevice.value, selectedWifiMode: this.singleDevice.value, selectedMasterSlaveMode: this.singleDevice.value };
      }, components: { appInputSlider: q, appCheckbox: ae }, methods: { confirmAction: function confirmAction() {
          var e = { val: this.singleDevice };console.log("changedVal: ", e), this.$store.dispatch("editSetting", { name: e.val.name, value: e.val.value, key: e.val.key }), this.onEdit = !1, this.edited = "color:green";
        }, confirmRandom: function confirmRandom() {
          this.singleDevice.value = this.selectedRandom, this.confirmAction();
        }, confirmEffectMode: function confirmEffectMode() {
          this.singleDevice.value = this.selectedEffectMode, this.confirmAction();
        }, confirmAutoRandom: function confirmAutoRandom() {
          this.singleDevice.value = this.selectedAutoRandom, this.confirmAction();
        }, confirmAutoRandomEvery: function confirmAutoRandomEvery() {
          this.singleDevice.value = this.selectedAutoRandomEvery, this.confirmAction();
        }, confirmTimer: function confirmTimer() {
          this.singleDevice.value = this.selectedTimer, this.confirmAction();
        }, confirmMasterSlaveMode: function confirmMasterSlaveMode() {
          this.singleDevice.value = this.selectedMasterSlaveMode, this.confirmAction();
        }, confirmAppMode: function confirmAppMode() {
          this.singleDevice.value = this.selectedAppMode, this.confirmAction();
        }, confirmButtonPin: function confirmButtonPin() {
          this.singleDevice.value = this.selectedButtonPin, this.confirmAction();
        }, confirmWifi: function confirmWifi() {
          this.singleDevice.value = this.selectedWifiMode, this.confirmAction();
        }, confirmNumValue: function confirmNumValue() {
          this.singleDevice.value = this.editNum, this.confirmAction();
        }, confirmTextValue: function confirmTextValue() {
          this.singleDevice.value = this.editText, this.confirmAction();
        }, confirmBoolValue: function confirmBoolValue() {
          var e = this.singleDevice.value ? "1" : "0",
              t = { val: this.singleDevice };console.log("changedVal: ", t, "bool: ", e), this.$store.dispatch("editSetting", { name: t.val.name, value: e, key: t.val.key }), this.onEdit = !1, this.edited = "color:green";
        } } },
        oe = function oe() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-list", { attrs: { modifier: "material" } }, [i("v-ons-list-header", { staticClass: "list-header-bg", style: "" + e.edited }, [e._v("\n    " + e._s(e.singleDevice.name) + "\n    "), "" !== e.singleDevice.value ? i("v-ons-checkbox", { attrs: { id: "checkbox", modifier: "material" }, model: { value: e.onEdit, callback: function callback(t) {
            e.onEdit = t;
          }, expression: "onEdit" } }) : e._e()], 1), e._v(" "), i("v-ons-list-item", { staticClass: "list-item-val-bg" }, [e._v(e._s(e.singleDevice.value))]), e._v(" "), i("transition", { attrs: { name: "insert" } }, [e.onEdit ? i("v-ons-list-item", { staticClass: "list-item-bg" }, [i("div", { staticClass: "text-input-wrapper" }, ["ProductRange" === e.singleDevice.name ? i("v-ons-input", { attrs: { min: "0", max: "9999", type: "number", modifier: "material" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "ProductRange" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["ProductId" === e.singleDevice.name ? i("v-ons-input", { attrs: { type: "number", min: "0", max: "9999", modifier: "material" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "ProductId" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["useVoltSense" === e.singleDevice.name ? i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }) : e._e(), e._v(" "), "useVoltSense" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["hasRockerSwitch" === e.singleDevice.name ? i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }) : e._e(), e._v(" "), "hasRockerSwitch" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["hasPushButton" === e.singleDevice.name ? i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }) : e._e(), e._v(" "), "hasPushButton" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["hasPIRSensor" === e.singleDevice.name ? i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }) : e._e(), e._v(" "), "hasPIRSensor" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["hasRTCBattery" === e.singleDevice.name ? i("v-ons-switch", { model: { value: e.singleDevice.value, callback: function callback(t) {
            e.$set(e.singleDevice, "value", t);
          }, expression: "singleDevice.value" } }) : e._e(), e._v(" "), "hasRTCBattery" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmBoolValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["buttonPin" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedButtonPin, callback: function callback(t) {
            e.selectedButtonPin = t;
          }, expression: "selectedButtonPin" } }, e._l(e.buttonPins, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "buttonPin" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmButtonPin();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["FirmwareVersion" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "9999" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "FirmwareVersion" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["LocationLatitude" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "-90", max: "90" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "LocationLatitude" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["LocationLongitude" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "-180", max: "180" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "LocationLongitude" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["EffectXOffset" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "32", min: "0", max: "65535" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "EffectXOffset" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["EffectYOffset" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "32", min: "0", max: "65535" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "EffectYOffset" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["EffectTimeOffset" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "32", min: "0", max: "65535" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "EffectTimeOffset" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MasterId" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "99" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MasterId" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MainLocationName" === e.singleDevice.name ? i("v-ons-input", { attrs: { type: "text", modifier: "material" }, model: { value: e.editText, callback: function callback(t) {
            e.editText = t;
          }, expression: "editText" } }) : e._e(), e._v(" "), "MainLocationName" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmTextValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["WiFiMode" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedWifiMode, callback: function callback(t) {
            e.selectedWifiMode = t;
          }, expression: "selectedWifiMode" } }, e._l(e.wifiModes, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "WiFiMode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmWifi();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["AppMode" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedAppMode, callback: function callback(t) {
            e.selectedAppMode = t;
          }, expression: "selectedAppMode" } }, e._l(e.appModes, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "AppMode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmAppMode();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MasterSlaveMode" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedMasterSlaveMode, callback: function callback(t) {
            e.selectedMasterSlaveMode = t;
          }, expression: "selectedMasterSlaveMode" } }, e._l(e.masterSlaveModes, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "MasterSlaveMode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmMasterSlaveMode();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["LocationName" === e.singleDevice.name ? i("v-ons-input", { attrs: { type: "text", modifier: "material", max: "24" }, model: { value: e.editText, callback: function callback(t) {
            e.editText = t;
          }, expression: "editText" } }) : e._e(), e._v(" "), "LocationName" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmTextValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["PinCode" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "9999" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "PinCode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["ManualOffset" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "-12", max: "14" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "ManualOffset" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer1-Wake-up-Hour" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "23" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer1-Wake-up-Hour" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer1-Wake-up-Min" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "59" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer1-Wake-up-Min" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer1-Sleep-Hour" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "23" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer1-Sleep-Hour" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer1-Sleep-Minutes" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "59" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer1-Sleep-Minutes" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer2-Wake-up-Hour" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "23" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer2-Wake-up-Hour" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer2-Wake-up-Minutes" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "59" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer2-Wake-up-Minutes" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer2-Sleep-Hour" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "23" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer2-Sleep-Hour" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer2-Sleep-Minutes" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "59" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Timer2-Sleep-Minutes" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["RandomMode-Hue-Min" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "359" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "RandomMode-Hue-Min" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["RandomMode-Hue-Max" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "359" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "RandomMode-Hue-Max" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Default-Hue" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "359" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Default-Hue" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Default-Harmony" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "5" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "Default-Harmony" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MasterBrightness" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MasterBrightness" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["ColorTemperature" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "ColorTemperature" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MaximumSaturation" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MaximumSaturation" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MinimumSaturation" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MinimumSaturation" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MaximumBrightness" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MaximumBrightness" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["MinimumBrightness" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "1", min: "0", max: "255" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "MinimumBrightness" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["EffectSpeed" === e.singleDevice.name ? i("v-ons-input", { attrs: { modifier: "material", type: "number", step: "32", min: "0", max: "32767" }, model: { value: e.editNum, callback: function callback(t) {
            e.editNum = t;
          }, expression: "editNum" } }) : e._e(), e._v(" "), "EffectSpeed" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline" }, on: { click: function click(t) {
            e.confirmNumValue();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer1" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedTimer, callback: function callback(t) {
            e.selectedTimer = t;
          }, expression: "selectedTimer" } }, e._l(e.timer, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "Timer1" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmTimer();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Timer2" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedTimer, callback: function callback(t) {
            e.selectedTimer = t;
          }, expression: "selectedTimer" } }, e._l(e.timer, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "Timer2" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmTimer();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Auto-Random-Timer-Every" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedAutoRandomEvery, callback: function callback(t) {
            e.selectedAutoRandomEvery = t;
          }, expression: "selectedAutoRandomEvery" } }, e._l(e.autoRandomsEvery, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "Auto-Random-Timer-Every" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmAutoRandomEvery();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["Auto-Random-After-Interation" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedAutoRandom, callback: function callback(t) {
            e.selectedAutoRandom = t;
          }, expression: "selectedAutoRandom" } }, e._l(e.autoRandoms, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "Auto-Random-After-Interation" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmAutoRandom();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["RandomMode" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedRandom, callback: function callback(t) {
            e.selectedRandom = t;
          }, expression: "selectedRandom" } }, e._l(e.randoms, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "RandomMode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmRandom();
          } } }, [e._v("update")]) : e._e()], 1), e._v(" "), i("div", { staticClass: "text-input-wrapper" }, ["EffectMode" === e.singleDevice.name ? i("v-ons-select", { attrs: { modifier: "material underbar" }, model: { value: e.selectedEffectMode, callback: function callback(t) {
            e.selectedEffectMode = t;
          }, expression: "selectedEffectMode" } }, e._l(e.effects, function (t) {
        return i("option", { domProps: { value: t.value } }, [e._v(e._s(t.text))]);
      })) : e._e(), e._v(" "), "EffectMode" === e.singleDevice.name ? i("v-ons-button", { attrs: { modifier: "outline", ripple: "" }, on: { click: function click(t) {
            e.confirmEffectMode();
          } } }, [e._v("update")]) : e._e()], 1)]) : e._e()], 1)], 1);
    },
        le = [],
        ce = { render: oe, staticRenderFns: le },
        ue = ce,
        re = i("VU/8"),
        me = c,
        ve = re(se, ue, !1, me, "data-v-151980b3", null),
        de = ve.exports,
        pe = { props: ["device"], data: function data() {
        return { selectedItem: "", selectedSet: "Master" };
      }, computed: { singleDevice: function singleDevice() {
          return this.$store.getters.singleDeviceData;
        }, devices: function devices() {
          return this.$store.getters.data;
        } }, methods: { selectDevice: function selectDevice() {
          var e = this.selectedItem;this.$store.dispatch("selectedDevice", e);
        }, selectSet: function selectSet() {
          var e = this.selectedSet;console.log(e);var t = this.selectedItem;this.$store.dispatch("selectSet", e), this.$store.dispatch("selectedDevice", t);
        } }, created: function created() {
        var e = this.$store.getters.singleDevice;this.selectedItem = this.$store.getters.singleDevice, this.$store.dispatch("selectedDevice", e);
      }, components: { appTableItem: de } },
        fe = function fe() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-page", { attrs: { modifier: "material" } }, [i("v-ons-list", { attrs: { modifier: "material", "infinite-scroll": "" } }, [i("v-ons-list-title", { staticClass: "dashboard-header" }, [i("div", { staticClass: "left" }, [i("v-ons-select", { staticStyle: { "background-color": "white" }, attrs: { modifier: "material underbar" }, on: { change: function change(t) {
            e.selectDevice();
          } }, model: { value: e.selectedItem, callback: function callback(t) {
            e.selectedItem = t;
          }, expression: "selectedItem" } }, e._l(e.devices, function (t) {
        return i("option", { key: t.id, staticClass: "select-bar", attrs: { device: t }, domProps: { value: t.id } }, [e._v("\n            " + e._s(t.name) + "\n          ")]);
      }))], 1), e._v(" "), i("div", { staticClass: "right" }, [i("v-ons-select", { staticStyle: { "background-color": "white" }, attrs: { modifier: "material underbar", selected: "" }, on: { change: function change(t) {
            e.selectSet();
          } }, model: { value: e.selectedSet, callback: function callback(t) {
            e.selectedSet = t;
          }, expression: "selectedSet" } }, [i("option", { staticClass: "select-bar", domProps: { value: "MSTRSet" } }, [e._v("Master")]), e._v(" "), i("option", { staticClass: "select-bar", domProps: { value: "USRSet" } }, [e._v("User")])])], 1)]), e._v(" "), i("v-ons-list", { attrs: { modifier: "material" } }, [i("v-ons-list-header", { staticClass: "table-head" }, [i("div", { staticClass: "left" }, [e._v("\n          SettingName\n        ")]), e._v(" "), i("div", { staticClass: "right" }, [e._v("\n          Edit\n        ")])]), e._v(" "), e._l(e.singleDevice, function (e, t, n) {
        return i("app-table-item", { key: t, attrs: { singleDevice: e } });
      })], 2)], 1)], 1);
    },
        _e = [],
        ge = { render: fe, staticRenderFns: _e },
        xe = ge,
        he = i("VU/8"),
        De = u,
        be = he(pe, xe, !1, De, "data-v-4f8a93ec", null),
        ke = be.exports,
        Ne = i("NYxO"),
        Me = i("lbHh"),
        Se = i.n(Me),
        we = i("424j"),
        Ce = ["ProductRange", "ProductId", "useVoltSense", "hasRockerSwitch", "hasPushButton", "hasPIRSensor", "hasRTCBattery", "buttonPin", "FirmwareVersion", "MainLocationName", "LocationLatitude", "LocationLongitude", "WiFiMode", "AppMode", "MasterSlaveMode", "MasterId", "EffectXOffset", "EffectYOffset", "EffectTimeOffset"],
        ye = ["LocationName", "PinCode", "TimeZone", "ManualOffset", "Timer1", "Timer1-Wake-up-Hour", "Timer1-Wake-up-Min", "Timer1-Sleep-Hour", "Timer1-Sleep-Minutes", "Timer2", "Timer2-Wake-up-Hour", "Timer2-Wake-up-Minutes", "Timer2-Sleep-Hour", "Timer2-Sleep-Minutes", "Auto-Random-Timer-Every", "Auto-Random-After-Interation", "RandomMode", "RandomMode-Hue-Min", "RandomMode-Hue-Max", "Default-Hue", "Default-Harmony", "MasterBrightness", "ColorTemperature", "MaximumSaturation", "MinimumSaturation", "MaximumBrightness", "MinimumBrightness", "EffectMode", "EffectSpeed"];v.a.use(Ne.a);var Te = new Ne.a.Store({ state: { isLoggedIn: !1, accessToken: null, data: {}, singleDevice: {}, singleDeviceData: [], settingsArray: Ce, usrArray: ye, selectedSet: "MSTRSet", singleSetting: [] }, plugins: [Object(we.a)({ storage: { getItem: function getItem(e) {
            return Se.a.get(e);
          }, setItem: function setItem(e, t) {
            return Se.a.set(e, t, { expires: 7, secure: !1 });
          }, removeItem: function removeItem(e) {
            return Se.a.remove(e);
          } } })], mutations: { authUser: function authUser(e, t) {
          e.accessToken = t.token, e.isLoggedIn = !0, console.log(t.token);
        }, authChecked: function authChecked(e) {
          e.isLoggedIn = !0;
        }, logoutUser: function logoutUser(e, t) {
          Se.a.remove("accessToken", "userId", "token"), e.isLoggedIn = !1, e.accessToken = "", console.log(t);
        }, changeSet: function changeSet(e, t) {
          console.log("selected", t), e.selectedSet = t, console.log(e.selectedSet);
        }, addDevices: function addDevices(e, t) {
          e.data = t, console.log("state data ", e.data);
        }, singleDevice: function singleDevice(e, t) {
          e.singleDevice = t, new Particle().getVariable({ deviceId: e.singleDevice, name: "get" + e.selectedSet, auth: e.accessToken }).then(function (t) {
            var i = t.body.result;console.log("devicecsv: ", i);var n = i.split(","),
                a = [],
                s = "MSTRSet" === e.selectedSet ? Ce : ye;for (var o in n) {
              var l = s.indexOf(s[o]);a.push({ name: s[o], value: n[o], key: l });
            }e.singleDeviceData = a, console.log("CombinedArray after is: ", a);
          });
        }, editSingleSetting: function editSingleSetting(e, t) {
          var i = new Particle(),
              n = t.key + ":" + t.value;i.callFunction({ deviceId: e.singleDevice, name: "set" + e.selectedSet, argument: n, auth: e.accessToken }).then(function (e) {
            console.log("Function called succesfully:", e);
          }, function (e) {
            console.log("An error occurred:", e);
          });
        }, saveAllSettings: function saveAllSettings(e) {
          console.log("SaveAllSettings fired!...");var t = new Particle(),
              i = e.singleSetting,
              n = i.map(function (e) {
            return e.value;
          }).join(",");console.log("csvarray: ", n), t.callFunction({ deviceId: e.singleDevice, name: "setMSTRSet", argument: n, auth: e.accessToken }).then(function (e) {
            console.log("Function called succesfully:", e);
          }, function (e) {
            console.log("An error occurred:", e);
          });
        } }, getters: { data: function data(e) {
          return e.data;
        }, singleDevice: function singleDevice(e) {
          return e.singleDevice;
        }, singleDeviceData: function singleDeviceData(e) {
          return e.singleDeviceData;
        }, isLoggedIn: function isLoggedIn(e) {
          return e.isLoggedIn;
        }, selectedSet: function selectedSet(e) {
          return e.selectedSet;
        } }, actions: { login: function login(e, t) {
          var i = e.commit;new Particle().login({ username: t.username, password: t.password }).then(function (e) {
            console.log("res: ", e.body), i("authUser", { token: e.body.access_token }), Ae.push("/home");
          }).catch(function (e) {
            return console.log("failed to login", e);
          });
        }, logout: function logout(e, t) {
          (0, e.commit)("logoutUser", t), Ae.push("/");
        }, fetchDevices: function fetchDevices(e) {
          var t = e.commit,
              i = new Particle(),
              n = this.state.accessToken;i.listDevices({ auth: n }).then(function (e) {
            console.log("Devices", e), t("addDevices", e.body);
          }).catch(function (e) {
            return console.log("List devices failed ", e);
          });
        }, selectedDevice: function selectedDevice(e, t) {
          var i = e.commit;console.log("storeSelectedDevice: ", t), i("singleDevice", t), Ae.push("/dashboard");
        }, editSetting: function editSetting(e, t) {
          var i = e.commit;console.log("storeEditSetting: ", t), i("editSingleSetting", t);
        }, saveSettings: function saveSettings(e) {
          (0, e.commit)("saveAllSettings");
        }, selectSet: function selectSet(e, t) {
          (0, e.commit)("changeSet", t);
        } } });v.a.use(d.a);var Re = [{ path: "/home", name: "Home", component: A }, { path: "/", name: "Login", component: O }, { path: "/dashboard", name: "Dashboard", component: ke }],
        Ae = new d.a(Re),
        Ve = { methods: { onLogout: function onLogout() {
          this.$store.dispatch("logout");
        }, onBack: function onBack() {
          "Dashboard" === this.$route.name && Ae.push("/home");
        } } },
        Ee = function Ee() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("v-ons-toolbar", { staticClass: "header-toolbar", attrs: { modifier: "material" } }, [i("div", { staticClass: "left title" }, ["Dashboard" === e.$route.name ? i("v-ons-button", { attrs: { modifier: "quiet", ripple: "" }, on: { click: e.onBack } }, [i("i", { staticClass: "fa fa-chevron-left icon", attrs: { "aria-hidden": "true" } })]) : e._e()], 1), e._v(" "), i("div", { staticClass: "center title" }, [e._v("\n    " + e._s(e.$route.name) + "\n  ")]), e._v(" "), i("div", { staticClass: "right" }, [i("v-ons-button", { attrs: { modifier: "quiet", ripple: "" }, on: { click: e.onLogout } }, [i("i", { staticClass: "fa fa-power-off icon", attrs: { "aria-hidden": "true" } })])], 1)]);
    },
        Pe = [],
        Ie = { render: Ee, staticRenderFns: Pe },
        He = Ie,
        Le = i("VU/8"),
        $e = r,
        Be = Le(Ve, He, !1, $e, "data-v-100effee", null),
        Oe = Be.exports,
        We = i("4zzB"),
        Ue = { name: "app", components: { appHeader: Oe, appFooter: We.default }, computed: Object(Ne.b)(["isLoggedIn"]) },
        Fe = function Fe() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "app" } }, [i("app-header", { directives: [{ name: "show", rawName: "v-show", value: e.isLoggedIn, expression: "isLoggedIn" }] }), e._v(" "), i("router-view", { staticClass: "main-margin" }), e._v(" "), i("app-footer", { staticClass: "sticky" })], 1);
    },
        je = [],
        Ge = { render: Fe, staticRenderFns: je },
        Ye = Ge,
        Ze = i("VU/8"),
        ze = m,
        qe = Ze(Ue, Ye, !1, ze, "data-v-eaa098ec", null),
        Xe = qe.exports,
        Je = i("GS+f"),
        Ke = i("oRW0"),
        Qe = i("U0NZ"),
        et = i("IrMo"),
        tt = i("bGwf"),
        it = i("BI8r"),
        nt = i("SvdY"),
        at = i("IvAD"),
        st = i("vhtG"),
        ot = i("JmNE"),
        lt = i("9DUV"),
        ct = i("Adr3"),
        ut = i("D8ei"),
        rt = i("x6ey"),
        mt = i("OPoU"),
        vt = i("LoEi");v.a.use(Je.a), v.a.component(Ke.a.name, Ke.a), v.a.component(et.a.name, et.a), v.a.component(it.a.name, it.a), v.a.component(tt.a.name, tt.a), v.a.component(nt.a.name, nt.a), v.a.component(at.a.name, at.a), v.a.component(Qe.a.name, Qe.a), v.a.component(st.a.name, st.a), v.a.component(ot.a.name, ot.a), v.a.component(lt.a.name, lt.a), v.a.component(ct.a.name, ct.a), v.a.component(ut.a.name, ut.a), v.a.component(rt.a.name, rt.a), v.a.component(mt.a.name, mt.a), v.a.component(vt.a.name, vt.a), v.a.config.productionTip = !1, new v.a({ el: "#app", router: Ae, store: Te, template: "<App/>", components: { App: Xe } });
  }, UUVa: function UUVa(e, t) {}, "Zw/b": function ZwB(e, t) {}, cihy: function cihy(e, t) {}, hdH6: function hdH6(e, t) {}, jiPD: function jiPD(e, t, i) {
    "use strict";
    var n = function n() {
      var e = this,
          t = e.$createElement;e._self._c;return e._m(0);
    },
        a = [function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("section", [i("a", { attrs: { href: "http://www.lumiflow.nl/" } }, [e._v("Lumiflow")]), e._v(" "), i("a", { attrs: { href: "https://www.kasperkamperman.com/" } }, [e._v("Kasper Kamperman")])]);
    }],
        s = { render: n, staticRenderFns: a };t.a = s;
  }, l14S: function l14S(e, t) {}, sffx: function sffx(e, t) {}, vPpa: function vPpa(e, t) {} }, ["NHnr"]);
//# sourceMappingURL=app.c607bcd0a79d84dfce93.js.map
//# sourceMappingURL=app.c607bcd0a79d84dfce93.js.map