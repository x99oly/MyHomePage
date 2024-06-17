// fitAbsolutePos() variables
let leftS = document.getElementById("left-side");
let rightS = document.getElementById("right-side");
let cardInfo = document.querySelector(".card-info")

document.addEventListener("DOMContentLoaded", function () {
    fitAbsolutePos();

    testeExcluirDepois();
});

window.addEventListener("resize", function () {
    fitAbsolutePos();

    testeExcluirDepois();
})

function testeExcluirDepois(){
    let a = document.querySelector('absolute-a');

    if(window.innerWidth <= 700){
        a.classList.remove('absolute-a');
    }else{
        a.classList.remove('absolute-a');
    }
    
}

function fitAbsolutePos() {

    if (window.innerWidth <= 700) {
        leftS.classList.add('d-none');
        rightS.style.width = '90%';
        rightS.style.right = '0%';
        rightS.style.bottom = "15%";

        cardInfo.style.height = '00px';
        return
    }

}


function changePosition(event) {
    event.preventDefault();

    let cardChildren = event.currentTarget.querySelector('.card-children');

    if (cardChildren.style.top === '-101%') {
        cardChildren.style.top = '0';
    } else {
        cardChildren.style.top = '-101%';
    }

}







