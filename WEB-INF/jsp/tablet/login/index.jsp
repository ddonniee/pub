<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page session="false" %>
<%
    final String ROOT = request.getContextPath();
    System.out.println(ROOT);
%>
<!DOCTYPE html>
<head>
    <title>LogiWorks</title>
    <link rel="stylesheet" href="<%=ROOT%>/resources/css/bootstrap-icons.css">
	<script src="/logiworks/resources/js/login/index.js"></script>
</head>
<body>
<h1>LogisALL e-Works</h1>

<p><input type="text" id="memberid"></p>
<p><input type="password" id="passwd"></p>
    
<p><button>(모바일)로그인</button></p>
</body>
</html>
