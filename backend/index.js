// SmartQueue Backend Logic (MVP Prototype)

// Simple wait-time prediction logic
function predictWaitTime(queueLength) {
  return queueLength * 2; // minutes
}

module.exports = {
  predictWaitTime
};
