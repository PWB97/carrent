<%--
  Created by IntelliJ IDEA.
  User: pu
  Date: 2019-05-04
  Time: 21:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
                        <img src="<c:if test="${userDetail.icon == 'true'}">../../images/user/${currentUser.userid}.JPG</c:if><c:if test="${userDetail.icon != 'true'}">../../images/user/user.JPG</c:if>" class="img-circle profile_img">
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
                        <h3>功能</h3>
                        <ul class="nav side-menu">
                            <c:if test="${userDetail.userType.utypename == '管理员'}">
                                <li><a><i class="fa fa-car"></i> 汽车管理 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/rentCar">所有汽车</a></li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/carsNotOnline">汽车上线审核</a>
                                        </li>
                                        <li><a href="<%=request.getContextPath() %>/findCarOnRent">在租汽车</a></li>
                                        <li><a href="<%=request.getContextPath() %>/backManage/showCarConditions">添加条件</a>
                                        </li>
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
                                <li><a><i class="fa fa-bar-chart-o"></i> 数据展示 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/findTopCarData">汽车数据</a></li>
                                        <li><a href="<%=request.getContextPath() %>/findTopCityData">城市数据</a></li>
                                    </ul>
                                </li>
                            </c:if>
                            <c:if test="${userDetail.userType.utypename == '用户'}">
                                <li><a><i class="fa fa-car"></i> 汽车服务 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/rentCar">租车</a></li>
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
                                <img src="<c:if test="${userDetail.icon == 'true'}">../../images/user/${currentUser.userid}.JPG</c:if><c:if test="${userDetail.icon != 'true'}">../../images/user/user.JPG</c:if>" >${currentUser.username}
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
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <div class="col-xs-6">
                                            <img src="../../images/car/${orderDetail.carDetail.car.carid}.JPG" width="180" height="105">
                                        </div>
                                        <div class="col-xs-6">
                                            <h3>${orderDetail.carDetail.car.carname}</h3>
                                            <h4>${orderDetail.carDetail.level}</h4>
                                            <a class="btn btn-primary btn-sm" href="<%=request.getContextPath() %>/carDetail?carId=${orderDetail.carDetail.car.carid}&cdId=${orderDetail.carDetail.cdid}">查看配置信息</a>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="col-xs-6">
                                            <h3><i class="fa fa-arrow-circle-up"></i>取车</h3>
                                            <h4><i class="fa fa-clock-o"></i><fmt:formatDate value="${orderDetail.creattime}" pattern="yyyy-MM-dd" /></h4>
                                        </div>
                                        <div class="col-xs-6">
                                            <h3><i class="fa fa-arrow-circle-down"></i>还车</h3>
                                            <h4><i class="fa fa-clock-o"></i><fmt:formatDate value="${orderDetail.endtime}" pattern="yyyy-MM-dd" /></h4>
                                        </div>
                                        <div class="col-xs-12">
                                            <h4><i class="fa fa-location-arrow"></i>门店地址：${orderDetail.carDetail.car.location.city.province.pname} ${orderDetail.carDetail.car.location.city.cname} ${orderDetail.carDetail.car.location.lname}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="ln_solid"></div>
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h3>费用明细</h3>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <th style="width:50%">总计:</th>
                                                    <td>¥${orderDetail.totalprice}</td>
                                                </tr>
                                                <tr>
                                                    <th>天数</th>
                                                    <td>${orderDetail.carDetail.isdeleted}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-xs-6">
                                        <h3>订单状态</h3>
                                        <c:if test="${orderDetail.ispaid==0}">
                                            <p class="lead">支付方式:</p>
                                            <a class="btn btn-primary" href="<%=request.getContextPath() %>/alipay?orderId=${orderDetail.orderid}&price=${orderDetail.totalprice}">支付宝</a>
                                        </c:if>
                                        <c:if test="${orderDetail.ispaid==1}">
                                            <p class="lead">已支付</p>
                                        </c:if>
                                        <c:if test="${orderDetail.ispaid==2}">
                                            <p class="lead">退款成功</p>
                                        </c:if>
                                        <c:if test="${orderDetail.ispaid==-1}">
                                            <p class="lead">正在退款</p>
                                        </c:if>
                                        <c:if test="${orderDetail.carDetail.accidentType == 1}">
                                            <p class="lead">已报险 时间：<fmt:formatDate value="${orderDetail.carDetail.accidentTime}" pattern="yyyy-MM-dd HH:mm" /></p>
                                            <p class="lead">地点：${orderDetail.carDetail.aLocation}
                                            <p class="lead">
                                                <c:if test="${orderDetail.carDetail.isDamage == 1}">
                                                    车辆损坏
                                                </c:if>
                                                <c:if test="${orderDetail.carDetail.isScrap == 1}">
                                                    车辆报废
                                                </c:if>
                                                <c:if test="${orderDetail.carDetail.thirdParty == 1}">
                                                    第三者责任
                                                </c:if>
                                                <c:if test="${orderDetail.carDetail.injury == 1}">
                                                    驾驶员人身伤亡
                                                </c:if>
                                                <c:if test="${order.carDetail.robbing == 1}">
                                                    全车盗抢
                                                </c:if>
                                            </p>
                                        </c:if>
                                    </div>
                                </div>
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
                基于J2EE的汽车租赁 PWB
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