const name = "gülü";
document.getElementById("user").innerText = name;
let status = document.getElementById("status");
let result = document.getElementById("result");

let messages = [
  "Scanning device files...",
  "Bypassing security layer...",
  "Injecting system script...",
  "Accessing user profile...",
  "Uploading data...",
  "Finalizing breach..."
];

let i = 0;

// scan loop + sound sync
let scan = setInterval(() => {
  if (i < messages.length) {
    status.innerText = messages[i];

    // extra panic beep
    let beepEvent = new Event("beep");
    document.dispatchEvent(beepEvent);

    i++;
  }
}, 1200);

// fake screen flicker
setInterval(() => {
  document.body.style.background =
    document.body.style.background === "black" ? "#2a0000" : "black";
}, 250);

// FINAL TAKEOVER
setTimeout(() => {
  clearInterval(scan);

  document.body.style.background = "red";

  status.innerText = "SYSTEM COMPROMISED";
  result.innerText = "DEVICE CONTROL TRANSFERRED 💀";

  // panic burst sound
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      let ctx = new AudioContext();
      let osc = ctx.createOscillator();
      osc.frequency.value = 1000 + i * 200;
      osc.connect(ctx.destination);
      osc.start();
      setTimeout(() => osc.stop(), 100);
    }, i * 150);
  }

}, 8000);

// fake repair button (makes it worse 😭)
function fakeFix() {
  result.innerText = "ERROR: SYSTEM CORRUPTION INCREASING...";
  document.body.style.transform = "scale(1.02)";
}
