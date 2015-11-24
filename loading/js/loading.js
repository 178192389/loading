(function(){
	//载入完成后才会调用此方法，只能有一个load方法
	$(window).load(function(){
	    //载入完成后清空动画和遮罩层
		alert("nihao");
		$('#load').empty();
	});
	
	$(function(){		
		$('.mask').css({
			"width": getWidth(),
			"height": getHeight(),
			"z-index": "888"
		});	
		
		function getWidth(){
			return $(document).width();
		};
		function getHeight(){
			return $(document).height();
		};
	});
})(jQuery)
