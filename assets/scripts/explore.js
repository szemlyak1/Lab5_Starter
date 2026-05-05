// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis; 
let voices = [];

function init() {
  // TODO

  const text = document.getElementById('text-to-speak');
  const voice_select = document.getElementById('voice-select');
  const speak_button = document.querySelector('button');
  const smily_face = document.querySelector('img');


  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speak_button.addEventListener('click',(event) => {

    event.preventDefault();

    const text_to_speak = text.value;
    const utterThis = new SpeechSynthesisUtterance(text_to_speak);
    const selectedVoiceName = voice_select.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < voices.length; i++) {

      if (voices[i].name == selectedVoiceName) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener('start', (event) => {
      smily_face.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener('end', (event) => {
      smily_face.src = "assets/images/smiling.png";
    });

    synth.cancel();
    
    synth.speak(utterThis);

  });

}

function populateVoices() {

    const voice_select = document.getElementById('voice-select');

  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {

   const voice_name = document.createElement("option");
   voice_name.textContent = `${voices[i].name} (${voices[i].lang})`;
   voice_name.setAttribute('data-name', voices[i].name);
   voice_select.appendChild(voice_name);
  }

}