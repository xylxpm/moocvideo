define(["jquery"], function () {
    function a(c) {
        var v, y, w, j, O, b = {}, N = {};
        "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]), c.length && (O = c.shift(), v = $(h.targetFrom), y = v.offset(), b.width = v.width(), b.height = v.height(), w = $(h.targetTo), toOffset = w.offset(), N.width = w.outerWidth(), N.height = w.outerHeight(), j = $(g.replace(/\$\{(\w+?)\}/g, function (s, m) {
            return O[m] || m
        })), j.appendTo("body").css({
            left: y.left + b.width / 2 - 70,
            top: y.top + b.height / 2 - 30
        }).fadeIn().delay(1500).animate({
            left: toOffset.left + N.width - 140,
            top: toOffset.top + N.height - 60,
            opacity: .1
        }, function () {
            j.remove();
            var g = parseInt($(h.targetNum).text().replace(",", "")) + O.mp, v = g.toString();
            v.length > 3 && (v = v.slice(0, 1) + "," + v.slice(1, v.length)), $(h.targetNum).text(v), c.length && a(c)
        }))
    }

    var h = {
        targetTo: "#header-avator",
        targetNum: "#js-user-mp",
        targetFrom: "#studyMain"
    }, g = '<div class="animate-mp">             <p class="mp"><i>+</i><span class="num">${mp}</span>MP</p>             <p class="desc">${desc}</p>         </div>';
    return function (g, c) {
        $.extend(h, c || {}), g.length && a(g)
    }
});