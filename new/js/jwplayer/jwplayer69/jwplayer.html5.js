(function (g) {
    g.html5 = {};
    g.html5.version = "6.9.4867";
    g = g.utils.css;
    g(".jwplayer ".slice(0, -1) + " div span a img ul li video".split(" ").join(", .jwplayer ") + ", .jwclick", {
        margin: 0,
        padding: 0,
        border: 0,
        color: "#000000",
        "font-size": "100%",
        font: "inherit",
        "vertical-align": "baseline",
        "background-color": "transparent",
        "text-align": "left",
        direction: "ltr",
        "-webkit-tap-highlight-color": "rgba(255, 255, 255, 0)"
    });
    g(".jwplayer ul", {"list-style": "none"})
})(jwplayer);
(function (g) {
    var l = document;
    g.parseDimension = function (c) {
        return "string" == typeof c ? "" === c ? 0 : -1 < c.lastIndexOf("%") ? c : parseInt(c.replace("px", ""), 10) : c
    };
    g.timeFormat = function (c) {
        if (0 < c) {
            var a = Math.floor(c / 3600), d = Math.floor((c - 3600 * a) / 60);
            c = Math.floor(c % 60);
            return (a ? a + ":" : "") + (10 > d ? "0" : "") + d + ":" + (10 > c ? "0" : "") + c
        }
        return "00:00"
    };
    g.bounds = function (c) {
        var a = {left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0};
        if (!c || !l.body.contains(c))return a;
        if (c.getBoundingClientRect) {
            c = c.getBoundingClientRect(c);
            var d = window.pageYOffset,
                k = window.pageXOffset;
            if (!c.width && !c.height && !c.left && !c.top)return a;
            a.left = c.left + k;
            a.right = c.right + k;
            a.top = c.top + d;
            a.bottom = c.bottom + d;
            a.width = c.right - c.left;
            a.height = c.bottom - c.top
        } else {
            a.width = c.offsetWidth | 0;
            a.height = c.offsetHeight | 0;
            do a.left += c.offsetLeft | 0, a.top += c.offsetTop | 0; while (c = c.offsetParent);
            a.right = a.left + a.width;
            a.bottom = a.top + a.height
        }
        return a
    };
    g.empty = function (c) {
        if (c)for (; 0 < c.childElementCount;)c.removeChild(c.children[0])
    }
})(jwplayer.utils);
(function (g) {
    var l = g.stretching = {NONE: "none", FILL: "fill", UNIFORM: "uniform", EXACTFIT: "exactfit"};
    g.scale = function (c, a, d, k, b) {
        var e = "";
        a = a || 1;
        d = d || 1;
        k |= 0;
        b |= 0;
        if (1 !== a || 1 !== d)e = "scale(" + a + ", " + d + ")";
        if (k || b)e = "translate(" + k + "px, " + b + "px)";
        g.transform(c, e)
    };
    g.stretch = function (c, a, d, k, b, e) {
        if (!a || !d || !k || !b || !e)return !1;
        c = c || l.UNIFORM;
        var f = 2 * Math.ceil(d / 2) / b, C = 2 * Math.ceil(k / 2) / e, p = "video" === a.tagName.toLowerCase(), q = !1, v = "jw" + c.toLowerCase();
        switch (c.toLowerCase()) {
            case l.FILL:
                f > C ? C = f : f = C;
                q = !0;
                break;
            case l.NONE:
                f = C = 1;
            case l.EXACTFIT:
                q = !0;
                break;
            default:
                f > C ? 0.95 < b * C / d ? (q = !0, v = "jwexactfit") : (b *= C, e *= C) : 0.95 < e * f / k ? (q = !0, v = "jwexactfit") : (b *= f, e *= f), q && (f = 2 * Math.ceil(d / 2) / b, C = 2 * Math.ceil(k / 2) / e)
        }
        p ? (c = {
            left: "",
            right: "",
            width: "",
            height: ""
        }, q ? (d < b && (c.left = c.right = Math.ceil((d - b) / 2)), k < e && (c.top = c.bottom = Math.ceil((k - e) / 2)), c.width = b, c.height = e, g.scale(a, f, C, 0, 0)) : (q = !1, g.transform(a)), g.css.style(a, c)) : a.className = a.className.replace(/\s*jw(none|exactfit|uniform|fill)/g, "") + " " + v;
        return q
    }
})(jwplayer.utils);
(function (g) {
    g.dfxp = function () {
        var l = jwplayer.utils.seconds;
        this.parse = function (c) {
            var a = [{begin: 0, text: ""}];
            c = c.replace(/^\s+/, "").replace(/\s+$/, "");
            var d = c.split("\x3c/p\x3e"), k = c.split("\x3c/tt:p\x3e"), b = [];
            for (c = 0; c < d.length; c++)0 <= d[c].indexOf("\x3cp") && (d[c] = d[c].substr(d[c].indexOf("\x3cp") + 2).replace(/^\s+/, "").replace(/\s+$/, ""), b.push(d[c]));
            for (c = 0; c < k.length; c++)0 <= k[c].indexOf("\x3ctt:p") && (k[c] = k[c].substr(k[c].indexOf("\x3ctt:p") + 5).replace(/^\s+/, "").replace(/\s+$/, ""), b.push(k[c]));
            d = b;
            for (c = 0; c < d.length; c++) {
                k = d[c];
                b = {};
                try {
                    var e = k.indexOf('begin\x3d"'), k = k.substr(e + 7), e = k.indexOf('" end\x3d"');
                    b.begin = l(k.substr(0, e));
                    k = k.substr(e + 7);
                    e = k.indexOf('"');
                    b.end = l(k.substr(0, e));
                    e = k.indexOf('"\x3e');
                    k = k.substr(e + 2);
                    b.text = k
                } catch (f) {
                }
                k = b;
                k.text && (a.push(k), k.end && (a.push({begin: k.end, text: ""}), delete k.end))
            }
            if (1 < a.length)return a;
            throw{message: "Invalid DFXP file:"};
        }
    }
})(jwplayer.parsers);
(function (g) {
    g.srt = function () {
        var l = jwplayer.utils, c = l.seconds;
        this.parse = function (a, d) {
            var k = d ? [] : [{begin: 0, text: ""}];
            a = l.trim(a);
            var b = a.split("\r\n\r\n");
            1 == b.length && (b = a.split("\n\n"));
            for (var e = 0; e < b.length; e++)if ("WEBVTT" != b[e]) {
                var f, g = b[e];
                f = {};
                var p = g.split("\r\n");
                1 == p.length && (p = g.split("\n"));
                try {
                    g = 1;
                    0 < p[0].indexOf(" --\x3e ") && (g = 0);
                    var q = p[g].indexOf(" --\x3e ");
                    0 < q && (f.begin = c(p[g].substr(0, q)), f.end = c(p[g].substr(q + 5)));
                    if (p[g + 1]) {
                        f.text = p[g + 1];
                        for (g += 2; g < p.length; g++)f.text += "\x3cbr/\x3e" +
                            p[g]
                    }
                } catch (v) {
                }
                f.text && (k.push(f), f.end && !d && (k.push({begin: f.end, text: ""}), delete f.end))
            }
            if (1 < k.length)return k;
            throw{message: "Invalid SRT file"};
        }
    }
})(jwplayer.parsers);
(function (g) {
    var l = g.utils, c = g.events, a = c.state, d = !0, k = !1;
    g.html5.video = function (b, e) {
        function f(b, a) {
            O && R.sendEvent(b, a)
        }

        function g() {
        }

        function p(e) {
            t(e);
            O && (W == a.PLAYING && !J) && (A = (10 * b.currentTime | 0) / 10, x = d, f(c.JWPLAYER_MEDIA_TIME, {
                position: A,
                duration: u
            }))
        }

        function q() {
            f(c.JWPLAYER_MEDIA_META, {duration: b.duration, height: b.videoHeight, width: b.videoWidth})
        }

        function v(a) {
            O && (x || (x = d, h()), "loadedmetadata" == a.type && (b.muted && (b.muted = k, b.muted = d), q()))
        }

        function t() {
            x && (0 < H && !$) && (y ? setTimeout(function () {
                0 <
                H && wa(H)
            }, 200) : wa(H))
        }

        function h() {
            z || (z = d, f(c.JWPLAYER_MEDIA_BUFFER_FULL))
        }

        function m(c) {
            O && !J && (b.paused ? b.currentTime == b.duration && 3 < b.duration || Ba() : (!l.isFF() || !("play" == c.type && W == a.BUFFERING)) && F(a.PLAYING))
        }

        function D() {
            O && (J || F(a.BUFFERING))
        }

        function w(b) {
            var a;
            if ("array" == l.typeOf(b) && 0 < b.length) {
                a = [];
                for (var c = 0; c < b.length; c++) {
                    var d = b[c], f = {};
                    f.label = d.label && d.label ? d.label ? d.label : 0 : c;
                    a[c] = f
                }
            }
            return a
        }

        function n(c, d) {
            K = T[X];
            F(a.BUFFERING);
            S = setInterval(r, 100);
            H = 0;
            b.src !== K.file || s ||
            I ? (z = x = k, u = d ? d : -1, b.src = K.file, b.load()) : (0 === c && (H = -1, wa(c)), q(), b.play());
            A = b.currentTime;
            s && h();
            l.isIOS() && R.getFullScreen() && (b.controls = !0);
            0 < c && wa(c)
        }

        function F(b) {
            if (!(b == a.PAUSED && W == a.IDLE) && !J && W != b) {
                var d = W;
                W = b;
                f(c.JWPLAYER_PLAYER_STATE, {oldstate: d, newstate: b})
            }
        }

        function r() {
            if (O) {
                var a;
                a = !b.duration || 0 === b.buffered.length ? 0 : b.buffered.end(b.buffered.length - 1) / b.duration;
                a != Y && (Y = a, f(c.JWPLAYER_MEDIA_BUFFER, {bufferPercent: Math.round(100 * Y)}));
                1 <= a && clearInterval(S)
            }
        }

        function j(b) {
            f("fullscreenchange",
                {target: b.target, jwstate: ma})
        }

        e = e || "";
        var y = l.isMSIE(), s = l.isMobile(), I = l.isSafari(), L = {
                abort: g,
                canplay: v,
                canplaythrough: g,
                durationchange: function () {
                    if (O) {
                        var a = (10 * b.duration | 0) / 10;
                        u != a && (u = a);
                        $ && (0 < H && a > H) && wa(H);
                        p()
                    }
                },
                emptied: g,
                ended: function () {
                    O && W != a.IDLE && (X = -1, Ca = d, f(c.JWPLAYER_MEDIA_BEFORECOMPLETE), O && (F(a.IDLE), Ca = k, f(c.JWPLAYER_MEDIA_COMPLETE)))
                },
                error: function () {
                    O && (l.log("Error playing media: %o", b.error), f(c.JWPLAYER_MEDIA_ERROR, {message: "Error loading media: File could not be played"}),
                        F(a.IDLE))
                },
                loadeddata: g,
                loadedmetadata: v,
                loadstart: g,
                pause: m,
                play: m,
                playing: m,
                progress: t,
                ratechange: g,
                readystatechange: g,
                seeked: function () {
                    !J && W != a.PAUSED && F(a.PLAYING)
                },
                seeking: y ? D : g,
                stalled: g,
                suspend: g,
                timeupdate: p,
                volumechange: function () {
                    f(c.JWPLAYER_MEDIA_VOLUME, {volume: Math.round(100 * b.volume)});
                    f(c.JWPLAYER_MEDIA_MUTE, {mute: b.muted})
                },
                waiting: D,
                webkitbeginfullscreen: function (a) {
                    ma = !0;
                    j(a);
                    l.isIOS() && (b.controls = k)
                },
                webkitendfullscreen: function (a) {
                    ma = !1;
                    j(a);
                    l.isIOS() && (b.controls = k)
                }
            }, B, K,
            u, A, x = k, z, H = 0, J = k, W = a.IDLE, E, S = -1, Y = -1, O = k, T, X = -1, $ = l.isAndroidNative(), ha = l.isIOS(7), ka = [], Ca = k, ma = null, R = l.extend_new(this, new c.eventdispatcher(e));
        R.load = function (b) {
            if (O) {
                T = b.sources;
                0 > X && (X = 0);
                if (T)for (var a = l.getCookies().qualityLabel, d = 0; d < T.length; d++)if (T[d]["default"] && (X = d), a && T[d].label == a) {
                    X = d;
                    break
                }
                (a = w(T)) && R.sendEvent(c.JWPLAYER_MEDIA_LEVELS, {levels: a, currentQuality: X});
                n(b.starttime || 0, b.duration)
            }
        };
        R.stop = function () {
            O && (b.removeAttribute("src"), y || b.load(), X = -1, clearInterval(S), F(a.IDLE))
        };
        R.destroy = function () {
            clearInterval(S)
        };
        R.play = function () {
            O && !J && b.play()
        };
        var Ba = R.pause = function () {
            O && (b.pause(), F(a.PAUSED))
        };
        R.seekDrag = function (a) {
            O && ((J = a) ? b.pause() : b.play())
        };
        var wa = R.seek = function (a) {
            if (O)if (!J && 0 === H && f(c.JWPLAYER_MEDIA_SEEK, {position: A, offset: a}), x) {
                H = 0;
                try {
                    b.currentTime = a
                } catch (d) {
                    H = a
                }
            } else H = a
        }, Ra = R.volume = function (a) {
            l.exists(a) && (b.volume = Math.min(Math.max(0, a / 100), 1), E = 100 * b.volume)
        };
        R.mute = function (a) {
            l.exists(a) || (a = !b.muted);
            a ? (E = 100 * b.volume, b.muted = d) : (Ra(E), b.muted =
                k)
        };
        R.addCaptions = function (a) {
            if (l.isIOS() && b.addTextTrack) {
                var c = window.TextTrackCue;
                l.foreach(a, function (a, d) {
                    if (d.data) {
                        var f = b.addTextTrack(d.kind, d.label);
                        l.foreach(d.data, function (b, a) {
                            1 == b % 2 && f.addCue(new c(a.begin, d.data[parseInt(b) + 1].begin, a.text))
                        });
                        ka.push(f);
                        f.mode = "hidden"
                    }
                })
            }
        };
        R.resetCaptions = function () {
        };
        R.fsCaptions = function (a) {
            if (l.isIOS() && b.addTextTrack) {
                var c = null;
                l.foreach(ka, function (b, d) {
                    !a && "showing" == d.mode && (c = parseInt(b));
                    a || (d.mode = "hidden")
                });
                if (!a)return c
            }
        };
        this.checkComplete =
            function () {
                return Ca
            };
        R.detachMedia = function () {
            O = k;
            return b
        };
        R.attachMedia = function (b) {
            O = d;
            b || (x = k);
            Ca && (F(a.IDLE), f(c.JWPLAYER_MEDIA_COMPLETE), Ca = k)
        };
        R.setContainer = function (a) {
            B = a;
            a.appendChild(b)
        };
        R.getContainer = function () {
            return B
        };
        R.remove = function () {
            b && (b.removeAttribute("src"), y || b.load());
            clearInterval(S);
            X = -1;
            B === b.parentNode && B.removeChild(b)
        };
        R.setVisibility = function (b) {
            b || $ ? l.css.style(B, {visibility: "visible", opacity: 1}) : l.css.style(B, {visibility: "", opacity: 0})
        };
        R.resize = function (a, c,
                             d) {
            return l.stretch(d, b, a, c, b.videoWidth, b.videoHeight)
        };
        R.setControls = function (a) {
            b.controls = !!a
        };
        R.supportsFullscreen = function () {
            return !0
        };
        R.setFullScreen = function (a) {
            if (a = !!a) {
                try {
                    var c = b.webkitEnterFullscreen || b.webkitEnterFullScreen;
                    c && c.apply(b)
                } catch (d) {
                    return !1
                }
                return R.getFullScreen()
            }
            (c = b.webkitExitFullscreen || b.webkitExitFullScreen) && c.apply(b);
            return a
        };
        R.getFullScreen = function () {
            return ma || b.webkitDisplayingFullscreen
        };
        R.audioMode = function () {
            if (!T)return k;
            var b = T[0].type;
            return "oga" ==
                b || "aac" == b || "mp3" == b || "vorbis" == b
        };
        R.setCurrentQuality = function (a) {
            if (X != a && (a = parseInt(a, 10), 0 <= a && T && T.length > a)) {
                X = a;
                l.saveCookie("qualityLabel", T[a].label);
                f(c.JWPLAYER_MEDIA_LEVEL_CHANGED, {currentQuality: a, levels: w(T)});
                a = (10 * b.currentTime | 0) / 10;
                var d = (10 * b.duration | 0) / 10;
                0 >= d && (d = u);
                n(a, d)
            }
        };
        R.getCurrentQuality = function () {
            return X
        };
        R.getQualityLevels = function () {
            return w(T)
        };
        b || (b = document.createElement("video"));
        l.foreach(L, function (a, c) {
            b.addEventListener(a, c, k)
        });
        ha || (b.controls = d, b.controls =
            k);
        b.setAttribute("x-webkit-airplay", "allow");
        O = d
    }
})(jwplayer);
(function (g, l) {
    function c() {
        return !1
    }

    function a() {
    }

    var d = g.jwplayer, k = d.utils, b = d.events, e = b.state, f = new k.scriptloader(g.location.protocol + "//www.youtube.com/iframe_api"), C = k.isMobile(), p = k.isSafari();
    g.onYouTubeIframeAPIReady = function () {
        f = null
    };
    d.html5.youtube = function (a) {
        function c(a) {
            g.YT && g.YT.loaded ? (A = g.YT, h(a)) : setTimeout(c, 100)
        }

        function t() {
        }

        function h() {
            var b;
            if (b = !!A)b = z.parentNode, b || (E || (d(a).onReady(h), E = !0), b = null), b = !!b;
            b && S && S.apply(u)
        }

        function m(c) {
            var d = {oldstate: J, newstate: c};
            J = c;
            clearInterval(O);
            c !== e.IDLE && (O = setInterval(D, 250), c === e.PLAYING ? k.css("#" + a + " .jwcontrols", {display: ""}) : c === e.BUFFERING && w());
            u.sendEvent(b.JWPLAYER_PLAYER_STATE, d)
        }

        function D() {
            if (x && x.getPlayerState) {
                var a = x.getPlayerState();
                null !== a && (void 0 !== a && a !== T) && (T = a, j({data: a}));
                var c = A.PlayerState;
                a === c.PLAYING ? (w(), a = {
                    position: (10 * x.getCurrentTime() | 0) / 10,
                    duration: x.getDuration()
                }, u.sendEvent(b.JWPLAYER_MEDIA_TIME, a)) : a === c.BUFFERING && w()
            }
        }

        function w() {
            var a = 0;
            x && x.getVideoLoadedFraction && (a =
                Math.round(100 * x.getVideoLoadedFraction()));
            W !== a && (W = a, u.sendEvent(b.JWPLAYER_MEDIA_BUFFER, {bufferPercent: a}))
        }

        function n() {
            var a = {duration: x.getDuration(), width: z.clientWidth, height: z.clientHeight};
            u.sendEvent(b.JWPLAYER_MEDIA_META, a)
        }

        function F(a, b) {
            if (!a)throw"invalid Youtube ID";
            if (!z.parentNode)throw"Youtube iFrame removed from DOM";
            var c = {
                height: "100%", width: "100%", videoId: a, playerVars: k.extend_new({
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 0,
                    playsinline: 1,
                    origin: location.protocol +
                    "//" + location.hostname
                }, b), events: {onReady: r, onStateChange: j, onPlaybackQualityChange: y, onError: s}
            };
            u.setVisibility(!0);
            x = new A.Player(z, c);
            z = x.getIframe();
            S = null;
            I()
        }

        function r() {
            Y && (Y.apply(u), Y = null)
        }

        function j(a) {
            var c = A.PlayerState;
            switch (a.data) {
                case c.UNSTARTED:
                    m(e.BUFFERING);
                    break;
                case c.ENDED:
                    J != e.IDLE && (X = !0, u.sendEvent(b.JWPLAYER_MEDIA_BEFORECOMPLETE, void 0), m(e.IDLE), X = !1, u.sendEvent(b.JWPLAYER_MEDIA_COMPLETE, void 0));
                    break;
                case c.PLAYING:
                    $ = !1;
                    ha && (ha = !1, n(), a = {
                        levels: u.getQualityLevels(),
                        currentQuality: u.getCurrentQuality()
                    }, u.sendEvent(b.JWPLAYER_MEDIA_LEVELS, a));
                    m(e.PLAYING);
                    break;
                case c.PAUSED:
                    m(e.PAUSED);
                    break;
                case c.BUFFERING:
                    m(e.BUFFERING);
                    break;
                case c.CUED:
                    m(e.IDLE)
            }
        }

        function y() {
            ha && u.play()
        }

        function s() {
            u.sendEvent(b.JWPLAYER_MEDIA_ERROR, {message: "Error loading YouTube: Video could not be played"})
        }

        function I() {
            if (C || p)u.setVisibility(!0), k.css("#" + a + " .jwcontrols", {display: "none"})
        }

        function L() {
            clearInterval(O);
            if (x && x.stopVideo)try {
                x.stopVideo(), x.clearVideo()
            } catch (a) {
            }
        }

        function B() {
            L();
            z && (H && H === z.parentNode) && H.removeChild(z);
            S = Y = x = null
        }

        function K(a) {
            Y = null;
            var b = k.youTubeID(a.sources[0].file);
            a.image || (a.image = "http://i.ytimg.com/vi/" + b + "/0.jpg");
            u.setVisibility(!0);
            if (A)if (x)if (x.getPlayerState)if (x.getVideoData().video_id !== b) {
                $ ? (L(), x.cueVideoById(b)) : x.loadVideoById(b);
                var c = x.getPlayerState(), d = A.PlayerState;
                (c === d.UNSTARTED || c === d.CUED) && I()
            } else 0 < x.getCurrentTime() && x.seekTo(0), n(); else Y = function () {
                u.load(a)
            }; else F(b, {autoplay: $ ? 0 : 1}); else S = function () {
                F(b)
            },
                h()
        }

        var u = k.extend_new(this, new b.eventdispatcher("html5.youtube")), A = g.YT, x = null, z = l.createElement("div"), H, J = e.IDLE, W = -1, E = !1, S = null, Y = null, O = -1, T = -1, X = !1, $ = C || p, ha = !0;
        !A && f && (f.addEventListener(b.COMPLETE, c), f.addEventListener(b.ERROR, t), f.load());
        z.id = a + "_youtube";
        u.init = function (a) {
            K(a)
        };
        u.destroy = function () {
            B();
            H = z = A = u = null
        };
        u.getElement = function () {
            return z
        };
        u.load = function (a) {
            m(e.BUFFERING);
            K(a);
            u.play()
        };
        u.stop = function () {
            L();
            m(e.IDLE)
        };
        u.play = function () {
            $ || x.playVideo && x.playVideo()
        };
        u.pause =
            function () {
                $ || x.pauseVideo && x.pauseVideo()
            };
        u.seek = function (a) {
            $ || x.seekTo && x.seekTo(a)
        };
        u.volume = function (a) {
            x && x.setVolume(a)
        };
        u.mute = function (a) {
            x && a && x.setVolume(0)
        };
        u.detachMedia = function () {
            return l.createElement("video")
        };
        u.attachMedia = function () {
            X && (m(e.IDLE), u.sendEvent(b.JWPLAYER_MEDIA_COMPLETE, void 0), X = !1)
        };
        u.setContainer = function (a) {
            H = a;
            a.appendChild(z);
            u.setVisibility(!0)
        };
        u.getContainer = function () {
            return H
        };
        u.supportsFullscreen = function () {
            return !(!H || !H.requestFullscreen && !H.requestFullScreen && !H.webkitRequestFullscreen && !H.webkitRequestFullScreen && !H.webkitEnterFullscreen && !H.webkitEnterFullScreen && !H.mozRequestFullScreen && !H.msRequestFullscreen)
        };
        u.remove = function () {
            B()
        };
        u.setVisibility = function (a) {
            a ? (k.css.style(z, {display: "block"}), k.css.style(H, {
                visibility: "visible",
                opacity: 1
            })) : !C && !p && k.css.style(H, {opacity: 0})
        };
        u.resize = function (a, b, c) {
            return k.stretch(c, z, a, b, z.clientWidth, z.clientHeight)
        };
        u.checkComplete = function () {
            return X
        };
        u.getCurrentQuality = function () {
            if (x) {
                if (x.getAvailableQualityLevels) {
                    var a =
                        x.getPlaybackQuality();
                    return x.getAvailableQualityLevels().indexOf(a)
                }
                return -1
            }
        };
        u.getQualityLevels = function () {
            if (x) {
                var a = [];
                if (x.getAvailableQualityLevels)for (var b = x.getAvailableQualityLevels(), c = b.length; c--;)a.push({label: b[c]});
                return a
            }
        };
        u.setCurrentQuality = function (a) {
            if (x && x.getAvailableQualityLevels) {
                var b = x.getAvailableQualityLevels();
                b.length && x.setPlaybackQuality(b[b.length - a - 1])
            }
        }
    };
    d.html5.youtube.prototype = {seekDrag: a, setFullScreen: c, getFullScreen: c, setControls: a, audioMode: c}
})(window,
    document);
