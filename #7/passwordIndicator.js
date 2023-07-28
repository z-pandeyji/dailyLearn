function PasswordIndicator() {
    let passwordInput = document.getElementById('password').value;
    let indicatorInput = document.getElementById('strengthIndicator');
    if(passwordInput.length < 4) {
    return  indicatorInput.innerHTML = 'Very Weak';
    }else if(passwordInput.length >= 4 && passwordInput.length <= 7){
    return indicatorInput.innerHTML = 'Weak';
    } else if (passwordInput.length > 8 && passwordInput.length < 11){
    return indicatorInput.innerHTML = 'Medium';
    }else if (passwordInput.length >= 12 && passwordInput.length <= 15){
    return indicatorInput.innerHTML = 'Strong';
    } else if(passwordInput.length > 15){
    return indicatorInput.innerHTML = 'Very Strong';
    }
    }


    