const slides = document.querySelectorAll('.slide');

setInterval(() => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}, 4000);

const toggler = document.querySelector('.toggler');
const overlay = document.querySelector('.overlay');

toggler.addEventListener('click', () => {
  overlay.classList.toggle('overlay-shadow');
});



window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const text = document.querySelector('.about-wrap');
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    text.classList.add('animate');
    setTimeout(() => text.classList.remove('animate'), 5000);
  }
}
