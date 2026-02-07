let timeRemaining = 0;
let timerId = null;

function updateDisplay() {
 const heading = document.getElementById("timeRemaining");

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

    heading.innerText = `Time Remaining: ${mm}:${ss}`;
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const seconds = Number(input.value);

  if (isNaN(seconds) || seconds <= 0) return;

  timeRemaining = seconds;
  updateDisplay();

  window.clearInterval(timerId);

  timerId = window.setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining <= 0) {
      window.clearInterval(timerId);
      timeRemaining = 0;
      updateDisplay();
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stopAlarm").addEventListener("click", () => {
    pauseAlarm();
   });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;