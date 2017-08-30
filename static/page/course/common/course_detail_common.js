define(function (require, exports, module) {
    function Store(a) {
        this.name = a, this.data = null
    }

    //require("common");
    require("/moocvideo/static/lib/layer/1.6.0/layer.min.js");
    require("/moocvideo/static/lib/jquery/plugin/jquery.scrollbar");
    //require("/moocvideo/static/css/jquery.scrollbar.css");
    //require("/moocvideo/static/component/base/placeholder/placeholder.js");
    //require("/moocvideo/static/page/course/common/autocomplete.js");
    //require("/moocvideo/static/page/course/common/course_note.js");
    //require("/moocvideo/static/page/course/common/ajax-right-recommend.js");
    //var wikiSearch = require("/moocvideo/static/page/course/common/wiki-search.js");
    var verifyCode = require("/moocvideo/static/page/common/verify-code.js");
    var store = require("store");

    Store.prototype = {
        reset: function () {
            this.data = null
        }, set: function (a, c) {
            void 0 === c ? this.data = a : (this.data = this.data || {}, this.data[a] = c)
        }, prev: function (a) {
            $.extend(a, this.data)
        }, extendMethod: function (a, c) {
            this.name && "function" == typeof this[a] && (this["_" + a] = this[a], this[a] = function () {
                this["_" + a].call(this), c.call(this)
            })
        }, success: $.noop
    };
    var remote = {qa: new Store("qa"), note: new Store("note")};
    exports.remote = remote, $(function () {
        function commentSubmit(a) {
            {
                var c, h, v = $("#js-pl-submit");
                $("#js-user-mp")
            }
            if (!v.hasClass("submit-loading")) {
                if (h = $.trim($("#js-pl-textarea").val()), h.length < 5 || h == $("#js-pl-textarea").attr("placeholder"))return void layer.msg("输入不能小于5个字符", 2, -1);
                if (h.length > 300)return void layer.msg("输入不能超过300个字", 2, -1);
                if (0 !== $(".pl-input-btm .verify-code input").length) {
                    var g = $.trim(verifyCode.getResult(".pl-input-btm .verify-code"));
                    if (0 == g.length)return void $(".pl-input-btm .verify-code").trigger("fail", "请输入验证码");
                    $(".pl-input-btm .verify-code").trigger("succ"), c = g
                }
                v.addClass("submit-loading").val("发布中...");
                var w = {verify: c, content: h, mid: pageInfo.mid};
                a && (w.checked = 1), $.ajax({
                    //  url: "/course/docomment",
                    type: "post",
                    dataType: "json",
                    data: w,
                    success: function (a) {
                        if (1 == a.data && -1 == a.result)verifyCode.renderVerifyCodeBlock(".pl-input-btm .verify-code", "/course/getcoursecommentcode"); else if (-103002 == a.result)$(".pl-input-btm .verify-code").trigger("fail", a.msg), setTimeout(function () {
                            verifyCode.renderVerifyCodeBlock(".pl-input-btm .verify-code", "/course/getcoursecommentcode")
                        }, 1e3); else if (-103008 == a.result) {
                            var c = $("#maybe-wenda");
                            c.show().addClass("show"), $("#qaMenu").click(), $("#plMenu").click()
                        } else 0 == a.result ? (layer.msg("发布成功!", 2, -1), $("#js-pl-textarea").val("").blur(), $("#js-pl-limit").text(0), $(".pl-input-btm .verify-code").trigger("succ").html(""), GetListData.pl.load()) : layer.msg(a.msg, 2, -1)
                    },
                    complete: function () {
                        v.removeClass("submit-loading").val("发表评论")
                    }
                })
            }
        }

        OP_CONFIG.userInfo || ($(document).on("shown", function (e) {
            var a;
            (a = $(e.target)).hasClass("rl-modal") && (a.find("[data-dismiss]").remove(), $(".modal-backdrop").off("click"))
        }), "object" == typeof thePlayer && thePlayer.play(!1), require.async("login_sns", function (a) {
            a.init()
        })), $(".detaillist").perfectScrollbar({wheelSpeed: 20, wheelPropagation: !1});
        var GetListData = {
                //pl: require("/moocvideo/static/page/course/common/ajax-pl-list.js")({
                //    container: $("#plLoadListData"),
                //    params: {mid: pageInfo.mid}
                //}),
                //mate: require("/moocvideo/static/page/course/common/ajax-otherscode-list.js")({
                //    container: $("#mateLoadListData"),
                //    params: {mid: pageInfo.mid}
                //}),
                //qa: require("/moocvideo/static/page/course/common/ajax-discuss-list.js")({
                //    container: $("#qaLoadListData"),
                //    params: {mid: pageInfo.mid}
                //}),
                //note: require("/moocvideo/static/page/course/common/ajax-note-list.js")({
                //    container: $("#noteLoadListData"),
                //    params: {mid: pageInfo.mid},
                //    def: {media_id: pageInfo.mid, mediaType: "video"}
                //}),
                //wiki: require("/moocvideo/static/page/course/common/ajax-wiki-list.js")({
                //    container: $("#wikiLoadListData"),
                //    params: {mid: pageInfo.mid}
                //})
            },
            initFun = {
                qa: function () {
                }
            };
        exports.tabList = GetListData;
        var initEditor = function () {
            window.editor && window.editor.destroy(), window.editor = UE.getEditor("discuss-editor", {
                initialFrameHeight: 150,
                autoHeight: !0,
                autoFloatEnabled: !1,
                autoClearinitialContent: !0,
                initialStyle: "p{line-height:1.5em;font-size:13px;color:#444}"
            }), window.editor.ready(function () {
                window.editor.setHeight(150)
            }), verifyCode.renderVerifyCodeBlock(".qa-pop .verify-code", "/course/getcoursequestioncode")
        }, tabs = (window.postData = {mid: pageInfo.mid, picture_url: "", picture_time: 0}, $(".course-menu a[id]"));
        tabs.one("click", function () {
            {
                var a;
                $(this)
            }
            a = $(this).attr("id"), a = a.substring(0, a.length - 4), initFun[a] && initFun[a](), GetListData[a] && GetListData[a].load()
        }).on("click", function (e) {
            var a, c = $(this);
            e.preventDefault(), "wikiMenu" == c.attr("id") && OP_CONFIG.userInfo.usertype > 1 ? $("#js-create-wiki").show() : $("#js-create-wiki").hide(), c.hasClass("active") || (c.parent().siblings().find(".active").removeClass("active"), c.addClass("active"), a = c.attr("id"), a = a.substring(0, a.length - 4), $("#" + a + "-content").siblings(".list-tab-con").hide().end().show(), store.set("ctb", c.parent().index()))
        });
        var tabIndex = 0;
        tabs.length > parseInt(store.get("ctb")) && (tabIndex = parseInt(store.get("ctb"))), tabs.eq(tabIndex).trigger("click"), "placeholder"in document.createElement("input") || ($(".js-placeholder").each(function () {
            var a = $(this);
            a.val(a.attr("placeholder"))
        }), $(document).on("focus", ".js-placeholder", function () {
            var a = $(this);
            a.val() == a.attr("placeholder") && a.val("").removeClass("placeholder")
        }).on("blur", ".js-placeholder", function () {
            var a = $(this);
            !a.val().length && a.attr("placeholder") && a.addClass("placeholder").val(a.attr("placeholder"))
        })), $("#js-pl-input-fake").on({
            focusin: function () {
                $(this).addClass("ipt-fake-focus")
            }, focusout: function () {
                $(this).removeClass("ipt-fake-focus")
            }, keyup: function () {
                var a = $.trim($("#js-pl-textarea").val()).length;
                a > 300 ? $(this).addClass("ipt-fake-error").find("#js-pl-limit").addClass("limit-overflow") : $(this).removeClass("ipt-fake-error").find("#js-pl-limit").removeClass("limit-overflow"), $("#js-pl-limit").text(a)
            }
        }), $("#js-pl-submit").click(function () {
            commentSubmit(!1)
        }), $("#wenda-ok").on("click", function () {
            var a = $.trim($("#js-pl-textarea").val());
            $("#js-pl-textarea").val(""), $("#qaMenu").click(), $("#maybe-wenda").removeClass("show").hide(), $(".op.question").trigger("click"), setTimeout(function () {
                UE.getEditor("discuss-editor").setContent(a)
            }, 1e3)
        }), $("#wenda-no").on("click", function () {
            commentSubmit(!0), $("#maybe-wenda").removeClass("show").slideUp("fast")
        }), $(document).on({
            focusin: function () {
                $(this).addClass("ipt-fake-focus")
            }, focusout: function () {
                $(this).removeClass("ipt-fake-focus")
            }, keyup: function () {
                var a = $("#js-note-textarea").val();
                if ($.trim(a)) {
                    var c = a.replace(/\s*$/, "").length;
                    c > 1e3 ? ($(this).addClass("ipt-fake-error"), $("#js-note-limit").addClass("limit-overflow")) : ($(this).removeClass("ipt-fake-error"), $("#js-note-limit").removeClass("limit-overflow")), $("#js-note-limit").text(c)
                } else $("#js-note-limit").text($.trim(a).length)
            }
        }, "#js-note-input-fake").on("keyup change", "#js-note-textarea", function () {
            var a = $(this).val(), c = $("#js-note-text-counter").find("em");
            c.text($.trim(a).length ? a.length : $.trim(a).length)
        }).on("click", ".shot-btn", function () {
            shot.screenShot()
        }).on("click", ".js-shot-code,.js-shot-video", function () {
            $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on")
        }), $(".js-comp-tabs").each(function () {
            var a = $(this), c = a.find(".js-comp-tab-item"), h = a.find(".js-comp-tab-pannel");
            c.on("click", function () {
                if (!$(this).hasClass("on")) {
                    var a = $(this).data("pannel");
                    return c.removeClass("on"), $(this).addClass("on"), h.hide().filter(function () {
                        return $(this).data("pannel") == a
                    }).show(), !1
                }
            })
        }), $(".js-comp-tab-pannel li").on("mouseover", function () {
            $(this).addClass("curr").siblings().removeClass("curr")
        }), $("#js-note-textarea").on("keyup change", function () {
            var a = $(this);
            $("#js-note-text-counter em").text($.trim(a.val()).length)
        }), $(".downlist a").click(function () {
            var a = $(this).attr("data-id");
            $.ajax({
                // url: "/course/ajaxdownloadlog",
                type: "post",
                data: {id: a}
            })
        }), $(".js-btn-follow").click(function (e) {
            if (OP_CONFIG.userInfo) {
                var a, c = $(this);
                c.hasClass("follow-submiting") || (c.hasClass("course-followed") && (a = 1), c.addClass("follow-submiting"), $.ajax({
                    type: "post",
                    //url: "/u/" + OP_CONFIG.userInfo.uid + "/course/" + c.attr("data-id"),
                    dataType: "json",
                    success: function (h) {
                        0 == h.result ? a ? (c.removeClass("course-followed").addClass("course-follow").attr("title", "关注此课程").find(".icon").removeClass("icon-heart-revert").addClass("icon-heart"), c.find("em").text("关注")) : (c.removeClass("course-follow").addClass("course-followed").attr("title", "已关注").find(".icon").removeClass("icon-heart").addClass("icon-heart-revert"), c.find("em").text("已关注")) : layer.msg("操作失败，请稍后再试", 1, 1)
                    },
                    error: function () {
                        layer.msg("网络错误，请稍后再试", 1, 1)
                    },
                    complete: function () {
                        c.removeClass("follow-submiting")
                    }
                }), e.preventDefault())
            }
        }), $("#noteLoadListData").on("click", ".js-toggle-content", function (e) {
            var a = $(this), c = a.attr("data-state");
            "expanded" === c ? a.text("[ 查看全文 ]").attr("data-state", "collapsed").parent().css({position: "absolute"}).closest(".js-notelist-content").css({maxHeight: "168px"}) : a.text("[ 收起全文 ]").attr("data-state", "expanded").parent().css({position: "static"}).closest(".js-notelist-content").css({maxHeight: "none"}), e.preventDefault()
        }),

            $(".section-list .notes").on("click", function () {
            window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause(), $(".note-pop").length || (window.notepop = $.dialog($("#course-note-tpl").html(), {title: "笔记"}))
        }),

            $(".section-list .wiki").on("click", function () {
            window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause(), $(".wiki-pop").length || (window.wikipop = $.dialog($("#course-wiki-tpl").html(), {title: "搜索WIKI"}))// wikiSearch.init())
        });
        var isAjax = 0;
        $(".section-list .question").on("click", function () {
            return isAjax ? void 0 : (isAjax = 1, window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause(),

                $(".qa-pop").length ? void(isAjax = 0) : void $.ajax({
                type: "post",
                // url: "/course/ajaxgetuserquesnum",
                dataType: "json",
                success: function (a) {
                    isAjax = 0, 1 == a.code ? (window.qapop = $.dialog($("#course-qa-tpl").html(), {
                        title: "提问",
                        callback: function () {
                            $("#edui_fixedlayer").remove()
                        }
                    }), initEditor()) : 2 == a.code ? (window.qapop = $.dialog($("#course-qa-tpl").html(), {
                        title: "提问",
                        callback: function () {
                            $("#edui_fixedlayer").remove()
                        }
                    }), initEditor(), $("#interal-use").addClass("interal-checked"), $("#use-credit-tip").show()) : 3 == a.code && ($("#no-credit").css("display", "block"), $(".cancel-cf").on("click", function () {
                        $("#no-credit").css("display", "none"), window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
                    }))
                },
                error: function () {
                    isAjax = 0, layer.msg("网络错误，请稍后再试", 1, 1)
                },
                complete: function () {
                    isAjax = 0
                }
            }))
        });


        var wenda = function () {
            $.ajax({
                type: "GET",
                //  url: "/course/ajaxmaxchaptermediaques",
                data: {mid: pageInfo.mid},
                dataType: "json",
                success: function (a) {
                    if (0 == a.result) {
                        var c = a.data;
                        if ("undefined" != typeof c.count && c.count > 0) {
                            var h, v, g, w = "";
                            v = c.count > 1 ? '<a href="javascript:;" class="change-ques Js-change-ques">换个问题</a>' : '<p class="change-ques">&nbsp;</p>';
                            var y = c.list;
                            $(y).each(function (a) {
                                h = 0 == a ? "curr" : "", w += '<li class="' + h + '">			                            <a href="/qadetail/' + y[a].id + '?lastmedia=1" target="_blank" class="ques-title">			                                <i class="icon-ques-revert"></i>			                            	' + y[a].title + "			                            </a>			                            " + v + "			                        </li>"
                            }), g = '<div class="question-tip-layer" id="J_ques_pop">								    <i href="javascript:;" class="close-ques-layer icon-close" id="J_issue_Close"></i>								    <div class="ques-hd">								        <span>来帮同学解答一个问题,可获得</span>								        <i class="experience">+30经验，</i>								        <i class="credit">+1积分</i>								    </div>								    <div class="ques-bd">									    <ul class="ques-group" id="ques-group">					                    	' + w + '					                    </ul>						                <a href="/qadetail/' + y[0].id + '?lastmedia=1" target="_blank" id="js-to-answer" class="to-answer">去回答</a>								    </div>							    </div>', $("#js-ques-box").append(g)
                        }
                    }
                }
            })
        };
        wenda();
        var recomsColors = new Array, recoms = {
            getData: function (a, c, h) {
                var v = this;
                $(a).each(function (g) {
                    $.ajax({
                        type: "GET",
                        //  url: "/course/" + a[g],
                        data: {cid: course_id},
                        dataType: "json",
                        success: function (a) {
                            if (0 == a.result) {
                                var $ = a.data;
                                $.length && ("attentionrecom" == c[g] ? v.attentionrecom($, h) : v.courserecom($, h))
                            }
                        }
                    })
                })
            }, selectStyle: function () {
                var a = ["blue", "yellow", "green", "orange", "lake-blue"], c = ["fs20", "fs18", "fs16", "fs14"], h = ["normal", "bold"], v = function (a) {
                    return index = parseInt(Math.floor(Math.random() * a.length))
                }, g = a[v(a)], $ = c[v(c)], w = h[v(h)], y = g + " " + $ + " " + w, b = {
                    color: g,
                    size: $,
                    weight: w,
                    className: y
                };
                return b
            }, changeStyle: function () {
                var a = this;
                recomsColors.push(a.selectStyle());
                var c = recomsColors.length;
                if (c > 4 && (recomsColors.shift(), c = recomsColors.length), c > 1) {
                    var h = parseInt(c - 1);
                    $.each(recomsColors, function (i) {
                        return i == h || recomsColors[h].color != recomsColors[i].color && recomsColors[h].size != recomsColors[i].size ? void 0 : (recomsColors.pop(), a.changeStyle())
                    })
                }
            }, attentionrecom: function (a, c) {
                var h = this, v = "";
                v += '<div class="box mb40 all-attention-box">                        <h4>大家都关注</h4>                            <div class="js-all-attention all-attention">', $(a).each(function (i) {
                    "undefined" != typeof a[i].title && (h.changeStyle(), v += '<a href="' + a[i].url + '" target="_blank" data-id="' + a[i].subject_id + '" class="' + recomsColors[recomsColors.length - 1].className + '">' + a[i].title + "</a>")
                }), $(c).prepend(v)
            }, courseCartColor: function (a) {
                var c, h = {
                    blueArr: ["CSS3", "jquery", "sassless", "python", "mysql", "大数据", "cloudcomputing", "photoshop"],
                    orangeArr: ["html", "html5", "webapp", "fetool"],
                    greenArr: ["nodejs", "vuejs", "C", "C#", "android", "mongodb", "test"],
                    cyanArr: ["bootstrap", "Reactjs", "C puls puls", "Go", "ios", "Unity 3D", "Cocos2d-x", "maya"],
                    purpleArr: ["javascript", "php", "linux", "premiere", "ZBrush"],
                    redArr: ["angularjs", "java", "ruby", "Oracle", "SQL Server"]
                };
                return $.each(h, function (v) {
                    $.each(h[v], function (g) {
                        a == h[v][g] && (c = v)
                    })
                }), "blueArr" == c ? "blue" : "orangeArr" == c ? "orange" : "greenArr" == c ? "green" : "cyanArr" == c ? "cyan" : "purpleArr" == c ? "purple" : "redArr" == c ? "red" : "red"
            }, courserecom: function (a, c) {
                var h = this, v = "";
                v += '<div class="box mb40 recom-course-list-box">                        <h4>推荐课程</h4>                        <ul class="js-recom-course recom-course-list clearfix">', $(a).each(function (i) {
                    var c = a[i];
                    v += '<li class="clearfix">';
                    var g = "";
                    "undefinded" != typeof c.type && (g = 1 == c.type ? '<a href="http://www.imooc.com/learn/' + c.id + '" class="clearfix" target="_blank">' : '<a href="http://coding.imooc.com/class/' + c.id + '.html" class="clearfix" target="_blank">'), v += g;
                    var $ = "";
                    if ($ = "undefined" != typeof c.pic && null != c.pic ? '<div class="l course-img" style="background-image: url(' + c.pic + ');">' : '<div class="l course-img" style="background-image: url(http://www.imooc.com/courseimg/s/cover015_s.jpg);">', v += $, "undefinded" != typeof c.skillname && 0 != c.skillname.length) {
                        var w = c.skillname, y = w[0], b = y.marking;
                        if (w) {
                            var j = h.courseCartColor(b);
                            v += '<div class="cart-color ' + j + '"></div></div>'
                        }
                    }
                    v += '<div class="l content-box">                            <p class="smalle-title">' + c.name + '</p>                            <p class="content-text" title="' + c.description + '">' + c.description + '</p>                            <div class="clearfix learn-detail">';
                    var C = "";
                    1 == c.easy_type ? C = "初级" : 2 == c.easy_type ? C = "中级" : 3 == c.easy_type && (C = "高级"), v += C + "<span>·</span>" + c.numbers + "人在学</div>                        </div>                    </a>                </li>"
                }), v += "</ul></div>", $(c).append(v)
            }
        };
        recoms.getData(["ajaxskillcourse", "ajaxcoursenewrecom"], ["attentionrecom", "courserecom"], ".js-recom-box");
        var learnStatus = function () {
            $.ajax({
                type: "post",
                // url: "/course/ajaxusermediasstatus?cid=" + course_id,
                dataType: "json",
                success: function (a) {
                    var c, h = [];
                    if (0 == a.result) {
                        var v = a.data, g = $(".nano-content").find("li");
                        $(g).each(function (a) {
                            h.push($(g[a]).attr("data-id"))
                        }), $(h).each(function (a) {
                            if ("" == v) {
                                var g = $(".nano-content").find("li").eq(a);
                                return c = '<i class=""><em class="icon-nolearn"></em></i>', void $(g).find("a").prepend(c)
                            }
                            if (v[h[a]]) {
                                var g = $(".nano-content").find("li").eq(a);
                                1 == v[h[a]].finished ? (c = '<i class=""><em class="icon-full"></em></i>', h[a] == tplDef.media_id && (c = '<i class="">正在学<em class="icon-clock"></em></i>')) : (c = '<i class=""><em class="icon-half"></em></i>', h[a] == tplDef.media_id && (c = '<i class="">正在学<em class="icon-clock"></em></i>')), $(g).find("a").prepend(c)
                            } else {
                                var g = $(".nano-content").find("li").eq(a);
                                c = '<i class=""><em class="icon-nolearn"></em></i>', $(g).find("a").prepend(c)
                            }
                        })
                    }
                }
            })
        };
        learnStatus(), function () {
            0 !== $(".course-about-tit span").length && ($(".course-about-tit span").each(function (i) {
                var a = i;
                $(this).on("click", function () {
                    $(this).hasClass("on") || ($(this).parent().find("span.on").removeClass("on"), $(this).addClass("on"), $(".course-about .con-wrap").css("display", "none").eq(a).fadeIn())
                })
            }), $(".course-about-tit span").eq(0).click())
        }();
        var chaptername = courseName || $(".section-list h3").text(),
            html = "我正在参加@慕课网 的一门课程【" + chaptername + "】,很不错哦！快来一起学习吧！",
            imgPic = "";
        url = course_id ? "http://www.mukewang.com/view/" + course_id : "http://www.imooc.com" + window.location.pathname, window._bd_share_config = {
            common: {
                bdUrl: url,
                bdSnsKey: {tsina: "2254855082"},
                bdText: html,
                bdMini: "2",
                bdMiniList: !1,
                bdPic: imgPic,
                bdStyle: "0",
                bdSize: "16"
            }, share: {}
        }, setTimeout(function () {
            with (document)0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = ""]
            //with (document)0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date / 36e5)]
        }, 1e3), shareFrame = $(".js-share-statue"), setTimeout(function () {
            shareFrame.hide()
        }, 5e3);
        var timer, shareEles = $(".bdsharebuttonbox a"), interval = (pageInfo.mid, 5e3);
        shareEles.on("click", function (e) {
        }).mouseenter(function () {
            shareFrame.show()
        }).mouseleave(function () {
            timer && clearTimeout(timer), timer = setTimeout(function () {
                shareFrame.hide()
            }, interval)
        })
    })
});