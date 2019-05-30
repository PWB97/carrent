<%@ page contentType="text/html;charset=UTF-8" language="java"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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

    <!-- Datatables -->
    <link href="../../vendors/datatables.net-bs/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css" rel="stylesheet">
    <link href="../../vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css" rel="stylesheet">
    <!-- Ion.RangeSlider -->
    <link href="../../vendors/ion.rangeSlider/css/ion.rangeSlider.css" rel="stylesheet">
    <link href="../../vendors/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css" rel="stylesheet">

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
        <div class="right_col" role="main" style="background-color: #FFFFFF">
            <div class="">

                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                        <form action="<%=request.getContextPath() %>/rentCar" method="get">
                            <div>
                                <p>车型</p>
                                <div>
                                    <img src="../../images/carType/0.jpg">
                                    <i>不限</i>
                                    <input name="carType" type="radio" value="">
                                </div>
                                <c:forEach var="carType" items="${carTypes}">
                                    <div>
                                        <img src="../../images/carType/${carType.ctypeid}.jpg">
                                        <i>${carType.ctypename}</i>
                                        <input name="carType" type="radio" value="${carType.ctypeid}">
                                    </div>
                                </c:forEach>
                            </div>
                            <div class="ln_solid" style="margin: 10px 0"></div>
                            <div>
                                <p>价格区间</p>
                                <div>
                                    <input type="text" class="slider" name="price" value="" />
                                </div>
                            </div>
                            <div class="ln_solid" style="margin: 10px 0"></div>
                            <div>
                                <p style="margin: 0 0 0 0">品牌</p>
                                <div class="panel-body">
                                    <select name="carBrand" class="form-control">
                                        <option>请选择品牌</option>
                                        <c:forEach items="${carBrands}" var="carBrand">
                                            <option value="${carBrand.brandid}">${carBrand.brandname}</option>
                                        </c:forEach>
                                    </select>
                                </div>
                            </div>
                            <div class="ln_solid" style="margin: 10px 0"></div>
                            <div>
                                <p style="margin: 0 0 0 0">门店</p>
                                <div class="panel-body">
                                    <select id="province" name="province" onchange="chooseProvice(this)" class="form-control">
                                        <option>请选择省</option>
                                        <c:forEach var="province" items="${locations}">
                                            <option value="${province.pid}">${province.pname}</option>
                                        </c:forEach>
                                    </select>
                                    <br>
                                    <select id="city" name="city" onchange="chooseCity(this)" class="form-control">
                                        <option>请选择市</option>
                                    </select>
                                    <br>
                                    <select id="location" name="location" class="form-control">
                                        <option>请选择门店</option>
                                    </select>
                                </div>
                            </div>
                            <div style="text-align: center">
                            <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-filter"></i> 筛选</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                        <table id="datatable" class="table table-bordered" style="text-align: center">
                            <thead>
                            <tr>
                                <th>图片</th>
                                <th>汽车名称</th>
                                <th>单价</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <c:forEach var="car" items="${cars}" varStatus="s">
                                <tr>
                                    <td style="vertical-align: middle">
                                        <img src="../../images/car/${car.carid}.JPG" width="230" height="130">
                                    </td>
                                    <td style="vertical-align: middle">${car.carname}</td>
                                    <td style="vertical-align: middle">${car.price}</td>
                                    <td style="vertical-align: middle">
                                        <a type="button" class="btn btn-primary btn-xs"
                                           href="<%=request.getContextPath() %>/carDetail?carId=${car.carid}"><i
                                                class="fa fa-folder"></i> 查看</a>
                                        <a type="button" class="btn btn-primary btn-xs"
                                           href="<%=request.getContextPath() %>/uploadCarDetail?carId=${car.carid}"><i
                                                class="fa fa-upload"></i> 提交租车信息</a></td>
                                </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="clearfix"></div>
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
<!-- Ion.RangeSlider -->
<script src="../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js"></script>

<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.js"></script>

<script>
    var pTag = document.getElementById("province");
    var cTag = document.getElementById("city");
    var lTag = document.getElementById("location");
    function chooseProvice() {
        $("#city").empty();
        cTag.add(new Option("请选择市"));
        <c:forEach var="province" items="${locations}">
        if (pTag.options[pTag.selectedIndex].text === "${province.pname}") {
            <c:forEach var="city" items="${province.cities}">
            cTag.add(new Option("${city.cname}", ${city.cid}));
            </c:forEach>
        }
        </c:forEach>
    }
    function chooseCity() {
        $("#location").empty();
        lTag.add(new Option("请选择门店"));
        <c:forEach var="province" items="${locations}">
        if (pTag.options[pTag.selectedIndex].text === "${province.pname}") {
            <c:forEach var="city" items="${province.cities}">
            if (cTag.options[cTag.selectedIndex].text === "${city.cname}") {
                <c:forEach var="location" items="${city.locations}">
                lTag.add(new Option("${location.lname}", ${location.lid}));
                </c:forEach>
            }
            </c:forEach>
        }
        </c:forEach>
    }
</script>
<script>
    $(".slider").ionRangeSlider({
        type: "double",
        min: 0.00,
        max: 1000.00,
        from: 200.00,
        to: 500.00,
        grid: true
    });
</script>

</body>
</html>