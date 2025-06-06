function updateCountdown() {
  const targetDate = new Date('August 22, 2025 00:00:00');
  const startDate = new Date('June 6, 2025'); // Today's date
  const now = new Date();

  const difference = targetDate - now;
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  document.getElementById('days').textContent = days;

  // Calculate additional details
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;

  let details = `${weeks} weeks`;
  if (remainingDays > 0) {
    details += ` and ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
  }

  document.getElementById('details').textContent = details;

  // Update current time
  const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  document.getElementById('time').textContent = now.toLocaleTimeString('en-US', timeOptions);
}

// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Add keyboard shortcut to focus on address bar (Ctrl/Cmd + L)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    // This will focus the address bar in most browsers
    window.location.href = 'chrome://newtab/';
  }
});
