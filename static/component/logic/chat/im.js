define(function (require) {
    function a(a) {
        for (var c, h = {}, g = document.cookie.split(/ *; */), i = 0; i < g.length; ++i)c = g[i].split("="), h[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
        return a ? h[a] : h
    }

    var c = require("jquery");
    //if (require("socket.io"), c.chat = {}, c.chat = {
    //        iosocket: null,
    //        unreadEvent: null,
    //        uid: 0,
    //        port: 80,
    //        ready: [],
    //        analyzeData: null,
    //        events: {},
    //        ie: navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/),
    //        init: function () {
    //            this.iosocket = this.ie && this.ie[2] < 10 ? io("http://im.mukewang.com", {
    //                enablesXDR: !0,
    //                upgrade: !1,
    //                transports: ["polling"],
    //                path: "/message",
    //                reconnection: !0,
    //                reconnectionDelay: 1e3,
    //                reconnectionDelayMax: 5e3,
    //                timeout: 6e5
    //            }) : io("http://im.mukewang.com", {
    //                transports: ["websocket"],
    //                path: "/message",
    //                reconnection: !0,
    //                reconnectionDelay: 1e3,
    //                reconnectionDelayMax: 5e3,
    //                timeout: 6e5
    //            });
    //            var h = a(), g = (h.cninfo || "").split("-"), _ = h.imooc_uuid, w = h.imooc_isnew;
    //            this.analyzeData = {
    //                marking: g[1] || "",
    //                channel: g[0] || "",
    //                uuid: _ || "",
    //                isnew: w || 1,
    //                url: window.location.href,
    //                uid: OP_CONFIG.userInfo && OP_CONFIG.userInfo.uid || 0,
    //                isweb: 1
    //            };
    //            for (var k in this.events)this.iosocket.on(k, this.events[k]);
    //            this.iosocket.on("connect", function () {
    //                var i, a, h = c.chat, g = h.ready || [], _ = h.iosocket;
    //                for (i = 0, a = g.length; a > i; i++)_.emit.apply(_, g[i])
    //            }), this.checkUnreads()
    //        },
    //        login: function (a) {
    //            a.expand = this.analyzeData, this.iosocket.emit("login", a)
    //        },
    //        emit: function (a, c) {
    //            this.ready ? this.ready.push(arguments) : this.iosocket.emit(a, c)
    //        },
    //        bandUnreads: function (a, c) {
    //            a && c && (this.uid = a), this.events.unreads = c, this.iosocket && this.iosocket.on("unreads", c)
    //        },
    //        checkUnreads: function () {
    //            this.analyzeData.uid = this.uid, this.emit("unreads", this.analyzeData), this.uid > 0
    //        },
    //        bindEvent: function (a, c) {
    //            this.iosocket ? this.iosocket.on(a, c) : this.events[a] = c
    //        },
    //        send: function (a, c) {
    //            this.iosocket.emit(a, c)
    //        }
    //    }, OP_CONFIG.userInfo && OP_CONFIG.userInfo.uid) {
    //    var h = window.location.href.indexOf("notices"), g = window.location.href.indexOf("messages");
    //    c.chat.bandUnreads(OP_CONFIG.userInfo.uid, function (a) {
    //        a > 0 ? (c(".msg_remind").show(), _msg_unread = 1, (-1 != h || -1 != g) && (a > 99 ? c("#msg_new").find(".msg-num").html("(99+)").show() : c("#msg_new").find(".msg-num").html("(" + a + ")").show())) : (_msg_unread = 0, _not_unread || c(".msg_remind").hide(), c("#msg_new").find(".msg-num").hide())
    //    }), c.chat.bindEvent("remind", function (a) {
    //        if (a.unreads > 0) {
    //            if (c(".msg_remind").show(), _not_unread = 1, -1 != h || -1 != g) {
    //                var _ = c("#not_new").find(".not-num"), w = _.html();
    //                if ("" == w)c("#not_new").find(".not-num").html("(1)").show(); else {
    //                    var k = parseInt(_.text().substr(1, _.text().length - 2)), v = parseInt(k + 1);
    //                    99 == v ? _.show().html("(99+)") : _.html("(" + v + ")")
    //                }
    //            }
    //        } else _not_unread = 0, _msg_unread || c(".msg_remind").hide()
    //    })
    //}
});