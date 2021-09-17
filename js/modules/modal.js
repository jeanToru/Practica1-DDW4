function popUp(modal,open,closeModal){
  modal.classList.add('js__none');

  open.forEach((openModal) => {
    openModal.addEventListener('click',  function () {
      modal.classList.remove('js__none');
    })
  })

  closeModal.addEventListener('click',  function (event) {
    const target = event.target;
    if(target.tagName === "IMG") {
      modal.classList.add('js__none');
    }
  })
}

export default popUp