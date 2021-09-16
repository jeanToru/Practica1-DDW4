const open = document.querySelectorAll('.js-openModal');
const close = document.querySelector('.js--closeModal');
const modal = document.querySelector('.modal');

modal.classList.add('js__none');

open.forEach((openModal) => {
  openModal.addEventListener('click', () => {
    modal.classList.remove('js__none');
  })
})

close.addEventListener('click', (event) => {
  const target = event.target;
  if(target.tagName === "IMG") {
    modal.classList.add('js__none');
  }
})