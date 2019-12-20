"use strict";
var THREE = {
    REVISION: "71"
};
"object" == typeof module && (module.exports = THREE), void 0 === Math.sign && (Math.sign = function(t) {
        return 0 > t ? -1 : 0 < t ? 1 : +t
    }), THREE.log = function() {
        console.log.apply(console, arguments)
    }, THREE.warn = function() {
        console.warn.apply(console, arguments)
    }, THREE.error = function() {
        console.error.apply(console, arguments)
    }, THREE.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }, THREE.CullFaceNone = 0, THREE.CullFaceBack = 1, THREE.CullFaceFront = 2, THREE.CullFaceFrontBack = 3, THREE.FrontFaceDirectionCW = 0, THREE.FrontFaceDirectionCCW = 1, THREE.BasicShadowMap = 0, THREE.PCFShadowMap = 1, THREE.PCFSoftShadowMap = 2, THREE.FrontSide = 0, THREE.BackSide = 1, THREE.DoubleSide = 2, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NoBlending = 0, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.CustomBlending = 5, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.MinEquation = 103, THREE.MaxEquation = 104, THREE.ZeroFactor = 200, THREE.OneFactor = 201, THREE.SrcColorFactor = 202, THREE.OneMinusSrcColorFactor = 203, THREE.SrcAlphaFactor = 204, THREE.OneMinusSrcAlphaFactor = 205, THREE.DstAlphaFactor = 206, THREE.OneMinusDstAlphaFactor = 207, THREE.DstColorFactor = 208, THREE.OneMinusDstColorFactor = 209, THREE.SrcAlphaSaturateFactor = 210, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.AddOperation = 2, THREE.UVMapping = 300, THREE.CubeReflectionMapping = 301, THREE.CubeRefractionMapping = 302, THREE.EquirectangularReflectionMapping = 303, THREE.EquirectangularRefractionMapping = 304, THREE.SphericalReflectionMapping = 305, THREE.RepeatWrapping = 1e3, THREE.ClampToEdgeWrapping = 1001, THREE.MirroredRepeatWrapping = 1002, THREE.NearestFilter = 1003, THREE.NearestMipMapNearestFilter = 1004, THREE.NearestMipMapLinearFilter = 1005, THREE.LinearFilter = 1006, THREE.LinearMipMapNearestFilter = 1007, THREE.LinearMipMapLinearFilter = 1008, THREE.UnsignedByteType = 1009, THREE.ByteType = 1010, THREE.ShortType = 1011, THREE.UnsignedShortType = 1012, THREE.IntType = 1013, THREE.UnsignedIntType = 1014, THREE.FloatType = 1015, THREE.HalfFloatType = 1025, THREE.UnsignedShort4444Type = 1016, THREE.UnsignedShort5551Type = 1017, THREE.UnsignedShort565Type = 1018, THREE.AlphaFormat = 1019, THREE.RGBFormat = 1020, THREE.RGBAFormat = 1021, THREE.LuminanceFormat = 1022, THREE.LuminanceAlphaFormat = 1023, THREE.RGBEFormat = THREE.RGBAFormat, THREE.RGB_S3TC_DXT1_Format = 2001, THREE.RGBA_S3TC_DXT1_Format = 2002, THREE.RGBA_S3TC_DXT3_Format = 2003, THREE.RGBA_S3TC_DXT5_Format = 2004, THREE.RGB_PVRTC_4BPPV1_Format = 2100, THREE.RGB_PVRTC_2BPPV1_Format = 2101, THREE.RGBA_PVRTC_4BPPV1_Format = 2102, THREE.RGBA_PVRTC_2BPPV1_Format = 2103, THREE.Projector = function() {
        THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
            THREE.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
        }, this.unprojectVector = function(t, e) {
            THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
        }, this.pickingRay = function(t, e) {
            THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }, THREE.CanvasRenderer = function() {
        THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
    }, THREE.Color = function(t) {
        return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(t)
    }, THREE.Color.prototype = {
        constructor: THREE.Color,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t instanceof THREE.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setHex: function(t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function(t, e, r) {
            return this.r = t, this.g = e, this.b = r, this
        },
        setHSL: function(t, e, r) {
            if (0 === e) this.r = this.g = this.b = r;
            else {
                var n = function(t, e, r) {
                    return 0 > r && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : .5 > r ? e : r < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - r) : t
                };
                e = .5 >= r ? r * (1 + e) : r + e - r * e, r = 2 * r - e, this.r = n(r, e, t + 1 / 3), this.g = n(r, e, t), this.b = n(r, e, t - 1 / 3)
            }
            return this
        },
        setStyle: function(t) {
            return /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(t) ? (t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(t), this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this) : /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(t) ? (t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(t), this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this) : /^\#([0-9a-f]{6})$/i.test(t) ? (t = /^\#([0-9a-f]{6})$/i.exec(t), this.setHex(parseInt(t[1], 16)), this) : /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(t) ? (t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t), this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this) : /^(\w+)$/i.test(t) ? (this.setHex(THREE.ColorKeywords[t]), this) : void 0
        },
        copy: function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var r = 0 < e ? 1 / e : 1;
            return this.r = Math.pow(t.r, r), this.g = Math.pow(t.g, r), this.b = Math.pow(t.b, r), this
        },
        convertGammaToLinear: function() {
            var t = this.r,
                e = this.g,
                r = this.b;
            return this.r = t * t, this.g = e * e, this.b = r * r, this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            t = t || {
                h: 0,
                s: 0,
                l: 0
            };
            var e, r = this.r,
                n = this.g,
                i = this.b,
                o = Math.max(r, n, i),
                a = Math.min(r, n, i),
                s = (a + o) / 2;
            if (a === o) a = e = 0;
            else {
                var h = o - a,
                    a = .5 >= s ? h / (o + a) : h / (2 - o - a);
                switch (o) {
                    case r:
                        e = (n - i) / h + (n < i ? 6 : 0);
                        break;
                    case n:
                        e = (i - r) / h + 2;
                        break;
                    case i:
                        e = (r - n) / h + 4
                }
                e /= 6
            }
            return t.h = e, t.s = a, t.l = s, t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, r) {
            var n = this.getHSL();
            return n.h += t, n.s += e, n.l += r, this.setHSL(n.h, n.s, n.l), this
        },
        add: function(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function(t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        multiply: function(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function(t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t) {
            return this.r = t[0], this.g = t[1], this.b = t[2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        clone: function() {
            return (new THREE.Color).setRGB(this.r, this.g, this.b)
        }
    }, THREE.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, THREE.Quaternion = function(t, e, r, n) {
        this._x = t || 0, this._y = e || 0, this._z = r || 0, this._w = void 0 !== n ? n : 1
    }, THREE.Quaternion.prototype = {
        constructor: THREE.Quaternion,
        _x: 0,
        _y: 0,
        _z: 0,
        _w: 0,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(t) {
            this._w = t, this.onChangeCallback()
        },
        set: function(t, e, r, n) {
            return this._x = t, this._y = e, this._z = r, this._w = n, this.onChangeCallback(), this
        },
        copy: function(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function(t, e) {
            if (!1 == t instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var r = Math.cos(t._x / 2),
                n = Math.cos(t._y / 2),
                i = Math.cos(t._z / 2),
                o = Math.sin(t._x / 2),
                a = Math.sin(t._y / 2),
                s = Math.sin(t._z / 2);
            return "XYZ" === t.order ? (this._x = o * n * i + r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i - o * a * s) : "YXZ" === t.order ? (this._x = o * n * i + r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i + o * a * s) : "ZXY" === t.order ? (this._x = o * n * i - r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i - o * a * s) : "ZYX" === t.order ? (this._x = o * n * i - r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i + o * a * s) : "YZX" === t.order ? (this._x = o * n * i + r * a * s, this._y = r * a * i + o * n * s, this._z = r * n * s - o * a * i, this._w = r * n * i - o * a * s) : "XZY" === t.order && (this._x = o * n * i - r * a * s, this._y = r * a * i - o * n * s, this._z = r * n * s + o * a * i, this._w = r * n * i + o * a * s), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(t, e) {
            var r = e / 2,
                n = Math.sin(r);
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(r), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t) {
            var e = t.elements,
                r = e[0];
            t = e[4];
            var n = e[8],
                i = e[1],
                o = e[5],
                a = e[9],
                s = e[2],
                h = e[6],
                e = e[10],
                c = r + o + e;
            return 0 < c ? (r = .5 / Math.sqrt(c + 1), this._w = .25 / r, this._x = (h - a) * r, this._y = (n - s) * r, this._z = (i - t) * r) : r > o && r > e ? (r = 2 * Math.sqrt(1 + r - o - e), this._w = (h - a) / r, this._x = .25 * r, this._y = (t + i) / r, this._z = (n + s) / r) : o > e ? (r = 2 * Math.sqrt(1 + o - r - e), this._w = (n - s) / r, this._x = (t + i) / r, this._y = .25 * r, this._z = (a + h) / r) : (r = 2 * Math.sqrt(1 + e - r - o), this._w = (i - t) / r, this._x = (n + s) / r, this._y = (a + h) / r, this._z = .25 * r), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new THREE.Vector3), e = r.dot(n) + 1, 1e-6 > e ? (e = 0, Math.abs(r.x) > Math.abs(r.z) ? t.set(-r.y, r.x, 0) : t.set(0, -r.z, r.y)) : t.crossVectors(r, n), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize(), this
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize(), this
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._z = this._y = this._x = 0, this._w = 1) : (t = 1 / t, this._x *= t, this._y *= t, this._z *= t, this._w *= t), this.onChangeCallback(), this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        multiplyQuaternions: function(t, e) {
            var r = t._x,
                n = t._y,
                i = t._z,
                o = t._w,
                a = e._x,
                s = e._y,
                h = e._z,
                c = e._w;
            return this._x = r * c + o * a + n * h - i * s, this._y = n * c + o * s + i * a - r * h, this._z = i * c + o * h + r * s - n * a, this._w = o * c - r * a - n * s - i * h, this.onChangeCallback(), this
        },
        multiplyVector3: function(t) {
            return THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
        },
        slerp: function(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var r = this._x,
                n = this._y,
                i = this._z,
                o = this._w,
                a = o * t._w + r * t._x + n * t._y + i * t._z;
            if (0 > a ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), 1 <= a) return this._w = o, this._x = r, this._y = n, this._z = i, this;
            var s = Math.acos(a),
                h = Math.sqrt(1 - a * a);
            return .001 > Math.abs(h) ? (this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (n + this._y), this._z = .5 * (i + this._z), this) : (a = Math.sin((1 - e) * s) / h, s = Math.sin(e * s) / h, this._w = o * a + this._w * s, this._x = r * a + this._x * s, this._y = n * a + this._y * s, this._z = i * a + this._z * s, this.onChangeCallback(), this)
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {},
        clone: function() {
            return new THREE.Quaternion(this._x, this._y, this._z, this._w)
        }
    }, THREE.Quaternion.slerp = function(t, e, r, n) {
        return r.copy(t).slerp(e, n)
    }, THREE.Vector2 = function(t, e) {
        this.x = t || 0, this.y = e || 0
    }, THREE.Vector2.prototype = {
        constructor: THREE.Vector2,
        set: function(t, e) {
            return this.x = t, this.y = e, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function(t) {
            return 0 !== t ? (t = 1 / t, this.x *= t, this.y *= t) : this.y = this.x = 0, this
        },
        min: function(t) {
            return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this
        },
        max: function(t) {
            return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this
        },
        clamp: function(t, e) {
            return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this
        },
        clampScalar: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new THREE.Vector2, e = new THREE.Vector2), t.set(r, r), e.set(n, n), this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x;
            return t = this.y - t.y, e * e + t * t
        },
        setLength: function(t) {
            var e = this.length();
            return 0 !== e && t !== e && this.multiplyScalar(t / e), this
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t), this
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0), e = e * t.itemSize + r, this.x = t.array[e], this.y = t.array[e + 1], this
        },
        clone: function() {
            return new THREE.Vector2(this.x, this.y)
        }
    }, THREE.Vector3 = function(t, e, r) {
        this.x = t || 0, this.y = e || 0, this.z = r || 0
    }, THREE.Vector3.prototype = {
        constructor: THREE.Vector3,
        set: function(t, e, r) {
            return this.x = t, this.y = e, this.z = r, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function() {
            var t;
            return function(e) {
                return !1 == e instanceof THREE.Euler && THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new THREE.Quaternion), this.applyQuaternion(t.setFromEuler(e)), this
            }
        }(),
        applyAxisAngle: function() {
            var t;
            return function(e, r) {
                return void 0 === t && (t = new THREE.Quaternion), this.applyQuaternion(t.setFromAxisAngle(e, r)), this
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z;
            return t = t.elements, this.x = t[0] * e + t[3] * r + t[6] * n, this.y = t[1] * e + t[4] * r + t[7] * n, this.z = t[2] * e + t[5] * r + t[8] * n, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z;
            return t = t.elements, this.x = t[0] * e + t[4] * r + t[8] * n + t[12], this.y = t[1] * e + t[5] * r + t[9] * n + t[13], this.z = t[2] * e + t[6] * r + t[10] * n + t[14], this
        },
        applyProjection: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z;
            t = t.elements;
            var i = 1 / (t[3] * e + t[7] * r + t[11] * n + t[15]);
            return this.x = (t[0] * e + t[4] * r + t[8] * n + t[12]) * i, this.y = (t[1] * e + t[5] * r + t[9] * n + t[13]) * i, this.z = (t[2] * e + t[6] * r + t[10] * n + t[14]) * i, this
        },
        applyQuaternion: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z,
                i = t.x,
                o = t.y,
                a = t.z;
            t = t.w;
            var s = t * e + o * n - a * r,
                h = t * r + a * e - i * n,
                c = t * n + i * r - o * e,
                e = -i * e - o * r - a * n;
            return this.x = s * t + e * -i + h * -a - c * -o, this.y = h * t + e * -o + c * -i - s * -a, this.z = c * t + e * -a + s * -o - h * -i, this
        },
        project: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new THREE.Matrix4), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyProjection(t)
            }
        }(),
        unproject: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new THREE.Matrix4), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyProjection(t)
            }
        }(),
        transformDirection: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z;
            return t = t.elements, this.x = t[0] * e + t[4] * r + t[8] * n, this.y = t[1] * e + t[5] * r + t[9] * n, this.z = t[2] * e + t[6] * r + t[10] * n, this.normalize(), this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function(t) {
            return 0 !== t ? (t = 1 / t, this.x *= t, this.y *= t, this.z *= t) : this.z = this.y = this.x = 0, this
        },
        min: function(t) {
            return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this
        },
        max: function(t) {
            return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this
        },
        clamp: function(t, e) {
            return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this
        },
        clampScalar: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new THREE.Vector3, e = new THREE.Vector3), t.set(r, r, r), e.set(n, n, n), this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            var e = this.length();
            return 0 !== e && t !== e && this.multiplyScalar(t / e), this
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t), this
        },
        cross: function(t, e) {
            if (void 0 !== e) return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e);
            var r = this.x,
                n = this.y,
                i = this.z;
            return this.x = n * t.z - i * t.y, this.y = i * t.x - r * t.z, this.z = r * t.y - n * t.x, this
        },
        crossVectors: function(t, e) {
            var r = t.x,
                n = t.y,
                i = t.z,
                o = e.x,
                a = e.y,
                s = e.z;
            return this.x = n * s - i * a, this.y = i * o - r * s, this.z = r * a - n * o, this
        },
        projectOnVector: function() {
            var t, e;
            return function(r) {
                return void 0 === t && (t = new THREE.Vector3), t.copy(r).normalize(), e = this.dot(t), this.copy(t).multiplyScalar(e)
            }
        }(),
        projectOnPlane: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new THREE.Vector3), t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new THREE.Vector3), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(t) {
            return t = this.dot(t) / (this.length() * t.length()), Math.acos(THREE.Math.clamp(t, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                r = this.y - t.y;
            return t = this.z - t.z, e * e + r * r + t * t
        },
        setEulerFromRotationMatrix: function(t, e) {
            THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function(t, e) {
            THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
        },
        setFromMatrixPosition: function(t) {
            return this.x = t.elements[12], this.y = t.elements[13], this.z = t.elements[14], this
        },
        setFromMatrixScale: function(t) {
            var e = this.set(t.elements[0], t.elements[1], t.elements[2]).length(),
                r = this.set(t.elements[4], t.elements[5], t.elements[6]).length();
            return t = this.set(t.elements[8], t.elements[9], t.elements[10]).length(), this.x = e, this.y = r, this.z = t, this
        },
        setFromMatrixColumn: function(t, e) {
            var r = 4 * t,
                n = e.elements;
            return this.x = n[r], this.y = n[r + 1], this.z = n[r + 2], this
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0), e = e * t.itemSize + r, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this
        },
        clone: function() {
            return new THREE.Vector3(this.x, this.y, this.z)
        }
    }, THREE.Vector4 = function(t, e, r, n) {
        this.x = t || 0, this.y = e || 0, this.z = r || 0, this.w = void 0 !== n ? n : 1
    }, THREE.Vector4.prototype = {
        constructor: THREE.Vector4,
        set: function(t, e, r, n) {
            return this.x = t, this.y = e, this.z = r, this.w = n, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setW: function(t) {
            return this.w = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                r = this.y,
                n = this.z,
                i = this.w;
            return t = t.elements, this.x = t[0] * e + t[4] * r + t[8] * n + t[12] * i, this.y = t[1] * e + t[5] * r + t[9] * n + t[13] * i, this.z = t[2] * e + t[6] * r + t[10] * n + t[14] * i, this.w = t[3] * e + t[7] * r + t[11] * n + t[15] * i, this
        },
        divideScalar: function(t) {
            return 0 !== t ? (t = 1 / t, this.x *= t, this.y *= t, this.z *= t, this.w *= t) : (this.z = this.y = this.x = 0, this.w = 1), this
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return 1e-4 > e ? (this.x = 1, this.z = this.y = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, r, n;
            t = t.elements;
            var i = t[0];
            n = t[4];
            var o = t[8],
                a = t[1],
                s = t[5],
                h = t[9];
            r = t[2], e = t[6];
            var c = t[10];
            return .01 > Math.abs(n - a) && .01 > Math.abs(o - r) && .01 > Math.abs(h - e) ? .1 > Math.abs(n + a) && .1 > Math.abs(o + r) && .1 > Math.abs(h + e) && .1 > Math.abs(i + s + c - 3) ? (this.set(1, 0, 0, 0), this) : (t = Math.PI, i = (i + 1) / 2, s = (s + 1) / 2, c = (c + 1) / 2, n = (n + a) / 4, o = (o + r) / 4, h = (h + e) / 4, i > s && i > c ? .01 > i ? (e = 0, n = r = .707106781) : (e = Math.sqrt(i), r = n / e, n = o / e) : s > c ? .01 > s ? (e = .707106781, r = 0, n = .707106781) : (r = Math.sqrt(s), e = n / r, n = h / r) : .01 > c ? (r = e = .707106781, n = 0) : (n = Math.sqrt(c), e = o / n, r = h / n), this.set(e, r, n, t), this) : (t = Math.sqrt((e - h) * (e - h) + (o - r) * (o - r) + (a - n) * (a - n)), .001 > Math.abs(t) && (t = 1), this.x = (e - h) / t, this.y = (o - r) / t, this.z = (a - n) / t, this.w = Math.acos((i + s + c - 1) / 2), this)
        },
        min: function(t) {
            return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this.w > t.w && (this.w = t.w), this
        },
        max: function(t) {
            return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this.w < t.w && (this.w = t.w), this
        },
        clamp: function(t, e) {
            return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this.w < t.w ? this.w = t.w : this.w > e.w && (this.w = e.w), this
        },
        clampScalar: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new THREE.Vector4, e = new THREE.Vector4), t.set(r, r, r, r), e.set(n, n, n, n), this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            var e = this.length();
            return 0 !== e && t !== e && this.multiplyScalar(t / e), this
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t), this
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0), e = e * t.itemSize + r, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this.w = t.array[e + 3], this
        },
        clone: function() {
            return new THREE.Vector4(this.x, this.y, this.z, this.w)
        }
    }, THREE.Euler = function(t, e, r, n) {
        this._x = t || 0, this._y = e || 0, this._z = r || 0, this._order = n || THREE.Euler.DefaultOrder
    },
    THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), THREE.Euler.DefaultOrder = "XYZ", THREE.Euler.prototype = {
        constructor: THREE.Euler,
        _x: 0,
        _y: 0,
        _z: 0,
        _order: THREE.Euler.DefaultOrder,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t, this.onChangeCallback()
        },
        set: function(t, e, r, n) {
            return this._x = t, this._y = e, this._z = r, this._order = n || this._order, this.onChangeCallback(), this
        },
        copy: function(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t, e, r) {
            var n = THREE.Math.clamp,
                i = t.elements;
            t = i[0];
            var o = i[4],
                a = i[8],
                s = i[1],
                h = i[5],
                c = i[9],
                l = i[2],
                u = i[6],
                i = i[10];
            return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(n(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(-c, i), this._z = Math.atan2(-o, t)) : (this._x = Math.atan2(u, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(c, -1, 1)), .99999 > Math.abs(c) ? (this._y = Math.atan2(a, i), this._z = Math.atan2(s, h)) : (this._y = Math.atan2(-l, t), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(u, -1, 1)), .99999 > Math.abs(u) ? (this._y = Math.atan2(-l, i), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(s, t))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(u, i), this._z = Math.atan2(s, t)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2(-c, h), this._y = Math.atan2(-l, t)) : (this._x = 0, this._y = Math.atan2(a, i))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(u, h), this._y = Math.atan2(a, t)) : (this._x = Math.atan2(-c, i), this._y = 0)) : THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== r && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new THREE.Matrix4), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, r, n), this
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function() {
            var t = new THREE.Quaternion;
            return function(e) {
                t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {},
        clone: function() {
            return new THREE.Euler(this._x, this._y, this._z, this._order)
        }
    }, THREE.Line3 = function(t, e) {
        this.start = void 0 !== t ? t : new THREE.Vector3, this.end = void 0 !== e ? e : new THREE.Vector3
    }, THREE.Line3.prototype = {
        constructor: THREE.Line3,
        set: function(t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        copy: function(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        center: function(t) {
            return (t || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return (t || new THREE.Vector3).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            var r = e || new THREE.Vector3;
            return this.delta(r).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3;
            return function(r, n) {
                t.subVectors(r, this.start), e.subVectors(this.end, this.start);
                var i = e.dot(e),
                    i = e.dot(t) / i;
                return n && (i = THREE.Math.clamp(i, 0, 1)), i
            }
        }(),
        closestPointToPoint: function(t, e, r) {
            return t = this.closestPointToPointParameter(t, e), r = r || new THREE.Vector3, this.delta(r).multiplyScalar(t).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        },
        clone: function() {
            return (new THREE.Line3).copy(this)
        }
    }, THREE.Box2 = function(t, e) {
        this.min = void 0 !== t ? t : new THREE.Vector2(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new THREE.Vector2((-(1 / 0)), (-(1 / 0)))
    }, THREE.Box2.prototype = {
        constructor: THREE.Box2,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new THREE.Vector2;
            return function(e, r) {
                var n = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
        },
        empty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        center: function(t) {
            return (t || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(t) {
            return (t || new THREE.Vector2).subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return (e || new THREE.Vector2).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        isIntersectionBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return (e || new THREE.Vector2).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new THREE.Vector2;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        },
        clone: function() {
            return (new THREE.Box2).copy(this)
        }
    }, THREE.Box3 = function(t, e) {
        this.min = void 0 !== t ? t : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new THREE.Vector3((-(1 / 0)), (-(1 / 0)), (-(1 / 0)))
    }, THREE.Box3.prototype = {
        constructor: THREE.Box3,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new THREE.Vector3;
            return function(e, r) {
                var n = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
            }
        }(),
        setFromObject: function() {
            var t = new THREE.Vector3;
            return function(e) {
                var r = this;
                return e.updateMatrixWorld(!0), this.makeEmpty(), e.traverse(function(e) {
                    var n = e.geometry;
                    if (void 0 !== n)
                        if (n instanceof THREE.Geometry)
                            for (var i = n.vertices, n = 0, o = i.length; n < o; n++) t.copy(i[n]), t.applyMatrix4(e.matrixWorld), r.expandByPoint(t);
                        else if (n instanceof THREE.BufferGeometry && void 0 !== n.attributes.position)
                        for (i = n.attributes.position.array, n = 0, o = i.length; n < o; n += 3) t.set(i[n], i[n + 1], i[n + 2]), t.applyMatrix4(e.matrixWorld), r.expandByPoint(t)
                }), this
            }
        }(),
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
        },
        empty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function(t) {
            return (t || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(t) {
            return (t || new THREE.Vector3).subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return (e || new THREE.Vector3).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        isIntersectionBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        clampPoint: function(t, e) {
            return (e || new THREE.Vector3).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new THREE.Vector3;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new THREE.Vector3;
            return function(e) {
                return e = e || new THREE.Sphere, e.center = this.center(), e.radius = .5 * this.size(t).length(), e
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function() {
            var t = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
            return function(e) {
                return t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.makeEmpty(), this.setFromPoints(t), this
            }
        }(),
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        },
        clone: function() {
            return (new THREE.Box3).copy(this)
        }
    }, THREE.Matrix3 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), 0 < arguments.length && THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }, THREE.Matrix3.prototype = {
        constructor: THREE.Matrix3,
        set: function(t, e, r, n, i, o, a, s, h) {
            var c = this.elements;
            return c[0] = t, c[3] = e, c[6] = r, c[1] = n, c[4] = i, c[7] = o, c[2] = a, c[5] = s, c[8] = h, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        copy: function(t) {
            return t = t.elements, this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
        },
        multiplyVector3: function(t) {
            return THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        multiplyVector3Array: function(t) {
            return THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        },
        applyToVector3Array: function() {
            var t = new THREE.Vector3;
            return function(e, r, n) {
                void 0 === r && (r = 0), void 0 === n && (n = e.length);
                for (var i = 0; i < n; i += 3, r += 3) t.x = e[r], t.y = e[r + 1], t.z = e[r + 2], t.applyMatrix3(this), e[r] = t.x, e[r + 1] = t.y, e[r + 2] = t.z;
                return e
            }
        }(),
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                r = t[1],
                n = t[2],
                i = t[3],
                o = t[4],
                a = t[5],
                s = t[6],
                h = t[7],
                t = t[8];
            return e * o * t - e * a * h - r * i * t + r * a * s + n * i * h - n * o * s
        },
        getInverse: function(t, e) {
            var r = t.elements,
                n = this.elements;
            if (n[0] = r[10] * r[5] - r[6] * r[9], n[1] = -r[10] * r[1] + r[2] * r[9], n[2] = r[6] * r[1] - r[2] * r[5], n[3] = -r[10] * r[4] + r[6] * r[8], n[4] = r[10] * r[0] - r[2] * r[8], n[5] = -r[6] * r[0] + r[2] * r[4], n[6] = r[9] * r[4] - r[5] * r[8], n[7] = -r[9] * r[0] + r[1] * r[8], n[8] = r[5] * r[0] - r[1] * r[4], r = r[0] * n[0] + r[1] * n[3] + r[2] * n[6], 0 === r) {
                if (e) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
                return THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"), this.identity(), this
            }
            return this.multiplyScalar(1 / r), this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        flattenToArrayOffset: function(t, e) {
            var r = this.elements;
            return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t
        },
        getNormalMatrix: function(t) {
            return this.getInverse(t).transpose(), this
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        fromArray: function(t) {
            return this.elements.set(t), this
        },
        toArray: function() {
            var t = this.elements;
            return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]
        },
        clone: function() {
            return (new THREE.Matrix3).fromArray(this.elements)
        }
    }, THREE.Matrix4 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), 0 < arguments.length && THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }, THREE.Matrix4.prototype = {
        constructor: THREE.Matrix4,
        set: function(t, e, r, n, i, o, a, s, h, c, l, u, f, p, d, E) {
            var m = this.elements;
            return m[0] = t, m[4] = e, m[8] = r, m[12] = n, m[1] = i, m[5] = o, m[9] = a, m[13] = s, m[2] = h, m[6] = c, m[10] = l, m[14] = u, m[3] = f, m[7] = p, m[11] = d, m[15] = E, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        copy: function(t) {
            return this.elements.set(t.elements), this
        },
        extractPosition: function(t) {
            return THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        },
        copyPosition: function(t) {
            var e = this.elements;
            return t = t.elements, e[12] = t[12], e[13] = t[13], e[14] = t[14], this
        },
        extractBasis: function(t, e, r) {
            var n = this.elements;
            return t.set(n[0], n[1], n[2]), e.set(n[4], n[5], n[6]), r.set(n[8], n[9], n[10]), this
        },
        makeBasis: function(t, e, r) {
            return this.set(t.x, e.x, r.x, 0, t.y, e.y, r.y, 0, t.z, e.z, r.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function() {
            var t = new THREE.Vector3;
            return function(e) {
                var r = this.elements;
                e = e.elements;
                var n = 1 / t.set(e[0], e[1], e[2]).length(),
                    i = 1 / t.set(e[4], e[5], e[6]).length(),
                    o = 1 / t.set(e[8], e[9], e[10]).length();
                return r[0] = e[0] * n, r[1] = e[1] * n, r[2] = e[2] * n, r[4] = e[4] * i, r[5] = e[5] * i, r[6] = e[6] * i, r[8] = e[8] * o, r[9] = e[9] * o, r[10] = e[10] * o, this
            }
        }(),
        makeRotationFromEuler: function(t) {
            !1 == t instanceof THREE.Euler && THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                r = t.x,
                n = t.y,
                i = t.z,
                o = Math.cos(r),
                r = Math.sin(r),
                a = Math.cos(n),
                n = Math.sin(n),
                s = Math.cos(i),
                i = Math.sin(i);
            if ("XYZ" === t.order) {
                t = o * s;
                var h = o * i,
                    c = r * s,
                    l = r * i;
                e[0] = a * s, e[4] = -a * i, e[8] = n, e[1] = h + c * n, e[5] = t - l * n, e[9] = -r * a, e[2] = l - t * n, e[6] = c + h * n, e[10] = o * a
            } else "YXZ" === t.order ? (t = a * s, h = a * i, c = n * s, l = n * i, e[0] = t + l * r, e[4] = c * r - h, e[8] = o * n, e[1] = o * i, e[5] = o * s, e[9] = -r, e[2] = h * r - c, e[6] = l + t * r, e[10] = o * a) : "ZXY" === t.order ? (t = a * s, h = a * i, c = n * s, l = n * i, e[0] = t - l * r, e[4] = -o * i, e[8] = c + h * r, e[1] = h + c * r, e[5] = o * s, e[9] = l - t * r, e[2] = -o * n, e[6] = r, e[10] = o * a) : "ZYX" === t.order ? (t = o * s, h = o * i, c = r * s, l = r * i, e[0] = a * s, e[4] = c * n - h, e[8] = t * n + l, e[1] = a * i, e[5] = l * n + t, e[9] = h * n - c, e[2] = -n, e[6] = r * a, e[10] = o * a) : "YZX" === t.order ? (t = o * a, h = o * n, c = r * a, l = r * n, e[0] = a * s, e[4] = l - t * i, e[8] = c * i + h, e[1] = i, e[5] = o * s, e[9] = -r * s, e[2] = -n * s, e[6] = h * i + c, e[10] = t - l * i) : "XZY" === t.order && (t = o * a, h = o * n, c = r * a, l = r * n, e[0] = a * s, e[4] = -i, e[8] = n * s, e[1] = t * i + l, e[5] = o * s, e[9] = h * i - c, e[2] = c * i - h, e[6] = r * s, e[10] = l * i + t);
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        setRotationFromQuaternion: function(t) {
            return THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        },
        makeRotationFromQuaternion: function(t) {
            var e = this.elements,
                r = t.x,
                n = t.y,
                i = t.z,
                o = t.w,
                a = r + r,
                s = n + n,
                h = i + i;
            t = r * a;
            var c = r * s,
                r = r * h,
                l = n * s,
                n = n * h,
                i = i * h,
                a = o * a,
                s = o * s,
                o = o * h;
            return e[0] = 1 - (l + i), e[4] = c - o, e[8] = r + s, e[1] = c + o, e[5] = 1 - (t + i), e[9] = n - a, e[2] = r - s, e[6] = n + a, e[10] = 1 - (t + l), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        lookAt: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3,
                r = new THREE.Vector3;
            return function(n, i, o) {
                var a = this.elements;
                return r.subVectors(n, i).normalize(), 0 === r.length() && (r.z = 1), t.crossVectors(o, r).normalize(), 0 === t.length() && (r.x += 1e-4, t.crossVectors(o, r).normalize()), e.crossVectors(r, t), a[0] = t.x, a[4] = e.x, a[8] = r.x, a[1] = t.y, a[5] = e.y, a[9] = r.y, a[2] = t.z, a[6] = e.z, a[10] = r.z, this
            }
        }(),
        multiply: function(t, e) {
            return void 0 !== e ? (THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        multiplyMatrices: function(t, e) {
            var r = t.elements,
                n = e.elements,
                i = this.elements,
                o = r[0],
                a = r[4],
                s = r[8],
                h = r[12],
                c = r[1],
                l = r[5],
                u = r[9],
                f = r[13],
                p = r[2],
                d = r[6],
                E = r[10],
                m = r[14],
                g = r[3],
                v = r[7],
                y = r[11],
                r = r[15],
                T = n[0],
                R = n[4],
                x = n[8],
                H = n[12],
                b = n[1],
                _ = n[5],
                w = n[9],
                M = n[13],
                S = n[2],
                A = n[6],
                C = n[10],
                L = n[14],
                P = n[3],
                F = n[7],
                D = n[11],
                n = n[15];
            return i[0] = o * T + a * b + s * S + h * P, i[4] = o * R + a * _ + s * A + h * F, i[8] = o * x + a * w + s * C + h * D, i[12] = o * H + a * M + s * L + h * n, i[1] = c * T + l * b + u * S + f * P, i[5] = c * R + l * _ + u * A + f * F, i[9] = c * x + l * w + u * C + f * D, i[13] = c * H + l * M + u * L + f * n, i[2] = p * T + d * b + E * S + m * P, i[6] = p * R + d * _ + E * A + m * F, i[10] = p * x + d * w + E * C + m * D, i[14] = p * H + d * M + E * L + m * n, i[3] = g * T + v * b + y * S + r * P, i[7] = g * R + v * _ + y * A + r * F, i[11] = g * x + v * w + y * C + r * D, i[15] = g * H + v * M + y * L + r * n, this
        },
        multiplyToArray: function(t, e, r) {
            var n = this.elements;
            return this.multiplyMatrices(t, e), r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3], r[4] = n[4], r[5] = n[5], r[6] = n[6], r[7] = n[7], r[8] = n[8], r[9] = n[9], r[10] = n[10], r[11] = n[11], r[12] = n[12], r[13] = n[13], r[14] = n[14], r[15] = n[15], this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        multiplyVector3: function(t) {
            return THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), t.applyProjection(this)
        },
        multiplyVector4: function(t) {
            return THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector3Array: function(t) {
            return THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        },
        applyToVector3Array: function() {
            var t = new THREE.Vector3;
            return function(e, r, n) {
                void 0 === r && (r = 0), void 0 === n && (n = e.length);
                for (var i = 0; i < n; i += 3, r += 3) t.x = e[r], t.y = e[r + 1], t.z = e[r + 2], t.applyMatrix4(this), e[r] = t.x, e[r + 1] = t.y, e[r + 2] = t.z;
                return e
            }
        }(),
        rotateAxis: function(t) {
            THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        },
        crossVector: function(t) {
            return THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                r = t[4],
                n = t[8],
                i = t[12],
                o = t[1],
                a = t[5],
                s = t[9],
                h = t[13],
                c = t[2],
                l = t[6],
                u = t[10],
                f = t[14];
            return t[3] * (+i * s * l - n * h * l - i * a * u + r * h * u + n * a * f - r * s * f) + t[7] * (+e * s * f - e * h * u + i * o * u - n * o * f + n * h * c - i * s * c) + t[11] * (+e * h * l - e * a * f - i * o * l + r * o * f + i * a * c - r * h * c) + t[15] * (-n * a * c - e * s * l + e * a * u + n * o * l - r * o * u + r * s * c)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        flattenToArrayOffset: function(t, e) {
            var r = this.elements;
            return t[e] = r[0], t[e + 1] = r[1], t[e + 2] = r[2], t[e + 3] = r[3], t[e + 4] = r[4], t[e + 5] = r[5], t[e + 6] = r[6], t[e + 7] = r[7], t[e + 8] = r[8], t[e + 9] = r[9], t[e + 10] = r[10], t[e + 11] = r[11], t[e + 12] = r[12], t[e + 13] = r[13], t[e + 14] = r[14], t[e + 15] = r[15], t
        },
        getPosition: function() {
            var t = new THREE.Vector3;
            return function() {
                THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                var e = this.elements;
                return t.set(e[12], e[13], e[14])
            }
        }(),
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function(t, e) {
            var r = this.elements,
                n = t.elements,
                i = n[0],
                o = n[4],
                a = n[8],
                s = n[12],
                h = n[1],
                c = n[5],
                l = n[9],
                u = n[13],
                f = n[2],
                p = n[6],
                d = n[10],
                E = n[14],
                m = n[3],
                g = n[7],
                v = n[11],
                n = n[15];
            if (r[0] = l * E * g - u * d * g + u * p * v - c * E * v - l * p * n + c * d * n, r[4] = s * d * g - a * E * g - s * p * v + o * E * v + a * p * n - o * d * n, r[8] = a * u * g - s * l * g + s * c * v - o * u * v - a * c * n + o * l * n, r[12] = s * l * p - a * u * p - s * c * d + o * u * d + a * c * E - o * l * E, r[1] = u * d * m - l * E * m - u * f * v + h * E * v + l * f * n - h * d * n, r[5] = a * E * m - s * d * m + s * f * v - i * E * v - a * f * n + i * d * n, r[9] = s * l * m - a * u * m - s * h * v + i * u * v + a * h * n - i * l * n, r[13] = a * u * f - s * l * f + s * h * d - i * u * d - a * h * E + i * l * E, r[2] = c * E * m - u * p * m + u * f * g - h * E * g - c * f * n + h * p * n, r[6] = s * p * m - o * E * m - s * f * g + i * E * g + o * f * n - i * p * n, r[10] = o * u * m - s * c * m + s * h * g - i * u * g - o * h * n + i * c * n, r[14] = s * c * f - o * u * f - s * h * p + i * u * p + o * h * E - i * c * E, r[3] = l * p * m - c * d * m - l * f * g + h * d * g + c * f * v - h * p * v, r[7] = o * d * m - a * p * m + a * f * g - i * d * g - o * f * v + i * p * v, r[11] = a * c * m - o * l * m - a * h * g + i * l * g + o * h * v - i * c * v, r[15] = o * l * f - a * c * f + a * h * p - i * l * p - o * h * d + i * c * d, r = i * r[0] + h * r[4] + f * r[8] + m * r[12], 0 == r) {
                if (e) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                return THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"), this.identity(), this
            }
            return this.multiplyScalar(1 / r), this
        },
        translate: function(t) {
            THREE.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function(t) {
            THREE.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function(t) {
            THREE.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function(t) {
            THREE.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function(t, e) {
            THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        scale: function(t) {
            var e = this.elements,
                r = t.x,
                n = t.y;
            return t = t.z, e[0] *= r, e[4] *= n, e[8] *= t, e[1] *= r, e[5] *= n, e[9] *= t, e[2] *= r, e[6] *= n, e[10] *= t, e[3] *= r, e[7] *= n, e[11] *= t, this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements;
            return Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1] + t[2] * t[2], Math.max(t[4] * t[4] + t[5] * t[5] + t[6] * t[6], t[8] * t[8] + t[9] * t[9] + t[10] * t[10])))
        },
        makeTranslation: function(t, e, r) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1), this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(t, e) {
            var r = Math.cos(e),
                n = Math.sin(e),
                i = 1 - r,
                o = t.x,
                a = t.y,
                s = t.z,
                h = i * o,
                c = i * a;
            return this.set(h * o + r, h * a - n * s, h * s + n * a, 0, h * a + n * s, c * a + r, c * s - n * o, 0, h * s - n * a, c * s + n * o, i * s * s + r, 0, 0, 0, 0, 1), this
        },
        makeScale: function(t, e, r) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
        },
        compose: function(t, e, r) {
            return this.makeRotationFromQuaternion(e), this.scale(r), this.setPosition(t), this
        },
        decompose: function() {
            var t = new THREE.Vector3,
                e = new THREE.Matrix4;
            return function(r, n, i) {
                var o = this.elements,
                    a = t.set(o[0], o[1], o[2]).length(),
                    s = t.set(o[4], o[5], o[6]).length(),
                    h = t.set(o[8], o[9], o[10]).length();
                0 > this.determinant() && (a = -a), r.x = o[12], r.y = o[13], r.z = o[14], e.elements.set(this.elements), r = 1 / a;
                var o = 1 / s,
                    c = 1 / h;
                return e.elements[0] *= r, e.elements[1] *= r, e.elements[2] *= r, e.elements[4] *= o, e.elements[5] *= o, e.elements[6] *= o, e.elements[8] *= c, e.elements[9] *= c, e.elements[10] *= c, n.setFromRotationMatrix(e), i.x = a, i.y = s, i.z = h, this
            }
        }(),
        makeFrustum: function(t, e, r, n, i, o) {
            var a = this.elements;
            return a[0] = 2 * i / (e - t), a[4] = 0, a[8] = (e + t) / (e - t), a[12] = 0, a[1] = 0, a[5] = 2 * i / (n - r), a[9] = (n + r) / (n - r), a[13] = 0, a[2] = 0, a[6] = 0, a[10] = -(o + i) / (o - i), a[14] = -2 * o * i / (o - i), a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        },
        makePerspective: function(t, e, r, n) {
            t = r * Math.tan(THREE.Math.degToRad(.5 * t));
            var i = -t;
            return this.makeFrustum(i * e, t * e, i, t, r, n)
        },
        makeOrthographic: function(t, e, r, n, i, o) {
            var a = this.elements,
                s = e - t,
                h = r - n,
                c = o - i;
            return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -((e + t) / s), a[1] = 0, a[5] = 2 / h, a[9] = 0, a[13] = -((r + n) / h), a[2] = 0, a[6] = 0, a[10] = -2 / c, a[14] = -((o + i) / c), a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        },
        fromArray: function(t) {
            return this.elements.set(t), this
        },
        toArray: function() {
            var t = this.elements;
            return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]]
        },
        clone: function() {
            return (new THREE.Matrix4).fromArray(this.elements)
        }
    }, THREE.Ray = function(t, e) {
        this.origin = void 0 !== t ? t : new THREE.Vector3, this.direction = void 0 !== e ? e : new THREE.Vector3
    }, THREE.Ray.prototype = {
        constructor: THREE.Ray,
        set: function(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        copy: function(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function(t, e) {
            return (e || new THREE.Vector3).copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        recast: function() {
            var t = new THREE.Vector3;
            return function(e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function(t, e) {
            var r = e || new THREE.Vector3;
            r.subVectors(t, this.origin);
            var n = r.dot(this.direction);
            return 0 > n ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function() {
            var t = new THREE.Vector3;
            return function(e) {
                var r = t.subVectors(e, this.origin).dot(this.direction);
                return 0 > r ? this.origin.distanceTo(e) : (t.copy(this.direction).multiplyScalar(r).add(this.origin), t.distanceTo(e))
            }
        }(),
        distanceSqToSegment: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3,
                r = new THREE.Vector3;
            return function(n, i, o, a) {
                t.copy(n).add(i).multiplyScalar(.5), e.copy(i).sub(n).normalize(), r.copy(this.origin).sub(t);
                var s, h = .5 * n.distanceTo(i),
                    c = -this.direction.dot(e),
                    l = r.dot(this.direction),
                    u = -r.dot(e),
                    f = r.lengthSq(),
                    p = Math.abs(1 - c * c);
                return 0 < p ? (n = c * u - l, i = c * l - u, s = h * p, 0 <= n ? i >= -s ? i <= s ? (h = 1 / p, n *= h, i *= h, c = n * (n + c * i + 2 * l) + i * (c * n + i + 2 * u) + f) : (i = h, n = Math.max(0, -(c * i + l)), c = -n * n + i * (i + 2 * u) + f) : (i = -h, n = Math.max(0, -(c * i + l)), c = -n * n + i * (i + 2 * u) + f) : i <= -s ? (n = Math.max(0, -(-c * h + l)), i = 0 < n ? -h : Math.min(Math.max(-h, -u), h), c = -n * n + i * (i + 2 * u) + f) : i <= s ? (n = 0, i = Math.min(Math.max(-h, -u), h), c = i * (i + 2 * u) + f) : (n = Math.max(0, -(c * h + l)), i = 0 < n ? h : Math.min(Math.max(-h, -u), h), c = -n * n + i * (i + 2 * u) + f)) : (i = 0 < c ? -h : h, n = Math.max(0, -(c * i + l)), c = -n * n + i * (i + 2 * u) + f), o && o.copy(this.direction).multiplyScalar(n).add(this.origin), a && a.copy(e).multiplyScalar(i).add(t), c
            }
        }(),
        isIntersectionSphere: function(t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        intersectSphere: function() {
            var t = new THREE.Vector3;
            return function(e, r) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction),
                    i = t.dot(t) - n * n,
                    o = e.radius * e.radius;
                return i > o ? null : (o = Math.sqrt(o - i), i = n - o, n += o, 0 > i && 0 > n ? null : 0 > i ? this.at(n, r) : this.at(i, r))
            }
        }(),
        isIntersectionPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || 0 > t.normal.dot(this.direction) * e
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            return 0 == e ? 0 == t.distanceToPoint(this.origin) ? 0 : null : (t = -(this.origin.dot(t.normal) + t.constant) / e, 0 <= t ? t : null)
        },
        intersectPlane: function(t, e) {
            var r = this.distanceToPlane(t);
            return null === r ? null : this.at(r, e)
        },
        isIntersectionBox: function() {
            var t = new THREE.Vector3;
            return function(e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectBox: function(t, e) {
            var r, n, i, o, a;
            n = 1 / this.direction.x, o = 1 / this.direction.y, a = 1 / this.direction.z;
            var s = this.origin;
            return 0 <= n ? (r = (t.min.x - s.x) * n, n *= t.max.x - s.x) : (r = (t.max.x - s.x) * n, n *= t.min.x - s.x), 0 <= o ? (i = (t.min.y - s.y) * o, o *= t.max.y - s.y) : (i = (t.max.y - s.y) * o, o *= t.min.y - s.y), r > o || i > n ? null : ((i > r || r !== r) && (r = i), (o < n || n !== n) && (n = o), 0 <= a ? (i = (t.min.z - s.z) * a, a *= t.max.z - s.z) : (i = (t.max.z - s.z) * a, a *= t.min.z - s.z), r > a || i > n ? null : ((i > r || r !== r) && (r = i), (a < n || n !== n) && (n = a), 0 > n ? null : this.at(0 <= r ? r : n, e)))
        },
        intersectTriangle: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3,
                r = new THREE.Vector3,
                n = new THREE.Vector3;
            return function(i, o, a, s, h) {
                if (e.subVectors(o, i), r.subVectors(a, i), n.crossVectors(e, r), o = this.direction.dot(n), 0 < o) {
                    if (s) return null;
                    s = 1
                } else {
                    if (!(0 > o)) return null;
                    s = -1, o = -o
                }
                return t.subVectors(this.origin, i), i = s * this.direction.dot(r.crossVectors(t, r)), 0 > i ? null : (a = s * this.direction.dot(e.cross(t)), 0 > a || i + a > o ? null : (i = -s * t.dot(n), 0 > i ? null : this.at(i / o, h)))
            }
        }(),
        applyMatrix4: function(t) {
            return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        },
        clone: function() {
            return (new THREE.Ray).copy(this)
        }
    }, THREE.Sphere = function(t, e) {
        this.center = void 0 !== t ? t : new THREE.Vector3, this.radius = void 0 !== e ? e : 0
    }, THREE.Sphere.prototype = {
        constructor: THREE.Sphere,
        set: function(t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function() {
            var t = new THREE.Box3;
            return function(e, r) {
                var n = this.center;
                void 0 !== r ? n.copy(r) : t.setFromPoints(e).center(n);
                for (var i = 0, o = 0, a = e.length; o < a; o++) i = Math.max(i, n.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(i), this
            }
        }(),
        copy: function(t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function() {
            return 0 >= this.radius
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        clampPoint: function(t, e) {
            var r = this.center.distanceToSquared(t),
                n = e || new THREE.Vector3;
            return n.copy(t), r > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
        },
        getBoundingBox: function(t) {
            return t = t || new THREE.Box3, t.set(this.center, this.center), t.expandByScalar(this.radius), t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t), this.radius *= t.getMaxScaleOnAxis(), this
        },
        translate: function(t) {
            return this.center.add(t), this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        },
        clone: function() {
            return (new THREE.Sphere).copy(this)
        }
    }, THREE.Frustum = function(t, e, r, n, i, o) {
        this.planes = [void 0 !== t ? t : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== r ? r : new THREE.Plane, void 0 !== n ? n : new THREE.Plane, void 0 !== i ? i : new THREE.Plane, void 0 !== o ? o : new THREE.Plane]
    }, THREE.Frustum.prototype = {
        constructor: THREE.Frustum,
        set: function(t, e, r, n, i, o) {
            var a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(r), a[3].copy(n), a[4].copy(i), a[5].copy(o), this
        },
        copy: function(t) {
            for (var e = this.planes, r = 0; 6 > r; r++) e[r].copy(t.planes[r]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes,
                r = t.elements;
            t = r[0];
            var n = r[1],
                i = r[2],
                o = r[3],
                a = r[4],
                s = r[5],
                h = r[6],
                c = r[7],
                l = r[8],
                u = r[9],
                f = r[10],
                p = r[11],
                d = r[12],
                E = r[13],
                m = r[14],
                r = r[15];
            return e[0].setComponents(o - t, c - a, p - l, r - d).normalize(), e[1].setComponents(o + t, c + a, p + l, r + d).normalize(), e[2].setComponents(o + n, c + s, p + u, r + E).normalize(), e[3].setComponents(o - n, c - s, p - u, r - E).normalize(), e[4].setComponents(o - i, c - h, p - f, r - m).normalize(), e[5].setComponents(o + i, c + h, p + f, r + m).normalize(), this
        },
        intersectsObject: function() {
            var t = new THREE.Sphere;
            return function(e) {
                var r = e.geometry;
                return null === r.boundingSphere && r.computeBoundingSphere(), t.copy(r.boundingSphere), t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            var e = this.planes,
                r = t.center;
            t = -t.radius;
            for (var n = 0; 6 > n; n++)
                if (e[n].distanceToPoint(r) < t) return !1;
            return !0
        },
        intersectsBox: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3;
            return function(r) {
                for (var n = this.planes, i = 0; 6 > i; i++) {
                    var o = n[i];
                    t.x = 0 < o.normal.x ? r.min.x : r.max.x, e.x = 0 < o.normal.x ? r.max.x : r.min.x, t.y = 0 < o.normal.y ? r.min.y : r.max.y, e.y = 0 < o.normal.y ? r.max.y : r.min.y, t.z = 0 < o.normal.z ? r.min.z : r.max.z, e.z = 0 < o.normal.z ? r.max.z : r.min.z;
                    var a = o.distanceToPoint(t),
                        o = o.distanceToPoint(e);
                    if (0 > a && 0 > o) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(t) {
            for (var e = this.planes, r = 0; 6 > r; r++)
                if (0 > e[r].distanceToPoint(t)) return !1;
            return !0
        },
        clone: function() {
            return (new THREE.Frustum).copy(this)
        }
    }, THREE.Plane = function(t, e) {
        this.normal = void 0 !== t ? t : new THREE.Vector3(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }, THREE.Plane.prototype = {
        constructor: THREE.Plane,
        set: function(t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function(t, e, r, n) {
            return this.normal.set(t, e, r), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3;
            return function(r, n, i) {
                return n = t.subVectors(i, n).cross(e.subVectors(r, n)).normalize(), this.setFromNormalAndCoplanarPoint(n, r), this
            }
        }(),
        copy: function(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        },
        orthoPoint: function(t, e) {
            var r = this.distanceToPoint(t);
            return (e || new THREE.Vector3).copy(this.normal).multiplyScalar(r)
        },
        isIntersectionLine: function(t) {
            var e = this.distanceToPoint(t.start);
            return t = this.distanceToPoint(t.end), 0 > e && 0 < t || 0 > t && 0 < e
        },
        intersectLine: function() {
            var t = new THREE.Vector3;
            return function(e, r) {
                var n = r || new THREE.Vector3,
                    i = e.delta(t),
                    o = this.normal.dot(i);
                return 0 != o ? (o = -(e.start.dot(this.normal) + this.constant) / o, 0 > o || 1 < o ? void 0 : n.copy(i).multiplyScalar(o).add(e.start)) : 0 == this.distanceToPoint(e.start) ? n.copy(e.start) : void 0
            }
        }(),
        coplanarPoint: function(t) {
            return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3,
                r = new THREE.Matrix3;
            return function(n, i) {
                var o = i || r.getNormalMatrix(n),
                    o = t.copy(this.normal).applyMatrix3(o),
                    a = this.coplanarPoint(e);
                return a.applyMatrix4(n), this.setFromNormalAndCoplanarPoint(o, a), this
            }
        }(),
        translate: function(t) {
            return this.constant -= t.dot(this.normal), this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant == this.constant
        },
        clone: function() {
            return (new THREE.Plane).copy(this)
        }
    }, THREE.Math = {
        generateUUID: function() {
            var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                r = Array(36),
                n = 0;
            return function() {
                for (var i = 0; 36 > i; i++) 8 == i || 13 == i || 18 == i || 23 == i ? r[i] = "-" : 14 == i ? r[i] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0), t = 15 & n, n >>= 4, r[i] = e[19 == i ? 3 & t | 8 : t]);
                return r.join("")
            }
        }(),
        clamp: function(t, e, r) {
            return t < e ? e : t > r ? r : t
        },
        clampBottom: function(t, e) {
            return t < e ? e : t
        },
        mapLinear: function(t, e, r, n, i) {
            return n + (t - e) * (i - n) / (r - e)
        },
        smoothstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e), t * t * (3 - 2 * t))
        },
        smootherstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e), t * t * t * (t * (6 * t - 15) + 10))
        },
        random16: function() {
            return (65280 * Math.random() + 255 * Math.random()) / 65535
        },
        randInt: function(t, e) {
            return Math.floor(this.randFloat(t, e))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function() {
            var t = Math.PI / 180;
            return function(e) {
                return e * t
            }
        }(),
        radToDeg: function() {
            var t = 180 / Math.PI;
            return function(e) {
                return e * t
            }
        }(),
        isPowerOfTwo: function(t) {
            return 0 === (t & t - 1) && 0 !== t
        },
        nextPowerOfTwo: function(t) {
            return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, t++, t
        }
    }, THREE.Spline = function(t) {
        function e(t, e, r, n, i, o, a) {
            return t = .5 * (r - t), n = .5 * (n - e), (2 * (e - r) + t + n) * a + (-3 * (e - r) - 2 * t - n) * o + t * i + e
        }
        this.points = t;
        var r, n, i, o, a, s, h, c, l, u = [],
            f = {
                x: 0,
                y: 0,
                z: 0
            };
        this.initFromArray = function(t) {
            this.points = [];
            for (var e = 0; e < t.length; e++) this.points[e] = {
                x: t[e][0],
                y: t[e][1],
                z: t[e][2]
            }
        }, this.getPoint = function(t) {
            return r = (this.points.length - 1) * t, n = Math.floor(r), i = r - n, u[0] = 0 === n ? n : n - 1, u[1] = n, u[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1, u[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2, s = this.points[u[0]], h = this.points[u[1]], c = this.points[u[2]], l = this.points[u[3]], o = i * i, a = i * o, f.x = e(s.x, h.x, c.x, l.x, i, o, a), f.y = e(s.y, h.y, c.y, l.y, i, o, a), f.z = e(s.z, h.z, c.z, l.z, i, o, a), f
        }, this.getControlPointsArray = function() {
            var t, e, r = this.points.length,
                n = [];
            for (t = 0; t < r; t++) e = this.points[t], n[t] = [e.x, e.y, e.z];
            return n
        }, this.getLength = function(t) {
            var e, r, n, i = e = e = 0,
                o = new THREE.Vector3,
                a = new THREE.Vector3,
                s = [],
                h = 0;
            for (s[0] = 0, t || (t = 100), r = this.points.length * t, o.copy(this.points[0]), t = 1; t < r; t++) e = t / r, n = this.getPoint(e), a.copy(n), h += a.distanceTo(o), o.copy(n), e *= this.points.length - 1, e = Math.floor(e), e != i && (s[e] = h, i = e);
            return s[s.length] = h, {
                chunks: s,
                total: h
            }
        }, this.reparametrizeByArcLength = function(t) {
            var e, r, n, i, o, a, s = [],
                h = new THREE.Vector3,
                c = this.getLength();
            for (s.push(h.copy(this.points[0]).clone()), e = 1; e < this.points.length; e++) {
                for (r = c.chunks[e] - c.chunks[e - 1], a = Math.ceil(t * r / c.total), i = (e - 1) / (this.points.length - 1), o = e / (this.points.length - 1), r = 1; r < a - 1; r++) n = i + 1 / a * r * (o - i), n = this.getPoint(n), s.push(h.copy(n).clone());
                s.push(h.copy(this.points[e]).clone())
            }
            this.points = s
        }
    }, THREE.Triangle = function(t, e, r) {
        this.a = void 0 !== t ? t : new THREE.Vector3, this.b = void 0 !== e ? e : new THREE.Vector3, this.c = void 0 !== r ? r : new THREE.Vector3
    }, THREE.Triangle.normal = function() {
        var t = new THREE.Vector3;
        return function(e, r, n, i) {
            return i = i || new THREE.Vector3, i.subVectors(n, r), t.subVectors(e, r), i.cross(t), e = i.lengthSq(), 0 < e ? i.multiplyScalar(1 / Math.sqrt(e)) : i.set(0, 0, 0)
        }
    }(), THREE.Triangle.barycoordFromPoint = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            r = new THREE.Vector3;
        return function(n, i, o, a, s) {
            t.subVectors(a, i), e.subVectors(o, i), r.subVectors(n, i), n = t.dot(t), i = t.dot(e), o = t.dot(r);
            var h = e.dot(e);
            a = e.dot(r);
            var c = n * h - i * i;
            return s = s || new THREE.Vector3, 0 == c ? s.set(-2, -1, -1) : (c = 1 / c, h = (h * o - i * a) * c, n = (n * a - i * o) * c, s.set(1 - h - n, n, h))
        }
    }(), THREE.Triangle.containsPoint = function() {
        var t = new THREE.Vector3;
        return function(e, r, n, i) {
            return e = THREE.Triangle.barycoordFromPoint(e, r, n, i, t), 0 <= e.x && 0 <= e.y && 1 >= e.x + e.y
        }
    }(), THREE.Triangle.prototype = {
        constructor: THREE.Triangle,
        set: function(t, e, r) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(r), this
        },
        setFromPointsAndIndices: function(t, e, r, n) {
            return this.a.copy(t[e]), this.b.copy(t[r]), this.c.copy(t[n]), this
        },
        copy: function(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        area: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3;
            return function() {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        midpoint: function(t) {
            return (t || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(t) {
            return THREE.Triangle.normal(this.a, this.b, this.c, t)
        },
        plane: function(t) {
            return (t || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(t, e) {
            return THREE.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return THREE.Triangle.containsPoint(t, this.a, this.b, this.c)
        },
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        },
        clone: function() {
            return (new THREE.Triangle).copy(this)
        }
    }, THREE.Clock = function(t) {
        this.autoStart = void 0 === t || t, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
    }, THREE.Clock.prototype = {
        constructor: THREE.Clock,
        start: function() {
            this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(), this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running && this.start(), this.running) {
                var e = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(),
                    t = .001 * (e - this.oldTime);
                this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }, THREE.EventDispatcher = function() {}, THREE.EventDispatcher.prototype = {
        constructor: THREE.EventDispatcher,
        apply: function(t) {
            t.addEventListener = THREE.EventDispatcher.prototype.addEventListener, t.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener, t.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener, t.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
        },
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var r = this._listeners;
            void 0 === r[t] && (r[t] = []), -1 === r[t].indexOf(e) && r[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners) return !1;
            var r = this._listeners;
            return void 0 !== r[t] && -1 !== r[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var r = this._listeners[t];
                if (void 0 !== r) {
                    var n = r.indexOf(e); - 1 !== n && r.splice(n, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var r = [], n = e.length, i = 0; i < n; i++) r[i] = e[i];
                    for (i = 0; i < n; i++) r[i].call(this, t)
                }
            }
        }
    },
    function(t) {
        t.Raycaster = function(e, r, n, i) {
            this.ray = new t.Ray(e, r), this.near = n || 0, this.far = i || 1 / 0, this.params = {
                Sprite: {},
                Mesh: {},
                PointCloud: {
                    threshold: 1
                },
                LOD: {},
                Line: {}
            }
        };
        var e = function(t, e) {
                return t.distance - e.distance
            },
            r = function(t, e, n, i) {
                if (t.raycast(e, n), !0 === i) {
                    t = t.children, i = 0;
                    for (var o = t.length; i < o; i++) r(t[i], e, n, !0)
                }
            };
        t.Raycaster.prototype = {
            constructor: t.Raycaster,
            precision: 1e-4,
            linePrecision: 1,
            set: function(t, e) {
                this.ray.set(t, e)
            },
            setFromCamera: function(e, r) {
                r instanceof t.PerspectiveCamera ? (this.ray.origin.copy(r.position), this.ray.direction.set(e.x, e.y, .5).unproject(r).sub(r.position).normalize()) : r instanceof t.OrthographicCamera ? (this.ray.origin.set(e.x, e.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : t.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function(t, n) {
                var i = [];
                return r(t, this, i, n), i.sort(e), i
            },
            intersectObjects: function(n, i) {
                var o = [];
                if (!1 == n instanceof Array) return t.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), o;
                for (var a = 0, s = n.length; a < s; a++) r(n[a], this, o, i);
                return o.sort(e), o
            }
        }
    }(THREE), THREE.Object3D = function() {
        Object.defineProperty(this, "id", {
            value: THREE.Object3DIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = void 0, this.children = [], this.up = THREE.Object3D.DefaultUp.clone();
        var t = new THREE.Vector3,
            e = new THREE.Euler,
            r = new THREE.Quaternion,
            n = new THREE.Vector3(1, 1, 1);
        e.onChange(function() {
            r.setFromEuler(e, !1)
        }), r.onChange(function() {
            e.setFromQuaternion(r, void 0, !1)
        }), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: t
            },
            rotation: {
                enumerable: !0,
                value: e
            },
            quaternion: {
                enumerable: !0,
                value: r
            },
            scale: {
                enumerable: !0,
                value: n
            }
        }), this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }, THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0), THREE.Object3D.prototype = {
        constructor: THREE.Object3D,
        get eulerOrder() {
            return THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order
        },
        set eulerOrder(t) {
            THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = t
        },
        get useQuaternion() {
            THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set useQuaternion(t) {
            THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function() {
            var t = new THREE.Quaternion;
            return function(e, r) {
                return t.setFromAxisAngle(e, r), this.quaternion.multiply(t), this
            }
        }(),
        rotateX: function() {
            var t = new THREE.Vector3(1, 0, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new THREE.Vector3(0, 1, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new THREE.Vector3(0, 0, 1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new THREE.Vector3;
            return function(e, r) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(r)), this
            }
        }(),
        translate: function(t, e) {
            return THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        },
        translateX: function() {
            var t = new THREE.Vector3(1, 0, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new THREE.Vector3(0, 1, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new THREE.Vector3(0, 0, 1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var t = new THREE.Matrix4;
            return function(e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var t = new THREE.Matrix4;
            return function(e) {
                t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (THREE.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t instanceof THREE.Object3D ? (void 0 !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                type: "added"
            }), this.children.push(t)) : THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function(t) {
            if (1 < arguments.length)
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
            e = this.children.indexOf(t), -1 !== e && (t.parent = void 0, t.dispatchEvent({
                type: "removed"
            }), this.children.splice(e, 1))
        },
        getChildByName: function(t) {
            return THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e) return this;
            for (var r = 0, n = this.children.length; r < n; r++) {
                var i = this.children[r].getObjectByProperty(t, e);
                if (void 0 !== i) return i
            }
        },
        getWorldPosition: function(t) {
            return t = t || new THREE.Vector3, this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var t = new THREE.Vector3,
                e = new THREE.Vector3;
            return function(r) {
                return r = r || new THREE.Quaternion, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
            }
        }(),
        getWorldRotation: function() {
            var t = new THREE.Quaternion;
            return function(e) {
                return e = e || new THREE.Euler, this.getWorldQuaternion(t), e.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var t = new THREE.Vector3,
                e = new THREE.Quaternion;
            return function(r) {
                return r = r || new THREE.Vector3, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
            }
        }(),
        getWorldDirection: function() {
            var t = new THREE.Quaternion;
            return function(e) {
                return e = e || new THREE.Vector3, this.getWorldQuaternion(t), e.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = 0, r = this.children.length; e < r; e++) this.children[e].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = 0, r = this.children.length; e < r; e++) this.children[e].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            this.parent && (t(this.parent), this.parent.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            !0 === this.matrixAutoUpdate && this.updateMatrix(), !0 !== this.matrixWorldNeedsUpdate && !0 !== t || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = 0, r = this.children.length; e < r; e++) this.children[e].updateMatrixWorld(t)
        },
        toJSON: function() {
            var t = {
                    metadata: {
                        version: 4.3,
                        type: "Object",
                        generator: "ObjectExporter"
                    }
                },
                e = {},
                r = {},
                n = function(e) {
                    if (void 0 === t.materials && (t.materials = []), void 0 === r[e.uuid]) {
                        var n = e.toJSON();
                        delete n.metadata, r[e.uuid] = n, t.materials.push(n)
                    }
                    return e.uuid
                },
                i = function(r) {
                    var o = {};
                    if (o.uuid = r.uuid, o.type = r.type, "" !== r.name && (o.name = r.name), "{}" !== JSON.stringify(r.userData) && (o.userData = r.userData), !0 !== r.visible && (o.visible = r.visible), r instanceof THREE.PerspectiveCamera) o.fov = r.fov, o.aspect = r.aspect, o.near = r.near, o.far = r.far;
                    else if (r instanceof THREE.OrthographicCamera) o.left = r.left, o.right = r.right, o.top = r.top, o.bottom = r.bottom, o.near = r.near, o.far = r.far;
                    else if (r instanceof THREE.AmbientLight) o.color = r.color.getHex();
                    else if (r instanceof THREE.DirectionalLight) o.color = r.color.getHex(), o.intensity = r.intensity;
                    else if (r instanceof THREE.PointLight) o.color = r.color.getHex(), o.intensity = r.intensity, o.distance = r.distance, o.decay = r.decay;
                    else if (r instanceof THREE.SpotLight) o.color = r.color.getHex(), o.intensity = r.intensity, o.distance = r.distance, o.angle = r.angle, o.exponent = r.exponent, o.decay = r.decay;
                    else if (r instanceof THREE.HemisphereLight) o.color = r.color.getHex(), o.groundColor = r.groundColor.getHex();
                    else if (r instanceof THREE.Mesh || r instanceof THREE.Line || r instanceof THREE.PointCloud) {
                        var a = r.geometry;
                        if (void 0 === t.geometries && (t.geometries = []), void 0 === e[a.uuid]) {
                            var s = a.toJSON();
                            delete s.metadata, e[a.uuid] = s, t.geometries.push(s)
                        }
                        o.geometry = a.uuid, o.material = n(r.material), r instanceof THREE.Line && (o.mode = r.mode)
                    } else r instanceof THREE.Sprite && (o.material = n(r.material));
                    if (o.matrix = r.matrix.toArray(), 0 < r.children.length)
                        for (o.children = [], a = 0; a < r.children.length; a++) o.children.push(i(r.children[a]));
                    return o
                };
            return t.object = i(this), t
        },
        clone: function(t, e) {
            if (void 0 === t && (t = new THREE.Object3D), void 0 === e && (e = !0), t.name = this.name, t.up.copy(this.up), t.position.copy(this.position), t.quaternion.copy(this.quaternion), t.scale.copy(this.scale), t.rotationAutoUpdate = this.rotationAutoUpdate, t.matrix.copy(this.matrix), t.matrixWorld.copy(this.matrixWorld), t.matrixAutoUpdate = this.matrixAutoUpdate, t.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, t.visible = this.visible, t.castShadow = this.castShadow, t.receiveShadow = this.receiveShadow, t.frustumCulled = this.frustumCulled, t.userData = JSON.parse(JSON.stringify(this.userData)), !0 === e)
                for (var r = 0; r < this.children.length; r++) t.add(this.children[r].clone());
            return t
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype), THREE.Object3DIdCount = 0, THREE.Face3 = function(t, e, r, n, i, o) {
        this.a = t, this.b = e, this.c = r, this.normal = n instanceof THREE.Vector3 ? n : new THREE.Vector3, this.vertexNormals = n instanceof Array ? n : [], this.color = i instanceof THREE.Color ? i : new THREE.Color, this.vertexColors = i instanceof Array ? i : [], this.vertexTangents = [], this.materialIndex = void 0 !== o ? o : 0
    }, THREE.Face3.prototype = {
        constructor: THREE.Face3,
        clone: function() {
            var t = new THREE.Face3(this.a, this.b, this.c);
            t.normal.copy(this.normal), t.color.copy(this.color), t.materialIndex = this.materialIndex;
            for (var e = 0, r = this.vertexNormals.length; e < r; e++) t.vertexNormals[e] = this.vertexNormals[e].clone();
            for (e = 0, r = this.vertexColors.length; e < r; e++) t.vertexColors[e] = this.vertexColors[e].clone();
            for (e = 0, r = this.vertexTangents.length; e < r; e++) t.vertexTangents[e] = this.vertexTangents[e].clone();
            return t
        }
    }, THREE.Face4 = function(t, e, r, n, i, o, a) {
        return THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new THREE.Face3(t, e, r, i, o, a)
    }, THREE.BufferAttribute = function(t, e) {
        this.array = t, this.itemSize = e, this.needsUpdate = !1
    }, THREE.BufferAttribute.prototype = {
        constructor: THREE.BufferAttribute,
        get length() {
            return this.array.length
        },
        copyAt: function(t, e, r) {
            t *= this.itemSize, r *= e.itemSize;
            for (var n = 0, i = this.itemSize; n < i; n++) this.array[t + n] = e.array[r + n];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        setXY: function(t, e, r) {
            return t *= this.itemSize, this.array[t] = e, this.array[t + 1] = r, this
        },
        setXYZ: function(t, e, r, n) {
            return t *= this.itemSize, this.array[t] = e, this.array[t + 1] = r, this.array[t + 2] = n, this
        },
        setXYZW: function(t, e, r, n, i) {
            return t *= this.itemSize, this.array[t] = e, this.array[t + 1] = r, this.array[t + 2] = n, this.array[t + 3] = i, this
        },
        clone: function() {
            return new THREE.BufferAttribute(new this.array.constructor(this.array), this.itemSize)
        }
    }, THREE.Int8Attribute = function(t, e) {
        return THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Uint8Attribute = function(t, e) {
        return THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Uint8ClampedAttribute = function(t, e) {
        return THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Int16Attribute = function(t, e) {
        return THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Uint16Attribute = function(t, e) {
        return THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Int32Attribute = function(t, e) {
        return THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Uint32Attribute = function(t, e) {
        return THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Float32Attribute = function(t, e) {
        return THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.Float64Attribute = function(t, e) {
        return THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."), new THREE.BufferAttribute(t, e)
    }, THREE.DynamicBufferAttribute = function(t, e) {
        THREE.BufferAttribute.call(this, t, e), this.updateRange = {
            offset: 0,
            count: -1
        }
    }, THREE.DynamicBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype), THREE.DynamicBufferAttribute.prototype.constructor = THREE.DynamicBufferAttribute, THREE.DynamicBufferAttribute.prototype.clone = function() {
        return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array), this.itemSize)
    }, THREE.BufferGeometry = function() {
        Object.defineProperty(this, "id", {
            value: THREE.GeometryIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.attributes = {}, this.attributesKeys = [], this.offsets = this.drawcalls = [], this.boundingSphere = this.boundingBox = null
    }, THREE.BufferGeometry.prototype = {
        constructor: THREE.BufferGeometry,
        addAttribute: function(t, e, r) {
            !1 == e instanceof THREE.BufferAttribute ? (THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.attributes[t] = {
                array: e,
                itemSize: r
            }) : (this.attributes[t] = e, this.attributesKeys = Object.keys(this.attributes))
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        addDrawCall: function(t, e, r) {
            this.drawcalls.push({
                start: t,
                count: e,
                index: void 0 !== r ? r : 0
            })
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToVector3Array(e.array), e.needsUpdate = !0), e = this.attributes.normal, void 0 !== e && ((new THREE.Matrix3).getNormalMatrix(t).applyToVector3Array(e.array), e.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.applyMatrix((new THREE.Matrix4).setPosition(t)), t
        },
        fromGeometry: function(t, e) {
            e = e || {
                vertexColors: THREE.NoColors
            };
            var r = t.vertices,
                n = t.faces,
                i = t.faceVertexUvs,
                o = e.vertexColors,
                a = 0 < i[0].length,
                s = 3 == n[0].vertexNormals.length,
                h = new Float32Array(9 * n.length);
            this.addAttribute("position", new THREE.BufferAttribute(h, 3));
            var c = new Float32Array(9 * n.length);
            if (this.addAttribute("normal", new THREE.BufferAttribute(c, 3)), o !== THREE.NoColors) {
                var l = new Float32Array(9 * n.length);
                this.addAttribute("color", new THREE.BufferAttribute(l, 3))
            }
            if (!0 === a) {
                var u = new Float32Array(6 * n.length);
                this.addAttribute("uv", new THREE.BufferAttribute(u, 2))
            }
            for (var f = 0, p = 0, d = 0; f < n.length; f++, p += 6, d += 9) {
                var E = n[f],
                    m = r[E.a],
                    g = r[E.b],
                    v = r[E.c];
                h[d] = m.x, h[d + 1] = m.y, h[d + 2] = m.z, h[d + 3] = g.x, h[d + 4] = g.y, h[d + 5] = g.z, h[d + 6] = v.x, h[d + 7] = v.y, h[d + 8] = v.z, !0 === s ? (m = E.vertexNormals[0], g = E.vertexNormals[1], v = E.vertexNormals[2], c[d] = m.x, c[d + 1] = m.y, c[d + 2] = m.z, c[d + 3] = g.x, c[d + 4] = g.y, c[d + 5] = g.z, c[d + 6] = v.x, c[d + 7] = v.y, c[d + 8] = v.z) : (m = E.normal, c[d] = m.x, c[d + 1] = m.y, c[d + 2] = m.z, c[d + 3] = m.x, c[d + 4] = m.y, c[d + 5] = m.z, c[d + 6] = m.x, c[d + 7] = m.y, c[d + 8] = m.z), o === THREE.FaceColors ? (E = E.color, l[d] = E.r, l[d + 1] = E.g, l[d + 2] = E.b, l[d + 3] = E.r, l[d + 4] = E.g, l[d + 5] = E.b, l[d + 6] = E.r, l[d + 7] = E.g, l[d + 8] = E.b) : o === THREE.VertexColors && (m = E.vertexColors[0], g = E.vertexColors[1], E = E.vertexColors[2], l[d] = m.r, l[d + 1] = m.g, l[d + 2] = m.b, l[d + 3] = g.r, l[d + 4] = g.g, l[d + 5] = g.b, l[d + 6] = E.r, l[d + 7] = E.g, l[d + 8] = E.b), !0 === a && (E = i[0][f][0], m = i[0][f][1], g = i[0][f][2], u[p] = E.x, u[p + 1] = E.y, u[p + 2] = m.x, u[p + 3] = m.y, u[p + 4] = g.x, u[p + 5] = g.y)
            }
            return this.computeBoundingSphere(), this
        },
        computeBoundingBox: function() {
            var t = new THREE.Vector3;
            return function() {
                null === this.boundingBox && (this.boundingBox = new THREE.Box3);
                var e = this.attributes.position.array;
                if (e) {
                    var r = this.boundingBox;
                    r.makeEmpty();
                    for (var n = 0, i = e.length; n < i; n += 3) t.set(e[n], e[n + 1], e[n + 2]), r.expandByPoint(t)
                }
                void 0 !== e && 0 !== e.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
            }
        }(),
        computeBoundingSphere: function() {
            var t = new THREE.Box3,
                e = new THREE.Vector3;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
                var r = this.attributes.position.array;
                if (r) {
                    t.makeEmpty();
                    for (var n = this.boundingSphere.center, i = 0, o = r.length; i < o; i += 3) e.set(r[i], r[i + 1], r[i + 2]), t.expandByPoint(e);
                    t.center(n);
                    for (var a = 0, i = 0, o = r.length; i < o; i += 3) e.set(r[i], r[i + 1], r[i + 2]), a = Math.max(a, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.attributes;
            if (t.position) {
                var e = t.position.array;
                if (void 0 === t.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(e.length), 3));
                else
                    for (var r = t.normal.array, n = 0, i = r.length; n < i; n++) r[n] = 0;
                var o, a, s, r = t.normal.array,
                    h = new THREE.Vector3,
                    c = new THREE.Vector3,
                    l = new THREE.Vector3,
                    u = new THREE.Vector3,
                    f = new THREE.Vector3;
                if (t.index)
                    for (var p = t.index.array, d = 0 < this.offsets.length ? this.offsets : [{
                            start: 0,
                            count: p.length,
                            index: 0
                        }], E = 0, m = d.length; E < m; ++E) {
                        i = d[E].start, o = d[E].count;
                        for (var g = d[E].index, n = i, i = i + o; n < i; n += 3) o = 3 * (g + p[n]), a = 3 * (g + p[n + 1]), s = 3 * (g + p[n + 2]), h.fromArray(e, o), c.fromArray(e, a), l.fromArray(e, s), u.subVectors(l, c), f.subVectors(h, c), u.cross(f), r[o] += u.x, r[o + 1] += u.y, r[o + 2] += u.z, r[a] += u.x, r[a + 1] += u.y, r[a + 2] += u.z, r[s] += u.x, r[s + 1] += u.y, r[s + 2] += u.z
                    } else
                        for (n = 0, i = e.length; n < i; n += 9) h.fromArray(e, n), c.fromArray(e, n + 3), l.fromArray(e, n + 6), u.subVectors(l, c), f.subVectors(h, c), u.cross(f), r[n] = u.x, r[n + 1] = u.y, r[n + 2] = u.z, r[n + 3] = u.x, r[n + 4] = u.y, r[n + 5] = u.z, r[n + 6] = u.x, r[n + 7] = u.y, r[n + 8] = u.z;
                this.normalizeNormals(), t.normal.needsUpdate = !0
            }
        },
        computeTangents: function() {
            function t(t, e, r) {
                M.fromArray(n, 3 * t), S.fromArray(n, 3 * e), A.fromArray(n, 3 * r), C.fromArray(o, 2 * t), L.fromArray(o, 2 * e), P.fromArray(o, 2 * r), u = S.x - M.x, f = A.x - M.x, p = S.y - M.y, d = A.y - M.y, E = S.z - M.z, m = A.z - M.z, g = L.x - C.x, v = P.x - C.x, y = L.y - C.y, T = P.y - C.y, R = 1 / (g * T - v * y), F.set((T * u - y * f) * R, (T * p - y * d) * R, (T * E - y * m) * R), D.set((g * f - v * u) * R, (g * d - v * p) * R, (g * m - v * E) * R), h[t].add(F), h[e].add(F), h[r].add(F), c[t].add(D), c[e].add(D), c[r].add(D)
            }

            function e(t) {
                I.fromArray(i, 3 * t), G.copy(I), U = h[t], N.copy(U), N.sub(I.multiplyScalar(I.dot(U))).normalize(), z.crossVectors(G, U), V = z.dot(c[t]), O = 0 > V ? -1 : 1, s[4 * t] = N.x, s[4 * t + 1] = N.y, s[4 * t + 2] = N.z, s[4 * t + 3] = O
            }
            if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
            else {
                var r = this.attributes.index.array,
                    n = this.attributes.position.array,
                    i = this.attributes.normal.array,
                    o = this.attributes.uv.array,
                    a = n.length / 3;
                void 0 === this.attributes.tangent && this.addAttribute("tangent", new THREE.BufferAttribute(new Float32Array(4 * a), 4));
                for (var s = this.attributes.tangent.array, h = [], c = [], l = 0; l < a; l++) h[l] = new THREE.Vector3, c[l] = new THREE.Vector3;
                var u, f, p, d, E, m, g, v, y, T, R, x, H, b, _, w, M = new THREE.Vector3,
                    S = new THREE.Vector3,
                    A = new THREE.Vector3,
                    C = new THREE.Vector2,
                    L = new THREE.Vector2,
                    P = new THREE.Vector2,
                    F = new THREE.Vector3,
                    D = new THREE.Vector3;
                0 === this.drawcalls.length && this.addDrawCall(0, r.length, 0);
                var B = this.drawcalls,
                    l = 0;
                for (H = B.length; l < H; ++l) {
                    x = B[l].start, b = B[l].count;
                    var k = B[l].index,
                        a = x;
                    for (x += b; a < x; a += 3) b = k + r[a], _ = k + r[a + 1], w = k + r[a + 2], t(b, _, w)
                }
                var O, U, V, N = new THREE.Vector3,
                    z = new THREE.Vector3,
                    I = new THREE.Vector3,
                    G = new THREE.Vector3,
                    l = 0;
                for (H = B.length; l < H; ++l)
                    for (x = B[l].start, b = B[l].count, k = B[l].index, a = x, x += b; a < x; a += 3) b = k + r[a], _ = k + r[a + 1], w = k + r[a + 2], e(b), e(_), e(w)
            }
        },
        computeOffsets: function(t) {
            void 0 === t && (t = 65535);
            for (var e = this.attributes.index.array, r = this.attributes.position.array, n = e.length / 3, i = new Uint16Array(e.length), o = 0, a = 0, s = [{
                    start: 0,
                    count: 0,
                    index: 0
                }], h = s[0], c = 0, l = 0, u = new Int32Array(6), f = new Int32Array(r.length), p = new Int32Array(r.length), d = 0; d < r.length; d++) f[d] = -1, p[d] = -1;
            for (r = 0; r < n; r++) {
                for (var E = l = 0; 3 > E; E++) d = e[3 * r + E], -1 == f[d] ? (u[2 * E] = d, u[2 * E + 1] = -1, l++) : f[d] < h.index ? (u[2 * E] = d, u[2 * E + 1] = -1, c++) : (u[2 * E] = d, u[2 * E + 1] = f[d]);
                if (a + l > h.index + t)
                    for (h = {
                            start: o,
                            count: 0,
                            index: a
                        }, s.push(h), l = 0; 6 > l; l += 2) E = u[l + 1], -1 < E && E < h.index && (u[l + 1] = -1);
                for (l = 0; 6 > l; l += 2) d = u[l], E = u[l + 1], -1 === E && (E = a++), f[d] = E, p[E] = d, i[o++] = E - h.index, h.count++
            }
            return this.reorderBuffers(i, p, a), this.drawcalls = this.offsets = s
        },
        merge: function(t, e) {
            if (!1 != t instanceof THREE.BufferGeometry) {
                void 0 === e && (e = 0);
                var r, n = this.attributes;
                for (r in n)
                    if (void 0 !== t.attributes[r])
                        for (var i = n[r].array, o = t.attributes[r], a = o.array, s = 0, o = o.itemSize * e; s < a.length; s++, o++) i[o] = a[s];
                return this
            }
            THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function() {
            for (var t, e, r, n = this.attributes.normal.array, i = 0, o = n.length; i < o; i += 3) t = n[i], e = n[i + 1], r = n[i + 2], t = 1 / Math.sqrt(t * t + e * e + r * r), n[i] *= t, n[i + 1] *= t, n[i + 2] *= t
        },
        reorderBuffers: function(t, e, r) {
            var n, i = {};
            for (n in this.attributes) "index" != n && (i[n] = new this.attributes[n].array.constructor(this.attributes[n].itemSize * r));
            for (var o = 0; o < r; o++) {
                var a = e[o];
                for (n in this.attributes)
                    if ("index" != n)
                        for (var s = this.attributes[n].array, h = this.attributes[n].itemSize, c = i[n], l = 0; l < h; l++) c[o * h + l] = s[a * h + l]
            }
            this.attributes.index.array = t;
            for (n in this.attributes) "index" != n && (this.attributes[n].array = i[n], this.attributes[n].numItems = this.attributes[n].itemSize * r)
        },
        toJSON: function() {
            var t, e = {
                    metadata: {
                        version: 4,
                        type: "BufferGeometry",
                        generator: "BufferGeometryExporter"
                    },
                    uuid: this.uuid,
                    type: this.type,
                    data: {
                        attributes: {}
                    }
                },
                r = this.attributes,
                n = this.offsets,
                i = this.boundingSphere;
            for (t in r) {
                var o = r[t],
                    a = Array.prototype.slice.call(o.array);
                e.data.attributes[t] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: a
                }
            }
            return 0 < n.length && (e.data.offsets = JSON.parse(JSON.stringify(n))), null !== i && (e.data.boundingSphere = {
                center: i.center.toArray(),
                radius: i.radius
            }), e
        },
        clone: function() {
            var t, e = new THREE.BufferGeometry;
            for (t in this.attributes) e.addAttribute(t, this.attributes[t].clone());
            t = 0;
            for (var r = this.offsets.length; t < r; t++) {
                var n = this.offsets[t];
                e.offsets.push({
                    start: n.start,
                    index: n.index,
                    count: n.count
                })
            }
            return e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype), THREE.Geometry = function() {
        Object.defineProperty(this, "id", {
                value: THREE.GeometryIdCount++
            }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ],
            this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.hasTangents = !1, this.dynamic = !0, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
    }, THREE.Geometry.prototype = {
        constructor: THREE.Geometry,
        applyMatrix: function(t) {
            for (var e = (new THREE.Matrix3).getNormalMatrix(t), r = 0, n = this.vertices.length; r < n; r++) this.vertices[r].applyMatrix4(t);
            for (r = 0, n = this.faces.length; r < n; r++) {
                t = this.faces[r], t.normal.applyMatrix3(e).normalize();
                for (var i = 0, o = t.vertexNormals.length; i < o; i++) t.vertexNormals[i].applyMatrix3(e).normalize()
            }
            null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0
        },
        fromBufferGeometry: function(t) {
            for (var e = this, r = t.attributes, n = r.position.array, i = void 0 !== r.index ? r.index.array : void 0, o = void 0 !== r.normal ? r.normal.array : void 0, a = void 0 !== r.color ? r.color.array : void 0, s = void 0 !== r.uv ? r.uv.array : void 0, h = [], c = [], l = r = 0; r < n.length; r += 3, l += 2) e.vertices.push(new THREE.Vector3(n[r], n[r + 1], n[r + 2])), void 0 !== o && h.push(new THREE.Vector3(o[r], o[r + 1], o[r + 2])), void 0 !== a && e.colors.push(new THREE.Color(a[r], a[r + 1], a[r + 2])), void 0 !== s && c.push(new THREE.Vector2(s[l], s[l + 1]));
            var u = function(t, r, n) {
                var i = void 0 !== o ? [h[t].clone(), h[r].clone(), h[n].clone()] : [],
                    l = void 0 !== a ? [e.colors[t].clone(), e.colors[r].clone(), e.colors[n].clone()] : [];
                e.faces.push(new THREE.Face3(t, r, n, i, l)), void 0 !== s && e.faceVertexUvs[0].push([c[t].clone(), c[r].clone(), c[n].clone()])
            };
            if (void 0 !== i)
                if (n = t.drawcalls, 0 < n.length)
                    for (r = 0; r < n.length; r++)
                        for (var l = n[r], f = l.start, p = l.count, d = l.index, l = f, f = f + p; l < f; l += 3) u(d + i[l], d + i[l + 1], d + i[l + 2]);
                else
                    for (r = 0; r < i.length; r += 3) u(i[r], i[r + 1], i[r + 2]);
            else
                for (r = 0; r < n.length / 3; r += 3) u(r, r + 1, r + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.applyMatrix((new THREE.Matrix4).setPosition(t)), t
        },
        computeFaceNormals: function() {
            for (var t = new THREE.Vector3, e = new THREE.Vector3, r = 0, n = this.faces.length; r < n; r++) {
                var i = this.faces[r],
                    o = this.vertices[i.a],
                    a = this.vertices[i.b];
                t.subVectors(this.vertices[i.c], a), e.subVectors(o, a), t.cross(e), t.normalize(), i.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e, r, n;
            for (n = Array(this.vertices.length), e = 0, r = this.vertices.length; e < r; e++) n[e] = new THREE.Vector3;
            if (t) {
                var i, o, a, s = new THREE.Vector3,
                    h = new THREE.Vector3;
                for (t = 0, e = this.faces.length; t < e; t++) r = this.faces[t], i = this.vertices[r.a], o = this.vertices[r.b], a = this.vertices[r.c], s.subVectors(a, o), h.subVectors(i, o), s.cross(h), n[r.a].add(s), n[r.b].add(s), n[r.c].add(s)
            } else
                for (t = 0, e = this.faces.length; t < e; t++) r = this.faces[t], n[r.a].add(r.normal), n[r.b].add(r.normal), n[r.c].add(r.normal);
            for (e = 0, r = this.vertices.length; e < r; e++) n[e].normalize();
            for (t = 0, e = this.faces.length; t < e; t++) r = this.faces[t], r.vertexNormals[0] = n[r.a].clone(), r.vertexNormals[1] = n[r.b].clone(), r.vertexNormals[2] = n[r.c].clone()
        },
        computeMorphNormals: function() {
            var t, e, r, n, i;
            for (r = 0, n = this.faces.length; r < n; r++)
                for (i = this.faces[r], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), t = 0, e = i.vertexNormals.length; t < e; t++) i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
            var o = new THREE.Geometry;
            for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [], i = this.morphNormals[t].faceNormals;
                    var a, s, h = this.morphNormals[t].vertexNormals;
                    for (r = 0, n = this.faces.length; r < n; r++) a = new THREE.Vector3, s = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    }, i.push(a), h.push(s)
                }
                for (h = this.morphNormals[t], o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals(), r = 0, n = this.faces.length; r < n; r++) i = this.faces[r], a = h.faceNormals[r], s = h.vertexNormals[r], a.copy(i.normal), s.a.copy(i.vertexNormals[0]), s.b.copy(i.vertexNormals[1]), s.c.copy(i.vertexNormals[2])
            }
            for (r = 0, n = this.faces.length; r < n; r++) i = this.faces[r], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
        },
        computeTangents: function() {
            var t, e, r, n, i, o, a, s, h, c, l, u, f, p, d, E, m, g = [],
                v = [];
            r = new THREE.Vector3;
            var y = new THREE.Vector3,
                T = new THREE.Vector3,
                R = new THREE.Vector3,
                x = new THREE.Vector3;
            for (t = 0, e = this.vertices.length; t < e; t++) g[t] = new THREE.Vector3, v[t] = new THREE.Vector3;
            for (t = 0, e = this.faces.length; t < e; t++) i = this.faces[t], o = this.faceVertexUvs[0][t], n = i.a, m = i.b, i = i.c, a = this.vertices[n], s = this.vertices[m], h = this.vertices[i], c = o[0], l = o[1], u = o[2], o = s.x - a.x, f = h.x - a.x, p = s.y - a.y, d = h.y - a.y, s = s.z - a.z, a = h.z - a.z, h = l.x - c.x, E = u.x - c.x, l = l.y - c.y, c = u.y - c.y, u = 1 / (h * c - E * l), r.set((c * o - l * f) * u, (c * p - l * d) * u, (c * s - l * a) * u), y.set((h * f - E * o) * u, (h * d - E * p) * u, (h * a - E * s) * u), g[n].add(r), g[m].add(r), g[i].add(r), v[n].add(y), v[m].add(y), v[i].add(y);
            for (y = ["a", "b", "c", "d"], t = 0, e = this.faces.length; t < e; t++)
                for (i = this.faces[t], r = 0; r < Math.min(i.vertexNormals.length, 3); r++) x.copy(i.vertexNormals[r]), n = i[y[r]], m = g[n], T.copy(m), T.sub(x.multiplyScalar(x.dot(m))).normalize(), R.crossVectors(i.vertexNormals[r], m), n = R.dot(v[n]), n = 0 > n ? -1 : 1, i.vertexTangents[r] = new THREE.Vector4(T.x, T.y, T.z, n);
            this.hasTangents = !0
        },
        computeLineDistances: function() {
            for (var t = 0, e = this.vertices, r = 0, n = e.length; r < n; r++) 0 < r && (t += e[r].distanceTo(e[r - 1])), this.lineDistances[r] = t
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, r) {
            if (!1 == t instanceof THREE.Geometry) THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
            else {
                var n, i = this.vertices.length,
                    o = this.vertices,
                    a = t.vertices,
                    s = this.faces,
                    h = t.faces,
                    c = this.faceVertexUvs[0];
                t = t.faceVertexUvs[0], void 0 === r && (r = 0), void 0 !== e && (n = (new THREE.Matrix3).getNormalMatrix(e));
                for (var l = 0, u = a.length; l < u; l++) {
                    var f = a[l].clone();
                    void 0 !== e && f.applyMatrix4(e), o.push(f)
                }
                for (l = 0, u = h.length; l < u; l++) {
                    var p, a = h[l],
                        d = a.vertexNormals,
                        E = a.vertexColors,
                        f = new THREE.Face3(a.a + i, a.b + i, a.c + i);
                    for (f.normal.copy(a.normal), void 0 !== n && f.normal.applyMatrix3(n).normalize(), e = 0, o = d.length; e < o; e++) p = d[e].clone(), void 0 !== n && p.applyMatrix3(n).normalize(), f.vertexNormals.push(p);
                    for (f.color.copy(a.color), e = 0, o = E.length; e < o; e++) p = E[e], f.vertexColors.push(p.clone());
                    f.materialIndex = a.materialIndex + r, s.push(f)
                }
                for (l = 0, u = t.length; l < u; l++)
                    if (r = t[l], n = [], void 0 !== r) {
                        for (e = 0, o = r.length; e < o; e++) n.push(r[e].clone());
                        c.push(n)
                    }
            }
        },
        mergeMesh: function(t) {
            !1 == t instanceof THREE.Mesh ? THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix))
        },
        mergeVertices: function() {
            var t, e, r, n = {},
                i = [],
                o = [],
                a = Math.pow(10, 4);
            for (e = 0, r = this.vertices.length; e < r; e++) t = this.vertices[e], t = Math.round(t.x * a) + "_" + Math.round(t.y * a) + "_" + Math.round(t.z * a), void 0 === n[t] ? (n[t] = e, i.push(this.vertices[e]), o[e] = i.length - 1) : o[e] = o[n[t]];
            for (n = [], e = 0, r = this.faces.length; e < r; e++)
                for (a = this.faces[e], a.a = o[a.a], a.b = o[a.b], a.c = o[a.c], a = [a.a, a.b, a.c], t = 0; 3 > t; t++)
                    if (a[t] == a[(t + 1) % 3]) {
                        n.push(e);
                        break
                    }
            for (e = n.length - 1; 0 <= e; e--)
                for (a = n[e], this.faces.splice(a, 1), o = 0, r = this.faceVertexUvs.length; o < r; o++) this.faceVertexUvs[o].splice(a, 1);
            return e = this.vertices.length - i.length, this.vertices = i, e
        },
        toJSON: function() {
            function t(t, e, r) {
                return r ? t | 1 << e : t & ~(1 << e)
            }

            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] ? c[e] : (c[e] = h.length / 3, h.push(t.x, t.y, t.z), c[e])
            }

            function r(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== u[e] ? u[e] : (u[e] = l.length, l.push(t.getHex()), u[e])
            }

            function n(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== p[e] ? p[e] : (p[e] = f.length / 2, f.push(t.x, t.y), p[e])
            }
            var i = {
                metadata: {
                    version: 4,
                    type: "BufferGeometry",
                    generator: "BufferGeometryExporter"
                },
                uuid: this.uuid,
                type: this.type
            };
            if ("" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
                var o, a = this.parameters;
                for (o in a) void 0 !== a[o] && (i[o] = a[o]);
                return i
            }
            for (a = [], o = 0; o < this.vertices.length; o++) {
                var s = this.vertices[o];
                a.push(s.x, s.y, s.z)
            }
            var s = [],
                h = [],
                c = {},
                l = [],
                u = {},
                f = [],
                p = {};
            for (o = 0; o < this.faces.length; o++) {
                var d = this.faces[o],
                    E = void 0 !== this.faceVertexUvs[0][o],
                    m = 0 < d.normal.length(),
                    g = 0 < d.vertexNormals.length,
                    v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                    y = 0 < d.vertexColors.length,
                    T = 0,
                    T = t(T, 0, 0),
                    T = t(T, 1, !1),
                    T = t(T, 2, !1),
                    T = t(T, 3, E),
                    T = t(T, 4, m),
                    T = t(T, 5, g),
                    T = t(T, 6, v),
                    T = t(T, 7, y);
                s.push(T), s.push(d.a, d.b, d.c), E && (E = this.faceVertexUvs[0][o], s.push(n(E[0]), n(E[1]), n(E[2]))), m && s.push(e(d.normal)), g && (m = d.vertexNormals, s.push(e(m[0]), e(m[1]), e(m[2]))), v && s.push(r(d.color)), y && (d = d.vertexColors, s.push(r(d[0]), r(d[1]), r(d[2])))
            }
            return i.data = {}, i.data.vertices = a, i.data.normals = h, 0 < l.length && (i.data.colors = l), 0 < f.length && (i.data.uvs = [f]), i.data.faces = s, i
        },
        clone: function() {
            for (var t = new THREE.Geometry, e = this.vertices, r = 0, n = e.length; r < n; r++) t.vertices.push(e[r].clone());
            for (e = this.faces, r = 0, n = e.length; r < n; r++) t.faces.push(e[r].clone());
            for (r = 0, n = this.faceVertexUvs.length; r < n; r++) {
                e = this.faceVertexUvs[r], void 0 === t.faceVertexUvs[r] && (t.faceVertexUvs[r] = []);
                for (var i = 0, o = e.length; i < o; i++) {
                    for (var a = e[i], s = [], h = 0, c = a.length; h < c; h++) s.push(a[h].clone());
                    t.faceVertexUvs[r].push(s)
                }
            }
            return t
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype), THREE.GeometryIdCount = 0, THREE.Camera = function() {
        THREE.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4
    }, THREE.Camera.prototype = Object.create(THREE.Object3D.prototype), THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.getWorldDirection = function() {
        var t = new THREE.Quaternion;
        return function(e) {
            return e = e || new THREE.Vector3, this.getWorldQuaternion(t), e.set(0, 0, -1).applyQuaternion(t)
        }
    }(), THREE.Camera.prototype.lookAt = function() {
        var t = new THREE.Matrix4;
        return function(e) {
            t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
        }
    }(), THREE.Camera.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.Camera), THREE.Object3D.prototype.clone.call(this, t), t.matrixWorldInverse.copy(this.matrixWorldInverse), t.projectionMatrix.copy(this.projectionMatrix), t
    }, THREE.CubeCamera = function(t, e, r) {
        THREE.Object3D.call(this), this.type = "CubeCamera";
        var n = new THREE.PerspectiveCamera(90, 1, t, e);
        n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(1, 0, 0)), this.add(n);
        var i = new THREE.PerspectiveCamera(90, 1, t, e);
        i.up.set(0, -1, 0), i.lookAt(new THREE.Vector3((-1), 0, 0)), this.add(i);
        var o = new THREE.PerspectiveCamera(90, 1, t, e);
        o.up.set(0, 0, 1), o.lookAt(new THREE.Vector3(0, 1, 0)), this.add(o);
        var a = new THREE.PerspectiveCamera(90, 1, t, e);
        a.up.set(0, 0, -1), a.lookAt(new THREE.Vector3(0, (-1), 0)), this.add(a);
        var s = new THREE.PerspectiveCamera(90, 1, t, e);
        s.up.set(0, -1, 0), s.lookAt(new THREE.Vector3(0, 0, 1)), this.add(s);
        var h = new THREE.PerspectiveCamera(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new THREE.Vector3(0, 0, (-1))), this.add(h), this.renderTarget = new THREE.WebGLRenderTargetCube(r, r, {
            format: THREE.RGBFormat,
            magFilter: THREE.LinearFilter,
            minFilter: THREE.LinearFilter
        }), this.updateCubeMap = function(t, e) {
            var r = this.renderTarget,
                c = r.generateMipmaps;
            r.generateMipmaps = !1, r.activeCubeFace = 0, t.render(e, n, r), r.activeCubeFace = 1, t.render(e, i, r), r.activeCubeFace = 2, t.render(e, o, r), r.activeCubeFace = 3, t.render(e, a, r), r.activeCubeFace = 4, t.render(e, s, r), r.generateMipmaps = c, r.activeCubeFace = 5, t.render(e, h, r)
        }
    }, THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype), THREE.CubeCamera.prototype.constructor = THREE.CubeCamera, THREE.OrthographicCamera = function(t, e, r, n, i, o) {
        THREE.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = t, this.right = e, this.top = r, this.bottom = n, this.near = void 0 !== i ? i : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
    }, THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype), THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera, THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
        var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            r = (this.right + this.left) / 2,
            n = (this.top + this.bottom) / 2;
        this.projectionMatrix.makeOrthographic(r - t, r + t, n + e, n - e, this.near, this.far)
    }, THREE.OrthographicCamera.prototype.clone = function() {
        var t = new THREE.OrthographicCamera;
        return THREE.Camera.prototype.clone.call(this, t), t.zoom = this.zoom, t.left = this.left, t.right = this.right, t.top = this.top, t.bottom = this.bottom, t.near = this.near, t.far = this.far, t.projectionMatrix.copy(this.projectionMatrix), t
    }, THREE.PerspectiveCamera = function(t, e, r, n) {
        THREE.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== t ? t : 50, this.aspect = void 0 !== e ? e : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype), THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera, THREE.PerspectiveCamera.prototype.setLens = function(t, e) {
        void 0 === e && (e = 24), this.fov = 2 * THREE.Math.radToDeg(Math.atan(e / (2 * t))), this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype.setViewOffset = function(t, e, r, n, i, o) {
        this.fullWidth = t, this.fullHeight = e, this.x = r, this.y = n, this.width = i, this.height = o, this.updateProjectionMatrix()
    }, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
        var t = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
        if (this.fullWidth) {
            var e = this.fullWidth / this.fullHeight,
                t = Math.tan(THREE.Math.degToRad(.5 * t)) * this.near,
                r = -t,
                n = e * r,
                e = Math.abs(e * t - n),
                r = Math.abs(t - r);
            this.projectionMatrix.makeFrustum(n + this.x * e / this.fullWidth, n + (this.x + this.width) * e / this.fullWidth, t - (this.y + this.height) * r / this.fullHeight, t - this.y * r / this.fullHeight, this.near, this.far)
        } else this.projectionMatrix.makePerspective(t, this.aspect, this.near, this.far)
    }, THREE.PerspectiveCamera.prototype.clone = function() {
        var t = new THREE.PerspectiveCamera;
        return THREE.Camera.prototype.clone.call(this, t), t.zoom = this.zoom, t.fov = this.fov, t.aspect = this.aspect, t.near = this.near, t.far = this.far, t.projectionMatrix.copy(this.projectionMatrix), t
    }, THREE.Light = function(t) {
        THREE.Object3D.call(this), this.type = "Light", this.color = new THREE.Color(t)
    }, THREE.Light.prototype = Object.create(THREE.Object3D.prototype), THREE.Light.prototype.constructor = THREE.Light, THREE.Light.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.Light), THREE.Object3D.prototype.clone.call(this, t), t.color.copy(this.color), t
    }, THREE.AmbientLight = function(t) {
        THREE.Light.call(this, t), this.type = "AmbientLight"
    }, THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype), THREE.AmbientLight.prototype.constructor = THREE.AmbientLight, THREE.AmbientLight.prototype.clone = function() {
        var t = new THREE.AmbientLight;
        return THREE.Light.prototype.clone.call(this, t), t
    }, THREE.AreaLight = function(t, e) {
        THREE.Light.call(this, t), this.type = "AreaLight", this.normal = new THREE.Vector3(0, (-1), 0), this.right = new THREE.Vector3(1, 0, 0), this.intensity = void 0 !== e ? e : 1, this.height = this.width = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1
    }, THREE.AreaLight.prototype = Object.create(THREE.Light.prototype), THREE.AreaLight.prototype.constructor = THREE.AreaLight, THREE.DirectionalLight = function(t, e) {
        THREE.Light.call(this, t), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== e ? e : 1, this.onlyShadow = this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraTop = this.shadowCameraRight = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapHeight = this.shadowMapWidth = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new THREE.Vector3(0, 0, (-1e3)), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
    }, THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype), THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight, THREE.DirectionalLight.prototype.clone = function() {
        var t = new THREE.DirectionalLight;
        return THREE.Light.prototype.clone.call(this, t), t.target = this.target.clone(), t.intensity = this.intensity, t.castShadow = this.castShadow, t.onlyShadow = this.onlyShadow, t.shadowCameraNear = this.shadowCameraNear, t.shadowCameraFar = this.shadowCameraFar, t.shadowCameraLeft = this.shadowCameraLeft, t.shadowCameraRight = this.shadowCameraRight, t.shadowCameraTop = this.shadowCameraTop, t.shadowCameraBottom = this.shadowCameraBottom, t.shadowCameraVisible = this.shadowCameraVisible, t.shadowBias = this.shadowBias, t.shadowDarkness = this.shadowDarkness, t.shadowMapWidth = this.shadowMapWidth, t.shadowMapHeight = this.shadowMapHeight, t.shadowCascade = this.shadowCascade, t.shadowCascadeOffset.copy(this.shadowCascadeOffset), t.shadowCascadeCount = this.shadowCascadeCount, t.shadowCascadeBias = this.shadowCascadeBias.slice(0), t.shadowCascadeWidth = this.shadowCascadeWidth.slice(0), t.shadowCascadeHeight = this.shadowCascadeHeight.slice(0), t.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0), t.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0), t
    }, THREE.HemisphereLight = function(t, e, r) {
        THREE.Light.call(this, t), this.type = "HemisphereLight", this.position.set(0, 100, 0), this.groundColor = new THREE.Color(e), this.intensity = void 0 !== r ? r : 1
    }, THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype), THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight, THREE.HemisphereLight.prototype.clone = function() {
        var t = new THREE.HemisphereLight;
        return THREE.Light.prototype.clone.call(this, t), t.groundColor.copy(this.groundColor), t.intensity = this.intensity, t
    }, THREE.PointLight = function(t, e, r, n) {
        THREE.Light.call(this, t), this.type = "PointLight", this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1
    }, THREE.PointLight.prototype = Object.create(THREE.Light.prototype), THREE.PointLight.prototype.constructor = THREE.PointLight, THREE.PointLight.prototype.clone = function() {
        var t = new THREE.PointLight;
        return THREE.Light.prototype.clone.call(this, t), t.intensity = this.intensity, t.distance = this.distance, t.decay = this.decay, t
    }, THREE.SpotLight = function(t, e, r, n, i, o) {
        THREE.Light.call(this, t), this.type = "SpotLight", this.position.set(0, 1, 0), this.target = new THREE.Object3D, this.intensity = void 0 !== e ? e : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.exponent = void 0 !== i ? i : 10, this.decay = void 0 !== o ? o : 1, this.onlyShadow = this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapHeight = this.shadowMapWidth = 512, this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
    }, THREE.SpotLight.prototype = Object.create(THREE.Light.prototype), THREE.SpotLight.prototype.constructor = THREE.SpotLight, THREE.SpotLight.prototype.clone = function() {
        var t = new THREE.SpotLight;
        return THREE.Light.prototype.clone.call(this, t), t.target = this.target.clone(), t.intensity = this.intensity, t.distance = this.distance, t.angle = this.angle, t.exponent = this.exponent, t.decay = this.decay, t.castShadow = this.castShadow, t.onlyShadow = this.onlyShadow, t.shadowCameraNear = this.shadowCameraNear, t.shadowCameraFar = this.shadowCameraFar, t.shadowCameraFov = this.shadowCameraFov, t.shadowCameraVisible = this.shadowCameraVisible, t.shadowBias = this.shadowBias, t.shadowDarkness = this.shadowDarkness, t.shadowMapWidth = this.shadowMapWidth, t.shadowMapHeight = this.shadowMapHeight, t
    }, THREE.Cache = {
        files: {},
        add: function(t, e) {
            this.files[t] = e
        },
        get: function(t) {
            return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    }, THREE.Loader = function(t) {
        this.statusDomElement = (this.showStatus = t) ? THREE.Loader.prototype.addStatusElement() : null, this.imageLoader = new THREE.ImageLoader, this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
    }, THREE.Loader.prototype = {
        constructor: THREE.Loader,
        crossOrigin: void 0,
        addStatusElement: function() {
            var t = document.createElement("div");
            return t.style.position = "absolute", t.style.right = "0px", t.style.top = "0px", t.style.fontSize = "0.8em", t.style.textAlign = "left", t.style.background = "rgba(0,0,0,0.25)", t.style.color = "#fff", t.style.width = "120px", t.style.padding = "0.5em 0.5em 0.5em 0.5em", t.style.zIndex = 1e3, t.innerHTML = "Loading ...", t
        },
        updateProgress: function(t) {
            var e = "Loaded ",
                e = t.total ? e + ((100 * t.loaded / t.total).toFixed(0) + "%") : e + ((t.loaded / 1024).toFixed(2) + " KB");
            this.statusDomElement.innerHTML = e
        },
        extractUrlBase: function(t) {
            return t = t.split("/"), 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
        },
        initMaterials: function(t, e) {
            for (var r = [], n = 0; n < t.length; ++n) r[n] = this.createMaterial(t[n], e);
            return r
        },
        needsTangents: function(t) {
            for (var e = 0, r = t.length; e < r; e++)
                if (t[e] instanceof THREE.ShaderMaterial) return !0;
            return !1
        },
        createMaterial: function(t, e) {
            function r(t) {
                return t = Math.log(t) / Math.LN2, Math.pow(2, Math.round(t))
            }

            function n(t, n, i, a, s, h, c) {
                var l, u = e + i,
                    f = THREE.Loader.Handlers.get(u);
                null !== f ? l = f.load(u) : (l = new THREE.Texture, f = o.imageLoader, f.crossOrigin = o.crossOrigin, f.load(u, function(t) {
                    if (!1 === THREE.Math.isPowerOfTwo(t.width) || !1 === THREE.Math.isPowerOfTwo(t.height)) {
                        var e = r(t.width),
                            n = r(t.height),
                            i = document.createElement("canvas");
                        i.width = e, i.height = n, i.getContext("2d").drawImage(t, 0, 0, e, n), l.image = i
                    } else l.image = t;
                    l.needsUpdate = !0
                })), l.sourceFile = i, a && (l.repeat.set(a[0], a[1]), 1 !== a[0] && (l.wrapS = THREE.RepeatWrapping), 1 !== a[1] && (l.wrapT = THREE.RepeatWrapping)), s && l.offset.set(s[0], s[1]), h && (i = {
                    repeat: THREE.RepeatWrapping,
                    mirror: THREE.MirroredRepeatWrapping
                }, void 0 !== i[h[0]] && (l.wrapS = i[h[0]]), void 0 !== i[h[1]] && (l.wrapT = i[h[1]])), c && (l.anisotropy = c), t[n] = l
            }

            function i(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
            }
            var o = this,
                a = "MeshLambertMaterial",
                s = {
                    color: 15658734,
                    opacity: 1,
                    map: null,
                    lightMap: null,
                    normalMap: null,
                    bumpMap: null,
                    wireframe: !1
                };
            if (t.shading) {
                var h = t.shading.toLowerCase();
                "phong" === h ? a = "MeshPhongMaterial" : "basic" === h && (a = "MeshBasicMaterial")
            }
            return void 0 !== t.blending && void 0 !== THREE[t.blending] && (s.blending = THREE[t.blending]), void 0 !== t.transparent && (s.transparent = t.transparent), void 0 !== t.opacity && 1 > t.opacity && (s.transparent = !0), void 0 !== t.depthTest && (s.depthTest = t.depthTest), void 0 !== t.depthWrite && (s.depthWrite = t.depthWrite), void 0 !== t.visible && (s.visible = t.visible), void 0 !== t.flipSided && (s.side = THREE.BackSide), void 0 !== t.doubleSided && (s.side = THREE.DoubleSide), void 0 !== t.wireframe && (s.wireframe = t.wireframe), void 0 !== t.vertexColors && ("face" === t.vertexColors ? s.vertexColors = THREE.FaceColors : t.vertexColors && (s.vertexColors = THREE.VertexColors)), t.colorDiffuse ? s.color = i(t.colorDiffuse) : t.DbgColor && (s.color = t.DbgColor), t.colorSpecular && (s.specular = i(t.colorSpecular)), t.colorEmissive && (s.emissive = i(t.colorEmissive)), void 0 !== t.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), t.opacity = t.transparency), void 0 !== t.opacity && (s.opacity = t.opacity), t.specularCoef && (s.shininess = t.specularCoef), t.mapDiffuse && e && n(s, "map", t.mapDiffuse, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy), t.mapLight && e && n(s, "lightMap", t.mapLight, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy), t.mapBump && e && n(s, "bumpMap", t.mapBump, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy), t.mapNormal && e && n(s, "normalMap", t.mapNormal, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy), t.mapSpecular && e && n(s, "specularMap", t.mapSpecular, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy), t.mapAlpha && e && n(s, "alphaMap", t.mapAlpha, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy), t.mapBumpScale && (s.bumpScale = t.mapBumpScale), t.mapNormalFactor && (s.normalScale = new THREE.Vector2(t.mapNormalFactor, t.mapNormalFactor)), a = new THREE[a](s), void 0 !== t.DbgName && (a.name = t.DbgName), a
        }
    }, THREE.Loader.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = 0, r = this.handlers.length; e < r; e += 2) {
                var n = this.handlers[e + 1];
                if (this.handlers[e].test(t)) return n
            }
            return null
        }
    }, THREE.XHRLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.XHRLoader.prototype = {
        constructor: THREE.XHRLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = THREE.Cache.get(t);
            void 0 !== o ? e && e(o) : (o = new XMLHttpRequest, o.open("GET", t, !0), o.addEventListener("load", function(r) {
                THREE.Cache.add(t, this.response), e && e(this.response), i.manager.itemEnd(t)
            }, !1), void 0 !== r && o.addEventListener("progress", function(t) {
                r(t)
            }, !1), void 0 !== n && o.addEventListener("error", function(t) {
                n(t)
            }, !1), void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (o.responseType = this.responseType), o.send(null), i.manager.itemStart(t))
        },
        setResponseType: function(t) {
            this.responseType = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        }
    }, THREE.ImageLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.ImageLoader.prototype = {
        constructor: THREE.ImageLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = THREE.Cache.get(t);
            return void 0 === o ? (o = document.createElement("img"), o.addEventListener("load", function(r) {
                THREE.Cache.add(t, this), e && e(this), i.manager.itemEnd(t)
            }, !1), void 0 !== r && o.addEventListener("progress", function(t) {
                r(t)
            }, !1), void 0 !== n && o.addEventListener("error", function(t) {
                n(t)
            }, !1), void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), o.src = t, i.manager.itemStart(t), o) : void e(o)
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        }
    }, THREE.JSONLoader = function(t) {
        THREE.Loader.call(this, t), this.withCredentials = !1
    }, THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype), THREE.JSONLoader.prototype.constructor = THREE.JSONLoader, THREE.JSONLoader.prototype.load = function(t, e, r) {
        r = r && "string" == typeof r ? r : this.extractUrlBase(t), this.onLoadStart(), this.loadAjaxJSON(this, t, e, r)
    }, THREE.JSONLoader.prototype.loadAjaxJSON = function(t, e, r, n, i) {
        var o = new XMLHttpRequest,
            a = 0;
        o.onreadystatechange = function() {
            if (o.readyState === o.DONE)
                if (200 === o.status || 0 === o.status) {
                    if (o.responseText) {
                        var s = JSON.parse(o.responseText),
                            h = s.metadata;
                        if (void 0 !== h) {
                            if ("object" === h.type) return void THREE.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                            if ("scene" === h.type) return void THREE.error("THREE.JSONLoader: " + e + " seems to be a Scene. Use THREE.SceneLoader instead.")
                        }
                        s = t.parse(s, n), r(s.geometry, s.materials)
                    } else THREE.error("THREE.JSONLoader: " + e + " seems to be unreachable or the file is empty.");
                    t.onLoadComplete()
                } else THREE.error("THREE.JSONLoader: Couldn't load " + e + " (" + o.status + ")");
            else o.readyState === o.LOADING ? i && (0 === a && (a = o.getResponseHeader("Content-Length")), i({
                total: a,
                loaded: o.responseText.length
            })) : o.readyState === o.HEADERS_RECEIVED && void 0 !== i && (a = o.getResponseHeader("Content-Length"))
        }, o.open("GET", e, !0), o.withCredentials = this.withCredentials, o.send(null)
    }, THREE.JSONLoader.prototype.parse = function(t, e) {
        var r = new THREE.Geometry,
            n = void 0 !== t.scale ? 1 / t.scale : 1;
        return function(e) {
                var n, i, o, a, s, h, c, l, u, f, p, d, E, m = t.faces;
                h = t.vertices;
                var g = t.normals,
                    v = t.colors,
                    y = 0;
                if (void 0 !== t.uvs) {
                    for (n = 0; n < t.uvs.length; n++) t.uvs[n].length && y++;
                    for (n = 0; n < y; n++) r.faceVertexUvs[n] = []
                }
                for (a = 0, s = h.length; a < s;) n = new THREE.Vector3, n.x = h[a++] * e, n.y = h[a++] * e, n.z = h[a++] * e, r.vertices.push(n);
                for (a = 0, s = m.length; a < s;)
                    if (e = m[a++], u = 1 & e, o = 2 & e, n = 8 & e, c = 16 & e, f = 32 & e, h = 64 & e, e &= 128, u) {
                        if (u = new THREE.Face3, u.a = m[a], u.b = m[a + 1], u.c = m[a + 3], p = new THREE.Face3, p.a = m[a + 1], p.b = m[a + 2], p.c = m[a + 3], a += 4, o && (o = m[a++], u.materialIndex = o, p.materialIndex = o), o = r.faces.length, n)
                            for (n = 0; n < y; n++)
                                for (d = t.uvs[n], r.faceVertexUvs[n][o] = [], r.faceVertexUvs[n][o + 1] = [], i = 0; 4 > i; i++) l = m[a++], E = d[2 * l], l = d[2 * l + 1], E = new THREE.Vector2(E, l), 2 !== i && r.faceVertexUvs[n][o].push(E), 0 !== i && r.faceVertexUvs[n][o + 1].push(E);
                        if (c && (c = 3 * m[a++], u.normal.set(g[c++], g[c++], g[c]), p.normal.copy(u.normal)), f)
                            for (n = 0; 4 > n; n++) c = 3 * m[a++], f = new THREE.Vector3(g[c++], g[c++], g[c]), 2 !== n && u.vertexNormals.push(f), 0 !== n && p.vertexNormals.push(f);
                        if (h && (h = m[a++], h = v[h], u.color.setHex(h), p.color.setHex(h)), e)
                            for (n = 0; 4 > n; n++) h = m[a++], h = v[h], 2 !== n && u.vertexColors.push(new THREE.Color(h)), 0 !== n && p.vertexColors.push(new THREE.Color(h));
                        r.faces.push(u), r.faces.push(p)
                    } else {
                        if (u = new THREE.Face3, u.a = m[a++], u.b = m[a++], u.c = m[a++], o && (o = m[a++], u.materialIndex = o), o = r.faces.length, n)
                            for (n = 0; n < y; n++)
                                for (d = t.uvs[n], r.faceVertexUvs[n][o] = [], i = 0; 3 > i; i++) l = m[a++], E = d[2 * l], l = d[2 * l + 1], E = new THREE.Vector2(E, l), r.faceVertexUvs[n][o].push(E);
                        if (c && (c = 3 * m[a++], u.normal.set(g[c++], g[c++], g[c])), f)
                            for (n = 0; 3 > n; n++) c = 3 * m[a++], f = new THREE.Vector3(g[c++], g[c++], g[c]), u.vertexNormals.push(f);
                        if (h && (h = m[a++], u.color.setHex(v[h])), e)
                            for (n = 0; 3 > n; n++) h = m[a++], u.vertexColors.push(new THREE.Color(v[h]));
                        r.faces.push(u)
                    }
            }(n),
            function() {
                var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)
                    for (var n = 0, i = t.skinWeights.length; n < i; n += e) r.skinWeights.push(new THREE.Vector4(t.skinWeights[n], 1 < e ? t.skinWeights[n + 1] : 0, 2 < e ? t.skinWeights[n + 2] : 0, 3 < e ? t.skinWeights[n + 3] : 0));
                if (t.skinIndices)
                    for (n = 0, i = t.skinIndices.length; n < i; n += e) r.skinIndices.push(new THREE.Vector4(t.skinIndices[n], 1 < e ? t.skinIndices[n + 1] : 0, 2 < e ? t.skinIndices[n + 2] : 0, 3 < e ? t.skinIndices[n + 3] : 0));
                r.bones = t.bones, r.bones && 0 < r.bones.length && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && THREE.warn("THREE.JSONLoader: When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match."), r.animation = t.animation, r.animations = t.animations
            }(),
            function(e) {
                if (void 0 !== t.morphTargets) {
                    var n, i, o, a, s, h;
                    for (n = 0, i = t.morphTargets.length; n < i; n++)
                        for (r.morphTargets[n] = {}, r.morphTargets[n].name = t.morphTargets[n].name, r.morphTargets[n].vertices = [], s = r.morphTargets[n].vertices, h = t.morphTargets[n].vertices, o = 0, a = h.length; o < a; o += 3) {
                            var c = new THREE.Vector3;
                            c.x = h[o] * e, c.y = h[o + 1] * e, c.z = h[o + 2] * e, s.push(c)
                        }
                }
                if (void 0 !== t.morphColors)
                    for (n = 0, i = t.morphColors.length; n < i; n++)
                        for (r.morphColors[n] = {}, r.morphColors[n].name = t.morphColors[n].name, r.morphColors[n].colors = [], a = r.morphColors[n].colors, s = t.morphColors[n].colors, e = 0, o = s.length; e < o; e += 3) h = new THREE.Color(16755200), h.setRGB(s[e], s[e + 1], s[e + 2]), a.push(h)
            }(n), r.computeFaceNormals(), r.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? {
                geometry: r
            } : (n = this.initMaterials(t.materials, e), this.needsTangents(n) && r.computeTangents(), {
                geometry: r,
                materials: n
            })
    }, THREE.LoadingManager = function(t, e, r) {
        var n = this,
            i = 0,
            o = 0;
        this.onLoad = t, this.onProgress = e, this.onError = r, this.itemStart = function(t) {
            o++
        }, this.itemEnd = function(t) {
            i++, void 0 !== n.onProgress && n.onProgress(t, i, o), i === o && void 0 !== n.onLoad && n.onLoad()
        }
    }, THREE.DefaultLoadingManager = new THREE.LoadingManager, THREE.BufferGeometryLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.BufferGeometryLoader.prototype = {
        constructor: THREE.BufferGeometryLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = new THREE.XHRLoader(i.manager);
            o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, r, n)
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t) {
            var e, r = new THREE.BufferGeometry,
                n = t.data.attributes;
            for (e in n) {
                var i = n[e],
                    o = new self[i.type](i.array);
                r.addAttribute(e, new THREE.BufferAttribute(o, i.itemSize))
            }
            return n = t.data.offsets, void 0 !== n && (r.offsets = JSON.parse(JSON.stringify(n))),
                t = t.data.boundingSphere, void 0 !== t && (n = new THREE.Vector3, void 0 !== t.center && n.fromArray(t.center), r.boundingSphere = new THREE.Sphere(n, t.radius)), r
        }
    }, THREE.MaterialLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.MaterialLoader.prototype = {
        constructor: THREE.MaterialLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = new THREE.XHRLoader(i.manager);
            o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, r, n)
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t) {
            var e = new THREE[t.type];
            if (void 0 !== t.color && e.color.setHex(t.color), void 0 !== t.emissive && e.emissive.setHex(t.emissive), void 0 !== t.specular && e.specular.setHex(t.specular), void 0 !== t.shininess && (e.shininess = t.shininess), void 0 !== t.uniforms && (e.uniforms = t.uniforms), void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors), void 0 !== t.shading && (e.shading = t.shading), void 0 !== t.blending && (e.blending = t.blending), void 0 !== t.side && (e.side = t.side), void 0 !== t.opacity && (e.opacity = t.opacity), void 0 !== t.transparent && (e.transparent = t.transparent), void 0 !== t.wireframe && (e.wireframe = t.wireframe), void 0 !== t.size && (e.size = t.size), void 0 !== t.sizeAttenuation && (e.sizeAttenuation = t.sizeAttenuation), void 0 !== t.materials)
                for (var r = 0, n = t.materials.length; r < n; r++) e.materials.push(this.parse(t.materials[r]));
            return e
        }
    }, THREE.ObjectLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.texturePath = ""
    }, THREE.ObjectLoader.prototype = {
        constructor: THREE.ObjectLoader,
        load: function(t, e, r, n) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var i = this,
                o = new THREE.XHRLoader(i.manager);
            o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                i.parse(JSON.parse(t), e)
            }, r, n)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t, e) {
            var r = this.parseGeometries(t.geometries),
                n = this.parseImages(t.images, function() {
                    void 0 !== e && e(i)
                }),
                n = this.parseTextures(t.textures, n),
                n = this.parseMaterials(t.materials, n),
                i = this.parseObject(t.object, r, n);
            return void 0 !== t.images && 0 !== t.images.length || void 0 === e || e(i), i
        },
        parseGeometries: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var r = new THREE.JSONLoader, n = new THREE.BufferGeometryLoader, i = 0, o = t.length; i < o; i++) {
                    var a, s = t[i];
                    switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            a = new THREE[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "CubeGeometry":
                            a = new THREE.BoxGeometry(s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case "CircleGeometry":
                            a = new THREE.CircleGeometry(s.radius, s.segments);
                            break;
                        case "CylinderGeometry":
                            a = new THREE.CylinderGeometry(s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded);
                            break;
                        case "SphereGeometry":
                            a = new THREE.SphereGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case "IcosahedronGeometry":
                            a = new THREE.IcosahedronGeometry(s.radius, s.detail);
                            break;
                        case "TorusGeometry":
                            a = new THREE.TorusGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case "TorusKnotGeometry":
                            a = new THREE.TorusKnotGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.p, s.q, s.heightScale);
                            break;
                        case "BufferGeometry":
                            a = n.parse(s);
                            break;
                        case "Geometry":
                            a = r.parse(s.data).geometry
                    }
                    a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), e[s.uuid] = a
                }
            return e
        },
        parseMaterials: function(t, e) {
            var r = {};
            if (void 0 !== t)
                for (var n = function(t) {
                        return void 0 === e[t] && THREE.warn("THREE.ObjectLoader: Undefined texture", t), e[t]
                    }, i = new THREE.MaterialLoader, o = 0, a = t.length; o < a; o++) {
                    var s = t[o],
                        h = i.parse(s);
                    h.uuid = s.uuid, void 0 !== s.name && (h.name = s.name), void 0 !== s.map && (h.map = n(s.map)), void 0 !== s.bumpMap && (h.bumpMap = n(s.bumpMap), s.bumpScale && (h.bumpScale = new THREE.Vector2(s.bumpScale, s.bumpScale))), void 0 !== s.alphaMap && (h.alphaMap = n(s.alphaMap)), void 0 !== s.envMap && (h.envMap = n(s.envMap)), void 0 !== s.normalMap && (h.normalMap = n(s.normalMap), s.normalScale && (h.normalScale = new THREE.Vector2(s.normalScale, s.normalScale))), void 0 !== s.lightMap && (h.lightMap = n(s.lightMap)), void 0 !== s.specularMap && (h.specularMap = n(s.specularMap)), r[s.uuid] = h
                }
            return r
        },
        parseImages: function(t, e) {
            var r = this,
                n = {};
            if (void 0 !== t && 0 < t.length) {
                var i = new THREE.LoadingManager(e),
                    o = new THREE.ImageLoader(i);
                o.setCrossOrigin(this.crossOrigin);
                for (var i = function(t) {
                        return r.manager.itemStart(t), o.load(t, function() {
                            r.manager.itemEnd(t)
                        })
                    }, a = 0, s = t.length; a < s; a++) {
                    var h = t[a],
                        c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : r.texturePath + h.url;
                    n[h.uuid] = i(c)
                }
            }
            return n
        },
        parseTextures: function(t, e) {
            var r = {};
            if (void 0 !== t)
                for (var n = 0, i = t.length; n < i; n++) {
                    var o = t[n];
                    void 0 === o.image && THREE.warn('THREE.ObjectLoader: No "image" speficied for', o.uuid), void 0 === e[o.image] && THREE.warn("THREE.ObjectLoader: Undefined image", o.image);
                    var a = new THREE.Texture(e[o.image]);
                    a.needsUpdate = !0, a.uuid = o.uuid, void 0 !== o.name && (a.name = o.name), void 0 !== o.repeat && (a.repeat = new THREE.Vector2(o.repeat[0], o.repeat[1])), void 0 !== o.minFilter && (a.minFilter = THREE[o.minFilter]), void 0 !== o.magFilter && (a.magFilter = THREE[o.magFilter]), void 0 !== o.anisotropy && (a.anisotropy = o.anisotropy), o.wrap instanceof Array && (a.wrapS = THREE[o.wrap[0]], a.wrapT = THREE[o.wrap[1]]), r[o.uuid] = a
                }
            return r
        },
        parseObject: function() {
            var t = new THREE.Matrix4;
            return function(e, r, n) {
                var i;
                i = function(t) {
                    return void 0 === r[t] && THREE.warn("THREE.ObjectLoader: Undefined geometry", t), r[t]
                };
                var o = function(t) {
                    return void 0 === n[t] && THREE.warn("THREE.ObjectLoader: Undefined material", t), n[t]
                };
                switch (e.type) {
                    case "Scene":
                        i = new THREE.Scene;
                        break;
                    case "PerspectiveCamera":
                        i = new THREE.PerspectiveCamera(e.fov, e.aspect, e.near, e.far);
                        break;
                    case "OrthographicCamera":
                        i = new THREE.OrthographicCamera(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case "AmbientLight":
                        i = new THREE.AmbientLight(e.color);
                        break;
                    case "DirectionalLight":
                        i = new THREE.DirectionalLight(e.color, e.intensity);
                        break;
                    case "PointLight":
                        i = new THREE.PointLight(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case "SpotLight":
                        i = new THREE.SpotLight(e.color, e.intensity, e.distance, e.angle, e.exponent, e.decay);
                        break;
                    case "HemisphereLight":
                        i = new THREE.HemisphereLight(e.color, e.groundColor, e.intensity);
                        break;
                    case "Mesh":
                        i = new THREE.Mesh(i(e.geometry), o(e.material));
                        break;
                    case "Line":
                        i = new THREE.Line(i(e.geometry), o(e.material), e.mode);
                        break;
                    case "PointCloud":
                        i = new THREE.PointCloud(i(e.geometry), o(e.material));
                        break;
                    case "Sprite":
                        i = new THREE.Sprite(o(e.material));
                        break;
                    case "Group":
                        i = new THREE.Group;
                        break;
                    default:
                        i = new THREE.Object3D
                }
                if (i.uuid = e.uuid, void 0 !== e.name && (i.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== e.position && i.position.fromArray(e.position), void 0 !== e.rotation && i.rotation.fromArray(e.rotation), void 0 !== e.scale && i.scale.fromArray(e.scale)), void 0 !== e.visible && (i.visible = e.visible), void 0 !== e.userData && (i.userData = e.userData), void 0 !== e.children)
                    for (var a in e.children) i.add(this.parseObject(e.children[a], r, n));
                return i
            }
        }()
    }, THREE.TextureLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.TextureLoader.prototype = {
        constructor: THREE.TextureLoader,
        load: function(t, e, r, n) {
            var i = new THREE.ImageLoader(this.manager);
            i.setCrossOrigin(this.crossOrigin), i.load(t, function(t) {
                t = new THREE.Texture(t), t.needsUpdate = !0, void 0 !== e && e(t)
            }, r, n)
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        }
    }, THREE.DataTextureLoader = THREE.BinaryTextureLoader = function() {
        this._parser = null
    }, THREE.BinaryTextureLoader.prototype = {
        constructor: THREE.BinaryTextureLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = new THREE.DataTexture,
                a = new THREE.XHRLoader;
            return a.setResponseType("arraybuffer"), a.load(t, function(t) {
                (t = i._parser(t)) && (void 0 !== t.image ? o.image = t.image : void 0 !== t.data && (o.image.width = t.width, o.image.height = t.height, o.image.data = t.data), o.wrapS = void 0 !== t.wrapS ? t.wrapS : THREE.ClampToEdgeWrapping, o.wrapT = void 0 !== t.wrapT ? t.wrapT : THREE.ClampToEdgeWrapping, o.magFilter = void 0 !== t.magFilter ? t.magFilter : THREE.LinearFilter, o.minFilter = void 0 !== t.minFilter ? t.minFilter : THREE.LinearMipMapLinearFilter, o.anisotropy = void 0 !== t.anisotropy ? t.anisotropy : 1, void 0 !== t.format && (o.format = t.format), void 0 !== t.type && (o.type = t.type), void 0 !== t.mipmaps && (o.mipmaps = t.mipmaps), 1 === t.mipmapCount && (o.minFilter = THREE.LinearFilter), o.needsUpdate = !0, e && e(o, t))
            }, r, n), o
        }
    }, THREE.CompressedTextureLoader = function() {
        this._parser = null
    }, THREE.CompressedTextureLoader.prototype = {
        constructor: THREE.CompressedTextureLoader,
        load: function(t, e, r) {
            var n = this,
                i = [],
                o = new THREE.CompressedTexture;
            o.image = i;
            var a = new THREE.XHRLoader;
            if (a.setResponseType("arraybuffer"), t instanceof Array) {
                var s = 0;
                r = function(r) {
                    a.load(t[r], function(t) {
                        t = n._parser(t, !0), i[r] = {
                            width: t.width,
                            height: t.height,
                            format: t.format,
                            mipmaps: t.mipmaps
                        }, s += 1, 6 === s && (1 == t.mipmapCount && (o.minFilter = THREE.LinearFilter), o.format = t.format, o.needsUpdate = !0, e && e(o))
                    })
                };
                for (var h = 0, c = t.length; h < c; ++h) r(h)
            } else a.load(t, function(t) {
                if (t = n._parser(t, !0), t.isCubemap)
                    for (var r = t.mipmaps.length / t.mipmapCount, a = 0; a < r; a++) {
                        i[a] = {
                            mipmaps: []
                        };
                        for (var s = 0; s < t.mipmapCount; s++) i[a].mipmaps.push(t.mipmaps[a * t.mipmapCount + s]), i[a].format = t.format, i[a].width = t.width, i[a].height = t.height
                    } else o.image.width = t.width, o.image.height = t.height, o.mipmaps = t.mipmaps;
                1 === t.mipmapCount && (o.minFilter = THREE.LinearFilter), o.format = t.format, o.needsUpdate = !0, e && e(o)
            });
            return o
        }
    }, THREE.Material = function() {
        Object.defineProperty(this, "id", {
            value: THREE.MaterialIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.name = "", this.type = "Material", this.side = THREE.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = THREE.NormalBlending, this.blendSrc = THREE.SrcAlphaFactor, this.blendDst = THREE.OneMinusSrcAlphaFactor, this.blendEquation = THREE.AddEquation, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.colorWrite = this.depthWrite = this.depthTest = !0, this.polygonOffset = !1, this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this._needsUpdate = this.visible = !0
    }, THREE.Material.prototype = {
        constructor: THREE.Material,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            !0 === t && this.update(), this._needsUpdate = t
        },
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var r = t[e];
                    if (void 0 === r) THREE.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    else if (e in this) {
                        var n = this[e];
                        n instanceof THREE.Color ? n.set(r) : n instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? n.copy(r) : this[e] = "overdraw" == e ? Number(r) : r
                    }
                }
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.2,
                    type: "material",
                    generator: "MaterialExporter"
                },
                uuid: this.uuid,
                type: this.type
            };
            return "" !== this.name && (t.name = this.name), this instanceof THREE.MeshBasicMaterial ? (t.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (t.blending = this.blending), this.side !== THREE.FrontSide && (t.side = this.side)) : this instanceof THREE.MeshLambertMaterial ? (t.color = this.color.getHex(), t.emissive = this.emissive.getHex(), this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (t.shading = this.shading), this.blending !== THREE.NormalBlending && (t.blending = this.blending), this.side !== THREE.FrontSide && (t.side = this.side)) : this instanceof THREE.MeshPhongMaterial ? (t.color = this.color.getHex(), t.emissive = this.emissive.getHex(), t.specular = this.specular.getHex(), t.shininess = this.shininess, this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (t.shading = this.shading), this.blending !== THREE.NormalBlending && (t.blending = this.blending), this.side !== THREE.FrontSide && (t.side = this.side)) : this instanceof THREE.MeshNormalMaterial ? (this.blending !== THREE.NormalBlending && (t.blending = this.blending), this.side !== THREE.FrontSide && (t.side = this.side)) : this instanceof THREE.MeshDepthMaterial ? (this.blending !== THREE.NormalBlending && (t.blending = this.blending), this.side !== THREE.FrontSide && (t.side = this.side)) : this instanceof THREE.PointCloudMaterial ? (t.size = this.size, t.sizeAttenuation = this.sizeAttenuation, t.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (t.blending = this.blending)) : this instanceof THREE.ShaderMaterial ? (t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader) : this instanceof THREE.SpriteMaterial && (t.color = this.color.getHex()), 1 > this.opacity && (t.opacity = this.opacity), !1 !== this.transparent && (t.transparent = this.transparent), !1 !== this.wireframe && (t.wireframe = this.wireframe), t
        },
        clone: function(t) {
            return void 0 === t && (t = new THREE.Material), t.name = this.name, t.side = this.side, t.opacity = this.opacity, t.transparent = this.transparent, t.blending = this.blending, t.blendSrc = this.blendSrc, t.blendDst = this.blendDst, t.blendEquation = this.blendEquation, t.blendSrcAlpha = this.blendSrcAlpha, t.blendDstAlpha = this.blendDstAlpha, t.blendEquationAlpha = this.blendEquationAlpha, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite, t.polygonOffset = this.polygonOffset, t.polygonOffsetFactor = this.polygonOffsetFactor, t.polygonOffsetUnits = this.polygonOffsetUnits, t.alphaTest = this.alphaTest, t.overdraw = this.overdraw, t.visible = this.visible, t
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.Material.prototype), THREE.MaterialIdCount = 0, THREE.LineBasicMaterial = function(t) {
        THREE.Material.call(this), this.type = "LineBasicMaterial", this.color = new THREE.Color(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(t)
    }, THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial, THREE.LineBasicMaterial.prototype.clone = function() {
        var t = new THREE.LineBasicMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.linewidth = this.linewidth, t.linecap = this.linecap, t.linejoin = this.linejoin, t.vertexColors = this.vertexColors, t.fog = this.fog, t
    }, THREE.LineDashedMaterial = function(t) {
        THREE.Material.call(this), this.type = "LineDashedMaterial", this.color = new THREE.Color(16777215), this.scale = this.linewidth = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(t)
    }, THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype), THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial, THREE.LineDashedMaterial.prototype.clone = function() {
        var t = new THREE.LineDashedMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.linewidth = this.linewidth, t.scale = this.scale, t.dashSize = this.dashSize, t.gapSize = this.gapSize, t.vertexColors = this.vertexColors, t.fog = this.fog, t
    }, THREE.MeshBasicMaterial = function(t) {
        THREE.Material.call(this), this.type = "MeshBasicMaterial", this.color = new THREE.Color(16777215), this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphTargets = this.skinning = !1, this.setValues(t)
    }, THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshBasicMaterial.prototype.clone = function() {
        var t = new THREE.MeshBasicMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.map = this.map, t.lightMap = this.lightMap, t.specularMap = this.specularMap, t.alphaMap = this.alphaMap, t.envMap = this.envMap, t.combine = this.combine, t.reflectivity = this.reflectivity, t.refractionRatio = this.refractionRatio, t.fog = this.fog, t.shading = this.shading, t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t.wireframeLinecap = this.wireframeLinecap, t.wireframeLinejoin = this.wireframeLinejoin, t.vertexColors = this.vertexColors, t.skinning = this.skinning, t.morphTargets = this.morphTargets, t
    }, THREE.MeshLambertMaterial = function(t) {
        THREE.Material.call(this), this.type = "MeshLambertMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.wrapAround = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t)
    }, THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshLambertMaterial.prototype.clone = function() {
        var t = new THREE.MeshLambertMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.emissive.copy(this.emissive), t.wrapAround = this.wrapAround, t.wrapRGB.copy(this.wrapRGB), t.map = this.map, t.lightMap = this.lightMap, t.specularMap = this.specularMap, t.alphaMap = this.alphaMap, t.envMap = this.envMap, t.combine = this.combine, t.reflectivity = this.reflectivity, t.refractionRatio = this.refractionRatio, t.fog = this.fog, t.shading = this.shading, t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t.wireframeLinecap = this.wireframeLinecap, t.wireframeLinejoin = this.wireframeLinejoin, t.vertexColors = this.vertexColors, t.skinning = this.skinning, t.morphTargets = this.morphTargets, t.morphNormals = this.morphNormals, t
    }, THREE.MeshPhongMaterial = function(t) {
        THREE.Material.call(this), this.type = "MeshPhongMaterial", this.color = new THREE.Color(16777215), this.emissive = new THREE.Color(0), this.specular = new THREE.Color(1118481), this.shininess = 30, this.wrapAround = this.metal = !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.bumpMap = this.lightMap = this.map = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new THREE.Vector2(1, 1), this.envMap = this.alphaMap = this.specularMap = null, this.combine = THREE.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = THREE.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t)
    }, THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshPhongMaterial.prototype.clone = function() {
        var t = new THREE.MeshPhongMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.emissive.copy(this.emissive), t.specular.copy(this.specular), t.shininess = this.shininess, t.metal = this.metal, t.wrapAround = this.wrapAround, t.wrapRGB.copy(this.wrapRGB), t.map = this.map, t.lightMap = this.lightMap, t.bumpMap = this.bumpMap, t.bumpScale = this.bumpScale, t.normalMap = this.normalMap, t.normalScale.copy(this.normalScale), t.specularMap = this.specularMap, t.alphaMap = this.alphaMap, t.envMap = this.envMap, t.combine = this.combine, t.reflectivity = this.reflectivity, t.refractionRatio = this.refractionRatio, t.fog = this.fog, t.shading = this.shading, t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t.wireframeLinecap = this.wireframeLinecap, t.wireframeLinejoin = this.wireframeLinejoin, t.vertexColors = this.vertexColors, t.skinning = this.skinning, t.morphTargets = this.morphTargets, t.morphNormals = this.morphNormals, t
    }, THREE.MeshDepthMaterial = function(t) {
        THREE.Material.call(this), this.type = "MeshDepthMaterial", this.wireframe = this.morphTargets = !1, this.wireframeLinewidth = 1, this.setValues(t)
    }, THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshDepthMaterial.prototype.clone = function() {
        var t = new THREE.MeshDepthMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t
    }, THREE.MeshNormalMaterial = function(t) {
        THREE.Material.call(this, t), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(t)
    }, THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype), THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshNormalMaterial.prototype.clone = function() {
        var t = new THREE.MeshNormalMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t
    }, THREE.MeshFaceMaterial = function(t) {
        this.uuid = THREE.Math.generateUUID(), this.type = "MeshFaceMaterial", this.materials = t instanceof Array ? t : []
    }, THREE.MeshFaceMaterial.prototype = {
        constructor: THREE.MeshFaceMaterial,
        toJSON: function() {
            for (var t = {
                    metadata: {
                        version: 4.2,
                        type: "material",
                        generator: "MaterialExporter"
                    },
                    uuid: this.uuid,
                    type: this.type,
                    materials: []
                }, e = 0, r = this.materials.length; e < r; e++) t.materials.push(this.materials[e].toJSON());
            return t
        },
        clone: function() {
            for (var t = new THREE.MeshFaceMaterial, e = 0; e < this.materials.length; e++) t.materials.push(this.materials[e].clone());
            return t
        }
    }, THREE.PointCloudMaterial = function(t) {
        THREE.Material.call(this), this.type = "PointCloudMaterial", this.color = new THREE.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = THREE.NoColors, this.fog = !0, this.setValues(t)
    }, THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype), THREE.PointCloudMaterial.prototype.constructor = THREE.PointCloudMaterial, THREE.PointCloudMaterial.prototype.clone = function() {
        var t = new THREE.PointCloudMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.map = this.map, t.size = this.size, t.sizeAttenuation = this.sizeAttenuation, t.vertexColors = this.vertexColors, t.fog = this.fog, t
    }, THREE.ParticleBasicMaterial = function(t) {
        return THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(t)
    }, THREE.ParticleSystemMaterial = function(t) {
        return THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."), new THREE.PointCloudMaterial(t)
    }, THREE.ShaderMaterial = function(t) {
        THREE.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.attributes = null, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = THREE.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.vertexColors = THREE.NoColors, this.morphNormals = this.morphTargets = this.skinning = !1, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.setValues(t)
    }, THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype), THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial, THREE.ShaderMaterial.prototype.clone = function() {
        var t = new THREE.ShaderMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.fragmentShader = this.fragmentShader, t.vertexShader = this.vertexShader, t.uniforms = THREE.UniformsUtils.clone(this.uniforms), t.attributes = this.attributes, t.defines = this.defines, t.shading = this.shading, t.wireframe = this.wireframe, t.wireframeLinewidth = this.wireframeLinewidth, t.fog = this.fog, t.lights = this.lights, t.vertexColors = this.vertexColors, t.skinning = this.skinning, t.morphTargets = this.morphTargets, t.morphNormals = this.morphNormals, t
    }, THREE.RawShaderMaterial = function(t) {
        THREE.ShaderMaterial.call(this, t), this.type = "RawShaderMaterial"
    }, THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype), THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial, THREE.RawShaderMaterial.prototype.clone = function() {
        var t = new THREE.RawShaderMaterial;
        return THREE.ShaderMaterial.prototype.clone.call(this, t), t
    }, THREE.SpriteMaterial = function(t) {
        THREE.Material.call(this), this.type = "SpriteMaterial", this.color = new THREE.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(t)
    }, THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial, THREE.SpriteMaterial.prototype.clone = function() {
        var t = new THREE.SpriteMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.map = this.map, t.rotation = this.rotation, t.fog = this.fog, t
    }, THREE.Texture = function(t, e, r, n, i, o, a, s, h) {
        Object.defineProperty(this, "id", {
            value: THREE.TextureIdCount++
        }), this.uuid = THREE.Math.generateUUID(), this.sourceFile = this.name = "", this.image = void 0 !== t ? t : THREE.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : THREE.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== i ? i : THREE.LinearFilter, this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== a ? a : THREE.RGBAFormat, this.type = void 0 !== s ? s : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null
    }, THREE.Texture.DEFAULT_IMAGE = void 0, THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping, THREE.Texture.prototype = {
        constructor: THREE.Texture,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            !0 === t && this.update(), this._needsUpdate = t
        },
        clone: function(t) {
            return void 0 === t && (t = new THREE.Texture), t.image = this.image, t.mipmaps = this.mipmaps.slice(0), t.mapping = this.mapping, t.wrapS = this.wrapS, t.wrapT = this.wrapT, t.magFilter = this.magFilter, t.minFilter = this.minFilter, t.anisotropy = this.anisotropy, t.format = this.format, t.type = this.type, t.offset.copy(this.offset), t.repeat.copy(this.repeat), t.generateMipmaps = this.generateMipmaps, t.premultiplyAlpha = this.premultiplyAlpha, t.flipY = this.flipY, t.unpackAlignment = this.unpackAlignment, t
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype), THREE.TextureIdCount = 0, THREE.CubeTexture = function(t, e, r, n, i, o, a, s, h) {
        e = void 0 !== e ? e : THREE.CubeReflectionMapping, THREE.Texture.call(this, t, e, r, n, i, o, a, s, h), this.images = t
    }, THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CubeTexture.prototype.constructor = THREE.CubeTexture, THREE.CubeTexture.clone = function(t) {
        return void 0 === t && (t = new THREE.CubeTexture), THREE.Texture.prototype.clone.call(this, t), t.images = this.images, t
    }, THREE.CompressedTexture = function(t, e, r, n, i, o, a, s, h, c, l) {
        THREE.Texture.call(this, null, o, a, s, h, c, n, i, l), this.image = {
            width: e,
            height: r
        }, this.mipmaps = t, this.generateMipmaps = this.flipY = !1
    }, THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype), THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture, THREE.CompressedTexture.prototype.clone = function() {
        var t = new THREE.CompressedTexture;
        return THREE.Texture.prototype.clone.call(this, t), t
    }, THREE.DataTexture = function(t, e, r, n, i, o, a, s, h, c, l) {
        THREE.Texture.call(this, null, o, a, s, h, c, n, i, l), this.image = {
            data: t,
            width: e,
            height: r
        }
    }, THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype), THREE.DataTexture.prototype.constructor = THREE.DataTexture, THREE.DataTexture.prototype.clone = function() {
        var t = new THREE.DataTexture;
        return THREE.Texture.prototype.clone.call(this, t), t
    }, THREE.VideoTexture = function(t, e, r, n, i, o, a, s, h) {
        THREE.Texture.call(this, t, e, r, n, i, o, a, s, h), this.generateMipmaps = !1;
        var c = this,
            l = function() {
                requestAnimationFrame(l), t.readyState === t.HAVE_ENOUGH_DATA && (c.needsUpdate = !0)
            };
        l()
    }, THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype), THREE.VideoTexture.prototype.constructor = THREE.VideoTexture, THREE.Group = function() {
        THREE.Object3D.call(this), this.type = "Group"
    }, THREE.Group.prototype = Object.create(THREE.Object3D.prototype), THREE.Group.prototype.constructor = THREE.Group, THREE.PointCloud = function(t, e) {
        THREE.Object3D.call(this), this.type = "PointCloud", this.geometry = void 0 !== t ? t : new THREE.Geometry, this.material = void 0 !== e ? e : new THREE.PointCloudMaterial({
            color: 16777215 * Math.random()
        })
    }, THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype), THREE.PointCloud.prototype.constructor = THREE.PointCloud, THREE.PointCloud.prototype.raycast = function() {
        var t = new THREE.Matrix4,
            e = new THREE.Ray;
        return function(r, n) {
            var i = this,
                o = i.geometry,
                a = r.params.PointCloud.threshold;
            if (t.getInverse(this.matrixWorld), e.copy(r.ray).applyMatrix4(t), null === o.boundingBox || !1 !== e.isIntersectionBox(o.boundingBox)) {
                var s = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                    h = new THREE.Vector3,
                    a = function(t, o) {
                        var a = e.distanceToPoint(t);
                        if (a < s) {
                            var h = e.closestPointToPoint(t);
                            h.applyMatrix4(i.matrixWorld);
                            var c = r.ray.origin.distanceTo(h);
                            n.push({
                                distance: c,
                                distanceToRay: a,
                                point: h.clone(),
                                index: o,
                                face: null,
                                object: i
                            })
                        }
                    };
                if (o instanceof THREE.BufferGeometry) {
                    var c = o.attributes,
                        l = c.position.array;
                    if (void 0 !== c.index) {
                        var c = c.index.array,
                            u = o.offsets;
                        0 === u.length && (u = [{
                            start: 0,
                            count: c.length,
                            index: 0
                        }]);
                        for (var f = 0, p = u.length; f < p; ++f)
                            for (var d = u[f].start, E = u[f].index, o = d, d = d + u[f].count; o < d; o++) {
                                var m = E + c[o];
                                h.fromArray(l, 3 * m), a(h, m)
                            }
                    } else
                        for (c = l.length / 3, o = 0; o < c; o++) h.set(l[3 * o], l[3 * o + 1], l[3 * o + 2]), a(h, o)
                } else
                    for (h = this.geometry.vertices, o = 0; o < h.length; o++) a(h[o], o)
            }
        }
    }(), THREE.PointCloud.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.PointCloud(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, t), t
    }, THREE.ParticleSystem = function(t, e) {
        return THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud."), new THREE.PointCloud(t, e)
    }, THREE.Line = function(t, e, r) {
        THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new THREE.Geometry, this.material = void 0 !== e ? e : new THREE.LineBasicMaterial({
            color: 16777215 * Math.random()
        }), this.mode = void 0 !== r ? r : THREE.LineStrip
    }, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = Object.create(THREE.Object3D.prototype), THREE.Line.prototype.constructor = THREE.Line, THREE.Line.prototype.raycast = function() {
        var t = new THREE.Matrix4,
            e = new THREE.Ray,
            r = new THREE.Sphere;
        return function(n, i) {
            var o = n.linePrecision,
                o = o * o,
                a = this.geometry;
            if (null === a.boundingSphere && a.computeBoundingSphere(), r.copy(a.boundingSphere), r.applyMatrix4(this.matrixWorld), !1 !== n.ray.isIntersectionSphere(r)) {
                t.getInverse(this.matrixWorld), e.copy(n.ray).applyMatrix4(t);
                var s = new THREE.Vector3,
                    h = new THREE.Vector3,
                    c = new THREE.Vector3,
                    l = new THREE.Vector3,
                    u = this.mode === THREE.LineStrip ? 1 : 2;
                if (a instanceof THREE.BufferGeometry) {
                    var f = a.attributes;
                    if (void 0 !== f.index) {
                        var p = f.index.array,
                            f = f.position.array,
                            d = a.offsets;
                        0 === d.length && (d = [{
                            start: 0,
                            count: p.length,
                            index: 0
                        }]);
                        for (var E = 0; E < d.length; E++)
                            for (var m = d[E].start, g = d[E].count, v = d[E].index, a = m; a < m + g - 1; a += u) {
                                var y = v + p[a + 1];
                                s.fromArray(f, 3 * (v + p[a])), h.fromArray(f, 3 * y), y = e.distanceSqToSegment(s, h, l, c), y > o || (y = e.origin.distanceTo(l), y < n.near || y > n.far || i.push({
                                    distance: y,
                                    point: c.clone().applyMatrix4(this.matrixWorld),
                                    index: a,
                                    offsetIndex: E,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                }))
                            }
                    } else
                        for (f = f.position.array, a = 0; a < f.length / 3 - 1; a += u) s.fromArray(f, 3 * a), h.fromArray(f, 3 * a + 3), y = e.distanceSqToSegment(s, h, l, c), y > o || (y = e.origin.distanceTo(l), y < n.near || y > n.far || i.push({
                            distance: y,
                            point: c.clone().applyMatrix4(this.matrixWorld),
                            index: a,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                } else if (a instanceof THREE.Geometry)
                    for (s = a.vertices, h = s.length, a = 0; a < h - 1; a += u) y = e.distanceSqToSegment(s[a], s[a + 1], l, c), y > o || (y = e.origin.distanceTo(l), y < n.near || y > n.far || i.push({
                        distance: y,
                        point: c.clone().applyMatrix4(this.matrixWorld),
                        index: a,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
            }
        }
    }(), THREE.Line.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.Line(this.geometry, this.material, this.mode)), THREE.Object3D.prototype.clone.call(this, t), t
    }, THREE.Mesh = function(t, e) {
        THREE.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new THREE.Geometry, this.material = void 0 !== e ? e : new THREE.MeshBasicMaterial({
            color: 16777215 * Math.random()
        }), this.updateMorphTargets()
    }, THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype), THREE.Mesh.prototype.constructor = THREE.Mesh, THREE.Mesh.prototype.updateMorphTargets = function() {
        if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
            this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
            for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
        }
    }, THREE.Mesh.prototype.getMorphTargetIndexByName = function(t) {
        return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : (THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + t + " does not exist. Returning 0."), 0)
    }, THREE.Mesh.prototype.raycast = function() {
        var t = new THREE.Matrix4,
            e = new THREE.Ray,
            r = new THREE.Sphere,
            n = new THREE.Vector3,
            i = new THREE.Vector3,
            o = new THREE.Vector3;
        return function(a, s) {
            var h = this.geometry;
            if (null === h.boundingSphere && h.computeBoundingSphere(), r.copy(h.boundingSphere), r.applyMatrix4(this.matrixWorld), !1 !== a.ray.isIntersectionSphere(r) && (t.getInverse(this.matrixWorld), e.copy(a.ray).applyMatrix4(t), null === h.boundingBox || !1 !== e.isIntersectionBox(h.boundingBox)))
                if (h instanceof THREE.BufferGeometry) {
                    var c = this.material;
                    if (void 0 !== c) {
                        var l, u, f = h.attributes,
                            p = a.precision;
                        if (void 0 !== f.index) {
                            var d = f.index.array,
                                E = f.position.array,
                                m = h.offsets;
                            0 === m.length && (m = [{
                                start: 0,
                                count: d.length,
                                index: 0
                            }]);
                            for (var g = 0, v = m.length; g < v; ++g)
                                for (var f = m[g].start, y = m[g].index, h = f, T = f + m[g].count; h < T; h += 3) {
                                    f = y + d[h], l = y + d[h + 1], u = y + d[h + 2], n.fromArray(E, 3 * f), i.fromArray(E, 3 * l), o.fromArray(E, 3 * u);
                                    var R = c.side === THREE.BackSide ? e.intersectTriangle(o, i, n, !0) : e.intersectTriangle(n, i, o, c.side !== THREE.DoubleSide);
                                    if (null !== R) {
                                        R.applyMatrix4(this.matrixWorld);
                                        var x = a.ray.origin.distanceTo(R);
                                        x < p || x < a.near || x > a.far || s.push({
                                            distance: x,
                                            point: R,
                                            face: new THREE.Face3(f, l, u, THREE.Triangle.normal(n, i, o)),
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                        } else
                            for (E = f.position.array, d = h = 0, T = E.length; h < T; h += 3, d += 9) f = h, l = h + 1, u = h + 2, n.fromArray(E, d), i.fromArray(E, d + 3), o.fromArray(E, d + 6), R = c.side === THREE.BackSide ? e.intersectTriangle(o, i, n, !0) : e.intersectTriangle(n, i, o, c.side !== THREE.DoubleSide), null !== R && (R.applyMatrix4(this.matrixWorld), x = a.ray.origin.distanceTo(R), x < p || x < a.near || x > a.far || s.push({
                                distance: x,
                                point: R,
                                face: new THREE.Face3(f, l, u, THREE.Triangle.normal(n, i, o)),
                                faceIndex: null,
                                object: this
                            }))
                    }
                } else if (h instanceof THREE.Geometry)
                for (d = this.material instanceof THREE.MeshFaceMaterial, E = !0 === d ? this.material.materials : null, p = a.precision, m = h.vertices, g = 0, v = h.faces.length; g < v; g++)
                    if (y = h.faces[g], c = !0 === d ? E[y.materialIndex] : this.material, void 0 !== c) {
                        if (f = m[y.a], l = m[y.b], u = m[y.c], !0 === c.morphTargets) {
                            R = h.morphTargets, x = this.morphTargetInfluences, n.set(0, 0, 0), i.set(0, 0, 0), o.set(0, 0, 0);
                            for (var T = 0, H = R.length; T < H; T++) {
                                var b = x[T];
                                if (0 !== b) {
                                    var _ = R[T].vertices;
                                    n.x += (_[y.a].x - f.x) * b, n.y += (_[y.a].y - f.y) * b, n.z += (_[y.a].z - f.z) * b, i.x += (_[y.b].x - l.x) * b, i.y += (_[y.b].y - l.y) * b, i.z += (_[y.b].z - l.z) * b, o.x += (_[y.c].x - u.x) * b, o.y += (_[y.c].y - u.y) * b, o.z += (_[y.c].z - u.z) * b
                                }
                            }
                            n.add(f), i.add(l), o.add(u), f = n, l = i, u = o
                        }
                        R = c.side === THREE.BackSide ? e.intersectTriangle(u, l, f, !0) : e.intersectTriangle(f, l, u, c.side !== THREE.DoubleSide), null !== R && (R.applyMatrix4(this.matrixWorld), x = a.ray.origin.distanceTo(R), x < p || x < a.near || x > a.far || s.push({
                            distance: x,
                            point: R,
                            face: y,
                            faceIndex: g,
                            object: this
                        }))
                    }
        }
    }(), THREE.Mesh.prototype.clone = function(t, e) {
        return void 0 === t && (t = new THREE.Mesh(this.geometry, this.material)), THREE.Object3D.prototype.clone.call(this, t, e), t
    }, THREE.Bone = function(t) {
        THREE.Object3D.call(this), this.type = "Bone", this.skin = t
    }, THREE.Bone.prototype = Object.create(THREE.Object3D.prototype), THREE.Bone.prototype.constructor = THREE.Bone, THREE.Skeleton = function(t, e, r) {
        if (this.useVertexTexture = void 0 === r || r, this.identityMatrix = new THREE.Matrix4, t = t || [], this.bones = t.slice(0), this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = t = 256 < this.bones.length ? 64 : 64 < this.bones.length ? 32 : 16 < this.bones.length ? 16 : 8, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else
            for (THREE.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new THREE.Matrix4)
    }, THREE.Skeleton.prototype.calculateInverses = function() {
        this.boneInverses = [];
        for (var t = 0, e = this.bones.length; t < e; t++) {
            var r = new THREE.Matrix4;
            this.bones[t] && r.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(r)
        }
    }, THREE.Skeleton.prototype.pose = function() {
        for (var t, e = 0, r = this.bones.length; e < r; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
        for (e = 0, r = this.bones.length; e < r; e++)(t = this.bones[e]) && (t.parent ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
    }, THREE.Skeleton.prototype.update = function() {
        var t = new THREE.Matrix4;
        return function() {
            for (var e = 0, r = this.bones.length; e < r; e++) t.multiplyMatrices(this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix, this.boneInverses[e]), t.flattenToArrayOffset(this.boneMatrices, 16 * e);
            this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
        }
    }(), THREE.SkinnedMesh = function(t, e, r) {
        if (THREE.Mesh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4, t = [], this.geometry && void 0 !== this.geometry.bones) {
            for (var n, i, o, a, s = 0, h = this.geometry.bones.length; s < h; ++s) n = this.geometry.bones[s], i = n.pos, o = n.rotq, a = n.scl, e = new THREE.Bone(this), t.push(e), e.name = n.name, e.position.set(i[0], i[1], i[2]), e.quaternion.set(o[0], o[1], o[2], o[3]), void 0 !== a ? e.scale.set(a[0], a[1], a[2]) : e.scale.set(1, 1, 1);
            for (s = 0, h = this.geometry.bones.length; s < h; ++s) n = this.geometry.bones[s], -1 !== n.parent ? t[n.parent].add(t[s]) : this.add(t[s])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new THREE.Skeleton(t, (void 0), r))
    }, THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh, THREE.SkinnedMesh.prototype.bind = function(t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
    }, THREE.SkinnedMesh.prototype.pose = function() {
        this.skeleton.pose()
    }, THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
        if (this.geometry instanceof THREE.Geometry)
            for (var t = 0; t < this.geometry.skinIndices.length; t++) {
                var e = this.geometry.skinWeights[t],
                    r = 1 / e.lengthManhattan();
                1 / 0 !== r ? e.multiplyScalar(r) : e.set(1)
            }
    }, THREE.SkinnedMesh.prototype.updateMatrixWorld = function(t) {
        THREE.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : THREE.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode)
    }, THREE.SkinnedMesh.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), THREE.Mesh.prototype.clone.call(this, t), t
    }, THREE.MorphAnimMesh = function(t, e) {
        THREE.Mesh.call(this, t, e), this.type = "MorphAnimMesh", this.duration = 1e3, this.mirroredLoop = !1, this.currentKeyframe = this.lastKeyframe = this.time = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1)
    }, THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphAnimMesh.prototype.constructor = THREE.MorphAnimMesh, THREE.MorphAnimMesh.prototype.setFrameRange = function(t, e) {
        this.startKeyframe = t, this.endKeyframe = e, this.length = this.endKeyframe - this.startKeyframe + 1
    }, THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
        this.direction = 1, this.directionBackwards = !1
    }, THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
        this.direction = -1, this.directionBackwards = !0
    }, THREE.MorphAnimMesh.prototype.parseAnimations = function() {
        var t = this.geometry;
        t.animations || (t.animations = {});
        for (var e, r = t.animations, n = /([a-z]+)_?(\d+)/, i = 0, o = t.morphTargets.length; i < o; i++) {
            var a = t.morphTargets[i].name.match(n);
            if (a && 1 < a.length) {
                a = a[1], r[a] || (r[a] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                });
                var s = r[a];
                i < s.start && (s.start = i), i > s.end && (s.end = i), e || (e = a)
            }
        }
        t.firstAnimation = e
    }, THREE.MorphAnimMesh.prototype.setAnimationLabel = function(t, e, r) {
        this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[t] = {
            start: e,
            end: r
        }
    }, THREE.MorphAnimMesh.prototype.playAnimation = function(t, e) {
        var r = this.geometry.animations[t];
        r ? (this.setFrameRange(r.start, r.end), this.duration = (r.end - r.start) / e * 1e3, this.time = 0) : THREE.warn("THREE.MorphAnimMesh: animation[" + t + "] undefined in .playAnimation()")
    }, THREE.MorphAnimMesh.prototype.updateAnimation = function(t) {
        var e = this.duration / this.length;
        this.time += this.direction * t, this.mirroredLoop ? (this.time > this.duration || 0 > this.time) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)) : (this.time %= this.duration, 0 > this.time && (this.time += this.duration)), t = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / e), 0, this.length - 1), t !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[t] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = t), e = this.time % e / e, this.directionBackwards && (e = 1 - e), this.morphTargetInfluences[this.currentKeyframe] = e, this.morphTargetInfluences[this.lastKeyframe] = 1 - e
    }, THREE.MorphAnimMesh.prototype.interpolateTargets = function(t, e, r) {
        for (var n = this.morphTargetInfluences, i = 0, o = n.length; i < o; i++) n[i] = 0; - 1 < t && (n[t] = 1 - r), -1 < e && (n[e] = r)
    }, THREE.MorphAnimMesh.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.MorphAnimMesh(this.geometry, this.material)), t.duration = this.duration, t.mirroredLoop = this.mirroredLoop, t.time = this.time, t.lastKeyframe = this.lastKeyframe, t.currentKeyframe = this.currentKeyframe, t.direction = this.direction, t.directionBackwards = this.directionBackwards, THREE.Mesh.prototype.clone.call(this, t), t
    }, THREE.LOD = function() {
        THREE.Object3D.call(this), this.objects = []
    }, THREE.LOD.prototype = Object.create(THREE.Object3D.prototype), THREE.LOD.prototype.constructor = THREE.LOD, THREE.LOD.prototype.addLevel = function(t, e) {
        void 0 === e && (e = 0), e = Math.abs(e);
        for (var r = 0; r < this.objects.length && !(e < this.objects[r].distance); r++);
        this.objects.splice(r, 0, {
            distance: e,
            object: t
        }), this.add(t)
    }, THREE.LOD.prototype.getObjectForDistance = function(t) {
        for (var e = 1, r = this.objects.length; e < r && !(t < this.objects[e].distance); e++);
        return this.objects[e - 1].object
    }, THREE.LOD.prototype.raycast = function() {
        var t = new THREE.Vector3;
        return function(e, r) {
            t.setFromMatrixPosition(this.matrixWorld);
            var n = e.ray.origin.distanceTo(t);
            this.getObjectForDistance(n).raycast(e, r)
        }
    }(), THREE.LOD.prototype.update = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3;
        return function(r) {
            if (1 < this.objects.length) {
                t.setFromMatrixPosition(r.matrixWorld), e.setFromMatrixPosition(this.matrixWorld), r = t.distanceTo(e), this.objects[0].object.visible = !0;
                for (var n = 1, i = this.objects.length; n < i && r >= this.objects[n].distance; n++) this.objects[n - 1].object.visible = !1, this.objects[n].object.visible = !0;
                for (; n < i; n++) this.objects[n].object.visible = !1
            }
        }
    }(), THREE.LOD.prototype.clone = function(t) {
        void 0 === t && (t = new THREE.LOD), THREE.Object3D.prototype.clone.call(this, t);
        for (var e = 0, r = this.objects.length; e < r; e++) {
            var n = this.objects[e].object.clone();
            n.visible = 0 === e, t.addLevel(n, this.objects[e].distance)
        }
        return t
    }, THREE.Sprite = function() {
        var t = new Uint16Array([0, 1, 2, 0, 2, 3]),
            e = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
            r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
            n = new THREE.BufferGeometry;
        return n.addAttribute("index", new THREE.BufferAttribute(t, 1)), n.addAttribute("position", new THREE.BufferAttribute(e, 3)), n.addAttribute("uv", new THREE.BufferAttribute(r, 2)),
            function(t) {
                THREE.Object3D.call(this), this.type = "Sprite", this.geometry = n, this.material = void 0 !== t ? t : new THREE.SpriteMaterial
            }
    }(), THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype), THREE.Sprite.prototype.constructor = THREE.Sprite, THREE.Sprite.prototype.raycast = function() {
        var t = new THREE.Vector3;
        return function(e, r) {
            t.setFromMatrixPosition(this.matrixWorld);
            var n = e.ray.distanceToPoint(t);
            n > this.scale.x || r.push({
                distance: n,
                point: this.position,
                face: null,
                object: this
            })
        }
    }(), THREE.Sprite.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.Sprite(this.material)), THREE.Object3D.prototype.clone.call(this, t), t
    }, THREE.Particle = THREE.Sprite, THREE.LensFlare = function(t, e, r, n, i) {
        THREE.Object3D.call(this), this.lensFlares = [], this.positionScreen = new THREE.Vector3, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, r, n, i)
    }, THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype), THREE.LensFlare.prototype.constructor = THREE.LensFlare, THREE.LensFlare.prototype.add = function(t, e, r, n, i, o) {
        void 0 === e && (e = -1), void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === i && (i = new THREE.Color(16777215)), void 0 === n && (n = THREE.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
            texture: t,
            size: e,
            distance: r,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
            rotation: 1,
            opacity: o,
            color: i,
            blending: n
        })
    }, THREE.LensFlare.prototype.updateLensFlares = function() {
        var t, e, r = this.lensFlares.length,
            n = 2 * -this.positionScreen.x,
            i = 2 * -this.positionScreen.y;
        for (t = 0; t < r; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + n * e.distance, e.y = this.positionScreen.y + i * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
    }, THREE.Scene = function() {
        THREE.Object3D.call(this), this.type = "Scene", this.overrideMaterial = this.fog = null, this.autoUpdate = !0
    }, THREE.Scene.prototype = Object.create(THREE.Object3D.prototype), THREE.Scene.prototype.constructor = THREE.Scene, THREE.Scene.prototype.clone = function(t) {
        return void 0 === t && (t = new THREE.Scene), THREE.Object3D.prototype.clone.call(this, t), null !== this.fog && (t.fog = this.fog.clone()), null !== this.overrideMaterial && (t.overrideMaterial = this.overrideMaterial.clone()), t.autoUpdate = this.autoUpdate, t.matrixAutoUpdate = this.matrixAutoUpdate, t
    }, THREE.Fog = function(t, e, r) {
        this.name = "", this.color = new THREE.Color(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== r ? r : 1e3
    }, THREE.Fog.prototype.clone = function() {
        return new THREE.Fog(this.color.getHex(), this.near, this.far)
    }, THREE.FogExp2 = function(t, e) {
        this.name = "", this.color = new THREE.Color(t), this.density = void 0 !== e ? e : 25e-5
    }, THREE.FogExp2.prototype.clone = function() {
        return new THREE.FogExp2(this.color.getHex(), this.density)
    }, THREE.ShaderChunk = {}, THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n", THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n", THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n", THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n", THREE.ShaderChunk.default_vertex = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n", THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif", THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif", THREE.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif", THREE.ShaderChunk.lights_phong_fragment = "#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n",
    THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif", THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif", THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif", THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n", THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n", THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif", THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif", THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif", THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif", THREE.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif", THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n", THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n", THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif", THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n", THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n", THREE.ShaderChunk.linear_to_gamma_fragment = "\n\toutgoingLight = linearToOutput( outgoingLight );\n", THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif", THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n", THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n", THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif", THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif", THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif", THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif", THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif", THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n", THREE.ShaderChunk.defaultnormal_vertex = "#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n", THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n", THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif", THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif", THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif", THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif", THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif", THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif", THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n", THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif", THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n", THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif", THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n", THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n", THREE.UniformsUtils = {
        merge: function(t) {
            for (var e = {}, r = 0; r < t.length; r++) {
                var n, i = this.clone(t[r]);
                for (n in i) e[n] = i[n]
            }
            return e
        },
        clone: function(t) {
            var e, r = {};
            for (e in t) {
                r[e] = {};
                for (var n in t[e]) {
                    var i = t[e][n];
                    r[e][n] = i instanceof THREE.Color || i instanceof THREE.Vector2 || i instanceof THREE.Vector3 || i instanceof THREE.Vector4 || i instanceof THREE.Matrix4 || i instanceof THREE.Texture ? i.clone() : i instanceof Array ? i.slice() : i
                }
            }
            return r
        }
    }, THREE.UniformsLib = {
        common: {
            diffuse: {
                type: "c",
                value: new THREE.Color(15658734)
            },
            opacity: {
                type: "f",
                value: 1
            },
            map: {
                type: "t",
                value: null
            },
            offsetRepeat: {
                type: "v4",
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            lightMap: {
                type: "t",
                value: null
            },
            specularMap: {
                type: "t",
                value: null
            },
            alphaMap: {
                type: "t",
                value: null
            },
            envMap: {
                type: "t",
                value: null
            },
            flipEnvMap: {
                type: "f",
                value: -1
            },
            reflectivity: {
                type: "f",
                value: 1
            },
            refractionRatio: {
                type: "f",
                value: .98
            },
            morphTargetInfluences: {
                type: "f",
                value: 0
            }
        },
        bump: {
            bumpMap: {
                type: "t",
                value: null
            },
            bumpScale: {
                type: "f",
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                type: "t",
                value: null
            },
            normalScale: {
                type: "v2",
                value: new THREE.Vector2(1, 1)
            }
        },
        fog: {
            fogDensity: {
                type: "f",
                value: 25e-5
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2e3
            },
            fogColor: {
                type: "c",
                value: new THREE.Color(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            hemisphereLightDirection: {
                type: "fv",
                value: []
            },
            hemisphereLightSkyColor: {
                type: "fv",
                value: []
            },
            hemisphereLightGroundColor: {
                type: "fv",
                value: []
            },
            pointLightColor: {
                type: "fv",
                value: []
            },
            pointLightPosition: {
                type: "fv",
                value: []
            },
            pointLightDistance: {
                type: "fv1",
                value: []
            },
            pointLightDecay: {
                type: "fv1",
                value: []
            },
            spotLightColor: {
                type: "fv",
                value: []
            },
            spotLightPosition: {
                type: "fv",
                value: []
            },
            spotLightDirection: {
                type: "fv",
                value: []
            },
            spotLightDistance: {
                type: "fv1",
                value: []
            },
            spotLightAngleCos: {
                type: "fv1",
                value: []
            },
            spotLightExponent: {
                type: "fv1",
                value: []
            },
            spotLightDecay: {
                type: "fv1",
                value: []
            }
        },
        particle: {
            psColor: {
                type: "c",
                value: new THREE.Color(15658734)
            },
            opacity: {
                type: "f",
                value: 1
            },
            size: {
                type: "f",
                value: 1
            },
            scale: {
                type: "f",
                value: 1
            },
            map: {
                type: "t",
                value: null
            },
            offsetRepeat: {
                type: "v4",
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            fogDensity: {
                type: "f",
                value: 25e-5
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2e3
            },
            fogColor: {
                type: "c",
                value: new THREE.Color(16777215)
            }
        },
        shadowmap: {
            shadowMap: {
                type: "tv",
                value: []
            },
            shadowMapSize: {
                type: "v2v",
                value: []
            },
            shadowBias: {
                type: "fv1",
                value: []
            },
            shadowDarkness: {
                type: "fv1",
                value: []
            },
            shadowMatrix: {
                type: "m4v",
                value: []
            }
        }
    }, THREE.ShaderLib = {
        basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
            vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "\t#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\t#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
        },
        lambert: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                },
                wrapRGB: {
                    type: "v3",
                    value: new THREE.Vector3(1, 1, 1)
                }
            }]),
            vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
        },
        phong: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
                emissive: {
                    type: "c",
                    value: new THREE.Color(0)
                },
                specular: {
                    type: "c",
                    value: new THREE.Color(1118481)
                },
                shininess: {
                    type: "f",
                    value: 30
                },
                wrapRGB: {
                    type: "v3",
                    value: new THREE.Vector3(1, 1, 1)
                }
            }]),
            vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "\tvViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
        },
        particle_basic: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
            vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphatest_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
        },
        dashed: {
            uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
                scale: {
                    type: "f",
                    value: 1
                },
                dashSize: {
                    type: "f",
                    value: 1
                },
                totalSize: {
                    type: "f",
                    value: 2
                }
            }]),
            vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
        },
        depth: {
            uniforms: {
                mNear: {
                    type: "f",
                    value: 1
                },
                mFar: {
                    type: "f",
                    value: 2e3
                },
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")
        },
        normal: {
            uniforms: {
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
        },
        cube: {
            uniforms: {
                tCube: {
                    type: "t",
                    value: null
                },
                tFlip: {
                    type: "f",
                    value: -1
                }
            },
            vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    type: "t",
                    value: null
                },
                tFlip: {
                    type: "f",
                    value: -1
                }
            },
            vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
        },
        depthRGBA: {
            uniforms: {},
            vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
            fragmentShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")
        }
    }, THREE.WebGLRenderer = function(t) {
        function e(t) {
            var e = t.geometry;
            t = t.material;
            var r = e.vertices.length;
            if (t.attributes) {
                void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []);
                for (var n in t.attributes) {
                    var i = t.attributes[n];
                    if (!i.__webglInitialized || i.createUniqueBuffers) {
                        i.__webglInitialized = !0;
                        var o = 1;
                        "v2" === i.type ? o = 2 : "v3" === i.type ? o = 3 : "v4" === i.type ? o = 4 : "c" === i.type && (o = 3), i.size = o, i.array = new Float32Array(r * o), i.buffer = Y.createBuffer(), i.buffer.belongsToAttribute = n, i.needsUpdate = !0
                    }
                    e.__webglCustomAttributesList.push(i)
                }
            }
        }

        function r(t, e) {
            return t.material instanceof THREE.MeshFaceMaterial ? t.material.materials[e.materialIndex] : t.material
        }

        function n(t, e, r, n) {
            r = r.attributes;
            var i = e.attributes;
            e = e.attributesKeys;
            for (var o = 0, a = e.length; o < a; o++) {
                var s = e[o],
                    h = i[s];
                if (0 <= h) {
                    var c = r[s];
                    void 0 !== c ? (s = c.itemSize, Y.bindBuffer(Y.ARRAY_BUFFER, c.buffer), gt.enableAttribute(h), Y.vertexAttribPointer(h, s, Y.FLOAT, !1, 0, n * s * 4)) : void 0 !== t.defaultAttributeValues && (2 === t.defaultAttributeValues[s].length ? Y.vertexAttrib2fv(h, t.defaultAttributeValues[s]) : 3 === t.defaultAttributeValues[s].length && Y.vertexAttrib3fv(h, t.defaultAttributeValues[s]))
                }
            }
            gt.disableUnusedAttributes()
        }

        function i(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }

        function o(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }

        function a(t, e) {
            return e[0] - t[0]
        }

        function s(t) {
            if (!1 !== t.visible) {
                if (!(t instanceof THREE.Scene || t instanceof THREE.Group)) {
                    void 0 === t.__webglInit && (t.__webglInit = !0, t._modelViewMatrix = new THREE.Matrix4, t._normalMatrix = new THREE.Matrix3, t.addEventListener("removed", Ut));
                    var r = t.geometry;
                    if (void 0 !== r && void 0 === r.__webglInit)
                        if (r.__webglInit = !0, r.addEventListener("dispose", Vt), r instanceof THREE.BufferGeometry) K.info.memory.geometries++;
                        else if (t instanceof THREE.Mesh) u(t, r);
                    else if (t instanceof THREE.Line) {
                        if (void 0 === r.__webglVertexBuffer) {
                            r.__webglVertexBuffer = Y.createBuffer(), r.__webglColorBuffer = Y.createBuffer(), r.__webglLineDistanceBuffer = Y.createBuffer(), K.info.memory.geometries++;
                            var n = r.vertices.length;
                            r.__vertexArray = new Float32Array(3 * n), r.__colorArray = new Float32Array(3 * n), r.__lineDistanceArray = new Float32Array(1 * n), r.__webglLineCount = n, e(t), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0, r.lineDistancesNeedUpdate = !0
                        }
                    } else t instanceof THREE.PointCloud && void 0 === r.__webglVertexBuffer && (r.__webglVertexBuffer = Y.createBuffer(), r.__webglColorBuffer = Y.createBuffer(), K.info.memory.geometries++, n = r.vertices.length, r.__vertexArray = new Float32Array(3 * n), r.__colorArray = new Float32Array(3 * n), r.__webglParticleCount = n, e(t), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0);
                    if (void 0 === t.__webglActive)
                        if (t.__webglActive = !0, t instanceof THREE.Mesh) {
                            if (r instanceof THREE.BufferGeometry) f(I, r, t);
                            else if (r instanceof THREE.Geometry)
                                for (var r = Wt[r.id], n = 0, i = r.length; n < i; n++) f(I, r[n], t)
                        } else t instanceof THREE.Line || t instanceof THREE.PointCloud ? f(I, r, t) : (t instanceof THREE.ImmediateRenderObject || t.immediateRenderCallback) && G.push({
                            id: null,
                            object: t,
                            opaque: null,
                            transparent: null,
                            z: 0
                        });
                    if (t instanceof THREE.Light) z.push(t);
                    else if (t instanceof THREE.Sprite) X.push(t);
                    else if (t instanceof THREE.LensFlare) q.push(t);
                    else if ((r = I[t.id]) && (!1 === t.frustumCulled || !0 === ct.intersectsObject(t)))
                        for (n = 0, i = r.length; n < i; n++) {
                            var o = r[n],
                                a = o,
                                h = a.object,
                                c = a.buffer,
                                l = h.geometry,
                                h = h.material;
                            h instanceof THREE.MeshFaceMaterial ? (h = h.materials[l instanceof THREE.BufferGeometry ? 0 : c.materialIndex], a.material = h, h.transparent ? W.push(a) : j.push(a)) : h && (a.material = h, h.transparent ? W.push(a) : j.push(a)), o.render = !0, !0 === K.sortObjects && (ut.setFromMatrixPosition(t.matrixWorld), ut.applyProjection(lt), o.z = ut.z)
                        }
                }
                for (n = 0, i = t.children.length; n < i; n++) s(t.children[n])
            }
        }

        function h(t, e, r, n, i) {
            for (var o, a = 0, s = t.length; a < s; a++) {
                o = t[a];
                var h = o.object,
                    c = o.buffer;
                if (T(h, e), i) o = i;
                else {
                    if (o = o.material, !o) continue;
                    m(o)
                }
                K.setMaterialFaces(o), c instanceof THREE.BufferGeometry ? K.renderBufferDirect(e, r, n, o, c, h) : K.renderBuffer(e, r, n, o, c, h)
            }
        }

        function c(t, e, r, n, i, o) {
            for (var a, s = 0, h = t.length; s < h; s++) {
                a = t[s];
                var c = a.object;
                if (c.visible) {
                    if (o) a = o;
                    else {
                        if (a = a[e], !a) continue;
                        m(a)
                    }
                    K.renderImmediateObject(r, n, i, a, c)
                }
            }
        }

        function l(t) {
            var e = t.object.material;
            e.transparent ? (t.transparent = e, t.opaque = null) : (t.opaque = e, t.transparent = null)
        }

        function u(t, e) {
            var n = t.material,
                i = !1;
            if (void 0 === Wt[e.id] || !0 === e.groupsNeedUpdate) {
                delete I[t.id];
                for (var o, a, s = Wt, h = e.id, n = n instanceof THREE.MeshFaceMaterial, c = vt.get("OES_element_index_uint") ? 4294967296 : 65535, i = {}, l = e.morphTargets.length, u = e.morphNormals.length, p = {}, d = [], E = 0, m = e.faces.length; E < m; E++) {
                    o = e.faces[E];
                    var g = n ? o.materialIndex : 0;
                    g in i || (i[g] = {
                        hash: g,
                        counter: 0
                    }), o = i[g].hash + "_" + i[g].counter, o in p || (a = {
                        id: Xt++,
                        faces3: [],
                        materialIndex: g,
                        vertices: 0,
                        numMorphTargets: l,
                        numMorphNormals: u
                    }, p[o] = a, d.push(a)), p[o].vertices + 3 > c && (i[g].counter += 1, o = i[g].hash + "_" + i[g].counter, o in p || (a = {
                        id: Xt++,
                        faces3: [],
                        materialIndex: g,
                        vertices: 0,
                        numMorphTargets: l,
                        numMorphNormals: u
                    }, p[o] = a, d.push(a))), p[o].faces3.push(E), p[o].vertices += 3
                }
                s[h] = d, e.groupsNeedUpdate = !1
            }
            for (s = Wt[e.id], h = 0, n = s.length; h < n; h++) {
                if (c = s[h], void 0 === c.__webglVertexBuffer) {
                    if (i = c, i.__webglVertexBuffer = Y.createBuffer(), i.__webglNormalBuffer = Y.createBuffer(), i.__webglTangentBuffer = Y.createBuffer(), i.__webglColorBuffer = Y.createBuffer(), i.__webglUVBuffer = Y.createBuffer(), i.__webglUV2Buffer = Y.createBuffer(), i.__webglSkinIndicesBuffer = Y.createBuffer(), i.__webglSkinWeightsBuffer = Y.createBuffer(), i.__webglFaceBuffer = Y.createBuffer(), i.__webglLineBuffer = Y.createBuffer(), u = i.numMorphTargets)
                        for (i.__webglMorphTargetsBuffers = [], l = 0; l < u; l++) i.__webglMorphTargetsBuffers.push(Y.createBuffer());
                    if (u = i.numMorphNormals)
                        for (i.__webglMorphNormalsBuffers = [], l = 0; l < u; l++) i.__webglMorphNormalsBuffers.push(Y.createBuffer());
                    if (K.info.memory.geometries++, i = c, E = t, m = E.geometry, u = i.faces3, l = 3 * u.length, p = 1 * u.length, d = 3 * u.length, u = r(E, i), i.__vertexArray = new Float32Array(3 * l), i.__normalArray = new Float32Array(3 * l), i.__colorArray = new Float32Array(3 * l), i.__uvArray = new Float32Array(2 * l), 1 < m.faceVertexUvs.length && (i.__uv2Array = new Float32Array(2 * l)), m.hasTangents && (i.__tangentArray = new Float32Array(4 * l)), E.geometry.skinWeights.length && E.geometry.skinIndices.length && (i.__skinIndexArray = new Float32Array(4 * l), i.__skinWeightArray = new Float32Array(4 * l)), E = null !== vt.get("OES_element_index_uint") && 21845 < p ? Uint32Array : Uint16Array, i.__typeArray = E, i.__faceArray = new E(3 * p), i.__lineArray = new E(2 * d), m = i.numMorphTargets)
                        for (i.__morphTargetsArrays = [], E = 0; E < m; E++) i.__morphTargetsArrays.push(new Float32Array(3 * l));
                    if (m = i.numMorphNormals)
                        for (i.__morphNormalsArrays = [], E = 0; E < m; E++) i.__morphNormalsArrays.push(new Float32Array(3 * l));
                    if (i.__webglFaceCount = 3 * p, i.__webglLineCount = 2 * d, u.attributes)
                        for (p in void 0 === i.__webglCustomAttributesList && (i.__webglCustomAttributesList = []), p = void 0, u.attributes) {
                            var v, d = u.attributes[p],
                                E = {};
                            for (v in d) E[v] = d[v];
                            E.__webglInitialized && !E.createUniqueBuffers || (E.__webglInitialized = !0, m = 1, "v2" === E.type ? m = 2 : "v3" === E.type ? m = 3 : "v4" === E.type ? m = 4 : "c" === E.type && (m = 3), E.size = m, E.array = new Float32Array(l * m), E.buffer = Y.createBuffer(), E.buffer.belongsToAttribute = p, d.needsUpdate = !0, E.__original = d), i.__webglCustomAttributesList.push(E)
                        }
                    i.__inittedArrays = !0, e.verticesNeedUpdate = !0, e.morphTargetsNeedUpdate = !0, e.elementsNeedUpdate = !0, e.uvsNeedUpdate = !0, e.normalsNeedUpdate = !0, e.tangentsNeedUpdate = !0, i = e.colorsNeedUpdate = !0
                } else i = !1;
                (i || void 0 === t.__webglActive) && f(I, c, t)
            }
            t.__webglActive = !0
        }

        function f(t, e, r) {
            var n = r.id;
            t[n] = t[n] || [], t[n].push({
                id: n,
                buffer: e,
                object: r,
                material: null,
                z: 0
            })
        }

        function p(t) {
            var e = t.geometry;
            if (e instanceof THREE.BufferGeometry)
                for (var n = e.attributes, i = e.attributesKeys, o = 0, a = i.length; o < a; o++) {
                    var s = i[o],
                        h = n[s],
                        c = "index" === s ? Y.ELEMENT_ARRAY_BUFFER : Y.ARRAY_BUFFER;
                    void 0 === h.buffer ? (h.buffer = Y.createBuffer(), Y.bindBuffer(c, h.buffer), Y.bufferData(c, h.array, h instanceof THREE.DynamicBufferAttribute ? Y.DYNAMIC_DRAW : Y.STATIC_DRAW), h.needsUpdate = !1) : !0 === h.needsUpdate && (Y.bindBuffer(c, h.buffer), void 0 === h.updateRange || -1 === h.updateRange.count ? Y.bufferSubData(c, 0, h.array) : 0 === h.updateRange.count ? console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.") : (Y.bufferSubData(c, h.updateRange.offset * h.array.BYTES_PER_ELEMENT, h.array.subarray(h.updateRange.offset, h.updateRange.offset + h.updateRange.count)), h.updateRange.count = 0), h.needsUpdate = !1)
                } else if (t instanceof THREE.Mesh) {
                    !0 === e.groupsNeedUpdate && u(t, e);
                    for (var l = Wt[e.id], o = 0, f = l.length; o < f; o++) {
                        var p = l[o],
                            m = r(t, p),
                            g = m.attributes && d(m);
                        if (e.verticesNeedUpdate || e.morphTargetsNeedUpdate || e.elementsNeedUpdate || e.uvsNeedUpdate || e.normalsNeedUpdate || e.colorsNeedUpdate || e.tangentsNeedUpdate || g) {
                            var v = p,
                                y = t,
                                T = Y.DYNAMIC_DRAW,
                                R = !e.dynamic,
                                x = m;
                            if (v.__inittedArrays) {
                                var H = !1 == x instanceof THREE.MeshPhongMaterial && x.shading === THREE.FlatShading,
                                    b = void 0,
                                    _ = void 0,
                                    w = void 0,
                                    M = void 0,
                                    S = void 0,
                                    A = void 0,
                                    C = void 0,
                                    L = void 0,
                                    P = void 0,
                                    F = void 0,
                                    D = void 0,
                                    B = void 0,
                                    k = void 0,
                                    O = void 0,
                                    U = void 0,
                                    V = void 0,
                                    N = void 0,
                                    z = void 0,
                                    I = void 0,
                                    G = void 0,
                                    j = void 0,
                                    W = void 0,
                                    X = void 0,
                                    q = void 0,
                                    K = void 0,
                                    Q = void 0,
                                    Z = void 0,
                                    J = void 0,
                                    $ = void 0,
                                    tt = void 0,
                                    et = void 0,
                                    rt = void 0,
                                    nt = void 0,
                                    it = void 0,
                                    ot = void 0,
                                    at = void 0,
                                    st = void 0,
                                    ht = void 0,
                                    ct = void 0,
                                    lt = void 0,
                                    ut = 0,
                                    ft = 0,
                                    pt = 0,
                                    dt = 0,
                                    Et = 0,
                                    mt = 0,
                                    gt = 0,
                                    vt = 0,
                                    yt = 0,
                                    Tt = 0,
                                    Rt = 0,
                                    xt = 0,
                                    Ht = void 0,
                                    bt = v.__vertexArray,
                                    _t = v.__uvArray,
                                    wt = v.__uv2Array,
                                    Mt = v.__normalArray,
                                    St = v.__tangentArray,
                                    At = v.__colorArray,
                                    Ct = v.__skinIndexArray,
                                    Lt = v.__skinWeightArray,
                                    Pt = v.__morphTargetsArrays,
                                    Ft = v.__morphNormalsArrays,
                                    Dt = v.__webglCustomAttributesList,
                                    Bt = void 0,
                                    kt = v.__faceArray,
                                    Ot = v.__lineArray,
                                    Ut = y.geometry,
                                    Vt = Ut.elementsNeedUpdate,
                                    Nt = Ut.uvsNeedUpdate,
                                    zt = Ut.normalsNeedUpdate,
                                    It = Ut.tangentsNeedUpdate,
                                    Gt = Ut.colorsNeedUpdate,
                                    jt = Ut.morphTargetsNeedUpdate,
                                    Xt = Ut.vertices,
                                    qt = v.faces3,
                                    Yt = Ut.faces,
                                    Kt = Ut.faceVertexUvs[0],
                                    Qt = Ut.faceVertexUvs[1],
                                    Zt = Ut.skinIndices,
                                    Jt = Ut.skinWeights,
                                    $t = Ut.morphTargets,
                                    te = Ut.morphNormals;
                                if (Ut.verticesNeedUpdate) {
                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], B = Xt[M.a], k = Xt[M.b], O = Xt[M.c], bt[ft] = B.x, bt[ft + 1] = B.y, bt[ft + 2] = B.z, bt[ft + 3] = k.x, bt[ft + 4] = k.y, bt[ft + 5] = k.z, bt[ft + 6] = O.x, bt[ft + 7] = O.y, bt[ft + 8] = O.z, ft += 9;
                                    Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglVertexBuffer), Y.bufferData(Y.ARRAY_BUFFER, bt, T)
                                }
                                if (jt)
                                    for (ot = 0, at = $t.length; ot < at; ot++) {
                                        for (b = Rt = 0, _ = qt.length; b < _; b++) ct = qt[b], M = Yt[ct], B = $t[ot].vertices[M.a], k = $t[ot].vertices[M.b], O = $t[ot].vertices[M.c], st = Pt[ot], st[Rt] = B.x, st[Rt + 1] = B.y, st[Rt + 2] = B.z, st[Rt + 3] = k.x, st[Rt + 4] = k.y, st[Rt + 5] = k.z, st[Rt + 6] = O.x, st[Rt + 7] = O.y, st[Rt + 8] = O.z, x.morphNormals && (H ? G = I = z = te[ot].faceNormals[ct] : (lt = te[ot].vertexNormals[ct], z = lt.a, I = lt.b, G = lt.c), ht = Ft[ot], ht[Rt] = z.x, ht[Rt + 1] = z.y, ht[Rt + 2] = z.z, ht[Rt + 3] = I.x, ht[Rt + 4] = I.y, ht[Rt + 5] = I.z, ht[Rt + 6] = G.x, ht[Rt + 7] = G.y, ht[Rt + 8] = G.z), Rt += 9;
                                        Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglMorphTargetsBuffers[ot]), Y.bufferData(Y.ARRAY_BUFFER, Pt[ot], T), x.morphNormals && (Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglMorphNormalsBuffers[ot]), Y.bufferData(Y.ARRAY_BUFFER, Ft[ot], T))
                                    }
                                if (Jt.length) {
                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], q = Jt[M.a], K = Jt[M.b], Q = Jt[M.c], Lt[Tt] = q.x, Lt[Tt + 1] = q.y, Lt[Tt + 2] = q.z, Lt[Tt + 3] = q.w, Lt[Tt + 4] = K.x, Lt[Tt + 5] = K.y, Lt[Tt + 6] = K.z, Lt[Tt + 7] = K.w, Lt[Tt + 8] = Q.x, Lt[Tt + 9] = Q.y, Lt[Tt + 10] = Q.z, Lt[Tt + 11] = Q.w, Z = Zt[M.a], J = Zt[M.b], $ = Zt[M.c], Ct[Tt] = Z.x, Ct[Tt + 1] = Z.y, Ct[Tt + 2] = Z.z, Ct[Tt + 3] = Z.w, Ct[Tt + 4] = J.x, Ct[Tt + 5] = J.y, Ct[Tt + 6] = J.z, Ct[Tt + 7] = J.w, Ct[Tt + 8] = $.x, Ct[Tt + 9] = $.y, Ct[Tt + 10] = $.z, Ct[Tt + 11] = $.w, Tt += 12;
                                    0 < Tt && (Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglSkinIndicesBuffer), Y.bufferData(Y.ARRAY_BUFFER, Ct, T), Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglSkinWeightsBuffer), Y.bufferData(Y.ARRAY_BUFFER, Lt, T))
                                }
                                if (Gt) {
                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], C = M.vertexColors, L = M.color, 3 === C.length && x.vertexColors === THREE.VertexColors ? (j = C[0], W = C[1], X = C[2]) : X = W = j = L, At[yt] = j.r, At[yt + 1] = j.g, At[yt + 2] = j.b, At[yt + 3] = W.r, At[yt + 4] = W.g, At[yt + 5] = W.b, At[yt + 6] = X.r, At[yt + 7] = X.g, At[yt + 8] = X.b, yt += 9;
                                    0 < yt && (Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglColorBuffer), Y.bufferData(Y.ARRAY_BUFFER, At, T))
                                }
                                if (It && Ut.hasTangents) {
                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], P = M.vertexTangents, U = P[0], V = P[1], N = P[2], St[gt] = U.x, St[gt + 1] = U.y, St[gt + 2] = U.z, St[gt + 3] = U.w, St[gt + 4] = V.x, St[gt + 5] = V.y, St[gt + 6] = V.z, St[gt + 7] = V.w, St[gt + 8] = N.x, St[gt + 9] = N.y, St[gt + 10] = N.z, St[gt + 11] = N.w, gt += 12;
                                    Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglTangentBuffer), Y.bufferData(Y.ARRAY_BUFFER, St, T)
                                }
                                if (zt) {
                                    for (b = 0, _ = qt.length; b < _; b++)
                                        if (M = Yt[qt[b]], S = M.vertexNormals, A = M.normal, 3 === S.length && !1 === H)
                                            for (tt = 0; 3 > tt; tt++) rt = S[tt], Mt[mt] = rt.x, Mt[mt + 1] = rt.y, Mt[mt + 2] = rt.z, mt += 3;
                                        else
                                            for (tt = 0; 3 > tt; tt++) Mt[mt] = A.x, Mt[mt + 1] = A.y, Mt[mt + 2] = A.z, mt += 3;
                                    Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglNormalBuffer), Y.bufferData(Y.ARRAY_BUFFER, Mt, T)
                                }
                                if (Nt && Kt) {
                                    for (b = 0, _ = qt.length; b < _; b++)
                                        if (w = qt[b], F = Kt[w], void 0 !== F)
                                            for (tt = 0; 3 > tt; tt++) nt = F[tt], _t[pt] = nt.x, _t[pt + 1] = nt.y, pt += 2;
                                    0 < pt && (Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglUVBuffer), Y.bufferData(Y.ARRAY_BUFFER, _t, T))
                                }
                                if (Nt && Qt) {
                                    for (b = 0, _ = qt.length; b < _; b++)
                                        if (w = qt[b], D = Qt[w], void 0 !== D)
                                            for (tt = 0; 3 > tt; tt++) it = D[tt], wt[dt] = it.x, wt[dt + 1] = it.y, dt += 2;
                                    0 < dt && (Y.bindBuffer(Y.ARRAY_BUFFER, v.__webglUV2Buffer), Y.bufferData(Y.ARRAY_BUFFER, wt, T))
                                }
                                if (Vt) {
                                    for (b = 0, _ = qt.length; b < _; b++) kt[Et] = ut, kt[Et + 1] = ut + 1, kt[Et + 2] = ut + 2, Et += 3, Ot[vt] = ut, Ot[vt + 1] = ut + 1, Ot[vt + 2] = ut, Ot[vt + 3] = ut + 2, Ot[vt + 4] = ut + 1, Ot[vt + 5] = ut + 2, vt += 6, ut += 3;
                                    Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, v.__webglFaceBuffer), Y.bufferData(Y.ELEMENT_ARRAY_BUFFER, kt, T), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, v.__webglLineBuffer), Y.bufferData(Y.ELEMENT_ARRAY_BUFFER, Ot, T)
                                }
                                if (Dt)
                                    for (tt = 0, et = Dt.length; tt < et; tt++)
                                        if (Bt = Dt[tt], Bt.__original.needsUpdate) {
                                            if (xt = 0, 1 === Bt.size) {
                                                if (void 0 === Bt.boundTo || "vertices" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], Bt.array[xt] = Bt.value[M.a], Bt.array[xt + 1] = Bt.value[M.b], Bt.array[xt + 2] = Bt.value[M.c], xt += 3;
                                                else if ("faces" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) Ht = Bt.value[qt[b]], Bt.array[xt] = Ht, Bt.array[xt + 1] = Ht, Bt.array[xt + 2] = Ht, xt += 3
                                            } else if (2 === Bt.size) {
                                                if (void 0 === Bt.boundTo || "vertices" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], B = Bt.value[M.a], k = Bt.value[M.b], O = Bt.value[M.c], Bt.array[xt] = B.x, Bt.array[xt + 1] = B.y, Bt.array[xt + 2] = k.x, Bt.array[xt + 3] = k.y, Bt.array[xt + 4] = O.x, Bt.array[xt + 5] = O.y, xt += 6;
                                                else if ("faces" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) O = k = B = Ht = Bt.value[qt[b]], Bt.array[xt] = B.x, Bt.array[xt + 1] = B.y, Bt.array[xt + 2] = k.x, Bt.array[xt + 3] = k.y, Bt.array[xt + 4] = O.x, Bt.array[xt + 5] = O.y, xt += 6
                                            } else if (3 === Bt.size) {
                                                var ee;
                                                if (ee = "c" === Bt.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === Bt.boundTo || "vertices" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], B = Bt.value[M.a], k = Bt.value[M.b], O = Bt.value[M.c], Bt.array[xt] = B[ee[0]], Bt.array[xt + 1] = B[ee[1]], Bt.array[xt + 2] = B[ee[2]], Bt.array[xt + 3] = k[ee[0]], Bt.array[xt + 4] = k[ee[1]], Bt.array[xt + 5] = k[ee[2]], Bt.array[xt + 6] = O[ee[0]], Bt.array[xt + 7] = O[ee[1]], Bt.array[xt + 8] = O[ee[2]], xt += 9;
                                                else if ("faces" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) O = k = B = Ht = Bt.value[qt[b]], Bt.array[xt] = B[ee[0]], Bt.array[xt + 1] = B[ee[1]], Bt.array[xt + 2] = B[ee[2]], Bt.array[xt + 3] = k[ee[0]], Bt.array[xt + 4] = k[ee[1]], Bt.array[xt + 5] = k[ee[2]], Bt.array[xt + 6] = O[ee[0]], Bt.array[xt + 7] = O[ee[1]], Bt.array[xt + 8] = O[ee[2]], xt += 9;
                                                else if ("faceVertices" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) Ht = Bt.value[qt[b]], B = Ht[0], k = Ht[1], O = Ht[2], Bt.array[xt] = B[ee[0]], Bt.array[xt + 1] = B[ee[1]], Bt.array[xt + 2] = B[ee[2]], Bt.array[xt + 3] = k[ee[0]], Bt.array[xt + 4] = k[ee[1]], Bt.array[xt + 5] = k[ee[2]], Bt.array[xt + 6] = O[ee[0]], Bt.array[xt + 7] = O[ee[1]], Bt.array[xt + 8] = O[ee[2]], xt += 9
                                            } else if (4 === Bt.size)
                                                if (void 0 === Bt.boundTo || "vertices" === Bt.boundTo)
                                                    for (b = 0, _ = qt.length; b < _; b++) M = Yt[qt[b]], B = Bt.value[M.a], k = Bt.value[M.b], O = Bt.value[M.c], Bt.array[xt] = B.x, Bt.array[xt + 1] = B.y, Bt.array[xt + 2] = B.z, Bt.array[xt + 3] = B.w, Bt.array[xt + 4] = k.x, Bt.array[xt + 5] = k.y, Bt.array[xt + 6] = k.z, Bt.array[xt + 7] = k.w, Bt.array[xt + 8] = O.x, Bt.array[xt + 9] = O.y, Bt.array[xt + 10] = O.z, Bt.array[xt + 11] = O.w, xt += 12;
                                                else if ("faces" === Bt.boundTo)
                                                for (b = 0, _ = qt.length; b < _; b++) O = k = B = Ht = Bt.value[qt[b]], Bt.array[xt] = B.x, Bt.array[xt + 1] = B.y, Bt.array[xt + 2] = B.z, Bt.array[xt + 3] = B.w, Bt.array[xt + 4] = k.x, Bt.array[xt + 5] = k.y, Bt.array[xt + 6] = k.z, Bt.array[xt + 7] = k.w, Bt.array[xt + 8] = O.x, Bt.array[xt + 9] = O.y, Bt.array[xt + 10] = O.z, Bt.array[xt + 11] = O.w, xt += 12;
                                            else if ("faceVertices" === Bt.boundTo)
                                                for (b = 0, _ = qt.length; b < _; b++) Ht = Bt.value[qt[b]], B = Ht[0], k = Ht[1], O = Ht[2], Bt.array[xt] = B.x, Bt.array[xt + 1] = B.y, Bt.array[xt + 2] = B.z, Bt.array[xt + 3] = B.w, Bt.array[xt + 4] = k.x, Bt.array[xt + 5] = k.y, Bt.array[xt + 6] = k.z, Bt.array[xt + 7] = k.w, Bt.array[xt + 8] = O.x, Bt.array[xt + 9] = O.y, Bt.array[xt + 10] = O.z, Bt.array[xt + 11] = O.w, xt += 12;
                                            Y.bindBuffer(Y.ARRAY_BUFFER, Bt.buffer), Y.bufferData(Y.ARRAY_BUFFER, Bt.array, T)
                                        }
                                R && (delete v.__inittedArrays, delete v.__colorArray, delete v.__normalArray, delete v.__tangentArray, delete v.__uvArray, delete v.__uv2Array, delete v.__faceArray, delete v.__vertexArray, delete v.__lineArray, delete v.__skinIndexArray, delete v.__skinWeightArray)
                            }
                        }
                    }
                    e.verticesNeedUpdate = !1, e.morphTargetsNeedUpdate = !1, e.elementsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.tangentsNeedUpdate = !1, m.attributes && E(m)
                } else if (t instanceof THREE.Line) {
                if (m = r(t, e), g = m.attributes && d(m), e.verticesNeedUpdate || e.colorsNeedUpdate || e.lineDistancesNeedUpdate || g) {
                    var re, ne, ie, oe, ae, se, he, ce, le, ue, fe, pe, de = Y.DYNAMIC_DRAW,
                        Ee = e.vertices,
                        me = e.colors,
                        ge = e.lineDistances,
                        ve = Ee.length,
                        ye = me.length,
                        Te = ge.length,
                        Re = e.__vertexArray,
                        xe = e.__colorArray,
                        He = e.__lineDistanceArray,
                        be = e.colorsNeedUpdate,
                        _e = e.lineDistancesNeedUpdate,
                        we = e.__webglCustomAttributesList;
                    if (e.verticesNeedUpdate) {
                        for (re = 0; re < ve; re++) oe = Ee[re], ae = 3 * re, Re[ae] = oe.x, Re[ae + 1] = oe.y, Re[ae + 2] = oe.z;
                        Y.bindBuffer(Y.ARRAY_BUFFER, e.__webglVertexBuffer), Y.bufferData(Y.ARRAY_BUFFER, Re, de)
                    }
                    if (be) {
                        for (ne = 0; ne < ye; ne++) se = me[ne], ae = 3 * ne, xe[ae] = se.r, xe[ae + 1] = se.g, xe[ae + 2] = se.b;
                        Y.bindBuffer(Y.ARRAY_BUFFER, e.__webglColorBuffer), Y.bufferData(Y.ARRAY_BUFFER, xe, de)
                    }
                    if (_e) {
                        for (ie = 0; ie < Te; ie++) He[ie] = ge[ie];
                        Y.bindBuffer(Y.ARRAY_BUFFER, e.__webglLineDistanceBuffer), Y.bufferData(Y.ARRAY_BUFFER, He, de)
                    }
                    if (we)
                        for (he = 0, ce = we.length; he < ce; he++)
                            if (pe = we[he], pe.needsUpdate && (void 0 === pe.boundTo || "vertices" === pe.boundTo)) {
                                if (ae = 0, ue = pe.value.length, 1 === pe.size)
                                    for (le = 0; le < ue; le++) pe.array[le] = pe.value[le];
                                else if (2 === pe.size)
                                    for (le = 0; le < ue; le++) fe = pe.value[le], pe.array[ae] = fe.x, pe.array[ae + 1] = fe.y, ae += 2;
                                else if (3 === pe.size)
                                    if ("c" === pe.type)
                                        for (le = 0; le < ue; le++) fe = pe.value[le], pe.array[ae] = fe.r, pe.array[ae + 1] = fe.g, pe.array[ae + 2] = fe.b, ae += 3;
                                    else
                                        for (le = 0; le < ue; le++) fe = pe.value[le], pe.array[ae] = fe.x, pe.array[ae + 1] = fe.y, pe.array[ae + 2] = fe.z, ae += 3;
                                else if (4 === pe.size)
                                    for (le = 0; le < ue; le++) fe = pe.value[le], pe.array[ae] = fe.x, pe.array[ae + 1] = fe.y, pe.array[ae + 2] = fe.z, pe.array[ae + 3] = fe.w, ae += 4;
                                Y.bindBuffer(Y.ARRAY_BUFFER, pe.buffer), Y.bufferData(Y.ARRAY_BUFFER, pe.array, de), pe.needsUpdate = !1
                            }
                }
                e.verticesNeedUpdate = !1, e.colorsNeedUpdate = !1, e.lineDistancesNeedUpdate = !1, m.attributes && E(m)
            } else if (t instanceof THREE.PointCloud) {
                if (m = r(t, e), g = m.attributes && d(m), e.verticesNeedUpdate || e.colorsNeedUpdate || g) {
                    var Me, Se, Ae, Ce, Le, Pe, Fe, De, Be, ke, Oe, Ue = Y.DYNAMIC_DRAW,
                        Ve = e.vertices,
                        Ne = Ve.length,
                        ze = e.colors,
                        Ie = ze.length,
                        Ge = e.__vertexArray,
                        je = e.__colorArray,
                        We = e.colorsNeedUpdate,
                        Xe = e.__webglCustomAttributesList;
                    if (e.verticesNeedUpdate) {
                        for (Me = 0; Me < Ne; Me++) Ae = Ve[Me], Ce = 3 * Me, Ge[Ce] = Ae.x, Ge[Ce + 1] = Ae.y, Ge[Ce + 2] = Ae.z;
                        Y.bindBuffer(Y.ARRAY_BUFFER, e.__webglVertexBuffer), Y.bufferData(Y.ARRAY_BUFFER, Ge, Ue)
                    }
                    if (We) {
                        for (Se = 0; Se < Ie; Se++) Le = ze[Se], Ce = 3 * Se, je[Ce] = Le.r, je[Ce + 1] = Le.g, je[Ce + 2] = Le.b;
                        Y.bindBuffer(Y.ARRAY_BUFFER, e.__webglColorBuffer), Y.bufferData(Y.ARRAY_BUFFER, je, Ue)
                    }
                    if (Xe)
                        for (Pe = 0, Fe = Xe.length; Pe < Fe; Pe++) {
                            if (Oe = Xe[Pe], Oe.needsUpdate && (void 0 === Oe.boundTo || "vertices" === Oe.boundTo))
                                if (Be = Oe.value.length, Ce = 0, 1 === Oe.size)
                                    for (De = 0; De < Be; De++) Oe.array[De] = Oe.value[De];
                                else if (2 === Oe.size)
                                for (De = 0; De < Be; De++) ke = Oe.value[De], Oe.array[Ce] = ke.x, Oe.array[Ce + 1] = ke.y, Ce += 2;
                            else if (3 === Oe.size)
                                if ("c" === Oe.type)
                                    for (De = 0; De < Be; De++) ke = Oe.value[De], Oe.array[Ce] = ke.r, Oe.array[Ce + 1] = ke.g, Oe.array[Ce + 2] = ke.b, Ce += 3;
                                else
                                    for (De = 0; De < Be; De++) ke = Oe.value[De], Oe.array[Ce] = ke.x, Oe.array[Ce + 1] = ke.y, Oe.array[Ce + 2] = ke.z, Ce += 3;
                            else if (4 === Oe.size)
                                for (De = 0; De < Be; De++) ke = Oe.value[De], Oe.array[Ce] = ke.x, Oe.array[Ce + 1] = ke.y, Oe.array[Ce + 2] = ke.z, Oe.array[Ce + 3] = ke.w, Ce += 4;
                            Y.bindBuffer(Y.ARRAY_BUFFER, Oe.buffer), Y.bufferData(Y.ARRAY_BUFFER, Oe.array, Ue), Oe.needsUpdate = !1
                        }
                }
                e.verticesNeedUpdate = !1, e.colorsNeedUpdate = !1, m.attributes && E(m)
            }
        }

        function d(t) {
            for (var e in t.attributes)
                if (t.attributes[e].needsUpdate) return !0;
            return !1
        }

        function E(t) {
            for (var e in t.attributes) t.attributes[e].needsUpdate = !1
        }

        function m(t) {
            !0 === t.transparent ? gt.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha) : gt.setBlending(THREE.NoBlending), gt.setDepthTest(t.depthTest), gt.setDepthWrite(t.depthWrite), gt.setColorWrite(t.colorWrite), gt.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }

        function g(t, e, r, n, i) {
            var o, a, s, h;
            if (rt = 0, n.needsUpdate) {
                n.program && jt(n), n.addEventListener("dispose", It);
                var c = qt[n.type];
                if (c) {
                    var l = THREE.ShaderLib[c];
                    n.__webglShader = {
                        uniforms: THREE.UniformsUtils.clone(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }
                } else n.__webglShader = {
                    uniforms: n.uniforms,
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader
                };
                for (var u = 0, f = 0, p = 0, d = 0, E = 0, m = e.length; E < m; E++) {
                    var g = e[E];
                    g.onlyShadow || !1 === g.visible || (g instanceof THREE.DirectionalLight && u++, g instanceof THREE.PointLight && f++, g instanceof THREE.SpotLight && p++, g instanceof THREE.HemisphereLight && d++)
                }
                o = u, a = f, s = p, h = d;
                for (var T, b = 0, _ = 0, w = e.length; _ < w; _++) {
                    var A = e[_];
                    A.castShadow && (A instanceof THREE.SpotLight && b++, A instanceof THREE.DirectionalLight && !A.shadowCascade && b++)
                }
                T = b;
                var C;
                if (Mt && i && i.skeleton && i.skeleton.useVertexTexture) C = 1024;
                else {
                    var P = Y.getParameter(Y.MAX_VERTEX_UNIFORM_VECTORS),
                        F = Math.floor((P - 20) / 4);
                    void 0 !== i && i instanceof THREE.SkinnedMesh && (F = Math.min(i.skeleton.bones.length, F), F < i.skeleton.bones.length && THREE.warn("WebGLRenderer: too many bones - " + i.skeleton.bones.length + ", this GPU supports just " + F + " (try OpenGL instead of ANGLE)")), C = F
                }
                var D = {
                        precision: L,
                        supportsVertexTextures: wt,
                        map: !!n.map,
                        envMap: !!n.envMap,
                        envMapMode: n.envMap && n.envMap.mapping,
                        lightMap: !!n.lightMap,
                        bumpMap: !!n.bumpMap,
                        normalMap: !!n.normalMap,
                        specularMap: !!n.specularMap,
                        alphaMap: !!n.alphaMap,
                        combine: n.combine,
                        vertexColors: n.vertexColors,
                        fog: r,
                        useFog: n.fog,
                        fogExp: r instanceof THREE.FogExp2,
                        flatShading: n.shading === THREE.FlatShading,
                        sizeAttenuation: n.sizeAttenuation,
                        logarithmicDepthBuffer: U,
                        skinning: n.skinning,
                        maxBones: C,
                        useVertexTexture: Mt && i && i.skeleton && i.skeleton.useVertexTexture,
                        morphTargets: n.morphTargets,
                        morphNormals: n.morphNormals,
                        maxMorphTargets: K.maxMorphTargets,
                        maxMorphNormals: K.maxMorphNormals,
                        maxDirLights: o,
                        maxPointLights: a,
                        maxSpotLights: s,
                        maxHemiLights: h,
                        maxShadows: T,
                        shadowMapEnabled: K.shadowMapEnabled && i.receiveShadow && 0 < T,
                        shadowMapType: K.shadowMapType,
                        shadowMapDebug: K.shadowMapDebug,
                        shadowMapCascade: K.shadowMapCascade,
                        alphaTest: n.alphaTest,
                        metal: n.metal,
                        wrapAround: n.wrapAround,
                        doubleSided: n.side === THREE.DoubleSide,
                        flipSided: n.side === THREE.BackSide
                    },
                    B = [];
                if (c ? B.push(c) : (B.push(n.fragmentShader), B.push(n.vertexShader)), void 0 !== n.defines)
                    for (var k in n.defines) B.push(k), B.push(n.defines[k]);
                for (k in D) B.push(k), B.push(D[k]);
                for (var O, V = B.join(), N = 0, z = Q.length; N < z; N++) {
                    var I = Q[N];
                    if (I.code === V) {
                        O = I, O.usedTimes++;
                        break
                    }
                }
                void 0 === O && (O = new THREE.WebGLProgram(K, V, n, D), Q.push(O), K.info.memory.programs = Q.length), n.program = O;
                var G = O.attributes;
                if (n.morphTargets) {
                    n.numSupportedMorphTargets = 0;
                    for (var j, W = "morphTarget", X = 0; X < K.maxMorphTargets; X++) j = W + X, 0 <= G[j] && n.numSupportedMorphTargets++
                }
                if (n.morphNormals)
                    for (n.numSupportedMorphNormals = 0, W = "morphNormal", X = 0; X < K.maxMorphNormals; X++) j = W + X, 0 <= G[j] && n.numSupportedMorphNormals++;
                n.uniformsList = [];
                for (var q in n.__webglShader.uniforms) {
                    var J = n.program.uniforms[q];
                    J && n.uniformsList.push([n.__webglShader.uniforms[q], J])
                }
                n.needsUpdate = !1
            }
            n.morphTargets && !i.__webglMorphTargetInfluences && (i.__webglMorphTargetInfluences = new Float32Array(K.maxMorphTargets));
            var tt = !1,
                nt = !1,
                it = !1,
                ot = n.program,
                at = ot.uniforms,
                st = n.__webglShader.uniforms;
            if (ot.id !== Z && (Y.useProgram(ot.program), Z = ot.id, it = nt = tt = !0), n.id !== $ && (-1 === $ && (it = !0), $ = n.id, nt = !0), (tt || t !== et) && (Y.uniformMatrix4fv(at.projectionMatrix, !1, t.projectionMatrix.elements), U && Y.uniform1f(at.logDepthBufFC, 2 / (Math.log(t.far + 1) / Math.LN2)), t !== et && (et = t), (n instanceof THREE.ShaderMaterial || n instanceof THREE.MeshPhongMaterial || n.envMap) && null !== at.cameraPosition && (ut.setFromMatrixPosition(t.matrixWorld), Y.uniform3f(at.cameraPosition, ut.x, ut.y, ut.z)), (n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshBasicMaterial || n instanceof THREE.ShaderMaterial || n.skinning) && null !== at.viewMatrix && Y.uniformMatrix4fv(at.viewMatrix, !1, t.matrixWorldInverse.elements)), n.skinning)
                if (i.bindMatrix && null !== at.bindMatrix && Y.uniformMatrix4fv(at.bindMatrix, !1, i.bindMatrix.elements), i.bindMatrixInverse && null !== at.bindMatrixInverse && Y.uniformMatrix4fv(at.bindMatrixInverse, !1, i.bindMatrixInverse.elements), Mt && i.skeleton && i.skeleton.useVertexTexture) {
                    if (null !== at.boneTexture) {
                        var ht = y();
                        Y.uniform1i(at.boneTexture, ht), K.setTexture(i.skeleton.boneTexture, ht)
                    }
                    null !== at.boneTextureWidth && Y.uniform1i(at.boneTextureWidth, i.skeleton.boneTextureWidth), null !== at.boneTextureHeight && Y.uniform1i(at.boneTextureHeight, i.skeleton.boneTextureHeight)
                } else i.skeleton && i.skeleton.boneMatrices && null !== at.boneGlobalMatrices && Y.uniformMatrix4fv(at.boneGlobalMatrices, !1, i.skeleton.boneMatrices);
            if (nt) {
                if (r && n.fog && (st.fogColor.value = r.color, r instanceof THREE.Fog ? (st.fogNear.value = r.near, st.fogFar.value = r.far) : r instanceof THREE.FogExp2 && (st.fogDensity.value = r.density)), n instanceof THREE.MeshPhongMaterial || n instanceof THREE.MeshLambertMaterial || n.lights) {
                    if (pt) {
                        var ct, lt, Et, mt, gt, vt, yt, Tt, it = !0,
                            Rt = 0,
                            xt = 0,
                            Ht = 0,
                            bt = dt,
                            St = bt.directional.colors,
                            At = bt.directional.positions,
                            Ct = bt.point.colors,
                            Lt = bt.point.positions,
                            Ft = bt.point.distances,
                            Dt = bt.point.decays,
                            Bt = bt.spot.colors,
                            kt = bt.spot.positions,
                            Ot = bt.spot.distances,
                            Ut = bt.spot.directions,
                            Vt = bt.spot.anglesCos,
                            zt = bt.spot.exponents,
                            Gt = bt.spot.decays,
                            Wt = bt.hemi.skyColors,
                            Xt = bt.hemi.groundColors,
                            Yt = bt.hemi.positions,
                            Kt = 0,
                            Qt = 0,
                            Zt = 0,
                            Jt = 0,
                            $t = 0,
                            te = 0,
                            ee = 0,
                            re = 0,
                            ne = 0,
                            ie = 0,
                            oe = 0,
                            ae = 0;
                        for (ct = 0, lt = e.length; ct < lt; ct++) Et = e[ct], Et.onlyShadow || (mt = Et.color, yt = Et.intensity, Tt = Et.distance, Et instanceof THREE.AmbientLight ? Et.visible && (Rt += mt.r, xt += mt.g, Ht += mt.b) : Et instanceof THREE.DirectionalLight ? ($t += 1, Et.visible && (ft.setFromMatrixPosition(Et.matrixWorld), ut.setFromMatrixPosition(Et.target.matrixWorld), ft.sub(ut), ft.normalize(), ne = 3 * Kt, At[ne] = ft.x, At[ne + 1] = ft.y, At[ne + 2] = ft.z, R(St, ne, mt, yt), Kt += 1)) : Et instanceof THREE.PointLight ? (te += 1, Et.visible && (ie = 3 * Qt, R(Ct, ie, mt, yt), ut.setFromMatrixPosition(Et.matrixWorld), Lt[ie] = ut.x, Lt[ie + 1] = ut.y, Lt[ie + 2] = ut.z, Ft[Qt] = Tt, Dt[Qt] = 0 === Et.distance ? 0 : Et.decay, Qt += 1)) : Et instanceof THREE.SpotLight ? (ee += 1, Et.visible && (oe = 3 * Zt, R(Bt, oe, mt, yt), ft.setFromMatrixPosition(Et.matrixWorld), kt[oe] = ft.x, kt[oe + 1] = ft.y, kt[oe + 2] = ft.z, Ot[Zt] = Tt, ut.setFromMatrixPosition(Et.target.matrixWorld), ft.sub(ut), ft.normalize(), Ut[oe] = ft.x, Ut[oe + 1] = ft.y, Ut[oe + 2] = ft.z, Vt[Zt] = Math.cos(Et.angle), zt[Zt] = Et.exponent, Gt[Zt] = 0 === Et.distance ? 0 : Et.decay, Zt += 1)) : Et instanceof THREE.HemisphereLight && (re += 1, Et.visible && (ft.setFromMatrixPosition(Et.matrixWorld), ft.normalize(), ae = 3 * Jt, Yt[ae] = ft.x, Yt[ae + 1] = ft.y, Yt[ae + 2] = ft.z, gt = Et.color, vt = Et.groundColor, R(Wt, ae, gt, yt), R(Xt, ae, vt, yt), Jt += 1)));
                        for (ct = 3 * Kt, lt = Math.max(St.length, 3 * $t); ct < lt; ct++) St[ct] = 0;
                        for (ct = 3 * Qt, lt = Math.max(Ct.length, 3 * te); ct < lt; ct++) Ct[ct] = 0;
                        for (ct = 3 * Zt, lt = Math.max(Bt.length, 3 * ee); ct < lt; ct++) Bt[ct] = 0;
                        for (ct = 3 * Jt, lt = Math.max(Wt.length, 3 * re); ct < lt; ct++) Wt[ct] = 0;
                        for (ct = 3 * Jt, lt = Math.max(Xt.length, 3 * re); ct < lt; ct++) Xt[ct] = 0;
                        bt.directional.length = Kt, bt.point.length = Qt, bt.spot.length = Zt, bt.hemi.length = Jt, bt.ambient[0] = Rt, bt.ambient[1] = xt, bt.ambient[2] = Ht, pt = !1
                    }
                    if (it) {
                        var se = dt;
                        st.ambientLightColor.value = se.ambient, st.directionalLightColor.value = se.directional.colors, st.directionalLightDirection.value = se.directional.positions, st.pointLightColor.value = se.point.colors, st.pointLightPosition.value = se.point.positions, st.pointLightDistance.value = se.point.distances, st.pointLightDecay.value = se.point.decays, st.spotLightColor.value = se.spot.colors, st.spotLightPosition.value = se.spot.positions, st.spotLightDistance.value = se.spot.distances, st.spotLightDirection.value = se.spot.directions, st.spotLightAngleCos.value = se.spot.anglesCos, st.spotLightExponent.value = se.spot.exponents, st.spotLightDecay.value = se.spot.decays, st.hemisphereLightSkyColor.value = se.hemi.skyColors, st.hemisphereLightGroundColor.value = se.hemi.groundColors, st.hemisphereLightDirection.value = se.hemi.positions, v(st, !0)
                    } else v(st, !1)
                }
                if (n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial) {
                    st.opacity.value = n.opacity, st.diffuse.value = n.color, st.map.value = n.map, st.lightMap.value = n.lightMap, st.specularMap.value = n.specularMap, st.alphaMap.value = n.alphaMap, n.bumpMap && (st.bumpMap.value = n.bumpMap, st.bumpScale.value = n.bumpScale), n.normalMap && (st.normalMap.value = n.normalMap, st.normalScale.value.copy(n.normalScale));
                    var he;
                    if (n.map ? he = n.map : n.specularMap ? he = n.specularMap : n.normalMap ? he = n.normalMap : n.bumpMap ? he = n.bumpMap : n.alphaMap && (he = n.alphaMap), void 0 !== he) {
                        var ce = he.offset,
                            le = he.repeat;
                        st.offsetRepeat.value.set(ce.x, ce.y, le.x, le.y)
                    }
                    st.envMap.value = n.envMap, st.flipEnvMap.value = n.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1, st.reflectivity.value = n.reflectivity, st.refractionRatio.value = n.refractionRatio
                }
                if (n instanceof THREE.LineBasicMaterial) st.diffuse.value = n.color, st.opacity.value = n.opacity;
                else if (n instanceof THREE.LineDashedMaterial) st.diffuse.value = n.color, st.opacity.value = n.opacity, st.dashSize.value = n.dashSize, st.totalSize.value = n.dashSize + n.gapSize, st.scale.value = n.scale;
                else if (n instanceof THREE.PointCloudMaterial) {
                    if (st.psColor.value = n.color, st.opacity.value = n.opacity, st.size.value = n.size, st.scale.value = S.height / 2, st.map.value = n.map, null !== n.map) {
                        var ue = n.map.offset,
                            fe = n.map.repeat;
                        st.offsetRepeat.value.set(ue.x, ue.y, fe.x, fe.y)
                    }
                } else n instanceof THREE.MeshPhongMaterial ? (st.shininess.value = n.shininess, st.emissive.value = n.emissive, st.specular.value = n.specular, n.wrapAround && st.wrapRGB.value.copy(n.wrapRGB)) : n instanceof THREE.MeshLambertMaterial ? (st.emissive.value = n.emissive, n.wrapAround && st.wrapRGB.value.copy(n.wrapRGB)) : n instanceof THREE.MeshDepthMaterial ? (st.mNear.value = t.near, st.mFar.value = t.far, st.opacity.value = n.opacity) : n instanceof THREE.MeshNormalMaterial && (st.opacity.value = n.opacity);
                if (i.receiveShadow && !n._shadowPass && st.shadowMatrix)
                    for (var pe = 0, de = 0, Ee = e.length; de < Ee; de++) {
                        var me = e[de];
                        me.castShadow && (me instanceof THREE.SpotLight || me instanceof THREE.DirectionalLight && !me.shadowCascade) && (st.shadowMap.value[pe] = me.shadowMap, st.shadowMapSize.value[pe] = me.shadowMapSize, st.shadowMatrix.value[pe] = me.shadowMatrix, st.shadowDarkness.value[pe] = me.shadowDarkness, st.shadowBias.value[pe] = me.shadowBias, pe++)
                    }
                for (var ge, ve, ye, Te = n.uniformsList, Re = 0, xe = Te.length; Re < xe; Re++) {
                    var He = Te[Re][0];
                    if (!1 !== He.needsUpdate) {
                        var be = He.type,
                            _e = He.value,
                            we = Te[Re][1];
                        switch (be) {
                            case "1i":
                                Y.uniform1i(we, _e);
                                break;
                            case "1f":
                                Y.uniform1f(we, _e);
                                break;
                            case "2f":
                                Y.uniform2f(we, _e[0], _e[1]);
                                break;
                            case "3f":
                                Y.uniform3f(we, _e[0], _e[1], _e[2]);
                                break;
                            case "4f":
                                Y.uniform4f(we, _e[0], _e[1], _e[2], _e[3]);
                                break;
                            case "1iv":
                                Y.uniform1iv(we, _e);
                                break;
                            case "3iv":
                                Y.uniform3iv(we, _e);
                                break;
                            case "1fv":
                                Y.uniform1fv(we, _e);
                                break;
                            case "2fv":
                                Y.uniform2fv(we, _e);
                                break;
                            case "3fv":
                                Y.uniform3fv(we, _e);
                                break;
                            case "4fv":
                                Y.uniform4fv(we, _e);
                                break;
                            case "Matrix3fv":
                                Y.uniformMatrix3fv(we, !1, _e);
                                break;
                            case "Matrix4fv":
                                Y.uniformMatrix4fv(we, !1, _e);
                                break;
                            case "i":
                                Y.uniform1i(we, _e);
                                break;
                            case "f":
                                Y.uniform1f(we, _e);
                                break;
                            case "v2":
                                Y.uniform2f(we, _e.x, _e.y);
                                break;
                            case "v3":
                                Y.uniform3f(we, _e.x, _e.y, _e.z);
                                break;
                            case "v4":
                                Y.uniform4f(we, _e.x, _e.y, _e.z, _e.w);
                                break;
                            case "c":
                                Y.uniform3f(we, _e.r, _e.g, _e.b);
                                break;
                            case "iv1":
                                Y.uniform1iv(we, _e);
                                break;
                            case "iv":
                                Y.uniform3iv(we, _e);
                                break;
                            case "fv1":
                                Y.uniform1fv(we, _e);
                                break;
                            case "fv":
                                Y.uniform3fv(we, _e);
                                break;
                            case "v2v":
                                void 0 === He._array && (He._array = new Float32Array(2 * _e.length));
                                for (var Me = 0, Se = _e.length; Me < Se; Me++) ye = 2 * Me, He._array[ye] = _e[Me].x, He._array[ye + 1] = _e[Me].y;
                                Y.uniform2fv(we, He._array);
                                break;
                            case "v3v":
                                for (void 0 === He._array && (He._array = new Float32Array(3 * _e.length)), Me = 0, Se = _e.length; Me < Se; Me++) ye = 3 * Me, He._array[ye] = _e[Me].x, He._array[ye + 1] = _e[Me].y, He._array[ye + 2] = _e[Me].z;
                                Y.uniform3fv(we, He._array);
                                break;
                            case "v4v":
                                for (void 0 === He._array && (He._array = new Float32Array(4 * _e.length)), Me = 0, Se = _e.length; Me < Se; Me++) ye = 4 * Me, He._array[ye] = _e[Me].x, He._array[ye + 1] = _e[Me].y, He._array[ye + 2] = _e[Me].z, He._array[ye + 3] = _e[Me].w;
                                Y.uniform4fv(we, He._array);
                                break;
                            case "m3":
                                Y.uniformMatrix3fv(we, !1, _e.elements);
                                break;
                            case "m3v":
                                for (void 0 === He._array && (He._array = new Float32Array(9 * _e.length)), Me = 0, Se = _e.length; Me < Se; Me++) _e[Me].flattenToArrayOffset(He._array, 9 * Me);
                                Y.uniformMatrix3fv(we, !1, He._array);
                                break;
                            case "m4":
                                Y.uniformMatrix4fv(we, !1, _e.elements);
                                break;
                            case "m4v":
                                for (void 0 === He._array && (He._array = new Float32Array(16 * _e.length)), Me = 0, Se = _e.length; Me < Se; Me++) _e[Me].flattenToArrayOffset(He._array, 16 * Me);
                                Y.uniformMatrix4fv(we, !1, He._array);
                                break;
                            case "t":
                                if (ge = _e, ve = y(), Y.uniform1i(we, ve), !ge) continue;
                                if (ge instanceof THREE.CubeTexture || ge.image instanceof Array && 6 === ge.image.length) {
                                    var Ae = ge,
                                        Ce = ve;
                                    if (6 === Ae.image.length)
                                        if (Ae.needsUpdate) {
                                            Ae.image.__webglTextureCube || (Ae.addEventListener("dispose", Nt), Ae.image.__webglTextureCube = Y.createTexture(), K.info.memory.textures++), Y.activeTexture(Y.TEXTURE0 + Ce), Y.bindTexture(Y.TEXTURE_CUBE_MAP, Ae.image.__webglTextureCube), Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL, Ae.flipY);
                                            for (var Le = Ae instanceof THREE.CompressedTexture, Pe = Ae.image[0] instanceof THREE.DataTexture, Fe = [], De = 0; 6 > De; De++) Fe[De] = !K.autoScaleCubemaps || Le || Pe ? Pe ? Ae.image[De].image : Ae.image[De] : H(Ae.image[De], _t);
                                            var Be = Fe[0],
                                                ke = THREE.Math.isPowerOfTwo(Be.width) && THREE.Math.isPowerOfTwo(Be.height),
                                                Oe = M(Ae.format),
                                                Ue = M(Ae.type);
                                            for (x(Y.TEXTURE_CUBE_MAP, Ae, ke), De = 0; 6 > De; De++)
                                                if (Le)
                                                    for (var Ve, Ne = Fe[De].mipmaps, ze = 0, Ie = Ne.length; ze < Ie; ze++) Ve = Ne[ze], Ae.format !== THREE.RGBAFormat && Ae.format !== THREE.RGBFormat ? -1 < Pt().indexOf(Oe) ? Y.compressedTexImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X + De, ze, Oe, Ve.width, Ve.height, 0, Ve.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X + De, ze, Oe, Ve.width, Ve.height, 0, Oe, Ue, Ve.data);
                                                else Pe ? Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, Oe, Fe[De].width, Fe[De].height, 0, Oe, Ue, Fe[De].data) : Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X + De, 0, Oe, Oe, Ue, Fe[De]);
                                            Ae.generateMipmaps && ke && Y.generateMipmap(Y.TEXTURE_CUBE_MAP), Ae.needsUpdate = !1, Ae.onUpdate && Ae.onUpdate()
                                        } else Y.activeTexture(Y.TEXTURE0 + Ce), Y.bindTexture(Y.TEXTURE_CUBE_MAP, Ae.image.__webglTextureCube)
                                } else if (ge instanceof THREE.WebGLRenderTargetCube) {
                                    var Ge = ge;
                                    Y.activeTexture(Y.TEXTURE0 + ve), Y.bindTexture(Y.TEXTURE_CUBE_MAP, Ge.__webglTexture)
                                } else K.setTexture(ge, ve);
                                break;
                            case "tv":
                                for (void 0 === He._array && (He._array = []), Me = 0, Se = He.value.length; Me < Se; Me++) He._array[Me] = y();
                                for (Y.uniform1iv(we, He._array), Me = 0, Se = He.value.length; Me < Se; Me++) ge = He.value[Me], ve = He._array[Me], ge && K.setTexture(ge, ve);
                                break;
                            default:
                                THREE.warn("THREE.WebGLRenderer: Unknown uniform type: " + be)
                        }
                    }
                }
            }
            return Y.uniformMatrix4fv(at.modelViewMatrix, !1, i._modelViewMatrix.elements), at.normalMatrix && Y.uniformMatrix3fv(at.normalMatrix, !1, i._normalMatrix.elements), null !== at.modelMatrix && Y.uniformMatrix4fv(at.modelMatrix, !1, i.matrixWorld.elements), ot
        }

        function v(t, e) {
            t.ambientLightColor.needsUpdate = e, t.directionalLightColor.needsUpdate = e, t.directionalLightDirection.needsUpdate = e, t.pointLightColor.needsUpdate = e, t.pointLightPosition.needsUpdate = e, t.pointLightDistance.needsUpdate = e, t.pointLightDecay.needsUpdate = e, t.spotLightColor.needsUpdate = e, t.spotLightPosition.needsUpdate = e, t.spotLightDistance.needsUpdate = e, t.spotLightDirection.needsUpdate = e, t.spotLightAngleCos.needsUpdate = e, t.spotLightExponent.needsUpdate = e, t.spotLightDecay.needsUpdate = e, t.hemisphereLightSkyColor.needsUpdate = e, t.hemisphereLightGroundColor.needsUpdate = e, t.hemisphereLightDirection.needsUpdate = e
        }

        function y() {
            var t = rt;
            return t >= xt && THREE.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + xt), rt += 1, t
        }

        function T(t, e) {
            t._modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, t.matrixWorld), t._normalMatrix.getNormalMatrix(t._modelViewMatrix)
        }

        function R(t, e, r, n) {
            t[e] = r.r * n, t[e + 1] = r.g * n, t[e + 2] = r.b * n
        }

        function x(t, e, r) {
            r ? (Y.texParameteri(t, Y.TEXTURE_WRAP_S, M(e.wrapS)), Y.texParameteri(t, Y.TEXTURE_WRAP_T, M(e.wrapT)), Y.texParameteri(t, Y.TEXTURE_MAG_FILTER, M(e.magFilter)), Y.texParameteri(t, Y.TEXTURE_MIN_FILTER, M(e.minFilter))) : (Y.texParameteri(t, Y.TEXTURE_WRAP_S, Y.CLAMP_TO_EDGE), Y.texParameteri(t, Y.TEXTURE_WRAP_T, Y.CLAMP_TO_EDGE), e.wrapS === THREE.ClampToEdgeWrapping && e.wrapT === THREE.ClampToEdgeWrapping || THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + e.sourceFile + " )"), Y.texParameteri(t, Y.TEXTURE_MAG_FILTER, w(e.magFilter)), Y.texParameteri(t, Y.TEXTURE_MIN_FILTER, w(e.minFilter)), e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter && THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + e.sourceFile + " )")), (r = vt.get("EXT_texture_filter_anisotropic")) && e.type !== THREE.FloatType && e.type !== THREE.HalfFloatType && (1 < e.anisotropy || e.__currentAnisotropy) && (Y.texParameterf(t, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropy, K.getMaxAnisotropy())), e.__currentAnisotropy = e.anisotropy)
        }

        function H(t, e) {
            if (t.width > e || t.height > e) {
                var r = e / Math.max(t.width, t.height),
                    n = document.createElement("canvas");
                return n.width = Math.floor(t.width * r), n.height = Math.floor(t.height * r), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), THREE.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height, t), n
            }
            return t
        }

        function b(t, e) {
            Y.bindRenderbuffer(Y.RENDERBUFFER, t), e.depthBuffer && !e.stencilBuffer ? (Y.renderbufferStorage(Y.RENDERBUFFER, Y.DEPTH_COMPONENT16, e.width, e.height), Y.framebufferRenderbuffer(Y.FRAMEBUFFER, Y.DEPTH_ATTACHMENT, Y.RENDERBUFFER, t)) : e.depthBuffer && e.stencilBuffer ? (Y.renderbufferStorage(Y.RENDERBUFFER, Y.DEPTH_STENCIL, e.width, e.height), Y.framebufferRenderbuffer(Y.FRAMEBUFFER, Y.DEPTH_STENCIL_ATTACHMENT, Y.RENDERBUFFER, t)) : Y.renderbufferStorage(Y.RENDERBUFFER, Y.RGBA4, e.width, e.height)
        }

        function _(t) {
            t instanceof THREE.WebGLRenderTargetCube ? (Y.bindTexture(Y.TEXTURE_CUBE_MAP, t.__webglTexture), Y.generateMipmap(Y.TEXTURE_CUBE_MAP), Y.bindTexture(Y.TEXTURE_CUBE_MAP, null)) : (Y.bindTexture(Y.TEXTURE_2D, t.__webglTexture), Y.generateMipmap(Y.TEXTURE_2D), Y.bindTexture(Y.TEXTURE_2D, null))
        }

        function w(t) {
            return t === THREE.NearestFilter || t === THREE.NearestMipMapNearestFilter || t === THREE.NearestMipMapLinearFilter ? Y.NEAREST : Y.LINEAR
        }

        function M(t) {
            var e;
            if (t === THREE.RepeatWrapping) return Y.REPEAT;
            if (t === THREE.ClampToEdgeWrapping) return Y.CLAMP_TO_EDGE;
            if (t === THREE.MirroredRepeatWrapping) return Y.MIRRORED_REPEAT;
            if (t === THREE.NearestFilter) return Y.NEAREST;
            if (t === THREE.NearestMipMapNearestFilter) return Y.NEAREST_MIPMAP_NEAREST;
            if (t === THREE.NearestMipMapLinearFilter) return Y.NEAREST_MIPMAP_LINEAR;
            if (t === THREE.LinearFilter) return Y.LINEAR;
            if (t === THREE.LinearMipMapNearestFilter) return Y.LINEAR_MIPMAP_NEAREST;
            if (t === THREE.LinearMipMapLinearFilter) return Y.LINEAR_MIPMAP_LINEAR;
            if (t === THREE.UnsignedByteType) return Y.UNSIGNED_BYTE;
            if (t === THREE.UnsignedShort4444Type) return Y.UNSIGNED_SHORT_4_4_4_4;
            if (t === THREE.UnsignedShort5551Type) return Y.UNSIGNED_SHORT_5_5_5_1;
            if (t === THREE.UnsignedShort565Type) return Y.UNSIGNED_SHORT_5_6_5;
            if (t === THREE.ByteType) return Y.BYTE;
            if (t === THREE.ShortType) return Y.SHORT;
            if (t === THREE.UnsignedShortType) return Y.UNSIGNED_SHORT;
            if (t === THREE.IntType) return Y.INT;
            if (t === THREE.UnsignedIntType) return Y.UNSIGNED_INT;
            if (t === THREE.FloatType) return Y.FLOAT;
            if (e = vt.get("OES_texture_half_float"), null !== e && t === THREE.HalfFloatType) return e.HALF_FLOAT_OES;
            if (t === THREE.AlphaFormat) return Y.ALPHA;
            if (t === THREE.RGBFormat) return Y.RGB;
            if (t === THREE.RGBAFormat) return Y.RGBA;
            if (t === THREE.LuminanceFormat) return Y.LUMINANCE;
            if (t === THREE.LuminanceAlphaFormat) return Y.LUMINANCE_ALPHA;
            if (t === THREE.AddEquation) return Y.FUNC_ADD;
            if (t === THREE.SubtractEquation) return Y.FUNC_SUBTRACT;
            if (t === THREE.ReverseSubtractEquation) return Y.FUNC_REVERSE_SUBTRACT;
            if (t === THREE.ZeroFactor) return Y.ZERO;
            if (t === THREE.OneFactor) return Y.ONE;
            if (t === THREE.SrcColorFactor) return Y.SRC_COLOR;
            if (t === THREE.OneMinusSrcColorFactor) return Y.ONE_MINUS_SRC_COLOR;
            if (t === THREE.SrcAlphaFactor) return Y.SRC_ALPHA;
            if (t === THREE.OneMinusSrcAlphaFactor) return Y.ONE_MINUS_SRC_ALPHA;
            if (t === THREE.DstAlphaFactor) return Y.DST_ALPHA;
            if (t === THREE.OneMinusDstAlphaFactor) return Y.ONE_MINUS_DST_ALPHA;
            if (t === THREE.DstColorFactor) return Y.DST_COLOR;
            if (t === THREE.OneMinusDstColorFactor) return Y.ONE_MINUS_DST_COLOR;
            if (t === THREE.SrcAlphaSaturateFactor) return Y.SRC_ALPHA_SATURATE;
            if (e = vt.get("WEBGL_compressed_texture_s3tc"), null !== e) {
                if (t === THREE.RGB_S3TC_DXT1_Format) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === THREE.RGBA_S3TC_DXT1_Format) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === THREE.RGBA_S3TC_DXT3_Format) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === THREE.RGBA_S3TC_DXT5_Format) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (e = vt.get("WEBGL_compressed_texture_pvrtc"), null !== e) {
                if (t === THREE.RGB_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === THREE.RGB_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === THREE.RGBA_PVRTC_4BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === THREE.RGBA_PVRTC_2BPPV1_Format) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (e = vt.get("EXT_blend_minmax"), null !== e) {
                if (t === THREE.MinEquation) return e.MIN_EXT;
                if (t === THREE.MaxEquation) return e.MAX_EXT
            }
            return 0
        }
        console.log("THREE.WebGLRenderer", THREE.REVISION), t = t || {};
        var S = void 0 !== t.canvas ? t.canvas : document.createElement("canvas"),
            A = void 0 !== t.context ? t.context : null,
            C = 1,
            L = void 0 !== t.precision ? t.precision : "highp",
            P = void 0 !== t.alpha && t.alpha,
            F = void 0 === t.depth || t.depth,
            D = void 0 === t.stencil || t.stencil,
            B = void 0 !== t.antialias && t.antialias,
            k = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            O = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            U = void 0 !== t.logarithmicDepthBuffer && t.logarithmicDepthBuffer,
            V = new THREE.Color(0),
            N = 0,
            z = [],
            I = {},
            G = [],
            j = [],
            W = [],
            X = [],
            q = [];
        this.domElement = S, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.gammaFactor = 2, this.shadowMapEnabled = this.gammaOutput = this.gammaInput = !1, this.shadowMapType = THREE.PCFShadowMap, this.shadowMapCullFace = THREE.CullFaceFront, this.shadowMapCascade = this.shadowMapDebug = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.info = {
            memory: {
                programs: 0,
                geometries: 0,
                textures: 0
            },
            render: {
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            }
        };
        var Y, K = this,
            Q = [],
            Z = null,
            J = null,
            $ = -1,
            tt = "",
            et = null,
            rt = 0,
            nt = 0,
            it = 0,
            ot = S.width,
            at = S.height,
            st = 0,
            ht = 0,
            ct = new THREE.Frustum,
            lt = new THREE.Matrix4,
            ut = new THREE.Vector3,
            ft = new THREE.Vector3,
            pt = !0,
            dt = {
                ambient: [0, 0, 0],
                directional: {
                    length: 0,
                    colors: [],
                    positions: []
                },
                point: {
                    length: 0,
                    colors: [],
                    positions: [],
                    distances: [],
                    decays: []
                },
                spot: {
                    length: 0,
                    colors: [],
                    positions: [],
                    distances: [],
                    directions: [],
                    anglesCos: [],
                    exponents: [],
                    decays: []
                },
                hemi: {
                    length: 0,
                    skyColors: [],
                    groundColors: [],
                    positions: []
                }
            };
        try {
            var Et = {
                alpha: P,
                depth: F,
                stencil: D,
                antialias: B,
                premultipliedAlpha: k,
                preserveDrawingBuffer: O
            };
            if (Y = A || S.getContext("webgl", Et) || S.getContext("experimental-webgl", Et), null === Y) {
                if (null !== S.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context."
            }
            S.addEventListener("webglcontextlost", function(t) {
                t.preventDefault(), Rt(), Tt(), I = {}
            }, !1)
        } catch (mt) {
            THREE.error("THREE.WebGLRenderer: " + mt)
        }
        var gt = new THREE.WebGLState(Y, M);
        void 0 === Y.getShaderPrecisionFormat && (Y.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        });
        var vt = new THREE.WebGLExtensions(Y);
        vt.get("OES_texture_float"), vt.get("OES_texture_float_linear"), vt.get("OES_texture_half_float"), vt.get("OES_texture_half_float_linear"), vt.get("OES_standard_derivatives"), U && vt.get("EXT_frag_depth");
        var yt = function(t, e, r, n) {
                !0 === k && (t *= n, e *= n, r *= n), Y.clearColor(t, e, r, n)
            },
            Tt = function() {
                Y.clearColor(0, 0, 0, 1), Y.clearDepth(1), Y.clearStencil(0), Y.enable(Y.DEPTH_TEST), Y.depthFunc(Y.LEQUAL), Y.frontFace(Y.CCW), Y.cullFace(Y.BACK), Y.enable(Y.CULL_FACE), Y.enable(Y.BLEND), Y.blendEquation(Y.FUNC_ADD), Y.blendFunc(Y.SRC_ALPHA, Y.ONE_MINUS_SRC_ALPHA), Y.viewport(nt, it, ot, at), yt(V.r, V.g, V.b, N)
            },
            Rt = function() {
                et = Z = null, tt = "", $ = -1, pt = !0, gt.reset()
            };
        Tt(), this.context = Y, this.state = gt;
        var xt = Y.getParameter(Y.MAX_TEXTURE_IMAGE_UNITS),
            Ht = Y.getParameter(Y.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            bt = Y.getParameter(Y.MAX_TEXTURE_SIZE),
            _t = Y.getParameter(Y.MAX_CUBE_MAP_TEXTURE_SIZE),
            wt = 0 < Ht,
            Mt = wt && vt.get("OES_texture_float"),
            St = Y.getShaderPrecisionFormat(Y.VERTEX_SHADER, Y.HIGH_FLOAT),
            At = Y.getShaderPrecisionFormat(Y.VERTEX_SHADER, Y.MEDIUM_FLOAT),
            Ct = Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER, Y.HIGH_FLOAT),
            Lt = Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER, Y.MEDIUM_FLOAT),
            Pt = function() {
                var t;
                return function() {
                    if (void 0 !== t) return t;
                    if (t = [], vt.get("WEBGL_compressed_texture_pvrtc") || vt.get("WEBGL_compressed_texture_s3tc"))
                        for (var e = Y.getParameter(Y.COMPRESSED_TEXTURE_FORMATS), r = 0; r < e.length; r++) t.push(e[r]);
                    return t
                }
            }(),
            Ft = 0 < St.precision && 0 < Ct.precision,
            Dt = 0 < At.precision && 0 < Lt.precision;
        "highp" !== L || Ft || (Dt ? (L = "mediump", THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (L = "lowp", THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp."))), "mediump" !== L || Dt || (L = "lowp", THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
        var Bt = new THREE.ShadowMapPlugin(this, z, I, G),
            kt = new THREE.SpritePlugin(this, X),
            Ot = new THREE.LensFlarePlugin(this, q);
        this.getContext = function() {
            return Y
        }, this.forceContextLoss = function() {
            vt.get("WEBGL_lose_context").loseContext()
        }, this.supportsVertexTextures = function() {
            return wt
        }, this.supportsFloatTextures = function() {
            return vt.get("OES_texture_float")
        }, this.supportsHalfFloatTextures = function() {
            return vt.get("OES_texture_half_float")
        }, this.supportsStandardDerivatives = function() {
            return vt.get("OES_standard_derivatives")
        }, this.supportsCompressedTextureS3TC = function() {
            return vt.get("WEBGL_compressed_texture_s3tc")
        }, this.supportsCompressedTexturePVRTC = function() {
            return vt.get("WEBGL_compressed_texture_pvrtc")
        }, this.supportsBlendMinMax = function() {
            return vt.get("EXT_blend_minmax")
        }, this.getMaxAnisotropy = function() {
            var t;
            return function() {
                if (void 0 !== t) return t;
                var e = vt.get("EXT_texture_filter_anisotropic");
                return t = null !== e ? Y.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
        }(), this.getPrecision = function() {
            return L
        }, this.getPixelRatio = function() {
            return C
        }, this.setPixelRatio = function(t) {
            C = t
        }, this.setSize = function(t, e, r) {
            S.width = t * C, S.height = e * C, !1 !== r && (S.style.width = t + "px", S.style.height = e + "px"), this.setViewport(0, 0, t, e)
        }, this.setViewport = function(t, e, r, n) {
            nt = t * C, it = e * C, ot = r * C, at = n * C, Y.viewport(nt, it, ot, at)
        }, this.setScissor = function(t, e, r, n) {
            Y.scissor(t * C, e * C, r * C, n * C)
        }, this.enableScissorTest = function(t) {
            t ? Y.enable(Y.SCISSOR_TEST) : Y.disable(Y.SCISSOR_TEST)
        }, this.getClearColor = function() {
            return V
        }, this.setClearColor = function(t, e) {
            V.set(t), N = void 0 !== e ? e : 1, yt(V.r, V.g, V.b, N)
        }, this.getClearAlpha = function() {
            return N
        }, this.setClearAlpha = function(t) {
            N = t, yt(V.r, V.g, V.b, N)
        }, this.clear = function(t, e, r) {
            var n = 0;
            (void 0 === t || t) && (n |= Y.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= Y.DEPTH_BUFFER_BIT), (void 0 === r || r) && (n |= Y.STENCIL_BUFFER_BIT), Y.clear(n)
        }, this.clearColor = function() {
            Y.clear(Y.COLOR_BUFFER_BIT)
        }, this.clearDepth = function() {
            Y.clear(Y.DEPTH_BUFFER_BIT)
        }, this.clearStencil = function() {
            Y.clear(Y.STENCIL_BUFFER_BIT)
        }, this.clearTarget = function(t, e, r, n) {
            this.setRenderTarget(t), this.clear(e, r, n)
        }, this.resetGLState = Rt;
        var Ut = function(t) {
                t.target.traverse(function(t) {
                    if (t.removeEventListener("remove", Ut), t instanceof THREE.Mesh || t instanceof THREE.PointCloud || t instanceof THREE.Line) delete I[t.id];
                    else if (t instanceof THREE.ImmediateRenderObject || t.immediateRenderCallback)
                        for (var e = G, r = e.length - 1; 0 <= r; r--) e[r].object === t && e.splice(r, 1);
                    delete t.__webglInit, delete t._modelViewMatrix, delete t._normalMatrix, delete t.__webglActive
                })
            },
            Vt = function(t) {
                if (t = t.target, t.removeEventListener("dispose", Vt), delete t.__webglInit, t instanceof THREE.BufferGeometry) {
                    for (var e in t.attributes) {
                        var r = t.attributes[e];
                        void 0 !== r.buffer && (Y.deleteBuffer(r.buffer), delete r.buffer)
                    }
                    K.info.memory.geometries--
                } else if (e = Wt[t.id], void 0 !== e) {
                    for (var r = 0, n = e.length; r < n; r++) {
                        var i = e[r];
                        if (void 0 !== i.numMorphTargets) {
                            for (var o = 0, a = i.numMorphTargets; o < a; o++) Y.deleteBuffer(i.__webglMorphTargetsBuffers[o]);
                            delete i.__webglMorphTargetsBuffers
                        }
                        if (void 0 !== i.numMorphNormals) {
                            for (o = 0, a = i.numMorphNormals; o < a; o++) Y.deleteBuffer(i.__webglMorphNormalsBuffers[o]);
                            delete i.__webglMorphNormalsBuffers
                        }
                        Gt(i)
                    }
                    delete Wt[t.id]
                } else Gt(t);
                tt = ""
            },
            Nt = function(t) {
                t = t.target, t.removeEventListener("dispose", Nt), t.image && t.image.__webglTextureCube ? (Y.deleteTexture(t.image.__webglTextureCube), delete t.image.__webglTextureCube) : void 0 !== t.__webglInit && (Y.deleteTexture(t.__webglTexture), delete t.__webglTexture, delete t.__webglInit), K.info.memory.textures--
            },
            zt = function(t) {
                if (t = t.target, t.removeEventListener("dispose", zt), t && void 0 !== t.__webglTexture) {
                    if (Y.deleteTexture(t.__webglTexture), delete t.__webglTexture, t instanceof THREE.WebGLRenderTargetCube)
                        for (var e = 0; 6 > e; e++) Y.deleteFramebuffer(t.__webglFramebuffer[e]), Y.deleteRenderbuffer(t.__webglRenderbuffer[e]);
                    else Y.deleteFramebuffer(t.__webglFramebuffer), Y.deleteRenderbuffer(t.__webglRenderbuffer);
                    delete t.__webglFramebuffer, delete t.__webglRenderbuffer
                }
                K.info.memory.textures--
            },
            It = function(t) {
                t = t.target, t.removeEventListener("dispose", It), jt(t)
            },
            Gt = function(t) {
                for (var e = "__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "), r = 0, n = e.length; r < n; r++) {
                    var i = e[r];
                    void 0 !== t[i] && (Y.deleteBuffer(t[i]), delete t[i])
                }
                if (void 0 !== t.__webglCustomAttributesList) {
                    for (i in t.__webglCustomAttributesList) Y.deleteBuffer(t.__webglCustomAttributesList[i].buffer);
                    delete t.__webglCustomAttributesList
                }
                K.info.memory.geometries--
            },
            jt = function(t) {
                var e = t.program.program;
                if (void 0 !== e) {
                    t.program = void 0;
                    var r, n, i = !1;
                    for (t = 0, r = Q.length; t < r; t++)
                        if (n = Q[t], n.program === e) {
                            n.usedTimes--, 0 === n.usedTimes && (i = !0);
                            break
                        }
                    if (!0 === i) {
                        for (i = [], t = 0, r = Q.length; t < r; t++) n = Q[t], n.program !== e && i.push(n);
                        Q = i, Y.deleteProgram(e), K.info.memory.programs--
                    }
                }
            };
        this.renderBufferImmediate = function(t, e, r) {
            if (gt.initAttributes(), t.hasPositions && !t.__webglVertexBuffer && (t.__webglVertexBuffer = Y.createBuffer()), t.hasNormals && !t.__webglNormalBuffer && (t.__webglNormalBuffer = Y.createBuffer()), t.hasUvs && !t.__webglUvBuffer && (t.__webglUvBuffer = Y.createBuffer()), t.hasColors && !t.__webglColorBuffer && (t.__webglColorBuffer = Y.createBuffer()), t.hasPositions && (Y.bindBuffer(Y.ARRAY_BUFFER, t.__webglVertexBuffer), Y.bufferData(Y.ARRAY_BUFFER, t.positionArray, Y.DYNAMIC_DRAW), gt.enableAttribute(e.attributes.position), Y.vertexAttribPointer(e.attributes.position, 3, Y.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (Y.bindBuffer(Y.ARRAY_BUFFER, t.__webglNormalBuffer), !1 == r instanceof THREE.MeshPhongMaterial && r.shading === THREE.FlatShading) {
                    var n, i, o, a, s, h, c, l, u, f, p, d = 3 * t.count;
                    for (p = 0; p < d; p += 9) f = t.normalArray, n = f[p], i = f[p + 1], o = f[p + 2], a = f[p + 3], h = f[p + 4], l = f[p + 5], s = f[p + 6], c = f[p + 7], u = f[p + 8], n = (n + a + s) / 3, i = (i + h + c) / 3, o = (o + l + u) / 3, f[p] = n, f[p + 1] = i, f[p + 2] = o, f[p + 3] = n, f[p + 4] = i, f[p + 5] = o, f[p + 6] = n, f[p + 7] = i, f[p + 8] = o
                }
                Y.bufferData(Y.ARRAY_BUFFER, t.normalArray, Y.DYNAMIC_DRAW), gt.enableAttribute(e.attributes.normal), Y.vertexAttribPointer(e.attributes.normal, 3, Y.FLOAT, !1, 0, 0)
            }
            t.hasUvs && r.map && (Y.bindBuffer(Y.ARRAY_BUFFER, t.__webglUvBuffer), Y.bufferData(Y.ARRAY_BUFFER, t.uvArray, Y.DYNAMIC_DRAW), gt.enableAttribute(e.attributes.uv), Y.vertexAttribPointer(e.attributes.uv, 2, Y.FLOAT, !1, 0, 0)), t.hasColors && r.vertexColors !== THREE.NoColors && (Y.bindBuffer(Y.ARRAY_BUFFER, t.__webglColorBuffer), Y.bufferData(Y.ARRAY_BUFFER, t.colorArray, Y.DYNAMIC_DRAW), gt.enableAttribute(e.attributes.color), Y.vertexAttribPointer(e.attributes.color, 3, Y.FLOAT, !1, 0, 0)), gt.disableUnusedAttributes(), Y.drawArrays(Y.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function(t, e, r, i, o, a) {
            if (!1 !== i.visible)
                if (p(a), t = g(t, e, r, i, a), e = !1, r = "direct_" + o.id + "_" + t.id + "_" + (i.wireframe ? 1 : 0), r !== tt && (tt = r, e = !0), e && gt.initAttributes(), a instanceof THREE.Mesh) {
                    a = !0 === i.wireframe ? Y.LINES : Y.TRIANGLES;
                    var s = o.attributes.index;
                    if (s) {
                        var h, c;
                        if (s.array instanceof Uint32Array && vt.get("OES_element_index_uint") ? (h = Y.UNSIGNED_INT, c = 4) : (h = Y.UNSIGNED_SHORT, c = 2), r = o.offsets, 0 === r.length) e && (n(i, t, o, 0), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, s.array.length, h, 0), K.info.render.calls++, K.info.render.vertices += s.array.length, K.info.render.faces += s.array.length / 3;
                        else {
                            e = !0;
                            for (var l = 0, u = r.length; l < u; l++) {
                                var f = r[l].index;
                                e && (n(i, t, o, f), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, r[l].count, h, r[l].start * c), K.info.render.calls++, K.info.render.vertices += r[l].count, K.info.render.faces += r[l].count / 3
                            }
                        }
                    } else e && n(i, t, o, 0), i = o.attributes.position, Y.drawArrays(a, 0, i.array.length / i.itemSize), K.info.render.calls++, K.info.render.vertices += i.array.length / i.itemSize, K.info.render.faces += i.array.length / (3 * i.itemSize)
                } else if (a instanceof THREE.PointCloud)
                if (a = Y.POINTS, s = o.attributes.index)
                    if (s.array instanceof Uint32Array && vt.get("OES_element_index_uint") ? (h = Y.UNSIGNED_INT, c = 4) : (h = Y.UNSIGNED_SHORT, c = 2), r = o.offsets, 0 === r.length) e && (n(i, t, o, 0), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, s.array.length, h, 0), K.info.render.calls++, K.info.render.points += s.array.length;
                    else
                        for (1 < r.length && (e = !0), l = 0, u = r.length; l < u; l++) f = r[l].index, e && (n(i, t, o, f), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, r[l].count, h, r[l].start * c), K.info.render.calls++, K.info.render.points += r[l].count;
            else if (e && n(i, t, o, 0),
                i = o.attributes.position, r = o.offsets, 0 === r.length) Y.drawArrays(a, 0, i.array.length / 3), K.info.render.calls++, K.info.render.points += i.array.length / 3;
            else
                for (l = 0, u = r.length; l < u; l++) Y.drawArrays(a, r[l].index, r[l].count), K.info.render.calls++, K.info.render.points += r[l].count;
            else if (a instanceof THREE.Line)
                if (a = a.mode === THREE.LineStrip ? Y.LINE_STRIP : Y.LINES, gt.setLineWidth(i.linewidth * C), s = o.attributes.index)
                    if (s.array instanceof Uint32Array ? (h = Y.UNSIGNED_INT, c = 4) : (h = Y.UNSIGNED_SHORT, c = 2), r = o.offsets, 0 === r.length) e && (n(i, t, o, 0), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, s.array.length, h, 0), K.info.render.calls++, K.info.render.vertices += s.array.length;
                    else
                        for (1 < r.length && (e = !0), l = 0, u = r.length; l < u; l++) f = r[l].index, e && (n(i, t, o, f), Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, s.buffer)), Y.drawElements(a, r[l].count, h, r[l].start * c), K.info.render.calls++, K.info.render.vertices += r[l].count;
            else if (e && n(i, t, o, 0), i = o.attributes.position, r = o.offsets, 0 === r.length) Y.drawArrays(a, 0, i.array.length / 3), K.info.render.calls++, K.info.render.vertices += i.array.length / 3;
            else
                for (l = 0, u = r.length; l < u; l++) Y.drawArrays(a, r[l].index, r[l].count), K.info.render.calls++, K.info.render.vertices += r[l].count
        }, this.renderBuffer = function(t, e, r, n, i, o) {
            if (!1 !== n.visible) {
                if (p(o), r = g(t, e, r, n, o), e = r.attributes, t = !1, r = i.id + "_" + r.id + "_" + (n.wireframe ? 1 : 0), r !== tt && (tt = r, t = !0), t && gt.initAttributes(), !n.morphTargets && 0 <= e.position) t && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglVertexBuffer), gt.enableAttribute(e.position), Y.vertexAttribPointer(e.position, 3, Y.FLOAT, !1, 0, 0));
                else if (o.morphTargetBase) {
                    if (r = n.program.attributes, -1 !== o.morphTargetBase && 0 <= r.position ? (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglMorphTargetsBuffers[o.morphTargetBase]), gt.enableAttribute(r.position), Y.vertexAttribPointer(r.position, 3, Y.FLOAT, !1, 0, 0)) : 0 <= r.position && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglVertexBuffer), gt.enableAttribute(r.position), Y.vertexAttribPointer(r.position, 3, Y.FLOAT, !1, 0, 0)), o.morphTargetForcedOrder.length)
                        for (var s, h = 0, c = o.morphTargetForcedOrder, l = o.morphTargetInfluences; h < n.numSupportedMorphTargets && h < c.length;) s = r["morphTarget" + h], 0 <= s && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglMorphTargetsBuffers[c[h]]), gt.enableAttribute(s), Y.vertexAttribPointer(s, 3, Y.FLOAT, !1, 0, 0)), s = r["morphNormal" + h], 0 <= s && n.morphNormals && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglMorphNormalsBuffers[c[h]]), gt.enableAttribute(s), Y.vertexAttribPointer(s, 3, Y.FLOAT, !1, 0, 0)), o.__webglMorphTargetInfluences[h] = l[c[h]], h++;
                    else {
                        for (c = [], l = o.morphTargetInfluences, h = o.geometry.morphTargets, l.length > h.length && (console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."), l.length = h.length), h = 0, s = l.length; h < s; h++) c.push([l[h], h]);
                        c.length > n.numSupportedMorphTargets ? (c.sort(a), c.length = n.numSupportedMorphTargets) : c.length > n.numSupportedMorphNormals ? c.sort(a) : 0 === c.length && c.push([0, 0]);
                        for (var h = 0, u = n.numSupportedMorphTargets; h < u; h++)
                            if (c[h]) {
                                var f = c[h][1];
                                s = r["morphTarget" + h], 0 <= s && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglMorphTargetsBuffers[f]), gt.enableAttribute(s), Y.vertexAttribPointer(s, 3, Y.FLOAT, !1, 0, 0)), s = r["morphNormal" + h], 0 <= s && n.morphNormals && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglMorphNormalsBuffers[f]), gt.enableAttribute(s), Y.vertexAttribPointer(s, 3, Y.FLOAT, !1, 0, 0)), o.__webglMorphTargetInfluences[h] = l[f]
                            } else o.__webglMorphTargetInfluences[h] = 0
                    }
                    null !== n.program.uniforms.morphTargetInfluences && Y.uniform1fv(n.program.uniforms.morphTargetInfluences, o.__webglMorphTargetInfluences)
                }
                if (t) {
                    if (i.__webglCustomAttributesList)
                        for (r = 0, l = i.__webglCustomAttributesList.length; r < l; r++) c = i.__webglCustomAttributesList[r], 0 <= e[c.buffer.belongsToAttribute] && (Y.bindBuffer(Y.ARRAY_BUFFER, c.buffer), gt.enableAttribute(e[c.buffer.belongsToAttribute]), Y.vertexAttribPointer(e[c.buffer.belongsToAttribute], c.size, Y.FLOAT, !1, 0, 0));
                    0 <= e.color && (0 < o.geometry.colors.length || 0 < o.geometry.faces.length ? (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglColorBuffer), gt.enableAttribute(e.color), Y.vertexAttribPointer(e.color, 3, Y.FLOAT, !1, 0, 0)) : void 0 !== n.defaultAttributeValues && Y.vertexAttrib3fv(e.color, n.defaultAttributeValues.color)), 0 <= e.normal && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglNormalBuffer), gt.enableAttribute(e.normal), Y.vertexAttribPointer(e.normal, 3, Y.FLOAT, !1, 0, 0)), 0 <= e.tangent && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglTangentBuffer), gt.enableAttribute(e.tangent), Y.vertexAttribPointer(e.tangent, 4, Y.FLOAT, !1, 0, 0)), 0 <= e.uv && (o.geometry.faceVertexUvs[0] ? (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglUVBuffer), gt.enableAttribute(e.uv), Y.vertexAttribPointer(e.uv, 2, Y.FLOAT, !1, 0, 0)) : void 0 !== n.defaultAttributeValues && Y.vertexAttrib2fv(e.uv, n.defaultAttributeValues.uv)), 0 <= e.uv2 && (o.geometry.faceVertexUvs[1] ? (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglUV2Buffer), gt.enableAttribute(e.uv2), Y.vertexAttribPointer(e.uv2, 2, Y.FLOAT, !1, 0, 0)) : void 0 !== n.defaultAttributeValues && Y.vertexAttrib2fv(e.uv2, n.defaultAttributeValues.uv2)), n.skinning && 0 <= e.skinIndex && 0 <= e.skinWeight && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglSkinIndicesBuffer), gt.enableAttribute(e.skinIndex), Y.vertexAttribPointer(e.skinIndex, 4, Y.FLOAT, !1, 0, 0), Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglSkinWeightsBuffer), gt.enableAttribute(e.skinWeight), Y.vertexAttribPointer(e.skinWeight, 4, Y.FLOAT, !1, 0, 0)), 0 <= e.lineDistance && (Y.bindBuffer(Y.ARRAY_BUFFER, i.__webglLineDistanceBuffer), gt.enableAttribute(e.lineDistance), Y.vertexAttribPointer(e.lineDistance, 1, Y.FLOAT, !1, 0, 0))
                }
                gt.disableUnusedAttributes(), o instanceof THREE.Mesh ? (o = i.__typeArray === Uint32Array ? Y.UNSIGNED_INT : Y.UNSIGNED_SHORT, n.wireframe ? (gt.setLineWidth(n.wireframeLinewidth * C), t && Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, i.__webglLineBuffer), Y.drawElements(Y.LINES, i.__webglLineCount, o, 0)) : (t && Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER, i.__webglFaceBuffer), Y.drawElements(Y.TRIANGLES, i.__webglFaceCount, o, 0)), K.info.render.calls++, K.info.render.vertices += i.__webglFaceCount, K.info.render.faces += i.__webglFaceCount / 3) : o instanceof THREE.Line ? (o = o.mode === THREE.LineStrip ? Y.LINE_STRIP : Y.LINES, gt.setLineWidth(n.linewidth * C), Y.drawArrays(o, 0, i.__webglLineCount), K.info.render.calls++) : o instanceof THREE.PointCloud && (Y.drawArrays(Y.POINTS, 0, i.__webglParticleCount), K.info.render.calls++, K.info.render.points += i.__webglParticleCount)
            }
        }, this.render = function(t, e, r, n) {
            if (!1 == e instanceof THREE.Camera) THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            else {
                var a = t.fog;
                tt = "", $ = -1, et = null, pt = !0, !0 === t.autoUpdate && t.updateMatrixWorld(), void 0 === e.parent && e.updateMatrixWorld(), t.traverse(function(t) {
                    t instanceof THREE.SkinnedMesh && t.skeleton.update()
                }), e.matrixWorldInverse.getInverse(e.matrixWorld), lt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), ct.setFromMatrix(lt), z.length = 0, j.length = 0, W.length = 0, X.length = 0, q.length = 0, s(t), !0 === K.sortObjects && (j.sort(i), W.sort(o)), Bt.render(t, e), K.info.render.calls = 0, K.info.render.vertices = 0, K.info.render.faces = 0, K.info.render.points = 0, this.setRenderTarget(r), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), n = 0;
                for (var u = G.length; n < u; n++) {
                    var f = G[n],
                        p = f.object;
                    p.visible && (T(p, e), l(f))
                }
                t.overrideMaterial ? (n = t.overrideMaterial, m(n), h(j, e, z, a, n), h(W, e, z, a, n), c(G, "", e, z, a, n)) : (gt.setBlending(THREE.NoBlending), h(j, e, z, a, null), c(G, "opaque", e, z, a, null), h(W, e, z, a, null), c(G, "transparent", e, z, a, null)), kt.render(t, e), Ot.render(t, e, st, ht), r && r.generateMipmaps && r.minFilter !== THREE.NearestFilter && r.minFilter !== THREE.LinearFilter && _(r), gt.setDepthTest(!0), gt.setDepthWrite(!0), gt.setColorWrite(!0)
            }
        }, this.renderImmediateObject = function(t, e, r, n, i) {
            var o = g(t, e, r, n, i);
            tt = "", K.setMaterialFaces(n), i.immediateRenderCallback ? i.immediateRenderCallback(o, Y, ct) : i.render(function(t) {
                K.renderBufferImmediate(t, o, n)
            })
        };
        var Wt = {},
            Xt = 0,
            qt = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointCloudMaterial: "particle_basic"
            };
        this.setFaceCulling = function(t, e) {
            t === THREE.CullFaceNone ? Y.disable(Y.CULL_FACE) : (e === THREE.FrontFaceDirectionCW ? Y.frontFace(Y.CW) : Y.frontFace(Y.CCW), t === THREE.CullFaceBack ? Y.cullFace(Y.BACK) : t === THREE.CullFaceFront ? Y.cullFace(Y.FRONT) : Y.cullFace(Y.FRONT_AND_BACK), Y.enable(Y.CULL_FACE))
        }, this.setMaterialFaces = function(t) {
            gt.setDoubleSided(t.side === THREE.DoubleSide), gt.setFlipSided(t.side === THREE.BackSide)
        }, this.uploadTexture = function(t) {
            void 0 === t.__webglInit && (t.__webglInit = !0, t.addEventListener("dispose", Nt), t.__webglTexture = Y.createTexture(), K.info.memory.textures++), Y.bindTexture(Y.TEXTURE_2D, t.__webglTexture), Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL, t.flipY), Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), Y.pixelStorei(Y.UNPACK_ALIGNMENT, t.unpackAlignment), t.image = H(t.image, bt);
            var e = t.image,
                r = THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height),
                n = M(t.format),
                i = M(t.type);
            x(Y.TEXTURE_2D, t, r);
            var o = t.mipmaps;
            if (t instanceof THREE.DataTexture)
                if (0 < o.length && r) {
                    for (var a = 0, s = o.length; a < s; a++) e = o[a], Y.texImage2D(Y.TEXTURE_2D, a, n, e.width, e.height, 0, n, i, e.data);
                    t.generateMipmaps = !1
                } else Y.texImage2D(Y.TEXTURE_2D, 0, n, e.width, e.height, 0, n, i, e.data);
            else if (t instanceof THREE.CompressedTexture)
                for (a = 0, s = o.length; a < s; a++) e = o[a], t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat ? -1 < Pt().indexOf(n) ? Y.compressedTexImage2D(Y.TEXTURE_2D, a, n, e.width, e.height, 0, e.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Y.texImage2D(Y.TEXTURE_2D, a, n, e.width, e.height, 0, n, i, e.data);
            else if (0 < o.length && r) {
                for (a = 0, s = o.length; a < s; a++) e = o[a], Y.texImage2D(Y.TEXTURE_2D, a, n, n, i, e);
                t.generateMipmaps = !1
            } else Y.texImage2D(Y.TEXTURE_2D, 0, n, n, i, t.image);
            t.generateMipmaps && r && Y.generateMipmap(Y.TEXTURE_2D), t.needsUpdate = !1, t.onUpdate && t.onUpdate()
        }, this.setTexture = function(t, e) {
            Y.activeTexture(Y.TEXTURE0 + e), t.needsUpdate ? K.uploadTexture(t) : Y.bindTexture(Y.TEXTURE_2D, t.__webglTexture)
        }, this.setRenderTarget = function(t) {
            var e = t instanceof THREE.WebGLRenderTargetCube;
            if (t && void 0 === t.__webglFramebuffer) {
                void 0 === t.depthBuffer && (t.depthBuffer = !0), void 0 === t.stencilBuffer && (t.stencilBuffer = !0), t.addEventListener("dispose", zt), t.__webglTexture = Y.createTexture(), K.info.memory.textures++;
                var r = THREE.Math.isPowerOfTwo(t.width) && THREE.Math.isPowerOfTwo(t.height),
                    n = M(t.format),
                    i = M(t.type);
                if (e) {
                    t.__webglFramebuffer = [], t.__webglRenderbuffer = [], Y.bindTexture(Y.TEXTURE_CUBE_MAP, t.__webglTexture), x(Y.TEXTURE_CUBE_MAP, t, r);
                    for (var o = 0; 6 > o; o++) {
                        t.__webglFramebuffer[o] = Y.createFramebuffer(), t.__webglRenderbuffer[o] = Y.createRenderbuffer(), Y.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, n, t.width, t.height, 0, n, i, null);
                        var a = t,
                            s = Y.TEXTURE_CUBE_MAP_POSITIVE_X + o;
                        Y.bindFramebuffer(Y.FRAMEBUFFER, t.__webglFramebuffer[o]), Y.framebufferTexture2D(Y.FRAMEBUFFER, Y.COLOR_ATTACHMENT0, s, a.__webglTexture, 0), b(t.__webglRenderbuffer[o], t)
                    }
                    r && Y.generateMipmap(Y.TEXTURE_CUBE_MAP)
                } else t.__webglFramebuffer = Y.createFramebuffer(), t.__webglRenderbuffer = t.shareDepthFrom ? t.shareDepthFrom.__webglRenderbuffer : Y.createRenderbuffer(), Y.bindTexture(Y.TEXTURE_2D, t.__webglTexture), x(Y.TEXTURE_2D, t, r), Y.texImage2D(Y.TEXTURE_2D, 0, n, t.width, t.height, 0, n, i, null), n = Y.TEXTURE_2D, Y.bindFramebuffer(Y.FRAMEBUFFER, t.__webglFramebuffer), Y.framebufferTexture2D(Y.FRAMEBUFFER, Y.COLOR_ATTACHMENT0, n, t.__webglTexture, 0), t.shareDepthFrom ? t.depthBuffer && !t.stencilBuffer ? Y.framebufferRenderbuffer(Y.FRAMEBUFFER, Y.DEPTH_ATTACHMENT, Y.RENDERBUFFER, t.__webglRenderbuffer) : t.depthBuffer && t.stencilBuffer && Y.framebufferRenderbuffer(Y.FRAMEBUFFER, Y.DEPTH_STENCIL_ATTACHMENT, Y.RENDERBUFFER, t.__webglRenderbuffer) : b(t.__webglRenderbuffer, t), r && Y.generateMipmap(Y.TEXTURE_2D);
                e ? Y.bindTexture(Y.TEXTURE_CUBE_MAP, null) : Y.bindTexture(Y.TEXTURE_2D, null), Y.bindRenderbuffer(Y.RENDERBUFFER, null), Y.bindFramebuffer(Y.FRAMEBUFFER, null)
            }
            t ? (e = e ? t.__webglFramebuffer[t.activeCubeFace] : t.__webglFramebuffer, r = t.width, t = t.height, i = n = 0) : (e = null, r = ot, t = at, n = nt, i = it), e !== J && (Y.bindFramebuffer(Y.FRAMEBUFFER, e), Y.viewport(n, i, r, t), J = e), st = r, ht = t
        }, this.readRenderTargetPixels = function(t, e, r, n, i, o) {
            if (t instanceof THREE.WebGLRenderTarget) {
                if (t.__webglFramebuffer)
                    if (t.format !== THREE.RGBAFormat) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
                    else {
                        var a = !1;
                        t.__webglFramebuffer !== J && (Y.bindFramebuffer(Y.FRAMEBUFFER, t.__webglFramebuffer), a = !0), Y.checkFramebufferStatus(Y.FRAMEBUFFER) === Y.FRAMEBUFFER_COMPLETE ? Y.readPixels(e, r, n, i, Y.RGBA, Y.UNSIGNED_BYTE, o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."), a && Y.bindFramebuffer(Y.FRAMEBUFFER, J)
                    }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }, this.initMaterial = function() {
            THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }, this.addPrePlugin = function() {
            THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }, this.addPostPlugin = function() {
            THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }, this.updateShadowMap = function() {
            THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }, THREE.WebGLRenderTarget = function(t, e, r) {
        this.width = t, this.height = e, r = r || {}, this.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping, this.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping, this.magFilter = void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter, this.minFilter = void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter, this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.format = void 0 !== r.format ? r.format : THREE.RGBAFormat, this.type = void 0 !== r.type ? r.type : THREE.UnsignedByteType, this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer, this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer, this.generateMipmaps = !0, this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
    }, THREE.WebGLRenderTarget.prototype = {
        constructor: THREE.WebGLRenderTarget,
        setSize: function(t, e) {
            this.width = t, this.height = e
        },
        clone: function() {
            var t = new THREE.WebGLRenderTarget(this.width, this.height);
            return t.wrapS = this.wrapS, t.wrapT = this.wrapT, t.magFilter = this.magFilter, t.minFilter = this.minFilter, t.anisotropy = this.anisotropy, t.offset.copy(this.offset), t.repeat.copy(this.repeat), t.format = this.format, t.type = this.type, t.depthBuffer = this.depthBuffer, t.stencilBuffer = this.stencilBuffer, t.generateMipmaps = this.generateMipmaps, t.shareDepthFrom = this.shareDepthFrom, t
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype), THREE.WebGLRenderTargetCube = function(t, e, r) {
        THREE.WebGLRenderTarget.call(this, t, e, r), this.activeCubeFace = 0
    }, THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype), THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube, THREE.WebGLExtensions = function(t) {
        var e = {};
        this.get = function(r) {
            if (void 0 !== e[r]) return e[r];
            var n;
            switch (r) {
                case "EXT_texture_filter_anisotropic":
                    n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = t.getExtension(r)
            }
            return null === n && THREE.warn("THREE.WebGLRenderer: " + r + " extension not supported."), e[r] = n
        }
    }, THREE.WebGLProgram = function() {
        var t = 0;
        return function(e, r, n, i) {
            var o = e.context,
                a = n.defines,
                s = n.__webglShader.uniforms,
                h = n.attributes,
                c = n.__webglShader.vertexShader,
                l = n.__webglShader.fragmentShader,
                u = n.index0AttributeName;
            void 0 === u && !0 === i.morphTargets && (u = "position");
            var f = "SHADOWMAP_TYPE_BASIC";
            i.shadowMapType === THREE.PCFShadowMap ? f = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === THREE.PCFSoftShadowMap && (f = "SHADOWMAP_TYPE_PCF_SOFT");
            var p = "ENVMAP_TYPE_CUBE",
                d = "ENVMAP_MODE_REFLECTION",
                E = "ENVMAP_BLENDING_MULTIPLY";
            if (i.envMap) {
                switch (n.envMap.mapping) {
                    case THREE.CubeReflectionMapping:
                    case THREE.CubeRefractionMapping:
                        p = "ENVMAP_TYPE_CUBE";
                        break;
                    case THREE.EquirectangularReflectionMapping:
                    case THREE.EquirectangularRefractionMapping:
                        p = "ENVMAP_TYPE_EQUIREC";
                        break;
                    case THREE.SphericalReflectionMapping:
                        p = "ENVMAP_TYPE_SPHERE"
                }
                switch (n.envMap.mapping) {
                    case THREE.CubeRefractionMapping:
                    case THREE.EquirectangularRefractionMapping:
                        d = "ENVMAP_MODE_REFRACTION"
                }
                switch (n.combine) {
                    case THREE.MultiplyOperation:
                        E = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case THREE.MixOperation:
                        E = "ENVMAP_BLENDING_MIX";
                        break;
                    case THREE.AddOperation:
                        E = "ENVMAP_BLENDING_ADD"
                }
            }
            var m, g, v = 0 < e.gammaFactor ? e.gammaFactor : 1;
            m = [];
            for (var y in a) g = a[y], !1 !== g && (g = "#define " + y + " " + g, m.push(g));
            m = m.join("\n"), a = o.createProgram(), n instanceof THREE.RawShaderMaterial ? e = n = "" : (n = ["precision " + i.precision + " float;", "precision " + i.precision + " int;", m, i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", e.gammaInput ? "#define GAMMA_INPUT" : "", e.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + v, "#define MAX_DIR_LIGHTS " + i.maxDirLights, "#define MAX_POINT_LIGHTS " + i.maxPointLights, "#define MAX_SPOT_LIGHTS " + i.maxSpotLights, "#define MAX_HEMI_LIGHTS " + i.maxHemiLights, "#define MAX_SHADOWS " + i.maxShadows, "#define MAX_BONES " + i.maxBones, i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + d : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals ? "#define USE_MORPHNORMALS" : "", i.wrapAround ? "#define WRAP_AROUND" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + f : "", i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"), e = ["precision " + i.precision + " float;", "precision " + i.precision + " int;", i.bumpMap || i.normalMap || i.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", m, "#define MAX_DIR_LIGHTS " + i.maxDirLights, "#define MAX_POINT_LIGHTS " + i.maxPointLights, "#define MAX_SPOT_LIGHTS " + i.maxSpotLights, "#define MAX_HEMI_LIGHTS " + i.maxHemiLights, "#define MAX_SHADOWS " + i.maxShadows, i.alphaTest ? "#define ALPHATEST " + i.alphaTest : "", e.gammaInput ? "#define GAMMA_INPUT" : "", e.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + v, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + p : "", i.envMap ? "#define " + d : "", i.envMap ? "#define " + E : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.metal ? "#define METAL" : "", i.wrapAround ? "#define WRAP_AROUND" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + f : "", i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n")), c = new THREE.WebGLShader(o, o.VERTEX_SHADER, n + c), l = new THREE.WebGLShader(o, o.FRAGMENT_SHADER, e + l), o.attachShader(a, c), o.attachShader(a, l), void 0 !== u && o.bindAttribLocation(a, 0, u), o.linkProgram(a), u = o.getProgramInfoLog(a), !1 === o.getProgramParameter(a, o.LINK_STATUS) && THREE.error("THREE.WebGLProgram: shader error: " + o.getError(), "gl.VALIDATE_STATUS", o.getProgramParameter(a, o.VALIDATE_STATUS), "gl.getPRogramInfoLog", u), "" !== u && THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()" + u), o.deleteShader(c), o.deleteShader(l), u = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" "), i.useVertexTexture ? (u.push("boneTexture"), u.push("boneTextureWidth"), u.push("boneTextureHeight")) : u.push("boneGlobalMatrices"), i.logarithmicDepthBuffer && u.push("logDepthBufFC");
            for (var T in s) u.push(T);
            for (s = u, T = {}, u = 0, e = s.length; u < e; u++) f = s[u], T[f] = o.getUniformLocation(a, f);
            for (this.uniforms = T, u = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" "), s = 0; s < i.maxMorphTargets; s++) u.push("morphTarget" + s);
            for (s = 0; s < i.maxMorphNormals; s++) u.push("morphNormal" + s);
            for (var R in h) u.push(R);
            for (i = u, h = {}, R = 0, s = i.length; R < s; R++) T = i[R], h[T] = o.getAttribLocation(a, T);
            return this.attributes = h, this.attributesKeys = Object.keys(this.attributes), this.id = t++, this.code = r, this.usedTimes = 1, this.program = a, this.vertexShader = c, this.fragmentShader = l, this
        }
    }(), THREE.WebGLShader = function() {
        var t = function(t) {
            t = t.split("\n");
            for (var e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
            return t.join("\n")
        };
        return function(e, r, n) {
            return r = e.createShader(r), e.shaderSource(r, n), e.compileShader(r), !1 === e.getShaderParameter(r, e.COMPILE_STATUS) && THREE.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(r) && THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e.getShaderInfoLog(r), t(n)), r
        }
    }(), THREE.WebGLState = function(t, e) {
        var r = new Uint8Array(16),
            n = new Uint8Array(16),
            i = null,
            o = null,
            a = null,
            s = null,
            h = null,
            c = null,
            l = null,
            u = null,
            f = null,
            p = null,
            d = null,
            E = null,
            m = null,
            g = null,
            v = null,
            y = null;
        this.initAttributes = function() {
            for (var t = 0, e = r.length; t < e; t++) r[t] = 0
        }, this.enableAttribute = function(e) {
            r[e] = 1, 0 === n[e] && (t.enableVertexAttribArray(e), n[e] = 1)
        }, this.disableUnusedAttributes = function() {
            for (var e = 0, i = n.length; e < i; e++) n[e] !== r[e] && (t.disableVertexAttribArray(e), n[e] = 0)
        }, this.setBlending = function(r, n, u, f, p, d, E) {
            r !== i && (r === THREE.NoBlending ? t.disable(t.BLEND) : r === THREE.AdditiveBlending ? (t.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : r === THREE.SubtractiveBlending ? (t.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : r === THREE.MultiplyBlending ? (t.enable(t.BLEND), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : r === THREE.CustomBlending ? t.enable(t.BLEND) : (t.enable(t.BLEND), t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), i = r), r === THREE.CustomBlending ? (p = p || n, d = d || u, E = E || f, n === o && p === h || (t.blendEquationSeparate(e(n), e(p)), o = n, h = p), u === a && f === s && d === c && E === l || (t.blendFuncSeparate(e(u), e(f), e(d), e(E)), a = u, s = f, c = d, l = E)) : l = c = h = s = a = o = null
        }, this.setDepthTest = function(e) {
            u !== e && (e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), u = e)
        }, this.setDepthWrite = function(e) {
            f !== e && (t.depthMask(e), f = e)
        }, this.setColorWrite = function(e) {
            p !== e && (t.colorMask(e, e, e, e), p = e)
        }, this.setDoubleSided = function(e) {
            d !== e && (e ? t.disable(t.CULL_FACE) : t.enable(t.CULL_FACE), d = e)
        }, this.setFlipSided = function(e) {
            E !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), E = e)
        }, this.setLineWidth = function(e) {
            e !== m && (t.lineWidth(e), m = e)
        }, this.setPolygonOffset = function(e, r, n) {
            g !== e && (e ? t.enable(t.POLYGON_OFFSET_FILL) : t.disable(t.POLYGON_OFFSET_FILL), g = e), !e || v === r && y === n || (t.polygonOffset(r, n), v = r, y = n)
        }, this.reset = function() {
            for (var t = 0; t < n.length; t++) n[t] = 0;
            E = d = p = f = u = i = null
        }
    }, THREE.LensFlarePlugin = function(t, e) {
        var r, n, i, o, a, s, h, c, l, u, f, p, d, E, m, g, v = t.context;
        this.render = function(y, T, R, x) {
            if (0 !== e.length) {
                y = new THREE.Vector3;
                var H = x / R,
                    b = .5 * R,
                    _ = .5 * x,
                    w = 16 / x,
                    M = new THREE.Vector2(w * H, w),
                    S = new THREE.Vector3(1, 1, 0),
                    A = new THREE.Vector2(1, 1);
                if (void 0 === d) {
                    var w = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        C = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    f = v.createBuffer(), p = v.createBuffer(), v.bindBuffer(v.ARRAY_BUFFER, f), v.bufferData(v.ARRAY_BUFFER, w, v.STATIC_DRAW), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, p), v.bufferData(v.ELEMENT_ARRAY_BUFFER, C, v.STATIC_DRAW), m = v.createTexture(), g = v.createTexture(), v.bindTexture(v.TEXTURE_2D, m), v.texImage2D(v.TEXTURE_2D, 0, v.RGB, 16, 16, 0, v.RGB, v.UNSIGNED_BYTE, null), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST), v.bindTexture(v.TEXTURE_2D, g), v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, 16, 16, 0, v.RGBA, v.UNSIGNED_BYTE, null), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST);
                    var w = (E = 0 < v.getParameter(v.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                            fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        } : {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                            fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        },
                        C = v.createProgram(),
                        L = v.createShader(v.FRAGMENT_SHADER),
                        P = v.createShader(v.VERTEX_SHADER),
                        F = "precision " + t.getPrecision() + " float;\n";
                    v.shaderSource(L, F + w.fragmentShader), v.shaderSource(P, F + w.vertexShader), v.compileShader(L), v.compileShader(P), v.attachShader(C, L), v.attachShader(C, P), v.linkProgram(C), d = C, l = v.getAttribLocation(d, "position"), u = v.getAttribLocation(d, "uv"), r = v.getUniformLocation(d, "renderType"), n = v.getUniformLocation(d, "map"), i = v.getUniformLocation(d, "occlusionMap"), o = v.getUniformLocation(d, "opacity"), a = v.getUniformLocation(d, "color"), s = v.getUniformLocation(d, "scale"), h = v.getUniformLocation(d, "rotation"), c = v.getUniformLocation(d, "screenPosition")
                }
                for (v.useProgram(d), v.enableVertexAttribArray(l), v.enableVertexAttribArray(u), v.uniform1i(i, 0), v.uniform1i(n, 1), v.bindBuffer(v.ARRAY_BUFFER, f), v.vertexAttribPointer(l, 2, v.FLOAT, !1, 16, 0), v.vertexAttribPointer(u, 2, v.FLOAT, !1, 16, 8), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, p), v.disable(v.CULL_FACE), v.depthMask(!1), C = 0, L = e.length; C < L; C++)
                    if (w = 16 / x, M.set(w * H, w), P = e[C], y.set(P.matrixWorld.elements[12], P.matrixWorld.elements[13], P.matrixWorld.elements[14]), y.applyMatrix4(T.matrixWorldInverse), y.applyProjection(T.projectionMatrix), S.copy(y), A.x = S.x * b + b, A.y = S.y * _ + _, E || 0 < A.x && A.x < R && 0 < A.y && A.y < x) {
                        v.activeTexture(v.TEXTURE1), v.bindTexture(v.TEXTURE_2D, m), v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGB, A.x - 8, A.y - 8, 16, 16, 0), v.uniform1i(r, 0), v.uniform2f(s, M.x, M.y), v.uniform3f(c, S.x, S.y, S.z), v.disable(v.BLEND), v.enable(v.DEPTH_TEST), v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0), v.activeTexture(v.TEXTURE0), v.bindTexture(v.TEXTURE_2D, g), v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGBA, A.x - 8, A.y - 8, 16, 16, 0), v.uniform1i(r, 1), v.disable(v.DEPTH_TEST), v.activeTexture(v.TEXTURE1), v.bindTexture(v.TEXTURE_2D, m), v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0), P.positionScreen.copy(S), P.customUpdateCallback ? P.customUpdateCallback(P) : P.updateLensFlares(), v.uniform1i(r, 2), v.enable(v.BLEND);
                        for (var F = 0, D = P.lensFlares.length; F < D; F++) {
                            var B = P.lensFlares[F];
                            .001 < B.opacity && .001 < B.scale && (S.x = B.x, S.y = B.y, S.z = B.z, w = B.size * B.scale / x, M.x = w * H, M.y = w, v.uniform3f(c, S.x, S.y, S.z), v.uniform2f(s, M.x, M.y), v.uniform1f(h, B.rotation), v.uniform1f(o, B.opacity), v.uniform3f(a, B.color.r, B.color.g, B.color.b), t.state.setBlending(B.blending, B.blendEquation, B.blendSrc, B.blendDst), t.setTexture(B.texture, 1), v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0))
                        }
                    }
                v.enable(v.CULL_FACE), v.enable(v.DEPTH_TEST), v.depthMask(!0), t.resetGLState()
            }
        }
    }, THREE.ShadowMapPlugin = function(t, e, r, n) {
        function i(t, e, n) {
            if (e.visible) {
                var o = r[e.id];
                if (o && e.castShadow && (!1 === e.frustumCulled || !0 === l.intersectsObject(e)))
                    for (var a = 0, s = o.length; a < s; a++) {
                        var h = o[a];
                        e._modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), E.push(h)
                    }
                for (a = 0, s = e.children.length; a < s; a++) i(t, e.children[a], n)
            }
        }
        var o, a, s, h, c = t.context,
            l = new THREE.Frustum,
            u = new THREE.Matrix4,
            f = new THREE.Vector3,
            p = new THREE.Vector3,
            d = new THREE.Vector3,
            E = [],
            m = THREE.ShaderLib.depthRGBA,
            g = THREE.UniformsUtils.clone(m.uniforms);
        o = new THREE.ShaderMaterial({
            uniforms: g,
            vertexShader: m.vertexShader,
            fragmentShader: m.fragmentShader
        }), a = new THREE.ShaderMaterial({
            uniforms: g,
            vertexShader: m.vertexShader,
            fragmentShader: m.fragmentShader,
            morphTargets: !0
        }), s = new THREE.ShaderMaterial({
            uniforms: g,
            vertexShader: m.vertexShader,
            fragmentShader: m.fragmentShader,
            skinning: !0
        }), h = new THREE.ShaderMaterial({
            uniforms: g,
            vertexShader: m.vertexShader,
            fragmentShader: m.fragmentShader,
            morphTargets: !0,
            skinning: !0
        }), o._shadowPass = !0, a._shadowPass = !0, s._shadowPass = !0, h._shadowPass = !0, this.render = function(r, m) {
            if (!1 !== t.shadowMapEnabled) {
                var g, v, y, T, R, x, H, b, _ = [];
                for (T = 0, c.clearColor(1, 1, 1, 1), c.disable(c.BLEND), c.enable(c.CULL_FACE), c.frontFace(c.CCW), t.shadowMapCullFace === THREE.CullFaceFront ? c.cullFace(c.FRONT) : c.cullFace(c.BACK), t.state.setDepthTest(!0), g = 0, v = e.length; g < v; g++)
                    if (y = e[g], y.castShadow)
                        if (y instanceof THREE.DirectionalLight && y.shadowCascade)
                            for (R = 0; R < y.shadowCascadeCount; R++) {
                                var w;
                                if (y.shadowCascadeArray[R]) w = y.shadowCascadeArray[R];
                                else {
                                    H = y;
                                    var M = R;
                                    w = new THREE.DirectionalLight, w.isVirtual = !0, w.onlyShadow = !0, w.castShadow = !0, w.shadowCameraNear = H.shadowCameraNear, w.shadowCameraFar = H.shadowCameraFar, w.shadowCameraLeft = H.shadowCameraLeft, w.shadowCameraRight = H.shadowCameraRight, w.shadowCameraBottom = H.shadowCameraBottom, w.shadowCameraTop = H.shadowCameraTop, w.shadowCameraVisible = H.shadowCameraVisible, w.shadowDarkness = H.shadowDarkness, w.shadowBias = H.shadowCascadeBias[M], w.shadowMapWidth = H.shadowCascadeWidth[M], w.shadowMapHeight = H.shadowCascadeHeight[M], w.pointsWorld = [], w.pointsFrustum = [], b = w.pointsWorld, x = w.pointsFrustum;
                                    for (var S = 0; 8 > S; S++) b[S] = new THREE.Vector3, x[S] = new THREE.Vector3;
                                    b = H.shadowCascadeNearZ[M], H = H.shadowCascadeFarZ[M], x[0].set(-1, -1, b), x[1].set(1, -1, b), x[2].set(-1, 1, b), x[3].set(1, 1, b), x[4].set(-1, -1, H), x[5].set(1, -1, H), x[6].set(-1, 1, H), x[7].set(1, 1, H), w.originalCamera = m, x = new THREE.Gyroscope, x.position.copy(y.shadowCascadeOffset), x.add(w), x.add(w.target), m.add(x), y.shadowCascadeArray[R] = w
                                }
                                M = y, b = R, H = M.shadowCascadeArray[b], H.position.copy(M.position), H.target.position.copy(M.target.position), H.lookAt(H.target), H.shadowCameraVisible = M.shadowCameraVisible, H.shadowDarkness = M.shadowDarkness, H.shadowBias = M.shadowCascadeBias[b], x = M.shadowCascadeNearZ[b], M = M.shadowCascadeFarZ[b], H = H.pointsFrustum, H[0].z = x, H[1].z = x, H[2].z = x, H[3].z = x, H[4].z = M, H[5].z = M, H[6].z = M, H[7].z = M, _[T] = w, T++
                            } else _[T] = y, T++;
                for (g = 0, v = _.length; g < v; g++) {
                    if (y = _[g], y.shadowMap || (R = THREE.LinearFilter, t.shadowMapType === THREE.PCFSoftShadowMap && (R = THREE.NearestFilter), y.shadowMap = new THREE.WebGLRenderTarget(y.shadowMapWidth, y.shadowMapHeight, {
                            minFilter: R,
                            magFilter: R,
                            format: THREE.RGBAFormat
                        }), y.shadowMapSize = new THREE.Vector2(y.shadowMapWidth, y.shadowMapHeight), y.shadowMatrix = new THREE.Matrix4), !y.shadowCamera) {
                        if (y instanceof THREE.SpotLight) y.shadowCamera = new THREE.PerspectiveCamera(y.shadowCameraFov, y.shadowMapWidth / y.shadowMapHeight, y.shadowCameraNear, y.shadowCameraFar);
                        else {
                            if (!(y instanceof THREE.DirectionalLight)) {
                                THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", y);
                                continue
                            }
                            y.shadowCamera = new THREE.OrthographicCamera(y.shadowCameraLeft, y.shadowCameraRight, y.shadowCameraTop, y.shadowCameraBottom, y.shadowCameraNear, y.shadowCameraFar)
                        }
                        r.add(y.shadowCamera), !0 === r.autoUpdate && r.updateMatrixWorld()
                    }
                    if (y.shadowCameraVisible && !y.cameraHelper && (y.cameraHelper = new THREE.CameraHelper(y.shadowCamera), r.add(y.cameraHelper)), y.isVirtual && w.originalCamera == m) {
                        for (R = m, T = y.shadowCamera, x = y.pointsFrustum, H = y.pointsWorld, f.set(1 / 0, 1 / 0, 1 / 0), p.set(-(1 / 0), -(1 / 0), -(1 / 0)), M = 0; 8 > M; M++) b = H[M], b.copy(x[M]), b.unproject(R), b.applyMatrix4(T.matrixWorldInverse), b.x < f.x && (f.x = b.x), b.x > p.x && (p.x = b.x), b.y < f.y && (f.y = b.y), b.y > p.y && (p.y = b.y), b.z < f.z && (f.z = b.z), b.z > p.z && (p.z = b.z);
                        T.left = f.x, T.right = p.x, T.top = p.y, T.bottom = f.y, T.updateProjectionMatrix()
                    }
                    for (T = y.shadowMap, x = y.shadowMatrix, R = y.shadowCamera, R.position.setFromMatrixPosition(y.matrixWorld), d.setFromMatrixPosition(y.target.matrixWorld), R.lookAt(d), R.updateMatrixWorld(), R.matrixWorldInverse.getInverse(R.matrixWorld), y.cameraHelper && (y.cameraHelper.visible = y.shadowCameraVisible), y.shadowCameraVisible && y.cameraHelper.update(), x.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), x.multiply(R.projectionMatrix), x.multiply(R.matrixWorldInverse), u.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse), l.setFromMatrix(u), t.setRenderTarget(T), t.clear(), E.length = 0, i(r, r, R), y = 0, T = E.length; y < T; y++) H = E[y], x = H.object, H = H.buffer, M = x.material instanceof THREE.MeshFaceMaterial ? x.material.materials[0] : x.material, b = void 0 !== x.geometry.morphTargets && 0 < x.geometry.morphTargets.length && M.morphTargets, S = x instanceof THREE.SkinnedMesh && M.skinning, b = x.customDepthMaterial ? x.customDepthMaterial : S ? b ? h : s : b ? a : o, t.setMaterialFaces(M), H instanceof THREE.BufferGeometry ? t.renderBufferDirect(R, e, null, b, H, x) : t.renderBuffer(R, e, null, b, H, x);
                    for (y = 0, T = n.length; y < T; y++) H = n[y], x = H.object, x.visible && x.castShadow && (x._modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, x.matrixWorld), t.renderImmediateObject(R, e, null, o, x))
                }
                g = t.getClearColor(), v = t.getClearAlpha(), c.clearColor(g.r, g.g, g.b, v), c.enable(c.BLEND), t.shadowMapCullFace === THREE.CullFaceFront && c.cullFace(c.BACK), t.resetGLState()
            }
        }
    }, THREE.SpritePlugin = function(t, e) {
        function r(t, e) {
            return t.z !== e.z ? e.z - t.z : e.id - t.id
        }
        var n, i, o, a, s, h, c, l, u, f, p, d, E, m, g, v, y, T, R, x, H, b = t.context,
            _ = new THREE.Vector3,
            w = new THREE.Quaternion,
            M = new THREE.Vector3;
        this.render = function(S, A) {
            if (0 !== e.length) {
                if (void 0 === x) {
                    var C = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        L = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    T = b.createBuffer(), R = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, T), b.bufferData(b.ARRAY_BUFFER, C, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R), b.bufferData(b.ELEMENT_ARRAY_BUFFER, L, b.STATIC_DRAW);
                    var C = b.createProgram(),
                        L = b.createShader(b.VERTEX_SHADER),
                        P = b.createShader(b.FRAGMENT_SHADER);
                    b.shaderSource(L, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")), b.shaderSource(P, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")), b.compileShader(L), b.compileShader(P), b.attachShader(C, L), b.attachShader(C, P), b.linkProgram(C), x = C, v = b.getAttribLocation(x, "position"), y = b.getAttribLocation(x, "uv"), n = b.getUniformLocation(x, "uvOffset"), i = b.getUniformLocation(x, "uvScale"), o = b.getUniformLocation(x, "rotation"), a = b.getUniformLocation(x, "scale"), s = b.getUniformLocation(x, "color"), h = b.getUniformLocation(x, "map"), c = b.getUniformLocation(x, "opacity"), l = b.getUniformLocation(x, "modelViewMatrix"), u = b.getUniformLocation(x, "projectionMatrix"), f = b.getUniformLocation(x, "fogType"), p = b.getUniformLocation(x, "fogDensity"), d = b.getUniformLocation(x, "fogNear"), E = b.getUniformLocation(x, "fogFar"), m = b.getUniformLocation(x, "fogColor"), g = b.getUniformLocation(x, "alphaTest"), C = document.createElement("canvas"), C.width = 8, C.height = 8, L = C.getContext("2d"), L.fillStyle = "white", L.fillRect(0, 0, 8, 8), H = new THREE.Texture(C), H.needsUpdate = !0
                }
                b.useProgram(x), b.enableVertexAttribArray(v), b.enableVertexAttribArray(y), b.disable(b.CULL_FACE), b.enable(b.BLEND), b.bindBuffer(b.ARRAY_BUFFER, T), b.vertexAttribPointer(v, 2, b.FLOAT, !1, 16, 0), b.vertexAttribPointer(y, 2, b.FLOAT, !1, 16, 8), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R), b.uniformMatrix4fv(u, !1, A.projectionMatrix.elements), b.activeTexture(b.TEXTURE0), b.uniform1i(h, 0), L = C = 0, (P = S.fog) ? (b.uniform3f(m, P.color.r, P.color.g, P.color.b), P instanceof THREE.Fog ? (b.uniform1f(d, P.near), b.uniform1f(E, P.far), b.uniform1i(f, 1), L = C = 1) : P instanceof THREE.FogExp2 && (b.uniform1f(p, P.density), b.uniform1i(f, 2), L = C = 2)) : (b.uniform1i(f, 0), L = C = 0);
                for (var P = 0, F = e.length; P < F; P++) {
                    var D = e[P];
                    D._modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, D.matrixWorld), D.z = -D._modelViewMatrix.elements[14]
                }
                e.sort(r);
                for (var B = [], P = 0, F = e.length; P < F; P++) {
                    var D = e[P],
                        k = D.material;
                    b.uniform1f(g, k.alphaTest), b.uniformMatrix4fv(l, !1, D._modelViewMatrix.elements), D.matrixWorld.decompose(_, w, M), B[0] = M.x, B[1] = M.y, D = 0, S.fog && k.fog && (D = L), C !== D && (b.uniform1i(f, D), C = D), null !== k.map ? (b.uniform2f(n, k.map.offset.x, k.map.offset.y), b.uniform2f(i, k.map.repeat.x, k.map.repeat.y)) : (b.uniform2f(n, 0, 0), b.uniform2f(i, 1, 1)), b.uniform1f(c, k.opacity), b.uniform3f(s, k.color.r, k.color.g, k.color.b), b.uniform1f(o, k.rotation), b.uniform2fv(a, B), t.state.setBlending(k.blending, k.blendEquation, k.blendSrc, k.blendDst), t.state.setDepthTest(k.depthTest), t.state.setDepthWrite(k.depthWrite), k.map && k.map.image && k.map.image.width ? t.setTexture(k.map, 0) : t.setTexture(H, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0)
                }
                b.enable(b.CULL_FACE), t.resetGLState()
            }
        }
    }, THREE.GeometryUtils = {
        merge: function(t, e, r) {
            THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var n;
            e instanceof THREE.Mesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, r)
        },
        center: function(t) {
            return THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
        }
    }, THREE.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(t, e, r, n) {
            var i = new THREE.ImageLoader;
            i.crossOrigin = this.crossOrigin;
            var o = new THREE.Texture((void 0), e);
            return i.load(t, function(t) {
                o.image = t, o.needsUpdate = !0, r && r(o)
            }, void 0, function(t) {
                n && n(t)
            }), o.sourceFile = t, o
        },
        loadTextureCube: function(t, e, r, n) {
            var i = new THREE.ImageLoader;
            i.crossOrigin = this.crossOrigin;
            var o = new THREE.CubeTexture([], e);
            o.flipY = !1;
            var a = 0;
            e = function(e) {
                i.load(t[e], function(t) {
                    o.images[e] = t, a += 1, 6 === a && (o.needsUpdate = !0, r && r(o))
                }, void 0, n)
            };
            for (var s = 0, h = t.length; s < h; ++s) e(s);
            return o
        },
        loadCompressedTexture: function() {
            THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        },
        getNormalMap: function(t, e) {
            var r = function(t) {
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                return [t[0] / e, t[1] / e, t[2] / e]
            };
            e |= 1;
            var n = t.width,
                i = t.height,
                o = document.createElement("canvas");
            o.width = n, o.height = i;
            var a = o.getContext("2d");
            a.drawImage(t, 0, 0);
            for (var s = a.getImageData(0, 0, n, i).data, h = a.createImageData(n, i), c = h.data, l = 0; l < n; l++)
                for (var u = 0; u < i; u++) {
                    var f = 0 > u - 1 ? 0 : u - 1,
                        p = u + 1 > i - 1 ? i - 1 : u + 1,
                        d = 0 > l - 1 ? 0 : l - 1,
                        E = l + 1 > n - 1 ? n - 1 : l + 1,
                        m = [],
                        g = [0, 0, s[4 * (u * n + l)] / 255 * e];
                    for (m.push([-1, 0, s[4 * (u * n + d)] / 255 * e]), m.push([-1, -1, s[4 * (f * n + d)] / 255 * e]), m.push([0, -1, s[4 * (f * n + l)] / 255 * e]), m.push([1, -1, s[4 * (f * n + E)] / 255 * e]), m.push([1, 0, s[4 * (u * n + E)] / 255 * e]), m.push([1, 1, s[4 * (p * n + E)] / 255 * e]), m.push([0, 1, s[4 * (p * n + l)] / 255 * e]), m.push([-1, 1, s[4 * (p * n + d)] / 255 * e]), f = [], d = m.length, p = 0; p < d; p++) {
                        var E = m[p],
                            v = m[(p + 1) % d],
                            E = [E[0] - g[0], E[1] - g[1], E[2] - g[2]],
                            v = [v[0] - g[0], v[1] - g[1], v[2] - g[2]];
                        f.push(r([E[1] * v[2] - E[2] * v[1], E[2] * v[0] - E[0] * v[2], E[0] * v[1] - E[1] * v[0]]))
                    }
                    for (m = [0, 0, 0], p = 0; p < f.length; p++) m[0] += f[p][0], m[1] += f[p][1], m[2] += f[p][2];
                    m[0] /= f.length, m[1] /= f.length, m[2] /= f.length, g = 4 * (u * n + l), c[g] = (m[0] + 1) / 2 * 255 | 0, c[g + 1] = (m[1] + 1) / 2 * 255 | 0, c[g + 2] = 255 * m[2] | 0, c[g + 3] = 255
                }
            return a.putImageData(h, 0, 0), o
        },
        generateDataTexture: function(t, e, r) {
            var n = t * e,
                i = new Uint8Array(3 * n),
                o = Math.floor(255 * r.r),
                a = Math.floor(255 * r.g);
            r = Math.floor(255 * r.b);
            for (var s = 0; s < n; s++) i[3 * s] = o, i[3 * s + 1] = a, i[3 * s + 2] = r;
            return t = new THREE.DataTexture(i, t, e, THREE.RGBFormat), t.needsUpdate = !0, t
        }
    }, THREE.SceneUtils = {
        createMultiMaterialObject: function(t, e) {
            for (var r = new THREE.Object3D, n = 0, i = e.length; n < i; n++) r.add(new THREE.Mesh(t, e[n]));
            return r
        },
        detach: function(t, e, r) {
            t.applyMatrix(e.matrixWorld), e.remove(t), r.add(t)
        },
        attach: function(t, e, r) {
            var n = new THREE.Matrix4;
            n.getInverse(r.matrixWorld), t.applyMatrix(n), e.remove(t), r.add(t)
        }
    }, THREE.FontUtils = {
        faces: {},
        face: "helvetiker",
        weight: "normal",
        style: "normal",
        size: 150,
        divisions: 10,
        getFace: function() {
            try {
                return this.faces[this.face][this.weight][this.style]
            } catch (t) {
                throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
            }
        },
        loadFace: function(t) {
            var e = t.familyName.toLowerCase();
            return this.faces[e] = this.faces[e] || {}, this.faces[e][t.cssFontWeight] = this.faces[e][t.cssFontWeight] || {}, this.faces[e][t.cssFontWeight][t.cssFontStyle] = t, this.faces[e][t.cssFontWeight][t.cssFontStyle] = t
        },
        drawText: function(t) {
            var e = this.getFace(),
                r = this.size / e.resolution,
                n = 0,
                i = String(t).split(""),
                o = i.length,
                a = [];
            for (t = 0; t < o; t++) {
                var s = new THREE.Path,
                    s = this.extractGlyphPoints(i[t], e, r, n, s),
                    n = n + s.offset;
                a.push(s.path)
            }
            return {
                paths: a,
                offset: n / 2
            }
        },
        extractGlyphPoints: function(t, e, r, n, i) {
            var o, a, s, h, c, l, u, f, p, d, E, m = [],
                g = e.glyphs[t] || e.glyphs["?"];
            if (g) {
                if (g.o)
                    for (e = g._cachedOutline || (g._cachedOutline = g.o.split(" ")), h = e.length, t = 0; t < h;) switch (s = e[t++]) {
                        case "m":
                            s = e[t++] * r + n, c = e[t++] * r, i.moveTo(s, c);
                            break;
                        case "l":
                            s = e[t++] * r + n, c = e[t++] * r, i.lineTo(s, c);
                            break;
                        case "q":
                            if (s = e[t++] * r + n, c = e[t++] * r, f = e[t++] * r + n, p = e[t++] * r, i.quadraticCurveTo(f, p, s, c), o = m[m.length - 1])
                                for (l = o.x, u = o.y, o = 1, a = this.divisions; o <= a; o++) {
                                    var v = o / a;
                                    THREE.Shape.Utils.b2(v, l, f, s), THREE.Shape.Utils.b2(v, u, p, c)
                                }
                            break;
                        case "b":
                            if (s = e[t++] * r + n, c = e[t++] * r, f = e[t++] * r + n, p = e[t++] * r, d = e[t++] * r + n, E = e[t++] * r, i.bezierCurveTo(f, p, d, E, s, c), o = m[m.length - 1])
                                for (l = o.x, u = o.y, o = 1, a = this.divisions; o <= a; o++) v = o / a, THREE.Shape.Utils.b3(v, l, f, d, s), THREE.Shape.Utils.b3(v, u, p, E, c)
                    }
                return {
                    offset: g.ha * r,
                    path: i
                }
            }
        }
    }, THREE.FontUtils.generateShapes = function(t, e) {
        e = e || {};
        var r = void 0 !== e.curveSegments ? e.curveSegments : 4,
            n = void 0 !== e.font ? e.font : "helvetiker",
            i = void 0 !== e.weight ? e.weight : "normal",
            o = void 0 !== e.style ? e.style : "normal";
        for (THREE.FontUtils.size = void 0 !== e.size ? e.size : 100, THREE.FontUtils.divisions = r, THREE.FontUtils.face = n, THREE.FontUtils.weight = i, THREE.FontUtils.style = o, r = THREE.FontUtils.drawText(t).paths, n = [], i = 0, o = r.length; i < o; i++) Array.prototype.push.apply(n, r[i].toShapes());
        return n
    },
    function(t) {
        var e = function(t) {
            for (var e = t.length, r = 0, n = e - 1, i = 0; i < e; n = i++) r += t[n].x * t[i].y - t[i].x * t[n].y;
            return .5 * r
        };
        return t.Triangulate = function(t, r) {
            var n = t.length;
            if (3 > n) return null;
            var i, o, a, s = [],
                h = [],
                c = [];
            if (0 < e(t))
                for (o = 0; o < n; o++) h[o] = o;
            else
                for (o = 0; o < n; o++) h[o] = n - 1 - o;
            var l = 2 * n;
            for (o = n - 1; 2 < n;) {
                if (0 >= l--) {
                    THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");
                    break
                }
                i = o, n <= i && (i = 0), o = i + 1, n <= o && (o = 0), a = o + 1, n <= a && (a = 0);
                var u;
                t: {
                    var f = u = void 0,
                        p = void 0,
                        d = void 0,
                        E = void 0,
                        m = void 0,
                        g = void 0,
                        v = void 0,
                        y = void 0,
                        f = t[h[i]].x,
                        p = t[h[i]].y,
                        d = t[h[o]].x,
                        E = t[h[o]].y,
                        m = t[h[a]].x,
                        g = t[h[a]].y;
                    if (1e-10 > (d - f) * (g - p) - (E - p) * (m - f)) u = !1;
                    else {
                        var T = void 0,
                            R = void 0,
                            x = void 0,
                            H = void 0,
                            b = void 0,
                            _ = void 0,
                            w = void 0,
                            M = void 0,
                            S = void 0,
                            A = void 0,
                            S = M = w = y = v = void 0,
                            T = m - d,
                            R = g - E,
                            x = f - m,
                            H = p - g,
                            b = d - f,
                            _ = E - p;
                        for (u = 0; u < n; u++)
                            if (v = t[h[u]].x, y = t[h[u]].y, !(v === f && y === p || v === d && y === E || v === m && y === g) && (w = v - f, M = y - p, S = v - d, A = y - E, v -= m, y -= g, S = T * A - R * S, w = b * M - _ * w, M = x * y - H * v, -1e-10 <= S && -1e-10 <= M && -1e-10 <= w)) {
                                u = !1;
                                break t
                            }
                        u = !0
                    }
                }
                if (u) {
                    for (s.push([t[h[i]], t[h[o]], t[h[a]]]), c.push([h[i], h[o], h[a]]), i = o, a = o + 1; a < n; i++, a++) h[i] = h[a];
                    n--, l = 2 * n
                }
            }
            return r ? c : s
        }, t.Triangulate.area = e, t
    }(THREE.FontUtils), self._typeface_js = {
        faces: THREE.FontUtils.faces,
        loadFace: THREE.FontUtils.loadFace
    }, THREE.typeface_js = self._typeface_js, THREE.Audio = function(t) {
        THREE.Object3D.call(this), this.type = "Audio", this.context = t.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain), this.autoplay = !1, this.startTime = 0, this.isPlaying = !1
    }, THREE.Audio.prototype = Object.create(THREE.Object3D.prototype), THREE.Audio.prototype.constructor = THREE.Audio, THREE.Audio.prototype.load = function(t) {
        var e = this,
            r = new XMLHttpRequest;
        return r.open("GET", t, !0), r.responseType = "arraybuffer", r.onload = function(t) {
            e.context.decodeAudioData(this.response, function(t) {
                e.source.buffer = t, e.autoplay && e.play()
            })
        }, r.send(), this
    }, THREE.Audio.prototype.play = function() {
        if (!0 === this.isPlaying) THREE.warn("THREE.Audio: Audio is already playing.");
        else {
            var t = this.context.createBufferSource();
            t.buffer = this.source.buffer, t.loop = this.source.loop, t.onended = this.source.onended, t.connect(this.panner), t.start(0, this.startTime), this.isPlaying = !0, this.source = t
        }
    }, THREE.Audio.prototype.pause = function() {
        this.source.stop(), this.startTime = this.context.currentTime
    }, THREE.Audio.prototype.stop = function() {
        this.source.stop(), this.startTime = 0
    }, THREE.Audio.prototype.onEnded = function() {
        this.isPlaying = !1
    }, THREE.Audio.prototype.setLoop = function(t) {
        this.source.loop = t
    }, THREE.Audio.prototype.setRefDistance = function(t) {
        this.panner.refDistance = t
    }, THREE.Audio.prototype.setRolloffFactor = function(t) {
        this.panner.rolloffFactor = t
    }, THREE.Audio.prototype.setVolume = function(t) {
        this.gain.gain.value = t
    }, THREE.Audio.prototype.updateMatrixWorld = function() {
        var t = new THREE.Vector3;
        return function(e) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
        }
    }(), THREE.AudioListener = function() {
        THREE.Object3D.call(this), this.type = "AudioListener", this.context = new(window.AudioContext || window.webkitAudioContext)
    }, THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype), THREE.AudioListener.prototype.constructor = THREE.AudioListener, THREE.AudioListener.prototype.updateMatrixWorld = function() {
        var t = new THREE.Vector3,
            e = new THREE.Quaternion,
            r = new THREE.Vector3,
            n = new THREE.Vector3,
            i = new THREE.Vector3,
            o = new THREE.Vector3;
        return function(a) {
            THREE.Object3D.prototype.updateMatrixWorld.call(this, a), a = this.context.listener;
            var s = this.up;
            this.matrixWorld.decompose(t, e, r), n.set(0, 0, -1).applyQuaternion(e), i.subVectors(t, o), a.setPosition(t.x, t.y, t.z), a.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z), a.setVelocity(i.x, i.y, i.z), o.copy(t)
        }
    }(), THREE.Curve = function() {}, THREE.Curve.prototype.getPoint = function(t) {
        return THREE.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
    }, THREE.Curve.prototype.getPointAt = function(t) {
        return t = this.getUtoTmapping(t), this.getPoint(t)
    }, THREE.Curve.prototype.getPoints = function(t) {
        t || (t = 5);
        var e, r = [];
        for (e = 0; e <= t; e++) r.push(this.getPoint(e / t));
        return r
    }, THREE.Curve.prototype.getSpacedPoints = function(t) {
        t || (t = 5);
        var e, r = [];
        for (e = 0; e <= t; e++) r.push(this.getPointAt(e / t));
        return r
    }, THREE.Curve.prototype.getLength = function() {
        var t = this.getLengths();
        return t[t.length - 1]
    }, THREE.Curve.prototype.getLengths = function(t) {
        if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var e, r, n = [],
            i = this.getPoint(0),
            o = 0;
        for (n.push(0), r = 1; r <= t; r++) e = this.getPoint(r / t), o += e.distanceTo(i), n.push(o), i = e;
        return this.cacheArcLengths = n
    }, THREE.Curve.prototype.updateArcLengths = function() {
        this.needsUpdate = !0, this.getLengths()
    }, THREE.Curve.prototype.getUtoTmapping = function(t, e) {
        var r, n = this.getLengths(),
            i = 0,
            o = n.length;
        r = e ? e : t * n[o - 1];
        for (var a, s = 0, h = o - 1; s <= h;)
            if (i = Math.floor(s + (h - s) / 2), a = n[i] - r, 0 > a) s = i + 1;
            else {
                if (!(0 < a)) {
                    h = i;
                    break
                }
                h = i - 1
            }
        return i = h, n[i] == r ? i / (o - 1) : (s = n[i], n = (i + (r - s) / (n[i + 1] - s)) / (o - 1))
    }, THREE.Curve.prototype.getTangent = function(t) {
        var e = t - 1e-4;
        return t += 1e-4, 0 > e && (e = 0), 1 < t && (t = 1), e = this.getPoint(e), this.getPoint(t).clone().sub(e).normalize()
    }, THREE.Curve.prototype.getTangentAt = function(t) {
        return t = this.getUtoTmapping(t), this.getTangent(t)
    }, THREE.Curve.Utils = {
        tangentQuadraticBezier: function(t, e, r, n) {
            return 2 * (1 - t) * (r - e) + 2 * t * (n - r)
        },
        tangentCubicBezier: function(t, e, r, n, i) {
            return -3 * e * (1 - t) * (1 - t) + 3 * r * (1 - t) * (1 - t) - 6 * t * r * (1 - t) + 6 * t * n * (1 - t) - 3 * t * t * n + 3 * t * t * i
        },
        tangentSpline: function(t, e, r, n, i) {
            return 6 * t * t - 6 * t + (3 * t * t - 4 * t + 1) + (-6 * t * t + 6 * t) + (3 * t * t - 2 * t)
        },
        interpolate: function(t, e, r, n, i) {
            t = .5 * (r - t), n = .5 * (n - e);
            var o = i * i;
            return (2 * e - 2 * r + t + n) * i * o + (-3 * e + 3 * r - 2 * t - n) * o + t * i + e
        }
    }, THREE.Curve.create = function(t, e) {
        return t.prototype = Object.create(THREE.Curve.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, THREE.CurvePath = function() {
        this.curves = [], this.bends = [], this.autoClose = !1
    }, THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype), THREE.CurvePath.prototype.constructor = THREE.CurvePath, THREE.CurvePath.prototype.add = function(t) {
        this.curves.push(t)
    }, THREE.CurvePath.prototype.checkConnection = function() {}, THREE.CurvePath.prototype.closePath = function() {
        var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new THREE.LineCurve(e, t))
    }, THREE.CurvePath.prototype.getPoint = function(t) {
        var e = t * this.getLength(),
            r = this.getCurveLengths();
        for (t = 0; t < r.length;) {
            if (r[t] >= e) return e = r[t] - e, t = this.curves[t], e = 1 - e / t.getLength(), t.getPointAt(e);
            t++
        }
        return null
    }, THREE.CurvePath.prototype.getLength = function() {
        var t = this.getCurveLengths();
        return t[t.length - 1]
    }, THREE.CurvePath.prototype.getCurveLengths = function() {
        if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
        var t, e = [],
            r = 0,
            n = this.curves.length;
        for (t = 0; t < n; t++) r += this.curves[t].getLength(), e.push(r);
        return this.cacheLengths = e
    }, THREE.CurvePath.prototype.getBoundingBox = function() {
        var t, e, r, n, i, o, a = this.getPoints();
        t = e = Number.NEGATIVE_INFINITY, n = i = Number.POSITIVE_INFINITY;
        var s, h, c, l, u = a[0] instanceof THREE.Vector3;
        for (l = u ? new THREE.Vector3 : new THREE.Vector2, h = 0, c = a.length; h < c; h++) s = a[h], s.x > t ? t = s.x : s.x < n && (n = s.x), s.y > e ? e = s.y : s.y < i && (i = s.y), u && (s.z > r ? r = s.z : s.z < o && (o = s.z)), l.add(s);
        return a = {
            minX: n,
            minY: i,
            maxX: t,
            maxY: e
        }, u && (a.maxZ = r, a.minZ = o), a
    }, THREE.CurvePath.prototype.createPointsGeometry = function(t) {
        return t = this.getPoints(t, !0), this.createGeometry(t)
    }, THREE.CurvePath.prototype.createSpacedPointsGeometry = function(t) {
        return t = this.getSpacedPoints(t, !0), this.createGeometry(t)
    }, THREE.CurvePath.prototype.createGeometry = function(t) {
        for (var e = new THREE.Geometry, r = 0; r < t.length; r++) e.vertices.push(new THREE.Vector3(t[r].x, t[r].y, t[r].z || 0));
        return e
    }, THREE.CurvePath.prototype.addWrapPath = function(t) {
        this.bends.push(t)
    }, THREE.CurvePath.prototype.getTransformedPoints = function(t, e) {
        var r, n, i = this.getPoints(t);
        for (e || (e = this.bends), r = 0, n = e.length; r < n; r++) i = this.getWrapPoints(i, e[r]);
        return i
    }, THREE.CurvePath.prototype.getTransformedSpacedPoints = function(t, e) {
        var r, n, i = this.getSpacedPoints(t);
        for (e || (e = this.bends), r = 0, n = e.length; r < n; r++) i = this.getWrapPoints(i, e[r]);
        return i
    }, THREE.CurvePath.prototype.getWrapPoints = function(t, e) {
        var r, n, i, o, a, s, h = this.getBoundingBox();
        for (r = 0, n = t.length; r < n; r++) i = t[r], o = i.x, a = i.y, s = o / h.maxX, s = e.getUtoTmapping(s, o), o = e.getPoint(s), s = e.getTangent(s), s.set(-s.y, s.x).multiplyScalar(a), i.x = o.x + s.x, i.y = o.y + s.y;
        return t
    }, THREE.Gyroscope = function() {
        THREE.Object3D.call(this)
    }, THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype), THREE.Gyroscope.prototype.constructor = THREE.Gyroscope, THREE.Gyroscope.prototype.updateMatrixWorld = function() {
        var t = new THREE.Vector3,
            e = new THREE.Quaternion,
            r = new THREE.Vector3,
            n = new THREE.Vector3,
            i = new THREE.Quaternion,
            o = new THREE.Vector3;
        return function(a) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || a) && (this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(n, i, o), this.matrix.decompose(t, e, r), this.matrixWorld.compose(n, e, o)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0);
            for (var s = 0, h = this.children.length; s < h; s++) this.children[s].updateMatrixWorld(a)
        }
    }(), THREE.Path = function(t) {
        THREE.CurvePath.call(this), this.actions = [], t && this.fromPoints(t)
    }, THREE.Path.prototype = Object.create(THREE.CurvePath.prototype), THREE.Path.prototype.constructor = THREE.Path, THREE.PathActions = {
        MOVE_TO: "moveTo",
        LINE_TO: "lineTo",
        QUADRATIC_CURVE_TO: "quadraticCurveTo",
        BEZIER_CURVE_TO: "bezierCurveTo",
        CSPLINE_THRU: "splineThru",
        ARC: "arc",
        ELLIPSE: "ellipse"
    }, THREE.Path.prototype.fromPoints = function(t) {
        this.moveTo(t[0].x, t[0].y);
        for (var e = 1, r = t.length; e < r; e++) this.lineTo(t[e].x, t[e].y)
    }, THREE.Path.prototype.moveTo = function(t, e) {
        var r = Array.prototype.slice.call(arguments);
        this.actions.push({
            action: THREE.PathActions.MOVE_TO,
            args: r
        })
    }, THREE.Path.prototype.lineTo = function(t, e) {
        var r = Array.prototype.slice.call(arguments),
            n = this.actions[this.actions.length - 1].args,
            n = new THREE.LineCurve(new THREE.Vector2(n[n.length - 2], n[n.length - 1]), new THREE.Vector2(t, e));
        this.curves.push(n), this.actions.push({
            action: THREE.PathActions.LINE_TO,
            args: r
        })
    }, THREE.Path.prototype.quadraticCurveTo = function(t, e, r, n) {
        var i = Array.prototype.slice.call(arguments),
            o = this.actions[this.actions.length - 1].args,
            o = new THREE.QuadraticBezierCurve(new THREE.Vector2(o[o.length - 2], o[o.length - 1]), new THREE.Vector2(t, e), new THREE.Vector2(r, n));
        this.curves.push(o), this.actions.push({
            action: THREE.PathActions.QUADRATIC_CURVE_TO,
            args: i
        })
    }, THREE.Path.prototype.bezierCurveTo = function(t, e, r, n, i, o) {
        var a = Array.prototype.slice.call(arguments),
            s = this.actions[this.actions.length - 1].args,
            s = new THREE.CubicBezierCurve(new THREE.Vector2(s[s.length - 2], s[s.length - 1]), new THREE.Vector2(t, e), new THREE.Vector2(r, n), new THREE.Vector2(i, o));
        this.curves.push(s), this.actions.push({
            action: THREE.PathActions.BEZIER_CURVE_TO,
            args: a
        })
    }, THREE.Path.prototype.splineThru = function(t) {
        var e = Array.prototype.slice.call(arguments),
            r = this.actions[this.actions.length - 1].args,
            r = [new THREE.Vector2(r[r.length - 2], r[r.length - 1])];
        Array.prototype.push.apply(r, t), r = new THREE.SplineCurve(r), this.curves.push(r), this.actions.push({
            action: THREE.PathActions.CSPLINE_THRU,
            args: e
        })
    }, THREE.Path.prototype.arc = function(t, e, r, n, i, o) {
        var a = this.actions[this.actions.length - 1].args;
        this.absarc(t + a[a.length - 2], e + a[a.length - 1], r, n, i, o)
    }, THREE.Path.prototype.absarc = function(t, e, r, n, i, o) {
        this.absellipse(t, e, r, r, n, i, o)
    }, THREE.Path.prototype.ellipse = function(t, e, r, n, i, o, a) {
        var s = this.actions[this.actions.length - 1].args;
        this.absellipse(t + s[s.length - 2], e + s[s.length - 1], r, n, i, o, a)
    }, THREE.Path.prototype.absellipse = function(t, e, r, n, i, o, a) {
        var s = Array.prototype.slice.call(arguments),
            h = new THREE.EllipseCurve(t, e, r, n, i, o, a);
        this.curves.push(h), h = h.getPoint(1), s.push(h.x), s.push(h.y), this.actions.push({
            action: THREE.PathActions.ELLIPSE,
            args: s
        })
    }, THREE.Path.prototype.getSpacedPoints = function(t, e) {
        t || (t = 40);
        for (var r = [], n = 0; n < t; n++) r.push(this.getPoint(n / t));
        return r
    }, THREE.Path.prototype.getPoints = function(t, e) {
        if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(t, e);
        t = t || 12;
        var r, n, i, o, a, s, h, c, l, u, f, p, d, E = [];
        for (r = 0, n = this.actions.length; r < n; r++) switch (i = this.actions[r], o = i.action, i = i.args, o) {
            case THREE.PathActions.MOVE_TO:
                E.push(new THREE.Vector2(i[0], i[1]));
                break;
            case THREE.PathActions.LINE_TO:
                E.push(new THREE.Vector2(i[0], i[1]));
                break;
            case THREE.PathActions.QUADRATIC_CURVE_TO:
                for (a = i[2], s = i[3], l = i[0], u = i[1], 0 < E.length ? (o = E[E.length - 1], f = o.x, p = o.y) : (o = this.actions[r - 1].args, f = o[o.length - 2], p = o[o.length - 1]), i = 1; i <= t; i++) d = i / t, o = THREE.Shape.Utils.b2(d, f, l, a), d = THREE.Shape.Utils.b2(d, p, u, s), E.push(new THREE.Vector2(o, d));
                break;
            case THREE.PathActions.BEZIER_CURVE_TO:
                for (a = i[4], s = i[5], l = i[0], u = i[1], h = i[2], c = i[3], 0 < E.length ? (o = E[E.length - 1], f = o.x, p = o.y) : (o = this.actions[r - 1].args, f = o[o.length - 2], p = o[o.length - 1]), i = 1; i <= t; i++) d = i / t, o = THREE.Shape.Utils.b3(d, f, l, h, a), d = THREE.Shape.Utils.b3(d, p, u, c, s), E.push(new THREE.Vector2(o, d));
                break;
            case THREE.PathActions.CSPLINE_THRU:
                for (o = this.actions[r - 1].args, d = [new THREE.Vector2(o[o.length - 2], o[o.length - 1])], o = t * i[0].length, d = d.concat(i[0]), d = new THREE.SplineCurve(d), i = 1; i <= o; i++) E.push(d.getPointAt(i / o));
                break;
            case THREE.PathActions.ARC:
                for (a = i[0], s = i[1], u = i[2], h = i[3], o = i[4], l = !!i[5], f = o - h, p = 2 * t, i = 1; i <= p; i++) d = i / p, l || (d = 1 - d), d = h + d * f, o = a + u * Math.cos(d), d = s + u * Math.sin(d), E.push(new THREE.Vector2(o, d));
                break;
            case THREE.PathActions.ELLIPSE:
                for (a = i[0], s = i[1], u = i[2], c = i[3], h = i[4], o = i[5], l = !!i[6], f = o - h, p = 2 * t, i = 1; i <= p; i++) d = i / p, l || (d = 1 - d), d = h + d * f, o = a + u * Math.cos(d), d = s + c * Math.sin(d), E.push(new THREE.Vector2(o, d))
        }
        return r = E[E.length - 1], 1e-10 > Math.abs(r.x - E[0].x) && 1e-10 > Math.abs(r.y - E[0].y) && E.splice(E.length - 1, 1), e && E.push(E[0]), E
    }, THREE.Path.prototype.toShapes = function(t, e) {
        function r(t) {
            for (var e = [], r = 0, n = t.length; r < n; r++) {
                var i = t[r],
                    o = new THREE.Shape;
                o.actions = i.actions, o.curves = i.curves, e.push(o)
            }
            return e
        }

        function n(t, e) {
            for (var r = e.length, n = !1, i = r - 1, o = 0; o < r; i = o++) {
                var a = e[i],
                    s = e[o],
                    h = s.x - a.x,
                    c = s.y - a.y;
                if (1e-10 < Math.abs(c)) {
                    if (0 > c && (a = e[o], h = -h, s = e[i], c = -c), !(t.y < a.y || t.y > s.y))
                        if (t.y == a.y) {
                            if (t.x == a.x) return !0
                        } else {
                            if (i = c * (t.x - a.x) - h * (t.y - a.y), 0 == i) return !0;
                            0 > i || (n = !n)
                        }
                } else if (t.y == a.y && (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x)) return !0
            }
            return n
        }
        var i = function(t) {
            var e, r, n, i, o = [],
                a = new THREE.Path;
            for (e = 0, r = t.length; e < r; e++) n = t[e], i = n.args, n = n.action, n == THREE.PathActions.MOVE_TO && 0 != a.actions.length && (o.push(a), a = new THREE.Path), a[n].apply(a, i);
            return 0 != a.actions.length && o.push(a), o
        }(this.actions);
        if (0 == i.length) return [];
        if (!0 === e) return r(i);
        var o, a, s, h = [];
        if (1 == i.length) return a = i[0], s = new THREE.Shape, s.actions = a.actions, s.curves = a.curves, h.push(s), h;
        var c = !THREE.Shape.Utils.isClockWise(i[0].getPoints()),
            c = t ? !c : c;
        s = [];
        var l, u = [],
            f = [],
            p = 0;
        u[p] = void 0, f[p] = [];
        var d, E;
        for (d = 0, E = i.length; d < E; d++) a = i[d], l = a.getPoints(), o = THREE.Shape.Utils.isClockWise(l), (o = t ? !o : o) ? (!c && u[p] && p++, u[p] = {
            s: new THREE.Shape,
            p: l
        }, u[p].s.actions = a.actions, u[p].s.curves = a.curves, c && p++, f[p] = []) : f[p].push({
            h: a,
            p: l[0]
        });
        if (!u[0]) return r(i);
        if (1 < u.length) {
            for (d = !1, E = [], a = 0, i = u.length; a < i; a++) s[a] = [];
            for (a = 0, i = u.length; a < i; a++)
                for (o = f[a], c = 0; c < o.length; c++) {
                    p = o[c], l = !0;
                    for (var m = 0; m < u.length; m++) n(p.p, u[m].p) && (a != m && E.push({
                        froms: a,
                        tos: m,
                        hole: c
                    }), l ? (l = !1, s[m].push(p)) : d = !0);
                    l && s[a].push(p)
                }
            0 < E.length && (d || (f = s))
        }
        for (d = 0, E = u.length; d < E; d++)
            for (s = u[d].s, h.push(s), a = f[d], i = 0, o = a.length; i < o; i++) s.holes.push(a[i].h);
        return h
    }, THREE.Shape = function() {
        THREE.Path.apply(this, arguments), this.holes = []
    }, THREE.Shape.prototype = Object.create(THREE.Path.prototype), THREE.Shape.prototype.constructor = THREE.Shape, THREE.Shape.prototype.extrude = function(t) {
        return new THREE.ExtrudeGeometry(this, t)
    }, THREE.Shape.prototype.makeGeometry = function(t) {
        return new THREE.ShapeGeometry(this, t)
    }, THREE.Shape.prototype.getPointsHoles = function(t) {
        var e, r = this.holes.length,
            n = [];
        for (e = 0; e < r; e++) n[e] = this.holes[e].getTransformedPoints(t, this.bends);
        return n
    }, THREE.Shape.prototype.getSpacedPointsHoles = function(t) {
        var e, r = this.holes.length,
            n = [];
        for (e = 0; e < r; e++) n[e] = this.holes[e].getTransformedSpacedPoints(t, this.bends);
        return n
    }, THREE.Shape.prototype.extractAllPoints = function(t) {
        return {
            shape: this.getTransformedPoints(t),
            holes: this.getPointsHoles(t)
        }
    }, THREE.Shape.prototype.extractPoints = function(t) {
        return this.useSpacedPoints ? this.extractAllSpacedPoints(t) : this.extractAllPoints(t)
    }, THREE.Shape.prototype.extractAllSpacedPoints = function(t) {
        return {
            shape: this.getTransformedSpacedPoints(t),
            holes: this.getSpacedPointsHoles(t)
        }
    }, THREE.Shape.Utils = {
        triangulateShape: function(t, e) {
            function r(t, e, r) {
                return t.x != e.x ? t.x < e.x ? t.x <= r.x && r.x <= e.x : e.x <= r.x && r.x <= t.x : t.y < e.y ? t.y <= r.y && r.y <= e.y : e.y <= r.y && r.y <= t.y;
            }

            function n(t, e, n, i, o) {
                var a = e.x - t.x,
                    s = e.y - t.y,
                    h = i.x - n.x,
                    c = i.y - n.y,
                    l = t.x - n.x,
                    u = t.y - n.y,
                    f = s * h - a * c,
                    p = s * l - a * u;
                if (1e-10 < Math.abs(f)) {
                    if (0 < f) {
                        if (0 > p || p > f) return [];
                        if (h = c * l - h * u, 0 > h || h > f) return []
                    } else {
                        if (0 < p || p < f) return [];
                        if (h = c * l - h * u, 0 < h || h < f) return []
                    }
                    return 0 == h ? !o || 0 != p && p != f ? [t] : [] : h == f ? !o || 0 != p && p != f ? [e] : [] : 0 == p ? [n] : p == f ? [i] : (o = h / f, [{
                        x: t.x + o * a,
                        y: t.y + o * s
                    }])
                }
                return 0 != p || c * l != h * u ? [] : (s = 0 == a && 0 == s, h = 0 == h && 0 == c, s && h ? t.x != n.x || t.y != n.y ? [] : [t] : s ? r(n, i, t) ? [t] : [] : h ? r(t, e, n) ? [n] : [] : (0 != a ? (t.x < e.x ? (a = t, h = t.x, s = e, t = e.x) : (a = e, h = e.x, s = t, t = t.x), n.x < i.x ? (e = n, f = n.x, c = i, n = i.x) : (e = i, f = i.x, c = n, n = n.x)) : (t.y < e.y ? (a = t, h = t.y, s = e, t = e.y) : (a = e, h = e.y, s = t, t = t.y), n.y < i.y ? (e = n, f = n.y, c = i, n = i.y) : (e = i, f = i.y, c = n, n = n.y)), h <= f ? t < f ? [] : t == f ? o ? [] : [e] : t <= n ? [e, s] : [e, c] : h > n ? [] : h == n ? o ? [] : [a] : t <= n ? [a, s] : [a, c]))
            }

            function i(t, e, r, n) {
                var i = e.x - t.x,
                    o = e.y - t.y;
                e = r.x - t.x, r = r.y - t.y;
                var a = n.x - t.x;
                return n = n.y - t.y, t = i * r - o * e, i = i * n - o * a, 1e-10 < Math.abs(t) ? (e = a * r - n * e, 0 < t ? 0 <= i && 0 <= e : 0 <= i || 0 <= e) : 0 < i
            }
            var o, a, s, h, c, l = {};
            for (s = t.concat(), o = 0, a = e.length; o < a; o++) Array.prototype.push.apply(s, e[o]);
            for (o = 0, a = s.length; o < a; o++) c = s[o].x + ":" + s[o].y, void 0 !== l[c] && THREE.warn("THREE.Shape: Duplicate point", c), l[c] = o;
            o = function(t, e) {
                function r(t, e) {
                    var r = m.length - 1,
                        n = t - 1;
                    0 > n && (n = r);
                    var o = t + 1;
                    return o > r && (o = 0), !!(r = i(m[t], m[n], m[o], s[e])) && (r = s.length - 1, n = e - 1, 0 > n && (n = r), o = e + 1, o > r && (o = 0), !!(r = i(s[e], s[n], s[o], m[t])))
                }

                function o(t, e) {
                    var r, i;
                    for (r = 0; r < m.length; r++)
                        if (i = r + 1, i %= m.length, i = n(t, e, m[r], m[i], !0), 0 < i.length) return !0;
                    return !1
                }

                function a(t, r) {
                    var i, o, a, s;
                    for (i = 0; i < g.length; i++)
                        for (o = e[g[i]], a = 0; a < o.length; a++)
                            if (s = a + 1, s %= o.length, s = n(t, r, o[a], o[s], !0), 0 < s.length) return !0;
                    return !1
                }
                var s, h, c, l, u, f, p, d, E, m = t.concat(),
                    g = [],
                    v = [],
                    y = 0;
                for (h = e.length; y < h; y++) g.push(y);
                p = 0;
                for (var T = 2 * g.length; 0 < g.length;) {
                    if (T--, 0 > T) {
                        console.log("Infinite Loop! Holes left:" + g.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (c = p; c < m.length; c++) {
                        for (l = m[c], h = -1, y = 0; y < g.length; y++)
                            if (u = g[y], f = l.x + ":" + l.y + ":" + u, void 0 === v[f]) {
                                for (s = e[u], d = 0; d < s.length; d++)
                                    if (u = s[d], r(c, d) && !o(l, u) && !a(l, u)) {
                                        h = d, g.splice(y, 1), p = m.slice(0, c + 1), u = m.slice(c), d = s.slice(h), E = s.slice(0, h + 1), m = p.concat(d).concat(E).concat(u), p = c;
                                        break
                                    }
                                if (0 <= h) break;
                                v[f] = !0
                            }
                        if (0 <= h) break
                    }
                }
                return m
            }(t, e);
            var u = THREE.FontUtils.Triangulate(o, !1);
            for (o = 0, a = u.length; o < a; o++)
                for (h = u[o], s = 0; 3 > s; s++) c = h[s].x + ":" + h[s].y, c = l[c], void 0 !== c && (h[s] = c);
            return u.concat()
        },
        isClockWise: function(t) {
            return 0 > THREE.FontUtils.Triangulate.area(t)
        },
        b2p0: function(t, e) {
            var r = 1 - t;
            return r * r * e
        },
        b2p1: function(t, e) {
            return 2 * (1 - t) * t * e
        },
        b2p2: function(t, e) {
            return t * t * e
        },
        b2: function(t, e, r, n) {
            return this.b2p0(t, e) + this.b2p1(t, r) + this.b2p2(t, n)
        },
        b3p0: function(t, e) {
            var r = 1 - t;
            return r * r * r * e
        },
        b3p1: function(t, e) {
            var r = 1 - t;
            return 3 * r * r * t * e
        },
        b3p2: function(t, e) {
            return 3 * (1 - t) * t * t * e
        },
        b3p3: function(t, e) {
            return t * t * t * e
        },
        b3: function(t, e, r, n, i) {
            return this.b3p0(t, e) + this.b3p1(t, r) + this.b3p2(t, n) + this.b3p3(t, i)
        }
    }, THREE.LineCurve = function(t, e) {
        this.v1 = t, this.v2 = e
    }, THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.LineCurve.prototype.constructor = THREE.LineCurve, THREE.LineCurve.prototype.getPoint = function(t) {
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1), e
    }, THREE.LineCurve.prototype.getPointAt = function(t) {
        return this.getPoint(t)
    }, THREE.LineCurve.prototype.getTangent = function(t) {
        return this.v2.clone().sub(this.v1).normalize()
    }, THREE.QuadraticBezierCurve = function(t, e, r) {
        this.v0 = t, this.v1 = e, this.v2 = r
    }, THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve, THREE.QuadraticBezierCurve.prototype.getPoint = function(t) {
        var e = new THREE.Vector2;
        return e.x = THREE.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x), e.y = THREE.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y), e
    }, THREE.QuadraticBezierCurve.prototype.getTangent = function(t) {
        var e = new THREE.Vector2;
        return e.x = THREE.Curve.Utils.tangentQuadraticBezier(t, this.v0.x, this.v1.x, this.v2.x), e.y = THREE.Curve.Utils.tangentQuadraticBezier(t, this.v0.y, this.v1.y, this.v2.y), e.normalize()
    }, THREE.CubicBezierCurve = function(t, e, r, n) {
        this.v0 = t, this.v1 = e, this.v2 = r, this.v3 = n
    }, THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype), THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve, THREE.CubicBezierCurve.prototype.getPoint = function(t) {
        var e;
        return e = THREE.Shape.Utils.b3(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t = THREE.Shape.Utils.b3(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new THREE.Vector2(e, t)
    }, THREE.CubicBezierCurve.prototype.getTangent = function(t) {
        var e;
        return e = THREE.Curve.Utils.tangentCubicBezier(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t = THREE.Curve.Utils.tangentCubicBezier(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e = new THREE.Vector2(e, t), e.normalize(), e
    }, THREE.SplineCurve = function(t) {
        this.points = void 0 == t ? [] : t
    }, THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype), THREE.SplineCurve.prototype.constructor = THREE.SplineCurve, THREE.SplineCurve.prototype.getPoint = function(t) {
        var e = this.points;
        t *= e.length - 1;
        var r = Math.floor(t);
        t -= r;
        var n = e[0 == r ? r : r - 1],
            i = e[r],
            o = e[r > e.length - 2 ? e.length - 1 : r + 1],
            e = e[r > e.length - 3 ? e.length - 1 : r + 2],
            r = new THREE.Vector2;
        return r.x = THREE.Curve.Utils.interpolate(n.x, i.x, o.x, e.x, t), r.y = THREE.Curve.Utils.interpolate(n.y, i.y, o.y, e.y, t), r
    }, THREE.EllipseCurve = function(t, e, r, n, i, o, a) {
        this.aX = t, this.aY = e, this.xRadius = r, this.yRadius = n, this.aStartAngle = i, this.aEndAngle = o, this.aClockwise = a
    }, THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype), THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve, THREE.EllipseCurve.prototype.getPoint = function(t) {
        var e = this.aEndAngle - this.aStartAngle;
        return 0 > e && (e += 2 * Math.PI), e > 2 * Math.PI && (e -= 2 * Math.PI), t = !0 === this.aClockwise ? this.aEndAngle + (1 - t) * (2 * Math.PI - e) : this.aStartAngle + t * e, e = new THREE.Vector2, e.x = this.aX + this.xRadius * Math.cos(t), e.y = this.aY + this.yRadius * Math.sin(t), e
    }, THREE.ArcCurve = function(t, e, r, n, i, o) {
        THREE.EllipseCurve.call(this, t, e, r, r, n, i, o)
    }, THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype), THREE.ArcCurve.prototype.constructor = THREE.ArcCurve, THREE.LineCurve3 = THREE.Curve.create(function(t, e) {
        this.v1 = t, this.v2 = e
    }, function(t) {
        var e = new THREE.Vector3;
        return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
    }), THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(t, e, r) {
        this.v0 = t, this.v1 = e, this.v2 = r
    }, function(t) {
        var e = new THREE.Vector3;
        return e.x = THREE.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x), e.y = THREE.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y), e.z = THREE.Shape.Utils.b2(t, this.v0.z, this.v1.z, this.v2.z), e
    }), THREE.CubicBezierCurve3 = THREE.Curve.create(function(t, e, r, n) {
        this.v0 = t, this.v1 = e, this.v2 = r, this.v3 = n
    }, function(t) {
        var e = new THREE.Vector3;
        return e.x = THREE.Shape.Utils.b3(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e.y = THREE.Shape.Utils.b3(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e.z = THREE.Shape.Utils.b3(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z), e
    }), THREE.SplineCurve3 = THREE.Curve.create(function(t) {
        this.points = void 0 == t ? [] : t
    }, function(t) {
        var e = this.points;
        t *= e.length - 1;
        var r = Math.floor(t);
        t -= r;
        var n = e[0 == r ? r : r - 1],
            i = e[r],
            o = e[r > e.length - 2 ? e.length - 1 : r + 1],
            e = e[r > e.length - 3 ? e.length - 1 : r + 2],
            r = new THREE.Vector3;
        return r.x = THREE.Curve.Utils.interpolate(n.x, i.x, o.x, e.x, t), r.y = THREE.Curve.Utils.interpolate(n.y, i.y, o.y, e.y, t), r.z = THREE.Curve.Utils.interpolate(n.z, i.z, o.z, e.z, t), r
    }), THREE.ClosedSplineCurve3 = THREE.Curve.create(function(t) {
        this.points = void 0 == t ? [] : t
    }, function(t) {
        var e = this.points;
        t *= e.length - 0;
        var r = Math.floor(t);
        t -= r;
        var r = r + (0 < r ? 0 : (Math.floor(Math.abs(r) / e.length) + 1) * e.length),
            n = e[(r - 1) % e.length],
            i = e[r % e.length],
            o = e[(r + 1) % e.length],
            e = e[(r + 2) % e.length],
            r = new THREE.Vector3;
        return r.x = THREE.Curve.Utils.interpolate(n.x, i.x, o.x, e.x, t), r.y = THREE.Curve.Utils.interpolate(n.y, i.y, o.y, e.y, t), r.z = THREE.Curve.Utils.interpolate(n.z, i.z, o.z, e.z, t), r
    }), THREE.AnimationHandler = {
        LINEAR: 0,
        CATMULLROM: 1,
        CATMULLROM_FORWARD: 2,
        add: function() {
            THREE.warn("THREE.AnimationHandler.add() has been deprecated.")
        },
        get: function() {
            THREE.warn("THREE.AnimationHandler.get() has been deprecated.")
        },
        remove: function() {
            THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")
        },
        animations: [],
        init: function(t) {
            if (!0 === t.initialized) return t;
            for (var e = 0; e < t.hierarchy.length; e++) {
                for (var r = 0; r < t.hierarchy[e].keys.length; r++)
                    if (0 > t.hierarchy[e].keys[r].time && (t.hierarchy[e].keys[r].time = 0), void 0 !== t.hierarchy[e].keys[r].rot && !(t.hierarchy[e].keys[r].rot instanceof THREE.Quaternion)) {
                        var n = t.hierarchy[e].keys[r].rot;
                        t.hierarchy[e].keys[r].rot = (new THREE.Quaternion).fromArray(n)
                    }
                if (t.hierarchy[e].keys.length && void 0 !== t.hierarchy[e].keys[0].morphTargets) {
                    for (n = {}, r = 0; r < t.hierarchy[e].keys.length; r++)
                        for (var i = 0; i < t.hierarchy[e].keys[r].morphTargets.length; i++) {
                            var o = t.hierarchy[e].keys[r].morphTargets[i];
                            n[o] = -1
                        }
                    for (t.hierarchy[e].usedMorphTargets = n, r = 0; r < t.hierarchy[e].keys.length; r++) {
                        var a = {};
                        for (o in n) {
                            for (i = 0; i < t.hierarchy[e].keys[r].morphTargets.length; i++)
                                if (t.hierarchy[e].keys[r].morphTargets[i] === o) {
                                    a[o] = t.hierarchy[e].keys[r].morphTargetsInfluences[i];
                                    break
                                }
                            i === t.hierarchy[e].keys[r].morphTargets.length && (a[o] = 0)
                        }
                        t.hierarchy[e].keys[r].morphTargetsInfluences = a
                    }
                }
                for (r = 1; r < t.hierarchy[e].keys.length; r++) t.hierarchy[e].keys[r].time === t.hierarchy[e].keys[r - 1].time && (t.hierarchy[e].keys.splice(r, 1), r--);
                for (r = 0; r < t.hierarchy[e].keys.length; r++) t.hierarchy[e].keys[r].index = r
            }
            return t.initialized = !0, t
        },
        parse: function(t) {
            var e = function(t, r) {
                    r.push(t);
                    for (var n = 0; n < t.children.length; n++) e(t.children[n], r)
                },
                r = [];
            if (t instanceof THREE.SkinnedMesh)
                for (var n = 0; n < t.skeleton.bones.length; n++) r.push(t.skeleton.bones[n]);
            else e(t, r);
            return r
        },
        play: function(t) {
            -1 === this.animations.indexOf(t) && this.animations.push(t)
        },
        stop: function(t) {
            t = this.animations.indexOf(t), -1 !== t && this.animations.splice(t, 1)
        },
        update: function(t) {
            for (var e = 0; e < this.animations.length; e++) this.animations[e].resetBlendWeights();
            for (e = 0; e < this.animations.length; e++) this.animations[e].update(t)
        }
    }, THREE.Animation = function(t, e) {
        this.root = t, this.data = THREE.AnimationHandler.init(e), this.hierarchy = THREE.AnimationHandler.parse(t), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = !0, this.weight = 0, this.interpolationType = THREE.AnimationHandler.LINEAR
    }, THREE.Animation.prototype = {
        constructor: THREE.Animation,
        keyTypes: ["pos", "rot", "scl"],
        play: function(t, e) {
            this.currentTime = void 0 !== t ? t : 0, this.weight = void 0 !== e ? e : 1, this.isPlaying = !0, this.reset(), THREE.AnimationHandler.play(this)
        },
        stop: function() {
            this.isPlaying = !1, THREE.AnimationHandler.stop(this)
        },
        reset: function() {
            for (var t = 0, e = this.hierarchy.length; t < e; t++) {
                var r = this.hierarchy[t];
                void 0 === r.animationCache && (r.animationCache = {
                    animations: {},
                    blending: {
                        positionWeight: 0,
                        quaternionWeight: 0,
                        scaleWeight: 0
                    }
                });
                var n = this.data.name,
                    i = r.animationCache.animations,
                    o = i[n];
                for (void 0 === o && (o = {
                        prevKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        nextKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        originalMatrix: r.matrix
                    }, i[n] = o), r = 0; 3 > r; r++) {
                    for (var n = this.keyTypes[r], i = this.data.hierarchy[t].keys[0], a = this.getNextKeyWith(n, t, 1); a.time < this.currentTime && a.index > i.index;) i = a, a = this.getNextKeyWith(n, t, a.index + 1);
                    o.prevKey[n] = i, o.nextKey[n] = a
                }
            }
        },
        resetBlendWeights: function() {
            for (var t = 0, e = this.hierarchy.length; t < e; t++) {
                var r = this.hierarchy[t].animationCache;
                void 0 !== r && (r = r.blending, r.positionWeight = 0, r.quaternionWeight = 0, r.scaleWeight = 0)
            }
        },
        update: function() {
            var t = [],
                e = new THREE.Vector3,
                r = new THREE.Vector3,
                n = new THREE.Quaternion,
                i = function(t, e) {
                    var r, n, i, a, s, h, c = [],
                        l = [];
                    return r = (t.length - 1) * e, n = Math.floor(r), r -= n, c[0] = 0 === n ? n : n - 1, c[1] = n, c[2] = n > t.length - 2 ? n : n + 1, c[3] = n > t.length - 3 ? n : n + 2, n = t[c[0]], a = t[c[1]], s = t[c[2]], h = t[c[3]], c = r * r, i = r * c, l[0] = o(n[0], a[0], s[0], h[0], r, c, i), l[1] = o(n[1], a[1], s[1], h[1], r, c, i), l[2] = o(n[2], a[2], s[2], h[2], r, c, i), l
                },
                o = function(t, e, r, n, i, o, a) {
                    return t = .5 * (r - t), n = .5 * (n - e), (2 * (e - r) + t + n) * a + (-3 * (e - r) - 2 * t - n) * o + t * i + e
                };
            return function(o) {
                if (!1 !== this.isPlaying && (this.currentTime += o * this.timeScale, 0 !== this.weight)) {
                    o = this.data.length, (this.currentTime > o || 0 > this.currentTime) && (this.loop ? (this.currentTime %= o, 0 > this.currentTime && (this.currentTime += o), this.reset()) : this.stop()), o = 0;
                    for (var a = this.hierarchy.length; o < a; o++)
                        for (var s = this.hierarchy[o], h = s.animationCache.animations[this.data.name], c = s.animationCache.blending, l = 0; 3 > l; l++) {
                            var u = this.keyTypes[l],
                                f = h.prevKey[u],
                                p = h.nextKey[u];
                            if (0 < this.timeScale && p.time <= this.currentTime || 0 > this.timeScale && f.time >= this.currentTime) {
                                for (f = this.data.hierarchy[o].keys[0], p = this.getNextKeyWith(u, o, 1); p.time < this.currentTime && p.index > f.index;) f = p, p = this.getNextKeyWith(u, o, p.index + 1);
                                h.prevKey[u] = f, h.nextKey[u] = p
                            }
                            var d = (this.currentTime - f.time) / (p.time - f.time),
                                E = f[u],
                                m = p[u];
                            0 > d && (d = 0), 1 < d && (d = 1), "pos" === u ? this.interpolationType === THREE.AnimationHandler.LINEAR ? (r.x = E[0] + (m[0] - E[0]) * d, r.y = E[1] + (m[1] - E[1]) * d, r.z = E[2] + (m[2] - E[2]) * d, f = this.weight / (this.weight + c.positionWeight), s.position.lerp(r, f), c.positionWeight += this.weight) : this.interpolationType !== THREE.AnimationHandler.CATMULLROM && this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD || (t[0] = this.getPrevKeyWith("pos", o, f.index - 1).pos, t[1] = E, t[2] = m, t[3] = this.getNextKeyWith("pos", o, p.index + 1).pos, d = .33 * d + .33, p = i(t, d), f = this.weight / (this.weight + c.positionWeight), c.positionWeight += this.weight, u = s.position, u.x += (p[0] - u.x) * f, u.y += (p[1] - u.y) * f, u.z += (p[2] - u.z) * f, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (d = i(t, 1.01 * d), e.set(d[0], d[1], d[2]), e.sub(u), e.y = 0, e.normalize(), d = Math.atan2(e.x, e.z), s.rotation.set(0, d, 0))) : "rot" === u ? (THREE.Quaternion.slerp(E, m, n, d), 0 === c.quaternionWeight ? (s.quaternion.copy(n), c.quaternionWeight = this.weight) : (f = this.weight / (this.weight + c.quaternionWeight), THREE.Quaternion.slerp(s.quaternion, n, s.quaternion, f), c.quaternionWeight += this.weight)) : "scl" === u && (r.x = E[0] + (m[0] - E[0]) * d, r.y = E[1] + (m[1] - E[1]) * d, r.z = E[2] + (m[2] - E[2]) * d, f = this.weight / (this.weight + c.scaleWeight), s.scale.lerp(r, f), c.scaleWeight += this.weight)
                        }
                    return !0
                }
            }
        }(),
        getNextKeyWith: function(t, e, r) {
            var n = this.data.hierarchy[e].keys;
            for (r = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? r < n.length - 1 ? r : n.length - 1 : r % n.length; r < n.length; r++)
                if (void 0 !== n[r][t]) return n[r];
            return this.data.hierarchy[e].keys[0]
        },
        getPrevKeyWith: function(t, e, r) {
            var n = this.data.hierarchy[e].keys;
            for (r = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < r ? r : 0 : 0 <= r ? r : r + n.length; 0 <= r; r--)
                if (void 0 !== n[r][t]) return n[r];
            return this.data.hierarchy[e].keys[n.length - 1]
        }
    }, THREE.KeyFrameAnimation = function(t) {
        this.root = t.node, this.data = THREE.AnimationHandler.init(t), this.hierarchy = THREE.AnimationHandler.parse(this.root), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.loop = this.isPaused = !0, t = 0;
        for (var e = this.hierarchy.length; t < e; t++) {
            var r = this.data.hierarchy[t].sids,
                n = this.hierarchy[t];
            if (this.data.hierarchy[t].keys.length && r) {
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = this.getNextKeyWith(o, t, 0);
                    a && a.apply(o)
                }
                n.matrixAutoUpdate = !1, this.data.hierarchy[t].node.updateMatrix(), n.matrixWorldNeedsUpdate = !0
            }
        }
    }, THREE.KeyFrameAnimation.prototype = {
        constructor: THREE.KeyFrameAnimation,
        play: function(t) {
            if (this.currentTime = void 0 !== t ? t : 0, !1 === this.isPlaying) {
                this.isPlaying = !0;
                var e, r, n = this.hierarchy.length;
                for (t = 0; t < n; t++) e = this.hierarchy[t], r = this.data.hierarchy[t], void 0 === r.animationCache && (r.animationCache = {}, r.animationCache.prevKey = null, r.animationCache.nextKey = null, r.animationCache.originalMatrix = e.matrix), e = this.data.hierarchy[t].keys, e.length && (r.animationCache.prevKey = e[0], r.animationCache.nextKey = e[1], this.startTime = Math.min(e[0].time, this.startTime), this.endTime = Math.max(e[e.length - 1].time, this.endTime));
                this.update(0)
            }
            this.isPaused = !1, THREE.AnimationHandler.play(this)
        },
        stop: function() {
            this.isPaused = this.isPlaying = !1, THREE.AnimationHandler.stop(this);
            for (var t = 0; t < this.data.hierarchy.length; t++) {
                var e = this.hierarchy[t],
                    r = this.data.hierarchy[t];
                if (void 0 !== r.animationCache) {
                    var n = r.animationCache.originalMatrix;
                    n.copy(e.matrix), e.matrix = n, delete r.animationCache
                }
            }
        },
        update: function(t) {
            if (!1 !== this.isPlaying) {
                this.currentTime += t * this.timeScale, t = this.data.length, !0 === this.loop && this.currentTime > t && (this.currentTime %= t), this.currentTime = Math.min(this.currentTime, t), t = 0;
                for (var e = this.hierarchy.length; t < e; t++) {
                    var r = this.hierarchy[t],
                        n = this.data.hierarchy[t],
                        i = n.keys,
                        n = n.animationCache;
                    if (i.length) {
                        var o = n.prevKey,
                            a = n.nextKey;
                        if (a.time <= this.currentTime) {
                            for (; a.time < this.currentTime && a.index > o.index;) o = a, a = i[o.index + 1];
                            n.prevKey = o, n.nextKey = a
                        }
                        a.time >= this.currentTime ? o.interpolate(a, this.currentTime) : o.interpolate(a, a.time), this.data.hierarchy[t].node.updateMatrix(), r.matrixWorldNeedsUpdate = !0
                    }
                }
            }
        },
        getNextKeyWith: function(t, e, r) {
            for (e = this.data.hierarchy[e].keys, r %= e.length; r < e.length; r++)
                if (e[r].hasTarget(t)) return e[r];
            return e[0]
        },
        getPrevKeyWith: function(t, e, r) {
            for (e = this.data.hierarchy[e].keys, r = 0 <= r ? r : r + e.length; 0 <= r; r--)
                if (e[r].hasTarget(t)) return e[r];
            return e[e.length - 1]
        }
    }, THREE.MorphAnimation = function(t) {
        this.mesh = t, this.frames = t.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.currentFrame = this.lastFrame = 0, this.isPlaying = !1
    }, THREE.MorphAnimation.prototype = {
        constructor: THREE.MorphAnimation,
        play: function() {
            this.isPlaying = !0
        },
        pause: function() {
            this.isPlaying = !1
        },
        update: function(t) {
            if (!1 !== this.isPlaying) {
                this.currentTime += t, !0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration), t = this.duration / this.frames;
                var e = Math.floor(this.currentTime / t),
                    r = this.mesh.morphTargetInfluences;
                e != this.currentFrame && (r[this.lastFrame] = 0, r[this.currentFrame] = 1, r[e] = 0, this.lastFrame = this.currentFrame, this.currentFrame = e), r[e] = this.currentTime % t / t, r[this.lastFrame] = 1 - r[e]
            }
        }
    }, THREE.BoxGeometry = function(t, e, r, n, i, o) {
        function a(t, e, r, n, i, o, a, h) {
            var c, l = s.widthSegments,
                u = s.heightSegments,
                f = i / 2,
                p = o / 2,
                d = s.vertices.length;
            "x" === t && "y" === e || "y" === t && "x" === e ? c = "z" : "x" === t && "z" === e || "z" === t && "x" === e ? (c = "y", u = s.depthSegments) : ("z" === t && "y" === e || "y" === t && "z" === e) && (c = "x", l = s.depthSegments);
            var E = l + 1,
                m = u + 1,
                g = i / l,
                v = o / u,
                y = new THREE.Vector3;
            for (y[c] = 0 < a ? 1 : -1, i = 0; i < m; i++)
                for (o = 0; o < E; o++) {
                    var T = new THREE.Vector3;
                    T[t] = (o * g - f) * r, T[e] = (i * v - p) * n, T[c] = a, s.vertices.push(T)
                }
            for (i = 0; i < u; i++)
                for (o = 0; o < l; o++) p = o + E * i, t = o + E * (i + 1), e = o + 1 + E * (i + 1), r = o + 1 + E * i, n = new THREE.Vector2(o / l, 1 - i / u), a = new THREE.Vector2(o / l, 1 - (i + 1) / u), c = new THREE.Vector2((o + 1) / l, 1 - (i + 1) / u), f = new THREE.Vector2((o + 1) / l, 1 - i / u), p = new THREE.Face3(p + d, t + d, r + d), p.normal.copy(y), p.vertexNormals.push(y.clone(), y.clone(), y.clone()), p.materialIndex = h, s.faces.push(p), s.faceVertexUvs[0].push([n, a, f]), p = new THREE.Face3(t + d, e + d, r + d), p.normal.copy(y), p.vertexNormals.push(y.clone(), y.clone(), y.clone()), p.materialIndex = h, s.faces.push(p), s.faceVertexUvs[0].push([a.clone(), c, f.clone()])
        }
        THREE.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: r,
            widthSegments: n,
            heightSegments: i,
            depthSegments: o
        }, this.widthSegments = n || 1, this.heightSegments = i || 1, this.depthSegments = o || 1;
        var s = this;
        n = t / 2, i = e / 2, o = r / 2, a("z", "y", -1, -1, r, e, n, 0), a("z", "y", 1, -1, r, e, -n, 1), a("x", "z", 1, 1, t, r, i, 2), a("x", "z", 1, -1, t, r, -i, 3), a("x", "y", 1, -1, t, e, o, 4), a("x", "y", -1, -1, t, e, -o, 5), this.mergeVertices()
    }, THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry, THREE.CircleGeometry = function(t, e, r, n) {
        THREE.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: r,
            thetaLength: n
        }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
        var i, o = [];
        i = new THREE.Vector3;
        var a = new THREE.Vector2(.5, .5);
        for (this.vertices.push(i), o.push(a), i = 0; i <= e; i++) {
            var s = new THREE.Vector3,
                h = r + i / e * n;
            s.x = t * Math.cos(h), s.y = t * Math.sin(h), this.vertices.push(s), o.push(new THREE.Vector2((s.x / t + 1) / 2, (s.y / t + 1) / 2))
        }
        for (r = new THREE.Vector3(0, 0, 1), i = 1; i <= e; i++) this.faces.push(new THREE.Face3(i, i + 1, 0, [r.clone(), r.clone(), r.clone()])), this.faceVertexUvs[0].push([o[i].clone(), o[i + 1].clone(), a.clone()]);
        this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, t)
    }, THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry, THREE.CubeGeometry = function(t, e, r, n, i, o) {
        return THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry."), new THREE.BoxGeometry(t, e, r, n, i, o)
    }, THREE.CylinderGeometry = function(t, e, r, n, i, o, a, s) {
        THREE.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: r,
            radialSegments: n,
            heightSegments: i,
            openEnded: o,
            thetaStart: a,
            thetaLength: s
        }, t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, r = void 0 !== r ? r : 100, n = n || 8, i = i || 1, o = void 0 !== o && o, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : 2 * Math.PI;
        var h, c, l = r / 2,
            u = [],
            f = [];
        for (c = 0; c <= i; c++) {
            var p = [],
                d = [],
                E = c / i,
                m = E * (e - t) + t;
            for (h = 0; h <= n; h++) {
                var g = h / n,
                    v = new THREE.Vector3;
                v.x = m * Math.sin(g * s + a), v.y = -E * r + l, v.z = m * Math.cos(g * s + a), this.vertices.push(v), p.push(this.vertices.length - 1), d.push(new THREE.Vector2(g, 1 - E))
            }
            u.push(p), f.push(d)
        }
        for (r = (e - t) / r, h = 0; h < n; h++)
            for (0 !== t ? (a = this.vertices[u[0][h]].clone(), s = this.vertices[u[0][h + 1]].clone()) : (a = this.vertices[u[1][h]].clone(), s = this.vertices[u[1][h + 1]].clone()), a.setY(Math.sqrt(a.x * a.x + a.z * a.z) * r).normalize(), s.setY(Math.sqrt(s.x * s.x + s.z * s.z) * r).normalize(), c = 0; c < i; c++) {
                var p = u[c][h],
                    d = u[c + 1][h],
                    E = u[c + 1][h + 1],
                    m = u[c][h + 1],
                    g = a.clone(),
                    v = a.clone(),
                    y = s.clone(),
                    T = s.clone(),
                    R = f[c][h].clone(),
                    x = f[c + 1][h].clone(),
                    H = f[c + 1][h + 1].clone(),
                    b = f[c][h + 1].clone();
                this.faces.push(new THREE.Face3(p, d, m, [g, v, T])), this.faceVertexUvs[0].push([R, x, b]), this.faces.push(new THREE.Face3(d, E, m, [v.clone(), y, T.clone()])), this.faceVertexUvs[0].push([x.clone(), H, b.clone()])
            }
        if (!1 === o && 0 < t)
            for (this.vertices.push(new THREE.Vector3(0, l, 0)), h = 0; h < n; h++) p = u[0][h], d = u[0][h + 1], E = this.vertices.length - 1, g = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3(0, 1, 0), y = new THREE.Vector3(0, 1, 0), R = f[0][h].clone(), x = f[0][h + 1].clone(), H = new THREE.Vector2(x.x, 0), this.faces.push(new THREE.Face3(p, d, E, [g, v, y])), this.faceVertexUvs[0].push([R, x, H]);
        if (!1 === o && 0 < e)
            for (this.vertices.push(new THREE.Vector3(0, (-l), 0)), h = 0; h < n; h++) p = u[i][h + 1], d = u[i][h], E = this.vertices.length - 1, g = new THREE.Vector3(0, (-1), 0), v = new THREE.Vector3(0, (-1), 0), y = new THREE.Vector3(0, (-1), 0), R = f[i][h + 1].clone(), x = f[i][h].clone(), H = new THREE.Vector2(x.x, 1), this.faces.push(new THREE.Face3(p, d, E, [g, v, y])), this.faceVertexUvs[0].push([R, x, H]);
        this.computeFaceNormals()
    }, THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry, THREE.ExtrudeGeometry = function(t, e) {
        "undefined" != typeof t && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", t = t instanceof Array ? t : [t], this.addShapeList(t, e), this.computeFaceNormals())
    }, THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry, THREE.ExtrudeGeometry.prototype.addShapeList = function(t, e) {
        for (var r = t.length, n = 0; n < r; n++) this.addShape(t[n], e)
    }, THREE.ExtrudeGeometry.prototype.addShape = function(t, e) {
        function r(t, e, r) {
            return e || THREE.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(r).add(t)
        }

        function n(t, e, r) {
            var n = 1,
                n = t.x - e.x,
                i = t.y - e.y,
                o = r.x - t.x,
                a = r.y - t.y,
                s = n * n + i * i;
            if (1e-10 < Math.abs(n * a - i * o)) {
                var h = Math.sqrt(s),
                    c = Math.sqrt(o * o + a * a),
                    s = e.x - i / h;
                if (e = e.y + n / h, o = ((r.x - a / c - s) * a - (r.y + o / c - e) * o) / (n * a - i * o), r = s + n * o - t.x, t = e + i * o - t.y, n = r * r + t * t, 2 >= n) return new THREE.Vector2(r, t);
                n = Math.sqrt(n / 2)
            } else t = !1, 1e-10 < n ? 1e-10 < o && (t = !0) : -1e-10 > n ? -1e-10 > o && (t = !0) : Math.sign(i) == Math.sign(a) && (t = !0), t ? (r = -i, t = n, n = Math.sqrt(s)) : (r = n, t = i, n = Math.sqrt(s / 2));
            return new THREE.Vector2(r / n, t / n)
        }

        function i(t, e) {
            var r, n;
            for (N = t.length; 0 <= --N;) {
                r = N, n = N - 1, 0 > n && (n = t.length - 1);
                for (var i = 0, o = v + 2 * E, i = 0; i < o; i++) {
                    var a = U * i,
                        s = U * (i + 1),
                        h = e + r + a,
                        a = e + n + a,
                        c = e + n + s,
                        s = e + r + s,
                        h = h + S,
                        a = a + S,
                        c = c + S,
                        s = s + S;
                    M.faces.push(new THREE.Face3(h, a, s, null, null, x)), M.faces.push(new THREE.Face3(a, c, s, null, null, x)), h = H.generateSideWallUV(M, h, a, c, s), M.faceVertexUvs[0].push([h[0], h[1], h[3]]), M.faceVertexUvs[0].push([h[1], h[2], h[3]])
                }
            }
        }

        function o(t, e, r) {
            M.vertices.push(new THREE.Vector3(t, e, r))
        }

        function a(t, e, r) {
            t += S, e += S, r += S, M.faces.push(new THREE.Face3(t, e, r, null, null, R)), t = H.generateTopUV(M, t, e, r), M.faceVertexUvs[0].push(t)
        }
        var s, h, c, l, u, f = void 0 !== e.amount ? e.amount : 100,
            p = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            d = void 0 !== e.bevelSize ? e.bevelSize : p - 2,
            E = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            m = void 0 === e.bevelEnabled || e.bevelEnabled,
            g = void 0 !== e.curveSegments ? e.curveSegments : 12,
            v = void 0 !== e.steps ? e.steps : 1,
            y = e.extrudePath,
            T = !1,
            R = e.material,
            x = e.extrudeMaterial,
            H = void 0 !== e.UVGenerator ? e.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator;
        y && (s = y.getSpacedPoints(v), T = !0, m = !1, h = void 0 !== e.frames ? e.frames : new THREE.TubeGeometry.FrenetFrames(y, v, (!1)), c = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3), m || (d = p = E = 0);
        var b, _, w, M = this,
            S = this.vertices.length,
            y = t.extractPoints(g),
            g = y.shape,
            A = y.holes;
        if (y = !THREE.Shape.Utils.isClockWise(g)) {
            for (g = g.reverse(), _ = 0, w = A.length; _ < w; _++) b = A[_], THREE.Shape.Utils.isClockWise(b) && (A[_] = b.reverse());
            y = !1
        }
        var C = THREE.Shape.Utils.triangulateShape(g, A),
            L = g;
        for (_ = 0, w = A.length; _ < w; _++) b = A[_], g = g.concat(b);
        var P, F, D, B, k, O, U = g.length,
            V = C.length,
            y = [],
            N = 0;
        for (D = L.length, P = D - 1, F = N + 1; N < D; N++, P++, F++) P === D && (P = 0), F === D && (F = 0), y[N] = n(L[N], L[P], L[F]);
        var z, I = [],
            G = y.concat();
        for (_ = 0, w = A.length; _ < w; _++) {
            for (b = A[_], z = [], N = 0, D = b.length, P = D - 1, F = N + 1; N < D; N++, P++, F++) P === D && (P = 0), F === D && (F = 0), z[N] = n(b[N], b[P], b[F]);
            I.push(z), G = G.concat(z)
        }
        for (P = 0; P < E; P++) {
            for (D = P / E, B = p * (1 - D), F = d * Math.sin(D * Math.PI / 2), N = 0, D = L.length; N < D; N++) k = r(L[N], y[N], F), o(k.x, k.y, -B);
            for (_ = 0, w = A.length; _ < w; _++)
                for (b = A[_], z = I[_], N = 0, D = b.length; N < D; N++) k = r(b[N], z[N], F), o(k.x, k.y, -B)
        }
        for (F = d, N = 0; N < U; N++) k = m ? r(g[N], G[N], F) : g[N], T ? (l.copy(h.normals[0]).multiplyScalar(k.x), c.copy(h.binormals[0]).multiplyScalar(k.y), u.copy(s[0]).add(l).add(c), o(u.x, u.y, u.z)) : o(k.x, k.y, 0);
        for (D = 1; D <= v; D++)
            for (N = 0; N < U; N++) k = m ? r(g[N], G[N], F) : g[N], T ? (l.copy(h.normals[D]).multiplyScalar(k.x), c.copy(h.binormals[D]).multiplyScalar(k.y), u.copy(s[D]).add(l).add(c), o(u.x, u.y, u.z)) : o(k.x, k.y, f / v * D);
        for (P = E - 1; 0 <= P; P--) {
            for (D = P / E, B = p * (1 - D), F = d * Math.sin(D * Math.PI / 2), N = 0, D = L.length; N < D; N++) k = r(L[N], y[N], F), o(k.x, k.y, f + B);
            for (_ = 0, w = A.length; _ < w; _++)
                for (b = A[_], z = I[_], N = 0, D = b.length; N < D; N++) k = r(b[N], z[N], F), T ? o(k.x, k.y + s[v - 1].y, s[v - 1].x + B) : o(k.x, k.y, f + B)
        }! function() {
            if (m) {
                var t;
                for (t = 0 * U, N = 0; N < V; N++) O = C[N], a(O[2] + t, O[1] + t, O[0] + t);
                for (t = v + 2 * E, t *= U, N = 0; N < V; N++) O = C[N], a(O[0] + t, O[1] + t, O[2] + t)
            } else {
                for (N = 0; N < V; N++) O = C[N], a(O[2], O[1], O[0]);
                for (N = 0; N < V; N++) O = C[N], a(O[0] + U * v, O[1] + U * v, O[2] + U * v)
            }
        }(),
        function() {
            var t = 0;
            for (i(L, t), t += L.length, _ = 0, w = A.length; _ < w; _++) b = A[_], i(b, t), t += b.length
        }()
    }, THREE.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function(t, e, r, n) {
            return t = t.vertices, e = t[e], r = t[r], n = t[n], [new THREE.Vector2(e.x, e.y), new THREE.Vector2(r.x, r.y), new THREE.Vector2(n.x, n.y)]
        },
        generateSideWallUV: function(t, e, r, n, i) {
            return t = t.vertices, e = t[e], r = t[r], n = t[n], i = t[i], .01 > Math.abs(e.y - r.y) ? [new THREE.Vector2(e.x, 1 - e.z), new THREE.Vector2(r.x, 1 - r.z), new THREE.Vector2(n.x, 1 - n.z), new THREE.Vector2(i.x, 1 - i.z)] : [new THREE.Vector2(e.y, 1 - e.z), new THREE.Vector2(r.y, 1 - r.z), new THREE.Vector2(n.y, 1 - n.z), new THREE.Vector2(i.y, 1 - i.z)]
        }
    }, THREE.ShapeGeometry = function(t, e) {
        THREE.Geometry.call(this), this.type = "ShapeGeometry", !1 == t instanceof Array && (t = [t]), this.addShapeList(t, e), this.computeFaceNormals()
    }, THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry, THREE.ShapeGeometry.prototype.addShapeList = function(t, e) {
        for (var r = 0, n = t.length; r < n; r++) this.addShape(t[r], e);
        return this
    }, THREE.ShapeGeometry.prototype.addShape = function(t, e) {
        void 0 === e && (e = {});
        var r, n, i, o = e.material,
            a = void 0 === e.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : e.UVGenerator,
            s = this.vertices.length;
        r = t.extractPoints(void 0 !== e.curveSegments ? e.curveSegments : 12);
        var h = r.shape,
            c = r.holes;
        if (!THREE.Shape.Utils.isClockWise(h))
            for (h = h.reverse(), r = 0, n = c.length; r < n; r++) i = c[r], THREE.Shape.Utils.isClockWise(i) && (c[r] = i.reverse());
        var l = THREE.Shape.Utils.triangulateShape(h, c);
        for (r = 0, n = c.length; r < n; r++) i = c[r], h = h.concat(i);
        for (c = h.length, n = l.length, r = 0; r < c; r++) i = h[r], this.vertices.push(new THREE.Vector3(i.x, i.y, 0));
        for (r = 0; r < n; r++) c = l[r], h = c[0] + s, i = c[1] + s, c = c[2] + s, this.faces.push(new THREE.Face3(h, i, c, null, null, o)), this.faceVertexUvs[0].push(a.generateTopUV(this, h, i, c))
    }, THREE.LatheGeometry = function(t, e, r, n) {
        THREE.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: r,
            phiLength: n
        }, e = e || 12, r = r || 0, n = n || 2 * Math.PI;
        for (var i = 1 / (t.length - 1), o = 1 / e, a = 0, s = e; a <= s; a++)
            for (var h = r + a * o * n, c = Math.cos(h), l = Math.sin(h), h = 0, u = t.length; h < u; h++) {
                var f = t[h],
                    p = new THREE.Vector3;
                p.x = c * f.x - l * f.y, p.y = l * f.x + c * f.y, p.z = f.z, this.vertices.push(p)
            }
        for (r = t.length, a = 0, s = e; a < s; a++)
            for (h = 0, u = t.length - 1; h < u; h++) {
                e = l = h + r * a, n = l + r;
                var c = l + 1 + r,
                    l = l + 1,
                    f = a * o,
                    p = h * i,
                    d = f + o,
                    E = p + i;
                this.faces.push(new THREE.Face3(e, n, l)), this.faceVertexUvs[0].push([new THREE.Vector2(f, p), new THREE.Vector2(d, p), new THREE.Vector2(f, E)]), this.faces.push(new THREE.Face3(n, c, l)), this.faceVertexUvs[0].push([new THREE.Vector2(d, p), new THREE.Vector2(d, E), new THREE.Vector2(f, E)])
            }
        this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry, THREE.PlaneGeometry = function(t, e, r, n) {
        console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint."), THREE.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: n
        }, this.fromBufferGeometry(new THREE.PlaneBufferGeometry(t, e, r, n))
    }, THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry, THREE.PlaneBufferGeometry = function(t, e, r, n) {
        THREE.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: n
        };
        var i = t / 2,
            o = e / 2;
        r = r || 1, n = n || 1;
        var a = r + 1,
            s = n + 1,
            h = t / r,
            c = e / n;
        e = new Float32Array(a * s * 3), t = new Float32Array(a * s * 3);
        for (var l = new Float32Array(a * s * 2), u = 0, f = 0, p = 0; p < s; p++)
            for (var d = p * c - o, E = 0; E < a; E++) e[u] = E * h - i, e[u + 1] = -d, t[u + 2] = 1, l[f] = E / r, l[f + 1] = 1 - p / n, u += 3, f += 2;
        for (u = 0, i = new(65535 < e.length / 3 ? Uint32Array : Uint16Array)(r * n * 6), p = 0; p < n; p++)
            for (E = 0; E < r; E++) o = E + a * (p + 1), s = E + 1 + a * (p + 1), h = E + 1 + a * p, i[u] = E + a * p, i[u + 1] = o, i[u + 2] = h, i[u + 3] = o, i[u + 4] = s, i[u + 5] = h, u += 6;
        this.addAttribute("index", new THREE.BufferAttribute(i, 1)), this.addAttribute("position", new THREE.BufferAttribute(e, 3)), this.addAttribute("normal", new THREE.BufferAttribute(t, 3)), this.addAttribute("uv", new THREE.BufferAttribute(l, 2))
    }, THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype), THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry, THREE.RingGeometry = function(t, e, r, n, i, o) {
        THREE.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: r,
            phiSegments: n,
            thetaStart: i,
            thetaLength: o
        }, t = t || 0, e = e || 50, i = void 0 !== i ? i : 0, o = void 0 !== o ? o : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, n = void 0 !== n ? Math.max(1, n) : 8;
        var a, s = [],
            h = t,
            c = (e - t) / n;
        for (t = 0; t < n + 1; t++) {
            for (a = 0; a < r + 1; a++) {
                var l = new THREE.Vector3,
                    u = i + a / r * o;
                l.x = h * Math.cos(u), l.y = h * Math.sin(u), this.vertices.push(l), s.push(new THREE.Vector2((l.x / e + 1) / 2, (l.y / e + 1) / 2))
            }
            h += c
        }
        for (e = new THREE.Vector3(0, 0, 1), t = 0; t < n; t++)
            for (i = t * (r + 1), a = 0; a < r; a++) o = u = a + i, c = u + r + 1, l = u + r + 2, this.faces.push(new THREE.Face3(o, c, l, [e.clone(), e.clone(), e.clone()])), this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[l].clone()]), o = u, c = u + r + 2, l = u + 1, this.faces.push(new THREE.Face3(o, c, l, [e.clone(), e.clone(), e.clone()])), this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[l].clone()]);
        this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, h)
    }, THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
    THREE.RingGeometry.prototype.constructor = THREE.RingGeometry, THREE.SphereGeometry = function(t, e, r, n, i, o, a) {
        THREE.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: r,
            phiStart: n,
            phiLength: i,
            thetaStart: o,
            thetaLength: a
        }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), r = Math.max(2, Math.floor(r) || 6), n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
        var s, h, c = [],
            l = [];
        for (h = 0; h <= r; h++) {
            var u = [],
                f = [];
            for (s = 0; s <= e; s++) {
                var p = s / e,
                    d = h / r,
                    E = new THREE.Vector3;
                E.x = -t * Math.cos(n + p * i) * Math.sin(o + d * a), E.y = t * Math.cos(o + d * a), E.z = t * Math.sin(n + p * i) * Math.sin(o + d * a), this.vertices.push(E), u.push(this.vertices.length - 1), f.push(new THREE.Vector2(p, 1 - d))
            }
            c.push(u), l.push(f)
        }
        for (h = 0; h < r; h++)
            for (s = 0; s < e; s++) {
                n = c[h][s + 1], i = c[h][s], o = c[h + 1][s], a = c[h + 1][s + 1];
                var u = this.vertices[n].clone().normalize(),
                    f = this.vertices[i].clone().normalize(),
                    p = this.vertices[o].clone().normalize(),
                    d = this.vertices[a].clone().normalize(),
                    E = l[h][s + 1].clone(),
                    m = l[h][s].clone(),
                    g = l[h + 1][s].clone(),
                    v = l[h + 1][s + 1].clone();
                Math.abs(this.vertices[n].y) === t ? (E.x = (E.x + m.x) / 2, this.faces.push(new THREE.Face3(n, o, a, [u, p, d])), this.faceVertexUvs[0].push([E, g, v])) : Math.abs(this.vertices[o].y) === t ? (g.x = (g.x + v.x) / 2, this.faces.push(new THREE.Face3(n, i, o, [u, f, p])), this.faceVertexUvs[0].push([E, m, g])) : (this.faces.push(new THREE.Face3(n, i, a, [u, f, d])), this.faceVertexUvs[0].push([E, m, v]), this.faces.push(new THREE.Face3(i, o, a, [f.clone(), p, d.clone()])), this.faceVertexUvs[0].push([m.clone(), g, v.clone()]))
            }
        this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, t)
    }, THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry, THREE.TextGeometry = function(t, e) {
        e = e || {};
        var r = THREE.FontUtils.generateShapes(t, e);
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), THREE.ExtrudeGeometry.call(this, r, e), this.type = "TextGeometry"
    }, THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype), THREE.TextGeometry.prototype.constructor = THREE.TextGeometry, THREE.TorusGeometry = function(t, e, r, n, i) {
        THREE.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: n,
            arc: i
        }, t = t || 100, e = e || 40, r = r || 8, n = n || 6, i = i || 2 * Math.PI;
        for (var o = new THREE.Vector3, a = [], s = [], h = 0; h <= r; h++)
            for (var c = 0; c <= n; c++) {
                var l = c / n * i,
                    u = h / r * Math.PI * 2;
                o.x = t * Math.cos(l), o.y = t * Math.sin(l);
                var f = new THREE.Vector3;
                f.x = (t + e * Math.cos(u)) * Math.cos(l), f.y = (t + e * Math.cos(u)) * Math.sin(l), f.z = e * Math.sin(u), this.vertices.push(f), a.push(new THREE.Vector2(c / n, h / r)), s.push(f.clone().sub(o).normalize())
            }
        for (h = 1; h <= r; h++)
            for (c = 1; c <= n; c++) t = (n + 1) * h + c - 1, e = (n + 1) * (h - 1) + c - 1, i = (n + 1) * (h - 1) + c, o = (n + 1) * h + c, l = new THREE.Face3(t, e, o, [s[t].clone(), s[e].clone(), s[o].clone()]), this.faces.push(l), this.faceVertexUvs[0].push([a[t].clone(), a[e].clone(), a[o].clone()]), l = new THREE.Face3(e, i, o, [s[e].clone(), s[i].clone(), s[o].clone()]), this.faces.push(l), this.faceVertexUvs[0].push([a[e].clone(), a[i].clone(), a[o].clone()]);
        this.computeFaceNormals()
    }, THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry, THREE.TorusKnotGeometry = function(t, e, r, n, i, o, a) {
        function s(t, e, r, n, i) {
            var o = Math.cos(t),
                a = Math.sin(t);
            return t *= e / r, e = Math.cos(t), o *= n * (2 + e) * .5, a = n * (2 + e) * a * .5, n = i * n * Math.sin(t) * .5, new THREE.Vector3(o, a, n)
        }
        THREE.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: n,
            p: i,
            q: o,
            heightScale: a
        }, t = t || 100, e = e || 40, r = r || 64, n = n || 8, i = i || 2, o = o || 3, a = a || 1;
        for (var h = Array(r), c = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3, f = 0; f < r; ++f) {
            h[f] = Array(n);
            var p = f / r * 2 * i * Math.PI,
                d = s(p, o, i, t, a),
                p = s(p + .01, o, i, t, a);
            for (c.subVectors(p, d), l.addVectors(p, d), u.crossVectors(c, l), l.crossVectors(u, c), u.normalize(), l.normalize(), p = 0; p < n; ++p) {
                var E = p / n * 2 * Math.PI,
                    m = -e * Math.cos(E),
                    E = e * Math.sin(E),
                    g = new THREE.Vector3;
                g.x = d.x + m * l.x + E * u.x, g.y = d.y + m * l.y + E * u.y, g.z = d.z + m * l.z + E * u.z, h[f][p] = this.vertices.push(g) - 1
            }
        }
        for (f = 0; f < r; ++f)
            for (p = 0; p < n; ++p) i = (f + 1) % r, o = (p + 1) % n, t = h[f][p], e = h[i][p], i = h[i][o], o = h[f][o], a = new THREE.Vector2(f / r, p / n), c = new THREE.Vector2((f + 1) / r, p / n), l = new THREE.Vector2((f + 1) / r, (p + 1) / n), u = new THREE.Vector2(f / r, (p + 1) / n), this.faces.push(new THREE.Face3(t, e, o)), this.faceVertexUvs[0].push([a, c, u]), this.faces.push(new THREE.Face3(e, i, o)), this.faceVertexUvs[0].push([c.clone(), l, u.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry, THREE.TubeGeometry = function(t, e, r, n, i, o) {
        THREE.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            segments: e,
            radius: r,
            radialSegments: n,
            closed: i
        }, e = e || 64, r = r || 1, n = n || 8, i = i || !1, o = o || THREE.TubeGeometry.NoTaper;
        var a, s, h, c, l, u, f, p, d, E, m = [],
            g = e + 1,
            v = new THREE.Vector3;
        for (p = new THREE.TubeGeometry.FrenetFrames(t, e, i), d = p.normals, E = p.binormals, this.tangents = p.tangents, this.normals = d, this.binormals = E, p = 0; p < g; p++)
            for (m[p] = [], h = p / (g - 1), f = t.getPointAt(h), a = d[p], s = E[p], l = r * o(h), h = 0; h < n; h++) c = h / n * 2 * Math.PI, u = -l * Math.cos(c), c = l * Math.sin(c), v.copy(f), v.x += u * a.x + c * s.x, v.y += u * a.y + c * s.y, v.z += u * a.z + c * s.z, m[p][h] = this.vertices.push(new THREE.Vector3(v.x, v.y, v.z)) - 1;
        for (p = 0; p < e; p++)
            for (h = 0; h < n; h++) o = i ? (p + 1) % e : p + 1, g = (h + 1) % n, t = m[p][h], r = m[o][h], o = m[o][g], g = m[p][g], v = new THREE.Vector2(p / e, h / n), d = new THREE.Vector2((p + 1) / e, h / n), E = new THREE.Vector2((p + 1) / e, (h + 1) / n), a = new THREE.Vector2(p / e, (h + 1) / n), this.faces.push(new THREE.Face3(t, r, g)), this.faceVertexUvs[0].push([v, d, a]), this.faces.push(new THREE.Face3(r, o, g)), this.faceVertexUvs[0].push([d.clone(), E, a.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry, THREE.TubeGeometry.NoTaper = function(t) {
        return 1
    }, THREE.TubeGeometry.SinusoidalTaper = function(t) {
        return Math.sin(Math.PI * t)
    }, THREE.TubeGeometry.FrenetFrames = function(t, e, r) {
        var n = new THREE.Vector3,
            i = [],
            o = [],
            a = [],
            s = new THREE.Vector3,
            h = new THREE.Matrix4;
        e += 1;
        var c, l, u;
        for (this.tangents = i, this.normals = o, this.binormals = a, c = 0; c < e; c++) l = c / (e - 1), i[c] = t.getTangentAt(l), i[c].normalize();
        for (o[0] = new THREE.Vector3, a[0] = new THREE.Vector3, t = Number.MAX_VALUE, c = Math.abs(i[0].x), l = Math.abs(i[0].y), u = Math.abs(i[0].z), c <= t && (t = c, n.set(1, 0, 0)), l <= t && (t = l, n.set(0, 1, 0)), u <= t && n.set(0, 0, 1), s.crossVectors(i[0], n).normalize(), o[0].crossVectors(i[0], s), a[0].crossVectors(i[0], o[0]), c = 1; c < e; c++) o[c] = o[c - 1].clone(), a[c] = a[c - 1].clone(), s.crossVectors(i[c - 1], i[c]), 1e-4 < s.length() && (s.normalize(), n = Math.acos(THREE.Math.clamp(i[c - 1].dot(i[c]), -1, 1)), o[c].applyMatrix4(h.makeRotationAxis(s, n))), a[c].crossVectors(i[c], o[c]);
        if (r)
            for (n = Math.acos(THREE.Math.clamp(o[0].dot(o[e - 1]), -1, 1)), n /= e - 1, 0 < i[0].dot(s.crossVectors(o[0], o[e - 1])) && (n = -n), c = 1; c < e; c++) o[c].applyMatrix4(h.makeRotationAxis(i[c], n * c)), a[c].crossVectors(i[c], o[c])
    }, THREE.PolyhedronGeometry = function(t, e, r, n) {
        function i(t) {
            var e = t.normalize().clone();
            e.index = h.vertices.push(e) - 1;
            var r = Math.atan2(t.z, -t.x) / 2 / Math.PI + .5;
            return t = Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5, e.uv = new THREE.Vector2(r, 1 - t), e
        }

        function o(t, e, r) {
            var n = new THREE.Face3(t.index, e.index, r.index, [t.clone(), e.clone(), r.clone()]);
            h.faces.push(n), m.copy(t).add(e).add(r).divideScalar(3), n = Math.atan2(m.z, -m.x), h.faceVertexUvs[0].push([s(t.uv, t, n), s(e.uv, e, n), s(r.uv, r, n)])
        }

        function a(t, e) {
            for (var r = Math.pow(2, e), n = i(h.vertices[t.a]), a = i(h.vertices[t.b]), s = i(h.vertices[t.c]), c = [], l = 0; l <= r; l++) {
                c[l] = [];
                for (var u = i(n.clone().lerp(s, l / r)), f = i(a.clone().lerp(s, l / r)), p = r - l, d = 0; d <= p; d++) c[l][d] = 0 == d && l == r ? u : i(u.clone().lerp(f, d / p))
            }
            for (l = 0; l < r; l++)
                for (d = 0; d < 2 * (r - l) - 1; d++) n = Math.floor(d / 2), 0 == d % 2 ? o(c[l][n + 1], c[l + 1][n], c[l][n]) : o(c[l][n + 1], c[l + 1][n + 1], c[l + 1][n])
        }

        function s(t, e, r) {
            return 0 > r && 1 === t.x && (t = new THREE.Vector2(t.x - 1, t.y)), 0 === e.x && 0 === e.z && (t = new THREE.Vector2(r / 2 / Math.PI + .5, t.y)), t.clone()
        }
        THREE.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: r,
            detail: n
        }, r = r || 1, n = n || 0;
        for (var h = this, c = 0, l = t.length; c < l; c += 3) i(new THREE.Vector3(t[c], t[c + 1], t[c + 2]));
        t = this.vertices;
        for (var u = [], f = c = 0, l = e.length; c < l; c += 3, f++) {
            var p = t[e[c]],
                d = t[e[c + 1]],
                E = t[e[c + 2]];
            u[f] = new THREE.Face3(p.index, d.index, E.index, [p.clone(), d.clone(), E.clone()])
        }
        for (var m = new THREE.Vector3, c = 0, l = u.length; c < l; c++) a(u[c], n);
        for (c = 0, l = this.faceVertexUvs[0].length; c < l; c++) e = this.faceVertexUvs[0][c], n = e[0].x, t = e[1].x, u = e[2].x, f = Math.max(n, Math.max(t, u)), p = Math.min(n, Math.min(t, u)), .9 < f && .1 > p && (.2 > n && (e[0].x += 1), .2 > t && (e[1].x += 1), .2 > u && (e[2].x += 1));
        for (c = 0, l = this.vertices.length; c < l; c++) this.vertices[c].multiplyScalar(r);
        this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new THREE.Sphere(new THREE.Vector3, r)
    }, THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry, THREE.DodecahedronGeometry = function(t, e) {
        this.parameters = {
            radius: t,
            detail: e
        };
        var r = (1 + Math.sqrt(5)) / 2,
            n = 1 / r;
        THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e)
    }, THREE.DodecahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry, THREE.IcosahedronGeometry = function(t, e) {
        var r = (1 + Math.sqrt(5)) / 2;
        THREE.PolyhedronGeometry.call(this, [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry, THREE.OctahedronGeometry = function(t, e) {
        this.parameters = {
            radius: t,
            detail: e
        }, THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry, THREE.TetrahedronGeometry = function(t, e) {
        THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry, THREE.ParametricGeometry = function(t, e, r) {
        THREE.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: r
        };
        var n, i, o, a, s = this.vertices,
            h = this.faces,
            c = this.faceVertexUvs[0],
            l = e + 1;
        for (n = 0; n <= r; n++)
            for (a = n / r, i = 0; i <= e; i++) o = i / e, o = t(o, a), s.push(o);
        var u, f, p, d;
        for (n = 0; n < r; n++)
            for (i = 0; i < e; i++) t = n * l + i, s = n * l + i + 1, a = (n + 1) * l + i + 1, o = (n + 1) * l + i, u = new THREE.Vector2(i / e, n / r), f = new THREE.Vector2((i + 1) / e, n / r), p = new THREE.Vector2((i + 1) / e, (n + 1) / r), d = new THREE.Vector2(i / e, (n + 1) / r), h.push(new THREE.Face3(t, s, o)), c.push([u, f, d]), h.push(new THREE.Face3(s, a, o)), c.push([f.clone(), p, d.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype), THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry, THREE.AxisHelper = function(t) {
        t = t || 1;
        var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]),
            r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
        t = new THREE.BufferGeometry, t.addAttribute("position", new THREE.BufferAttribute(e, 3)), t.addAttribute("color", new THREE.BufferAttribute(r, 3)), e = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors
        }), THREE.Line.call(this, t, e, THREE.LinePieces)
    }, THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype), THREE.AxisHelper.prototype.constructor = THREE.AxisHelper, THREE.ArrowHelper = function() {
        var t = new THREE.Geometry;
        t.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
        var e = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
        return e.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0)),
            function(r, n, i, o, a, s) {
                THREE.Object3D.call(this), void 0 === o && (o = 16776960), void 0 === i && (i = 1), void 0 === a && (a = .2 * i), void 0 === s && (s = .2 * a), this.position.copy(n), this.line = new THREE.Line(t, new THREE.LineBasicMaterial({
                    color: o
                })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new THREE.Mesh(e, new THREE.MeshBasicMaterial({
                    color: o
                })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(i, a, s)
            }
    }(), THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper, THREE.ArrowHelper.prototype.setDirection = function() {
        var t, e = new THREE.Vector3;
        return function(r) {
            .99999 < r.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > r.y ? this.quaternion.set(1, 0, 0, 0) : (e.set(r.z, 0, -r.x).normalize(), t = Math.acos(r.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), THREE.ArrowHelper.prototype.setLength = function(t, e, r) {
        void 0 === e && (e = .2 * t), void 0 === r && (r = .2 * e), this.line.scale.set(1, t - e, 1), this.line.updateMatrix(), this.cone.scale.set(r, e, r), this.cone.position.y = t, this.cone.updateMatrix()
    }, THREE.ArrowHelper.prototype.setColor = function(t) {
        this.line.material.color.set(t), this.cone.material.color.set(t)
    }, THREE.BoxHelper = function(t) {
        var e = new THREE.BufferGeometry;
        e.addAttribute("position", new THREE.BufferAttribute(new Float32Array(72), 3)), THREE.Line.call(this, e, new THREE.LineBasicMaterial({
            color: 16776960
        }), THREE.LinePieces), void 0 !== t && this.update(t)
    }, THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype), THREE.BoxHelper.prototype.constructor = THREE.BoxHelper, THREE.BoxHelper.prototype.update = function(t) {
        var e = t.geometry;
        null === e.boundingBox && e.computeBoundingBox();
        var r = e.boundingBox.min,
            e = e.boundingBox.max,
            n = this.geometry.attributes.position.array;
        n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = r.x, n[4] = e.y, n[5] = e.z, n[6] = r.x, n[7] = e.y, n[8] = e.z, n[9] = r.x, n[10] = r.y, n[11] = e.z, n[12] = r.x, n[13] = r.y, n[14] = e.z, n[15] = e.x, n[16] = r.y, n[17] = e.z, n[18] = e.x, n[19] = r.y, n[20] = e.z, n[21] = e.x, n[22] = e.y, n[23] = e.z, n[24] = e.x, n[25] = e.y, n[26] = r.z, n[27] = r.x, n[28] = e.y, n[29] = r.z, n[30] = r.x, n[31] = e.y, n[32] = r.z, n[33] = r.x, n[34] = r.y, n[35] = r.z, n[36] = r.x, n[37] = r.y, n[38] = r.z, n[39] = e.x, n[40] = r.y, n[41] = r.z, n[42] = e.x, n[43] = r.y, n[44] = r.z, n[45] = e.x, n[46] = e.y, n[47] = r.z, n[48] = e.x, n[49] = e.y, n[50] = e.z, n[51] = e.x, n[52] = e.y, n[53] = r.z, n[54] = r.x, n[55] = e.y, n[56] = e.z, n[57] = r.x, n[58] = e.y, n[59] = r.z, n[60] = r.x, n[61] = r.y, n[62] = e.z, n[63] = r.x, n[64] = r.y, n[65] = r.z, n[66] = e.x, n[67] = r.y, n[68] = e.z, n[69] = e.x, n[70] = r.y, n[71] = r.z, this.geometry.attributes.position.needsUpdate = !0, this.geometry.computeBoundingSphere(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.BoundingBoxHelper = function(t, e) {
        var r = void 0 !== e ? e : 8947848;
        this.object = t, this.box = new THREE.Box3, THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
            color: r,
            wireframe: !0
        }))
    }, THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper, THREE.BoundingBoxHelper.prototype.update = function() {
        this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
    }, THREE.CameraHelper = function(t) {
        function e(t, e, n) {
            r(t, n), r(e, n)
        }

        function r(t, e) {
            n.vertices.push(new THREE.Vector3), n.colors.push(new THREE.Color(e)), void 0 === o[t] && (o[t] = []), o[t].push(n.vertices.length - 1)
        }
        var n = new THREE.Geometry,
            i = new THREE.LineBasicMaterial({
                color: 16777215,
                vertexColors: THREE.FaceColors
            }),
            o = {};
        e("n1", "n2", 16755200), e("n2", "n4", 16755200), e("n4", "n3", 16755200), e("n3", "n1", 16755200), e("f1", "f2", 16755200), e("f2", "f4", 16755200), e("f4", "f3", 16755200), e("f3", "f1", 16755200), e("n1", "f1", 16755200), e("n2", "f2", 16755200), e("n3", "f3", 16755200), e("n4", "f4", 16755200), e("p", "n1", 16711680), e("p", "n2", 16711680), e("p", "n3", 16711680), e("p", "n4", 16711680), e("u1", "u2", 43775), e("u2", "u3", 43775), e("u3", "u1", 43775), e("c", "t", 16777215), e("p", "c", 3355443), e("cn1", "cn2", 3355443), e("cn3", "cn4", 3355443), e("cf1", "cf2", 3355443), e("cf3", "cf4", 3355443), THREE.Line.call(this, n, i, THREE.LinePieces), this.camera = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
    }, THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype), THREE.CameraHelper.prototype.constructor = THREE.CameraHelper, THREE.CameraHelper.prototype.update = function() {
        var t, e, r = new THREE.Vector3,
            n = new THREE.Camera,
            i = function(i, o, a, s) {
                if (r.set(o, a, s).unproject(n), i = e[i], void 0 !== i)
                    for (o = 0, a = i.length; o < a; o++) t.vertices[i[o]].copy(r)
            };
        return function() {
            t = this.geometry, e = this.pointMap, n.projectionMatrix.copy(this.camera.projectionMatrix), i("c", 0, 0, -1), i("t", 0, 0, 1), i("n1", -1, -1, -1), i("n2", 1, -1, -1), i("n3", -1, 1, -1), i("n4", 1, 1, -1), i("f1", -1, -1, 1), i("f2", 1, -1, 1), i("f3", -1, 1, 1), i("f4", 1, 1, 1), i("u1", .7, 1.1, -1), i("u2", -.7, 1.1, -1), i("u3", 0, 2, -1), i("cf1", -1, 0, 1), i("cf2", 1, 0, 1), i("cf3", 0, -1, 1), i("cf4", 0, 1, 1), i("cn1", -1, 0, -1), i("cn2", 1, 0, -1), i("cn3", 0, -1, -1), i("cn4", 0, 1, -1), t.verticesNeedUpdate = !0
        }
    }(), THREE.DirectionalLightHelper = function(t, e) {
        THREE.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, e = e || 1;
        var r = new THREE.Geometry;
        r.vertices.push(new THREE.Vector3((-e), e, 0), new THREE.Vector3(e, e, 0), new THREE.Vector3(e, (-e), 0), new THREE.Vector3((-e), (-e), 0), new THREE.Vector3((-e), e, 0));
        var n = new THREE.LineBasicMaterial({
            fog: !1
        });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new THREE.Line(r, n), this.add(this.lightPlane), r = new THREE.Geometry, r.vertices.push(new THREE.Vector3, new THREE.Vector3), n = new THREE.LineBasicMaterial({
            fog: !1
        }), n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new THREE.Line(r, n), this.add(this.targetLine), this.update()
    }, THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper, THREE.DirectionalLightHelper.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, THREE.DirectionalLightHelper.prototype.update = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3,
            r = new THREE.Vector3;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(e, t), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
        }
    }(), THREE.EdgesHelper = function(t, e, r) {
        e = void 0 !== e ? e : 16777215, r = Math.cos(THREE.Math.degToRad(void 0 !== r ? r : 1));
        var n, i = [0, 0],
            o = {},
            a = function(t, e) {
                return t - e
            },
            s = ["a", "b", "c"],
            h = new THREE.BufferGeometry;
        t.geometry instanceof THREE.BufferGeometry ? (n = new THREE.Geometry, n.fromBufferGeometry(t.geometry)) : n = t.geometry.clone(), n.mergeVertices(), n.computeFaceNormals();
        var c = n.vertices;
        n = n.faces;
        for (var l = 0, u = 0, f = n.length; u < f; u++)
            for (var p = n[u], d = 0; 3 > d; d++) {
                i[0] = p[s[d]], i[1] = p[s[(d + 1) % 3]], i.sort(a);
                var E = i.toString();
                void 0 === o[E] ? (o[E] = {
                    vert1: i[0],
                    vert2: i[1],
                    face1: u,
                    face2: void 0
                }, l++) : o[E].face2 = u
            }
        i = new Float32Array(6 * l), a = 0;
        for (E in o) s = o[E], (void 0 === s.face2 || n[s.face1].normal.dot(n[s.face2].normal) <= r) && (l = c[s.vert1], i[a++] = l.x, i[a++] = l.y, i[a++] = l.z, l = c[s.vert2], i[a++] = l.x, i[a++] = l.y, i[a++] = l.z);
        h.addAttribute("position", new THREE.BufferAttribute(i, 3)), THREE.Line.call(this, h, new THREE.LineBasicMaterial({
            color: e
        }), THREE.LinePieces), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype), THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper, THREE.FaceNormalsHelper = function(t, e, r, n) {
        this.object = t, this.size = void 0 !== e ? e : 1, t = void 0 !== r ? r : 16776960, n = void 0 !== n ? n : 1, e = new THREE.Geometry, r = 0;
        for (var i = this.object.geometry.faces.length; r < i; r++) e.vertices.push(new THREE.Vector3, new THREE.Vector3);
        THREE.Line.call(this, e, new THREE.LineBasicMaterial({
            color: t,
            linewidth: n
        }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
    }, THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype), THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper, THREE.FaceNormalsHelper.prototype.update = function() {
        var t = this.geometry.vertices,
            e = this.object,
            r = e.geometry.vertices,
            n = e.geometry.faces,
            i = e.matrixWorld;
        e.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(i);
        for (var o = e = 0, a = n.length; e < a; e++, o += 2) {
            var s = n[e];
            t[o].copy(r[s.a]).add(r[s.b]).add(r[s.c]).divideScalar(3).applyMatrix4(i), t[o + 1].copy(s.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(t[o])
        }
        return this.geometry.verticesNeedUpdate = !0, this
    }, THREE.GridHelper = function(t, e) {
        var r = new THREE.Geometry,
            n = new THREE.LineBasicMaterial({
                vertexColors: THREE.VertexColors
            });
        this.color1 = new THREE.Color(4473924), this.color2 = new THREE.Color(8947848);
        for (var i = -t; i <= t; i += e) {
            r.vertices.push(new THREE.Vector3((-t), 0, i), new THREE.Vector3(t, 0, i), new THREE.Vector3(i, 0, (-t)), new THREE.Vector3(i, 0, t));
            var o = 0 === i ? this.color1 : this.color2;
            r.colors.push(o, o, o, o)
        }
        THREE.Line.call(this, r, n, THREE.LinePieces)
    }, THREE.GridHelper.prototype = Object.create(THREE.Line.prototype), THREE.GridHelper.prototype.constructor = THREE.GridHelper, THREE.GridHelper.prototype.setColors = function(t, e) {
        this.color1.set(t), this.color2.set(e), this.geometry.colorsNeedUpdate = !0
    }, THREE.HemisphereLightHelper = function(t, e) {
        THREE.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new THREE.Color, new THREE.Color];
        var r = new THREE.SphereGeometry(e, 4, 2);
        r.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
        for (var n = 0; 8 > n; n++) r.faces[n].color = this.colors[4 > n ? 0 : 1];
        n = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            wireframe: !0
        }), this.lightSphere = new THREE.Mesh(r, n), this.add(this.lightSphere), this.update()
    }, THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper, THREE.HemisphereLightHelper.prototype.dispose = function() {
        this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
    }, THREE.HemisphereLightHelper.prototype.update = function() {
        var t = new THREE.Vector3;
        return function() {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(), THREE.PointLightHelper = function(t, e) {
        this.light = t, this.light.updateMatrixWorld();
        var r = new THREE.SphereGeometry(e, 4, 2),
            n = new THREE.MeshBasicMaterial({
                wireframe: !0,
                fog: !1
            });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity), THREE.Mesh.call(this, r, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype), THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper, THREE.PointLightHelper.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, THREE.PointLightHelper.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }, THREE.SkeletonHelper = function(t) {
        this.bones = this.getBoneList(t);
        for (var e = new THREE.Geometry, r = 0; r < this.bones.length; r++) this.bones[r].parent instanceof THREE.Bone && (e.vertices.push(new THREE.Vector3), e.vertices.push(new THREE.Vector3), e.colors.push(new THREE.Color(0, 0, 1)), e.colors.push(new THREE.Color(0, 1, 0)));
        r = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), THREE.Line.call(this, e, r, THREE.LinePieces), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }, THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype), THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper, THREE.SkeletonHelper.prototype.getBoneList = function(t) {
        var e = [];
        t instanceof THREE.Bone && e.push(t);
        for (var r = 0; r < t.children.length; r++) e.push.apply(e, this.getBoneList(t.children[r]));
        return e
    }, THREE.SkeletonHelper.prototype.update = function() {
        for (var t = this.geometry, e = (new THREE.Matrix4).getInverse(this.root.matrixWorld), r = new THREE.Matrix4, n = 0, i = 0; i < this.bones.length; i++) {
            var o = this.bones[i];
            o.parent instanceof THREE.Bone && (r.multiplyMatrices(e, o.matrixWorld), t.vertices[n].setFromMatrixPosition(r), r.multiplyMatrices(e, o.parent.matrixWorld), t.vertices[n + 1].setFromMatrixPosition(r), n += 2)
        }
        t.verticesNeedUpdate = !0, t.computeBoundingSphere()
    }, THREE.SpotLightHelper = function(t) {
        THREE.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, t = new THREE.CylinderGeometry(0, 1, 1, 8, 1, (!0)), t.applyMatrix((new THREE.Matrix4).makeTranslation(0, -.5, 0)), t.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
        var e = new THREE.MeshBasicMaterial({
            wireframe: !0,
            fog: !1
        });
        this.cone = new THREE.Mesh(t, e), this.add(this.cone), this.update()
    }, THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype), THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper, THREE.SpotLightHelper.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, THREE.SpotLightHelper.prototype.update = function() {
        var t = new THREE.Vector3,
            e = new THREE.Vector3;
        return function() {
            var r = this.light.distance ? this.light.distance : 1e4,
                n = r * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, r), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(), THREE.VertexNormalsHelper = function(t, e, r, n) {
        this.object = t, this.size = void 0 !== e ? e : 1, e = void 0 !== r ? r : 16711680, n = void 0 !== n ? n : 1, r = new THREE.Geometry, t = t.geometry.faces;
        for (var i = 0, o = t.length; i < o; i++)
            for (var a = 0, s = t[i].vertexNormals.length; a < s; a++) r.vertices.push(new THREE.Vector3, new THREE.Vector3);
        THREE.Line.call(this, r, new THREE.LineBasicMaterial({
            color: e,
            linewidth: n
        }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new THREE.Matrix3, this.update()
    }, THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype), THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper, THREE.VertexNormalsHelper.prototype.update = function(t) {
        var e = new THREE.Vector3;
        return function(t) {
            t = ["a", "b", "c", "d"], this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.geometry.vertices, n = this.object.geometry.vertices, i = this.object.geometry.faces, o = this.object.matrixWorld, a = 0, s = 0, h = i.length; s < h; s++)
                for (var c = i[s], l = 0, u = c.vertexNormals.length; l < u; l++) {
                    var f = c.vertexNormals[l];
                    r[a].copy(n[c[t[l]]]).applyMatrix4(o), e.copy(f).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size), e.add(r[a]), a += 1, r[a].copy(e), a += 1
                }
            return this.geometry.verticesNeedUpdate = !0, this
        }
    }(), THREE.VertexTangentsHelper = function(t, e, r, n) {
        this.object = t, this.size = void 0 !== e ? e : 1, e = void 0 !== r ? r : 255, n = void 0 !== n ? n : 1, r = new THREE.Geometry, t = t.geometry.faces;
        for (var i = 0, o = t.length; i < o; i++)
            for (var a = 0, s = t[i].vertexTangents.length; a < s; a++) r.vertices.push(new THREE.Vector3), r.vertices.push(new THREE.Vector3);
        THREE.Line.call(this, r, new THREE.LineBasicMaterial({
            color: e,
            linewidth: n
        }), THREE.LinePieces), this.matrixAutoUpdate = !1, this.update()
    }, THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype), THREE.VertexTangentsHelper.prototype.constructor = THREE.VertexTangentsHelper, THREE.VertexTangentsHelper.prototype.update = function(t) {
        var e = new THREE.Vector3;
        return function(t) {
            t = ["a", "b", "c", "d"], this.object.updateMatrixWorld(!0);
            for (var r = this.geometry.vertices, n = this.object.geometry.vertices, i = this.object.geometry.faces, o = this.object.matrixWorld, a = 0, s = 0, h = i.length; s < h; s++)
                for (var c = i[s], l = 0, u = c.vertexTangents.length; l < u; l++) {
                    var f = c.vertexTangents[l];
                    r[a].copy(n[c[t[l]]]).applyMatrix4(o), e.copy(f).transformDirection(o).multiplyScalar(this.size), e.add(r[a]), a += 1, r[a].copy(e), a += 1
                }
            return this.geometry.verticesNeedUpdate = !0, this
        }
    }(), THREE.WireframeHelper = function(t, e) {
        var r = void 0 !== e ? e : 16777215,
            n = [0, 0],
            i = {},
            o = function(t, e) {
                return t - e
            },
            a = ["a", "b", "c"],
            s = new THREE.BufferGeometry;
        if (t.geometry instanceof THREE.Geometry) {
            for (var h = t.geometry.vertices, c = t.geometry.faces, l = 0, u = new Uint32Array(6 * c.length), f = 0, p = c.length; f < p; f++)
                for (var d = c[f], E = 0; 3 > E; E++) {
                    n[0] = d[a[E]], n[1] = d[a[(E + 1) % 3]], n.sort(o);
                    var m = n.toString();
                    void 0 === i[m] && (u[2 * l] = n[0], u[2 * l + 1] = n[1], i[m] = !0, l++)
                }
            for (n = new Float32Array(6 * l), f = 0, p = l; f < p; f++)
                for (E = 0; 2 > E; E++) l = h[u[2 * f + E]], a = 6 * f + 3 * E, n[a + 0] = l.x, n[a + 1] = l.y, n[a + 2] = l.z;
            s.addAttribute("position", new THREE.BufferAttribute(n, 3))
        } else if (t.geometry instanceof THREE.BufferGeometry) {
            if (void 0 !== t.geometry.attributes.index) {
                h = t.geometry.attributes.position.array, p = t.geometry.attributes.index.array, c = t.geometry.drawcalls, l = 0, 0 === c.length && (c = [{
                    count: p.length,
                    index: 0,
                    start: 0
                }]);
                for (var u = new Uint32Array(2 * p.length), d = 0, g = c.length; d < g; ++d)
                    for (var E = c[d].start, m = c[d].count, a = c[d].index, f = E, v = E + m; f < v; f += 3)
                        for (E = 0; 3 > E; E++) n[0] = a + p[f + E], n[1] = a + p[f + (E + 1) % 3], n.sort(o), m = n.toString(), void 0 === i[m] && (u[2 * l] = n[0], u[2 * l + 1] = n[1], i[m] = !0, l++);
                for (n = new Float32Array(6 * l), f = 0, p = l; f < p; f++)
                    for (E = 0; 2 > E; E++) a = 6 * f + 3 * E, l = 3 * u[2 * f + E], n[a + 0] = h[l], n[a + 1] = h[l + 1], n[a + 2] = h[l + 2]
            } else
                for (h = t.geometry.attributes.position.array, l = h.length / 3, u = l / 3, n = new Float32Array(6 * l), f = 0, p = u; f < p; f++)
                    for (E = 0; 3 > E; E++) a = 18 * f + 6 * E, u = 9 * f + 3 * E, n[a + 0] = h[u], n[a + 1] = h[u + 1], n[a + 2] = h[u + 2], l = 9 * f + (E + 1) % 3 * 3, n[a + 3] = h[l], n[a + 4] = h[l + 1], n[a + 5] = h[l + 2];
            s.addAttribute("position", new THREE.BufferAttribute(n, 3))
        }
        THREE.Line.call(this, s, new THREE.LineBasicMaterial({
            color: r
        }), THREE.LinePieces), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }, THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype), THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper, THREE.ImmediateRenderObject = function() {
        THREE.Object3D.call(this), this.render = function(t) {}
    }, THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype), THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject, THREE.MorphBlendMesh = function(t, e) {
        THREE.Mesh.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
        var r = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, r - 1, r / 1), this.setAnimationWeight("__default", 1)
    }, THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype), THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh, THREE.MorphBlendMesh.prototype.createAnimation = function(t, e, r, n) {
        e = {
            startFrame: e,
            endFrame: r,
            length: r - e + 1,
            fps: n,
            duration: (r - e) / n,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        }, this.animationsMap[t] = e, this.animationsList.push(e)
    }, THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(t) {
        for (var e, r = /([a-z]+)_?(\d+)/, n = {}, i = this.geometry, o = 0, a = i.morphTargets.length; o < a; o++) {
            var s = i.morphTargets[o].name.match(r);
            if (s && 1 < s.length) {
                var h = s[1];
                n[h] || (n[h] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                }), s = n[h], o < s.start && (s.start = o), o > s.end && (s.end = o), e || (e = h)
            }
        }
        for (h in n) s = n[h], this.createAnimation(h, s.start, s.end, t);
        this.firstAnimation = e
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(t) {
        (t = this.animationsMap[t]) && (t.direction = 1, t.directionBackwards = !1)
    }, THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(t) {
        (t = this.animationsMap[t]) && (t.direction = -1, t.directionBackwards = !0)
    }, THREE.MorphBlendMesh.prototype.setAnimationFPS = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.fps = e, r.duration = (r.end - r.start) / r.fps)
    }, THREE.MorphBlendMesh.prototype.setAnimationDuration = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.duration = e, r.fps = (r.end - r.start) / r.duration)
    }, THREE.MorphBlendMesh.prototype.setAnimationWeight = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.weight = e)
    }, THREE.MorphBlendMesh.prototype.setAnimationTime = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.time = e)
    }, THREE.MorphBlendMesh.prototype.getAnimationTime = function(t) {
        var e = 0;
        return (t = this.animationsMap[t]) && (e = t.time), e
    }, THREE.MorphBlendMesh.prototype.getAnimationDuration = function(t) {
        var e = -1;
        return (t = this.animationsMap[t]) && (e = t.duration), e
    }, THREE.MorphBlendMesh.prototype.playAnimation = function(t) {
        var e = this.animationsMap[t];
        e ? (e.time = 0, e.active = !0) : THREE.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
    }, THREE.MorphBlendMesh.prototype.stopAnimation = function(t) {
        (t = this.animationsMap[t]) && (t.active = !1)
    }, THREE.MorphBlendMesh.prototype.update = function(t) {
        for (var e = 0, r = this.animationsList.length; e < r; e++) {
            var n = this.animationsList[e];
            if (n.active) {
                var i = n.duration / n.length;
                n.time += n.direction * t, n.mirroredLoop ? (n.time > n.duration || 0 > n.time) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), 0 > n.time && (n.time = 0, n.directionBackwards = !1)) : (n.time %= n.duration, 0 > n.time && (n.time += n.duration));
                var o = n.startFrame + THREE.Math.clamp(Math.floor(n.time / i), 0, n.length - 1),
                    a = n.weight;
                o !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * a, this.morphTargetInfluences[o] = 0, n.lastFrame = n.currentFrame, n.currentFrame = o), i = n.time % i / i, n.directionBackwards && (i = 1 - i), this.morphTargetInfluences[n.currentFrame] = i * a, this.morphTargetInfluences[n.lastFrame] = (1 - i) * a
            }
        }
    }, THREE.SpriteCanvasMaterial = function(t) {
        THREE.Material.call(this), this.type = "SpriteCanvasMaterial", this.color = new THREE.Color(16777215), this.program = function(t, e) {}, this.setValues(t)
    }, THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial, THREE.SpriteCanvasMaterial.prototype.clone = function() {
        var t = new THREE.SpriteCanvasMaterial;
        return THREE.Material.prototype.clone.call(this, t), t.color.copy(this.color), t.program = this.program, t
    }, THREE.CanvasRenderer = function(t) {
        function e() {
            yt.setRGB(0, 0, 0), Tt.setRGB(0, 0, 0), Rt.setRGB(0, 0, 0);
            for (var t = 0, e = b.length; t < e; t++) {
                var r = b[t],
                    n = r.color;
                r instanceof THREE.AmbientLight ? yt.add(n) : r instanceof THREE.DirectionalLight ? Tt.add(n) : r instanceof THREE.PointLight && Rt.add(n)
            }
        }

        function r(t, e, r) {
            for (var n = 0, i = b.length; n < i; n++) {
                var o = b[n];
                if (dt.copy(o.color), o instanceof THREE.DirectionalLight) {
                    var a = xt.setFromMatrixPosition(o.matrixWorld).normalize(),
                        s = e.dot(a);
                    if (s <= 0) continue;
                    s *= o.intensity, r.add(dt.multiplyScalar(s))
                } else if (o instanceof THREE.PointLight) {
                    var a = xt.setFromMatrixPosition(o.matrixWorld),
                        s = e.dot(xt.subVectors(a, t).normalize());
                    if (s <= 0) continue;
                    if (s *= 0 == o.distance ? 1 : 1 - Math.min(t.distanceTo(a) / o.distance, 1), 0 == s) continue;
                    s *= o.intensity, r.add(dt.multiplyScalar(s))
                }
            }
        }

        function n(t, e, r) {
            p(r.opacity), d(r.blending);
            var n = e.scale.x * q,
                i = e.scale.y * Y,
                o = .5 * Math.sqrt(n * n + i * i);
            if (vt.min.set(t.x - o, t.y - o), vt.max.set(t.x + o, t.y + o), r instanceof THREE.SpriteMaterial) {
                var a = r.map;
                if (null !== a && void 0 !== a.image) {
                    a.hasEventListener("update", c) === !1 && (a.image.width > 0 && l(a), a.addEventListener("update", c));
                    var s = Et[a.id];
                    y(void 0 !== s ? s : "rgba( 0, 0, 0, 1 )");
                    var h = a.image,
                        u = h.width * a.offset.x,
                        f = h.height * a.offset.y,
                        E = h.width * a.repeat.x,
                        m = h.height * a.repeat.y,
                        g = n / E,
                        T = i / m;
                    tt.save(), tt.translate(t.x, t.y), 0 !== r.rotation && tt.rotate(r.rotation), tt.translate(-n / 2, -i / 2), tt.scale(g, T), tt.translate(-u, -f), tt.fillRect(u, f, E, m), tt.restore()
                } else y(r.color.getStyle()), tt.save(), tt.translate(t.x, t.y), 0 !== r.rotation && tt.rotate(r.rotation), tt.scale(n, -i), tt.fillRect(-.5, -.5, 1, 1), tt.restore()
            } else r instanceof THREE.SpriteCanvasMaterial && (v(r.color.getStyle()), y(r.color.getStyle()), tt.save(), tt.translate(t.x, t.y), 0 !== r.rotation && tt.rotate(r.rotation), tt.scale(n, i), r.program(tt), tt.restore())
        }

        function i(t, e, r, n) {
            if (p(n.opacity), d(n.blending), tt.beginPath(), tt.moveTo(t.positionScreen.x, t.positionScreen.y), tt.lineTo(e.positionScreen.x, e.positionScreen.y), n instanceof THREE.LineBasicMaterial) {
                if (E(n.linewidth), m(n.linecap), g(n.linejoin), n.vertexColors !== THREE.VertexColors) v(n.color.getStyle());
                else {
                    var i = r.vertexColors[0].getStyle(),
                        o = r.vertexColors[1].getStyle();
                    if (i === o) v(i);
                    else {
                        try {
                            var a = tt.createLinearGradient(t.positionScreen.x, t.positionScreen.y, e.positionScreen.x, e.positionScreen.y);
                            a.addColorStop(0, i), a.addColorStop(1, o)
                        } catch (s) {
                            a = i
                        }
                        v(a)
                    }
                }
                tt.stroke(), vt.expandByScalar(2 * n.linewidth)
            } else n instanceof THREE.LineDashedMaterial && (E(n.linewidth), m(n.linecap), g(n.linejoin), v(n.color.getStyle()), T([n.dashSize, n.gapSize]), tt.stroke(), vt.expandByScalar(2 * n.linewidth), T([]))
        }

        function o(t, e, n, i, o, c, l, f) {
            if (I.info.render.vertices += 3, I.info.render.faces++, p(f.opacity), d(f.blending), A = t.positionScreen.x, C = t.positionScreen.y, L = e.positionScreen.x, P = e.positionScreen.y, F = n.positionScreen.x, D = n.positionScreen.y, a(A, C, L, P, F, D), (f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial) && null === f.map) ft.copy(f.color), pt.copy(f.emissive), f.vertexColors === THREE.FaceColors && ft.multiply(l.color), ut.copy(yt), Ht.copy(t.positionWorld).add(e.positionWorld).add(n.positionWorld).divideScalar(3), r(Ht, l.normalModel, ut), ut.multiply(ft).add(pt), f.wireframe === !0 ? s(ut, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ut);
            else if (f instanceof THREE.MeshBasicMaterial || f instanceof THREE.MeshLambertMaterial || f instanceof THREE.MeshPhongMaterial)
                if (null !== f.map) {
                    var E = f.map.mapping;
                    E === THREE.UVMapping && (B = l.uvs, u(A, C, L, P, F, D, B[i].x, B[i].y, B[o].x, B[o].y, B[c].x, B[c].y, f.map))
                } else null !== f.envMap ? f.envMap.mapping === THREE.SphericalReflectionMapping && (bt.copy(l.vertexNormalsModel[i]).applyMatrix3(_t), k = .5 * bt.x + .5, O = .5 * bt.y + .5, bt.copy(l.vertexNormalsModel[o]).applyMatrix3(_t), U = .5 * bt.x + .5, V = .5 * bt.y + .5, bt.copy(l.vertexNormalsModel[c]).applyMatrix3(_t), N = .5 * bt.x + .5, z = .5 * bt.y + .5, u(A, C, L, P, F, D, k, O, U, V, N, z, f.envMap)) : (ut.copy(f.color), f.vertexColors === THREE.FaceColors && ut.multiply(l.color), f.wireframe === !0 ? s(ut, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ut));
            else f instanceof THREE.MeshDepthMaterial ? (ut.r = ut.g = ut.b = 1 - R(t.positionScreen.z * t.positionScreen.w, _.near, _.far), f.wireframe === !0 ? s(ut, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ut)) : f instanceof THREE.MeshNormalMaterial ? (bt.copy(l.normalModel).applyMatrix3(_t), ut.setRGB(bt.x, bt.y, bt.z).multiplyScalar(.5).addScalar(.5), f.wireframe === !0 ? s(ut, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ut)) : (ut.setRGB(1, 1, 1), f.wireframe === !0 ? s(ut, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : h(ut))
        }

        function a(t, e, r, n, i, o) {
            tt.beginPath(), tt.moveTo(t, e), tt.lineTo(r, n), tt.lineTo(i, o), tt.closePath()
        }

        function s(t, e, r, n) {
            E(e), m(r), g(n), v(t.getStyle()), tt.stroke(), vt.expandByScalar(2 * e)
        }

        function h(t) {
            y(t.getStyle()), tt.fill()
        }

        function c(t) {
            l(t.target)
        }

        function l(t) {
            if (!(t instanceof THREE.CompressedTexture)) {
                var e = t.wrapS === THREE.RepeatWrapping,
                    r = t.wrapT === THREE.RepeatWrapping,
                    n = t.image,
                    i = document.createElement("canvas");
                i.width = n.width, i.height = n.height;
                var o = i.getContext("2d");
                o.setTransform(1, 0, 0, -1, 0, n.height), o.drawImage(n, 0, 0), Et[t.id] = tt.createPattern(i, e === !0 && r === !0 ? "repeat" : e === !0 && r === !1 ? "repeat-x" : e === !1 && r === !0 ? "repeat-y" : "no-repeat")
            }
        }

        function u(t, e, r, n, i, o, a, s, h, u, f, p, d) {
            if (!(d instanceof THREE.DataTexture)) {
                d.hasEventListener("update", c) === !1 && (void 0 !== d.image && d.image.width > 0 && l(d), d.addEventListener("update", c));
                var E = Et[d.id];
                if (void 0 === E) return y("rgba(0,0,0,1)"), void tt.fill();
                y(E);
                var m, g, v, T, R, x, H, b, _ = d.offset.x / d.repeat.x,
                    w = d.offset.y / d.repeat.y,
                    M = d.image.width * d.repeat.x,
                    S = d.image.height * d.repeat.y;
                a = (a + _) * M, s = (s + w) * S, h = (h + _) * M, u = (u + w) * S, f = (f + _) * M, p = (p + w) * S, r -= t, n -= e, i -= t, o -= e, h -= a, u -= s, f -= a, p -= s, H = h * p - f * u, 0 !== H && (b = 1 / H, m = (p * r - u * i) * b, g = (p * n - u * o) * b, v = (h * i - f * r) * b, T = (h * o - f * n) * b, R = t - m * a - v * s, x = e - g * a - T * s, tt.save(), tt.transform(m, g, v, T, R, x), tt.fill(), tt.restore())
            }
        }

        function f(t, e, r) {
            var n, i = e.x - t.x,
                o = e.y - t.y,
                a = i * i + o * o;
            0 !== a && (n = r / Math.sqrt(a), i *= n, o *= n, e.x += i, e.y += o, t.x -= i, t.y -= o)
        }

        function p(t) {
            nt !== t && (tt.globalAlpha = t, nt = t)
        }

        function d(t) {
            it !== t && (t === THREE.NormalBlending ? tt.globalCompositeOperation = "source-over" : t === THREE.AdditiveBlending ? tt.globalCompositeOperation = "lighter" : t === THREE.SubtractiveBlending && (tt.globalCompositeOperation = "darker"), it = t)
        }

        function E(t) {
            st !== t && (tt.lineWidth = t, st = t)
        }

        function m(t) {
            ht !== t && (tt.lineCap = t, ht = t)
        }

        function g(t) {
            ct !== t && (tt.lineJoin = t, ct = t)
        }

        function v(t) {
            ot !== t && (tt.strokeStyle = t, ot = t)
        }

        function y(t) {
            at !== t && (tt.fillStyle = t, at = t)
        }

        function T(t) {
            lt.length !== t.length && (tt.setLineDash(t), lt = t)
        }
        console.log("THREE.CanvasRenderer", THREE.REVISION);
        var R = THREE.Math.smoothstep;
        t = t || {};
        var x, H, b, _, w, M, S, A, C, L, P, F, D, B, k, O, U, V, N, z, I = this,
            G = new THREE.Projector,
            j = void 0 !== t.canvas ? t.canvas : document.createElement("canvas"),
            W = j.width,
            X = j.height,
            q = Math.floor(W / 2),
            Y = Math.floor(X / 2),
            K = 0,
            Q = 0,
            Z = W,
            J = X,
            $ = 1,
            tt = j.getContext("2d", {
                alpha: t.alpha === !0
            }),
            et = new THREE.Color(0),
            rt = t.alpha === !0 ? 0 : 1,
            nt = 1,
            it = 0,
            ot = null,
            at = null,
            st = null,
            ht = null,
            ct = null,
            lt = [],
            ut = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
            ft = (new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color),
            pt = new THREE.Color,
            dt = new THREE.Color,
            Et = {},
            mt = new THREE.Box2,
            gt = new THREE.Box2,
            vt = new THREE.Box2,
            yt = new THREE.Color,
            Tt = new THREE.Color,
            Rt = new THREE.Color,
            xt = new THREE.Vector3,
            Ht = new THREE.Vector3,
            bt = new THREE.Vector3,
            _t = new THREE.Matrix3;
        void 0 === tt.setLineDash && (tt.setLineDash = function() {}), this.domElement = j, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
            render: {
                vertices: 0,
                faces: 0
            }
        }, this.supportsVertexTextures = function() {}, this.setFaceCulling = function() {}, this.getPixelRatio = function() {
            return $
        }, this.setPixelRatio = function(t) {
            $ = t
        }, this.setSize = function(t, e, r) {
            W = t * $, X = e * $, j.width = W, j.height = X, q = Math.floor(W / 2), Y = Math.floor(X / 2), r !== !1 && (j.style.width = t + "px", j.style.height = e + "px"), mt.min.set(-q, -Y), mt.max.set(q, Y), gt.min.set(-q, -Y), gt.max.set(q, Y), nt = 1, it = 0, ot = null, at = null, st = null, ht = null, ct = null, this.setViewport(0, 0, t, e)
        }, this.setViewport = function(t, e, r, n) {
            K = t * $, Q = e * $, Z = r * $, J = n * $
        }, this.setScissor = function() {}, this.enableScissorTest = function() {}, this.setClearColor = function(t, e) {
            et.set(t), rt = void 0 !== e ? e : 1, gt.min.set(-q, -Y), gt.max.set(q, Y)
        }, this.setClearColorHex = function(t, e) {
            console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(t, e)
        }, this.getClearColor = function() {
            return et
        }, this.getClearAlpha = function() {
            return rt
        }, this.getMaxAnisotropy = function() {
            return 0
        }, this.clear = function() {
            gt.empty() === !1 && (gt.intersect(mt), gt.expandByScalar(2), gt.min.x = gt.min.x + q, gt.min.y = -gt.min.y + Y, gt.max.x = gt.max.x + q, gt.max.y = -gt.max.y + Y, rt < 1 && tt.clearRect(0 | gt.min.x, 0 | gt.max.y, gt.max.x - gt.min.x | 0, gt.min.y - gt.max.y | 0), rt > 0 && (d(THREE.NormalBlending), p(1), y("rgba(" + Math.floor(255 * et.r) + "," + Math.floor(255 * et.g) + "," + Math.floor(255 * et.b) + "," + rt + ")"), tt.fillRect(0 | gt.min.x, 0 | gt.max.y, gt.max.x - gt.min.x | 0, gt.min.y - gt.max.y | 0)), gt.makeEmpty())
        }, this.clearColor = function() {}, this.clearDepth = function() {}, this.clearStencil = function() {}, this.render = function(t, r) {
            if (r instanceof THREE.Camera == !1) return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
            this.autoClear === !0 && this.clear(), I.info.render.vertices = 0, I.info.render.faces = 0, tt.setTransform(Z / W, 0, 0, -J / X, K, X - Q), tt.translate(q, Y), x = G.projectScene(t, r, this.sortObjects, this.sortElements), H = x.elements, b = x.lights, _ = r, _t.getNormalMatrix(r.matrixWorldInverse), e();
            for (var a = 0, s = H.length; a < s; a++) {
                var h = H[a],
                    c = h.material;
                if (void 0 !== c && 0 !== c.opacity) {
                    if (vt.makeEmpty(), h instanceof THREE.RenderableSprite) w = h, w.x *= q, w.y *= Y, n(w, h, c);
                    else if (h instanceof THREE.RenderableLine) w = h.v1, M = h.v2, w.positionScreen.x *= q, w.positionScreen.y *= Y, M.positionScreen.x *= q, M.positionScreen.y *= Y, vt.setFromPoints([w.positionScreen, M.positionScreen]), mt.isIntersectionBox(vt) === !0 && i(w, M, h, c);
                    else if (h instanceof THREE.RenderableFace) {
                        if (w = h.v1, M = h.v2, S = h.v3, w.positionScreen.z < -1 || w.positionScreen.z > 1) continue;
                        if (M.positionScreen.z < -1 || M.positionScreen.z > 1) continue;
                        if (S.positionScreen.z < -1 || S.positionScreen.z > 1) continue;
                        w.positionScreen.x *= q, w.positionScreen.y *= Y, M.positionScreen.x *= q, M.positionScreen.y *= Y, S.positionScreen.x *= q, S.positionScreen.y *= Y, c.overdraw > 0 && (f(w.positionScreen, M.positionScreen, c.overdraw), f(M.positionScreen, S.positionScreen, c.overdraw), f(S.positionScreen, w.positionScreen, c.overdraw)), vt.setFromPoints([w.positionScreen, M.positionScreen, S.positionScreen]), mt.isIntersectionBox(vt) === !0 && o(w, M, S, 0, 1, 2, h, c)
                    }
                    gt.union(vt)
                }
            }
            tt.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, THREE.OBJLoader = function(t) {
        this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
    }, THREE.OBJLoader.prototype = {
        constructor: THREE.OBJLoader,
        load: function(t, e, r, n) {
            var i = this,
                o = new THREE.XHRLoader(i.manager);
            o.setCrossOrigin(this.crossOrigin), o.load(t, function(t) {
                e(i.parse(t))
            }, r, n)
        },
        parse: function(t) {
            function e(t) {
                var e = parseInt(t);
                return 3 * (e >= 0 ? e - 1 : e + f.length / 3)
            }

            function r(t) {
                var e = parseInt(t);
                return 3 * (e >= 0 ? e - 1 : e + p.length / 3)
            }

            function n(t) {
                var e = parseInt(t);
                return 2 * (e >= 0 ? e - 1 : e + d.length / 2)
            }

            function i(t, e, r) {
                c.vertices.push(f[t], f[t + 1], f[t + 2], f[e], f[e + 1], f[e + 2], f[r], f[r + 1], f[r + 2])
            }

            function o(t, e, r) {
                c.normals.push(p[t], p[t + 1], p[t + 2], p[e], p[e + 1], p[e + 2], p[r], p[r + 1], p[r + 2])
            }

            function a(t, e, r) {
                c.uvs.push(d[t], d[t + 1], d[e], d[e + 1], d[r], d[r + 1])
            }

            function s(t, s, h, c, l, u, f, p, d, E, m, g) {
                var v, y = e(t),
                    T = e(s),
                    R = e(h);
                void 0 === c ? i(y, T, R) : (v = e(c), i(y, T, v), i(T, R, v)), void 0 !== l && (y = n(l), T = n(u), R = n(f), void 0 === c ? a(y, T, R) : (v = n(p), a(y, T, v), a(T, R, v))), void 0 !== d && (y = r(d), T = r(E), R = r(m), void 0 === c ? o(y, T, R) : (v = r(g), o(y, T, v), o(T, R, v)))
            }
            console.time("OBJLoader");
            var h, c, l, u = [];
            /^o /gm.test(t) === !1 && (c = {
                vertices: [],
                normals: [],
                uvs: []
            }, l = {
                name: ""
            }, h = {
                name: "",
                geometry: c,
                material: l
            }, u.push(h));
            for (var f = [], p = [], d = [], E = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, m = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, g = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, v = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, y = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, T = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, R = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, x = t.split("\n"), H = 0; H < x.length; H++) {
                var b = x[H];
                b = b.trim();
                var _;
                0 !== b.length && "#" !== b.charAt(0) && (null !== (_ = E.exec(b)) ? f.push(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])) : null !== (_ = m.exec(b)) ? p.push(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])) : null !== (_ = g.exec(b)) ? d.push(parseFloat(_[1]), parseFloat(_[2])) : null !== (_ = v.exec(b)) ? s(_[1], _[2], _[3], _[4]) : null !== (_ = y.exec(b)) ? s(_[2], _[5], _[8], _[11], _[3], _[6], _[9], _[12]) : null !== (_ = T.exec(b)) ? s(_[2], _[6], _[10], _[14], _[3], _[7], _[11], _[15], _[4], _[8], _[12], _[16]) : null !== (_ = R.exec(b)) ? s(_[2], _[5], _[8], _[11], void 0, void 0, void 0, void 0, _[3], _[6], _[9], _[12]) : /^o /.test(b) ? (c = {
                    vertices: [],
                    normals: [],
                    uvs: []
                }, l = {
                    name: ""
                }, h = {
                    name: b.substring(2).trim(),
                    geometry: c,
                    material: l
                }, u.push(h)) : /^g /.test(b) || (/^usemtl /.test(b) ? l.name = b.substring(7).trim() : /^mtllib /.test(b) || /^s /.test(b)))
            }
            for (var w = new THREE.Object3D, H = 0, M = u.length; H < M; H++) {
                h = u[H], c = h.geometry;
                var S = new THREE.BufferGeometry;
                S.addAttribute("position", new THREE.BufferAttribute(new Float32Array(c.vertices), 3)), c.normals.length > 0 && S.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(c.normals), 3)), c.uvs.length > 0 && S.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(c.uvs), 2)), l = new THREE.MeshLambertMaterial, l.name = h.material.name;
                var A = new THREE.Mesh(S, l);
                A.name = h.name, w.add(A)
            }
            return console.timeEnd("OBJLoader"), w
        }
    }, THREE.OrbitControls = function(t, e) {
        function r() {
            return 2 * Math.PI / 60 / 60 * d.autoRotateSpeed
        }

        function n() {
            return Math.pow(.95, d.zoomSpeed)
        }

        function i(t) {
            if (d.enabled !== !1) {
                if (t.preventDefault(), t.button === d.mouseButtons.ORBIT) {
                    if (d.noRotate === !0) return;
                    D = F.ROTATE, m.set(t.clientX, t.clientY)
                } else if (t.button === d.mouseButtons.ZOOM) {
                    if (d.noZoom === !0) return;
                    D = F.DOLLY, b.set(t.clientX, t.clientY)
                } else if (t.button === d.mouseButtons.PAN) {
                    if (d.noPan === !0) return;
                    D = F.PAN, y.set(t.clientX, t.clientY)
                }
                D !== F.NONE && (document.addEventListener("mousemove", o, !1), document.addEventListener("mouseup", a, !1), d.dispatchEvent(U))
            }
        }

        function o(t) {
            if (d.enabled !== !1) {
                t.preventDefault();
                var e = d.domElement === document ? d.domElement.body : d.domElement;
                if (D === F.ROTATE) {
                    if (d.noRotate === !0) return;
                    g.set(t.clientX, t.clientY), v.subVectors(g, m), d.rotateLeft(2 * Math.PI * v.x / e.clientWidth * d.rotateSpeed), d.rotateUp(2 * Math.PI * v.y / e.clientHeight * d.rotateSpeed), m.copy(g)
                } else if (D === F.DOLLY) {
                    if (d.noZoom === !0) return;
                    _.set(t.clientX, t.clientY), w.subVectors(_, b), w.y > 0 ? d.dollyIn() : w.y < 0 && d.dollyOut(), b.copy(_)
                } else if (D === F.PAN) {
                    if (d.noPan === !0) return;
                    T.set(t.clientX, t.clientY), R.subVectors(T, y), d.pan(R.x, R.y), y.copy(T)
                }
                D !== F.NONE && d.update()
            }
        }

        function a() {
            d.enabled !== !1 && (document.removeEventListener("mousemove", o, !1), document.removeEventListener("mouseup", a, !1), d.dispatchEvent(V), D = F.NONE)
        }

        function s(t) {
            if (d.enabled !== !1 && d.noZoom !== !0 && D === F.NONE) {
                t.preventDefault(), t.stopPropagation();
                var e = 0;
                void 0 !== t.wheelDelta ? e = t.wheelDelta : void 0 !== t.detail && (e = -t.detail), e > 0 ? d.dollyOut() : e < 0 && d.dollyIn(), d.update(), d.dispatchEvent(U), d.dispatchEvent(V)
            }
        }

        function h(t) {
            if (d.enabled !== !1 && d.noKeys !== !0 && d.noPan !== !0) switch (t.keyCode) {
                case d.keys.UP:
                    d.pan(0, d.keyPanSpeed), d.update();
                    break;
                case d.keys.BOTTOM:
                    d.pan(0, -d.keyPanSpeed), d.update();
                    break;
                case d.keys.LEFT:
                    d.pan(d.keyPanSpeed, 0), d.update();
                    break;
                case d.keys.RIGHT:
                    d.pan(-d.keyPanSpeed, 0), d.update()
            }
        }

        function c(t) {
            if (d.enabled !== !1) {
                switch (t.touches.length) {
                    case 1:
                        if (d.noRotate === !0) return;
                        D = F.TOUCH_ROTATE, m.set(t.touches[0].pageX, t.touches[0].pageY);
                        break;
                    case 2:
                        if (d.noZoom === !0) return;
                        D = F.TOUCH_DOLLY;
                        var e = t.touches[0].pageX - t.touches[1].pageX,
                            r = t.touches[0].pageY - t.touches[1].pageY,
                            n = Math.sqrt(e * e + r * r);
                        b.set(0, n);
                        break;
                    case 3:
                        if (d.noPan === !0) return;
                        D = F.TOUCH_PAN, y.set(t.touches[0].pageX, t.touches[0].pageY);
                        break;
                    default:
                        D = F.NONE
                }
                D !== F.NONE && d.dispatchEvent(U)
            }
        }

        function l(t) {
            if (d.enabled !== !1) {
                t.preventDefault(), t.stopPropagation();
                var e = d.domElement === document ? d.domElement.body : d.domElement;
                switch (t.touches.length) {
                    case 1:
                        if (d.noRotate === !0) return;
                        if (D !== F.TOUCH_ROTATE) return;
                        g.set(t.touches[0].pageX, t.touches[0].pageY), v.subVectors(g, m), d.rotateLeft(2 * Math.PI * v.x / e.clientWidth * d.rotateSpeed), d.rotateUp(2 * Math.PI * v.y / e.clientHeight * d.rotateSpeed), m.copy(g), d.update();
                        break;
                    case 2:
                        if (d.noZoom === !0) return;
                        if (D !== F.TOUCH_DOLLY) return;
                        var r = t.touches[0].pageX - t.touches[1].pageX,
                            n = t.touches[0].pageY - t.touches[1].pageY,
                            i = Math.sqrt(r * r + n * n);
                        _.set(0, i), w.subVectors(_, b), w.y > 0 ? d.dollyOut() : w.y < 0 && d.dollyIn(), b.copy(_), d.update();
                        break;
                    case 3:
                        if (d.noPan === !0) return;
                        if (D !== F.TOUCH_PAN) return;
                        T.set(t.touches[0].pageX, t.touches[0].pageY), R.subVectors(T, y), d.pan(R.x, R.y), y.copy(T), d.update();
                        break;
                    default:
                        D = F.NONE
                }
            }
        }

        function u() {
            d.enabled !== !1 && (d.dispatchEvent(V), D = F.NONE)
        }
        this.object = t, this.domElement = void 0 !== e ? e : document, this.enabled = !0, this.target = new THREE.Vector3, this.center = this.target, this.noZoom = !1, this.zoomSpeed = 1, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.noRotate = !1, this.rotateSpeed = 1, this.noPan = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.noKeys = !1, this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            BOTTOM: 40
        }, this.mouseButtons = {
            ORBIT: THREE.MOUSE.LEFT,
            ZOOM: THREE.MOUSE.MIDDLE,
            PAN: THREE.MOUSE.RIGHT
        };
        var f, p, d = this,
            E = 1e-6,
            m = new THREE.Vector2,
            g = new THREE.Vector2,
            v = new THREE.Vector2,
            y = new THREE.Vector2,
            T = new THREE.Vector2,
            R = new THREE.Vector2,
            x = new THREE.Vector3,
            H = new THREE.Vector3,
            b = new THREE.Vector2,
            _ = new THREE.Vector2,
            w = new THREE.Vector2,
            M = 0,
            S = 0,
            A = 1,
            C = new THREE.Vector3,
            L = new THREE.Vector3,
            P = new THREE.Quaternion,
            F = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_DOLLY: 4,
                TOUCH_PAN: 5
            },
            D = F.NONE;
        this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom;
        var B = (new THREE.Quaternion).setFromUnitVectors(t.up, new THREE.Vector3(0, 1, 0)),
            k = B.clone().inverse(),
            O = {
                type: "change"
            },
            U = {
                type: "start"
            },
            V = {
                type: "end"
            };
        this.rotateLeft = function(t) {
            void 0 === t && (t = r()), S -= t
        }, this.rotateUp = function(t) {
            void 0 === t && (t = r()), M -= t
        }, this.panLeft = function(t) {
            var e = this.object.matrix.elements;
            x.set(e[0], e[1], e[2]), x.multiplyScalar(-t), C.add(x)
        }, this.panUp = function(t) {
            var e = this.object.matrix.elements;
            x.set(e[4], e[5], e[6]), x.multiplyScalar(t), C.add(x)
        }, this.pan = function(t, e) {
            var r = d.domElement === document ? d.domElement.body : d.domElement;
            if (d.object instanceof THREE.PerspectiveCamera) {
                var n = d.object.position,
                    i = n.clone().sub(d.target),
                    o = i.length();
                o *= Math.tan(d.object.fov / 2 * Math.PI / 180), d.panLeft(2 * t * o / r.clientHeight), d.panUp(2 * e * o / r.clientHeight)
            } else d.object instanceof THREE.OrthographicCamera ? (d.panLeft(t * (d.object.right - d.object.left) / r.clientWidth), d.panUp(e * (d.object.top - d.object.bottom) / r.clientHeight)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
        }, this.dollyIn = function(t) {
            void 0 === t && (t = n()), d.object instanceof THREE.PerspectiveCamera ? A /= t : d.object instanceof THREE.OrthographicCamera ? (d.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)), d.object.updateProjectionMatrix(), d.dispatchEvent(O)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
        }, this.dollyOut = function(t) {
            void 0 === t && (t = n()), d.object instanceof THREE.PerspectiveCamera ? A *= t : d.object instanceof THREE.OrthographicCamera ? (d.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)), d.object.updateProjectionMatrix(), d.dispatchEvent(O)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
        }, this.update = function() {
            var t = this.object.position;
            H.copy(t).sub(this.target), H.applyQuaternion(B), f = Math.atan2(H.x, H.z), p = Math.atan2(Math.sqrt(H.x * H.x + H.z * H.z), H.y), this.autoRotate && D === F.NONE && this.rotateLeft(r()), f += S, p += M, f = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, f)), p = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, p)), p = Math.max(E, Math.min(Math.PI - E, p));
            var e = H.length() * A;
            e = Math.max(this.minDistance, Math.min(this.maxDistance, e)), this.target.add(C), H.x = e * Math.sin(p) * Math.sin(f), H.y = e * Math.cos(p), H.z = e * Math.sin(p) * Math.cos(f), H.applyQuaternion(k), t.copy(this.target).add(H), this.object.lookAt(this.target), S = 0, M = 0, A = 1, C.set(0, 0, 0), (L.distanceToSquared(this.object.position) > E || 8 * (1 - P.dot(this.object.quaternion)) > E) && (this.dispatchEvent(O), L.copy(this.object.position), P.copy(this.object.quaternion))
        }, this.reset = function() {
            D = F.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(O), this.update()
        }, this.getPolarAngle = function() {
            return p
        }, this.getAzimuthalAngle = function() {
            return f
        }, this.domElement.addEventListener("contextmenu", function(t) {
            t.preventDefault()
        }, !1), this.domElement.addEventListener("mousedown", i, !1), this.domElement.addEventListener("mousewheel", s, !1), this.domElement.addEventListener("DOMMouseScroll", s, !1), this.domElement.addEventListener("touchstart", c, !1), this.domElement.addEventListener("touchend", u, !1), this.domElement.addEventListener("touchmove", l, !1), window.addEventListener("keydown", h, !1), this.update()
    }, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, THREE.RenderableObject = function() {
        this.id = 0, this.object = null, this.z = 0
    }, THREE.RenderableFace = function() {
        this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.normalModel = new THREE.Vector3, this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsLength = 0, this.color = new THREE.Color, this.material = null, this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2], this.z = 0
    }, THREE.RenderableVertex = function() {
        this.position = new THREE.Vector3, this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
    }, THREE.RenderableVertex.prototype.copy = function(t) {
        this.positionWorld.copy(t.positionWorld), this.positionScreen.copy(t.positionScreen)
    }, THREE.RenderableLine = function() {
        this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.vertexColors = [new THREE.Color, new THREE.Color], this.material = null, this.z = 0
    }, THREE.RenderableSprite = function() {
        this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new THREE.Vector2, this.material = null
    }, THREE.Projector = function() {
        function t() {
            if (h === y) {
                var t = new THREE.RenderableObject;
                return v.push(t), y++, h++, t
            }
            return v[h++]
        }

        function e() {
            if (l === R) {
                var t = new THREE.RenderableVertex;
                return T.push(t), R++, l++, t
            }
            return T[l++]
        }

        function r() {
            if (f === H) {
                var t = new THREE.RenderableFace;
                return x.push(t), H++, f++, t
            }
            return x[f++]
        }

        function n() {
            if (d === _) {
                var t = new THREE.RenderableLine;
                return b.push(t), _++, d++, t
            }
            return b[d++]
        }

        function i() {
            if (m === M) {
                var t = new THREE.RenderableSprite;
                return w.push(t), M++, m++, t
            }
            return w[m++]
        }

        function o(t, e) {
            return t.z !== e.z ? e.z - t.z : t.id !== e.id ? t.id - e.id : 0
        }

        function a(t, e) {
            var r = 0,
                n = 1,
                i = t.z + t.w,
                o = e.z + e.w,
                a = -t.z + t.w,
                s = -e.z + e.w;
            return i >= 0 && o >= 0 && a >= 0 && s >= 0 || !(i < 0 && o < 0 || a < 0 && s < 0) && (i < 0 ? r = Math.max(r, i / (i - o)) : o < 0 && (n = Math.min(n, i / (i - o))), a < 0 ? r = Math.max(r, a / (a - s)) : s < 0 && (n = Math.min(n, a / (a - s))), !(n < r) && (t.lerp(e, r), e.lerp(t, 1 - n), !0))
        }
        var s, h, c, l, u, f, p, d, E, m, g, v = [],
            y = 0,
            T = [],
            R = 0,
            x = [],
            H = 0,
            b = [],
            _ = 0,
            w = [],
            M = 0,
            S = {
                objects: [],
                lights: [],
                elements: []
            },
            A = new THREE.Vector3,
            C = new THREE.Vector4,
            L = new THREE.Box3(new THREE.Vector3((-1), (-1), (-1)), new THREE.Vector3(1, 1, 1)),
            P = new THREE.Box3,
            F = new Array(3),
            D = (new Array(4), new THREE.Matrix4),
            B = new THREE.Matrix4,
            k = new THREE.Matrix4,
            O = new THREE.Matrix3,
            U = new THREE.Frustum,
            V = new THREE.Vector4,
            N = new THREE.Vector4;
        this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
        }, this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
        }, this.pickingRay = function(t, e) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        };
        var z = function() {
                var t = [],
                    i = [],
                    o = null,
                    a = null,
                    s = new THREE.Matrix3,
                    h = function(e) {
                        o = e, a = o.material, s.getNormalMatrix(o.matrixWorld), t.length = 0, i.length = 0
                    },
                    l = function(t) {
                        var e = t.position,
                            r = t.positionWorld,
                            n = t.positionScreen;
                        r.copy(e).applyMatrix4(g), n.copy(r).applyMatrix4(B);
                        var i = 1 / n.w;
                        n.x *= i, n.y *= i, n.z *= i, t.visible = n.x >= -1 && n.x <= 1 && n.y >= -1 && n.y <= 1 && n.z >= -1 && n.z <= 1
                    },
                    f = function(t, r, n) {
                        c = e(), c.position.set(t, r, n), l(c)
                    },
                    d = function(e, r, n) {
                        t.push(e, r, n)
                    },
                    E = function(t, e) {
                        i.push(t, e)
                    },
                    m = function(t, e, r) {
                        return t.visible === !0 || e.visible === !0 || r.visible === !0 || (F[0] = t.positionScreen, F[1] = e.positionScreen, F[2] = r.positionScreen, L.isIntersectionBox(P.setFromPoints(F)))
                    },
                    v = function(t, e, r) {
                        return (r.positionScreen.x - t.positionScreen.x) * (e.positionScreen.y - t.positionScreen.y) - (r.positionScreen.y - t.positionScreen.y) * (e.positionScreen.x - t.positionScreen.x) < 0
                    },
                    y = function(t, e) {
                        var r = T[t],
                            i = T[e];
                        p = n(), p.id = o.id, p.v1.copy(r), p.v2.copy(i), p.z = (r.positionScreen.z + i.positionScreen.z) / 2, p.material = o.material, S.elements.push(p)
                    },
                    R = function(e, n, h) {
                        var c = T[e],
                            l = T[n],
                            f = T[h];
                        if (m(c, l, f) !== !1 && (a.side === THREE.DoubleSide || v(c, l, f) === !0)) {
                            u = r(), u.id = o.id, u.v1.copy(c), u.v2.copy(l), u.v3.copy(f), u.z = (c.positionScreen.z + l.positionScreen.z + f.positionScreen.z) / 3;
                            for (var p = 0; p < 3; p++) {
                                var d = 3 * arguments[p],
                                    E = u.vertexNormalsModel[p];
                                E.set(t[d], t[d + 1], t[d + 2]), E.applyMatrix3(s).normalize();
                                var g = 2 * arguments[p],
                                    y = u.uvs[p];
                                y.set(i[g], i[g + 1])
                            }
                            u.vertexNormalsLength = 3, u.material = o.material, S.elements.push(u)
                        }
                    };
                return {
                    setObject: h,
                    projectVertex: l,
                    checkTriangleVisibility: m,
                    checkBackfaceCulling: v,
                    pushVertex: f,
                    pushNormal: d,
                    pushUv: E,
                    pushLine: y,
                    pushTriangle: R
                }
            },
            I = new z;
        this.projectScene = function(c, v, y, R) {
            f = 0, d = 0, m = 0, S.elements.length = 0, c.autoUpdate === !0 && c.updateMatrixWorld(), void 0 === v.parent && v.updateMatrixWorld(), D.copy(v.matrixWorldInverse.getInverse(v.matrixWorld)), B.multiplyMatrices(v.projectionMatrix, D), U.setFromMatrix(B), h = 0, S.objects.length = 0, S.lights.length = 0, c.traverseVisible(function(e) {
                if (e instanceof THREE.Light) S.lights.push(e);
                else if (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Sprite) {
                    if (e.material.visible === !1) return;
                    e.frustumCulled !== !1 && U.intersectsObject(e) !== !0 || (s = t(), s.id = e.id, s.object = e, A.setFromMatrixPosition(e.matrixWorld), A.applyProjection(B), s.z = A.z, S.objects.push(s))
                }
            }), y === !0 && S.objects.sort(o);
            for (var x = 0, H = S.objects.length; x < H; x++) {
                var b = S.objects[x].object,
                    _ = b.geometry;
                if (I.setObject(b), g = b.matrixWorld, l = 0, b instanceof THREE.Mesh) {
                    if (_ instanceof THREE.BufferGeometry) {
                        var w = _.attributes,
                            M = _.offsets;
                        if (void 0 === w.position) continue;
                        for (var L = w.position.array, P = 0, F = L.length; P < F; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                        if (void 0 !== w.normal)
                            for (var z = w.normal.array, P = 0, F = z.length; P < F; P += 3) I.pushNormal(z[P], z[P + 1], z[P + 2]);
                        if (void 0 !== w.uv)
                            for (var G = w.uv.array, P = 0, F = G.length; P < F; P += 2) I.pushUv(G[P], G[P + 1]);
                        if (void 0 !== w.index) {
                            var j = w.index.array;
                            if (M.length > 0)
                                for (var x = 0; x < M.length; x++)
                                    for (var W = M[x], X = W.index, P = W.start, F = W.start + W.count; P < F; P += 3) I.pushTriangle(j[P] + X, j[P + 1] + X, j[P + 2] + X);
                            else
                                for (var P = 0, F = j.length; P < F; P += 3) I.pushTriangle(j[P], j[P + 1], j[P + 2])
                        } else
                            for (var P = 0, F = L.length / 3; P < F; P += 3) I.pushTriangle(P, P + 1, P + 2)
                    } else if (_ instanceof THREE.Geometry) {
                        var q = _.vertices,
                            Y = _.faces,
                            K = _.faceVertexUvs[0];
                        O.getNormalMatrix(g);
                        for (var Q = b.material, Z = Q instanceof THREE.MeshFaceMaterial, J = Z === !0 ? b.material : null, $ = 0, tt = q.length; $ < tt; $++) {
                            var et = q[$];
                            if (A.copy(et), Q.morphTargets === !0)
                                for (var rt = _.morphTargets, nt = b.morphTargetInfluences, it = 0, ot = rt.length; it < ot; it++) {
                                    var at = nt[it];
                                    if (0 !== at) {
                                        var st = rt[it],
                                            ht = st.vertices[$];
                                        A.x += (ht.x - et.x) * at, A.y += (ht.y - et.y) * at, A.z += (ht.z - et.z) * at
                                    }
                                }
                            I.pushVertex(A.x, A.y, A.z)
                        }
                        for (var ct = 0, lt = Y.length; ct < lt; ct++) {
                            var ut = Y[ct],
                                Q = Z === !0 ? J.materials[ut.materialIndex] : b.material;
                            if (void 0 !== Q) {
                                var ft = Q.side,
                                    pt = T[ut.a],
                                    dt = T[ut.b],
                                    Et = T[ut.c];
                                if (I.checkTriangleVisibility(pt, dt, Et) !== !1) {
                                    var mt = I.checkBackfaceCulling(pt, dt, Et);
                                    if (ft !== THREE.DoubleSide) {
                                        if (ft === THREE.FrontSide && mt === !1) continue;
                                        if (ft === THREE.BackSide && mt === !0) continue
                                    }
                                    u = r(), u.id = b.id, u.v1.copy(pt), u.v2.copy(dt), u.v3.copy(Et), u.normalModel.copy(ut.normal), mt !== !1 || ft !== THREE.BackSide && ft !== THREE.DoubleSide || u.normalModel.negate(), u.normalModel.applyMatrix3(O).normalize();
                                    for (var gt = ut.vertexNormals, vt = 0, yt = Math.min(gt.length, 3); vt < yt; vt++) {
                                        var Tt = u.vertexNormalsModel[vt];
                                        Tt.copy(gt[vt]), mt !== !1 || ft !== THREE.BackSide && ft !== THREE.DoubleSide || Tt.negate(), Tt.applyMatrix3(O).normalize()
                                    }
                                    u.vertexNormalsLength = gt.length;
                                    var Rt = K[ct];
                                    if (void 0 !== Rt)
                                        for (var xt = 0; xt < 3; xt++) u.uvs[xt].copy(Rt[xt]);
                                    u.color = ut.color, u.material = Q, u.z = (pt.positionScreen.z + dt.positionScreen.z + Et.positionScreen.z) / 3, S.elements.push(u)
                                }
                            }
                        }
                    }
                } else if (b instanceof THREE.Line) {
                    if (_ instanceof THREE.BufferGeometry) {
                        var w = _.attributes;
                        if (void 0 !== w.position) {
                            for (var L = w.position.array, P = 0, F = L.length; P < F; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                            if (void 0 !== w.index)
                                for (var j = w.index.array, P = 0, F = j.length; P < F; P += 2) I.pushLine(j[P], j[P + 1]);
                            else
                                for (var Ht = b.mode === THREE.LinePieces ? 2 : 1, P = 0, F = L.length / 3 - 1; P < F; P += Ht) I.pushLine(P, P + 1)
                        }
                    } else if (_ instanceof THREE.Geometry) {
                        k.multiplyMatrices(B, g);
                        var q = b.geometry.vertices;
                        if (0 === q.length) continue;
                        pt = e(), pt.positionScreen.copy(q[0]).applyMatrix4(k);
                        for (var Ht = b.mode === THREE.LinePieces ? 2 : 1, $ = 1, tt = q.length; $ < tt; $++) pt = e(), pt.positionScreen.copy(q[$]).applyMatrix4(k), ($ + 1) % Ht > 0 || (dt = T[l - 2], V.copy(pt.positionScreen), N.copy(dt.positionScreen), a(V, N) === !0 && (V.multiplyScalar(1 / V.w), N.multiplyScalar(1 / N.w), p = n(), p.id = b.id, p.v1.positionScreen.copy(V), p.v2.positionScreen.copy(N), p.z = Math.max(V.z, N.z), p.material = b.material, b.material.vertexColors === THREE.VertexColors && (p.vertexColors[0].copy(b.geometry.colors[$]), p.vertexColors[1].copy(b.geometry.colors[$ - 1])), S.elements.push(p)))
                    }
                } else if (b instanceof THREE.Sprite) {
                    C.set(g.elements[12], g.elements[13], g.elements[14], 1), C.applyMatrix4(B);
                    var bt = 1 / C.w;
                    C.z *= bt, C.z >= -1 && C.z <= 1 && (E = i(), E.id = b.id, E.x = C.x * bt, E.y = C.y * bt, E.z = C.z, E.object = b, E.rotation = b.rotation, E.scale.x = b.scale.x * Math.abs(E.x - (C.x + v.projectionMatrix.elements[0]) / (C.w + v.projectionMatrix.elements[12])), E.scale.y = b.scale.y * Math.abs(E.y - (C.y + v.projectionMatrix.elements[5]) / (C.w + v.projectionMatrix.elements[13])), E.material = b.material, S.elements.push(E))
                }
            }
            return R === !0 && S.elements.sort(o), S
        }
    }, window.ThreeBSP = function() {
        var t, e = 1e-5,
            r = 0,
            n = 1,
            i = 2,
            o = 3;
        return t = function(e) {
            var r, n, i, o, a, s, h, c = [];
            if (e instanceof THREE.Geometry) this.matrix = new THREE.Matrix4;
            else {
                if (!(e instanceof THREE.Mesh)) {
                    if (e instanceof t.Node) return this.tree = e, this.matrix = new THREE.Matrix4, this;
                    throw "ThreeBSP: Given geometry is unsupported"
                }
                e.updateMatrix(), this.matrix = e.matrix.clone(), e = e.geometry
            }
            for (r = 0, n = e.faces.length; r < n; r++) i = e.faces[r], a = e.faceVertexUvs[0][r], h = new t.Polygon, i instanceof THREE.Face3 ? (o = e.vertices[i.a], s = a ? new THREE.Vector2(a[0].x, a[0].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[0], s), o.applyMatrix4(this.matrix), h.vertices.push(o), o = e.vertices[i.b], s = a ? new THREE.Vector2(a[1].x, a[1].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[2], s), o.applyMatrix4(this.matrix), h.vertices.push(o), o = e.vertices[i.c], s = a ? new THREE.Vector2(a[2].x, a[2].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[2], s), o.applyMatrix4(this.matrix), h.vertices.push(o)) : (o = e.vertices[i.a], s = a ? new THREE.Vector2(a[0].x, a[0].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[0], s), o.applyMatrix4(this.matrix), h.vertices.push(o), o = e.vertices[i.b], s = a ? new THREE.Vector2(a[1].x, a[1].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[1], s), o.applyMatrix4(this.matrix), h.vertices.push(o), o = e.vertices[i.c], s = a ? new THREE.Vector2(a[2].x, a[2].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[2], s), o.applyMatrix4(this.matrix), h.vertices.push(o), o = e.vertices[i.d], s = a ? new THREE.Vector2(a[3].x, a[3].y) : null, o = new t.Vertex(o.x, o.y, o.z, i.vertexNormals[3], s), o.applyMatrix4(this.matrix), h.vertices.push(o)), h.calculateProperties(), c.push(h);
            this.tree = new t.Node(c)
        }, t.prototype.subtract = function(e) {
            var r = this.tree.clone(),
                n = e.tree.clone();
            return r.invert(), r.clipTo(n), n.clipTo(r), n.invert(), n.clipTo(r), n.invert(), r.build(n.allPolygons()), r.invert(), r = new t(r), r.matrix = this.matrix, r
        }, t.prototype.union = function(e) {
            var r = this.tree.clone(),
                n = e.tree.clone();
            return r.clipTo(n), n.clipTo(r), n.invert(), n.clipTo(r), n.invert(), r.build(n.allPolygons()), r = new t(r), r.matrix = this.matrix, r
        }, t.prototype.intersect = function(e) {
            var r = this.tree.clone(),
                n = e.tree.clone();
            return r.invert(), n.clipTo(r), n.invert(), r.clipTo(n), n.clipTo(r), r.build(n.allPolygons()), r.invert(), r = new t(r), r.matrix = this.matrix, r
        }, t.prototype.toGeometry = function() {
            var t, e, r, n, i, o, a, s, h, c, l = (new THREE.Matrix4).getInverse(this.matrix),
                u = new THREE.Geometry,
                f = this.tree.allPolygons(),
                p = f.length,
                d = {};
            for (t = 0; t < p; t++)
                for (r = f[t], n = r.vertices.length, e = 2; e < n; e++) c = [], s = r.vertices[0], c.push(new THREE.Vector2(s.uv.x, s.uv.y)), s = new THREE.Vector3(s.x, s.y, s.z), s.applyMatrix4(l), "undefined" != typeof d[s.x + "," + s.y + "," + s.z] ? i = d[s.x + "," + s.y + "," + s.z] : (u.vertices.push(s), i = d[s.x + "," + s.y + "," + s.z] = u.vertices.length - 1), s = r.vertices[e - 1], c.push(new THREE.Vector2(s.uv.x, s.uv.y)), s = new THREE.Vector3(s.x, s.y, s.z), s.applyMatrix4(l), "undefined" != typeof d[s.x + "," + s.y + "," + s.z] ? o = d[s.x + "," + s.y + "," + s.z] : (u.vertices.push(s), o = d[s.x + "," + s.y + "," + s.z] = u.vertices.length - 1), s = r.vertices[e], c.push(new THREE.Vector2(s.uv.x, s.uv.y)), s = new THREE.Vector3(s.x, s.y, s.z), s.applyMatrix4(l), "undefined" != typeof d[s.x + "," + s.y + "," + s.z] ? a = d[s.x + "," + s.y + "," + s.z] : (u.vertices.push(s), a = d[s.x + "," + s.y + "," + s.z] = u.vertices.length - 1), h = new THREE.Face3(i, o, a, new THREE.Vector3(r.normal.x, r.normal.y, r.normal.z)), u.faces.push(h), u.faceVertexUvs[0].push(c);
            return u
        }, t.prototype.toMesh = function(t) {
            var e = this.toGeometry(),
                r = new THREE.Mesh(e, t);
            return r.position.setFromMatrixPosition(this.matrix), r.rotation.setFromRotationMatrix(this.matrix), r
        }, t.Polygon = function(t, e, r) {
            t instanceof Array || (t = []), this.vertices = t, t.length > 0 ? this.calculateProperties() : this.normal = this.w = void 0
        }, t.Polygon.prototype.calculateProperties = function() {
            var t = this.vertices[0],
                e = this.vertices[1],
                r = this.vertices[2];
            return this.normal = e.clone().subtract(t).cross(r.clone().subtract(t)).normalize(), this.w = this.normal.clone().dot(t), this
        }, t.Polygon.prototype.clone = function() {
            var e, r, n = new t.Polygon;
            for (e = 0, r = this.vertices.length; e < r; e++) n.vertices.push(this.vertices[e].clone());
            return n.calculateProperties(), n
        }, t.Polygon.prototype.flip = function() {
            var t, e = [];
            for (this.normal.multiplyScalar(-1), this.w *= -1, t = this.vertices.length - 1; t >= 0; t--) e.push(this.vertices[t]);
            return this.vertices = e, this
        }, t.Polygon.prototype.classifyVertex = function(t) {
            var o = this.normal.dot(t) - this.w;
            return o < -e ? i : o > e ? n : r
        }, t.Polygon.prototype.classifySide = function(t) {
            var e, a, s, h = 0,
                c = 0,
                l = t.vertices.length;
            for (e = 0; e < l; e++) a = t.vertices[e], s = this.classifyVertex(a), s === n ? h++ : s === i && c++;
            return h > 0 && 0 === c ? n : 0 === h && c > 0 ? i : 0 === h && 0 === c ? r : o
        }, t.Polygon.prototype.splitPolygon = function(e, a, s, h, c) {
            var l = this.classifySide(e);
            if (l === r)(this.normal.dot(e.normal) > 0 ? a : s).push(e);
            else if (l === n) h.push(e);
            else if (l === i) c.push(e);
            else {
                var u, f, p, d, E, m, g, v, y, T = [],
                    R = [];
                for (f = 0, u = e.vertices.length; f < u; f++) p = (f + 1) % u, m = e.vertices[f], g = e.vertices[p], d = this.classifyVertex(m), E = this.classifyVertex(g), d != i && T.push(m), d != n && R.push(m), (d | E) === o && (v = (this.w - this.normal.dot(m)) / this.normal.dot(g.clone().subtract(m)), y = m.interpolate(g, v), T.push(y), R.push(y));
                T.length >= 3 && h.push(new t.Polygon(T).calculateProperties()), R.length >= 3 && c.push(new t.Polygon(R).calculateProperties())
            }
        }, t.Vertex = function(t, e, r, n, i) {
            this.x = t, this.y = e, this.z = r, this.normal = n || new THREE.Vector3, this.uv = i || new THREE.Vector2
        }, t.Vertex.prototype.clone = function() {
            return new t.Vertex(this.x, this.y, this.z, this.normal.clone(), this.uv.clone())
        }, t.Vertex.prototype.add = function(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this
        }, t.Vertex.prototype.subtract = function(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
        }, t.Vertex.prototype.multiplyScalar = function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        }, t.Vertex.prototype.cross = function(t) {
            var e = this.x,
                r = this.y,
                n = this.z;
            return this.x = r * t.z - n * t.y, this.y = n * t.x - e * t.z, this.z = e * t.y - r * t.x, this
        }, t.Vertex.prototype.normalize = function() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            return this.x /= t, this.y /= t, this.z /= t, this
        }, t.Vertex.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, t.Vertex.prototype.lerp = function(t, e) {
            return this.add(t.clone().subtract(this).multiplyScalar(e)), this.normal.add(t.normal.clone().sub(this.normal).multiplyScalar(e)), this.uv.add(t.uv.clone().sub(this.uv).multiplyScalar(e)), this
        }, t.Vertex.prototype.interpolate = function(t, e) {
            return this.clone().lerp(t, e)
        }, t.Vertex.prototype.applyMatrix4 = function(t) {
            var e = this.x,
                r = this.y,
                n = this.z,
                i = t.elements;
            return this.x = i[0] * e + i[4] * r + i[8] * n + i[12], this.y = i[1] * e + i[5] * r + i[9] * n + i[13], this.z = i[2] * e + i[6] * r + i[10] * n + i[14], this
        }, t.Node = function(e) {
            var r, n, i = [],
                o = [];
            if (this.polygons = [], this.front = this.back = void 0, e instanceof Array && 0 !== e.length) {
                for (this.divider = e[0].clone(), r = 0, n = e.length; r < n; r++) this.divider.splitPolygon(e[r], this.polygons, this.polygons, i, o);
                i.length > 0 && (this.front = new t.Node(i)), o.length > 0 && (this.back = new t.Node(o))
            }
        }, t.Node.isConvex = function(t) {
            var e, r;
            for (e = 0; e < t.length; e++)
                for (r = 0; r < t.length; r++)
                    if (e !== r && t[e].classifySide(t[r]) !== i) return !1;
            return !0
        }, t.Node.prototype.build = function(e) {
            var r, n, i = [],
                o = [];
            for (this.divider || (this.divider = e[0].clone()), r = 0, n = e.length; r < n; r++) this.divider.splitPolygon(e[r], this.polygons, this.polygons, i, o);
            i.length > 0 && (this.front || (this.front = new t.Node), this.front.build(i)), o.length > 0 && (this.back || (this.back = new t.Node), this.back.build(o))
        }, t.Node.prototype.allPolygons = function() {
            var t = this.polygons.slice();
            return this.front && (t = t.concat(this.front.allPolygons())), this.back && (t = t.concat(this.back.allPolygons())), t
        }, t.Node.prototype.clone = function() {
            var e = new t.Node;
            return e.divider = this.divider.clone(), e.polygons = this.polygons.map(function(t) {
                return t.clone()
            }), e.front = this.front && this.front.clone(), e.back = this.back && this.back.clone(), e
        }, t.Node.prototype.invert = function() {
            var t, e, r;
            for (t = 0, e = this.polygons.length; t < e; t++) this.polygons[t].flip();
            return this.divider.flip(), this.front && this.front.invert(), this.back && this.back.invert(), r = this.front, this.front = this.back, this.back = r, this
        }, t.Node.prototype.clipPolygons = function(t) {
            var e, r, n, i;
            if (!this.divider) return t.slice();
            for (n = [], i = [], e = 0, r = t.length; e < r; e++) this.divider.splitPolygon(t[e], n, i, n, i);
            return this.front && (n = this.front.clipPolygons(n)), i = this.back ? this.back.clipPolygons(i) : [], n.concat(i)
        }, t.Node.prototype.clipTo = function(t) {
            this.polygons = t.clipPolygons(this.polygons), this.front && this.front.clipTo(t), this.back && this.back.clipTo(t)
        }, t
    }(), ! function() {
        var t = function() {
            this.init()
        };
        t.prototype = {
            init: function() {
                var t = this || e;
                return t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.mobileAutoEnable = !0, t._setup(), t
            },
            volume: function(t) {
                var r = this || e;
                if (t = parseFloat(t), r.ctx || c(), "undefined" != typeof t && t >= 0 && t <= 1) {
                    if (r._volume = t, r._muted) return r;
                    r.usingWebAudio && (r.masterGain.gain.value = t);
                    for (var n = 0; n < r._howls.length; n++)
                        if (!r._howls[n]._webAudio)
                            for (var i = r._howls[n]._getSoundIds(), o = 0; o < i.length; o++) {
                                var a = r._howls[n]._soundById(i[o]);
                                a && a._node && (a._node.volume = a._volume * t)
                            }
                    return r
                }
                return r._volume
            },
            mute: function(t) {
                var r = this || e;
                r.ctx || c(), r._muted = t, r.usingWebAudio && (r.masterGain.gain.value = t ? 0 : r._volume);
                for (var n = 0; n < r._howls.length; n++)
                    if (!r._howls[n]._webAudio)
                        for (var i = r._howls[n]._getSoundIds(), o = 0; o < i.length; o++) {
                            var a = r._howls[n]._soundById(i[o]);
                            a && a._node && (a._node.muted = !!t || a._muted)
                        }
                return r
            },
            unload: function() {
                for (var t = this || e, r = t._howls.length - 1; r >= 0; r--) t._howls[r].unload();
                return t.usingWebAudio && "undefined" != typeof t.ctx.close && (t.ctx.close(), t.ctx = null, c()), t
            },
            codecs: function(t) {
                return (this || e)._codecs[t]
            },
            _setup: function() {
                var t = this || e;
                return t.state = t.ctx ? t.ctx.state || "running" : "running", t._autoSuspend(), t.noAudio || t._setupCodecs(), t
            },
            _setupCodecs: function() {
                var t = this || e,
                    r = "undefined" != typeof Audio ? new Audio : null;
                if (!r || "function" != typeof r.canPlayType) return t;
                var n = r.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    i = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
                    o = i && parseInt(i[0].split("/")[1], 10) < 33;
                return t._codecs = {
                    mp3: !(o || !n && !r.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!n,
                    opus: !!r.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!r.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!r.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!r.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!r.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!r.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(r.canPlayType("audio/x-m4a;") || r.canPlayType("audio/m4a;") || r.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(r.canPlayType("audio/x-mp4;") || r.canPlayType("audio/mp4;") || r.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!r.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    webm: !!r.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    dolby: !!r.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
                }, t
            },
            _enableMobileAudio: function() {
                var t = this || e,
                    r = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(t._navigator && t._navigator.userAgent),
                    n = !!("ontouchend" in window || t._navigator && t._navigator.maxTouchPoints > 0 || t._navigator && t._navigator.msMaxTouchPoints > 0);
                if (!t._mobileEnabled && t.ctx && (r || n)) {
                    t._mobileEnabled = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                    var i = function() {
                        var e = t.ctx.createBufferSource();
                        e.buffer = t._scratchBuffer, e.connect(t.ctx.destination), "undefined" == typeof e.start ? e.noteOn(0) : e.start(0), e.onended = function() {
                            e.disconnect(0), t._mobileEnabled = !0, t.mobileAutoEnable = !1, document.removeEventListener("touchend", i, !0)
                        }
                    };
                    return document.addEventListener("touchend", i, !0), t
                }
            },
            _autoSuspend: function() {
                var t = this;
                if (t.autoSuspend && t.ctx && "undefined" != typeof t.ctx.suspend && e.usingWebAudio) {
                    for (var r = 0; r < t._howls.length; r++)
                        if (t._howls[r]._webAudio)
                            for (var n = 0; n < t._howls[r]._sounds.length; n++)
                                if (!t._howls[r]._sounds[n]._paused) return t;
                    return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout(function() {
                        t.autoSuspend && (t._suspendTimer = null, t.state = "suspending", t.ctx.suspend().then(function() {
                            t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
                        }))
                    }, 3e4), t
                }
            },
            _autoResume: function() {
                var t = this;
                if (t.ctx && "undefined" != typeof t.ctx.resume && e.usingWebAudio) return "running" === t.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state ? (t.state = "resuming", t.ctx.resume().then(function() {
                    t.state = "running"
                }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
            }
        };
        var e = new t,
            r = function(t) {
                var e = this;
                return t.src && 0 !== t.src.length ? void e.init(t) : void console.error("An array of source files must be passed with any new Howl.")
            };
        r.prototype = {
            init: function(t) {
                var r = this;
                return e.ctx || c(), r._autoplay = t.autoplay || !1, r._format = "string" != typeof t.format ? t.format : [t.format], r._html5 = t.html5 || !1, r._muted = t.mute || !1, r._loop = t.loop || !1, r._pool = t.pool || 5, r._preload = "boolean" != typeof t.preload || t.preload, r._rate = t.rate || 1, r._sprite = t.sprite || {}, r._src = "string" != typeof t.src ? t.src : [t.src], r._volume = void 0 !== t.volume ? t.volume : 1, r._duration = 0, r._state = "unloaded", r._sounds = [], r._endTimers = {}, r._queue = [], r._onend = t.onend ? [{
                    fn: t.onend
                }] : [], r._onfade = t.onfade ? [{
                    fn: t.onfade
                }] : [], r._onload = t.onload ? [{
                    fn: t.onload
                }] : [], r._onloaderror = t.onloaderror ? [{
                    fn: t.onloaderror
                }] : [], r._onpause = t.onpause ? [{
                    fn: t.onpause
                }] : [], r._onplay = t.onplay ? [{
                    fn: t.onplay
                }] : [], r._onstop = t.onstop ? [{
                    fn: t.onstop
                }] : [], r._onmute = t.onmute ? [{
                    fn: t.onmute
                }] : [], r._onvolume = t.onvolume ? [{
                    fn: t.onvolume
                }] : [], r._onrate = t.onrate ? [{
                    fn: t.onrate
                }] : [], r._onseek = t.onseek ? [{
                    fn: t.onseek
                }] : [], r._webAudio = e.usingWebAudio && !r._html5, "undefined" != typeof e.ctx && e.ctx && e.mobileAutoEnable && e._enableMobileAudio(), e._howls.push(r), r._preload && r.load(), r
            },
            load: function() {
                var t = this,
                    r = null;
                if (e.noAudio) return void t._emit("loaderror", null, "No audio support.");
                "string" == typeof t._src && (t._src = [t._src]);
                for (var i = 0; i < t._src.length; i++) {
                    var a, s;
                    if (t._format && t._format[i]) a = t._format[i];
                    else {
                        if (s = t._src[i], "string" != typeof s) {
                            t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        a = /^data:audio\/([^;,]+);/i.exec(s), a || (a = /\.([^.]+)$/.exec(s.split("?", 1)[0])), a && (a = a[1].toLowerCase())
                    }
                    if (e.codecs(a)) {
                        r = t._src[i];
                        break
                    }
                }
                return r ? (t._src = r, t._state = "loading", "https:" === window.location.protocol && "http:" === r.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new n(t), t._webAudio && o(t), t) : void t._emit("loaderror", null, "No codec support for selected audio sources.")
            },
            play: function(t, r) {
                var n = this,
                    i = null;
                if ("number" == typeof t) i = t, t = null;
                else {
                    if ("string" == typeof t && "loaded" === n._state && !n._sprite[t]) return null;
                    if ("undefined" == typeof t) {
                        t = "__default";
                        for (var o = 0, a = 0; a < n._sounds.length; a++) n._sounds[a]._paused && !n._sounds[a]._ended && (o++, i = n._sounds[a]._id);
                        1 === o ? t = null : i = null
                    }
                }
                var s = i ? n._soundById(i) : n._inactiveSound();
                if (!s) return null;
                if (i && !t && (t = s._sprite || "__default"), "loaded" !== n._state && !n._sprite[t]) return n._queue.push({
                    event: "play",
                    action: function() {
                        n.play(n._soundById(s._id) ? s._id : void 0)
                    }
                }), s._id;
                if (i && !s._paused) return r || setTimeout(function() {
                    n._emit("play", s._id)
                }, 0), s._id;
                n._webAudio && e._autoResume();
                var h = s._seek > 0 ? s._seek : n._sprite[t][0] / 1e3,
                    c = (n._sprite[t][0] + n._sprite[t][1]) / 1e3 - h,
                    l = 1e3 * c / Math.abs(s._rate);
                s._paused = !1, s._ended = !1, s._sprite = t, s._seek = h, s._start = n._sprite[t][0] / 1e3, s._stop = (n._sprite[t][0] + n._sprite[t][1]) / 1e3, s._loop = !(!s._loop && !n._sprite[t][2]);
                var u = s._node;
                if (n._webAudio) {
                    var f = function() {
                        n._refreshBuffer(s);
                        var t = s._muted || n._muted ? 0 : s._volume;
                        u.gain.setValueAtTime(t, e.ctx.currentTime), s._playStart = e.ctx.currentTime, "undefined" == typeof u.bufferSource.start ? s._loop ? u.bufferSource.noteGrainOn(0, h, 86400) : u.bufferSource.noteGrainOn(0, h, c) : s._loop ? u.bufferSource.start(0, h, 86400) : u.bufferSource.start(0, h, c), l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)), r || setTimeout(function() {
                            n._emit("play", s._id)
                        }, 0)
                    };
                    "loaded" === n._state ? f() : (n.once("load", f, s._id), n._clearTimer(s._id))
                } else {
                    var p = function() {
                            u.currentTime = h, u.muted = s._muted || n._muted || e._muted || u.muted, u.volume = s._volume * e.volume(), u.playbackRate = s._rate, setTimeout(function() {
                                u.play(), l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)), r || n._emit("play", s._id)
                            }, 0)
                        },
                        d = "loaded" === n._state && (window && window.ejecta || !u.readyState && e._navigator.isCocoonJS);
                    if (4 === u.readyState || d) p();
                    else {
                        var E = function() {
                            p(), u.removeEventListener(e._canPlayEvent, E, !1)
                        };
                        u.addEventListener(e._canPlayEvent, E, !1), n._clearTimer(s._id)
                    }
                }
                return s._id
            },
            pause: function(t) {
                var e = this;
                if ("loaded" !== e._state) return e._queue.push({
                    event: "pause",
                    action: function() {
                        e.pause(t)
                    }
                }), e;
                for (var r = e._getSoundIds(t), n = 0; n < r.length; n++) {
                    e._clearTimer(r[n]);
                    var i = e._soundById(r[n]);
                    if (i && !i._paused) {
                        if (i._seek = e.seek(r[n]), i._rateSeek = 0, i._paused = !0, e._stopFade(r[n]), i._node)
                            if (e._webAudio) {
                                if (!i._node.bufferSource) return e;
                                "undefined" == typeof i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), e._cleanBuffer(i._node)
                            } else isNaN(i._node.duration) && i._node.duration !== 1 / 0 || i._node.pause();
                        arguments[1] || e._emit("pause", i._id)
                    }
                }
                return e
            },
            stop: function(t, e) {
                var r = this;
                if ("loaded" !== r._state) return r._queue.push({
                    event: "stop",
                    action: function() {
                        r.stop(t)
                    }
                }), r;
                for (var n = r._getSoundIds(t), i = 0; i < n.length; i++) {
                    r._clearTimer(n[i]);
                    var o = r._soundById(n[i]);
                    if (o && !o._paused && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, r._stopFade(n[i]), o._node))
                        if (r._webAudio) {
                            if (!o._node.bufferSource) return r;
                            "undefined" == typeof o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), r._cleanBuffer(o._node)
                        } else isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause());
                    o && !e && r._emit("stop", o._id)
                }
                return r
            },
            mute: function(t, r) {
                var n = this;
                if ("loaded" !== n._state) return n._queue.push({
                    event: "mute",
                    action: function() {
                        n.mute(t, r)
                    }
                }), n;
                if ("undefined" == typeof r) {
                    if ("boolean" != typeof t) return n._muted;
                    n._muted = t
                }
                for (var i = n._getSoundIds(r), o = 0; o < i.length; o++) {
                    var a = n._soundById(i[o]);
                    a && (a._muted = t, n._webAudio && a._node ? a._node.gain.setValueAtTime(t ? 0 : a._volume, e.ctx.currentTime) : a._node && (a._node.muted = !!e._muted || t), n._emit("mute", a._id))
                }
                return n
            },
            volume: function() {
                var t, r, n = this,
                    i = arguments;
                if (0 === i.length) return n._volume;
                if (1 === i.length) {
                    var o = n._getSoundIds(),
                        a = o.indexOf(i[0]);
                    a >= 0 ? r = parseInt(i[0], 10) : t = parseFloat(i[0])
                } else i.length >= 2 && (t = parseFloat(i[0]), r = parseInt(i[1], 10));
                var s;
                if (!("undefined" != typeof t && t >= 0 && t <= 1)) return s = r ? n._soundById(r) : n._sounds[0], s ? s._volume : 0;
                if ("loaded" !== n._state) return n._queue.push({
                    event: "volume",
                    action: function() {
                        n.volume.apply(n, i)
                    }
                }), n;
                "undefined" == typeof r && (n._volume = t), r = n._getSoundIds(r);
                for (var h = 0; h < r.length; h++) s = n._soundById(r[h]), s && (s._volume = t, i[2] || n._stopFade(r[h]), n._webAudio && s._node && !s._muted ? s._node.gain.setValueAtTime(t, e.ctx.currentTime) : s._node && !s._muted && (s._node.volume = t * e.volume()), n._emit("volume", s._id));
                return n
            },
            fade: function(t, r, n, i) {
                var o = this,
                    a = Math.abs(t - r),
                    s = t > r ? "out" : "in",
                    h = a / .01,
                    c = n / h;
                if ("loaded" !== o._state) return o._queue.push({
                    event: "fade",
                    action: function() {
                        o.fade(t, r, n, i)
                    }
                }), o;
                o.volume(t, i);
                for (var l = o._getSoundIds(i), u = 0; u < l.length; u++) {
                    var f = o._soundById(l[u]);
                    if (f) {
                        if (i || o._stopFade(l[u]), o._webAudio && !f._muted) {
                            var p = e.ctx.currentTime,
                                d = p + n / 1e3;
                            f._volume = t, f._node.gain.setValueAtTime(t, p), f._node.gain.linearRampToValueAtTime(r, d)
                        }
                        var E = t;
                        f._interval = setInterval(function(t, e) {
                            E += "in" === s ? .01 : -.01, E = Math.max(0, E), E = Math.min(1, E), E = Math.round(100 * E) / 100, o._webAudio ? ("undefined" == typeof i && (o._volume = E), e._volume = E) : o.volume(E, t, !0), E === r && (clearInterval(e._interval), e._interval = null, o.volume(E, t), o._emit("fade", t))
                        }.bind(o, l[u], f), c)
                    }
                }
                return o
            },
            _stopFade: function(t) {
                var r = this,
                    n = r._soundById(t);
                return n && n._interval && (r._webAudio && n._node.gain.cancelScheduledValues(e.ctx.currentTime), clearInterval(n._interval), n._interval = null, r._emit("fade", t)), r
            },
            loop: function() {
                var t, e, r, n = this,
                    i = arguments;
                if (0 === i.length) return n._loop;
                if (1 === i.length) {
                    if ("boolean" != typeof i[0]) return r = n._soundById(parseInt(i[0], 10)), !!r && r._loop;
                    t = i[0], n._loop = t
                } else 2 === i.length && (t = i[0], e = parseInt(i[1], 10));
                for (var o = n._getSoundIds(e), a = 0; a < o.length; a++) r = n._soundById(o[a]), r && (r._loop = t, n._webAudio && r._node && r._node.bufferSource && (r._node.bufferSource.loop = t));
                return n
            },
            rate: function() {
                var t, r, n = this,
                    i = arguments;
                if (0 === i.length) r = n._sounds[0]._id;
                else if (1 === i.length) {
                    var o = n._getSoundIds(),
                        a = o.indexOf(i[0]);
                    a >= 0 ? r = parseInt(i[0], 10) : t = parseFloat(i[0])
                } else 2 === i.length && (t = parseFloat(i[0]), r = parseInt(i[1], 10));
                var s;
                if ("number" != typeof t) return s = n._soundById(r), s ? s._rate : n._rate;
                if ("loaded" !== n._state) return n._queue.push({
                    event: "rate",
                    action: function() {
                        n.rate.apply(n, i)
                    }
                }), n;
                "undefined" == typeof r && (n._rate = t), r = n._getSoundIds(r);
                for (var h = 0; h < r.length; h++)
                    if (s = n._soundById(r[h])) {
                        s._rateSeek = n.seek(r[h]), s._playStart = n._webAudio ? e.ctx.currentTime : s._playStart, s._rate = t, n._webAudio && s._node && s._node.bufferSource ? s._node.bufferSource.playbackRate.value = t : s._node && (s._node.playbackRate = t);
                        var c = n.seek(r[h]),
                            l = (n._sprite[s._sprite][0] + n._sprite[s._sprite][1]) / 1e3 - c,
                            u = 1e3 * l / Math.abs(s._rate);
                        !n._endTimers[r[h]] && s._paused || (n._clearTimer(r[h]), n._endTimers[r[h]] = setTimeout(n._ended.bind(n, s), u)), n._emit("rate", s._id)
                    }
                return n
            },
            seek: function() {
                var t, r, n = this,
                    i = arguments;
                if (0 === i.length) r = n._sounds[0]._id;
                else if (1 === i.length) {
                    var o = n._getSoundIds(),
                        a = o.indexOf(i[0]);
                    a >= 0 ? r = parseInt(i[0], 10) : (r = n._sounds[0]._id, t = parseFloat(i[0]))
                } else 2 === i.length && (t = parseFloat(i[0]), r = parseInt(i[1], 10));
                if ("undefined" == typeof r) return n;
                if ("loaded" !== n._state) return n._queue.push({
                    event: "seek",
                    action: function() {
                        n.seek.apply(n, i)
                    }
                }), n;
                var s = n._soundById(r);
                if (s) {
                    if (!("number" == typeof t && t >= 0)) {
                        if (n._webAudio) {
                            var h = n.playing(r) ? e.ctx.currentTime - s._playStart : 0,
                                c = s._rateSeek ? s._rateSeek - s._seek : 0;
                            return s._seek + (c + h * Math.abs(s._rate))
                        }
                        return s._node.currentTime
                    }
                    var l = n.playing(r);
                    l && n.pause(r, !0), s._seek = t, s._ended = !1, n._clearTimer(r), l && n.play(r, !0), !n._webAudio && s._node && (s._node.currentTime = t), n._emit("seek", r)
                }
                return n
            },
            playing: function(t) {
                var e = this;
                if ("number" == typeof t) {
                    var r = e._soundById(t);
                    return !!r && !r._paused
                }
                for (var n = 0; n < e._sounds.length; n++)
                    if (!e._sounds[n]._paused) return !0;
                return !1
            },
            duration: function(t) {
                var e = this,
                    r = e._duration,
                    n = e._soundById(t);
                return n && (r = e._sprite[n._sprite][1] / 1e3), r
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var t = this, r = t._sounds, n = 0; n < r.length; n++) {
                    r[n]._paused || (t.stop(r[n]._id), t._emit("end", r[n]._id)), t._webAudio || (r[n]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", r[n]._node.removeEventListener("error", r[n]._errorFn, !1), r[n]._node.removeEventListener(e._canPlayEvent, r[n]._loadFn, !1)), delete r[n]._node, t._clearTimer(r[n]._id);
                    var o = e._howls.indexOf(t);
                    o >= 0 && e._howls.splice(o, 1)
                }
                var a = !0;
                for (n = 0; n < e._howls.length; n++)
                    if (e._howls[n]._src === t._src) {
                        a = !1;
                        break
                    }
                return i && a && delete i[t._src], t._state = "unloaded", t._sounds = [], t = null, null
            },
            on: function(t, e, r, n) {
                var i = this,
                    o = i["_on" + t];
                return "function" == typeof e && o.push(n ? {
                    id: r,
                    fn: e,
                    once: n
                } : {
                    id: r,
                    fn: e
                }), i
            },
            off: function(t, e, r) {
                var n = this,
                    i = n["_on" + t],
                    o = 0;
                if (e) {
                    for (o = 0; o < i.length; o++)
                        if (e === i[o].fn && r === i[o].id) {
                            i.splice(o, 1);
                            break
                        }
                } else if (t) n["_on" + t] = [];
                else {
                    var a = Object.keys(n);
                    for (o = 0; o < a.length; o++) 0 === a[o].indexOf("_on") && Array.isArray(n[a[o]]) && (n[a[o]] = [])
                }
                return n
            },
            once: function(t, e, r) {
                var n = this;
                return n.on(t, e, r, 1), n
            },
            _emit: function(t, e, r) {
                for (var n = this, i = n["_on" + t], o = i.length - 1; o >= 0; o--) i[o].id && i[o].id !== e && "load" !== t || (setTimeout(function(t) {
                    t.call(this, e, r)
                }.bind(n, i[o].fn), 0), i[o].once && n.off(t, i[o].fn, i[o].id));
                return n
            },
            _loadQueue: function() {
                var t = this;
                if (t._queue.length > 0) {
                    var e = t._queue[0];
                    t.once(e.event, function() {
                        t._queue.shift(), t._loadQueue()
                    }), e.action()
                }
                return t
            },
            _ended: function(t) {
                var r = this,
                    n = t._sprite,
                    i = !(!t._loop && !r._sprite[n][2]);
                if (r._emit("end", t._id), !r._webAudio && i && r.stop(t._id, !0).play(t._id), r._webAudio && i) {
                    r._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = e.ctx.currentTime;
                    var o = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                    r._endTimers[t._id] = setTimeout(r._ended.bind(r, t), o)
                }
                return r._webAudio && !i && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, r._clearTimer(t._id), r._cleanBuffer(t._node), e._autoSuspend()), r._webAudio || i || r.stop(t._id), r
            },
            _clearTimer: function(t) {
                var e = this;
                return e._endTimers[t] && (clearTimeout(e._endTimers[t]), delete e._endTimers[t]), e
            },
            _soundById: function(t) {
                for (var e = this, r = 0; r < e._sounds.length; r++)
                    if (t === e._sounds[r]._id) return e._sounds[r];
                return null
            },
            _inactiveSound: function() {
                var t = this;
                t._drain();
                for (var e = 0; e < t._sounds.length; e++)
                    if (t._sounds[e]._ended) return t._sounds[e].reset();
                return new n(t)
            },
            _drain: function() {
                var t = this,
                    e = t._pool,
                    r = 0,
                    n = 0;
                if (!(t._sounds.length < e)) {
                    for (n = 0; n < t._sounds.length; n++) t._sounds[n]._ended && r++;
                    for (n = t._sounds.length - 1; n >= 0; n--) {
                        if (r <= e) return;
                        t._sounds[n]._ended && (t._webAudio && t._sounds[n]._node && t._sounds[n]._node.disconnect(0), t._sounds.splice(n, 1), r--)
                    }
                }
            },
            _getSoundIds: function(t) {
                var e = this;
                if ("undefined" == typeof t) {
                    for (var r = [], n = 0; n < e._sounds.length; n++) r.push(e._sounds[n]._id);
                    return r
                }
                return [t]
            },
            _refreshBuffer: function(t) {
                var r = this;
                return t._node.bufferSource = e.ctx.createBufferSource(), t._node.bufferSource.buffer = i[r._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop), t._node.bufferSource.playbackRate.value = t._rate, r
            },
            _cleanBuffer: function(t) {
                var e = this;
                if (e._scratchBuffer) {
                    t.bufferSource.onended = null, t.bufferSource.disconnect(0);
                    try {
                        t.bufferSource.buffer = e._scratchBuffer
                    } catch (t) {}
                }
                return t.bufferSource = null, e
            }
        };
        var n = function(t) {
            this._parent = t, this.init()
        };
        n.prototype = {
            init: function() {
                var t = this,
                    e = t._parent;
                return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._muted = e._muted, t._rate = e._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = Math.round(Date.now() * Math.random()), e._sounds.push(t), t.create(), t
            },
            create: function() {
                var t = this,
                    r = t._parent,
                    n = e._muted || t._muted || t._parent._muted ? 0 : t._volume;
                return r._webAudio ? (t._node = "undefined" == typeof e.ctx.createGain ? e.ctx.createGainNode() : e.ctx.createGain(), t._node.gain.setValueAtTime(n, e.ctx.currentTime), t._node.paused = !0, t._node.connect(e.masterGain)) : (t._node = new Audio, t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(e._canPlayEvent, t._loadFn, !1), t._node.src = r._src, t._node.preload = "auto", t._node.volume = n * e.volume(), t._node.load()), t
            },
            reset: function() {
                var t = this,
                    e = t._parent;
                return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._muted = e._muted, t._rate = e._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = Math.round(Date.now() * Math.random()), t
            },
            _errorListener: function() {
                var t = this;
                t._node.error && 4 === t._node.error.code && (e.noAudio = !0), t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorListener, !1)
            },
            _loadListener: function() {
                var t = this,
                    r = t._parent;
                r._duration = Math.ceil(10 * t._node.duration) / 10, 0 === Object.keys(r._sprite).length && (r._sprite = {
                    __default: [0, 1e3 * r._duration]
                }), "loaded" !== r._state && (r._state = "loaded", r._emit("load"), r._loadQueue()), r._autoplay && r.play(), t._node.removeEventListener(e._canPlayEvent, t._loadFn, !1)
            }
        };
        var i = {},
            o = function(t) {
                var e = t._src;
                if (i[e]) return t._duration = i[e].duration, void h(t);
                if (/^data:[^;]+;base64,/.test(e)) {
                    for (var r = atob(e.split(",")[1]), n = new Uint8Array(r.length), o = 0; o < r.length; ++o) n[o] = r.charCodeAt(o);
                    s(n.buffer, t)
                } else {
                    var c = new XMLHttpRequest;
                    c.open("GET", e, !0), c.responseType = "arraybuffer", c.onload = function() {
                        var e = (c.status + "")[0];
                        return "0" !== e && "2" !== e && "3" !== e ? void t._emit("loaderror", null, "Failed loading audio file with status: " + c.status + ".") : void s(c.response, t)
                    }, c.onerror = function() {
                        t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete i[e], t.load())
                    }, a(c)
                }
            },
            a = function(t) {
                try {
                    t.send()
                } catch (e) {
                    t.onerror()
                }
            },
            s = function(t, r) {
                e.ctx.decodeAudioData(t, function(t) {
                    t && r._sounds.length > 0 && (i[r._src] = t, h(r, t))
                }, function() {
                    r._emit("loaderror", null, "Decoding audio data failed.")
                })
            },
            h = function(t, e) {
                e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
                    __default: [0, 1e3 * t._duration]
                }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), t._autoplay && t.play()
            },
            c = function() {
                e.noAudio = !1;
                try {
                    "undefined" != typeof AudioContext ? e.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? e.ctx = new webkitAudioContext : e.usingWebAudio = !1
                } catch (t) {
                    e.usingWebAudio = !1
                }
                if (!e.usingWebAudio)
                    if ("undefined" != typeof Audio) try {
                        var t = new Audio;
                        "undefined" == typeof t.oncanplaythrough && (e._canPlayEvent = "canplay")
                    } catch (t) {
                        e.noAudio = !0
                    } else e.noAudio = !0;
                try {
                    var t = new Audio;
                    t.muted && (e.noAudio = !0)
                } catch (t) {}
                var r = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform),
                    n = e._navigator && e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    i = n ? parseInt(n[1], 10) : null;
                if (r && i && i < 9) {
                    var o = /safari/.test(e._navigator && e._navigator.userAgent.toLowerCase());
                    (e._navigator && e._navigator.standalone && !o || e._navigator && !e._navigator.standalone && !o) && (e.usingWebAudio = !1)
                }
                e.usingWebAudio && (e.masterGain = "undefined" == typeof e.ctx.createGain ? e.ctx.createGainNode() : e.ctx.createGain(), e.masterGain.gain.value = 1, e.masterGain.connect(e.ctx.destination)), e._setup()
            };
        "function" == typeof define && define.amd && define([], function() {
            return {
                Howler: e,
                Howl: r
            }
        }), "undefined" != typeof exports && (exports.Howler = e, exports.Howl = r), "undefined" != typeof window ? (window.HowlerGlobal = t, window.Howler = e, window.Howl = r, window.Sound = n) : "undefined" != typeof global && (global.HowlerGlobal = t, global.Howler = e, global.Howl = r, global.Sound = n)
    }(), ! function() {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
            var e = this;
            if (!e.ctx || !e.ctx.listener) return e;
            for (var r = e._howls.length - 1; r >= 0; r--) e._howls[r].stereo(t);
            return e
        }, HowlerGlobal.prototype.pos = function(t, e, r) {
            var n = this;
            return n.ctx && n.ctx.listener ? (e = "number" != typeof e ? n._pos[1] : e, r = "number" != typeof r ? n._pos[2] : r, "number" != typeof t ? n._pos : (n._pos = [t, e, r], n.ctx.listener.setPosition(n._pos[0], n._pos[1], n._pos[2]), n)) : n
        }, HowlerGlobal.prototype.orientation = function(t, e, r, n, i, o) {
            var a = this;
            if (!a.ctx || !a.ctx.listener) return a;
            var s = a._orientation;
            return e = "number" != typeof e ? s[1] : e, r = "number" != typeof r ? s[2] : r, n = "number" != typeof n ? s[3] : n,
                i = "number" != typeof i ? s[4] : i, o = "number" != typeof o ? s[5] : o, "number" != typeof t ? s : (a._orientation = [t, e, r, n, i, o], a.ctx.listener.setOrientation(t, e, r, n, i, o), a)
        }, Howl.prototype.init = function(t) {
            return function(e) {
                var r = this;
                return r._orientation = e.orientation || [1, 0, 0], r._stereo = e.stereo || null, r._pos = e.pos || null, r._pannerAttr = {
                    coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : 360,
                    coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : 360,
                    coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : 0,
                    distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : "inverse",
                    maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : 1e4,
                    panningModel: "undefined" != typeof e.panningModel ? e.panningModel : "HRTF",
                    refDistance: "undefined" != typeof e.refDistance ? e.refDistance : 1,
                    rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : 1
                }, r._onstereo = e.onstereo ? [{
                    fn: e.onstereo
                }] : [], r._onpos = e.onpos ? [{
                    fn: e.onpos
                }] : [], r._onorientation = e.onorientation ? [{
                    fn: e.onorientation
                }] : [], t.call(this, e)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(e, r) {
            var n = this;
            if (!n._webAudio) return n;
            if ("loaded" !== n._state) return n._queue.push({
                event: "stereo",
                action: function() {
                    n.stereo(e, r)
                }
            }), n;
            var i = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
            if ("undefined" == typeof r) {
                if ("number" != typeof e) return n._stereo;
                n._stereo = e, n._pos = [e, 0, 0]
            }
            for (var o = n._getSoundIds(r), a = 0; a < o.length; a++) {
                var s = n._soundById(o[a]);
                if (s) {
                    if ("number" != typeof e) return s._stereo;
                    s._stereo = e, s._pos = [e, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || t(s, i), "spatial" === i ? s._panner.setPosition(e, 0, 0) : s._panner.pan.value = e), n._emit("stereo", s._id)
                }
            }
            return n
        }, Howl.prototype.pos = function(e, r, n, i) {
            var o = this;
            if (!o._webAudio) return o;
            if ("loaded" !== o._state) return o._queue.push({
                event: "pos",
                action: function() {
                    o.pos(e, r, n, i)
                }
            }), o;
            if (r = "number" != typeof r ? 0 : r, n = "number" != typeof n ? -.5 : n, "undefined" == typeof i) {
                if ("number" != typeof e) return o._pos;
                o._pos = [e, r, n]
            }
            for (var a = o._getSoundIds(i), s = 0; s < a.length; s++) {
                var h = o._soundById(a[s]);
                if (h) {
                    if ("number" != typeof e) return h._pos;
                    h._pos = [e, r, n], h._node && (h._panner && !h._panner.pan || t(h, "spatial"), h._panner.setPosition(e, r, n)), o._emit("pos", h._id)
                }
            }
            return o
        }, Howl.prototype.orientation = function(e, r, n, i) {
            var o = this;
            if (!o._webAudio) return o;
            if ("loaded" !== o._state) return o._queue.push({
                event: "orientation",
                action: function() {
                    o.orientation(e, r, n, i)
                }
            }), o;
            if (r = "number" != typeof r ? o._orientation[1] : r, n = "number" != typeof n ? o._orientation[2] : n, "undefined" == typeof i) {
                if ("number" != typeof e) return o._orientation;
                o._orientation = [e, r, n]
            }
            for (var a = o._getSoundIds(i), s = 0; s < a.length; s++) {
                var h = o._soundById(a[s]);
                if (h) {
                    if ("number" != typeof e) return h._orientation;
                    h._orientation = [e, r, n], h._node && (h._panner || (h._pos || (h._pos = o._pos || [0, 0, -.5]), t(h, "spatial")), h._panner.setOrientation(e, r, n)), o._emit("orientation", h._id)
                }
            }
            return o
        }, Howl.prototype.pannerAttr = function() {
            var e, r, n, i = this,
                o = arguments;
            if (!i._webAudio) return i;
            if (0 === o.length) return i._pannerAttr;
            if (1 === o.length) {
                if ("object" != typeof o[0]) return n = i._soundById(parseInt(o[0], 10)), n ? n._pannerAttr : i._pannerAttr;
                e = o[0], "undefined" == typeof r && (i._pannerAttr = {
                    coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : i._coneInnerAngle,
                    coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : i._coneOuterAngle,
                    coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : i._coneOuterGain,
                    distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : i._distanceModel,
                    maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : i._maxDistance,
                    panningModel: "undefined" != typeof e.panningModel ? e.panningModel : i._panningModel,
                    refDistance: "undefined" != typeof e.refDistance ? e.refDistance : i._refDistance,
                    rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : i._rolloffFactor
                })
            } else 2 === o.length && (e = o[0], r = parseInt(o[1], 10));
            for (var a = i._getSoundIds(r), s = 0; s < a.length; s++)
                if (n = i._soundById(a[s])) {
                    var h = n._pannerAttr;
                    h = {
                        coneInnerAngle: "undefined" != typeof e.coneInnerAngle ? e.coneInnerAngle : h.coneInnerAngle,
                        coneOuterAngle: "undefined" != typeof e.coneOuterAngle ? e.coneOuterAngle : h.coneOuterAngle,
                        coneOuterGain: "undefined" != typeof e.coneOuterGain ? e.coneOuterGain : h.coneOuterGain,
                        distanceModel: "undefined" != typeof e.distanceModel ? e.distanceModel : h.distanceModel,
                        maxDistance: "undefined" != typeof e.maxDistance ? e.maxDistance : h.maxDistance,
                        panningModel: "undefined" != typeof e.panningModel ? e.panningModel : h.panningModel,
                        refDistance: "undefined" != typeof e.refDistance ? e.refDistance : h.refDistance,
                        rolloffFactor: "undefined" != typeof e.rolloffFactor ? e.rolloffFactor : h.rolloffFactor
                    };
                    var c = n._panner;
                    c ? (c.coneInnerAngle = h.coneInnerAngle, c.coneOuterAngle = h.coneOuterAngle, c.coneOuterGain = h.coneOuterGain, c.distanceModel = h.distanceModel, c.maxDistance = h.maxDistance, c.panningModel = h.panningModel, c.refDistance = h.refDistance, c.rolloffFactor = h.rolloffFactor) : (n._pos || (n._pos = i._pos || [0, 0, -.5]), t(n, "spatial"))
                }
            return i
        }, Sound.prototype.init = function(t) {
            return function() {
                var e = this,
                    r = e._parent;
                e._orientation = r._orientation, e._stereo = r._stereo, e._pos = r._pos, e._pannerAttr = r._pannerAttr, t.call(this), e._stereo ? r.stereo(e._stereo) : e._pos && r.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(t) {
            return function() {
                var e = this,
                    r = e._parent;
                return e._orientation = r._orientation, e._pos = r._pos, e._pannerAttr = r._pannerAttr, t.call(this)
            }
        }(Sound.prototype.reset);
        var t = function(t, e) {
            e = e || "spatial", "spatial" === e ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.panningModel = t._pannerAttr.panningModel, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.value = t._stereo), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id)
        }
    }(),
    function(t, e, r, n, i, o) {
        function a(t, e, r, n, i) {
            return E(t, t, r, n, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(o) {
                D("Document cloned");
                var a = qt + i,
                    h = "[" + a + "='" + i + "']";
                t.querySelector(h).removeAttribute(a);
                var c = o.contentWindow,
                    l = c.document.querySelector(h),
                    u = "function" == typeof e.onclone ? Promise.resolve(e.onclone(c.document)) : Promise.resolve(!0);
                return u.then(function() {
                    return s(l, o, e, r, n)
                })
            })
        }

        function s(t, r, n, i, o) {
            var a = r.contentWindow,
                s = new Ot(a.document),
                f = new P(n, s),
                p = I(t),
                d = "view" === n.type ? i : l(a.document),
                E = "view" === n.type ? o : u(a.document),
                m = new n.renderer(d, E, f, n, e),
                g = new j(t, m, s, f, n);
            return g.ready.then(function() {
                D("Finished rendering");
                var e;
                return e = "view" === n.type ? c(m.canvas, {
                    width: m.canvas.width,
                    height: m.canvas.height,
                    top: 0,
                    left: 0,
                    x: 0,
                    y: 0
                }) : t === a.document.body || t === a.document.documentElement || null != n.canvas ? m.canvas : c(m.canvas, {
                    width: null != n.width ? n.width : p.width,
                    height: null != n.height ? n.height : p.height,
                    top: p.top,
                    left: p.left,
                    x: a.pageXOffset,
                    y: a.pageYOffset
                }), h(r, n), e
            })
        }

        function h(t, e) {
            e.removeContainer && (t.parentNode.removeChild(t), D("Cleaned up container"))
        }

        function c(t, r) {
            var n = e.createElement("canvas"),
                i = Math.min(t.width - 1, Math.max(0, r.left)),
                o = Math.min(t.width, Math.max(1, r.left + r.width)),
                a = Math.min(t.height - 1, Math.max(0, r.top)),
                s = Math.min(t.height, Math.max(1, r.top + r.height));
            return n.width = r.width, n.height = r.height, D("Cropping canvas at:", "left:", r.left, "top:", r.top, "width:", o - i, "height:", s - a), D("Resulting crop with width", r.width, "and height", r.height, " with x", i, "and y", a), n.getContext("2d").drawImage(t, i, a, o - i, s - a, r.x, r.y, o - i, s - a), n
        }

        function l(t) {
            return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
        }

        function u(t) {
            return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
        }

        function f() {
            return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        }

        function p() {
            return e.documentMode && e.documentMode <= 9
        }

        function d(t, r) {
            for (var n = 3 === t.nodeType ? e.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i;) r !== !0 && 1 === i.nodeType && "SCRIPT" === i.nodeName || n.appendChild(d(i, r)), i = i.nextSibling;
            return n
        }

        function E(t, e, r, n, i, o, a) {
            T(t);
            var s = p() ? d(t.documentElement, i.javascriptEnabled) : t.documentElement.cloneNode(!0),
                h = e.createElement("iframe");
            return h.className = "html2canvas-container", h.style.visibility = "hidden", h.style.position = "fixed", h.style.left = "-10000px", h.style.top = "0px", h.style.border = "0", h.width = r, h.height = n, h.scrolling = "no", e.body.appendChild(h), new Promise(function(e) {
                var r = h.contentWindow.document;
                m(t.documentElement, s, "textarea"), m(t.documentElement, s, "select"), h.contentWindow.onload = h.onload = function() {
                    var n = setInterval(function() {
                        r.body.childNodes.length > 0 && (R(t, r), clearInterval(n), "view" === i.type && h.contentWindow.scrollTo(o, a), e(h))
                    }, 50)
                }, r.open(), r.write("<!DOCTYPE html><html></html>"), g(t, o, a), r.replaceChild(i.javascriptEnabled === !0 ? r.adoptNode(s) : x(r.adoptNode(s)), r.documentElement), r.close()
            })
        }

        function m(t, e, r) {
            for (var n = t.getElementsByTagName(r), i = e.getElementsByTagName(r), o = n.length, a = 0; a < o; a++) i[a].value = n[a].value
        }

        function g(t, e, r) {
            !t.defaultView || e === t.defaultView.pageXOffset && r === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, r)
        }

        function v(e, r, n, i, o, a) {
            return new St(e, r, t.document).then(y(e)).then(function(t) {
                return E(t, n, i, o, a, 0, 0)
            })
        }

        function y(t) {
            return function(r) {
                var n, i = new DOMParser;
                try {
                    n = i.parseFromString(r, "text/html")
                } catch (o) {
                    D("DOMParser not supported, falling back to createHTMLDocument"), n = e.implementation.createHTMLDocument("");
                    try {
                        n.open(), n.write(r), n.close()
                    } catch (a) {
                        D("createHTMLDocument write not supported, falling back to document.body.innerHTML"), n.body.innerHTML = r
                    }
                }
                var s = n.querySelector("base");
                if (!s || !s.href.host) {
                    var h = n.createElement("base");
                    h.href = t, n.head.insertBefore(h, n.head.firstChild)
                }
                return n
            }
        }

        function T(t) {
            [].slice.call(t.querySelectorAll("canvas"), 0).forEach(function(t) {
                t.setAttribute(Yt, "canvas-" + Kt++)
            })
        }

        function R(t, e) {
            [].slice.call(t.querySelectorAll("[" + Yt + "]"), 0).forEach(function(t) {
                try {
                    var r = e.querySelector("[" + Yt + '="' + t.getAttribute(Yt) + '"]');
                    r && (r.width = t.width, r.height = t.height, r.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
                } catch (n) {
                    D("Unable to copy canvas content from", t, n)
                }
                t.removeAttribute(Yt)
            })
        }

        function x(t) {
            return [].slice.call(t.childNodes, 0).filter(H).forEach(function(e) {
                "SCRIPT" === e.tagName ? t.removeChild(e) : x(e)
            }), t
        }

        function H(t) {
            return t.nodeType === Node.ELEMENT_NODE
        }

        function b(t) {
            var r = e.createElement("a");
            return r.href = t, r.href = r.href, r
        }

        function _(t) {
            this.r = 0, this.g = 0, this.b = 0, this.a = null;
            this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
        }

        function w(t) {
            if (this.src = t, D("DummyImageContainer for", t), !this.promise || !this.image) {
                D("Initiating DummyImageContainer"), w.prototype.image = new Image;
                var e = this.image;
                w.prototype.promise = new Promise(function(t, r) {
                    e.onload = t, e.onerror = r, e.src = f(), e.complete === !0 && t(e)
                })
            }
        }

        function M(t, r) {
            var n, i, o = e.createElement("div"),
                a = e.createElement("img"),
                s = e.createElement("span"),
                h = "Hidden Text";
            o.style.visibility = "hidden", o.style.fontFamily = t, o.style.fontSize = r, o.style.margin = 0, o.style.padding = 0, e.body.appendChild(o), a.src = f(), a.width = 1, a.height = 1, a.style.margin = 0, a.style.padding = 0, a.style.verticalAlign = "baseline", s.style.fontFamily = t, s.style.fontSize = r, s.style.margin = 0, s.style.padding = 0, s.appendChild(e.createTextNode(h)), o.appendChild(s), o.appendChild(a), n = a.offsetTop - s.offsetTop + 1, o.removeChild(s), o.appendChild(e.createTextNode(h)), o.style.lineHeight = "normal", a.style.verticalAlign = "super", i = a.offsetTop - o.offsetTop + 1, e.body.removeChild(o), this.baseline = n, this.lineWidth = 1, this.middle = i
        }

        function S() {
            this.data = {}
        }

        function A(t, e, r) {
            this.image = null, this.src = t;
            var n = this,
                i = I(t);
            this.promise = (e ? new Promise(function(e) {
                "about:blank" === t.contentWindow.document.URL || null == t.contentWindow.document.documentElement ? t.contentWindow.onload = t.onload = function() {
                    e(t)
                } : e(t)
            }) : this.proxyLoad(r.proxy, i, r)).then(function(t) {
                return html2canvas(t.contentWindow.document.documentElement, {
                    type: "view",
                    width: t.width,
                    height: t.height,
                    proxy: r.proxy,
                    javascriptEnabled: r.javascriptEnabled,
                    removeContainer: r.removeContainer,
                    allowTaint: r.allowTaint,
                    imageTimeout: r.imageTimeout / 2
                })
            }).then(function(t) {
                return n.image = t
            })
        }

        function C(t) {
            this.src = t.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
        }

        function L(t, e) {
            this.src = t, this.image = new Image;
            var r = this;
            this.tainted = null, this.promise = new Promise(function(n, i) {
                r.image.onload = n, r.image.onerror = i, e && (r.image.crossOrigin = "anonymous"), r.image.src = t, r.image.complete === !0 && n(r.image)
            })
        }

        function P(e, r) {
            this.link = null, this.options = e, this.support = r, this.origin = this.getOrigin(t.location.href)
        }

        function F(t) {
            C.apply(this, arguments), this.type = this.TYPES.LINEAR;
            var e = null === t.args[0].match(this.stepRegExp);
            e ? t.args[0].split(" ").reverse().forEach(function(t) {
                switch (t) {
                    case "left":
                        this.x0 = 0, this.x1 = 1;
                        break;
                    case "top":
                        this.y0 = 0, this.y1 = 1;
                        break;
                    case "right":
                        this.x0 = 1, this.x1 = 0;
                        break;
                    case "bottom":
                        this.y0 = 1, this.y1 = 0;
                        break;
                    case "to":
                        var e = this.y0,
                            r = this.x0;
                        this.y0 = this.y1, this.x0 = this.x1, this.x1 = r, this.y1 = e
                }
            }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
                var e = t.match(this.stepRegExp);
                return {
                    color: new _(e[1]),
                    stop: "%" === e[3] ? e[2] / 100 : null
                }
            }, this), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(t, e) {
                null === t.stop && this.colorStops.slice(e).some(function(r, n) {
                    return null !== r.stop && (t.stop = (r.stop - this.colorStops[e - 1].stop) / (n + 1) + this.colorStops[e - 1].stop, !0)
                }, this)
            }, this)
        }

        function D() {
            t.html2canvas.logging && t.console && t.console.log && Function.prototype.bind.call(t.console.log, t.console).apply(t.console, [Date.now() - t.html2canvas.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
        }

        function B(t, e) {
            this.node = t, this.parent = e, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
        }

        function k(t) {
            var e = t.options[t.selectedIndex || 0];
            return e ? e.text || "" : ""
        }

        function O(t) {
            if (t && "matrix" === t[1]) return t[2].split(",").map(function(t) {
                return parseFloat(t.trim())
            })
        }

        function U(t) {
            return t.toString().indexOf("%") !== -1
        }

        function V(t) {
            var e, r, n, i, o, a, s, h = " \r\n\t",
                c = [],
                l = 0,
                u = 0,
                f = function() {
                    e && ('"' === r.substr(0, 1) && (r = r.substr(1, r.length - 2)), r && s.push(r), "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && (n = e.substr(0, i), e = e.substr(i)), c.push({
                        prefix: n,
                        method: e.toLowerCase(),
                        value: o,
                        args: s,
                        image: null
                    })), s = [], e = n = r = o = ""
                };
            return s = [], e = n = r = o = "", t.split("").forEach(function(t) {
                if (!(0 === l && h.indexOf(t) > -1)) {
                    switch (t) {
                        case '"':
                            a ? a === t && (a = null) : a = t;
                            break;
                        case "(":
                            if (a) break;
                            if (0 === l) return l = 1, void(o += t);
                            u++;
                            break;
                        case ")":
                            if (a) break;
                            if (1 === l) {
                                if (0 === u) return l = 0, o += t, void f();
                                u--
                            }
                            break;
                        case ",":
                            if (a) break;
                            if (0 === l) return void f();
                            if (1 === l && 0 === u && !e.match(/^url$/i)) return s.push(r), r = "", void(o += t)
                    }
                    o += t, 0 === l ? e += t : r += t
                }
            }), f(), c
        }

        function N(t) {
            return t.replace("px", "")
        }

        function z(t) {
            return parseFloat(t)
        }

        function I(t) {
            if (t.getBoundingClientRect) {
                var e = t.getBoundingClientRect(),
                    r = null == t.offsetWidth ? e.width : t.offsetWidth;
                return {
                    top: e.top,
                    bottom: e.bottom || e.top + e.height,
                    right: e.left + r,
                    left: e.left,
                    width: r,
                    height: null == t.offsetHeight ? e.height : t.offsetHeight
                }
            }
            return {}
        }

        function G(t) {
            var e = t.offsetParent ? G(t.offsetParent) : {
                top: 0,
                left: 0
            };
            return {
                top: t.offsetTop + e.top,
                bottom: t.offsetTop + t.offsetHeight + e.top,
                right: t.offsetLeft + e.left + t.offsetWidth,
                left: t.offsetLeft + e.left,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }

        function j(t, e, r, n, i) {
            D("Starting NodeParser"), this.renderer = e, this.options = i, this.range = null, this.support = r, this.renderQueue = [], this.stack = new kt((!0), 1, t.ownerDocument, null);
            var o = new B(t, null);
            if (i.background && e.rectangle(0, 0, e.width, e.height, new _(i.background)), t === t.ownerDocument.documentElement) {
                var a = new B(o.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
                e.rectangle(0, 0, e.width, e.height, a.color("backgroundColor"))
            }
            o.visibile = o.isElementVisible(), this.createPseudoHideStyles(t.ownerDocument), this.disableAnimations(t.ownerDocument), this.nodes = Ht([o].concat(this.getChildren(o)).filter(function(t) {
                return t.visible = t.isElementVisible()
            }).map(this.getPseudoElements, this)), this.fontMetrics = new S, D("Fetched nodes, total:", this.nodes.length), D("Calculate overflow clips"), this.calculateOverflowClips(), D("Start fetching images"), this.images = n.fetch(this.nodes.filter(dt)), this.ready = this.images.ready.then(yt(function() {
                return D("Images loaded, starting parsing"), D("Creating stacking contexts"), this.createStackingContexts(), D("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), D("Render queue created with " + this.renderQueue.length + " items"), new Promise(yt(function(t) {
                    i.async ? "function" == typeof i.async ? i.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
                }, this))
            }, this))
        }

        function W(t) {
            return t.parent && t.parent.clip.length
        }

        function X(t) {
            return t.replace(/(\-[a-z])/g, function(t) {
                return t.toUpperCase().replace("-", "")
            })
        }

        function q() {}

        function Y(t, e, r, n) {
            return t.map(function(i, o) {
                if (i.width > 0) {
                    var a = e.left,
                        s = e.top,
                        h = e.width,
                        c = e.height - t[2].width;
                    switch (o) {
                        case 0:
                            c = t[0].width, i.args = J({
                                c1: [a, s],
                                c2: [a + h, s],
                                c3: [a + h - t[1].width, s + c],
                                c4: [a + t[3].width, s + c]
                            }, n[0], n[1], r.topLeftOuter, r.topLeftInner, r.topRightOuter, r.topRightInner);
                            break;
                        case 1:
                            a = e.left + e.width - t[1].width, h = t[1].width, i.args = J({
                                c1: [a + h, s],
                                c2: [a + h, s + c + t[2].width],
                                c3: [a, s + c],
                                c4: [a, s + t[0].width]
                            }, n[1], n[2], r.topRightOuter, r.topRightInner, r.bottomRightOuter, r.bottomRightInner);
                            break;
                        case 2:
                            s = s + e.height - t[2].width, c = t[2].width, i.args = J({
                                c1: [a + h, s + c],
                                c2: [a, s + c],
                                c3: [a + t[3].width, s],
                                c4: [a + h - t[3].width, s]
                            }, n[2], n[3], r.bottomRightOuter, r.bottomRightInner, r.bottomLeftOuter, r.bottomLeftInner);
                            break;
                        case 3:
                            h = t[3].width, i.args = J({
                                c1: [a, s + c + t[2].width],
                                c2: [a, s],
                                c3: [a + h, s + t[0].width],
                                c4: [a + h, s + c]
                            }, n[3], n[0], r.bottomLeftOuter, r.bottomLeftInner, r.topLeftOuter, r.topLeftInner)
                    }
                }
                return i
            })
        }

        function K(t, e, r, n) {
            var i = 4 * ((Math.sqrt(2) - 1) / 3),
                o = r * i,
                a = n * i,
                s = t + r,
                h = e + n;
            return {
                topLeft: Z({
                    x: t,
                    y: h
                }, {
                    x: t,
                    y: h - a
                }, {
                    x: s - o,
                    y: e
                }, {
                    x: s,
                    y: e
                }),
                topRight: Z({
                    x: t,
                    y: e
                }, {
                    x: t + o,
                    y: e
                }, {
                    x: s,
                    y: h - a
                }, {
                    x: s,
                    y: h
                }),
                bottomRight: Z({
                    x: s,
                    y: e
                }, {
                    x: s,
                    y: e + a
                }, {
                    x: t + o,
                    y: h
                }, {
                    x: t,
                    y: h
                }),
                bottomLeft: Z({
                    x: s,
                    y: h
                }, {
                    x: s - o,
                    y: h
                }, {
                    x: t,
                    y: e + a
                }, {
                    x: t,
                    y: e
                })
            }
        }

        function Q(t, e, r) {
            var n = t.left,
                i = t.top,
                o = t.width,
                a = t.height,
                s = e[0][0],
                h = e[0][1],
                c = e[1][0],
                l = e[1][1],
                u = e[2][0],
                f = e[2][1],
                p = e[3][0],
                d = e[3][1],
                E = o - c,
                m = a - f,
                g = o - u,
                v = a - d;
            return {
                topLeftOuter: K(n, i, s, h).topLeft.subdivide(.5),
                topLeftInner: K(n + r[3].width, i + r[0].width, Math.max(0, s - r[3].width), Math.max(0, h - r[0].width)).topLeft.subdivide(.5),
                topRightOuter: K(n + E, i, c, l).topRight.subdivide(.5),
                topRightInner: K(n + Math.min(E, o + r[3].width), i + r[0].width, E > o + r[3].width ? 0 : c - r[3].width, l - r[0].width).topRight.subdivide(.5),
                bottomRightOuter: K(n + g, i + m, u, f).bottomRight.subdivide(.5),
                bottomRightInner: K(n + Math.min(g, o - r[3].width), i + Math.min(m, a + r[0].width), Math.max(0, u - r[1].width), f - r[2].width).bottomRight.subdivide(.5),
                bottomLeftOuter: K(n, i + v, p, d).bottomLeft.subdivide(.5),
                bottomLeftInner: K(n + r[3].width, i + v, Math.max(0, p - r[3].width), d - r[2].width).bottomLeft.subdivide(.5)
            }
        }

        function Z(t, e, r, n) {
            var i = function(t, e, r) {
                return {
                    x: t.x + (e.x - t.x) * r,
                    y: t.y + (e.y - t.y) * r
                }
            };
            return {
                start: t,
                startControl: e,
                endControl: r,
                end: n,
                subdivide: function(o) {
                    var a = i(t, e, o),
                        s = i(e, r, o),
                        h = i(r, n, o),
                        c = i(a, s, o),
                        l = i(s, h, o),
                        u = i(c, l, o);
                    return [Z(t, a, c, u), Z(u, l, h, n)]
                },
                curveTo: function(t) {
                    t.push(["bezierCurve", e.x, e.y, r.x, r.y, n.x, n.y])
                },
                curveToReversed: function(n) {
                    n.push(["bezierCurve", r.x, r.y, e.x, e.y, t.x, t.y])
                }
            }
        }

        function J(t, e, r, n, i, o, a) {
            var s = [];
            return e[0] > 0 || e[1] > 0 ? (s.push(["line", n[1].start.x, n[1].start.y]), n[1].curveTo(s)) : s.push(["line", t.c1[0], t.c1[1]]), r[0] > 0 || r[1] > 0 ? (s.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(s), s.push(["line", a[0].end.x, a[0].end.y]), a[0].curveToReversed(s)) : (s.push(["line", t.c2[0], t.c2[1]]), s.push(["line", t.c3[0], t.c3[1]])), e[0] > 0 || e[1] > 0 ? (s.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(s)) : s.push(["line", t.c4[0], t.c4[1]]), s
        }

        function $(t, e, r, n, i, o, a) {
            e[0] > 0 || e[1] > 0 ? (t.push(["line", n[0].start.x, n[0].start.y]), n[0].curveTo(t), n[1].curveTo(t)) : t.push(["line", o, a]), (r[0] > 0 || r[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y])
        }

        function tt(t) {
            return t.cssInt("zIndex") < 0
        }

        function et(t) {
            return t.cssInt("zIndex") > 0
        }

        function rt(t) {
            return 0 === t.cssInt("zIndex")
        }

        function nt(t) {
            return ["inline", "inline-block", "inline-table"].indexOf(t.css("display")) !== -1
        }

        function it(t) {
            return t instanceof kt
        }

        function ot(t) {
            return t.node.data.trim().length > 0
        }

        function at(t) {
            return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
        }

        function st(t) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
                var r = t.css("border" + e + "Radius"),
                    n = r.split(" ");
                return n.length <= 1 && (n[1] = n[0]), n.map(Tt)
            })
        }

        function ht(t) {
            return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
        }

        function ct(t) {
            var e = t.css("position"),
                r = ["absolute", "relative", "fixed"].indexOf(e) !== -1 ? t.css("zIndex") : "auto";
            return "auto" !== r
        }

        function lt(t) {
            return "static" !== t.css("position")
        }

        function ut(t) {
            return "none" !== t.css("float")
        }

        function ft(t) {
            return ["inline-block", "inline-table"].indexOf(t.css("display")) !== -1
        }

        function pt(t) {
            var e = this;
            return function() {
                return !t.apply(e, arguments)
            }
        }

        function dt(t) {
            return t.node.nodeType === Node.ELEMENT_NODE
        }

        function Et(t) {
            return t.isPseudoElement === !0
        }

        function mt(t) {
            return t.node.nodeType === Node.TEXT_NODE
        }

        function gt(t) {
            return function(e, r) {
                return e.cssInt("zIndex") + t.indexOf(e) / t.length - (r.cssInt("zIndex") + t.indexOf(r) / t.length)
            }
        }

        function vt(t) {
            return t.getOpacity() < 1
        }

        function yt(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function Tt(t) {
            return parseInt(t, 10)
        }

        function Rt(t) {
            return t.width
        }

        function xt(t) {
            return t.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName) === -1
        }

        function Ht(t) {
            return [].concat.apply([], t)
        }

        function bt(t) {
            var e = t.substr(0, 1);
            return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
        }

        function _t(e) {
            for (var r, n = [], i = 0, o = !1; e.length;) wt(e[i]) === o ? (r = e.splice(0, i), r.length && n.push(t.html2canvas.punycode.ucs2.encode(r)), o = !o, i = 0) : i++, i >= e.length && (r = e.splice(0, i), r.length && n.push(t.html2canvas.punycode.ucs2.encode(r)));
            return n
        }

        function wt(t) {
            return [32, 13, 10, 9, 45].indexOf(t) !== -1
        }

        function Mt(t) {
            return /[^\u0000-\u00ff]/.test(t)
        }

        function St(t, e, r) {
            if (!e) return Promise.reject("No proxy configured");
            var n = Lt(ie),
                i = Pt(e, t, n);
            return ie ? jt(i) : Ct(r, i, n).then(function(t) {
                return Vt(t.content)
            })
        }

        function At(t, e, r) {
            var n = Lt(oe),
                i = Pt(e, t, n);
            return oe ? Promise.resolve(i) : Ct(r, i, n).then(function(t) {
                return "data:" + t.type + ";base64," + t.content
            })
        }

        function Ct(e, r, n) {
            return new Promise(function(i, o) {
                var a = e.createElement("script"),
                    s = function() {
                        delete t.html2canvas.proxy[n], e.body.removeChild(a)
                    };
                t.html2canvas.proxy[n] = function(t) {
                    s(), i(t)
                }, a.src = r, a.onerror = function(t) {
                    s(), o(t)
                }, e.body.appendChild(a)
            })
        }

        function Lt(t) {
            return t ? "" : "html2canvas_" + Date.now() + "_" + ++ne + "_" + Math.round(1e5 * Math.random())
        }

        function Pt(t, e, r) {
            return t + "?url=" + encodeURIComponent(e) + (r.length ? "&callback=html2canvas.proxy." + r : "")
        }

        function Ft(t, r) {
            var n = (e.createElement("script"), e.createElement("a"));
            n.href = t, t = n.href, this.src = t, this.image = new Image;
            var i = this;
            this.promise = new Promise(function(n, o) {
                i.image.crossOrigin = "Anonymous", i.image.onload = n, i.image.onerror = o, new At(t, r, e).then(function(t) {
                    i.image.src = t
                })["catch"](o)
            })
        }

        function Dt(t, e, r) {
            B.call(this, t, e), this.isPseudoElement = !0, this.before = ":before" === r
        }

        function Bt(t, e, r, n, i) {
            this.width = t, this.height = e, this.images = r, this.options = n, this.document = i
        }

        function kt(t, e, r, n) {
            B.call(this, r, n), this.ownStacking = t, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
        }

        function Ot(t) {
            this.rangeBounds = this.testRangeBounds(t), this.cors = this.testCORS(), this.svg = this.testSVG()
        }

        function Ut(t) {
            this.src = t, this.image = null;
            var e = this;
            this.promise = this.hasFabric().then(function() {
                return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : jt(t)
            }).then(function(t) {
                return new Promise(function(r) {
                    html2canvas.fabric.loadSVGFromString(t, e.createCanvas.call(e, r))
                })
            })
        }

        function Vt(t) {
            var e, r, n, i, o, a, s, h, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                l = t.length,
                u = "";
            for (e = 0; e < l; e += 4) r = c.indexOf(t[e]), n = c.indexOf(t[e + 1]), i = c.indexOf(t[e + 2]), o = c.indexOf(t[e + 3]), a = r << 2 | n >> 4, s = (15 & n) << 4 | i >> 2, h = (3 & i) << 6 | o, u += 64 === i ? String.fromCharCode(a) : 64 === o || o === -1 ? String.fromCharCode(a, s) : String.fromCharCode(a, s, h);
            return u
        }

        function Nt(t, e) {
            this.src = t, this.image = null;
            var r = this;
            this.promise = e ? new Promise(function(e, n) {
                r.image = new Image, r.image.onload = e, r.image.onerror = n, r.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t), r.image.complete === !0 && e(r.image)
            }) : this.hasFabric().then(function() {
                return new Promise(function(e) {
                    html2canvas.fabric.parseSVGDocument(t, r.createCanvas.call(r, e))
                })
            })
        }

        function zt(t, e) {
            B.call(this, t, e)
        }

        function It(t, e, r) {
            if (t.length > 0) return e + r.toUpperCase()
        }

        function Gt(t) {
            C.apply(this, arguments), this.type = "linear" === t.args[0] ? this.TYPES.LINEAR : this.TYPES.RADIAL
        }

        function jt(t) {
            return new Promise(function(e, r) {
                var n = new XMLHttpRequest;
                n.open("GET", t), n.onload = function() {
                    200 === n.status ? e(n.responseText) : r(new Error(n.statusText))
                }, n.onerror = function() {
                    r(new Error("Network Error"))
                }, n.send()
            })
        }

        function Wt(t, e) {
            Bt.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t, this.canvas.height = e), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, D("Initialized CanvasRenderer with size", t, "x", e)
        }

        function Xt(t) {
            return t.length > 0
        }
        if (function() {
                function r(t, e) {
                    L[S] = t, L[S + 1] = e, S += 2, 2 === S && w()
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {
                    return function() {
                        process.nextTick(l)
                    }
                }

                function s() {
                    var t = 0,
                        r = new C(l),
                        n = e.createTextNode("");
                    return r.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = t = ++t % 2
                        }
                }

                function h() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = l,
                        function() {
                            t.port2.postMessage(0)
                        }
                }

                function c() {
                    return function() {
                        setTimeout(l, 1)
                    }
                }

                function l() {
                    for (var t = 0; t < S; t += 2)(0, L[t])(L[t + 1]), L[t] = void 0, L[t + 1] = void 0;
                    S = 0
                }

                function u() {}

                function f(t, e, r, n) {
                    try {
                        t.call(e, r, n)
                    } catch (i) {
                        return i
                    }
                }

                function p(t, e, n) {
                    r(function(t) {
                        var r = !1,
                            i = f(n, e, function(n) {
                                r || (r = !0, e !== n ? E(t, n) : g(t, n))
                            }, function(e) {
                                r || (r = !0, v(t, e))
                            });
                        !r && i && (r = !0, v(t, i))
                    }, t)
                }

                function d(t, e) {
                    1 === e.a ? g(t, e.b) : 2 === t.a ? v(t, e.b) : y(e, void 0, function(e) {
                        E(t, e)
                    }, function(e) {
                        v(t, e)
                    })
                }

                function E(t, e) {
                    if (t === e) v(t, new TypeError("You cannot resolve a promise with itself"));
                    else if ("function" == typeof e || "object" == typeof e && null !== e)
                        if (e.constructor === t.constructor) d(t, e);
                        else {
                            var r;
                            try {
                                r = e.then
                            } catch (n) {
                                P.error = n, r = P
                            }
                            r === P ? v(t, P.error) : void 0 === r ? g(t, e) : o(r) ? p(t, e, r) : g(t, e)
                        }
                    else g(t, e)
                }

                function m(t) {
                    t.f && t.f(t.b), T(t)
                }

                function g(t, e) {
                    void 0 === t.a && (t.b = e, t.a = 1, 0 !== t.e.length && r(T, t))
                }

                function v(t, e) {
                    void 0 === t.a && (t.a = 2, t.b = e, r(m, t))
                }

                function y(t, e, n, i) {
                    var o = t.e,
                        a = o.length;
                    t.f = null, o[a] = e, o[a + 1] = n, o[a + 2] = i, 0 === a && t.a && r(T, t)
                }

                function T(t) {
                    var e = t.e,
                        r = t.a;
                    if (0 !== e.length) {
                        for (var n, i, o = t.b, a = 0; a < e.length; a += 3) n = e[a], i = e[a + r], n ? x(r, n, i, o) : i(o);
                        t.e.length = 0
                    }
                }

                function R() {
                    this.error = null
                }

                function x(t, e, r, n) {
                    var i, a, s, h, c = o(r);
                    if (c) {
                        try {
                            i = r(n)
                        } catch (l) {
                            F.error = l, i = F
                        }
                        if (i === F ? (h = !0, a = i.error, i = null) : s = !0, e === i) return void v(e, new TypeError("A promises callback cannot return that same promise."))
                    } else i = n, s = !0;
                    void 0 === e.a && (c && s ? E(e, i) : h ? v(e, a) : 1 === t ? g(e, i) : 2 === t && v(e, i))
                }

                function H(t, e) {
                    try {
                        e(function(e) {
                            E(t, e)
                        }, function(e) {
                            v(t, e)
                        })
                    } catch (r) {
                        v(t, r)
                    }
                }

                function b(t, e, r, n) {
                    this.n = t, this.c = new t(u, n), this.i = r, this.o(e) ? (this.m = e, this.d = this.length = e.length, this.l(), 0 === this.length ? g(this.c, this.b) : (this.length = this.length || 0, this.k(), 0 === this.d && g(this.c, this.b))) : v(this.c, this.p())
                }

                function _(t) {
                    if (D++, this.b = this.a = void 0, this.e = [], u !== t) {
                        if (!o(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                        if (!(this instanceof _)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        H(this, t)
                    }
                }
                var w, M = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    S = 0,
                    A = "undefined" != typeof t ? t : {},
                    C = A.MutationObserver || A.WebKitMutationObserver,
                    A = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    L = Array(1e3);
                w = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? a() : C ? s() : A ? h() : c();
                var P = new R,
                    F = new R;
                b.prototype.o = function(t) {
                    return M(t)
                }, b.prototype.p = function() {
                    return Error("Array Methods must be provided an Array")
                }, b.prototype.l = function() {
                    this.b = Array(this.length)
                }, b.prototype.k = function() {
                    for (var t = this.length, e = this.c, r = this.m, n = 0; void 0 === e.a && n < t; n++) this.j(r[n], n)
                }, b.prototype.j = function(t, e) {
                    var r = this.n;
                    "object" == typeof t && null !== t ? t.constructor === r && void 0 !== t.a ? (t.f = null, this.g(t.a, e, t.b)) : this.q(r.resolve(t), e) : (this.d--, this.b[e] = this.h(t))
                }, b.prototype.g = function(t, e, r) {
                    var n = this.c;
                    void 0 === n.a && (this.d--, this.i && 2 === t ? v(n, r) : this.b[e] = this.h(r)), 0 === this.d && g(n, this.b)
                }, b.prototype.h = function(t) {
                    return t
                }, b.prototype.q = function(t, e) {
                    var r = this;
                    y(t, void 0, function(t) {
                        r.g(1, e, t)
                    }, function(t) {
                        r.g(2, e, t)
                    })
                };
                var D = 0;
                _.all = function(t, e) {
                    return new b(this, t, (!0), e).c
                }, _.race = function(t, e) {
                    function r(t) {
                        E(i, t)
                    }

                    function n(t) {
                        v(i, t)
                    }
                    var i = new this(u, e);
                    if (!M(t)) return v(i, new TypeError("You must pass an array to race.")), i;
                    for (var o = t.length, a = 0; void 0 === i.a && a < o; a++) y(this.resolve(t[a]), void 0, r, n);
                    return i
                }, _.resolve = function(t, e) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var r = new this(u, e);
                    return E(r, t), r
                }, _.reject = function(t, e) {
                    var r = new this(u, e);
                    return v(r, t), r
                }, _.prototype = {
                    constructor: _,
                    then: function(t, e) {
                        var n = this.a;
                        if (1 === n && !t || 2 === n && !e) return this;
                        var i = new this.constructor(u),
                            o = this.b;
                        if (n) {
                            var a = arguments[n - 1];
                            r(function() {
                                x(n, i, a, o)
                            })
                        } else y(this, i, t, e);
                        return i
                    },
                    "catch": function(t) {
                        return this.then(null, t)
                    }
                };
                var B = {
                    Promise: _,
                    polyfill: function() {
                        var e;
                        e = "undefined" != typeof n ? n : "undefined" != typeof t && t.document ? t : self, "Promise" in e && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && function() {
                            var t;
                            return new e.Promise(function(e) {
                                t = e
                            }), o(t)
                        }() || (e.Promise = _)
                    }
                };
                "function" == typeof i && i.amd ? i(function() {
                    return B
                }) : "undefined" != typeof module && module.exports ? module.exports = B : "undefined" != typeof this && (this.ES6Promise = B)
            }.call(t), t && t.ES6Promise.polyfill(), "undefined" == typeof e || "function" != typeof Object.create || "function" != typeof e.createElement("canvas").getContext) return void((t || module.exports).html2canvas = function() {
            return Promise.reject("No canvas support")
        });
        ! function(t) {
            function e(t) {
                throw RangeError(F[t])
            }

            function o(t, e) {
                for (var r = t.length, n = []; r--;) n[r] = e(t[r]);
                return n
            }

            function a(t, e) {
                var r = t.split("@"),
                    n = "";
                r.length > 1 && (n = r[0] + "@", t = r[1]);
                var i = t.split(P),
                    a = o(i, e).join(".");
                return n + a
            }

            function s(t) {
                for (var e, r, n = [], i = 0, o = t.length; i < o;) e = t.charCodeAt(i++),
                    e >= 55296 && e <= 56319 && i < o ? (r = t.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--)) : n.push(e);
                return n
            }

            function h(t) {
                return o(t, function(t) {
                    var e = "";
                    return t > 65535 && (t -= 65536, e += k(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += k(t)
                }).join("")
            }

            function c(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : x
            }

            function l(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function u(t, e, r) {
                var n = 0;
                for (t = r ? B(t / w) : t >> 1, t += B(t / e); t > D * b >> 1; n += x) t = B(t / D);
                return B(n + (D + 1) * t / (t + _))
            }

            function f(t) {
                var r, n, i, o, a, s, l, f, p, d, E = [],
                    m = t.length,
                    g = 0,
                    v = S,
                    y = M;
                for (n = t.lastIndexOf(A), n < 0 && (n = 0), i = 0; i < n; ++i) t.charCodeAt(i) >= 128 && e("not-basic"), E.push(t.charCodeAt(i));
                for (o = n > 0 ? n + 1 : 0; o < m;) {
                    for (a = g, s = 1, l = x; o >= m && e("invalid-input"), f = c(t.charCodeAt(o++)), (f >= x || f > B((R - g) / s)) && e("overflow"), g += f * s, p = l <= y ? H : l >= y + b ? b : l - y, !(f < p); l += x) d = x - p, s > B(R / d) && e("overflow"), s *= d;
                    r = E.length + 1, y = u(g - a, r, 0 == a), B(g / r) > R - v && e("overflow"), v += B(g / r), g %= r, E.splice(g++, 0, v)
                }
                return h(E)
            }

            function p(t) {
                var r, n, i, o, a, h, c, f, p, d, E, m, g, v, y, T = [];
                for (t = s(t), m = t.length, r = S, n = 0, a = M, h = 0; h < m; ++h) E = t[h], E < 128 && T.push(k(E));
                for (i = o = T.length, o && T.push(A); i < m;) {
                    for (c = R, h = 0; h < m; ++h) E = t[h], E >= r && E < c && (c = E);
                    for (g = i + 1, c - r > B((R - n) / g) && e("overflow"), n += (c - r) * g, r = c, h = 0; h < m; ++h)
                        if (E = t[h], E < r && ++n > R && e("overflow"), E == r) {
                            for (f = n, p = x; d = p <= a ? H : p >= a + b ? b : p - a, !(f < d); p += x) y = f - d, v = x - d, T.push(k(l(d + y % v, 0))), f = B(y / v);
                            T.push(k(l(f, 0))), a = u(n, g, i == o), n = 0, ++i
                        }++n, ++r
                }
                return T.join("")
            }

            function d(t) {
                return a(t, function(t) {
                    return C.test(t) ? f(t.slice(4).toLowerCase()) : t
                })
            }

            function E(t) {
                return a(t, function(t) {
                    return L.test(t) ? "xn--" + p(t) : t
                })
            }
            var m = "object" == typeof r && r && !r.nodeType && r,
                g = "object" == typeof module && module && !module.nodeType && module,
                v = "object" == typeof n && n;
            v.global !== v && v.window !== v && v.self !== v || (t = v);
            var y, T, R = 2147483647,
                x = 36,
                H = 1,
                b = 26,
                _ = 38,
                w = 700,
                M = 72,
                S = 128,
                A = "-",
                C = /^xn--/,
                L = /[^\x20-\x7E]/,
                P = /[\x2E\u3002\uFF0E\uFF61]/g,
                F = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                D = x - H,
                B = Math.floor,
                k = String.fromCharCode;
            if (y = {
                    version: "1.3.1",
                    ucs2: {
                        decode: s,
                        encode: h
                    },
                    decode: f,
                    encode: p,
                    toASCII: E,
                    toUnicode: d
                }, "function" == typeof i && "object" == typeof i.amd && i.amd) i("punycode", function() {
                return y
            });
            else if (m && g)
                if (module.exports == m) g.exports = y;
                else
                    for (T in y) y.hasOwnProperty(T) && (m[T] = y[T]);
            else t.punycode = y
        }(this);
        var qt = "data-html2canvas-node",
            Yt = "data-html2canvas-canvas-clone",
            Kt = 0,
            Qt = 0;
        t.html2canvas = function(r, n) {
            var i = Qt++;
            if (n = n || {}, n.logging && (t.html2canvas.logging = !0, t.html2canvas.start = Date.now()), n.async = "undefined" == typeof n.async || n.async, n.allowTaint = "undefined" != typeof n.allowTaint && n.allowTaint, n.removeContainer = "undefined" == typeof n.removeContainer || n.removeContainer, n.javascriptEnabled = "undefined" != typeof n.javascriptEnabled && n.javascriptEnabled, n.imageTimeout = "undefined" == typeof n.imageTimeout ? 1e4 : n.imageTimeout, n.renderer = "function" == typeof n.renderer ? n.renderer : Wt, n.strict = !!n.strict, "string" == typeof r) {
                if ("string" != typeof n.proxy) return Promise.reject("Proxy must be used when rendering url");
                var h = null != n.width ? n.width : t.innerWidth,
                    c = null != n.height ? n.height : t.innerHeight;
                return v(b(r), n.proxy, e, h, c, n).then(function(t) {
                    return s(t.contentWindow.document.documentElement, t, n, h, c)
                })
            }
            var l = (r === o ? [e.documentElement] : r.length ? r : [r])[0];
            return l.setAttribute(qt + i, i), a(l.ownerDocument, n, l.ownerDocument.defaultView.innerWidth, l.ownerDocument.defaultView.innerHeight, i).then(function(t) {
                return "function" == typeof n.onrendered && (D("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), n.onrendered(t)), t
            })
        }, t.html2canvas.punycode = this.punycode, t.html2canvas.proxy = {}, _.prototype.darken = function(t) {
            var e = 1 - t;
            return new _([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
        }, _.prototype.isTransparent = function() {
            return 0 === this.a
        }, _.prototype.isBlack = function() {
            return 0 === this.r && 0 === this.g && 0 === this.b
        }, _.prototype.fromArray = function(t) {
            return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])), Array.isArray(t)
        };
        var Zt = /^#([a-f0-9]{3})$/i;
        _.prototype.hex3 = function(t) {
            var e = null;
            return null !== (e = t.match(Zt)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)), null !== e
        };
        var Jt = /^#([a-f0-9]{6})$/i;
        _.prototype.hex6 = function(t) {
            var e = null;
            return null !== (e = t.match(Jt)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)), null !== e
        };
        var $t = /^rgb\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3})\)$/;
        _.prototype.rgb = function(t) {
            var e = null;
            return null !== (e = t.match($t)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])), null !== e
        };
        var te = /^rgba\((\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *, *(\d+\.?\d*)\)$/;
        _.prototype.rgba = function(t) {
            var e = null;
            return null !== (e = t.match(te)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])), null !== e
        }, _.prototype.toString = function() {
            return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
        }, _.prototype.namedColor = function(t) {
            var e = ee[t.toLowerCase()];
            if (e) this.r = e[0], this.g = e[1], this.b = e[2];
            else if ("transparent" === t.toLowerCase()) return this.r = this.g = this.b = this.a = 0, !0;
            return !!e
        }, _.prototype.isColor = !0;
        var ee = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        };
        S.prototype.getMetrics = function(t, e) {
            return this.data[t + "-" + e] === o && (this.data[t + "-" + e] = new M(t, e)), this.data[t + "-" + e]
        }, A.prototype.proxyLoad = function(t, e, r) {
            var n = this.src;
            return v(n.src, t, n.ownerDocument, e.width, e.height, r)
        }, C.prototype.TYPES = {
            LINEAR: 1,
            RADIAL: 2
        }, P.prototype.findImages = function(t) {
            var e = [];
            return t.reduce(function(t, e) {
                switch (e.node.nodeName) {
                    case "IMG":
                        return t.concat([{
                            args: [e.node.src],
                            method: "url"
                        }]);
                    case "svg":
                    case "IFRAME":
                        return t.concat([{
                            args: [e.node],
                            method: e.node.nodeName
                        }])
                }
                return t
            }, []).forEach(this.addImage(e, this.loadImage), this), e
        }, P.prototype.findBackgroundImage = function(t, e) {
            return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t
        }, P.prototype.addImage = function(t, e) {
            return function(r) {
                r.args.forEach(function(n) {
                    this.imageExists(t, n) || (t.splice(0, 0, e.call(this, r)), D("Added image #" + t.length, "string" == typeof n ? n.substring(0, 100) : n))
                }, this)
            }
        }, P.prototype.hasImageBackground = function(t) {
            return "none" !== t.method
        }, P.prototype.loadImage = function(t) {
            if ("url" === t.method) {
                var e = t.args[0];
                return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new L(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), (!1)) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new L(e, (!1)) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new L(e, (!0)) : this.options.proxy ? new Ft(e, this.options.proxy) : new w(e) : new Ut(e)
            }
            return "linear-gradient" === t.method ? new F(t) : "gradient" === t.method ? new Gt(t) : "svg" === t.method ? new Nt(t.args[0], this.support.svg) : "IFRAME" === t.method ? new A(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new w(t)
        }, P.prototype.isSVG = function(t) {
            return "svg" === t.substring(t.length - 3).toLowerCase() || Ut.prototype.isInline(t)
        }, P.prototype.imageExists = function(t, e) {
            return t.some(function(t) {
                return t.src === e
            })
        }, P.prototype.isSameOrigin = function(t) {
            return this.getOrigin(t) === this.origin
        }, P.prototype.getOrigin = function(t) {
            var r = this.link || (this.link = e.createElement("a"));
            return r.href = t, r.href = r.href, r.protocol + r.hostname + r.port
        }, P.prototype.getPromise = function(t) {
            return this.timeout(t, this.options.imageTimeout)["catch"](function() {
                var e = new w(t.src);
                return e.promise.then(function(e) {
                    t.image = e
                })
            })
        }, P.prototype.get = function(t) {
            var e = null;
            return this.images.some(function(r) {
                return (e = r).src === t
            }) ? e : null
        }, P.prototype.fetch = function(t) {
            return this.images = t.reduce(yt(this.findBackgroundImage, this), this.findImages(t)), this.images.forEach(function(t, e) {
                t.promise.then(function() {
                    D("Succesfully loaded image #" + (e + 1), t)
                }, function(r) {
                    D("Failed loading image #" + (e + 1), t, r)
                })
            }), this.ready = Promise.all(this.images.map(this.getPromise, this)), D("Finished searching images"), this
        }, P.prototype.timeout = function(t, e) {
            var r, n = Promise.race([t.promise, new Promise(function(n, i) {
                r = setTimeout(function() {
                    D("Timed out loading image", t), i(t)
                }, e)
            })]).then(function(t) {
                return clearTimeout(r), t
            });
            return n["catch"](function() {
                clearTimeout(r)
            }), n
        }, F.prototype = Object.create(C.prototype), F.prototype.stepRegExp = /((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/, B.prototype.cloneTo = function(t) {
            t.visible = this.visible, t.borders = this.borders, t.bounds = this.bounds, t.clip = this.clip, t.backgroundClip = this.backgroundClip, t.computedStyles = this.computedStyles, t.styles = this.styles, t.backgroundImages = this.backgroundImages, t.opacity = this.opacity
        }, B.prototype.getOpacity = function() {
            return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
        }, B.prototype.assignStack = function(t) {
            this.stack = t, t.children.push(this)
        }, B.prototype.isElementVisible = function() {
            return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
        }, B.prototype.css = function(t) {
            return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t] || (this.styles[t] = this.computedStyles[t])
        }, B.prototype.prefixedCss = function(t) {
            var e = ["webkit", "moz", "ms", "o"],
                r = this.css(t);
            return r === o && e.some(function(e) {
                return r = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)), r !== o
            }, this), r === o ? null : r
        }, B.prototype.computedStyle = function(t) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
        }, B.prototype.cssInt = function(t) {
            var e = parseInt(this.css(t), 10);
            return isNaN(e) ? 0 : e
        }, B.prototype.color = function(t) {
            return this.colors[t] || (this.colors[t] = new _(this.css(t)))
        }, B.prototype.cssFloat = function(t) {
            var e = parseFloat(this.css(t));
            return isNaN(e) ? 0 : e
        }, B.prototype.fontWeight = function() {
            var t = this.css("fontWeight");
            switch (parseInt(t, 10)) {
                case 401:
                    t = "bold";
                    break;
                case 400:
                    t = "normal"
            }
            return t
        }, B.prototype.parseClip = function() {
            var t = this.css("clip").match(this.CLIP);
            return t ? {
                top: parseInt(t[1], 10),
                right: parseInt(t[2], 10),
                bottom: parseInt(t[3], 10),
                left: parseInt(t[4], 10)
            } : null
        }, B.prototype.parseBackgroundImages = function() {
            return this.backgroundImages || (this.backgroundImages = V(this.css("backgroundImage")))
        }, B.prototype.cssList = function(t, e) {
            var r = (this.css(t) || "").split(",");
            return r = r[e || 0] || r[0] || "auto", r = r.trim().split(" "), 1 === r.length && (r = [r[0], r[0]]), r
        }, B.prototype.parseBackgroundSize = function(t, e, r) {
            var n, i, o = this.cssList("backgroundSize", r);
            if (U(o[0])) n = t.width * parseFloat(o[0]) / 100;
            else {
                if (/contain|cover/.test(o[0])) {
                    var a = t.width / t.height,
                        s = e.width / e.height;
                    return a < s ^ "contain" === o[0] ? {
                        width: t.height * s,
                        height: t.height
                    } : {
                        width: t.width,
                        height: t.width / s
                    }
                }
                n = parseInt(o[0], 10)
            }
            return i = "auto" === o[0] && "auto" === o[1] ? e.height : "auto" === o[1] ? n / e.width * e.height : U(o[1]) ? t.height * parseFloat(o[1]) / 100 : parseInt(o[1], 10), "auto" === o[0] && (n = i / e.height * e.width), {
                width: n,
                height: i
            }
        }, B.prototype.parseBackgroundPosition = function(t, e, r, n) {
            var i, o, a = this.cssList("backgroundPosition", r);
            return i = U(a[0]) ? (t.width - (n || e).width) * (parseFloat(a[0]) / 100) : parseInt(a[0], 10), o = "auto" === a[1] ? i / e.width * e.height : U(a[1]) ? (t.height - (n || e).height) * parseFloat(a[1]) / 100 : parseInt(a[1], 10), "auto" === a[0] && (i = o / e.height * e.width), {
                left: i,
                top: o
            }
        }, B.prototype.parseBackgroundRepeat = function(t) {
            return this.cssList("backgroundRepeat", t)[0]
        }, B.prototype.parseTextShadows = function() {
            var t = this.css("textShadow"),
                e = [];
            if (t && "none" !== t)
                for (var r = t.match(this.TEXT_SHADOW_PROPERTY), n = 0; r && n < r.length; n++) {
                    var i = r[n].match(this.TEXT_SHADOW_VALUES);
                    e.push({
                        color: new _(i[0]),
                        offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0,
                        offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0,
                        blur: i[3] ? i[3].replace("px", "") : 0
                    })
                }
            return e
        }, B.prototype.parseTransform = function() {
            if (!this.transformData)
                if (this.hasTransform()) {
                    var t = this.parseBounds(),
                        e = this.prefixedCss("transformOrigin").split(" ").map(N).map(z);
                    e[0] += t.left, e[1] += t.top, this.transformData = {
                        origin: e,
                        matrix: this.parseTransformMatrix()
                    }
                } else this.transformData = {
                    origin: [0, 0],
                    matrix: [1, 0, 0, 1, 0, 0]
                };
            return this.transformData
        }, B.prototype.parseTransformMatrix = function() {
            if (!this.transformMatrix) {
                var t = this.prefixedCss("transform"),
                    e = t ? O(t.match(this.MATRIX_PROPERTY)) : null;
                this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0]
            }
            return this.transformMatrix
        }, B.prototype.parseBounds = function() {
            return this.bounds || (this.bounds = this.hasTransform() ? G(this.node) : I(this.node))
        }, B.prototype.hasTransform = function() {
            return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
        }, B.prototype.getValue = function() {
            var t = this.node.value || "";
            return "SELECT" === this.node.tagName ? t = k(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")), 0 === t.length ? this.node.placeholder || "" : t
        }, B.prototype.MATRIX_PROPERTY = /(matrix)\((.+)\)/, B.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, B.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, B.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, j.prototype.calculateOverflowClips = function() {
            this.nodes.forEach(function(t) {
                if (dt(t)) {
                    Et(t) && t.appendToDOM(), t.borders = this.parseBorders(t);
                    var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                        r = t.parseClip();
                    r && ["absolute", "fixed"].indexOf(t.css("position")) !== -1 && e.push([
                        ["rect", t.bounds.left + r.left, t.bounds.top + r.top, r.right - r.left, r.bottom - r.top]
                    ]), t.clip = W(t) ? t.parent.clip.concat(e) : e, t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip, Et(t) && t.cleanDOM()
                } else mt(t) && (t.clip = W(t) ? t.parent.clip : []);
                Et(t) || (t.bounds = null)
            }, this)
        }, j.prototype.asyncRenderer = function(t, e, r) {
            r = r || Date.now(), this.paint(t[this.renderIndex++]), t.length === this.renderIndex ? e() : r + 20 > Date.now() ? this.asyncRenderer(t, e, r) : setTimeout(yt(function() {
                this.asyncRenderer(t, e)
            }, this), 0)
        }, j.prototype.createPseudoHideStyles = function(t) {
            this.createStyles(t, "." + Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
        }, j.prototype.disableAnimations = function(t) {
            this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
        }, j.prototype.createStyles = function(t, e) {
            var r = t.createElement("style");
            r.innerHTML = e, t.body.appendChild(r)
        }, j.prototype.getPseudoElements = function(t) {
            var e = [
                [t]
            ];
            if (t.node.nodeType === Node.ELEMENT_NODE) {
                var r = this.getPseudoElement(t, ":before"),
                    n = this.getPseudoElement(t, ":after");
                r && e.push(r), n && e.push(n)
            }
            return Ht(e)
        }, j.prototype.getPseudoElement = function(t, r) {
            var n = t.computedStyle(r);
            if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
            for (var i = bt(n.content), o = "url" === i.substr(0, 3), a = e.createElement(o ? "img" : "html2canvaspseudoelement"), s = new Dt(a, t, r), h = n.length - 1; h >= 0; h--) {
                var c = X(n.item(h));
                a.style[c] = n[c]
            }
            if (a.className = Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, o) return a.src = V(i)[0].args[0], [s];
            var l = e.createTextNode(i);
            return a.appendChild(l), [s, new zt(l, s)]
        }, j.prototype.getChildren = function(t) {
            return Ht([].filter.call(t.node.childNodes, ht).map(function(e) {
                var r = [e.nodeType === Node.TEXT_NODE ? new zt(e, t) : new B(e, t)].filter(xt);
                return e.nodeType === Node.ELEMENT_NODE && r.length && "TEXTAREA" !== e.tagName ? r[0].isElementVisible() ? r.concat(this.getChildren(r[0])) : [] : r
            }, this))
        }, j.prototype.newStackingContext = function(t, e) {
            var r = new kt(e, t.getOpacity(), t.node, t.parent);
            t.cloneTo(r);
            var n = e ? r.getParentStack(this) : r.parent.stack;
            n.contexts.push(r), t.stack = r
        }, j.prototype.createStackingContexts = function() {
            this.nodes.forEach(function(t) {
                dt(t) && (this.isRootElement(t) || vt(t) || ct(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : dt(t) && (lt(t) && rt(t) || ft(t) || ut(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
            }, this)
        }, j.prototype.isBodyWithTransparentRoot = function(t) {
            return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
        }, j.prototype.isRootElement = function(t) {
            return null === t.parent
        }, j.prototype.sortStackingContexts = function(t) {
            t.contexts.sort(gt(t.contexts.slice(0))), t.contexts.forEach(this.sortStackingContexts, this)
        }, j.prototype.parseTextBounds = function(t) {
            return function(e, r, n) {
                if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                    if (this.support.rangeBounds && !t.parent.hasTransform()) {
                        var i = n.slice(0, r).join("").length;
                        return this.getRangeBounds(t.node, i, e.length)
                    }
                    if (t.node && "string" == typeof t.node.data) {
                        var o = t.node.splitText(e.length),
                            a = this.getWrapperBounds(t.node, t.parent.hasTransform());
                        return t.node = o, a
                    }
                } else this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));
                return {}
            }
        }, j.prototype.getWrapperBounds = function(t, e) {
            var r = t.ownerDocument.createElement("html2canvaswrapper"),
                n = t.parentNode,
                i = t.cloneNode(!0);
            r.appendChild(t.cloneNode(!0)), n.replaceChild(r, t);
            var o = e ? G(r) : I(r);
            return n.replaceChild(i, r), o
        }, j.prototype.getRangeBounds = function(t, e, r) {
            var n = this.range || (this.range = t.ownerDocument.createRange());
            return n.setStart(t, e), n.setEnd(t, e + r), n.getBoundingClientRect()
        }, j.prototype.parse = function(t) {
            var e = t.contexts.filter(tt),
                r = t.children.filter(dt),
                n = r.filter(pt(ut)),
                i = n.filter(pt(lt)).filter(pt(nt)),
                o = r.filter(pt(lt)).filter(ut),
                a = n.filter(pt(lt)).filter(nt),
                s = t.contexts.concat(n.filter(lt)).filter(rt),
                h = t.children.filter(mt).filter(ot),
                c = t.contexts.filter(et);
            e.concat(i).concat(o).concat(a).concat(s).concat(h).concat(c).forEach(function(t) {
                this.renderQueue.push(t), it(t) && (this.parse(t), this.renderQueue.push(new q))
            }, this)
        }, j.prototype.paint = function(t) {
            try {
                t instanceof q ? this.renderer.ctx.restore() : mt(t) ? (Et(t.parent) && t.parent.appendToDOM(), this.paintText(t), Et(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
            } catch (e) {
                if (D(e), this.options.strict) throw e
            }
        }, j.prototype.paintNode = function(t) {
            it(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())), "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
        }, j.prototype.paintElement = function(t) {
            var e = t.parseBounds();
            this.renderer.clip(t.backgroundClip, function() {
                this.renderer.renderBackground(t, e, t.borders.borders.map(Rt))
            }, this), this.renderer.clip(t.clip, function() {
                this.renderer.renderBorders(t.borders.borders)
            }, this), this.renderer.clip(t.backgroundClip, function() {
                switch (t.node.nodeName) {
                    case "svg":
                    case "IFRAME":
                        var r = this.images.get(t.node);
                        r ? this.renderer.renderImage(t, e, t.borders, r) : D("Error loading <" + t.node.nodeName + ">", t.node);
                        break;
                    case "IMG":
                        var n = this.images.get(t.node.src);
                        n ? this.renderer.renderImage(t, e, t.borders, n) : D("Error loading <img>", t.node.src);
                        break;
                    case "CANVAS":
                        this.renderer.renderImage(t, e, t.borders, {
                            image: t.node
                        });
                        break;
                    case "SELECT":
                    case "INPUT":
                    case "TEXTAREA":
                        this.paintFormValue(t)
                }
            }, this)
        }, j.prototype.paintCheckbox = function(t) {
            var e = t.parseBounds(),
                r = Math.min(e.width, e.height),
                n = {
                    width: r - 1,
                    height: r - 1,
                    top: e.top,
                    left: e.left
                },
                i = [3, 3],
                o = [i, i, i, i],
                a = [1, 1, 1, 1].map(function(t) {
                    return {
                        color: new _("#A5A5A5"),
                        width: t
                    }
                }),
                s = Q(n, o, a);
            this.renderer.clip(t.backgroundClip, function() {
                this.renderer.rectangle(n.left + 1, n.top + 1, n.width - 2, n.height - 2, new _("#DEDEDE")), this.renderer.renderBorders(Y(a, n, s, o)), t.node.checked && (this.renderer.font(new _("#424242"), "normal", "normal", "bold", r - 3 + "px", "arial"), this.renderer.text("✔", n.left + r / 6, n.top + r - 1))
            }, this)
        }, j.prototype.paintRadio = function(t) {
            var e = t.parseBounds(),
                r = Math.min(e.width, e.height) - 2;
            this.renderer.clip(t.backgroundClip, function() {
                this.renderer.circleStroke(e.left + 1, e.top + 1, r, new _("#DEDEDE"), 1, new _("#A5A5A5")), t.node.checked && this.renderer.circle(Math.ceil(e.left + r / 4) + 1, Math.ceil(e.top + r / 4) + 1, Math.floor(r / 2), new _("#424242"))
            }, this)
        }, j.prototype.paintFormValue = function(t) {
            var e = t.getValue();
            if (e.length > 0) {
                var r = t.node.ownerDocument,
                    n = r.createElement("html2canvaswrapper"),
                    i = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
                i.forEach(function(e) {
                    try {
                        n.style[e] = t.css(e)
                    } catch (r) {
                        D("html2canvas: Parse: Exception caught in renderFormValue: " + r.message)
                    }
                });
                var o = t.parseBounds();
                n.style.position = "fixed", n.style.left = o.left + "px", n.style.top = o.top + "px", n.textContent = e, r.body.appendChild(n), this.paintText(new zt(n.firstChild, t)), r.body.removeChild(n)
            }
        }, j.prototype.paintText = function(e) {
            e.applyTextTransform();
            var r = t.html2canvas.punycode.ucs2.decode(e.node.data),
                n = this.options.letterRendering && !at(e) || Mt(e.node.data) ? r.map(function(e) {
                    return t.html2canvas.punycode.ucs2.encode([e])
                }) : _t(r),
                i = e.parent.fontWeight(),
                o = e.parent.css("fontSize"),
                a = e.parent.css("fontFamily"),
                s = e.parent.parseTextShadows();
            this.renderer.font(e.parent.color("color"), e.parent.css("fontStyle"), e.parent.css("fontVariant"), i, o, a), s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(), this.renderer.clip(e.parent.clip, function() {
                n.map(this.parseTextBounds(e), this).forEach(function(t, r) {
                    t && (this.renderer.text(n[r], t.left, t.bottom), this.renderTextDecoration(e.parent, t, this.fontMetrics.getMetrics(a, o)))
                }, this)
            }, this)
        }, j.prototype.renderTextDecoration = function(t, e, r) {
            switch (t.css("textDecoration").split(" ")[0]) {
                case "underline":
                    this.renderer.rectangle(e.left, Math.round(e.top + r.baseline + r.lineWidth), e.width, 1, t.color("color"));
                    break;
                case "overline":
                    this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                    break;
                case "line-through":
                    this.renderer.rectangle(e.left, Math.ceil(e.top + r.middle + r.lineWidth), e.width, 1, t.color("color"))
            }
        };
        var re = {
            inset: [
                ["darken", .6],
                ["darken", .1],
                ["darken", .1],
                ["darken", .6]
            ]
        };
        j.prototype.parseBorders = function(t) {
            var e = t.parseBounds(),
                r = st(t),
                n = ["Top", "Right", "Bottom", "Left"].map(function(e, r) {
                    var n = t.css("border" + e + "Style"),
                        i = t.color("border" + e + "Color");
                    "inset" === n && i.isBlack() && (i = new _([255, 255, 255, i.a]));
                    var o = re[n] ? re[n][r] : null;
                    return {
                        width: t.cssInt("border" + e + "Width"),
                        color: o ? i[o[0]](o[1]) : i,
                        args: null
                    }
                }),
                i = Q(e, r, n);
            return {
                clip: this.parseBackgroundClip(t, i, n, r, e),
                borders: Y(n, e, i, r)
            }
        }, j.prototype.parseBackgroundClip = function(t, e, r, n, i) {
            var o = t.css("backgroundClip"),
                a = [];
            switch (o) {
                case "content-box":
                case "padding-box":
                    $(a, n[0], n[1], e.topLeftInner, e.topRightInner, i.left + r[3].width, i.top + r[0].width), $(a, n[1], n[2], e.topRightInner, e.bottomRightInner, i.left + i.width - r[1].width, i.top + r[0].width), $(a, n[2], n[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - r[1].width, i.top + i.height - r[2].width), $(a, n[3], n[0], e.bottomLeftInner, e.topLeftInner, i.left + r[3].width, i.top + i.height - r[2].width);
                    break;
                default:
                    $(a, n[0], n[1], e.topLeftOuter, e.topRightOuter, i.left, i.top), $(a, n[1], n[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top), $(a, n[2], n[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height), $(a, n[3], n[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height)
            }
            return a
        };
        var ne = 0,
            ie = "withCredentials" in new XMLHttpRequest,
            oe = "crossOrigin" in new Image;
        Dt.prototype.cloneTo = function(t) {
                Dt.prototype.cloneTo.call(this, t), t.isPseudoElement = !0, t.before = this.before
            }, Dt.prototype = Object.create(B.prototype), Dt.prototype.appendToDOM = function() {
                this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
            }, Dt.prototype.cleanDOM = function() {
                this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
            }, Dt.prototype.getHideClass = function() {
                return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
            }, Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", Dt.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", Bt.prototype.renderImage = function(t, e, r, n) {
                var i = t.cssInt("paddingLeft"),
                    o = t.cssInt("paddingTop"),
                    a = t.cssInt("paddingRight"),
                    s = t.cssInt("paddingBottom"),
                    h = r.borders,
                    c = e.width - (h[1].width + h[3].width + i + a),
                    l = e.height - (h[0].width + h[2].width + o + s);
                this.drawImage(n, 0, 0, n.image.width || c, n.image.height || l, e.left + i + h[3].width, e.top + o + h[0].width, c, l)
            }, Bt.prototype.renderBackground = function(t, e, r) {
                e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, r))
            }, Bt.prototype.renderBackgroundColor = function(t, e) {
                var r = t.color("backgroundColor");
                r.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, r)
            }, Bt.prototype.renderBorders = function(t) {
                t.forEach(this.renderBorder, this)
            }, Bt.prototype.renderBorder = function(t) {
                t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
            }, Bt.prototype.renderBackgroundImage = function(t, e, r) {
                var n = t.parseBackgroundImages();
                n.reverse().forEach(function(n, i, o) {
                    switch (n.method) {
                        case "url":
                            var a = this.images.get(n.args[0]);
                            a ? this.renderBackgroundRepeating(t, e, a, o.length - (i + 1), r) : D("Error loading background-image", n.args[0]);
                            break;
                        case "linear-gradient":
                        case "gradient":
                            var s = this.images.get(n.value);
                            s ? this.renderBackgroundGradient(s, e, r) : D("Error loading background-image", n.args[0]);
                            break;
                        case "none":
                            break;
                        default:
                            D("Unknown background-image type", n.args[0])
                    }
                }, this)
            }, Bt.prototype.renderBackgroundRepeating = function(t, e, r, n, i) {
                var o = t.parseBackgroundSize(e, r.image, n),
                    a = t.parseBackgroundPosition(e, r.image, n, o),
                    s = t.parseBackgroundRepeat(n);
                switch (s) {
                    case "repeat-x":
                    case "repeat no-repeat":
                        this.backgroundRepeatShape(r, a, o, e, e.left + i[3], e.top + a.top + i[0], 99999, o.height, i);
                        break;
                    case "repeat-y":
                    case "no-repeat repeat":
                        this.backgroundRepeatShape(r, a, o, e, e.left + a.left + i[3], e.top + i[0], o.width, 99999, i);
                        break;
                    case "no-repeat":
                        this.backgroundRepeatShape(r, a, o, e, e.left + a.left + i[3], e.top + a.top + i[0], o.width, o.height, i);
                        break;
                    default:
                        this.renderBackgroundRepeat(r, a, o, {
                            top: e.top,
                            left: e.left
                        }, i[3], i[0])
                }
            }, kt.prototype = Object.create(B.prototype), kt.prototype.getParentStack = function(t) {
                var e = this.parent ? this.parent.stack : null;
                return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
            }, Ot.prototype.testRangeBounds = function(t) {
                var e, r, n, i, o = !1;
                return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (r = t.createElement("boundtest"), r.style.height = "123px", r.style.display = "block", t.body.appendChild(r), e.selectNode(r), n = e.getBoundingClientRect(), i = n.height, 123 === i && (o = !0), t.body.removeChild(r))), o
            }, Ot.prototype.testCORS = function() {
                return "undefined" != typeof(new Image).crossOrigin
            }, Ot.prototype.testSVG = function() {
                var t = new Image,
                    r = e.createElement("canvas"),
                    n = r.getContext("2d");
                t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                    n.drawImage(t, 0, 0), r.toDataURL()
                } catch (i) {
                    return !1
                }
                return !0
            }, Ut.prototype.hasFabric = function() {
                return html2canvas.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
            }, Ut.prototype.inlineFormatting = function(t) {
                return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
            }, Ut.prototype.removeContentType = function(t) {
                return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
            }, Ut.prototype.isInline = function(t) {
                return /^data:image\/svg\+xml/i.test(t)
            }, Ut.prototype.createCanvas = function(t) {
                var e = this;
                return function(r, n) {
                    var i = new html2canvas.fabric.StaticCanvas("c");
                    e.image = i.lowerCanvasEl, i.setWidth(n.width).setHeight(n.height).add(html2canvas.fabric.util.groupSVGElements(r, n)).renderAll(), t(i.lowerCanvasEl)
                }
            }, Ut.prototype.decode64 = function(e) {
                return "function" == typeof t.atob ? t.atob(e) : Vt(e)
            }, Nt.prototype = Object.create(Ut.prototype), zt.prototype = Object.create(B.prototype), zt.prototype.applyTextTransform = function() {
                this.node.data = this.transform(this.parent.css("textTransform"))
            }, zt.prototype.transform = function(t) {
                var e = this.node.data;
                switch (t) {
                    case "lowercase":
                        return e.toLowerCase();
                    case "capitalize":
                        return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, It);
                    case "uppercase":
                        return e.toUpperCase();
                    default:
                        return e
                }
            }, Gt.prototype = Object.create(C.prototype),
            Wt.prototype = Object.create(Bt.prototype), Wt.prototype.setFillStyle = function(t) {
                return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t, this.ctx
            }, Wt.prototype.rectangle = function(t, e, r, n, i) {
                this.setFillStyle(i).fillRect(t, e, r, n)
            }, Wt.prototype.circle = function(t, e, r, n) {
                this.setFillStyle(n), this.ctx.beginPath(), this.ctx.arc(t + r / 2, e + r / 2, r / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
            }, Wt.prototype.circleStroke = function(t, e, r, n, i, o) {
                this.circle(t, e, r, n), this.ctx.strokeStyle = o.toString(), this.ctx.stroke()
            }, Wt.prototype.drawShape = function(t, e) {
                this.shape(t), this.setFillStyle(e).fill()
            }, Wt.prototype.taints = function(t) {
                if (null === t.tainted) {
                    this.taintCtx.drawImage(t.image, 0, 0);
                    try {
                        this.taintCtx.getImageData(0, 0, 1, 1), t.tainted = !1
                    } catch (r) {
                        this.taintCtx = e.createElement("canvas").getContext("2d"), t.tainted = !0
                    }
                }
                return t.tainted
            }, Wt.prototype.drawImage = function(t, e, r, n, i, o, a, s, h) {
                this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, r, n, i, o, a, s, h)
            }, Wt.prototype.clip = function(t, e, r) {
                this.ctx.save(), t.filter(Xt).forEach(function(t) {
                    this.shape(t).clip()
                }, this), e.call(r), this.ctx.restore()
            }, Wt.prototype.shape = function(t) {
                return this.ctx.beginPath(), t.forEach(function(t, e) {
                    "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
                }, this), this.ctx.closePath(), this.ctx
            }, Wt.prototype.font = function(t, e, r, n, i, o) {
                this.setFillStyle(t).font = [e, r, n, i, o].join(" ").split(",")[0]
            }, Wt.prototype.fontShadow = function(t, e, r, n) {
                this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", r).setVariable("shadowBlur", n)
            }, Wt.prototype.clearShadow = function() {
                this.setVariable("shadowColor", "rgba(0,0,0,0)")
            }, Wt.prototype.setOpacity = function(t) {
                this.ctx.globalAlpha = t
            }, Wt.prototype.setTransform = function(t) {
                this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1])
            }, Wt.prototype.setVariable = function(t, e) {
                return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this
            }, Wt.prototype.text = function(t, e, r) {
                this.ctx.fillText(t, e, r)
            }, Wt.prototype.backgroundRepeatShape = function(t, e, r, n, i, o, a, s, h) {
                var c = [
                    ["line", Math.round(i), Math.round(o)],
                    ["line", Math.round(i + a), Math.round(o)],
                    ["line", Math.round(i + a), Math.round(s + o)],
                    ["line", Math.round(i), Math.round(s + o)]
                ];
                this.clip([c], function() {
                    this.renderBackgroundRepeat(t, e, r, n, h[3], h[0])
                }, this)
            }, Wt.prototype.renderBackgroundRepeat = function(t, e, r, n, i, o) {
                var a = Math.round(n.left + e.left + i),
                    s = Math.round(n.top + e.top + o);
                this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, r), "repeat")), this.ctx.translate(a, s), this.ctx.fill(), this.ctx.translate(-a, -s)
            }, Wt.prototype.renderBackgroundGradient = function(t, e) {
                if (t instanceof F) {
                    var r = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
                    t.colorStops.forEach(function(t) {
                        r.addColorStop(t.stop, t.color.toString())
                    }), this.rectangle(e.left, e.top, e.width, e.height, r)
                }
            }, Wt.prototype.resizeImage = function(t, r) {
                var n = t.image;
                if (n.width === r.width && n.height === r.height) return n;
                var i, o = e.createElement("canvas");
                return o.width = r.width, o.height = r.height, i = o.getContext("2d"), i.drawImage(n, 0, 0, n.width, n.height, 0, 0, r.width, r.height), o
            }
    }.call({}, "undefined" != typeof window ? window : void 0, "undefined" != typeof document ? document : void 0),
    function(t, e) {
        "object" == typeof exports && exports && "string" != typeof exports.nodeName ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t.Mustache = {}, e(Mustache))
    }(this, function(t) {
        function e(t) {
            return "function" == typeof t
        }

        function r(t) {
            return E(t) ? "array" : typeof t
        }

        function n(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function i(t, e) {
            return null != t && "object" == typeof t && e in t
        }

        function o(t, e) {
            return m.call(t, e)
        }

        function a(t) {
            return !o(g, t)
        }

        function s(t) {
            return String(t).replace(/[&<>"'\/]/g, function(t) {
                return v[t]
            })
        }

        function h(e, r) {
            function i() {
                if (g && !v)
                    for (; m.length;) delete d[m.pop()];
                else m = [];
                g = !1, v = !1
            }

            function o(t) {
                if ("string" == typeof t && (t = t.split(T, 2)), !E(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                s = new RegExp(n(t[0]) + "\\s*"), h = new RegExp("\\s*" + n(t[1])), f = new RegExp("\\s*" + n("}" + t[1]))
            }
            if (!e) return [];
            var s, h, f, p = [],
                d = [],
                m = [],
                g = !1,
                v = !1;
            o(r || t.tags);
            for (var b, _, w, M, S, A, C = new u(e); !C.eos();) {
                if (b = C.pos, w = C.scanUntil(s))
                    for (var L = 0, P = w.length; L < P; ++L) M = w.charAt(L), a(M) ? m.push(d.length) : v = !0, d.push(["text", M, b, b + 1]), b += 1, "\n" === M && i();
                if (!C.scan(s)) break;
                if (g = !0, _ = C.scan(H) || "name", C.scan(y), "=" === _ ? (w = C.scanUntil(R), C.scan(R), C.scanUntil(h)) : "{" === _ ? (w = C.scanUntil(f), C.scan(x), C.scanUntil(h), _ = "&") : w = C.scanUntil(h), !C.scan(h)) throw new Error("Unclosed tag at " + C.pos);
                if (S = [_, w, b, C.pos], d.push(S), "#" === _ || "^" === _) p.push(S);
                else if ("/" === _) {
                    if (A = p.pop(), !A) throw new Error('Unopened section "' + w + '" at ' + b);
                    if (A[1] !== w) throw new Error('Unclosed section "' + A[1] + '" at ' + b)
                } else "name" === _ || "{" === _ || "&" === _ ? v = !0 : "=" === _ && o(w)
            }
            if (A = p.pop()) throw new Error('Unclosed section "' + A[1] + '" at ' + C.pos);
            return l(c(d))
        }

        function c(t) {
            for (var e, r, n = [], i = 0, o = t.length; i < o; ++i) e = t[i], e && ("text" === e[0] && r && "text" === r[0] ? (r[1] += e[1], r[3] = e[3]) : (n.push(e), r = e));
            return n
        }

        function l(t) {
            for (var e, r, n = [], i = n, o = [], a = 0, s = t.length; a < s; ++a) switch (e = t[a], e[0]) {
                case "#":
                case "^":
                    i.push(e), o.push(e), i = e[4] = [];
                    break;
                case "/":
                    r = o.pop(), r[5] = e[2], i = o.length > 0 ? o[o.length - 1][4] : n;
                    break;
                default:
                    i.push(e)
            }
            return n
        }

        function u(t) {
            this.string = t, this.tail = t, this.pos = 0
        }

        function f(t, e) {
            this.view = t, this.cache = {
                ".": this.view
            }, this.parent = e
        }

        function p() {
            this.cache = {}
        }
        var d = Object.prototype.toString,
            E = Array.isArray || function(t) {
                return "[object Array]" === d.call(t)
            },
            m = RegExp.prototype.test,
            g = /\S/,
            v = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            },
            y = /\s*/,
            T = /\s+/,
            R = /\s*=/,
            x = /\s*\}/,
            H = /#|\^|\/|>|\{|&|=|!/;
        u.prototype.eos = function() {
            return "" === this.tail
        }, u.prototype.scan = function(t) {
            var e = this.tail.match(t);
            if (!e || 0 !== e.index) return "";
            var r = e[0];
            return this.tail = this.tail.substring(r.length), this.pos += r.length, r
        }, u.prototype.scanUntil = function(t) {
            var e, r = this.tail.search(t);
            switch (r) {
                case -1:
                    e = this.tail, this.tail = "";
                    break;
                case 0:
                    e = "";
                    break;
                default:
                    e = this.tail.substring(0, r), this.tail = this.tail.substring(r)
            }
            return this.pos += e.length, e
        }, f.prototype.push = function(t) {
            return new f(t, this)
        }, f.prototype.lookup = function(t) {
            var r, n = this.cache;
            if (n.hasOwnProperty(t)) r = n[t];
            else {
                for (var o, a, s = this, h = !1; s;) {
                    if (t.indexOf(".") > 0)
                        for (r = s.view, o = t.split("."), a = 0; null != r && a < o.length;) a === o.length - 1 && (h = i(r, o[a])), r = r[o[a++]];
                    else r = s.view[t], h = i(s.view, t);
                    if (h) break;
                    s = s.parent
                }
                n[t] = r
            }
            return e(r) && (r = r.call(this.view)), r
        }, p.prototype.clearCache = function() {
            this.cache = {}
        }, p.prototype.parse = function(t, e) {
            var r = this.cache,
                n = r[t];
            return null == n && (n = r[t] = h(t, e)), n
        }, p.prototype.render = function(t, e, r) {
            var n = this.parse(t),
                i = e instanceof f ? e : new f(e);
            return this.renderTokens(n, i, r, t)
        }, p.prototype.renderTokens = function(t, e, r, n) {
            for (var i, o, a, s = "", h = 0, c = t.length; h < c; ++h) a = void 0, i = t[h], o = i[0], "#" === o ? a = this.renderSection(i, e, r, n) : "^" === o ? a = this.renderInverted(i, e, r, n) : ">" === o ? a = this.renderPartial(i, e, r, n) : "&" === o ? a = this.unescapedValue(i, e) : "name" === o ? a = this.escapedValue(i, e) : "text" === o && (a = this.rawValue(i)), void 0 !== a && (s += a);
            return s
        }, p.prototype.renderSection = function(t, r, n, i) {
            function o(t) {
                return a.render(t, r, n)
            }
            var a = this,
                s = "",
                h = r.lookup(t[1]);
            if (h) {
                if (E(h))
                    for (var c = 0, l = h.length; c < l; ++c) s += this.renderTokens(t[4], r.push(h[c]), n, i);
                else if ("object" == typeof h || "string" == typeof h || "number" == typeof h) s += this.renderTokens(t[4], r.push(h), n, i);
                else if (e(h)) {
                    if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");
                    h = h.call(r.view, i.slice(t[3], t[5]), o), null != h && (s += h)
                } else s += this.renderTokens(t[4], r, n, i);
                return s
            }
        }, p.prototype.renderInverted = function(t, e, r, n) {
            var i = e.lookup(t[1]);
            if (!i || E(i) && 0 === i.length) return this.renderTokens(t[4], e, r, n)
        }, p.prototype.renderPartial = function(t, r, n) {
            if (n) {
                var i = e(n) ? n(t[1]) : n[t[1]];
                return null != i ? this.renderTokens(this.parse(i), r, n, i) : void 0
            }
        }, p.prototype.unescapedValue = function(t, e) {
            var r = e.lookup(t[1]);
            if (null != r) return r
        }, p.prototype.escapedValue = function(e, r) {
            var n = r.lookup(e[1]);
            if (null != n) return t.escape(n)
        }, p.prototype.rawValue = function(t) {
            return t[1]
        }, t.name = "mustache.js", t.version = "2.2.0", t.tags = ["{{", "}}"];
        var b = new p;
        t.clearCache = function() {
            return b.clearCache()
        }, t.parse = function(t, e) {
            return b.parse(t, e)
        }, t.render = function(t, e, n) {
            if ("string" != typeof t) throw new TypeError('Invalid template! Template should be a "string" but "' + r(t) + '" was given as the first argument for mustache#render(template, view, partials)');
            return b.render(t, e, n)
        }, t.to_html = function(r, n, i, o) {
            var a = t.render(r, n, i);
            return e(o) ? void o(a) : a
        }, t.escape = s, t.Scanner = u, t.Context = f, t.Writer = p
    }), ! function t(e, r, n) {
        function i(a, s) {
            if (!r[a]) {
                if (!e[a]) {
                    var h = "function" == typeof require && require;
                    if (!s && h) return h(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var l = r[a] = {
                    exports: {}
                };
                e[a][0].call(l.exports, function(t) {
                    var r = e[a][1][t];
                    return i(r ? r : t)
                }, l, l.exports, t, e, r, n)
            }
            return r[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
        return i
    }({
        1: [function(t, e, r) {
            (function(e) {
                if (t(189), t(2), e._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
                e._babelPolyfill = !0
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            189: 189,
            2: 2
        }],
        2: [function(t, e, r) {
            e.exports = t(190)
        }, {
            190: 190
        }],
        3: [function(t, e, r) {
            e.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, {}],
        4: [function(t, e, r) {
            var n = t(84)("unscopables"),
                i = Array.prototype;
            void 0 == i[n] && t(32)(i, n, {}), e.exports = function(t) {
                i[n][t] = !0
            }
        }, {
            32: 32,
            84: 84
        }],
        5: [function(t, e, r) {
            var n = t(39);
            e.exports = function(t) {
                if (!n(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, {
            39: 39
        }],
        6: [function(t, e, r) {
            var n = t(81),
                i = t(77),
                o = t(80);
            e.exports = [].copyWithin || function(t, e) {
                var r = n(this),
                    a = o(r.length),
                    s = i(t, a),
                    h = i(e, a),
                    c = arguments,
                    l = c.length > 2 ? c[2] : void 0,
                    u = Math.min((void 0 === l ? a : i(l, a)) - h, a - s),
                    f = 1;
                for (s > h && h + u > s && (f = -1, h += u - 1, s += u - 1); u-- > 0;) h in r ? r[s] = r[h] : delete r[s], s += f, h += f;
                return r
            }
        }, {
            77: 77,
            80: 80,
            81: 81
        }],
        7: [function(t, e, r) {
            var n = t(81),
                i = t(77),
                o = t(80);
            e.exports = [].fill || function(t) {
                for (var e = n(this, !0), r = o(e.length), a = arguments, s = a.length, h = i(s > 1 ? a[1] : void 0, r), c = s > 2 ? a[2] : void 0, l = void 0 === c ? r : i(c, r); l > h;) e[h++] = t;
                return e
            }
        }, {
            77: 77,
            80: 80,
            81: 81
        }],
        8: [function(t, e, r) {
            var n = t(79),
                i = t(80),
                o = t(77);
            e.exports = function(t) {
                return function(e, r, a) {
                    var s, h = n(e),
                        c = i(h.length),
                        l = o(a, c);
                    if (t && r != r) {
                        for (; c > l;)
                            if (s = h[l++], s != s) return !0
                    } else
                        for (; c > l; l++)
                            if ((t || l in h) && h[l] === r) return t || l;
                    return !t && -1
                }
            }
        }, {
            77: 77,
            79: 79,
            80: 80
        }],
        9: [function(t, e, r) {
            var n = t(18),
                i = t(35),
                o = t(81),
                a = t(80),
                s = t(10);
            e.exports = function(t) {
                var e = 1 == t,
                    r = 2 == t,
                    h = 3 == t,
                    c = 4 == t,
                    l = 6 == t,
                    u = 5 == t || l;
                return function(f, p, d) {
                    for (var E, m, g = o(f), v = i(g), y = n(p, d, 3), T = a(v.length), R = 0, x = e ? s(f, T) : r ? s(f, 0) : void 0; T > R; R++)
                        if ((u || R in v) && (E = v[R], m = y(E, R, g), t))
                            if (e) x[R] = m;
                            else if (m) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return E;
                        case 6:
                            return R;
                        case 2:
                            x.push(E)
                    } else if (c) return !1;
                    return l ? -1 : h || c ? c : x
                }
            }
        }, {
            10: 10,
            18: 18,
            35: 35,
            80: 80,
            81: 81
        }],
        10: [function(t, e, r) {
            var n = t(39),
                i = t(37),
                o = t(84)("species");
            e.exports = function(t, e) {
                var r;
                return i(t) && (r = t.constructor, "function" != typeof r || r !== Array && !i(r.prototype) || (r = void 0), n(r) && (r = r[o], null === r && (r = void 0))), new(void 0 === r ? Array : r)(e)
            }
        }, {
            37: 37,
            39: 39,
            84: 84
        }],
        11: [function(t, e, r) {
            var n = t(12),
                i = t(84)("toStringTag"),
                o = "Arguments" == n(function() {
                    return arguments
                }());
            e.exports = function(t) {
                var e, r, a;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = (e = Object(t))[i]) ? r : o ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a
            }
        }, {
            12: 12,
            84: 84
        }],
        12: [function(t, e, r) {
            var n = {}.toString;
            e.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        }, {}],
        13: [function(t, e, r) {
            var n = t(47),
                i = t(32),
                o = t(54),
                a = t(18),
                s = t(70),
                h = t(20),
                c = t(28),
                l = t(43),
                u = t(45),
                f = t(83)("id"),
                p = t(31),
                d = t(39),
                E = t(66),
                m = t(21),
                g = Object.isExtensible || d,
                v = m ? "_s" : "size",
                y = 0,
                T = function(t, e) {
                    if (!d(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!p(t, f)) {
                        if (!g(t)) return "F";
                        if (!e) return "E";
                        i(t, f, ++y)
                    }
                    return "O" + t[f]
                },
                R = function(t, e) {
                    var r, n = T(e);
                    if ("F" !== n) return t._i[n];
                    for (r = t._f; r; r = r.n)
                        if (r.k == e) return r
                };
            e.exports = {
                getConstructor: function(t, e, r, i) {
                    var l = t(function(t, o) {
                        s(t, l, e), t._i = n.create(null), t._f = void 0, t._l = void 0, t[v] = 0, void 0 != o && c(o, r, t[i], t)
                    });
                    return o(l.prototype, {
                        clear: function() {
                            for (var t = this, e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
                            t._f = t._l = void 0, t[v] = 0
                        },
                        "delete": function(t) {
                            var e = this,
                                r = R(e, t);
                            if (r) {
                                var n = r.n,
                                    i = r.p;
                                delete e._i[r.i], r.r = !0, i && (i.n = n), n && (n.p = i), e._f == r && (e._f = n), e._l == r && (e._l = i), e[v]--
                            }
                            return !!r
                        },
                        forEach: function(t) {
                            for (var e, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                                for (r(e.v, e.k, this); e && e.r;) e = e.p
                        },
                        has: function(t) {
                            return !!R(this, t)
                        }
                    }), m && n.setDesc(l.prototype, "size", {
                        get: function() {
                            return h(this[v])
                        }
                    }), l
                },
                def: function(t, e, r) {
                    var n, i, o = R(t, e);
                    return o ? o.v = r : (t._l = o = {
                        i: i = T(e, !0),
                        k: e,
                        v: r,
                        p: n = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = o), n && (n.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t
                },
                getEntry: R,
                setStrong: function(t, e, r) {
                    l(t, e, function(t, e) {
                        this._t = t, this._k = e, this._l = void 0
                    }, function() {
                        for (var t = this, e = t._k, r = t._l; r && r.r;) r = r.p;
                        return t._t && (t._l = r = r ? r.n : t._t._f) ? "keys" == e ? u(0, r.k) : "values" == e ? u(0, r.v) : u(0, [r.k, r.v]) : (t._t = void 0, u(1))
                    }, r ? "entries" : "values", !r, !0), E(e)
                }
            }
        }, {
            18: 18,
            20: 20,
            21: 21,
            28: 28,
            31: 31,
            32: 32,
            39: 39,
            43: 43,
            45: 45,
            47: 47,
            54: 54,
            66: 66,
            70: 70,
            83: 83
        }],
        14: [function(t, e, r) {
            var n = t(28),
                i = t(11);
            e.exports = function(t) {
                return function() {
                    if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
                    var e = [];
                    return n(this, !1, e.push, e), e
                }
            }
        }, {
            11: 11,
            28: 28
        }],
        15: [function(t, e, r) {
            var n = t(32),
                i = t(54),
                o = t(5),
                a = t(70),
                s = t(28),
                h = t(9),
                c = t(83)("weak"),
                l = t(39),
                u = t(31),
                f = Object.isExtensible || l,
                p = h(5),
                d = h(6),
                E = 0,
                m = function(t) {
                    return t._l || (t._l = new g)
                },
                g = function() {
                    this.a = []
                },
                v = function(t, e) {
                    return p(t.a, function(t) {
                        return t[0] === e
                    })
                };
            g.prototype = {
                get: function(t) {
                    var e = v(this, t);
                    return e ? e[1] : void 0
                },
                has: function(t) {
                    return !!v(this, t)
                },
                set: function(t, e) {
                    var r = v(this, t);
                    r ? r[1] = e : this.a.push([t, e])
                },
                "delete": function(t) {
                    var e = d(this.a, function(e) {
                        return e[0] === t
                    });
                    return ~e && this.a.splice(e, 1), !!~e
                }
            }, e.exports = {
                getConstructor: function(t, e, r, n) {
                    var o = t(function(t, i) {
                        a(t, o, e), t._i = E++, t._l = void 0, void 0 != i && s(i, r, t[n], t)
                    });
                    return i(o.prototype, {
                        "delete": function(t) {
                            return !!l(t) && (f(t) ? u(t, c) && u(t[c], this._i) && delete t[c][this._i] : m(this)["delete"](t))
                        },
                        has: function(t) {
                            return !!l(t) && (f(t) ? u(t, c) && u(t[c], this._i) : m(this).has(t))
                        }
                    }), o
                },
                def: function(t, e, r) {
                    return f(o(e)) ? (u(e, c) || n(e, c, {}), e[c][t._i] = r) : m(t).set(e, r), t
                },
                frozenStore: m,
                WEAK: c
            }
        }, {
            28: 28,
            31: 31,
            32: 32,
            39: 39,
            5: 5,
            54: 54,
            70: 70,
            83: 83,
            9: 9
        }],
        16: [function(t, e, r) {
            var n = t(30),
                i = t(19),
                o = t(62),
                a = t(54),
                s = t(28),
                h = t(70),
                c = t(39),
                l = t(25),
                u = t(44),
                f = t(67);
            e.exports = function(t, e, r, p, d, E) {
                var m = n[t],
                    g = m,
                    v = d ? "set" : "add",
                    y = g && g.prototype,
                    T = {},
                    R = function(t) {
                        var e = y[t];
                        o(y, t, "delete" == t ? function(t) {
                            return !(E && !c(t)) && e.call(this, 0 === t ? 0 : t)
                        } : "has" == t ? function(t) {
                            return !(E && !c(t)) && e.call(this, 0 === t ? 0 : t)
                        } : "get" == t ? function(t) {
                            return E && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                        } : "add" == t ? function(t) {
                            return e.call(this, 0 === t ? 0 : t), this
                        } : function(t, r) {
                            return e.call(this, 0 === t ? 0 : t, r), this
                        })
                    };
                if ("function" == typeof g && (E || y.forEach && !l(function() {
                        (new g).entries().next()
                    }))) {
                    var x, H = new g,
                        b = H[v](E ? {} : -0, 1) != H,
                        _ = l(function() {
                            H.has(1)
                        }),
                        w = u(function(t) {
                            new g(t)
                        });
                    w || (g = e(function(e, r) {
                        h(e, g, t);
                        var n = new m;
                        return void 0 != r && s(r, d, n[v], n), n
                    }), g.prototype = y, y.constructor = g), E || H.forEach(function(t, e) {
                        x = 1 / e === -(1 / 0)
                    }), (_ || x) && (R("delete"), R("has"), d && R("get")), (x || b) && R(v), E && y.clear && delete y.clear
                } else g = p.getConstructor(e, t, d, v), a(g.prototype, r);
                return f(g, t), T[t] = g, i(i.G + i.W + i.F * (g != m), T), E || p.setStrong(g, t, d), g
            }
        }, {
            19: 19,
            25: 25,
            28: 28,
            30: 30,
            39: 39,
            44: 44,
            54: 54,
            62: 62,
            67: 67,
            70: 70
        }],
        17: [function(t, e, r) {
            var n = e.exports = {
                version: "1.2.5"
            };
            "number" == typeof __e && (__e = n)
        }, {}],
        18: [function(t, e, r) {
            var n = t(3);
            e.exports = function(t, e, r) {
                if (n(t), void 0 === e) return t;
                switch (r) {
                    case 1:
                        return function(r) {
                            return t.call(e, r)
                        };
                    case 2:
                        return function(r, n) {
                            return t.call(e, r, n)
                        };
                    case 3:
                        return function(r, n, i) {
                            return t.call(e, r, n, i)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }, {
            3: 3
        }],
        19: [function(t, e, r) {
            var n = t(30),
                i = t(17),
                o = t(32),
                a = t(62),
                s = "prototype",
                h = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                c = function(t, e, r) {
                    var l, u, f, p, d = t & c.G,
                        E = t & c.P,
                        m = d ? n : t & c.S ? n[e] || (n[e] = {}) : (n[e] || {})[s],
                        g = d ? i : i[e] || (i[e] = {});
                    d && (r = e);
                    for (l in r) u = !(t & c.F) && m && l in m, f = (u ? m : r)[l], p = t & c.B && u ? h(f, n) : E && "function" == typeof f ? h(Function.call, f) : f, m && !u && a(m, l, f), g[l] != f && o(g, l, p), E && ((g[s] || (g[s] = {}))[l] = f)
                };
            n.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, e.exports = c
        }, {
            17: 17,
            30: 30,
            32: 32,
            62: 62
        }],
        20: [function(t, e, r) {
            e.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, {}],
        21: [function(t, e, r) {
            e.exports = !t(25)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, {
            25: 25
        }],
        22: [function(t, e, r) {
            var n = t(39),
                i = t(30).document,
                o = n(i) && n(i.createElement);
            e.exports = function(t) {
                return o ? i.createElement(t) : {}
            }
        }, {
            30: 30,
            39: 39
        }],
        23: [function(t, e, r) {
            var n = t(47);
            e.exports = function(t) {
                var e = n.getKeys(t),
                    r = n.getSymbols;
                if (r)
                    for (var i, o = r(t), a = n.isEnum, s = 0; o.length > s;) a.call(t, i = o[s++]) && e.push(i);
                return e
            }
        }, {
            47: 47
        }],
        24: [function(t, e, r) {
            var n = t(84)("match");
            e.exports = function(t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (r) {
                    try {
                        return e[n] = !1, !"/./" [t](e)
                    } catch (i) {}
                }
                return !0
            }
        }, {
            84: 84
        }],
        25: [function(t, e, r) {
            e.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        }, {}],
        26: [function(t, e, r) {
            var n = t(32),
                i = t(62),
                o = t(25),
                a = t(20),
                s = t(84);
            e.exports = function(t, e, r) {
                var h = s(t),
                    c = "" [t];
                o(function() {
                    var e = {};
                    return e[h] = function() {
                        return 7
                    }, 7 != "" [t](e)
                }) && (i(String.prototype, t, r(a, h, c)), n(RegExp.prototype, h, 2 == e ? function(t, e) {
                    return c.call(t, this, e)
                } : function(t) {
                    return c.call(t, this)
                }))
            }
        }, {
            20: 20,
            25: 25,
            32: 32,
            62: 62,
            84: 84
        }],
        27: [function(t, e, r) {
            var n = t(5);
            e.exports = function() {
                var t = n(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
            }
        }, {
            5: 5
        }],
        28: [function(t, e, r) {
            var n = t(18),
                i = t(41),
                o = t(36),
                a = t(5),
                s = t(80),
                h = t(85);
            e.exports = function(t, e, r, c) {
                var l, u, f, p = h(t),
                    d = n(r, c, e ? 2 : 1),
                    E = 0;
                if ("function" != typeof p) throw TypeError(t + " is not iterable!");
                if (o(p))
                    for (l = s(t.length); l > E; E++) e ? d(a(u = t[E])[0], u[1]) : d(t[E]);
                else
                    for (f = p.call(t); !(u = f.next()).done;) i(f, d, u.value, e)
            }
        }, {
            18: 18,
            36: 36,
            41: 41,
            5: 5,
            80: 80,
            85: 85
        }],
        29: [function(t, e, r) {
            var n = {}.toString,
                i = t(79),
                o = t(47).getNames,
                a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                s = function(t) {
                    try {
                        return o(t)
                    } catch (e) {
                        return a.slice()
                    }
                };
            e.exports.get = function(t) {
                return a && "[object Window]" == n.call(t) ? s(t) : o(i(t))
            }
        }, {
            47: 47,
            79: 79
        }],
        30: [function(t, e, r) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, {}],
        31: [function(t, e, r) {
            var n = {}.hasOwnProperty;
            e.exports = function(t, e) {
                return n.call(t, e)
            }
        }, {}],
        32: [function(t, e, r) {
            var n = t(47),
                i = t(61);
            e.exports = t(21) ? function(t, e, r) {
                return n.setDesc(t, e, i(1, r))
            } : function(t, e, r) {
                return t[e] = r, t
            }
        }, {
            21: 21,
            47: 47,
            61: 61
        }],
        33: [function(t, e, r) {
            e.exports = t(30).document && document.documentElement
        }, {
            30: 30
        }],
        34: [function(t, e, r) {
            e.exports = function(t, e, r) {
                var n = void 0 === r;
                switch (e.length) {
                    case 0:
                        return n ? t() : t.call(r);
                    case 1:
                        return n ? t(e[0]) : t.call(r, e[0]);
                    case 2:
                        return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
                    case 3:
                        return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
                    case 4:
                        return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
                }
                return t.apply(r, e)
            }
        }, {}],
        35: [function(t, e, r) {
            var n = t(12);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == n(t) ? t.split("") : Object(t)
            }
        }, {
            12: 12
        }],
        36: [function(t, e, r) {
            var n = t(46),
                i = t(84)("iterator"),
                o = Array.prototype;
            e.exports = function(t) {
                return (n.Array || o[i]) === t
            }
        }, {
            46: 46,
            84: 84
        }],
        37: [function(t, e, r) {
            var n = t(12);
            e.exports = Array.isArray || function(t) {
                return "Array" == n(t)
            }
        }, {
            12: 12
        }],
        38: [function(t, e, r) {
            var n = t(39),
                i = Math.floor;
            e.exports = function(t) {
                return !n(t) && isFinite(t) && i(t) === t
            }
        }, {
            39: 39
        }],
        39: [function(t, e, r) {
            e.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, {}],
        40: [function(t, e, r) {
            var n = t(39),
                i = t(12),
                o = t(84)("match");
            e.exports = function(t) {
                var e;
                return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
            }
        }, {
            12: 12,
            39: 39,
            84: 84
        }],
        41: [function(t, e, r) {
            var n = t(5);
            e.exports = function(t, e, r, i) {
                try {
                    return i ? e(n(r)[0], r[1]) : e(r)
                } catch (o) {
                    var a = t["return"];
                    throw void 0 !== a && n(a.call(t)), o
                }
            }
        }, {
            5: 5
        }],
        42: [function(t, e, r) {
            var n = t(47),
                i = t(61),
                o = t(67),
                a = {};
            t(32)(a, t(84)("iterator"), function() {
                return this
            }), e.exports = function(t, e, r) {
                t.prototype = n.create(a, {
                    next: i(1, r)
                }), o(t, e + " Iterator")
            }
        }, {
            32: 32,
            47: 47,
            61: 61,
            67: 67,
            84: 84
        }],
        43: [function(t, e, r) {
            var n = t(49),
                i = t(19),
                o = t(62),
                a = t(32),
                s = t(31),
                h = t(84)("iterator"),
                c = t(46),
                l = t(42),
                u = t(67),
                f = t(47).getProto,
                p = !([].keys && "next" in [].keys()),
                d = "@@iterator",
                E = "keys",
                m = "values",
                g = function() {
                    return this
                };
            e.exports = function(t, e, r, v, y, T, R) {
                l(r, e, v);
                var x, H, b = function(t) {
                        if (!p && t in w) return w[t];
                        switch (t) {
                            case E:
                                return function() {
                                    return new r(this, t)
                                };
                            case m:
                                return function() {
                                    return new r(this, t)
                                }
                        }
                        return function() {
                            return new r(this, t)
                        }
                    },
                    _ = e + " Iterator",
                    w = t.prototype,
                    M = w[h] || w[d] || y && w[y],
                    S = M || b(y);
                if (M) {
                    var A = f(S.call(new t));
                    u(A, _, !0), !n && s(w, d) && a(A, h, g)
                }
                if (n && !R || !p && h in w || a(w, h, S), c[e] = S, c[_] = g, y)
                    if (x = {
                            values: y == m ? S : b(m),
                            keys: T ? S : b(E),
                            entries: y != m ? S : b("entries")
                        }, R)
                        for (H in x) H in w || o(w, H, x[H]);
                    else i(i.P + i.F * p, e, x);
                return x
            }
        }, {
            19: 19,
            31: 31,
            32: 32,
            42: 42,
            46: 46,
            47: 47,
            49: 49,
            62: 62,
            67: 67,
            84: 84
        }],
        44: [function(t, e, r) {
            var n = t(84)("iterator"),
                i = !1;
            try {
                var o = [7][n]();
                o["return"] = function() {
                    i = !0
                }, Array.from(o, function() {
                    throw 2
                })
            } catch (a) {}
            e.exports = function(t, e) {
                if (!e && !i) return !1;
                var r = !1;
                try {
                    var o = [7],
                        a = o[n]();
                    a.next = function() {
                        r = !0
                    }, o[n] = function() {
                        return a
                    }, t(o)
                } catch (s) {}
                return r
            }
        }, {
            84: 84
        }],
        45: [function(t, e, r) {
            e.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }, {}],
        46: [function(t, e, r) {
            e.exports = {}
        }, {}],
        47: [function(t, e, r) {
            var n = Object;
            e.exports = {
                create: n.create,
                getProto: n.getPrototypeOf,
                isEnum: {}.propertyIsEnumerable,
                getDesc: n.getOwnPropertyDescriptor,
                setDesc: n.defineProperty,
                setDescs: n.defineProperties,
                getKeys: n.keys,
                getNames: n.getOwnPropertyNames,
                getSymbols: n.getOwnPropertySymbols,
                each: [].forEach
            }
        }, {}],
        48: [function(t, e, r) {
            var n = t(47),
                i = t(79);
            e.exports = function(t, e) {
                for (var r, o = i(t), a = n.getKeys(o), s = a.length, h = 0; s > h;)
                    if (o[r = a[h++]] === e) return r
            }
        }, {
            47: 47,
            79: 79
        }],
        49: [function(t, e, r) {
            e.exports = !1
        }, {}],
        50: [function(t, e, r) {
            e.exports = Math.expm1 || function(t) {
                return 0 == (t = +t) ? t : t > -1e-6 && 1e-6 > t ? t + t * t / 2 : Math.exp(t) - 1
            }
        }, {}],
        51: [function(t, e, r) {
            e.exports = Math.log1p || function(t) {
                return (t = +t) > -1e-8 && 1e-8 > t ? t - t * t / 2 : Math.log(1 + t)
            }
        }, {}],
        52: [function(t, e, r) {
            e.exports = Math.sign || function(t) {
                return 0 == (t = +t) || t != t ? t : 0 > t ? -1 : 1
            }
        }, {}],
        53: [function(t, e, r) {
            var n, i, o, a = t(30),
                s = t(76).set,
                h = a.MutationObserver || a.WebKitMutationObserver,
                c = a.process,
                l = "process" == t(12)(c),
                u = function() {
                    var t, e;
                    for (l && (t = c.domain) && (c.domain = null, t.exit()); n;) e = n.domain, e && e.enter(), n.fn.call(), e && e.exit(), n = n.next;
                    i = void 0, t && t.enter()
                };
            if (l) o = function() {
                c.nextTick(u)
            };
            else if (h) {
                var f = 1,
                    p = document.createTextNode("");
                new h(u).observe(p, {
                    characterData: !0
                }), o = function() {
                    p.data = f = -f
                }
            } else o = function() {
                s.call(a, u)
            };
            e.exports = function(t) {
                var e = {
                    fn: t,
                    next: void 0,
                    domain: l && c.domain
                };
                i && (i.next = e), n || (n = e, o()), i = e
            }
        }, {
            12: 12,
            30: 30,
            76: 76
        }],
        54: [function(t, e, r) {
            var n = t(62);
            e.exports = function(t, e) {
                for (var r in e) n(t, r, e[r]);
                return t
            }
        }, {
            62: 62
        }],
        55: [function(t, e, r) {
            var n = t(47),
                i = t(81),
                o = t(35);
            e.exports = t(25)(function() {
                var t = Object.assign,
                    e = {},
                    r = {},
                    n = Symbol(),
                    i = "abcdefghijklmnopqrst";
                return e[n] = 7, i.split("").forEach(function(t) {
                    r[t] = t
                }), 7 != t({}, e)[n] || Object.keys(t({}, r)).join("") != i
            }) ? function(t, e) {
                for (var r = i(t), a = arguments, s = a.length, h = 1, c = n.getKeys, l = n.getSymbols, u = n.isEnum; s > h;)
                    for (var f, p = o(a[h++]), d = l ? c(p).concat(l(p)) : c(p), E = d.length, m = 0; E > m;) u.call(p, f = d[m++]) && (r[f] = p[f]);
                return r
            } : Object.assign
        }, {
            25: 25,
            35: 35,
            47: 47,
            81: 81
        }],
        56: [function(t, e, r) {
            var n = (t(19), t(17)),
                i = t(25);
            e.exports = function(e, r) {
                var o = t(19),
                    a = (n.Object || {})[e] || Object[e],
                    s = {};
                s[e] = r(a), o(o.S + o.F * i(function() {
                    a(1)
                }), "Object", s)
            }
        }, {
            17: 17,
            19: 19,
            25: 25
        }],
        57: [function(t, e, r) {
            var n = t(47),
                i = t(79),
                o = n.isEnum;
            e.exports = function(t) {
                return function(e) {
                    for (var r, a = i(e), s = n.getKeys(a), h = s.length, c = 0, l = []; h > c;) o.call(a, r = s[c++]) && l.push(t ? [r, a[r]] : a[r]);
                    return l
                }
            }
        }, {
            47: 47,
            79: 79
        }],
        58: [function(t, e, r) {
            var n = t(47),
                i = t(5),
                o = t(30).Reflect;
            e.exports = o && o.ownKeys || function(t) {
                var e = n.getNames(i(t)),
                    r = n.getSymbols;
                return r ? e.concat(r(t)) : e
            }
        }, {
            30: 30,
            47: 47,
            5: 5
        }],
        59: [function(t, e, r) {
            var n = t(60),
                i = t(34),
                o = t(3);
            e.exports = function() {
                for (var t = o(this), e = arguments.length, r = Array(e), a = 0, s = n._, h = !1; e > a;)(r[a] = arguments[a++]) === s && (h = !0);
                return function() {
                    var n, o = this,
                        a = arguments,
                        c = a.length,
                        l = 0,
                        u = 0;
                    if (!h && !c) return i(t, r, o);
                    if (n = r.slice(), h)
                        for (; e > l; l++) n[l] === s && (n[l] = a[u++]);
                    for (; c > u;) n.push(a[u++]);
                    return i(t, n, o)
                }
            }
        }, {
            3: 3,
            34: 34,
            60: 60
        }],
        60: [function(t, e, r) {
            e.exports = t(30)
        }, {
            30: 30
        }],
        61: [function(t, e, r) {
            e.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }, {}],
        62: [function(t, e, r) {
            var n = t(30),
                i = t(32),
                o = t(83)("src"),
                a = "toString",
                s = Function[a],
                h = ("" + s).split(a);
            t(17).inspectSource = function(t) {
                return s.call(t)
            }, (e.exports = function(t, e, r, a) {
                "function" == typeof r && (r.hasOwnProperty(o) || i(r, o, t[e] ? "" + t[e] : h.join(String(e))), r.hasOwnProperty("name") || i(r, "name", e)), t === n ? t[e] = r : (a || delete t[e], i(t, e, r))
            })(Function.prototype, a, function() {
                return "function" == typeof this && this[o] || s.call(this)
            })
        }, {
            17: 17,
            30: 30,
            32: 32,
            83: 83
        }],
        63: [function(t, e, r) {
            e.exports = function(t, e) {
                var r = e === Object(e) ? function(t) {
                    return e[t]
                } : e;
                return function(e) {
                    return String(e).replace(t, r)
                }
            }
        }, {}],
        64: [function(t, e, r) {
            e.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
            }
        }, {}],
        65: [function(t, e, r) {
            var n = t(47).getDesc,
                i = t(39),
                o = t(5),
                a = function(t, e) {
                    if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, r, i) {
                    try {
                        i = t(18)(Function.call, n(Object.prototype, "__proto__").set, 2), i(e, []), r = !(e instanceof Array)
                    } catch (o) {
                        r = !0
                    }
                    return function(t, e) {
                        return a(t, e), r ? t.__proto__ = e : i(t, e), t
                    }
                }({}, !1) : void 0),
                check: a
            }
        }, {
            18: 18,
            39: 39,
            47: 47,
            5: 5
        }],
        66: [function(t, e, r) {
            var n = t(30),
                i = t(47),
                o = t(21),
                a = t(84)("species");
            e.exports = function(t) {
                var e = n[t];
                o && e && !e[a] && i.setDesc(e, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }, {
            21: 21,
            30: 30,
            47: 47,
            84: 84
        }],
        67: [function(t, e, r) {
            var n = t(47).setDesc,
                i = t(31),
                o = t(84)("toStringTag");
            e.exports = function(t, e, r) {
                t && !i(t = r ? t : t.prototype, o) && n(t, o, {
                    configurable: !0,
                    value: e
                })
            }
        }, {
            31: 31,
            47: 47,
            84: 84
        }],
        68: [function(t, e, r) {
            var n = t(30),
                i = "__core-js_shared__",
                o = n[i] || (n[i] = {});
            e.exports = function(t) {
                return o[t] || (o[t] = {})
            }
        }, {
            30: 30
        }],
        69: [function(t, e, r) {
            var n = t(5),
                i = t(3),
                o = t(84)("species");
            e.exports = function(t, e) {
                var r, a = n(t).constructor;
                return void 0 === a || void 0 == (r = n(a)[o]) ? e : i(r)
            }
        }, {
            3: 3,
            5: 5,
            84: 84
        }],
        70: [function(t, e, r) {
            e.exports = function(t, e, r) {
                if (!(t instanceof e)) throw TypeError(r + ": use the 'new' operator!");
                return t
            }
        }, {}],
        71: [function(t, e, r) {
            var n = t(78),
                i = t(20);
            e.exports = function(t) {
                return function(e, r) {
                    var o, a, s = String(i(e)),
                        h = n(r),
                        c = s.length;
                    return 0 > h || h >= c ? t ? "" : void 0 : (o = s.charCodeAt(h), 55296 > o || o > 56319 || h + 1 === c || (a = s.charCodeAt(h + 1)) < 56320 || a > 57343 ? t ? s.charAt(h) : o : t ? s.slice(h, h + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
                }
            }
        }, {
            20: 20,
            78: 78
        }],
        72: [function(t, e, r) {
            var n = t(40),
                i = t(20);
            e.exports = function(t, e, r) {
                if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
                return String(i(t))
            }
        }, {
            20: 20,
            40: 40
        }],
        73: [function(t, e, r) {
            var n = t(80),
                i = t(74),
                o = t(20);
            e.exports = function(t, e, r, a) {
                var s = String(o(t)),
                    h = s.length,
                    c = void 0 === r ? " " : String(r),
                    l = n(e);
                if (h >= l) return s;
                "" == c && (c = " ");
                var u = l - h,
                    f = i.call(c, Math.ceil(u / c.length));
                return f.length > u && (f = f.slice(0, u)), a ? f + s : s + f
            }
        }, {
            20: 20,
            74: 74,
            80: 80
        }],
        74: [function(t, e, r) {
            var n = t(78),
                i = t(20);
            e.exports = function(t) {
                var e = String(i(this)),
                    r = "",
                    o = n(t);
                if (0 > o || o == 1 / 0) throw RangeError("Count can't be negative");
                for (; o > 0;
                    (o >>>= 1) && (e += e)) 1 & o && (r += e);
                return r
            }
        }, {
            20: 20,
            78: 78
        }],
        75: [function(t, e, r) {
            var n = t(19),
                i = t(20),
                o = t(25),
                a = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
                s = "[" + a + "]",
                h = "​",
                c = RegExp("^" + s + s + "*"),
                l = RegExp(s + s + "*$"),
                u = function(t, e) {
                    var r = {};
                    r[t] = e(f), n(n.P + n.F * o(function() {
                        return !!a[t]() || h[t]() != h
                    }), "String", r)
                },
                f = u.trim = function(t, e) {
                    return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
                };
            e.exports = u
        }, {
            19: 19,
            20: 20,
            25: 25
        }],
        76: [function(t, e, r) {
            var n, i, o, a = t(18),
                s = t(34),
                h = t(33),
                c = t(22),
                l = t(30),
                u = l.process,
                f = l.setImmediate,
                p = l.clearImmediate,
                d = l.MessageChannel,
                E = 0,
                m = {},
                g = "onreadystatechange",
                v = function() {
                    var t = +this;
                    if (m.hasOwnProperty(t)) {
                        var e = m[t];
                        delete m[t], e()
                    }
                },
                y = function(t) {
                    v.call(t.data)
                };
            f && p || (f = function(t) {
                for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
                return m[++E] = function() {
                    s("function" == typeof t ? t : Function(t), e)
                }, n(E), E
            }, p = function(t) {
                delete m[t]
            }, "process" == t(12)(u) ? n = function(t) {
                u.nextTick(a(v, t, 1))
            } : d ? (i = new d, o = i.port2, i.port1.onmessage = y, n = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(t) {
                l.postMessage(t + "", "*")
            }, l.addEventListener("message", y, !1)) : n = g in c("script") ? function(t) {
                h.appendChild(c("script"))[g] = function() {
                    h.removeChild(this), v.call(t)
                }
            } : function(t) {
                setTimeout(a(v, t, 1), 0)
            }), e.exports = {
                set: f,
                clear: p
            }
        }, {
            12: 12,
            18: 18,
            22: 22,
            30: 30,
            33: 33,
            34: 34
        }],
        77: [function(t, e, r) {
            var n = t(78),
                i = Math.max,
                o = Math.min;
            e.exports = function(t, e) {
                return t = n(t), 0 > t ? i(t + e, 0) : o(t, e)
            }
        }, {
            78: 78
        }],
        78: [function(t, e, r) {
            var n = Math.ceil,
                i = Math.floor;
            e.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
            }
        }, {}],
        79: [function(t, e, r) {
            var n = t(35),
                i = t(20);
            e.exports = function(t) {
                return n(i(t))
            }
        }, {
            20: 20,
            35: 35
        }],
        80: [function(t, e, r) {
            var n = t(78),
                i = Math.min;
            e.exports = function(t) {
                return t > 0 ? i(n(t), 9007199254740991) : 0
            }
        }, {
            78: 78
        }],
        81: [function(t, e, r) {
            var n = t(20);
            e.exports = function(t) {
                return Object(n(t))
            }
        }, {
            20: 20
        }],
        82: [function(t, e, r) {
            var n = t(39);
            e.exports = function(t, e) {
                if (!n(t)) return t;
                var r, i;
                if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
                if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
                if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        }, {
            39: 39
        }],
        83: [function(t, e, r) {
            var n = 0,
                i = Math.random();
            e.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
            }
        }, {}],
        84: [function(t, e, r) {
            var n = t(68)("wks"),
                i = t(83),
                o = t(30).Symbol;
            e.exports = function(t) {
                return n[t] || (n[t] = o && o[t] || (o || i)("Symbol." + t))
            }
        }, {
            30: 30,
            68: 68,
            83: 83
        }],
        85: [function(t, e, r) {
            var n = t(11),
                i = t(84)("iterator"),
                o = t(46);
            e.exports = t(17).getIteratorMethod = function(t) {
                return void 0 != t ? t[i] || t["@@iterator"] || o[n(t)] : void 0
            }
        }, {
            11: 11,
            17: 17,
            46: 46,
            84: 84
        }],
        86: [function(t, e, r) {
            var n, i = t(47),
                o = t(21),
                a = t(61),
                s = t(33),
                h = t(22),
                c = t(31),
                l = t(12),
                u = t(19),
                f = t(34),
                p = t(9),
                d = t(83)("__proto__"),
                E = t(39),
                m = t(5),
                g = t(3),
                v = t(81),
                y = t(79),
                T = t(78),
                R = t(77),
                x = t(80),
                H = t(35),
                b = t(25),
                _ = Object.prototype,
                w = [],
                M = w.slice,
                S = w.join,
                A = i.setDesc,
                C = i.getDesc,
                L = i.setDescs,
                P = t(8)(!1),
                F = {};
            o || (n = !b(function() {
                return 7 != A(h("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }), i.setDesc = function(t, e, r) {
                if (n) try {
                    return A(t, e, r)
                } catch (i) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
                return "value" in r && (m(t)[e] = r.value), t
            }, i.getDesc = function(t, e) {
                if (n) try {
                    return C(t, e)
                } catch (r) {}
                return c(t, e) ? a(!_.propertyIsEnumerable.call(t, e), t[e]) : void 0
            }, i.setDescs = L = function(t, e) {
                m(t);
                for (var r, n = i.getKeys(e), o = n.length, a = 0; o > a;) i.setDesc(t, r = n[a++], e[r]);
                return t
            }), u(u.S + u.F * !o, "Object", {
                getOwnPropertyDescriptor: i.getDesc,
                defineProperty: i.setDesc,
                defineProperties: L
            });
            var D = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
                B = D.concat("length", "prototype"),
                k = D.length,
                O = function() {
                    var t, e = h("iframe"),
                        r = k,
                        n = ">";
                    for (e.style.display = "none",
                        s.appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + n), t.close(), O = t.F; r--;) delete O.prototype[D[r]];
                    return O()
                },
                U = function(t, e) {
                    return function(r) {
                        var n, i = y(r),
                            o = 0,
                            a = [];
                        for (n in i) n != d && c(i, n) && a.push(n);
                        for (; e > o;) c(i, n = t[o++]) && (~P(a, n) || a.push(n));
                        return a
                    }
                },
                V = function() {};
            u(u.S, "Object", {
                getPrototypeOf: i.getProto = i.getProto || function(t) {
                    return t = v(t), c(t, d) ? t[d] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? _ : null
                },
                getOwnPropertyNames: i.getNames = i.getNames || U(B, B.length, !0),
                create: i.create = i.create || function(t, e) {
                    var r;
                    return null !== t ? (V.prototype = m(t), r = new V, V.prototype = null, r[d] = t) : r = O(), void 0 === e ? r : L(r, e)
                },
                keys: i.getKeys = i.getKeys || U(D, k, !1)
            });
            var N = function(t, e, r) {
                if (!(e in F)) {
                    for (var n = [], i = 0; e > i; i++) n[i] = "a[" + i + "]";
                    F[e] = Function("F,a", "return new F(" + n.join(",") + ")")
                }
                return F[e](t, r)
            };
            u(u.P, "Function", {
                bind: function(t) {
                    var e = g(this),
                        r = M.call(arguments, 1),
                        n = function() {
                            var i = r.concat(M.call(arguments));
                            return this instanceof n ? N(e, i.length, i) : f(e, i, t)
                        };
                    return E(e.prototype) && (n.prototype = e.prototype), n
                }
            });
            var z = b(function() {
                s && M.call(s)
            });
            u(u.P + u.F * z, "Array", {
                slice: function(t, e) {
                    var r = x(this.length),
                        n = l(this);
                    if (e = void 0 === e ? r : e, "Array" == n) return M.call(this, t, e);
                    for (var i = R(t, r), o = R(e, r), a = x(o - i), s = Array(a), h = 0; a > h; h++) s[h] = "String" == n ? this.charAt(i + h) : this[i + h];
                    return s
                }
            }), u(u.P + u.F * (H != Object), "Array", {
                join: function() {
                    return S.apply(H(this), arguments)
                }
            }), u(u.S, "Array", {
                isArray: t(37)
            });
            var I = function(t) {
                    return function(e, r) {
                        g(e);
                        var n = H(this),
                            i = x(n.length),
                            o = t ? i - 1 : 0,
                            a = t ? -1 : 1;
                        if (arguments.length < 2)
                            for (;;) {
                                if (o in n) {
                                    r = n[o], o += a;
                                    break
                                }
                                if (o += a, t ? 0 > o : o >= i) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; t ? o >= 0 : i > o; o += a) o in n && (r = e(r, n[o], o, this));
                        return r
                    }
                },
                G = function(t) {
                    return function(e) {
                        return t(this, e, arguments[1])
                    }
                };
            u(u.P, "Array", {
                forEach: i.each = i.each || G(p(0)),
                map: G(p(1)),
                filter: G(p(2)),
                some: G(p(3)),
                every: G(p(4)),
                reduce: I(!1),
                reduceRight: I(!0),
                indexOf: G(P),
                lastIndexOf: function(t, e) {
                    var r = y(this),
                        n = x(r.length),
                        i = n - 1;
                    for (arguments.length > 1 && (i = Math.min(i, T(e))), 0 > i && (i = x(n + i)); i >= 0; i--)
                        if (i in r && r[i] === t) return i;
                    return -1
                }
            }), u(u.S, "Date", {
                now: function() {
                    return +new Date
                }
            });
            var j = function(t) {
                    return t > 9 ? t : "0" + t
                },
                W = new Date(-5e13 - 1),
                X = !(W.toISOString && "0385-07-25T07:06:39.999Z" == W.toISOString() && b(function() {
                    new Date(NaN).toISOString()
                }));
            u(u.P + u.F * X, "Date", {
                toISOString: function() {
                    if (!isFinite(this)) throw RangeError("Invalid time value");
                    var t = this,
                        e = t.getUTCFullYear(),
                        r = t.getUTCMilliseconds(),
                        n = 0 > e ? "-" : e > 9999 ? "+" : "";
                    return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + j(t.getUTCMonth() + 1) + "-" + j(t.getUTCDate()) + "T" + j(t.getUTCHours()) + ":" + j(t.getUTCMinutes()) + ":" + j(t.getUTCSeconds()) + "." + (r > 99 ? r : "0" + j(r)) + "Z"
                }
            })
        }, {
            12: 12,
            19: 19,
            21: 21,
            22: 22,
            25: 25,
            3: 3,
            31: 31,
            33: 33,
            34: 34,
            35: 35,
            37: 37,
            39: 39,
            47: 47,
            5: 5,
            61: 61,
            77: 77,
            78: 78,
            79: 79,
            8: 8,
            80: 80,
            81: 81,
            83: 83,
            9: 9
        }],
        87: [function(t, e, r) {
            var n = t(19);
            n(n.P, "Array", {
                copyWithin: t(6)
            }), t(4)("copyWithin")
        }, {
            19: 19,
            4: 4,
            6: 6
        }],
        88: [function(t, e, r) {
            var n = t(19);
            n(n.P, "Array", {
                fill: t(7)
            }), t(4)("fill")
        }, {
            19: 19,
            4: 4,
            7: 7
        }],
        89: [function(t, e, r) {
            var n = "findIndex",
                i = t(19),
                o = !0,
                a = t(9)(6);
            n in [] && Array(1)[n](function() {
                o = !1
            }), i(i.P + i.F * o, "Array", {
                findIndex: function(t) {
                    return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), t(4)(n)
        }, {
            19: 19,
            4: 4,
            9: 9
        }],
        90: [function(t, e, r) {
            var n = "find",
                i = t(19),
                o = !0,
                a = t(9)(5);
            n in [] && Array(1)[n](function() {
                o = !1
            }), i(i.P + i.F * o, "Array", {
                find: function(t) {
                    return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), t(4)(n)
        }, {
            19: 19,
            4: 4,
            9: 9
        }],
        91: [function(t, e, r) {
            var n = t(18),
                i = t(19),
                o = t(81),
                a = t(41),
                s = t(36),
                h = t(80),
                c = t(85);
            i(i.S + i.F * !t(44)(function(t) {
                Array.from(t)
            }), "Array", {
                from: function(t) {
                    var e, r, i, l, u = o(t),
                        f = "function" == typeof this ? this : Array,
                        p = arguments,
                        d = p.length,
                        E = d > 1 ? p[1] : void 0,
                        m = void 0 !== E,
                        g = 0,
                        v = c(u);
                    if (m && (E = n(E, d > 2 ? p[2] : void 0, 2)), void 0 == v || f == Array && s(v))
                        for (e = h(u.length), r = new f(e); e > g; g++) r[g] = m ? E(u[g], g) : u[g];
                    else
                        for (l = v.call(u), r = new f; !(i = l.next()).done; g++) r[g] = m ? a(l, E, [i.value, g], !0) : i.value;
                    return r.length = g, r
                }
            })
        }, {
            18: 18,
            19: 19,
            36: 36,
            41: 41,
            44: 44,
            80: 80,
            81: 81,
            85: 85
        }],
        92: [function(t, e, r) {
            var n = t(4),
                i = t(45),
                o = t(46),
                a = t(79);
            e.exports = t(43)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e
            }, function() {
                var t = this._t,
                    e = this._k,
                    r = this._i++;
                return !t || r >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, r) : "values" == e ? i(0, t[r]) : i(0, [r, t[r]])
            }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries")
        }, {
            4: 4,
            43: 43,
            45: 45,
            46: 46,
            79: 79
        }],
        93: [function(t, e, r) {
            var n = t(19);
            n(n.S + n.F * t(25)(function() {
                function t() {}
                return !(Array.of.call(t) instanceof t)
            }), "Array", { of: function() {
                    for (var t = 0, e = arguments, r = e.length, n = new("function" == typeof this ? this : Array)(r); r > t;) n[t] = e[t++];
                    return n.length = r, n
                }
            })
        }, {
            19: 19,
            25: 25
        }],
        94: [function(t, e, r) {
            t(66)("Array")
        }, {
            66: 66
        }],
        95: [function(t, e, r) {
            var n = t(47),
                i = t(39),
                o = t(84)("hasInstance"),
                a = Function.prototype;
            o in a || n.setDesc(a, o, {
                value: function(t) {
                    if ("function" != typeof this || !i(t)) return !1;
                    if (!i(this.prototype)) return t instanceof this;
                    for (; t = n.getProto(t);)
                        if (this.prototype === t) return !0;
                    return !1
                }
            })
        }, {
            39: 39,
            47: 47,
            84: 84
        }],
        96: [function(t, e, r) {
            var n = t(47).setDesc,
                i = t(61),
                o = t(31),
                a = Function.prototype,
                s = /^\s*function ([^ (]*)/,
                h = "name";
            h in a || t(21) && n(a, h, {
                configurable: !0,
                get: function() {
                    var t = ("" + this).match(s),
                        e = t ? t[1] : "";
                    return o(this, h) || n(this, h, i(5, e)), e
                }
            })
        }, {
            21: 21,
            31: 31,
            47: 47,
            61: 61
        }],
        97: [function(t, e, r) {
            var n = t(13);
            t(16)("Map", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                get: function(t) {
                    var e = n.getEntry(this, t);
                    return e && e.v
                },
                set: function(t, e) {
                    return n.def(this, 0 === t ? 0 : t, e)
                }
            }, n, !0)
        }, {
            13: 13,
            16: 16
        }],
        98: [function(t, e, r) {
            var n = t(19),
                i = t(51),
                o = Math.sqrt,
                a = Math.acosh;
            n(n.S + n.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE))), "Math", {
                acosh: function(t) {
                    return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
                }
            })
        }, {
            19: 19,
            51: 51
        }],
        99: [function(t, e, r) {
            function n(t) {
                return isFinite(t = +t) && 0 != t ? 0 > t ? -n(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
            }
            var i = t(19);
            i(i.S, "Math", {
                asinh: n
            })
        }, {
            19: 19
        }],
        100: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                atanh: function(t) {
                    return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
                }
            })
        }, {
            19: 19
        }],
        101: [function(t, e, r) {
            var n = t(19),
                i = t(52);
            n(n.S, "Math", {
                cbrt: function(t) {
                    return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
                }
            })
        }, {
            19: 19,
            52: 52
        }],
        102: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                clz32: function(t) {
                    return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
                }
            })
        }, {
            19: 19
        }],
        103: [function(t, e, r) {
            var n = t(19),
                i = Math.exp;
            n(n.S, "Math", {
                cosh: function(t) {
                    return (i(t = +t) + i(-t)) / 2
                }
            })
        }, {
            19: 19
        }],
        104: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                expm1: t(50)
            })
        }, {
            19: 19,
            50: 50
        }],
        105: [function(t, e, r) {
            var n = t(19),
                i = t(52),
                o = Math.pow,
                a = o(2, -52),
                s = o(2, -23),
                h = o(2, 127) * (2 - s),
                c = o(2, -126),
                l = function(t) {
                    return t + 1 / a - 1 / a
                };
            n(n.S, "Math", {
                fround: function(t) {
                    var e, r, n = Math.abs(t),
                        o = i(t);
                    return c > n ? o * l(n / c / s) * c * s : (e = (1 + s / a) * n, r = e - (e - n), r > h || r != r ? o * (1 / 0) : o * r)
                }
            })
        }, {
            19: 19,
            52: 52
        }],
        106: [function(t, e, r) {
            var n = t(19),
                i = Math.abs;
            n(n.S, "Math", {
                hypot: function(t, e) {
                    for (var r, n, o = 0, a = 0, s = arguments, h = s.length, c = 0; h > a;) r = i(s[a++]), r > c ? (n = c / r, o = o * n * n + 1, c = r) : r > 0 ? (n = r / c, o += n * n) : o += r;
                    return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o)
                }
            })
        }, {
            19: 19
        }],
        107: [function(t, e, r) {
            var n = t(19),
                i = Math.imul;
            n(n.S + n.F * t(25)(function() {
                return -5 != i(4294967295, 5) || 2 != i.length
            }), "Math", {
                imul: function(t, e) {
                    var r = 65535,
                        n = +t,
                        i = +e,
                        o = r & n,
                        a = r & i;
                    return 0 | o * a + ((r & n >>> 16) * a + o * (r & i >>> 16) << 16 >>> 0)
                }
            })
        }, {
            19: 19,
            25: 25
        }],
        108: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                log10: function(t) {
                    return Math.log(t) / Math.LN10
                }
            })
        }, {
            19: 19
        }],
        109: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                log1p: t(51)
            })
        }, {
            19: 19,
            51: 51
        }],
        110: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                log2: function(t) {
                    return Math.log(t) / Math.LN2
                }
            })
        }, {
            19: 19
        }],
        111: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                sign: t(52)
            })
        }, {
            19: 19,
            52: 52
        }],
        112: [function(t, e, r) {
            var n = t(19),
                i = t(50),
                o = Math.exp;
            n(n.S + n.F * t(25)(function() {
                return -2e-17 != !Math.sinh(-2e-17)
            }), "Math", {
                sinh: function(t) {
                    return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
                }
            })
        }, {
            19: 19,
            25: 25,
            50: 50
        }],
        113: [function(t, e, r) {
            var n = t(19),
                i = t(50),
                o = Math.exp;
            n(n.S, "Math", {
                tanh: function(t) {
                    var e = i(t = +t),
                        r = i(-t);
                    return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (o(t) + o(-t))
                }
            })
        }, {
            19: 19,
            50: 50
        }],
        114: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Math", {
                trunc: function(t) {
                    return (t > 0 ? Math.floor : Math.ceil)(t)
                }
            })
        }, {
            19: 19
        }],
        115: [function(t, e, r) {
            var n = t(47),
                i = t(30),
                o = t(31),
                a = t(12),
                s = t(82),
                h = t(25),
                c = t(75).trim,
                l = "Number",
                u = i[l],
                f = u,
                p = u.prototype,
                d = a(n.create(p)) == l,
                E = "trim" in String.prototype,
                m = function(t) {
                    var e = s(t, !1);
                    if ("string" == typeof e && e.length > 2) {
                        e = E ? e.trim() : c(e, 3);
                        var r, n, i, o = e.charCodeAt(0);
                        if (43 === o || 45 === o) {
                            if (r = e.charCodeAt(2), 88 === r || 120 === r) return NaN
                        } else if (48 === o) {
                            switch (e.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    n = 2, i = 49;
                                    break;
                                case 79:
                                case 111:
                                    n = 8, i = 55;
                                    break;
                                default:
                                    return +e
                            }
                            for (var a, h = e.slice(2), l = 0, u = h.length; u > l; l++)
                                if (a = h.charCodeAt(l), 48 > a || a > i) return NaN;
                            return parseInt(h, n)
                        }
                    }
                    return +e
                };
            u(" 0o1") && u("0b1") && !u("+0x1") || (u = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    r = this;
                return r instanceof u && (d ? h(function() {
                    p.valueOf.call(r)
                }) : a(r) != l) ? new f(m(e)) : m(e)
            }, n.each.call(t(21) ? n.getNames(f) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), function(t) {
                o(f, t) && !o(u, t) && n.setDesc(u, t, n.getDesc(f, t))
            }), u.prototype = p, p.constructor = u, t(62)(i, l, u))
        }, {
            12: 12,
            21: 21,
            25: 25,
            30: 30,
            31: 31,
            47: 47,
            62: 62,
            75: 75,
            82: 82
        }],
        116: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                EPSILON: Math.pow(2, -52)
            })
        }, {
            19: 19
        }],
        117: [function(t, e, r) {
            var n = t(19),
                i = t(30).isFinite;
            n(n.S, "Number", {
                isFinite: function(t) {
                    return "number" == typeof t && i(t)
                }
            })
        }, {
            19: 19,
            30: 30
        }],
        118: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                isInteger: t(38)
            })
        }, {
            19: 19,
            38: 38
        }],
        119: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                isNaN: function(t) {
                    return t != t
                }
            })
        }, {
            19: 19
        }],
        120: [function(t, e, r) {
            var n = t(19),
                i = t(38),
                o = Math.abs;
            n(n.S, "Number", {
                isSafeInteger: function(t) {
                    return i(t) && o(t) <= 9007199254740991
                }
            })
        }, {
            19: 19,
            38: 38
        }],
        121: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        }, {
            19: 19
        }],
        122: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            })
        }, {
            19: 19
        }],
        123: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                parseFloat: parseFloat
            })
        }, {
            19: 19
        }],
        124: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Number", {
                parseInt: parseInt
            })
        }, {
            19: 19
        }],
        125: [function(t, e, r) {
            var n = t(19);
            n(n.S + n.F, "Object", {
                assign: t(55)
            })
        }, {
            19: 19,
            55: 55
        }],
        126: [function(t, e, r) {
            var n = t(39);
            t(56)("freeze", function(t) {
                return function(e) {
                    return t && n(e) ? t(e) : e
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        127: [function(t, e, r) {
            var n = t(79);
            t(56)("getOwnPropertyDescriptor", function(t) {
                return function(e, r) {
                    return t(n(e), r)
                }
            })
        }, {
            56: 56,
            79: 79
        }],
        128: [function(t, e, r) {
            t(56)("getOwnPropertyNames", function() {
                return t(29).get
            })
        }, {
            29: 29,
            56: 56
        }],
        129: [function(t, e, r) {
            var n = t(81);
            t(56)("getPrototypeOf", function(t) {
                return function(e) {
                    return t(n(e))
                }
            })
        }, {
            56: 56,
            81: 81
        }],
        130: [function(t, e, r) {
            var n = t(39);
            t(56)("isExtensible", function(t) {
                return function(e) {
                    return !!n(e) && (!t || t(e))
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        131: [function(t, e, r) {
            var n = t(39);
            t(56)("isFrozen", function(t) {
                return function(e) {
                    return !n(e) || !!t && t(e)
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        132: [function(t, e, r) {
            var n = t(39);
            t(56)("isSealed", function(t) {
                return function(e) {
                    return !n(e) || !!t && t(e)
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        133: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Object", {
                is: t(64)
            })
        }, {
            19: 19,
            64: 64
        }],
        134: [function(t, e, r) {
            var n = t(81);
            t(56)("keys", function(t) {
                return function(e) {
                    return t(n(e))
                }
            })
        }, {
            56: 56,
            81: 81
        }],
        135: [function(t, e, r) {
            var n = t(39);
            t(56)("preventExtensions", function(t) {
                return function(e) {
                    return t && n(e) ? t(e) : e
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        136: [function(t, e, r) {
            var n = t(39);
            t(56)("seal", function(t) {
                return function(e) {
                    return t && n(e) ? t(e) : e
                }
            })
        }, {
            39: 39,
            56: 56
        }],
        137: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Object", {
                setPrototypeOf: t(65).set
            })
        }, {
            19: 19,
            65: 65
        }],
        138: [function(t, e, r) {
            var n = t(11),
                i = {};
            i[t(84)("toStringTag")] = "z", i + "" != "[object z]" && t(62)(Object.prototype, "toString", function() {
                return "[object " + n(this) + "]"
            }, !0)
        }, {
            11: 11,
            62: 62,
            84: 84
        }],
        139: [function(t, e, r) {
            var n, i = t(47),
                o = t(49),
                a = t(30),
                s = t(18),
                h = t(11),
                c = t(19),
                l = t(39),
                u = t(5),
                f = t(3),
                p = t(70),
                d = t(28),
                E = t(65).set,
                m = t(64),
                g = t(84)("species"),
                v = t(69),
                y = t(83)("record"),
                T = t(53),
                R = "Promise",
                x = a.process,
                H = "process" == h(x),
                b = a[R],
                _ = function(t) {
                    var e = new b(function() {});
                    return t && (e.constructor = Object), b.resolve(e) === e
                },
                w = function() {
                    function e(t) {
                        var r = new b(t);
                        return E(r, e.prototype), r
                    }
                    var r = !1;
                    try {
                        if (r = b && b.resolve && _(), E(e, b), e.prototype = i.create(b.prototype, {
                                constructor: {
                                    value: e
                                }
                            }), e.resolve(5).then(function() {}) instanceof e || (r = !1), r && t(21)) {
                            var n = !1;
                            b.resolve(i.setDesc({}, "then", {
                                get: function() {
                                    n = !0
                                }
                            })), r = n
                        }
                    } catch (o) {
                        r = !1
                    }
                    return r
                }(),
                M = function(t) {
                    return l(t) && (w ? "Promise" == h(t) : y in t)
                },
                S = function(t, e) {
                    return !(!o || t !== b || e !== n) || m(t, e)
                },
                A = function(t) {
                    var e = u(t)[g];
                    return void 0 != e ? e : t
                },
                C = function(t) {
                    var e;
                    return !(!l(t) || "function" != typeof(e = t.then)) && e
                },
                L = function(t, e) {
                    if (!t.n) {
                        t.n = !0;
                        var r = t.c;
                        T(function() {
                            for (var n = t.v, i = 1 == t.s, o = 0, s = function(e) {
                                    var r, o, a = i ? e.ok : e.fail;
                                    try {
                                        a ? (i || (t.h = !0), r = a === !0 ? n : a(n), r === e.P ? e.rej(TypeError("Promise-chain cycle")) : (o = C(r)) ? o.call(r, e.res, e.rej) : e.res(r)) : e.rej(n)
                                    } catch (s) {
                                        e.rej(s)
                                    }
                                }; r.length > o;) s(r[o++]);
                            r.length = 0, t.n = !1, e && setTimeout(function() {
                                var e, r, i = t.p;
                                P(i) && (H ? x.emit("unhandledRejection", n, i) : (e = a.onunhandledrejection) ? e({
                                    promise: i,
                                    reason: n
                                }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", n)), t.a = void 0
                            }, 1)
                        })
                    }
                },
                P = function(t) {
                    var e, r = t[y],
                        n = r.a || r.c,
                        i = 0;
                    if (r.h) return !1;
                    for (; n.length > i;)
                        if (e = n[i++], e.fail || !P(e.P)) return !1;
                    return !0
                },
                F = function(t) {
                    var e = this;
                    e.d || (e.d = !0, e = e.r || e, e.v = t, e.s = 2, e.a = e.c.slice(), L(e, !0))
                },
                D = function(t) {
                    var e, r = this;
                    if (!r.d) {
                        r.d = !0, r = r.r || r;
                        try {
                            (e = C(t)) ? T(function() {
                                var n = {
                                    r: r,
                                    d: !1
                                };
                                try {
                                    e.call(t, s(D, n, 1), s(F, n, 1))
                                } catch (i) {
                                    F.call(n, i)
                                }
                            }): (r.v = t, r.s = 1, L(r, !1))
                        } catch (n) {
                            F.call({
                                r: r,
                                d: !1
                            }, n)
                        }
                    }
                };
            w || (b = function(t) {
                f(t);
                var e = {
                    p: p(this, b, R),
                    c: [],
                    a: void 0,
                    s: 0,
                    d: !1,
                    v: void 0,
                    h: !1,
                    n: !1
                };
                this[y] = e;
                try {
                    t(s(D, e, 1), s(F, e, 1))
                } catch (r) {
                    F.call(e, r)
                }
            }, t(54)(b.prototype, {
                then: function(t, e) {
                    var r = {
                            ok: "function" != typeof t || t,
                            fail: "function" == typeof e && e
                        },
                        n = r.P = new(v(this, b))(function(t, e) {
                            r.res = t, r.rej = e
                        });
                    f(r.res), f(r.rej);
                    var i = this[y];
                    return i.c.push(r), i.a && i.a.push(r), i.s && L(i, !1), n
                },
                "catch": function(t) {
                    return this.then(void 0, t)
                }
            })), c(c.G + c.W + c.F * !w, {
                Promise: b
            }), t(67)(b, R), t(66)(R), n = t(17)[R], c(c.S + c.F * !w, R, {
                reject: function(t) {
                    return new this(function(e, r) {
                        r(t)
                    })
                }
            }), c(c.S + c.F * (!w || _(!0)), R, {
                resolve: function(t) {
                    return M(t) && S(t.constructor, this) ? t : new this(function(e) {
                        e(t)
                    })
                }
            }), c(c.S + c.F * !(w && t(44)(function(t) {
                b.all(t)["catch"](function() {})
            })), R, {
                all: function(t) {
                    var e = A(this),
                        r = [];
                    return new e(function(n, o) {
                        d(t, !1, r.push, r);
                        var a = r.length,
                            s = Array(a);
                        a ? i.each.call(r, function(t, r) {
                            e.resolve(t).then(function(t) {
                                s[r] = t, --a || n(s)
                            }, o)
                        }) : n(s)
                    })
                },
                race: function(t) {
                    var e = A(this);
                    return new e(function(r, n) {
                        d(t, !1, function(t) {
                            e.resolve(t).then(r, n)
                        })
                    })
                }
            })
        }, {
            11: 11,
            17: 17,
            18: 18,
            19: 19,
            21: 21,
            28: 28,
            3: 3,
            30: 30,
            39: 39,
            44: 44,
            47: 47,
            49: 49,
            5: 5,
            53: 53,
            54: 54,
            64: 64,
            65: 65,
            66: 66,
            67: 67,
            69: 69,
            70: 70,
            83: 83,
            84: 84
        }],
        140: [function(t, e, r) {
            var n = t(19),
                i = Function.apply;
            n(n.S, "Reflect", {
                apply: function(t, e, r) {
                    return i.call(t, e, r)
                }
            })
        }, {
            19: 19
        }],
        141: [function(t, e, r) {
            var n = t(47),
                i = t(19),
                o = t(3),
                a = t(5),
                s = t(39),
                h = Function.bind || t(17).Function.prototype.bind;
            i(i.S + i.F * t(25)(function() {
                function t() {}
                return !(Reflect.construct(function() {}, [], t) instanceof t)
            }), "Reflect", {
                construct: function(t, e) {
                    o(t);
                    var r = arguments.length < 3 ? t : o(arguments[2]);
                    if (t == r) {
                        if (void 0 != e) switch (a(e).length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3])
                        }
                        var i = [null];
                        return i.push.apply(i, e), new(h.apply(t, i))
                    }
                    var c = r.prototype,
                        l = n.create(s(c) ? c : Object.prototype),
                        u = Function.apply.call(t, l, e);
                    return s(u) ? u : l
                }
            })
        }, {
            17: 17,
            19: 19,
            25: 25,
            3: 3,
            39: 39,
            47: 47,
            5: 5
        }],
        142: [function(t, e, r) {
            var n = t(47),
                i = t(19),
                o = t(5);
            i(i.S + i.F * t(25)(function() {
                Reflect.defineProperty(n.setDesc({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                })
            }), "Reflect", {
                defineProperty: function(t, e, r) {
                    o(t);
                    try {
                        return n.setDesc(t, e, r), !0
                    } catch (i) {
                        return !1
                    }
                }
            })
        }, {
            19: 19,
            25: 25,
            47: 47,
            5: 5
        }],
        143: [function(t, e, r) {
            var n = t(19),
                i = t(47).getDesc,
                o = t(5);
            n(n.S, "Reflect", {
                deleteProperty: function(t, e) {
                    var r = i(o(t), e);
                    return !(r && !r.configurable) && delete t[e]
                }
            })
        }, {
            19: 19,
            47: 47,
            5: 5
        }],
        144: [function(t, e, r) {
            var n = t(19),
                i = t(5),
                o = function(t) {
                    this._t = i(t), this._i = 0;
                    var e, r = this._k = [];
                    for (e in t) r.push(e)
                };
            t(42)(o, "Object", function() {
                var t, e = this,
                    r = e._k;
                do
                    if (e._i >= r.length) return {
                        value: void 0,
                        done: !0
                    }; while (!((t = r[e._i++]) in e._t));
                return {
                    value: t,
                    done: !1
                }
            }), n(n.S, "Reflect", {
                enumerate: function(t) {
                    return new o(t)
                }
            })
        }, {
            19: 19,
            42: 42,
            5: 5
        }],
        145: [function(t, e, r) {
            var n = t(47),
                i = t(19),
                o = t(5);
            i(i.S, "Reflect", {
                getOwnPropertyDescriptor: function(t, e) {
                    return n.getDesc(o(t), e)
                }
            })
        }, {
            19: 19,
            47: 47,
            5: 5
        }],
        146: [function(t, e, r) {
            var n = t(19),
                i = t(47).getProto,
                o = t(5);
            n(n.S, "Reflect", {
                getPrototypeOf: function(t) {
                    return i(o(t))
                }
            })
        }, {
            19: 19,
            47: 47,
            5: 5
        }],
        147: [function(t, e, r) {
            function n(t, e) {
                var r, a, c = arguments.length < 3 ? t : arguments[2];
                return h(t) === c ? t[e] : (r = i.getDesc(t, e)) ? o(r, "value") ? r.value : void 0 !== r.get ? r.get.call(c) : void 0 : s(a = i.getProto(t)) ? n(a, e, c) : void 0
            }
            var i = t(47),
                o = t(31),
                a = t(19),
                s = t(39),
                h = t(5);
            a(a.S, "Reflect", {
                get: n
            })
        }, {
            19: 19,
            31: 31,
            39: 39,
            47: 47,
            5: 5
        }],
        148: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Reflect", {
                has: function(t, e) {
                    return e in t
                }
            })
        }, {
            19: 19
        }],
        149: [function(t, e, r) {
            var n = t(19),
                i = t(5),
                o = Object.isExtensible;
            n(n.S, "Reflect", {
                isExtensible: function(t) {
                    return i(t), !o || o(t)
                }
            })
        }, {
            19: 19,
            5: 5
        }],
        150: [function(t, e, r) {
            var n = t(19);
            n(n.S, "Reflect", {
                ownKeys: t(58)
            })
        }, {
            19: 19,
            58: 58
        }],
        151: [function(t, e, r) {
            var n = t(19),
                i = t(5),
                o = Object.preventExtensions;
            n(n.S, "Reflect", {
                preventExtensions: function(t) {
                    i(t);
                    try {
                        return o && o(t), !0
                    } catch (e) {
                        return !1
                    }
                }
            })
        }, {
            19: 19,
            5: 5
        }],
        152: [function(t, e, r) {
            var n = t(19),
                i = t(65);
            i && n(n.S, "Reflect", {
                setPrototypeOf: function(t, e) {
                    i.check(t, e);
                    try {
                        return i.set(t, e), !0
                    } catch (r) {
                        return !1
                    }
                }
            })
        }, {
            19: 19,
            65: 65
        }],
        153: [function(t, e, r) {
            function n(t, e, r) {
                var a, l, u = arguments.length < 4 ? t : arguments[3],
                    f = i.getDesc(h(t), e);
                if (!f) {
                    if (c(l = i.getProto(t))) return n(l, e, r, u);
                    f = s(0)
                }
                return o(f, "value") ? !(f.writable === !1 || !c(u)) && (a = i.getDesc(u, e) || s(0), a.value = r, i.setDesc(u, e, a), !0) : void 0 !== f.set && (f.set.call(u, r), !0)
            }
            var i = t(47),
                o = t(31),
                a = t(19),
                s = t(61),
                h = t(5),
                c = t(39);
            a(a.S, "Reflect", {
                set: n
            })
        }, {
            19: 19,
            31: 31,
            39: 39,
            47: 47,
            5: 5,
            61: 61
        }],
        154: [function(t, e, r) {
            var n = t(47),
                i = t(30),
                o = t(40),
                a = t(27),
                s = i.RegExp,
                h = s,
                c = s.prototype,
                l = /a/g,
                u = /a/g,
                f = new s(l) !== l;
            !t(21) || f && !t(25)(function() {
                return u[t(84)("match")] = !1, s(l) != l || s(u) == u || "/a/i" != s(l, "i")
            }) || (s = function(t, e) {
                var r = o(t),
                    n = void 0 === e;
                return this instanceof s || !r || t.constructor !== s || !n ? f ? new h(r && !n ? t.source : t, e) : h((r = t instanceof s) ? t.source : t, r && n ? a.call(t) : e) : t
            }, n.each.call(n.getNames(h), function(t) {
                t in s || n.setDesc(s, t, {
                    configurable: !0,
                    get: function() {
                        return h[t]
                    },
                    set: function(e) {
                        h[t] = e
                    }
                })
            }), c.constructor = s, s.prototype = c, t(62)(i, "RegExp", s)), t(66)("RegExp")
        }, {
            21: 21,
            25: 25,
            27: 27,
            30: 30,
            40: 40,
            47: 47,
            62: 62,
            66: 66,
            84: 84
        }],
        155: [function(t, e, r) {
            var n = t(47);
            t(21) && "g" != /./g.flags && n.setDesc(RegExp.prototype, "flags", {
                configurable: !0,
                get: t(27)
            })
        }, {
            21: 21,
            27: 27,
            47: 47
        }],
        156: [function(t, e, r) {
            t(26)("match", 1, function(t, e) {
                return function(r) {
                    var n = t(this),
                        i = void 0 == r ? void 0 : r[e];
                    return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
                }
            })
        }, {
            26: 26
        }],
        157: [function(t, e, r) {
            t(26)("replace", 2, function(t, e, r) {
                return function(n, i) {
                    var o = t(this),
                        a = void 0 == n ? void 0 : n[e];
                    return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i)
                }
            })
        }, {
            26: 26
        }],
        158: [function(t, e, r) {
            t(26)("search", 1, function(t, e) {
                return function(r) {
                    var n = t(this),
                        i = void 0 == r ? void 0 : r[e];
                    return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
                }
            })
        }, {
            26: 26
        }],
        159: [function(t, e, r) {
            t(26)("split", 2, function(t, e, r) {
                return function(n, i) {
                    var o = t(this),
                        a = void 0 == n ? void 0 : n[e];
                    return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i)
                }
            })
        }, {
            26: 26
        }],
        160: [function(t, e, r) {
            var n = t(13);
            t(16)("Set", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                add: function(t) {
                    return n.def(this, t = 0 === t ? 0 : t, t)
                }
            }, n)
        }, {
            13: 13,
            16: 16
        }],
        161: [function(t, e, r) {
            var n = t(19),
                i = t(71)(!1);
            n(n.P, "String", {
                codePointAt: function(t) {
                    return i(this, t)
                }
            })
        }, {
            19: 19,
            71: 71
        }],
        162: [function(t, e, r) {
            var n = t(19),
                i = t(80),
                o = t(72),
                a = "endsWith",
                s = "" [a];
            n(n.P + n.F * t(24)(a), "String", {
                endsWith: function(t) {
                    var e = o(this, t, a),
                        r = arguments,
                        n = r.length > 1 ? r[1] : void 0,
                        h = i(e.length),
                        c = void 0 === n ? h : Math.min(i(n), h),
                        l = String(t);
                    return s ? s.call(e, l, c) : e.slice(c - l.length, c) === l
                }
            })
        }, {
            19: 19,
            24: 24,
            72: 72,
            80: 80
        }],
        163: [function(t, e, r) {
            var n = t(19),
                i = t(77),
                o = String.fromCharCode,
                a = String.fromCodePoint;
            n(n.S + n.F * (!!a && 1 != a.length), "String", {
                fromCodePoint: function(t) {
                    for (var e, r = [], n = arguments, a = n.length, s = 0; a > s;) {
                        if (e = +n[s++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                        r.push(65536 > e ? o(e) : o(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
                    }
                    return r.join("")
                }
            })
        }, {
            19: 19,
            77: 77
        }],
        164: [function(t, e, r) {
            var n = t(19),
                i = t(72),
                o = "includes";
            n(n.P + n.F * t(24)(o), "String", {
                includes: function(t) {
                    return !!~i(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, {
            19: 19,
            24: 24,
            72: 72
        }],
        165: [function(t, e, r) {
            var n = t(71)(!0);
            t(43)(String, "String", function(t) {
                this._t = String(t), this._i = 0
            }, function() {
                var t, e = this._t,
                    r = this._i;
                return r >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = n(e, r), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, {
            43: 43,
            71: 71
        }],
        166: [function(t, e, r) {
            var n = t(19),
                i = t(79),
                o = t(80);
            n(n.S, "String", {
                raw: function(t) {
                    for (var e = i(t.raw), r = o(e.length), n = arguments, a = n.length, s = [], h = 0; r > h;) s.push(String(e[h++])), a > h && s.push(String(n[h]));
                    return s.join("")
                }
            })
        }, {
            19: 19,
            79: 79,
            80: 80
        }],
        167: [function(t, e, r) {
            var n = t(19);
            n(n.P, "String", {
                repeat: t(74)
            })
        }, {
            19: 19,
            74: 74
        }],
        168: [function(t, e, r) {
            var n = t(19),
                i = t(80),
                o = t(72),
                a = "startsWith",
                s = "" [a];
            n(n.P + n.F * t(24)(a), "String", {
                startsWith: function(t) {
                    var e = o(this, t, a),
                        r = arguments,
                        n = i(Math.min(r.length > 1 ? r[1] : void 0, e.length)),
                        h = String(t);
                    return s ? s.call(e, h, n) : e.slice(n, n + h.length) === h
                }
            })
        }, {
            19: 19,
            24: 24,
            72: 72,
            80: 80
        }],
        169: [function(t, e, r) {
            t(75)("trim", function(t) {
                return function() {
                    return t(this, 3)
                }
            })
        }, {
            75: 75
        }],
        170: [function(t, e, r) {
            var n = t(47),
                i = t(30),
                o = t(31),
                a = t(21),
                s = t(19),
                h = t(62),
                c = t(25),
                l = t(68),
                u = t(67),
                f = t(83),
                p = t(84),
                d = t(48),
                E = t(29),
                m = t(23),
                g = t(37),
                v = t(5),
                y = t(79),
                T = t(61),
                R = n.getDesc,
                x = n.setDesc,
                H = n.create,
                b = E.get,
                _ = i.Symbol,
                w = i.JSON,
                M = w && w.stringify,
                S = !1,
                A = p("_hidden"),
                C = n.isEnum,
                L = l("symbol-registry"),
                P = l("symbols"),
                F = "function" == typeof _,
                D = Object.prototype,
                B = a && c(function() {
                    return 7 != H(x({}, "a", {
                        get: function() {
                            return x(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(t, e, r) {
                    var n = R(D, e);
                    n && delete D[e], x(t, e, r), n && t !== D && x(D, e, n)
                } : x,
                k = function(t) {
                    var e = P[t] = H(_.prototype);
                    return e._k = t, a && S && B(D, t, {
                        configurable: !0,
                        set: function(e) {
                            o(this, A) && o(this[A], t) && (this[A][t] = !1), B(this, t, T(1, e))
                        }
                    }), e
                },
                O = function(t) {
                    return "symbol" == typeof t
                },
                U = function(t, e, r) {
                    return r && o(P, e) ? (r.enumerable ? (o(t, A) && t[A][e] && (t[A][e] = !1), r = H(r, {
                        enumerable: T(0, !1)
                    })) : (o(t, A) || x(t, A, T(1, {})), t[A][e] = !0), B(t, e, r)) : x(t, e, r)
                },
                V = function(t, e) {
                    v(t);
                    for (var r, n = m(e = y(e)), i = 0, o = n.length; o > i;) U(t, r = n[i++], e[r]);
                    return t
                },
                N = function(t, e) {
                    return void 0 === e ? H(t) : V(H(t), e)
                },
                z = function(t) {
                    var e = C.call(this, t);
                    return !(e || !o(this, t) || !o(P, t) || o(this, A) && this[A][t]) || e
                },
                I = function(t, e) {
                    var r = R(t = y(t), e);
                    return !r || !o(P, e) || o(t, A) && t[A][e] || (r.enumerable = !0), r
                },
                G = function(t) {
                    for (var e, r = b(y(t)), n = [], i = 0; r.length > i;) o(P, e = r[i++]) || e == A || n.push(e);
                    return n
                },
                j = function(t) {
                    for (var e, r = b(y(t)), n = [], i = 0; r.length > i;) o(P, e = r[i++]) && n.push(P[e]);
                    return n
                },
                W = function(t) {
                    if (void 0 !== t && !O(t)) {
                        for (var e, r, n = [t], i = 1, o = arguments; o.length > i;) n.push(o[i++]);
                        return e = n[1], "function" == typeof e && (r = e), (r || !g(e)) && (e = function(t, e) {
                            return r && (e = r.call(this, t, e)), O(e) ? void 0 : e
                        }), n[1] = e, M.apply(w, n)
                    }
                },
                X = c(function() {
                    var t = _();
                    return "[null]" != M([t]) || "{}" != M({
                        a: t
                    }) || "{}" != M(Object(t))
                });
            F || (_ = function() {
                if (O(this)) throw TypeError("Symbol is not a constructor");
                return k(f(arguments.length > 0 ? arguments[0] : void 0))
            }, h(_.prototype, "toString", function() {
                return this._k
            }), O = function(t) {
                return t instanceof _
            }, n.create = N, n.isEnum = z, n.getDesc = I, n.setDesc = U, n.setDescs = V, n.getNames = E.get = G, n.getSymbols = j, a && !t(49) && h(D, "propertyIsEnumerable", z, !0));
            var q = {
                "for": function(t) {
                    return o(L, t += "") ? L[t] : L[t] = _(t)
                },
                keyFor: function(t) {
                    return d(L, t)
                },
                useSetter: function() {
                    S = !0
                },
                useSimple: function() {
                    S = !1
                }
            };
            n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(t) {
                var e = p(t);
                q[t] = F ? e : k(e)
            }), S = !0, s(s.G + s.W, {
                Symbol: _
            }), s(s.S, "Symbol", q), s(s.S + s.F * !F, "Object", {
                create: N,
                defineProperty: U,
                defineProperties: V,
                getOwnPropertyDescriptor: I,
                getOwnPropertyNames: G,
                getOwnPropertySymbols: j
            }), w && s(s.S + s.F * (!F || X), "JSON", {
                stringify: W
            }), u(_, "Symbol"), u(Math, "Math", !0), u(i.JSON, "JSON", !0)
        }, {
            19: 19,
            21: 21,
            23: 23,
            25: 25,
            29: 29,
            30: 30,
            31: 31,
            37: 37,
            47: 47,
            48: 48,
            49: 49,
            5: 5,
            61: 61,
            62: 62,
            67: 67,
            68: 68,
            79: 79,
            83: 83,
            84: 84
        }],
        171: [function(t, e, r) {
            var n = t(47),
                i = t(62),
                o = t(15),
                a = t(39),
                s = t(31),
                h = o.frozenStore,
                c = o.WEAK,
                l = Object.isExtensible || a,
                u = {},
                f = t(16)("WeakMap", function(t) {
                    return function() {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0)
                    }
                }, {
                    get: function(t) {
                        if (a(t)) {
                            if (!l(t)) return h(this).get(t);
                            if (s(t, c)) return t[c][this._i]
                        }
                    },
                    set: function(t, e) {
                        return o.def(this, t, e)
                    }
                }, o, !0, !0);
            7 != (new f).set((Object.freeze || Object)(u), 7).get(u) && n.each.call(["delete", "has", "get", "set"], function(t) {
                var e = f.prototype,
                    r = e[t];
                i(e, t, function(e, n) {
                    if (a(e) && !l(e)) {
                        var i = h(this)[t](e, n);
                        return "set" == t ? this : i
                    }
                    return r.call(this, e, n)
                })
            })
        }, {
            15: 15,
            16: 16,
            31: 31,
            39: 39,
            47: 47,
            62: 62
        }],
        172: [function(t, e, r) {
            var n = t(15);
            t(16)("WeakSet", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                add: function(t) {
                    return n.def(this, t, !0)
                }
            }, n, !1, !0)
        }, {
            15: 15,
            16: 16
        }],
        173: [function(t, e, r) {
            var n = t(19),
                i = t(8)(!0);
            n(n.P, "Array", {
                includes: function(t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), t(4)("includes")
        }, {
            19: 19,
            4: 4,
            8: 8
        }],
        174: [function(t, e, r) {
            var n = t(19);
            n(n.P, "Map", {
                toJSON: t(14)("Map")
            })
        }, {
            14: 14,
            19: 19
        }],
        175: [function(t, e, r) {
            var n = t(19),
                i = t(57)(!0);
            n(n.S, "Object", {
                entries: function(t) {
                    return i(t)
                }
            })
        }, {
            19: 19,
            57: 57
        }],
        176: [function(t, e, r) {
            var n = t(47),
                i = t(19),
                o = t(58),
                a = t(79),
                s = t(61);
            i(i.S, "Object", {
                getOwnPropertyDescriptors: function(t) {
                    for (var e, r, i = a(t), h = n.setDesc, c = n.getDesc, l = o(i), u = {}, f = 0; l.length > f;) r = c(i, e = l[f++]), e in u ? h(u, e, s(0, r)) : u[e] = r;
                    return u
                }
            })
        }, {
            19: 19,
            47: 47,
            58: 58,
            61: 61,
            79: 79
        }],
        177: [function(t, e, r) {
            var n = t(19),
                i = t(57)(!1);
            n(n.S, "Object", {
                values: function(t) {
                    return i(t)
                }
            })
        }, {
            19: 19,
            57: 57
        }],
        178: [function(t, e, r) {
            var n = t(19),
                i = t(63)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
            n(n.S, "RegExp", {
                escape: function(t) {
                    return i(t)
                }
            })
        }, {
            19: 19,
            63: 63
        }],
        179: [function(t, e, r) {
            var n = t(19);
            n(n.P, "Set", {
                toJSON: t(14)("Set")
            })
        }, {
            14: 14,
            19: 19
        }],
        180: [function(t, e, r) {
            var n = t(19),
                i = t(71)(!0);
            n(n.P, "String", {
                at: function(t) {
                    return i(this, t)
                }
            })
        }, {
            19: 19,
            71: 71
        }],
        181: [function(t, e, r) {
            var n = t(19),
                i = t(73);
            n(n.P, "String", {
                padLeft: function(t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
                }
            })
        }, {
            19: 19,
            73: 73
        }],
        182: [function(t, e, r) {
            var n = t(19),
                i = t(73);
            n(n.P, "String", {
                padRight: function(t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
                }
            })
        }, {
            19: 19,
            73: 73
        }],
        183: [function(t, e, r) {
            t(75)("trimLeft", function(t) {
                return function() {
                    return t(this, 1)
                }
            })
        }, {
            75: 75
        }],
        184: [function(t, e, r) {
            t(75)("trimRight", function(t) {
                return function() {
                    return t(this, 2)
                }
            })
        }, {
            75: 75
        }],
        185: [function(t, e, r) {
            var n = t(47),
                i = t(19),
                o = t(18),
                a = t(17).Array || Array,
                s = {},
                h = function(t, e) {
                    n.each.call(t.split(","), function(t) {
                        void 0 == e && t in a ? s[t] = a[t] : t in [] && (s[t] = o(Function.call, [][t], e))
                    })
                };
            h("pop,reverse,shift,keys,values,entries", 1), h("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3), h("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"), i(i.S, "Array", s)
        }, {
            17: 17,
            18: 18,
            19: 19,
            47: 47
        }],
        186: [function(t, e, r) {
            t(92);
            var n = t(30),
                i = t(32),
                o = t(46),
                a = t(84)("iterator"),
                s = n.NodeList,
                h = n.HTMLCollection,
                c = s && s.prototype,
                l = h && h.prototype,
                u = o.NodeList = o.HTMLCollection = o.Array;
            !s || a in c || i(c, a, u), !h || a in l || i(l, a, u)
        }, {
            30: 30,
            32: 32,
            46: 46,
            84: 84,
            92: 92
        }],
        187: [function(t, e, r) {
            var n = t(19),
                i = t(76);
            n(n.G + n.B, {
                setImmediate: i.set,
                clearImmediate: i.clear
            })
        }, {
            19: 19,
            76: 76
        }],
        188: [function(t, e, r) {
            var n = t(30),
                i = t(19),
                o = t(34),
                a = t(59),
                s = n.navigator,
                h = !!s && /MSIE .\./.test(s.userAgent),
                c = function(t) {
                    return h ? function(e, r) {
                        return t(o(a, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), r)
                    } : t
                };
            i(i.G + i.B + i.F * h, {
                setTimeout: c(n.setTimeout),
                setInterval: c(n.setInterval)
            })
        }, {
            19: 19,
            30: 30,
            34: 34,
            59: 59
        }],
        189: [function(t, e, r) {
            t(86), t(170), t(125), t(133), t(137), t(138), t(126), t(136), t(135), t(131), t(132), t(130), t(127), t(129), t(134), t(128), t(96), t(95), t(115), t(116), t(117), t(118), t(119), t(120), t(121), t(122), t(123), t(124), t(98), t(99), t(100), t(101), t(102), t(103), t(104), t(105), t(106), t(107), t(108), t(109), t(110), t(111), t(112), t(113), t(114), t(163), t(166), t(169), t(165), t(161), t(162), t(164), t(167), t(168), t(91), t(93), t(92), t(94), t(87), t(88), t(90), t(89), t(154), t(155), t(156), t(157), t(158), t(159), t(139), t(97), t(160), t(171), t(172), t(140), t(141), t(142), t(143), t(144), t(147), t(145), t(146), t(148), t(149), t(150), t(151), t(153), t(152), t(173), t(180), t(181), t(182), t(183), t(184), t(178), t(176), t(177), t(175), t(174), t(179), t(185), t(188), t(187), t(186), e.exports = t(17)
        }, {
            100: 100,
            101: 101,
            102: 102,
            103: 103,
            104: 104,
            105: 105,
            106: 106,
            107: 107,
            108: 108,
            109: 109,
            110: 110,
            111: 111,
            112: 112,
            113: 113,
            114: 114,
            115: 115,
            116: 116,
            117: 117,
            118: 118,
            119: 119,
            120: 120,
            121: 121,
            122: 122,
            123: 123,
            124: 124,
            125: 125,
            126: 126,
            127: 127,
            128: 128,
            129: 129,
            130: 130,
            131: 131,
            132: 132,
            133: 133,
            134: 134,
            135: 135,
            136: 136,
            137: 137,
            138: 138,
            139: 139,
            140: 140,
            141: 141,
            142: 142,
            143: 143,
            144: 144,
            145: 145,
            146: 146,
            147: 147,
            148: 148,
            149: 149,
            150: 150,
            151: 151,
            152: 152,
            153: 153,
            154: 154,
            155: 155,
            156: 156,
            157: 157,
            158: 158,
            159: 159,
            160: 160,
            161: 161,
            162: 162,
            163: 163,
            164: 164,
            165: 165,
            166: 166,
            167: 167,
            168: 168,
            169: 169,
            17: 17,
            170: 170,
            171: 171,
            172: 172,
            173: 173,
            174: 174,
            175: 175,
            176: 176,
            177: 177,
            178: 178,
            179: 179,
            180: 180,
            181: 181,
            182: 182,
            183: 183,
            184: 184,
            185: 185,
            186: 186,
            187: 187,
            188: 188,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            92: 92,
            93: 93,
            94: 94,
            95: 95,
            96: 96,
            97: 97,
            98: 98,
            99: 99
        }],
        190: [function(t, e, r) {
            (function(t) {
                ! function(t) {
                    function r(t, e, r, n) {
                        var o = Object.create((e || i).prototype),
                            a = new p(n || []);
                        return o._invoke = l(t, r, a), o
                    }

                    function n(t, e, r) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, r)
                            }
                        } catch (n) {
                            return {
                                type: "throw",
                                arg: n
                            }
                        }
                    }

                    function i() {}

                    function o() {}

                    function a() {}

                    function s(t) {
                        ["next", "throw", "return"].forEach(function(e) {
                            t[e] = function(t) {
                                return this._invoke(e, t)
                            }
                        })
                    }

                    function h(t) {
                        this.arg = t
                    }

                    function c(t) {
                        function e(e, r) {
                            var n = t[e](r),
                                a = n.value;
                            return a instanceof h ? Promise.resolve(a.arg).then(i, o) : Promise.resolve(a).then(function(t) {
                                return n.value = t, n
                            })
                        }

                        function r(t, r) {
                            function i() {
                                return e(t, r)
                            }
                            return n = n ? n.then(i, i) : new Promise(function(t) {
                                t(i())
                            })
                        }
                        "object" == typeof process && process.domain && (e = process.domain.bind(e));
                        var n, i = e.bind(t, "next"),
                            o = e.bind(t, "throw");
                        e.bind(t, "return"), this._invoke = r
                    }

                    function l(t, e, r) {
                        var i = R;
                        return function(o, a) {
                            if (i === H) throw new Error("Generator is already running");
                            if (i === b) {
                                if ("throw" === o) throw a;
                                return E()
                            }
                            for (;;) {
                                var s = r.delegate;
                                if (s) {
                                    if ("return" === o || "throw" === o && s.iterator[o] === m) {
                                        r.delegate = null;
                                        var h = s.iterator["return"];
                                        if (h) {
                                            var c = n(h, s.iterator, a);
                                            if ("throw" === c.type) {
                                                o = "throw", a = c.arg;
                                                continue
                                            }
                                        }
                                        if ("return" === o) continue
                                    }
                                    var c = n(s.iterator[o], s.iterator, a);
                                    if ("throw" === c.type) {
                                        r.delegate = null, o = "throw", a = c.arg;
                                        continue
                                    }
                                    o = "next", a = m;
                                    var l = c.arg;
                                    if (!l.done) return i = x, l;
                                    r[s.resultName] = l.value, r.next = s.nextLoc, r.delegate = null
                                }
                                if ("next" === o) r._sent = a, i === x ? r.sent = a : r.sent = m;
                                else if ("throw" === o) {
                                    if (i === R) throw i = b, a;
                                    r.dispatchException(a) && (o = "next", a = m)
                                } else "return" === o && r.abrupt("return", a);
                                i = H;
                                var c = n(t, e, r);
                                if ("normal" === c.type) {
                                    i = r.done ? b : x;
                                    var l = {
                                        value: c.arg,
                                        done: r.done
                                    };
                                    if (c.arg !== _) return l;
                                    r.delegate && "next" === o && (a = m)
                                } else "throw" === c.type && (i = b, o = "throw", a = c.arg)
                            }
                        }
                    }

                    function u(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function f(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function p(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach(u, this), this.reset(!0)
                    }

                    function d(t) {
                        if (t) {
                            var e = t[v];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1,
                                    n = function i() {
                                        for (; ++r < t.length;)
                                            if (g.call(t, r)) return i.value = t[r], i.done = !1, i;
                                        return i.value = m, i.done = !0, i
                                    };
                                return n.next = n
                            }
                        }
                        return {
                            next: E
                        }
                    }

                    function E() {
                        return {
                            value: m,
                            done: !0
                        }
                    }
                    var m, g = Object.prototype.hasOwnProperty,
                        v = "function" == typeof Symbol && Symbol.iterator || "@@iterator",
                        y = "object" == typeof e,
                        T = t.regeneratorRuntime;
                    if (T) return void(y && (e.exports = T));
                    T = t.regeneratorRuntime = y ? e.exports : {}, T.wrap = r;
                    var R = "suspendedStart",
                        x = "suspendedYield",
                        H = "executing",
                        b = "completed",
                        _ = {},
                        w = a.prototype = i.prototype;
                    o.prototype = w.constructor = a, a.constructor = o, o.displayName = "GeneratorFunction", T.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === o || "GeneratorFunction" === (e.displayName || e.name))
                    }, T.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : t.__proto__ = a, t.prototype = Object.create(w), t
                    }, T.awrap = function(t) {
                        return new h(t)
                    }, s(c.prototype), T.async = function(t, e, n, i) {
                        var o = new c(r(t, e, n, i));
                        return T.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                            return t.done ? t.value : o.next()
                        })
                    }, s(w), w[v] = function() {
                        return this
                    }, w.toString = function() {
                        return "[object Generator]"
                    }, T.keys = function(t) {
                        var e = [];
                        for (var r in t) e.push(r);
                        return e.reverse(),
                            function n() {
                                for (; e.length;) {
                                    var r = e.pop();
                                    if (r in t) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, T.values = d, p.prototype = {
                        constructor: p,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(f), !t)
                                for (var e in this) "t" === e.charAt(0) && g.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0],
                                e = t.completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            function e(e, n) {
                                return o.type = "throw", o.arg = t, r.next = e, !!n
                            }
                            if (this.done) throw t;
                            for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n],
                                    o = i.completion;
                                if ("root" === i.tryLoc) return e("end");
                                if (i.tryLoc <= this.prev) {
                                    var a = g.call(i, "catchLoc"),
                                        s = g.call(i, "finallyLoc");
                                    if (a && s) {
                                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var i = n;
                                    break
                                }
                            }
                            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                            var o = i ? i.completion : {};
                            return o.type = t, o.arg = e, i ? this.next = i.finallyLoc : this.complete(o), _
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = t.arg, this.next = "end") : "normal" === t.type && e && (this.next = e)
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), f(r), _
                            }
                        },
                        "catch": function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.tryLoc === t) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var i = n.arg;
                                        f(r)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, e, r) {
                            return this.delegate = {
                                iterator: d(t),
                                resultName: e,
                                nextLoc: r
                            }, _
                        }
                    }
                }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [1]);
