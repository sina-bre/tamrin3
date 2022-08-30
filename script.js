const input = document.querySelector('.input');
const p = document.querySelector('.p');



let highlight = function(){
    let inputValue = input.value;
    let text = p.textContent.replaceAll(inputValue , `<mark>${inputValue}</mark>`);
    console.log(text);
    p.innerHTML = text;
}

input.addEventListener('input' , highlight)