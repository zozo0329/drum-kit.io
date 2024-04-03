let color = document.querySelectorAll(".drum").length;
let bodyColor = document.querySelector("body");

for (var i = 0; i < color; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    // Hi hat
    case "a":
      var openHhat = new Audio("sounds/open.wav");
      openHhat.play();
      break;
    case "s":
      var closeHhat = new Audio("sounds/close.mp3");
      closeHhat.play();
      break;
    //  KICK / BASS
    case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    //   SNARE
    case "k":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;
    //   TOMS
    case "g":
      var hTom = new Audio("sounds/hi-tom.mp3");
      hTom.play();
      break;
    case "h":
      var mtom = new Audio("sounds/mid-tom.mp3");
      mtom.play();
      break;
    case "j":
      var fTom = new Audio("sounds/floor-tom.mp3");
      fTom.play();
      break;
    //   CYMBALS
    case "q":
      var crash = new Audio("sounds/crash.wav");
      crash.play();
      break;
    case "w":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;
    default:
  }
}
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
