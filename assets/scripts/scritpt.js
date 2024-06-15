


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

