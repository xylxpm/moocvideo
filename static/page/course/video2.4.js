define(function (require) {
    function a(a) {
        location.href = a
    }

    function c() {
        var a = $(".J-chaptername").data("id");
        return $("[data-id=" + a + "]")
    }

    require("/moocvideo/static/lib/mocoplayer/2.5.2/mocoplayer"),
        require("/moocvideo/static/page/course/common/jquery.nanoscroller.js"),
        require("/moocvideo/static/page/course/common/drag.js");
    var h = require("store"),
        g = require("/moocvideo/static/page/common/animate-achievement"),

        v = require("/moocvideo/static/page/course/common/course_detail_common.js"),

        y = require("/moocvideo/static/page/common/verify-code.js"),
        w = (require("/moocvideo/static/component/base/util/guideLayer"), null),
        b = {
        getData: function (a, c, h) {
            var g = this;
            $.ajax({
                type: "GET",
               // url: "/course/" + a,
                data: {cid: course_id}, dataType: "json", success: function (a) {
                    if (0 == a.result) {
                        var v = a.data;
                        v.length && (g.bindData(v.slice(0, 2), c[0], h[0]), g.bindData(v.slice(2, 5), c[1], h[1]))
                    }
                }
            })
        },
            bindData: function (a, c, h) {
            var g, v, y = "", w = "";
            $(a).each(function (c) {
                2 == a[c].type ? (g = "//coding.imooc.com/class/" + a[c].id + ".html", v = a[c].pic) : (g = "/learn/" + a[c].id, v = "//img.mukewang.com/" + a[c].pic + "-240-135.jpg"), w += '<li class="l">                            <a href="' + g + '" target="_blank">                                <img src="' + v + '"/>                            </a>                            <a href="' + g + '" target="_blank" class="recom-course-title">                            	' + a[c].name + "                            </a>                        </li>"
            }), "first-row" == c ? (y = '<ul class="l">	                        ' + w + "	                    </ul>", $(h).before(y)) : (y = '<div class="recom-course-row">            				<ul class="clearfix">	                        	' + w + "		                    </ul>		                </div>", $(h).after(y))
        }
    };
 //   b.getData("ajaxlastmediarecom", ["first-row", "second-row"], [".first-row .other-oper", ".first-row"]);
    var j = {scrollTo: c()};
    $(function () {
        function c() {
            if ("number" != typeof continueTime) {
                continueTime = 0;
                var a = h.get("_vt");
                a && a[pageInfo.mid] && (continueTime = a[pageInfo.mid].st || 0)
            }
            b(continueTime)
        }

        function b(c) {
            var h = !1;
            window.thePlayer = mocoplayer($("#video-box"), {
                url: "http://www.imooc.com/course/playlist/" + pageInfo.mid + "?t=m3u8",
                title: videoTitle,
                currentTime: c,
                events: {
                    onReady: function () {
                        "html5" == this.getPlayType() && this.play()
                    }, onComplete: function () {
                        window.clearInterval(w), h = !0, w = null;
                        var c = $(".J_next-box"), g = c.find(".J-next-course");
                        if (c.removeClass("hide"), T(), g.length) {
                            var v = $(".J-next-btn"), y = g.data("next-src");
                            v.removeClass("hide").on("click", function () {
                                a(y)
                            })
                        }
                    }, onError: function () {
                    }
                }
            })
        }

        function C(a) {
            "string" == typeof a && (a = $.parseJSON(a)), 0 == a.result ? _.screenShotFlashBack(a) : alert(a.msg || "错误，请稍后重试")
        }

        if (isLogin) {
            c();
            {
                h.get("isFirstVisit") || "Yes"
            }
        }
        $(window).on("beforeunload", function () {
            function a() {
                var h, g, i = 0, v = (new Date).getTime();
                for (h in c)i++, c[h].t < v && (v = c[h].t, g = h);
                i >= 10 && (delete c[g], a())
            }

            var c = h.get("_vt") || {}, g = c[pageInfo.mid];
            if (thePlayer.getCurrentTime)return $(".J_next-box").hasClass("hide") ? void(g ? (g.t = (new Date).getTime(), g.st = thePlayer.getCurrentTime(), h.set("_vt", c)) : (g = {
                t: (new Date).getTime(),
                st: thePlayer.getCurrentTime()
            }, a(), c[pageInfo.mid] = g, h.set("_vt", c))) : (delete c[pageInfo.mid], void h.set("_vt", c))
        });
        var T = function () {
            if (OP_CONFIG.userInfo) {
                var a, c = {}, h = 0, v = (new Date).getTime();
                return c.mid = pageInfo.mid, w = window.setInterval(a = function () {
                    var a, y;
                    "object" == typeof thePlayer && thePlayer.getCurrentTime && (a = (new Date).getTime(), y = parseInt(a - v) / 1e3, c.time = y - h, c.learn_time = thePlayer.getCurrentTime(), $.ajax({
                      //  url: "/course/ajaxmediauser/",
                        data: c,
                        type: "POST",
                        dataType: "json",
                        success: function (a) {
                            if ("0" == a.result) {
                                h = y;
                                var c = a.data.media, v = a.data.course, a = [];
                                c && a.push({mp: c.mp.point, desc: c.mp.desc}), v && a.push({
                                    mp: v.mp.point,
                                    desc: v.mp.desc
                                }), g(a), c && $("#J_ques_pop").show()
                            } else"-105002" == a.result && $.alert("你的账号在另一地点登录，已被强迫下线。", {
                                info: "如果不是本人操作，建议你修改密码。",
                                callback: function () {
                                    window.location.href = "http://coding.imooc.com"
                                }
                            })
                        }
                    }))
                }, 6e4), window.onbeforeunload = function () {
                    var a, g;
                    "object" == typeof thePlayer && thePlayer.getCurrentTime && (a = (new Date).getTime(), g = parseInt(a - v) / 1e3, c.time = g - h, c.learn_time = thePlayer.getCurrentTime(), $.ajax({
                        //url: "/course/ajaxmediauser/",
                        data: c,
                        type: "POST",
                        async: !1,
                        dataType: "json",
                        success: function (a) {
                            "0" == a.result && (h = g)
                        }
                    }))
                }, a
            }
        }();
        window.screenReceive = C, $.each("qa,note".split(","), function (a, c) {
            v.remote[c].extendMethod("reset", function () {
                _.reset(".js-shot-video[data-type='" + c + "']")
            })
        });
        var _ = {
            screenShot: function (a) {
                var c = $(a), h = 0;
                thePlayer.getCurrentTime && (h = Math.round(thePlayer.getCurrentTime()));
                var g;
                g = "", this.el = a, v.remote[c.attr("data-type")].set("video", g), v.remote[c.attr("data-type")].set("picture_time", h)
            }, formatSecond: function (a) {
                function c(a) {
                    return 10 > a ? "0" + a : a
                }

                var h = c(parseInt(a / 60)) + ":" + c(a % 60);
                return h
            }, reset: function (a, c) {
                var h = $(a);
                this.el = null, c && v.remote[h.attr("data-type")].reset()
            }, screenShotFlashBack: function () {
                !this.el
            }
        };
        $(document).on("click", "#js-discuss-submit", function () {
            var a, c, h, g, w = {}, b = $(this);
            if ($(".qa-pop .js-shot-video").hasClass("on")) {
                if (!$(".J_next-box").hasClass("hide") || $(".mocoplayer-error").length)return void $.prompt("请在视频播放时截图！", {icon: "error"});
                _.screenShot(".qa-pop .js-shot-video")
            } else _.reset(".qa-pop .js-shot-video", 1);
            if (!b.hasClass("submit-loading")) {
                if (g = $.trim($("#js-qa-title").val()), g.length < 5 || g === $("#js-qa-title").attr("placeholder"))return void layer.msg("问答标题不能少于5个字", 2, -1);
                if (g.length > 255)return void layer.msg("问答标题不能大于255个字", 2, -1);
                if (a = UE.getEditor("discuss-editor").getContent(), a = $.trim(a), c = $.trim(UE.getEditor("discuss-editor").getContentTxt()), h = c.length, 0 == h || "请输入讨论内容..." == c)return void layer.msg("请输入讨论内容", 2, -1);
                if (5 > h)return void layer.msg("输入不能小于5个字符", 2, -1);
                if (a.length > 2e4)return void layer.msg("输入不能超过20000个字", 2, -1);
                var j = $.trim(y.getResult(".qa-pop .verify-code"));
                if (0 == j.length)return void $(".qa-pop .verify-code").trigger("fail", "请输入验证码");
                w.verify = j, $(".qa-pop .verify-code").trigger("succ"), $.extend(w, postData), w.content = a, w.title = g, v.remote.qa.prev(w), $(".interal-checked").length && (w.frommedia = 1), b.addClass("submit-loading").val("正在发布..."), $.ajax({
                  //  url: "/course/ajaxsaveques",
                    data: w,
                    type: "post",
                    dataType: "json",
                    success: function (a) {
                        0 == a.result ? (layer.msg("发布成功!", 2, -1), v.tabList.qa.load(), v.remote.qa.reset(), window.qapop.hide(), $("#interal-use").removeClass("interal-checked")) : -103002 == a.result ? ($(".qa-pop .verify-code").trigger("fail", a.msg), $(".qa-pop .verify-code-ipt").val(""), $(".qa-pop .js-verify-refresh").click()) : layer.msg(a.msg, 2, -1)
                    },
                    complete: function () {
                        b.removeClass("submit-loading").val("发布")
                    }
                })
            }
        }), $(document).on("click", "#js-note-submit", function () {
            var a = $(this), c = {};
            if (!a.hasClass("submit-loading")) {
                if ($(".note-pop .js-shot-video").hasClass("on")) {
                    if (!$(".J_next-box").hasClass("hide") || $(".mocoplayer-error").length)return void $.prompt("请在视频播放时截图！", {icon: "error"});
                    _.screenShot(".note-pop .js-shot-video")
                } else _.reset(".note-pop .js-shot-video", 1);
                if (0 !== $(".publish-note-btns .verify-code-ipt").length) {
                    var h = $.trim(y.getResult(".publish-note-btns .verify-code"));
                    if (0 == h.length)return void $(".publish-note-btns .verify-code").trigger("fail", "请输入验证码");
                    $(".publish-note-btns .verify-code").trigger("succ"), c.verify = h
                }
                if (c.content = $("#js-note-textarea").val(), !$.trim(c.content))return void layer.msg("请输入内容", 2, -1);
                var g = c.content.replace(/\s*$/, "").length;
                if (g > 0 && 3 > g)return void layer.msg("输入不能小于3个字符", 2, -1);
                if (g > 1e3)return void layer.msg("输入不能超过1000个字", 2, -1);
                $.extend(c, postData), v.remote.note.prev(c), a.addClass("submit-loading").val("正在保存..."), $.ajax({
                  //  url: "/course/addnote",
                    type: "post",
                    dataType: "json",
                    data: c,
                    success: function (c) {
                        a.removeClass("submit-loading").val("保存"), 0 == c.result ? (layer.msg("发布成功", 2, -1), v.tabList.note.load(), v.remote.note.reset(), window.notepop.hide(), $(".js-ower").hasClass("checked") && ($(".js-course-menu").attr("data-ower", "all"), $(".js-ower").removeClass("checked")), $(".js-select-state a").removeClass("active"), $(".js-select-state a[data-sort=last]").addClass("active")) : 1 == c.data && -1 == c.result ? y.renderVerifyCodeBlock(".publish-note-btns .verify-code", "/course/getnotecode") : -103002 == c.result ? ($(".note-pop .verify-code").trigger("fail", c.msg), setTimeout(function () {
                            y.renderVerifyCodeBlock(".publish-note-btns .verify-code", "/course/getnotecode")
                        }, 1e3)) : layer.msg(c.msg, 2, -1)
                    },
                    error: function () {
                        layer.msg("发布失败", 2, -1), a.removeClass("submit-loading").val("保存")
                    }
                })
            }
        }), $("#ques-bd").delegate(".Js-change-ques", "click", function () {
            var a = $("#ques-group li");
            $(this).parent("li").removeClass("curr");
            var c, h = $(this).parent("li").index(), g = a.length - 1;
            h === g ? a.eq(0).addClass("curr") : $(this).parent("li").next().addClass("curr"), c = $("#ques-group .curr").find(".ques-title").attr("href"), $("#js-to-answer").attr("href", c)
        }), $("#J_Box").on("click", "#J_issue_Close,.ques-title,#js-to-answer", function () {
            $("#J_ques_pop").hide()
        }), function () {
            var a = function () {
                var a = {};
                return a.resetSize = function () {
                    var a = $(".chapter").hasClass("light");
                    if (a) {
                        if ($(window).width() > 800)var c = $(window).width() - $(".section-list").outerWidth(!0); else var c = 800;
                        c += "px"
                    } else var c = "100%";
                    var h = $("#header").outerHeight(!0), g = $(".js-course-menu").outerHeight(!0), v = $(window).height() - h - g;
                    $(".js-box-wrap").css("width", c).css("height", v + "px"), v > 500 ? $(".question-tip-layer").css("marginTop", "6%") : v > 400 && 500 > v ? $(".question-tip-layer").css("marginTop", "3%") : 400 > v && $(".question-tip-layer").css("marginTop", "1%")
                }, a
            }(), c = function () {
                {
                    var a = $(".js-course-menu"),
                        c = $(".course-left"),
                        h = c.offset().top,
                        g = c.offset().left;
                    $(".js-fixed-video")
                }
                return $(window).on("scroll", function () {
                    var c = $(window).scrollTop();
                    c >= h ? a.css("position", "fixed").css("left", g + "px") : a.css("position", "absolute").css("left", 0)
                }), {
                    setLT: function () {
                        h = c.offset().top, g = c.offset().left
                    }
                }
            }();
            a.resetSize(),
                $(".nano").nanoScroller(j),
                c.setLT(),
                $(window).on("resize", function () {
                setTimeout(function () {
                    a.resetSize(), $(".nano").nanoScroller(j), c.setLT(), $(window).trigger("scroll")
                }, 200)
            });
            var h = $(".section-list");
            $(".chapter").on("click", function () {
                var c = $(this);
                c.hasClass("light") ? (c.removeClass("light"), h.animate({right: -360}, 200)) : (c.addClass("light"), h.animate({right: 0}, 200)), a.resetSize()
            })
        }()
    })
});