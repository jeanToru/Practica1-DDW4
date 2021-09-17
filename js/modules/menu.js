const btn = document.querySelector('.menu-bottom');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
    menu.style.display = 'block';
})

close.addEventListener('click', () => {
  menu.style.display = 'none';
})
