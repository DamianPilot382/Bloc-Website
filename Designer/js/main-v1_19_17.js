function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function webglAvailable() {
    try {
        var e = document.createElement("canvas");
        return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
    } catch (e) {
        return !1
    }
}

function dataURLtoBlob(e) {
    for (var t = atob(e.split(",")[1]), o = [], n = 0; n < t.length; n++) o.push(t.charCodeAt(n));
    return new Blob([new Uint8Array(o)], {
        type: "image/png"
    })
}

function objToForm(e) {
    var t = new FormData;
    return Object.keys(e).forEach(function(o) {
        return t.append(o, e[o])
    }), t
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
        return o
    }
    return Array.from(e)
}
function getSupportColumnsIndexes(e, t, o) {
    if (Math.floor(e / 2) < t) return [Math.ceil(e / 2)];
    var n = [],
        r = e - e % t,
        i = r - e,
        s = Math.floor(i / 2);
    for (e += .5 * e; s < e;) n.push(s), s += o.withOpenings ? t : t + 1;
    return n
}
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();

define("lib/audio_player", [], function() {
    var e = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Howl({
                src: [e],
                volume: t.volume || 1
            })
        },
        t = {
            place: e("/resources/sound/place.wav"),
            rotate: e("/resources/sound/rotate.wav"),
            color: e("/resources/sound/color.wav", {
                volume: .3
            }),
            import: e("/resources/sound/import.wav", {
                volume: .5
            }),
            delete: e("/resources/sound/delete.wav", {
                volume: .5
            }),
            remove_grid: e("/resources/sound/remove_grid.wav", {
                volume: .5
            }),
            save: e("/resources/sound/save.wav", {
                volume: .5
            }),
            select_many: e("/resources/sound/select_many.wav", {
                volume: .7
            }),
            move: e("/resources/sound/move.wav", {
                volume: .5
            }),
            select: e("/resources/sound/select.wav", {
                volume: .5
            }),
            human: e("/resources/sound/human.wav", {
                volume: .7
            }),
            picture: e("/resources/sound/picture.wav", {
                volume: .7
            }),
            undo: e("/resources/sound/undo.wav", {
                volume: .7
            })
        },
        o = function() {
            function e() {
                _classCallCheck(this, e)
            }
            return _createClass(e, null, [{
                key: "play",
                value: function(e) {
                    t[e] && this.isAvailable && t[e].play()
                }
            }]), e
        }();
    return o.isAvailable = !0, o
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("lib/settings", [], function() {
    return new(function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, [{
            key: "save",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach(function(o) {
                    return t.params[o] = e[o]
                }), localStorage.setItem("settings", JSON.stringify(this.params))
            }
        }, {
            key: "params",
            get: function() {
                return this._params || (this._params = JSON.parse(localStorage.getItem("settings"))) || {
                    isAudioOn: !0
                }
            }
        }, {
            key: "isAudioOn",
            get: function() {
                return this.params.isAudioOn
            }
        }]), e
    }())
}), define("app", ["lib/audio_player", "lib/settings"], function() {
    var e = window.locale;
    return {
        audio: require("lib/audio_player"),
        settings: require("lib/settings"),
        lastBlockPosition: null,
        language: e,
        notSelectedBlocks: [],
        objects: [],
        objectsMap: {},
        activeBlock: null,
        selectedBlocks: null,
        countMove: 0,
        isPositionChanged: !1,
        sceneIsActive: !0,
        needsUpdate: !0,
        scene: null,
        modelName: null,
        IsReadyPromise: Promise.resolve()
    }
}), define("lib/prices", [], function() {
    return {
        full: 6.95,
        half: 4.95,
        quarter: 3.95,
        line: 5.25,
        single: 3.1,
        cap: 3.95,
        quarter_cap: 2.95,
        footer: 10.5,
        door: 149.95,
        shelf_unit_24: 24.5,
        shelf_unit_36: 37.5,
        shelf_unit_36_half: 37.5,
        shelf_unit_48_lintel: 36.5,
        desk_unit: 94.5,
        full_colorful: 7.2,
        half_colorful: 5.2,
        quarter_colorful: 4.2,
        line_colorful: 5.5,
        single_colorful: 3.35,
        cap_colorful: 4.2,
        quarter_cap_colorful: 3.2
    }
}), define("constants", {
    get GET_MODEL() {
        return libraryMode ? location.origin + "/api/library/" : location.origin + "/api/pages/"
    },
    get POST_MODEL() {
        return libraryMode ? location.origin + "/api/library" : location.origin + "/api/pages"
    },
    POST_FORM: location.origin + "/api/orders",
    POST_INSTRUCTIONS: location.origin + "/api/instructions",
    GET_CATEGORIES: location.origin + "/api/categories",
    GET_LIBRARY: location.origin + "/api/library_models",
    LEAVE_MESSAGE: "You have unsaved changes.",
    MOVE_KEY_CODES: [37, 38, 39, 40, 87, 65, 83, 68, 16, 32],
    FEET_IN_CENTIMETER: 1 / 30.48,
    KEY_NAMES: {
        38: "FORWARD",
        40: "BACKWARD",
        87: "FORWARD",
        83: "BACKWARD",
        37: "LEFT",
        39: "RIGHT",
        65: "LEFT",
        68: "RIGHT",
        32: "UP",
        16: "DOWN"
    },
    WALL_FORM: {
        ALL_REQUIRED_MSG: "All fields are required",
        ONLY_DIGITS: "Incorrect number",
        MAX_LENGTH: 25,
        MAX_INCHES: 12,
        MAX_HEIGHT_CENTIMETERS: 762,
        MAX_LENGTH_CENTIMETERS: 762,
        MIN_LENGTH_CENTIMETERS: 30,
        MAX_LENGTH_MSG: "Max value is 25",
        MAX_INCHES_MSG: "Max value is 12",
        MAX_LENGTH_CENTIMETERS_MSG: "Max value is 762",
        MAX_HEIGHT_CENTIMETERS_MSG: "Max value is 12"
    },
    GRID: {
        COLOR: 13421772,
        CELL_COUNT: 150,
        CELL_WIDTH: 60,
        ANGLE: -Math.PI / 2,
        WIDTH: 9e3,
        FLOOR: -60,
        X: 0,
        Y: 0,
        Z: 0
    },
    LIGHT: {
        COLOR: 16777215,
        X: 2e3,
        Y: 1500,
        Z: 2e3
    },
    CONTROLS: {
        MAX_ANGLE_RAD: 1.5
    },
    CAMERA: {
        X: 0,
        Y: 500,
        Z: 1e3,
        ZOOM: 40,
        LOADZOOM: 100,
        STEP: 40,
        ZOOM_STEP: 1.05,
        MAXDISTANCE: 9e3,
        MINDISTANCE: 320,
        ROTATE: {
            DOWN: {
                X: {
                    FROM: -1.3,
                    TO: 0
                },
                Y: {
                    FROM: -1.52,
                    TO: 1
                },
                Z: {
                    FROM: -.4,
                    TO: 1.3
                }
            },
            LEFT: {
                X: {
                    FROM: -2.5,
                    TO: -.4
                },
                Y: {
                    FROM: 0,
                    TO: 1.45
                },
                Z: {
                    FROM: 0,
                    TO: 2.5
                }
            },
            UP: {
                X: {
                    FROM: -2.89,
                    TO: -2.1
                },
                Y: {
                    FROM: -1.1,
                    TO: 1.2
                },
                Z: {
                    FROM: -3.2,
                    TO: 3.3
                }
            }
        }
    },
    HUMAN: {
        WIDTH: 700,
        HEIGHT: 1400,
        Y_POS: 640,
        X_POS: 0,
        Z_POS: 100
    },
    BLOCK: {
        DOOR_HEIGHT: 1680,
        DEFAULT_COLOR: 11450299,
        HEIGHT: 120,
        LENGTH: 240,
        MIN_DISTANCE: 720,
        FULL_SHELF_LENGTH: 480,
        LINTEL_LENGTH: 720,
        DESK_LENGTH: 720,
        DESK_WIDTH: 240,
        HALF_SHELF_LENGTH: 450,
        WIDTH: 120,
        CAP_HEIGHT: 25,
        SHELF_UNIT_HEIGHT: 5,
        SHELF_UNIT_Y_POSITION: 10,
        SHELF_UNIT_Y_OFFSET: 53,
        HIGHLIGHT: .2,
        QUARTER_STEP: 30,
        HALF_STEP: 60,
        FULL_STEP: 120,
        MOVE_DELAY: 100,
        COLOR: {
            RED: 15340860,
            GREEN: 1474360,
            LIGHT_GRAY: 11450299,
            DARK_GRAY: 4212297,
            LIGHT_BLUE: 11198433,
            PINK: 16239049,
            PURPLE: 4854924,
            BLUE: 867488,
            YELLOW: 16633115,
            BROWN: 4794908,
            ORANGE: 16555854,
            BLACK: 3355443,
            WHITE: 16185592,
            TRANSLUCENT: 8487297
        },
        ANGLE: Math.PI / 2,
        CAP_POSITION: 48,
        SHELF_POSITION: 67,
        HALF: {
            WIDTH: 60
        },
        SIZE: {
            ONE_LUG: 1,
            TWO_LUG: 2,
            FOUR_LUG: 4
        }
    },
    CONNECTOR: {
        HEIGHT: 20,
        LENGTH: 45,
        WIDTH: 45,
        STEP: 58,
        POS: {
            Y: 70,
            Z: 27.5,
            FULL_X: 85,
            HALF_X: 27.5,
            QUARTER_X: 0
        }
    }
}), define("models/blocks/parts/materials", [], function() {
    THREE.ImageUtils.loadTexture("images/translucent.png"), THREE.ImageUtils.loadTexture("images/gold.jpg"), THREE.ImageUtils.loadTexture("images/silver.jpg");
    var e = {},
        t = function(e) {
            var t;
            switch (e) {
                case "TRANSLUCENT":
                    t = new THREE.MeshLambertMaterial({
                        map: THREE.ImageUtils.loadTexture("images/translucent.png")
                    });
                    break;
                case "GOLD":
                    t = new THREE.MeshLambertMaterial({
                        map: THREE.ImageUtils.loadTexture("images/gold.jpg")
                    });
                    break;
                case "SILVER":
                    t = new THREE.MeshLambertMaterial({
                        map: THREE.ImageUtils.loadTexture("images/silver.jpg")
                    });
                    break;
                default:
                    t = new THREE.MeshLambertMaterial({
                        color: e
                    })
            }
            return t
        },
        o = function(o, n) {
            var r = n ? "transparent" : "opaque";
            return e[o] || (e[o] = {}), e[o][r] = t(o), n && (e[o][r].opacity = .5, e[o][r].transparent = !0), e[o][r]
        };
    return {
        get: function(t, n) {
            var r = n ? "transparent" : "opaque";
            return e[t] && e[t][r] || o(t, n)
        }
    }
}), define("lib/bezier", [], function() {
    return function(e, t, o, n, r) {
        var i = function(t) {
                var n = 1 - t;
                return 3 * n * n * t * e + 3 * n * t * t * o + t * t * t
            },
            s = function(e) {
                var o = 1 - e;
                return 3 * o * o * e * t + 3 * o * e * e * n + e * e * e
            },
            a = function(t) {
                var n = 1 - t;
                return 3 * (2 * (t - 1) * t + n * n) * e + 3 * (-t * t * t + 2 * n * t) * o
            };
        return function(e) {
            var t, o, n, l, c, u, d = e;
            for (n = d, u = 0; u < 8; u++) {
                if (l = i(n) - d, Math.abs(l) < r) return s(n);
                if (c = a(n), Math.abs(c) < 1e-6) break;
                n -= l / c
            }
            if (t = 0, o = 1, n = d, n < t) return s(t);
            if (n > o) return s(o);
            for (; t < o;) {
                if (l = i(n), Math.abs(l - d) < r) return s(n);
                d > l ? t = n : o = n, n = .5 * (o - t) + t
            }
            return s(n)
        }
    }
}), define("animations/animation", ["require", "app", "../lib/bezier"], function(e) {
    var t = e("app"),
        o = e("../lib/bezier"),
        n = o(.42, 0, .58, 1, 1e3 / 60 / 250 / 4);
    return function(e) {
        var o = e.done || function() {},
            r = e.step || function() {},
            i = 0,
            s = e.count || 10,
            a = e.value,
            l = 250 / s,
            c = setInterval(function() {
                i += 1;
                var e = a * n(i / s);
                r(e), t.needsUpdate = !0, i === s && (clearInterval(c), o(a), t.needsUpdate = !0)
            }, l)
    }
}), define("animations/rotation", ["require", "./animation", "constants", "app"], function(e) {
    var t = e("./animation"),
        o = e("constants"),
        n = e("app"),
        r = !0;
    return function e(i) {
        var s = i.startValue,
            a = i.model,
            l = i.done || function() {},
            c = i.endValue;
        ["line", "quarter", "quarter_cap"].some(function(e) {
            return n.activeBlock.name === e
        }) && !a.name && (r ? (a.position.x -= o.BLOCK.QUARTER_STEP, a.position.z += o.BLOCK.QUARTER_STEP, r = !1) : (a.position.x += o.BLOCK.QUARTER_STEP, a.position.z -= o.BLOCK.QUARTER_STEP, r = !0)), e.isRunning = !0, t({
            step: function(e) {
                a.rotation.y = s + e
            },
            done: function() {
                e.isRunning = !1, l()
            },
            value: c - s
        })
    }
}), define("animations/fade-in", ["require", "./animation"], function(e) {
    var t = e("./animation");
    return function(e) {
        var o = e.models || [e.model];
        o.forEach(function(e) {
            return e.scale.set(.8, .8, .8)
        }), t({
            step: function(e) {
                var t = .8 + e;
                o.forEach(function(e) {
                    return e.scale.set(t, t, t)
                })
            },
            done: e.done,
            value: 1 - .8
        })
    }
}), define("animations/fade-out", ["require", "./animation"], function(e) {
    var t = e("./animation");
    return function(e) {
        var o = e.models || [e.model];
        o.forEach(function(e) {
            return e.scale.set(1, 1, 1)
        }), t({
            step: function(e) {
                var t = 1 + e;
                o.forEach(function(e) {
                    return e.scale.set(t, t, t)
                })
            },
            done: e.done,
            value: 1 - .8
        })
    }
}), define("animations/land", ["require", "./animation"], function(e) {
    var t = e("./animation");
    return function e(o) {
        var n = o.model,
            r = o.step || function() {},
            i = o.done || function() {},
            s = o.value;
        n.position.y = 500 + s, e.isRunning = !0, t({
            duration: 100,
            step: function(e) {
                n.visible || (n.visible = !0), n.position.y = 500 + s - e, r(e)
            },
            done: function() {
                n.position.y = s, e.isRunning = !1, i()
            },
            value: 500
        })
    }
}), define("animations/land_all", ["require", "./land"], function(e) {
    var t = e("./land");
    return function e(o) {
        var n = o.models,
            r = o.done || function() {},
            i = o.value,
            s = n[0],
            a = n.map(function(e) {
                return e.position.y += 500
            });
        s.position.y -= 500, e.isRunning = !0, t({
            value: i,
            model: s,
            step: function(e) {
                n.forEach(function(t, o) {
                    t !== s && (t.position.y = a[o] - e)
                })
            },
            done: function() {
                e.isRunning = !1, r()
            }
        })
    }
}), define("animations/animator", ["require", "./rotation", "./fade-in", "./fade-out", "./land", "./land_all"], function(e) {
    return {
        rotate: e("./rotation"),
        fadeIn: e("./fade-in"),
        fadeOut: e("./fade-out"),
        land: e("./land"),
        landAll: e("./land_all")
    }
}), define("lib/blocks/check_direction", ["require", "constants"], function(e) {
    var t = e("constants"),
        o = {
            1: "x",
            2: "z",
            3: "x",
            4: "z"
        },
        n = {
            1: "z",
            2: "x",
            3: "z",
            4: "x"
        },
        r = {
            1: -t.BLOCK.HALF_STEP,
            2: t.BLOCK.HALF_STEP,
            3: t.BLOCK.HALF_STEP,
            4: -t.BLOCK.HALF_STEP
        },
        i = {
            1: -t.BLOCK.HALF_STEP,
            2: -t.BLOCK.HALF_STEP,
            3: t.BLOCK.HALF_STEP,
            4: t.BLOCK.HALF_STEP
        },
        s = function(e, t, n) {
            e.position[o[t]] += r[t] * n
        },
        a = function(e, t, o) {
            e.position[n[t]] += i[t] * o
        };
    return {
        UP: function(e) {
            return e.addToPosition("y", t.BLOCK.HEIGHT)
        },
        DOWN: function(e) {
            return e.addToPosition("y", -t.BLOCK.HEIGHT)
        },
        LEFT: function(e, t) {
            return s(e, t, 1)
        },
        RIGHT: function(e, t) {
            return s(e, t, -1)
        },
        FORWARD: function(e, t) {
            return a(e, t, 1)
        },
        BACKWARD: function(e, t) {
            return a(e, t, -1)
        }
    }
}), define("lib/blocks/check-on-same-height", [], function() {
    return function(e, t) {
        return e instanceof Door || t instanceof Door || e.getPositionY() === t.getPositionY()
    }
}), define("helpers/get_bounding_box", ["require", "app"], function(e) {
    var t = e("app");
    return function(e) {
        var o = e.clone();
        return o.children.length = 0, e.parent && e.parent !== t.scene && (o.position.setFromMatrixPosition(e.matrixWorld), o.scale.set(e.parent.scale.x, e.parent.scale.y, e.parent.scale.z), o.rotation.y += e.parent.rotation.y), o.updateMatrix(), (new THREE.Box3).setFromObject(o)
    }
}), define("helpers/box_collide", [], function() {
    var e = function(e, t, o) {
        return t.max[e] < o.min[e] || t.min[e] > o.max[e]
    };
    return function(t, o, n) {
        return !t.some(function(t) {
            return e(t, o, n)
        })
    }
}), define("lib/blocks/check_intersections", ["require", "helpers/get_bounding_box", "helpers/box_collide"], function(e) {
    var t = e("helpers/get_bounding_box"),
        o = e("helpers/box_collide"),
        n = ["x", "y", "z"];
    return function(e, r) {
        return o(n, t(e), t(r))
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("lib/blocks/collide_manager", ["require", "lib/blocks/check_intersections"], function(e) {
    var t = e("lib/blocks/check_intersections"),
        o = function(e) {
            return "collide" === e.name
        },
        n = function(e) {
            return "cap_with_holes" === e.name
        },
        r = function(e, o) {
            return [e, o].some(function(r) {
                return r.children.filter(n).some(function(n) {
                    return t(n, r === o ? e : o)
                })
            })
        },
        i = function(e, t) {
            return [e, t].some(function(o) {
                return o.children.filter(n).some(function(n) {
                    return s.ComputedCollide(o === t ? e : t, n)
                })
            })
        },
        s = {
            Door: function(e) {
                function t(t, o) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function(e, o) {
                return o instanceof ShelfUnit ? s.ComputedCollide(e, o.children.find(function(e) {
                    return "for_door" === e.name
                })) || e.children.filter(n).some(function(e) {
                    return t(o, e)
                }) : o instanceof Door ? i(e, o) : s.ComputedCollide(e, o)
            }),
            ShelfUnit: function(e) {
                function t(t, o) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function(e, o) {
                return o instanceof Door ? s.Door(o, e) : o instanceof ShelfUnit ? t(e, o) || r(e, o) : t(e, o)
            }),
            ComputedCollide: function(e) {
                function t(t, o) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function(e, n) {
                var r = e.children.filter(o);
                return n instanceof ComputedCollide ? r.some(function(e) {
                    return n.children.filter(o).some(function(o) {
                        return t(e, o)
                    })
                }) : r.some(function(e) {
                    return t(e, n)
                })
            }),
            default: t
        };
    return function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "checkIntersections",
            value: function(e, t) {
                var o = ArrayHelper.firstWhere([ShelfUnit, Door, ComputedCollide], function(e) {
                    return t instanceof e
                });
                return e.updateMatrixWorld(), t.updateMatrixWorld(), o ? s[o.className](t, e) : (o = ArrayHelper.firstWhere([ShelfUnit, Door, ComputedCollide], function(t) {
                    return e instanceof t
                }), s[o ? o.className : "default"](e, t))
            }
        }]), e
    }()
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("geometries/base", [], function() {
    return function() {
        function e(t) {
            _classCallCheck(this, e), Object.assign(this, {
                xOffset: 0,
                zOffset: 0,
                yOffset: 0,
                scale: 1,
                width: 0,
                height: 0,
                length: 0
            }, t)
        }
        return _createClass(e, [{
            key: "setOffset",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                    o = t.xOffset,
                    n = t.yOffset,
                    r = t.zOffset,
                    i = (new THREE.Matrix4).makeTranslation(o, n, r);
                e.applyMatrix(i)
            }
        }, {
            key: "generateBox",
            value: function() {
                var e = this.width,
                    t = this.scale,
                    o = this.height,
                    n = this.length,
                    r = new THREE.BoxGeometry((e - 1) / t, o / t, (n - 1) / t);
                return this.setOffset(r), (new THREE.BufferGeometry).fromGeometry(r)
            }
        }, {
            key: "create",
            value: function() {
                this.box = this.generateBox()
            }
        }, {
            key: "scaledSize",
            get: function() {
                return {
                    width: this.width / this.scale,
                    height: this.height / this.scale,
                    length: this.length / this.scale
                }
            }
        }]), e
    }()
}), define("geometries/cap-with-holes", ["require", "./base"], function(e) {
    var t = e("./base");
    return function(e) {
        function t() {
            var e;
            _classCallCheck(this, t);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            var i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));
            return Object.assign(i, {
                width: 120,
                height: 50,
                length: 120
            }), i
        }
        return _inherits(t, e), t
    }(t)
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("geometries/door", ["require", "../app", "./base", "./cap-with-holes", "../constants"], function(e) {
    var t = e("../app"),
        o = e("./base"),
        n = e("./cap-with-holes"),
        r = new THREE.OBJLoader,
        i = e("../constants"),
        s = .8;
    return new(function(e) {
        function o() {
            var e;
            _classCallCheck(this, o);
            for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
            var l = _possibleConstructorReturn(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(r)));
            return Object.assign(l, {
                scale: s,
                width: 720,
                height: i.BLOCK.DOOR_HEIGHT,
                length: 120,
                yOffset: 1050,
                hole: new n({
                    yOffset: 2110,
                    scale: s,
                    xMeshOffset: 200
                }),
                geometryPath: "/resources/door/OakmontSpectrumHalfOpen.obj",
                view: null,
                capWithHoles: null
            }), l.loadGeometry(), l
        }
        return _inherits(o, e), _createClass(o, [{
            key: "loadGeometry",
            value: function() {
                var e = this;
                t.IsReadyPromise = t.IsReadyPromise.then(function() {
                    r.load(e.geometryPath, function(t) {
                        e.view = t.children[0].geometry, e.create()
                    })
                })
            }
        }]), o
    }(o))
}), define("models/blocks/parts/highlight_mesh", ["constants", "geometries/door"], function() {
    var e = require("constants"),
        t = require("geometries/door"),
        o = e.BLOCK.HEIGHT + e.CONNECTOR.LENGTH,
        n = e.BLOCK.LENGTH + e.CONNECTOR.LENGTH,
        r = e.BLOCK.WIDTH + e.CONNECTOR.LENGTH,
        i = e.BLOCK.CAP_HEIGHT + e.CONNECTOR.LENGTH,
        s = e.BLOCK.SHELF_UNIT_HEIGHT + e.CONNECTOR.LENGTH,
        a = r / 2,
        l = new THREE.BoxGeometry(n, o, r),
        c = new THREE.BoxGeometry(r, o, r),
        u = new THREE.BoxGeometry(a, o, r),
        d = new THREE.BoxGeometry(n, o, a),
        f = new THREE.BoxGeometry(r / 2, o, r / 2),
        p = new THREE.BoxGeometry(n, i, r),
        h = new THREE.BoxGeometry(n / 2, i, r / 2),
        m = new THREE.BoxGeometry(2 * n, s, n),
        y = new THREE.BoxGeometry(e.BLOCK.FULL_SHELF_LENGTH + e.BLOCK.LENGTH + e.CONNECTOR.LENGTH, s, n),
        O = new THREE.BoxGeometry(e.BLOCK.LINTEL_LENGTH + e.BLOCK.LENGTH + e.CONNECTOR.LENGTH, s, r),
        L = new THREE.BoxGeometry(e.BLOCK.FULL_SHELF_LENGTH + 2 * e.BLOCK.LENGTH + e.BLOCK.WIDTH, s, 2 * n),
        v = new THREE.BoxGeometry(n / 10, o / 40, r / 20),
        b = new THREE.MeshBasicMaterial({
            opacity: e.BLOCK.HIGHLIGHT,
            depthWrite: !1,
            transparent: !0
        }),
        E = {
            full: (new THREE.BufferGeometry).fromGeometry(l),
            half: (new THREE.BufferGeometry).fromGeometry(c),
            quarter: (new THREE.BufferGeometry).fromGeometry(u),
            line: (new THREE.BufferGeometry).fromGeometry(d),
            single: (new THREE.BufferGeometry).fromGeometry(f),
            footer: (new THREE.BufferGeometry).fromGeometry(v),
            cap: (new THREE.BufferGeometry).fromGeometry(p),
            quarter_cap: (new THREE.BufferGeometry).fromGeometry(h),
            door: function() {
                var e = t.scaledSize,
                    o = e.width,
                    n = e.height,
                    r = e.length,
                    i = new THREE.BoxGeometry(o + 150, n + 50, r + 50),
                    s = (new THREE.Matrix4).makeTranslation(0, 1100, 0);
                return i.applyMatrix(s), i
            }(),
            shelf_unit_24: (new THREE.BufferGeometry).fromGeometry(m),
            shelf_unit_36: (new THREE.BufferGeometry).fromGeometry(y),
            shelf_unit_48_lintel: (new THREE.BufferGeometry).fromGeometry(O),
            shelf_unit_36_half: (new THREE.BufferGeometry).fromGeometry(y),
            desk_unit: (new THREE.BufferGeometry).fromGeometry(L)
        };
    return {
        getHighLightFor: function(e) {
            return new THREE.Mesh(E[e], b.clone())
        }
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/Block", ["require", "constants", "app", "animations/animator", "./parts/materials", "lib/blocks/check_direction", "lib/blocks/check-on-same-height", "lib/blocks/collide_manager", "helpers/get_bounding_box", "./parts/highlight_mesh"], function(e) {
    var t = e("constants"),
        o = e("app"),
        n = e("animations/animator"),
        r = e("./parts/materials"),
        i = e("lib/blocks/check_direction"),
        s = e("lib/blocks/check-on-same-height"),
        a = e("lib/blocks/collide_manager"),
        l = e("helpers/get_bounding_box"),
        c = e("./parts/highlight_mesh"),
        u = function(e) {
            function u(e, t) {
                _classCallCheck(this, u);
                var n = _possibleConstructorReturn(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e, t));
                return n.connected = [], n.userData.id = n.id, o.objectsMap[n.id] = n, n
            }
            return _inherits(u, e), _createClass(u, [{
                key: "setTransparency",
                value: function(e) {
                    this.material = r.get(this.userData.texture, e)
                }
            }, {
                key: "changeColor",
                value: function(e) {
                    this.userData.texture = e, this.material = r.get(e, this.material.transparent);
                    var t;
                    t = 16777215 === this.material.color.getHex() || 16185592 === this.material.color.getHex() ? 11450299 : this.material.color.getHex(), this.children.forEach(function(e) {
                        e.material.color.setHex(ColorHelper.getDarker(t))
                    }), o.needsUpdate = !0
                }
            }, {
                key: "addCollide",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            name: "collide"
                        },
                        o = t.name,
                        n = new THREE.Mesh(e);
                    return n.visible = !1, n.name = o, this.add(n), n
                }
            }, {
                key: "toggleHighLight",
                value: function(e) {
                    var t = this;
                    if (e = e || function() {}, this.highLightMesh) {
                        var o = this.highLightMesh;
                        this.highLightMesh = void 0, n.fadeOut({
                            model: o,
                            done: function() {
                                t.remove(o), o = null, e()
                            }
                        })
                    } else {
                        this.highLightMesh = c.getHighLightFor(this.name);
                        var r;
                        r = 16777215 === this.material.color.getHex() || 16185592 === this.material.color.getHex() ? 11450299 : this.material.color.getHex(), this.highLightMesh.material.color.setHex(ColorHelper.getDarker(r)), this.add(this.highLightMesh), n.fadeIn({
                            model: this.highLightMesh,
                            done: e
                        })
                    }
                    return this
                }
            }, {
                key: "anyConnected",
                value: function(e) {
                    if ("UP" !== e && "DOWN" !== e || !this.connected.length) return !1;
                    var t = this.getPositionY({
                        forValidation: !0
                    });
                    return this.connected.some(function(n) {
                        var r = o.objectsMap[n] || o.importedObjectsMap[n],
                            i = r.getPositionY({
                                forValidation: !0
                            });
                        return "UP" === e ? t < i : t > i
                    })
                }
            }, {
                key: "connect",
                value: function(e) {
                    -1 === this.connected.indexOf(e.userData.id) && this.connected.push(e.userData.id), -1 === e.connected.indexOf(this.userData.id) && e.connected.push(this.userData.id)
                }
            }, {
                key: "removeConnection",
                value: function(e) {
                    var t = this,
                        o = this.children.filter(function(e) {
                            return e instanceof u
                        }),
                        n = e.children.filter(function(e) {
                            return e instanceof u
                        });
                    this.connected = ArrayHelper.remove(this.connected, e.userData.id), e.connected = ArrayHelper.remove(e.connected, this.userData.id), o.forEach(function(t) {
                        return t.connected = ArrayHelper.remove(t.connected, e.userData.id)
                    }), n.forEach(function(e) {
                        return e.connected = ArrayHelper.remove(e.connected, t.userData.id)
                    })
                }
            }, {
                key: "checkIfTouching",
                value: function(e) {
                    var t = e.isDoor || this.isDoor;
                    if (this.position.y !== e.position.y && !t) return !1;
                    var o = l(this.collide),
                        n = l(e.collide),
                        r = !["x", "z"].some(function(e) {
                            return o.max[e] + 1 < n.min[e] - 1 || o.min[e] - 1 > n.max[e] + 1
                        });
                    return t ? r && !(o.max.y + 1 < n.min.y - 1 || o.min.y - 1 > n.max.y + 1) : r
                }
            }, {
                key: "setConnections",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.notSelectedBlocks,
                        n = this,
                        r = n.getPositionY();
                    n.connected.forEach(function(e) {
                        var t = o.objectsMap[e] || o.importedObjectsMap[e];
                        t.isSelected && n.isSelected || (t.connected = ArrayHelper.remove(t.connected, n.userData.id), t.hasBlockChildren && t.children.forEach(function(e) {
                            e instanceof u && (e.connected = ArrayHelper.remove(e.connected, n.userData.id))
                        }), n.connected = ArrayHelper.remove(n.connected, t.userData.id))
                    }), e.filter(function(e) {
                        var o = e.getPositionY();
                        if (Math.abs(o - r) === t.BLOCK.HEIGHT && n.position.distanceTo(e.position) < t.BLOCK.MIN_DISTANCE) return n.checkIntersectionsWith(e);
                        if ((e instanceof Door || n instanceof Door) && Math.abs(o - r) === Door.HEIGHT) {
                            var i = o - r,
                                s = void 0;
                            return n.position.y += i, s = n.checkIntersectionsWith(e), n.position.y -= i, s
                        }
                        e instanceof ShelfUnit && o === r && e.setConnections()
                    }).forEach(function(e) {
                        return n.connect(e)
                    })
                }
            }, {
                key: "changePosition",
                value: function(e, n) {
                    this.position.x = e[0].point.sub(n).x;
                    var r = o.activeBlock.position.y < e[0].point.sub(n).y ? "UP" : "DOWN";
                    (o.selectedBlocks.length && !o.selectedBlocks.anyConnected(r) || !o.activeBlock.anyConnected(r) && !o.selectedBlocks.length) && (o.activeBlock.position.y = e[0].point.sub(n).y, this.normalizePosition("y", t.BLOCK.HEIGHT)), this.position.z = e[0].point.sub(n).z, this.normalizePosition("x", t.GRID.CELL_WIDTH), this.normalizePosition("z", t.GRID.CELL_WIDTH)
                }
            }, {
                key: "checkIntersectionsWith",
                value: function(e) {
                    return a.checkIntersections(this, e)
                }
            }, {
                key: "anyXZCollides",
                value: function() {
                    var e = this;
                    return o.objects.filter(function(t) {
                        return t !== e
                    }).some(function(t) {
                        return !!s(e, t) && e.checkIntersectionsWith(t)
                    })
                }
            }, {
                key: "rotate",
                value: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                    if (!n.rotate.isRunning) {
                        var i = this;
                        this.rotation.y += e, this.normalizePosition("z", t.GRID.CELL_WIDTH), this.normalizePosition("x", t.GRID.CELL_WIDTH), this.checkBlockOnGrid(t.GRID.WIDTH, t.GRID.WIDTH) ? (this.findFreePosition(), this.rotation.y -= e, n.rotate({
                            model: this,
                            startValue: this.rotation.y,
                            endValue: this.rotation.y + e,
                            done: function() {
                                i.setConnections(), o.needsBlockValidation = !0, r()
                            }
                        })) : this.rotation.y -= e
                    }
                }
            }, {
                key: "moveBlock",
                value: function(e, n) {
                    o.needsUpdate = !0, i[e](this, n), this.normalizePosition("y", t.BLOCK.HEIGHT)
                }
            }, {
                key: "getPosition",
                value: function(e) {
                    return this["getPosition" + e.toUpperCase()]()
                }
            }, {
                key: "addToPosition",
                value: function(e, t) {
                    this.position[e] = this.position[e] + t
                }
            }, {
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e
                }
            }, {
                key: "setPositionY",
                value: function(e) {
                    this.position.y = e > 0 ? e : 0
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e
                }
            }, {
                key: "setPosition",
                value: function(e, t) {
                    this["setPosition" + e.toUpperCase()](t)
                }
            }, {
                key: "collide",
                get: function() {
                    return this
                }
            }], [{
                key: "connectorGeometry",
                get: function() {
                    return new THREE.CylinderGeometry(t.CONNECTOR.LENGTH/2, t.CONNECTOR.LENGTH/2, t.CONNECTOR.HEIGHT, 64, 1, false, 0, 2*Math.PI)
                    //return new THREE.BoxGeometry(t.CONNECTOR.LENGTH, t.CONNECTOR.HEIGHT, t.CONNECTOR.WIDTH)
                }
            }]), u
        }(THREE.Mesh);
    return u.prototype.checkBlockOnGrid = function(e, o) {
        var n = this.position.clone();
        return "full" !== this.name && "cap" !== this.name && "shelf_unit" !== this.name || this.rotation.y ? n.z += n.z > 0 ? t.GRID.CELL_WIDTH : -t.GRID.CELL_WIDTH : n.x += n.x > 0 ? t.GRID.CELL_WIDTH : -t.GRID.CELL_WIDTH, o = "quarter" === this.name || "half" === this.name ? o + t.GRID.CELL_WIDTH : o, !(Math.abs(n.x) >= Math.abs(e) || Math.abs(n.z) >= Math.abs(o))
    }, u.prototype.normalizePosition = function(e, t) {
        var o = this.getPosition(e);
        o = Math.round(o / t) * t, this.setPosition(e, o)
    }, u.prototype.findFreePosition = function() {
        this.anyXZCollides() ? (this.position.y += t.BLOCK.HEIGHT, this.updateMatrix(), this.findFreePosition()) : o.needsBlockValidation = !0
    }, u.prototype.getPositionY = function() {
        return this.position.y
    }, u.prototype.getPositionZ = function() {
        return this.position.z
    }, u.prototype.getPositionX = function() {
        return this.position.x
    }, u.turnOffHighLight = function(e, t) {
        var o = e.map(function(e) {
            return e.highLightMesh
        });
        e.forEach(function(e) {
            return e.highLightMesh = void 0
        }), n.fadeOut({
            models: o,
            done: function() {
                e.forEach(function(e, t) {
                    return e.remove(o[t])
                }), t()
            }
        })
    }, u.turnOnHighLight = function(e, t) {
        t = t || function() {}, e.filter(function(e) {
            return !e.highLightMesh
        }).forEach(function(e) {
            e.highLightMesh = c.getHighLightFor(e.name);
            var t;
            t = 16777215 === e.material.color.getHex() || 16185592 === e.material.color.getHex() ? 11450299 : e.material.color.getHex(), e.highLightMesh.material.color.setHex(ColorHelper.getDarker(t)), e.add(e.highLightMesh)
        }), n.fadeIn({
            models: e.map(function(e) {
                return e.highLightMesh
            }),
            done: t
        })
    }, window.Block = u
}), define("models/blocks/FullBlock", ["require", "../../constants", "./parts/materials", "./Block"], function(e) {
    function t(e) {
        var t, a, l, c, u, d = i.get(e, !1);
        if (o) u = o;
        else {
            for (u = new THREE.BoxGeometry(r.BLOCK.LENGTH - 1, r.BLOCK.HEIGHT, r.BLOCK.WIDTH - 1), l = 0; l < r.BLOCK.SIZE.TWO_LUG; l += 1)
                for (c = 0; c < r.BLOCK.SIZE.FOUR_LUG; c += 1) t = new THREE.Mesh(s.connectorGeometry, d), t.position.y = r.CONNECTOR.POS.Y, t.position.z = r.CONNECTOR.POS.Z - l * r.CONNECTOR.STEP, t.position.x = r.CONNECTOR.POS.FULL_X - c * r.CONNECTOR.STEP, u.mergeMesh(t);
            var f = new THREE.EdgesHelper(new THREE.Mesh(u), ColorHelper.getDarker(e));
            n = f.geometry, o = (new THREE.BufferGeometry).fromGeometry(u)
        }
        a = new s(u, d), a.length = r.BLOCK.LENGTH, a.height = r.BLOCK.HEIGHT, a.width = r.BLOCK.WIDTH;
        var p = new THREE.Line(n, new THREE.LineBasicMaterial({
            color: ColorHelper.getDarker(e)
        }), THREE.LinePieces);
        return p.matrixAutoUpdate = !1, a.add(p), a
    }
    var o, n, r = e("../../constants"),
        i = e("./parts/materials"),
        s = e("./Block");
    return t.prototype = Object.create(s.prototype), t.prototype.constructor = t, t
}), define("models/blocks/HalfBlock", ["require", "../../constants", "./parts/materials", "./Block"], function(e) {
    function t(e) {
        var t, a, l, c, u, d = i.get(e, !1);
        if (o) u = o;
        else {
            for (u = new THREE.BoxGeometry(r.BLOCK.LENGTH / 2 - 1, r.BLOCK.HEIGHT, r.BLOCK.WIDTH - 1), l = 0; l < r.BLOCK.SIZE.TWO_LUG; l += 1)
                for (c = 0; c < r.BLOCK.SIZE.TWO_LUG; c += 1) t = new THREE.Mesh(s.connectorGeometry), t.position.y = r.CONNECTOR.POS.Y, t.position.z = r.CONNECTOR.POS.Z - l * r.CONNECTOR.STEP, t.position.x = r.CONNECTOR.POS.HALF_X - c * r.CONNECTOR.STEP, u.mergeMesh(t);
            o = (new THREE.BufferGeometry).fromGeometry(u);
            var f = new THREE.EdgesHelper(new THREE.Mesh(u), ColorHelper.getDarker(e));
            n = f.geometry
        }
        a = new s(u, d), a.length = r.BLOCK.LENGTH / 2, a.height = r.BLOCK.HEIGHT, a.width = r.BLOCK.WIDTH;
        var p = new THREE.Line(n, new THREE.LineBasicMaterial({
            color: ColorHelper.getDarker(e)
        }), THREE.LinePieces);
        return p.matrixAutoUpdate = !1, a.add(p), a
    }
    var o, n, r = e("../../constants"),
        i = e("./parts/materials"),
        s = e("./Block");
    return t.prototype = Object.create(s.prototype), t.prototype.constructor = t, t
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/QuarterBlock", ["require", "../../constants", "./parts/materials", "./Block"], function(e) {
    var t, o, n = e("../../constants"),
        r = e("./parts/materials"),
        i = e("./Block"),
        s = function() {
            var e, r, s = new THREE.BoxGeometry(n.BLOCK.LENGTH / 4 - 1, n.BLOCK.HEIGHT, n.BLOCK.WIDTH - 1);
            for (r = 0; r < n.BLOCK.SIZE.TWO_LUG; r += 1) e = new THREE.Mesh(i.connectorGeometry), e.position.y = n.CONNECTOR.POS.Y, e.position.z = n.CONNECTOR.POS.Z - r * n.CONNECTOR.STEP, e.position.x = n.CONNECTOR.POS.QUARTER_X, s.mergeMesh(e);
            t = (new THREE.BufferGeometry).fromGeometry(s);
            var a = new THREE.EdgesHelper(new THREE.Mesh(s));
            return o = a.geometry, t
        },
        a = function(e) {
            function i(e) {
                _classCallCheck(this, i);
                var a = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t || s(), r.get(e, !1))),
                    l = new THREE.Line(o, new THREE.LineBasicMaterial({
                        color: ColorHelper.getDarker(e)
                    }), THREE.LinePieces);
                return l.matrixAutoUpdate = !1, a.add(l), a.position.x > 0 && (a.position.x -= constants.BLOCK.HALF_STEP), a.length = n.BLOCK.LENGTH / 4, a.height = n.BLOCK.HEIGHT, a.width = n.BLOCK.WIDTH, a
            }
            return _inherits(i, e), _createClass(i, [{
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e, this.rotation.y % Math.PI < 1 && (this.position.x -= n.BLOCK.QUARTER_STEP)
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e, this.rotation.y % Math.PI > 1 && (this.position.z -= n.BLOCK.QUARTER_STEP)
                }
            }]), i
        }(i);
    return window.QuarterBlock = a
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/SingleBlock", ["require", "../../constants", "./parts/materials", "./Block"], function(e) {
    var t, o, n = e("../../constants"),
        r = e("./parts/materials"),
        i = e("./Block"),
        s = function() {
            var e, r, s = new THREE.BoxGeometry(n.BLOCK.LENGTH / 4 - 1, n.BLOCK.HEIGHT, n.BLOCK.WIDTH / 2 - 1);
            for (r = 0; r < n.BLOCK.SIZE.ONE_LUG; r += 1) e = new THREE.Mesh(i.connectorGeometry), e.position.y = n.CONNECTOR.POS.Y, e.position.z = 0 * n.CONNECTOR.POS.Z, e.position.x = n.CONNECTOR.POS.QUARTER_X, s.mergeMesh(e);
            t = (new THREE.BufferGeometry).fromGeometry(s);
            var a = new THREE.EdgesHelper(new THREE.Mesh(s));
            return o = a.geometry, t
        },
        a = function(e) {
            function i(e) {
                _classCallCheck(this, i);
                var a = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t || s(), r.get(e, !1))),
                    l = new THREE.Line(o, new THREE.LineBasicMaterial({
                        color: ColorHelper.getDarker(e)
                    }), THREE.LinePieces);
                return l.matrixAutoUpdate = !1, a.add(l), a.length = n.BLOCK.LENGTH / 4, a.height = n.BLOCK.HEIGHT, a.width = n.BLOCK.WIDTH, a
            }
            return _inherits(i, e), _createClass(i, [{
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e - n.BLOCK.QUARTER_STEP
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e - n.BLOCK.QUARTER_STEP
                }
            }]), i
        }(i);
    return window.SingleBlock = a
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/LineBlock", ["require", "../../constants", "./parts/materials", "./Block"], function(e) {
    var t, o, n = e("../../constants"),
        r = e("./parts/materials"),
        i = e("./Block"),
        s = function() {
            var e, r, s = new THREE.BoxGeometry(n.BLOCK.LENGTH - 1, n.BLOCK.HEIGHT, n.BLOCK.WIDTH / 2 - 1);
            for (r = 0; r < n.BLOCK.SIZE.FOUR_LUG; r += 1) e = new THREE.Mesh(i.connectorGeometry), e.position.y = n.CONNECTOR.POS.Y, e.position.z = n.CONNECTOR.POS.QUARTER_X, e.position.x = n.CONNECTOR.POS.FULL_X - r * n.CONNECTOR.STEP, s.mergeMesh(e);
            t = (new THREE.BufferGeometry).fromGeometry(s);
            var a = new THREE.EdgesHelper(new THREE.Mesh(s));
            return o = a.geometry, t
        },
        a = function(e) {
            function i(e) {
                _classCallCheck(this, i);
                var a = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t || s(), r.get(e, !1))),
                    l = new THREE.Line(o, new THREE.LineBasicMaterial({
                        color: ColorHelper.getDarker(e)
                    }), THREE.LinePieces);
                return l.matrixAutoUpdate = !1, a.add(l), a.position.x > 0 && (a.position.x -= constants.BLOCK.HALF_STEP), a.length = n.BLOCK.LENGTH, a.height = n.BLOCK.HEIGHT, a.width = n.BLOCK.WIDTH / 2, a
            }
            return _inherits(i, e), _createClass(i, [{
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e - n.BLOCK.QUARTER_STEP, this.rotation.y % Math.PI < 1 && (this.position.x += n.BLOCK.QUARTER_STEP)
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e - n.BLOCK.QUARTER_STEP
                }
            }]), i
        }(i);
    return window.LineBlock = a
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/FinishingCap", ["require", "../../constants", "./Block", "./parts/materials"], function(e) {
    var t = e("../../constants"),
        o = e("./Block"),
        n = e("./parts/materials"),
        r = new THREE.BoxGeometry(t.BLOCK.LENGTH - 1, t.BLOCK.CAP_HEIGHT, t.BLOCK.WIDTH - 1);
    return r = (new THREE.BufferGeometry).fromGeometry(r),
        function(e) {
            function o(e) {
                _classCallCheck(this, o);
                var i = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, r, n.get(e, !1)));
                return i.position.y -= t.BLOCK.CAP_POSITION, i
            }
            return _inherits(o, e), _createClass(o, [{
                key: "setPositionY",
                value: function(e) {
                    this.position.y = e > 0 ? e - t.BLOCK.CAP_POSITION : t.BLOCK.HEIGHT - t.BLOCK.CAP_POSITION
                }
            }, {
                key: "getPositionY",
                value: function() {
                    return this.position.y + t.BLOCK.CAP_POSITION
                }
            }]), o
        }(o)
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/QuarterCap", ["require", "../../constants", "./Block", "./parts/materials"], function(e) {
    var t = e("../../constants"),
        o = e("./Block"),
        n = e("./parts/materials"),
        r = new THREE.BoxGeometry(t.BLOCK.LENGTH / 2 - 1, t.BLOCK.CAP_HEIGHT, t.BLOCK.WIDTH / 2 - 1);
    return r = (new THREE.BufferGeometry).fromGeometry(r),
        function(e) {
            function o(e) {
                _classCallCheck(this, o);
                var i = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, r, n.get(e, !1)));
                return i.position.y -= t.BLOCK.CAP_POSITION, i
            }
            return _inherits(o, e), _createClass(o, [{
                key: "setPositionY",
                value: function(e) {
                    this.position.y = e > 0 ? e - t.BLOCK.CAP_POSITION : t.BLOCK.HEIGHT - t.BLOCK.CAP_POSITION
                }
            }, {
                key: "getPositionY",
                value: function() {
                    return this.position.y + t.BLOCK.CAP_POSITION
                }
            }, {
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e - t.BLOCK.QUARTER_STEP, this.rotation.y % Math.PI < 1 && (this.position.x += t.BLOCK.QUARTER_STEP)
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e - t.BLOCK.QUARTER_STEP, this.rotation.y % Math.PI > 1 && (this.position.z += t.BLOCK.QUARTER_STEP)
                }
            }]), o
        }(o)
}), define("models/blocks/computed_collide_block", ["require", "./Block"], function(e) {
    var t = e("./Block"),
        o = function(e) {
            function t(e, o) {
                return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o))
            }
            return _inherits(t, e), t
        }(t);
    return o.className = "ComputedCollide", window.ComputedCollide = o
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/footer_block", ["require", "app", "../../constants", "./parts/materials", "./computed_collide_block"], function(e) {
    var t, o = (e("app"), e("../../constants")),
        n = e("./parts/materials"),
        r = e("./computed_collide_block"),
        i = 20,
        s = (new THREE.BufferGeometry).fromGeometry(new THREE.BoxGeometry(179 / i, 45 / i, 119 / i));
    (new THREE.OBJLoader).load("/resources/footer/FO85D158D815-leg.obj", function(e) {
        var n, r = e.children[0],
            s = new THREE.Geometry;
        t = r.geometry;
        for (var l = 0; l < 2; l += 1)
            for (var c = 0; c < 2; c += 1) n = new THREE.Mesh(Block.connectorGeometry), n.position.y = a.CONNECTOR_Y, n.position.z = (o.CONNECTOR.POS.Z - l * o.CONNECTOR.STEP) / i, n.position.x = (a.CONNECTOR_X - c * o.CONNECTOR.STEP) / i, n.scale.set(1 / i, 1 / i, 1 / i), s.mergeMesh(n);
        t.merge((new THREE.BufferGeometry).fromGeometry(s))
    });
    var a = function(e) {
        function r() {
            _classCallCheck(this, r);
            var e = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t || generateGeometry(), n.get(o.BLOCK.COLOR.BLACK, !1)));
            return [1, -1].forEach(function(t) {
                var o = e.addCollide(s);
                o.position.x += 7.5 * t, o.position.y += 1
            }), e.scale.set(i, i, i), e
        }
        return _inherits(r, e), _createClass(r, [{
            key: "connect",
            value: function() {}
        }, {
            key: "changeColor",
            value: function() {}
        }, {
            key: "setPositionY",
            value: function(e) {
                this.position.y = e > 0 ? e - r.Y_POSITION : -r.Y_POSITION
            }
        }, {
            key: "getPositionY",
            value: function() {
                return this.position.y + r.Y_POSITION
            }
        }]), r
    }(r);
    return a.Y_POSITION = 60, a.CONNECTOR_Y = 12 / i, a.CONNECTOR_X = 30, a
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/shelf_units/shelf_unit", ["require", "constants", "app", "models/blocks/Block"], function(e) {
    var t = e("constants"),
        o = e("app"),
        n = e("models/blocks/Block"),
        r = function(e) {
            function r(e, t) {
                _classCallCheck(this, r);
                var o = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
                return o.hasBlockChildren = !0, o
            }
            return _inherits(r, e), _createClass(r, [{
                key: "changeColor",
                value: function() {}
            }, {
                key: "getPositionY",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = e.forValidation;
                    return this.position.y - t.BLOCK.SHELF_UNIT_Y_OFFSET + (o ? 10 : 0)
                }
            }, {
                key: "setPositionY",
                value: function(e) {
                    this.position.y = e > 0 ? e + t.BLOCK.SHELF_UNIT_Y_OFFSET : +t.BLOCK.SHELF_UNIT_Y_OFFSET
                }
            }, {
                key: "anyConnected",
                value: function() {
                    return !1
                }
            }, {
                key: "setConnections",
                value: function() {
                    var e = this;
                    this.updateMatrixWorld();
                    var r = this,
                        i = this.children.filter(function(e) {
                            return e instanceof n
                        }),
                        s = r.getPositionY();
                    r.connected.forEach(function(t) {
                        var n = o.objectsMap[t];
                        n.isSelected && e.isSelected || e.removeConnection(n)
                    }), o.objects.filter(function(e) {
                        var n = !1,
                            a = e.getPositionY();
                        if ((a === s || Math.abs(a - s) === t.BLOCK.HEIGHT) && r !== e) return i.forEach(function(t) {
                            THREE.SceneUtils.detach(t, r, o.scene);
                            var i = e.checkIntersectionsWith(t);
                            i = i || e.checkIntersectionsWith(r), THREE.SceneUtils.attach(t, o.scene, r), i && (t.connected.push(e.userData.id), n = !0)
                        }), n
                    }).forEach(function(e) {
                        return r.connect(e)
                    })
                }
            }]), r
        }(n);
    return r.className = "ShelfUnit", window.ShelfUnit = r
}), define("models/blocks/parts/cap_with_holes", ["require", "../../../constants", "app", "./../Block"], function(e) {
    var t = e("../../../constants"),
        o = e("app"),
        n = e("./../Block"),
        r = {},
        i = {},
        s = new THREE.BoxGeometry(t.CONNECTOR.LENGTH - 1, t.BLOCK.HEIGHT, t.CONNECTOR.WIDTH - 1),
        a = function(e) {
            var n, a, l, c, u, d;
            switch (e) {
                case "lintel":
                    for (n = new THREE.BoxGeometry(t.BLOCK.LENGTH / 2 - 1, t.BLOCK.SHELF_UNIT_HEIGHT, t.BLOCK.WIDTH - 1), a = 0; a < 2; a += 1)
                        for (l = 0; l < 2; l += 1) c = new THREE.Mesh(s), c.position.y = 0, c.position.z = t.CONNECTOR.POS.Z - a * t.CONNECTOR.STEP, c.position.x = t.CONNECTOR.POS.HALF_X - l * t.CONNECTOR.STEP, d = new ThreeBSP(new THREE.Mesh(n)), u = new ThreeBSP(c), n = d.subtract(u).toGeometry();
                    break;
                case "48":
                    for (n = new THREE.BoxGeometry(3 * t.BLOCK.LENGTH + t.BLOCK.LENGTH - 1, t.BLOCK.SHELF_UNIT_HEIGHT, t.BLOCK.WIDTH - 1), a = 0; a < 2; a += 1)
                        for (l = 0; l < 20; l += 1) c = new THREE.Mesh(s), c.position.y = 0, c.position.z = t.CONNECTOR.POS.Z - a * t.CONNECTOR.STEP, c.position.x = 448 - l * t.CONNECTOR.STEP, l > 3 && (c.position.x -= 9), l > 7 && (c.position.x -= 9), l > 11 && (c.position.x -= 9), o.scene.add(new THREE.EdgesHelper(c)), d = new ThreeBSP(new THREE.Mesh(n)), u = new ThreeBSP(c), n = d.subtract(u).toGeometry();
                    break;
                case "18":
                    for (n = new THREE.BoxGeometry(t.BLOCK.LENGTH + t.BLOCK.WIDTH - 1, t.BLOCK.SHELF_UNIT_HEIGHT, t.BLOCK.WIDTH - 1), a = 0; a < 2; a += 1)
                        for (l = 0; l < 6; l += 1) c = new THREE.Mesh(s), c.position.y = 0, c.position.z = t.CONNECTOR.POS.Z - a * t.CONNECTOR.STEP, c.position.x = t.CONNECTOR.POS.HALF_X + t.BLOCK.WIDTH - l * t.CONNECTOR.STEP, d = new ThreeBSP(new THREE.Mesh(n)), u = new ThreeBSP(c), n = d.subtract(u).toGeometry();
                    break;
                case "half":
                    for (n = new THREE.BoxGeometry(t.BLOCK.LENGTH - 1, t.BLOCK.SHELF_UNIT_HEIGHT, t.BLOCK.WIDTH / 2 - 1), l = 0; l < 4; l += 1) c = new THREE.Mesh(s), c.position.y = 0, c.position.z = 0, c.position.x = t.CONNECTOR.POS.FULL_X - l * t.CONNECTOR.STEP, d = new ThreeBSP(new THREE.Mesh(n)), u = new ThreeBSP(c), n = d.subtract(u).toGeometry();
                    break;
                default:
                    for (n = new THREE.BoxGeometry(t.BLOCK.LENGTH - 1, t.BLOCK.SHELF_UNIT_HEIGHT, t.BLOCK.WIDTH - 1), a = 0; a < 2; a += 1)
                        for (l = 0; l < 4; l += 1) c = new THREE.Mesh(s), c.position.y = 0, c.position.z = t.CONNECTOR.POS.Z - a * t.CONNECTOR.STEP, c.position.x = t.CONNECTOR.POS.FULL_X - l * t.CONNECTOR.STEP, d = new ThreeBSP(new THREE.Mesh(n)), u = new ThreeBSP(c), n = d.subtract(u).toGeometry()
            }
            var f = new THREE.EdgesHelper(new THREE.Mesh(n), t.BLOCK.COLOR.LIGHT_GRAY);
            return r[e] = f.geometry, i[e] = n, n
        };
    return function(e) {
        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "full";
            _classCallCheck(this, o);
            var n = new THREE.MeshLambertMaterial({
                    color: t.BLOCK.COLOR.WHITE
                }),
                s = i[e] || a(e),
                l = new THREE.Line(r[e], new THREE.LineBasicMaterial({
                    color: t.BLOCK.COLOR.LIGHT_GRAY
                }), THREE.LinePieces),
                c = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, s, n));
            return l.matrixAutoUpdate = !1, c.add(l), c.name = "cap_with_holes", c
        }
        return _inherits(o, e), o
    }(n)
}), define("models/blocks/shelf_units/shelf_unit_base", ["require", "constants", "./shelf_unit", "geometries/base", "../parts/materials", "../parts/cap_with_holes"], function(e) {
    var t = e("constants"),
        o = e("./shelf_unit"),
        n = e("geometries/base"),
        r = e("../parts/materials"),
        i = e("../parts/cap_with_holes"),
        s = [-1, 1],
        a = {},
        l = {};
    return function(e) {
        function o(e, c) {
            _classCallCheck(this, o);
            var u, d;
            a[c] || (a[c] = (new THREE.BufferGeometry).fromGeometry(new THREE.BoxGeometry(c, t.BLOCK.CAP_HEIGHT, t.BLOCK.LENGTH - 1)));
            var f = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, a[c], r.get(e, !1)));
            return f.addCollide(new n({
                width: c + 240,
                height: t.BLOCK.CAP_HEIGHT + 20,
                length: t.BLOCK.LENGTH
            }).box, {
                name: "for_door"
            }), s.forEach(function(e) {
                u = new i("full"), u.position.x += e * (c / 2 + t.BLOCK.HALF_STEP), u.position.y += t.BLOCK.SHELF_UNIT_Y_POSITION, u.rotateY(t.BLOCK.ANGLE), f.add(u)
            }), l[c] || (l[c] = new THREE.EdgesHelper(f).geometry), d = new THREE.Line(l[c], new THREE.LineBasicMaterial({
                color: t.BLOCK.COLOR.LIGHT_GRAY
            }), THREE.LinePieces), d.matrixAutoUpdate = !1, f.add(d), f
        }
        return _inherits(o, e), o
    }(o)
}), define("models/blocks/shelf_units/shelf_unit_24", ["require", "constants", "./shelf_unit_base"], function(e) {
    var t = e("constants"),
        o = e("./shelf_unit_base");
    return function(e) {
        function o(e) {
            _classCallCheck(this, o);
            var n = t.BLOCK.LENGTH - 1;
            return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e, n))
        }
        return _inherits(o, e), o
    }(o)
}), define("models/blocks/shelf_units/shelf_unit_36", ["require", "constants", "./shelf_unit_base"], function(e) {
    var t = e("constants"),
        o = e("./shelf_unit_base");
    return function(e) {
        function o(e) {
            _classCallCheck(this, o);
            var n = t.BLOCK.FULL_SHELF_LENGTH - 1;
            return _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e, n))
        }
        return _inherits(o, e), o
    }(o)
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/shelf_units/shelf_unit_36_half", ["require", "constants", "./shelf_unit", "../parts/materials", "geometries/base", "../parts/cap_with_holes"], function(e) {
    var t, o = e("constants"),
        n = e("./shelf_unit"),
        r = e("../parts/materials"),
        i = e("geometries/base"),
        s = e("../parts/cap_with_holes"),
        a = [-1, 1],
        l = o.BLOCK.FULL_SHELF_LENGTH + o.BLOCK.HALF_STEP - 1,
        c = (new THREE.BufferGeometry).fromGeometry(new THREE.BoxGeometry(l, o.BLOCK.CAP_HEIGHT, o.BLOCK.LENGTH - 1)),
        u = function(e) {
            function n(e) {
                _classCallCheck(this, n);
                var u, d, f = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, r.get(e, !1)));
                return f.addCollide(new i({
                    width: l + 240,
                    height: o.BLOCK.CAP_HEIGHT + 20,
                    length: o.BLOCK.LENGTH
                }).box, {
                    name: "for_door"
                }), a.forEach(function(e) {
                    u = new s(e > 0 ? "half" : "full"), u.position.x += e * (l / 2 + (e > 0 ? o.BLOCK.QUARTER_STEP : o.BLOCK.HALF_STEP)), u.position.y += o.BLOCK.SHELF_UNIT_Y_POSITION, u.rotateY(o.BLOCK.ANGLE), f.add(u)
                }), d = new THREE.Line(t || (t = new THREE.EdgesHelper(f).geometry), new THREE.LineBasicMaterial({
                    color: o.BLOCK.COLOR.LIGHT_GRAY
                }), THREE.LinePieces), d.matrixAutoUpdate = !1, f.add(d), f.position.x += o.BLOCK.HALF_STEP, f
            }
            return _inherits(n, e), _createClass(n, [{
                key: "setPositionX",
                value: function(e) {
                    this.position.x = e, Math.abs(this.rotation._y) % Math.PI || (this.position.x += o.BLOCK.QUARTER_STEP)
                }
            }, {
                key: "setPositionZ",
                value: function(e) {
                    this.position.z = e, Math.abs(this.rotation._y) % Math.PI && (this.position.z += o.BLOCK.QUARTER_STEP)
                }
            }]), n
        }(n);
    return window.ShelfUnit36Half = u
}), define("models/blocks/shelf_units/shelf_unit_48_lintel", ["require", "constants", "./shelf_unit", "geometries/base", "../parts/materials", "../parts/cap_with_holes"], function(e) {
    var t, o = e("constants"),
        n = e("./shelf_unit"),
        r = e("geometries/base"),
        i = e("../parts/materials"),
        s = e("../parts/cap_with_holes"),
        a = [-1, 1],
        l = o.BLOCK.LINTEL_LENGTH - 1,
        c = (new THREE.BufferGeometry).fromGeometry(new THREE.BoxGeometry(l, o.BLOCK.CAP_HEIGHT, o.BLOCK.WIDTH - 1));
    return function(e) {
        function n(e) {
            _classCallCheck(this, n);
            var u, d, f = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, i.get(e, !1)));
            return f.addCollide(new r({
                width: l + 240,
                height: o.BLOCK.CAP_HEIGHT + 20,
                length: o.BLOCK.WIDTH
            }).box, {
                name: "for_door"
            }), a.forEach(function(e) {
                u = new s("lintel"), u.position.x += e * (l / 2 + o.BLOCK.HALF_STEP), u.position.y += o.BLOCK.SHELF_UNIT_Y_POSITION, u.rotateY(o.BLOCK.ANGLE), f.add(u)
            }), d = new THREE.Line(t || (t = new THREE.EdgesHelper(f).geometry), new THREE.LineBasicMaterial({
                color: o.BLOCK.COLOR.LIGHT_GRAY
            }), THREE.LinePieces), d.matrixAutoUpdate = !1, f.add(d), f.position.x += o.BLOCK.HALF_STEP, f
        }
        return _inherits(n, e), n
    }(n)
});
var _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(),
    _get = function e(t, o, n) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, o);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, o, n)
        }
        if ("value" in r) return r.value;
        var s = r.get;
        if (void 0 !== s) return s.call(n)
    };
