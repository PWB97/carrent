<%--
  Created by IntelliJ IDEA.
  User: PWB
  Date: 2019/4/16
  Time: 15:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>登陆</title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="../../vendors/animate.css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">
</head>

<body class="login">
<div>
    <a class="hiddenanchor" id="signup"></a>
    <a class="hiddenanchor" id="signin"></a>

    <div class="login_wrapper">
        <div class="animate form login_form">
            <section class="login_content">
                <form action="<%=request.getContextPath() %>/user/login" id ="login" method="post">
                    <h1>登陆</h1>
                    <div>
                        <input type="text" class="form-control" placeholder="用户名" name="userName"/>
                    </div>
                    <div>
                        <input type="password" class="form-control" placeholder="密码" name="password"/>
                    </div>
                    <div>
                        <a class="btn btn-default submit" onclick="document:login.submit()">登陆</a>
                        <a class="reset_pass" href="<%=request.getContextPath() %>/forget">忘记密码?</a>
                    </div>

                    <div class="clearfix"></div>

                    <div class="separator">
                        <p class="change_link">新来的?
                            <a href="#signup" class="to_register">注册</a>
                        </p>

                        <div class="clearfix"></div>
                        <br />

                    </div>
                </form>
            </section>
        </div>

        <div id="register" class="animate form registration_form">
            <section class="login_content">
                <form action="<%=request.getContextPath() %>/user/register" method="post" id = "registerForm">
                    <h1>注册</h1>
                    <div>
                        <input type="text" class="form-control" placeholder="用户名" id="userName" name="userName" required="required" />
                    </div>
                    <div>
                        <input type="text" class="form-control" placeholder="手机号" id="phone" name="phone" required="required" />
                    </div>
                    <div>
                        <div class="col-xs-6" style="padding-left:0">
                            <input type="text" class="form-control" placeholder="验证码" id="code" name="code" />
                        </div>
                        <div class="col-xs-6">
                            <button type="button" class="btn btn-primary btn-sm" onclick="getCode(this)">获取验证码</button>
                        </div>
                    </div>
                    <div>
                        <input type="password" class="form-control" placeholder="密码" id="password" name="password" required="required" />
                    </div>
                    <div>
                        <a class="btn btn-default submit" onclick="document:registerForm.submit()">提交</a>
                    </div>

                    <div class="clearfix"></div>

                    <div class="separator">
                        <p class="change_link">已经注册?
                            <a href="#signin" class="to_register">登陆</a>
                        </p>

                        <div class="clearfix"></div>
                        <br />
                    </div>
                </form>
            </section>
        </div>
    </div>
</div>
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
    $("#userName").blur(
        function () {
            $.post("<%=request.getContextPath() %>/user/isValidName",{
                userName : $(this).val()
            } , function (data) {
                if (data > 0) {
                    alert("用户名重复");
                }
            })
        }
    );
</script>
<script>
    var wait = 120;
    function getCode(that) {
        var phoneNum = $('#phone').val();
        $.post("<%=request.getContextPath() %>/user/phoneCode", {
            phone : phoneNum
        }, function(responseData,status){
            if(status=="success"){
                if(responseData=="fail") {
                    alert("手机号格式错误！");
                } else {setButtonStatus(that);}
            }
        });

    }
    function setButtonStatus(that) {
        if (wait == 0) {
            that.removeAttribute("disabled");
            that.innerHTML="免费获取验证码";
            wait = 60;
        } else {
            that.setAttribute("disabled", true);
            that.innerHTML=wait+"秒后可以重新发送";
            wait--;
            setTimeout(function() {
                setButtonStatus(that)
            }, 1000)
        }
    }
</script>
</body>
</html>
