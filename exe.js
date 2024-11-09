"use strict";
const timere = document.querySelector(".timer .set-t");
const btncase = document.querySelector(".btn-container .cas");
const title = document.querySelector(".header .title");
let time = 0;
const btnReload = document.querySelector(".header i");
const TimeLogOut = function (sc) {
  const tick = function () {
    // let min = String(Math.trunc(time/60)).padStart(2,0);
    // let sec = String(time % 60).padStart(2,0);
    // let hor = String(Math.trunc(mi / 60)).padStart(2,0);
    // timere.textContent = `${hor}:${min}:${sec} `;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    timere.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (
      (minutes < 30 && minutes >= 25) ||
      (minutes <= 59 && seconds <= 59 && minutes >= 55)
    ) {
      document.querySelector("body").style.background =
        "linear-gradient(to top left , #fe4ef8 14% , #38fff8 100%)";
      title.textContent = "Rest";
    } else {
      document.querySelector("body").style.background =
        "linear-gradient(to top left , #ed7474 14% , #ff0066 100%)";
      title.textContent = "Pomodoro";
    }

    if (sc) {
      time++;
    }
    if (!sc) {
      clearInterval(timer);
    }
  };

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
let stopCase = false;
let timer;
btncase.addEventListener("click", function () {
  stopCase = stopCase ? false : true;
  document.querySelector(".header i").style.fontWeight = "300";
  if (stopCase) {
    btncase.style.backgroundColor = "red";
    btncase.textContent = "Stop";
    timer = TimeLogOut(true);
  } else {
    btncase.style.backgroundColor = "rgb(0, 204, 0)";
    btncase.textContent = "Start";
    clearInterval(timer);
  }
});
btnReload.addEventListener("click", function () {
  btnReload.style.fontWeight = "900";
  time = 0;
  clearInterval(timer);
  timere.textContent = "00:00:00";
  stopCase = false;
  btncase.style.backgroundColor = "rgb(0, 204, 0)";
  btncase.textContent = "Start";
});
