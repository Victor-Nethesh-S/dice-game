let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
if (randomNumber1 == randomNumber2)
  document.querySelectorAll("h1")[0].innerHTML = "Draw";
else if (randomNumber1 > randomNumber2)
  document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins";
else document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins";
