
document.addEventListener("DOMContentLoaded", function () {

    let navMenuItems = document.querySelectorAll('.nav-menu');

    let cardList = document.querySelectorAll('.card .card-children');

    navHover(navMenuItems); //funciona!
    cardHover(cardList); //funciona!
    cardHandleHoveMobile(cardList); //Ta bugando faz 3h   

});


function cardHandleHoveMobile(cardList){    
    cardList.forEach(function(card) {
        card.addEventListener('click', function () {
            
            if (card.style.top === "0") {
                alert("é 0");
                card.style.top = '-100%'
            } else {
                alert("é -100");
                card.style.top = '0'
            }

            alert(card.style.top)
        });
    });
}

function disableOnMobile(){
    let wSize = window.innerWidth;
    let mobileNones = document.querySelectorAll('.mobile-none');

    if (wSize <= 800){
        mobileNones.forEach( item => {
            item.classList.add('d-none');
        });
    }
    else{
        mobileNones.forEach( item => {
            item.classList.remove('d-none');
        });
    }
}

function cardHover(cardList){
    cardList.forEach(function(card) {
        
        card.addEventListener("mouseenter", function () {
            card.style.top = '0';
        });

        card.addEventListener("mouseleave", function () {
            card.style.top = '-100%';
        });
    });
}

function navHover(navMenuItems){
    navMenuItems.forEach(function(navMenu) {
        navMenu.addEventListener("mouseenter", function () {
            navMenu.classList.add('on');
        });

        navMenu.addEventListener("mouseleave", function () {
            navMenu.classList.remove('on');
        });
    });
}


//  EVENTLISTNERS 

window.addEventListener('resize', disableOnMobile);



//  CHAMADAS DE FUNÇÕES

disableOnMobile();

