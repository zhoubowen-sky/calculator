var Common = require('./common.js'); //引入 common 里面的公共方法

var Language = require('./language.js').Language_ZH; // 引入中文语言配置文件

global.myApp = new Framework7({

    animateNavBackIcon: true,

    precompileTemplates: true,

    template7Pages: true,
    // 灵动计算器
    modalTitle: Language.appName,
    // 确定
    modalButtonOk: Language.btnOK,
    // 取消
    modalButtonCancel: Language.btnCancle,
});

// commonjs 全局变量
global.$$ = Dom7;

global.mainView = myApp.addView('.view-main'); // 初始化视图

console.log("my-app.js 程序运行中...");

global.isWeb = true; // 是否是浏览器调试环境

global.isHomePage = true; // 当前是否是Home页面

global.isIndexPage = true;

global.isConfirmWindowShow = false; // 是否展示退出APP的确认框（Android）

// 闭包，首页模块
var Home = function() {

    isHomePage = true;

    isIndexPage = true;

    $$(document).on('click', '.home_menu', function() {
        console.log("点击了屏幕左上角的菜单按钮");
        Common.showToast("Home执行了");
    });

    // 设置键盘的高度，让其铺满屏幕且不可滑动




    // 基本加减乘除的业务逻辑
    console.log(0.1 + 0.2);





    /**
     * android 首页点击back退出APP
     * isHomePage 作为判断当前页面是否是首页的标志
     * 当 isHomePage 为 true 时点击 Android back 键才弹出退出提示框
     * 当 isHomePage 为 false 且history > x 执行 路由 back()方法
     */
    function androidBackButton() {
        var app = new Framework7();
        var currentView = myApp.getCurrentView();
        console.log("当前页面历史个数：" + currentView.history.length);
        if (!isIndexPage) {
            if (isHomePage) {
                // 当前页面是首页
                if (isConfirmWindowShow) {
                    // 确认是否退出的弹窗已经打开
                    myApp.closeModal();
                    isConfirmWindowShow = false;
                } else {
                    // 打开是否退出的弹窗
                    isConfirmWindowShow = true;
                    myApp.confirm("确认退出程序？", function() {
                        isConfirmWindowShow = false;
                        navigator.app.exitApp();
                    }, function() {
                        isConfirmWindowShow = false;
                    });
                }
            } else {
                // 当前页面不是首页 返回上一页
                currentView.router.back();
            }
        } else {
            // 这里弹出toast提示 连续双击退出APP
            Common.showToast(Language.doubleClickToExit);
            document.removeEventListener("backbutton", androidBackButton, false); // 注销返回键事件
            // 3秒后重新注册
            var intervalID = window.setInterval(function() {
                window.clearInterval(intervalID);
                document.addEventListener("backbutton", androidBackButton, false);
            }, 1000);
        }
    }

    function onDeviceReady() {
        // 返回键按钮事件 Android
        document.addEventListener("backbutton", androidBackButton, false);
    }

    return {
        onDeviceReady: onDeviceReady
    }
}();


document.addEventListener("deviceready", Home.onDeviceReady, false);