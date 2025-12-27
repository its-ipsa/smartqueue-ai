function suggestSlot() {
  // mock real-time inputs
  const queueLength = 12;
  const currentHour = new Date().getHours();

  // AI prediction logic (same as backend for MVP)
  let serviceTime = 2;
  let timeFactor = 0;

  if (currentHour >= 12 && currentHour <= 14) {
    timeFactor = 10;
  } else if (currentHour >= 17 && currentHour <= 19) {
    timeFactor = 8;
  }

  const predictedWait =
    (queueLength * serviceTime) + timeFactor;

  document.getElementById("slot").innerText =
    `Predicted Wait Time: ${predictedWait} minutes
     | Suggested Arrival: ${predictedWait - 5} mins later`;
}

