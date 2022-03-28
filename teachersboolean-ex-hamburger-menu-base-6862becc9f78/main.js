//apertura assegnazione classe active
let menuActive = document.querySelector('.fas.fa-bars');

function myfunction(){
    let menu = document.querySelector('.hamburger-menu');
    console.log(menu)
    menu.classList.add('active')
}

menuActive.addEventListener('click', myfunction);


// chiusura rimozione classe active
let menuClose = document.querySelector('.close');

function myfunction2(){
    let close = document.querySelector('.hamburger-menu');
    console.log(close)
    close.classList.remove('active')
}

menuClose.addEventListener('click', myfunction2);