define("models/blocks/shelf_units/desk_unit", ["require", "../../../constants", "./../parts/cap_with_holes", "./../parts/materials", "geometries/base", "./shelf_unit", "./../Block"], function(e) {
    var t, o = e("../../../constants"),
        n = e("./../parts/cap_with_holes"),
        r = e("./../parts/materials"),
        i = [-1, 1],
        s = e("geometries/base"),
        a = e("./shelf_unit"),
        l = o.BLOCK.LENGTH + o.BLOCK.WIDTH - 1,
        c = (e("./../Block"), (new THREE.BufferGeometry).fromGeometry(new THREE.BoxGeometry(o.BLOCK.DESK_LENGTH - 1, o.BLOCK.CAP_HEIGHT, l)));
    return function(e) {
        function a() {
            _classCallCheck(this, a);
            var e, u = _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, c, r.get(o.BLOCK.COLOR.WHITE, !1)));
            return u.addCollide(new s({
                width: o.BLOCK.DESK_LENGTH + 240,
                height: o.BLOCK.CAP_HEIGHT + 20,
                length: l + 120,
                zOffset: 60
            }).box, {
                name: "for_door"
            }), t || (t = new THREE.EdgesHelper(u).geometry), i.forEach(function(t) {
                e = new n("18"), e.position.x += t * (o.BLOCK.DESK_LENGTH / 2 + o.BLOCK.HALF_STEP), e.position.y += o.BLOCK.SHELF_UNIT_Y_POSITION, e.rotateY(o.BLOCK.ANGLE), u.add(e)
            }), e = new n("48"), e.position.z += l / 2 + o.BLOCK.HALF_STEP, e.position.y += o.BLOCK.SHELF_UNIT_Y_POSITION, u.add(e), u
        }
        return _inherits(a, e), _createClass(a, [{
            key: "toggleHighLight",
            value: function() {
                _get(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "toggleHighLight", this).call(this), this.highLightMesh && (this.highLightMesh.position.z += o.BLOCK.HALF_STEP)
            }
        }]), a
    }(a)
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/door", ["require", "../../geometries/door", "../../constants", "./parts/materials", "./computed_collide_block"], function(e) {
    var t = e("../../geometries/door"),
        o = e("../../constants"),
        n = e("./parts/materials"),
        r = e("./computed_collide_block"),
        i = function(e) {
            function r() {
                _classCallCheck(this, r);
                var e = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t.view, n.get(o.BLOCK.COLOR.WHITE)));
                return e.isDoor = !0, e.setPositionY(0), e.scale.set(t.scale, t.scale, t.scale), e.addCollide(t.box), [1, -1].forEach(function(o) {
                    e.addCollide(t.hole.box, {
                        name: "cap_with_holes"
                    }).position.x = o * (t.width - t.hole.xMeshOffset)
                }), e
            }
            return _inherits(r, e), _createClass(r, [{
                key: "changeColor",
                value: function() {}
            }, {
                key: "setPositionY",
                value: function(e) {
                    this.position.y = e > 0 ? e - this.constructor.Y_POSITION : -this.constructor.Y_POSITION
                }
            }, {
                key: "getPositionY",
                value: function() {
                    return this.position.y + this.constructor.Y_POSITION
                }
            }, {
                key: "collide",
                get: function() {
                    return this.children[0]
                }
            }, {
                key: "height",
                get: function() {
                    return t.height
                }
            }]), r
        }(r);
    return i.Y_POSITION = 80, i.HEIGHT = o.BLOCK.DOOR_HEIGHT, i.className = "Door", window.Door = i, i
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/blocks/BlocksBuilder", ["require", "app", "constants", "./FullBlock", "./HalfBlock", "./QuarterBlock", "./SingleBlock", "./LineBlock", "./FinishingCap", "./QuarterCap", "./footer_block", "./shelf_units/shelf_unit_24", "./shelf_units/shelf_unit_36", "./shelf_units/shelf_unit_36_half", "./shelf_units/shelf_unit_48_lintel", "./shelf_units/desk_unit", "./door"], function(e) {
    var t = e("app"),
        o = e("constants"),
        n = {
            full: 1,
            half: 2,
            quarter: 3,
            line: 4,
            single: 5,
            cap: 6,
            quarter_cap: 7,
            default: 8
        },
        r = {
            full: e("./FullBlock"),
            half: e("./HalfBlock"),
            quarter: e("./QuarterBlock"),
            single: e("./SingleBlock"),
            line: e("./LineBlock"),
            cap: e("./FinishingCap"),
            quarter_cap: e("./QuarterCap"),
            footer: e("./footer_block"),
            shelf_unit_24: e("./shelf_units/shelf_unit_24"),
            shelf_unit_36: e("./shelf_units/shelf_unit_36"),
            shelf_unit_36_half: e("./shelf_units/shelf_unit_36_half"),
            shelf_unit_48_lintel: e("./shelf_units/shelf_unit_48_lintel"),
            desk_unit: e("./shelf_units/desk_unit"),
            door: e("./door")
        };
    return function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "transformColorCodeToColorName",
            value: function(e) {
                return this.COLORS_MAP[Number.isNaN(Number("0x" + e.replace("#", ""))) ? /\/(.+)\./.exec(e)[1].toUpperCase() : Number("0x" + e.replace("#", ""))]
            }
        }, {
            key: "generateBlocksList",
            value: function(e) {
                var t = this;
                return e.map(function(e) {
                    var o = e.material.map ? e.material.map.sourceFile : ColorHelper.detectColor(e.material.color);
                    return {
                        color: o,
                        type: e.name,
                        localizedColor: localization.colors[t.transformColorCodeToColorName(o)],
                        localizedType: localization.blocks[e.name]
                    }
                })
            }
        }, {
            key: "getPriority",
            value: function(e) {
                return n[e] || n.default
            }
        }, {
            key: "build",
            value: function(e) {
                var t = e.type,
                    n = e.color,
                    i = new r[t](n, t);
                return i.name = t, i.userData.texture = n, i.normalizePosition("x", o.GRID.CELL_WIDTH), i.normalizePosition("z", o.GRID.CELL_WIDTH), i
            }
        }, {
            key: "serialize",
            value: function(o) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.serializeUserData,
                    i = void 0 === r || r;
                return (o || []).map(function(o) {
                    var n = e.build({
                        type: o.object.name,
                        color: o.materials[0].color,
                        data: o.object.userData
                    });
                    o.object.userData && o.object.userData.texture && n.changeColor(o.object.userData.texture), n.matrixAutoUpdate = !1;
                    var r = new THREE.Matrix4;
                    if (r.set.apply(r, o.object.matrix), n.applyMatrix(r), n.rotation.y && (n.rotation.y *= -1), n.position.set(o.object.matrix[12], o.object.matrix[13], o.object.matrix[14]), n.updateMatrix(), n.setTransparency(!1), o.object.userData.connected && i) {
                        n.connected = o.object.userData.connected, n.userData.id = o.object.userData.id;
                        var s = n.children.filter(function(e) {
                            return e instanceof Block
                        });
                        o.object.userData.children.forEach(function(e, o) {
                            s[o].userData.id = e.id, s[o].connected = e.connected, t.objectsMap[e.id] = s[o]
                        }), t.objectsMap[o.object.userData.id] = n
                    }
                    return n
                })
            }
        }, {
            key: "prepareBlocks",
            value: function(e) {
                return e.forEach(function(e) {
                    e.userData.connected = e.connected, e.userData.children = e.children.filter(function(e) {
                        return e instanceof Block
                    }).map(function(e) {
                        return {
                            connected: e.connected,
                            id: e.userData.id
                        }
                    })
                }), JSON.parse(JSON.stringify(e))
            }
        }, {
            key: "unprepareBlocks",
            value: function(e) {
                e.forEach(function(e) {
                    delete e.userData.connected, delete e.userData.children
                })
            }
        }, {
            key: "toJSON",
            value: function(e) {
                var t = this,
                    o = this.prepareBlocks(e);
                return JSON.stringify(o.sort(function(e, o) {
                    return t.COLORS_MAP[e.object.userData.texture].localeCompare(t.COLORS_MAP[o.object.userData.texture])
                }).sort(function(e, o) {
                    return t.getPriority(e.object.name) - t.getPriority(o.object.name)
                }).map(function(o) {
                    var n = {
                        object: {
                            matrix: o.object.matrix,
                            name: o.object.name,
                            userData: o.object.userData
                        },
                        materials: [o.materials[0]]
                    };
                    return n.object.userData.locale_color_name = localization.colors[t.COLORS_MAP[o.object.userData.texture]], t.unprepareBlocks(e), n
                }))
            }
        }, {
            key: "COLORS_MAP",
            get: function() {
                return {
                    0: "black",
                    15340860: "red",
                    1474360: "green",
                    11450299: "light_grey",
                    4212297: "dark_grey",
                    11198433: "light_blue",
                    867488: "blue",
                    16633115: "yellow",
                    4794908: "brown",
                    16555854: "orange",
                    3355443: "black",
                    16185592: "white",
                    16239049: "pink",
                    4854924: "purple",
                    TRANSLUCENT: "translucent",
                    GOLD: "gold",
                    SILVER: "silver"
                }
            }
        }]), e
    }()
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("lib/blocks-list-presenter", ["require", "./prices", "models/blocks/BlocksBuilder"], function(e) {
    var t = e("./prices"),
        o = e("models/blocks/BlocksBuilder");
    return function() {
        function e(t) {
            _classCallCheck(this, e), Object.assign(this, {
                objects: []
            }, t)
        }
        return _createClass(e, [{
            key: "priceIsVisible",
            get: function() {
                return "en" === localization.code
            }
        }, {
            key: "blocksMap",
            get: function() {
                return this.objects.map(function(e) {
                    return {
                        type: e.name,
                        color: e.material.map ? e.material.map.sourceFile : ColorHelper.detectColor(e.material.color)
                    }
                })
            }
        }, {
            key: "blocksCount",
            get: function() {
                return this.blocksMap.reduce(function(e, t) {
                    var o = e[t.type] || (e[t.type] = {}),
                        n = o[t.color] || (o[t.color] = 0);
                    return o[t.color] = n + 1, e
                }, {})
            }
        }, {
            key: "blocks",
            get: function() {
                var e = this.blocksCount;
                return Object.keys(e).map(function(n) {
                    return Object.keys(e[n]).map(function(r) {
                        var i = o.transformColorCodeToColorName(r),
                            s = "gold" === i || "silver" === i ? n + "_colorful" : n;
                        return {
                            type: n,
                            color: r,
                            priority: o.getPriority(n),
                            colorName: localization.colors[i],
                            name: localization.blocks[n],
                            count: e[n][r],
                            price: e[n][r] * t[s],
                            fixedPrice: (e[n][r] * t[s]).toFixed(2)
                        }
                    })
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            }
        }, {
            key: "totalPrice",
            get: function() {
                return this.blocks.reduce(function(e, t) {
                    return e + t.price
                }, 0).toFixed(2)
            }
        }, {
            key: "sortedBlocks",
            get: function() {
                return this.blocks.sort(function(e, t) {
                    return e.colorName.localeCompare(t.colorName)
                }).sort(function(e, t) {
                    return e.priority - t.priority
                })
            }
        }, {
            key: "totalCount",
            get: function() {
                return this.objects.length
            }
        }]), e
    }()
}), define("menu", ["require", "app", "lib/blocks-list-presenter", "models/blocks/BlocksBuilder", "constants"], function(e) {
    function t() {
        var e = document.getElementById("elements-container"),
            t = new r({
                objects: n.objects
            }),
            o = t.sortedBlocks.reduce(function(e, o) {
                return e + '\n          <div class="element-info" data-params="' + o.type + " " + o.color + '">\n            <div class="element-color" style=\'background-image: url("' + o.color + '"); background-color: ' + o.color + ';\'></div>\n            <p class="block-type" title="' + o.name + " (" + o.count + ')">\n              <span>' + o.name + "</span>\n              " + (t.priceIsVisible ? ""/*"<span>$" + o.fixedPrice + "</span>"*/ : "") + "\n            </p>\n            <p class='block-count'>" + o.count + " " + o.colorName + "</p>\n          </div>"
            }, ""),
            i = ""/*"<br>" + localization.total_price + ": $" + t.totalPrice*/,
            s = "";
        n.objects.length > 1 ? s += '\n        <div class="total-count">\n          ' + localization.total_count + ": " + t.totalCount + " " + localization.blocks_title + "\n          " + (t.priceIsVisible ? i : "") + "\n        </div>" : s += '<div class="total-count"></div>', e.innerHTML = s + " <div class='elements-count-list'>" + o + "<div>"
    }

    function o(e, t) {
        if (void 0 === e) return {
            status: !0
        };
        var o = +e,
            n = "",
            r = !0;
        if (o > -1 && o % 1 == 0) switch (t) {
            case "feets":
                o > i.WALL_FORM.MAX_LENGTH && (r = !1, n = i.WALL_FORM.MAX_LENGTH_MSG);
                break;
            case "inches":
                o > i.WALL_FORM.MAX_INCHES && (r = !1, n = i.WALL_FORM.MAX_INCHES_MSG);
                break;
            case "centimeters_length":
                (o > i.WALL_FORM.MAX_LENGTH_CENTIMETERS || o < i.WALL_FORM.MIN_LENGTH_CENTIMETERS) && (r = !1, n = i.WALL_FORM.MAX_LENGTH_CENTIMETERS_MSG);
                break;
            case "centimeters_height":
                (o > i.WALL_FORM.MAX_HEIGHT_CENTIMETERS || o < i.WALL_FORM.MIN_LENGTH_CENTIMETERS) && (r = !1, n = i.WALL_FORM.MAX_HEIGHT_CENTIMETERS_MSG)
        } else n = i.WALL_FORM.ONLY_DIGITS, r = !1;
        return {
            status: r,
            message: n
        }
    }
    var n = e("app"),
        r = e("lib/blocks-list-presenter"),
        i = (e("models/blocks/BlocksBuilder"), e("constants"));
    return {
        validateWallBuilder: o,
        showElements: t
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("lib/price-list-presenter", ["require", "./prices", "models/blocks/BlocksBuilder"], function(e) {
    var t = e("./prices"),
        o = e("models/blocks/BlocksBuilder");
    return function() {
        function e(t) {
            _classCallCheck(this, e), Object.assign(this, {
                objects: []
            }, t)
        }
        return _createClass(e, [{
            key: "blocksMap",
            get: function() {
                return this.objects.reduce(function(e, t) {
                    var n = t.material.map ? t.material.map.sourceFile : ColorHelper.detectColor(t.material.color),
                        r = o.transformColorCodeToColorName(n),
                        i = "gold" === r || "silver" === r ? t.name + "_" + r : t.name;
                    return e[i] = (e[i] || 0) + 1, e
                }, {})
            }
        }, {
            key: "blocks",
            get: function() {
                var e = this.blocksMap;
                return Object.keys(e).map(function(o) {
                    var n = o.split("_"),
                        r = "gold" === n[1] || "silver" === n[1] ? n[0] + "_colorful" : o;
                    return {
                        type: o,
                        name: "gold" === n[1] || "silver" === n[1] ? localization.colors[n[1]] + " " + localization.blocks[n[0]] : localization.blocks[o],
                        price: t[r].toFixed(2),
                        count: e[o],
                        total: t[r] * e[o],
                        humanizedTotal: (t[r] * e[o]).toFixed(2)
                    }
                })
            }
        }, {
            key: "totalPrice",
            get: function() {
                return this.blocks.reduce(function(e, t) {
                    return e + t.total
                }, 0).toFixed(2)
            }
        }]), e
    }()
}), define("helpers/get_window_size_canvas_context", [], function() {
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            },
            t = e.width,
            o = e.height,
            n = document.createElement("canvas"),
            r = n.getContext("2d");
        return n.width = t, n.height = o, {
            canvas: n,
            context: r
        }
    }
}), define("camera", ["require", "constants", "app"], function(e) {
    var t = e("constants"),
        o = e("app"),
        n = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 100, 2.5 * t.GRID.WIDTH),
        r = n.lookAt;
    return n.lookAt = function() {
        return o.needsUpdate = !0, r.call.apply(r, [this].concat(Array.prototype.slice.call(arguments)))
    }, n.position.z = t.CAMERA.Z, n.position.y = t.CAMERA.Y, n.isStop = !0, n.checkIntersectsObject = function(e) {
        var t = new THREE.Frustum,
            o = new THREE.Matrix4;
        return n.updateMatrixWorld(), n.matrixWorldInverse.getInverse(n.matrixWorld), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), t.setFromMatrix(o), t.intersectsObject(e)
    }, n.checkPosition = function(e) {
        return e.x <= t.CAMERA.ROTATE.DOWN.X.TO && e.x >= t.CAMERA.ROTATE.DOWN.X.FROM && e.y <= t.CAMERA.ROTATE.DOWN.Y.TO && e.y >= t.CAMERA.ROTATE.DOWN.Y.FROM && e.z <= t.CAMERA.ROTATE.DOWN.Z.TO && e.z >= t.CAMERA.ROTATE.DOWN.Z.FROM ? 1 : e.x >= t.CAMERA.ROTATE.LEFT.X.FROM && e.x <= t.CAMERA.ROTATE.LEFT.X.TO && e.y <= t.CAMERA.ROTATE.LEFT.Y.TO && e.y >= t.CAMERA.ROTATE.LEFT.Y.FROM && e.z <= t.CAMERA.ROTATE.LEFT.Z.TO && e.z >= t.CAMERA.ROTATE.LEFT.Z.FROM ? 2 : e.x <= t.CAMERA.ROTATE.UP.X.TO && e.x >= t.CAMERA.ROTATE.UP.X.FROM && e.y <= t.CAMERA.ROTATE.UP.Y.TO && e.y >= t.CAMERA.ROTATE.UP.Y.FROM && e.z <= t.CAMERA.ROTATE.UP.Z.TO && e.z >= t.CAMERA.ROTATE.UP.Z.FROM ? 3 : 4
    }, n.doMove = function(e, r) {
        if (o.countMove <= 38) {
            switch (n.isStop = !1, o.countMove += 1, e) {
                case "BACKWARD":
                case "FORWARD":
                    o.countMove += 3, o.controls.dollyOut(t.CAMERA.ZOOM_STEP), o.controls.update();
                    break;
                case "LEFT":
                    var i = r % 2 ? t.CAMERA.STEP : -t.CAMERA.STEP;
                    o.controls.panLeft(i), o.controls.update();
                    break;
                case "RIGHT":
                    var i = r % 2 ? -t.CAMERA.STEP : t.CAMERA.STEP;
                    o.controls.panLeft(i), o.controls.update();
                    break;
                case "UP":
                    o.countMove += 3, o.controls.dollyOut(t.CAMERA.ZOOM_STEP), o.controls.update()
            }
            setTimeout(function() {
                n.doMove(e, r)
            }, 10)
        } else o.countMove = 0, n.isStop = !0
    }, n
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("renderer", ["helpers/get_window_size_canvas_context", "camera", "app"], function() {
    var e = webglAvailable() ? "WebGL" : "Canvas",
        t = (require("helpers/get_window_size_canvas_context"), require("camera")),
        o = require("app");
    return new(function(n) {
        function r() {
            _classCallCheck(this, r);
            var t = _possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, {
                antialias: !0,
                alpha: !0
            }));
            return t.type = e, t.sortObjects = !1, "Canvas" === t.type && (document.querySelector(".fallback-msg").classList.add("active"), document.querySelector(".fallback-msg .close").addEventListener("click", function() {
                document.querySelector(".fallback-msg").classList.remove("active")
            })), t.setSize(window.innerWidth, window.innerHeight), t.setClearColor(16777215, 1), t
        }
        return _inherits(r, n), _createClass(r, [{
            key: "getScreenShot",
            value: function() {
                return this.render(o.scene, t), this.domElement.toDataURL()
            }
        }, {
            key: "updateRatio",
            value: function(e) {
                var o = e.width,
                    n = e.height;
                t.aspect = o / n, t.updateProjectionMatrix(), this.setSize(o, n)
            }
        }, {
            key: "getImage",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    withGrid: !1
                };
                e.withGrid || (o.scene.children[0].visible = !1), o.activeBlock && (o.activeBlock.highLightMesh.visible = !1), o.selectedBlocks.forEach(function(e) {
                    e.highLightMesh && (e.highLightMesh.visible = !1)
                }), o.objects.forEach(function(e) {
                    .5 === e.material.opacity && (e.visible = !1)
                }), o.render();
                var t = this.domElement.toDataURL();
                return e.withGrid || (o.scene.children[0].visible = !0), o.objects.forEach(function(e) {
                    return e.visible = !0
                }), o.activeBlock && (o.activeBlock.highLightMesh.visible = !0), o.selectedBlocks.forEach(function(e) {
                    e.highLightMesh && (e.highLightMesh.visible = !0)
                }), o.render(), t
            }
        }]), r
    }("WebGL" === e ? THREE.WebGLRenderer : THREE.CanvasRenderer))
}), define("components/material/material_input", [], function() {
    var e = function(e) {
        e.addEventListener("focus", function() {
            this.parentElement.classList.add("focus"), this.parentElement.classList.add("active")
        }), e.addEventListener("blur", function() {
            this.value.length || this.parentElement.classList.remove("active"), this.parentElement.classList.remove("focus")
        })
    };
    return function t(o) {
        _classCallCheck(this, t), e(o), o.value.length && o.parentElement.classList.add("active")
    }
}), define("components/popup", ["require", "app", "lib/price-list-presenter", "renderer", "constants", "components/material/material_input"], function(e) {
    function t(e) {
        return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)
    }
    var o, n, r = e("app"),
        i = e("lib/price-list-presenter"),
        s = e("renderer"),
        a = e("constants"),
        l = e("components/material/material_input");
    Ajax.get("views/popup.mustache").then(function(e) {
        o = e.response
    }), Ajax.get("views/after_save.mustache").then(function(e) {
        n = e.response
    });
    var c, u = function(e) {
            return Mustache.render(o, {
                localization: e,
                showPrices: "en" === e.code,
                priceList: new i({
                    objects: r.objects
                })
            })
        },
        d = {
            showForm: function(e) {
                r.sceneIsActive = !1, r.controls.enabled = !1;
                var o = document.getElementById("popup");
                o.innerHTML = u(localization), o.classList.add("active"), o.querySelectorAll('input[type="text"]').forEach(function(e) {
                    return new l(e)
                });
                var n = function(e) {
                    (e.target.classList.contains("overlay") || e.target.classList.contains("close")) && (o.classList.remove("active"), r.controls.enabled = !0, r.sceneIsActive = !0)
                };
                o.removeEventListener("click", n), o.addEventListener("click", n), document.getElementById("closePopup").addEventListener("click", n), document.getElementById("js-popup-form").addEventListener("submit", function(o) {
                    o.preventDefault();
                    var n = document.getElementById("i-email").value,
                        i = document.getElementById("i-name").value;
                    t(n) && i.length ? c().then(function(t) {
                        var o = JSON.parse(t.response).slug,
                            l = location.origin + "/?id=" + o;
                        document.body.classList.toggle("page-loaded"), r.modelName = document.getElementById("i-modelname").value;
                        try {
                            history.replaceState("", "Bloc Designer", "/?id=" + o)
                        } catch (e) {
                            console.error(e)
                        }
                        var c = Object.assign(e, {
                            url: l,
                            name: i,
                            email: n,
                            slug: o,
                            company_name: document.getElementById("i-cname").value,
                            address: document.getElementById("i-address").value,
                            city: document.getElementById("i-city").value,
                            state: document.getElementById("i-state").value,
                            zip: document.getElementById("i-zip").value,
                            phone_number: document.getElementById("i-phone").value,
                            quotation: document.getElementById("i-check").checked,
                            image: dataURLtoBlob(s.getImage({
                                withGrid: !0
                            })),
                            locale: r.language
                        });
                        Ajax.post(a.POST_FORM, c).then(function(e) {
                            r.audio.play("save"), r.order_id = JSON.parse(e.response).id
                        }).catch(function(e) {
                            return console.log(e)
                        }), document.getElementById("i-name").classList.remove("required"), document.getElementById("i-email").classList.remove("required"), d.showLink(l)
                    }) : (i.length ? document.getElementById("i-name").classList.remove("required") : document.getElementById("i-name").classList.add("required"), t(n) ? document.getElementById("i-email").classList.remove("required") : document.getElementById("i-email").classList.add("required"))
                })
            },
            onLinkShow: function(e) {
                c = e
            },
            showLink: function(e, t) {
                r.controls.enabled = !1;
                var o = document.getElementById("popup");
                localization.popup_message = t ? localization.save_as.you_saved : localization.save_form.saved_link, o.innerHTML = Mustache.render(n, {
                    localization: localization,
                    model_name: r.modelName
                });
                var i = document.getElementById("link");
                i.innerHTML = e, i.href = e;
                var s = function(e) {
                    (e.target.classList.contains("overlay") || e.target.classList.contains("close")) && (o.classList.remove("active"), r.controls.enabled = !0, r.sceneIsActive = !0)
                };
                o.removeEventListener("click", s), o.addEventListener("click", s), document.getElementById("closePopup").addEventListener("click", s)
            }
        };
    return d
}), define("components/save-as", ["require", "app", "components/material/material_input"], function(e) {
    var t, o = e("app"),
        n = e("components/material/material_input");
    return Ajax.get("views/save_as.mustache").then(function(e) {
            return t = e.response
        }),
        function e() {
            var r = this;
            _classCallCheck(this, e), this.onsave = function() {}, this.onupdate = function() {};
            var i = document.getElementById("popup");
            i.innerHTML = Mustache.render(t, {
                libraryMode: libraryMode,
                localization: localization,
                link: location.href,
                model_name: o.modelName
            }), new n(i.querySelector(".model-name")), i.classList.add("active"), o.controls.enabled = !1, o.sceneIsActive = !1;
            var s = function(e) {
                (e.target.classList.contains("overlay") || e.target.classList.contains("close")) && (i.classList.remove("active"), o.controls.enabled = !0, o.sceneIsActive = !0)
            };
            i.removeEventListener("click", s), i.addEventListener("click", s), i.querySelector(".footer").addEventListener("click", function(e) {
                e.target.classList.contains("action") && r["on" + e.target.dataset.action]()
            })
        }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("models/bounding_box", ["require", "constants"], function(e) {
    function t(e) {
        return 10 * Math.round(e / 10)
    }
    var o = e("constants");
    return function() {
        function e(t) {
            var o = t.min,
                n = t.max;
            _classCallCheck(this, e), this.min = o, this.max = n
        }
        return _createClass(e, [{
            key: "getSize",
            value: function(e) {
                return t((Math.abs(this.max[e]) + Math.abs(this.min[e])) / 2)
            }
        }, {
            key: "width",
            get: function() {
                return this.getSize("x")
            }
        }, {
            key: "height",
            get: function() {
                return this.getSize("y")
            }
        }, {
            key: "depth",
            get: function() {
                return this.getSize("z")
            }
        }, {
            key: "centerPoint",
            get: function() {
                return this._centerPoint || (this._centerPoint = new THREE.Vector3((this.max.x + this.min.x) / 2, (this.max.y + this.min.y) / 2, (this.max.z + this.min.z) / 2))
            }
        }], [{
            key: "fromObjects",
            value: function(e) {
                var t = e.min,
                    n = e.max;
                return new this({
                    min: {
                        x: (new THREE.Box3).setFromObject(t.xObject).min.x,
                        y: (new THREE.Box3).setFromObject(t.yObject).min.y - o.BLOCK.LENGTH,
                        z: (new THREE.Box3).setFromObject(t.zObject).min.z
                    },
                    max: {
                        x: (new THREE.Box3).setFromObject(n.xObject).max.x,
                        y: (new THREE.Box3).setFromObject(n.yObject).max.y,
                        z: (new THREE.Box3).setFromObject(n.zObject).max.z
                    }
                })
            }
        }]), e
    }()
}), define("models/BlockArray", ["require", "../app", "animations/animator", "models/bounding_box", "models/blocks/BlocksBuilder", "helpers/get_bounding_box", "../constants", "helpers/box_collide"], function(e) {
    function t() {
        var e = [];
        this.edges = c(), this.includesID = function(e) {
            return this.some(function(t) {
                return t.userData.id === e
            })
        }, this.setSelectedStatus = function(e) {
            return this.forEach(function(t) {
                t.isSelected = e
            }), this
        }, this.setConnections = function() {
            return this.length !== o.objects.length && this.connectionIsPossible ? (this.forEach(function(e) {
                e.setConnections()
            }), this) : this
        }, this.anyConnected = function(t) {
            if ("UP" !== t && "DOWN" !== t) return !1;
            if (!this.length) throw new Error("None blocks selected");
            return this.some(function(n) {
                var r = n.getPositionY();
                return this.length !== o.objects.length && ArrayHelper.removeElements(n.connected, e).some(function(e) {
                    var n = o.objectsMap[e] || o.importedObjectsMap[e],
                        i = n.getPositionY();
                    return "UP" === t ? r < i : r > i
                })
            })
        }, this.toggleHighLight = function(e) {
            return e = e || function() {}, Block.turnOffHighLight(this.filter(function(e) {
                return e.highLightMesh
            }), e), this
        }, this.reset = function() {
            return this.setSelectedStatus(!1), this.toggleHighLight(), this.forEach(function(e) {
                return e.matrixAutoUpdate = !1
            }), this.length = 0, e.length = 0, o.notSelectedBlocks = o.objects.slice(), this.edges = c(), this
        }, this.changeColor = function(e) {
            return this.forEach(function(t) {
                t.changeColor(e)
            }), this
        }, this.add = function(t) {
            if (-1 === e.indexOf(t.userData.id)) {
                e.push(t.userData.id), this.push(t), this.setEdgeBlocks(t);
                var n = o.notSelectedBlocks.length ? o.notSelectedBlocks : o.objects;
                o.notSelectedBlocks = ArrayHelper.remove(n, t)
            }
            return this
        }, this.remove = function(e) {
            var t = this,
                o = this.toArray();
            this.reset(), o.forEach(function(o) {
                e !== o && (t.add(o), o.toggleHighLight(), o.isSelected = !0, o.matrixAutoUpdate = !0)
            })
        }, this.getBox = function() {
            return r.fromObjects({
                min: {
                    xObject: this.edges.min.xBlock,
                    yObject: this.edges.min.yBlock,
                    zObject: this.edges.min.zBlock
                },
                max: {
                    xObject: this.edges.max.xBlock,
                    yObject: this.edges.max.yBlock,
                    zObject: this.edges.max.zBlock
                }
            })
        }, this.move = function(e, t) {
            return this.forEach(function(o) {
                o !== t && (o.position.x += e.x, o.position.z += e.z, o.position.y += e.y)
            }), this
        }, this.checkIfOnGreed = function() {
            var e = a.GRID.WIDTH;
            return this.edges.min.xBlock.checkBlockOnGrid(e, e) && this.edges.max.xBlock.checkBlockOnGrid(e, e) && this.edges.min.zBlock.checkBlockOnGrid(e, e) && this.edges.max.zBlock.checkBlockOnGrid(e, e)
        }, this.setEdgeBlocks = function(e) {
            var t = this,
                o = ["min", "max"];
            ["x", "y", "z"].forEach(function(n) {
                o.forEach(function(o) {
                    null === t.edges[o][n + "Block"] && (t.edges[o][n + "Block"] = e), ("min" === o ? t.edges.min[n + "Block"].position[n] > e.position[n] : t.edges.max[n + "Block"].position[n] < e.position[n]) && (t.edges[o][n + "Block"] = e)
                })
            })
        }, this.removeEdges = function() {
            var e = this,
                t = ["min", "max"];
            ["x", "y", "z"].forEach(function(o) {
                return t.forEach(function(t) {
                    return e.edges[t][o + "Block"] = null
                })
            })
        }
    }
    var o = e("../app"),
        n = e("animations/animator"),
        r = e("models/bounding_box"),
        i = e("models/blocks/BlocksBuilder"),
        s = e("helpers/get_bounding_box"),
        a = e("../constants"),
        l = e("helpers/box_collide"),
        c = function() {
            return {
                min: {
                    yBlock: null,
                    zBlock: null,
                    xBlock: null
                },
                max: {
                    yBlock: null,
                    zBlock: null,
                    xBlock: null
                }
            }
        };
    return t.prototype = [], t.prototype.rotate = function(e, t) {
        var r = this;
        if (!n.rotate.isRunning) {
            var i = this.generateObject3D(),
                s = !1;
            if (o.scene.add(i), i.rotateY(e), i.updateMatrixWorld(), !(s = this.every(function(e) {
                    THREE.SceneUtils.detach(e, i, o.scene);
                    var t = e.checkBlockOnGrid(a.GRID.WIDTH, a.GRID.WIDTH);
                    return THREE.SceneUtils.attach(e, o.scene, i), t
                }))) return i.rotateY(-e), i.updateMatrixWorld(), void this.forEach(function(e) {
                THREE.SceneUtils.detach(e, i, o.scene)
            });
            i.rotateY(-e), n.rotate({
                model: i,
                startValue: i.rotation.y,
                endValue: i.rotation.y + e,
                done: function() {
                    if (i.updateMatrixWorld(), r.removeEdges(), r.forEach(function(e) {
                            THREE.SceneUtils.detach(e, i, o.scene), r.setEdgeBlocks(e)
                        }), r.every(function(e) {
                            return e instanceof QuarterBlock || e instanceof ShelfUnit36Half
                        }) && r.forEach(function(e) {
                            e.normalizePosition("z", a.GRID.CELL_WIDTH), e.normalizePosition("x", a.GRID.CELL_WIDTH)
                        }), s && r.length !== o.objects.length) {
                        ! function e() {
                            r.anyXZCollides() && (r.forEach(function(e) {
                                e.position.y += a.BLOCK.HEIGHT, e.updateMatrix()
                            }), e())
                        }(), r.forEach(function(e) {
                            return e.setConnections()
                        }), o.isPositionChanged = !0, o.needsBlockValidation = !0, t()
                    }
                }
            })
        }
    }, t.prototype.anyXZCollides = function() {
        if (this.length === o.objects.length) return !1;
        var e = this.getBox(),
            t = o.notSelectedBlocks.filter(function(t) {
                return l(["x", "y", "z"], s(t), e)
            });
        return t.length ? (this.connectionIsPossible = !0, this.anyXZCollidesOneByOne(t)) : this.connectionIsPossible = !1
    }, t.prototype.anyXZCollidesOneByOne = function() {
        var e = this;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.notSelectedBlocks).some(function(t) {
            return e.some(function(e) {
                return e.getPositionY() === t.getPositionY() && (e.updateMatrixWorld(), e.checkIntersectionsWith(t))
            })
        })
    }, t.prototype.copy = function() {
        return t.from(i.serialize(JSON.parse(i.toJSON(this.toArray()))))
    }, t.prototype.generateObject3D = function() {
        var e = new THREE.Object3D;
        return e.position.x = this[0].position.x, e.position.z = this[0].position.z, e.updateMatrixWorld(), this.forEach(function(t) {
            return THREE.SceneUtils.attach(t, o.scene, e)
        }), e
    }, t.from = function(e) {
        return Array.from(e).reduce(function(e, t) {
            return e.push(t), e.setEdgeBlocks(t), e
        }, new this)
    }, t.prototype.toArray = function() {
        return this.map(function(e) {
            return e
        })
    }, t
}), define("lib/logo", ["require", "helpers/get_window_size_canvas_context"], function(e) {
    var t = e("helpers/get_window_size_canvas_context");
    return {
        size: {
            width: 265,
            height: 140
        },
        fontSize: 24,
        get font() {
            return this.fontSize + "px Arial"
        },
        get offsetY() {
            return .75 * this.size.height
        },
        get offsetX() {
            return this.size.width / 2
        },
        generate: function() {
            var e = this;
            return new Promise(function(o) {
                var n = t(e.size),
                    r = n.context,
                    i = n.canvas,
                    s = new Image,
                    a = new Image;
                s.onload = function() {
                    r.drawImage(s, e.fontSize, 0), r.font = e.font, r.textAlign = "center", ArrayHelper.compact([localization.header_info.phone, localization.header_info.site_name]).forEach(function(t, o) {
                        return r.fillText(t, e.offsetX, e.offsetY + o * e.fontSize)
                    }), a.onload = function() {
                        return o(a)
                    }, a.src = i.toDataURL()
                }, s.src = "images/logo.png"
            })
        }
    }
}), define("helpers/degree_to_radians", [], function() {
    return function(e) {
        return e * (Math.PI / 180)
    }
}), define("lib/instructions/camera_positions", ["require", "helpers/degree_to_radians"], function(e) {
    var t = e("helpers/degree_to_radians");
    return {
        setCameraOverBox: function(e) {
            var t = e.camera,
                o = e.box,
                n = e.distance;
            n = n || this.getDistanceFromCameraToBox({
                camera: t,
                box: o
            }), t.position.set(o.centerPoint.x, n, o.centerPoint.z), t.lookAt(Object.assign({}, o.centerPoint, {
                y: 0
            })), t.rotation.z += 90 * Math.PI / 180
        },
        setPerspectiveView: function(e) {
            var o = e.camera,
                n = e.box,
                r = this.getDistanceFromCameraToBox({
                    camera: o,
                    box: n
                }),
                i = t(30),
                s = r * Math.tan(i);
            this.setCameraOverBox({
                camera: o,
                box: n,
                distance: r
            }), o.position.x -= s, o.position.z += s, o.lookAt(Object.assign({}, n.centerPoint, {
                y: 0
            }))
        },
        getDistanceFromCameraToBox: function(e) {
            var t = e.camera,
                o = e.box;
            return Math.max(o.height, 480) + this.getDistanceToFitBoxInCameraView({
                camera: t,
                box: o
            })
        },
        getDistanceToFitBoxInCameraView: function(e) {
            var o = e.camera,
                n = e.box,
                r = Math.max(n.width, n.height, n.depth),
                i = t(o.fov);
            return Math.abs(r / Math.sin(i / 2))
        }
    }
}), define("helpers/data_url_to_image", [], function() {
    return function(e) {
        var t = new Image;
        return t.crossOrigin = null, t.src = e, new Promise(function(e) {
            t.onload = function() {
                return e(t)
            }
        })
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("lib/instructions/images", ["require", "./camera_positions", "renderer", "camera", "app", "models/BlockArray", "helpers/get_window_size_canvas_context", "helpers/data_url_to_image", "models/blocks/BlocksBuilder"], function(e) {
    var t = e("./camera_positions"),
        o = e("renderer"),
        n = e("camera"),
        r = e("app"),
        i = e("models/BlockArray"),
        s = e("helpers/get_window_size_canvas_context"),
        a = e("helpers/data_url_to_image"),
        l = e("models/blocks/BlocksBuilder"),
        c = {
            width: 1340,
            height: 1060
        };
    return function() {
        function e(t) {
            _classCallCheck(this, e), Object.assign(this, {
                size: c,
                models: [],
                layers: [],
                fontSize: 18,
                textOffsetY: 60
            }, t)
        }
        return _createClass(e, [{
            key: "heightFrom",
            value: function(e) {
                var t = e.layers;
                return new this.constructor({
                    layers: t
                }).height
            }
        }, {
            key: "generate",
            value: function() {
                var e = this;
                return Promise.all(this.layers.map(function(t) {
                    return e.generateLayerInstruction(t)
                })).then(function(t) {
                    return t[0].map(function(t) {
                        return e.concatImages(t)
                    })
                })
            }
        }, {
            key: "generateLayerInstruction",
            value: function(e) {
                var t = this.models.filter(function(t) {
                        return t.getPositionY() === e
                    }),
                    o = i.from(t).getBox();
                return t.forEach(function(e) {
                    return e.visible = !0
                }), r.render(), Promise.all([this.getTopViewImage(o), this.getPerspectiveViewImage(o), this.getBlocksTypeAndCount(t)]).then(function(e) {
                    return [{
                        image: e[0],
                        count: e[2]
                    }, {
                        image: e[1],
                        count: e[2]
                    }]
                })
            }
        }, {
            key: "getBlocksTypeAndCount",
            value: function(e) {
                var t = s(this.size),
                    o = t.canvas,
                    n = t.context,
                    r = [],
                    i = this.width - 320,
                    c = 1.2 * this.fontSize,
                    u = this.textOffsetY;
                return l.generateBlocksList(e).forEach(function(e) {
                        var t = {
                                type: e.localizedType,
                                color: e.localizedColor
                            },
                            o = t.type,
                            n = t.color,
                            i = r.find(function(e) {
                                return e.type === o && e.color === n
                            });
                        return void 0 != i ? void(i.count += 1) : r.push({
                            type: o,
                            color: n,
                            count: 1
                        })
                    }), n.font = this.font,
                    n.textAlign = "left", r.forEach(function(e, t) {
                        var o = e.type,
                            r = e.color,
                            s = e.count;
                        n.fillText(o + " x " + s + " | " + r, i, t * c + u)
                    }), a(o.toDataURL())
            }
        }, {
            key: "getTopViewImage",
            value: function(e) {
                return t.setCameraOverBox({
                    camera: n,
                    box: e
                }), a(o.getScreenShot())
            }
        }, {
            key: "getPerspectiveViewImage",
            value: function(e) {
                return t.setPerspectiveView({
                    camera: n,
                    box: e
                }), a(o.getScreenShot())
            }
        }, {
            key: "concatImages",
            value: function(e) {
                var t = this,
                    o = s({
                        width: this.width,
                        height: this.height
                    }),
                    n = o.canvas,
                    r = o.context;
                return [e].forEach(function(e, o) {
                    r.drawImage(e.image, 50, 0, 1.1 * t.width, 1.1 * t.height, 0, 0, t.width, t.height), r.drawImage(e.count, 0, 0)
                }), a(n.toDataURL())
            }
        }, {
            key: "font",
            get: function() {
                return this.fontSize + "px Arial"
            }
        }, {
            key: "width",
            get: function() {
                return this.size.width
            }
        }, {
            key: "height",
            get: function() {
                return this.size.height
            }
        }], [{
            key: "size",
            get: function() {
                return c
            }
        }]), e
    }()
});
var _slicedToArray = function() {
        function e(e, t) {
            var o = [],
                n = !0,
                r = !1,
                i = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
            } catch (e) {
                r = !0, i = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (r) throw i
                }
            }
            return o
        }
        return function(t, o) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }();
define("lib/instructions/index", ["require", "renderer", "app", "lib/logo", "./images", "helpers/get_window_size_canvas_context", "helpers/data_url_to_image", "models/BlockArray"], function(e) {
    var t = e("renderer"),
        o = e("app"),
        n = e("lib/logo"),
        r = e("./images"),
        i = e("helpers/get_window_size_canvas_context"),
        s = e("helpers/data_url_to_image"),
        a = e("models/BlockArray");
    return function() {
        function e(t) {
            _classCallCheck(this, e), Object.assign(this, {
                models: a.from([]),
                instructions: null,
                padding: 10,
                imagesPerPage: 1,
                fontSize: 25,
                textOffsetX: 0,
                textOffsetY: 70
            }, t), this.prepareScene(), this.generateImageInstructions()
        }
        return _createClass(e, [{
            key: "prepareScene",
            value: function() {
                o.selectedBlocks.length ? o.selectedBlocks.forEach(function(e) {
                    return e.highLightMesh.visible = !1
                }) : o.activeBlock && (o.activeBlock.highLightMesh.visible = !1), o.scene.children[0].visible = !1, t.updateRatio(r.size), this.models.forEach(function(e) {
                    return e.visible = !1
                }), o.render()
            }
        }, {
            key: "generateImageInstructions",
            value: function() {
                this.instructions = new r({
                    models: this.models.filter(function(e) {
                        return !e.material.transparent
                    }),
                    layers: this.layerPortions[0]
                })
            }
        }, {
            key: "getImages",
            value: function(e) {
                var t = e.layers,
                    o = e.models;
                return Promise.all([new r({
                    layers: t,
                    models: o
                }).generate(), n.generate()])
            }
        }, {
            key: "generate",
            value: function() {
                var e = this,
                    n = this.layerPortions.map(function(t, o) {
                        return e.getImages({
                            layers: t,
                            models: e.models
                        }).then(function(r) {
                            var i = _slicedToArray(r, 2),
                                s = i[0],
                                a = i[1];
                            return Promise.all(s).then(function(r) {
                                return Promise.all(r.map(function(r) {
                                    return e.concatImages({
                                        index: o,
                                        layers: t,
                                        logo: a,
                                        instructions: r,
                                        pagesCount: n.length
                                    })
                                })).then(function(e) {
                                    return e
                                })
                            })
                        })
                    });
                return Promise.all(n).then(function(e) {
                    return o.scene.children[0].visible = !0, t.updateRatio({
                        width: window.innerWidth,
                        height: window.innerHeight
                    }), o.render(), e
                })
            }
        }, {
            key: "concatImages",
            value: function(e) {
                var t = e.instructions,
                    o = (e.logo, e.pagesCount),
                    n = e.index,
                    r = e.layers,
                    a = this.width,
                    l = this.instructions.heightFrom({
                        layers: r
                    }),
                    c = i({
                        width: a,
                        height: l
                    }),
                    u = c.canvas,
                    d = c.context;
                this.padding;
                return d.fillStyle = "white", d.font = this.font, d.fillRect(0, 0, a, l), d.drawImage(t, 0, 0), o > 1 && (d.fillStyle = "black", d.fillText(localization.instruction.step + " #" + (n + 1), this.textOffsetX, this.textOffsetY)), s(u.toDataURL())
            }
        }, {
            key: "font",
            get: function() {
                return this.fontSize + "px Arial"
            }
        }, {
            key: "width",
            get: function() {
                return this.instructions.width
            }
        }, {
            key: "layerPortions",
            get: function() {
                var e = this;
                return this.layers.reduce(function(t, o, n) {
                    var r = Math.ceil((n + 1) / e.imagesPerPage) - 1;
                    return (t[r] || (t[r] = [])).push(o), t
                }, [])
            }
        }, {
            key: "layers",
            get: function() {
                return this.models.reduce(function(e, t) {
                    return e.includes(t.getPositionY()) ? e : e.concat(t.getPositionY())
                }, []).sort(function(e, t) {
                    return e - t
                })
            }
        }]), e
    }()
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
define("Store", ["require", "app"], function(e) {
    var t = e("app");
    return {
        store: [],
        count: 0,
        maxcount: 0,
        maxCountStore: 10,
        clone: function(e) {
            if (null == e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return e;
            var t = e.constructor();
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o].clone(), t[o].material = e[o].material, t[o].position.set(e[o].position.x, e[o].position.y, e[o].position.z), t[o].children.forEach(function(e) {
                e.material = t[o].material
            }));
            return t
        },
        save: function(e) {
            t.anyChanges = !0, this.maxcount++, this.maxcount > this.maxCountStore && (this.store.shift(), this.maxcount--), this.store.length && this.isUndo ? (this.store.splice(this.count, 0, this.clone(e)), this.count++, this.isUndo = !1) : this.store.push(this.clone(e))
        },
        undo: function() {
            return this.count || this.isCount || (this.count = this.maxcount - 1), this.isUndo = !0, this.isCount = !0, this.count > 0 && this.count--, this.store[this.count]
        },
        redo: function() {
            return this.count || this.isCount || (this.count = this.maxcount - 1), this.count < this.maxcount - 1 ? (this.count++, this.store[this.count]) : (this.isCount || (this.count = 0), this.store[this.maxcount - 1])
        }
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("scene", ["require", "app", "menu", "components/popup", "renderer", "animations/animator", "constants", "components/save-as", "models/blocks/BlocksBuilder", "models/BlockArray", "lib/instructions/index", "Store"], function(e) {
    var t = e("app"),
        o = e("menu"),
        n = e("components/popup"),
        r = e("renderer"),
        i = e("animations/animator"),
        s = e("constants"),
        a = e("components/save-as"),
        l = e("models/blocks/BlocksBuilder"),
        c = e("models/BlockArray"),
        u = e("lib/instructions/index"),
        d = e("Store");
    return new(function(e) {
        function f() {
            _classCallCheck(this, f);
            var e = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            return e.copiedBlocks = "", e
        }
        return _inherits(f, e), _createClass(f, [{
            key: "removeCurrentSelectedBlocks",
            value: function() {
                var e = this;
                if (!i.rotate.isRunning && !i.landAll.isRunning) {
                    var n = t.selectedBlocks.length ? t.selectedBlocks : [t.activeBlock],
                        r = n.map(function(e) {
                            return e.userData.id
                        });
                    n.forEach(function(o) {
                        e.remove(o), t.objects = ArrayHelper.remove(t.objects, o)
                    }), t.selectedBlocks.reset(), t.activeBlock = null, t.objects.forEach(function(e) {
                        e.connected = ArrayHelper.removeElements(e.connected, r), e.hasBlockChildren && e.children.forEach(function(e) {
                            e instanceof Block && (e.connected = ArrayHelper.removeElements(e.connected, r))
                        })
                    }), t.lastBlockPosition = null, t.needsBlockValidation = !0, d.save(t.objects), document.getElementById("block-menu").classList.remove("active"), o.showElements()
                }
            }
        }, {
            key: "saveModel",
            value: function() {
                function e(e) {
                    var o = QueryParams.parse(location.search),
                        i = o.id;
                    if (i) {
                        t.activeBlock && t.activeBlock.highLightMesh && t.activeBlock.toggleHighLight(), t.activeBlock = null;
                        var c = t.objects.filter(function(e) {
                                return 1 === e.material.opacity
                            }),
                            u = new a;
                        u.onsave = function() {
                            t.modelName = document.querySelector("div.active input.model-name").value, document.body.classList.remove("page-loaded"), t.objects.forEach(function(e) {
                                e.material.transparent && (e.visible = !1)
                            }), t.render();
                            var o = Object.assign(e, {
                                data: l.toJSON(c),
                                host: location.origin,
                                image: dataURLtoBlob(r.getImage()),
                                locale: window.locale,
                                model_name: t.modelName || "",
                                order_id: t.order_id
                            });
                            t.objects.forEach(function(e) {
                                return e.visible = !0
                            }), t.render(), t.order_id && (o.order_id = t.order_id), Ajax.post("" + s.POST_MODEL, o).then(function(e) {
                                var o = location.origin + "/?id=" + JSON.parse(e.response).slug;
                                n.showLink(o, !0), document.body.classList.add("page-loaded"), t.audio.play("save");
                                try {
                                    history.replaceState("", "Bloc Designer", "/?id=" + JSON.parse(e.response).slug)
                                } catch (e) {
                                    console.error(e)
                                }
                            })
                        }, u.onupdate = function() {
                            var o = Object.assign(e, {
                                    data: l.toJSON(c),
                                    model_name: t.modelName || "",
                                    host: location.origin
                                }),
                                n = (document.getElementById("resetLibraryImage") || {}).checked;
                            t.modelName = document.querySelector("div.active input.model-name").value, document.body.classList.remove("page-loaded"), libraryMode && !n || (o.image = dataURLtoBlob(r.getImage())), Ajax.put(s.POST_MODEL + "/" + i, o).then(function() {
                                document.body.classList.add("page-loaded"), document.getElementById("popup").classList.remove("active"), alert(localization.was_updated), t.audio.play("save"), t.controls.enabled = !0, t.sceneIsActive = !0
                            })
                        }
                    } else n.showForm(e)
                }
                var o = t.objects.filter(function(e) {
                    return "door" === e.name
                });
                o.forEach(function(e) {
                    e.matrixAutoUpdate = !1, e.position.y += s.BLOCK.DOOR_HEIGHT
                });
                var i = t.objects.filter(function(e) {
                    return !e.material.transparent
                });
                new u({
                    models: c.from(i)
                }).generate().then(function(t) {
                    e(t.reduce(function(e, t) {
                        return e.concat(t)
                    }).reduce(function(e, t, o) {
                        return e["instruct_images[" + o + "]"] = dataURLtoBlob(t.src), e
                    }, {}))
                }), o.forEach(function(e) {
                    e.position.y -= s.BLOCK.DOOR_HEIGHT, e.matrixAutoUpdate = !0
                })
            }
        }, {
            key: "copyBlocks",
            value: function() {
                t.selectedBlocks.length ? (t.selectedBlocks.toggleHighLight(), this.copiedBlocks = l.toJSON(t.selectedBlocks.toArray())) : t.activeBlock && (t.activeBlock.toggleHighLight(), this.copiedBlocks = l.toJSON([t.activeBlock]))
            }
        }, {
            key: "selectAllBlocks",
            value: function() {
                t.objects.length && (t.objects.forEach(function(e) {
                    e.isSelected = !0, e.matrixAutoUpdate = !0, t.selectedBlocks.add(e)
                }), Block.turnOnHighLight(t.objects), t.activeBlock = t.selectedBlocks[0])
            }
        }, {
            key: "pasteBlocks",
            value: function(e) {
                var o = this;
                if (!i.rotate.isRunning && !i.landAll.isRunning) {
                    t.selectedBlocks.reset();
                    var n = Array.isArray(this.copiedBlocks) ? this.copiedBlocks : JSON.parse(this.copiedBlocks),
                        r = l.serialize(n, {
                            serializeUserData: !1
                        }),
                        s = r.reduce(function(e, t) {
                            var o = t.position.y;
                            t.findFreePosition();
                            var n = t.position.y,
                                r = n - o;
                            return t.position.y = o, e < r ? r : e
                        }, 0);
                    if (r.forEach(function(e) {
                            e.userData.texture && e.changeColor(e.userData.texture), e.position.y += s, e.matrixAutoUpdate = !0, e.isSelected = !0, t.selectedBlocks.add(e), o.addToScene(e)
                        }), Block.turnOnHighLight(t.selectedBlocks), t.activeBlock = r.reduce(function(e, t) {
                            return e.position.y <= t.position.y ? e : t
                        }), document.getElementById("block-menu").classList.add("active"), r.length > 100) return e();
                    i.landAll({
                        value: r[0].position.y,
                        models: r,
                        done: function() {
                            r.forEach(function(e) {
                                return e.updateMatrix()
                            }), t.needsBlockValidation = !0, t.needsUpdate = !0, d.save(t.objects), e(), e = null
                        }
                    })
                }
            }
        }, {
            key: "validateMove",
            value: function(e) {
                if (t.selectedBlocks.length) {
                    var o = new THREE.Vector3(0, 0, 0);
                    o.copyPosition(t.activeBlock.position), t.selectedBlocks.move(o.sub(e), t.activeBlock);
                    t.selectedBlocks.anyXZCollides() || !t.selectedBlocks.checkIfOnGreed() ? (o.copyPosition(t.activeBlock.position), t.activeBlock.position.copyPosition(e), t.selectedBlocks.move(e.sub(o), t.activeBlock)) : (t.selectedBlocks.edges.min.yBlock.getPositionY() < 0 && (o.copyPosition(t.activeBlock.position), t.activeBlock.position.y = e.y, e.x = o.x, e.z = o.z, t.selectedBlocks.move(e.sub(o), t.activeBlock)), t.isPositionChanged = !0, t.needsBlockValidation = !0, t.selectedBlocks.setConnections(), t.lastBlockPosition = t.activeBlock.position.clone(), t.lastBlockPosition.y = t.activeBlock.getPositionY())
                } else t.activeBlock.updateMatrixWorld(), !t.activeBlock.anyXZCollides() && t.activeBlock.checkBlockOnGrid(s.GRID.WIDTH, s.GRID.WIDTH) || t.activeBlock.position.copyPosition(e), t.needsBlockValidation = !0, t.isPositionChanged = !0, t.activeBlock.setConnections(), t.lastBlockPosition = t.activeBlock.position.clone(), t.lastBlockPosition.y = t.activeBlock.getPositionY()
            }
        }, {
            key: "addToScene",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.setConnections,
                    i = void 0 === r || r;
                this.add(e), t.objects.push(e), t.objectsMap[e.userData.id] = e, i && e.setConnections(t.objects), o.showElements()
            }
        }, {
            key: "hideGrid",
            value: function() {
                this.children[0].visible = !1
            }
        }, {
            key: "showGrid",
            value: function() {
                this.children[0].visible = !0
            }
        }, {
            key: "clear",
            value: function() {
                var e = this;
                t.objects.forEach(function(t) {
                    t.highLightMesh && t.toggleHighLight(), e.remove(t)
                }), t.objects.length = 0, t.activeBlock = null, o.showElements(), document.getElementById("block-menu").classList.remove("active")
            }
        }]), f
    }(THREE.Scene))
}), define("models/ValidationWorker", [], function() {
    function e() {
        var e = new Worker("workers/validate_blocks.js");
        return e.sendBlocks = function(e) {
            this.postMessage(t(e))
        }, e
    }

    function t(e) {
        var t = {};
        return e.forEach(function(e) {
            t[e.userData.id] = {
                connected: e.connected,
                needsTwoValidBlocks: e instanceof ShelfUnit,
                positionY: e.getPositionY({
                    forValidation: !0
                }),
                transparent: e.material.transparent
            }
        }), t
    }
    return e
}), define("models/Human", ["require", "../app", "../camera", "../constants"], function(e) {
    function t() {
        var e = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture("images/man.png"),
            transparent: !0,
            side: THREE.DoubleSide
        });
        e.map.needsUpdate = !0;
        var t = new THREE.Mesh(new THREE.PlaneBufferGeometry(s.HUMAN.WIDTH, s.HUMAN.HEIGHT), e);
        return t.position.y = s.HUMAN.Y_POS, t.position.x = s.HUMAN.X_POS, t.position.z = s.HUMAN.Z_POS, t.validate = n, t.isActive = !0, t.toggle = o, t
    }

    function o() {
        if (this.isActive) r.scene.remove(this), this.isActive = !1;
        else {
            var e = -s.HUMAN.Y_POS;
            r.objects.forEach(function(t) {
                e = e < t.position.x ? t.position.x : e
            }), this.position.y = s.HUMAN.Y_POS, this.position.x = e + s.HUMAN.X_POS, r.scene.add(this), this.isActive = !0
        }
    }

    function n() {
        var e = this;
        if (r.objects.length) {
            var t = r.objects.some(function(t) {
                    return t.position.distanceTo(e.position) < 700
                }),
                o = r.objects.every(function(t) {
                    return t.position.distanceTo(e.position) > 1400
                });
            t && (this.position.z += s.HUMAN.Z_POS), o && r.objects.some(function(t) {
                return t.position.x < e.position.x
            }) && (this.position.z -= s.HUMAN.Z_POS)
        }
        this.lookAt({
            x: i.position.x,
            y: s.HUMAN.Y_POS,
            z: i.position.z
        }), e.rotation._x < 0 && e.rotateY(Math.PI - e.rotation._y / 2)
    }
    var r = e("../app"),
        i = e("../camera"),
        s = e("../constants");
    return t
}), define("models/Ground", ["require", "../app", "../constants"], function(e) {
    var t = e("../app"),
        o = e("../constants");
    return function(e, n) {
        for (var r = new THREE.LineBasicMaterial({
                color: n
            }), i = new THREE.Geometry, s = new THREE.Line(i, r, THREE.LinePieces), a = e / o.GRID.CELL_COUNT, l = e / (a / 2), c = o.GRID.FLOOR, u = 0; u <= l; u++) i.vertices.push(new THREE.Vector3(-e, c, u * a - e)), i.vertices.push(new THREE.Vector3(e, c, u * a - e)), i.vertices.push(new THREE.Vector3(u * a - e, c, -e)), i.vertices.push(new THREE.Vector3(u * a - e, c, e));
        s.position.x = o.GRID.X, s.position.z = o.GRID.Y, s.position.y = o.GRID.Z;
        var d = new THREE.Mesh(new THREE.PlaneBufferGeometry(2 * o.GRID.WIDTH, 2 * o.GRID.WIDTH));
        return d.rotation.x = o.GRID.ANGLE, d.position.y = 0, d.visible = !1, t.scene.add(s), d
    }
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("Controls", ["require", "constants", "app"], function(e) {
    var t = e("constants"),
        o = e("app");
    return function(e) {
        function n(e, r) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, r));
            return i.minPolarAngle = 0, i.maxPolarAngle = t.CONTROLS.MAX_ANGLE_RAD, i.maxDistance = t.CAMERA.MAXDISTANCE, i.minDistance = t.CAMERA.MINDISTANCE, i.addEventListener("change", function() {
                o.needsUpdate = !0
            }), i
        }
        return _inherits(n, e), _createClass(n, [{
            key: "animateLeft",
            value: function(e) {
                e || (e = 2 * Math.PI);
                for (var t = e / 10, o = this, n = 0; n < 10; n++) setTimeout(function() {
                    o.rotateLeft(t), o.update()
                }, 75 * n)
            }
        }]), n
    }(THREE.OrbitControls)
}), define("components/material/material_select", [], function() {
    function e(t, o) {
        return t !== document.body && (t === o || e(t.parentNode, o))
    }
    var t = function(t) {
            t.addEventListener("click", function(o) {
                var n = this,
                    r = function r(i) {
                        if (o !== i) {
                            e(i.target, t) || (n.classList.toggle("closed"), window.removeEventListener("click", r))
                        }
                    };
                if (this.classList.toggle("closed"), window.addEventListener("click", r), o.target.classList.contains("material-select-option")) {
                    this.querySelectorAll(".material-select-option").forEach(function(e) {
                        return e.removeAttribute("selected")
                    }), o.target.setAttribute("selected", ""), this.querySelector("input").value = o.target.getAttribute("value"), this.querySelector(".material-value-output").innerHTML = o.target.innerHTML;
                    var i = document.createEvent("HTMLEvents");
                    i.initEvent("change", !1, !0), this.querySelector("input").dispatchEvent(i)
                }
            })
        },
        o = function(e) {
            return '<li class="material-select-option" ' + (e.selected ? "selected" : "") + ' value="' + e.value + '">' + e.html + "</li>"
        },
        n = function(e) {
            return '<input type="hidden" name="' + e.name + '" value="' + e.value + '" class="' + e.class_name + '"/>\n            <div class="material-value-output">' + e.text + '</div>\n            <div class="material-select-placeholder">' + e.placeholder + '</div>\n            <ul class="material-select-options size-' + (e.options_count > 5 ? 5 : e.options_count) + '">\n              ' + e.options.map(o).join("") + "\n            </ul>"
        },
        r = function(e) {
            return {
                selected: !!e.getAttribute("selected"),
                value: e.getAttribute("value"),
                html: e.innerHTML
            }
        },
        i = function(e) {
            var t = e.querySelector("[selected]"),
                o = e.querySelectorAll("option");
            return {
                name: e.getAttribute("name") || "",
                placeholder: e.getAttribute("placeholder") || "",
                options: o.map(r),
                value: t.getAttribute("value"),
                text: t.innerHTML,
                options_count: o.length,
                class_name: e.classList.toString()
            }
        };
    return function e(o) {
        _classCallCheck(this, e);
        var r = document.createElement("div");
        r.classList.add("material-select-list", "closed"), r.innerHTML = n(i(o)), t(r), o.parentNode.replaceChild(r, o)
    }
}), define("components/material/material_components", ["require", "./material_select", "./material_input"], function(e) {
    var t = e("./material_select"),
        o = e("./material_input");
    document.querySelectorAll(".material-main-input").forEach(function(e) {
        return new o(e)
    }), document.querySelectorAll(".js-material-select").forEach(function(e) {
        return new t(e)
    })
});
var _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(),
    Ajax = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "get",
            value: function(e) {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !0), new Promise(function(e, o) {
                    t.send(), t.onload = function() {
                        t.status < 400 ? e(t) : o(t)
                    }
                })
            }
        }, {
            key: "post",
            value: function(e, t) {
                var o = new XMLHttpRequest;
                return o.open("POST", e, !0), new Promise(function(e, n) {
                    o.send("string" == typeof t ? t : objToForm(t)), o.onload = function() {
                        o.status < 400 ? e(o) : n(o)
                    }
                })
            }
        }, {
            key: "put",
            value: function(e, t) {
                var o = new XMLHttpRequest;
                return o.open("PUT", e, !0), new Promise(function(e, n) {
                    o.send("string" == typeof t ? t : objToForm(t)), o.onload = function() {
                        o.status < 400 ? e(o) : n(o)
                    }
                })
            }
        }]), e
    }();
