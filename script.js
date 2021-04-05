/**
 * Author : Kean Duque
 * Project : Guessing Number Game
 */

"use strict";

let score = 20;
let highScore = 0;
let $qGuess = document.querySelector(".guess");
let $qScore = document.querySelector(".score");
let $qMsg = document.querySelector(".message");
let $qBody = document.querySelector("body");
let $qNumber = document.querySelector(".number");
let $qHighScore = document.querySelector(".highscore");
let $btnCheck = document.querySelector(".check");
let $btnReset = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("secretNumber", secretNumber);

let txtGuessHighLow = "";

$qGuess.value = 0;

//displaying message
const displayMessage = message => {
  $qMsg.textContent = message;
};
//button for reseting game
$btnReset.addEventListener("click", function () {
  resetGame();
});
//button for guessing number for the input box
$btnCheck.addEventListener("click", function (e) {
  const guess = Number($qGuess.value);

  //no input
  if (!guess) {
    displayMessage("⛔️ No Number!");
  } // player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    $qNumber.textContent = secretNumber;

    $qBody.style.backgroundColor = "#60b347";
    $qNumber.style.width = "30rem";
    $btnCheck.style.cursor = "default";
    $btnCheck.disabled = true;

    highScore = $qScore.textContent;

    if ($qScore.textContent > $qHighScore.textContent) {
      $qHighScore.textContent = highScore;
    }
  } // when player guessing wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      txtGuessHighLow = guess > secretNumber ? "📈 Too high!" : "📉 Too Low!";
      displayMessage(txtGuessHighLow);
      score--;
      $qScore.textContent = score;
    } else {
      displayMessage("🐶You Lost the Game!");
    }
  }
  if ($qMsg.textContent != "Start guessing...") {
    $qMsg.style.animation = "initial";
  }
});

//reset game
const resetGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log("Reset SecretNumber : ", secretNumber);

  score = 20;
  $qScore.textContent = 20;
  $qNumber.textContent = "?";
  $qGuess.value = "";
  $btnCheck.disabled = false;

  $qBody.style.backgroundColor = "#ff5500";
  $qNumber.style.width = "15rem";
  $qMsg.style.animation = "blinker 1s linear infinite";
  $btnCheck.style.cursor = "pointer";

  displayMessage("Start guessing...");
};
