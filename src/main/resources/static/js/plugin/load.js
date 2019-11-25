/**
 * Created by Frank on 2016/3/14.
 */

function loadInfo(fileName, pic) {
    if(typeof(fileName) == "undefined"){
        return;
    }
    var info = $("#info");
    if (info.length > 0) {

        var preload = info.attr("preload");
        if(preload == "n"){
            return;
        }
        loadBook(fileName, pic)
    }
}

function loadBook(fileName, pic){

    var info = $("#info");
    if (info.length > 0) {
        $.get(fileName, function (data) {
            if (typeof(pic) == "undefined") {//要加typeof()
                var path = fileName.substr(0, fileName.lastIndexOf("/"));
                data = data.replace(/src="/g, 'src="' + path + "/");
                info.html(data);
            } else if (pic == 0) {
                info.html(data)
            } else {
                var path = fileName.substr(0, fileName.lastIndexOf("/"));
                data = data.replace(/src="/g, 'src="' + path + "/");
                info.html(data);
            }
            SyntaxHighlighter.highlight();
        });
    }
}

(function ($) {
    /**
     * load header.html and footer.html to the page
     */

    $(document).ready(function () {

        /**
         *
         */
        var book = $("[bookref]");

        var oldFileName = book.attr("bookref");
        loadInfo(oldFileName, book.attr("pic"));

        var info = $("#info");
        if (info.length > 0) {
            var preload = info.attr("preload");
            if (preload == "n") {
                oldFileName = "test";
            }
        }


            $("[bookref]").click(function () {
            var fileName;
            fileName = $(this).attr("bookref");
            $temp = $(this).attr("pic");

            console.log("got $temp:" + $temp);

            var tocidex = fileName.indexOf("#");
            var toc = "";
            console.log("got tocidex:" + tocidex);
            if (tocidex > 0) {
                toc = toc + fileName.substr(tocidex, fileName.length);
                fileName = fileName.substr(0, tocidex);
            }
            console.log("got name:" + fileName);
            if (fileName != oldFileName) {
                $.get(fileName, function (data) {
                    oldFileName = fileName;

                    if (typeof($temp) == "undefined") {//要加typeof()
                        var path = fileName.substr(0, fileName.lastIndexOf("/"));
                        data = data.replace(/src="/g, 'src="' + path + "/");
                        $('#info').html(data);
                    } else if ($temp == 0) {
                        $('#info').html(data)
                    } else {
                        var path = fileName.substr(0, fileName.lastIndexOf("/"));
                        data = data.replace(/src="/g, 'src="' + path + "/");
                        $('#info').html(data);
                    }

                    if ($("[src$='shCore.js']").length != 0) {//
                        SyntaxHighlighter.highlight();
                    }

                    if (toc != "")
                        $("html,body").animate({scrollTop: $(toc).offset().top - 104}, 1000);
                });
            } else {
                if (toc != "")
                    $("html,body").animate({scrollTop: $(toc).offset().top - 104}, 1000);
            }
            console.log("This is the open file name:" + fileName);
        });

        /**
         *
         */
        $(".box-content").hover(function () {
                var _that = jQuery(this);
                var box_img = _that.children("img");
                var height = box_img.parent().height() - box_img.height();
                box_img.css("padding-top", height / 2)
                box_img.animate({top: '-=' + height / 2 + 'px'});
                _that.children('div').show();
            }, function () {
                var _that = jQuery(this);
                var box_img = _that.children("img");
                var height = box_img.parent().height() - box_img.height();
                box_img.css("padding-top", height / 2)
                box_img.animate({top: '+=' + height / 2 + 'px'});
                _that.children('div').hide();
            }
        );

        /**
         * create a tab for main page
         */
            //Default Action
        uapTab();
        function uapTab() {
            $(".tab-pane").hide(); //Hide all content
            $("#myTab label h4:first").addClass("active").show(); //Activate first tab

            $(".tab-pane:first").show(); //Show first tab content

            //On Click Event
            $("#myTab label").click(function () {
                $("#myTab label h4").removeClass("active"); //Remove any "active" class
                $("#myTab label").removeClass("title-bg3"); //Remove any "active" class

                $(this).addClass("active"); //Add "active" class to selected tab
                $(this).addClass("title-bg3"); //Add "active" class to selected tab

                $(".tab-pane").hide(); //Hide all tab content
                var activeTab = $(this).attr("href"); //Find the rel attribute value to identify the active tab + content
                $(activeTab).fadeIn(); //Fade in the active content
                return false;
            });
        }


        /**
         *
         */

        var t_img; // 定时器
        var isLoad = true; // 控制变量

        // 判断图片加载状况，加载完成后回调
        isImgLoad(function(){
            $(".box-img").each(function () {
                var box_img = $(this);
                var height = box_img.parent().height() - box_img.height();
                box_img.css("padding-top", height / 2)
            });
        });

        // 判断图片加载的函数
        function isImgLoad(callback){
            // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
            // 查找所有封面图，迭代处理
            $('.box-img').each(function(){
                // 找到为0就将isLoad设为false，并退出each
                if(this.height === 0){
                    isLoad = false;
                    return false;
                }
            });
            // 为true，没有发现为0的。加载完毕
            if(isLoad){
                clearTimeout(t_img); // 清除定时器
                // 回调函数
                callback();
                // 为false，因为找到了没有加载完成的图，将调用定时器递归
            }else{
                isLoad = true;
                t_img = setTimeout(function(){
                    isImgLoad(callback); // 递归扫描
                },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
            }
        }



        /**
         *
         */
        $(".uap-feature").hover(function () {
            var _item = jQuery(this);
            var maskItem = _item.children(".maskLayer");

            maskItem.css({
                "width": function () {
                    return _item.width();
                },
                "height": function () {
                    return _item.height();
                }
            });
            _item.children(".maskLayer").show();

        }, function () {
            var _item = jQuery(this);
            _item.children(".maskLayer").hide();
        });

        //限制字符个数
        /*
         $(".box-text").each(function(){
         var _item = jQuery(this);
         var pItem=_item.children("p");
         var maxwidth=90;
         if(pItem.text().length>maxwidth){
         pItem.text(pItem.text().substring(0,maxwidth));
         pItem.html(pItem.html()+'...');
         }
         });
         */
        if(!document.getElementsByClassName){
            document.getElementsByClassName = function(className, element){
                var children = (element || document).getElementsByTagName('*');
                var elements = new Array();
                for (var i=0; i<children.length; i++){
                    var child = children[i];
                    var classNames = child.className.split(' ');
                    for (var j=0; j<classNames.length; j++){
                        if (classNames[j] == className){
                            elements.push(child);
                            break;
                        }
                    }
                }
                return elements;
            };
        }

        var x = document.getElementsByClassName("wrap");
        var i;
        for (i = 0; i < x.length; i++) {
            $clamp(x[i], {clamp: 5, useNativeClamp: true});
        }

        if($('.index_banner .flexslider').length >0 ){
            $('.index_banner .flexslider').flexslider({animation:"fade",directionNav:false});$('.partners .flexslider').flexslider({animation:"slide"});
        }

    });

    $(window).scroll(function () {
        if (($(".fixed-header").length > 0)) {
            if ($(".navbar-static-top").length > 0) {
                if (($(this).scrollTop() > 396) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                    $("body").removeClass("fixed-header-off");
                    $(".header-wrapper").css("background-color", " rgba(255, 255, 255, 0.97)");

                } else {
                    $("body").addClass("fixed-header-off");
                    $("body").removeClass("fixed-header-on");
                    $(".header-wrapper").css("background-color", " rgba(0, 0, 0, 0.10)");
                }
            }
        }
        ;
    });


    /**
     *
     */
    if ($("#sidebar").size() > 0) {
        $("#sidebar").pin({containerSelector: ".container", minWidth: 940, padding: {top: 104, bottom: 10}});
    }


})(jQuery);