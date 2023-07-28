let playButton = document.getElementById('playButton');
let stopButton = document.getElementById('stopButton');

const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime);
oscillator.connect(audioCtx.destination);

function playSound() {
  oscillator.start();
}

playButton.addEventListener('click', playSound);

stopButton.addEventListener('click', () => {
  oscillator.stop();
});