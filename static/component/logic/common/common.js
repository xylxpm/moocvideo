define(function (require) {
    //function a() {
        //OP_CONFIG.userInfo && $.ajax({
        //    url: "/u/loading", dataType: "json", success: function (a) {
        //        if (0 == a.result) {
        //            var c = window.location.href.indexOf("notices"), h = window.location.href.indexOf("messages");
        //            a.data.remind > 0 ? (_not_unread = 1, $(".msg_remind").show(), (-1 != c || -1 != h) && (a.data.remind > 99 ? $("#not_new").find(".not-num").html("99+").show() : $("#not_new").find(".not-num").html("(" + a.data.remind + ")").show())) : (_not_unread = 0, _msg_unread || $(".msg_remind").hide())
        //        }
        //    }
        //})
    //}

    //function c() {
    //    h = $(window).height(),
    //        t = $(document).scrollTop(),
    //        t >= 768 ? ($("#backTop").show(),
    //            $("#js-elevator-weixin").removeClass("no-goto")) : ($("#backTop").hide(), $("#js-elevator-weixin").addClass("no-goto"))
    //}

    require("/moocvideo/static/component/base/util/string"),
    //    require("/moocvideo/static/component/logic/common/userinfo.js"),
    //    require("/moocvideo/static/component/logic/cart/cart.js");
    //var v = require("/moocvideo/static/component/base/util/cookie.js"),
    //    g = require("/moocvideo/static/component/base/suggest/suggest"),
    //    j = require("store");

    //require.async("chat", function () {
    //    // $.chat.init(), require.async("/moocvideo/static/moco/v1.0/dist/js/moco.min.js")
    //}),

    OP_CONFIG.usercaution && OP_CONFIG.usercaution.length > 0 && (require("/moocvideo/static/moco/v1.0/dist/js/moco.min.js"), $.alert("警告", {
        info: '<span style="font-size: 14px; line-height: 24px;">' + OP_CONFIG.usercaution + "</span>",
        callback: function () {
            window.location.href = "http://www.imooc.com/passport/user/logout?referer=http://www.imooc.com"
        }
    })),


        //    $(document).delegate(".js-closeBindHint", "click", function () {
        //    v.set("bindHintNotShow", "true", {expires: 1}), $(".js-bindHintBox").hide()
        //}),
        //    $("body").delegate(".js-refresh", "click", function () {
        //    window.location.reload()
        //}),
        //    $(function () {
        //    var a = $('[data-search="top-banner"]'), c = new g(a), h = ($(".search-area"), $(".showhide-search"), $(".search-input"));
        //    $("#nav").on("click", ".search-input", function () {
        //        $(".searchTags").hide()
        //    }), $("#nav").on("blur", ".search-input", function (a) {
        //        0 == $(a.currentTarget).val().length && $(".searchTags").show()
        //    }), $("#nav").on("click", ".showhide-search", function (a) {
        //        return $(".searchTags").hide(), "" != h.val() && c.search(h.val()), a.stopPropagation(), !1
        //    }), $("#nav").on("click", ".search-area", function (a) {
        //        return a.stopPropagation(), !1
        //    }), $(document).on("click", function () {
        //        "" == h.val() && v()
        //    });
        //    var v = function () {
        //    }
        //}),
        //    $(function () {
        //    "code" == OP_CONFIG.page && $("#J_GotoTop").hide();
        //    var h = 0;
        //    clearTimeout(h), -2 == OP_CONFIG.userout && (h = setTimeout(function () {
        //        $.alert("你的账号在另一地点登录，已被强迫下线。", {
        //            info: "如果不是本人操作，建议你修改密码。", callback: function () {
        //                window.location.href = "http://www.imooc.com"
        //            }
        //        })
        //    }, 600)), a(), c(), $('[action-type="my_menu"],#nav_list').on("mouseenter", function () {
        //        $('[action-type="my_menu"]').addClass("hover"), $("#nav_list").show()
        //    }), $('[action-type="my_menu"],#nav_list').on("mouseleave", function () {
        //        $('[action-type="my_menu"]').removeClass("hover"), $("#nav_list").hide()
        //    }), $("#set_btn").click(function () {
        //        location.href = "/space/course"
        //    }), $("#js-signin-btn").on("click", function (e) {
        //        e.preventDefault(), require.async("../../logic/login/login-regist", function (a) {
        //            a.init()
        //        })
        //    }), $("#js-signup-btn").on("click", function (e) {
        //        e.preventDefault(), require.async("../../logic/login/login-regist", function (a) {
        //            a.signup()
        //        })
        //    }), $("#nav-item a:eq(0)").click(function () {
        //        j.remove("lange_id"), j.remove("pos_id"), j.remove("tab_id"), j.remove("is_easy"), j.remove("sort")
        //    }), $("#backTop").click(function () {
        //        $("html,body").animate({scrollTop: 0}, 200)
        //    }), $(window).scroll(function () {
        //        c()
        //    }), $(document).on("keydown", function (e) {
        //        13 == e.keyCode && e.ctrlKey && ($(document).trigger("submit.imooc"), e.preventDefault())
        //    })
        //}),
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

    //var w = 0;
    //$("#header-user-card").on("mouseenter", function () {
    //    clearTimeout(w), $(this).hasClass("hover") || $(this).addClass("hover")
    //}).on("mouseleave", function (e) {
    //    e.stopPropagation();
    //    var a = $(this);
    //    w = setTimeout(function () {
    //        a.hasClass("hover") && a.removeClass("hover")
    //    }, 300)
    //});
    //$.ajax({
    //    url: "http://order.imooc.com/pay/cartorder",
    //    dataType: "jsonp",
    //    jsonp: "jsonpcallback",
    //    success: function (a) {
    //        if (0 == a.result && (a.data.order && 1 * a.data.order && $(".js-cart-num").attr("data-ordernum", a.data.order), a.data.cart && 1 * a.data.cart)) {
    //            var c = parseInt(a.data.order);
    //            $(".js-cart-num").attr("data-cartnum", a.data.cart), $(".js-cart-num").html(parseInt(a.data.cart) + c).show()
    //        }
    //    },
    //    complete: function () {
    //        $.initGetCart()
    //    }
    //});
    //var b = 0;
    //$("#shop-cart").on("mouseenter", function () {
    //    clearTimeout(b), $(this).hasClass("hover") || ($(this).addClass("hover"), $("#nav").css("z-index", "99999"))
    //}).on("mouseleave", function (e) {
    //    e.stopPropagation();
    //    var a = $(this);
    //    b = setTimeout(function () {
    //        a.hasClass("hover") && (a.removeClass("hover"), "index" == OP_CONFIG.module && "index" == OP_CONFIG.page ? $("#nav").css("z-index", "1000") : $("#nav").css("z-index", "auto"))
    //    }, 300)
    //}),

    //    $("#js-my-cart").on("click", ".js-close", function () {
    //    var a = this, c = $(a).parents(".js-item"), h = c.data("typeid"), v = c.data("type"), g = c.data("goodsid"), j = {
    //        type_id: h,
    //        type: v,
    //        goods_id: g
    //    };
    //    $.ajax({
    //        url: "http://order.imooc.com/pay/delcartgoods",
    //        dataType: "jsonp",
    //        data: j,
    //        jsonp: "jsonpcallback",
    //        success: function (a) {
    //            if ("0" == a.result) {
    //                c.remove();
    //                var h = $("#js-card-ul").find("li").length;
    //                if (0 == h) {
    //                    var v = '<div class="cart-title-box clearfix">                                        <h2 class="l">我的购物车</h2>                                        <h5 class="r">已加入<span class="js-incart-num">0</span>门课程</h5>                                    </div>                                    <div class="cart-wrap">                                        <div class="clear-cart">                                            <span class="cartIcon icon-shopping-cart"></span>                                            <h3>购物车里空空如也</h3>                                            <div class="text">快去这里选购你中意的课程</div>                                            <p><a class="go-link" href="http://coding.imooc.com" target="_blank">实战课程</a></p>                                            <p><a class="go-link" href="http://www.imooc.com/course/program" target="_blank">职业路径</a></p>                                        </div>                                    </div>                                    <div class="more-box clearfix">                                        <div class="l show-box">                                            <span class="text"><a href="http://order.imooc.com/myorder" target="_blank">我的订单中心</a></span>                                        </div>                                        <a href="http://order.imooc.com/pay/cart" target="_blank" class="r moco-btn moco-btn-red go-cart">去购物车</a>                                    </div>';
    //                    $("#js-my-cart").html(v), $(".js-cart-num").html("").attr("data-cartnum", 0).hide()
    //                } else {
    //                    var g = parseInt($(".js-cart-num").html()), j = parseInt($(".js-cart-num").attr("cartnum"));
    //                    $(".js-cart-num").html(parseInt(g - 1)).attr("cartnum", parseInt(j - 1));
    //                    var w = parseInt($(".js-incart-num").html());
    //                    $(".js-incart-num").html(parseInt(w - 1))
    //                }
    //            } else $.alert(a.msg)
    //        }
    //    })
    //}),


    //$(".js-show-menu").on("click", function (e) {
    //    return $("html").addClass("holding"), $("body").addClass("slide-left"), $(".slide-left-opa")[0] || $("body").append('<div class="slide-left-opa" style="position: absolute; top: 0; right: 130px; left: 0;bottom: 0; background: rgba(0 ,0,0,0.3); z-index: 2000;"></div>'), document.getElementsByClassName("slide-left-opa")[0].addEventListener("touchstart", function () {
    //        return $("html").removeClass("holding"), $("body").removeClass("slide-left"), $(".slide-left-opa").remove(), !1
    //    }, !1), e.stopPropagation(), !1
    //}),

        //$("body").on("click", ".slide-left-opa", function () {
        //    $("html").removeClass("holding"), $("body").removeClass("slide-left"), $(".slide-left-opa").remove()
        //}),

        //!function () {
        //    $(document).on("click", "[data-ast]", function () {
        //        $.get("/index/adclick", {ast: $(this).attr("data-ast"), r: (new Date).getTime()})
        //    }).on("click", "[data-track]", function () {
        //        $.get("/index/clickuserlog", {track: $(this).attr("data-track"), r: (new Date).getTime()})
        //    })
        //}()
})

    //function () {
    //    var a = {
    //        includejs: function (a) {
    //            var s = document.createElement("script");
    //            s.type = "text/javascript", s.src = a, document.getElementsByTagName("body")[0].appendChild(s)
    //        }
    //    };
    //    a.includejs("/moocvideo/visitlog/index/user.js?v=" + (new Date).getTime()), a.includejs("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js")
    //}();