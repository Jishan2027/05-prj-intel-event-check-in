const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greetingEl = document.getElementById("greeting");

const attendeeCountEl = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");

const waterCountEl = document.getElementById("waterCount");
const zeroCountEl = document.getElementById("zeroCount");
const powerCountEl = document.getElementById("powerCount");

const GOAL = 50;
let totalAttendees = 0;

let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

const teamNames = {
  water: "Team Water Wise",
  zero: "Team Net Zero",
  power: "Team Renewables",
};

checkInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = attendeeNameInput.value.trim();
  const selectedTeam = teamSelect.value;

  if (!name || !selectedTeam) {
    return;
  }

  totalAttendees++;
  attendeeCountEl.textContent = totalAttendees;

  if (selectedTeam === "water") {
    waterCount++;
    waterCountEl.textContent = waterCount;
  } else if (selectedTeam === "zero") {
    zeroCount++;
    zeroCountEl.textContent = zeroCount;
  } else if (selectedTeam === "power") {
    powerCount++;
    powerCountEl.textContent = powerCount;
  }

  const percentage = Math.min((totalAttendees / GOAL) * 100, 100);
  progressBar.style.width = `${percentage}%`;

  const fullTeamName = teamNames[selectedTeam];
  greetingEl.textContent = `Welcome, ${name}! Thanks for checking in with ${fullTeamName}.`;
  greetingEl.classList.add("success-message");
  greetingEl.style.display = "block";

  checkInForm.reset();
});
