<%--
  Created by IntelliJ IDEA.
  User: PWB
  Date: 2019/4/18
  Time: 9:39
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

    <title>后台管理</title>

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
                    <a class="site_title"><span>后台管理</span></a>
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
                            <li><a><i class="fa fa-newspaper-o"></i> 新闻管理 <span class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    <li><a href="<%=request.getContextPath() %>/News">所有新闻</a></li>
                                    <li><a href="<%=request.getContextPath() %>/backManage/addNews">添加新闻</a></li>
                                </ul>
                            </li>
                            <li><a><i class="fa fa-user"></i> 用户管理 <span class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    <li><a href="<%=request.getContextPath() %>/backManage/showUsers">所有用户</a></li>
                                    <li><a href="<%=request.getContextPath() %>/backManage/addManager">添加管理员</a></li>
                                </ul>
                            </li>
                            <li><a><i class="fa fa-dollar"></i> 订单管理 <span class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    <li><a href="<%=request.getContextPath() %>/backManage/showOrdersNotPaid">未支付订单</a>
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
                                <img src="<c:if test="${userDetail.icon == 'true'}">../../images/user/${currentUser.userid}.JPG</c:if><c:if test="${userDetail.icon != 'true'}">../../images/user/user.JPG</c:if>" >${currentUser.username}
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
        <!-- page content -->
        <div class="right_col" role="main">
            <div class="">

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">

                            <div class="x_panel">
                                <div class="x_title">
                                    <h2><i class="fa fa-align-left"></i> 选择汽车 </h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <form action="<%=request.getContextPath() %>/rentCar" method="get">
                                    <!-- start accordion -->
                                    <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel">
                                            <a class="panel-heading" role="tab" id="headingOne" data-toggle="collapse"
                                               data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                               aria-controls="collapseOne">
                                                <h4 class="panel-title">选择地点</h4>
                                            </a>
                                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                                 aria-labelledby="headingOne">
                                                <div class="panel-body">
                                                    <select id="province" name="province"
                                                            onchange="chooseProvice(this)">
                                                        <option>请选择省</option>
                                                        <c:forEach var="province" items="${locations}">
                                                            <option value="${province.pid}">${province.pname}</option>
                                                        </c:forEach>
                                                    </select>
                                                    <select id="city" name="city" onchange="chooseCity(this)">
                                                        <option>请选择市</option>
                                                    </select>
                                                    <select id="location" name="location" onchange="chooseLocation(this)">
                                                        <option>请选择门店</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <a class="panel-heading collapsed" role="tab" id="headingTwo"
                                               data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                               aria-expanded="false" aria-controls="collapseTwo">
                                                <h4 class="panel-title">选择品牌</h4>
                                            </a>
                                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <select name="carBrand">
                                                        <option>请选择品牌</option>
                                                        <c:forEach items="${carBrands}" var="carBrand">
                                                            <option value="${carBrand.brandid}">${carBrand.brandname}</option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <a class="panel-heading collapsed" role="tab" id="headingThree"
                                               data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                               aria-expanded="false" aria-controls="collapseThree">
                                                <h4 class="panel-title">选择类型</h4>
                                            </a>
                                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <select name="carType">
                                                        <option>请选择类型</option>
                                                        <c:forEach items="${carTypes}" var="carType">
                                                            <option value="${carType.ctypeid}">${carType.ctypename}</option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel">
                                            <a class="panel-heading collapsed" role="tab" id="headingFour"
                                               data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                                               aria-expanded="false" aria-controls="collapseFour">
                                                <h4 class="panel-title">选择价格区间</h4>
                                            </a>
                                            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <input type="text" class="slider" name="price" value="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group" style="text-align: center">
                                            <button type="submit" class="btn btn-success"><i class="fa fa-filter"></i>筛选</button>
                                        </div>
                                    </div>
                                    <!-- end of accordion -->
                                    </form>
                                </div>
                            </div>

                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2 style="width: 13%">汽车列表</h2>
                                <!-- Button trigger modal -->
                                <div style="text-align: center" class="col-md-4 col-md-offset-2">
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                                            data-target="#myModel"><i class="fa fa-plus"></i> 添加汽车
                                    </button>
                                </div>
                                <!-- Modal -->
                                <div class="modal fade" id="myModel" tabindex="-1" role="dialog"
                                     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">
                                                    添加汽车</h5>
                                            </div>
                                            <form action="<%=request.getContextPath() %>/uploadCar"
                                                  method="post" id="demo-form2" data-parsley-validate
                                                  class="form-horizontal form-label-left" enctype="multipart/form-data">
                                                <div class="modal-body">
                                                    <input hidden="hidden" name="location" id="lInput">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                                               for="carName">汽车名称 <span
                                                                class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input type="text" id="carName"
                                                                   name="carName" required="required"
                                                                   class="form-control col-md-7 col-xs-12">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12">类型
                                                            <span class="required">*</span></label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <div id="gender" class="btn-group"
                                                                 data-toggle="buttons">
                                                                <select class="form-control" name="typeId">
                                                                    <c:forEach items="${carTypes}"
                                                                               var="carType">
                                                                        <option value="${carType.ctypeid}">${carType.ctypename}</option>
                                                                    </c:forEach>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                                               for="price">单价 <span
                                                                class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input type="text" id="price" name="price"
                                                                   required="required"
                                                                   class="form-control col-md-7 col-xs-12">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12">汽车品牌
                                                            <span class="required">*</span></label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <select class="form-control" name="brandId">
                                                                <c:forEach var="carBrand"
                                                                           items="${carBrands}">
                                                                    <option value="${carBrand.brandid}">${carBrand.brandname}</option>
                                                                </c:forEach>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                                               for="carPicture">汽车图片 <span
                                                                class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input type="file" id="carPicture" name="carPicture"
                                                                   required="required"
                                                                   class="form-control col-md-7 col-xs-12">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                            data-dismiss="modal">关闭
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">提交
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <table id="datatable" class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>编号</th>
                                        <th>汽车名称</th>
                                        <th>图片</th>
                                        <th>单价</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <c:forEach var="car" items="${cars}" varStatus="s">
                                        <tr>
                                            <td style="vertical-align: middle">${car.carid}</td>
                                            <td style="vertical-align: middle">${car.carname}</td>
                                            <td style="vertical-align: middle"><img src="../../images/car/${car.carid}.JPG" with="230" height="130"></td>
                                            <td style="vertical-align: middle">${car.price}</td>
                                            <td style="vertical-align: middle">
                                                <a type="button" class="btn btn-primary btn-xs"
                                                   href="<%=request.getContextPath() %>/carDetail?carId=${car.carid}"><i
                                                        class="fa fa-folder"></i> 查看</a>
                                                <a type="button" class="btn btn-primary btn-xs"
                                                   href="<%=request.getContextPath() %>/uploadCarDetail?carId=${car.carid}"><i
                                                        class="fa fa-upload"></i> 提交组车信息</a>
                                                <a type="button" class="btn btn-danger btn-xs"
                                                   href="<%=request.getContextPath() %>/backManage/deleteCar?carId=${car.carid}"><i
                                                        class="fa fa-trash"></i> 删除</a>
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
    function chooseLocation() {
        $("#lInput").val($('#location option:selected').val());
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