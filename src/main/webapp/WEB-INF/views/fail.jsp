<%--
  Created by IntelliJ IDEA.
  User: PWB
  Date: 2019/4/23
  Time: 21:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>错误</title>
</head>
<script src="../../vendors/jquery/dist/jquery.min.js"></script>
<script>
    $(function(){
        <c:if test="${msg != null}">
        var str = '${msg}';
        alert(str);
        </c:if>
        window.history.back(-1);
    })
</script>
<body>


</body>
</html>
