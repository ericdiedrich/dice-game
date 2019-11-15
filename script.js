let game = document.getElementById('dice1');
let status = document.getElementById('status');
let randomNumber;
let score = 0
let input = document.getElementById("startagain");
let output = document.getElementById("dice-roll")
let scoreRead = document.getElementById("score");

function getRandom(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    if(randomNumber == 1) game.innerHTML = '<img src="dice1.png"/>';
    else if(randomNumber == 2)  game.innerHTML = '<img src="dice2.png"/>';
    else if(randomNumber == 3)  game.innerHTML = '<img src="dice3.png"/>';
    else if(randomNumber == 4)  game.innerHTML = '<img src="dice4.png"/>';
    else if(randomNumber == 5)  game.innerHTML = '<img src="dice5.png"/>';
    else   {game.innerHTML = '<img src="dice6.png"/>';}
    return randomNumber;
}

let updateScore = () => {
    scoreRead.textContent = `score: ${score}`;
}

let getDice = () => {
    let num = getRandom();
    console.log(num)
    score += num
    updateScore();
    console.log(score)
    // loss();
    win();
}

function win(){
    if (randomNumber == 1){
        status.innerHTML = "You lost!"
        score = 0;
        updateScore();
    } 
    else if (score >= 21) {
        status.innerHTML = "You win!";
    } else {
        status.innerHTML = "Keep Rolling";
    }
}

let startagain = () => {
    status.innerHTML = "Restarted"
    game.innerHTML = '<img src="diceface.png"/>';
    console.log('yey');
    score = 0;
    updateScore();
}

input.addEventListener('click', ()=> { startagain()});
output.addEventListener('click', ()=> { 
    getRandom(); 
    getDice();
});
