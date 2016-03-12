$(window).load(function(){
	var availHeight = $(window).height() - 20 + 'px';
	$("body").css("height",availHeight);
	$('.Board').css("height",availHeight-5+'px');


	/*实现div垂直居中*/
	var win = document.getElementById("Board_1");
	var availHeight = document.documentElement.clientHeight;
	var scrollTop = document.documentElement.scrollTop;
	// var scrollLeft = document.documentElement.scrollLeft;
	var height = win.offsetHeight;
	var reTop = scrollTop + (availHeight - height) / 2;
	with (win.style) {
	top = reTop + "px";
	}

	/*实现半圆字体水平居中*/
	var quartercircle_width = $('#quartercircle').width();
	var span_width = $('.logo_style').width();
	var center_width = (quartercircle_width - span_width)/2 + 'px';
	$('.logo_style').css("margin-left",center_width);

});

window.onresize=function(){
	var availHeight = $(window).height();
	$("body").css("height",availHeight);
}  