var karateGuys = [
		{"name": "Toyama", "img": "toyama.png", "feat": "Founded Shudokan dojo"}, 
		{"name": "Takahashi", "img": "takahashi.png", "feat": "Brought Shudokan to the USA"}, 
		{"name": "Walter Todd", "img": "waltertodd.png", "feat": "Spread Shudokan in USA"}, 
		{"name": "Morris Mack", "img": "morrismack.png", "feat": "Sensei's first teacher"}, 
		{"name": "Tanaka", "img": "tanaka.png", "feat": "Taught Shudokan in Japan"}, 
		{"name": "Ichikawa", "img": "ichikawa.png", "feat": "Taught Karate in Europe"}
	];

function startGame() {
	var feats = document.getElementById("feats");
	for(var i = 0; i < karateGuys.length; i++) {
		var option = document.createElement("option");
		option.text = karateGuys[i]["feat"]
		feats.add(option);
	}

	newQuestion();
}

function newQuestion() {
	var rand = Math.floor(Math.random() * karateGuys.length);
	document.getElementById("karate").src=karateGuys[rand]["img"];
	document.getElementById("selected").value=rand;
	document.getElementById("name").value="";
}

function submit() {
	var selected = document.getElementById("selected").value;
	var karateGuy = karateGuys[selected];

	var name = document.getElementById("name").value;
	var feats = document.getElementById("feats");
	var feat = feats.options[feats.selectedIndex].value;
	var result = document.getElementById("result");

	var rightName = karateGuy["name"].toUpperCase() == name.toUpperCase();
	var rightFeat = karateGuy["feat"] == feat;
	var scoreChange = 0;
	var resultText = "";

	if (!rightName) {
		resultText = "Ooooooooops, wrong name! Right answer: " + karateGuy["name"] + ". ";
		scoreChange -= 1;
	} else {
		scoreChange += 1;
	}
	
	if (!rightFeat) {
		resultText += "Oh noooooooooo, wrong feat! Right answer: " + karateGuy["feat"] + ". ";
		scoreChange -= 1;
	} else {
		scoreChange += 1;
	}

	if (rightFeat && rightName) {
		resultText = "You are the smartest person alive!";	
	}

	result.innerText = resultText;
	changeScore(scoreChange);
	newQuestion();	
}

function changeScore(change) {
	var score = document.getElementById("score");
	score.innerText = parseInt(score.innerText) + change;
}