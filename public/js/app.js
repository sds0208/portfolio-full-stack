document.querySelector('.hamburger')
  .addEventListener('click', (e) => {
    e.currentTarget.closest('nav').classList.toggle('open');
    document.body.classList.toggle('mobile-nav-open');
  });

// Hero typing animation
const fullStr = `Hello! I'm <span class="highlight">Sarah Santa Cruz</span>. <span class="blinking-cursor">|</span>`;
const highlightStr = '<span class="highlight"></span>';
const introStr1 = 'Hello! I\'m ';
const introStr2 = 'Sarah Santa Cruz';
let introStr1Counter = 1;
let introStr2Counter = 1;
let interval;
const introEl = document.querySelector('#hero .intro');

  
interval = setInterval(() => {
  // When string is done, clear the interval
  if (introEl.innerHTML.indexOf(fullStr) > - 1) clearInterval(interval);

  // If first part of string is done
  if (introEl.textContent.includes(`Hello! I'm `)) {

    // Build name section
    // If span hasn't been added, add it
    if (!introEl.querySelector('.highlight')) {
      introEl.querySelector('.blinking-cursor').insertAdjacentHTML('beforebegin', highlightStr);
    
      // If the span has been added
    } else if (introEl.querySelector('.highlight').textContent !== 'Sarah Santa Cruz') {
      
      // add letters one by one
      introEl.innerHTML = `Hello! I'm <span class="highlight">${introStr2.slice(0, introStr2Counter)}</span><span class="blinking-cursor">|</span>`;
      introStr2Counter++;
    
      // If everything is complete add the period and following space
    } else {
      introEl.innerHTML = `Hello! I'm <span class="highlight">Sarah Santa Cruz</span>. <span class="blinking-cursor">|</span>`;
    }
  
    // If first part of string isn't done
  } else {
    
    // Build first part
    introEl.innerHTML = `${introStr1.slice(0, introStr1Counter)}<span class="blinking-cursor">|</span>`;
    introStr1Counter++;
  }
}, 100);

// Experience expand/collapse
document.querySelectorAll('.experience-caret').forEach(item => {
  item.addEventListener('click', (e) => {
    item.closest('.experience-blocks').querySelectorAll('.experience-block')
      .forEach(block => {
        // Collapse all but the clicked block
        if (block !== item.closest('.experience-block')) {
          block.classList.remove('expanded');
        // Toggle expand/collapse state of clicked block
        } else {
          block.classList.toggle('expanded');
        }
    });
    
    // If there's an expanded block add expanded class to parent container
    if (!!document.querySelector('.experience-block.expanded')) {
      item.closest('.experience-blocks').classList.add('expanded');
    // If not, remove expanded class
    } else {
      item.closest('.experience-blocks').classList.remove('expanded');
    }
  });
});