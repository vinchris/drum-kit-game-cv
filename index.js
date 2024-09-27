var buttonList = document.querySelectorAll(".drum");
/**
 * event listener  (on 'click' event)
 * registered to every single 'drum' class element
 */
buttonList.forEach((element) => {
  element.addEventListener("click", clicked);
});

function clicked() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

/**
 * event listener  (on 'keydown' event)
 * registered on the whole DOM document
 */
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      playSoundAudio("tom-1");
      break;
    case "a":
      playSoundAudio("tom-2");
      break;
    case "s":
      playSoundAudio("tom-3");
      break;
    case "d":
      playSoundAudio("tom-4");
      break;
    case "j":
      playSoundAudio("snare");
      break;
    case "k":
      playSoundAudio("crash");
      break;
    case "l":
      playSoundAudio("kick-bass");
      break;
    default:
      console.log("Did not recognize this key pressed: " + keydown);
      break;
  }
}

function playSoundAudio(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(removeClassFunction, 100);

  function removeClassFunction() {
    activeButton.classList.remove("pressed");
  }
}
