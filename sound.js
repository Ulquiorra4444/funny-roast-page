function beep() {
  let ctx = new AudioContext();
  let osc = ctx.createOscillator();

  osc.type = "square";
  osc.frequency.value = 700;

  osc.connect(ctx.destination);
  osc.start();

  setTimeout(() => osc.stop(), 100);
}

setInterval(beep, 1200);
