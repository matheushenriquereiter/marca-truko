const getReference = selector =>
  document.querySelector(`[data-js="${selector}"]`);

const firstTeamWins = getReference("first-team-win-count");
const firstTeamScore = getReference("first-team-score");
const secondTeamWins = getReference("second-team-win-count");
const secondTeamScore = getReference("second-team-score");
const trucoMarker = getReference("truco-marker");

let firstTeam = 0;
let secondTeam = 0;
let trucoValue = 1;

function addScore(team) {
  if (team === "firstTeam") {
    firstTeam += trucoValue;
    if (
      Math.floor(firstTeam / 12) > Math.floor((firstTeam - trucoValue) / 12)
    ) {
      resetScore();
    }
    if (firstTeam % 12 === 0) resetScore();
  } else if (team === "secondTeam") {
    secondTeam += trucoValue;
    if (
      Math.floor(secondTeam / 12) > Math.floor((secondTeam - trucoValue) / 12)
    ) {
      resetScore();
    }
    if (secondTeam % 12 === 0) resetScore();
  }
  resetTruco();
  updateData();
}

function removeScore(team) {
  if (team === "firstTeam" && firstTeam > 0) {
    firstTeam--;
  } else if (team === "secondTeam" && secondTeam > 0) {
    secondTeam--;
  }
  updateData();
}

function resetScore() {
  firstTeam -= firstTeam % 12;
  secondTeam -= secondTeam % 12;
}

function updateData() {
  firstTeamScore.innerHTML = firstTeam % 12;
  firstTeamWins.innerHTML = Math.floor(firstTeam / 12);
  secondTeamScore.innerHTML = secondTeam % 12;
  secondTeamWins.innerHTML = Math.floor(secondTeam / 12);
}

function resetData() {
  firstTeam = 0;
  secondTeam = 0;
  trucoValue = 1;
  resetTruco();
  updateData();
}

function addTruco() {
  if (trucoValue === 1) {
    trucoValue = 3;
    trucoMarker.classList.remove("ph-club");
    trucoMarker.innerHTML = trucoValue;
  } else if (trucoValue < 12) {
    trucoValue += 3;
    trucoMarker.innerHTML = trucoValue;
  } else if (trucoValue === 12) {
    resetTruco();
  }
}

function resetTruco() {
  trucoValue = 1;
  trucoMarker.classList.add("ph-club");
  trucoMarker.innerHTML = "";
}
