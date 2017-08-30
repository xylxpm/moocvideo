seajs.config({
    // 别名配置
    alias: {
        'seajs-text' : '/moocvideo/static/sea-modules/seajs/seajs-text/1.0.3/seajs-text',
        'seajs-combo': '/moocvideo/static/sea-modules/seajs/seajs-combo/1.0.0/seajs-combo',
        'store'      : '/moocvideo/static/sea-modules/gallery/store/1.3.14/store',
        'underscore' : '/moocvideo/static/sea-modules/gallery/underscore/1.3.14/underscore',
        'moment'     : '/moocvideo/static/sea-modules/gallery/moment/2.3.1/moment',

        'jquery'     : '/moocvideo/static/lib/jquery/1.9.1/jquery',
        'util'       : '/moocvideo/static/lib/util/0.1.0/util',
        'jwplayer'   : '/moocvideo/static/lib/jwplayer/1.0.0/jwplayer',
        'doT'        : '/moocvideo/static/lib/dot/1.0.0/doT',
        'socket.io'  : '/moocvideo/static/lib/socket.io/1.3.5/socket.io.min',
        'ace'        : '/moocvideo/static/lib/ace/1.2.6/ace',

        'drag'       : '/moocvideo/static/component/base/drag/drag',
        'tab'        : '/moocvideo/static/component/base/tab/tab',
        'scroll_load': '/moocvideo/static/component/base/scroll_load/scroll_load',

        'common'     : '/moocvideo/static/component/logic/common/common',
        'login'      : '/moocvideo/static/component/logic/login/login',
        'login_sns'  : '/moocvideo/static/component/logic/login/login-regist',
        'chat'       : '/moocvideo/static/component/logic/chat/im',
        'player'     : '/moocvideo/static/component/logic/player/player',
        'ceditor'    : '/moocvideo/static/component/logic/ceditor/ceditor', //主提交编辑器
        'publish'    : '/moocvideo/static/component/logic/publish/publish',

        'show_data'  : '/moocvideo/static/page/course/common/show_data',
        'codeEditor' : '/moocvideo/static/page/course/common/code_editor',  //基本查看代码
        'Module-layer' : '/moocvideo/static/lib/layer/1.6.0/layer.min.js',
        'placeholder': '/moocvideo/static/component/base/placeholder/placeholder.js'
    },
    map: [

        [ /^(.*\.(?:css|js|tpl))(.*)$/i, '$1?'+seajsTimestamp ]
    ],

    // 路径配置
    paths: {
        'lib': '/moocvideo/static/lib',
        'util': '/moocvideo/static/component/base/util'
    },

    // 变量配置
    //vars: {
    //	'locale': 'zh-cn'
    //},

    // 映射配置
    //map: [
    //	['http://example.com/js/app/', 'http://localhost/js/app/']
    //],

    // 预加载项
    preload: ['jquery', 'common'],
    // preload: ['jquery', 'seajs-text','common'],
    //preload: ['jquery', 'seajs-text', 'seajs-combo'],

    // 调试模式
    debug: true,

    // Sea.js 的基础路径
    //base: 'http://example.com/path/to/base/',

    // 文件编码
    charset: 'utf-8'
});
