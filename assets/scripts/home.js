

function changePosition(event) {
    event.preventDefault();

    let cardChildren = event.currentTarget.querySelector('.card-children');

    if (cardChildren.style.top === '-100%') {
        cardChildren.style.top = '0';
    } else {
        cardChildren.style.top = '-100%';
    }
}

function testando(){
    alert('testado');
}

function handleMobileNones(){

    let mls = document.querySelectorAll('.mobile-none');

    if(!returnTrueForMobileWidth()){
        mls.forEach(ml => {
            ml.classList.remove('d-none');
        });
        return; 
    }
    mls.forEach(ml => {
        ml.classList.add('d-none');
    })
}

function page1MobileGridLayout() {

    let content = document.getElementById('content-page1');

    if (returnTrueForMobileWidth()) {
        content.style.gridTemplateColumns = 'repeat(1, 100%)';
    } else {
        content.style.gridTemplateColumns = 'repeat(2, 50%)';
    }
}

function returnTrueForMobileWidth() {
    if (window.innerWidth <= 800) {
        return true;
    } else {
        return false;
    }
}

// CHAMADAS DE MÉTODOS

document.addEventListener("DOMContentLoaded", function () {
    returnTrueForMobileWidth()
    page1MobileGridLayout();
    handleMobileNones();
});

window.addEventListener("resize", function () {
    returnTrueForMobileWidth();
    page1MobileGridLayout();
    handleMobileNones();

})