/**
 * Updates the clock element with the current local time.
 */
function updateTime() {
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.innerText = new Date().toLocaleTimeString();
  }
}

// Initial render immediately on script load
updateTime();

// Auto-refresh timer ticking every second (1000ms)
setInterval(updateTime, 1000);

// Attach event listener to manual refresh button if present
document.addEventListener('DOMContentLoaded', () => {
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', updateTime);
  }
});

