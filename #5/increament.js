let button = document.getElementById('counterButton')
let number = document.getElementById('clickCounter')
let count = 0
button.addEventListener('click', function(){
   count++
   number.textContent = count
})