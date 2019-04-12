var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var random = document.querySelector(".random");

changeBackgroundColor();

function changeBackgroundColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function randomColors() {
  // random code from https://www.geeksforgeeks.org/javascript-generate-random-hex-codes-color/
  // storing all letter and digit combinations
  // for html color code
  var letters = "0123456789ABCDEF";

  // html color code starts with #
  var rdcolor1 = "#";
  var rdcolor2 = "#";

  // generating 6 times as HTML color code consist
  // of 6 letter or digits
  for (var i = 0; i < 6; i++) {
    rdcolor1 += letters[Math.floor(Math.random() * 16)];
    rdcolor2 += letters[Math.floor(Math.random() * 16)];
  }

  color1.value = rdcolor1;
  color2.value = rdcolor2;
  changeBackgroundColor();
}

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);
random.addEventListener("click", randomColors);

// color2.addEventListener("input");
