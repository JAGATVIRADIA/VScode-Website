const shareButton = document.getElementById('share-profile');
const shareStatus = document.getElementById('share-status');
let statusTimeout;

function announceShareStatus(message) {
  if (!shareStatus) return;

  shareStatus.textContent = message;
  shareStatus.classList.add('is-visible');
  window.clearTimeout(statusTimeout);
  statusTimeout = window.setTimeout(() => {
    shareStatus.classList.remove('is-visible');
  }, 3200);
}

if (shareButton) {
  shareButton.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: 'Jagat Viradia — Author',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        announceShareStatus('Page link copied to clipboard.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Unable to share this page.', error);
        announceShareStatus('Could not share. Copy the page address from your browser.');
      }
    }
  });
}
