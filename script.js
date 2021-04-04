/**
 * Author : Kean Duque
 * Project : Guessing Number Game
 */

"use strict";

let score = 20;
let $qGuess = document.querySelector(".guess");
let $qScore = document.querySelector(".score");
let $qMsg = document.querySelector(".message");
let $qBody = document.querySelector("body");
let $qNumber = document.querySelector(".number");
let $btnCheck = document.querySelector(".check");
let $btnReset = document.querySelector(".again");

const secretNumber = Math.trunc(Math.random() * 20) + 1;

$btnReset.addEventListener("click", function () {
  resetGame();
});

$btnCheck.addEventListener("click", function (e) {
  const guess = Number($qGuess.value);
  //no input
  if (!guess) {
    $qMsg.textContent = "⛔️ No Number!";
  } // player wins
  else if (guess === secretNumber) {
    $qMsg.textContent = "🎉 Correct Number!";
    $qNumber.textContent = secretNumber;

    $qBody.style.backgroundColor = "#60b347";
    $qNumber.style.width = "30rem";
  } // guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      $qMsg.textContent = "📈 Too high!";
      score--;
      $qScore.textContent = score;
    } else {
      $qMsg.textContent = "🐶You Lost the Game!";
    }
  } // guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      $qMsg.textContent = "📉 Too Low!";
      score--;
      $qScore.textContent = score;
    } else {
      $qMsg.textContent = "🐶You Lost the Game!";
    }
  }

  if ($qMsg.textContent != "Start guessing...") {
    $qMsg.style.animation = "initial";
  }
});

//reset game
const resetGame = () => {
  $qScore.textContent = 20;
  $qNumber.textContent = "?";
  $qBody.style.backgroundColor = "#aa3300";
  $qNumber.style.width = "15rem";
  $qGuess.value = "";
  $qMsg.textContent = "Start guessing...";
  $qMsg.style.animation = "blinker 1s linear infinite";
};
