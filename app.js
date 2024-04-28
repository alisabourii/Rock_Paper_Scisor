function refresh(){
        window.location.reload();
}
var themCounter = true;
function themChange(){
        if(themCounter == true){
                document.getElementsByTagName("body")[0].style.backgroundColor="Grey";
                themCounter=false;
                document.getElementById("themchange").src="src/img/moon.png";}
        else{
                document.getElementsByTagName("body")[0].style.backgroundColor="white";
                themCounter=true;
                document.getElementById("themchange").src="src/img/sun.png";
        }

}

function userPaper(){
        gamePlay("Paper")
}
function userRock(){
        gamePlay("Rock")
}
function userScissors(){
        gamePlay("Scissors")
}
function userWinner(){
        var sound = new Audio("src/sound/winner.mp3");
        sound.play();
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        }).then(() => jsConfetti.addConfetti())

        
}

var itemsComputer = ["Rock","Scissors", "Paper"]
var userWin = 0;
var equal = 0;
var ComputerWin = 0;
var Round=0;
function gamePlay(user){
        var rnd = Math.floor(Math.random() * 3);
        Round ++;
        
        if(user == "Rock" && itemsComputer[rnd] == "Rock")
                {equal += 1;}
        else if(user == "Rock" && itemsComputer[rnd] == "Scissors")
                {userWin+=1; userWinner();}
        else if(user == "Rock" && itemsComputer[rnd] == "Paper")
                {ComputerWin+=1;}

        else if(user == "Paper" && itemsComputer[rnd] == "Paper")
                {equal += 1;}
        else if(user == "Paper" && itemsComputer[rnd] == "Scissors")
                {ComputerWin+=1;}
        else if(user == "Paper" && itemsComputer[rnd] == "Rock")
                {userWin+=1; userWinner();}

        else if(user == "Scissors" && itemsComputer[rnd] == "Scissors")
                {equal += 1;}
        else if(user == "Scissors" && itemsComputer[rnd] == "Paper")
                {userWin+=1; userWinner();}
        else if(user == "Scissors" && itemsComputer[rnd] == "Rock")
                {ComputerWin+=1;}

        
        document.getElementById("userPuan").innerHTML=userWin;
        document.getElementById("equalPuan").innerHTML=equal;
        document.getElementById("computerPuan").innerHTML=ComputerWin;

        document.getElementById("round").innerText = Round;
        
}
