$(window).load(function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);

	/*答题区的背景图相对于body垂直居中*/
	var img_height = $('.img_style').height();
	var img_middle = (availHeight-img_height)/2+'px';
	$('.img_style').css('margin-top',img_middle);

	/*答题区相对于body垂直居中*/
	var Answer_area = $('.Answer_area').height();
	var area_middle = (availHeight-Answer_area)/2+'px';
	$('.Answer_area').css("margin-top",area_middle);

	$("#1 #A").click(function(){
		$(this).parents("#1").hide("slow");
		$('#2').show("6000");
	});

	$("#2 #A").click(function(){
		$(this).parents("#2").hide("slow");
		$('#3').show("6000");
	});
});

window.onresize=function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);

	/*答题区的背景图相对于body垂直居中*/
	var img_height = $('.img_style').height();
	var img_middle = (availHeight-img_height)/2+'px';
	$('.img_style').css('margin-top',img_middle);

	/*答题区相对于body垂直居中*/
	var Answer_area = $('.Answer_area').height();
	var area_middle = (availHeight-Answer_area)/2+'px';
	$('.Answer_area').css("margin-top",area_middle);
}  