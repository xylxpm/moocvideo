define(function () {
    var a = 2, c = function (c, h) {
        var v = Math.max(c - a, 1), g = Math.min(c + a, h);
        g = 1 == v ? Math.min(1 + 2 * a, h) : g, v = g == h ? Math.max(g - 2 * a, 1) : v;
        var j = [];
        c == v ? j.push("<span class='disabled_page'>首页</span><span class='disabled_page'>上一页</span>") : (j.push("<a href='javascript:void(0)' data-page='1'>首页</a>"), j.push("<a href='javascript:void(0)' data-page='" + (c - 1) + "'>上一页</a>"));
        for (var i = v; g >= i; i++)j.push("<a href='javascript:void(0)' data-page='" + i + "' " + (i == c ? "class='active text-page-tag'" : "class='text-page-tag'") + ">" + i + "</a>");
        return c == g ? j.push("<span class='disabled_page'>下一页</span><span class='disabled_page'>尾页</span>") : (j.push("<a href='javascript:void(0)' data-page='" + (c + 1) + "'>下一页</a>"), j.push("<a href='javascript:void(0)' data-page='" + h + "'>尾页</a>")), j.join("")
    };
    return {
        setup: function (a) {
            var h = $(a.container);
            return $(document).on("click", a.delegate, a.pageClick), function (a, v) {
                return 1 >= v ? void h.html("") : void h.html(c(a, v))
            }
        }
    }
});