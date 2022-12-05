const firstTeamWins = document.getElementById("firstTeamWinCount");
const firstTeamScore = document.getElementById("firstTeamScore");
const secondTeamWins = document.getElementById("secondTeamWinCount");
const secondTeamScore = document.getElementById("secondTeamScore");

let firstTeam = 0;
let secondTeam = 0;

function addScore(team) {
  if (team === "firstTeam") {
    firstTeam++;
    if (firstTeam % 12 === 0) resetScore();
  } else if (team === "secondTeam") {
    secondTeam++;
    if (secondTeam % 12 === 0) resetScore();
  }
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
  updateData();
}
