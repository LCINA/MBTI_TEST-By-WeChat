$(window).load(function(){
	var availHeight = $(document).height() - 20+'px';
	$("body").css("height",availHeight);
});
window.onresize=function(){
	var availHeight = $(document).height();
	$("body").css("height",availHeight);
}  