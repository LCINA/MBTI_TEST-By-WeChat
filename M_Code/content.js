var e = 0;
var i = 0;
var s = 0;
var n = 0;
var t = 0;
var f = 0;
var j = 0;
var p = 0;
var question = [];
var answer=new Array(["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""],["",""]);
// ★人的注意力集中所在和精力的来源：外向（E）和内向（I）***************************************************************//

question[0] = "1、你倾向从何处得到力量:"
　　answer[0][0]="（A）别人"
　　answer[0][1]="（B）自己的想法。"

question[1] = "2、当你参加一个社交聚会时，你会:"
　　answer[1][0] ="（A）在夜色很深时，一旦你开始投入，也许就是最晚离开的那一个。"
　　answer[1][1]="（B）在夜晚刚开始的时候，我就疲倦了并且想回家。"

question[2]="3、下列哪一件事听起来比较吸引你？"
　　answer[2][0]="（A）与情人到有很多人且社交活动频繁的地方。"
　　answer[2][1]="（B）待在家中与情人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。"

question[3]="4、在约会中，你通常："
　　answer[3][0]="（A）整体来说很健谈。"
　　answer[3][1]="（B）较安静并保留，直到你觉得舒服。"

question[4]="5、过去，你遇见你大部分的情人是："
　　answer[4][0]="（A）在宴会中、夜总会、工作上、休闲活动中、会议上或当朋友介绍我给他们的朋友时。"
　　answer[4][1]="（B）通过私人的方式，例如个人广告、录影约会，或是由亲密的朋友和家人介绍。"

question[5]="6、你倾向拥有："
　　answer[5][0]="（A）很多认识的人和很亲密的朋友。"
　　answer[5][1]="（B）一些很亲密的朋友和一些认识的人。"

question[6]="7、过去，你的爱人和情人倾向对你说："
　　answer[6][0]="（A）你难道不可以安静一会儿吗？"
　　answer[6][1]="（B）可以请你从你的世界中出来一下吗？"


// ★人获取信息的方式：感知（S）和直觉（N）***************************************************************//

question[7]="8.你倾向通过以下哪种方式收集信息："
　　answer[7][0]="（A）你对有可能发生之事的想像和期望。"
　　answer[7][1]="（B）你对目前状况的实际认知。"

question[8]="9.你倾向相信："
　　answer[8][0]="（A）你的直觉。"
　　answer[8][1]="（B）你直接的观察和现成的经验。"

question[9]="10.当你置身于一段关系中时，你倾向相信："
　　answer[9][0]="（A）永远有进步的空间。"
　　answer[9][1]="（B）若它没有被破坏，不予修补。"

question[10]="11.当你对一个约会觉得放心时，你偏向谈论："
　　answer[10][0]="（A）未来，关于改进或发明事物和生活的种种可能性。例如，你也许会谈论一个新的科学发明，或一个更好的方法来表达你的感受。"
　　answer[10][1]="（B）实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。"

question[11]="12.你是这种人:"
　　answer[11][0]="（A）喜欢先纵观全局。"
　　answer[11][1]="（B）喜欢先掌握细节。"

question[12]="13.你是这类型的人："
　　answer[12][0]="（A）与其活在现实中，不如活在想像里。"
　　answer[12][1]="（B）与其活在想像里，不如活在现实中。"

question[13]="14.你通常："
　　answer[13][0]="（A）偏向于去想像一大堆关于即将来临的约会的事情。"
　　answer[13][1]="（B）偏向于拘谨地想像即将来临的约会，只期待让它自然地发生。"

// ★人作决策的方式：思考（T）和感觉（F）***************************************************************//

question[14]="15.你倾向如此做决定："
　　answer[14][0] = "（A）首先依你的心意，然后依你的逻辑。"
　　answer[14][1] = "（B）首先依你的逻辑，然后依你的心意。"

question[15]="16.你倾向比较能够察觉到："
　　answer[15][0] = "（A）当人们需要情感上的支持时。"
　　answer[15][1] = "（B）当人们不合逻辑时。"

question[16]="17.当和某人分手时："
　　answer[16][0] = "（A）你通常让自己的情绪深陷其中，很难抽身出来。"
　　answer[16][1] = "（B）虽然你觉得受伤，但一旦下定决心，你会直截了当地将过去恋人的影子甩开。"

question[17]="18.当与一个人交往时，你倾向于看重："
　　answer[17][0] = "（A）情感上的相容性：表达爱意和对另一半的需求很敏感。"
　　answer[17][1] = "（B）智慧上的相容性：沟通重要的想法；客观地讨论和辩论事情。"

question[18]="19.当你不同意情人的想法时："
　　answer[18][0] = "（A）你尽可能地避免伤害对方的感情；若是会对对方造成伤害的话，你就不会说。"
　　answer[18][1] = "（B）你通常毫无保留地说话，并且对情人直言不讳，因为对的就是对的。"

question[19]="20.认识你的人倾向形容你为："
　　answer[19][0] = "（A）热情和敏感。"
　　answer[19][1] = "（B）逻辑和明确。"

question[20]="21.你把大部分和别人的相遇视为："
　　answer[20][0] = "（A）友善及重要的。"
　　answer[20][1] = "（B）另有目的。"

// ★人对待外界和处世的方式：计划性（J）和情绪型（P）

question[21]="22.若你有时间和金钱，你的朋友邀请你到国外度假，并且在前一天才通知，你会："
　　answer[21][0] = "（A）必须先检查你的时间表。"
　　answer[21][1] = "（B）立刻收拾行装。"

question[22]="23.在第一次约会中："
　　answer[22][0] = "（A）若你所约的人来迟了，你会很不高兴。"
　　answer[22][1] = "（B）一点儿都不在乎，因为你自己常常迟到。"

question[23]="24.你偏好："
　　answer[23][0] = "（A）事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮。"
　　answer[23][1] = "（B）让约会自然地发生，不做太多事先的计划。"

question[24]="25.你选择的生活充满着："
　　answer[24][0] = "（A）日程表和组织。"
　　answer[24][1] = "（B）自然发生和弹性。"

question[25]="26.哪一项较常见："
　　answer[25][0] = "（A）你准时出席而其他人都迟到。"
　　answer[25][1] = "（B）其他人都准时出席而你迟到。"

question[26]="27.你是这种喜欢……的人："
　　answer[26][0] = "（A）下定决心并且做出最后肯定的结论。"
　　answer[26][1] = "（B）放宽你的选择面并且持续收集信息。"

question[27]="28.你是此类型的人："
　　answer[27][0] = "（A）喜欢在一段时间里专心于一件事情直到完成。"
　　answer[27][1] = "（B）享受同时进行好几件事情。"


$(document).ready(function(){ 
	change();
}); 

//切换题目
var y= 0;
function change()
{
  	$("#question").html(question[y]);
	$("#answer1").html(answer[y][0]);
	$("#answer2").html(answer[y][1]); 

	y++;
	if (y==28) {
		y=27;
	}

}

var z= 0;
function sub(X)
{
	// alert(X);
	if(z>=0&&z<=6)
	{
		switch(X)
		{
			case "A" : e++;
			break;
			case "B" : i++;
			break;
		}
		
	}
	else if (z>=7&&z<=13)
	{
		switch(X)
		{
			case "A" : n++;
			break;
			case "B" : s++;
			break;
		}
	}
	else if (z>=14&&z<=20)
	{
		switch(X)
		{
			case "A" : f++;
			break;
			case "B" : t++;
			break;
		}
	}
	else if (z>=21&&z<=27)
	{
		switch(X)
		{
			case "A" : j++;
			break;
			case "B" : p++;
			break;
		}				
	}
	z++;
	if (z==28) {
		end();
	}	
} 

function end()
{
	var one;
	if(e>i){
		one = "E";
	}
	else
		one = "I";

	var two;
	if(s>n){
		two = "S";
	}
	else
		two = "N";

	var three;
	if(t>f){
		three = "T";
	}
	else
		three = "F";

	var four;
	if(j>p){
		four = "J";
	}
	else
		four = "P";

	if (one+two+three+four=="ISTJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(公务型)：内倾、感觉、思维和判断"+"</span>"+"<br/>"+"适宜职业：会计 侦探 教师 律师"+"<br/>"
		+"想知道关于ENFJ(公务型)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ISFJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(保护者)：内倾、感觉、情感和判断"+"</span>"+"<br/>"+"适宜职业：护士 幼师 律师助理 家政"+"<br/>"
		+"想知道关于ISFJ(保护者)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="INFJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(创造者)：内倾、感觉、情感和判断"+"</span>"+"<br/>"+"适宜职业：作家 艺术顾问 社会学家 心理学家"+"<br/>"
		+"想知道关于INFJ(创造者)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="INTJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(完美主义者)：内倾、直觉、思维和判断"+"</span>"+"<br/>"+"适宜职业：经济学家 企业家 医学专家 网络工程师"+"<br/>"
		+"想知道关于INTJ(完美主义者)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ISTP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(巧匠型)：内倾、感觉、思维和知觉"+"</span>"+"<br/>"+"适宜职业：药剂师 计算机程序员 经济学者 雕塑家"+"<br/>"
		+"想知道关于ISTP(巧匠型)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ISFP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(艺术家型)：内倾、感觉、情感和知觉"+"</span>"+"<br/>"+"适宜职业：时装设计 舞蹈员 美容师 演员"+"<br/>"
		+"想知道关于ISFP(艺术家型)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="INFP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(理想化诗人)：内倾、感觉、情感和知觉"+"</span>"+"<br/>"+"适宜职业：娱乐人士 演员 音乐家 编辑"+"<br/>"
		+"想知道关于INFP(理想化诗人)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="INTP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(学者型)：内倾、直觉、思维和知觉"+"</span>"+"<br/>"+"适宜职业：电脑工程师 天文工作者 物理学家 律师"+"<br/>"
		+"想知道关于INTP(学者型)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ESTP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(乐天派)：外倾、感觉、思维和知觉"+"</span>"+"<br/>"+"适宜职业：调查员 导游 主持人 摄影师"+"<br/>"
		+"想知道关于ESTP(乐天派)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ESFP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(天真的孩子)：外倾、感觉、情感和知觉"+"</span>"+"<br/>"+"适宜职业：演员 作家 导游 幼师"+"<br/>"
		+"想知道关于ESFP(天真的孩子)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ENFP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(公关型)：外倾、直觉、情感和知觉"+"</span>"+"<br/>"+"适宜职业：营销经理 宣传人员 开发总裁 演讲家"+"<br/>"
		+"想知道关于ENFP(公关型)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ENTP") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(大发明家)：外倾、直觉、思维和知觉"+"</span>"+"<br/>"+"适宜职业：政府官员 公关经理 经纪人 投资人"+"<br/>"
		+"想知道关于ENTP(大发明家)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ESTJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(有原则的监督者)：外倾、感觉、思维和判断"+"</span>"+"<br/>"+"适宜职业：安保人员 会计 药品监管 保险"+"<br/>"
		+"想知道关于ESTJ(有原则的监督者)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ESFJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(执政官)：外倾、感觉、情感和判断"+"</span>"+"<br/>"+"适宜职业：政府人员 证监 公关 教师"+"<br/>"
		+"想知道关于ESFJ(执政官)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ENFJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(教育家)：外倾、感觉、情感和判断"+"</span>"+"<br/>"+"适宜职业：作家 制片人 教师 新闻记者"+"<br/>"
		+"想知道关于ENFJ(教育家)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
	else if (one+two+three+four=="ENTJ") {
		$('.result').show("6000");
		$('.result').html("<div class='span_style col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12'>"+"您的性格类型为："
		+"<span style='color:red;'>"+one+two+three+four+"(领袖将军)：外倾、直觉、思维和判断"+"</span>"+"<br/>"+"适宜职业：高管 导演 创业者 经纪人"+"<br/>"
		+"想知道关于ENTJ(领袖将军)的更多内容，请关注黑鲸校园，输入："+"<span style='color:red;'>"+one+two+three+four+"</span>"+"，获取更多内容"+"</div>");
	}
}