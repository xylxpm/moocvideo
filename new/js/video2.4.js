$(function () {
    jwplayer.key = 'TS4qsaxnmU61G+MTcWh8YKllWcQ=';
    function a(a) {
        location.href = a
    }

    function c() {
        var a = $(".J-chaptername").data("id");
        return $("[data-id=" + a + "]")
    }

    var j = {scrollTo: c()};

    var createPlayerLisSection = function (videoUrl, imageUrl, width, height, videoDiv) {
        jwplayer(videoDiv).setup({
            'width': width,
            'height': height,
            'file': videoUrl,
            'image': imageUrl,
            'analytics': {
                'cookies': false,
                'enabled': false
            },
            'primary': "html5",
            'preload': "none",
            'androidhls': "true",
            'abouttext': "Etiantian.com",
            'aboutlink': "http://www.etiantian.com",
            'autostart': "false",
            'startparam': "start"
        });

    }

    createPlayerLisSection("http://web.etiantian.com/ett20/hls/hd.m3u8?p=ceyw000026&s=b&t=1504075643&v=be5e5c8511a8d319fd38e90947d35ff1&h=http%3A%2F%2Fhd.etiantian.com", "http://hd.etiantian.net/security/c3a160887a1fd4517435693e8304d60f/59a660ca/etthd/ceyw000026/cover.jpg", "100%", "100%", 'videoDiv');


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
             $(".nano").nanoScroller(j);
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
