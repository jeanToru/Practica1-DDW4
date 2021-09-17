function displayMenu (btn,menu,close){
  btn.addEventListener('click', () => {
    menu.style.display = 'block';
  })
  
  close.addEventListener('click', () => {
    menu.style.display = 'none';
  })
  
}

export {displayMenu}