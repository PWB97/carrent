<%--
  Created by IntelliJ IDEA.
  User: PWB
  Date: 2019/4/21
  Time: 21:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
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

    <title><c:if test="${userDetail.userType.utypename == '管理员'}">后台管理</c:if>
        <c:if test="${userDetail.userType.utypename == '用户'}">汽车租赁</c:if></title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- bootstrap-daterangepicker -->
    <link href="../../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- Custom Theme Style -->
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

                <br/>

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
                            <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown"
                               aria-expanded="false">
                                <img src="<c:if test="${userDetail.icon == 'true'}">../../images/user/${currentUser.userid}.JPG</c:if><c:if test="${userDetail.icon != 'true'}">../../images/user/user.JPG</c:if>">${currentUser.username}
                                <span class=" fa fa-angle-down"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-usermenu pull-right">
                                <li><a href="<%=request.getContextPath() %>/userDetail">个人信息</a></li>
                                <li><a href="<%=request.getContextPath() %>/user/logout"><i
                                        class="fa fa-sign-out pull-right"></i>注销</a></li>
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

                <div class="clearfix"></div>

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>个人信息
                                </h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div class="col-md-3 col-sm-3 col-xs-12 profile_left">
                                    <div class="profile_img">
                                        <div id="crop-avatar">
                                            <!-- Current avatar -->
                                            <img class="img-responsive avatar-view" src="<c:choose><c:when test="${userDetail.icon == 'true'}">/../../images/user/${currentUser.userid}.JPG</c:when>
                                                                                                   <c:otherwise>/../../images/user/user.JPG</c:otherwise></c:choose>"
                                                 alt="Avatar" title="修改用户头像" onclick="imgClick(this)">
                                        </div>
                                        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title">修改头像</h4>
                                                    </div>
                                                    <form action="<%=request.getContextPath() %>/uploadUserImg" method="post" enctype="multipart/form-data">
                                                    <div class="modal-body">
                                                        <input type="file" name="file">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                                        <button type="submit" class="btn btn-primary">保存</button>
                                                    </div>
                                                    </form>
                                                </div><!-- /.modal-content -->
                                            </div><!-- /.modal -->
                                        </div>
                                    </div>
                                    <h3>${userDetail.username}</h3>

                                    <ul class="list-unstyled user_data">
                                        <li><i class="fa fa-user user-profile-icon"></i> ${userDetail.userType.utypename}
                                        </li>

                                        <li>
                                            <i class="fa fa-envelope user-profile-icon"></i> ${userDetail.email}
                                        </li>

                                        <li class="m-top-xs">
                                            <i class="fa fa-phone user-profile-icon"></i> ${userDetail.phone}
                                        </li>
                                    </ul>

                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">修改个人信息</button>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel">填写你需要修改的任意项</h4>
                                                </div>
                                                <form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left" action="<%=request.getContextPath() %>/changeUser" method="post">
                                                <div class="clearfix"></div>
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                                        <div class="x_panel">
                                                            <div class="x_content">
                                                                <br />
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="userName">用户名</label>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                            <input type="text" id="userName" name="userName" class="form-control col-md-7 col-xs-12" placeholder="${userDetail.username}">
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email" >邮箱</label>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                            <input type="text" id="email" name="email" class="form-control col-md-7 col-xs-12" placeholder="${userDetail.email}">
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="phone" class="control-label col-md-3 col-sm-3 col-xs-12">电话</label>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                            <input id="phone" class="form-control col-md-7 col-xs-12" type="text" name="phone" placeholder="${userDetail.phone}">
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12">密码</label>
                                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                                            <input id="password" name="passoword" class="date-picker form-control col-md-7 col-xs-12" type="text">
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                                    <button type="submit" class="btn btn-primary">提交</button>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="btn btn-danger" href="<%=request.getContextPath() %>/deleteBrowseRecords">删除浏览记录</a>
                                    <br/>

                                </div>
                                <div class="col-md-9 col-sm-9 col-xs-12">

                                    <div class="" role="tabpanel" data-example-id="togglable-tabs">
                                        <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                                            <li role="presentation" class="active"><a href="#tab_content1" id="home-tab"
                                                                                      role="tab" data-toggle="tab"
                                                                                      aria-expanded="true">浏览历史</a>
                                            </li>
                                            <li role="presentation" class=""><a href="#tab_content3" role="tab"
                                                                                id="profile-tab2" data-toggle="tab"
                                                                                aria-expanded="false">介绍</a>
                                            </li>
                                        </ul>
                                        <div id="myTabContent" class="tab-content">
                                            <div role="tabpanel" class="tab-pane fade active in" id="tab_content1"
                                                 aria-labelledby="home-tab">

                                                <!-- start recent activity -->
                                                <ul class="messages">
                                                    <c:forEach items="${userBrowse}" var="item">
                                                        <li>
                                                            <img src="../../images/logo/${item.carRecord.brandid}.JPG" class="avatar" alt="Avatar">
                                                            <div class="message_date">
                                                                <h3 class="date text-info"><fmt:formatDate value="${item.browseDate}" pattern="MM月dd" /></h3>
                                                                <p class="month"><fmt:formatDate value="${item.browseDate}" pattern="HH:mm" /></p>
                                                            </div>
                                                            <div class="message_wrapper">
                                                                <h4 class="heading">${item.carRecord.carname}</h4>
                                                                <p>品牌名： ${item.carRecord.carBrand.brandname}</p>
                                                                <p>类型： ${item.carRecord.carType.ctypename}</p>
                                                                <p>地点： ${item.carRecord.location.city.province.pname} ${item.carRecord.location.city.cname} ${item.carRecord.location.lname}</p>
                                                                <p class="url">
                                                                    <span class="fs1 text-info" aria-hidden="true" data-icon=""></span>
                                                                    <a href="<%=request.getContextPath() %>/carDetail?carId=${item.carRecord.carid}"><i class="fa fa-paperclip"></i> 查看详情 </a>
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </c:forEach>
                                                </ul>
                                                <!-- end recent activity -->

                                            </div>
                                            <div role="tabpanel" class="tab-pane fade" id="tab_content3"
                                                 aria-labelledby="profile-tab">
                                                <div class="item form-group">
                                                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="textarea">修改简介 <span class="required">*</span>
                                                    </label>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <textarea id="textarea" required="required" name="textarea" class="form-control col-md-7 col-xs-12" placeholder="${userDetail.info}"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
<script>
    function imgClick() {
        $('#userModal').modal('toggle');
    }
</script>


<!-- jQuery -->
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../../vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- FastClick -->
<script src="../../vendors/fastclick/lib/fastclick.js"></script>
<!-- NProgress -->
<script src="../../vendors/nprogress/nprogress.js"></script>
<!-- morris.js -->
<script src="../../vendors/raphael/raphael.min.js"></script>
<script src="../../vendors/morris.js/morris.min.js"></script>
<!-- bootstrap-progressbar -->
<script src="../../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js"></script>
<!-- bootstrap-daterangepicker -->
<script src="../../vendors/moment/min/moment.min.js"></script>
<script src="../../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>

<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.min.js"></script>

</body>
</html>