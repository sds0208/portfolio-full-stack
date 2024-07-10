// On page load increment page view
incrementPageView();


// On link click send link text
document.querySelectorAll('a, .experience-caret').forEach(item => {
  item.addEventListener('click', (e) => {
    let dataString;
    if (e.currentTarget.classList.contains('experience-caret')) {
      dataString = `Expand Click - ${item.closest('.experience-block').querySelector('h3').textContent}`;
    } else if (item.textContent === 'View Resume') {
      dataString = `View Resume Click - ${item.closest('.experience-block').querySelector('h3').textContent}`;
    } else {
      dataString = `Link Click - ${item.textContent}`;
    }
    console.log(dataString);
    sendClickData(dataString);
  });
});

async function incrementPageView() {
  const res = await fetch('/analytics/view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ count: 1 })
  });
  console.log(res);
}

async function sendClickData(dataString) {
  console.log(JSON.stringify({ text: dataString }));
  const res = await fetch('/analytics/click', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: dataString })
  });
  console.log(res);
}