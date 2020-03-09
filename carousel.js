const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

//Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (size * counter) + 'px)';