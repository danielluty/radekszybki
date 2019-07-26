// Navigation Toggler
(() => {

    const toggler = document.querySelector('.toggler'),
          navMenu = document.querySelector('.nav--mobile'),
          closeBtn = document.querySelector('.close-btn');

    toggler.addEventListener('click', () => {
        navMenu.classList.add('show-nav');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-nav');
    })

})();

