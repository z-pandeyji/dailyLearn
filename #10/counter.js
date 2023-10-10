let CountText = document.getElementById('countValue');
let increamentBTN = document.getElementById('increament');
let decreamentBTN = document.getElementById('decreament');

let counter = 0;

function increament() {
counter++;
CountText.innerText = counter;
}

function decreament() {
    counter--;
    CountText.innerText = counter;
}


increamentBTN.addEventListener('click', increament);
decreamentBTN.addEventListener('click', decreament)