const firstPageNext = document.querySelector('form.signup section a.first-page-proceed');
const secondPagePrev = document.querySelector('form.signup section a.second-page-previous');
const firstPage = document.querySelector('form.signup div.first-page');
const secondPage = document.querySelector('form.signup div.second-page');
const firstPageInputFields = document.querySelectorAll('form.signup div.first-page section li input');
const errorMessageBox = document.querySelector('div.error-message')
const errorMessage = document.querySelector('div.error-message p')

errorMessageBox.style.display = "none";
firstPageNext.addEventListener('click', proceed);
secondPagePrev.addEventListener('click', showFirstPage);

function proceed(){
    const firstPageFilledInputFields = document.querySelectorAll('form.signup div.first-page section li input.not-empty');
    if(firstPageFilledInputFields.length == firstPageInputFields.length){
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    }
    else{
        errorMessage.innerHTML = "Please complete all fields to continue!"
        errorMessageBox.style.display = "grid";
        setTimeout(() => {
            errorMessageBox.style.display = "none";
        }, 3000);
    }
}

function showFirstPage(){
    firstPage.style.display = "block";
    secondPage.style.display = "none";
}