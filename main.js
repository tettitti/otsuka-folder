		$(document).ready(function(){

			var text=new Array(8);var count=3;

		$(window).keydown(function(e){

			text[6]=text[5];text[5]=text[4];text[4]=text[3];text[3]=text[2];

			text[2]=text[1];text[1]=text[0];text[0]=String.fromCharCode(e.
			
		keyCode);



		if(text[2]=="R" && text[1]=="E" && text[0]=="D")$("body").css("background","red");
		if(text[3]=="B" && text[2]=="L" && text[1]=="U" && text[0]=="E")$("body").css("background","blue");
		if(text[5]=="Y" && text[4]=="E" && text[3]=="L" && text[2]=="L" && text[1]=="O" && text[0]=="W")$("body").css("background","#FFDE55");
		if(text[4]=="B" && text[3]=="L" && text[2]=="A" && text[1]=="C" && text[0]=="K")$("body").css("background","black");
		if(text[3]=="P" && text[2]=="I" && text[1]=="N" && text[0]=="K")$("body").css("background","pink");
		if(text[4]=="G" && text[3]=="R" && text[2]=="E" && text[1]=="E" && text[0]=="N")$("body").css("background","green");
		if(text[3]=="G")if(text[2]=="R")if(text[1]=="A")if(text[0]=="Y")$("body").css("background","gray");
		if(text[3]=="S")if(text[2]=="N")if(text[1]=="O")if(text[0]=="W")$("body").css("background","snow");
		if(text[4]=="W")if(text[3]=="H")if(text[2]=="I")if(text[1]=="T")if(text[0]=="E")$("body").css("background","white");
		if(text[5]=="O")if(text[4]=="R")if(text[3]=="A")if(text[2]=="N")if(text[1]=="G")if(text[0]=="E")$("body").css("background","orange");
		if(text[5]=="S")if(text[4]=="I")if(text[3]=="L")if(text[2]=="V")if(text[1]=="E")if(text[0]=="R")$("body").css("background","silver");
		if(text[4]=="H")if(text[3]=="E")if(text[2]=="L")if(text[1]=="L")if(text[0]=="O")alert("君のハートにチェックメイト♡");
		if(text[3]=="H")if(text[2]=="E")if(text[1]=="L")if(text[0]=="P"){alert("とりあえずすうちゃんのtwitterに飛びますか？");location="https://twitter.com/sumiredooon";}
		if(text[2]=="A")if(text[1]=="S")if(text[0]=="K"){alert("大塚さんに質問しますか？");location="http://ask.fm/otsukasan";}
		if(text[4]=="A" && text[3]=="B" && text[2]=="O" && text[1]=="U" && text[0]=="T")location="about.html";
		if(text[3]=="L")if(text[2]=="I")if(text[1]=="K")if(text[0]=="E")location="like.html";
		if(text[3]=="P" && text[2]=="O" && text[1]=="R" && text[0]=="T")location="portfolio.html";
		if(text[3]=="C" && text[2]=="O" && text[1]=="N" && text[0]=="T")location="contact.html";
		if(text[3]=="M" && text[2]=="E" && text[1]=="S" && text[0]=="S")location="message.html";
		if(text[4]=="T" && text[3]=="W" && text[2]=="E" && text[1]=="E" && text[0]=="T")location="https://twitter.com/family_ldh";
		if(text[3]=="F" && text[2]=="A" && text[1]=="C" && text[0]=="E")location="https://www.facebook.com/profile.php?id=100003212121687";
		if(text[3]=="T" && text[2]=="E" && text[1]=="C" && text[0]=="H")location="http://techlogics.link/";
		if(text[2]=="S" && text[1]=="U" && text[0]=="U")location="https://twitter.com/sumiredooon";




			


		// if(text[2]=="A" && text[1]=="B" && text[0]=="C")$('body').css('background-image','none');

		// if(text[2]=="A" && text[1]=="B" && text[0]=="C")$('body').css('background-image','url("apple3.jpg")';




		if(text[2]=="K" && text[1]=="E" && text[0]=="Y")$("#aaa").css("display","block");
		});

	$("#aaa").click(function(){

		var pw = prompt(" aaa","");

		location.href = pw + "";

		// $("#aaa").css("display","none");

		})


		});