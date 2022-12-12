const navbar = document.querySelector('nav.nav');
const banner = document.querySelector('body');
const workPane = document.querySelector('div.our-work');
const workNumbers = document.querySelectorAll('div.our-work ul li button');

var currentValue = 0;
var prevScrollPosition = window.pageYOffset;

for(a =0; a < workNumbers.length; a++){
    workNumbers[a].innerHTML = 0 + "+"
}

//setInterval(findPosition, 1000)
window.addEventListener('scroll', check)
function check(){
    var currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition > currentScrollPosition){
        navbar.classList.add('scrolled-down');
        navbar.classList.remove('scrolled-up');
    }
    else{
        navbar.classList.add('scrolled-up');
        navbar.classList.remove('scrolled-down')
    }
    prevScrollPosition = currentScrollPosition;
}

function numbers(){
    for(a = 0; a < workNumbers.length; a++){
        if(currentValue < workNumbers[a].value){
            currentValue++;
            workNumbers[a].innerHTML = currentValue + '+';
        }
    }
}

setInterval(numbers, 7)