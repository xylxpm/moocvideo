define(function () {
    var a = function (a) {
        var c = '<div class="card-inner">                        <div class="card-top clearfix">                            <a href="/u/' + a.uid + '" class="l"><img src="' + a.img + '" alt="' + a.nickname + '"></a>                            <div class="card-top-right-box l">                                <a href="/u/' + a.uid + '"><span class="name text-ellipsis">' + a.nickname + '</span></a>                                <div class="meta">                                    <a href="/u/' + a.uid + '/experience">经验<b id="js-user-mp">' + (a.mp ? a.mp : 0) + '</b></a>                                    <a href="/u/' + a.uid + '/credit">积分<b id="js-user-credit">' + (a.credit ? a.credit : 0) + '</b></a>                                </div>                            </div>                        </div>                        <div class="user-center-box">                            <ul class="clearfix">                                <li class="l"><a href="/u/' + a.uid + '/courses" target="_blank"><span class="user-center-icon icon-tick"></span>我的课程</a></li>                                <li class="l">                                    <a href="http://order.imooc.com/myorder" target="_blank"><span class="user-center-icon icon-receipt"></span>订单中心</a>                                    <i id="js-usercard-coupon-icon"></i>                                </li>                                <li class="l"><a href="/mall/index" target="_blank"><span class="user-center-icon icon-score_shop"></span>积分商城</a></li>                                <li class="l"><a href="/user/setbindsns" target="_blank"><span class="user-center-icon icon-set"></span>个人设置</a></li>                            </ul>                        </div>';
        return c += '<div class="card-history"></div>', c += '<div class="card-sets clearfix"><a href="/passport/user/logout?referer=http://www.imooc.com"class="r">安全退出</a></div>                    </div>'
    }, c = function () {
        //isLogin && $.ajax({url: "http://www.imooc.com/u/card ", type: "get", dataType: "json"}).done(function (c) {
        //    0 == c.result && ($(".js-header-avator img").attr("src", c.data.img), $(".g-user-card").html(a(c.data)).show()), $.ajax({
        //        url: "http://order.imooc.com/service/index/lastlearn",
        //        dataType: "jsonp",
        //        jsonp: "jsonpcallback",
        //        success: function (a) {
        //            if (0 == a.result) {
        //                var c = a.data;
        //                if ($("#js-user-credit").html(c._other.userCredit), "undefined" != typeof c.course_name) {
        //                    var h = '<span class="history-item">                                                <span class="tit text-ellipsis">' + c.course_name + '</span>                                                <span class="media-name text-ellipsis">                                                    ' + c.last_chapter_media + c.media_name + '                                                </span>                                                <i class="icon-clock"></i>                                                <a href="' + c.url + '" class="continue" title="' + c.media_name + "&#10;" + c.last_chapter_media + c.media_name + '">继续</a>                                            </span>';
        //                    $(".card-history").html(h)
        //                }
        //                0 != c._other.my_coupon ? $("#js-usercard-coupon-icon").css("display", "block") : $("#js-usercard-coupon-icon").hide()
        //            }
        //        }
        //    })
        //})
    };
    c()
});