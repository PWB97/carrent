<%--
  Created by IntelliJ IDEA.
  User: pu
  Date: 2019-05-04
  Time: 21:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        <c:if test="${userDetail.userType.utypename == '管理员'}">后台管理</c:if>
        <c:if test="${userDetail.userType.utypename == '用户'}">汽车租赁</c:if>
    </title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">

    <!-- Custom styling plus plugins -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">
</head>

<body class="nav-md">
<div class="container body">
    <div class="main_container">
        <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
                <div class="navbar nav_title" style="border: 0;">
                    <a class="site_title">
                        <span>
                            <c:if test="${userDetail.userType.utypename == '管理员'}">后台管理</c:if>
                            <c:if test="${userDetail.userType.utypename == '用户'}">汽车租赁</c:if>
                        </span>
                    </a>
                </div>

                <div class="clearfix"></div>

                <!-- menu profile quick info -->
                <div class="profile clearfix">
                    <div class="profile_pic">
                        <img src="<c:choose><c:when test="${userDetail.icon == 'true'}">/../../images/user/${currentUser.userid}.JPG</c:when>
                                  <c:otherwise>/../../images/user/user.JPG</c:otherwise></c:choose>" alt="..." class="img-circle profile_img">
                    </div>
                    <div class="profile_info">
                        <span>欢迎,</span>
                        <h2>${currentUser.username}</h2>
                    </div>
                </div>
                <!-- /menu profile quick info -->

                <br />

                <!-- sidebar menu -->
                <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                    <div class="menu_section">
                        <h3>General</h3>
                        <ul class="nav side-menu">
                            <c:if test="${userDetail.userType.utypename == '管理员'}">
                                <li><a><i class="fa fa-car"></i> 汽车管理 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/backManage/showCars">所有汽车</a></li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/carsNotOnline">汽车上线审核</a>
                                        </li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/showCarConditions">添加条件</a>
                                        </li>
                                        <li><a href="<%=request.getContextPath() %>/uploadCar">添加汽车</a></li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-newspaper-o"></i> 新闻管理 <span
                                        class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/News">所有新闻</a></li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/addNews">添加新闻</a></li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-user"></i> 用户管理 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/backManage/showUsers">所有用户</a></li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/addManager">添加管理员</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-dollar"></i> 订单管理 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li>
                                            <a href="<%=request.getContextPath() %>/backManage/showOrdersNotPaid">未支付订单</a>
                                        </li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/showRefund">退款订单</a></li>
                                        <li><a href="<%=request.getContextPath() %>/showOrderDetail">订单详情</a></li>
                                    </ul>
                                </li>
                            </c:if>
                            <c:if test="${userDetail.userType.utypename == '用户'}">
                                <li><a><i class="fa fa-car"></i> 汽车服务 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/rentCar">租车</a></li>
                                        <li><a href="<%=request.getContextPath() %>/uploadCar">提交出租信息</a></li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-dollar"></i> 我的订单 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/orders">所有订单</a></li>
                                        <li><a href="<%=request.getContextPath() %>/showOrderDetail">订单详情</a></li>
                                        <li><a href="<%=request.getContextPath() %>/showMyRefunds">退款中</a></li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-newspaper-o"></i> 新闻 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/News">新闻资讯</a></li>
                                    </ul>
                                </li>
                                <li><a><i class="fa fa-user"></i> 我的 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/showMyUploadCars">我的出租</a></li>
                                        <li><a href="<%=request.getContextPath() %>/userDetail">其他信息</a></li>
                                    </ul>
                                </li>
                            </c:if>
                        </ul>
                    </div>
                </div>
                <!-- /sidebar menu -->


            </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
            <div class="nav_menu">
                <nav>
                    <div class="nav toggle">
                        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                    </div>

                    <ul class="nav navbar-nav navbar-right">
                        <li class="">
                            <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <img src="<c:choose><c:when test="${userDetail.icon == 'true'}">/../../images/user/${currentUser.userid}.JPG</c:when>
                                  <c:otherwise>/../../images/user/user.JPG</c:otherwise></c:choose>g" alt="">${currentUser.username}
                                <span class=" fa fa-angle-down"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-usermenu pull-right">
                                <li><a href="<%=request.getContextPath() %>/userDetail">个人信息</a></li>
                                <li><a href="<%=request.getContextPath() %>/user/logout"><i class="fa fa-sign-out pull-right"></i>注销</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
            <div class="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>订单详细</h2>
                                <ul class="nav navbar-right panel_toolbox">
                                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Settings 1</a>
                                            </li>
                                            <li><a href="#">Settings 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">

                                <section class="content invoice">
                                    <!-- title row -->
                                    <div class="row">
                                        <div class="col-xs-12 invoice-header">
                                            <h1>
                                                <i class="fa fa-user"></i> ${orderDetail.user.username}
                                                <small class="pull-right">到期时间: ${orderDetail.endtime}</small>
                                            </h1>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- info row -->
                                    <div class="row invoice-info">
                                        <div class="col-sm-4 invoice-col">
                                            提车地址
                                            <address>
                                                <strong>${orderDetail.car.location.lname}</strong>
                                                <br>${orderDetail.car.location.city.province.pname} ${orderDetail.car.location.city.cname}
                                                <br>手机: ${orderDetail.user.phone}
                                                <br>邮箱: ${orderDetail.user.email}
                                            </address>
                                        </div>
                                    </div>
                                    <!-- /.row -->

                                    <!-- Table row -->
                                    <div class="row">
                                        <div class="col-xs-12 table">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>汽车品牌</th>
                                                    <th>汽车名称</th>
                                                    <th>车牌</th>
                                                    <th>类型</th>
                                                    <th>单价</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><img src="../../images/logo/${orderDetail.car.brandid}.JPG"></td>
                                                    <td style="vertical-align: middle">${orderDetail.car.carname}</td>
                                                    <td style="vertical-align: middle">${orderDetail.car.plate}</td>
                                                    <td style="vertical-align: middle">${orderDetail.car.carType.ctypename}</td>
                                                    <td style="vertical-align: middle">¥${orderDetail.car.price}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- /.row -->

                                    <div class="row">
                                        <!-- accepted payments column -->
                                        <div class="col-xs-6">
                                            <p class="lead">支付方式:</p>
                                            <img src="../../images/visa.png" alt="Visa">
                                            <img src="../../images/mastercard.png" alt="Mastercard">
                                            <img src="../../images/american-express.png" alt="American Express">
                                            <img src="../../images/paypal.png" alt="Paypal">
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-xs-6">
                                            <p class="lead">下单时间${orderDetail.creattime}</p>
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <tbody>
                                                    <tr>
                                                        <th style="width:50%">总计:</th>
                                                        <td>¥${orderDetail.totalprice}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>天数</th>
                                                        <td>${orderDetail.car.isdeleted}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- /.row -->
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
            <div class="pull-right">
                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
            </div>
            <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
    </div>
</div>

<!-- jQuery -->
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="../../vendors/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="../../vendors/nprogress/nprogress.js"></script>

<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.min.js"></script>
</body>
</html>