define("helpers/ajax", function() {});
var _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(),
    ArrayHelper = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "remove",
            value: function(e, t) {
                return e.filter(function(e) {
                    return e !== t
                })
            }
        }, {
            key: "removeElements",
            value: function(e, t) {
                return e.filter(function(e) {
                    return t.indexOf(e) < 0
                })
            }
        }, {
            key: "compact",
            value: function(e) {
                return e.filter(function(e) {
                    return e
                })
            }
        }, {
            key: "copy",
            value: function(e) {
                return e.concat()
            }
        }, {
            key: "insertAt",
            value: function(e, t, o) {
                e.splice(t, 0, o)
            }
        }, {
            key: "flatten",
            value: function(e) {
                return e.reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            }
        }, {
            key: "firstWhere",
            value: function(e, t) {
                var o = null;
                return e.some(function(e) {
                    return !!t(e) && (o = e, !0)
                }), o
            }
        }]), e
    }();
define("helpers/array_helper", function() {}), define("helpers/check_webgl", function() {});
var _createClass = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }(),
    ColorHelper = function() {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "detectColor",
            value: function(e) {
                var t = e.getHex().toString(16),
                    o = 6 - t.length;
                if (o)
                    for (var n = 0; n < o; n++) t = "0" + t;
                return "#" + t
            }
        }, {
            key: "getDarker",
            value: function(e) {
                return (16711422 & e) << 1
            }
        }]), e
    }();
