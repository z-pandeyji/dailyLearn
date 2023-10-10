let heading = document.querySelector('.hello');

heading.innerText ="Pandey ji";

let list = document.querySelectorAll('ul li');

for(let i = 0; i<list.length; i++) {
    const listItems = list[i];
    listItems.innerText = "HELLO"
}