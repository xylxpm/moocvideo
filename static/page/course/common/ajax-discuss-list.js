define(function (require) {
    function a(a) {
        if (w)return w;
        var c = $(a.container);
        h = a, h.params || (h.params = {}), (b = $("<div class='answertabcon'></div>")).appendTo(c), (j = $("<div class='page discuss-list-page'></div>")).appendTo(c), T = doT.template(T, null, h.def || tplDef), g = k.setup({
            container: j,
            delegate: ".discuss-list-page a",
            pageClick: function () {
                v($(this).attr("data-page"))
            }
        }), $(document).off("click.showcode").on("click.showcode", ".js-show-disscus-code", function () {
            var a = $(this).attr("data-id");
            require.async("./view_code", function (c) {
                c.init("/course/viewquescode", a, {})
            })
        });
        var C = h.params.order || "";
        return b.before("<div class='sortlist'> 			<div class='ordertab clearfix'> 				<a href='javascript:void(0)' hidefocus='true' data-order='1' class='quealltab " + (C ? "" : "onactive") + "'>全部</a>				<a href='javascript:void(0)' hidefocus='true' data-order='2' class='quealltab " + (1 == C ? "onactive" : "") + "'>精华</a>			</div>		</div>"), $(document).on("click", "[data-order]", function (e) {
            e.preventDefault();
            var a = $(this), c = "onactive";
            a.hasClass(c) || (a.siblings("." + c).removeClass(c).end().addClass(c), v(1, a.attr("data-order")))
        }), w = {
            load: function () {
                v()
            }
        }
    }

    function c(a) {
        return 0 != a.page_total || a.list.length ? void 0 : (b.html("<p class='unquestion'>此节暂无同学的问答</p>"), j.empty(), !1)
    }

    function v(a, v) {
        var j;
        v && (h.params.t = v), j = $.extend({}, h.params), j.page = a || 1, j.r = Math.random(), $.ajax({
            url: "/course/ajaxmediaques",
            dataType: "json",
            data: j,
            success: function (a) {
                if (0 === a.result) {
                    if (a = a.data, c(a) === !1)return;
                    b.html(T(a)), g(+a.page_current, +a.page_total)
                }
            },
            error: function () {
            }
        })
    }

    require("/moocvideo/static/lib/dot/1.0.0/doT.js");
    var h, g, b, j, w, T = require("/moocvideo/static/template/discuss-list.tpl"), k = require("/moocvideo/static/component/base/util/paging.js");
    return a
});