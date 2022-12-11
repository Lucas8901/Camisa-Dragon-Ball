const color = document.querySelector('.color');
const colorInput = document.querySelector('.color-input');

colorInput.addEventListener('input', ()=>{
  color.style.backgroundColor = colorInput.value;
})