 $(function(){
	 // ham xu ly viec thay doi navbar
	 $(window).scroll(function(){
	 	var vitri = $('body').scrollTop();
	 	if (vitri > 50) {
	 		$('.navbar-fixed-top').addClass('thugon');
	 		return false;
	 	} else {
	 		$('.navbar-fixed-top').removeClass('thugon');
	 		return false;
	 	}
	 });

	 //ham xu ly animate khi an vao menu
	 $('#about-btn').click(function(){
	 	$('body').animate({scrollTop:$('#about').offset().top},1000,"easeInOutExpo");
	 	return false;
	 })
	 $('#download-btn').click(function(){
	 	$('body').animate({scrollTop:$('#download').offset().top},1000,"easeInOutExpo");
	 	return false;
	 })
	 $('#contact-btn').click(function(){
	 	$('body').animate({scrollTop:$('#contact').offset().top},1000,"easeInOutExpo");
	 	return false;
	 })
	 $('#troxuong').click(function(){
	 	$('body').animate({scrollTop:$('#about').offset().top},1000,"easeInOutExpo");
	 	return false;
	 })

	 // ham xu ly viec thay doi anh nen cua trang dau tien
	 
	 var chieucao = $(window).height();
	 $('.intro').css({"height":chieucao});
	 var chieurong = $(window).width();
	 $('.intro').css({"width":chieurong});
	 
	 $(window).resize(function(){
	 	var chieucao = $(window).height();
	 	$('.intro').css({"height":chieucao});
	 	var chieurong = $(window).width();
	 	$('.intro').css({"width":chieurong});
	 });
})  
 