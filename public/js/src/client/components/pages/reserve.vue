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
    padding: 50px 50px 50px 50px;
    width: 500px;
    height: 450px;
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
        <form class="bs-example bs-example-form" id="attributeForm" method="post" action="api/verify/reserve">
            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-account zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="联系人" name="contact" v-model="contact">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-smartphone-iphone zmdi-hc-fw"></i></span>
                <input type="text" class="form-control" placeholder="手机号" name="phone" v-model="phone">
            </div>
            <br>

            <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="zmdi zmdi-smartphone-iphone zmdi-hc-fw"></i></span>
                <input type="text" class="form-control form_datetime" placeholder="预约时间" v-model="datetime" readonly>
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
            datetime: moment().add(2, 'days').format('YYYY-MM-DD HH:00:00'),
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
            this.$http.post('api/verify/code', {
                phone: this.phone
            }, function(data, status, request) {
                if(data.error){
                  swal({
                      title: "提示!",
                      text: "获取短信验证码失败!",
                      type: "error",
                      confirmButtonText: "确认",
                      closeOnConfirm: true
                  }, function() {

                  });
                } else {
                this.$set('verify', data.code)
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
              }
            }).error(function(data, status, request) {

            })
        },
        doSubmit: function() {
            if (this.code == this.verify) {
                this.$http.post('api/verify/reserve', {
                    contact: this.contact,
                    phone: this.phone,
                    datetime: this.datetime
                }, function(data, status, request) {
                    if (data.code == 1) {
                        swal({
                            title: "提示!",
                            text: "预约成功!",
                            type: "success",
                            confirmButtonText: "确认",
                            closeOnConfirm: true
                        }, function() {

                        })
                    }
                    if (data.code == 2) {
                        swal({
                            title: "提示!",
                            text: "您已经预约过了!",
                            type: "warning",
                            confirmButtonText: "确认",
                            closeOnConfirm: true
                        }, function() {

                        })
                    }
                })
            } else {
                swal({
                    title: "提示!",
                    text: "验证码错误.",
                    type: "error",
                    confirmButtonText: "确认",
                    closeOnConfirm: true
                }, function() {

                });
            }
        }
    },
    components: {

    },
    ready: function() {
        $(".form_datetime").datetimepicker({
            format: 'yyyy-mm-dd hh:00:00',
            autoclose: true,
            todayHighlight: true,
            showMeridian: true,
            pickerPosition: "bottom-left",
            language: 'zh-CN', //中文，需要引用zh-CN.js包
            startView: 2, //月视图
            minView: 1 //日期时间选择器所能够提供的最精确的时间选择视图
        });
    }
}

</script>
