const form = document.querySelector('form');
const currencyInput = document.getElementById('currencyInput');
const errorMsg = document.getElementById('errorMsg');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currency = currencyInput.value;
    if (!currency) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Please provide a currency code!';
        return;
    }

    // Make the API call and update the result element
    const API_URL = `https://api.example.com/exchange/${currency}`;
    fetch(API_URL)
        .then(response => response.json())
        .then(({ rate }) => {
            errorMsg.style.display = 'none';
            result.style.display = 'block';
            result.textContent = `Exchange Rate: ${rate}`;
        })
        .catch((error) => {
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'Error: ' + error;
        });
});