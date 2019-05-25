<%--
  Created by IntelliJ IDEA.
  User: pu
  Date: 2019-05-25
  Time: 21:57
  To change this template use File | Settings | File Templates.
--%>
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

    <title>忘记密码</title>

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
                <form action="<%=request.getContextPath() %>/forget" id ="login" method="post">
                    <h1>忘记密码</h1>
                    <div>
                        <input type="text" class="form-control" placeholder="手机号" name="phone" id="phone"/>
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
                        <input type="password" class="form-control" placeholder="密码" name="password"/>
                    </div>
                    <div>
                        <input type="password" class="form-control" placeholder="再次输入密码" name="rPassword"/>
                    </div>
                    <div>
                        <a class="btn btn-default submit" onclick="document:login.submit()">确定修改</a>
                    </div>
                </form>
            </section>
        </div>
    </div>
</div>
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
    $("#phone").blur(
        function () {
            $.post("<%=request.getContextPath() %>/user/isValidPhone",{
                phone : $(this).val()
            } , function (data) {
                if (data === 0) {
                    alert("无此用户");
                }
            })
        }
    );
</script>
<script>
    var wait = 120;
    function getCode(that) {
        var phoneNum = $('#phone').val();
        setButtonStatus(that);
        $.post("<%=request.getContextPath() %>/user/phoneCode", {
            phone : phoneNum
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
