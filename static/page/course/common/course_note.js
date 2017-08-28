define(function (require) {
    require("common"), $.fn.setCursorPosition = function (a) {
        return 0 == this.lengh ? this : $(this).setSelection(a, a)
    }, $.fn.setSelection = function (a, c) {
        if (0 == this.lengh)return this;
        if (input = this[0], input.createTextRange) {
            var h = input.createTextRange();
            h.collapse(!0), h.moveEnd("character", c), h.moveStart("character", a), h.select()
        } else input.setSelectionRange && (input.focus(), input.setSelectionRange(a, c));
        return this
    }, $.fn.focusEnd = function () {
        this.setCursorPosition(this.val().length)
    };
    var a = function () {
        var a = $("#js-note-textarea-edit").val();
        if ($.trim(a)) {
            var c = a.replace(/\s*$/, "").length;
            c > 1e3 ? ($(this).addClass("ipt-fake-error"), $("#js-note-limit").addClass("limit-overflow")) : ($(this).removeClass("ipt-fake-error"), $("#js-note-limit").removeClass("limit-overflow")), $("#js-note-limit").text(c)
        } else $("#js-note-limit").text($.trim(a).length)
    };
    $(document).on("click", ".editnote", function (e) {
        window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause(), e.preventDefault(), $("#js-note-input-edit").remove(), $(".sava_btn").hide(), $(".mynote").show(), $(".editnote").show(), $(".delnote").show(), $(".editordel").hide();
        var c = $(this).closest(".js-find-txt"), h = c.find("textarea").val();
        $(this).hide().closest(".js-find-txt").find(".mynote").hide().after('<div class="space-note-input" id="js-note-input-edit">            <textarea placeholder="请输入笔记内容..." name="" class="js-placeholder" id="js-note-textarea-edit">' + h + '</textarea>            <p class="space-note-text-counter"><span id="js-note-limit">0</span>/1000</p>            </div>'), a(), c.find("textarea").focus().focusEnd(), c.find(".sava_btn").show()
    }), $("#js-note-input-fake").on("keyup", "#js-note-textarea", function () {
        a()
    }), $(document).on({
        focusin: function () {
            $(this).addClass("space-fake-focus")
        }, focusout: function () {
            $(this).removeClass("space-fake-focus")
        }, keyup: function () {
            a()
        }
    }, "#js-note-input-edit"), $(document).on("click", ".sava_btn", function (e) {
        e.preventDefault();
        var a = $(this);
        if (!a.hasClass("submit-loading")) {
            var c = a.closest(".js-find-txt"), h = c.attr("noteId"), v = c.attr("courseId"), w = c.find("#js-note-textarea-edit").val(), y = '<div class="contain-coverLayer"></div>';
            if (!$.trim(w))return void layer.msg("请输入内容", 2, -1);
            var g = w.replace(/\s*$/, "").length;
            if (g > 0 && 3 > g)return void layer.msg("输入不能小于3个字符", 2, -1);
            if (g > 1e3)return void layer.msg("输入不能超过1000个字", 2, -1);
            var P = '<div id="js-pop-del" class="pop-deleting"><div class="deleting-bd"></div><div class="deleting-btm">笔记保存成功</div></div>';
            a.addClass("submit-loading"), a.val("保存中..."), $.ajax({
                url: "/u/" + OP_CONFIG.userInfo.uid + "/note/" + h,
                type: "post",
                data: {course_id: v, content: w},
                dataType: "json",
                success: function (c) {
                    if (a.removeClass("submit-loading"), 0 == c.result) {
                        $("body").append(P).append(y), a.hide().closest(".js-find-txt").find("#js-note-input-edit").remove();
                        var h = $("<div>").text(w).html();
                        a.closest(".js-find-txt").find(".mynote pre").html(h).parent(".mynote").show(), a.closest(".js-find-txt").find(".editnote").show(), a.closest(".js-find-txt").find("textarea").val(w), setTimeout(function () {
                            $("#js-pop-del").remove(), $(".contain-coverLayer").remove()
                        }, 1e3), a.val("保存"), window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
                    } else {
                        var v = $(P);
                        v.find(".deleting-bd").addClass("pop-error").end().find(".deleting-btm").html("笔记保存失败"), $("body").append(v), setTimeout(function () {
                            $("#js-pop-del").remove(), $(".contain-coverLayer").remove()
                        }, 1e3), layer.msg("保存失败"), window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
                    }
                },
                error: function () {
                    a.removeClass("submit-loading"), a.html("保存")
                }
            })
        }
    }), $(document).on("click", ".delnote", function (e) {
        window.thePlayer && window.thePlayer.getState && "PAUSED" != window.thePlayer.getState() && "IDLE" != window.thePlayer.getState() && thePlayer.pause(), e.preventDefault();
        var a = $(this).closest(".js-find-txt"), c = $(this).closest(".js-find-txt").attr("noteId"), h = ($(this).parents(".js-find-txt").find(".report").attr("data"), 0);
        $.confirm("您确定删除这条笔记吗？", {
            info: "笔记删除将无法恢复", callback: function () {
                h || (h = 1, $.ajax({
                    url: "/u/" + OP_CONFIG.userInfo.uid + "/note/" + c,
                    type: "DELETE",
                    dataType: "json",
                    success: function (c) {
                        if (0 == c.result) {
                            a.remove(), $.prompt("删除成功", {icon: "success"});
                            var v, w;
                            v = $(".js-count-note .got-num"), v.length && (w = parseInt(v.text(), 10), w--, 0 >= w && (w = 0), v.text(w)), window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
                        } else $.prompt("删除失败去，请重试", {icon: "error"}), h = 0, window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
                    }
                }))
            }
        }), $(".popl-no").on("click", function () {
            $("#js-popl-wrap").remove(), $(".contain-coverLayer").remove(), window.thePlayer && window.thePlayer.getState && "PAUSED" == window.thePlayer.getState() && thePlayer.play()
        })
    })
});