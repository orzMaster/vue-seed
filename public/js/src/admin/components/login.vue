<style>



</style>

<template>

<form class="lc-block toggled" id="l-login" method="post" action="#">
    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
        <div class="fg-line">
            <input type="text" name="username" class="form-control" placeholder="邮件地址/用户名称/手机号码">
        </div>
    </div>

    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-male"></i></span>
        <div class="fg-line">
            <input type="password" name="password" class="form-control" placeholder="用户密码">
        </div>
    </div>

    <div class="clearfix"></div>

    <div class="checkbox">
        <label>
            <input type="checkbox" value="">
            <i class="input-helper"></i> 记住我的账号
        </label>
    </div>

    <a href="/login" class="btn btn-login btn-danger btn-float" alt="登陆"><i class="zmdi zmdi-arrow-forward"></i></a>

    <ul class="login-navigation">
        <li data-block="#l-register" class="bgm-red">注册新用户</li>
        <li data-block="#l-forget-password" class="bgm-orange">忘记密码?</li>
    </ul>
</form>

<!-- Register -->
<form class="lc-block" id="l-register" method="post" action="#">
    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
        <div class="fg-line">
            <input type="text" class="form-control" placeholder="用户名称">
        </div>
    </div>

    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
        <div class="fg-line">
            <input type="text" class="form-control" placeholder="电子邮箱">
        </div>
    </div>

    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-phone"></i></span>
        <div class="fg-line">
            <input type="text" class="form-control" placeholder="手机号码">
        </div>
    </div>

    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-male"></i></span>
        <div class="fg-line">
            <input type="password" class="form-control" placeholder="用户密码">
        </div>
    </div>

    <div class="clearfix"></div>

    <div class="checkbox">
        <label>
            <input type="checkbox" value="">
            <i class="input-helper"></i> 接受许可协议
        </label>
    </div>

    <a href="/login" class="btn btn-login btn-danger btn-float" alt="注册新用户"><i class="zmdi zmdi-arrow-forward"></i></a>

    <ul class="login-navigation">
        <li data-block="#l-login" class="bgm-green">登陆</li>
        <li data-block="#l-forget-password" class="bgm-orange">忘记密码?</li>
    </ul>
</form>

<!-- Forgot Password -->
<form class="lc-block" id="l-forget-password" method="post" action="#">
    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur commodo lorem fringilla enim feugiat commodo sed ac lacus.</p>

    <div class="input-group m-b-20">
        <span class="input-group-addon"><i class="zmdi zmdi-email"></i></span>
        <div class="fg-line">
            <input type="text" class="form-control" placeholder="电子邮箱">
        </div>
    </div>

    <a href="/login" class="btn btn-login btn-danger btn-float" alt="找回密码"><i class="zmdi zmdi-arrow-forward"></i></a>

    <ul class="login-navigation">
        <li data-block="#l-login" class="bgm-green">登陆</li>
        <li data-block="#l-register" class="bgm-red">注册新用户</li>
    </ul>
</form>

</template>

<script>

module.exports = {
    data: function() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        $('body').toggleClass('login-content');
    }
}

</script>
