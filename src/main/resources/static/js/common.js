$(function () {


    var DEBUG = false;
    if(!DEBUG){
        if(!window.console) window.console = {};
        var methods = ["log", "debug", "warn", "info"];
        for(var i=0;i<methods.length;i++){
            console[methods[i]] = function(){};
        }
    }
        
   
    //Functions
    loadHeaderFooter();

    //Default Action
    uapTab();
    function uapTab() {
        $(".tab-pane").hide(); //Hide all content
        $("#mytab label h4:first").addClass("active").show(); //Activate first tab

        $(".tab-pane:first").show(); //Show first tab content

        //On Click Event
        $("#mytab label").click(function () {
            $("#mytab label h4").removeClass("active"); //Remove any "active" class
            $("#mytab label").removeClass("title-bg3"); //Remove any "active" class

            $(this).addClass("active"); //Add "active" class to selected tab
            $(this).addClass("title-bg3"); //Add "active" class to selected tab

            $(".tab-pane").hide(); //Hide all tab content
            var activeTab = $(this).attr("href"); //Find the rel attribute value to identify the active tab + content
            $(activeTab).fadeIn(); //Fade in the active content
            return false;
        });
    }



    function getdata() {
        var num = $("#cur_num").val();
        var num1 = $("#cur1_num").val();
        var num2 = $("#cur2_num").val();
        var num3 = $("#cur3_num").val();
        show_num(num);
        show_num1(num1);
        show_num2(num2);
        show_num3(num3);
    }

    function show_num(n) {
        var it = $(".t_num i");
        var len = String(n).length;
        for (var i = 0; i < len; i++) {
            if (it.length <= i) {
                $(".t_num").append("<i></i>");
            }
            var num = String(n).charAt(i);
            var y = -parseInt(num) * 24;
            var obj = $(".t_num i").eq(i);
            console.log(y)
            obj.animate({
                    backgroundPosition: '(0 ' + String(y) + 'px)'
                }, 'slow', 'swing', function () {
                }
            );
        }
    }

    function show_num1(n) {
        var it = $(".t1_num i");
        var len = String(n).length;
        for (var i = 0; i < len; i++) {
            if (it.length <= i) {
                $(".t1_num").append("<i></i>");
            }
            var num = String(n).charAt(i);
            var y = -parseInt(num) * 24;
            var obj = $(".t1_num i").eq(i);
            console.log(y)
            obj.animate({
                    backgroundPosition: '(0 ' + String(y) + 'px)'
                }, 'slow', 'swing', function () {
                }
            );
        }
    }

    function show_num2(n) {
        var it = $(".t2_num i");
        var len = String(n).length;
        for (var i = 0; i < len; i++) {
            if (it.length <= i) {
                $(".t2_num").append("<i></i>");
            }
            var num = String(n).charAt(i);
            var y = -parseInt(num) * 24;
            var obj = $(".t2_num i").eq(i);
            console.log(y)
            obj.animate({
                    backgroundPosition: '(0 ' + String(y) + 'px)'
                }, 'slow', 'swing', function () {
                }
            );
        }
    }

    function show_num3(n) {
        var it = $(".t3_num i");
        var len = String(n).length;
        for (var i = 0; i < len; i++) {
            if (it.length <= i) {
                $(".t3_num").append("<i></i>");
            }
            var num = String(n).charAt(i);
            var y = -parseInt(num) * 24;
            var obj = $(".t3_num i").eq(i);
            console.log(y)
            obj.animate({
                    backgroundPosition: '(0 ' + String(y) + 'px)'
                }, 'slow', 'swing', function () {
                }
            );
        }
    }


    function loadHeaderFooter() {
        var url = "/header.html";
        var tag = "#header";
        loadPage(url, tag)

        url = "/footer.html";
        tag = "#footer";
        loadPage(url, tag);

        url = "/mobilepage/null.html";
        tag = "#mobilepage";
        loadPage(url, tag);

        url = "/mobilepage/mobileheader.html";
        tag = "#mobheader";
        loadPage(url, tag);

    }

    function loadPage(url, tag) {
        if ($(tag).length > 0) {
            $.get(url, function (data) {
                data = data.slice(data.indexOf('<body>') + 6, data.indexOf('</body>'));
                $(tag).html(data);

                $(".hnavs li").hover(function () {
                    $(this).find(".sub_nav").show();
                }, function () {
                    $(this).find(".sub_nav").hide();
                })


                $(".mobnav li").click(function () {
                    var mindex = $(this).find(".sub_nav").css("display");
                    if(mindex == "none"){
                        $(".sub_nav").hide();
                        $(this).find(".sub_nav").show();
                    }
                    if(mindex == "block"){
                        $(this).find(".sub_nav").hide();
                    }
                })


                // $("#moblie_index_body").click(function () {
                //     if($("sub_nav").css("display") == "block"){
                //        $(".sub_nav").hide(); 
                //    }
                // })


                $(".hnavs .sub_nav .ft a").click(function () {
                    $(this).parents(".sub_nav").hide();
                })
                $(".mobnav .sub_nav .ft a").click(function () {
                    $(this).parents(".sub_nav").hide();
                })

                $(".anli_box .ft li").mouseover(function () {
                    var index = $(".anli_box .ft li").index($(this));
                    $(".anli_box .ft li").removeClass("on");
                    $(this).addClass("on");
                    $(".anli_box .bd .item").hide().eq(index).show();
                })
                $(".anli_box .ft .li_1").addClass("on");


                $(".anli_box .ftm li").click(function () {
                    var index = $(".anli_box .ftm li").index($(this));
                    $(".anli_box .ftm li").removeClass("on");
                    $(this).addClass("on");
                    $(".anli_box .bd .item").hide().eq(index).show();
                })
                $(".anli_box .ftm .li_1").addClass("on");
 

                $(".cases_box .ft li").mouseover(function () {
                    var cindex = $(".cases_box .ft li").index($(this));
                    $(".cases_box .ft li").removeClass("on");
                    $(this).addClass("on");
                    $(".cases_box .bd .item").hide().eq(cindex).show();
                })
                $(".cases_box .ft .li_1").addClass("on");


                $(".news_box .hd dd a").mouseover(function () {
                    var index = $(".news_box .hd dd a").index($(this));
                    $(".news_box .hd dd a").removeClass();
                    $(this).addClass("on");
                    $(".news_box .bd .item").hide().eq(index).show();
                })


                $(".news_box .hdmm dd a").click(function () {
                    var index = $(".news_box .hdmm dd a").index($(this));
                    $(".news_box .hdmm dd a").removeClass();
                    $(this).addClass("on");
                    $(".news_box .bd .item").hide().eq(index).show();
                })


                $(window).scrollTop(0);


                $(window).scroll(function () {
                    console.log($(document).scrollTop())

                    if ($(document).scrollTop() > 700) {
                        getdata();
                    }
                    if ($(document).scrollTop() > 400){
                        $(".sider_nav .li_3").show();
                        $(".sider_nav .popPanel").css("bottom","155px");
                        $(".sider_nav .telPanel").css("bottom","255px");
                    }
                    if ($(document).scrollTop() <= 400){
                        $(".sider_nav .li_3").hide();
                        $(".sider_nav .popPanel").css("bottom","100px");
                        $(".sider_nav .telPanel").css("bottom","200px");
                    }
                })


                
                $('.sup_main .sup_box .list a').attr("target","_blank");
                $('.white_main .white_box .list a').attr("target","_blank");


                $('.sider_nav .li_3').click(function () {
                    $('html, body').animate({scrollTop: 0}, 'normal');
                });

                var panel = $(".popPanel");     
                var w = panel.outerWidth();
                var tpanel = $(".telPanel");     
                var tw = tpanel.outerWidth();  
                 
                $(".qrcode").hover(function(){ 
                    panel.css("width","0px").show(); 
                    panel.animate({"width" : w + "px"},200); 
                },function(){ 
                    panel.stop();
                    panel.animate({"width" : "0px"},200); 
                    }); 
     
                $(".tel").hover(function(){ 
                    tpanel.css("width","0px").show(); 
                    tpanel.animate({"width" : tw + "px"},200); 
                },function(){ 
                    tpanel.stop();
                    tpanel.animate({"width" : "0px"},200); 
                    }); 

                $('.disableCss').removeAttr('href');//去掉a标签中的href属性
                $('.disableCss').removeAttr('onclick');//去掉a标签中的onclick事件
                $(".disableCss").hover(function(){
                    $(this).css("background-color","#8c8686");
                },function(){
                    $(this).css("background-color","#bebebe");
                });
            });
        }
    }



})
// 首页“动态”信息展示
function showHandlebarData(data, rowid) {


    //注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
    //$("#com-template").html()是jquery的语法，不懂的童鞋请恶补。。。
    var myTemplate = Handlebars.compile($(rowid).html());

    //注册一个翻译用的Helper，0翻译成男，1翻译成女
    Handlebars.registerHelper("date",function(value){
        return value.substr(5);
    });
    //将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
    $(rowid).html(myTemplate(data));
}
function loadhandlebarData(url,id) {

    $.getJSON(url, function (data) {
        showHandlebarData(data, id);
    });
    // $.ajax({
    //     //请求方式为get
    //     type: "GET",
    //     //json文件位置
    //     url: url,
    //     //返回数据格式为json
    //     dataType: "json",
    //     //请求成功完成后要执行的方法
    //     success: function (data) {
    //         showHandlebarData(data, id);
    //     },
    // });
}
// 刷新用户信息
function loaduser() {
    $("#login_url").removeAttr("style");
    $("#username").removeAttr("style");

    //set default value
    $("#username").removeClass("display_block");
    if(!$("#username").hasClass("display_none")){
        $("#username").addClass("display_none");
    }

    $.getJSON("http://10.6.217.214/mblog/user/user.json", function (data) {
            var username = "";
            username = data.username;
            if (username != "") {
                $("#login_url").removeClass("display_block");
                $("#login_url").addClass("display_none");

                $("#username").removeClass("display_none");
                $("#username").addClass("display_block");

                $("#username a").html(username);
                $("#mob_login_url"). removeClass("display_block");
                $("#mob_login_url").addClass("display_none");

                $("#mob_username").removeClass("display_none");
                $("#mob_username").addClass("display_block");
                $("#mob_username").html(username);
            }else{
                $("#login_url").removeClass("display_none");
                $("#login_url").addClass("display_block");

                $("#username").removeClass("display_block");
                $("#username").addClass("display_none");

                $("#username a").html(username);

                $("#mob_login_url").removeClass("display_none");
                $("#mob_login_url").addClass("display_block");

                $("#mob_username").removeClass("display_block");
                $("#mob_username").addClass("display_none");
                $("#mob_username").html(username);
            }
        }
    );
}

