// On page load increment page view
incrementPageView();


// On link click send link text
document.querySelectorAll('a, .experience-caret').forEach(item => {
  item.addEventListener('click', (e) => {
    let dataString;
    if (e.currentTarget.classList.contains('experience-caret')) {
      dataString = `Expand Click - ${item.closest('.experience-block').querySelector('h3').textContent.trim()}`;
    } else if (item.textContent.trim() === 'View Resume') {
      dataString = `View Resume Click - ${item.closest('.experience-block').querySelector('h3').textContent.trim()}`;
    } else {
      dataString = `Link Click - ${item.textContent.trim()}`;
    }
    sendClickData(dataString);
  });
});


async function incrementPageView() {
  try {
    const res = await fetch('/analytics/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: 1 })
    });
    return res;
  } catch (error) {
    console.error(error);
  }
  
}

async function sendClickData(dataString) {
  try {
    const res = await fetch('/analytics/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: dataString })
    });
    return res;
  } catch (error) {
    console.error(error);
  }
}