(function (g) {
    var l = g.utils, c = l.css, a = g.events, d = 80, k = 30;
    g.html5.adskipbutton = function (b, e, f, g) {
        function p(a) {
            0 > F || (a = f.replace(/xx/gi, Math.ceil(F - a)), t(a))
        }

        function q(a, b) {
            if ("number" == l.typeOf(y))F = y; else if ("%" == y.slice(-1)) {
                var c = parseFloat(y.slice(0, -1));
                b && !isNaN(c) && (F = b * c / 100)
            } else"string" == l.typeOf(y) ? F = l.seconds(y) : isNaN(y) || (F = y)
        }

        function v() {
            r && B.sendEvent(a.JWPLAYER_AD_SKIPPED)
        }

        function t(a) {
            a = a || g;
            var b = n.getContext("2d");
            b.clearRect(0, 0, d, k);
            m(b, 0, 0, d, k, 5, !0, !1, !1);
            m(b, 0, 0, d, k, 5, !1,
                !0, !1);
            b.fillStyle = "#979797";
            b.globalAlpha = 1;
            var c = n.height / 2, f = n.width / 2;
            b.textAlign = "center";
            b.font = "Bold 12px Sans-Serif";
            a === g && (f -= s.width, b.drawImage(s, n.width - (n.width - b.measureText(g).width) / 2 - 4, (k - s.height) / 2));
            b.fillText(a, f, c + 4)
        }

        function h(a) {
            a = a || g;
            var b = n.getContext("2d");
            b.clearRect(0, 0, d, k);
            m(b, 0, 0, d, k, 5, !0, !1, !0);
            m(b, 0, 0, d, k, 5, !1, !0, !0);
            b.fillStyle = "#FFFFFF";
            b.globalAlpha = 1;
            var c = n.height / 2, f = n.width / 2;
            b.textAlign = "center";
            b.font = "Bold 12px Sans-Serif";
            a === g && (f -= s.width, b.drawImage(I,
                n.width - (n.width - b.measureText(g).width) / 2 - 4, (k - s.height) / 2));
            b.fillText(a, f, c + 4)
        }

        function m(a, b, c, d, f, e, h, k, m) {
            "undefined" == typeof k && (k = !0);
            "undefined" === typeof e && (e = 5);
            a.beginPath();
            a.moveTo(b + e, c);
            a.lineTo(b + d - e, c);
            a.quadraticCurveTo(b + d, c, b + d, c + e);
            a.lineTo(b + d, c + f - e);
            a.quadraticCurveTo(b + d, c + f, b + d - e, c + f);
            a.lineTo(b + e, c + f);
            a.quadraticCurveTo(b, c + f, b, c + f - e);
            a.lineTo(b, c + e);
            a.quadraticCurveTo(b, c, b + e, c);
            a.closePath();
            k && (a.strokeStyle = "white", a.globalAlpha = m ? 1 : 0.25, a.stroke());
            h && (a.fillStyle =
                "#000000", a.globalAlpha = 0.5, a.fill())
        }

        function D(a, b) {
            var c = document.createElement(a);
            b && (c.className = b);
            return c
        }

        var w, n, F = -1, r = !1, j, y = 0, s, I, L = !1, B = l.extend_new(this, new a.eventdispatcher);
        B.updateSkipTime = function (a, b) {
            q(a, b);
            0 <= F && (c.style(w, {visibility: j ? "visible" : "hidden"}), 0 < F - a ? (p(a), r && (r = !1, w.style.cursor = "default")) : r || (r || (r = !0, w.style.cursor = "pointer"), L ? h() : t()))
        };
        this.reset = function (a) {
            r = !1;
            y = a;
            q(0, 0);
            p(0)
        };
        B.show = function () {
            j = !0;
            0 < F && c.style(w, {visibility: "visible"})
        };
        B.hide = function () {
            j = !1;
            c.style(w, {visibility: "hidden"})
        };
        this.element = function () {
            return w
        };
        s = new Image;
        s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkE0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRjk0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqAZXX0AAABYSURBVHjafI2BCcAwCAQ/kr3ScRwjW+g2SSezCi0kYHpwKLy8JCLDbWaGTM+MAFzuVNXhNiTQsh+PS9QhZ7o9JuFMeUVNwjsamDma4K+3oy1cqX/hxyPAAAQwNKV27g9PAAAAAElFTkSuQmCC";
        s.className = "jwskipimage jwskipout";
        I = new Image;
        I.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ODkzMWI3Ny04YjE5LTQzYzMtOGM2Ni0wYzdkODNmZTllNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDI0OTcxRkU0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDI0OTcxRkQ0OEM2MTFFM0I4MTREM0ZBQTFCNDE3NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA5ZGQxNDktNzdkMi00M2E3LWJjYWYtOTRjZmM2MWNkZDI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTMxYjc3LThiMTktNDNjMy04YzY2LTBjN2Q4M2ZlOWU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvgIj/QAAABYSURBVHjadI6BCcAgDAS/0jmyih2tm2lHSRZJX6hQQ3w4FP49LKraSHV3ZLDzAuAi3cwaqUhSfvft+EweznHneUdTzPGRmp5hEJFhAo3LaCnjn7blzCvAAH9YOSCL5RZKAAAAAElFTkSuQmCC";
        I.className = "jwskipimage jwskipover";
        w = D("div", "jwskip");
        w.id = b + "_skipcontainer";
        n = D("canvas");
        w.appendChild(n);
        B.width = n.width = d;
        B.height = n.height = k;
        w.appendChild(I);
        w.appendChild(s);
        c.style(w, {visibility: "hidden", bottom: e});
        w.addEventListener("mouseover", function () {
            L = !0;
            r && h()
        });
        w.addEventListener("mouseout", function () {
            L = !1;
            r && t()
        });
        l.isMobile() ? (new l.touch(w)).addEventListener(l.touchEvents.TAP, v) : w.addEventListener("click", v)
    };
    c(".jwskip", {
        position: "absolute", "float": "right", display: "inline-block",
        width: d, height: k, right: 10
    });
    c(".jwskipimage", {position: "relative", display: "none"})
})(window.jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = g.events, d = a.state, k = g.parsers, b = c.css, e = c.isAndroid(4, !0), f = "playing", C = document;
    l.captions = function (b, q) {
        function l(a) {
            c.log("CAPTIONS(" + a + ")")
        }

        function t(a) {
            (J = a.fullscreen) ? (h(), setTimeout(h, 500)) : n(!0)
        }

        function h() {
            var a = s.offsetHeight, b = s.offsetWidth;
            0 !== a && 0 !== b && B.resize(b, Math.round(0.94 * a))
        }

        function m(a, b) {
            c.ajax(a, function (a) {
                var c = a.responseXML ? a.responseXML.firstChild : null;
                x++;
                if (c) {
                    "xml" == k.localName(c) && (c = c.nextSibling);
                    for (; c.nodeType == c.COMMENT_NODE;)c =
                        c.nextSibling
                }
                c = c && "tt" == k.localName(c) ? new g.parsers.dfxp : new g.parsers.srt;
                try {
                    var d = c.parse(a.responseText);
                    u < A.length && (A[b].data = d);
                    n(!1)
                } catch (f) {
                    l(f.message + ": " + A[b].file)
                }
                x == A.length && (0 < z && (r(z), z = -1), w())
            }, D, !0)
        }

        function D(a) {
            x++;
            l(a);
            x == A.length && (0 < z && (r(z), z = -1), w())
        }

        function w() {
            for (var b = [], c = 0; c < A.length; c++)b.push(A[c]);
            W.sendEvent(a.JWPLAYER_CAPTIONS_LOADED, {captionData: b})
        }

        function n(a) {
            A.length ? K == f && 0 < H ? (B.show(), J ? t({fullscreen: !0}) : (F(), a && setTimeout(F, 500))) : B.hide() : B.hide()
        }

        function F() {
            B.resize()
        }

        function r(b) {
            0 < b ? (u = b - 1, H = b | 0, u >= A.length || (A[u].data ? B.populate(A[u].data) : x == A.length ? (l("file not loaded: " + A[u].file), 0 !== H && j(a.JWPLAYER_CAPTIONS_CHANGED, A, 0), H = 0) : z = b, n(!1))) : (H = 0, n(!1))
        }

        function j(a, b, c) {
            W.sendEvent(a, {type: a, tracks: b, track: c})
        }

        function y() {
            for (var a = [{label: "Off"}], b = 0; b < A.length; b++)a.push({label: A[b].label});
            return a
        }

        var s, I = {
            back: !0,
            color: "#FFFFFF",
            fontSize: 15,
            fontFamily: "Arial,sans-serif",
            fontOpacity: 100,
            backgroundColor: "#000",
            backgroundOpacity: 100,
            edgeStyle: null,
            windowColor: "#FFFFFF",
            windowOpacity: 0
        }, L = {
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "none"
        }, B, K, u, A = [], x = 0, z = -1, H = 0, J = !1, W = new a.eventdispatcher;
        c.extend_new(this, W);
        this.element = function () {
            return s
        };
        this.getCaptionsList = function () {
            return y()
        };
        this.getCurrentCaptions = function () {
            return H
        };
        this.setCurrentCaptions = function (b) {
            0 <= b && (H != b && b <= A.length) && (r(b), b = y(), c.saveCookie("captionLabel", b[H].label), j(a.JWPLAYER_CAPTIONS_CHANGED, b, H))
        };
        s = C.createElement("div");
        s.id = b.id + "_caption";
        s.className = "jwcaptions";
        b.jwAddEventListener(a.JWPLAYER_PLAYER_STATE, function (a) {
            switch (a.newstate) {
                case d.IDLE:
                    K = "idle";
                    n(!1);
                    break;
                case d.PLAYING:
                    K = f, n(!1)
            }
        });
        b.jwAddEventListener(a.JWPLAYER_PLAYLIST_ITEM, function () {
            u = 0;
            A = [];
            B.update(0);
            x = 0;
            for (var d = b.jwGetPlaylist()[b.jwGetPlaylistIndex()].tracks, f = [], h = 0, k = "", g = 0, k = "", h = 0; h < d.length; h++)k = d[h].kind.toLowerCase(), ("captions" == k || "subtitles" == k) && f.push(d[h]);
            H = 0;
            if (!e) {
                for (h = 0; h < f.length; h++)if (k = f[h].file)f[h].label || (f[h].label = h.toString()),
                    A.push(f[h]), m(A[h].file, h);
                for (h = 0; h < A.length; h++)if (A[h]["default"]) {
                    g = h + 1;
                    break
                }
                d = c.getCookies();
                if (k = d.captionLabel) {
                    d = y();
                    for (h = 0; h < d.length; h++)if (k == d[h].label) {
                        g = h;
                        break
                    }
                }
                0 < g && r(g);
                n(!1);
                j(a.JWPLAYER_CAPTIONS_LIST, y(), H)
            }
        });
        b.jwAddEventListener(a.JWPLAYER_MEDIA_ERROR, l);
        b.jwAddEventListener(a.JWPLAYER_ERROR, l);
        b.jwAddEventListener(a.JWPLAYER_READY, function () {
            c.foreach(I, function (a, b) {
                q && (void 0 !== q[a] ? b = q[a] : void 0 !== q[a.toLowerCase()] && (b = q[a.toLowerCase()]));
                L[a] = b
            });
            B = new g.html5.captions.renderer(L,
                s);
            n(!1)
        });
        b.jwAddEventListener(a.JWPLAYER_MEDIA_TIME, function (a) {
            B.update(a.position)
        });
        b.jwAddEventListener(a.JWPLAYER_FULLSCREEN, t);
        b.jwAddEventListener(a.JWPLAYER_RESIZE, function () {
            n(!1)
        })
    };
    b(".jwcaptions", {position: "absolute", cursor: "pointer", width: "100%", height: "100%", overflow: "hidden"})
})(jwplayer);
(function (g) {
    var l = g.utils, c = l.css.style;
    g.html5.captions.renderer = function (a, d) {
        function k(a) {
            a = a || "";
            m = "hidden";
            c(p, {visibility: m});
            v.innerHTML = a;
            a.length && (m = "visible", setTimeout(b, 16))
        }

        function b() {
            if ("visible" === m) {
                var b = p.clientWidth, d = Math.pow(b / 400, 0.6), f = a.fontSize * d;
                c(v, {
                    maxWidth: b + "px",
                    fontSize: Math.round(f) + "px",
                    lineHeight: Math.round(1.4 * f) + "px",
                    padding: Math.round(1 * d) + "px " + Math.round(8 * d) + "px"
                });
                a.windowOpacity && c(q, {padding: Math.round(5 * d) + "px", borderRadius: Math.round(5 * d) + "px"});
                c(p,
                    {visibility: m})
            }
        }

        function e() {
            for (var a = -1, b = 0; b < g.length; b++)if (g[b].begin <= h && (b == g.length - 1 || g[b + 1].begin >= h)) {
                a = b;
                break
            }
            -1 == a ? k("") : a != t && (t = a, k(g[b].text))
        }

        function f(a, b, c) {
            c = l.hexToRgba("#000000", c);
            "dropshadow" === a ? b.textShadow = "0 2px 1px " + c : "raised" === a ? b.textShadow = "0 0 5px " + c + ", 0 1px 5px " + c + ", 0 2px 5px " + c : "depressed" === a ? b.textShadow = "0 -2px 1px " + c : "uniform" === a && (b.textShadow = "-2px 0 1px " + c + ",2px 0 1px " + c + ",0 -2px 1px " + c + ",0 2px 1px " + c + ",-1px 1px 1px " + c + ",1px 1px 1px " + c + ",1px -1px 1px " +
                c + ",1px 1px 1px " + c)
        }

        var g, p, q, v, t, h, m = "visible", D = -1;
        this.hide = function () {
            clearInterval(D);
            c(p, {display: "none"})
        };
        this.populate = function (a) {
            t = -1;
            g = a;
            e()
        };
        this.resize = function () {
            b()
        };
        this.show = function () {
            c(p, {display: "block"});
            b();
            clearInterval(D);
            D = setInterval(b, 250)
        };
        this.update = function (a) {
            h = a;
            g && e()
        };
        var w = a.fontOpacity, n = a.windowOpacity, F = a.edgeStyle, r = a.backgroundColor, j = {display: "inline-block"}, y = {
            color: l.hexToRgba(l.rgbHex(a.color), w),
            display: "inline-block",
            fontFamily: a.fontFamily,
            fontStyle: a.fontStyle,
            fontWeight: a.fontWeight,
            textAlign: "center",
            textDecoration: a.textDecoration,
            wordWrap: "break-word"
        };
        n && (j.backgroundColor = l.hexToRgba(l.rgbHex(a.windowColor), n));
        f(F, y, w);
        a.back ? y.backgroundColor = l.hexToRgba(l.rgbHex(r), a.backgroundOpacity) : null === F && f("uniform", y);
        p = document.createElement("div");
        q = document.createElement("div");
        v = document.createElement("span");
        c(p, {
            display: "block",
            height: "auto",
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
            width: "100%"
        });
        c(q, j);
        c(v, y);
        q.appendChild(v);
        p.appendChild(q);
        d.appendChild(p)
    }
})(jwplayer);
(function (g) {
    function l(a) {
        return a ? parseInt(a.width, 10) + "px " + parseInt(a.height, 10) + "px" : "0 0"
    }

    var c = g.html5, a = g.utils, d = g.events, k = d.state, b = a.css, e = a.transitionStyle, f = a.isMobile(), C = a.isAndroid(4, !0), p = "button", q = "text", v = "slider", t = "none", h = "100%", m = !1, D = !0, w = null, n = "", F = {display: t}, r = {display: "block"}, j = {display: n}, y = "array", s = m, I = window, L = document;
    c.controlbar = function (e, K) {
        function u(a, b, c) {
            return {name: a, type: b, className: c}
        }

        function A(c) {
            b.block(aa);
            var d = c.duration == Number.POSITIVE_INFINITY,
                h = 0 === c.duration && 0 !== c.position && a.isSafari() && !f;
            d || h ? (U.setText(e.jwGetPlaylist()[e.jwGetPlaylistIndex()].title || "Live broadcast"), ka(!1)) : (G.elapsed && (d = a.timeFormat(c.position), G.elapsed.innerHTML = d), G.duration && (d = a.timeFormat(c.duration), G.duration.innerHTML = d), 0 < c.duration ? Fa(c.position / c.duration) : Fa(0), qa = c.duration, ra = c.position, sa || U.setText())
        }

        function x() {
            var a = e.jwGetMute();
            Ga = e.jwGetVolume() / 100;
            ma("mute", a || 0 === Ga);
            Sa(a ? 0 : Ga)
        }

        function z() {
            b.style([G.hd, G.cc], F);
            b.style(G.cast, s ? j :
                F);
            Za();
            ba()
        }

        function H(a) {
            Ta = a.currentQuality | 0;
            G.hd && (G.hd.querySelector("button").className = 2 === ia.length && 0 === Ta ? "off" : n);
            na && 0 <= Ta && na.setActive(a.currentQuality)
        }

        function J(a) {
            ga && (La = a.track | 0, G.cc && (G.cc.querySelector("button").className = 2 === ga.length && 0 === La ? "off" : n), oa && 0 <= La && oa.setActive(a.track))
        }

        function W(a) {
            if (G.cast) {
                s = a.available;
                b.style(G.cast, a.available ? j : F);
                var c = G.cast.className.replace(/\s*jwcancast/, "");
                a.available && (c += " jwcancast");
                G.cast.className = c
            }
            E(a)
        }

        function E(a) {
            Ma =
                a;
            G.cast && (G.cast.querySelector("button").className = a.active ? n : "off");
            ba()
        }

        function S() {
            la = a.extend_new({}, ta, Z.getComponentSettings("controlbar"), K);
            Ha = V("background").height;
            var c = ua ? 0 : la.margin;
            b.style(P, {height: Ha, bottom: c, left: c, right: c, "max-width": ua ? n : la.maxwidth});
            // b.style(P, {height: Ha, bottom: 0, left: 0, right: 0});
            b(Y(".jwtext"), {
                font: la.fontsize + "px/" + V("background").height + "px " + la.font,
                color: la.fontcolor,
                "font-weight": la.fontweight
            });
            b(Y(".jwoverlay"), {bottom: Ha})
        }

        function Y(a) {
            return "#" + aa + (a ? " " + a : n)
        }

        function O() {
            return L.createElement("span")
        }

        function T(c, d, e, f, h) {
            var k = O(), g = V(c);
            f = f ? " left center" : " center";
            var m = l(g);
            k.className = "jw" + c;
            k.innerHTML = "\x26nbsp;";
            if (g && g.src)return e = e ? {
                background: "url('" + g.src + "') repeat-x " + f,
                "background-size": m,
                height: h ? g.height : n
            } : {
                background: "url('" + g.src + "') no-repeat" + f,
                "background-size": m,
                width: g.width,
                height: h ? g.height : n
            }, k.skin = g, b(Y((h ? ".jwvertical " : n) + ".jw" + c), a.extend_new(e, d)), G[c] = k
        }

        function X(a, c, d, e) {
            c && c.src && (b(a, {
                width: c.width,
                background: "url(" + c.src + ") no-repeat center",
                "background-size": l(c)
            }),
            d.src && !f && b(a + ":hover," + a + ".off:hover", {
                background: "url(" + d.src + ") no-repeat center",
                "background-size": l(d)
            }), e && e.src && b(a + ".off", {
                background: "url(" + e.src + ") no-repeat center",
                "background-size": l(e)
            }))
        }

        function $(a) {
            return function (b) {
                yb[a] && (yb[a](), f && U.sendEvent(d.JWPLAYER_USER_ACTION));
                b.preventDefault && b.preventDefault()
            }
        }

        function ha(b) {
            a.foreach(kb, function (a, c) {
                a != b && ("cc" == a && M(), "hd" == a && Q(), c.hide())
            })
        }

        function ka(a) {
            P && G.alt && (void 0 === a && (a = P.parentNode && 320 <= P.parentNode.clientWidth),
                a ? b.style(Ua, j) : b.style(Ua, F))
        }

        function Ca() {
            !ua && !sa && (b.block(aa), fa.show(), Ia("volume", fa), ha("volume"))
        }

        function ma(b, c) {
            a.exists(c) || (c = !lb[b]);
            G[b] && (G[b].className = "jw" + b + (c ? " jwtoggle jwtoggling" : " jwtoggling"), setTimeout(function () {
                G[b].className = G[b].className.replace(" jwtoggling", n)
            }, 100));
            lb[b] = c
        }

        function R() {
            ia && 2 < ia.length && (mb && (clearTimeout(mb), mb = void 0), b.block(aa), na.show(), Ia("hd", na), ha("hd"))
        }

        function Ba() {
            ga && 2 < ga.length && (nb && (clearTimeout(nb), nb = void 0), b.block(aa), oa.show(),
                Ia("cc", oa), ha("cc"))
        }

        function wa(a) {
            0 <= a && a < ia.length && (e.jwSetCurrentQuality(a), Q(), na.hide())
        }

        function Ra(a) {
            0 <= a && a < ga.length && (e.jwSetCurrentCaptions(a), M(), oa.hide())
        }

        function Qa() {
            2 == ga.length && Ra((La + 1) % 2)
        }

        function Aa() {
            2 == ia.length && wa((Ta + 1) % 2)
        }

        function Da(a) {
            a.preventDefault();
            L.onselectstart = function () {
                return m
            }
        }

        function Ea(a) {
            cb();
            xa = a;
            I.addEventListener("mouseup", Na, m)
        }

        function cb() {
            I.removeEventListener("mouseup", Na);
            xa = w
        }

        function vb() {
            G.timeRail.className = "jwrail";
            e.jwGetState() !=
            k.IDLE && (e.jwSeekDrag(D), Ea("time"), Va(), U.sendEvent(d.JWPLAYER_USER_ACTION))
        }

        function jb(b) {
            if (xa) {
                var c = G[xa].querySelector(".jwrail"), c = a.bounds(c), c = b.x / c.width;
                100 < c && (c = 100);
                b.type == a.touchEvents.DRAG_END ? (e.jwSeekDrag(m), G.timeRail.className = "jwrail", cb(), db.time(c), Wa()) : (Fa(c), 500 < ra - ob && (ob = ra, db.time(c)));
                U.sendEvent(d.JWPLAYER_USER_ACTION)
            }
        }

        function Oa(b) {
            var c = G.time.querySelector(".jwrail"), c = a.bounds(c);
            b = b.x / c.width;
            100 < b && (b = 100);
            e.jwGetState() != k.IDLE && (db.time(b), U.sendEvent(d.JWPLAYER_USER_ACTION))
        }

        function wb(a) {
            return function (b) {
                b.button || (G[a + "Rail"].className = "jwrail", "time" === a ? e.jwGetState() != k.IDLE && (e.jwSeekDrag(D), Ea(a)) : Ea(a))
            }
        }

        function Na(b) {
            if (xa && !b.button) {
                var c = G[xa].querySelector(".jwrail"), d = a.bounds(c), c = xa, d = G[c].vertical ? (d.bottom - b.pageY) / d.height : (b.pageX - d.left) / d.width;
                "mouseup" == b.type ? ("time" == c && e.jwSeekDrag(m), G[c + "Rail"].className = "jwrail", cb(), db[c.replace("H", n)](d)) : ("time" == xa ? Fa(d) : Sa(d), 500 < ra - ob && (ob = ra, db[xa.replace("H", n)](d)));
                return !1
            }
        }

        function Va(a) {
            a &&
            N.apply(this, arguments);
            ja && (qa && !ua && !f) && (b.block(aa), ja.show(), Ia("time", ja))
        }

        function Wa() {
            I.removeEventListener("mousemove", Na);
            ja && ja.hide()
        }

        function N(b) {
            Ja = a.bounds(P);
            if ((Xa = a.bounds(pb)) && 0 !== Xa.width)b = b.pageX ? b.pageX - Xa.left : b.x, ja.positionX(Math.round(b)), xb(qa * b / Xa.width)
        }

        function ya() {
            a.foreach(eb, function (a, c) {
                var d = {};
                "%" === c.position.toString().slice(-1) ? d.left = c.position : 0 < qa ? (d.left = (100 * c.position / qa).toFixed(2) + "%", d.display = null) : (d.left = 0, d.display = "none");
                b.style(c.element,
                    d)
            })
        }

        function pa() {
            nb = setTimeout(oa.hide, 500)
        }

        function qb() {
            mb = setTimeout(na.hide, 500)
        }

        function Pa(a, c, d, e) {
            if (!f) {
                var h = a.element();
                c.appendChild(h);
                c.addEventListener("mousemove", d, m);
                e ? c.addEventListener("mouseout", e, m) : c.addEventListener("mouseout", a.hide, m);
                b.style(h, {left: "50%"})
            }
        }

        function za(b, c, e, h) {
            if (f) {
                var k = b.element();
                c.appendChild(k);
                (new a.touch(c)).addEventListener(a.touchEvents.TAP, function () {
                    var a = e;
                    "cc" == h ? (2 == ga.length && (a = Qa), fb ? (M(), b.hide()) : (fb = setTimeout(function () {
                        b.hide();
                        fb = void 0
                    }, 4E3), a()), U.sendEvent(d.JWPLAYER_USER_ACTION)) : "hd" == h && (2 == ia.length && (a = Aa), gb ? (Q(), b.hide()) : (gb = setTimeout(function () {
                        b.hide();
                        gb = void 0
                    }, 4E3), a()), U.sendEvent(d.JWPLAYER_USER_ACTION))
                })
            }
        }

        function $a(d) {
            var e = O();
            e.className = "jwgroup jw" + d;
            Ka[d] = e;
            if (ca[d]) {
                var e = ca[d], k = Ka[d];
                if (e && 0 < e.elements.length)for (var g = 0; g < e.elements.length; g++) {
                    var j;
                    a:{
                        j = e.elements[g];
                        var u = d;
                        switch (j.type) {
                            case q:
                                u = void 0;
                                j = j.name;
                                var u = {}, x = V(("alt" == j ? "elapsed" : j) + "Background");
                                if (x.src) {
                                    var D = O();
                                    D.id =
                                        aa + "_" + j;
                                    "elapsed" == j || "duration" == j ? (D.className = "jwtext jw" + j + " jwhidden", Ua.push(D)) : D.className = "jwtext jw" + j;
                                    u.background = "url(" + x.src + ") repeat-x center";
                                    u["background-size"] = l(V("background"));
                                    b.style(D, u);
                                    D.innerHTML = "alt" != j ? "00:00" : n;
                                    u = G[j] = D
                                } else u = null;
                                j = u;
                                break a;
                            case p:
                                if ("blank" != j.name) {
                                    j = j.name;
                                    x = u;
                                    if (!V(j + "Button").src || f && ("mute" == j || 0 === j.indexOf("volume")) || C && /hd|cc/.test(j))j = w; else {
                                        var u = O(), D = O(), s = void 0, s = rb, A = T(s.name);
                                        A || (A = O(), A.className = "jwblankDivider");
                                        s.className &&
                                        (A.className += " " + s.className);
                                        s = A;
                                        A = L.createElement("button");
                                        u.style += " display:inline-block";
                                        u.className = "jw" + j + " jwbuttoncontainer";
                                        "left" == x ? (u.appendChild(D), u.appendChild(s)) : (u.appendChild(s), u.appendChild(D));
                                        f ? "hd" != j && "cc" != j && (new a.touch(A)).addEventListener(a.touchEvents.TAP, $(j)) : A.addEventListener("click", $(j), m);
                                        A.innerHTML = "\x26nbsp;";
                                        A.tabIndex = -1;
                                        D.appendChild(A);
                                        x = V(j + "Button");
                                        D = V(j + "ButtonOver");
                                        s = V(j + "ButtonOff");
                                        X(Y(".jw" + j + " button"), x, D, s);
                                        (x = Eb[j]) && X(Y(".jw" + j + ".jwtoggle button"),
                                            V(x + "Button"), V(x + "ButtonOver"));
                                        j = G[j] = u
                                    }
                                    break a
                                }
                                break;
                            case v:
                                u = void 0;
                                s = j.name;
                                if (f && 0 === s.indexOf("volume"))u = void 0; else {
                                    j = O();
                                    var D = "volume" == s, y = s + ("time" == s ? "Slider" : n) + "Cap", x = D ? "Top" : "Left", u = D ? "Bottom" : "Right", A = T(y + x, w, m, m, D), E = T(y + u, w, m, m, D), r;
                                    r = s;
                                    var z = D, K = x, B = u, S = O(), W = ["Rail", "Buffer", "Progress"], H = void 0, I = void 0;
                                    S.className = "jwrail";
                                    for (var J = 0; J < W.length; J++) {
                                        var I = "time" == r ? "Slider" : n, ka = r + I + W[J], M = T(ka, w, !z, 0 === r.indexOf("volume"), z), N = T(ka + "Cap" + K, w, m, m, z), R = T(ka + "Cap" + B, w, m,
                                            m, z), P = V(ka + "Cap" + K), U = V(ka + "Cap" + B);
                                        if (M) {
                                            var Q = O();
                                            Q.className = "jwrailgroup " + W[J];
                                            N && Q.appendChild(N);
                                            Q.appendChild(M);
                                            R && (Q.appendChild(R), R.className += " jwcap" + (z ? "Bottom" : "Right"));
                                            b(Y(".jwrailgroup." + W[J]), {"min-width": z ? n : P.width + U.width});
                                            Q.capSize = z ? P.height + U.height : P.width + U.width;
                                            b(Y("." + M.className), {
                                                left: z ? n : P.width,
                                                right: z ? n : U.width,
                                                top: z ? P.height : n,
                                                bottom: z ? U.height : n,
                                                height: z ? "auto" : n
                                            });
                                            2 == J && (H = Q);
                                            2 == J && !z ? (M = O(), M.className = "jwprogressOverflow", M.appendChild(Q), G[ka] = M, S.appendChild(M)) :
                                                (G[ka] = Q, S.appendChild(Q))
                                        }
                                    }
                                    if (K = T(r + I + "Thumb", w, m, m, z))b(Y("." + K.className), {
                                        opacity: "time" == r ? 0 : 1,
                                        "margin-top": z ? K.skin.height / -2 : n
                                    }), K.className += " jwthumb", (z && H ? H : S).appendChild(K);
                                    f ? (z = new a.touch(S), z.addEventListener(a.touchEvents.DRAG_START, vb), z.addEventListener(a.touchEvents.DRAG, jb), z.addEventListener(a.touchEvents.DRAG_END, jb), z.addEventListener(a.touchEvents.TAP, Oa)) : (H = r, "volume" == H && !z && (H += "H"), S.addEventListener("mousedown", wb(H), m));
                                    "time" == r && !f && (S.addEventListener("mousemove",
                                        Va, m), S.addEventListener("mouseout", Wa, m));
                                    r = G[r + "Rail"] = S;
                                    S = V(y + x);
                                    y = V(y + x);
                                    j.className = "jwslider jw" + s;
                                    A && j.appendChild(A);
                                    j.appendChild(r);
                                    E && (D && (E.className += " jwcapBottom"), j.appendChild(E));
                                    b(Y(".jw" + s + " .jwrail"), {
                                        left: D ? n : S.width,
                                        right: D ? n : y.width,
                                        top: D ? S.height : n,
                                        bottom: D ? y.height : n,
                                        width: D ? h : n,
                                        height: D ? "auto" : n
                                    });
                                    G[s] = j;
                                    j.vertical = D;
                                    "time" == s ? (ja = new c.overlay(aa + "_timetooltip", Z), hb = new c.thumbs(aa + "_thumb"), ib = L.createElement("div"), ib.className = "jwoverlaytext", sb = L.createElement("div"),
                                        u = hb.element(), sb.appendChild(u), sb.appendChild(ib), ja.setContents(sb), pb = r, xb(0), u = ja.element(), r.appendChild(u), G.timeSliderRail || b.style(G.time, F), G.timeSliderThumb && b.style(G.timeSliderThumb, {"margin-left": V("timeSliderThumb").width / -2}), u = V("timeSliderCue"), x = {"z-index": 1}, u && u.src ? (T("timeSliderCue"), x["margin-left"] = u.width / -2) : x.display = t, b(Y(".jwtimeSliderCue"), x), va(0), Fa(0), Fa(0), va(0)) : 0 === s.indexOf("volume") && (s = j, A = "volume" + (D ? n : "H"), E = D ? "vertical" : "horizontal", b(Y(".jw" + A + ".jw" + E),
                                        {
                                            width: V(A + "Rail", D).width + (D ? 0 : V(A + "Cap" + x).width + V(A + "RailCap" + x).width + V(A + "RailCap" + u).width + V(A + "Cap" + u).width),
                                            height: D ? V(A + "Cap" + x).height + V(A + "Rail").height + V(A + "RailCap" + x).height + V(A + "RailCap" + u).height + V(A + "Cap" + u).height : n
                                        }), s.className += " jw" + E);
                                    u = j
                                }
                                j = u;
                                break a
                        }
                        j = void 0
                    }
                    j && ("volume" == e.elements[g].name && j.vertical ? (fa = new c.overlay(aa + "_volumeOverlay", Z), fa.setContents(j)) : k.appendChild(j))
                }
            }
        }

        function ba() {
            clearTimeout(zb);
            zb = setTimeout(U.redraw, 0)
        }

        function Za() {
            !tb && 1 < e.jwGetPlaylist().length &&
            (!L.querySelector("#" + e.id + " .jwplaylist") || e.jwGetFullscreen()) ? (b.style(G.next, j), b.style(G.prev, j)) : (b.style(G.next, F), b.style(G.prev, F))
        }

        function Ia(b, c) {
            Ja || (Ja = a.bounds(P));
            c.constrainX(Ja, !0)
        }

        function va(a) {
            G.timeSliderBuffer && (a = Math.min(Math.max(0, a), 1), b.style(G.timeSliderBuffer, {
                width: (100 * a).toFixed(1) + "%",
                opacity: 0 < a ? 1 : 0
            }))
        }

        function Ya(a, c) {
            if (G[a]) {
                var d = G[a].vertical, e = a + ("time" === a ? "Slider" : n), f = 100 * Math.min(Math.max(0, c), 1) + "%", h = G[e + "Progress"], e = G[e + "Thumb"], j;
                h && (j = {}, d ? (j.height =
                    f, j.bottom = 0) : j.width = f, "volume" !== a && (j.opacity = 0 < c || xa ? 1 : 0), b.style(h, j));
                e && (j = {}, d ? j.top = 0 : j.left = f, b.style(e, j))
            }
        }

        function Sa(a) {
            Ya("volume", a);
            Ya("volumeH", a)
        }

        function Fa(a) {
            Ya("time", a)
        }

        function V(a) {
            var b = "controlbar", c = a;
            0 === a.indexOf("volume") && (0 === a.indexOf("volumeH") ? c = a.replace("volumeH", "volume") : b = "tooltip");
            return (a = Z.getSkinElement(b, c)) ? a : {width: 0, height: 0, src: n, image: void 0, ready: m}
        }

        function M() {
            clearTimeout(fb);
            fb = void 0
        }

        function Q() {
            clearTimeout(gb);
            gb = void 0
        }

        function da(b) {
            b =
                (new g.parsers.srt).parse(b.responseText, !0);
            if (a.typeOf(b) !== y)return ea("Invalid data");
            U.addCues(b)
        }

        function ea(b) {
            a.log("Cues failed to load: " + b)
        }

        var Z, rb = u("divider", "divider"), ta = {
            margin: 8,
            maxwidth: 800,
            font: "Arial,sans-serif",
            fontsize: 11,
            fontcolor: 15658734,
            fontweight: "bold",
            layout: {
                left: {position: "left", elements: [u("play", p), u("prev", p), u("next", p), u("elapsed", q)]},
                center: {position: "center", elements: [u("time", v), u("alt", q)]},
                right: {
                    position: "right", elements: [u("duration", q), u("hd", p), u("cc",
                        p), u("mute", p), u("volume", v), u("volumeH", v), u("cast", p), u("fullscreen", p)]
                }
            }
        }, la, ca, G, Ha, P, aa, qa, ra, ia, Ta, ga, La, Ga, Ma = {}, fa, Ja, pb, Xa, ja, sb, hb, ib, mb, gb, na, nb, fb, oa, zb, ab = -1, ua = m, sa = m, tb = m, ub = m, xa = w, ob = 0, eb = [], bb, Eb = {
            play: "pause",
            mute: "unmute",
            fullscreen: "normalscreen"
        }, lb = {play: m, mute: m, fullscreen: m}, yb = {
            play: function () {
                lb.play ? e.jwPause() : e.jwPlay()
            }, mute: function () {
                var a = !lb.mute;
                e.jwSetMute(a);
                !a && 0 === Ga && e.jwSetVolume(20);
                x()
            }, fullscreen: function () {
                e.jwSetFullscreen()
            }, next: function () {
                e.jwPlaylistNext()
            },
            prev: function () {
                e.jwPlaylistPrev()
            }, hd: Aa, cc: Qa, cast: function () {
                Ma.active ? e.jwStopCasting() : e.jwStartCasting()
            }
        }, db = {
            time: function (a) {
                bb ? (a = bb.position, a = "%" === a.toString().slice(-1) ? qa * parseFloat(a.slice(0, -1)) / 100 : parseFloat(a)) : a *= qa;
                e.jwSeek(a)
            }, volume: function (a) {
                Sa(a);
                0.1 > a && (a = 0);
                0.9 < a && (a = 1);
                e.jwSetVolume(100 * a)
            }
        }, kb = {}, Ua = [], U = a.extend_new(this, new d.eventdispatcher), xb, Ab, Fb = function (a) {
            b.style(ja.element(), {width: a});
            Ia("time", ja)
        };
        xb = function (c) {
            var d = hb.updateTimeline(c, Fb);
            if (bb) {
                if ((c =
                        bb.text) && c !== Ab)Ab = c, b.style(ja.element(), {width: 32 < c.length ? 160 : n})
            } else c = a.timeFormat(c), d || b.style(ja.element(), {width: n});
            ib.innerHTML !== c && (ib.innerHTML = c);
            Ia("time", ja)
        };
        U.setText = function (a) {
            b.block(aa);
            var c = G.alt, d = G.time;
            G.timeSliderRail ? b.style(d, a ? F : r) : b.style(d, F);
            c && (b.style(c, a ? r : F), c.innerHTML = a || n);
            ba()
        };
        var Ka = {};
        U.redraw = function (c) {
            b.block(aa);
            c && U.visible && U.show(D);
            S();
            var d = top !== window.self && a.isMSIE();
            c = Ma.active;
            b.style(G.fullscreen, {display: ua || c || ub || d ? t : n});
            b.style(G.volumeH,
                {display: ua || sa ? "block" : t});
            (d = la.maxwidth | 0) && P.parentNode && a.isIE() && (!ua && P.parentNode.clientWidth > d + (la.margin | 0) ? b.style(P, {width: d}) : b.style(P, {width: n}));
            fa && b.style(fa.element(), {display: !ua && !sa ? "block" : t});
            b.style(G.hd, {display: !ua && !c && !sa && ia && 1 < ia.length && na ? n : t});
            b.style(G.cc, {display: !ua && !c && !sa && ga && 1 < ga.length && oa ? n : t});
            ya();
            b.unblock(aa);
            U.visible && (c = V("capLeft"), d = V("capRight"), c = {
                left: Math.round(a.parseDimension(Ka.left.offsetWidth) + c.width),
                right: Math.round(a.parseDimension(Ka.right.offsetWidth) +
                    d.width)
            }, b.style(Ka.center, c))
        };
        U.audioMode = function (a) {
            void 0 !== a && a !== ua && (ua = !!a, ba());
            return ua
        };
        U.instreamMode = function (a) {
            void 0 !== a && a !== sa && (sa = !!a, b.style(G.cast, sa ? F : j));
            return sa
        };
        U.adMode = function (a) {
            if (void 0 !== a && a !== tb) {
                tb = !!a;
                if (a) {
                    var c = Ua, d = c.indexOf(G.elapsed);
                    -1 < d && c.splice(d, 1);
                    c = Ua;
                    d = c.indexOf(G.duration);
                    -1 < d && c.splice(d, 1)
                } else c = Ua, d = G.elapsed, -1 === c.indexOf(d) && c.push(d), c = Ua, d = G.duration, -1 === c.indexOf(d) && c.push(d);
                b.style([G.cast, G.elapsed, G.duration], a ? F : j);
                Za()
            }
            return tb
        };
        U.hideFullscreen = function (a) {
            void 0 !== a && a !== ub && (ub = !!a, ba());
            return ub
        };
        U.element = function () {
            return P
        };
        U.margin = function () {
            return parseInt(la.margin, 10)
        };
        U.height = function () {
            return Ha
        };
        U.show = function (c) {
            if (!U.visible || c)U.visible = !0, b.style(P, {display: "inline-block"}), Ja = a.bounds(P), ka(), b.block(aa), x(), ba(), clearTimeout(ab), ab = -1, ab = setTimeout(function () {
                b.style(P, {opacity: 1})
            }, 0)
        };
        U.showTemp = function () {
            this.visible || (P.style.opacity = 0, P.style.display = "inline-block")
        };
        U.hideTemp = function () {
            this.visible ||
            (P.style.display = t)
        };
        U.addCues = function (b) {
            a.foreach(b, function (a, b) {
                if (b.text) {
                    var c = b.begin, d = b.text;
                    if (/^[\d\.]+%?$/.test(c.toString())) {
                        var e = T("timeSliderCue"), f = G.timeSliderRail, j = {position: c, text: d, element: e};
                        e && f && (f.appendChild(e), e.addEventListener("mouseover", function () {
                            bb = j
                        }, !1), e.addEventListener("mouseout", function () {
                            bb = w
                        }, !1), eb.push(j))
                    }
                    ya()
                }
            })
        };
        U.hide = function () {
            U.visible && (U.visible = !1, b.style(P, {opacity: 0}), clearTimeout(ab), ab = -1, ab = setTimeout(function () {
                    b.style(P, {display: t})
                },
                250))
        };
        G = {};
        aa = e.id + "_controlbar";
        qa = ra = 0;
        P = O();
        P.id = aa;
        P.className = "jwcontrolbar";
        Z = e.skin;
        ca = Z.getComponentLayout("controlbar");
        ca || (ca = ta.layout);
        a.clearCss(Y());
        b.block(aa + "build");
        S();
        var Bb = T("capLeft"), Cb = T("capRight"), Db = T("background", {
            position: "absolute",
            left: V("capLeft").width,
            right: V("capRight").width,
            "background-repeat": "repeat-x"
        }, D);
        Db && P.appendChild(Db);
        Bb && P.appendChild(Bb);
        $a("left");
        $a("center");
        $a("right");
        P.appendChild(Ka.left);
        P.appendChild(Ka.center);
        P.appendChild(Ka.right);
        G.hd && (na = new c.menu("hd", aa + "_hd", Z, wa), f ? za(na, G.hd, R, "hd") : Pa(na, G.hd, R, qb), kb.hd = na);
        G.cc && (oa = new c.menu("cc", aa + "_cc", Z, Ra), f ? za(oa, G.cc, Ba, "cc") : Pa(oa, G.cc, Ba, pa), kb.cc = oa);
        G.mute && (G.volume && G.volume.vertical) && (fa = new c.overlay(aa + "_volumeoverlay", Z), fa.setContents(G.volume), Pa(fa, G.mute, Ca), kb.volume = fa);
        b.style(Ka.right, {right: V("capRight").width});
        Cb && P.appendChild(Cb);
        b.unblock(aa + "build");
        e.jwAddEventListener(d.JWPLAYER_MEDIA_TIME, A);
        e.jwAddEventListener(d.JWPLAYER_PLAYER_STATE, function (a) {
            switch (a.newstate) {
                case k.BUFFERING:
                case k.PLAYING:
                    G.timeSliderThumb &&
                    b.style(G.timeSliderThumb, {opacity: 1});
                    ma("play", D);
                    break;
                case k.PAUSED:
                    xa || ma("play", m);
                    break;
                case k.IDLE:
                    ma("play", m), G.timeSliderThumb && b.style(G.timeSliderThumb, {opacity: 0}), G.timeRail && (G.timeRail.className = "jwrail"), va(0), A({
                        position: 0,
                        duration: 0
                    })
            }
        });
        e.jwAddEventListener(d.JWPLAYER_PLAYLIST_ITEM, function (b) {
            if (!sa) {
                b = e.jwGetPlaylist()[b.index].tracks;
                var c = m, d = G.timeSliderRail;
                a.foreach(eb, function (a, b) {
                    d.removeChild(b.element)
                });
                eb.length = 0;
                if (a.typeOf(b) == y && !f)for (var j = 0; j < b.length; j++)if (!c &&
                    (b[j].file && b[j].kind && "thumbnails" == b[j].kind.toLowerCase()) && (hb.load(b[j].file), c = D), b[j].file && b[j].kind && "chapters" == b[j].kind.toLowerCase()) {
                    var h = b[j].file;
                    h ? a.ajax(h, da, ea, D) : eb.length = 0
                }
                c || hb.load()
            }
        });
        e.jwAddEventListener(d.JWPLAYER_MEDIA_MUTE, x);
        e.jwAddEventListener(d.JWPLAYER_MEDIA_VOLUME, x);
        e.jwAddEventListener(d.JWPLAYER_MEDIA_BUFFER, function (a) {
            va(a.bufferPercent / 100)
        });
        e.jwAddEventListener(d.JWPLAYER_FULLSCREEN, function (a) {
            ma("fullscreen", a.fullscreen);
            Za();
            U.visible && U.show(D)
        });
        e.jwAddEventListener(d.JWPLAYER_PLAYLIST_LOADED, z);
        e.jwAddEventListener(d.JWPLAYER_MEDIA_LEVELS, function (a) {
            ia = a.levels;
            if (!sa && ia && 1 < ia.length && na) {
                b.style(G.hd, j);
                na.clearOptions();
                for (var c = 0; c < ia.length; c++)na.addOption(ia[c].label, c);
                H(a)
            } else b.style(G.hd, F);
            ba()
        });
        e.jwAddEventListener(d.JWPLAYER_MEDIA_LEVEL_CHANGED, H);
        e.jwAddEventListener(d.JWPLAYER_CAPTIONS_LIST, function (a) {
            ga = a.tracks;
            if (!sa && ga && 1 < ga.length && oa) {
                b.style(G.cc, j);
                oa.clearOptions();
                for (var c = 0; c < ga.length; c++)oa.addOption(ga[c].label,
                    c);
                J(a)
            } else b.style(G.cc, F);
            ba()
        });
        e.jwAddEventListener(d.JWPLAYER_CAPTIONS_CHANGED, J);
        e.jwAddEventListener(d.JWPLAYER_RESIZE, function () {
            Ja = a.bounds(P);
            0 < Ja.width && U.show(D)
        });
        e.jwAddEventListener(d.JWPLAYER_CAST_AVAILABLE, W);
        e.jwAddEventListener(d.JWPLAYER_CAST_SESSION, E);
        f || (P.addEventListener("mouseover", function () {
            I.addEventListener("mousedown", Da, m)
        }, !1), P.addEventListener("mouseout", function () {
            I.removeEventListener("mousedown", Da);
            L.onselectstart = null
        }, !1));
        setTimeout(x, 0);
        z();
        U.visible = !1;
        W({available: s})
    };
    b("span.jwcontrolbar", {position: "absolute", margin: "auto", opacity: 0, display: t});
    b("span.jwcontrolbar span", {height: h});
    a.dragStyle("span.jwcontrolbar span", t);
    b("span.jwcontrolbar .jwgroup", {display: "inline"});
    b("span.jwcontrolbar span, span.jwcontrolbar .jwgroup button,span.jwcontrolbar .jwleft", {
        position: "relative",
        "float": "left"
    });
    b("span.jwcontrolbar .jwright", {position: "relative", "float": "right"});
    b("span.jwcontrolbar .jwcenter", {position: "absolute"});
    b("span.jwcontrolbar buttoncontainer,span.jwcontrolbar button",
        {display: "inline-block", height: h, border: t, cursor: "pointer"});
    b("span.jwcontrolbar .jwcapRight,span.jwcontrolbar .jwtimeSliderCapRight,span.jwcontrolbar .jwvolumeCapRight", {
        right: 0,
        position: "absolute"
    });
    b("span.jwcontrolbar .jwcapBottom", {bottom: 0, position: "absolute"});
    b("span.jwcontrolbar .jwtime", {position: "absolute", height: h, width: h, left: 0});
    b("span.jwcontrolbar .jwthumb", {position: "absolute", height: h, cursor: "pointer"});
    b("span.jwcontrolbar .jwrail", {position: "absolute", cursor: "pointer"});
    b("span.jwcontrolbar .jwrailgroup",
        {position: "absolute", width: h});
    b("span.jwcontrolbar .jwrailgroup span", {position: "absolute"});
    b("span.jwcontrolbar .jwdivider+.jwdivider", {display: t});
    b("span.jwcontrolbar .jwtext", {padding: "0 5px", "text-align": "center"});
    b("span.jwcontrolbar .jwcast", {display: t});
    b("span.jwcontrolbar .jwcast.jwcancast", {display: "block"});
    b("span.jwcontrolbar .jwalt", {display: t, overflow: "hidden"});
    b("span.jwcontrolbar .jwalt", {position: "absolute", left: 0, right: 0, "text-align": "left"}, D);
    b("span.jwcontrolbar .jwoverlaytext",
        {padding: 3, "text-align": "center"});
    b("span.jwcontrolbar .jwvertical *", {display: "block"});
    b("span.jwcontrolbar .jwvertical .jwvolumeProgress", {height: "auto"}, D);
    b("span.jwcontrolbar .jwprogressOverflow", {position: "absolute", overflow: "hidden"});
    e("span.jwcontrolbar", "opacity .25s, background .25s, visibility .25s");
    e("span.jwcontrolbar button", "opacity .25s, background .25s, visibility .25s");
    e("span.jwcontrolbar .jwtoggling", t)
})(window.jwplayer);
(function (g) {
    var l = g.utils, c = g.events, a = c.state, d = g.playlist, k = !0, b = !1;
    g.html5.controller = function (e, f) {
        function C() {
            return e.getVideo()
        }

        function p(a) {
            K.sendEvent(a.type, a)
        }

        function q(a) {
            t(k);
            switch (l.typeOf(a)) {
                case "string":
                    var b = new d.loader;
                    b.addEventListener(c.JWPLAYER_PLAYLIST_LOADED, function (a) {
                        q(a.playlist)
                    });
                    b.addEventListener(c.JWPLAYER_ERROR, function (a) {
                        q([]);
                        a.message = "Could not load playlist: " + a.message;
                        p(a)
                    });
                    b.load(a);
                    break;
                case "object":
                case "array":
                    e.setPlaylist(new g.playlist(a));
                    break;
                case "number":
                    e.setItem(a)
            }
        }

        function v(d) {
            l.exists(d) || (d = k);
            if (!d)return h();
            try {
                0 <= j && (q(j), j = -1);
                if (!y && (y = k, K.sendEvent(c.JWPLAYER_MEDIA_BEFOREPLAY), y = b, L)) {
                    L = b;
                    s = null;
                    return
                }
                if (e.state == a.IDLE) {
                    if (0 === e.playlist.length)return b;
                    C().load(e.playlist[e.item])
                } else e.state == a.PAUSED && C().play();
                return k
            } catch (f) {
                K.sendEvent(c.JWPLAYER_ERROR, f), s = null
            }
            return b
        }

        function t(d) {
            s = null;
            try {
                return e.state != a.IDLE ? C().stop() : d || (I = k), y && (L = k), k
            } catch (f) {
                K.sendEvent(c.JWPLAYER_ERROR, f)
            }
            return b
        }

        function h(d) {
            s =
                null;
            l.exists(d) || (d = k);
            if (!d)return v();
            try {
                switch (e.state) {
                    case a.PLAYING:
                    case a.BUFFERING:
                        C().pause();
                        break;
                    default:
                        y && (L = k)
                }
                return k
            } catch (f) {
                K.sendEvent(c.JWPLAYER_ERROR, f)
            }
            return b
        }

        function m(a) {
            l.css.block(e.id + "_next");
            q(a);
            v();
            l.css.unblock(e.id + "_next")
        }

        function D() {
            m(e.item + 1)
        }

        function w() {
            e.state == a.IDLE && (I ? I = b : (s = w, e.repeat ? D() : e.item == e.playlist.length - 1 ? (j = 0, t(k), setTimeout(function () {
                K.sendEvent(c.JWPLAYER_PLAYLIST_COMPLETE)
            }, 0)) : D()))
        }

        function n(a) {
            return function () {
                r ? F(a, arguments) :
                    B.push({method: a, arguments: arguments})
            }
        }

        function F(a, b) {
            var c = [], d;
            for (d = 0; d < b.length; d++)c.push(b[d]);
            a.apply(this, c)
        }

        var r = b, j = -1, y = b, s, I = b, L, B = [], K = l.extend_new(this, new c.eventdispatcher(e.id, e.config.debug));
        this.play = n(v);
        this.pause = n(h);
        this.seek = n(function (b) {
            e.state != a.PLAYING && v(k);
            C().seek(b)
        });
        this.stop = function () {
            e.state == a.IDLE && (I = k);
            n(t)()
        };
        this.load = n(q);
        this.next = n(D);
        this.prev = n(function () {
            m(e.item - 1)
        });
        this.item = n(m);
        this.setVolume = n(e.setVolume);
        this.setMute = n(e.setMute);
        this.setFullscreen =
            n(function (a) {
                f.fullscreen(a)
            });
        this.detachMedia = function () {
            try {
                return e.getVideo().detachMedia()
            } catch (a) {
                return null
            }
        };
        this.attachMedia = function (a) {
            try {
                e.getVideo().attachMedia(a), "function" == typeof s && s()
            } catch (b) {
                return null
            }
        };
        this.setCurrentQuality = n(function (a) {
            C().setCurrentQuality(a)
        });
        this.getCurrentQuality = function () {
            return C() ? C().getCurrentQuality() : -1
        };
        this.getQualityLevels = function () {
            return C() ? C().getQualityLevels() : null
        };
        this.setCurrentCaptions = n(function (a) {
            f.setCurrentCaptions(a)
        });
        this.getCurrentCaptions = function () {
            return f.getCurrentCaptions()
        };
        this.getCaptionsList = function () {
            return f.getCaptionsList()
        };
        this.checkBeforePlay = function () {
            return y
        };
        this.playerReady = function (a) {
            if (!r) {
                f.completeSetup();
                K.sendEvent(a.type, a);
                g.utils.exists(g.playerReady) && g.playerReady(a);
                e.addGlobalListener(p);
                f.addGlobalListener(p);
                K.sendEvent(g.events.JWPLAYER_PLAYLIST_LOADED, {playlist: g(e.id).getPlaylist()});
                K.sendEvent(g.events.JWPLAYER_PLAYLIST_ITEM, {index: e.item});
                q();
                e.autostart && !l.isMobile() &&
                v();
                for (r = k; 0 < B.length;)a = B.shift(), F(a.method, a.arguments)
            }
        };
        e.addEventListener(c.JWPLAYER_MEDIA_BUFFER_FULL, function () {
            C().play()
        });
        e.addEventListener(c.JWPLAYER_MEDIA_COMPLETE, function () {
            setTimeout(w, 25)
        });
        e.addEventListener(c.JWPLAYER_MEDIA_ERROR, function (a) {
            a = l.extend_new({}, a);
            a.type = c.JWPLAYER_ERROR;
            K.sendEvent(a.type, a)
        })
    }
})(jwplayer);
(function (g) {
    g.html5.defaultskin = function () {
        return g.utils.parseXML('\x3c?xml version\x3d"1.0" ?\x3e\x3cskin author\x3d"JW Player" name\x3d"Six" target\x3d"6.7" version\x3d"3.0"\x3e\x3ccomponents\x3e\x3ccomponent name\x3d"controlbar"\x3e\x3csettings\x3e\x3csetting name\x3d"margin" value\x3d"10"/\x3e\x3csetting name\x3d"maxwidth" value\x3d"800"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xd2d2d2"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAANklEQVR4AWMUFRW/x2RiYqLI9O3bNwam////MzAxAAGcAImBWf9RuRAxnFyEUQgDCLKATLCDAFb+JfgLDLOxAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAAr0lEQVR4AWNhAAJRUXEFIFUOxNZAzMOABFiAkkpAeh0fH5+IgoKCKBsQoCgA4lJeXl5ReXl5qb9//zJ8+/aNAV2Btbi4uOifP39gYhgKeFiBAEjjUAAFlCn4/5+gCf9pbwVhNwxhKxAm/KdDZA16E778/v37DwsLKwsuBUdfvXopISUlLYpLQc+vX78snz17yigqKibAAgQoCuTlFe4+fPggCKio9OnTJzZAMW5kBQAEFD9DdqDrQQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAArklEQVR4Ad2TMQrCQBBF/y5rYykEa++QxibRK3gr0dt4BPUSLiTbKMYUSlgt3IFxyogJsRHFB6/7/A+7jIqiYYZnvLgV56IzcRyPUOMuOOcGVVWNAcxUmk4ZNZRS0Fojz/O9936lkmTCaICIgrV2Z9CCMaYHoK/RQWfAMHcEAP7QxPsNAP/BBDN/+7N+uoEoEIBba0NRHM8A1i8vSUJZni4hhAOAZdPxXsWNuBCzB0E+V9jBVxF8AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAtElEQVR4AWOgLRgFnAyiDPwMzMRrkHuwuCSdQZ14Tbpv9v/cf2UN8ZoMHu5/uP/l/h9EazK4sx8Cn+7/RpQmg+v74RBo11eCmgwu7keFd/d/wavJ4PR+THhj/6f9N1ZODWTgxKLhyH7scMvK3iCsGvbtx4Tz1oZn4HTSjv2ocObakAy8nt60HwGnrA3KIBisa/dD4IS1/lDFBJLGiv0r9ves9YUpJpz4Ji72hiomNXnTH4wCAAxXpSnKMgKaAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAtElEQVR4AWOgLRgFPAwyDCIMLMRr0Hhws6SLwYR4TTZv/v/8f+UZ8ZocHv5/+P/l/x9Ea3K48x8Cn/7/RpQmh+v/4RBo11eCmhwu/keFd/9/wavJ4fR/THjj/6f/Nx5OzWHgwaLhyH/scMuj3lysGvb9x4Tznod343TSjv+ocObzkG68nt70HwGnPA/qJhisa/9D4ITn/lDFBJLGiv8r/vc894UpJpz4Jt7yhiomNXnTH4wCAHC8wQF60KqlAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"pauseButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAYElEQVR4AWOgNRgFPAwqDAZAqAJkofPhgBFJg8r/2VDBVIY7GHwoYEG24RmchcnHpoHhDxDj4WNq+I0m+ZvqGn6hSf6iuoafaJI/SbaB7hroHw9f/sBZ6HzSkzdtwSgAADNtJoABsotOAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"pauseButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAQAAACcJxZuAAAAWklEQVR4AWOgNRgFAgwGDA5AaABkofOxAoP/UMBggMGHAxZkG57BWeh87BoY/gAxHj6mht9okr+pruEXmuQvqmv4iSb5k2Qb6K6B/vHw4Q+chc4nPXnTFowCADYgMi8+iyldAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"prevButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAQAAACLBYanAAAAmElEQVR4AWMYMDAKeBgkgBgGmBn4GUQZONEVqfzfz6ACV6Bekv5gMYMcuiKDR/sZDGAKrqz5sf/lfgZdDEW39jPYQxR82/94/y0gZDDAUHR+f3rpjZWf99/efx4CsSk6sj+pbMvKI/vhEJuiXWDrQjNmr921HwyxKVoPd3hAxsS16/evx+JwleUoQeCbMRkRBIQDk/5gFAAAvD5I9xunLg8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"prevButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAQAAACLBYanAAAAmUlEQVR4AWMYMDAKBBgUgBgGWBhEGGQYeNAVGfz/z2AAV2BS0vXgJoMGuiKHR/8ZHGAKrjz78f/lfwYbDEW3/jOEQBR8+//4/y0gZHDAUHT+f/qcGw8//7/9/zwEYlN05H/S3C2PjvyHQ2yKdoGtC+2e/XzXfzDEpmg93OEB3ROfr/+/HovDDZajBIFv9+RbDBpEByb9wSgAAHeuVc8xgA8jAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"nextButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAQAAABgMj2kAAAAlUlEQVR4AWOgAxgFnAyiDPwMzHA+D4MEEKMAuQeLS9IZ1OHKVP7vZ1BBVaL7cv+P/VfWwJUZPNrPYICqxODW/lv7H+//BlNmfwtTyfn9EHh7/+f9N1aml57HVHJkPwJuWZlUdgRTya79EDh7bWgGyKJdGEp01+9fv3/i2oAMmHPXYyiRm7zYNwPZ08vBniYcdDQHowAA/MZI93f1cSkAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"nextButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAQAAABgMj2kAAAAlUlEQVR4AWOgAxgFPAwyDCIMLHC+AIMCEKMAjQc3S7oYTODKDP7/ZzBAVWLz8v+P/1eewZU5PPrP4ICqxOHW/1v/H///BlMWcgtTyfn/EHj7/+f/Nx6mzzmPqeTIfwTc8ihp7hFMJbv+Q+Ds56HdIIt2YSixWf9//f+JzwO6Yc5dj6FEY/It325kTy8He5pw0NEcjAIAWP9Vz4mR7dgAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"elapsedBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAD0lEQVQoU2NgGAWjYKQAAALuAAGL6/H9AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"durationBackground" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAAD0lEQVQoU2NgGAWjYKQAAALuAAGL6/H9AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAALklEQVQI12NgIBmIior/ZxIVFWNgAgI4wcjAxMgI4zIyMkJYYMUM////5yXJCgBxnwX/1bpOMAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAnUlEQVR42t3NSwrCMBSF4TsQBHHaaklJKRTalKZJ+lAXoTPBDTlyUYprKo6PN4F2D3rgm/yQG/rfRdHuwp5smsNdCImiKKFUAx/OaSpR1xpNYwKK4/2rLBXa1s1CnIxxsLZbhGhtD+eGBSWJePt7fX9YUFXVVylzdN2IYTgGBGCVZfmDQWuDcTyB/ACsOdz8Kf7jQ/P8C7ZhW/rlfQGDz0pa/ncctQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAn0lEQVR42t3MTwqCQBTH8bcIgmirJYoiCOowzh8ds0PULjpRqw5VdCZr/WueMJfwC5/NezOP1lcUHWbv5V0o1LYSVVUjTXP4xYM4KTWYEB2ybFlcSSmLoK4F4vj4JmN6BFpbHs5krUNgzMDDLw3DCQHfTZL0Q85NYH0/Is9LNI240Tie0XUaRVGyJ4AN+Rs//qKUuQPYEgdg7+2WF2voDzqVSl5A2koAAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBuffer" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAYAAADtlXTHAAAAKElEQVQI12NgIA/IyMj9Z2JhYWFgAgIGJkZGRhDBwMDEwMAI5TKQDwCHIAF/C8ws/gAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderBufferCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAY0lEQVR42uXJyxGAIAxFUfrgI5CgzajdqlWxQffxaeiCzJyZ5MYMNtb6zTl/OhfuP2BZQ4h1mpLEmOWPCMd3pESSM2vE0YiKdBqJuDEXUT0yzydIp7GUZYMKAhr7Y4cLHjPGvMB5JcRMsOVwAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderBufferCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAYElEQVQoz+WLyxGAIAwF6YM/CdqMlCtdcRHvMSIw9sCb2ctuIsQaU8pUpfQppT6mdC6QtZ6McYUPUpMhIHkP9EYOuUmASAOOV5OIkQYAWLvc6Mf3HuNOncKkIW8mT7HOHpUUJcPzmTX0AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAeCAQAAABHnLxMAAAAH0lEQVQI12NgIAT+/2e6x8D0k4HpOxj9AJM/CWpjAACWQgi68LWdTgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAQAAABOdxw2AAAARUlEQVQYV2NkgANG+jP/+zJkMtgCmf99vi38KPQTJPpq6xsvqIKznxh4ocwjCOaebQyeUOZmX4YFDEJQw9b4QQ2DAfoyAVkTEmC7RwxJAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"timeSliderProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAQAAABOdxw2AAAASklEQVQYV8XLIRKAMAxE0R4QbhrXoQqJxWJxCGZqaKs/m1yi+80TSUqzRmNjCd48jMoqXnhvEU+iTzyImrgT+UFG1exv1q2YY95+oTIxx/xENX8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"timeSliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAQAAACP8FaaAAABMElEQVR4AeWSv0rzYBjFfy1NlU5RKC3dCjqZDwRXEapOuuik+BfbNLdUeg86pHSrm1Z3G3w7VAdbB+sNFFKIZ1FCjTjL95wQOOd3IC/vE/6vSZEmQ5Z5KUtGLhWjshYLbHCIKx2wLmcp/cJzOFTb/vtoGk7D8bDtc4GjNP2J/+ENzFv0FBnpORpHA4OnVBWwKFANTD96jKkfBYYqRVFyVC5bCr/pqsWmKDZHd8Okwv2IY1HyuL0wqRCE1EUp/lR4mFAT1XNym/iJ7pBTCpBnp5l4yGaLXVFsVqh1zCzuGGoiNuQoUcG7NjPYU1oSxVKrzDZuw+++BtPe5Oal4eOypdQWRVfNoswa+5xTl87YkysrjW3DpsQyDquSw5KcjXB83TlFeYoU9LbltO7ff5i/Mh+pOuncDFLYKwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"timeSliderCue" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAcUlEQVQ4y2NgGAWjYBTgBaKi4llAfASKs0jWbGNj96S1tf03CIPYJBkCsrW6uu53bm7+fxAGsUFiJBmQlpbxOzMz5z8Ig9hAsaMkecHIyORJUlLq78TElN8gNlAsm9RwyAbZCsSHgDhzNFmNglGAHwAAo/gvURVBmFAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"hdButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABf0lEQVR42u2VvUoDQRSFA0awMIVCsv+z/1oE8yOE9MYmtb2P4AspSOyECFZqtU9gbZvK6CNoNZ6zMMuSQpxdEAJbHC737pz59mbmblpSyn9XA22gDXRLod2uMYfWkKwh+uc60LVtO9J1RWXBn4N1oNL3QxkEEcwuzYybOWMh07QJ4xqK/ryuBQ3DWEZRoowdx3FfhAgkI3NVp7IsO5xMpnPDsFae59NHvzaURgWlWpblPEOSkbmqQzfQK2DT8fj0HB0rrz40jlOqgA4Go1m/f3LJWIYC8uQ4nkSX94vF3S5qX8qrDU2SlCqgOMMrAK4Zy1B27nlCIj4i34G+lbcC9ChXuSNeFEbmpZe5RZdv+BU4ZjM8V159aJoe5yp3JIS/eaZcv7dcPhzghc6Qr3DZlLc6FOelRoTn9OvI4DKxw2rQXs/84KzRyLPhTSSQGzIyV2OBdYzIYz4rgKxjn88/Q4fD0QUNNT6BBL5zH50Pfhvahzo1RH+7+WtroA10O6E/bVCWtAEB8p4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"hdButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAQAAAB6Dt0qAAABPUlEQVR4Ae2SsUrDUBiF/0EFfYK8Rl4g5BUUHGILRWghUHAQHJzaUcjSgB1EtCApliDoUApSKggZRFSUQsVAawspElz1OunxhwtZcm0Ht9LzQfLByVluLs145lkkjXQyyPwTg3uNv0tFKzuR+MAkIlF2eJyKPhBjRBMZYyBIp1SMEV6nMgIZlIoZQkJuIw7RiMll36XN5e31k0AkramYdiGhQjPsohlSgT13GTy8WXurR0mrmt5BQla+ZJ/mS2SxF8+GT7joLRRvvmWrnAaQULbi1R4rHmXZi/VhAO9laev6R7bKaQcSsv3+Lfw+2ey548B/t/Yz3pVs1dMWJORW4xaqfEzsfEwrO2te5ytpFVPjHJJntPnZ5jc708M9muwS1c/Ra8LHNGrKK6FlnENRxyQOPjcc0v5z/Wc68/wCXWlzVKUYIC4AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAABzUlEQVR42u1Uu0oDQRQVTCMopMjmtZvdJPswKCQbC6tYCEqMBDUGrf2NCDF+gmXEyiZWiTb+gMTGxtrGwmh8IOKjUoLjueNGfCBk10rYC4eZOey5Z+7M3O1zww033Og5BCGQA9oAcw6uz9kxbYfDIpMk2TGg58Z2TJmixFg0GueIRBQWDIZ5BX5/kIli5AcfCIS6PIH0nLdlGoupLB7XmCxHyegymTSXa7UdoVBYHBVFqQEDMjozzfRCvd7w5fNzKfD74ElHevumEHKEQiJD4nmYz4JvwWirWt30YiO36fTYNKotgj8Hv1GprPvAP1obtm+qqjqBhC/l8toAkh18uqs7rK8ZY/0Yj8AT90o80LG09k01TQe48Bnw4O6asqzw5DjGXVR2Qt9iPLb4Dh07NnGvqhq0jkwNQvehTCYSI0tIeIWqtq1jfAA/bhiJFcxvcPzVUmlVwPwJVZLWvqmuD3MgGYlbGHPN5qE3m52JYU0PifhTGEwRn8lMaFjvYVNdrXNT7BjGX1tGkvgL/dYyxMv0vTNTahH02ocY1cBEpTbgeL8z41eeNKSn6+jZNJUyiyT4y28Q+gvK07MpWsEDDAJDzsH1nj433HDjX8YbqHFYmhICTLsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"ccButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAQAAAB6Dt0qAAABWElEQVR4AWMY5mAUsDJIMBgy2DE44IR2QHkJoDoMINHQ/eTbl//44JNvDd1AzRjA8N63p/+f4IVP/9/7BrQZA9g9/H+fIHz4H+hsDOBw6z8EnvqZsJ6vznDCkke3/h/9Hr2ap9Z08oqnMFkGByxaL/+HwMiVafNufFl+hWvmiR+BC/IX3/yy4Bz/nJN/wbLYtZ75D4In/3GV7n56/v+1/zd/H/rGkHPgJYh94/fp/2B57FqP/AfBg/84SlY/O/L/8P+JLze/Z8je8PrI/0P/Jrza+Rcsj13r3v8guO9/+LKEhZu+9lzmn7zrl++c9BWbv7WfE5iy/S9YHrvWbf8hcP+P0FVsVSo9y57s+L/vm/9ytiqtvhVANlgWq1a79f8hcDPQR9eBAbIHyN7y/yyQfQnEhkCskWM4/9uq/4TgfKxJQiK6e/a3pf/xwZlfo4AJkZLkP6zBKAAAGMt/2TouFxQAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAABZ0lEQVR4AWMYjGAUMDEwMzCSpoUxju+kDQMXAW1AaRYGdiCGsFjchd/OWmELFMGrhd1a4UUTAy+QzXLSdKMhA1+Z/tuF0qIMTLjdz9tp+27ly/0M4kBbWGdqv1/gJcMgdLz6YAA2u9gYhBgkGGR2pH3ZfWf/1f0Mshdsk8UZBDYlXMthEJhqfbuVgQ9Tk9D//SD4dv/F/eeBkEHuaNjjegYBT/k78xiEOcWuLWIQxtQkcWI/MmSQYhC/shioUPjUAhB5cgFWTQf3I0MGaQ6JwyBNIofBmsAkpvN27UeGDPI349dXMghEKu2byyAsKLZ/IYMQzoBoTNm4e8v+LcCA2GBoKsQgcDFjcRqDwBr7dU0MfLiDnCfaavHKdaAgZ2ZgXWd4cZ6eJIPQ5YYZXgzseCNXQ35GPSRyt+lVaTLwTTA9NJdTmIGJ2GTEzMCSKPZifoklpj14jTDj6jJj4CI5nYOzxkCCUQAAMVp+znQAUSsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"muteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAABfUlEQVR4AWMYjGAUsDJwMLCQpoXRTnZZIoM0AzMBZQzcDCIMXEAWC5Dk0tZ6fK0uFyiCBzAziCh5Xd7PoAJkc64I7QxhUPWLf/yQ3xjoTByAjUExrvzB+5f/GewYOBn4cgOf3ddxYNDftH1OCza7BBgMGBwYfCas/fjnzv+r/xn8NiXYGTJoTZ25ZymDTn7W8UMMapiaDP6Dwdv/F/+fB0KGgJXtF3YyaGp7XLrLYMhqce4hgyGmJocT/5EhgxuD7ZknDEYMJgcfMBgzGB8AkZiaDv5HhgzuLPa7nwBNN90N1gQmMZ236z8yZAjcN3H+JgZNM+8tQOdxWm17yGCAMyBSV6//s+X/lv8Mvv2BChoM2hsXd89n0GnKn7+PQRV3kCvYlsx6v+4/gy0DOwNvU8SJO1LWDAb791bUMgjji1xhMc/u3QzKoMid6hPtxaCakrbzDqsBAytxyYgZmFQ5bfXu3Q1Lx7QHrxHykgWRDFJAA0gCLAzsQC0DCUYBAC3AlmbNhvr6AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAAAiklEQVR4AWMYWWAUMDKwMLADMUla2K0VnjUx8BKvhYmBt83m3cp3+xnEiFHOxiDEIMEgsz3l6+5H++/sB7KJAEL/94Pgu/1X918GQuI0SZzcjwSJ1XRgPxIk1nnb9iNBoCYSAqI6ZdXOtfvXAjWREuQ84VZzVi4DBjmJkassN7GegZe8ZDQSwSgAAJ/LQok1XVtuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"unmuteButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAQAAACY0sZTAAAAjUlEQVR4AWMYWWAUMDJwM4gwcJGihZlBRMnr0l4GZeK1sDEoxpQ+eP/uP4MVMcoFGAwYHBh8+ld/+vPo/53/QDYRwOA/GLz7f/X/ZSAkTpPDyf9IkFhNB/4jQWKdt+0/EgRqIiEgElct/7P2/1qgJlKCXMG6eNL7Zf8ZLEmLXGFhj5bdDMrkJaORCEYBAOZEUGMjl+JZAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"castButtonOff" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAQAAAC8EZeQAAABOElEQVQoz2NgYGDgYJBgUMALJYBqgEDiP0EAVAoECv//vyIAgaZCFL74z2CBw1qLFyBZsELp//+f/meQY8AOFMCyYIX8J9ovnmIQwa3wIVghO4MogzzMX9gV3gMrFPl0++aWhUmc0gycDEzYFd4CKxT9/uLe/2f/H1zq9GPgZ2DGpvAaWCEfg1Zc9PptF//e+r40h0EAw1SgwksQE7/cOzFfz6Ep/9Tncz8mRDJwYyo8B7X61ZX/d16VRTVknP198JGKEtCtQgyyiHD8//80WCGvoO6M6Ud/H3vj7HZo5Yn/c9oZJJ9uRo3A42CFwq8Pergv6jv6f/l6d697vzddZlDcmHrr/xEUCIprsf//jx1j07z7aN9HLu2Xlw/+lpVl4GWQwkw9HAxiwFjhBQa7GDAERIAk1qAHAOge4gtynPL2AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"castButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAABy0lEQVQ4y2NggAAOIJYAYgUKsATUHDCQENnz/z+lGGooGCiABESXPaAIQ12KbOB9kKAFiV61AOmD6oUbKA129tJ7IEE5BtKAApJeuIH8ApNPtAvPOHsKyBYhy8Ald+EGsgOxKBDLo8cUSQYuug03UER406fbggtubuEtX5jEyM4pDRTjBGImUgwUXngLbqCo8LbvL4SX3v8vvPrFf6GlDy9xp3b6gYIBiJmJNnDBDbiBfECsxeGeEC3Qunmb8Lyrf4UX3/nOW7U0ByguQIRLIQbOv4bkwi1f7gEjZT6Lkr4Dd1JLvvDMC5+F51z+wZM9MRIoz02UgXOvoHj5FSgMgN5+xRleFsUd35ghPPfyb6EpJx4xS6sqQcNUCIhlsaVDsIFzLsEN5GXkFdTlK503XXjmud9CM869YTV0dhOYeGSl8OyL//kqFrUD1UgKrXy6GV+2E551AW6gsNDa1wfZTD3c+aqW9AnPOv9foGn9ejYTdy/hFY9/C3bvvgxUo8jXtDFVGJi9gJbixLC8LAayQWjGmWMMLGyawssePhKeeuIjIwe3tvDaV5eFZ5z+zSwmB/IqLxBLEVPagAgxaA7hhSZyMWjsi0DZRCd2ANcuONhZFnJlAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA5ElEQVR4Ae3KsUrzYBhH8RPIFAJ5O3/ig5COgVyHW7N09x7aXSrESafuHeLi0A6iGEX+Y3edLMqnpe7egfbFMZCMXfo762GH9gIijIx8W0rcMQ9tU/3oL9KOGXdYLOuNfOS0CrGLyVr/fZ1zMht9a6VXqV6JjFa9efmiZ43PDoqnCqMh8BGS4IjpT8vTMYY7NiIaooHhsNnovqRPTA9HSOCjwT6ro+Jy8qV3PZT0aJUt9VavdadbnY9IaJUv9KiF5jqZYIQd87V80/rfAEdAq/RKvht9VEPrmmNS8m0ZRkTAzuz9AlNJVl+tEWchAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"fullscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA5klEQVR4Ae3MIUzDUACE4b8VlU1FaQWEBPlQna+oxqHm0dTicShQcyWZwSBWEgohEIKcB8UKAZbhcZXHmsw1eZUz+357OdZow8HHkJItSwiwcodmUWuFpO852s2nzUJtZFh5mPNyrq+23nE4Lv4007templIsYon1ZtedXKzkz/XGDocXBw8QiICBqPq9JJ9ogODT4d/aIgw4+KhYkBAzBbe6qLD/NR7+UX5q089VsRYpVN9NHPd605nBSFWWaknlZroqMTg9Yyv1TZqto+JcLBKrtR2q+96aHCxCkjIlqUYfBzWZuMfAHJlDLF+xFEAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"normalscreenButton" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA50lEQVR4Ae3KsU6DUBhA4QMNAtsNFcJLyKBx8mXYmNxkculDuJG4OOOmcbr/QNS1xKaJqxJjTJpUk84KuHW4d+nY76yHvV1zxlx8AiZYeJeHBKgmX14wte1qXZ1l98VG/8iyJMQo+ZJVvdGddPohx8co7eRThvWmQOFa5ncZWtSnRwQ4GEVvMvQh62oW2+YDItK+BIW3PTt4KJJxiPrVyJnF39Wv/EdkmQlOsqd6IUOkGLmou+JVv0ifdfabfKVbaXVTt0KCUfhczmWur4rj7LFCYTRhelte5yiC8xgPbHuIj4sztrdbfxJjV3K8mZ7yAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"normalscreenButtonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAQAAACC7ibdAAAA7ElEQVR4Ae3Sr07DUBzF8e+daKaaiaYNAoH8uc43pK+AmsHimETxDAQBQZVkCQhAUFMBewkUCG4W/ib4haTykCYzmFszuc+xX3lYtw3HAEdEQsqQHvGekWKz6qFh3Jfbl9+Znta/WmrekBFU/GjRLvWuN11UJASVXh/yetVxjRH1xM/qNm+3D0lxBOVP6vaiTz8xBgSNyCkpKTBiHP84YoyiC8gZETSY2LfXCjlBjnRretk26kZJUISd1I+679YbJ7NqoTvd6Ly9FQVB2ay51pX262x65jGChoyPmoMKI901YujLMxKi1TnXa+MPEjlkhvYbWGMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAeCAYAAADpYKT6AAAAFElEQVR42mP4//8/AwwzjHIGhgMAcFgNAkNCQTAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAASElEQVRYCe3BsQ3AMAwDQRIW4Cqlkf031AZKVkg6An8nAQCAH3zOPQpQe28lqJcS1FpLCcpWhJKsBGVbCaq7lcAzcwkAAHz0AE0SB2llBfTtAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAeElEQVR42tWKQQqDMBBFB3cFt9oQQ0wniW51b5f2ti30ZLX1AN+ZQA/hhwfz/zw6eZrmmoWn8NUyCh9jLJzzoLY1L2sd+v6GEBikmh7MCTHmYvyYI1LKBeo69/Y+SBkKtCz3SaztPxKAal0fs5ry2Emjo3ARajpNDtqHL/b2HUUVAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRailCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAYAAAALvL+DAAAAeUlEQVQYV9WKOw7CMBBEV3RItAmWYzlmbUMLfSjDbUHiZASFfpj1LTLSW+18RLarrjt+yZPUFoQQ4ZwHgw+5SEqKcTzB+4C+dy/JuUK1wAouVimlwlDNtvgxOMOIMWEYwrsFZtgu03S/Cp/Vmnl+3ADshOdA9s1sSn8goC/6ib5oHgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAQAAADwIURrAAAALElEQVRIx2NgGAWjYBSMRMD4/z/1DWW5TQOXsnwdMoZ+GyouHQWjYBSMTAAAnO8GxIQ7mhMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAQAAAChtXcIAAAANUlEQVQY02NkgAJGOjH+9zEkAxm/JrzJ/wYSufTxLx9Y6shHBghj10SGPKji9RMYkhjp6EIAcaIN1SJ2FnYAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeProgressCapRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAeCAQAAAChtXcIAAAANklEQVQYV2NgoCP4//F/H5hx5/+z/78mABnn/5//f+kzkHHkPxCCGLv+A+FEIGP9p/UgFXQFAHkZGwN2fDIsAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"display"\x3e\x3csettings\x3e\x3csetting name\x3d"bufferrotation" value\x3d"90"/\x3e\x3csetting name\x3d"bufferinterval" value\x3d"125"/\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAYklEQVR4Ae2VwQ2AMAwD/cgKVRbJuAyH+mOBfMMQyBKCuwWsxoaLtfKQkaiqtAZ0t5yEzMSMOUCa15+IAGZqgO+AFTFTSmZFnyyZv+kfjEYH+ABlIhz7Cx4n4GROtPd5ycgNe0AqrojABCoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"backgroundOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAA0CAYAAACQGfi1AAAAY0lEQVR4Ae2VsQ2AQAwDXWSFF91Pkf1rxkAZIm0YAllCcF7Aiu3/i7WOU0ZFZm6rQXfLaiCzYkbuC+b1EWHATM3iHbAiZkrJrIiSP/ObQjQ6gAcg8w/AsV/w2AEmE1HVVTLqBmJaKtrlUvCnAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA4UlEQVR4Ae2XwUoDMRRFT17GTscIMoWOqwF1WUSFIv6Autf/X5TuxG6FBkOeHfAHpk+GLnI+4HBzLzyI44/l8uoBeAVugJqRuIMA4L1t24+u685DCGci4hhJBdwPkr7vL3POLsaIqnKM6G2xaJuUksPAILquqtlMFayiuYhzYDMJIygi+2qonloi0CkTldXK/NOXXVYrZRs6UgyUjsrxL6d28sP2b4n0xJ62z1nVHbCutolx/4MRH8LFt6o+Nc28tqTyq9Xd5273RUrpVsSL915gvNCt188MbLebR+Dl2K/oL+WmRveI4jXNAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeftOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA5ElEQVR4Ae2XMU7DQBBF346sIDAUDoqprNBCm4Im3IPcAE7EEbgId6BF6akQjheZGTYSF7DXQi7mSdM+zf4vjbSBP1arqy2wA26BUwZSJAHAY1VVT3VdX5RluZDEYBGwPUqaprlUVYkxYmaMEe2Wy+q873shgwK4KYrFiRnkis5EgkCeScjHRQNaw2xuG4HNYiNvzeufPmxvzcPOz8jIwDPy4++n9t8P22Qb2cye1qqahhAkt7W3GLvvKep/+Uyo/igYY0fW6+vXtv16/kgcDl2nagkYOmGzuePIfv9+DzyM/Yr+AujSfWZZzzLnAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA20lEQVR4Ae2XQUrEQBBFX4e29QJDVgFv4Cb7wSt4Ps8wLtw5B3A97mfmAFlkkbaZMpAynkBiBRGpd4Ci6j/4UGGzqR9ZjgBn4AV4A4ht29YsZJomzTnXXdfd9X2/A55iKYWlhJmU0nXTNAl4mIedwnZ7/4wBkcvH8Xh6jaqYiDFdAbcRFAtVFQJwU7ESPuh7zPrX3wj0T2zk1lz/+mG7NQ/bnpFixDPy8veq/dViW20j/W+drTOAmK2JXEbgbDrt628bhqEA+x+dpjMiMuY8lFLed8DB+orugQPAJ8i7bEsKl1PuAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capRightOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAA0CAYAAACHO2h8AAAA2UlEQVR4Ae3XwUkEMRTG8X8eIaLgwYXF0xRgKYsVWIIVrR1sI3uwANkSvMxhDhOzRoZ5pgOZSZiDvF8Bjy/vgwdx+/3jO8tdgQtwAs4A7nB4/mShuYgx5r7v4zAMR+DNp5RYyjknIYTbrutugNcy7ENYQVUpoZimSXa7h3vgxatSxfsQgCcPdZNEnAB3QiM26G/V9bdPBLp9ImvN6t9y2daaLbtiR0ol25Edfzu1mx62Zon0v91sVZ2Bq1Ap5+8f4FL1tLkYC+C06mla5CLGcUzp6wicm31FfwHzmG90m7lXIAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABGElEQVR4Ae3Rr0pEQRSA8Zl1b1uDQTAt4j8QES1qURZvEf8lfYJVsfoAisYFq9mgyfUFVptgMtk3CAaD6DN8HoYbFhk9w9x0Yc6XDsv8LrNj0vgnTZo05LzzyR7m/wxafQC+sDHQENkv6DsG2uFV2i62nDc+2C82SybVwqAX+tIzxlOdzBUEPTnosTy0wgM9lryQpS7pVwutetAiN3RZU481mJYaf0PX9KR7rALNMCtNaVC3PLTALXesYpSGlatFVDFonnNOmfQeGKHFOqNhUIcr6cwLtdiVNkIgy6WDLrxQ7qBNrApJy0J1mCu2CY6k4qKMCbJFM/TPHvzeASfS8cBvtbhXazvosPzzN2lL4/GQXoISlKAqQz+eXnU2Tp6C2QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"bufferIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABGElEQVR4Ae3Rr0pEQRSA8Zl1b1uDQTAt4j8QES1qURZvEf8lfYJVsfoAisYFq9mgyfUFVptgMtk3CAaD6DN8HoYbFhk9w9x0Yc6XDsv8LrNj0vgnTZo05LzzyR7m/wxafQC+sDHQENkv6DsG2uFV2i62nDc+2C82SybVwqAX+tIzxlOdzBUEPTnosTy0wgM9lryQpS7pVwutetAiN3RZU481mJYaf0PX9KR7rALNMCtNaVC3PLTALXesYpSGlatFVDFonnNOmfQeGKHFOqNhUIcr6cwLtdiVNkIgy6WDLrxQ7qBNrApJy0J1mCu2CY6k4qKMCbJFM/TPHvzeASfS8cBvtbhXazvosPzzN2lL4/GQXoISlKAqQz+eXnU2Tp6C2QAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"errorIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAAB3ElEQVR42u2Tv0sCYRzGv5WFJIVgkEVLSy1ObWGDUE0OgdRYtBZC/QENFv0DDTW0FEYJGkgEBUZCEFxYlJpnEMSpUxpBNAkiT++rlb+uvNOpuOcz3Pt+j3vgeN8PkRYtWv5Z2qmb0d58kXl7ZXuFzM3W6E3jybfUW+8E6ZupaaXB3ZNnPGPnlAbZruF02ebTuRRSSOds89TVaE0bWYJiEhIjiaBIFjZpKKaF1TSePknDuUamRmo6dKPRzCNKRDO6UepQW9NCAxseCXHGlHvKzZ8SNjw0wN6oSqfFIWXvwSE72YsrKWtxkEHdsQ/5hRjuCpCNbMVVDEdXNKzmGhhnlqT8DYrwoq+1lJ9ZIqNyu0aERAhXn/Cir3UIQoJGlJpndm2KuPyGF5V2IlxbyszTmybi7xcowYvK9/H3/sn65hXsEnBeBi8q3wuKzGN2PeQCKIcff+Xkoa55zK4zMYCTCubcs+7KSQBn3DzdL3Ytrt3iuIpXRvXsFs516vnFruuMH8oI/Whewa4gDmsY8435aqfBH81jdoWzXtTi8Dm8cvOwrHkFu/zwyJDBi+yc/aCMecyuUH4f6rjOTy9Xm9cXiRxgTyX7iESor7LIQENk5XdYFVb2lYG0aNHyF/MB+x5LQiE6gt8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"errorIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAAB3ElEQVR42u2Tv0sCYRzGv5WFJIVgkEVLSy1ObWGDUE0OgdRYtBZC/QENFv0DDTW0FEYJGkgEBUZCEFxYlJpnEMSpUxpBNAkiT++rlb+uvNOpuOcz3Pt+j3vgeN8PkRYtWv5Z2qmb0d58kXl7ZXuFzM3W6E3jybfUW+8E6ZupaaXB3ZNnPGPnlAbZruF02ebTuRRSSOds89TVaE0bWYJiEhIjiaBIFjZpKKaF1TSePknDuUamRmo6dKPRzCNKRDO6UepQW9NCAxseCXHGlHvKzZ8SNjw0wN6oSqfFIWXvwSE72YsrKWtxkEHdsQ/5hRjuCpCNbMVVDEdXNKzmGhhnlqT8DYrwoq+1lJ9ZIqNyu0aERAhXn/Cir3UIQoJGlJpndm2KuPyGF5V2IlxbyszTmybi7xcowYvK9/H3/sn65hXsEnBeBi8q3wuKzGN2PeQCKIcff+Xkoa55zK4zMYCTCubcs+7KSQBn3DzdL3Ytrt3iuIpXRvXsFs516vnFruuMH8oI/Whewa4gDmsY8435aqfBH81jdoWzXtTi8Dm8cvOwrHkFu/zwyJDBi+yc/aCMecyuUH4f6rjOTy9Xm9cXiRxgTyX7iESor7LIQENk5XdYFVb2lYG0aNHyF/MB+x5LQiE6gt8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"playIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABHUlEQVR4Ae2Vu0oDQRRAB2xSWVmmtQncLzFREUUsnW/wJ0SCWgQV8TUQBBEsjlgIFoJFCsFCCT5QgwZFtPGtncUWIcTZnd2pAnNOf2Bn5t5VgUCge8mpPtWrevxD+cbi1KTq948VXvjlbMM/Jk2aPPPjHZM7Ip88Y3JLy0e+M8fkmnYfMsbkkk7v+Uodkzr/2+AzVUxOsXvDh3NMToj3inenmByT7AVviTGp4WadV85XK0WVs4SOcHd3rVyyhg5xc91M6NhPOyDZFTOuEw97n3iXzZh2uv497C6YUe38ILFQMSM61Yjs0Om8Gdaph3abdmfNkM60RrZoWTaDOvNi2yRyxpQsETcKVapMm6JHJCI/tzTgEfH4QXYxgUDgD+1pwmmFlV3oAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"playIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAABHklEQVR4Ae2VvUpDQRBGt7BMaekD5AEsU0zvL6KI76CdL6FDUItgIYJNEERIoVgIFoKFhWChBBNRYwwZRBv/tfostgghuXf37lSBPac/cHd35ppIJDK45MyIGTZDRk2+UVteNaP6WOEVf7hu62PUQgsv+FXHqAnrszJGD+go+AmO0R26bQfGqI5en/CdOUZV9LeBr0wxukKy9/j0jtEl0r3Fh1eMLuC2hndnjM7hZxVvuHksLZpcQugM/h42i0uJoVP4uSMLnPppJ3C7LfPsPOxjpLslc+x1/UdIdlNm2ftBHqC/JZnhTCNSQa8bMs2Zh3Yf3a7JFAetkT10LMokBy+2XVhZJgIjlkIZZazIuCJiya/Xx9QR/Q8yEokMFv9/Ax7UXjl24wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"replayIcon" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAADOElEQVR4Ae2VUWhbVRjH/0nqdk0m0eTGITVZNsmiZCLTlooNPoWlbk27lzmGSIeyh7YgFSYaGO2yDZk4GMi65kG9d6kkbfCuyf1bqZmmlsYxCK51KwxkrpM4qBRla18cIngvw0qgN7ea1/z+L4fDn4/vO+c730G9NGjQQIALj8CKumn+afjIQWyDHRbUxTO/8w/Ojux9Bc0Q6gn27B3eoRZM5Zm2l7EVm/5bMAsEiPAjiFiFun7hXa5MjJ7Y1gI3mjYaxA5vZzSdmJeWlfvqz/xHFd7jr5+fP+rYgU0wpQlibE8peV+9yyVWeJuLVapwleU4tsCEh9B8sn8lt8SbBprJvHUEXrOMmuCVj61o9h81fXEhEY/GHAf09QOVlaF3N4fgNDsjCzxnBn7jDU3T2TfexE64IeC5G9Q1lz/7/vY2iBs5aHtndCm/wAXmUtvb8ShsD/pogdf46bm2CJ7Qr16THY87t0Iwzsf77ch1/sBCdmcYjrVuaZ4813UAPjwMC3SXsztS+ujqWTxp1E9CV8ct9Sq/56EeOGGpemtb1t6a9bXdq7nbvKV2dRjlJKaOl1lm+gICsME47x1jsu5LHYeIdfEXpCu8wsE43KiFezCu+woS/FiX4KxSYon7YhBQC2FfTPfNKghiXUIldYYzdLfChlpYxRbd952KkEGgr9Uii3z6JbNAnhbd941hoOBF5RIv8WC3SWmbuzt130XD0vyfSFOc4gfvwIVauD48qvs+Njxs8URikpOckmtevw2Br2Tdd9Lw+oVIR15VeZl91Q1Z3UXOvp7LVJlXI4YNaYHvdHKCE7ye3fXvE6l2OHaFr43rntNJ+IxHrj0czeQVFjifCrbDCRuqi3IG2+dTBSrM5MNR2GuOkcMD48xymotZrcAAXBBghQ0C3Aj09Sxmp5nlOA8PwAOLyWDrPZbhGL/kMufkkff2xx5rferFQ/vPx+fkZW13jBn2D8KrOc1H7av9ci7NNIu8yVX+xT95T1sVqe/J+dffhldzYUPD/4U9Q8lR9TNWa5RDyeej8BhkY/Qd7Y72Jk5Jw4qkSuqwckrqTbTuhc/44zb/IEOagtpK/N8fdoMGDf4G6kd7103/csoAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"replayIconOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA0CAQAAABI31KIAAADTElEQVR4Ae2VX2xTZRjGH1iBzDMrU6lxLdOFhLJ/CepwTWCJiUSTDTdilikxJmAo2GlJ9I7EsCgkw6jRG5ALtZNJy7QDiwxK0dZllSypssqatCHIMKdzM4uEnUUrtj2P57uAULNzOtltf8/Nl3OevHnf73u/70WJxVKiRAWqcD/KsGjsvyScb6EBZizFoth4nX9zJNn6KtZCwhLcNU9NcpJasPw3o80vogbl/y/YUkiwoRHNcMsUSvMGlX/6zz3SCiuWLzSIGXVbnN5gXJ7566b6K29J5ix///PwMWk9ylGUZVj93M5o6qZ6g9OUeY0TBZI5x9ggKlGEFbDvP6Jkp3lFR8PX93yEOpQXy6a2L6Bo9suaTv/2tv/ZPdLey7ylWKZnYEULLFhWbG+q3/f8waSmiPLKB3gSVkh4OkmhsdyHkZoO2Bay0eYtzulcggl+PVXTiYdggmBjgpf42XjzDqwRRy+OAo/eVwNJP5+675Pj/JkhZW0XVt7uFvvQePte1ONezSFclo4d0fjFH7FOr9Ol9l1X1Yv8idt6Ybmj6SRUofL2XSt76Zm57DVeVdt36eVkO3o2xhi9k9gAE/TzXn88LXxHz8KGeWkMyaMc5T4/rDDCus8vfCEZjZgXx0gmyijb3JBghNTmFr6RDByYl5ZofpjDfKANJhhR9mCr8P2QR4tOoG/zYYa57vligVa1Ct93uoEcJzLneZ4vvIEKGHFPx+vCd0K3tMZP5SCDfNeLKhjx8HvHhO8T3c22vRMc4hCDaTQZFGdC07m08O3XPX5p8+6AeooX2F3QkAUsgaW79wJPMaBu3g1Jr9XqD6ZO8iTHlYY7rkhBmJUNXZdmhedgCvX6w8C8yenLDTLE+JS9ExaY/lOUxd4ZnwpxkL7cJifMhs/Ids8Av2SEE4pWYBOqIKEMJlTAiqbu3gklov0d4HYPqo2H03LUugI+HucZznAs/fFXW92VbWu2bnvzsH8sPcMz2h8fXzuNWs1Z/KntOtKX9dLLMK9wjnlmOautwhTf+nIvf446zYUFPf5P7OxJ9atfsFD97Ek97kS1TjZ64+gxpyt4QD6U8age9VDmgOwKbnChXn9wFxuQDrRocmir1ai4y+lfokSJfwEhAcqxd5L4JgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"dock"\x3e\x3csettings\x3e\x3csetting name\x3d"iconalpha" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaactive" value\x3d"1"/\x3e\x3csetting name\x3d"iconalphaover" value\x3d"1"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"button" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAxklEQVR4Ae2YsQ3CMBBF7+yIximQSERSMgYNI1AxJgswAaMkLREpEnQ2Z6Chooqwpf+k65+evhtzXW8LIjrp7fUcpcmod9U7v2Sbpjm2bVtaa5kSRERC13V13/ePIpatqk05zzOHEChFWImOKnyIwk7EMyXMJyTrOUOZAeGlKd4byUtYCZjEN9gwCuPRYRKYBCbx18JLJ0bh3IQJk/gFHh0Ko3BWwqOID8YYpoTx3ofoap0r18y0WymspCo7DLf7NE2X7L5bnyz7UgI6sO7WAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"buttonOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAzklEQVR4Ae2YMU7FMBAFx04osQvyRQIX4nfcgRZOAxW3oMqRkhKbBkWyjVfiCiD7a0dKPxq9dZHxdLq9Al6AB8DRJl/ACryOwPM8z0/LsvhhGCwNklLK27bd7fv+LcLnabrxx3HYUgotYoyx4liFH0XYpZQtDfMb0orrSGeo8L8Il9Jd4dL5JFRYN6xHp5PQSegkLuwd/uPEWrg3YXQSenRaWAtfVOGYUs62QsPkiriK8Brj571z3ot0q7IxhgB8iPBbCMHU7wxcN/679f0HQzRYj4Eg/3AAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"buttonActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAwUlEQVR4Ae2YsQ3CMBBFD8e0CVESUcFMpGMKapgAKvagymKWiF3RxMe/IUDn6J70I5dPX98u4odhvyWiG3JCdqSTiEzI3eNz7fv+0nVdW1WVI4VkEEI4IB8RHjXLCg6II4TPXmbgADOTZhwQV0+F4ekPmDBzcQ2zTcKEC9+wXTqbhE3CJrGyd5jpp1jDxb0SNgm7dNawNbyqhudlydkBUkwG4irCU0rzsa6bVqt0BinFN44vEX7EGDfIiHOj/Hfr8wvCZ0/Xf6TpeQAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAgCAYAAAA1zNleAAAAD0lEQVQoU2NgGAWjADcAAAIgAAEeEYatAAAAAElFTkSuQmCC"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"playlist"\x3e\x3csettings\x3e\x3csetting name\x3d"backgroundcolor" value\x3d"0x3c3c3e"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0x848489"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xb2b2b6"/\x3e\x3csetting name\x3d"titlecolor" value\x3d"0xb9b9be"/\x3e\x3csetting name\x3d"titlesize" value\x3d"12"/\x3e\x3csetting name\x3d"titleweight" value\x3d"bold"/\x3e\x3csetting name\x3d"titleactivecolor" value\x3d"0xececf4"/\x3e\x3csetting name\x3d"titleovercolor" value\x3d"0xececf4"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"item" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMAQMAAAASt2oTAAAAA1BMVEU8PD44mUV6AAAAFklEQVR4AWMYMmAUjIJRMApGwSgYBQAHuAABIqNCjAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABMAQMAAAASt2oTAAAAA1BMVEUvLzHXqQRQAAAAFklEQVR4AWMYMmAUjIJRMApGwSgYBQAHuAABIqNCjAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"itemImage" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA2CAMAAAAPkWzgAAAAk1BMVEU0NDcVFRcWFhgXFxknJyozMzYyMjUlJSgrKy4jIyYZGRssLC8YGBobGx0kJCcuLjAiIiQaGhwjIyUpKSwkJCYaGh0nJykiIiUgICIwMDMqKi0cHB8lJScdHSAtLTAuLjEdHR8VFRgxMTQvLzIvLzEoKCsZGRwqKiwbGx4gICMoKCofHyImJigmJikhISMeHiAhISRWJqoOAAAA/klEQVR4Ae3VNYLDMBQG4X8kme2QwwzLfP/TbeO0qfQ6zQW+coRxQqYl4HEJSEACEvA8NQamRkCoF40kNUxMgC3gc0lrtiZAB1BKuSOPDIzcXroB0EtL3hQXuIHLNboDC+aRgRnQ6GUAjtBEBmrgdcwA/OCyuMATraOvBiB3HBQTOJ8KZp5QwwXoA3xFBdrVjpPnHVgBfQfjqMChZSoAugDMwCsqUMFeAHwEwMFnXKDkshGAz5YAEOIC2fpbAqhUAMDG4AcO3HUAahkAHYykOQATC6Bsf7M7UNotswLwmR2wAviTHVAAHA2BMXCWIaDC7642wIMSkIAEJCABxv0D1B4Kmtm5dvAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"divider" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAABCAIAAAAkUWeUAAAAEUlEQVR42mPQ1zccRaOIzggAmuR1T+nadMkAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAYAAADErm6rAAAAHklEQVQI12NgIABERcX/Kymp/FdWVkXBIDGQHCH9AAmVCvfMHD66AAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAEUlEQVQoU2NgGAWjYBQMfQAAA8oAAZphnjsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKCAYAAACuaZ5oAAAAEUlEQVQoU2NgGAWjYBQMfQAAA8oAAZphnjsAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAX0lEQVR42q2P4QqAIAyEewktLUy3pKevVwvpAdZO+q9Qgw+OO25jQ88YM2blUAp4dW71epfvyuXcLCGsFWh4yD4fsHY6vV8kRpKUGFQND9kfHxQsJNqEOYOq4Wl2t/oPXdoiX8vd60IAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAYAAACUY/8YAAAAXElEQVQY02NgIADExCQ+KSmp/FdWVkXBIDGg3BcGSoG0tMxGWVl5DAtAYiA5ii2wsbE1ALr0A8hAkKtBGMQGiYHkKLbg////TK6uboYg1wIN/QzCIDZIDCRHSD8AB2YrZ5n2CLAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"sliderThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAABCAAAAADhxTF3AAAAAnRSTlMA/1uRIrUAAAAUSURBVHjaY/oPA49unT+yaz2cCwAcKhapymVMMwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"sliderThumbCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAQAAAA+ajeTAAAAMElEQVQI12NgwACPPt76f/7/kf+7/q//yEAMeNQH19DHQBy41Xf+/ZH3u4hVjh8AAJAYGojU8tLHAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"sliderThumbCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAECAQAAAA+ajeTAAAANUlEQVQI12NgoAbY2rf+49KPs/uIVH54wrH/h/7v+L/y//QJRGm4/PHa/7NALdv+L/6MKQsAZV8ZczFGWjAAAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3ccomponent name\x3d"tooltip"\x3e\x3csettings\x3e\x3csetting name\x3d"fontcase" value\x3d"normal"/\x3e\x3csetting name\x3d"fontcolor" value\x3d"0xacacac"/\x3e\x3csetting name\x3d"fontsize" value\x3d"11"/\x3e\x3csetting name\x3d"fontweight" value\x3d"normal"/\x3e\x3csetting name\x3d"activecolor" value\x3d"0xffffff"/\x3e\x3csetting name\x3d"overcolor" value\x3d"0xffffff"/\x3e\x3c/settings\x3e\x3celements\x3e\x3celement name\x3d"background" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAYAAABsfz2XAAAAEUlEQVR4AWOwtnV8RgomWQMAWvcm6W7AcF8AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"arrow" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAADCAYAAACnI+4yAAAAEklEQVR42mP4//8/AymYgeYaABssa5WUTzsyAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAHUlEQVR42mMUFRU/wUACYHR1935GkgZrW0faagAAqHQGCWgiU9QAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAYAAAC6Jt6KAAAAGElEQVR42mOwtnV8RgpmoL0GUVHxE6RgAO7IRsl4Cw8cAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"capLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mMQFRU/YW3r+AwbZsAnCQBUPRWHq8l/fAAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAACCAYAAACUn8ZgAAAAFklEQVR42mOwtnV8hg2LioqfYMAnCQBwXRWHw2Rr1wAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capTopLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR4XmMQFRVnBeIiIN4FxCeQMQOQU6ijq3/VycXjiau79zNkDJLcZWvv9MTGzumZta0jCgZJnkAXhPEBnhkmTDF7/FAAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capTopRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAPklEQVR42mMQFRU/gYZ3A3ERELMyuLp7P0PGTi4eT3R09a8CJbMYrG0dnyFjGzunZ7b2Tk+AkrswJGEYZAUA8XwmRnLnEVMAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"capBottomLeft" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAMUlEQVR4AWMQFRU/YW3r+AwbBknusrSye4JLslBdQ/uqpbX9E2ySrEBcBMS7QVYgYwAWViWcql/T2AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"capBottomRight" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAANUlEQVR42mOwtnV8hg2LioqfYMAmYWll9wQouQtD0tLa/om6hvZVoGQ2A0g7Gt4NxEVAzAoAZzolltlSH50AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"menuOption" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAcklEQVQoz2NgGLFAVFRcDoh3AfFnKC2HVaGYmMQeSUnp/7Kycv9BNJB/AJeJn+XlFf8rKir/V1BQ+g/k/8SqEGjKPhkZuf/Kyqr/QTSQfwirQm9vX3WQYqCVX0G0p6e3BlaF////ZwJiLiDmgdJMwzr2ANEWKw6VGUzBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuOptionOver" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAcklEQVQoz2NgGLFAVFRcDoh3AfFnKC2HVaGYmMQeSUnp/7Kycv9BNJB/AJeJn+XlFf8rKir/V1BQ+g/k/8SqEGjKPhkZuf/Kyqr/QTSQfwirQm9vX3WQYqCVX0G0p6e3BlaF////ZwJiLiDmgdJMwzr2ANEWKw6VGUzBAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"menuOptionActive" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAQAAABOKvVuAAAAdElEQVR4AWOgJ5BhcGQIBWIZhJCsW+6jS7+/P7rklssgBxN0un/59f+n/1//f3SVwQUmGPrs+6P/IPj8N0M4TNBl/+Vr/0Hw4FUGN5igkm3ursvnf+y6bJ/LoAwTZGZQY/BgCANiNSCbASHMwcANxMy09DcAxqMsxkMxUYIAAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAYAAAB1j90SAAAAE0lEQVR42mP4//8/AzmYYQRoBADgm9EvDrkmuwAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAXklEQVR42n2NWwqAIBRE3YSmJT4KafW1tZAWMN2RPkSojwPDPO5VAFSP1lMRDqG+UJexN4524bJ2hvehQU2P2efQGHs6tyCEhBhzg5oes7+PlcWUVuS8Nah5QLK77z7Bcm/CZuJM1AAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeRailCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAYAAAC+0w63AAAAWklEQVQI12NgQAJiYhKfVFXV/6upaaBgkBhQ7gsDLiAtLbNRXl4RQyNIDCSHU6ONja0B0OQPIIUgW0AYxAaJgeRwavz//z+Tq6ubIch0oOLPIAxig8RAcshqARVfK+sjJ8UzAAAAAElFTkSuQmCC"/\x3e\x3celement name\x3d"volumeRail" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAYAAAC6qQkaAAAAXklEQVR42mP5//8/AwyIiUn85+bmZmBkZGRABiA1X79+ZXj16gVcgoUBDaBrwiWGoZFYMCg0MpKnkZFxCPlxVONw0MjIyDgaOCM7AdC7lBuNjtGiY1TjqMbRwooijQBUhw3jnmCdzgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgress" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA0CAAAAACfwlbGAAAAAnRSTlMA/1uRIrUAAAAmSURBVHgBY/gPBPdunT+yaw2IBeY+BHHXwbmPQNz1w5w7yh3lAgBeJpPWLirUWgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapTop" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAQAAAAU2sY8AAAANElEQVQI12NgIA5s7Vv/cenH2X1YpA5POPb/0P8d/1f+nz4BQ/Lyx2v/zwKlt/1f/BkmBgDJshlzy7m4BgAAAABJRU5ErkJggg\x3d\x3d"/\x3e\x3celement name\x3d"volumeProgressCapBottom" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAECAQAAAAU2sY8AAAAL0lEQVQI12NggIJHH2/9P///yP9d/9d/ZkAHjybCJScyYIJbE85/OvJp1wQG4gAADBkams/Cpm0AAAAASUVORK5CYII\x3d"/\x3e\x3celement name\x3d"volumeThumb" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAQAAACMnYaxAAAA/klEQVR4AYXQoW7CUBjF8f9IYWkgq2l2k8llrmJBTOBxsyQlJENs4236CDhEywNUIEGh12WZuYDC4W9A3B2zhTVLds8VJ+fnPv5/FzQIaHGptNQaWn4ooM0DA56VgVpbi1hEk2vSvNjbozu6vc0LUi1NCQFXDBflwW/9p7L1B78oGRJJCOnN8o3/OMvGz3J6EiLStdX0K2tLKiFm8n6qY3XiVYL5C98cLxL90dLWcWkZSYjpZ0Uds4K+hIg7nqblOU1LxlojCDF0GWfz1a5ylVvtsrmoi5EQ0OGGhEdNE2WslmjpSND5VAy3mu6VRM1o0fm+Dx8SEWOUWC3UIvoCCFqphCwr/x8AAAAASUVORK5CYII\x3d"/\x3e\x3c/elements\x3e\x3c/component\x3e\x3c/components\x3e\x3c/skin\x3e')
    }
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = g.events, d = a.state, k = c.css, b = c.isMobile(), e = document, f = ".jwpreview", C = !0, p = !1;
    l.display = function (g, v) {
        function t(e) {
            if (X && (g.jwGetControls() || g.jwGetState() == d.PLAYING))X(e); else if ((!b || !g.jwGetControls()) && T.sendEvent(a.JWPLAYER_DISPLAY_CLICK), g.jwGetControls()) {
                var f = (new Date).getTime();
                $ && 500 > f - $ ? (g.jwSetFullscreen(), $ = void 0) : $ = (new Date).getTime();
                var j = c.bounds(y.parentNode.querySelector(".jwcontrolbar")), h = c.bounds(y), f = j.left - 10 - h.left, k = j.left + 30 -
                    h.left, D = h.bottom - 40, m = h.bottom, x = j.right - 30 - h.left, j = j.right + 10 - h.left;
                if (b && !(e.x >= f && e.x <= k && e.y >= D && e.y <= m)) {
                    if (e.x >= x && e.x <= j && e.y >= D && e.y <= m) {
                        g.jwSetFullscreen();
                        return
                    }
                    T.sendEvent(a.JWPLAYER_DISPLAY_CLICK);
                    if (J)return
                }
                switch (g.jwGetState()) {
                    case d.PLAYING:
                    case d.BUFFERING:
                        g.jwPause();
                        break;
                    default:
                        g.jwPlay()
                }
            }
        }

        function h(a, b) {
            O.showicons && (a || b ? (E.setRotation("buffer" == a ? parseInt(O.bufferrotation, 10) : 0, parseInt(O.bufferinterval, 10)), E.setIcon(a), E.setText(b)) : E.hide())
        }

        function m(a) {
            B != a ? (B &&
            j(f, p), (B = a) ? (a = new Image, a.addEventListener("load", n, p), a.src = B) : (k("#" + y.id + " " + f, {"background-image": ""}), j(f, p), K = u = 0)) : B && !J && j(f, C);
            w(g.jwGetState())
        }

        function D(a) {
            clearTimeout(ha);
            ha = setTimeout(function () {
                w(a.newstate)
            }, 100)
        }

        function w(a) {
            a = S ? S : g ? g.jwGetState() : d.IDLE;
            if (a != Y)switch (Y = a, E && E.setRotation(0), a) {
                case d.IDLE:
                    !z && !H && (B && !A && j(f, C), a = !0, g._model && !1 === g._model.config.displaytitle && (a = !1), h("play", L && a ? L.title : ""));
                    break;
                case d.BUFFERING:
                    z = p;
                    x.error && x.error.setText();
                    H = p;
                    h("buffer");
                    break;
                case d.PLAYING:
                    h();
                    break;
                case d.PAUSED:
                    h("play")
            }
        }

        function n() {
            K = this.width;
            u = this.height;
            w(g.jwGetState());
            r();
            B && k("#" + y.id + " " + f, {"background-image": "url(" + B + ")"})
        }

        function F(a) {
            z = C;
            h("error", a.message)
        }

        function r() {
            0 < y.clientWidth * y.clientHeight && c.stretch(g.jwGetStretching(), s, y.clientWidth, y.clientHeight, K, u)
        }

        function j(a, b) {
            k("#" + y.id + " " + a, {opacity: b ? 1 : 0, visibility: b ? "visible" : "hidden"})
        }

        var y, s, I, L, B, K, u, A = p, x = {}, z = p, H = p, J, W, E, S, Y, O = c.extend_new({
            showicons: C, bufferrotation: 45, bufferinterval: 100,
            fontcolor: "#ccc", overcolor: "#fff", fontsize: 15, fontweight: ""
        }, g.skin.getComponentSettings("display"), v), T = new a.eventdispatcher, X, $;
        c.extend_new(this, T);
        this.clickHandler = t;
        var ha;
        this.forceState = function (a) {
            S = a;
            w(a);
            this.show()
        };
        this.releaseState = function (a) {
            S = null;
            w(a);
            this.show()
        };
        this.hidePreview = function (a) {
            A = a;
            j(f, !a);
            a && (J = !0)
        };
        this.setHiding = function () {
            J = !0
        };
        this.element = function () {
            return y
        };
        this.redraw = r;
        this.show = function (a) {
            if (E && (a || (S ? S : g ? g.jwGetState() : d.IDLE) != d.PLAYING))clearTimeout(W),
                W = void 0, y.style.display = "block", E.show(), J = !1
        };
        this.hide = function () {
            E && (E.hide(), J = !0)
        };
        this.setAlternateClickHandler = function (a) {
            X = a
        };
        this.revertAlternateClickHandler = function () {
            X = void 0
        };
        y = e.createElement("div");
        y.id = g.id + "_display";
        y.className = "jwdisplay";
        s = e.createElement("div");
        s.className = "jwpreview jw" + g.jwGetStretching();
        y.appendChild(s);
        g.jwAddEventListener(a.JWPLAYER_PLAYER_STATE, D);
        g.jwAddEventListener(a.JWPLAYER_PLAYLIST_ITEM, function () {
            z = p;
            x.error && x.error.setText();
            var a = (L = g.jwGetPlaylist()[g.jwGetPlaylistIndex()]) ?
                L.image : "";
            Y = void 0;
            m(a)
        });
        g.jwAddEventListener(a.JWPLAYER_PLAYLIST_COMPLETE, function () {
            H = C;
            h("replay");
            var a = g.jwGetPlaylist()[0];
            m(a.image)
        });
        g.jwAddEventListener(a.JWPLAYER_MEDIA_ERROR, F);
        g.jwAddEventListener(a.JWPLAYER_ERROR, F);
        b ? (I = new c.touch(y), I.addEventListener(c.touchEvents.TAP, t)) : y.addEventListener("click", t, p);
        I = {
            font: O.fontweight + " " + O.fontsize + "px/" + (parseInt(O.fontsize, 10) + 3) + "px Arial, Helvetica, sans-serif",
            color: O.fontcolor
        };
        E = new l.displayicon(y.id + "_button", g, I, {color: O.overcolor});
        y.appendChild(E.element());
        D({newstate: d.IDLE})
    };
    k(".jwdisplay", {position: "absolute", width: "100%", height: "100%", overflow: "hidden"});
    k(".jwdisplay " + f, {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#000 no-repeat center",
        overflow: "hidden",
        opacity: 0
    });
    c.transitionStyle(".jwdisplay, .jwdisplay *", "opacity .25s, color .25s")
})(jwplayer);
(function (g) {
    var l = g.utils, c = l.css, a = document, d = "none", k = "100%";
    g.html5.displayicon = function (b, e, f, C) {
        function p(b, c, d, e) {
            var f = a.createElement("div");
            f.className = b;
            c && c.appendChild(f);
            w && q(f, b, "." + b, d, e);
            return f
        }

        function q(a, b, d, f, j) {
            var h = v(b);
            "replayIcon" == b && !h.src && (h = v("playIcon"));
            h.src ? (f = l.extend_new({}, f), 0 < b.indexOf("Icon") && (B = h.width | 0), f.width = h.width, f["background-image"] = "url(" + h.src + ")", f["background-size"] = h.width + "px " + h.height + "px", f["float"] = "none", j = l.extend_new({}, j), h.overSrc && (j["background-image"] =
                "url(" + h.overSrc + ")"), l.isMobile() || c("#" + e.id + " .jwdisplay:hover " + d, j), c.style(w, {display: "table"})) : c.style(w, {display: "none"});
            f && c.style(a, f);
            L = h
        }

        function v(a) {
            var b = D.getSkinElement("display", a);
            a = D.getSkinElement("display", a + "Over");
            return b ? (b.overSrc = a && a.src ? a.src : "", b) : {src: "", overSrc: "", width: 0, height: 0}
        }

        function t() {
            var a = j || 0 === B;
            c.style(y, {display: y.innerHTML && a ? "" : d});
            u = a ? 30 : 0;
            h()
        }

        function h() {
            clearTimeout(K);
            0 < u-- && (K = setTimeout(h, 33));
            var a = "px " + k, b = Math.ceil(Math.max(L.width, l.bounds(w).width -
                r.width - F.width)), a = {"background-size": [F.width + a, b + a, r.width + a].join(", ")};
            w.parentNode && (a.left = 1 == w.parentNode.clientWidth % 2 ? "0.5px" : "");
            c.style(w, a)
        }

        function m() {
            z = (z + x) % 360;
            l.rotate(s, z)
        }

        var D = e.skin, w, n, F, r, j, y, s, I = {}, L, B = 0, K = -1, u = 0;
        this.element = function () {
            return w
        };
        this.setText = function (b) {
            var c = y.style;
            y.innerHTML = b ? b.replace(":", ":\x3cbr\x3e") : "";
            c.height = "0";
            c.display = "block";
            if (b)for (; 2 < Math.floor(y.scrollHeight / a.defaultView.getComputedStyle(y, null).lineHeight.replace("px", ""));)y.innerHTML =
                y.innerHTML.replace(/(.*) .*$/, "$1...");
            c.height = "";
            c.display = "";
            t()
        };
        this.setIcon = function (a) {
            var b = I[a];
            b || (b = p("jwicon"), b.id = w.id + "_" + a);
            q(b, a + "Icon", "#" + b.id);
            w.contains(s) ? w.replaceChild(b, s) : w.appendChild(b);
            s = b
        };
        var A, x = 0, z;
        this.setRotation = function (a, b) {
            clearInterval(A);
            z = 0;
            x = a | 0;
            0 === x ? m() : A = setInterval(m, b)
        };
        var H = this.hide = function () {
            w.style.opacity = 0;
            w.style.cursor = ""
        };
        this.show = function () {
            w.style.opacity = 1;
            w.style.cursor = "pointer"
        };
        w = p("jwdisplayIcon");
        w.id = b;
        n = v("background");
        F = v("capLeft");
        r = v("capRight");
        j = 0 < F.width * r.width;
        var J = {
            "background-image": "url(" + F.src + "), url(" + n.src + "), url(" + r.src + ")",
            "background-position": "left,center,right",
            "background-repeat": "no-repeat",
            padding: "0 " + r.width + "px 0 " + F.width + "px",
            height: n.height,
            "margin-top": n.height / -2
        };
        c("#" + b, J);
        l.isMobile() || (n.overSrc && (J["background-image"] = "url(" + F.overSrc + "), url(" + n.overSrc + "), url(" + r.overSrc + ")"), c(".jw-tab-focus #" + b + ", #" + e.id + " .jwdisplay:hover " + ("#" + b), J));
        y = p("jwtext", w, f, C);
        s = p("jwicon", w);
        e.jwAddEventListener(g.events.JWPLAYER_RESIZE,
            h);
        H();
        t()
    };
    c(".jwplayer .jwdisplayIcon", {
        display: "table",
        position: "relative",
        "margin-left": "auto",
        "margin-right": "auto",
        top: "50%",
        "float": "none"
    });
    c(".jwplayer .jwdisplayIcon div", {
        position: "relative",
        display: "table-cell",
        "vertical-align": "middle",
        "background-repeat": "no-repeat",
        "background-position": "center"
    });
    c(".jwplayer .jwdisplayIcon div", {"vertical-align": "middle"}, !0);
    c(".jwplayer .jwdisplayIcon .jwtext", {
        color: "#fff", padding: "0 1px", "max-width": "300px", "overflow-y": "hidden", "text-align": "center",
        "-webkit-user-select": d, "-moz-user-select": d, "-ms-user-select": d, "user-select": d
    })
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = c.css, d = c.bounds, k = ".jwdockbuttons", b = document, e = "none", f = "block";
    l.dock = function (g, p) {
        function q(a) {
            return !a || !a.src ? {} : {
                background: "url(" + a.src + ") center",
                "background-size": a.width + "px " + a.height + "px"
            }
        }

        function v(b, d) {
            var e = m(b);
            a(t("." + b), c.extend_new(q(e), {width: e.width}));
            return h("div", b, d)
        }

        function t(a) {
            return "#" + n + " " + (a ? a : "")
        }

        function h(a, c, d) {
            a = b.createElement(a);
            c && (a.className = c);
            d && d.appendChild(a);
            return a
        }

        function m(a) {
            return (a = F.getSkinElement("dock",
                a)) ? a : {width: 0, height: 0, src: ""}
        }

        function D() {
            a(k + " .capLeft, " + k + " .capRight", {display: r ? f : e})
        }

        var w = c.extend_new({}, {
            iconalpha: 0.75,
            iconalphaactive: 0.5,
            iconalphaover: 1,
            margin: 8
        }, p), n = g.id + "_dock", F = g.skin, r = 0, j = {}, y = {}, s, I, L, B = this;
        B.redraw = function () {
            d(s)
        };
        B.element = function () {
            return s
        };
        B.offset = function (b) {
            a(t(), {"margin-left": b})
        };
        B.hide = function () {
            B.visible && (B.visible = !1, s.style.opacity = 0, clearTimeout(L), L = setTimeout(function () {
                s.style.display = e
            }, 250))
        };
        B.showTemp = function () {
            B.visible || (s.style.opacity =
                0, s.style.display = f)
        };
        B.hideTemp = function () {
            B.visible || (s.style.display = e)
        };
        B.show = function () {
            !B.visible && r && (B.visible = !0, s.style.display = f, clearTimeout(L), L = setTimeout(function () {
                s.style.opacity = 1
            }, 0))
        };
        B.addButton = function (b, e, f, g) {
            if (!j[g]) {
                var k = h("div", "divider", I), m = h("div", "button", I), A = h("div", null, m);
                A.id = n + "_" + g;
                A.innerHTML = "\x26nbsp;";
                a("#" + A.id, {"background-image": b});
                "string" == typeof f && (f = new Function(f));
                c.isMobile() ? (new c.touch(m)).addEventListener(c.touchEvents.TAP, function (a) {
                    f(a)
                }) :
                    m.addEventListener("click", function (a) {
                        f(a);
                        a.preventDefault()
                    });
                j[g] = {element: m, label: e, divider: k, icon: A};
                if (e) {
                    var u = new l.overlay(A.id + "_tooltip", F, !0);
                    b = h("div");
                    b.id = A.id + "_label";
                    b.innerHTML = e;
                    a("#" + b.id, {padding: 3});
                    u.setContents(b);
                    if (!c.isMobile()) {
                        var w;
                        m.addEventListener("mouseover", function () {
                            clearTimeout(w);
                            var b = y[g], e, f;
                            e = d(j[g].icon);
                            b.offsetX(0);
                            f = d(s);
                            a("#" + b.element().id, {left: e.left - f.left + e.width / 2});
                            e = d(b.element());
                            f.left > e.left && b.offsetX(f.left - e.left + 8);
                            u.show();
                            c.foreach(y,
                                function (a, b) {
                                    a != g && b.hide()
                                })
                        }, !1);
                        m.addEventListener("mouseout", function () {
                            w = setTimeout(u.hide, 100)
                        }, !1);
                        s.appendChild(u.element());
                        y[g] = u
                    }
                }
                r++;
                D()
            }
        };
        B.removeButton = function (a) {
            if (j[a]) {
                I.removeChild(j[a].element);
                I.removeChild(j[a].divider);
                var b = document.getElementById("" + n + "_" + a + "_tooltip");
                b && s.removeChild(b);
                delete j[a];
                r--;
                D()
            }
        };
        B.numButtons = function () {
            return r
        };
        B.visible = !1;
        s = h("div", "jwdock");
        I = h("div", "jwdockbuttons");
        s.appendChild(I);
        s.id = n;
        var K = m("button"), u = m("buttonOver"), A = m("buttonActive");
        K && (a(t(), {
            height: K.height,
            padding: w.margin
        }), a(k, {height: K.height}), a(t("div.button"), c.extend_new(q(K), {
            width: K.width,
            cursor: "pointer",
            border: e
        })), a(t("div.button:hover"), q(u)), a(t("div.button:active"), q(A)), a(t("div.button\x3ediv"), {opacity: w.iconalpha}), a(t("div.button:hover\x3ediv"), {opacity: w.iconalphaover}), a(t("div.button:active\x3ediv"), {opacity: w.iconalphaactive}), a(t(".jwoverlay"), {top: w.margin + K.height}), v("capLeft", I), v("capRight", I), v("divider"));
        setTimeout(function () {
            d(s)
        })
    };
    a(".jwdock",
        {opacity: 0, display: e});
    a(".jwdock \x3e *", {height: "100%", "float": "left"});
    a(".jwdock \x3e .jwoverlay", {height: "auto", "float": e, "z-index": 99});
    a(k + " div.button", {position: "relative"});
    a(k + " \x3e *", {height: "100%", "float": "left"});
    a(k + " .divider", {display: e});
    a(k + " div.button ~ .divider", {display: f});
    a(k + " .capLeft, " + k + " .capRight", {display: e});
    a(k + " .capRight", {"float": "right"});
    a(k + " div.button \x3e div", {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 5,
        position: "absolute",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });
    c.transitionStyle(".jwdock", "background .25s, opacity .25s");
    c.transitionStyle(".jwdock .jwoverlay", "opacity .25s");
    c.transitionStyle(k + " div.button div", "opacity .25s")
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = g.events, d = a.state, k = g.playlist;
    l.instream = function (b, e, f, g) {
        function p(a) {
            D(a.type, a);
            J && b.jwInstreamDestroy(!1, E)
        }

        function q(a) {
            D(a.type, a);
            h()
        }

        function v(a) {
            D(a.type, a)
        }

        function t() {
            z && z.releaseState(E.jwGetState());
            A.play()
        }

        function h() {
            if (r && j + 1 < r.length) {
                j++;
                var d = r[j];
                F = new k.item(d);
                J.setPlaylist([d]);
                var e;
                y && (e = y[j]);
                s = c.extend_new(n, e);
                A.load(J.playlist[0]);
                I.reset(s.skipoffset || -1);
                W = setTimeout(function () {
                    D(a.JWPLAYER_PLAYLIST_ITEM, {index: j}, !0)
                }, 0)
            } else W =
                setTimeout(function () {
                    D(a.JWPLAYER_PLAYLIST_COMPLETE, {}, !0);
                    b.jwInstreamDestroy(!0, E)
                }, 0)
        }

        function m(a) {
            a.width && a.height && (z && z.releaseState(E.jwGetState()), f.resizeMedia())
        }

        function D(a, b) {
            b = b || {};
            n.tag && !b.tag && (b.tag = n.tag);
            E.sendEvent(a, b)
        }

        function w() {
            x && x.redraw();
            z && z.redraw()
        }

        var n = {
            controlbarseekable: "never",
            controlbarpausable: !0,
            controlbarstoppable: !0,
            loadingmessage: "Loading ad",
            playlistclickable: !0,
            skipoffset: null,
            tag: null
        }, F, r, j = 0, y, s = {
            controlbarseekable: "never", controlbarpausable: !1,
            controlbarstoppable: !1
        }, I, L, B, K, u, A, x, z, H, J, W = -1, E = c.extend_new(this, new a.eventdispatcher);
        b.jwAddEventListener(a.JWPLAYER_RESIZE, w);
        b.jwAddEventListener(a.JWPLAYER_FULLSCREEN, function (a) {
            w();
            !a.fullscreen && c.isIPad() && (J.state === d.PAUSED ? z.show(!0) : J.state === d.PLAYING && z.hide())
        });
        E.init = function () {
            L = g.detachMedia();
            A = new l.video(L, "instream");
            A.addGlobalListener(v);
            A.addEventListener(a.JWPLAYER_MEDIA_META, m);
            A.addEventListener(a.JWPLAYER_MEDIA_COMPLETE, h);
            A.addEventListener(a.JWPLAYER_MEDIA_BUFFER_FULL,
                t);
            A.addEventListener(a.JWPLAYER_MEDIA_ERROR, p);
            A.addEventListener(a.JWPLAYER_MEDIA_TIME, function (a) {
                I && I.updateSkipTime(a.position, a.duration)
            });
            A.attachMedia();
            A.mute(e.mute);
            A.volume(e.volume);
            J = new l.model({}, A);
            J.setVolume(e.volume);
            J.setMute(e.mute);
            u = e.playlist[e.item];
            B = L.currentTime;
            g.checkBeforePlay() || 0 === B ? (B = 0, K = d.PLAYING) : K = b.jwGetState() === d.IDLE || e.getVideo().checkComplete() ? d.IDLE : d.PLAYING;
            K == d.PLAYING && L.pause();
            z = new l.display(E);
            z.forceState(d.BUFFERING);
            H = document.createElement("div");
            H.id = E.id + "_instream_container";
            c.css.style(H, {width: "100%", height: "100%"});
            H.appendChild(z.element());
            x = new l.controlbar(E);
            x.instreamMode(!0);
            H.appendChild(x.element());
            b.jwGetControls() ? (x.show(), z.show()) : (x.hide(), z.hide());
            f.setupInstream(H, x, z, J);
            w();
            E.jwInstreamSetText(n.loadingmessage)
        };
        E.load = function (e, h) {
            if (c.isAndroid(2.3))p({
                type: a.JWPLAYER_ERROR,
                message: "Error loading instream: Cannot play instream on Android 2.3"
            }); else {
                D(a.JWPLAYER_PLAYLIST_ITEM, {index: j}, !0);
                var g = 10 + c.bounds(H.parentNode).bottom -
                    c.bounds(x.element()).top;
                "array" === c.typeOf(e) && (h && (y = h, h = h[j]), r = e, e = r[j]);
                s = c.extend_new(n, h);
                F = new k.item(e);
                J.setPlaylist([e]);
                I = new l.adskipbutton(b.id, g, s.skipMessage, s.skipText);
                I.addEventListener(a.JWPLAYER_AD_SKIPPED, q);
                I.reset(s.skipoffset || -1);
                b.jwGetControls() ? I.show() : I.hide();
                g = I.element();
                H.appendChild(g);
                J.addEventListener(a.JWPLAYER_ERROR, p);
                z.setAlternateClickHandler(function (e) {
                    e = e || {};
                    e.hasControls = !!b.jwGetControls();
                    D(a.JWPLAYER_INSTREAM_CLICK, e);
                    e.hasControls ? J.state === d.PAUSED ?
                        E.jwInstreamPlay() : E.jwInstreamPause() : c.isAndroid() && J.state !== d.PAUSED && E.jwInstreamPause()
                });
                c.isMSIE() && L.parentElement.addEventListener("click", z.clickHandler);
                f.addEventListener(a.JWPLAYER_AD_SKIPPED, q);
                A.load(J.playlist[0])
            }
        };
        E.jwInstreamDestroy = function (b) {
            if (J) {
                clearTimeout(W);
                W = -1;
                A.detachMedia();
                g.attachMedia();
                if (K !== d.IDLE) {
                    var h = c.extend_new({}, u);
                    h.starttime = B;
                    e.getVideo().load(h)
                } else e.getVideo().stop();
                E.resetEventListeners();
                A.resetEventListeners();
                J.resetEventListeners();
                if (x)try {
                    x.element().parentNode.removeChild(x.element())
                } catch (j) {
                }
                z &&
                (L && L.parentElement && L.parentElement.removeEventListener("click", z.clickHandler), z.revertAlternateClickHandler());
                D(a.JWPLAYER_INSTREAM_DESTROYED, {reason: b ? "complete" : "destroyed"}, !0);
                K == d.PLAYING && L.play();
                f.destroyInstream(A.audioMode());
                J = null
            }
        };
        E.jwInstreamAddEventListener = function (a, b) {
            E.addEventListener(a, b)
        };
        E.jwInstreamRemoveEventListener = function (a, b) {
            E.removeEventListener(a, b)
        };
        E.jwInstreamPlay = function () {
            A.play(!0);
            e.state = d.PLAYING;
            z.show()
        };
        E.jwInstreamPause = function () {
            A.pause(!0);
            e.state =
                d.PAUSED;
            b.jwGetControls() && z.show()
        };
        E.jwInstreamSeek = function (a) {
            A.seek(a)
        };
        E.jwInstreamSetText = function (a) {
            x.setText(a)
        };
        E.jwInstreamState = function () {
            return e.state
        };
        E.setControls = function (a) {
            a ? I.show() : I.hide()
        };
        E.jwPlay = function () {
            "true" == s.controlbarpausable.toString().toLowerCase() && E.jwInstreamPlay()
        };
        E.jwPause = function () {
            "true" == s.controlbarpausable.toString().toLowerCase() && E.jwInstreamPause()
        };
        E.jwStop = function () {
            "true" == s.controlbarstoppable.toString().toLowerCase() && (b.jwInstreamDestroy(!1,
                E), b.jwStop())
        };
        E.jwSeek = function (a) {
            switch (s.controlbarseekable.toLowerCase()) {
                case "always":
                    E.jwInstreamSeek(a);
                    break;
                case "backwards":
                    J.position > a && E.jwInstreamSeek(a)
            }
        };
        E.jwSeekDrag = function (a) {
            J.seekDrag(a)
        };
        E.jwGetPosition = function () {
        };
        E.jwGetDuration = function () {
        };
        E.jwGetWidth = b.jwGetWidth;
        E.jwGetHeight = b.jwGetHeight;
        E.jwGetFullscreen = b.jwGetFullscreen;
        E.jwSetFullscreen = b.jwSetFullscreen;
        E.jwGetVolume = function () {
            return e.volume
        };
        E.jwSetVolume = function (a) {
            J.setVolume(a);
            b.jwSetVolume(a)
        };
        E.jwGetMute =
            function () {
                return e.mute
            };
        E.jwSetMute = function (a) {
            J.setMute(a);
            b.jwSetMute(a)
        };
        E.jwGetState = function () {
            return !J ? d.IDLE : J.state
        };
        E.jwGetPlaylist = function () {
            return [F]
        };
        E.jwGetPlaylistIndex = function () {
            return 0
        };
        E.jwGetStretching = function () {
            return e.config.stretching
        };
        E.jwAddEventListener = function (a, b) {
            E.addEventListener(a, b)
        };
        E.jwRemoveEventListener = function (a, b) {
            E.removeEventListener(a, b)
        };
        E.jwSetCurrentQuality = function () {
        };
        E.jwGetQualityLevels = function () {
            return []
        };
        E.jwGetControls = function () {
            return b.jwGetControls()
        };
        E.skin = b.skin;
        E.id = b.id + "_instream";
        return E
    }
})(window.jwplayer);
(function (g) {
    var l = g.utils, c = l.css, a = g.events.state, d = g.html5.logo = function (k, b) {
        function e(b) {
            l.exists(b) && b.stopPropagation && b.stopPropagation();
            if (!t || !p.link)f.jwGetState() == a.IDLE || f.jwGetState() == a.PAUSED ? f.jwPlay() : f.jwPause();
            t && p.link && (f.jwPause(), f.jwSetFullscreen(!1), window.open(p.link, p.linktarget))
        }

        var f = k, C = f.id + "_logo", p, q, v = d.defaults, t = !1;
        this.resize = function () {
        };
        this.element = function () {
            return q
        };
        this.offset = function (a) {
            c("#" + C + " ", {"margin-bottom": a})
        };
        this.position = function () {
            return p.position
        };
        this.margin = function () {
            return parseInt(p.margin)
        };
        this.hide = function (a) {
            if (p.hide || a)t = !1, q.style.visibility = "hidden", q.style.opacity = 0, q.style.display = "none"
        };
        this.show = function () {
            t = !0;
            q.style.visibility = "visible";
            q.style.opacity = 1
        };
        var h = "o";
        f.edition && (h = f.edition(), h = "pro" == h ? "p" : "premium" == h ? "r" : "ads" == h ? "a" : "free" == h ? "f" : "o");
        if ("o" == h || "f" == h)v.link = "http://www.longtailvideo.com/jwpabout/?a\x3dl\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3d" + h;
        p = l.extend_new({}, v, b);
        p.hide = "true" == p.hide.toString();
        q = document.createElement("img");
        q.className = "jwlogo1";
        q.id = C;
        if (p.file) {
            var v = /(\w+)-(\w+)/.exec(p.position), h = {}, m = p.margin;
            3 == v.length ? (h[v[1]] = m, h[v[2]] = m) : h.top = h.right = m;
            c("#" + C + " ", h);
            q.src = (p.prefix ? p.prefix : "") + p.file;
            l.isMobile() ? (new l.touch(q)).addEventListener(l.touchEvents.TAP, e) : q.onclick = e, q.style.display = "none"
        } else q.style.display = "none";
        return this
    };
    d.defaults = {prefix: l.repo(), file: "logo.png", linktarget: "_top", margin: 8, hide: !1, position: "top-right"};
    c(".jwlogo", {cursor: "pointer", position: "absolute"})
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = c.css;
    l.menu = function (d, g, b, e) {
        function f(a) {
            return !a || !a.src ? {} : {
                background: "url(" + a.src + ") no-repeat left",
                "background-size": a.width + "px " + a.height + "px"
            }
        }

        function C(a, b) {
            return function () {
                D(a);
                v && v(b)
            }
        }

        function p(a, b) {
            var c = document.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }

        function q(a) {
            return (a = b.getSkinElement("tooltip", a)) ? a : {width: 0, height: 0, src: void 0}
        }

        var v = e, t = new l.overlay(g + "_overlay", b);
        e = c.extend_new({
            fontcase: void 0, fontcolor: "#cccccc",
            fontsize: 11, fontweight: void 0, activecolor: "#ffffff", overcolor: "#ffffff"
        }, b.getComponentSettings("tooltip"));
        var h, m = [];
        this.element = function () {
            return t.element()
        };
        this.addOption = function (a, b) {
            var d = p("jwoption", h);
            d.id = g + "_option_" + b;
            d.innerHTML = a;
            c.isMobile() ? (new c.touch(d)).addEventListener(c.touchEvents.TAP, C(m.length, b)) : d.addEventListener("click", C(m.length, b));
            m.push(d)
        };
        this.clearOptions = function () {
            for (; 0 < m.length;)h.removeChild(m.pop())
        };
        var D = this.setActive = function (a) {
            for (var b = 0; b < m.length; b++) {
                var c =
                    m[b];
                c.className = c.className.replace(" active", "");
                b == a && (c.className += " active")
            }
        };
        this.show = t.show;
        this.hide = t.hide;
        this.offsetX = t.offsetX;
        this.positionX = t.positionX;
        this.constrainX = t.constrainX;
        h = p("jwmenu");
        h.id = g;
        var w = q("menuTop" + d);
        d = q("menuOption");
        var n = q("menuOptionOver"), F = q("menuOptionActive");
        if (w && w.image) {
            var r = new Image;
            r.src = w.src;
            r.width = w.width;
            r.height = w.height;
            h.appendChild(r)
        }
        d && (w = "#" + g + " .jwoption", a(w, c.extend_new(f(d), {
            height: d.height,
            color: e.fontcolor,
            "padding-left": d.width,
            font: e.fontweight + " " + e.fontsize + "px Arial,Helvetica,sans-serif",
            "line-height": d.height,
            "text-transform": "upper" == e.fontcase ? "uppercase" : void 0
        })), a(w + ":hover", c.extend_new(f(n), {color: e.overcolor})), a(w + ".active", c.extend_new(f(F), {color: e.activecolor})));
        t.setContents(h)
    };
    a("." + "jwmenu jwoption".replace(/ /g, " ."), {cursor: "pointer", "white-space": "nowrap", position: "relative"})
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils, a = g.events;
    l.model = function (d, k) {
        function b(a) {
            var b = t[a.type];
            if (b && b.length) {
                for (var c = !1, d = 0; d < b.length; d++) {
                    var f = b[d].split("-\x3e"), h = f[0], f = f[1] || h;
                    e[f] !== a[h] && (e[f] = a[h], c = !0)
                }
                c && e.sendEvent(a.type, a)
            } else e.sendEvent(a.type, a)
        }

        var e = this, f, C = {html5: k || new l.video(null, "default")}, p = c.getCookies(), q = {
            controlbar: {},
            display: {}
        }, v = {
            autostart: !1,
            controls: !0,
            fullscreen: !1,
            height: 320,
            mobilecontrols: !1,
            mute: !1,
            playlist: [],
            playlistposition: "none",
            playlistsize: 180,
            playlistlayout: "extend_newed",
            repeat: !1,
            stretching: c.stretching.UNIFORM,
            width: 480,
            volume: 90
        }, t = {};
        t[a.JWPLAYER_MEDIA_MUTE] = ["mute"];
        t[a.JWPLAYER_MEDIA_VOLUME] = ["volume"];
        t[a.JWPLAYER_PLAYER_STATE] = ["newstate-\x3estate"];
        t[a.JWPLAYER_MEDIA_BUFFER] = ["bufferPercent-\x3ebuffer"];
        t[a.JWPLAYER_MEDIA_TIME] = ["position", "duration"];
        e.setVideo = function (a) {
            if (a !== f) {
                if (f) {
                    f.removeGlobalListener(b);
                    var c = f.getContainer();
                    c && (f.remove(), a.setContainer(c))
                }
                f = a;
                f.volume(e.volume);
                f.mute(e.mute);
                f.addGlobalListener(b)
            }
        };
        e.destroy = function () {
            f && (f.removeGlobalListener(b), f.destroy())
        };
        e.getVideo = function () {
            return f
        };
        e.seekDrag = function (a) {
            f.seekDrag(a)
        };
        e.setFullscreen = function (b) {
            b = !!b;
            b != e.fullscreen && (e.fullscreen = b, e.sendEvent(a.JWPLAYER_FULLSCREEN, {fullscreen: b}))
        };
        e.setPlaylist = function (b) {
            e.playlist = c.filterPlaylist(b, !1, e.androidhls);
            0 === e.playlist.length ? e.sendEvent(a.JWPLAYER_ERROR, {message: "Error loading playlist: No playable sources found"}) : (e.sendEvent(a.JWPLAYER_PLAYLIST_LOADED, {playlist: g(e.id).getPlaylist()}),
                e.item = -1, e.setItem(0))
        };
        e.setItem = function (b) {
            var d = !1;
            b == e.playlist.length || -1 > b ? (b = 0, d = !0) : b = -1 == b || b > e.playlist.length ? e.playlist.length - 1 : b;
            if (d || b !== e.item) {
                e.item = b;
                e.sendEvent(a.JWPLAYER_PLAYLIST_ITEM, {index: e.item});
                d = e.playlist[b];
                b = C.html5;
                if (e.playlist.length) {
                    var h = d.sources[0];
                    if ("youtube" === h.type || c.isYouTube(h.file))b = C.youtube, b !== f && (b && b.destroy(), b = C.youtube = new l.youtube(e.id))
                }
                e.setVideo(b);
                b.init && b.init(d)
            }
        };
        e.setVolume = function (d) {
            e.mute && 0 < d && e.setMute(!1);
            d = Math.round(d);
            e.mute || c.saveCookie("volume", d);
            b({type: a.JWPLAYER_MEDIA_VOLUME, volume: d});
            f.volume(d)
        };
        e.setMute = function (d) {
            c.exists(d) || (d = !e.mute);
            c.saveCookie("mute", d);
            b({type: a.JWPLAYER_MEDIA_MUTE, mute: d});
            f.mute(d)
        };
        e.componentConfig = function (a) {
            return q[a]
        };
        c.extend_new(e, new a.eventdispatcher);
        var h = e, m = c.extend_new({}, v, p, d);
        c.foreach(m, function (a, b) {
            m[a] = c.serialize(b)
        });
        h.config = m;
        c.extend_new(e, {id: d.id, state: a.state.IDLE, duration: -1, position: 0, buffer: 0}, e.config);
        e.playlist = [];
        e.setItem(0)
    }
})(jwplayer);
(function (g) {
    var l = g.utils, c = l.css, a = l.transitionStyle, d = "top", k = "bottom", b = "right", e = "left", f = document, C = {
        fontcase: void 0,
        fontcolor: "#ffffff",
        fontsize: 12,
        fontweight: void 0,
        activecolor: "#ffffff",
        overcolor: "#ffffff"
    };
    g.html5.overlay = function (a, g, v) {
        function t(a) {
            return "#" + F + (a ? " ." + a : "")
        }

        function h(a, b) {
            var c = f.createElement("div");
            a && (c.className = a);
            b && b.appendChild(c);
            return c
        }

        function m(a, b) {
            var d;
            d = (d = r.getSkinElement("tooltip", a)) ? d : {width: 0, height: 0, src: "", image: void 0, ready: !1};
            var e = h(b, y);
            c.style(e, D(d));
            return [e, d]
        }

        function D(a) {
            return {background: "url(" + a.src + ") center", "background-size": a.width + "px " + a.height + "px"}
        }

        function w(a, f) {
            f || (f = "");
            var h = m("cap" + a + f, "jwborder jw" + a + (f ? f : "")), g = h[0], h = h[1], s = l.extend_new(D(h), {
                width: a == e || f == e || a == b || f == b ? h.width : void 0,
                height: a == d || f == d || a == k || f == k ? h.height : void 0
            });
            s[a] = a == k && !j || a == d && j ? I.height : 0;
            f && (s[f] = 0);
            c.style(g, s);
            g = {};
            s = {};
            h = {
                left: h.width,
                right: h.width,
                top: (j ? I.height : 0) + h.height,
                bottom: (j ? 0 : I.height) + h.height
            };
            f && (g[f] = h[f], g[a] =
                0, s[a] = h[a], s[f] = 0, c(t("jw" + a), g), c(t("jw" + f), s), B[a] = h[a], B[f] = h[f])
        }

        var n = this, F = a, r = g, j = v, y, s, I, L;
        a = l.extend_new({}, C, r.getComponentSettings("tooltip"));
        var B = {};
        n.element = function () {
            return y
        };
        n.setContents = function (a) {
            l.empty(s);
            s.appendChild(a)
        };
        n.positionX = function (a) {
            c.style(y, {left: Math.round(a)})
        };
        n.constrainX = function (a, b) {
            if (n.showing && 0 !== a.width && n.offsetX(0)) {
                b && c.unblock();
                var d = l.bounds(y);
                0 !== d.width && (d.right > a.right ? n.offsetX(a.right - d.right) : d.left < a.left && n.offsetX(a.left - d.left))
            }
        };
        n.offsetX = function (a) {
            a = Math.round(a);
            var b = y.clientWidth;
            0 !== b && (c.style(y, {"margin-left": Math.round(-b / 2) + a}), c.style(L, {"margin-left": Math.round(-I.width / 2) - a}));
            return b
        };
        n.borderWidth = function () {
            return B.left
        };
        n.show = function () {
            n.showing = !0;
            c.style(y, {opacity: 1, visibility: "visible"})
        };
        n.hide = function () {
            n.showing = !1;
            c.style(y, {opacity: 0, visibility: "hidden"})
        };
        y = h(".jwoverlay".replace(".", ""));
        y.id = F;
        g = m("arrow", "jwarrow");
        L = g[0];
        I = g[1];
        c.style(L, {
            position: "absolute", bottom: j ? void 0 : 0, top: j ? 0 :
                void 0, width: I.width, height: I.height, left: "50%"
        });
        w(d, e);
        w(k, e);
        w(d, b);
        w(k, b);
        w(e);
        w(b);
        w(d);
        w(k);
        g = m("background", "jwback");
        c.style(g[0], {left: B.left, right: B.right, top: B.top, bottom: B.bottom});
        s = h("jwcontents", y);
        c(t("jwcontents") + " *", {
            color: a.fontcolor,
            font: a.fontweight + " " + a.fontsize + "px Arial,Helvetica,sans-serif",
            "text-transform": "upper" == a.fontcase ? "uppercase" : void 0
        });
        j && l.transform(t("jwarrow"), "rotate(180deg)");
        c.style(y, {padding: B.top + 1 + "px " + B.right + "px " + (B.bottom + 1) + "px " + B.left + "px"});
        n.showing = !1
    };
    c(".jwoverlay", {position: "absolute", visibility: "hidden", opacity: 0});
    c(".jwoverlay .jwcontents", {position: "relative", "z-index": 1});
    c(".jwoverlay .jwborder", {position: "absolute", "background-size": "100% 100%"}, !0);
    c(".jwoverlay .jwback", {position: "absolute", "background-size": "100% 100%"});
    a(".jwoverlay", "opacity .25s, visibility .25s")
})(jwplayer);
(function (g) {
    var l = g.html5, c = g.utils;
    l.player = function (a) {
        function d() {
            for (var a = C.playlist, b = [], c = 0; c < a.length; c++)b.push(k(a[c]));
            return b
        }

        function k(a) {
            var b = {description: a.description, file: a.file, image: a.image, mediaid: a.mediaid, title: a.title};
            c.foreach(a, function (a, c) {
                b[a] = c
            });
            b.sources = [];
            b.tracks = [];
            0 < a.sources.length && c.foreach(a.sources, function (a, c) {
                b.sources.push({
                    file: c.file,
                    type: c.type ? c.type : void 0,
                    label: c.label,
                    "default": c["default"] ? !0 : !1
                })
            });
            0 < a.tracks.length && c.foreach(a.tracks, function (a,
                                                                 c) {
                b.tracks.push({
                    file: c.file,
                    kind: c.kind ? c.kind : void 0,
                    label: c.label,
                    "default": c["default"] ? !0 : !1
                })
            });
            !a.file && 0 < a.sources.length && (b.file = a.sources[0].file);
            return b
        }

        function b() {
            f.jwPlay = q.play;
            f.jwPause = q.pause;
            f.jwStop = q.stop;
            f.jwSeek = q.seek;
            f.jwSetVolume = q.setVolume;
            f.jwSetMute = q.setMute;
            f.jwLoad = function (a) {
                q.load(a)
            };
            f.jwPlaylistNext = q.next;
            f.jwPlaylistPrev = q.prev;
            f.jwPlaylistItem = q.item;
            f.jwSetFullscreen = q.setFullscreen;
            f.jwResize = p.resize;
            f.jwSeekDrag = C.seekDrag;
            f.jwGetQualityLevels = q.getQualityLevels;
            f.jwGetCurrentQuality = q.getCurrentQuality;
            f.jwSetCurrentQuality = q.setCurrentQuality;
            f.jwGetCaptionsList = q.getCaptionsList;
            f.jwGetCurrentCaptions = q.getCurrentCaptions;
            f.jwSetCurrentCaptions = q.setCurrentCaptions;
            f.jwGetSafeRegion = p.getSafeRegion;
            f.jwForceState = p.forceState;
            f.jwReleaseState = p.releaseState;
            f.jwGetPlaylistIndex = e("item");
            f.jwGetPosition = e("position");
            f.jwGetDuration = e("duration");
            f.jwGetBuffer = e("buffer");
            f.jwGetWidth = e("width");
            f.jwGetHeight = e("height");
            f.jwGetFullscreen = e("fullscreen");
            f.jwGetVolume = e("volume");
            f.jwGetMute = e("mute");
            f.jwGetState = e("state");
            f.jwGetStretching = e("stretching");
            f.jwGetPlaylist = d;
            f.jwGetControls = e("controls");
            f.jwDetachMedia = q.detachMedia;
            f.jwAttachMedia = q.attachMedia;
            f.jwPlayAd = function (a) {
                var b = g(f.id).plugins;
                b.vast && b.vast.jwPlayAd(a)
            };
            f.jwPauseAd = function () {
                var a = g(f.id).plugins;
                a.googima && a.googima.jwPauseAd()
            };
            f.jwDestroyGoogima = function () {
                var a = g(f.id).plugins;
                a.googima && a.googima.jwDestroyGoogima()
            };
            f.jwInitInstream = function () {
                f.jwInstreamDestroy();
                t = new l.instream(f, C, p, q);
                t.init()
            };
            f.jwLoadItemInstream = function (a, b) {
                if (!t)throw"Instream player undefined";
                t.load(a, b)
            };
            f.jwLoadArrayInstream = function (a, b) {
                if (!t)throw"Instream player undefined";
                t.load(a, b)
            };
            f.jwSetControls = function (a) {
                p.setControls(a);
                t && t.setControls(a)
            };
            f.jwInstreamPlay = function () {
                t && t.jwInstreamPlay()
            };
            f.jwInstreamPause = function () {
                t && t.jwInstreamPause()
            };
            f.jwInstreamState = function () {
                return t ? t.jwInstreamState() : ""
            };
            f.jwInstreamDestroy = function (a, b) {
                if (b = b || t)b.jwInstreamDestroy(a || !1), b === t && (t = void 0)
            };
            f.jwInstreamAddEventListener = function (a, b) {
                t && t.jwInstreamAddEventListener(a, b)
            };
            f.jwInstreamRemoveEventListener = function (a, b) {
                t && t.jwInstreamRemoveEventListener(a, b)
            };
            f.jwPlayerDestroy = function () {
                p && p.destroy();
                C && C.destroy();
                v && v.resetEventListeners()
            };
            f.jwInstreamSetText = function (a) {
                t && t.jwInstreamSetText(a)
            };
            f.jwIsBeforePlay = function () {
                return q.checkBeforePlay()
            };
            f.jwIsBeforeComplete = function () {
                return C.getVideo().checkComplete()
            };
            f.jwSetCues = p.addCues;
            f.jwAddEventListener =
                q.addEventListener;
            f.jwRemoveEventListener = q.removeEventListener;
            f.jwDockAddButton = p.addButton;
            f.jwDockRemoveButton = p.removeButton
        }

        function e(a) {
            return function () {
                return C[a]
            }
        }

        var f = this, C, p, q, v, t;
        C = new l.model(a);
        f.id = C.id;
        f._model = C;
        c.css.block(f.id);
        p = new l.view(f, C);
        q = new l.controller(C, p);
        b();
        f.initializeAPI = b;
        v = new l.setup(C, p);
        v.addEventListener(g.events.JWPLAYER_READY, function (a) {
            q.playerReady(a);
            c.css.unblock(f.id)
        });
        v.addEventListener(g.events.JWPLAYER_ERROR, function (a) {
            c.log("There was a problem setting up the player: ",
                a);
            c.css.unblock(f.id)
        });
        v.start()
    }
})(window.jwplayer);
(function (g) {
    var l = {
        size: 180,
        backgroundcolor: "#333333",
        fontcolor: "#999999",
        overcolor: "#CCCCCC",
        activecolor: "#CCCCCC",
        titlecolor: "#CCCCCC",
        titleovercolor: "#FFFFFF",
        titleactivecolor: "#FFFFFF",
        fontweight: "normal",
        titleweight: "normal",
        fontsize: 11,
        titlesize: 13
    }, c = jwplayer.events, a = jwplayer.utils, d = a.css, k = a.isMobile(), b = document;
    g.playlistcomponent = function (e, f) {
        function C(a) {
            return "#" + m.id + (a ? " ." + a : "")
        }

        function p(a, c) {
            var d = b.createElement(a);
            c && (d.className = c);
            return d
        }

        function q(a) {
            return function () {
                r =
                    a;
                v.jwPlaylistItem(a);
                v.jwPlay(!0)
            }
        }

        var v = e, t = v.skin, h = a.extend_new({}, l, v.skin.getComponentSettings("playlist"), f), m, D, w, n, F = -1, r, j, y = 76, s = {
            background: void 0,
            divider: void 0,
            item: void 0,
            itemOver: void 0,
            itemImage: void 0,
            itemActive: void 0
        }, I, L = this;
        L.element = function () {
            return m
        };
        L.redraw = function () {
            j && j.redraw()
        };
        L.show = function () {
            a.show(m)
        };
        L.hide = function () {
            a.hide(m)
        };
        m = p("div", "jwplaylist");
        m.id = v.id + "_jwplayer_playlistcomponent";
        I = "basic" == v._model.playlistlayout;
        D = p("div", "jwlistcontainer");
        m.appendChild(D);
        a.foreach(s, function (a) {
            s[a] = t.getSkinElement("playlist", a)
        });
        I && (y = 32);
        s.divider && (y += s.divider.height);
        var B = 0, K = 0, u = 0;
        a.clearCss(C());
        d(C(), {"background-color": h.backgroundcolor});
        d(C("jwlist"), {"background-image": s.background ? " url(" + s.background.src + ")" : ""});
        d(C("jwlist *"), {
            color: h.fontcolor,
            font: h.fontweight + " " + h.fontsize + "px Arial, Helvetica, sans-serif"
        });
        s.itemImage ? (B = (y - s.itemImage.height) / 2 + "px ", K = s.itemImage.width, u = s.itemImage.height) : (K = 4 * y / 3, u = y);
        s.divider && d(C("jwplaylistdivider"),
            {
                "background-image": "url(" + s.divider.src + ")",
                "background-size": "100% " + s.divider.height + "px",
                width: "100%",
                height: s.divider.height
            });
        d(C("jwplaylistimg"), {height: u, width: K, margin: B ? B + "0 " + B + B : "0 5px 0 0"});
        d(C("jwlist li"), {
            "background-image": s.item ? "url(" + s.item.src + ")" : "",
            height: y,
            overflow: "hidden",
            "background-size": "100% " + y + "px",
            cursor: "pointer"
        });
        B = {overflow: "hidden"};
        "" !== h.activecolor && (B.color = h.activecolor);
        s.itemActive && (B["background-image"] = "url(" + s.itemActive.src + ")");
        d(C("jwlist li.active"),
            B);
        d(C("jwlist li.active .jwtitle"), {color: h.titleactivecolor});
        d(C("jwlist li.active .jwdescription"), {color: h.activecolor});
        B = {overflow: "hidden"};
        "" !== h.overcolor && (B.color = h.overcolor);
        s.itemOver && (B["background-image"] = "url(" + s.itemOver.src + ")");
        k || (d(C("jwlist li:hover"), B), d(C("jwlist li:hover .jwtitle"), {color: h.titleovercolor}), d(C("jwlist li:hover .jwdescription"), {color: h.overcolor}));
        d(C("jwtextwrapper"), {height: y, position: "relative"});
        d(C("jwtitle"), {
            overflow: "hidden",
            display: "inline-block",
            height: I ? y : 20,
            color: h.titlecolor,
            "font-size": h.titlesize,
            "font-weight": h.titleweight,
            "margin-top": I ? "0 10px" : 10,
            "margin-left": 10,
            "margin-right": 10,
            "line-height": I ? y : 20
        });
        d(C("jwdescription"), {
            display: "block",
            "font-size": h.fontsize,
            "line-height": 18,
            "margin-left": 10,
            "margin-right": 10,
            overflow: "hidden",
            height: 36,
            position: "relative"
        });
        v.jwAddEventListener(c.JWPLAYER_PLAYLIST_LOADED, function () {
            D.innerHTML = "";
            for (var b = v.jwGetPlaylist(), c = [], e = 0; e < b.length; e++)b[e]["ova.hidden"] || c.push(b[e]);
            if (w = c) {
                b =
                    p("ul", "jwlist");
                b.id = m.id + "_ul" + Math.round(1E7 * Math.random());
                n = b;
                for (b = 0; b < w.length; b++) {
                    var f = b, c = w[f], e = p("li", "jwitem"), h = void 0;
                    e.id = n.id + "_item_" + f;
                    0 < f ? (h = p("div", "jwplaylistdivider"), e.appendChild(h)) : (f = s.divider ? s.divider.height : 0, e.style.height = y - f + "px", e.style["background-size"] = "100% " + (y - f) + "px");
                    f = p("div", "jwplaylistimg jwfill");
                    h = void 0;
                    c["playlist.image"] && s.itemImage ? h = c["playlist.image"] : c.image && s.itemImage ? h = c.image : s.itemImage && (h = s.itemImage.src);
                    h && !I && (d("#" + e.id + " .jwplaylistimg",
                        {"background-image": h}), e.appendChild(f));
                    f = p("div", "jwtextwrapper");
                    h = p("span", "jwtitle");
                    h.innerHTML = c && c.title ? c.title : "";
                    f.appendChild(h);
                    c.description && !I && (h = p("span", "jwdescription"), h.innerHTML = c.description, f.appendChild(h));
                    e.appendChild(f);
                    c = e;
                    k ? (new a.touch(c)).addEventListener(a.touchEvents.TAP, q(b)) : c.onclick = q(b);
                    n.appendChild(c)
                }
                F = v.jwGetPlaylistIndex();
                D.appendChild(n);
                j = new g.playlistslider(m.id + "_slider", v.skin, m, n)
            }
        });
        v.jwAddEventListener(c.JWPLAYER_PLAYLIST_ITEM, function (a) {
            0 <=
            F && (b.getElementById(n.id + "_item_" + F).className = "jwitem", F = a.index);
            b.getElementById(n.id + "_item_" + a.index).className = "jwitem active";
            a = v.jwGetPlaylistIndex();
            a != r && (r = -1, j && j.visible() && j.thumbPosition(a / (v.jwGetPlaylist().length - 1)))
        });
        v.jwAddEventListener(c.JWPLAYER_RESIZE, function () {
            L.redraw()
        });
        return this
    };
    d(".jwplaylist", {position: "absolute", width: "100%", height: "100%"});
    a.dragStyle(".jwplaylist", "none");
    d(".jwplaylist .jwplaylistimg", {
        position: "relative", width: "100%", "float": "left", margin: "0 5px 0 0",
        background: "#000", overflow: "hidden"
    });
    d(".jwplaylist .jwlist", {
        position: "absolute",
        width: "100%",
        "list-style": "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    });
    d(".jwplaylist .jwlistcontainer", {position: "absolute", overflow: "hidden", width: "100%", height: "100%"});
    d(".jwplaylist .jwlist li", {width: "100%"});
    d(".jwplaylist .jwtextwrapper", {overflow: "hidden"});
    d(".jwplaylist .jwplaylistdivider", {position: "absolute"});
    k && a.transitionStyle(".jwplaylist .jwlist", "top .35s")
})(jwplayer.html5);
(function (g) {
    function l() {
        var a = [], b;
        for (b = 0; b < arguments.length; b++)a.push(".jwplaylist ." + arguments[b]);
        return a.join(",")
    }

    var c = jwplayer.utils, a = c.touchEvents, d = c.css, k = document, b = window;
    g.playlistslider = function (e, f, g, l) {
        function q(a) {
            return "#" + y.id + (a ? " ." + a : "")
        }

        function v(a, b, c, e) {
            var f = k.createElement("div");
            a && (f.className = a, b && d(q(a), {
                "background-image": b.src ? b.src : void 0,
                "background-repeat": e ? "repeat-y" : "no-repeat",
                height: e ? void 0 : b.height
            }));
            c && c.appendChild(f);
            return f
        }

        function t(a) {
            return (a =
                r.getSkinElement("playlist", a)) ? a : {width: 0, height: 0, src: void 0}
        }

        function h(a) {
            if (A)return a = a ? a : b.event, X(B - (a.detail ? -1 * a.detail : a.wheelDelta / 40) / 10), a.stopPropagation && a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.cancelBubble = !0, a.cancel = !0, !1
        }

        function m(a) {
            0 == a.button && (L = !0);
            k.onselectstart = function () {
                return !1
            };
            b.addEventListener("mousemove", w, !1);
            b.addEventListener("mouseup", F, !1)
        }

        function D(a) {
            X(B - 2 * a.deltaY / j.clientHeight)
        }

        function w(a) {
            if (L || "click" == a.type) {
                var b =
                    c.bounds(s), d = I.clientHeight / 2;
                X((a.pageY - b.top - d) / (b.height - d - d))
            }
        }

        function n(a) {
            return function (b) {
                0 < b.button || (X(B + 0.05 * a), K = setTimeout(function () {
                    u = setInterval(function () {
                        X(B + 0.05 * a)
                    }, 50)
                }, 500))
            }
        }

        function F() {
            L = !1;
            b.removeEventListener("mousemove", w);
            b.removeEventListener("mouseup", F);
            k.onselectstart = void 0;
            clearTimeout(K);
            clearInterval(u)
        }

        var r = f, j = l, y, s, I, L, B = 0, K, u;
        f = c.isMobile();
        var A = !0, x, z, H, J, W, E, S, Y, O;
        this.element = function () {
            return y
        };
        this.visible = function () {
            return A
        };
        var T = this.redraw =
            function () {
                clearTimeout(O);
                O = setTimeout(function () {
                    if (j && j.clientHeight) {
                        var a = j.parentNode.clientHeight / j.clientHeight;
                        0 > a && (a = 0);
                        1 < a ? A = !1 : (A = !0, d(q("jwthumb"), {height: Math.max(s.clientHeight * a, W.height + E.height)}));
                        d(q(), {visibility: A ? "visible" : "hidden"});
                        j && (j.style.width = A ? j.parentElement.clientWidth - H.width + "px" : "")
                    } else O = setTimeout(T, 10)
                }, 0)
            }, X = this.thumbPosition = function (a) {
            isNaN(a) && (a = 0);
            B = Math.max(0, Math.min(1, a));
            d(q("jwthumb"), {top: S + (s.clientHeight - I.clientHeight) * B});
            l && (l.style.top =
                Math.min(0, y.clientHeight - l.scrollHeight) * B + "px")
        };
        y = v("jwslider", null, g);
        y.id = e;
        e = new c.touch(j);
        f ? e.addEventListener(a.DRAG, D) : (y.addEventListener("mousedown", m, !1), y.addEventListener("click", w, !1));
        x = t("sliderCapTop");
        z = t("sliderCapBottom");
        H = t("sliderRail");
        e = t("sliderRailCapTop");
        g = t("sliderRailCapBottom");
        J = t("sliderThumb");
        W = t("sliderThumbCapTop");
        E = t("sliderThumbCapBottom");
        S = x.height;
        Y = z.height;
        d(q(), {width: H.width});
        d(q("jwrail"), {top: S, bottom: Y});
        d(q("jwthumb"), {top: S});
        x = v("jwslidertop",
            x, y);
        z = v("jwsliderbottom", z, y);
        s = v("jwrail", null, y);
        I = v("jwthumb", null, y);
        f || (x.addEventListener("mousedown", n(-1), !1), z.addEventListener("mousedown", n(1), !1));
        v("jwrailtop", e, s);
        v("jwrailback", H, s, !0);
        v("jwrailbottom", g, s);
        d(q("jwrailback"), {top: e.height, bottom: g.height});
        v("jwthumbtop", W, I);
        v("jwthumbback", J, I, !0);
        v("jwthumbbottom", E, I);
        d(q("jwthumbback"), {top: W.height, bottom: E.height});
        T();
        j && !f && (j.addEventListener("mousewheel", h, !1), j.addEventListener("DOMMouseScroll", h, !1));
        return this
    };
    d(l("jwslider"),
        {
            position: "absolute",
            height: "100%",
            visibility: "hidden",
            right: 0,
            top: 0,
            cursor: "pointer",
            "z-index": 1,
            overflow: "hidden"
        });
    d(l("jwslider") + " *", {
        position: "absolute",
        width: "100%",
        "background-position": "center",
        "background-size": "100% 100%",
        overflow: "hidden"
    });
    d(l("jwslidertop", "jwrailtop", "jwthumbtop"), {top: 0});
    d(l("jwsliderbottom", "jwrailbottom", "jwthumbbottom"), {bottom: 0})
})(jwplayer.html5);
(function (g) {
    var l = jwplayer.utils, c = l.css, a = document, d = "none";
    g.rightclick = function (c, b) {
        function e(b) {
            var c = a.createElement("div");
            c.className = b.replace(".", "");
            return c
        }

        function f() {
            q || (v.style.display = d)
        }

        var C, p = l.extend_new({
            aboutlink: "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3do",
            abouttext: "About JW Player " + g.version + "..."
        }, b), q = !1, v, t;
        this.element = function () {
            return v
        };
        this.destroy = function () {
            a.removeEventListener("mousedown", f, !1)
        };
        C = a.getElementById(c.id);
        v = e(".jwclick");
        v.id = c.id + "_menu";
        v.style.display = d;
        C.oncontextmenu = function (a) {
            if (!q) {
                null == a && (a = window.event);
                var b = null != a.target ? a.target : a.srcElement, c = l.bounds(C), b = l.bounds(b);
                v.style.display = d;
                v.style.left = (a.offsetX ? a.offsetX : a.layerX) + b.left - c.left + "px";
                v.style.top = (a.offsetY ? a.offsetY : a.layerY) + b.top - c.top + "px";
                v.style.display = "block";
                a.preventDefault()
            }
        };
        v.onmouseover = function () {
            q = !0
        };
        v.onmouseout = function () {
            q = !1
        };
        a.addEventListener("mousedown", f, !1);
        t = e(".jwclick_item");
        t.innerHTML =
            p.abouttext;
        t.onclick = function () {
            window.top.location = p.aboutlink
        };
        v.appendChild(t);
        C.appendChild(v)
    };
    c(".jwclick", {
        "background-color": "#FFF",
        "-webkit-border-radius": 5,
        "-moz-border-radius": 5,
        "border-radius": 5,
        height: "auto",
        border: "1px solid #bcbcbc",
        "font-family": '"MS Sans Serif", "Geneva", sans-serif',
        "font-size": 10,
        width: 320,
        "-webkit-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "-moz-box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        "box-shadow": "5px 5px 7px rgba(0,0,0,.10), 0px 1px 0px rgba(255,255,255,.3) inset",
        position: "absolute",
        "z-index": 999
    }, !0);
    c(".jwclick div", {
        padding: "8px 21px",
        margin: "0px",
        "background-color": "#FFF",
        border: "none",
        "font-family": '"MS Sans Serif", "Geneva", sans-serif',
        "font-size": 10,
        color: "inherit"
    }, !0);
    c(".jwclick_item", {padding: "8px 21px", "text-align": "left", cursor: "pointer"}, !0);
    c(".jwclick_item:hover", {"background-color": "#595959", color: "#FFF"}, !0);
    c(".jwclick_item a", {"text-decoration": d, color: "#000"},
        !0);
    c(".jwclick hr", {width: "100%", padding: 0, margin: 0, border: "1px #e9e9e9 solid"}, !0)
})(jwplayer.html5);
(function (g) {
    var l = g.html5, c = g.utils, a = g.events, d = 2, k = 4;
    l.setup = function (b, e) {
        function f() {
            for (var a = 0; a < F.length; a++) {
                var b = F[a], c;
                a:{
                    if (c = b.depends) {
                        c = c.toString().split(",");
                        for (var d = 0; d < c.length; d++)if (!h[c[d]]) {
                            c = !1;
                            break a
                        }
                    }
                    c = !0
                }
                if (c) {
                    F.splice(a, 1);
                    try {
                        b.method(), f()
                    } catch (e) {
                        v(e.message)
                    }
                    return
                }
            }
            0 < F.length && !w && setTimeout(f, 500)
        }

        function C() {
            h[d] = !0
        }

        function p(a) {
            v("Error loading skin: " + a)
        }

        function q() {
            n && (n.onload = null, n = n.onerror = null);
            clearTimeout(r);
            h[k] = !0
        }

        function v(b) {
            w = !0;
            D.sendEvent(a.JWPLAYER_ERROR,
                {message: b});
            t.setupError(b)
        }

        var t = e, h = {}, m, D = new a.eventdispatcher, w = !1, n, F = [{
            name: 1, method: function () {
                b.edition && "invalid" == b.edition() ? v("Error setting up player: Invalid license key") : h[1] = !0
            }, depends: !1
        }, {
            name: d, method: function () {
                m = new l.skin;
                m.load(b.config.skin, C, p)
            }, depends: 1
        }, {
            name: 3, method: function () {
                var a = c.typeOf(b.config.playlist);
                "array" === a ? (a = new g.playlist(b.config.playlist), b.setPlaylist(a), 0 === b.playlist.length || 0 === b.playlist[0].sources.length ? v("Error loading playlist: No playable sources found") :
                    h[3] = !0) : v("Playlist type not supported: " + a)
            }, depends: 1
        }, {
            name: k, method: function () {
                var a = b.playlist[b.item].image;
                a ? (n = new Image, n.onload = q, n.onerror = q, n.src = a, clearTimeout(r), r = setTimeout(q, 500)) : q()
            }, depends: 3
        }, {
            name: 5, method: function () {
                t.setup(m);
                h[5] = !0
            }, depends: k + "," + d
        }, {
            name: 6, method: function () {
                h[6] = !0
            }, depends: "5,3"
        }, {
            name: 7, method: function () {
                D.sendEvent(a.JWPLAYER_READY);
                h[7] = !0
            }, depends: 6
        }], r = -1;
        c.extend_new(this, D);
        this.start = f
    }
})(jwplayer);
(function (g) {
    g.skin = function () {
        var l = {}, c = !1;
        this.load = function (a, d, k) {
            new g.skinloader(a, function (a) {
                c = !0;
                l = a;
                "function" == typeof d && d()
            }, function (a) {
                "function" == typeof k && k(a)
            })
        };
        this.getSkinElement = function (a, d) {
            a = a.toLowerCase();
            d = d.toLowerCase();
            if (c)try {
                return l[a].elements[d]
            } catch (g) {
                jwplayer.utils.log("No such skin component / element: ", [a, d])
            }
            return null
        };
        this.getComponentSettings = function (a) {
            a = a.toLowerCase();
            return c && l && l[a] ? l[a].settings : null
        };
        this.getComponentLayout = function (a) {
            a = a.toLowerCase();
            if (c) {
                var d = l[a].layout;
                if (d && (d.left || d.right || d.center))return l[a].layout
            }
            return null
        }
    }
})(jwplayer.html5);
(function (g) {
    var l = jwplayer.utils, c = l.foreach, a = "Skin formatting error";
    g.skinloader = function (d, k, b) {
        function e(b) {
            t = b;
            l.ajax(l.getAbsolutePath(n), function (b) {
                try {
                    l.exists(b.responseXML) && C(b.responseXML)
                } catch (c) {
                    m(a)
                }
            }, function (a) {
                m(a)
            })
        }

        function f(a, b) {
            return a ? a.getElementsByTagName(b) : null
        }

        function C(a) {
            var b = f(a, "skin")[0];
            a = f(b, "component");
            var c = b.getAttribute("target"), b = parseFloat(b.getAttribute("pixelratio"));
            0 < b && (j = b);
            (!c || parseFloat(c) > parseFloat(jwplayer.version)) && m("Incompatible player version");
            if (0 === a.length)h(t); else for (c = 0; c < a.length; c++) {
                var d = v(a[c].getAttribute("name")), b = {
                    settings: {},
                    elements: {},
                    layout: {}
                }, e = f(f(a[c], "elements")[0], "element");
                t[d] = b;
                for (var g = 0; g < e.length; g++)q(e[g], d);
                if ((d = f(a[c], "settings")[0]) && 0 < d.childNodes.length) {
                    d = f(d, "setting");
                    for (e = 0; e < d.length; e++) {
                        var g = d[e].getAttribute("name"), k = d[e].getAttribute("value");
                        /color$/.test(g) && (k = l.stringToColor(k));
                        b.settings[v(g)] = k
                    }
                }
                if ((d = f(a[c], "layout")[0]) && 0 < d.childNodes.length) {
                    d = f(d, "group");
                    for (e = 0; e < d.length; e++) {
                        k =
                            d[e];
                        g = {elements: []};
                        b.layout[v(k.getAttribute("position"))] = g;
                        for (var n = 0; n < k.attributes.length; n++) {
                            var r = k.attributes[n];
                            g[r.name] = r.value
                        }
                        k = f(k, "*");
                        for (n = 0; n < k.length; n++) {
                            r = k[n];
                            g.elements.push({type: r.tagName});
                            for (var w = 0; w < r.attributes.length; w++) {
                                var F = r.attributes[w];
                                g.elements[n][v(F.name)] = F.value
                            }
                            l.exists(g.elements[n].name) || (g.elements[n].name = r.tagName)
                        }
                    }
                }
                D = !1;
                p()
            }
        }

        function p() {
            clearInterval(w);
            F || (w = setInterval(function () {
                var a = !0;
                c(t, function (b, d) {
                    "properties" != b && c(d.elements,
                        function (c) {
                            (t[v(b)] ? t[v(b)].elements[v(c)] : null).ready || (a = !1)
                        })
                });
                a && !D && (clearInterval(w), h(t))
            }, 100))
        }

        function q(a, b) {
            b = v(b);
            var c = new Image, d = v(a.getAttribute("name")), e = a.getAttribute("src");
            if (0 !== e.indexOf("data:image/png;base64,"))var f = l.getAbsolutePath(n), e = [f.substr(0, f.lastIndexOf("/")), b, e].join("/");
            t[b].elements[d] = {height: 0, width: 0, src: "", ready: !1, image: c};
            c.onload = function () {
                var a = b, e = t[v(a)] ? t[v(a)].elements[v(d)] : null;
                e ? (e.height = Math.round(c.height / j * r), e.width = Math.round(c.width /
                    j * r), e.src = c.src, e.ready = !0, p()) : l.log("Loaded an image for a missing element: " + a + "." + d)
            };
            c.onerror = function () {
                F = !0;
                p();
                m("Skin image not found: " + this.src)
            };
            c.src = e
        }

        function v(a) {
            return a ? a.toLowerCase() : ""
        }

        var t = {}, h = k, m = b, D = !0, w, n = d, F = !1, r = (jwplayer.utils.isMobile(), 1), j = 1;
        "string" != typeof n || "" === n ? C(g.defaultskin()) : "xml" != l.extension(n) ? m("Skin not a valid file type") : new g.skinloader("", e, m)
    }
})(jwplayer.html5);
(function (g) {
    var l = g.utils, c = g.events, a = l.css;
    g.html5.thumbs = function (d) {
        function k(a) {
            q = null;
            try {
                a = (new g.parsers.srt).parse(a.responseText, !0)
            } catch (c) {
                b(c.message);
                return
            }
            if ("array" !== l.typeOf(a))return b("Invalid data");
            C = a
        }

        function b(a) {
            q = null;
            l.log("Thumbnails could not be loaded: " + a)
        }

        function e(b, c, d) {
            b.onload = null;
            c.width || (c.width = b.width, c.height = b.height);
            c["background-image"] = b.src;
            a.style(f, c);
            d && d(c.width)
        }

        var f, C, p, q, v, t = {}, h, m = new c.eventdispatcher;
        l.extend_new(this, m);
        f = document.createElement("div");
        f.id = d;
        this.load = function (c) {
            a.style(f, {display: "none"});
            q && (q.onload = null, q.onreadystatechange = null, q.onerror = null, q.abort && q.abort(), q = null);
            h && (h.onload = null);
            c ? (p = c.split("?")[0].split("/").slice(0, -1).join("/"), q = l.ajax(c, k, b, !0)) : (C = v = h = null, t = {})
        };
        this.element = function () {
            return f
        };
        this.updateTimeline = function (a, c) {
            if (C) {
                for (var d = 0; d < C.length && a > C[d].end;)d++;
                d === C.length && d--;
                d = C[d].text;
                a:{
                    var f = d;
                    if (f && f !== v) {
                        v = f;
                        0 > f.indexOf("://") && (f = p ? p + "/" + f : f);
                        var g = {
                            display: "block", margin: "0 auto",
                            "background-position": "0 0", width: 0, height: 0
                        };
                        if (0 < f.indexOf("#xywh"))try {
                            var j = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(f), f = j[1];
                            g["background-position"] = -1 * j[2] + "px " + -1 * j[3] + "px";
                            g.width = j[4];
                            g.height = j[5]
                        } catch (k) {
                            b("Could not parse thumbnail");
                            break a
                        }
                        var l = t[f];
                        l ? e(l, g, c) : (l = new Image, l.onload = function () {
                            e(l, g, c)
                        }, t[f] = l, l.src = f);
                        h && (h.onload = null);
                        h = l
                    }
                }
                return d
            }
        }
    }
})(jwplayer);
(function (g) {
    var l = g.jwplayer, c = l.html5, a = l.utils, d = l.events, k = d.state, b = a.css, e = a.bounds, f = a.isMobile(), C = a.isIPad(), p = a.isIPod(), q = document, v = "aspectMode", t = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], h = !0, m = !h, D = m, w = "hidden", n = "none", F = "block";
    c.view = function (r, j) {
        function y(b) {
            b = a.between(j.position + b, 0, this.getDuration());
            this.seek(b)
        }

        function s(b) {
            b = a.between(this.getVolume() + b, 0, 100);
            this.setVolume(b)
        }

        function I(a) {
            var b;
            b = a.ctrlKey || a.metaKey ? !1 :
                j.controls ? !0 : !1;
            if (!b)return !0;
            M.adMode() || (ma(), H());
            b = l(r.id);
            switch (a.keyCode) {
                case 27:
                    b.setFullscreen(m);
                    break;
                case 13:
                case 32:
                    b.play();
                    break;
                case 37:
                    M.adMode() || y.call(b, -5);
                    break;
                case 39:
                    M.adMode() || y.call(b, 5);
                    break;
                case 38:
                    s.call(b, 10);
                    break;
                case 40:
                    s.call(b, -10);
                    break;
                case 77:
                    b.setMute();
                    break;
                case 70:
                    b.setFullscreen();
                    break;
                default:
                    if (48 <= a.keyCode && 59 >= a.keyCode) {
                        var c = (a.keyCode - 48) / 10 * b.getDuration();
                        b.seek(c)
                    }
            }
            if (/13|32|37|38|39|40/.test(a.keyCode))return a.preventDefault(), !1
        }

        function L() {
            var a =
                !Ma;
            Ma = !1;
            a && fa.sendEvent(d.JWPLAYER_VIEW_TAB_FOCUS, {hasFocus: !0});
            M.adMode() || (ma(), H())
        }

        function B() {
            Ma = !1;
            fa.sendEvent(d.JWPLAYER_VIEW_TAB_FOCUS, {hasFocus: !1})
        }

        function K() {
            var a = e(N), b = Math.round(a.width), c = Math.round(a.height);
            if (q.body.contains(N)) {
                if (b && c && (b !== Za || c !== Ia))Za = b, Ia = c, Q && Q.redraw(), clearTimeout(ra), ra = setTimeout($, 50), fa.sendEvent(d.JWPLAYER_RESIZE, {
                    width: b,
                    height: c
                })
            } else g.removeEventListener("resize", K), f && g.removeEventListener("orientationchange", K);
            return a
        }

        function u(a) {
            a &&
            (a.element().addEventListener("mousemove", W, m), a.element().addEventListener("mouseout", E, m))
        }

        function A() {
        }

        function x() {
            clearTimeout(za);
            za = setTimeout(Aa, 10)
        }

        function z(a, b) {
            var c = q.createElement(a);
            b && (c.className = b);
            return c
        }

        function H() {
            clearTimeout(za);
            za = setTimeout(Aa, $a)
        }

        function J() {
            clearTimeout(za);
            if (r.jwGetState() == k.PAUSED || r.jwGetState() == k.PLAYING)Da(), ia || (za = setTimeout(Aa, $a))
        }

        function W() {
            clearTimeout(za);
            ia = h
        }

        function E() {
            ia = m
        }

        function S(a) {
            fa.sendEvent(a.type, a)
        }

        function Y(a) {
            if (a.done)O();
            else {
                if (!a.complete) {
                    M.adMode() || (M.instreamMode(!0), M.adMode(!0), M.show(!0));
                    M.setText(a.message);
                    var b = a.onClick;
                    void 0 !== b && Q.setAlternateClickHandler(function () {
                        b(a)
                    });
                    void 0 !== a.onSkipAd && da && da.setSkipoffset(a, a.onSkipAd)
                }
                da && da.adChanged(a)
            }
        }

        function O() {
            M.setText("");
            M.adMode(!1);
            M.instreamMode(!1);
            M.show(!0);
            da && (da.adsEnded(), da.setState(r.jwGetState()));
            Q.revertAlternateClickHandler()
        }

        function T(c, d, e) {
            var f = N.className, g, k, l = r.id + "_view";
            b.block(l);
            if (e = !!e)f = f.replace(/\s*aspectMode/,
                ""), N.className !== f && (N.className = f), b.style(N, {display: F}, e);
            a.exists(c) && a.exists(d) && (j.width = c, j.height = d);
            e = {width: c};
            -1 == f.indexOf(v) && (e.height = d);
            b.style(N, e, !0);
            Q && Q.redraw();
            M && M.redraw(h);
            Z && (Z.offset(M && 0 <= Z.position().indexOf("bottom") ? M.height() + M.margin() : 0), setTimeout(function () {
                ea && ea.offset("top-left" == Z.position() ? Z.element().clientWidth + Z.margin() : 0)
            }, 500));
            X(d);
            g = j.playlistsize;
            k = j.playlistposition;
            if (la && g && ("right" == k || "bottom" == k))la.redraw(), f = {display: F}, e = {}, f[k] = 0, e[k] =
                g, "right" == k ? f.width = g : f.height = g, b.style(Pa, f), b.style(ya, e);
            $(c, d);
            b.unblock(l)
        }

        function X(a) {
            var b = e(N);
            ca = 0 < a.toString().indexOf("%") || 0 === b.height ? m : "bottom" == j.playlistposition ? b.height <= 40 + j.playlistsize : 40 >= b.height;
            M && (ca ? (M.audioMode(h), Da(), Q.hidePreview(h), Q && Q.hide(), Ea(m)) : (M.audioMode(m), Na(r.jwGetState())));
            Z && ca && Ra();
            N.style.backgroundColor = ca ? "transparent" : "#000"
        }

        function $(a, b) {
            if (!a || isNaN(Number(a))) {
                if (!ba)return;
                a = ba.clientWidth
            }
            if (!b || isNaN(Number(b))) {
                if (!ba)return;
                b = ba.clientHeight
            }
            j.getVideo().resize(a,
                b, j.stretching) && (clearTimeout(ra), ra = setTimeout($, 250))
        }

        function ha(a) {
            if (a.target === N || N.contains(a.target))void 0 !== a.jwstate ? a = a.jwstate : Ga ? (a = q.currentFullScreenElement || q.webkitCurrentFullScreenElement || q.mozFullScreenElement || q.msFullscreenElement, a = !!(a && a.id === r.id)) : a = j.getVideo().getFullScreen(), Ga ? ka(N, a) : Ca(a)
        }

        function ka(c, d) {
            a.removeClass(c, "jwfullscreen");
            d ? (a.addClass(c, "jwfullscreen"), b.style(q.body, {"overflow-y": w}), H()) : b.style(q.body, {"overflow-y": ""});
            M && M.redraw();
            Q && Q.redraw();
            ea && ea.redraw();
            $();
            Ca(d)
        }

        function Ca(a) {
            j.setFullscreen(a);
            a ? (clearTimeout(ra), ra = setTimeout($, 200)) : C && r.jwGetState() == k.PAUSED && setTimeout(Qa, 500)
        }

        function ma() {
            (!p || ca) && M && j.controls && M.show()
        }

        function R() {
            P !== h && M && (!ca && !j.getVideo().audioMode()) && M.hide()
        }

        function Ba() {
            ea && (!ca && j.controls) && ea.show()
        }

        function wa() {
            ea && (!aa && !j.getVideo().audioMode()) && ea.hide()
        }

        function Ra() {
            Z && (!j.getVideo().audioMode() || ca) && Z.hide(ca)
        }

        function Qa() {
            Q && j.controls && !ca && (!p || r.jwGetState() == k.IDLE) && Q.show();
            (!f || !j.fullscreen) && j.getVideo().setControls(m)
        }

        function Aa() {
            clearTimeout(za);
            if (P !== h) {
                Ha = m;
                var b = r.jwGetState();
                (!j.controls || b != k.PAUSED) && R();
                j.controls || wa();
                b != k.IDLE && b != k.PAUSED && (wa(), Ra());
                a.addClass(N, "jw-user-inactive")
            }
        }

        function Da() {
            if (P !== m) {
                Ha = h;
                if ((j.controls || ca) && !(p && Ta == k.PAUSED))ma(), Ba();
                rb.hide && Z && !ca && Z.show();
                a.removeClass(N, "jw-user-inactive")
            }
        }

        function Ea(a) {
            a = a && !ca;
            j.getVideo().setVisibility(a)
        }

        function cb() {
            aa = h;
            Ja(m);
            j.controls && Ba()
        }

        function vb() {
            da && da.setState(r.jwGetState())
        }

        function jb() {
        }

        function Oa(a) {
            aa = m;
            clearTimeout(Xa);
            Xa = setTimeout(function () {
                Na(a.newstate)
            }, 100)
        }

        function wb() {
            R()
        }

        function Na(a) {
            Ta = a;
            if (j.getVideo().isCaster)Q && (Q.show(), Q.hidePreview(m)), b.style(ba, {
                visibility: w,
                opacity: 0
            }), M && (M.show(), M.hideFullscreen(h)); else {
                switch (a) {
                    case k.PLAYING:
                        P = j.getVideo().isCaster !== h ? null : h;
                        (V ? Fa : j).getVideo().audioMode() ? (Ea(m), Q.hidePreview(ca), Q.setHiding(h), M && (Da(), M.hideFullscreen(h)), Ba()) : (Ea(h), $(), Q.hidePreview(h), M && M.hideFullscreen(!j.getVideo().supportsFullscreen()));
                        break;
                    case k.IDLE:
                        Ea(m);
                        ca || (Q.hidePreview(m), Qa(), Ba(), M && M.hideFullscreen(m));
                        break;
                    case k.BUFFERING:
                        Qa();
                        Aa();
                        f && Ea(h);
                        break;
                    case k.PAUSED:
                        Qa(), Da()
                }
                Z && !ca && Z.show()
            }
        }

        function Va(a) {
            return "#" + r.id + (a ? " ." + a : "")
        }

        function Wa(a, c) {
            b(a, {display: c ? F : n})
        }

        var N, ya, pa, qb, Pa, za = -1, $a = f ? 4E3 : 2E3, ba, Za, Ia, va, Ya, Sa, Fa, V = m, M, Q, da, ea, Z, rb = a.extend_new({}, j.componentConfig("logo")), ta, la, ca, G = m, Ha = m, P = null, aa, qa, ra = -1, ia = m, Ta, ga, La, Ga = !1, Ma = !1, fa = a.extend_new(this, new d.eventdispatcher);
        this.getCurrentCaptions = function () {
            return ta.getCurrentCaptions()
        };
        this.setCurrentCaptions = function (a) {
            ta.setCurrentCaptions(a)
        };
        this.getCaptionsList = function () {
            return ta.getCaptionsList()
        };
        this.setup = function (e) {
            if (!G) {
                r.skin = e;
                ya = z("span", "jwmain");
                ya.id = r.id + "_view";
                ba = z("span", "jwvideo");
                ba.id = r.id + "_media";
                pa = z("span", "jwcontrols");
                va = z("span", "jwinstream");
                Pa = z("span", "jwplaylistcontainer");
                qb = z("span", "jwaspect");
                e = j.height;
                var s = j.componentConfig("controlbar"), w = j.componentConfig("display");
                X(e);
                ta = new c.captions(r, j.captions);
                ta.addEventListener(d.JWPLAYER_CAPTIONS_LIST,
                    S);
                ta.addEventListener(d.JWPLAYER_CAPTIONS_CHANGED, S);
                ta.addEventListener(d.JWPLAYER_CAPTIONS_LOADED, A);
                pa.appendChild(ta.element());
                Q = new c.display(r, w);
                Q.addEventListener(d.JWPLAYER_DISPLAY_CLICK, function (a) {
                    S(a);
                    f ? Ha ? Aa() : Da() : Oa({newstate: r.jwGetState()});
                    Ha && H()
                });
                ca && Q.hidePreview(h);
                pa.appendChild(Q.element());
                Z = new c.logo(r, rb);
                pa.appendChild(Z.element());
                ea = new c.dock(r, j.componentConfig("dock"));
                pa.appendChild(ea.element());
                r.edition && !f ? qa = new c.rightclick(r, {abouttext: j.abouttext, aboutlink: j.aboutlink}) :
                f || (qa = new c.rightclick(r, {}));
                j.playlistsize && (j.playlistposition && j.playlistposition != n) && (la = new c.playlistcomponent(r, {}), Pa.appendChild(la.element()));
                M = new c.controlbar(r, s);
                M.addEventListener(d.JWPLAYER_USER_ACTION, H);
                pa.appendChild(M.element());
                p && R();
                D && fa.forceControls(h);
                ya.appendChild(ba);
                ya.appendChild(pa);
                ya.appendChild(va);
                N.appendChild(ya);
                N.appendChild(qb);
                N.appendChild(Pa);
                j.getVideo().setContainer(ba);
                j.addEventListener("fullscreenchange", ha);
                for (e = t.length; e--;)q.addEventListener(t[e],
                    ha, m);
                g.removeEventListener("resize", K);
                g.addEventListener("resize", K, m);
                f && (g.removeEventListener("orientationchange", K), g.addEventListener("orientationchange", K, m));
                l(r.id).onAdPlay(function () {
                    M.adMode(!0);
                    Na(k.PLAYING)
                });
                l(r.id).onAdSkipped(function () {
                    M.adMode(!1)
                });
                l(r.id).onAdComplete(function () {
                    M.adMode(!1)
                });
                l(r.id).onAdError(function () {
                    M.adMode(!1)
                });
                r.jwAddEventListener(d.JWPLAYER_PLAYER_READY, jb);
                r.jwAddEventListener(d.JWPLAYER_PLAYER_STATE, Oa);
                r.jwAddEventListener(d.JWPLAYER_MEDIA_ERROR,
                    wb);
                r.jwAddEventListener(d.JWPLAYER_PLAYLIST_COMPLETE, cb);
                r.jwAddEventListener(d.JWPLAYER_PLAYLIST_ITEM, vb);
                r.jwAddEventListener(d.JWPLAYER_CAST_AVAILABLE, function (a) {
                    a.available ? (fa.forceControls(h), D = h) : fa.releaseControls()
                });
                r.jwAddEventListener(d.JWPLAYER_CAST_SESSION, function (a) {
                    da || (da = new l.html5.castDisplay(r.id), da.statusDelegate = function (a) {
                        da.setState(a.newstate)
                    });
                    a.active ? (b.style(ta.element(), {display: "none"}), fa.forceControls(h), da.setState("connecting").setName(a.deviceName).show(),
                        r.jwAddEventListener(d.JWPLAYER_PLAYER_STATE, da.statusDelegate), r.jwAddEventListener(d.JWPLAYER_CAST_AD_CHANGED, Y)) : (r.jwRemoveEventListener(d.JWPLAYER_PLAYER_STATE, da.statusDelegate), r.jwRemoveEventListener(d.JWPLAYER_CAST_AD_CHANGED, Y), da.hide(), M.adMode() && O(), b.style(ta.element(), {display: null}), Oa({newstate: r.jwGetState()}), K())
                });
                Oa({newstate: k.IDLE});
                f || (pa.addEventListener("mouseout", x, m), pa.addEventListener("mousemove", J, m), a.isMSIE() && (ba.addEventListener("mousemove", J, m), ba.addEventListener("click",
                    Q.clickHandler)));
                u(M);
                u(ea);
                u(Z);
                b("#" + N.id + "." + v + " .jwaspect", {"margin-top": j.aspectratio, display: F});
                e = a.exists(j.aspectratio) ? parseFloat(j.aspectratio) : 100;
                s = j.playlistsize;
                b("#" + N.id + ".playlist-right .jwaspect", {"margin-bottom": -1 * s * (e / 100) + "px"});
                b("#" + N.id + ".playlist-right .jwplaylistcontainer", {
                    width: s + "px",
                    right: 0,
                    top: 0,
                    height: "100%"
                });
                b("#" + N.id + ".playlist-bottom .jwaspect", {"padding-bottom": s + "px"});
                b("#" + N.id + ".playlist-bottom .jwplaylistcontainer", {width: "100%", height: s + "px", bottom: 0});
                b("#" + N.id + ".playlist-right .jwmain", {right: s + "px"});
                b("#" + N.id + ".playlist-bottom .jwmain", {bottom: s + "px"});
                setTimeout(function () {
                    T(j.width, j.height)
                }, 0)
            }
        };
        var Ja = this.fullscreen = function (b) {
            a.exists(b) || (b = !j.fullscreen);
            b = !!b;
            b !== j.fullscreen && (Ga ? (b ? ga.apply(N) : La.apply(q), ka(N, b)) : j.getVideo().setFullScreen(b))
        };
        this.resize = function (a, b) {
            T(a, b, h);
            K()
        };
        this.resizeMedia = $;
        var pb = this.completeSetup = function () {
                b.style(N, {opacity: 1});
                g.onbeforeunload = function () {
                    j.getVideo().isCaster || r.jwStop()
                }
            },
            Xa;
        this.setupInstream = function (a, c, d, e) {
            b.unblock();
            Wa(Va("jwinstream"), h);
            Wa(Va("jwcontrols"), m);
            va.appendChild(a);
            Ya = c;
            Sa = d;
            Fa = e;
            Oa({newstate: k.PLAYING});
            V = h;
            va.addEventListener("mousemove", J);
            va.addEventListener("mouseout", x)
        };
        this.destroyInstream = function () {
            b.unblock();
            Wa(Va("jwinstream"), m);
            Wa(Va("jwcontrols"), h);
            va.innerHTML = "";
            va.removeEventListener("mousemove", J);
            va.removeEventListener("mouseout", x);
            V = m
        };
        this.setupError = function (a) {
            G = h;
            l.embed.errorScreen(N, a, j);
            pb()
        };
        this.addButton = function (a,
                                   b, c, d) {
            ea && (ea.addButton(a, b, c, d), r.jwGetState() == k.IDLE && Ba())
        };
        this.removeButton = function (a) {
            ea && ea.removeButton(a)
        };
        this.setControls = function (a) {
            var b = j.controls, c = !!a;
            j.controls = c;
            c != b && (V ? a ? (Ya.show(), Sa.show()) : (Ya.hide(), Sa.hide()) : c ? Oa({newstate: r.jwGetState()}) : (Aa(), Q && Q.hide()), fa.sendEvent(d.JWPLAYER_CONTROLS, {controls: c}))
        };
        this.forceControls = function (a) {
            P = !!a;
            a ? Da() : Aa()
        };
        this.releaseControls = function () {
            P = null;
            Na(r.jwGetState())
        };
        this.addCues = function (a) {
            M && M.addCues(a)
        };
        this.forceState =
            function (a) {
                Q.forceState(a)
            };
        this.releaseState = function () {
            Q.releaseState(r.jwGetState())
        };
        this.getSafeRegion = function () {
            var a = {x: 0, y: 0, width: 0, height: 0};
            if (!j.controls)return a;
            M.showTemp();
            ea.showTemp();
            var b = e(ya), c = b.top, d = V ? e(q.getElementById(r.id + "_instream_controlbar")) : e(M.element()), f = V ? m : 0 < ea.numButtons(), g = 0 === Z.position().indexOf("top"), h = e(Z.element());
            f && (f = e(ea.element()), a.y = Math.max(0, f.bottom - c));
            g && (a.y = Math.max(a.y, h.bottom - c));
            a.width = b.width;
            a.height = d.height ? (g ? d.top : h.top) -
            c - a.y : b.height - a.y;
            M.hideTemp();
            ea.hideTemp();
            return a
        };
        this.destroy = function () {
            g.removeEventListener("resize", K);
            g.removeEventListener("orientationchange", K);
            for (var a = t.length; a--;)q.removeEventListener(t[a], ha, m);
            j.removeEventListener("fullscreenchange", ha);
            N.removeEventListener("keydown", I, m);
            qa && qa.destroy();
            da && (r.jwRemoveEventListener(d.JWPLAYER_PLAYER_STATE, da.statusDelegate), da.destroy(), da = null);
            pa && (pa.removeEventListener("mousemove", J), pa.removeEventListener("mouseout", x));
            ba && (ba.removeEventListener("mousemove",
                J), ba.removeEventListener("click", Q.clickHandler));
            V && this.destroyInstream()
        };
        N = z("div", "jwplayer playlist-" + j.playlistposition);
        N.id = r.id;
        N.tabIndex = 0;
        N.onmousedown = function () {
            Ma = !0;
            fa.sendEvent(d.JWPLAYER_VIEW_TAB_FOCUS, {hasFocus: !1})
        };
        N.onfocusin = L;
        N.addEventListener("focus", L);
        N.onfocusout = B;
        N.addEventListener("blur", B);
        N.addEventListener("keydown", I);
        ga = N.requestFullscreen || N.requestFullScreen || N.webkitRequestFullscreen || N.webkitRequestFullScreen || N.webkitEnterFullscreen || N.webkitEnterFullScreen ||
            N.mozRequestFullScreen || N.msRequestFullscreen;
        La = q.exitFullscreen || q.cancelFullScreen || q.webkitExitFullscreen || q.webkitCancelFullScreen || q.mozCancelFullScreen || q.msExitFullscreen;
        Ga = ga && La;
        j.aspectratio && (b.style(N, {display: "inline-block"}), N.className = N.className.replace("jwplayer", "jwplayer " + v));
        T(j.width, j.height);
        var ja = q.getElementById(r.id);
        ja.parentNode.replaceChild(N, ja)
    };
    b(".jwplayer", {
        position: "relative", display: "block", opacity: 0, "min-height": 0, "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease", "-o-transition": "opacity .25s ease"
    });
    b(".jwmain", {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease",
        "-o-transition": "opacity .25s ease"
    });
    b(".jwvideo, .jwcontrols", {
        position: "absolute",
        height: "100%",
        width: "100%",
        "-webkit-transition": "opacity .25s ease",
        "-moz-transition": "opacity .25s ease",
        "-o-transition": "opacity .25s ease"
    });
    b(".jwvideo", {overflow: w, visibility: w, opacity: 0});
    b(".jwvideo video",
        {
            background: "transparent",
            height: "100%",
            width: "100%",
            position: "absolute",
            margin: "auto",
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        });
    b(".jwplaylistcontainer", {position: "absolute", height: "100%", width: "100%", display: n});
    b(".jwinstream", {position: "absolute", top: 0, left: 0, bottom: 0, right: 0, display: "none"});
    b(".jwaspect", {display: "none"});
    b(".jwplayer." + v, {height: "auto"});
    b(".jwplayer.jwfullscreen", {
        width: "100%",
        height: "100%",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        "z-index": 1E3,
        margin: 0,
        position: "fixed"
    }, h);
    b(".jwplayer.jwfullscreen.jw-user-inactive",
        {cursor: "none", "-webkit-cursor-visibility": "auto-hide"});
    b(".jwplayer.jwfullscreen .jwmain", {left: 0, right: 0, top: 0, bottom: 0}, h);
    b(".jwplayer.jwfullscreen .jwplaylistcontainer", {display: n}, h);
    b(".jwplayer .jwuniform", {"background-size": "contain !important"});
    b(".jwplayer .jwfill", {"background-size": "cover !important", "background-position": "center"});
    b(".jwplayer .jwexactfit", {"background-size": "100% 100% !important"})
})(window);
(function (g, l) {
    function c(a) {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA" + q[a]
    }

    function a(a, b) {
        var c = l.createElement(a);
        b && d(c, b);
        return c
    }

    function d(a, b) {
        b.join || (b = [b]);
        for (var c = 0; c < b.length; c++)b[c] && (b[c] = "jwcast-" + b[c]);
        a.className = b.join(" ")
    }

    function k(a, b) {
        b.join || (b = [b]);
        for (var c = 0; c < b.length; c++)a.appendChild(b[c])
    }

    var b = g.utils, e = g.html5, f = g.events, C = f.state, p = b.css, q = {
            wheel: "DgAAAA4CAYAAACohjseAAACiUlEQVR42u3aP2sTYRzAcZ87Md6mhE5GhRqli0NC22yNKO1iaStSY+ggdKggal6BDXRoUuwbEG1LpE4B30LAxEGbKYgO7SVoUhJD04hOusRv4ZlCwP5LevfDgw9kCnzD5Z4/95xqtVqideNLTQzjKV4gCxtNtNwaqBBGCg3UkcYz3EUIV+F1W6AHj7CFb1hAEIbbb1GFByjjAyZgSvkPXkMGW7gt7SETwQ8swpL0FFV4jjpuShsmTiOFz7gobRxUWEceXokDfQKf0CdxJhNFFT6JU7Ur2MUtiXNRhXdYlDrZnkERZyUGerCNcanLpYfISV0PGtjEpNTAGyjBkBq4ggWpWxYmGghIDRzEDgypgTG8lbyrtoZ5yYFZ3JccWMKg5MCfGJAcuHf5/ge6xwX8lnyLDmCn/SEzJChwCKX2YSIqKDCKbPtAHxcUGAdNOhBPkBYUmAZNOhDXUYMSEKdQBU06EAp1BAUEBnWLgg4EXmJJQOASXnVa0YdRcfma0NAN4U6BCpu44+LASd2g0BYIPEbexYHvdQOfOwdaqLh063AcFVj73bq3XBRnoYiZ/b58ySDposAkMlD/DNT8aGLUBXGjaMJ/0Beg9/Dd4etEH2qIHOUVdgHnHRh3DgUkjnoIIYUNh0V6sYHXUIcO1Eyso4BLDoi7jC94A/O4DgIZWEYdYycYN4YalmF04yjXNJpIwOrxOJdAE9PdPoznRxZFTPUgbgI2svD38jjlLMrI61DjmFcFU/iICmZhnMSB2DOYg41tJBGAOuSPFkASZdiYg8cpR5pHsIIGqkgjjghC6Eef1o8QIphHGlU0sIYRGE4/lB7DKnL4il/Yu/5gFzZyWEUMwzC7sXUv2l9q1CPRZSGkLwAAAABJRU5ErkJggg\x3d\x3d",
            display: "UAAAAC4AQMAAACo6KcpAAAABlBMVEV6enp6enqEWMsmAAAAAXRSTlMAQObYZgAAAEdJREFUeF7t2bEJACAMRcGAg7j/Fo6VTkvbIKSRe/XBH+DHLlaHK0qN7yAIgiAIgiAIgiAIgiAIgiAIgiAIgg0PZHfzbuUjPCPnO5qQcE/AAAAAAElFTkSuQmCC",
            pause: "CoAAAA2CAQAAAAb3sMwAAAAMElEQVR4Ae3MMQEAMAzDsIY/6AxB9/aRfyvt7GX2Ph8UCoVCoVAo9AiFQqFQKBQKfdYvoctOjDeGAAAAAElFTkSuQmCC",
            play: "DYAAAA2BAMAAAB+a3fuAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlMAP79AwMFfxd6iAAAAX0lEQVR4Xn3JQQGAABAEoaliFiPYYftHMMHBl55uQw455JBDDjnkkEMOOeSQQw455JBDDjnkkEMOOeSQQ+5O3HffW6hQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKgfWHsiYI6VycIAAAAASUVORK5CYII\x3d",
            replay: "DQAAAA8CAYAAAApK5mGAAADkklEQVRoBd3BW2iVBRwA8P/cWHMsv9QilLCITLCU0khpST6JCEXrQbKMCgrKFwsfZq/LMnRRIdkFvBQUvmShgg9iV02zB7FScyWlqNHNqbCJ7PKLkFHp952dnZ3tfOv3ixgGSLAVt8b/ARIX9WADJsVIhsR/daIV42MkQiJdO5ZjdIwkSBR2Ek+gJkYCJIpzEE2Rd0gMzB7MibxCojRbcEtUGsZgJu7HYixVuh6sx6QYLrgSD+Fd/GhodKIV42Ko4B68h07Dpx3NGB3lgnnYpbJOYFoMBm7ANpW3D3NjMPAgzqqsn7EIVVEqVGOtymrHMtTGYKAeWxSvB3vxIh7ANIzFNUpzAa0YF4OFWuxUnFNYjkmRAomB6cX7uDHKAdX4QP/asRRXRAFIFO8TzI5yQov+bcO1UQQk+ncITVFumIce2XqxHFVRJCSy/YolqIlyQwOOy9aNR2KAkLhcJ1agIYYKVsvWi6eiBEj8owfrMDEGAVVYiMcjDa7HBdlejhIhcdF2TI9BQiP2uOgsro5LYa1sX6M2SoQ6zItBwmRsdrnn498wDuel68aMqDBMQZd0v6Mu+mCJbBsiJ7BdtkXRB7ul68HNkRNolO3D+BvGoke6HZEz+Fa6c6gJNMn2WOQMmmW7K/CSbBMiZ3CbbM8EPpKuLXIIo3BWujcCh6TbEjmFr6TbGfhDulcip7BJugOBbulaIqfwlnRHQ7bnIqewVrpjgU7pVkZOYaN0hwOnpFsfOYWt0u0LfCnd55FT+EG6zYEN0p1BdeQMEnRLtzKwTLZZkTO4V7bFgTtka4mcwTrZrgtU47R0P6E6cgINOCfdkeiDjbItipzAs7K1Rh/Mle0gaqLC0IBTsk2PPhiFI7ItiwrDKtl2xaXwqGwdmBoVgrvRJdv8uBRq0CbbISQxzDARJ2TbG1kwX2GfoT6GCa7CN7J1Y0YUgk0K+wJjY4hhAg4o7LXoD8bjuMIOY1oMETTiuMIOoj6KgTvRobDzaEZtlAnq8QK6FHYGU2IgcB+69e97LEJNlAh1eBrH9K8DjVEKPIxuxTmJVZiFmugHajEHa/Cb4nRiQQwGmtBpYM7hU7yNFjSjGSuwDrvRYWD+RGOUA25Hm8rZj8lRThiDd9Br+PTgVdTFUMFcfGfo7cHMGA4YhYXYr/x2YQGqohIwG2vwi9Idw2pMjzzBVCzBm/gYR3EaXbiA02jDDryOJ3FTlNFfAO8ENqnn13UAAAAASUVORK5CYII\x3d"
        },
        v = !1, t = 316 / 176;
    e.castDisplay = function (h) {
        function q() {
            if (z) {
                var a = z.element();
                a.parentNode && a.parentNode.removeChild(a);
                z.resetEventListeners();
                z = null
            }
        }

        function w() {
            J && (J.parentNode && J.parentNode.removeChild(J), J = null)
        }

        function n() {
            H && (H.parentNode && H.parentNode.removeChild(H), H = null)
        }

        v || (p(".jwplayer .jwcast-display", {
            display: "none",
            position: "absolute",
            width: "100%",
            height: "100%",
            "background-repeat": "no-repeat",
            "background-size": "auto",
            "background-position": "50% 50%",
            "background-image": c("display")
        }),
            p(".jwplayer .jwcast-label", {
                position: "absolute",
                left: 10,
                right: 10,
                bottom: "50%",
                "margin-bottom": 100,
                "text-align": "center"
            }), p(".jwplayer .jwcast-label span", {
            "font-family": '"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
            "font-size": 20,
            "font-weight": 300,
            color: "#7a7a7a"
        }), p(".jwplayer span.jwcast-name", {color: "#ccc"}), p(".jwcast-button", {
            position: "absolute", width: "100%", height: "100%", opacity: 0, "background-repeat": "no-repeat",
            "background-size": "auto", "background-position": "50% 50%"
        }), p(".jwcast-wheel", {"background-image": c("wheel")}), p(".jwcast-pause", {"background-image": c("pause")}), p(".jwcast-play", {"background-image": c("play")}), p(".jwcast-replay", {"background-image": c("replay")}), p(".jwcast-paused .jwcast-play", {opacity: 1}), p(".jwcast-playing .jwcast-pause", {opacity: 1}), p(".jwcast-idle .jwcast-replay", {opacity: 1}), b.cssKeyframes("spin", "from {transform: rotate(0deg);} to {transform: rotate(360deg);}"), p(".jwcast-connecting .jwcast-wheel, .jwcast-buffering .jwcast-wheel",
            {
                opacity: 1,
                "-webkit-animation": "spin 1.5s linear infinite",
                animation: "spin 1.5s linear infinite"
            }), p(".jwcast-companion", {
            position: "absolute",
            "background-position": "50% 50%",
            "background-size": "316px 176px",
            "background-repeat": "no-repeat",
            top: 0,
            left: 0,
            right: 0,
            bottom: 4
        }), p(".jwplayer .jwcast-click-label", {
            "font-family": '"Karbon", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
            "font-size": 14,
            "font-weight": 300,
            "text-align": "center",
            position: "absolute",
            left: 10,
            right: 10,
            top: "50%",
            color: "#ccc",
            "margin-top": 100,
            "-webkit-user-select": "none",
            "user-select": "none",
            cursor: "pointer"
        }), p(".jwcast-paused .jwcast-click-label", {color: "#7a7a7a", cursor: "default"}), v = !0);
        var F = l.getElementById(h + "_display_button"), r = a("div", "display"), j = a("div", ["pause", "button"]), y = a("div", ["play", "button"]), s = a("div", ["replay", "button"]), I = a("div", ["wheel", "button"]), L = a("div", "label"), B = a("span"), K = a("span", "name"), u = "#" + h + "_display.jwdisplay", A = -1, x = null, z = null, H = null, J = null;
        k(r, [I, j, y, s, L]);
        k(L, [B, K]);
        F.parentNode.insertBefore(r, F);
        this.statusDelegate = null;
        this.setName = function (a) {
            K.innerText = a || "Google Cast";
            return this
        };
        this.setState = function (a) {
            var b = "Casting on ";
            if (null === x)if ("connecting" === a)b = "Connecting to "; else if (a !== C.IDLE) {
                var c = g(h).getPlaylistItem().title || "";
                c && (b = b.replace("on", c + " on"))
            }
            B.innerText = b;
            clearTimeout(A);
            a === C.IDLE && (A = setTimeout(function () {
                d(r, ["display", "idle"])
            }, 3E3), a = "");
            d(r, ["display", (a || "").toLowerCase()]);
            return this
        };
        this.show =
            function () {
                p(u + " .jwpreview", {"background-size": "316px 176px !important", opacity: 0.6, "margin-top": -2});
                p(u + " .jwdisplayIcon", {display: "none !important"});
                p.style(r, {display: "block"});
                return this
            };
        this.hide = function () {
            b.clearCss(u + " .jwpreview");
            p(u + " .jwdisplayIcon", {display: ""});
            p.style(r, {display: "none"});
            return this
        };
        this.setSkipoffset = function (a, c) {
            if (null === z) {
                var d = l.getElementById(h + "_controlbar"), g = 10 + b.bounds(r).bottom - b.bounds(d).top;
                z = new e.adskipbutton(h, g | 0, a.skipMessage, a.skipText);
                z.addEventListener(f.JWPLAYER_AD_SKIPPED, function () {
                    c(a)
                });
                z.reset(a.skipoffset || -1);
                z.show();
                d.parentNode.insertBefore(z.element(), d)
            } else z.reset(a.skipoffset || -1)
        };
        this.setCompanions = function (b) {
            var c, d, e, f = Number.MAX_VALUE, g = null;
            for (d = b.length; d--;)if (c = b[d], c.width && c.height && c.source)switch (c.type) {
                case "html":
                case "iframe":
                case "application/x-shockwave-flash":
                    break;
                default:
                    e = Math.abs(c.width / c.height - t), e < f && (f = e, 0.75 > e && (g = c))
            }
            (b = g) ? (null === H && (H = a("div", "companion"), k(r, H)), b.width / b.height >
            t ? (c = 316, d = b.height * c / b.width) : (d = 176, c = b.width * d / b.height), p.style(H, {
                "background-image": b.source,
                "background-size": c + "px " + d + "px"
            })) : n()
        };
        this.adChanged = function (b) {
            if (b.complete)z && z.reset(-1), x = null; else {
                z && (void 0 === b.skipoffset ? q() : (b.position || b.duration) && z.updateSkipTime(b.position | 0, b.duration | 0));
                var c = b.tag + b.sequence;
                c !== x && (p(u + " .jwpreview", {opacity: 0}), b.companions ? this.setCompanions(b.companions) : n(), b.clickthrough ? null === J && (J = a("div", "click-label"), J.innerText = "Click here to learn more \x3e",
                    k(r, J)) : w(), x = c, this.setState(b.newstate))
            }
        };
        this.adsEnded = function () {
            q();
            n();
            w();
            p(u + " .jwpreview", {opacity: 0.6});
            x = null
        };
        this.destroy = function () {
            this.hide();
            r.parentNode && r.parentNode.removeChild(r)
        }
    };
    var h = ".jwcast button";
    p(h, {opacity: 1});
    p(h + ":hover", {opacity: 0.75});
    h += ".off";
    p(h, {opacity: 0.75});
    p(h + ":hover", {opacity: 1})
})(jwplayer, document);
(function (g) {
    var l = jwplayer.utils.extend_new, c = g.logo;
    c.defaults.prefix = "";
    c.defaults.file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAyCAMAAACkjD/XAAACnVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkSEhIAAAAaGhoAAAAiIiIrKysAAAAxMTEAAAA4ODg+Pj4AAABEREQAAABJSUkAAABOTk5TU1NXV1dcXFxiYmJmZmZqamptbW1xcXF0dHR3d3d9fX2AgICHh4eKioqMjIyOjo6QkJCSkpKUlJSWlpaYmJidnZ2enp6ioqKjo6OlpaWmpqanp6epqamqqqqurq6vr6+wsLCxsbG0tLS1tbW2tra3t7e6urq7u7u8vLy9vb2+vr6/v7/AwMDCwsLFxcXFxcXHx8fIyMjJycnKysrNzc3Ozs7Ozs7Pz8/Pz8/Q0NDR0dHR0dHS0tLU1NTV1dXW1tbW1tbW1tbX19fX19fa2trb29vb29vc3Nzc3Nzf39/f39/f39/f39/g4ODh4eHj4+Pj4+Pk5OTk5OTk5OTk5OTl5eXn5+fn5+fn5+fn5+fn5+fo6Ojo6Ojq6urq6urq6urr6+vr6+vr6+vt7e3t7e3t7e3t7e3u7u7u7u7v7+/v7+/w8PDw8PDw8PDw8PDy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL09PT09PT09PT09PT09PT09PT09PT29vb29vb29vb29vb29vb29vb29vb29vb39/f39/f39/f39/f39/f4+Pj4+Pj4+Pj5+fn5+fn5+fn5+fn5+fn5+fn5+fn6+vr6+vr6+vr6+vr6+vr6+vr8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7///////////////9kpi5JAAAA33RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhYWFxcYGBgZGRoaGhsbHBwdHR4eHx8gISIiIyQmJicoKSoqKywtLi4uMDEyMjM0NTU2Njc5Ojo7Ozw9Pj5AQUJCQ0ZGSElKSktMTU5PUFFRUlRVVlZXWFpbXV5eX2BhYmVmZ2hpamtsbW5vcHFyc3R2d3h5enx9fn+BgoKDhIWGiYmKi4yNjo+QkZKTlJWWl5eYmZqbnJ2enp+goaKkpaamp6ipqqusra6vsLKzs7W2t7i5uru8vb6/wMHCwsPExcbHyMnJysvMVK8y+QAAB5FJREFUeNrFmP2f3EQdx8kmm2yy2WQzmZkjl3bJ2Rb12mtp8SiKiBUUxVKFVisIihV62CKCIoK0UvVK1bP07mitBeVJUVso0Duw1Xo9ET0f6JN47bV3u9+/xe83kyzr0+vlL7t8Xq9ubpLpvHfm+7i54P+UVkBp2gWdFpGNYtFA+NtALpYcxzZ1rSM0TSvgv5xse0wwu1joxDYLulE0dKTTSLcqfOvMQ1WzoHXAtCadsGXqBCsUnWDxNBzmlq51wLSuz0LmOcTWClZFfA1ghLUbrUwbdq396kAvK5s6HoFdlb8FuLONB66RlGnD5S8BwKkNoVMsFEw3XIOj97hmoX2updP5kml7jgLp/Ec8yzBKntwDMCnwa7TPtUrkWLrliW2gtC+0TdNhvdMAu1hJ19plYNcP0LGKiJp/HJTeEI5V8sjJ4PZ2mTp1rb7Pf5C5JbvCN0Cuha7jpE5WX9oeU6us8YlTUH8grFQC+QzkWuKVvdTJXuWO0Z5Nk2tNkWNdzgLed+4tdNWrkpPBI20ytVYwK+LrQLpPcHk3vIVm1ZCcDD7jt8fUGmYNoeLpJzKW+1vQYSjJyc72ZKbWSOqqhpn+99r/rn99WDDLbJViHZbJirkWtJDkZPArbhta2jFg7LdKV1ID9aWaz5CTzTD0pvB2aypB9xYPKtaUXEC7bKKjeA1dHyJTU+xbFgY/RiAKP2lYsm28RaJmAtfTs6c4xP9g0gycUqKpeDGLegZPl3MqTL6oWCdl9EIrOol20/U6zyzgVJzpeV6l7Dhl18VP1/N8v1r1vQoNSziH1nPKKMdBChbAiprheygfL65tZmxazguYXDoL8BcyqlhRb0W/M3Wy412YRTUd7SKEFIKzIBQ8DBhHewgSjkLB7GwS54wxwcoORqYQ+QyhFGA9VIYxnfCKq2VtE3k3wTB1taLx+FVCNTRyxnU4YQ/8WEY9M7PvkvJHsEsAam5srRRwH0YBhml14Zv7pRz62+LAD/jWE0vHINU6OUGXyc0Mt5GiLW/+6blV8eO4tY8B6t3qvBsZOnUy+HJgFaiuMELfhQ6RrAe4JZGvwxcFPLx69YZDZ1ciOrB03ayEd52vr0x6/zokhbxs+p5o7Oc3kfrkxFOrV392d+NWFaeaXvK652Cw+xTAo9cS5ar0vKcfy9BrgNRfMVN0SOh+gPfWtgN8L7kM6pcI2FSrJUtm7kc0KxlF2xcHd/1xWxxvmv1QLB9/5cJobDiKIxklcmI4ShJ5eJ/qOTSqU6/BBC4JN6boQSAN71Doi1Mnm+B0Rjlavgabo/GZ2V/LL8FRSehkkfzzYIouoqXf31jz3de7kq5DB6JP1a+vSUQnOXrRoujpn2XogumJpwCeBfhDV4qeAdK1QwqdOhkMqdAyyyk6HoHR3tmD4/UlI/DDBNFxHK1tDBDaNrHODU7KDzTW16Lr6nccHZGxHNt3Jao/RrSU8pPTeX+JPYj4NpAGkxsg16FoWP1xP5Bu8UwdYxSXJXRyJ0zeCtsegdsm4QsLBBwcHf3l+fF5hHbscnDh1LeSaGwvModnTl7ChVRuNiblxIkjR6bq+9+R9RzkO7cBadWCdZBroDaq/jgDqHMLMYtSr8jkpwl9aaOxF9bdDHsb9T5Ev/rkk6N398SIDj3X5zfDzi1bDpxdHNWWwcOchS27funeR+EOyTI0RcyKLIM20VPzyOObeh4LJsZ/hYnaRpgRsTwG9TPzLz5XhyOSDlzykDEKLsEYl08cG0W9eW+U4B1eZZmtY7J13PXCeHeg0MrPjlH8yLiJ/mYtfqIFvQVNTaez/cMrfwHHpJC7APZH0csAP5ARokPPwXyIoEjKaOnM7UIIOfKKrJEJvEAguhZHUY1sHb3vH1tCxyS0OvGtAL+/iMubQOlMXyKfA6U8i+I0PqWyecA3AmyVEmPhczxEdBUbOKwCsHsAtfNUDyZNdiNcLQld8cTYgQHScjExjNPvOf9RSsrZtt3uB3f2s0Dku35MyiY6z6LYjbMdx+HvO7pd11/egBtCvh7mFvs+P70Rl8L0yU8r7WROyXb5b77Dxemv+I7L82wmxoeY53U9+/K8HE1ZvBq4eGQfh1SNa0Keo5tZVCXwXs7KluUwIZjrMsrHTsB95f4B50JwztGURtHywsBjvGphtIUiFeb9Kn4pjzHXUOhmlXPI3Ug/5QH6BjS1uWpRRdLNku3YWPNw4RKVSSqfpKLq3k3bIZXMvFha+NjQqXqlhYxKa9EgFJGVqKCrqD2ZloJrql7Qgq4vw9DKfn0ahp73B+ln3hPQY/xKJEO1CC2P6T49UOP/fD+R5qphSBvAslttQb8YZr1os7/5ry0P8VDNoZK6T8pnZpdW4bb9ZWPQ2NPtlhxf/A5yPUApt+0/MP2uqy5nLkaKLyZycuOKCp13u9mWXXasol4staAPYyprN1p5CvkR1nD5pxz9jQDPu1Pvbii3yklQmr2U/LtDUr9Fngelp0NqwDsmirPtoLRWJdxOiQrp9Yr8XGiTk3XyxF2eFuw3+ju5aRJl1Yu+f+LMM1eiexc6/lK0QuWpYhkd3XT+UsfOXhd2WKpO6W/TO3BUO8H/BB7RwuB6W7b7AAAAAElFTkSuQmCC";
    g.logo =
        function (a, d) {
            "free" == a.edition() ? d = null : (c.defaults.file = "", c.defaults.prefix = "");
            l(this, new c(a, d))
        }
})(jwplayer.html5);
(function (g) {
    var l = g.html5, c = l.model;
    l.model = function (a, d) {
        var k = new g.utils.key(a.key), b = new c(a, d), e = b.componentConfig;
        b.edition = function () {
            return k.edition()
        };
        b.componentConfig = function (a) {
            return "logo" == a ? b.logo : e(a)
        };
        return b
    }
})(jwplayer);
(function (g) {
    var l = g.html5, c = l.player;
    l.player = function (a) {
        a = new c(a);
        var d;
        d = a._model.edition();
        if ("enterprise" === d || "ads" === d)d = new g.cast.controller(a, a._model), a.jwStartCasting = d.startCasting, a.jwStopCasting = d.stopCasting;
        return a
    };
    c.prototype.edition = function () {
        return this._model.edition()
    }
})(jwplayer);
(function (g) {
    var l = jwplayer.utils.extend_new, c = g.rightclick;
    g.rightclick = function (a, d) {
        if ("free" == a.edition())d.aboutlink = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3df", delete d.abouttext; else {
            if (!d.aboutlink) {
                var k = "http://www.longtailvideo.com/jwpabout/?a\x3dr\x26v\x3d" + g.version + "\x26m\x3dh\x26e\x3d", b = a.edition();
                d.aboutlink = k + ("pro" == b ? "p" : "premium" == b ? "r" : "enterprise" == b ? "e" : "ads" == b ? "a" : "f")
            }
            d.abouttext ? d.abouttext += " ..." : (k = a.edition(), k = k.charAt(0).toUpperCase() +
                k.substr(1), d.abouttext = "About JW Player " + g.version + " (" + k + " edition)")
        }
        l(this, new c(a, d))
    }
})(jwplayer.html5);
(function (g) {
    var l = g.view;
    g.view = function (c, a) {
        var d = new l(c, a), g = d.setup, b = a.edition();
        d.setup = function (a) {
            g(a)
        };
        "invalid" == b && d.setupError("Error setting up player: Invalid license key");
        return d
    }
})(window.jwplayer.html5);