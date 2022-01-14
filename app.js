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
  highScore = 0,
  isGameOn = true,
  checkTop = 260,
  checkMarginLeft = 60;

// setInterval(() => {
//   move -= 5;
//   bgContainer.style.marginLeft = `${move}px`;
// }, 50);
// setInterval(() => {
//   bgContainer.innerHTML += `<img src="./images/bg.jpg" alt="" class="bg-img">`;
// }, 200);
// setInterval(() => {
//   bgContainer.removeChild(document.querySelector(".bg-img"));
// }, 220);
// setInterval(() => {
//   score++;
//   labelScore.textContent = `Score : ${score}`;
// }, 300);

let pos = 90;
const getBackToPos = () => {
  playerImage.style.marginLeft = `${pos}px`;
  pos--;

  if (pos >= 60)
    setTimeout(() => {
      getBackToPos();
    }, 4);
  else pos = 90;
};
const makePlayerJumpUp = () => {
  if (checkMarginLeft <= 90) checkMarginLeft++;
  checkTop--;
  playerImage.style.top = `${checkTop}px`;
  playerImage.style.marginLeft = `${checkMarginLeft}px`;
  if (checkTop >= 200)
    setTimeout(() => {
      makePlayerJumpUp();
    }, 2);
};
const makePlayerJumpDown = () => {
  if (checkMarginLeft >= 60) checkMarginLeft--;
  checkTop++;
  playerImage.style.top = `${checkTop}px`;
  playerImage.style.marginLeft = `${checkMarginLeft}px`;
  if (checkTop <= 260)
    setTimeout(() => {
      makePlayerJumpDown();
    }, 4);
};
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    makePlayerJumpUp();
    setTimeout(() => {
      makePlayerJumpDown();
      getBackToPos();
    }, 500);
  }
});
document.body.addEventListener("click", (event) => {
  makePlayerJumpUp();
  setTimeout(() => {
    makePlayerJumpDown();
    getBackToPos();
  }, 500);
});
// setInterval(() => {
//   boxMove -= 2;
//   box.style.marginLeft = `${boxMove}px`;
//   console.log(box.style.marginLeft);
// }, 10);
// setInterval(() => {});
// setInterval(() => {
//   if (boxMove <= 100 && checkTop >= 220) {
//     alert("Game Over, press okay to restart");
//     if (score > highScore) {
//       highScore = score;
//       labelHighScore.textContent = `Highest Score : ${highScore}`;
//     }
//     score = 0;
//   }
//   if (boxMove < 100) boxMove = 600 + Math.floor(Math.random() * 500);
// }, 100);

// bg moving working
const moveBackground = () => {
  setTimeout(() => {
    move -= 5;
    bgContainer.style.marginLeft = `${move}px`;
    setTimeout(() => {
      moveBackground();
    }, 10);
  }, 10);
  // moveBackground();
};
// adding bg image again
const addBackground = () => {
  bgContainer.innerHTML += `<img src="./images/bg.jpg" alt="" class="bg-img">`;
  setTimeout(() => {
    addBackground();
  }, 50);
};
// removing bg image
const removeBackground = () => {
  bgContainer.removeChild(document.querySelector(".bg-img"));
  setTimeout(() => {
    removeBackground();
  }, 70);
};

const updateScore = () => {
  score++;
  labelScore.textContent = `Score : ${score}`;
  setTimeout(() => {
    updateScore();
  }, 200);
};

// moving the box
const moveBox = () => {
  boxMove -= 2;
  box.style.marginLeft = `${boxMove}px`;
  setTimeout(() => {
    moveBox();
  }, 2);
};
const scoreCheck = () => {
  if (boxMove <= 120 && checkTop >= 220) {
    {
      checkTop = 260;
      boxMove = 800 + Math.floor(Math.random() * 500);
      alert("Game Over, press okay to restart");
    }
    if (score > highScore) {
      highScore = score;
      labelHighScore.textContent = `Highest Score : ${highScore}`;
    }
    score = 0;
  }
  if (boxMove < 100) boxMove = 600 + Math.floor(Math.random() * 500);
  setTimeout(() => {
    scoreCheck();
  }, 100);
};
if (isGameOn) {
  moveBackground();
  addBackground();
  removeBackground();
  updateScore();
  moveBox();
  scoreCheck();
}
