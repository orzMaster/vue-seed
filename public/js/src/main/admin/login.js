$(document).ready(function() {
    // 焦点
    if ($('#l-login').hasClass('toggled'))
        $('#username').focus();
    if ($('#l-register').hasClass('toggled'))
        $('#username').focus();
    if ($('#l-forget-password').hasClass('toggled'))
        $('#email').focus();
    // 登陆
    $('#l-login .btn').click(function() {
        var options = {
            url: 'login',
            type: 'POST',
            target: '#l-login',
            success: function() {
                alert("ajax请求成功");
            }
        };
        $('#l-login').ajaxForm(options);
    });
    // 注册
    $("#l-register .btn").click(function() {
        var username = $('#l-register #username').val()
        var email = $('#l-register #email').val()
        var phone = $('#l-register #phone').val()
        var password = $('#l-register #password').val()

        $.ajax({
            type: 'POST',
            url: 'register',
            data: {
                username: username,
                email: email,
                phone: phone,
                password: password
            },
            success: function() {
                location.href = '/'
            },
            error: function() {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
    });
    // 找回密码
    $("#l-forget-password .btn").click(function() {
        alert("forget-password")
    });
    // 绑定回车事件
    $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            if ($('#l-login').hasClass('toggled'))
                if ($('#username').is(':focus'))
                    $('#password').focus();
            if ($('#password').is(':focus'))
                $('.login').trigger('click');
            if ($('#l-register').hasClass('toggled'))
                if ($('#username').is(':focus'))
                    $('#email').focus();
            if ($('#email').is(':focus'))
                $('#phone').focus();
            if ($('#phone').is(':focus'))
                $('#password').focus();
            if ($('#password').is(':focus'))
                $('.register').trigger('click');
            if ($('#l-forget-password').hasClass('toggled'))
                $('.forget-password').trigger('click');
        }
    });
});
