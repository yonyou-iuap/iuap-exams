<%@ page language="java" import="java.util.*,java.net.*" pageEncoding="UTF-8"%>
<%

    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    InetAddress ip;
    String ipaddr="localhost";
    try {

        ip = InetAddress.getLocalHost();
        System.out.println("Current IP address : " + ip.getHostAddress());
        ipaddr=ip.getHostAddress();

    } catch (UnknownHostException e) {

        e.printStackTrace();

    }

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">

    <title>欢迎使用iUAP技术中台</title>

</head>

<body>
<br>
<div align="center"><font color="#0080ff" size="7" face="Arial"><strong><%=ipaddr %> &nbsp;欢迎高树江来到iUAP 技术中台。</strong></font></div><br>
<div align="center"><img src="ad1.jpg">
</div><br><br><br><br><br><br>
<div><div align="center"><font size="4"><strong>iUAP 技术中台</strong></font></div><div align="center">
</div>
</div>
</body>
</html>
