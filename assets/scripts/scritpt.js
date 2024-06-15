


document.addEventListener("DOMContentLoaded", function () {

    let navMenuItems = document.querySelectorAll('.nav-menu');

    navMenuItems.forEach(function(navMenu) {
        navMenu.addEventListener("mouseenter", function () {
            navMenu.classList.add('on');
        });

        navMenu.addEventListener("mouseleave", function () {
            navMenu.classList.remove('on');
        });
    });
});

window.addEventListener('resize', disableOnMobile);

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

disableOnMobile();

