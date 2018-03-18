    // game values

let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
    // ui elements
    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');
    // assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;
    // play again event listener
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
        };
    });

    // listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
};
    // check if won
if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');

}else{
    //  wrong number
guessesLeft = guessesLeft - 1;
    if(guessesLeft === 0 ){
    // game over lost
    gameOver(false, `Game Over, you lost. The correct num was ${winningNum}`, 'red');

    }else{    
    // game continues - answer wrong

    //  change border color
    guessInput.style.borderColor = 'red';
    //Clear Input 
    guessInput.value = '';
    // tells user is the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    };
}
});
// GAME OVER FUNCTION
function gameOver (won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // play again
    guessBtn.value = "Play Again";
    guessBtn.className +='play-again';

};
    // function get winning num 
    function getRandomNum(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    // sete message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
