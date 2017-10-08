var isGameOver;
var time; //in seconds
var yourLetter;
var currentWord;
var currentIndex;
var Score;
var words = ["gosho","misho","pesho","kamen","atanas","nakata","facebokluk","professor","javascript","coding","fmi","vakavchiev","kinti"];
startNewGame();
setInterval(changeTime,1000); //lower time every second
document.addEventListener('keydown', function(event) {
		yourLetter = String.fromCharCode(event.keyCode).toLowerCase();
		if (yourLetter==Array.from(currentWord)[currentIndex]&&isGameOver==false){
			currentIndex++;
			Score++;
			document.getElementById("score").innerHTML=Score;
			if(currentIndex==currentWord.length){changeWord();currentIndex=0;}
			writeWord();
		}else{
			endGame();
		}
		
});
function endGame(){
	isGameOver = true;
	alert("Game Over! Either time's up, either you entered a wrond letter.");
}
function changeTime(){
	if(isGameOver){
		time=0;
	}else{
		time--;
	}
	if(time<=10){
		document.getElementById("timeLeft").innerHTML="<b style=\"color:red;\">"+time+"</b>";
	}else{
		document.getElementById("timeLeft").innerHTML=time;}
	if(time==0&&GameOver==false){
		endGame();
	}
}
function startNewGame(){
	time = 60;
	document.getElementById("timeLeft").innerHTML=time;
	isGameOver = false;
	yourLetter = '';
	changeWord();
	currentIndex = 0;
	Score = 0;
	document.getElementById("score").innerHTML=Score;
	writeWord();
}
function writeWord(){
	document.getElementById("yourWord").innerHTML="";
	for(var i=0;i<currentWord.length;i++){
				if(i<currentIndex){
				document.getElementById("yourWord").innerHTML+="<span style=\"color:green;\">"+Array.from(currentWord)[i]+"</span>";
				}else{
				document.getElementById("yourWord").innerHTML+="<span style=\"color:white;\">"+Array.from(currentWord)[i]+"</span>";
				}
			}
}
function changeWord(){
	currentWord = words[Math.floor(Math.random()*words.length)];
}	