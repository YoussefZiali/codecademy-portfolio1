document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navList = document.querySelector('.nav-list');
    let themBtn = document.querySelector('.theme_button');
    let themeIcon = document.querySelector('#theme-icon');
    let navLink = document.querySelector('.nav-link');

    menuIcon.addEventListener('click', function() {
      navList.classList.toggle('open');
      menuIcon.classList.toggle('bx-x');
    });

    themBtn.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      themeIcon.classList.toggle('bx-sun');

    });
    navLink.forEach(navLink => {
      // Add click event listener to each nav-link
      navLink.addEventListener('click', () => {
          // Toggle the 'open' class on the nav-list
          navList.classList.toggle('open');
          menuIcon.classList.toggle('bx-menuy');
      });
  });
    const scroll = ScrollReveal({
        distance: '40px',
        duration: 2500,
        reset: true
    });
    scroll.reveal('.logo',{delay:200, origin: 'left'});
   // scroll.reveal('.nav-list',{delay:250, origin: 'top'});
    scroll.reveal('.menu_button',{delay:300, origin: 'right'});
    scroll.reveal('.home-text h1',{delay:450, origin: 'bottom'});
    scroll.reveal('.home-text span',{delay:5000, origin: 'left'});
    scroll.reveal('.home-text p',{delay:500, origin: 'left'});
    scroll.reveal('.cv-button',{delay:550, origin: 'bottom'});
    scroll.reveal('.home-image',{delay:500, origin: 'right'});
    scroll.reveal('.share p',{delay:600, origin: 'left'});
    scroll.reveal('.social',{delay:600, origin: 'left'});
    scroll.reveal('.Skills',{delay:600, origin: 'left'});

  });
  