// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornimage = document.getElementById("horn-select");
  hornimage.addEventListener("change", addHornImage); //function calling
  document.getElementById("volume").addEventListener("input", addAudioIcon);
  document.querySelector("button").addEventListener("click", () => {
  const audio = document.querySelector("audio");
    audio.play();
});
}

function addHornImage() {
  const horn = document.querySelector("img");
  const hornselect = (document.getElementById("horn-select")).value;
  const audio = document.querySelector("audio");
  if (hornselect === "air-horn") {
    horn.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } else if (hornselect === "car-horn") {
    horn.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } else if (hornselect === "party-horn") {
    horn.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function addAudioIcon() {
  const audio = document.querySelector("audio");
  const audioIcon = document.querySelector("#volume-controls img");
  const audioSelectIcon = parseInt((document.getElementById("volume")).value);

  audio.volume = audioSelectIcon / 100;

  if (audioSelectIcon === 0) {
    audioIcon.src = "assets/icons/volume-level-0.svg";
  }
  else if (audioSelectIcon >= 1 && audioSelectIcon < 33) {
    audioIcon.src = "assets/icons/volume-level-1.svg";
  }
  else if (audioSelectIcon >= 33 && audioSelectIcon < 67) {
    audioIcon.src = "assets/icons/volume-level-2.svg";
  }
  else if (audioSelectIcon >= 67) {
    audioIcon.src = "assets/icons/volume-level-3.svg";
  }
}