// SmartQueue AI Prediction Logic (Working MVP)

// average service time per person (minutes)
const SERVICE_TIME = 2;

// AI-like prediction function
function predictWaitTime(queueLength, hour) {
  let timeFactor = 0;

  // peak hour adjustment (AI decision logic)
  if (hour >= 12 && hour <= 14) {
    timeFactor = 10; // lunch peak
  } else if (hour >= 17 && hour <= 19) {
    timeFactor = 8; // evening peak
  }

  const predictedTime = (queueLength * SERVICE_TIME) + timeFactor;
  return predictedTime;
}

module.exports = { predictWaitTime };
