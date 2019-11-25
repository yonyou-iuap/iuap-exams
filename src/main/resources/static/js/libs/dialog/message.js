
+function ($) {
  'use strict';
  $.showMessage = function(op) {
        var msgdiv = $('<div class="alert alert-'+op.type+' alert-dismissible"></div>');
        var closebtn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        msgdiv.append(closebtn).append(op.msg);
        
        msgdiv.css({'position':'fixed', 'display':'block'});
        if(op.pos) {
          if(op.pos.top && op.pos.left) {
            msgdiv.css({'top':op.pos.top, 'left':op.pos.left});
          } else if(op.pos.top && op.pos.right) {
            msgdiv.css({'top':op.pos.top, 'right':op.pos.right});
          } else if(op.pos.bottom && op.pos.left) {
            msgdiv.css({'bottom':op.pos.bottom, 'left':op.pos.left});
          } else if(op.pos.bottom && op.pos.right) {
            msgdiv.css({'bottom':op.pos.bottom, 'right':op.pos.right});
          } else if(op.pos.top) {
            msgdiv.css({'left':op.pos.left, 'top':10});
          } else if(op.pos.bottom) {
            msgdiv.css({'bottom':op.pos.bottom, 'left':10});
          } else if(op.pos.left) {
            msgdiv.css({'left':op.pos.left, 'top':10});
          } else if(op.pos.right) {
            msgdiv.css({'right':op.pos.right, 'top':10});
          }
        } else {
          msgdiv.css({'bottom':10, 'right':10});
        }
        msgdiv.css('z-index',99);
        setTimeout(function() {
          msgdiv.fadeOut('slow');
        }, 3000);

        $(document.body).append(msgdiv);
    }
 $.dialog = function(op) {
      	var msgdiv = $('<div class="move-dialog "><div class="move-alert alert alert-'+op.type+' alert-dismissible"></div></div>');
        var closebtn = $('<button type="button" class="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button>');
        var titlediv = $('<h4>'+trans('dialog.info_dialog', '提示窗口')+'</h4>');
        if(op.url){
         var contentdiv = $('<p class="dialog_p"><iframe class="dialog_iframe" src='+op.url+'></iframe></p>')
        }else{
         var contentdiv = $('<p style="position: absolute;top: 50px;bottom: 20px;overflow: auto;left: 30px;right: 25px;"></p>')         
         contentdiv.append(op.msg)
        
        }
       	
        var btndiv,movable,mouseX_down,mouseY_down,mouseX_move,mouseY_move,diawidth,diaheight,tmpmove;
     
        

		if(op.width){
       		msgdiv.css({width:op.width})
	    }
	    if(op.height){
	       		msgdiv.css({height:op.height})
	    }
        msgdiv.find(".alert").append(closebtn).append(titlediv).append(contentdiv).append(btndiv)
		msgdiv.wrap("<div style='padding:5px'></div>");
        if(op.backdrop) {
          //添加遮罩层
          $(document.body).append('<div class="alert-backdrop" role="alert-dialog-backdrop"></div>');
          msgdiv.on('close.bs.alert', function(e) {
          
             $('.alert-backdrop[role="alert-dialog-backdrop"]').remove();
          });
        }
        

        msgdiv.find('[data-role="okbtn"]').on('click.alert.ok', op.okfn);
        
        if(op.cancelfn && typeof op.cancelfn == 'function'){
        	
           msgdiv.find('[data-role="cancelbtn"]').on('click', op.cancelfn);
           msgdiv.find('[aria-hidden="true"]').on('click', op.cancelfn);
        	
        }
       

        msgdiv.css('z-index',99);
       
        $(document.body).append(msgdiv);
		 diawidth = msgdiv[0].offsetWidth,diaheight = msgdiv[0].offsetHeight;
		msgdiv_resize()
		closebtn.on("click",function(){
        		var tmp;
			    (tmp = msgdiv).length && tmp.remove();
			    (tmp = $('.alert-backdrop')).length && tmp.remove();
        }) 
		if(op.movable){								
        	msgdiv.on("mousedown",function(e){
        		
	        	mouseX_down = e.clientX - msgdiv.position().left 
	        	mouseY_down = e.clientY - msgdiv.position().top
				//调整同时调整宽度高度
				if(mouseX_move < 11 && mouseY_move < 12){
	    		//左上角
	    			
					msgdiv_change()
	    			movable = 9;
	    			msgdiv.css({cursor: "se-resize"})
	    		
	    		}else if(mouseX_move > (diawidth - 20)  && mouseY_move > (diaheight- 10)){
	    		//右下角
	    			
					msgdiv_change()
	    			movable = 8;
	    			msgdiv.css({cursor: "se-resize"})
	    		}else if(mouseX_move < 11 && mouseY_move > (diaheight- 10)){
	    		//左下角
	    			
					msgdiv_change()
	    			movable = 7;
	    			msgdiv.css({cursor: "ne-resize"})
	    		}else if( mouseX_move > (diawidth - 20) && mouseY_move < 12 ){
	    		//右上角
	    			
					msgdiv_change()
	    			movable = 6;
	    			msgdiv.css({cursor: "ne-resize"})
	    		//调整窗口宽度	
	    		}else if(mouseX_move < 12 ){
					
					msgdiv_change()
					movable = 5;
					msgdiv.css({cursor: "e-resize"})
	    		
	    		}else if(mouseX_move > (diawidth - 20)){
	    			
					msgdiv_change()
					movable = 4;
					msgdiv.css({cursor: "e-resize"})
	    		//调整窗口高度	
	    		}else if(mouseY_move < 11 ){
	    			
	    			movable = 3;
	    			msgdiv_change()
	    			msgdiv.css({cursor: "n-resize"})
	    		
	    		}else if(mouseY_move > (diaheight- 10) ){
	    			
	    			movable = 2;
	    			msgdiv_change()
	    			msgdiv.css({cursor: "n-resize"})
	    		//移动窗口	
	    		}else if(e.target.nodeName == 'H4'){
	    			movable = 1;
	    			msgdiv_move();
	    			msgdiv.css({cursor: "auto"})
	    		}
        		
        	})
        	$(document).on("mousemove",function(e){
        		mouseX_move = (e.clientX - msgdiv.position().left)
        		mouseY_move = (e.clientY - msgdiv.position().top)
        		if(movable == 1){       			
	        		msgdiv.css({left:e.clientX-mouseX_down,top:e.clientY-mouseY_down,cursor: "all-scroll"})
	        		return
        		}else if(movable == 2){
        			msgdiv.css({bottom:window.innerHeight - e.clientY -20 })        			
	        		return
        		}else if(movable == 3){
        			  msgdiv.css({top:e.clientY -20 })   			
	        		return
        		}else if(movable == 4){
        			
        			msgdiv.css({right:window.innerWidth- e.clientX -20 })   
	        		return
	        	}else if(movable == 5){
        			msgdiv.css({left:e.clientX -20 })
	        		return
        		}else if(movable == 6){
        			msgdiv.css({top:e.clientY -20,right:window.innerWidth- e.clientX -20 })  
	        		return
				}else if(movable == 7){
        			msgdiv.css({left:e.clientX -20,bottom:window.innerHeight - e.clientY -20 })  
	        		return
				}else if(movable == 8){
        			msgdiv.css({bottom:window.innerHeight - e.clientY -20,right:window.innerWidth- e.clientX -20 })  
	        		return
        		}else if(movable == 9){
        			msgdiv.css({top:e.clientY -20,left:e.clientX -20 })  
	        		return

        		}else{
        			if((mouseX_move < 11 && mouseY_move < 12)||(mouseX_move > (diawidth - 20)  && mouseY_move > (diaheight- 10)) ){
	        			msgdiv.css({cursor: "se-resize"})
	        		}else if((mouseX_move < 11 && mouseY_move > (diaheight- 10))||(mouseX_move > (diawidth - 20)  && mouseY_move < 12) ){
	        			msgdiv.css({cursor: "ne-resize"})
	        		}else if( mouseX_move < 12 || mouseX_move > (diawidth - 20) ){
        				msgdiv.css({cursor: "e-resize"})
	        		}else if(mouseY_move < 11 || mouseY_move > (diaheight- 10) ){
	        			msgdiv.css({cursor: "n-resize"})
	        		}else {
	        			msgdiv.css({cursor: "auto"})
	        		}
        		}
        	})
        	$(document).on("mouseup",function(){
        		
        		movable = false;
        		msgdiv.css({cursor: "auto"});
        		diawidth = msgdiv[0].offsetWidth,diaheight = msgdiv[0].offsetHeight;
        	})
        
        } 
		function msgdiv_resize(){
			msgdiv.css({margin:"0px",
				left:(window.innerWidth?window.innerWidth:document.body.clientWidth- diawidth)/2, 
				top:(window.innerHeight?window.innerHeight:document.body.clientHeight - diaheight)/2
			})
		}
		function msgdiv_move(){
			msgdiv.css({width:msgdiv[0].offsetWidth,height:msgdiv[0].offsetHeight})
		}
		function msgdiv_change(){
			msgdiv.css({width:"auto",height:"auto",
						left:msgdiv.offset().left, 
						top:msgdiv.offset().top,
						right:window.innerWidth- msgdiv.offset().left - diawidth, 
						bottom:window.innerHeight - msgdiv.offset().top - diaheight
			})
		}
    }
 $.showMessageDialog = function(op) { 
 	
 	if(op.type){
 		var msgdiv = $('<div class="alert alert-'+op.type+' alert-dismissible alert-dialog"></div>');
 	}else{
 		op.type = "warning"
 		var msgdiv = $('<div class="alert alert-'+op.type+' alert-dismissible alert-dialog"></div>');
 	}  
    var closebtn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    if(op.title){
    var titlediv = $('<h4>'+op.title+'</h4>');	
    }else{
    var titlediv = $('<h4>提示</h4>');		
    }
    
    var contentdiv = $('<div class="alert-content"><p>'+op.msg+'</p></div>')
    var btndiv;
    if(op.type == 'danger' || op.type == 'warning') {
      btndiv = $('<div class="alert-dialog-footer"><div class="col-md-4 diag_detail" ></div><div class="col-md-4" ><button type="button" data-role="okbtn" data-dismiss="alert" class="btn btn-danger btn-block">确定</button></div><div class="col-md-4"><button type="button" data-dismiss="alert" data-role="cancelbtn" class="btn btn-default btn-block">取消</button></div></div>');
    } else {
      btndiv = $('<div class="alert-dialog-footer"><div class="col-md-4"  ></div><div class="col-md-4 diag_detail" ></div><div class="col-md-4" ><button type="button" data-role="okbtn" data-dismiss="alert" class="btn btn-danger btn-block">确定</button></div>');
    }
    
	
    msgdiv.append(closebtn).append(titlediv).append(contentdiv).append(btndiv);
    if(op.width){
       		msgdiv.css({width:op.width})
    }
    if(op.height){
       		msgdiv.css({height:op.height})
    }
   
	if(op.detail){
			
		$(msgdiv).find(".diag_detail").append('<button type="button"  class="btn btn-block">详细</button>')
		msgdiv.on("click",".diag_detail",function(){
			if($(".detail_p").length > 0){
				$(".detail_p").remove();
			}else{	
				msgdiv.append("<p class='detail_p'>"+op.detail+"</p>")
			}
		})
	}
    if(op.backdrop) {
      //添加遮罩层
      $(document.body).append('<div class="alert-backdrop" role="alert-dialog-backdrop"></div>');
      msgdiv.on('close.bs.alert', function() {
         $('.alert-backdrop[role="alert-dialog-backdrop"]').remove();
      });
    }

    msgdiv.find('[data-role="okbtn"]').on('click.alert.ok', op.okfn);
    
    if(op.cancelfn && typeof op.cancelfn == 'function'){
    	
       msgdiv.find('[data-role="cancelbtn"]').on('click', op.cancelfn);
       msgdiv.find('[aria-hidden="true"]').on('click', op.cancelfn);
    	
    }
   

    msgdiv.css('z-index',99);
    function msgdiv_resize(){
		msgdiv.css({margin:"0px",
			left:(window.innerWidth?window.innerWidth:document.body.clientWidth- diawidth)/2, 
			top:(window.innerHeight?window.innerHeight:document.body.clientHeight - diaheight)/2
		})
	}
    $(document.body).append(msgdiv);
     var diawidth = msgdiv[0].offsetWidth,diaheight = msgdiv[0].offsetHeight;
   
    msgdiv_resize()

}

    $.showWaiting = function(op) {
      $(document.body).append('<div class="alert alert-waiting"><i class="fa fa-spinner fa-spin"></i></div>')
                      .append('<div class="alert-backdrop" role="waiting-backdrop"></div>');
    }

    $.removeWaiting = function() {
      var tmp;
      (tmp = $('.alert.alert-waiting')).length && tmp.remove();
      (tmp = $('.alert-backdrop[role="waiting-backdrop"]')).length && tmp.remove();
    }
		$.removeAlert = function(){
			 var tmp;
      (tmp = $('.alert')).length && tmp.remove();
      (tmp = $('.alert-backdrop')).length && tmp.remove();      
      (tmp = $('.move-dialog ')).length && tmp.remove();
    
		}

}(jQuery);




