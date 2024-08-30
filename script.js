let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let btnCheck = document.querySelector(".check");
let inpGuess = document.querySelector(".guess");
let pMessage = document.querySelector(".message");

function afficherMessage(msg) {
  pMessage.textContent = msg;
}

btnCheck.addEventListener("click", () => {
  let guessNumber = Number(inpGuess.value);
  if (!guessNumber) {
    afficherMessage("❌ No Number");
  } else if (guessNumber == secretNumber) {
    afficherMessage("🎉 Correct Number");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber != secretNumber) {
    if (score > 1) {
      afficherMessage(guessNumber < secretNumber ? "📉 Too Low" : "📈Too High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      afficherMessage("🥹 Game over");
      //score--;
      document.querySelector(".score").textContent = 0;
      btnCheck.disabled = true;
    }
  }
});

document.getElementById("btn-again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  afficherMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  inpGuess.value = "";
  btnCheck.disabled = false;
});
