<style>

.test {
    text-align: center;
    background: url("/static/images/client/test.png") no-repeat center fixed;
    width: 100%;
    height: 800px;
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    padding-top: 200px;
}

.test .login {
    margin: auto;
    padding: 100px 50px 50px 50px;
    width: 500px;
    height: 400px;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
    background-color: #FFFFFF;
    filter: alpha(Opacity=100);
    -moz-opacity: 1;
    opacity: 1;
}

</style>

<template>

<div class="test">
    <div class="login">
        <form class="bs-example bs-example-form" role="form">
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-account zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="联系人">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-smartphone-iphone zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="手机号">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-key zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="请输入验证码">
                <span class="input-group-addon"><button type="button" class="btn btn-success btn-xs">获取验证码</button></span>
            </div>
            <br>

            <button type="sumbit" class="btn btn-success btn-lg btn-block">提交</button>
        </form>
    </div>
</div>

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

    }
}

</script>
