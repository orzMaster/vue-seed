$(document).ready(function($) {
    var count = 60;
    var resend = setInterval(function() {
        count--;
        if (count > 0) {
            e.target.innerHTML = count + "秒后可重新获取"
            e.target.disabled = true
            e.target.style.cursor = "not-allowed"
        } else {
            clearInterval(resend);
            e.target.innerHTML = "获取验证码"
            e.target.disabled = false
            e.target.style.cursor = ""
        }
    }, 1000);
})
