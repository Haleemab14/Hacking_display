function $id(id) {
  return document.getElementById(id);
}
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}
const texts = [
  "Access Granted",
  "Hacking Google Account",
  "Getting Data & Password",
  "Stole Cash From Account",
  "Cleaning Up",
  "You Have Been Hacked"
];
function hideAllBackgrounds() {
  document.querySelectorAll(".hacks").forEach(img => img.style.display = "none");
}
function hideAllDots() {
  ["red1", "red2", "red3"].forEach(id => {
    const el = $id(id);
    if (el) el.style.display = "none";
  });
}
async function showStep(stepIndex) {
  // hide old state
  hideAllBackgrounds();
  hideAllDots();
  // show background
  const bg = $id(`hacker${stepIndex}`);
  if (bg) bg.style.display = "block";
  // update text
  const htext = $id("htext");
  if (htext) htext.childNodes[0].nodeValue = texts[stepIndex - 1] + " "; 
  // (keep existing space before red icons)
  // dot sequence
  for (let i = 1; i <= 3; i++) {
    await delay(500); // wait 1s between dots
    const dot = $id(`red${i}`);
    if (dot) dot.style.display = "inline-block";
  }
  // wait a bit with all dots visible before next step
  await delay(1000);
}
async function runSequence() {
  for (let i = 1; i <= texts.length; i++) {
    await showStep(i);
  }
  console.log("Sequence finished");
}
document.addEventListener("DOMContentLoaded", runSequence);


