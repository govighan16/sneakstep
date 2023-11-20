const search = document.querySelector('.search-container');
const nav = document.querySelector('.nav');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  nav.classList.remove('active');
};

document.querySelector('.fa-bars').onclick = () => {
  nav.classList.toggle('active');
  search.classList.remove('active');
};

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
  nav.classList.remove('active');
  search.classList.remove('active');
});

const faqs = document.querySelectorAll('.faq-container');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
