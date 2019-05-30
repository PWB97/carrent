<%--
  Created by IntelliJ IDEA.
  User: pu
  Date: 2019-05-29
  Time: 14:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
    <!-- Custom Theme Style -->
    <link href="../../build/css/custom.min.css" rel="stylesheet">

    <script src="../../vendors/echarts/dist/echarts.min.js"></script>
    <script src="../../js/china.js"></script>
    <style>#china-map {width:1000px; height: 1000px;margin: auto;}</style>
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
                                    <li><a href="<%=request.getContextPath() %>/backManage/showOrdersNotPaid">未支付订单</a></li>
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
                                <h2>省份订单量化图</h2>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                                <div id="china-map"></div>
                                <script type="text/javascript">
                                    var option = {
                                        title : {
                                            text: '省份订单量化图',
                                            x:'center'
                                        },
                                        tooltip : {//提示框组件。
                                            trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                                        },
                                        legend: {
                                            orient: 'horizontal',//图例的排列方向
                                            x:'left',//图例的位置
                                            data:['订单量']
                                        },

                                        visualMap: {//颜色的设置  dataRange
                                            x: 'left',
                                            y: 'center',
                                            splitList: [
                                                {start: 901},
                                                {start: 601, end: 900},
                                                {start: 301, end: 600},
                                                {start: 101, end: 300},
                                                {start: 1, end: 100}
                                            ],
                                            text:['高','低'],// 文本，默认为数值文本
                                            color: ['#E0022B', '#E09107', '#A3E00B']
                                        },
                                        toolbox: {//工具栏
                                            show: true,
                                            orient : 'vertical',//工具栏 icon 的布局朝向
                                            x: 'right',
                                            y: 'center',
                                            feature : {//各工具配置项。
                                                mark : {show: true},
                                                dataView : {show: true, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                                                restore : {show: true},//配置项还原。
                                                saveAsImage : {show: true}//保存为图片。
                                            }
                                        },
                                        roamController: {//控制地图的上下左右放大缩小 图上没有显示
                                            show: true,
                                            x: 'right',
                                            mapTypeControl: {
                                                'china': true
                                            }
                                        },
                                        series : [
                                            {
                                                name: '订单量',
                                                type: 'map',
                                                mapType: 'china',
                                                roam: false,//是否开启鼠标缩放和平移漫游
                                                itemStyle:{//地图区域的多边形 图形样式
                                                    normal:{//是图形在默认状态下的样式
                                                        label:{
                                                            show:true,//是否显示标签
                                                            textStyle: {
                                                                color: "rgb(249, 249, 249)"
                                                            }
                                                        }
                                                    },
                                                    emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                                        label:{show:true}
                                                    }
                                                },
                                                top:"3%",//组件距离容器的距离
                                                data:[
                                                    <c:forEach items="${provinces}" var="province">
                                                    {
                                                        <c:set var="flag" value="0"/>
                                                        name: '${province.pname}',
                                                        value:
                                                        <c:forEach var="data" items="${orderData}">
                                                        <c:if test="${province.pname eq data.pName}">
                                                        ${data.orderNum}
                                                        <c:set var="flag" value="1"/>
                                                        </c:if>
                                                        </c:forEach>
                                                        <c:if test="${flag == 0}">
                                                        0
                                                        </c:if>
                                                    },
                                                    </c:forEach>
                                                ]
                                            }
                                        ]
                                    };
                                    var myChart = echarts.init(document.getElementById('china-map'));
                                    myChart.setOption(option);
                                </script>
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
<!-- Custom Theme Scripts -->
<script src="../../build/js/custom.min.js"></script>
</body>
</html>