const bgContainer = document.querySelector(".bg-container");
const labelScore = document.querySelector(".score");
const mario = document.querySelector(".player");
const playerImage = document.querySelector(".player-img");
const box = document.querySelector(".box");
const labelHighScore = document.querySelector(".high-score");
let move = 0,
  score = 0,
  check = 0,
  boxMove = 1000,
  jump = 260,
  highScore = 0;

setInterval(() => {
  move -= 5;
  bgContainer.style.marginLeft = `${move}px`;
}, 50);
setInterval(() => {
  bgContainer.innerHTML += `<img src="./images/bg.jpg" alt="" class="bg-img">`;
}, 200);
setInterval(() => {
  bgContainer.removeChild(document.querySelector(".bg-img"));
}, 220);
setInterval(() => {
  score++;
  labelScore.textContent = `Score : ${score}`;
}, 300);

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    jump = 200;
    playerImage.style.top = "200px";
    setTimeout(() => {
      jump = 260;
      playerImage.style.top = "260px";
    }, 500);
  }
});
setInterval(() => {
  boxMove -= 2;
  box.style.marginLeft = `${boxMove}px`;
  console.log(box.style.marginLeft);
}, 10);
setInterval(() => {});
setInterval(() => {
  if (boxMove <= 100 && jump != 200) {
    alert("Game Over, press okay to restart");
    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = `Highest Score : ${highScore}`;
    }
    score = 0;
  }
  if (boxMove < 100) boxMove = 600 + Math.floor(Math.random() * 500);
}, 100);
