<%--
  Created by IntelliJ IDEA.
  User: PWB
  Date: 2019/4/21
  Time: 15:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"  pageEncoding="UTF-8"%>
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

    <title>汽车租赁</title>

    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="../../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
    <!-- Datatables -->
    <link href="../../vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">
</head>

<body class="nav-md">
<div class="container body">
    <div class="main_container">
        <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
                <div class="navbar nav_title" style="border: 0;">
                    <a class="site_title"><span>汽车租赁</span></a>
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
                <div class="clearfix"></div>

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>我的订单</h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <table id="datatable" class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>汽车名称</th>
                                        <th>价格</th>
                                        <th>生成时间</th>
                                        <th>还车时间</th>
                                        <th>操作</th>
                                        <th>状态</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <c:forEach var="order" items="${orders}" varStatus="s">
                                        <tr>
                                            <td>${order.carDetail.car.carname}</td>
                                            <td>${order.totalprice}</td>
                                            <td><fmt:formatDate value="${order.creattime}" pattern="yyyy-MM-dd" /></td>
                                            <td><fmt:formatDate value="${order.endtime}" pattern="yyyy-MM-dd" /></td>
                                            <td>
                                                <a type="button" class="btn btn-primary btn-xs" href="<%=request.getContextPath() %>/showOrderDetail?orderId=${order.orderid}"><i class="fa fa-folder"></i> 查看</a>
                                               <c:if test="${order.ispaid == 0}">
                                                   <a href="<%=request.getContextPath() %>/alipay?orderId=${order.orderid}&price=${order.totalprice}" class="btn btn-primary btn-xs"><i class="fa fa-paypal"></i> 支付 </a>
                                                   <a href="<%=request.getContextPath() %>/cancelOrder?orderId=${order.orderid}" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> 取消订单 </a>
                                                </c:if>
                                                <c:if test="${order.ispaid == 1}">
                                                    <a href="<%=request.getContextPath() %>/refund?orderId=${order.orderid}" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> 退款 </a>
                                                </c:if>
                                                <c:if test="${order.ispaid == 2}">
                                                    <a href="<%=request.getContextPath() %>/cancelOrder?orderId=${order.orderid}" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> 删除 </a>
                                                </c:if>
                                                <c:if test="${order.ispaid == 1 && order.carDetail.accidentType == -2}">
                                                    <!-- 按钮触发模态框 -->
                                                    <button class="btn btn-danger btn-xs" data-toggle="modal" data-target="#myModal"><i class="fa fa-exclamation-triangle"></i> 报险</button>
                                                    <!-- 模态框（Modal） -->
                                                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                                    <h4 class="modal-title" id="myModalLabel">事故定性</h4>
                                                                </div>
                                                                <form action="<%=request.getContextPath() %>/accident" method="post">
                                                                    <div class="modal-body">
                                                                        <input hidden="hidden" name="cdId" value="${order.carDetail.cdid}">
                                                                        <label>事故发生地: <input name="aLocation" type="text"/></label>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                                                        <button type="submit" class="btn btn-primary">提交</button>
                                                                    </div>
                                                                </form>
                                                            </div><!-- /.modal-content -->
                                                        </div><!-- /.modal -->
                                                    </div>
                                                </c:if>
                                            </td>
                                            <td>
                                                <c:if test="${order.ispaid == 0}">
                                                    未支付
                                                </c:if>
                                                <c:if test="${order.ispaid == 1}">
                                                    已支付
                                                </c:if>
                                                <c:if test="${order.ispaid == 2}">
                                                    退款成功
                                                </c:if>
                                                <c:if test="${order.carDetail.accidentType == -1 || order.carDetail.accidentType == 1}">
                                                    已报险
                                                </c:if>
                                            </td>
                                        </tr>
                                    </c:forEach>
                                    </tbody>
                                </table>
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
<!-- iCheck -->
<script src="../../vendors/iCheck/icheck.min.js"></script>
<!-- Datatables -->
<script src="../../vendors/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
<script src="../../vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.flash.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.html5.min.js"></script>
<script src="../../vendors/datatables.net-buttons/js/buttons.print.min.js"></script>
<script src="../../vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js"></script>
<script src="../../vendors/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
<script src="../../vendors/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js"></script>
<script src="../../vendors/datatables.net-scroller/js/dataTables.scroller.min.js"></script>
<script src="../../vendors/jszip/dist/jszip.min.js"></script>
<script src="../../vendors/pdfmake/build/pdfmake.min.js"></script>
<script src="../../vendors/pdfmake/build/vfs_fonts.js"></script>

<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.min.js"></script>

</body>
</html>