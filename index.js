let sub = document.getElementById("submit");
let announce = document.getElementById("ann");
let att = document.getElementById("attempts") ;
let res = document.getElementById("result");
let guessInput = document.getElementById("Myguess");
let playAgainBtn = document.getElementById("play-again");
let minval = document.getElementById("min");
let maxval = document.getElementById("max");
let min = Math.ceil(Math.random() * 100);
let max = Math.ceil(Math.random() * 200 ) + 100;
let answer = Math.ceil(Math.random() * (max - min)) + min;
let attempts = 0;
minval.textContent = min;
maxval.textContent = max;
sub.onclick = function () {
    let guess = Number(guessInput.value);
    if (isNaN(guess)){
        announce.textContent =`Please enter a number`; // للتأكد من ادخال رقم
        guessInput.value = "";
        return;
    }
     else if (guess < min || guess > max){
        announce.textContent =`Please enter a number within the given range`; 
        guessInput.value = "";
        return;
    } else {

        attempts++;// لزيادة عدد المحاولات 
        att.textContent = attempts;
        if (guess <= (answer + 5) && guess > answer) {
               announce.textContent ="almost there!!! just go a little DOWN";  
               guessInput.value = "";
               return;
           }
       else if (guess >= (answer - 5) && guess < answer) {
               announce.textContent ="almost there!!! just go a little UP"; 
               guessInput.value = "";
               return; 
           }
       else if (guess >= (answer - 15) && guess < answer) {
               announce.textContent ="this is a little low"; 
               guessInput.value = "";
               return; 
           }
       else if (guess <= (answer + 15) && guess > answer) {
               announce.textContent ="this is a little high";  
               guessInput.value = "";
               return; 
           }
       else if (guess < answer){
               announce.textContent ="OPPS!! too low , try again"; 
               guessInput.value = ""; 
               return; 
           }
       else if (guess > answer){
               announce.textContent ="OPPS!! too high , try again"; 
               guessInput.value = "";
               return;
           }
       else {
               announce.textContent =`Congrats!! you did it`;
               sub.disabled = true;
               att.textContent = attempts;
               playAgainBtn.style.display = "inline";
               res.textContent = answer;
            //    guessInput.value = "";
           }

           guessInput.value = "";
    }
};

playAgainBtn.onclick = function () {
    // Reset all variables 
    answer  = Math.ceil(Math.random() * (max -min) + min);
    attempts = 0;
    att.textContent = attempts;
    res.textContent = "-";
    announce.textContent = "Make your guess!";
    guessInput.value = "";
    sub.disabled = false;
    playAgainBtn.style.display = "none";
};


