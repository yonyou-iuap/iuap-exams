/**
 * Created by Frank on 2015/6/8.
 */
$.ajaxSetup ({
    cache: false //�ر�AJAX��Ӧ�Ļ���
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
 * ����book�ĺ����� �书�ܣ�
 * 1�� ajax load
 * 2, ��̬����word css
 * 3, ����img lazy load
 * @param book_link
 */
function getBook(book_link){
    $.get(book_link, function(data){
        if ($("[src$='lazyload.js']").length != 0) {//�����lazyload.js��ʹ��
            data = data.replace(/src=/g," class = 'lazy' data-original=");
            data = data + " <script> $(function() {$('img.lazy').lazyload({effect : 'fadeIn'});});</script>";
        }
        $("#info").html(data);
    });


};




/**
 * ����book�ĺ����� �书�ܣ�
 * 1�� ajax load
 * 2, ��̬����word css
 * 3, ����img lazy load
 * @param book_link
 */
function getBook(folder,book_link){

    var book_url = folder

   if(book_link){
       book_url = folder+"/"+ book_link;
    }

    $.get(book_url, function(data){
        if ($("[src$='lazyload.js']").length != 0) {//�����lazyload.js��ʹ��
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
 * ����javadoc����
 * javadoc�д���src����
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
 * �̶���ർ������ ����jquery.pin�� �ú������޸�
 * $("#sidebar").pin({containerSelector: ".container", minWidth: 940, padding: {top: 104, bottom: 10}});
 */

/**
 *
 */
