const inputFields = document.querySelectorAll('form.signup section li input');
const passwordFields = document.querySelectorAll('form.signup section li input[type = "password"] ');
const showPasswordBtn = document.querySelector('form.signup section input[type = "checkbox"]');

var t = inputFields.length;

function checkInputContent(){
    for(i = 0; i < t; i++){
        if(inputFields[i].value == ""){
            inputFields[i].classList.remove('not-empty')
        }
        else{
            inputFields[i].classList.add('not-empty')
        }
    }
}

setInterval(checkInputContent, 10);

function showPassword(){
    for(a = 0; a < passwordFields.length; a++){
        if(showPasswordBtn.checked == true){
            passwordFields[a].type = "text"
        }
        else{
            passwordFields[a].type = "password";
        }
    }
}

setInterval(showPassword, 10);
