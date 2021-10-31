function checkAnswer() {
	var answer = document.getElementById("CODEtext").value;
	var anssave = answer;
	answer = "";
	if(anssave == "SQUIDGAME"){
		console.log("unfunny debug");
		document.title = "Green Light, Red Light!"
		var body = document.getElementById("body");
		var audio = new Audio("sound1.mp3");
		audio.play();
		body.style = body.style + "		background: rgb(0,0,0);\n	background: linear-gradient(259deg, rgba(0,0,0,1) 10%, rgba(91,252,69,1) 50%, rgba(0,0,0,1) 90%);";
		alert("this is not funny, please stop.");
	}
	else if (anssave == "HORROR") {
		console.log("spoopi debug");
		document.title = ". . .";
		var body = document.getElementById("body");
		var eye = document.getElementById("eye");
		body.style = body.style + "		background: rgb(0,0,0);\n	background: linear-gradient(259deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%);";
		eye.style = "display: inline;";
		alert("you want horror? YOU GET HORROR!");
	}
};

function part1(){
	alert("L+8XVDH8FWJCV44F9DM4424EGK4KA781");
};
