/**
 * Created by Frank on 2015/6/8.
 */
$.ajaxSetup ({
    cache: false //关闭AJAX相应的缓存
});
/**
 * get header and footer the pages
 * @type {string}
 */
    /**
var header_url = "/header.html";
var footer_url = "/footer.html";
$.get(header_url, function (data) {
    data = data.slice(data.indexOf('<body>') + 6, data.indexOf('</body>'));
    $("#header").html(data);
});

$.get(footer_url, function (data) {
    data = data.slice(data.indexOf('<body>') + 6, data.indexOf('</body>'));
    $("#footer").html(data);
});
*/

/**
 * 调用book的函数， 其功能：
 * 1， ajax load
 * 2, 动态加载word css
 * 3, 调用img lazy load
 * @param book_link
 */
function getBook(book_link){
    $.get(book_link, function(data){
        if ($("[src$='lazyload.js']").length != 0) {//如果有lazyload.js则使用
            data = data.replace(/src=/g," class = 'lazy' data-original=");
            data = data + " <script> $(function() {$('img.lazy').lazyload({effect : 'fadeIn'});});</script>";
        }
        $("#info").html(data);
    });


};




/**
 * 调用book的函数， 其功能：
 * 1， ajax load
 * 2, 动态加载word css
 * 3, 调用img lazy load
 * @param book_link
 */
function getBook(folder,book_link){

    var book_url = folder

   if(book_link){
       book_url = folder+"/"+ book_link;
    }

    $.get(book_url, function(data){
        if ($("[src$='lazyload.js']").length != 0) {//如果有lazyload.js则使用
            if(book_link) {
                data = data.replace(/src="/g, 'src="' + folder + "/");
            }
            data = data.replace(/src=/g," class = 'lazy' data-original=");
            data = data + " <script> $(function() {$('img.lazy').lazyload({effect : 'fadeIn'});});</script>";
        }
        $("#info").html(data);
    });

};
/**
 * 调用javadoc函数
 * javadoc中存在src函数
 */
function getJavadoc(book_link){
    $.get(book_link, function(data){
        $("#info").html(data);
    });

};

$(document).ready(function () {
   if( $("#info")){
       //getBook("info.html");
    }


    $(".col-xs-3.col-sm-9 > ul > li > a").click(function () {

           // $(".col-xs-3.col-sm-9 > ul > li > a").removeClass("active");
          //  $(this).addClass("active"); //Add "active" class to selected tab

        }
    );

});

/**
 * 固定左侧导航栏， 依赖jquery.pin， 该函数有修改
 * $("#sidebar").pin({containerSelector: ".container", minWidth: 940, padding: {top: 104, bottom: 10}});
 */

/**
 *
 */
