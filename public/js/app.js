document.querySelector('.hamburger')
  .addEventListener('click', (e) => {
    e.currentTarget.closest('nav').classList.toggle('open');
    document.body.classList.toggle('mobile-nav-open');
    // if (!document.querySelector('.mobile-nav-background')) {
    //   document.body.insertAdjacentHTML('afterbegin', '<div class="mobile-nav-background"></div>');
    // } else {
    //   document.querySelector('.mobile-nav-background').remove();
    // }  
  });