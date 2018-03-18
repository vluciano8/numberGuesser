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
