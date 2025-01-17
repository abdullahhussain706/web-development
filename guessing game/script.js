let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=0;

function checkGuess()
{
    let guess=document.querySelector("#guessInput").value;
    document.querySelector(".attempt").innerHTML=attempts;
    attempts++;

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = '⛔ Please enter a number between 1 and 100!';
    } else if (guess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        message.style.color = 'green';
    } else if (guess < randomNumber) {
        message.textContent = '📉 Too low! Try again.';
        message.style.color = 'orange';
    } else {
        message.textContent = '📈 Too high! Try again.';
        message.style.color = 'orange';
    }
}

document.querySelector("#resetButton").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.querySelector("#guessInput").value = '';
    document.querySelector(".attempt").innerHTML = '';
    document.querySelector("#message").textContent = '';
});