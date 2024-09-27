var buttonList = document.querySelectorAll(".drum");
buttonList.forEach((element) => {
  element.addEventListener("click", clicked);
});

function clicked() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Did not recognize this key pressed: " + keydown);
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(removeClassFunction, 100);

  function removeClassFunction() {
    activeButton.classList.remove("pressed");
  }
}