define("helpers/color_helper", function() {}), THREE.Vector3.prototype.copyPosition = function(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }, define("helpers/copy_position", function() {}), define("helpers/data_url_to_blob", function() {}), Object.getOwnPropertyNames(Array.prototype).forEach(function(e) {
        "length" !== e && (NodeList.prototype[e] = Array.prototype[e])
    }), define("helpers/node_extend_array", function() {}), define("helpers/obj_to_form", function() {}),
    function() {
        function e(e) {
            var t = "?",
                o = Object.getOwnPropertyNames(e);
            if (o) return o.forEach(function(o) {
                o && e[o] && (t += o + "=" + encodeURIComponent(e[o]) + "&")
            }), t.substring(0, t.length - 1)
        }

        function t(e) {
            var t, o = {};
            return e = decodeURIComponent(e), e.indexOf("?") > -1 && (t = e.split("?")[1], t = t.split("&"), t.forEach(function(e) {
                var t = e.split("=");
                t[0] && t[1] && (o[t[0]] = t[1])
            })), o
        }

        function o(t, o) {
            return t.split("?")[0] + e(o)
        }
        window.QueryParams = {
            parse: function(o) {
                return "string" == typeof o ? t(o) : e(o)
            },
            joinParams: o
        }, QueryParams.current = QueryParams.parse(location.search || {})
    }(), define("helpers/query_params", function() {}), define("helpers/blob_to_data_url", [], function() {
        window.blobToDataURL = function(e) {
            return new Promise(function(t) {
                var o = new FileReader;
                o.onload = function(e) {
                    t(e.target.result)
                }, o.readAsDataURL(e)
            })
        }
    }), define("helpers/index", ["require", "./ajax", "./array_helper", "./check_webgl", "./color_helper", "./copy_position", "./data_url_to_blob", "./node_extend_array", "./obj_to_form", "./query_params", "./data_url_to_image", "./blob_to_data_url"], function(e) {
        e("./ajax"), e("./array_helper"), e("./check_webgl"), e("./color_helper"), e("./copy_position"), e("./data_url_to_blob"), e("./node_extend_array"), e("./obj_to_form"), e("./query_params"), e("./data_url_to_image"), e("./blob_to_data_url")
    });
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("components/event-manager", [], function() {
    var e = {};
    return function() {
        function t() {
            _classCallCheck(this, t)
        }
        return _createClass(t, [{
            key: "on",
            value: function(t, o) {
                e[this.constructor.name] = e[this.constructor.name] || {}, e[this.constructor.name][t] = e[this.constructor.name][t] || [], e[this.constructor.name][t].push(o)
            }
        }, {
            key: "off",
            value: function(t) {
                delete(e[this.constructor.name] || {})[t]
            }
        }, {
            key: "trigger",
            value: function(t) {
                var o = this;
                if (e[this.constructor.name]) {
                    var n = Array.from(arguments).slice(1, arguments.length);
                    e[this.constructor.name][t].forEach(function(e) {
                        return e.apply(o, n)
                    })
                }
            }
        }]), t
    }()
});
var _createClass = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
    }
}();
define("components/tag-list", ["require", "app", "../constants", "./event-manager"], function(e) {
        function t() {
            var e = decodeURIComponent(document.URL).split("?library_keyword=")[1],
                t = document.querySelector("#library-component"),
                o = document.querySelector(".tag-all"),
                n = document.querySelector('.tag[data-value="' + e + '"]');
            e && t && n && (t.classList.add("active"), o.click(), n.click())
        }

        function o(e) {
            return e.map(function(e) {
                return Mustache.render(s, {
                    value: e.keyword,
                    text: e[n.language] || e[r]
                })
            }).join("")
        }
        var n = e("app"),
            r = "en",
            i = e("../constants"),
            s = '\n      <div data-value="{{value}}" class="tag active">\n        <i class="fa fa-check-square-o"></i>\n        <i class="fa fa-square-o"></i>\n        <span class="tag-text">{{text}}</span>\n      </div>',
            a = e("./event-manager");
        return function(e) {
            function n(e) {
                _classCallCheck(this, n);
                var r = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return Ajax.get(i.GET_CATEGORIES).then(function(t) {
                    e.innerHTML = '<div class="tag-all active"><i class="fa fa-check-square-o"></i><i class="fa fa-square-o"></i><span class="tag-text">' + localization.all + "</span></div>" + o(JSON.parse(t.response).categories), r._tags = e.querySelectorAll(".tag"), r._tagAll = e.querySelector(".tag-all"), r._tags.forEach(function(e) {
                        return e.addEventListener("click", function(e) {
                            e.currentTarget.classList.toggle("active"), r._tags.every(function(e) {
                                return e.classList.contains("active")
                            }) ? r._tagAll.classList.add("active") : r._tagAll.classList.remove("active"), r.trigger("change", r.activeTags)
                        })
                    }), r._tagAll.addEventListener("click", function() {
                        r._tagAll.classList.toggle("active");
                        var e = r._tagAll.classList.contains("active") ? "add" : "remove";
                        r._tags.forEach(function(t) {
                            return t.classList[e]("active")
                        }), r.trigger("change", r.activeTags)
                    }), r.trigger("change", r.activeTags)
                }).then(t).catch(function(e) {
                    return console.error(e)
                }), r
            }
            return _inherits(n, e), _createClass(n, [{
                key: "activeTags",
                get: function() {
                    return this._tags.filter(function(e) {
                        return e.classList.contains("active")
                    }).map(function(e) {
                        return e.getAttribute("data-value")
                    })
                }
            }]), n
        }(a)
    }), define("components/infinite-scroll", ["require", "./event-manager"], function(e) {
        var t = e("./event-manager");
        return function(e) {
            function t(e) {
                _classCallCheck(this, t);
                var o, n = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.addEventListener("scroll", function() {
                    var t = e.scrollHeight,
                        r = e.clientHeight,
                        i = e.scrollTop + r;
                    o < i && i > .8 * t && n.trigger("load"), o = i
                }), n
            }
            return _inherits(t, e), t
        }(t)
    }), define("components/library", ["require", "app", "./tag-list", "./infinite-scroll", "../constants"], function(e) {
        function t(e) {
            1 === u.objects.length && (u.activeBlock = u.objects[0], u.scene.removeCurrentSelectedBlocks()), u.scene.copiedBlocks = e.data, u.scene.pasteBlocks(function() {
                return u.audio.play("import")
            })
        }

        function o() {
            m.classList.remove("active"), u.controls.enabled = !0, u.sceneIsActive = !0
        }

        function n() {
            a = 0, i = [], s = !1
        }

        function r(e) {
            var t = "http://app-qa.everblocksystems.com" === location.origin ? location.origin : "https://builder.everblocksystems.com";
            return e.map(function(e) {
                return Mustache.render(y, {
                    name: e.model_name,
                    image: e.image ? t + "/" + e.image.large : "",
                    id: e.slug
                })
            }).join("")
        }
        var i, s, a, l, c, u = e("app"),
            d = e("./tag-list"),
            f = e("./infinite-scroll"),
            p = e("../constants"),
            h = !1,
            m = document.getElementById("library-component"),
            y = '<div class="model-item" title="{{name}}">\n        <div class="model-image" style="background-image: url({{image}});"></div>\n        <div class="model-name">{{name}}</div>\n      </div>',
            O = m.querySelector(".models-list"),
            L = new d(m.querySelector(".tag-list")),
            v = m.querySelector(".generate-btn"),
            b = new f(O),
            E = m.querySelector(".footer"),
            g = function() {
                return O.querySelectorAll(".model-item").forEach(function(e) {
                    e.addEventListener("click", function() {
                        O.querySelectorAll(".model-item").forEach(function(e) {
                            return e.classList.remove("checked")
                        }), e.classList.add("checked"), _() ? (E.querySelector(".submit-btn").setAttribute("value", localization.import+' "' + e.getAttribute("title") + '"'), E.classList.add("active")) : E.classList.remove("active")
                    })
                })
            },
            C = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e.length) throw m.classList.remove("loading"), O.innerHTML = '<div class="empty-models">' + localization.no_tags_selected + "</div>", new Error("No tags");
                c = e;
                var o = t.limit || 9,
                    n = QueryParams.joinParams(p.GET_LIBRARY, {
                        limit: o,
                        offset: a,
                        keywords: e.map(encodeURIComponent).join(", ")
                    });
                return E.classList.remove("active"), Ajax.get(n).then(function(e) {
                    var t = JSON.parse(e.response).models;
                    if (!t) return i.length || (O.innerHTML = '<div class="empty-models">' + localization.no_models + "</div>"), s = !0;
                    i = i.concat(t), a += o, t.length !== o && (s = !0), O.innerHTML = r(i), g()
                }).catch(function(e) {
                    return console.error(e)
                })
            },
            _ = function() {
                return O.querySelectorAll(".model-item").some(function(e) {
                    return e.classList.contains("checked")
                })
            };
        L.on("change", function(e) {
            l && clearTimeout(l), l = setTimeout(function() {
                m.classList.add("loading"), n(), C(e).then(function() {
                    return m.classList.remove("loading")
                })
            }, 900)
        }), b.on("load", function() {
            h || s || (h = !0, C(c).then(function() {
                return h = !1
            }).catch(function(e) {
                return console.error(e)
            }))
        }), m.querySelector(".close").addEventListener("click", o), v.addEventListener("click", function() {
            var e = m.querySelector(".model-item.checked").getAttribute("title");
            t(i.find(function(t) {
                return t.model_name === e
            })), o()
        }), n()
    }), define("helpers/stack-blocks", [], function() {
        function e(e, t, o) {
            var n = e.rotation.y ? "width" : "length",
                r = t.rotation.y ? "width" : "length";
            t.position.x = e.position.x + e[n] / 2 + t[r] / 2 + o
        }

        function t(e, t, o) {
            var n = e.rotation.y ? "width" : "length",
                r = t.rotation.y ? t.width / 2 : 60,
                i = t.position.x;
            t.position.x = -i + e.position.x + e[n] / 2 + r + o
        }
        return function(o, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    spaceBetween: 0
                },
                i = r.spaceBetween;
            if (!Array.isArray(o) && !Array.isArray(n)) return e(o, n, i);
            if (Array.isArray(o) && !Array.isArray(n)) {
                return e(o[o.length - 1], n, i)
            }
            if (Array.isArray(n) && !Array.isArray(o)) return n.forEach(function(e) {
                t(o, e, i)
            });
            var s = o[o.length - 1];
            return n.forEach(function(t) {
                e(s, t, i)
            })
        }
    }), define("models/rows/full-blocks-row", ["require", "constants", "helpers/stack-blocks", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/blocks/BlocksBuilder");
        return function(e) {
            var r = e.columns,
                i = Array.from({
                    length: r
                }).map(function() {
                    return n.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                });
            return i.forEach(function(e, t) {
                var n = i[t - 1];
                n && o(n, e)
            }), i
        }
    }), define("models/rows/columns-full-row", ["require", "constants", "helpers/stack-blocks", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/blocks/BlocksBuilder");
        return function(e) {
            var r = e.columns,
                i = e.supportType,
                s = e.bothSides,
                a = [],
                l = r % 1,
                c = r < 2,
                u = i ? r - 1 : r,
                d = Array.from({
                    length: u
                }).map(function() {
                    return n.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                });
            if (i) {
                var f = c && s ? "full" : "half",
                    p = "half" === f ? t.BLOCK.COLOR.BLUE : t.BLOCK.DEFAULT_COLOR,
                    h = "half" === f ? 60 : 120;
                supportBlock = n.build({
                    type: f,
                    color: p
                }), supportBlock.position.x += h, a = [supportBlock].concat(_toConsumableArray(d))
            } else a = d;
            return l && a.push(n.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            })), i && !s && a.push(n.build({
                type: "quarter",
                color: t.BLOCK.COLOR.YELLOW
            })), a.forEach(function(e, t) {
                var n = a[t - 1];
                n && o(n, e)
            }), a
        }
    }), define("helpers/offset-blocks", [], function() {
        return function(e, t) {
            Object.keys(t).forEach(function(o) {
                return e.forEach(function(e) {
                    return e.position[o] += t[o]
                })
            })
        }
    }), define("models/support-braces/large-t", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t(e) {
            var t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                o = n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                });
            return e / 4 % 1 > 0 ? (t.position.z = 60, o.position.z = -120) : (t.position.z -= 60, o.position.z = 120), t.rotation.y = r.BLOCK.ANGLE, [t, o]
        }

        function o() {
            var e = Array.from({
                length: 2
            }).map(function() {
                return n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                })
            });
            return e.forEach(function(e, t) {
                var o = t > 0 ? 1 : -1;
                e.position.z = 120 * o
            }), e
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t(e.index)
            }
        }
    }), define("models/support-braces/large-l", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 60, t.position.z = 240, [e, t]
        }

        function o() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 180, [e]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }),
    define("models/support-braces/small-t", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return e.rotation.y = r.BLOCK.ANGLE, [e]
        }

        function o() {
            var e = Array.from({
                length: 2
            }).map(function() {
                return n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                })
            });
            return e.forEach(function(e, t) {
                var o = t > 0 ? 1 : -1;
                e.rotation.y = r.BLOCK.ANGLE, e.position.x -= 30, e.position.z = o * i
            }), e
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants"),
            i = 90;
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-braces/small-l", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 60, [e]
        }

        function o() {
            var e = n.build({
                type: "half",
                color: r.BLOCK.COLOR.BLUE
            });
            return e.position.z = 120, [e]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-braces/column", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                });
            return e.position.x = t.position.x = -60, e.position.z = -60, t.position.z = 60, [e, t]
        }

        function o() {
            var e = n.build({
                type: "quarter",
                color: r.BLOCK.COLOR.YELLOW
            });
            return backQuarter = n.build({
                type: "quarter",
                color: r.BLOCK.COLOR.YELLOW
            }), full = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            }), e.rotation.y = backQuarter.rotation.y = full.rotation.y = r.BLOCK.ANGLE, e.position.x = backQuarter.position.x = 0, e.position.z = -90, backQuarter.position.z = 90, full.position.x = -120, [full, e, backQuarter]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-braces/heavy-duty-column", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                o = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                i = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                s = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                a = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return i.rotation.y = o.rotation.y = s.rotation.y = a.rotation.y = r.BLOCK.ANGLE, o.position.z = i.position.z = -150, s.position.z = a.position.z = 150, o.position.x = s.position.x = -120, i.position.x = a.position.x = 0, e.position.x = t.position.x = -60, e.position.z = -60, t.position.z = 60, [o, i, e, s, a, t]
        }

        function o() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return backFull = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            }), half = n.build({
                type: "half",
                color: r.BLOCK.COLOR.BLUE
            }), e.position.x = backFull.position.x = -60, e.position.z = 120, backFull.position.z = -120, half.position.x = -120, [half, e, backFull]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-braces/builder", ["require", "constants", "helpers/offset-blocks", "models/support-braces/large-t", "models/support-braces/large-l", "models/support-braces/small-t", "models/support-braces/small-l", "models/support-braces/column", "models/support-braces/heavy-duty-column"], function(e) {
        function t(e, t) {
            !t.rowIsOdd && t.evenOffset ? n(e, t.evenOffset) : t.rowIsOdd && t.oddOffset && n(e, t.oddOffset)
        }
        var o = e("constants"),
            n = e("helpers/offset-blocks"),
            r = {
                largeT: e("models/support-braces/large-t"),
                largeL: e("models/support-braces/large-l"),
                smallT: e("models/support-braces/small-t"),
                smallL: e("models/support-braces/small-l"),
                column: e("models/support-braces/column"),
                heavyDutyColumn: e("models/support-braces/heavy-duty-column")
            };
        return {
            build: function(e) {
                if (e.isLast) {
                    var i = r[e.supportType].build(e);
                    return t(i, e), i
                }
                var s = r[e.supportType].build(Object.assign(e, {
                    rowIsOdd: !0
                }));
                t(s, e);
                var a = r[e.supportType].build(Object.assign(e, {
                    rowIsOdd: !1
                }));
                return t(a, e), n(s, {
                    y: o.BLOCK.HEIGHT
                }), s.concat(a)
            }
        }
    }), define("models/rows/support-on-start-row", ["require", "constants", "helpers/stack-blocks", "models/support-braces/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/support-braces/builder"),
            r = e("models/blocks/BlocksBuilder"),
            i = {
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        r = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: r
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "smallT",
                        isLast: o
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                half: function() {
                    return [r.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                }
            };
        return function(e) {
            var n = e.columns,
                s = e.supportType,
                a = void 0 === s ? "half" : s,
                l = e.rowIsOdd,
                c = e.bothSides,
                u = e.isLast,
                d = e.index,
                f = c ? [a, a] : [a, "half"],
                p = f.map(function(e) {
                    return i[e]({
                        rowIsOdd: l,
                        isLast: u,
                        index: d
                    })
                }),
                h = Array.from({
                    length: n - 1
                }).map(function() {
                    return r.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                m = [p[0]].concat(_toConsumableArray(h), [p[1]]);
            m.forEach(function(e, t) {
                var r = m[t - 1];
                r && (n < 2 && c ? o(r[r.length - 1], e) : o(r, e))
            });
            var y = void 0;
            return y = ArrayHelper.flatten(m), y.forEach(function(e) {
                return e.position.x -= 60
            }), y
        }
    }), define("models/rows/one-half-all-full-row", ["require", "constants", "helpers/stack-blocks", "models/support-braces/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/support-braces/builder"),
            r = e("models/blocks/BlocksBuilder"),
            i = {
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        r = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o % 2 ? o - 1 : o,
                        isLast: r
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "smallL",
                        isLast: o
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "smallT",
                        isLast: o
                    })
                },
                half: function(e) {
                    return [r.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                }
            };
        return function(e) {
            var n = e.columns,
                s = e.atStart,
                a = void 0 !== s && s,
                l = e.supportType,
                c = void 0 === l ? "half" : l,
                u = e.bothSides,
                d = e.isLast,
                f = e.isFirst,
                p = e.index,
                h = a ? c : u ? c : "half",
                m = i[h]({
                    rowIsOdd: !1,
                    isLast: d,
                    index: p
                }),
                y = Array.from({
                    length: n
                }).map(function() {
                    return r.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                O = a ? [m].concat(_toConsumableArray(y)) : [].concat(_toConsumableArray(y), [m]);
            if (a && m.forEach(function(e) {
                    return e.position.x -= 60
                }), O.forEach(function(e, t) {
                    var n = O[t - 1];
                    n && o(n, e)
                }), f && "half" !== c && u) {
                var L = i[h]({
                    rowIsOdd: !0,
                    isLast: !0
                });
                o(O[O.length - 1], L, {
                    spaceBetween: -120
                }), O.push(L)
            }
            var v = void 0;
            return v = ArrayHelper.flatten(O), v.forEach(function(e) {
                return e.position.x -= 60
            }), v
        }
    }), define("models/support-columns/inside-l", ["require", "../support-braces/small-l"], function(e) {
        return e("../support-braces/small-l")
    }), define("models/support-columns/inside-t", ["require", "../support-braces/small-t"], function(e) {
        return e("../support-braces/small-t")
    }), define("models/support-columns/small-t", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return e.rotation.y = r.BLOCK.ANGLE, [e]
        }

        function o() {
            var e = Array.from({
                    length: 2
                }).map(function() {
                    return n.build({
                        type: "quarter",
                        color: r.BLOCK.COLOR.YELLOW
                    })
                }),
                t = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return e.forEach(function(e, t) {
                var o = t > 0 ? 1 : -1;
                e.rotation.y = r.BLOCK.ANGLE, e.position.x -= 30, e.position.z = o * i
            }), t.position.x -= 60, [].concat(_toConsumableArray(e), [t])
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants"),
            i = 90;
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-columns/small-l", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 60, [e]
        }

        function o() {
            var e = n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                }),
                t = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return e.position.z = 120, t.position.x -= 60, [e, t]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-columns/large-t", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t(e) {
            var t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                o = n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                });
            return e / 4 % 1 > 0 ? (t.position.z = 60, o.position.z = -120) : (t.position.z -= 60, o.position.z = 120), t.rotation.y = r.BLOCK.ANGLE, [t, o]
        }

        function o() {
            var e = Array.from({
                    length: 2
                }).map(function() {
                    return n.build({
                        type: "half",
                        color: r.BLOCK.COLOR.BLUE
                    })
                }),
                t = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return e.forEach(function(e, t) {
                var o = t > 0 ? 1 : -1;
                e.position.z = 120 * o
            }), t.position.x = -30, [].concat(_toConsumableArray(e), [t])
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t(e.index)
            }
        }
    }), define("models/support-columns/large-l", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "half",
                    color: r.BLOCK.COLOR.BLUE
                });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 60, t.position.z = 240, [e, t]
        }

        function o() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return e.rotation.y = r.BLOCK.ANGLE, e.position.z = 180, t.position.x = -30, [e, t]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-columns/column", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                });
            return e.position.x = t.position.x = -60, e.position.z = -60, t.position.z = 60, [e, t]
        }

        function o() {
            var e = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                t = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return backQuarter = n.build({
                type: "quarter",
                color: r.BLOCK.COLOR.YELLOW
            }), full = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            }), t.rotation.y = backQuarter.rotation.y = full.rotation.y = r.BLOCK.ANGLE, t.position.x = backQuarter.position.x = 0, t.position.z = -90, backQuarter.position.z = 90, full.position.x = -120, e.position.x = -30, [full, e, t, backQuarter]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-columns/heavy-duty-column", ["require", "models/blocks/BlocksBuilder", "constants"], function(e) {
        function t() {
            var e = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                }),
                o = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                i = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                s = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                a = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                });
            return i.rotation.y = o.rotation.y = s.rotation.y = a.rotation.y = r.BLOCK.ANGLE, o.position.z = i.position.z = -150, s.position.z = a.position.z = 150, o.position.x = s.position.x = -120, i.position.x = a.position.x = 0, e.position.x = t.position.x = -60, e.position.z = -60, t.position.z = 60, [o, i, e, s, a, t]
        }

        function o() {
            var e = n.build({
                    type: "quarter",
                    color: r.BLOCK.COLOR.YELLOW
                }),
                t = n.build({
                    type: "full",
                    color: r.BLOCK.DEFAULT_COLOR
                });
            return backFull = n.build({
                type: "full",
                color: r.BLOCK.DEFAULT_COLOR
            }), half = n.build({
                type: "half",
                color: r.BLOCK.COLOR.BLUE
            }), t.position.x = backFull.position.x = -60, t.position.z = 120, backFull.position.z = -120, half.position.x = -120, e.position.x = -30, [half, e, t, backFull]
        }
        var n = e("models/blocks/BlocksBuilder"),
            r = e("constants");
        return {
            build: function(e) {
                return e.rowIsOdd ? o() : t()
            }
        }
    }), define("models/support-columns/builder", ["require", "constants", "helpers/offset-blocks", "models/support-columns/inside-l", "models/support-columns/inside-t", "models/support-columns/small-t", "models/support-columns/small-l", "models/support-columns/large-t", "models/support-columns/large-l", "models/support-columns/column", "models/support-columns/heavy-duty-column"], function(e) {
        function t(e, t) {
            !t.rowIsOdd && t.evenOffset ? n(e, t.evenOffset) : t.rowIsOdd && t.oddOffset && n(e, t.oddOffset)
        }
        var o = e("constants"),
            n = e("helpers/offset-blocks"),
            r = {
                insideL: e("models/support-columns/inside-l"),
                insideT: e("models/support-columns/inside-t"),
                smallT: e("models/support-columns/small-t"),
                smallL: e("models/support-columns/small-l"),
                largeT: e("models/support-columns/large-t"),
                largeL: e("models/support-columns/large-l"),
                column: e("models/support-columns/column"),
                heavyDutyColumn: e("models/support-columns/heavy-duty-column")
            };
        return {
            build: function(e) {
                if (e.isLast) {
                    var i = r[e.supportType].build(e);
                    return t(i, e), i
                }
                var s = r[e.supportType].build(Object.assign(e, {
                    rowIsOdd: !0
                }));
                t(s, e);
                var a = r[e.supportType].build(Object.assign(e, {
                    rowIsOdd: !1
                }));
                return t(a, e), n(s, {
                    y: o.BLOCK.HEIGHT
                }), s.concat(a)
            }
        }
    }), define("models/rows/one-quarter-all-full-row", ["require", "constants", "helpers/stack-blocks", "models/support-columns/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/support-columns/builder"),
            r = e("models/blocks/BlocksBuilder"),
            i = {
                quarter: function() {
                    return [r.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    })]
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        r = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: r
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        supportType: "smallT",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                }
            };
        return function(e) {
            var n = e.supportType,
                s = void 0 === n ? "quarter" : n,
                a = e.columns,
                l = e.atStart,
                c = void 0 !== l && l,
                u = e.bothSides,
                d = e.isLast,
                f = e.isFirst,
                p = e.index,
                h = c ? s : u ? s : "quarter",
                m = i[h]({
                    rowIsOdd: !1,
                    isLast: d,
                    index: c ? p : p + 1
                }),
                y = Array.from({
                    length: a
                }).map(function() {
                    return r.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                O = c ? [m].concat(_toConsumableArray(y)) : [].concat(_toConsumableArray(y), [m]);
            if (c && m.forEach(function(e) {
                    return e.position.x -= 120
                }), O.forEach(function(e, t) {
                    var n = O[t - 1];
                    n && o(n, e)
                }), f && "quarter" !== s && u) {
                var L = i[h]({
                    rowIsOdd: !0,
                    isLast: !0
                });
                o(O[O.length - 1], L, {
                    spaceBetween: -60
                }), O.push(L)
            }
            return ArrayHelper.flatten(O)
        }
    }), define("helpers/calculate-staggered-wall-length", [], function() {
        return function(e) {
            var t = e.columns,
                o = e.wallType;
            switch (t % 3) {
                case 1:
                    return t + 2 - (t + 2) / 3 - ("full" === o ? 1 : 2);
                case 2:
                    return t + 1 - (t + 1) / 3 - ("full" === o ? 0 : 1);
                default:
                    return t - t / 3
            }
        }
    }), define("models/rows/support-on-start-staggered-row", ["require", "constants", "helpers/stack-blocks", "helpers/calculate-staggered-wall-length", "models/support-braces/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("helpers/calculate-staggered-wall-length"),
            r = e("models/support-braces/builder"),
            i = e("models/blocks/BlocksBuilder"),
            s = {
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        n = e.isLast;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: n
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "smallT",
                        isLast: o
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return r.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                half: function() {
                    return [i.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                },
                quarter: function() {
                    return [i.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    })]
                }
            };
        return function(e) {
            var r = e.columns,
                a = e.supportType,
                l = void 0 === a ? "half" : a,
                c = e.rowIsOdd,
                u = e.bothSides,
                d = e.isLast,
                f = e.index,
                p = 1 === r,
                h = 2 === r,
                m = u ? [l, l] : [h && "half" === l ? "quarter" : l, p || h && !u ? "quarter" : "half"],
                y = r % 3 == 0,
                O = (r - 2) % 3 == 0,
                L = m.map(function(e, t) {
                    return s[e]({
                        rowIsOdd: u && t && d && y ? !c : c,
                        isLast: d,
                        index: f
                    })
                }),
                v = n({
                    columns: r,
                    wallType: "support"
                }),
                b = Array.from({
                    length: v
                }).map(function() {
                    return i.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                E = y ? [L[0]].concat(_toConsumableArray(b)) : [L[0]].concat(_toConsumableArray(b), [L[1]]);
            E.forEach(function(e, t) {
                var n = E[t - 1],
                    r = 1 === t,
                    i = 2 === t,
                    s = t === E.length - 2,
                    a = t === E.length - 1,
                    c = y && a || O && (i || s) || r || a ? 60 : 120;
                n && (p && u ? o(n[n.length - 1], e, {
                    spaceBetween: 0
                }) : o(n, e, {
                    spaceBetween: h && 1 === t && "half" !== l || h && u ? 0 : c
                }))
            }), y && "quarter" !== l && u && d && (o(E[E.length - 1], L[1], {
                spaceBetween: -120
            }), E.push(L[1]));
            var g = ArrayHelper.flatten(E);
            return g.forEach(function(e) {
                return e.position.x -= h && "half" === l ? 120 : 60
            }), g
        }
    }), define("models/rows/quarter-with-columns", ["require", "constants", "helpers/stack-blocks", "models/support-columns/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("models/support-columns/builder"),
            r = e("models/blocks/BlocksBuilder"),
            i = {
                quarter: function() {
                    return [r.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    })]
                },
                half: function() {
                    return [r.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                },
                full: function() {
                    return [r.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })]
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        r = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: r
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        supportType: "smallT",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return n.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                }
            };
        return function(e) {
            var s = e.supportType,
                a = void 0 === s ? "quarter" : s,
                l = e.columns,
                c = e.spaceBetween,
                u = e.rowIsOdd,
                d = e.isLast,
                f = e.bothSides,
                p = e.supportColumnType,
                h = e.index,
                m = void 0,
                y = l % 1,
                O = f ? [a, a] : [a, "quarter" === a ? "quarter" : "half"],
                L = O.map(function(e) {
                    return i[e]({
                        rowIsOdd: u,
                        index: h,
                        isLast: d
                    })
                }),
                v = Math.max(Math.floor(Math.floor(l) / (c + .75)), 1),
                b = !(v % 2),
                E = l < 2,
                g = l - Math.floor(v / 2) - 1,
                C = Array.from({
                    length: "quarter" === a ? g : g - 1
                }).map(function() {
                    return r.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                _ = Array.from({
                    length: v
                }).map(function() {
                    return n.build({
                        supportType: p,
                        rowIsOdd: u,
                        isLast: d
                    })
                });
            if ("quarter" === a || E) y && C.push(r.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            }));
            else {
                var T = y ? "full" : "half",
                    B = "half" === T ? t.BLOCK.COLOR.BLUE : t.BLOCK.DEFAULT_COLOR;
                C.push(r.build({
                    type: T,
                    color: B
                }))
            }
            return b && ArrayHelper.insertAt(C, 0, r.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            })), _.forEach(function(e, t) {
                var o = _.length > 1 ? (t + 1) * (c + 1) - 1 : g / 2;
                ArrayHelper.insertAt(C, o, e)
            }), m = [L[0]].concat(_toConsumableArray(C)), E && !f && "quarter" !== a || m.push(L[1]), "quarter" === a && (L[0][0].position.x -= 120), m.forEach(function(e, t) {
                var n = m[t - 1];
                if (n)
                    if (E) {
                        if (E) {
                            var r = n[n.length - 1] || n;
                            o(r, e)
                        }
                    } else o(n, e)
            }), ArrayHelper.flatten(m)
        }
    }), define("models/rows/full-staggered-columns-row", ["require", "constants", "helpers/stack-blocks", "helpers/calculate-staggered-wall-length", "models/support-braces/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("helpers/calculate-staggered-wall-length"),
            r = e("models/support-braces/builder"),
            i = e("models/blocks/BlocksBuilder"),
            s = {
                quarter: function() {
                    return [i.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    })]
                },
                half: function() {
                    return [i.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                },
                full: function() {
                    return [i.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })]
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast,
                        n = e.evenOffset,
                        i = e.oddOffset;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o,
                        evenOffset: n,
                        oddOffset: i
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        n = e.isLast,
                        i = e.evenOffset,
                        s = e.oddOffset;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: n,
                        evenOffset: i,
                        oddOffset: s
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast,
                        n = e.evenOffset,
                        i = e.oddOffset;
                    return r.build({
                        supportType: "smallT",
                        rowIsOdd: t,
                        isLast: o,
                        evenOffset: n,
                        oddOffset: i
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast,
                        n = e.evenOffset,
                        i = e.oddOffset;
                    return r.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o,
                        evenOffset: n,
                        oddOffset: i
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast,
                        n = e.evenOffset,
                        i = e.oddOffset;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o,
                        evenOffset: n,
                        oddOffset: i
                    })
                },
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast,
                        n = e.evenOffset,
                        i = e.oddOffset;
                    return r.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o,
                        evenOffset: n,
                        oddOffset: i
                    })
                }
            };
        return function(e) {
            var r = e.columns,
                a = e.supportType,
                l = void 0 === a ? "quarter" : a,
                c = e.bothSides,
                u = e.rowIsOdd,
                d = e.index,
                f = c ? l : "quarter",
                p = n({
                    columns: r,
                    wallType: "full"
                }),
                h = r % 3 == 0,
                m = p % 2 == 0,
                y = Array.from({
                    length: p
                }).map(function() {
                    return i.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                O = h ? s[f]({
                    index: d + 1,
                    rowIsOdd: u,
                    evenOffset: "quarter" !== l ? {
                        x: 60
                    } : null,
                    oddOffset: {
                        y: -240,
                        x: 60
                    }
                }) : null;
            return O && y.push(O), y.forEach(function(e, t) {
                var n = y[t - 1],
                    i = 1 === t,
                    s = t === y.length - 1;
                if (n) {
                    o(n, e, {
                        spaceBetween: 2 === r ? 0 : h && s ? 60 : (i || s) && m && !h ? 60 : 120
                    })
                }
            }), ArrayHelper.flatten(y)
        }
    }), define("models/rows/quarter-staggered-with-columns", ["require", "constants", "helpers/stack-blocks", "helpers/calculate-staggered-wall-length", "models/support-columns/builder", "models/support-braces/builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = e("helpers/stack-blocks"),
            n = e("helpers/calculate-staggered-wall-length"),
            r = e("models/support-columns/builder"),
            i = e("models/support-braces/builder"),
            s = e("models/blocks/BlocksBuilder"),
            a = {
                quarter: function() {
                    return [s.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    })]
                },
                half: function() {
                    return [s.build({
                        type: "half",
                        color: t.BLOCK.COLOR.BLUE
                    })]
                },
                full: function() {
                    return [s.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })]
                },
                largeL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return i.build({
                        rowIsOdd: t,
                        supportType: "largeL",
                        isLast: o
                    })
                },
                largeT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.index,
                        n = e.isLast;
                    return i.build({
                        rowIsOdd: t,
                        supportType: "largeT",
                        index: o,
                        isLast: n
                    })
                },
                smallT: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return i.build({
                        supportType: "smallT",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                smallL: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return i.build({
                        supportType: "smallL",
                        rowIsOdd: t,
                        isLast: o
                    })
                },
                column: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return i.build({
                        rowIsOdd: t,
                        supportType: "column",
                        isLast: o
                    })
                },
                heavyDutyColumn: function(e) {
                    var t = e.rowIsOdd,
                        o = e.isLast;
                    return i.build({
                        rowIsOdd: t,
                        supportType: "heavyDutyColumn",
                        isLast: o
                    })
                }
            };
        return function(e) {
            var i = e.supportType,
                l = void 0 === i ? "quarter" : i,
                c = e.columns,
                u = e.spaceBetween,
                d = e.rowIsOdd,
                f = e.isLast,
                p = e.bothSides,
                h = e.supportColumnType,
                m = e.index,
                y = void 0,
                O = 1 === c,
                L = p ? [l, l] : [l, "quarter"],
                v = O && p ? 0 : Math.max(Math.floor(Math.floor(c) / (u + 1)), 1),
                b = c % 3 == 0,
                E = n({
                    columns: c,
                    wallType: "support"
                }),
                g = E % 2 != 0,
                C = L.map(function(e, t) {
                    return a[e]({
                        rowIsOdd: p && t && f && b ? !d : d,
                        index: m,
                        isLast: f
                    })
                }),
                _ = Array.from({
                    length: E
                }).map(function() {
                    return s.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    })
                }),
                T = Array.from({
                    length: v
                }).map(function() {
                    return r.build({
                        supportType: h,
                        rowIsOdd: d,
                        isLast: f
                    })
                });
            return y = b || O && "quarter" !== l && !p ? [C[0]].concat(_toConsumableArray(_)) : [C[0]].concat(_toConsumableArray(_), [C[1]]), "quarter" === l ? C[0][0].position.x -= 120 : C[0].forEach(function(e) {
                return e.position.x -= 60
            }), y.forEach(function(e, t) {
                var n = y[t - 1];
                if (n)
                    if (O && p) o(n[n.length - 1], e);
                    else {
                        var r = "quarter" !== l,
                            i = 1 === t,
                            s = t === y.length - 1,
                            a = r && (i || s && p && !b),
                            c = b && s ? 60 : (i || s) && g && !b ? 60 : 120;
                        o(n, e, {
                            spaceBetween: a ? c - 60 : c
                        })
                    }
            }), T.map(function(e, t) {
                var n = T.length > 1 ? (t + 1) * Math.floor(E / T.length) - 1 : Math.floor(E / 2);
                return o(y[n], e), n
            }).forEach(function(e, t) {
                ArrayHelper.insertAt(y, e, T[t])
            }), b && "quarter" !== l && p && f && (o(y[y.length - 1], C[1], {
                spaceBetween: -120
            }), y.push(C[1])), ArrayHelper.flatten(y)
        }
    }), define("models/rows/row-builder", ["require", "models/rows/full-blocks-row", "models/rows/columns-full-row", "models/rows/support-on-start-row", "models/rows/one-half-all-full-row", "models/rows/one-quarter-all-full-row", "models/rows/support-on-start-staggered-row", "models/rows/quarter-with-columns", "models/rows/full-staggered-columns-row", "models/rows/quarter-staggered-with-columns"], function(e) {
        function t() {
            return this.build = function(e) {
                return e.placeSupportsAt = o(e.columns, e.spaceBetween, e), new n[e.type](e)
            }, this
        }

        function o(e, t, o) {
            if (Math.floor(e / 2) < t) return [Math.ceil(e / 2)];
            var n = [],
                r = e - e % t,
                i = r - e,
                s = Math.floor(i / 2);
            for (e += .5 * e; s < e;) n.push(s), s += o.withOpenings ? t : t + 1;
            return n
        }
        var n = {
            "full-blocks-row": e("models/rows/full-blocks-row"),
            "columns-full-row": e("models/rows/columns-full-row"),
            "support-on-start-row": e("models/rows/support-on-start-row"),
            "one-half-all-full-row": e("models/rows/one-half-all-full-row"),
            "one-quarter-all-full-row": e("models/rows/one-quarter-all-full-row"),
            "support-on-start-staggered-row": e("models/rows/support-on-start-staggered-row"),
            "quarter-with-columns": e("models/rows/quarter-with-columns"),
            "full-staggered-columns-row": e("models/rows/full-staggered-columns-row"),
            "quarter-staggered-with-columns": e("models/rows/quarter-staggered-with-columns")
        };
        return t
    }), define("models/deprecated-rows/SmallT", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n, r = [],
                i = o.rowIsOdd,
                s = o.isFirstBlock,
                a = t.BLOCK.HALF.WIDTH / 2;
            if (i) n = e.build({
                type: "full",
                color: t.BLOCK.DEFAULT_COLOR
            }), n.rotateY(t.BLOCK.ANGLE), n.position.x -= t.BLOCK.HALF.WIDTH, r.push(n);
            else {
                if ([1, -1].forEach(function(i) {
                        n = e.build({
                            type: "quarter",
                            color: t.BLOCK.COLOR.YELLOW
                        }), n.rotateY(t.BLOCK.ANGLE);
                        var l = o.withSupportColumns ? t.BLOCK.HALF.WIDTH + a : a;
                        n.position.x -= s ? -l : t.BLOCK.HALF.WIDTH + l, n.position.z += i * (t.BLOCK.WIDTH - 30), r.push(n)
                    }), o.withSupportColumns) {
                    n = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    var l = t.BLOCK.WIDTH;
                    n.position.x -= s ? -l : t.BLOCK.HALF.WIDTH + l, r.push(n)
                }
            }
            return r
        }
    }), define("models/deprecated-rows/SmallL", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n, r = [];
            if (o.rowIsOdd) n = e.build({
                type: "full",
                color: t.BLOCK.DEFAULT_COLOR
            }), n.rotateY(t.BLOCK.ANGLE), n.position.x -= t.BLOCK.HALF.WIDTH, n.position.z += t.BLOCK.HALF.WIDTH, r.push(n);
            else {
                n = e.build({
                    type: "half",
                    color: t.BLOCK.COLOR.BLUE
                });
                var i = o.withSupportColumns ? 120 : t.BLOCK.HALF.WIDTH;
                if (n.position.x -= o.isFirstBlock ? -i : i, n.position.z += t.BLOCK.WIDTH, r.push(n), o.withSupportColumns) {
                    n = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    var i = t.BLOCK.WIDTH;
                    n.position.x -= o.isFirstBlock ? -i : t.BLOCK.HALF.WIDTH + i, r.push(n)
                }
            }
            return r
        }
    }), define("models/deprecated-rows/LargeT", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants"),
            o = 1;
        return function(n) {
            var r, i = [];
            n.rowIsOdd ? (r = e.build({
                type: "full",
                color: t.BLOCK.DEFAULT_COLOR
            }), r.rotateY(t.BLOCK.ANGLE), r.position.x += n.withSupportColumns ? -t.BLOCK.HALF.WIDTH : t.BLOCK.WIDTH, r.position.z += o * t.BLOCK.HALF.WIDTH, i.push(r), r = e.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            }), r.position.x += n.withSupportColumns ? -t.BLOCK.HALF.WIDTH : t.BLOCK.WIDTH, r.position.z -= o * t.BLOCK.WIDTH, i.push(r), n.isFirstBlock || (o *= -1)) : ([1, -1].forEach(function(o) {
                r = e.build({
                    type: "half",
                    color: t.BLOCK.COLOR.BLUE
                });
                var s = n.withSupportColumns ? t.BLOCK.WIDTH : t.BLOCK.HALF.WIDTH;
                r.position.x -= n.isFirstBlock ? -s : s, r.position.z += o * t.BLOCK.WIDTH, i.push(r)
            }), n.withSupportColumns && (r = e.build({
                type: "quarter",
                color: t.BLOCK.COLOR.YELLOW
            }), r.position.x -= n.isFirstBlock ? -120 : t.BLOCK.HALF.WIDTH + 120, i.push(r)));
            return i
        }
    }), define("models/deprecated-rows/LargeL", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n, r = [];
            if (o.rowIsOdd) n = e.build({
                type: "full",
                color: t.BLOCK.DEFAULT_COLOR
            }), n.rotateY(t.BLOCK.ANGLE), n.position.x += o.withSupportColumns ? -60 : t.BLOCK.WIDTH, n.position.z += t.BLOCK.HALF.WIDTH, r.push(n), n = e.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            }), n.position.x += o.withSupportColumns ? -60 : t.BLOCK.WIDTH, n.position.z += t.BLOCK.LENGTH, r.push(n);
            else {
                n = e.build({
                    type: "full",
                    color: t.BLOCK.DEFAULT_COLOR
                }), n.rotateY(t.BLOCK.ANGLE);
                var i = o.withSupportColumns ? 120 : t.BLOCK.HALF.WIDTH;
                if (n.position.x -= o.isFirstBlock ? -i : i, n.position.z += t.BLOCK.WIDTH + 60, r.push(n), o.withSupportColumns) {
                    n = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    var i = 120;
                    n.position.x -= o.isFirstBlock ? -i : t.BLOCK.HALF.WIDTH + i, r.push(n)
                }
            }
            return r
        }
    }), define("models/deprecated-rows/InsideLSupport", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n = [],
                r = e.build({
                    type: "full",
                    color: t.BLOCK.DEFAULT_COLOR
                });
            if (r.rotateY(t.BLOCK.ANGLE), r.position.z += t.BLOCK.HALF_STEP, n.push(r), !(o.rowIndex % 2) && o.rowIndex !== o.rows - 1) {
                var i = e.build({
                    type: "half",
                    color: t.BLOCK.COLOR.BLUE
                });
                i.position.y += t.BLOCK.HEIGHT, i.position.z += t.BLOCK.FULL_STEP, n.push(i)
            }
            return n
        }
    }), define("models/deprecated-rows/InsideTSupport", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n = [],
                r = e.build({
                    type: "full",
                    color: t.BLOCK.DEFAULT_COLOR
                });
            if (r.rotateY(t.BLOCK.ANGLE), n.push(r), !(o.rowIndex % 2) && o.rowIndex !== o.rows - 1) {
                [1, -1].forEach(function(o) {
                    var r = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    r.rotateY(t.BLOCK.ANGLE), r.position.y += t.BLOCK.HEIGHT, r.position.x += -t.BLOCK.QUARTER_STEP, r.position.z += o * (t.BLOCK.HALF.WIDTH + t.BLOCK.QUARTER_STEP), n.push(r)
                })
            }
            return n
        }
    }), define("models/deprecated-rows/Column", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n, r = [];
            if (o.rowIsOdd) {
                var i = e.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    }),
                    s = e.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    });
                i.position.x = s.position.x = o.withSupportColumns ? 0 : -60, i.position.z = -60, s.position.z = 60, r.push(i, s)
            } else {
                n = e.build({
                    type: "full",
                    color: t.BLOCK.DEFAULT_COLOR
                }), n.rotateY(t.BLOCK.ANGLE);
                var a = o.withSupportColumns ? 120 : t.BLOCK.HALF.WIDTH;
                if (n.position.x -= o.isFirstBlock ? -a : a, n.position.z += t.BLOCK.WIDTH + 60, r.push(n), o.withSupportColumns) {
                    n = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    var a = 120;
                    n.position.x -= o.isFirstBlock ? -a : t.BLOCK.HALF.WIDTH + a, r.push(n)
                }
            }
            return r
        }
    }), define("models/deprecated-rows/HeavyDutyColumn", ["models/blocks/BlocksBuilder", "constants"], function() {
        var e = require("models/blocks/BlocksBuilder"),
            t = require("constants");
        return function(o) {
            var n, r = [];
            if (o.rowIsOdd) n = e.build({
                type: "full",
                color: t.BLOCK.DEFAULT_COLOR
            }), n.rotateY(t.BLOCK.ANGLE), n.position.x += o.withSupportColumns ? -60 : t.BLOCK.WIDTH, n.position.z += t.BLOCK.HALF.WIDTH, r.push(n), n = e.build({
                type: "half",
                color: t.BLOCK.COLOR.BLUE
            }), n.position.x += o.withSupportColumns ? -60 : t.BLOCK.WIDTH, n.position.z += t.BLOCK.LENGTH, r.push(n);
            else {
                n = e.build({
                    type: "full",
                    color: t.BLOCK.DEFAULT_COLOR
                }), n.rotateY(t.BLOCK.ANGLE);
                var i = o.withSupportColumns ? 120 : t.BLOCK.HALF.WIDTH;
                if (n.position.x -= o.isFirstBlock ? -i : i, n.position.z += t.BLOCK.WIDTH + 60, r.push(n), o.withSupportColumns) {
                    n = e.build({
                        type: "quarter",
                        color: t.BLOCK.COLOR.YELLOW
                    });
                    var i = 120;
                    n.position.x -= o.isFirstBlock ? -i : t.BLOCK.HALF.WIDTH + i, r.push(n)
                }
            }
            return r
        }
    }),
    define("models/deprecated-rows/support-builder", ["require", "./SmallT", "./SmallL", "./LargeT", "./LargeL", "./InsideLSupport", "./InsideTSupport", "./Column", "./HeavyDutyColumn"], function(e) {
        var t = {
            smallT: e("./SmallT"),
            smallL: e("./SmallL"),
            largeT: e("./LargeT"),
            largeL: e("./LargeL"),
            insideL: e("./InsideLSupport"),
            insideT: e("./InsideTSupport"),
            column: e("./Column"),
            heavyDutyColumn: e("./HeavyDutyColumn")
        };
        return function() {
            return this.build = function(e, o) {
                return t[e](o)
            }, this
        }
    }), define("models/deprecated-rows/FullBlocksRow", ["require", "constants", "./support-builder", "models/blocks/BlocksBuilder"], function(e) {
        var t = e("constants"),
            o = new(e("./support-builder")),
            n = e("models/blocks/BlocksBuilder");
        return function(e) {
            var r = [],
                i = e.withOpenings,
                s = i ? Math.floor(.75 * e.columns) : e.columns,
                a = !(e.index % 3),
                l = e.xOffset || 0;
            2 === e.columns && (e.bothSides = !1);
            for (var c = 0; c < Math.floor(s); c += 1) {
                var u = c + 1 === Math.floor(s),
                    d = 0 === c,
                    f = -1 !== e.placeSupportsAt.indexOf(c + 1),
                    p = e.bothSides ? d || u : u,
                    h = n.build({
                        type: "full",
                        color: t.BLOCK.DEFAULT_COLOR
                    });
                if (h.position.x = l, a && "insideStrongL" === e.supportColumnType) {
                    if (f && !u && (h.rotateY(t.BLOCK.ANGLE), h.position.z += t.BLOCK.HALF_STEP, h.position.x -= t.BLOCK.HALF_STEP, l -= t.BLOCK.FULL_STEP, s += .5, e.index + 1 - e.rows < 0)) {
                        var m = n.build({
                            type: "half",
                            color: t.BLOCK.COLOR.BLUE
                        });
                        m.position.y += t.BLOCK.HEIGHT, m.position.z += t.BLOCK.FULL_STEP, m.position.x = l + t.BLOCK.HALF_STEP, r.push(m), e.index + 2 - e.rows < 0 && (m = n.build({
                            type: "half",
                            color: t.BLOCK.COLOR.BLUE
                        }), m.position.y += 2 * t.BLOCK.HEIGHT, m.position.z += t.BLOCK.FULL_STEP, m.position.x = l + t.BLOCK.HALF_STEP, r.push(m))
                    }
                    if (u && s % 1 != 0) {
                        var y = n.build({
                            type: "half",
                            color: t.BLOCK.COLOR.BLUE
                        });
                        y.position.x = l + t.BLOCK.FULL_STEP + t.BLOCK.HALF_STEP, l += t.BLOCK.FULL_STEP, r.push(y)
                    }
                }
                switch (l += i ? t.BLOCK.LENGTH + t.BLOCK.FULL_STEP : t.BLOCK.LENGTH, r.push(h), e.supportType) {
                    case "largeL":
                    case "largeT":
                    case "smallT":
                    case "smallL":
                    case "column":
                    case "heavyDutyColumn":
                        if (p) {
                            e.isFirstBlock = d, e.rowIsOdd = !1, e.bothSides || "insideStrongL" !== e.supportColumnType || (e.withSupportColumns = !1);
                            o.build(e.supportType, e).forEach(function(e) {
                                e.position.x = l - e.position.x - (i ? t.BLOCK.LENGTH + t.BLOCK.FULL_STEP : t.BLOCK.LENGTH), r.push(e)
                            })
                        }
                }
            }
            return r
        }
    }), define("models/deprecated-rows/third-column-method-row", ["require", "constants", "./support-builder", "models/blocks/BlocksBuilder", "./FullBlocksRow"], function(e) {
        var t = e("constants"),
            o = new(e("./support-builder")),
            n = e("models/blocks/BlocksBuilder"),
            r = 0;
        return function(i) {
            if (!(i.index % 3)) return e("./FullBlocksRow")(i);
            var s = [],
                a = i.withOpenings,
                l = a ? Math.floor(.75 * i.columns) : i.columns,
                c = i.xOffset || 0;
            2 === i.columns && (i.bothSides = !1);
            for (var u = 0; u < Math.floor(l); u += 1) {
                var d, f, p = 0,
                    h = 0 === u,
                    m = -1 !== i.placeSupportsAt.indexOf(u + r % 2),
                    y = u + 1 === Math.floor(l),
                    O = function() {
                        if (h || y || m) {
                            if (l += .5, y) {
                                if (d = n.build({
                                        type: "full",
                                        color: t.BLOCK.DEFAULT_COLOR
                                    }), l -= .5, !(i.columns % 2) && l % 1 != 0 || i.columns % 2 && l % 1 != 0) {
                                    var e = n.build({
                                        type: "half",
                                        color: t.BLOCK.COLOR.BLUE
                                    });
                                    e.position.x = c + t.BLOCK.FULL_STEP + t.BLOCK.HALF_STEP, s.push(e)
                                }
                            } else d = n.build({
                                type: "half",
                                color: t.BLOCK.COLOR.BLUE
                            }), c -= y && a ? t.BLOCK.FULL_STEP : t.BLOCK.HALF_STEP;
                            p = a ? t.BLOCK.LENGTH : t.BLOCK.HALF_STEP + t.BLOCK.FULL_STEP
                        } else d = n.build({
                            type: "full",
                            color: t.BLOCK.DEFAULT_COLOR
                        }), p = a ? t.BLOCK.LENGTH + t.BLOCK.FULL_STEP : t.BLOCK.LENGTH;
                        d.position.x = c, s.push(d)
                    };
                if ((i.bothSides ? h || y : y) && i.supportType) switch (i.isFirstBlock = h, i.rowIsOdd = !0, i.bothSides || (i.withSupportColumns = !1), f = o.build(i.supportType, i), i.supportType) {
                    case "largeL":
                    case "largeT":
                    case "smallT":
                    case "smallL":
                    case "column":
                    case "heavyDutyColumn":
                        if (y)
                            if (i.bothSides) {
                                if (l % 1 != 0 && (d = n.build({
                                        type: "full",
                                        color: t.BLOCK.DEFAULT_COLOR
                                    }), d.position.x = c, s.push(d), c += t.BLOCK.LENGTH), d = n.build({
                                        type: "full",
                                        color: t.BLOCK.DEFAULT_COLOR
                                    }), d.position.x = c, s.push(d), c += t.BLOCK.LENGTH, l -= .5, !(i.columns % 2) && l % 1 != 0 || i.columns % 2 && l % 1 != 0) {
                                    var L = n.build({
                                        type: "half",
                                        color: t.BLOCK.COLOR.BLUE
                                    });
                                    L.position.x = c - t.BLOCK.HALF_STEP, s.push(L), c += t.BLOCK.FULL_STEP
                                }
                            } else l % 1 != 0 ? (d = n.build({
                                type: "full",
                                color: t.BLOCK.DEFAULT_COLOR
                            }), d.position.x = c, s.push(d), c += 2 * t.BLOCK.LENGTH - t.BLOCK.HALF_STEP) : (d = n.build({
                                type: "half",
                                color: t.BLOCK.COLOR.BLUE
                            }), d.position.x = c - t.BLOCK.HALF_STEP, s.push(d), c += t.BLOCK.LENGTH + t.BLOCK.HALF_STEP), "smallT" !== i.supportType && "smallL" !== i.supportType || (c -= t.BLOCK.FULL_STEP + t.BLOCK.HALF_STEP);
                        c -= y ? t.BLOCK.WIDTH : t.BLOCK.WIDTH + t.BLOCK.HALF.WIDTH, p = i.withOpenings ? t.BLOCK.LENGTH + t.BLOCK.FULL_STEP : t.BLOCK.LENGTH, f.forEach(function(e) {
                            e.position.x = c - e.position.x, s.push(e)
                        });
                        break;
                    default:
                        O()
                } else O();
                c += p
            }
            return r += 1, s
        }
    }), define("models/walls/running-wall", ["require", "constants", "models/rows/row-builder", "../deprecated-rows/third-column-method-row"], function(e) {
        function t(e, t) {
            return Object.assign({}, e, t)
        }

        function o(e) {
            var o = e.rows,
                c = e.columns,
                u = [],
                d = c % 1 > 0,
                f = c % 1 == .5 ? "one-half-all-full-row" : "one-quarter-all-full-row",
                p = Math.floor(c) / 2 * -n.BLOCK.LENGTH + n.BLOCK.LENGTH,
                h = 0;
            return e.xOffset = p / 2, e.placeSupportsAt = getSupportColumnsIndexes(e.columns, e.spaceBetween, e), Array.from({
                length: o
            }).forEach(function(c, m) {
                e.index = m;
                var y = null,
                    O = Boolean(m % 2),
                    L = m + 1 === o,
                    v = 0 === m,
                    b = e.withSupportColumns ? s({
                        rowIsOdd: O,
                        isLast: L
                    }) : d ? l({
                        rowIsOdd: O,
                        type: f,
                        isLast: L,
                        isFirst: v
                    }) : a({
                        rowIsOdd: O,
                        isLast: L
                    }),
                    E = t(e, b);
                y = "insideStrongL" === e.supportColumnType ? new i(e) : r.build(E), y.forEach(function(e) {
                    e.setTransparency(!1), e.position.y += h, e.position.x += p, u.push(e)
                }), h += n.BLOCK.HEIGHT
            }), u
        }
        var n = e("constants"),
            r = new(e("models/rows/row-builder")),
            i = e("../deprecated-rows/third-column-method-row"),
            s = function(e) {
                var t = e.rowIsOdd,
                    o = e.isLast;
                return t ? {
                    type: "columns-full-row",
                    rowIsOdd: t
                } : {
                    type: "quarter-with-columns",
                    rowIsOdd: t,
                    isLast: o
                }
            },
            a = function(e) {
                var t = e.rowIsOdd,
                    o = e.isLast;
                return t ? {
                    type: "full-blocks-row",
                    rowIsOdd: t
                } : {
                    type: "support-on-start-row",
                    rowIsOdd: t,
                    isLast: o
                }
            },
            l = function(e) {
                var t = e.rowIsOdd;
                return {
                    rowIsOdd: t,
                    type: e.type,
                    atStart: !t,
                    isLast: e.isLast,
                    isFirst: e.isFirst
                }
            };
        return o
    }), define("models/walls/staggered-wall", ["require", "constants", "models/rows/row-builder"], function(e) {
        function t(e, t) {
            return Object.assign({}, e, t)
        }

        function o(e) {
            var o = e.rows,
                a = e.columns,
                l = [],
                c = a / 2 * -n.BLOCK.LENGTH + n.BLOCK.LENGTH,
                u = 0;
            return Array.from({
                length: o
            }).forEach(function(a, d) {
                e.index = d;
                var f = Boolean(d % 2),
                    p = d + 1 === o,
                    h = e.withSupportColumns ? i({
                        rowIsOdd: f,
                        isLast: p
                    }) : s({
                        rowIsOdd: f,
                        isLast: p
                    }),
                    m = t(e, h);
                r.build(m).forEach(function(e) {
                    e.setTransparency(!1), e.position.y += u, e.position.x += c, l.push(e)
                }), u += n.BLOCK.HEIGHT
            }), l
        }
        var n = e("constants"),
            r = new(e("models/rows/row-builder")),
            i = function(e) {
                var t = e.rowIsOdd,
                    o = e.isLast;
                return t ? {
                    type: "full-staggered-columns-row",
                    rowIsOdd: t,
                    isLast: o
                } : {
                    type: "quarter-staggered-with-columns",
                    rowIsOdd: t,
                    isLast: o
                }
            },
            s = function(e) {
                var t = e.rowIsOdd,
                    o = e.isLast;
                return t ? {
                    type: "full-staggered-columns-row",
                    isLast: o
                } : {
                    type: "support-on-start-staggered-row",
                    rowIsOdd: t,
                    isLast: o
                }
            };
        return o
    }), define("models/walls/wall-builder", ["require", "app", "models/walls/running-wall", "models/walls/staggered-wall"], function(e) {
        function t() {
            return this.build = function(e) {
                var t = new n[e.wall](e),
                    r = t.reduce(function(e, t) {
                        var o = void 0,
                            n = void 0,
                            r = t.position.y;
                        return t.findFreePosition(), o = t.position.y, n = o - r, t.position.y = r, e < n ? n : e
                    }, 0);
                return t.forEach(function(e) {
                    e.position.y += r, o.scene.addToScene(e), o.selectedBlocks.add(e), e.isSelected = !0, e.setConnections(o.objects), e.updateMatrix()
                }), Block.turnOnHighLight(t), o.activeBlock = t[0], document.getElementById("block-menu").classList.add("active"), document.activeElement.blur(), t
            }, this
        }
        var o = e("app"),
            n = {
                running: e("models/walls/running-wall"),
                staggered: e("models/walls/staggered-wall")
            };
        return t
    });
