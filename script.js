"use strict";
// Variables section ------------------------------------------------------------------------------------

let score = document.querySelector(".score");
let defultScore = 20;
let highestScore = document.querySelector(".highest-score");
let defultHighestScore = 0;
let titleGame = document.querySelector(".title-game");
let randomNumber = Math.trunc(Math.random() * 10) + 1;
const checkButton = document.querySelector(".check");
const playAgain = document.querySelector(".play-again");
const toCheck = document.querySelector(".to-check");
const setButton = document.querySelector(".left-btn");
const closeButton = document.querySelector(".x-btn");
const hideDiv = document.querySelector(".hide");
const changeButton = document.querySelector(".btn-change");
const changeInput = document.querySelector("#change-number");
const blackScreen = document.querySelector(".black-screen");

// Variables section ------------------------------------------------------------------------------------

// Game Logic section ------------------------------------------------------------------------------------

console.log(randomNumber);
checkButton.addEventListener("click", function () {
  const inputNumbers = document.querySelector("#number").value;
  toCheck.classList.add("active");
  if (!inputNumbers) {
    titleGame.textContent = "💀 You didn't enter any number";
    defultScore--;
    score.textContent = defultScore;
  } else if (inputNumbers == randomNumber) {
    titleGame.textContent = "Yaaaaay!! you won ✨";
    defultHighestScore++;
    highestScore.textContent = defultHighestScore;
    document.querySelector("body").classList.add("win");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#the-number").textContent = randomNumber;
    randomNumber = Math.trunc(Math.random() * 10) + 1;
    console.log(randomNumber);
  } else if (inputNumbers > randomNumber) {
    titleGame.textContent = "Too high";
    defultScore--;
    score.textContent = defultScore;
    document.querySelector("body").style.backgroundColor = "#F2BE5E";
  } else if (inputNumbers < randomNumber) {
    titleGame.textContent = "Too low";
    defultScore--;
    score.textContent = defultScore;
    document.querySelector("body").style.backgroundColor = "#FC6462";
  }
});
// Game Logic section ------------------------------------------------------------------------------------

// Buttons action section ------------------------------------------------------------------------------------

playAgain.addEventListener("click", function () {
  if (document.querySelector("body").classList.contains("win")) {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#the-number").textContent = "?";
    randomNumber = Math.trunc(Math.random() * 10) + 1;
    titleGame.textContent = "Put a number to play 🤩";
    defultScore = 20;
    score.textContent = defultScore;
    console.log(randomNumber);
  } else {
    titleGame.textContent = "Win first to play again 🙁";
  }
});

setButton.addEventListener("click", function () {
  blackScreen.classList.remove("hidden");
});
closeButton.addEventListener("click", function () {
  blackScreen.classList.add("hidden");
  changeInput.value = "";
});
hideDiv.addEventListener("click", function () {
  blackScreen.classList.add("hidden");
  changeInput.value = "";
});
changeButton.addEventListener("click", function () {
  if (defultHighestScore > 0) {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("#the-number").textContent = "?";
    let changedNumber = Number(changeInput.value);
    randomNumber = Math.trunc(Math.random() * changedNumber) + 1;
    console.log(randomNumber);
  } else {
    changeInput.value = "You need to win at least 1 time 🔴";
    changeInput.style.color = "#E11B07";
  }
});

// Buttons action section ------------------------------------------------------------------------------------
