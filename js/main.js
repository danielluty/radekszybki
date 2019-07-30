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
    });
})();


// Slider
/* Show image when clicked */
function openSlider() {
    document.getElementById('image-slider').style.display = "inline-flex";
    document.body.style.overflow = "hidden";
}

/* Close slider */
function closeSlider() {
    document.getElementById('image-slider').style.display = "none";
    document.body.style.overflow = "auto";
}

let slideIndexJS = 1;

showSlides(slideIndexJS);

function changeSlides(n) {
    showSlides(slideIndexJS += n);
}

function currentSlide(n) {
    showSlides(slideIndexJS = n);
}

function showSlides(n) {
    let i, slidesJS, slidesJSArr;
    slidesJS = document.querySelectorAll('.slides');
    slidesJSArr = Array.from(slidesJS);

    if (n > slidesJS.length) slideIndexJS = 1;

    if (n < 1) slideIndexJS = slidesJS.length;

    for (i = 0; i < slidesJSArr.length; i++) {
        slidesJSArr[i].style.display = "none";
    }

    slidesJSArr[slideIndexJS - 1].style.display = "block";
}