// ======= TABS =======
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.tab;

    // Remove active de todas
    tabContents.forEach(content => content.classList.remove('active'));
    tabLinks.forEach(l => l.classList.remove('active'));

    // Ativa a aba clicada
    document.getElementById(target).classList.add('active');
    link.classList.add('active');
  });
});

// Carrossel de imagens
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
let index = 0;

function updateCarousel() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slideItems.length;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slideItems.length) % slideItems.length;
  updateCarousel();
});


// ======= CARROSSEL DE MÚSICAS EM CARDS =======
const slidesMusic = document.querySelector('.slides-music');
const musicCards = document.querySelectorAll('.music-card');
let indexMusic = 0;

function updateCarouselMusic() {
  slidesMusic.style.transform = `translateX(${-indexMusic * 100}%)`;
}

document.querySelector('.next-music').addEventListener('click', () => {
  indexMusic = (indexMusic + 1) % musicCards.length;
  updateCarouselMusic();
});

document.querySelector('.prev-music').addEventListener('click', () => {
  indexMusic = (indexMusic - 1 + musicCards.length) % musicCards.length;
  updateCarouselMusic();
});

// Passagem automática
setInterval(() => {
  indexMusic = (indexMusic + 1) % musicCards.length;
  updateCarouselMusic();
}, 5000); // 5 segundos
