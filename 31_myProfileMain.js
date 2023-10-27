
const h3Element = document.querySelector('h3');
h3Element.style.color = 'red';

const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', ()=>{
    h2Element.style.color = 'blue';
});

const listElement = document.querySelector('#list');
const agElement = document.querySelector('#agile');
listElement.removeChild(agElement);