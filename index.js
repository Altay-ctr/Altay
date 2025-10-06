let counter = document.getElementById("counter");
let body = document.body;

let time = 0; // счётчик секунд
let interval = null;
let speed = 1000; // стандартная скорость (1 секунда)

function formatTime(seconds) {
  let min = String(Math.floor(seconds / 60)).padStart(2, "0");
  let sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function startCounter() {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    time++;
    counter.textContent = formatTime(time);
  }, speed);
}

document.getElementById("speedPlus").addEventListener("click", () => {
  speed = 500; // быстрее
  body.style.backgroundColor = "lightgreen";
  counter.style.color = "lightcoral"; // светло-красный
  startCounter();
});

document.getElementById("speedMinus").addEventListener("click", () => {
  speed = 2000; // медленнее
  body.style.backgroundColor = "lightcoral";
  counter.style.color = "lightgreen";
  startCounter();
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  time = 0;
  counter.textContent = "00:00";
  body.style.backgroundColor = "gray";
  counter.style.color = "black";
  interval = null;
  speed = 1000;
});