// Two Ways of doing it first method which is come on my mind and second is more advance way.

// document.getElementById('submitBtn').addEventListener('click', (event)=> {
//     event.preventDefault();
//     let InputText = document.getElementById('nameInput').value;
//     let ErrorMsg = document.getElementById('errorMsg');
//     let successMsg = document.getElementById('successMsg');
//     if(InputText === ''){
//         ErrorMsg.innerText = 'Error! Please type in the field';
//         successMsg.innerText = '';
//     } else {
//         ErrorMsg.innerText = '';
//         successMsg.innerText = 'Success';
//     }
// })

const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  if (nameInput.value.trim() === '') {
    if (!document.getElementById('errorMsg')) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Please enter your name';
      errorMsg.id = 'errorMsg';
      submitBtn.parentNode.insertBefore(errorMsg, submitBtn.nextSibling);
      document.getElementById('successMsg').style.display = 'none';
    }
  } else {
    if (document.getElementById('errorMsg')) {
      document.getElementById('errorMsg').remove();
    }
    document.getElementById('successMsg').style.display = 'block';
  }
});

nameInput.addEventListener('input', () => {
  if (document.getElementById('errorMsg') && nameInput.value.trim() !== '') {
    document.getElementById('errorMsg').remove();
  }
 
});
