const countdownDisplay = document.getElementById("countdown-display");
const days = document.querySelector("#days-left");
const hours = document.querySelector("#hours-left");
const mins = document.querySelector("#mins-left");
const secs = document.querySelector("#secs-left");

function renderCountdown() {
  const christmas = new Date("2023-12-24T23:59:59");
  const currDate = new Date();
  const gap = christmas.getTime() - currDate.getTime();
  const daysLeft = christmas.getDate() - currDate.getDate();
  const hoursLeft = Math.abs(christmas.getHours() - currDate.getHours());
  const minsLeft = Math.abs(christmas.getMinutes() - currDate.getMinutes());
  const secsLeft = Math.abs(christmas.getSeconds() - currDate.getSeconds());
  //   console.log(daysLeft);
  //   console.log(hoursLeft);
  //   console.log(minsLeft);
  //   console.log(secsLeft);
  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  mins.innerText = minsLeft;
  secs.innerText = secsLeft;
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.

  if (gap < 0) {
    clearInterval(x);
    countdownDisplay.innerText = "Merry Christmas!!";
  }
}

let x = setInterval(renderCountdown, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
