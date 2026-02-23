function cristmasCountDown() {
  const christmasDate = new Date("December 25, 2026 00:00");
  const now = new Date();
  const difference = christmasDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(difference / msInDay);
  const displayHours = Math.floor((difference % msInDay) / msInHour);
  const displayMinutes = Math.floor((difference % msInHour) / msInMinute);
  const displaySeconds = Math.floor((difference % msInMinute) / msInSecond);

  const days = (document.querySelector(".days").textContent = displayDay);
  const hours = (document.querySelector(".hours").textContent = displayHours);
  const minutes = (document.querySelector(".minutes").textContent =
    displayMinutes);
  const seconds = (document.querySelector(".seconds").textContent =
    displaySeconds);

  if (difference <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(idTimer);
    merryChristmas();
  }
}
let idTimer = setInterval(cristmasCountDown, 1000);

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
  heading.classList.add("red");
}

const btn = document.querySelector("#btn_song");
btn.addEventListener("click", function () {
  document.querySelector("#audio").play();
});
