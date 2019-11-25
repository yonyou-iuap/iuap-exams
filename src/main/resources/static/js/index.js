$(document).ready(function () {
    $.ajax({
      //请求方式为get
      type: "GET",
      async:false,
      //json文件位置
      url: "/page/service/book/product.json",
      //返回数据格式为json
      dataType: "json",
      //请求成功完成后要执行的方法
      success: function (context) {
        showCom(context);
      }
    });

  loadCookieUser();

  function showCom(context) {
    if ($("#menu-tpl").length > 0){
      //用jquery获取模板
      var tpl   =  $("#menu-tpl").html();
      //原生方法
      //var source = document.getElementById('#tpl').innerHTML;
      //预编译模板
      var template = Handlebars.compile(tpl);
    //模拟json数据

    //匹配json内容
      var html = template(context);
      //输入模板
      $("#menu-all").html(html);
    }
  }
  //search part

  document.onkeydown=keyDownSearch;

  function keyDownSearch(e) {
    if ($("button.search").length > 0){
      // 
      var theEvent = e || window.event;
      var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
      if (code == 13) {
        var keyword = $(":text").val();
        location.href = "/page/service/search.html?keyword="+keyword;
        return false;
      }
      return true;
    }
  }
  $("button.search").click(function () {
    var keyword = $(":text").val();
    location.href = "/page/service/search.html?keyword="+keyword;
  });
  var keyword = getUrlParam('keyword');
  console.log(keyword);

  $(":text").val(keyword);

  function getUrlParam(name)
  {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //
    var r = window.location.search.substr(1).match(reg);  //
    if (r!=null) return decodeURI(r[2]); return null; //
  }

//end search part

  $('#J_menu').click(function(e){
    $(this).hasClass('action')?$(this).removeClass('action'):$(this).addClass('action');
    e.stopPropagation();
  });

  $('.goods').click(function(e){
    e.stopPropagation();
  });

  $('body').click(function(){
    $('#J_menu').removeClass('action');
  });

  $( "body" ).on( "click", ".level2,.level3", function(e) {

    if(!$(this).find('ul').length) return e.stopPropagation();

    $(this).hasClass('open')?$(this).removeClass('open'):$(this).addClass('open');
    if($('.menu').height() > $('.content').height()){
      $('.help-body').height($('.menu').height()+50);
    }else{
      $('.help-body').height($('.content').height());
    }
    e.stopPropagation();
  });

  $('.cell-body').each(function(){
    if($(this).height() > 50){
      $(this).addClass('close');
      $(this).append('<div class="more-btn"></div>');
      $(this).find('.more-btn').click(function(){
        var _bb = $(this).parent('.cell-body');
        _bb.hasClass('close')? _bb.removeClass('close'):_bb.addClass('close');
      });
    }
  });


  var timerIndex = 0;
  var helpBodyTimer =setInterval(function(){
    if(timerIndex == 20) return  clearInterval(helpBodyTimer);
    if($('.menu').height() > $('.content').height()){
      $('.help-body').height($('.menu').height()+50);
    }else{
      $('.help-body').height($('.content').height());
    }
    timerIndex++;
  }, 500);






});
