const getReference = selector =>
  document.querySelector(`[data-js="${selector}"]`);

const firstTeamWinsContainer = getReference("first-team-wins");
const firstTeamScoreContainer = getReference("first-team-score");
const secondTeamWinsContainer = getReference("second-team-wins");
const secondTeamScoreContainer = getReference("second-team-score");

const trucoButton = getReference("truco-button");
const resetButton = getReference("reset-button");

const firstTeamAddScoreButton = getReference("first-team-add-score-button");
const firstTeamRemoveScoreButton = getReference(
  "first-team-remove-score-button"
);
const secondTeamAddScoreButton = getReference("second-team-add-score-button");
const secondTeamRemoveScoreButton = getReference(
  "second-team-remove-score-button"
);

const firstTeam = {
  wins: 0,
  score: 0,
};
const secondTeam = {
  wins: 0,
  score: 0,
};

let trucoValue = 1;

const updateData = () => {
  firstTeamScoreContainer.innerHTML = firstTeam.score;
  firstTeamWinsContainer.innerHTML = firstTeam.wins;
  secondTeamScoreContainer.innerHTML = secondTeam.score;
  secondTeamWinsContainer.innerHTML = secondTeam.wins;
};

const resetWins = () => {
  firstTeam.wins = 0;
  secondTeam.wins = 0;
};

const resetScore = () => {
  firstTeam.score = 0;
  secondTeam.score = 0;
};

const resetTruco = () => {
  trucoValue = 1;

  trucoButton.innerHTML = "";
  trucoButton.classList.add("ph-club");
};

const resetGame = () => {
  resetWins();
  resetScore();
  resetTruco();
  updateData();
};

const addScore = team => {
  team.score += trucoValue;

  if (team.score >= 12) {
    team.wins++;
    resetScore();
  }

  resetTruco();
  updateData();
};

const removeScore = team => {
  if (team.score === 0 && team.wins === 0) {
    return;
  }

  team.score--;

  if (team.score < 0) {
    team.wins--;
    team.score = 11;
  }

  updateData();
};

const handleTrucoValueChange = () => {
  if (trucoValue === 1) {
    trucoValue = 3;
    trucoButton.classList.remove("ph-club");
    trucoButton.innerHTML = trucoValue;

    return;
  }

  if (trucoValue < 12) {
    trucoValue += 3;
    trucoButton.innerHTML = trucoValue;

    return;
  }

  if (trucoValue === 12) {
    resetTruco();
  }
};

firstTeamAddScoreButton.addEventListener("click", () => addScore(firstTeam));
secondTeamAddScoreButton.addEventListener("click", () => addScore(secondTeam));

firstTeamRemoveScoreButton.addEventListener("click", () =>
  removeScore(firstTeam)
);
secondTeamRemoveScoreButton.addEventListener("click", () =>
  removeScore(secondTeam)
);

resetButton.addEventListener("click", resetGame);
trucoButton.addEventListener("click", handleTrucoValueChange);
