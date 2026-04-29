let text = document.getElementById("status");
let messages = [
  "Scanning user...",
  "Analyzing humor level...",
  "Checking personality database...",
  "Loading sarcasm module...",
  "Final verdict incoming..."
];

let i = 0;

setInterval(() => {
  if (i < messages.length) {
    text.innerText = messages[i];
    i++;
  }
}, 1200);

setTimeout(() => {
  document.getElementById("result").innerText =
    "RESULT: UNFUNNIEST PERSON EVER 💀";
}, 7000);
