let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// 🔊 fake beep sound
function beep(freq = 600, time = 0.1) {
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = freq;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  setTimeout(() => osc.stop(), time * 1000);
}

// 🚨 alarm loop
setInterval(() => {
  beep(800, 0.08);
}, 1200);

// 📳 vibration spam (mobile)
if (navigator.vibrate) {
  setInterval(() => navigator.vibrate(200), 1000);
}
