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
                                        <li>
                                            <a href="<%=request.getContextPath() %>/backManage/showCarConditions">添加条件</a>
                                        </li>
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
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2 style="width:30%">${car.carBrand.brandname}/${car.carname}</h2>
                                <c:if test="${carDetail.isonline == 1}">
                                    <div class="col-md-4 col-md-offset-1">
                                        <form action="<%=request.getContextPath() %>/carDetail" method="get">
                                            <label for="carId">选择其他同款</label>
                                            <input hidden="hidden" value="${car.carid}" name="carId" id="carId">
                                            <select name="cdId">
                                                <c:forEach items="${carDetails}" var="cd">
                                                    <option value="${cd.cdid}"
                                                            <c:if test="${cd.cdid == carDetail.cdid}">
                                                                selected="selected"
                                                            </c:if>
                                                    >${cd.level}</option>
                                                </c:forEach>
                                            </select>
                                            <button type="submit" class="btn-primary btn-xs">确定</button>
                                        </form>
                                    </div>
                                </c:if>

                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">

                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <div class="sp-loading"><img src="../../images/sp-loading.gif"
                                                                     alt=""><br>LOADING
                                            IMAGES
                                        </div>
                                        <div class="sp-wrap">
                                            <a href="../../images/carDetail/${carDetail.cdid}/1.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/1.jpg"
                                                    alt=""></a>
                                            <a href="../../images/carDetail/${carDetail.cdid}/2.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/2.jpg"
                                                    alt=""></a>
                                            <a href="../../images/carDetail/${carDetail.cdid}/3.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/3.jpg"
                                                    alt=""></a>
                                            <a href="../../images/carDetail/${carDetail.cdid}/4.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/4.jpg"
                                                    alt=""></a>
                                            <a href="../../images/carDetail/${carDetail.cdid}/5.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/5.jpg"
                                                    alt=""></a>
                                            <a href="../../images/carDetail/${carDetail.cdid}/6.jpg"><img
                                                    src="../../images/carDetail/${carDetail.cdid}/6.jpg"
                                                    alt=""></a>
                                        </div>
                                        <c:if test="${carDetail.isonline == -1 || userDetail.userType.utypename eq '管理员'}">
                                            <div class="">
                                                <form id="myAwesomeDropzone"
                                                      action="<%=request.getContextPath() %>/uploadCarDetailPictures"
                                                      class="dropzone" method="POST"
                                                      enctype="multipart/form-data">
                                                    <input hidden="hidden" name="cdId"
                                                           value="${carDetail.cdid}">
                                                    <div class="dz-message">
                                                        <span>拖入图片以更改预览图</span>
                                                    </div>
                                                </form>
                                            </div>
                                        </c:if>
                                        <c:if test="${carDetail.isonline == 1 && userDetail.userType.utypename eq '用户'}">
                                            <div class="">
                                                <form action="<%=request.getContextPath() %>/makeOrder"
                                                      method="post">
                                                    <div class="col-md-10">
                                                        <fieldset>
                                                            <div class="control-group">
                                                                <input hidden="hidden" name="cdId"
                                                                       value="${carDetail.cdid}">
                                                                <input hidden="hidden" name="price"
                                                                       value="${car.price}">
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="startDate">取车时间</label>
                                                                <div class='input-group date' id='myDatepicker1'>
                                                                    <input type='text' class="form-control" name="startDate" id="startDate"/>
                                                                    <span class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label for="endDate">还车时间</label>
                                                                <div class='input-group date' id='myDatepicker2'>
                                                                    <input type='text' class="form-control" name="endDate" id="endDate"/>
                                                                    <span class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <button type="submit"
                                                                class="btn btn-primary">下单
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </c:if>
                                        <c:if test="${carDetail.isonline == 1 && userDetail.userType.utypename eq '管理员'}">
                                           <div style="text-align: center">
                                            <a type="button" class="btn btn-danger"
                                               href="<%=request.getContextPath() %>/backManage/offline?cdId=${carDetail.cdid}"><i
                                                    class="fa fa-arrow-circle-o-down"></i> 下线</a>
                                           </div>
                                        </c:if>
                                        <c:if test="${carDetail.isonline == -1 && userDetail.userType.utypename eq '管理员'}">
                                            <div style="text-align: center">
                                                <a type="button" class="btn btn-success" href="<%=request.getContextPath() %>/backManage/online?cdId=${carDetail.cdid}"><i class="fa fa-check-circle"></i> 通过审核</a>
                                            </div>
                                        </c:if>
                                    </div>
                                    <div class="col-md-5 col-sm-5 col-xs-12">
                                        <div class="col-md-12">
                                        <h2>基本信息</h2>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>品牌 </h2>
                                                <p>${car.carBrand.brandname}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>类型 </h2>
                                                <p>${car.carType.ctypename}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>门店 </h2>
                                                <p>${car.location.city.province.pname}-${car.location.city.cname}-${car.location.lname}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>价格 </h2>
                                                <p>${car.price}</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="ln_solid col-md-12"></div>
                                        <div class="col-md-12">
                                        <h2>详细信息</h2>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>年代款</h2>
                                                <p>${carDetail.productyear}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>配置款</h2>
                                                <p>${carDetail.level}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>座位数</h2>
                                                <p>${carDetail.seats}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>车门数</h2>
                                                <p>${carDetail.doors}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>燃料类型</h2>
                                                <p>${carDetail.energy.energename}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>变速箱类型</h2>
                                                <p>${carDetail.gear.gearname}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>排量</h2>
                                                <p>${carDetail.displacement}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>驱动方式</h2>
                                                <p>
                                                    <c:if test="${carDetail.drive == 1}">前驱</c:if>
                                                    <c:if test="${carDetail.drive == 2}">后驱</c:if>
                                                    <c:if test="${carDetail.drive == 3}">四驱</c:if>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>天窗</h2>
                                                <p>
                                                    <c:if test="${carDetail.upwindow == 0}">无</c:if>
                                                    <c:if test="${carDetail.upwindow == 1}">有</c:if>
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>雷达</h2>
                                                <p>
                                                    <c:if test="${carDetail.radar == 0}">无</c:if>
                                                    <c:if test="${carDetail.radar == 1}">有</c:if>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <h2>证件</h2>
                                                <c:if test="${carDetail.lisence == 1}">
                                                    <a href="../../files/lisence${carDetail.cdid}.docx"><i class="fa fa-file-word-o"></i> 点击下载驾驶证</a>
                                                </c:if>
                                            </div>
                                            <div class="col-md-6">
                                                <h2>保养记录</h2>
                                                <c:if test="${carDetail.fsfile == 1}">
                                                    <a href="../../files/fsFile${carDetail.cdid}.docx"><i class="fa fa-file-word-o"></i> 点击下载保养记录</a>
                                                </c:if>
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
    $('#myDatepicker1').datetimepicker({
        format: 'DD.MM.YYYY'
    });

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

    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });

    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
</script>
<script type="text/javascript" src="../../js/smoothproducts.min.js"></script>
<script type="text/javascript">
    /* wait for images to load */
    $(window).load(function () {
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
        parallelUploads: 1,
        complete: function () {
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    };
</script>
</body>
</html>