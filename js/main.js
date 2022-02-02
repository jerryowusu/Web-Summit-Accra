const openMenu = document.querySelector('.menu');
const closeMenu = document.querySelectorAll('.close-btn');
const mobileMenu = document.querySelector('#navbar');

openMenu.addEventListener('click', () => {
  mobileMenu.style.height = '100%';
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.style.height = '0%';
  });
});

const hideElement = document.querySelectorAll('.hide-cards');
const hideBtn = document.querySelector('.hide-btn');
const showItems = document.querySelector('.show-items');
const icon = document.querySelector('.hide-btn i');
const caretDown = ('fa', 'fa-chevron-down');
const caretUp = ('fa', 'fa-chevron-up');

hideElement.forEach((item) => {
  hideBtn.addEventListener('click', () => {
    if (item.style.visibility === 'visible') {
      item.style.visibility = 'hidden';
      item.style.height = '0';
      showItems.textContent = 'MORE';
      icon.classList.remove(caretUp);
      icon.classList.add(caretDown);
    } else {
      item.style.visibility = 'visible';
      item.style.height = '100%';
      showItems.textContent = 'LESS';
      icon.classList.remove(caretDown);
      icon.classList.add(caretUp);
    }
  });
});