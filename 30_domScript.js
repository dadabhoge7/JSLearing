
console.log(`====> DOM API getElementById() <====`);
const elementTitle = document.getElementById('title');
console.log(elementTitle.innerHTML);

console.log(`====> DOM API getElementsByTagName() <====`);
const elementH2 = document.getElementsByTagName('h2');
console.log(elementH2);
console.log(elementH2[0].innerHTML);
console.log(elementH2[1].innerHTML);

console.log(`====> DOM API getElementsByClassName() <====`);
const elementTechStack = document.getElementsByClassName('techStack');
console.log(elementTechStack);
console.log(elementTechStack[0].innerHTML);
console.log(elementTechStack[1].innerHTML);


console.log(`====> DOM API querySelector() select an element by tagName<====`);
const h2element = document.querySelector('h2');// selecting element by TagName and ElementName
console.log(h2element.innerHTML);

console.log(`====> DOM API querySelector() select an element by ID <====`);
const titleElement = document.querySelector('#title');
console.log(titleElement.innerHTML);

console.log(`====> DOM API querySelector() select an element by class <====`);
const techStackElement = document.querySelector('.techStack');
console.log(techStackElement.innerHTML);

console.log(`====> DOM API querySelectorAll() select with tagName <====`);

const elementAllH2 = document.querySelectorAll('h2');
console.log(elementAllH2);
console.log(elementAllH2[0].innerHTML);
console.log(elementAllH2[1].innerHTML);

console.log(`====> DOM API querySelectorAll() select with className <====`);
const allTechStack = document.querySelectorAll('.techStack');
console.log(allTechStack);
console.log(allTechStack[0].innerHTML);
console.log(allTechStack[1].innerHTML);


console.log(`=============Update and change the text of an element=================`);

const ElementTitle = document.querySelector('#title');
ElementTitle.innerHTML = 'Learning DOM - Document Object Module';

console.log(`=============set attribute=================`);
const profileElement = document.querySelector('#profile');
console.log(profileElement);
console.log(profileElement.innerHTML);
profileElement.setAttribute('href','https://www.linkedin.com/');

const listHeading = document.querySelector('#listHeading');
console.log(listHeading);
listHeading.style.color = 'red';

console.log(`=============crate a new node=================`);
const liElement = document.createElement('li');
const textNode = document.createTextNode('Angular and React');
liElement.appendChild(textNode);
const listElement = document.querySelector('#list');
listElement.appendChild(liElement);
console.log(listElement.innerHTML);

console.log(`=============remove a node=================`);
const listEl = document.querySelector('#list');
const gitEle = document.querySelector('#git');
listEl.removeChild(gitEle);
console.log(listElement.innerHTML);


const elejavaScript = document.querySelector('#javaScript');
elejavaScript.addEventListener('click',()=>{
alert(`click for me `);
elejavaScript.style.color='red';
elejavaScript.style.fontSize = '20px';
});

 
