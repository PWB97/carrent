<%--
  Created by IntelliJ IDEA.
  User: pu
  Date: 2019-04-28
  Time: 14:56
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

    <!-- CSS ====================================================== -->
    <link rel="stylesheet" href="../../css/smoothproducts.css">
    <!-- Bootstrap -->
    <link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <!-- bootstrap-daterangepicker -->
    <link href="../../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">
    <!-- bootstrap-datetimepicker -->
    <link href="../../vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css" rel="stylesheet">

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

    <link href="../../vendors/dropzone/dist/dropzone.css" rel="stylesheet">
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
                        <img src="<c:choose><c:when test="${userDetail.icon == 'true'}">/../../images/user/${currentUser.userid}.JPG</c:when>
                                  <c:otherwise>/../../images/user/user.JPG</c:otherwise></c:choose>" alt="..." class="img-circle profile_img">
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
                                        <li><a href="<%=request.getContextPath() %>/carDetail">汽车详情</a></li>
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
                            </c:if>
                            <c:if test="${userDetail.userType.utypename == '用户'}">
                                <li><a><i class="fa fa-car"></i> 汽车服务 <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="<%=request.getContextPath() %>/rentCar">租车</a></li>
                                        <li><a href="<%=request.getContextPath() %>/uploadCar">提交出租信息</a></li>
                                        <li><a href="<%=request.getContextPath() %>/carDetail">汽车详情</a></li>
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
                                <img src="<c:choose><c:when test="${userDetail.icon == 'true'}">/../../images/user/${currentUser.userid}.JPG</c:when>
                                          <c:otherwise>/../../images/user/user.JPG</c:otherwise></c:choose>" alt="">${currentUser.username}
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
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>汽车详情</h2>
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

                                <div class="col-md-7 col-sm-7 col-xs-12">
                                    <div class="sp-loading"><img src="../../images/sp-loading.gif" alt=""><br>LOADING IMAGES</div>
                                    <div class="sp-wrap">
                                        <a href="../../images/car/${carDetail.carid}/1.jpg"><img src="../../images/car/${carDetail.carid}/1.jpg" alt=""></a>
                                        <a href="../../images/car/${carDetail.carid}/2.jpg"><img src="../../images/car/${carDetail.carid}/2.jpg" alt=""></a>
                                        <a href="../../images/car/${carDetail.carid}/3.jpg"><img src="../../images/car/${carDetail.carid}/3.jpg" alt=""></a>
                                        <a href="../../images/car/${carDetail.carid}/4.jpg"><img src="../../images/car/${carDetail.carid}/4.jpg" alt=""></a>
                                        <a href="../../images/car/${carDetail.carid}/5.jpg"><img src="../../images/car/${carDetail.carid}/5.jpg" alt=""></a>
                                        <a href="../../images/car/${carDetail.carid}/6.jpg"><img src="../../images/car/${carDetail.carid}/6.jpg" alt=""></a>
                                    </div>
                                    <c:if test="${carDetail.isonline == -1}">
                                        <div class="">
                                            <form id ="myAwesomeDropzone" action="<%=request.getContextPath() %>/uploadCarFiles" class="dropzone" method="POST" enctype="multipart/form-data">
                                                <input hidden="hidden" name="carId" value="${carDetail.carid}">
                                            </form>
                                        </div>
                                    </c:if>
                                    <c:if test="${carDetail.isonline == 1 && userDetail.userType.utypename eq '用户'}">
                                        <div class="">
                                            <form action="<%=request.getContextPath() %>/makeOrder" method="post">
                                                <div class="col-md-10">
                                                    <div class="daterangepicker dropdown-menu ltr single opensright show-calendar picker_4 xdisplay"><div class="calendar left single" style="display: block;"><div class="daterangepicker_input"><input class="input-mini form-control active" type="text" name="daterangepicker_start" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th><th colspan="5" class="month">Oct 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">25</td><td class="off available" data-title="r0c1">26</td><td class="off available" data-title="r0c2">27</td><td class="off available" data-title="r0c3">28</td><td class="off available" data-title="r0c4">29</td><td class="off available" data-title="r0c5">30</td><td class="weekend available" data-title="r0c6">1</td></tr><tr><td class="weekend available" data-title="r1c0">2</td><td class="available" data-title="r1c1">3</td><td class="available" data-title="r1c2">4</td><td class="available" data-title="r1c3">5</td><td class="available" data-title="r1c4">6</td><td class="available" data-title="r1c5">7</td><td class="weekend available" data-title="r1c6">8</td></tr><tr><td class="weekend available" data-title="r2c0">9</td><td class="available" data-title="r2c1">10</td><td class="available" data-title="r2c2">11</td><td class="available" data-title="r2c3">12</td><td class="available" data-title="r2c4">13</td><td class="available" data-title="r2c5">14</td><td class="weekend available" data-title="r2c6">15</td></tr><tr><td class="weekend available" data-title="r3c0">16</td><td class="available" data-title="r3c1">17</td><td class="today active start-date active end-date available" data-title="r3c2">18</td><td class="available" data-title="r3c3">19</td><td class="available" data-title="r3c4">20</td><td class="available" data-title="r3c5">21</td><td class="weekend available" data-title="r3c6">22</td></tr><tr><td class="weekend available" data-title="r4c0">23</td><td class="available" data-title="r4c1">24</td><td class="available" data-title="r4c2">25</td><td class="available" data-title="r4c3">26</td><td class="available" data-title="r4c4">27</td><td class="available" data-title="r4c5">28</td><td class="weekend available" data-title="r4c6">29</td></tr><tr><td class="weekend available" data-title="r5c0">30</td><td class="available" data-title="r5c1">31</td><td class="off available" data-title="r5c2">1</td><td class="off available" data-title="r5c3">2</td><td class="off available" data-title="r5c4">3</td><td class="off available" data-title="r5c5">4</td><td class="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div class="calendar right" style="display: none;"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;"><i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i><div class="calendar-time" style="display: none;"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"><table class="table-condensed"><thead><tr><th></th><th colspan="5" class="month">Nov 2016</th><th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td class="weekend off available" data-title="r0c0">30</td><td class="off available" data-title="r0c1">31</td><td class="available" data-title="r0c2">1</td><td class="available" data-title="r0c3">2</td><td class="available" data-title="r0c4">3</td><td class="available" data-title="r0c5">4</td><td class="weekend available" data-title="r0c6">5</td></tr><tr><td class="weekend available" data-title="r1c0">6</td><td class="available" data-title="r1c1">7</td><td class="available" data-title="r1c2">8</td><td class="available" data-title="r1c3">9</td><td class="available" data-title="r1c4">10</td><td class="available" data-title="r1c5">11</td><td class="weekend available" data-title="r1c6">12</td></tr><tr><td class="weekend available" data-title="r2c0">13</td><td class="available" data-title="r2c1">14</td><td class="available" data-title="r2c2">15</td><td class="available" data-title="r2c3">16</td><td class="available" data-title="r2c4">17</td><td class="available" data-title="r2c5">18</td><td class="weekend available" data-title="r2c6">19</td></tr><tr><td class="weekend available" data-title="r3c0">20</td><td class="available" data-title="r3c1">21</td><td class="available" data-title="r3c2">22</td><td class="available" data-title="r3c3">23</td><td class="available" data-title="r3c4">24</td><td class="available" data-title="r3c5">25</td><td class="weekend available" data-title="r3c6">26</td></tr><tr><td class="weekend available" data-title="r4c0">27</td><td class="available" data-title="r4c1">28</td><td class="available" data-title="r4c2">29</td><td class="available" data-title="r4c3">30</td><td class="off available" data-title="r4c4">1</td><td class="off available" data-title="r4c5">2</td><td class="weekend off available" data-title="r4c6">3</td></tr><tr><td class="weekend off available" data-title="r5c0">4</td><td class="off available" data-title="r5c1">5</td><td class="off available" data-title="r5c2">6</td><td class="off available" data-title="r5c3">7</td><td class="off available" data-title="r5c4">8</td><td class="off available" data-title="r5c5">9</td><td class="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div class="ranges" style="display: none;"><div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>
                                                    <fieldset>
                                                        <div class="control-group">
                                                            <div class="col-md-3"><label for="single_cal4">输入还车日期</label></div>
                                                            <div class="controls col-md-9">
                                                                <div class="col-md-11 xdisplay_inputx form-group has-feedback">
                                                                    <input type="text" class="form-control has-feedback-left" id="single_cal4" placeholder="First Name" aria-describedby="inputSuccess2Status4">
                                                                    <span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span>
                                                                    <span id="inputSuccess2Status4" class="sr-only">(success)</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div class="col-md-2"><button type="submit" class="btn btn-primary btn-sm">下单</button></div>
                                            </form>
                                        </div>
                                    </c:if>
                                </div>

                                <div class="col-md-5 col-sm-5 col-xs-12" style="border:0px solid #e5e5e5;">

                                    <h3 class="prod_title">${carDetail.carname}</h3>

                                    <p>${carDetail.detail}</p>
                                    <br />

                                    <div class="col-md-12">
                                        <h2>类型 </h2>
                                        <p>${carDetail.carType.ctypename}</p>
                                    </div>
                                    <br />

                                    <div class="col-md-12">
                                        <h2>品牌 </h2>
                                        <img src="../../images/logo/${carDetail.brandid}.JPG" />
                                    </div>
                                    <br />

                                    <div class="col-md-12">
                                        <h2>门店 </h2>
                                        <p>${carDetail.location.city.province.pname}-${carDetail.location.city.cname}-${carDetail.location.lname}</p>
                                    </div>
                                    <br />
                                    <c:if test="${carDetail.isonline==1}">
                                    <div class="col-md-12">
                                        <div class="product_price">
                                            <h2>价格 </h2>
                                            <h1 class="price">${carDetail.price}</h1>
                                        </div>
                                    </div>
                                    </c:if>
                                    <c:if test="${carDetail.isonline==0 && userDetail.userType.utypename == '管理员'}">
                                        <div class="col-md-12">
                                            <form action="<%=request.getContextPath() %>/backManage/online" method="post">
                                                <input name="carId" hidden="hidden" value="${carDetail.carid}">
                                                <input name="price">
                                                <input type="submit">
                                            </form>
                                        </div>
                                    </c:if>
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
<!-- bootstrap-daterangepicker -->
<script src="../../vendors/moment/min/moment.min.js"></script>
<script src="../../vendors/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- bootstrap-datetimepicker -->
<script src="../../vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>

