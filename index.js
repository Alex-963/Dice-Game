
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🏆 Play 1 Wins!🏆";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "🏆 Play 2 Wins!🏆";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}