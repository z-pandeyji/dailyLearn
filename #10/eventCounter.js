let CountText = document.getElementById('countValue');
let increamentBTN = document.getElementById('increament');
let decreamentBTN = document.getElementById('decreament');

let ulElements = document.getElementById('list-items');

let counter = 0;

function increament() {
counter++;
CountText.innerText = counter;

//create an Element 
const li = document.createElement('li');
li.setAttribute('data-counter', counter);
if(counter % 2 === 0) {
    li.setAttribute('class', 'red');
} else {
    li.setAttribute('class', 'yellow');
}
li.innerHTML = '<b>Sentence</b>' + counter;
console.log('li', li);
ulElements.appendChild(li);
}

function decreament() {
    counter--;
    CountText.innerText = counter;

    //remove an element
    const li = ulElements.querySelector('[data-counter="'+counter+'"]');
    const number = parseInt(li.getAttribute('data-counter'), 10);
    if(number % 2 === 0) {
        li.remove()
    }
}


increamentBTN.addEventListener('click', increament);
decreamentBTN.addEventListener('click', decreament)