<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.min.js"></script>
<!-- Initialize datetimepicker -->
<script>
    $('#myDatepicker').datetimepicker();

    $('#myDatepicker2').datetimepicker({
        format: 'DD.MM.YYYY'
    });

    $('#myDatepicker3').datetimepicker({
        format: 'hh:mm A'
    });

    $('#myDatepicker4').datetimepicker({
        ignoreReadonly: true,
        allowInputToggle: true
    });

    $('#datetimepicker6').datetimepicker();

    $('#datetimepicker7').datetimepicker({
        useCurrent: false
    });

    $("#datetimepicker6").on("dp.change", function(e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });

    $("#datetimepicker7").on("dp.change", function(e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
</script>
<script type="text/javascript" src="../../js/smoothproducts.min.js"></script>
<script type="text/javascript">
    /* wait for images to load */
    $(window).load(function() {
        $('.sp-wrap').smoothproducts();
    });
</script>
<script type="text/javascript" src="../../vendors/dropzone/dist/dropzone.js"></script>
<script type="text/javascript">
    //两种配置方式，第一种，表单上传时的配置方式，可以打开form表单的注释，myAwesomeDropzone是表单的id
    Dropzone.options.myAwesomeDropzone = {
        paramName: "file", // The name that will be used to transfer the file
        maxFilesize: 100, // MB
        maxFiles: 6,
        parallelUploads:1,
        complete: function() {
            setTimeout(function(){
                location.reload();
            },1000);
        }
    };
</script>
</body>
</html>