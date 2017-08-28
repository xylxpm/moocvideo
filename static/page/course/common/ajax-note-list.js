define(function (require) {
    function a(a) {
        if (w)return w;
        var c = $(a.container);
        h = a, h.params || (h.params = {}), (j = $("<div id='course_note' class='course_note'></div>")).appendTo(c), (C = $("<div class='page note-list-page'></div>")).appendTo(c), _ = doT.template(_, null, h.def || tplDef), g = k.setup({
            container: C,
            delegate: ".note-list-page a",
            pageClick: function () {
                var a = $(".js-all-state .active").attr("data-sort"), c = $(".js-course-menu").attr("data-ower");
                v($(this).attr("data-page"), c, a)
            }
        }), $("#course_note").delegate(".js-toggle-notelist", "mouseenter", function () {
            $(this).hasClass("hover") || ($(this).addClass("hover"), $(this).find(".slider-door").animate({margin: 0}, 300))
        }).delegate(".js-toggle-notelist", "mouseleave", function () {
            $(this).hasClass("hover") && ($(this).removeClass("hover"), $(this).find(".catch-pic").animate({marginLeft: "-50%"}, 300), $(this).find(".catch-video").animate({marginRight: "-50%"}, 300))
        }).delegate(".js-catch-pic", "click", function () {
            if ($(this).hasClass("js-catch-pic")) {
                var a = $(this).closest(".js-toggle-notelist").find("img").data("src");
                y.create(a)
            }
        });
        var T = !1;
        $(document).off("click.shownotecode").on("click.shownotecode", ".js-show-node-code", function () {
            if (!T) {
                T = !0;
                var a = $(this).attr("data-id");
                require.async("./view_code", function (c) {
                    c.init("/course/viewnotecode", a, {})
                }), setTimeout(function () {
                    T = !1
                }, 1e3)
            }
        }), $(document).on("click", ".Jpraise", function (e) {
            e.preventDefault();
            var f, a, c = $(this);
            return OP_CONFIG.userInfo ? (f = c.hasClass("on"), a = c.attr("data-id"), void $.ajax({
                url: "/course/" + (f ? "cancelpraise" : "praisenote"),
                data: {id: a, mid: pageInfo.mid},
                dataType: "json",
                success: function (a) {
                    if (0 == a.result) {
                        var v = +c.text();
                        c.find("em").text(v + (f ? -1 : 1)), c[f ? "removeClass" : "addClass"]("on").attr(f ? "取消赞" : "赞"), c.find("span")[f ? "removeClass" : "addClass"]("on praise-anim")
                    }
                },
                error: function () {
                }
            })) : void require.async("login_sns", function (a) {
                a.init()
            })
        }), $(document).on("click", ".Jcollect", function (e) {
            e.preventDefault();
            var a, c = $(this);
            if (!c.hasClass("on")) {
                if (!OP_CONFIG.userInfo)return void require.async("login_sns", function (a) {
                    a.init()
                });
                a = c.attr("data-id").split("|"), $.ajax({
                    url: "/course/collectnote",
                    data: {id: a[0], mid: pageInfo.mid},
                    dataType: "json",
                    success: function (a) {
                        if (0 == a.result) {
                            var v = c.find("em");
                            v.text(+v.text() + 1), c.find("i").text("已采集"), c.addClass("on").attr("title", "已采集").find("span").addClass("on icon-star-revert praise-anim")
                        }
                    }
                })
            }
        });
        var b = h.params.ower || $(".js-course-menu"), I = h.params.sort || $(".js-course-menu").attr("data-sort");
        return j.before("<div class='course-tool-bar clearfix js-select-state'>			<div class='tool-left l js-all-state'>		        <a href='javascript:;' class='sort-item active' data-sort='last'>最新</a>		        <a href='javascript:;' class='sort-item' data-sort='sugg'>点赞</a>	        </div>	        <div class='tool-right r'>		        <div class='switch js-ower' data-sort='" + I + "'>		    		<div class='switch-line'></div>		    		<div class='round js-lookme-round'></div>		  		</div>		        <span class='tool-item'>只看我的</span>		    </div>		</div>"), $(document).on("click", ".js-all-state a", function (e) {
            e.preventDefault();
            var a = $(this), c = "active";
            a.hasClass(c) || (a.siblings("." + c).removeClass(c).end().addClass(c), v(1, b.attr("data-ower"), a.attr("data-sort")))
        }), $(document).on("click", ".js-ower", function (e) {
            e.preventDefault();
            var a = $(this), c = "on", h = $(".js-all-state .active").attr("data-sort");
            a.hasClass(c) ? a.removeClass(c) : a.addClass(c), "all" == b.attr("data-ower") ? b.attr("data-ower", "my") : b.attr("data-ower", "all"), v(1, b.attr("data-ower"), h)
        }), w = {
            load: function (a) {
                v(+a)
            }
        }
    }

    function c(a) {
        return 0 != a.page_total || a.list && a.list.length ? void 0 : (j.html("<div class='unnote'><p>此节暂无同学记录过笔记</p></div>"), $(".note-list-page").empty(), !1)
    }

    function v(a, v, C) {
        var w = $.extend({}, h.params);
        w.page = a || 1, w.r = Math.random(), w.ower = v, w.sort = C, $.ajax({
            url: "/course/mynote",
            dataType: "json",
            data: w,
            success: function (a) {
                if (0 === a.result) {
                    if (a = a.data, c(a) === !1)return;
                    j.html(_(a)), g(+a.page_current, +a.page_total)
                }
            },
            error: function () {
            }
        })
    }

    require("/moocvideo/static/lib/dot/1.0.0/doT.js");
    var h, g, j, C, w, _ = require("/moocvideo/static/template/note-list.tpl"), k = require("/moocvideo/static/component/base/util/paging.js"), y = require("/moocvideo/static/component/base/util/picViewer");
    return a
});