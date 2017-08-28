define(function () {
    $.cartStrHtml = function (a) {
        var c = $(".js-cart-num").attr("data-ordernum"), h = $(".js-cart-num").attr("data-cartnum"), v = '<div class="cart-title-box clearfix">                            <h2 class="l">我的购物车</h2>                            <h5 class="r">已加入<span class="js-incart-num">' + h + '</span>门课程</h5>                        </div>                        <div class="cart-wrap">                            <div class="cart-wrap-box" id="js-card-ul">                                <ul>';
        return $(a).each(function (c) {
            if (1 == a[c].exception) {
                {
                    parseInt($(".js-cart-num").html())
                }
                return $(".js-cart-num").attr("data-cartnum", parseInt(h - 1)), $(".js-incart-num").html(parseInt(h - 1)), !0
            }
            v += '<li class="clearfix js-item" data-type="' + a[c].type + '" data-typeid="' + a[c].type_id + '" data-goodsid="' + a[c].goods_id + '">                            <a href="' + a[c].code.href + '"><img class="l" src="' + a[c].code.pic_domain + a[c].code.pic + '-160-90.jpg" alt="' + a[c].code.name + '"></a>                            <div class="content-box l">                                <a href="' + a[c].code.href + '" target="_blank"><h3>' + a[c].code.name + '</h3></a>                                <p class="clearfix">                                    <span class="price l">￥' + a[c].pay_price + '</span>                                    <span class="del r js-close">删除</span>                                </p>                            </div>                        </li>'
        }), v += '</ul>                        </div>                    </div>                    <div class="more-box clearfix">', v += 0 != c ? '<div class="l show-box">                            <span class="num-icon">' + c + '</span>                            <span class="text">个订单未结算，</span>                            <span class="go-pay"><a href="http://order.imooc.com/myorder" target="_blank">立即结算</a></span>                        </div>' : '<div class="l show-box">                            <span class="text"><a href="http://order.imooc.com/myorder" target="_blank">我的订单中心</a></span>                        </div>', v += '<a href="http://order.imooc.com/pay/cart" target="_blank" class="r moco-btn moco-btn-red go-cart">去购物车</a>                    </div>'
    }, $.initGetCart = function () {
        $.ajax({
          //  url: "http://order.imooc.com/pay/cart",
            dataType: "jsonp",
            data: {jsonp: "true"},
            jsonp: "jsonpcallback",
            success: function (a) {
                if (0 == a.result) {
                    var c = JSON.stringify(a.data);
                    if (0 == a.data.length) {
                        var h = '<div class="cart-title-box clearfix">                                        <h2 class="l">我的购物车</h2>                                        <h5 class="r">已加入<span  class="js-incart-num">0</span>门课程</h5>                                    </div>                                    <div class="cart-wrap">                                        <div class="clear-cart">                                            <span class="cartIcon icon-shopping-cart"></span>                                            <h3>购物车里空空如也</h3>                                            <div class="text">快去这里选购你中意的课程</div>                                            <p><a class="go-link" href="http://coding.imooc.com" target="_blank">实战课程</a></p>                                            <p><a class="go-link" href="http://www.imooc.com/course/program" target="_blank">职业路径</a></p>                                        </div>                                    </div>                                    <div class="more-box clearfix">                                        <div class="l show-box">                                            <span class="text"><a href="http://order.imooc.com/myorder" target="_blank">我的订单中心</a></span>                                        </div>                                        <a href="http://order.imooc.com/pay/cart" target="_blank" class="r moco-btn moco-btn-red go-cart">去购物车</a>                                    </div>';
                        $("#js-my-cart").html(h)
                    } else $.ajax({
                       //url: "http://order.imooc.com/pay/check",
                        dataType: "json",
                        data: {goods_ids: c},
                        type: "post",
                        success: function (a) {
                            var c = a.data;
                            if (0 == a.result) {
                                var h = $(".js-cart-num").attr("data-cartnum");
                                if (0 == h) {
                                    var v = '<div class="cart-title-box clearfix">                                                        <h2 class="l">我的购物车</h2>                                                        <h5 class="r">已加入<span  class="js-incart-num">0</span>门课程</h5>                                                    </div>                                                    <div class="cart-wrap">                                                        <div class="clear-cart">                                                            <span class="cartIcon icon-shopping-cart"></span>                                                            <h3>购物车里空空如也</h3>                                                            <div class="text">快去这里选购你中意的课程</div>                                                            <p><a class="go-link" href="http://coding.imooc.com" target="_blank">实战课程</a></p>                                                            <p><a class="go-link" href="http://www.imooc.com/course/program" target="_blank">职业路径</a></p>                                                        </div>                                                    </div>                                                    <div class="more-box clearfix">                                                        <div class="l show-box">                                                            <span class="text"><a href="http://order.imooc.com/myorder" target="_blank">我的订单中心</a></span>                                                        </div>                                                        <a href="http://order.imooc.com/pay/cart" target="_blank" class="r moco-btn moco-btn-red go-cart">去购物车</a>                                                    </div>';
                                    $("#js-my-cart").html(v)
                                } else $("#js-my-cart").html($.cartStrHtml(c))
                            }
                        }
                    })
                }
            }
        })
    }
});