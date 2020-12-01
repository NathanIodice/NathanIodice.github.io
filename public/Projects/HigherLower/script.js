var current_random_number = document.querySelector(".random_number");
var next_number = document.querySelector(".next_number");
var higher_button = document.querySelector(".higher");
var lower_button = document.querySelector(".lower");
var max_number_input = document.querySelector("#max_input");

var highScore = document.querySelector(".high_score")
var currentScore = document.querySelector(".current_score")

var score = 0;
var highestScore = 0;

//Generate random number from input
var maxNumber = 5;
var guessingTurn = false;

function checkIfHightScore(){
    if (score > highestScore){
        highestScore = score;
        highScore.innerHTML = highestScore;
    }
}

function setCurrent(){

            guessingTurn = true;
            higher_button.innerHTML = "Higher";
            lower_button.innerHTML = "Lower";
            current_random_number.innerHTML = next_number.innerHTML;
            next_number.innerHTML = "???"
        
}

function changeMaxNumber(){
    maxNumber =  parseInt(max_number_input.value);
    randomNumber(current_random_number)
    score = 0;
    currentScore.innerHTML = score;

}

function randomNumber(x){
    var number = 0;
    var random = Math.floor((Math.random() * maxNumber) + 1);
    guessingTurn = true;
    return x.innerHTML = random, number = random;
}

function isWrong(){
    console.log("wrong")
    higher_button.innerHTML = "Wrong";
    lower_button.innerHTML = "Wrong";
    score = 0;
}

function isCorrect(){
    console.log("Correct");
    higher_button.innerHTML = "Correct";
    lower_button.innerHTML = "Correct";
    score++;
    checkIfHightScore();
}

lower_button.addEventListener("click", function(){
    
    if (guessingTurn){
        randomNumber(next_number);
        if (parseInt(current_random_number.innerHTML) > parseInt(next_number.innerHTML)){
            isCorrect();
        }
        else if (parseInt(current_random_number.innerHTML) < parseInt(next_number.innerHTML)){
            isWrong();
        }
        else {
            console.log("same")
            higher_button.innerHTML = "Same";
            lower_button.innerHTML = "Same";
        }
        currentScore.innerHTML = score;
        guessingTurn = false;
        setTimeout(setCurrent, 1000)

    }

})

higher_button.addEventListener("click", function(){
    
    if (guessingTurn){
        randomNumber(next_number);
        if (parseInt(current_random_number.innerHTML) < parseInt(next_number.innerHTML)){
            isCorrect();
        }
        else if (parseInt(current_random_number.innerHTML) > parseInt(next_number.innerHTML)){
            isWrong();
        }
        else {
            console.log("same")
            higher_button.innerHTML = "Same";
            lower_button.innerHTML = "Same";
        }

        currentScore.innerHTML = score;
        guessingTurn = false;
        setTimeout(setCurrent, 1000)

    }

})