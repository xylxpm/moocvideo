define(function (require) {
    function a(a) {
        if (_)return _;
        var c = $(a.container);
        v = a, v.params || (v.params = {}), (j = $("<div class='othterscode-container'></div>")).appendTo(c), (T = $("<div class='page othterscode-list-page'></div>")).appendTo(c), C = doT.template(C, null, v.def || tplDef), g = k.setup({
            container: T,
            delegate: ".othterscode-list-page a",
            pageClick: function () {
                h($(this).attr("data-page"))
            }
        });
        var w = !1;
        return $(document).off("click.showotherscode").on("click.showotherscode", ".otherscode-code", function () {
            if (!w) {
                w = !0;
                var a = $(this).attr("data-id");
                require.async("./view_code", function (c) {
                    c.init("/course/viewexamcode", a, {})
                }), setTimeout(function () {
                    w = !1
                }, 1e3)
            }
        }), $(document).on("click", ".js-otherscode-praise", function (e) {
            e.preventDefault();
            var a, c = $(this);
            return OP_CONFIG.userInfo ? (a = c.attr("data-id"), void $.ajax({
                url: "/course/codesupport",
                data: {id: a},
                dataType: "json",
                success: function (a) {
                    if (0 == a.result) {
                        var h = +c.text();
                        c.find("em").text(h + 1), c.addClass("on").removeClass("js-otherscode-praise"), c.find("span").addClass("on")
                    }
                },
                error: function () {
                }
            })) : void require.async("login_sns", function (a) {
                a.init()
            })
        }), _ = {
            load: function () {
                h()
            }
        }
    }

    function c(a) {
        return 0 != a.page_total || a.list.length ? void 0 : (j.html("<p class='othterscode-none'>此节暂无同学的提交代码</p>"), !1)
    }

    function h(a, h) {
        var T;
        h && (v.params.order = h), T = $.extend({}, v.params), T.page = a || 1, T.r = Math.random(), $.ajax({
            url: "/course/otherscode",
            dataType: "json",
            data: T,
            success: function (a) {
                if (0 === a.result) {
                    if (a = a.data, c(a) === !1)return;
                    j.html(C(a)), g(+a.page_current, +a.page_total)
                }
            },
            error: function () {
            }
        })
    }

    require("/moocvideo/static/lib/dot/1.0.0/doT.js");
    var v, g, j, T, _, C = require("/moocvideo/static/template/otherscode-list.tpl"), k = require("/moocvideo/static/component/base/util/paging.js");
    return a
});