function getCookie(objname){//获取指定名称的cookie的值
    var username = "";
    var arrstr = document.cookie.split("; ");
    for(var i = 0;i < arrstr.length;i ++){
        var temp = arrstr[i].split("=");
        if(temp[0] == objname){
            username= decodeURIComponent(temp[1]);
        }
    }
    return username;

}
// 刷新用户信息
function loadCookieUser() {
    $("#login_url").removeAttr("style");
    $("#username").removeAttr("style");

    //set default value
    $("#username").removeClass("display_block");
    if(!$("#username").hasClass("display_none")){
        $("#username").addClass("display_none");
    }

            var username = "";
            username = getCookie("yonyou_uname");
            if (username != "") {
                $("#login_url").removeClass("display_block");
                $("#login_url").addClass("display_none");

                $("#username").removeClass("display_none");
                $("#username").addClass("display_block");

                $("#username a").html(username);

                $("#mob_login_url"). removeClass("display_block");
                $("#mob_login_url").addClass("display_none");

                $("#mob_username").removeClass("display_none");
                $("#mob_username").addClass("display_block");
                $("#mob_username").html(username);
            }else{
                $("#login_url").removeClass("display_none");
                $("#login_url").addClass("display_block");

                $("#username").removeClass("display_block");
                $("#username").addClass("display_none");

                $("#username a").html(username);

                $("#mob_login_url").removeClass("display_none");
                $("#mob_login_url").addClass("display_block");

                $("#mob_username").removeClass("display_block");
                $("#mob_username").addClass("display_none");
                $("#mob_username").html(username);
            }

        $("#username a").attr("href","http://euc.yonyoucloud.com/userCenter");
        $("#login_url a").attr("href","http://euc.yonyoucloud.com/cas/login");

}