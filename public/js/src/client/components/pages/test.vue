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
    filter: alpha(Opacity=80);
    -moz-opacity: 0.8;
    opacity: 0.8;
}

</style>

<template>

<div class="test">
    <div class="login">
        <form class="bs-example bs-example-form" role="form">
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-account zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="联系人" v-model="contact" @change="doChangeName">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-smartphone-iphone zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="手机号" v-model="phone" @change="doChangePhone">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-key zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="请输入验证码" v-model="code" @change="doChangeCode">
                <span class="input-group-addon"><button type="button" class="btn btn-success btn-xs" @click="doVerify">获取验证码</button></span>
            </div>
            <br>
            <br>
            <button type="button" class="btn btn-success btn-lg btn-block" @click="doSubmit">提交</button>
        </form>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            contact: '',
            phone: '',
            code: '',
            verify: ''
        }
    },
    methods: {
        doChangeName: function(e) {
            console.log(e)
        },
        doChangePhone: function(e) {
            var phone = e.target.value
            if (phone.length != 11) {
                swal({
                    title: "提示!",
                    text: "请确认手机号码.",
                    type: "success",
                    confirmButtonText: "确认",
                    closeOnConfirm: true
                }, function() {
                    e.target.value = "";
                });
            }
        },
        doChangeCode: function(e) {
            console.log(e)
        },
        doVerify: function(e) {
            this.$http.post('api/verify/code', function(data, status, request) {
                this.$set('verify', data)
                swal({
                    title: "提示!",
                    text: "请确认手机收到的验证码.",
                    type: "success",
                    confirmButtonText: "确认",
                    closeOnConfirm: true
                }, function() {

                });
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
            }).error(function(data, status, request) {

            })
        },
        doSubmit: function() {

        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
