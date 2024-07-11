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
    console.log(dataString);
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
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  
}

async function sendClickData(dataString) {
  console.log(JSON.stringify({ text: dataString }));
  try {
    const res = await fetch('/analytics/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: dataString })
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}