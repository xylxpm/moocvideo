$(function () {
    function a(a) {
        location.href = a
    }

    function c() {
        var a = $(".J-chaptername").data("id");
        return $("[data-id=" + a + "]")
    }

    var j = {scrollTo: c()};


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
    b(0)

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
    }();

    var c = function () {
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

    a.resetSize();
    $(".nano").nanoScroller(j);
    c.setLT();
    $(window).on("resize", function () {
        setTimeout(function () {
            a.resetSize();
            // $(".nano").nanoScroller(j);
            c.setLT();
            $(window).trigger("scroll")
        }, 200)
    });
    var h = $(".section-list");
    $(".chapter").on("click", function () {
        var c = $(this);
        c.hasClass("light") ? (c.removeClass("light"), h.animate({right: -360}, 200)) : (c.addClass("light"), h.animate({right: 0}, 200)), a.resetSize()
    })


    $(".section-list .notes").on("click", function () {
        window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause();
        $(".note-pop").length || (window.notepop = $.dialog($("#course-note-tpl").html(), {title: "笔记"}))
    });

    $(".section-list .wiki").on("click", function () {
        window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause();

        $(".wiki-pop").length || (window.wikipop = $.dialog($("#course-wiki-tpl").html(), {title: "搜索WIKI"}))
    });

    $(".section-list .question").on("click", function () {
        window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause()
        $.dialog($("#course-wiki-tpl").html(), {title: "提问"})
    });
})