var _slicedToArray = function() {
    function e(e, t) {
        var o = [],
            n = !0,
            r = !1,
            i = void 0;
        try {
            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
            r = !0, i = e
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r) throw i
            }
        }
        return o
    }
    return function(t, o) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}();
define("controllers/double_click_controller", ["require", "app", "models/blocks/Block"], function(e) {
    function t(e) {
        "CANVAS" === e.target.tagName && r.activeBlock && (o(r.activeBlock.userData.id), i.turnOnHighLight(r.selectedBlocks), r.audio.play("select_many"))
    }

    function o(e) {
        if (!r.selectedBlocks.includesID(e)) {
            var t = r.objectsMap[e] || r.importedObjectsMap[e];
            r.selectedBlocks.add(t), t.isSelected = !0, t.matrixAutoUpdate = !0, t.connected.forEach(o), r.notSelectedBlocks.forEach(function(e) {
                e.checkIfTouching(t) && o(e.userData.id)
            })
        }
    }

    function n(e) {
        var t = e.target.closest(".element-info");
        if (null !== t && t.hasAttribute("data-params")) {
            var o = t.getAttribute("data-params"),
                n = o.split(" "),
                s = _slicedToArray(n, 2),
                a = s[0],
                l = s[1];
            r.selectedBlocks.reset(), r.objects.forEach(function(e) {
                a === e.name && l === (null !== e.material.map ? e.material.map.sourceFile : ColorHelper.detectColor(e.material.color)) && (r.activeBlock = e, r.selectedBlocks.add(e), r.activeBlock.matrixAutoUpdate = !0, r.activeBlock.isSelected = !0)
            }), i.turnOnHighLight(r.selectedBlocks), r.audio.play("select_many")
        }
    }
    var r = e("app"),
        i = e("models/blocks/Block");
    document.addEventListener("dblclick", t, !0);
    var s = 0;
    document.addEventListener("touchend", function(e) {
        var o = (new Date).getTime(),
            n = o - s;
        clearTimeout(void 0), n < 500 && n > 0 && (t(e), e.preventDefault()), s = o
    }), document.addEventListener("click", n, !0)
}), define("lib/keys_events", ["app"], function() {
    var e = require("app"),
        t = function(e, t) {
            return t.keyCode === e && (t.ctrlKey || t.metaKey)
        },
        o = {
            "CTRL+V": function(e) {
                return t(86, e)
            },
            "CTRL+C": function(e) {
                return t(67, e)
            },
            "CTRL+Z": function(e) {
                return t(90, e)
            },
            "CTRL+Y": function(e) {
                return t(89, e)
            },
            "CTRL+S": function(e) {
                return t(83, e)
            },
            "CTRL+1": function(e) {
                return t(49, e)
            },
            "CTRL+2": function(e) {
                return t(50, e)
            },
            "CTRL+3": function(e) {
                return t(51, e)
            },
            "CTRL+4": function(e) {
                return t(52, e)
            },
            "CTRL+A": function(e) {
                return t(65, e)
            },
            R: function(e) {
                return 82 === e.keyCode && !e.ctrlKey && !e.metaKey
            },
            DELETE: function(e) {
                return 8 === e.keyCode || 46 === e.keyCode
            }
        };
    return function() {
        var t = {};
        this.on = function(e, o) {
            var n = function(e) {
                t[e] || (t[e] = []), t[e].push(o)
            };
            return Array.isArray(e) ? e.forEach(n) : n(e), this
        };
        var n = function(n) {
            Object.getOwnPropertyNames(o).forEach(function(r) {
                o[r](n) && t[r] && t[r].forEach(function(t) {
                    e.sceneIsActive && (n.preventDefault(), t(n))
                })
            })
        };
        return document.addEventListener("keydown", n), this
    }
}), define("controllers/hotkeys_controller", ["require", "lib/keys_events", "constants", "animations/animator", "app", "Store"], function(e) {
    var t = e("lib/keys_events"),
        o = e("constants"),
        n = e("animations/animator"),
        r = e("app"),
        i = e("Store"),
        s = document.getElementById("block-menu");
    (new t).on("CTRL+V", function() {
        return r.scene.pasteBlocks(function() {
            return r.audio.play("place")
        })
    }).on("CTRL+C", function() {
        r.scene.copyBlocks(), s.classList.remove("active")
    }).on("DELETE", function() {
        r.scene.removeCurrentSelectedBlocks(), r.audio.play("delete")
    }).on("R", function() {
        n.rotate.isRunning || (r[r.selectedBlocks.length ? "selectedBlocks" : "activeBlock"].rotate(o.BLOCK.ANGLE, function() {
            return i.save(r.objects)
        }), r.audio.play("rotate"))
    }).on("CTRL+S", function() {
        return r.scene.saveModel()
    }).on("CTRL+A", function() {
        r.scene.selectAllBlocks(), s.classList.add("active"), r.audio.play("select_many")
    })
}), define("controllers/menu_controller", ["require", "renderer", "app", "camera", "Store", "menu", "models/BlockArray", "lib/instructions/index", "constants"], function(e) {
    var t = (e("renderer"), e("app")),
        o = e("camera"),
        n = e("Store"),
        r = e("menu"),
        i = e("models/BlockArray"),
        s = e("lib/instructions/index"),
        a = document.getElementById("instructions-form"),
        l = e("constants");
    document.getElementById("saveModel").addEventListener("click", function() {
        return t.scene.saveModel()
    }), a.querySelector(".close").addEventListener("click", function() {
        a.classList.remove("active"), t.sceneIsActive = !0
    }), a.addEventListener("submit", function(e) {
        var o = t.objects.filter(function(e) {
            return !e.material.transparent
        });
        e.preventDefault(), o.length && new s({
            models: i.from(o)
        }).generate().then(function(o) {
            var n = o.reduce(function(e, t) {
                    return e.concat(t)
                }),
                r = n.reduce(function(e, t, o) {
                    return e["images[" + o + "]"] = dataURLtoBlob(t.src), e
                }, {}),
                i = Object.assign(r, {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    host: location.origin,
                    locale: window.locale
                });
            Ajax.post(l.POST_INSTRUCTIONS, i).then(function() {
                alert("Instructions were successfully sent!")
            }).catch(function(e) {
                console.error(e), alert("Something went wrong")
            }).then(function() {
                a.classList.remove("active"), t.sceneIsActive = !0
            })
        })
    }), document.getElementById("removeGrid").addEventListener("click", function() {
        !0 === t.scene.children[0].visible ? t.scene.children[0].visible = !1 : t.scene.children[0].visible = !0, t.render(), t.audio.play("remove_grid")
    }), document.querySelectorAll("button").forEach(function(e) {
        e.addEventListener("keyup", function(e) {
            32 === e.keyCode && e.preventDefault()
        })
    }), -1 === location.href.indexOf("allow_reload=true") && -1 === location.href.indexOf("0.0.0.0") && (window.onbeforeunload = function(e) {
        return e = e || window.event, e && (e.returnValue = l.LEAVE_MESSAGE), l.LEAVE_MESSAGE
    });
    var c = document.querySelector(".tabs-list"),
        u = c.querySelector(".tabs-buttons");
    u.addEventListener("click", function(e) {
        if (e.target.classList.contains("tab-item")) {
            u.querySelector(".active").classList.remove("active"), e.target.classList.add("active");
            var t = c.querySelector(".tab-content");
            t.querySelector(".active").classList.remove("active"), t.querySelector("." + e.target.getAttribute("data-target")).classList.add("active")
        }
    }), document.querySelector(".tips-container").addEventListener("click", function() {
        this.classList.toggle("active")
    });
    var d, f = document.querySelector(".menu-arrows");
    document.querySelector(".menu-delete__container").addEventListener("click", function(e) {
        "DIV" !== e.target.tagName && (t.scene.removeCurrentSelectedBlocks(), t.audio.play("delete"))
    }), f.addEventListener("mousedown", function(e) {
        if ("DIV" !== e.target.tagName) {
            var n = e.target.getAttribute("data-move");
            "I" === e.target.tagName && (n = e.target.parentNode.getAttribute("data-move"));
            var r = function() {
                if (o.isStop) {
                    var e = o.rotation,
                        r = o.checkPosition(e),
                        i = new THREE.Vector3(0, 0, 0);
                    i.copyPosition(t.activeBlock.position), "UP" === n || "DOWN" === n ? (!t.selectedBlocks.length && !t.activeBlock.anyConnected(n) || t.selectedBlocks.length && !t.selectedBlocks.anyConnected(n)) && t.activeBlock.moveBlock(n, r) : t.activeBlock.moveBlock(n, r), t.audio.play("move"), t.scene.validateMove(i), t.countMove = 0, o.checkIntersectsObject(t.activeBlock) || o.doMove(n, r)
                }
            };
            r(), d = setInterval(r, l.BLOCK.MOVE_DELAY)
        }
    }), f.addEventListener("mouseup", function(e) {
        "DIV" !== e.target.tagName && clearInterval(d)
    }), f.addEventListener("mousemove", function(e) {
        "DIV" !== e.target.tagName && clearInterval(d)
    }), document.querySelector(".btn-rotate").addEventListener("click", function() {
        t.selectedBlocks.length ? t.selectedBlocks.rotate(l.BLOCK.ANGLE) : t.activeBlock.rotate(l.BLOCK.ANGLE), t.audio.play("rotate"), n.save(t.objects)
    }), document.querySelector(".js-colors-palette").addEventListener("click", function(e) {
        if (e.target.classList.contains("color-item")) {
            var o = e.target.getAttribute("data-color"),
                i = "";
            switch (o) {
                case "TRANSLUCENT":
                case "SILVER":
                case "GOLD":
                    i = o;
                    break;
                default:
                    i = l.BLOCK.COLOR[o]
            }
            t[t.selectedBlocks.length ? "selectedBlocks" : "activeBlock"].changeColor(i), t.audio.play("color"), r.showElements(), n.save(t.objects)
        }
    })
}), define("controllers/scene_controller", ["require", "app", "camera", "renderer"], function(e) {
    function t() {
        n.updateRatio({
            width: window.innerWidth,
            height: window.innerHeight
        }), o.needsUpdate = !0
    }
    var o = e("app"),
        n = (e("camera"), e("renderer"));
    window.addEventListener("resize", t, !1)
}), define("components/wall_type_preview", [], function() {
    function e(e, t, n) {
        var r = localization.wall_builder[o[e]],
            i = ArrayHelper.compact([localization.wall_builder.shorten[o[t]], localization.wall_builder.shorten[o[n]]]);
        return i.length > 1 ? (r += " " + localization.with + " " + i[0], r += " " + localization.and + " " + i[1] + " " + localization.on_both_sides) : i.length && (r += t ? " " + localization.with + " " + i[0] : " " + localization.with + " " + i[0] + " " + localization.on_both_sides), r
    }
    var t = function(e, t, o) {
            return "/images/previews/" + e + "/" + ArrayHelper.compact([e, t, o]).join("_") + ".png"
        },
        o = {
            insideT: "first_column",
            insideL: "third_column",
            insideStrongL: "second_column",
            smallL: "small_l",
            smallT: "small_t",
            largeL: "large_l",
            largeT: "large_t",
            column: "column",
            heavyDutyColumn: "heavy_duty_column",
            "running-wall": "standard_wall",
            "wall-with-openings": "wall_with_openings"
        },
        n = document.querySelector(".wall-preview");
    return {
        show: function(o, r, i) {
            var s = n.classList.contains("active"),
                a = new Image;
            a.src = t(o, r, i), n.classList.remove("active"), setTimeout(function() {
                n.querySelector("img").src = a.src, n.querySelector(".preview-wall-type").innerHTML = e(o, r, i), s && n.classList.add("active")
            }, 500)
        },
        toggle: function() {
            n.classList.toggle("active")
        }
    }
}), define("controllers/wall_builder_controller", ["require", "app", "menu", "constants", "Store", "components/wall_type_preview", "models/walls/wall-builder"], function(e) {
    function t() {
        var e = h.querySelector(".js-length-feet"),
            t = h.querySelector(".js-length-inches");
        "wall-with-openings" === d ? (e.classList.remove("form-input-half"), e.classList.add("form-input"), t.classList.add("hidden")) : (e.classList.add("form-input-half"), e.classList.remove("form-input"), t.classList.remove("hidden"))
    }

    function o(e) {
        var t = e.querySelector(".add-support-form").classList.contains("active"),
            o = function(e) {
                return e ? Number(e.value) : null
            };
        return {
            supportsIsActive: t,
            length: {
                inches: o(e["length-inches"]),
                feet: o(e["length-ft"]),
                centimeters: o(e["length-cm"])
            },
            height: {
                inches: o(e["height-inches"]),
                feet: o(e["height-ft"]),
                centimeters: o(e["height-cm"])
            },
            spaceBetween: Number(e.spaceBetween.value),
            withOpenings: "wall-with-openings" === e["wall-type"].value,
            columnSupportIsActive: e["add-column"].checked,
            bothSides: !!t && e.querySelector(".bothSides").checked
        }
    }

    function n(e) {
        var t = o(e),
            n = t.supportsIsActive ? e.supportType.value : void 0,
            r = t.columnSupportIsActive ? e.columnType.value : void 0,
            i = void 0,
            a = void 0,
            l = void 0;
        return localization.is_metric ? (i = t.length.centimeters, a = t.height.centimeters, i = Math.round(i * s.FEET_IN_CENTIMETER), a = Math.round(2 * a * s.FEET_IN_CENTIMETER)) : (l = t.length.inches ? 6 === t.length.inches ? .5 : .25 : 0, i = t.length.feet + l, a = 2 * t.height.feet + (t.height.inches ? 1 : 0), "column" !== n && "heavyDutyColumn" !== n || (t.bothSides ? i -= 1 : i -= .5)), {
            rows: a,
            columns: i,
            wall: t.withOpenings ? "staggered" : "running",
            withSupportColumns: t.columnSupportIsActive,
            supportColumnType: r,
            supportType: n,
            spaceBetween: t.spaceBetween,
            bothSides: t.bothSides
        }
    }
    var r = e("app"),
        i = e("menu"),
        s = e("constants"),
        a = document.getElementById("wall-generator"),
        l = e("Store"),
        c = e("components/wall_type_preview"),
        u = new(e("models/walls/wall-builder")),
        d = "running-wall",
        f = null,
        p = null,
        h = document.querySelector(".builder-form");
    h.addEventListener("keyup", function(e) {
        if (["checkbox", "submit", null].indexOf(e.target.getAttribute("type")) > -1) return !1;
        var t = e.target,
            o = t.dataset.measure;
        i.validateWallBuilder(t.value, o).status ? t.classList.remove("error") : t.classList.add("error")
    }), h.querySelector(".close").addEventListener("click", function(e) {
        e.preventDefault(), document.getElementById("wall-generator").classList.remove("active"), r.sceneIsActive = !0, document.activeElement.blur()
    }), h.querySelector(".column-type-select").addEventListener("change", function() {
        f = this.value, c.show(d, f, p)
    }), h.querySelector(".wall-type-select").addEventListener("change", function() {
        d = this.value, h.querySelector(".js-length-inches .material-value-output").innerHTML = "0", h.querySelector('[name="length-inches"]').value = "0", t(), c.show(d, f, p)
    }), h.querySelector(".preview").addEventListener("click", function() {
        c.toggle()
    }), h.addEventListener("submit", function(e) {
        if (a.classList.contains("active")) {
            e.preventDefault();
            var t = n(this);
            this.querySelectorAll('[data-measure="feets"], [data-measure="centimeters_height"], [data-measure="centimeters_length"]').forEach(function(e) {
                e.value || e.classList.add("error")
            });
            var o = this.querySelector(".error");
            if (o) return o.focus();
            1 === r.objects.length && r.scene.clear(), r.activeBlock && (r.activeBlock.toggleHighLight(), r.activeBlock = null), r.selectedBlocks.reset(), u.build(t), a.classList.remove("active"), r.sceneIsActive = !0, r.audio.play("add_wall_library"), l.save(r.objects)
        }
    });
    var m = h.querySelector('[name="height-ft"]');
    m && m.addEventListener("keyup", function() {
        var e = this.value > s.WALL_FORM.MIN_HEIGHT_NEEDS_SUPPORT ? "add" : "remove";
        h.querySelector(".add-support-msg").classList[e]("active")
    }), h.querySelector(".support-braces-type-select").addEventListener("change", function() {
        p = this.value, c.show(d, f, p)
    }), h.querySelector(".add-support-btn").addEventListener("change", function() {
        p = this.checked ? h.querySelector(".support-braces-type-select").value : null, c.show(d, f, p), h.querySelector(this.getAttribute("target")).classList.toggle("active")
    }), h.querySelector(".add-columns").addEventListener("change", function() {
        f = this.checked ? h.querySelector(".column-type-select").value : null, c.show(d, f, p), h.querySelector(this.getAttribute("target")).classList.toggle("active"), this.checked
    })
}), define("controllers/application_controller", ["require", "./double_click_controller", "./hotkeys_controller", "./menu_controller", "./scene_controller", "./wall_builder_controller", "app"], function(e) {
    e("./double_click_controller"), e("./hotkeys_controller"), e("./menu_controller"), e("./scene_controller"), e("./wall_builder_controller");
    var t = e("app"),
        o = document.querySelector(".sound-on");
    document.querySelectorAll(".js-help-window").forEach(function(e) {
        e.addEventListener("click", function() {
            document.getElementById(this.getAttribute("data-target")).classList.add("active"), t.sceneIsActive = !1
        })
    }), document.querySelectorAll(".overlay").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.target === this && (this.classList.remove("active"), t.sceneIsActive = !0)
        })
    }), o.addEventListener("click", function(e) {
        e.preventDefault(), t.audio.isAvailable = !t.audio.isAvailable, t.settings.save({
            isAudioOn: t.audio.isAvailable
        }), o.clasdsList.toggle("active")
    }), t.settings.isAudioOn && o.classList.add("active"), t.audio.isAvailable = t.settings.isAudioOn
}), define("tasks/update_all_models", ["require", "app", "renderer", "models/blocks/BlocksBuilder"], function(e) {
    var t = e("app"),
        o = e("renderer"),
        n = e("models/blocks/BlocksBuilder");
    window.BROKEN = [], window.UPDATE_ALL_MODELS = function() {
        var e, r = 0;
        t.scene.children[0].visible = !1;
        ! function i() {
            return Ajax.get("https://build.everblocksystems.com/api/library_models?limit=3&offset=" + r + "&keywords=Tables%2C%20Desks%2520and%2520Sales%2520Counters%2C%20Seating%2C%20Bars%2C%20Shelving%2520%2526%2520Display%2520Units%2C%20Beds%2520and%2520Headboards%2C%20Plinths%2520and%2520Columns%2C%20Props%2520%2526%2520Characters%2C%20Exhibit%2520Booths").then(function(s) {
                r += 3;
                var a = 0,
                    l = JSON.parse(s.response).models;
                Promise.all(l.map(function(r) {
                    if (!(10 === (a += 1) || a > 91 && a < 111 || a > 146 && a < 150 || a > 166)) return t.scene.clear(), n.serialize(r.data).forEach(function(e) {
                        t.scene.addToScene(e), "full" === e.name && 11198433 === e.userData.texture && e.changeColor(11450299), "half" === e.name && 16555854 === e.userData.texture && e.changeColor(867488), "cap" === e.name && 1474360 === e.userData.texture && e.changeColor(3355443)
                    }), e = dataURLtoBlob(o.getImage()), Ajax.put("https://build.everblocksystems.com/api/library/" + r.slug, {
                        data: n.toJSON(t.objects)
                    }).catch(function(e) {
                        window.BROKEN.push(r.slug), console.error(e)
                    })
                })).then(function() {
                    l.length < 3 || i()
                })
            }).catch(function(e) {
                console.error(e), i()
            })
        }()
    }
}), "function" != typeof Object.assign && (Object.assign = function(e, t) {
    "use strict";
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    for (var o = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (null != r)
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
    }
    return o
}), define("utils/polyfill", function() {}), define("utils/model_data", ["require", "constants"], function(e) {
    var t = e("constants"),
        o = document.URL.split("?id=")[1];
    if (o) {
        var n = t.GET_MODEL + o,
            r = new XMLHttpRequest;
        r.open("GET", n), r.send(), r.onreadystatechange = function() {
            if (4 == r.readyState)
                if (200 != r.status) console.log(r.status + ":" + r.statusText);
                else {
                    var e = JSON.parse(r.responseText),
                        t = e.model_name,
                        o = e.order_name;
                    document.getElementById("modelDataName").innerHTML = t, document.getElementById("modelDataDesigner").innerHTML = o, document.querySelector(".model-details").style.display = "block"
                }
        }
    }
});
var USA_LOCALE = "en";
if (locale !== USA_LOCALE) {
    var elements = [];
    elements.push(document.querySelector(".line")), elements.push(document.querySelector(".single")), elements.push(document.querySelector(".quarter_cap")), elements.forEach(function(e) {
        e.parentNode.removeChild(e)
    })
}
if (define("utils/only_main_builder", function() {}), document.body.addEventListener("localization-loaded", function() {
        document.body.classList.remove("localization-loaded"), require(["scene", "app", "models/blocks/BlocksBuilder", "models/ValidationWorker", "models/Human", "models/Ground", "Controls", "models/BlockArray", "animations/animator", "components/popup", "components/material/material_components", "helpers/index", "components/library", "components/save-as", "models/walls/wall-builder", "controllers/application_controller", "tasks/update_all_models", "lib/blocks/check-on-same-height", "./utils/polyfill", "./utils/model_data", "./utils/only_main_builder", "lib/instructions/index"], function(e, t, o, n, r, i, s, a, l, c) {
            function u(e) {
                if (!l.land.isRunning) {
                    if (A = e, t.activeBlock && (t.activeBlock.toggleHighLight(), t.activeBlock.matrixAutoUpdate = !1), t.selectedBlocks.reset(), t.lastBlockPosition) {
                        var o = t.lastBlockPosition.y;
                        A.position.set(t.lastBlockPosition.x, o, t.lastBlockPosition.z), A.normalizePosition("x", G.GRID.CELL_WIDTH), A.normalizePosition("z", G.GRID.CELL_WIDTH)
                    }
                    A.normalizePosition("y", G.BLOCK.HEIGHT), A.findFreePosition(), t.scene.addToScene(A), t.activeBlock = A, document.getElementById("block-menu").classList.add("active"), l.land({
                        value: A.position.y,
                        model: A,
                        done: function() {
                            t.audio.play("place"), t.activeBlock.toggleHighLight(), t.needsBlockValidation = !0, t.lastBlockPosition = t.activeBlock.position.clone(), t.lastBlockPosition.y = t.activeBlock.getPositionY(), q.save(t.objects)
                        }
                    })
                }
            }

            function d() {
                R = new THREE.Mesh(new THREE.PlaneBufferGeometry(G.GRID.WIDTH * G.GRID.WIDTH, G.GRID.WIDTH * G.GRID.WIDTH, 8, 8)), R.visible = !1, t.scene.add(R)
            }

            function f() {
                u(o.build({
                    color: G.BLOCK.COLOR.BLACK,
                    type: "full"
                })), d()
            }

            function p(e) {
                var n = "undo" === e ? q.undo() : q.redo();
                t.scene.clear(), document.getElementById("block-menu").classList.remove("active"), t.activeBlock = null, t.objects.length = 0, t.selectedBlocks.reset(), n.forEach(function(e) {
                    var n = o.build({
                        color: e.material.color.getHex(),
                        type: e.name
                    });
                    n.position.copy(e.position), n.rotation.y = e.rotation.y, n.changeColor(e.userData.texture), t.scene.addToScene(n)
                }), t.needsUpdate = !0, t.audio.play("undo")
            }

            function h() {
                return document.body.classList.toggle("page-loaded"), t.modelName = document.getElementById("i-modelname").value, Ajax.post(G.POST_MODEL, {
                    data: o.toJSON(t.objects.filter(function(e) {
                        return 1 === e.material.opacity
                    })),
                    host: location.origin,
                    locale: t.language,
                    model_name: t.modelName,
                    image: dataURLtoBlob(M.getImage())
                })
            }

            function m() {
                var e = QueryParams.parse(location.search),
                    n = e.id,
                    r = e.import_id;
                if (!n && !r) return f(), document.body.classList.add("page-loaded");
                Ajax.get(G.GET_MODEL + (n || r)).then(function(e) {
                    var n = JSON.parse(e.response),
                        i = o.serialize(n.data);
                    if (r) try {
                        window.libraryMode = !1, history.replaceState("", "Bloc Designer", location.pathname)
                    } catch (e) {
                        console.error(e)
                    } else t.order_id = n.order_id, t.modelName = n.model_name;
                    var s = i.some(function(e) {
                        return e.connected.length
                    });
                    i.forEach(function(e) {
                        return t.scene.addToScene(e, {
                            setConnections: !1
                        })
                    }), s || i.forEach(function(e) {
                        return e.setConnections(t.objects)
                    }), t.needsUpdate = !0, q.save(t.objects), z.x = null, document.body.classList.add("page-loaded")
                }).catch(function(e) {
                    console.error(e);
                    try {
                        history.replaceState("", "Bloc Designer", location.pathname)
                    } catch (e) {
                        console.error(e)
                    }
                    alert(404 === e.status ? localization.no_such_model : localization.temporarily_unavailable), f(), document.body.classList.add("page-loaded")
                }), j.dollyOut(G.CAMERA.LOADZOOM), j.update(), d()
            }

            function y() {
                document.querySelector(".section-undo-redo").addEventListener("click", function(e) {
                    "BUTTON" === e.target.tagName && p(e.target.getAttribute("data-action"))
                }), document.addEventListener("mousedown", w, !0), M.domElement.addEventListener("mouseup", k, !1), M.domElement.addEventListener("mousemove", v, !1), document.getElementById("addHuman").addEventListener("click", function() {
                    r.toggle(), t.needsUpdate = !0, t.audio.play("human")
                }), document.addEventListener("keydown", g), c.onLinkShow(h), document.querySelector(".tab-content").addEventListener("click", function(e) {
                    if ("BUTTON" == e.target.tagName) {
                        var t = parseInt(e.target.getAttribute("data-color")),
                            n = e.target.getAttribute("data-type");
                        u(o.build({
                            color: t,
                            type: n
                        }))
                    }
                });
                var e = document.querySelector(".widget-zoom");
                e.addEventListener("mousedown", function(e) {
                    if ("DIV" !== e.target.tagName) {
                        var t = e.target.getAttribute("data-zoom");
                        "I" === e.target.tagName && (t = e.target.parentNode.getAttribute("data-zoom"));
                        var o = function() {
                            "true" === t ? j.dollyIn(G.CAMERA.ZOOM_STEP) : j.dollyOut(G.CAMERA.ZOOM_STEP), j.update()
                        };
                        o(), S = setInterval(o, 50)
                    }
                });
                var n = document.querySelector(".scene-move");
                n.addEventListener("mousedown", function(e) {
                    if ("DIV" !== e.target.tagName) {
                        var t = e.target.getAttribute("data-move");
                        "I" === e.target.tagName && (t = e.target.parentNode.getAttribute("data-move")), x = setInterval(function() {
                            "true" === t ? j.pan(j.keyPanSpeed, 0) : j.pan(-j.keyPanSpeed, 0), j.update()
                        }, 50)
                    }
                }), document.querySelector(".builder-rotator").addEventListener("mousedown", function(e) {
                    if ("DIV" !== e.target.tagName) {
                        var t = e.target.getAttribute("data-rotate");
                        switch (j.reset(), t) {
                            case "LEFT":
                                j.animateLeft(2 * G.GRID.ANGLE), document.querySelector(".rotate .builder-rotator img").style.transform = "rotate(135deg)";
                                break;
                            case "TOP":
                                j.animateLeft(G.GRID.ANGLE), document.querySelector(".rotate .builder-rotator img").style.transform = "rotate(225deg)";
                                break;
                            case "RIGHT":
                                j.animateLeft(0), document.querySelector(".rotate .builder-rotator img").style.transform = "rotate(315deg)";
                                break;
                            case "DOWN":
                                j.animateLeft(-G.GRID.ANGLE), document.querySelector(".rotate .builder-rotator img").style.transform = "rotate(45deg)"
                        }
                    }
                }), n.addEventListener("mouseup", function(e) {
                    "DIV" !== e.target.tagName && clearInterval(x)
                }), e.addEventListener("mouseup", function(e) {
                    "DIV" !== e.target.tagName && (e.target.getAttribute("data-zoom"), "I" === e.target.tagName && e.target.parentNode.getAttribute("data-zoom"), clearInterval(S))
                }), n.addEventListener("mousemove", function(e) {
                    "DIV" !== e.target.tagName && clearInterval(x)
                }), e.addEventListener("mousemove", function(e) {
                    "DIV" !== e.target.tagName && (e.target.getAttribute("data-zoom"), "I" === e.target.tagName && e.target.parentNode.getAttribute("data-zoom"), clearInterval(S))
                })
            }

            function O() {
                var e = new THREE.DirectionalLight(G.LIGHT.COLOR);
                e.position.x = G.LIGHT.X, e.position.y = G.LIGHT.Y, e.position.z = G.LIGHT.Z, t.scene.add(e);
                var o = new THREE.HemisphereLight(G.LIGHT.COLOR, G.LIGHT.COLOR, .5);
                o.position.x = G.LIGHT.X, o.position.y = G.LIGHT.Y, o.position.z = G.LIGHT.Z, t.scene.add(o)
            }

            function L() {
                r.isActive && r.validate(), t.needsBlockValidation && (t.needsBlockValidation = !1, F.sendBlocks(t.objects)), requestAnimationFrame(L), t.sceneIsActive && t.needsUpdate && (M.render(e, D), t.needsUpdate = !1)
            }

            function v(e) {
                e.preventDefault(), z.x = e.clientX / window.innerWidth * 2 - 1, z.y = -e.clientY / window.innerHeight * 2 + 1;
                var o = new THREE.Raycaster;
                if (o.setFromCamera(z, D), I) {
                    if (Date.now() - W < 200) return;
                    var n = o.intersectObject(R);
                    if (n.length) {
                        var r = new THREE.Vector3(0, 0, 0).copyPosition(t.activeBlock.position);
                        t.activeBlock.changePosition(n, U), t.scene.validateMove(r)
                    }
                } else n = o.intersectObjects(t.objects), n.length > 0 ? (H != n[0].object && (t.needsUpdate = !0, H = n[0].object, R.position.copy(H.position), R.lookAt(D.position)), K.style.cursor = "pointer") : (H = null, K.style.cursor = "auto")
            }

            function b() {
                clearInterval(Y), Y = null
            }

            function E(e) {
                if (!e.metaKey && !Y) {
                    var o = G.KEY_NAMES[e.keyCode];
                    if (-1 !== G.MOVE_KEY_CODES.indexOf(e.keyCode)) {
                        var n = function() {
                            var e = new THREE.Vector3(0, 0, 0),
                                n = D.rotation,
                                r = D.checkPosition(n);
                            e.copyPosition(t.activeBlock.position), N = 0, j.noPan = !0, t.selectedBlocks.length && t.selectedBlocks.anyConnected(o) || t.activeBlock.anyConnected(o) && !t.selectedBlocks.length || (t.activeBlock.moveBlock(o, r), t.audio.play("move"), D.checkIntersectsObject(t.activeBlock) || D.doMove(o, r), t.scene.validateMove(e))
                        };
                        n(), Y = setInterval(n, G.BLOCK.MOVE_DELAY), document.removeEventListener("keyup", b),
                            document.addEventListener("keyup", b)
                    }
                }
            }

            function g(e) {
                t.sceneIsActive && t.activeBlock && D.isStop && !e.ctrlKey && !e.metaKey && (P && clearTimeout(P), E(e), -1 !== G.MOVE_KEY_CODES.indexOf(e.keyCode) && (P = setTimeout(function() {
                    q.save(t.objects)
                }, 1e3)))
            }

            function C() {
                t.activeBlock && t.activeBlock !== I && !t.activeBlock.isSelected && (t.activeBlock.matrixAutoUpdate = !1, t.activeBlock.toggleHighLight()), I.isSelected || t.selectedBlocks.reset()
            }

            function _() {
                t.activeBlock && (t.activeBlock.isSelected = !0, t.selectedBlocks.add(t.activeBlock)), I.isSelected ? (t.selectedBlocks.remove(I), I = t.selectedBlocks[0]) : (I.isSelected = !0, t.selectedBlocks.add(I), I.toggleHighLight())
            }

            function T(e) {
                var o = e.intersects,
                    n = e.raycaster,
                    r = e.isCmdKey,
                    i = n.intersectObject(R);
                j.enabled = !1, I = o[0].object, r ? _() : C(), t.activeBlock = I, t.activeBlock.matrixAutoUpdate = !0, W = Date.now(), t.activeBlock.highLightMesh || t.activeBlock.toggleHighLight(), document.getElementById("block-menu").classList.add("active"), U.copy(i[0].point).sub(R.position), K.style.cursor = "move", t.audio.play("select")
            }

            function B(e) {
                if (!e.isCmdKey) {
                    if (t.activeBlock && t.activeBlock.highLightMesh) {
                        var o = t.activeBlock;
                        t.activeBlock.toggleHighLight(function() {
                            o.matrixAutoUpdate = !1, o.updateMatrix(), t.needsBlockValidation = !0
                        })
                    }
                    I = null, t.activeBlock = null, t.selectedBlocks.reset(), document.getElementById("block-menu").classList.remove("active")
                }
            }

            function w(e) {
                if ("CANVAS" === e.target.tagName && null !== z.x) {
                    var o = e.ctrlKey || e.metaKey,
                        n = new THREE.Vector3(z.x, z.y, .5).unproject(D),
                        r = new THREE.Raycaster(D.position, n.sub(D.position).normalize()),
                        i = r.intersectObjects(t.objects);
                    A = null, e.preventDefault(), t.needsUpdate = !0, i.length > 0 ? T({
                        intersects: i,
                        raycaster: r,
                        isCmdKey: o
                    }) : B({
                        isCmdKey: o
                    })
                }
            }

            function k(e) {
                t.sceneIsActive && (e.preventDefault(), j.enabled = !0, H && (t.isPositionChanged && (q.save(t.objects), t.isPositionChanged = !1), R.position.copy(H.position), I = null), j.noPan = !1, K.style.cursor = "auto")
            }
            var R, H, I, A, S, x, P, K, N = 0,
                G = require("constants"),
                D = require("camera"),
                M = (require("menu"), require("renderer")),
                j = new s(D, M.domElement),
                q = require("Store"),
                F = new n,
                U = new THREE.Vector3,
                z = new THREE.Vector2;
            t.scene = e, t.render = function() {
                    M.render(t.scene, D)
                },
                function() {
                    t.selectedBlocks = new a, r = new r, i(G.GRID.WIDTH, G.GRID.COLOR), K = document.createElement("div"), K.appendChild(M.domElement), document.body.appendChild(K), r.toggle(), t.controls = j, O(), y(), t.IsReadyPromise.then(function() {
                        m(), L()
                    })
                }(), F.onmessage = function(e) {
                    var o = e.data;
                    t.objects.forEach(function(e) {
                        var t = -1 === o.indexOf(e.userData.id) && e.children.every(function(e) {
                            return !(e instanceof Block) || e.connected.length
                        });
                        e.setTransparency(!t)
                    }), t.needsUpdate = !0
                };
            var W, Y
        })
    }), document.body.classList.contains("localization-loaded")) {
    var event = document.createEvent("Event");
    event.initEvent("localization-loaded", !0, !1), document.body.dispatchEvent(event)
}
define("main", function() {});
