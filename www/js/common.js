// 这里是公共部分
var Common = function() {

    // 弹出 toast 的方法
    function showToast(msg) {
        window.plugins.toast.showShortBottom(msg, function(success) {
            console.log("show toast suucess:" + success);
        }, function(error) {
            console.log("show toast error:" + error);
            myApp.alert("show toast error:" + error);
        });
    }





    return {
        showToast: showToast
    }
}();

module.exports = Common;