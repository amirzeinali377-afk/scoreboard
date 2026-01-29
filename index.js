let homeScore = 0;
let guestScore = 0;

function addScore(score, id) {
  if (id === home) {
    homeScore += score;
    document.getElementById("home").textContent = homeScore;
  } else {
    guestScore += score;
    document.getElementById("guest").textContent = guestScore;
  }
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home").textContent = 0;
  document.getElementById("guest").textContent = 0;
}
