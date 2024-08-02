// function toggleLabel() {
//   const btn = document.querySelector("button");
//   if (btn.innerText === "Start") {
//     btn.innerText = "Stop";
//     btn.color = "red";
//   } else {
//     btn.innerText = "Start";
//     btn.color = "green";
//   }
// }
const startStopBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

startStopBtn.addEventListener("click", startStop);

function startStop() {
  if (!isRunning) {
    isRunning = true;
    myInterval = setInterval(updateTime, 1000);
    startStopBtn.textContent = "Stop";
  } else {
    pause();
  }
}

function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  displayTime();
}

function displayTime() {
  const displayTime = document.getElementById("timer");
  const formatTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  displayTime.textContent = formatTime;
}

function pause() {
  clearInterval(myInterval);
  isRunning = false;
  startStopBtn.textContent = "Start";
}

resetBtn.addEventListener("click", () => {
  pause();
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
});
displayTime();
