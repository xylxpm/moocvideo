define(function (require) {


        !function () {
            var a, c, h;
            if (c = window.navigator.userAgent, h = /;\s*MSIE (\d+).*?;/.exec(c), h && +h[1] < 9) {
                if (a = document.cookie.match(/(?:^|;)\s*ic=(\d)/), a && a[1])return;
                $("body").prepend(["<div id='js-compatible' class='compatible-contianer'>", "<p class='cpt-ct'><i></i>您的浏览器版本过低。为保证最佳学习体验，<a href='/static/html/browser.html'>请点此更新高版本浏览器</a></p>", "<div class='cpt-handle'><a href='javascript:;' class='cpt-agin'>以后再说</a><a href='javascript:;' class='cpt-close'><i></i></a>", "</div>"].join("")), $("#js-compatible .cpt-agin").click(function () {
                    var d = new Date;
                    d.setTime(d.getTime() + 2592e6), document.cookie = "ic=1; expires=" + d.toGMTString() + "; path=/", $("#js-compatible").remove()
                }), $("#js-compatible .cpt-close").click(function () {
                    $("#js-compatible").remove()
                })
            }
        }();


})
