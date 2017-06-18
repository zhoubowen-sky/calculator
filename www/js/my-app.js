var myApp = new Framework7({

    animateNavBackIcon: true,

    precompileTemplates: true,

    template7Pages: true,
    modalTitle: '灵动计算器',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
});

var $$ = Dom7;

var mainView = myApp.addView('.view-main'); // 初始化视图

console.log("my-app.js 程序运行中...");

var isWeb = true; // 是否是浏览器调试环境

var isHomePage = true; // 当前是否是Home页面

var isIndexPage = true;

var isConfirmWindowShow = false; // 是否展示退出APP的确认框（Android）

// 闭包，首页模块
var Home = function() {


    isHomePage = true;

    $$(document).on('click', '.home_menu', function() {
        console.log("点击了屏幕左上角的菜单按钮");
        // alert("点击了菜单按钮");
        // myApp.alert("点击了菜单按钮000");
        showToast("Home执行了");
    });

    // 设置键盘的高度，让其铺满屏幕且不可滑动




    // 基本加减乘除的业务逻辑


    // 处理返回键
    // androidBackButton();


}();

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
        /**
         * TODO 这里弹出toast提示 连续双击退出APP
         */

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

document.addEventListener("deviceready", onDeviceReady, false);

function showToast(txt) {
    window.plugins.toast.showWithOptions({
        message: txt,
        duration: 'short',
        position: 'bottom',
        addPixelsY: isAndroid ? -120 : -60,
        styling: {
            opacity: 0.8,
            backgroundColor: '#757575',
            textColor: '#FFFFFF',
            textSize: 16,
            cornerRadius: isAndroid ? 50 : 20, // minimum is 0 (square). iOS default 20, Android default 100
            verticalPadding: isAndroid ? 16 : 12 // iOS default 12, Android default 30
        }
    });
}