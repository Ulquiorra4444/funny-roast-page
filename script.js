const status = document.getElementById("status");
const result = document.getElementById("result");

let messages = [
  "Scanning personality database...",
  "Bypassing humor firewall...",
  "Analyzing brain.exe...",
  "Injecting sarcasm module...",
  "Final verdict loading..."
];

let i = 0;

// typing + scan loop
let interval = setInterval(() => {
  if (i < messages.length) {
    status.innerText = messages[i];
    i++;
  }
}, 1200);

// fake vibration (mobile)
if (navigator.vibrate) {
  setInterval(() => navigator.vibrate(150), 1000);
}

// final breach moment
setTimeout(() => {
  clearInterval(interval);

  document.body.style.background = "red";
  status.innerText = "ACCESS COMPROMISED";
  result.innerText = "RESULT: UNFUNNIEST PERSON EVER 💀";

}, 7000);
