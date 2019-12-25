const keys = document.querySelectorAll('.key');
const key = document.querySelector('.key');
keys.forEach(key => key.addEventListener('click', playSound));

function playSound() {
  const audio = document.querySelector('audio[data-sound="'+ this.dataset.sound +'"]');
  var sounds = document.getElementsByTagName('audio');
  for(i=0; i<sounds.length; i++) sounds[i].pause();
  audio.pause();
  audio.currentTime = 0;
  audio.play();
};



/* function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

  function playSound(event) {
    const audio = document.querySelector('audio[data-key="'+event.keyCode+'"]');
    const key = document.querySelector('div[data-key="'+event.keyCode+'"]');
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
keys.addEventListener('onclick', playSound);
*/