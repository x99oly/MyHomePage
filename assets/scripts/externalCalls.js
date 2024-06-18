const apiGitHub = "https://api.github.com/";
const gitHubMe = "users/x99oly";
const objects = [];
let vat = '0%';


function buildCards() {
    const num = 5;

    for (let i = 0; i < num; i++) {
        let cardHTML = `
            <div style="display: flex; justify-content: center;">
                <a class="absolute-a" style="position: relative;" href="#" onclick="changePosition(event)">
                    <div class="card pointer">
                        <div class="card-children pointer" style="top: -100%;">
                            <img src="assets/images/rosequartz.jpg" class="card-img" alt="">

                            <div class="card-info">
                                <ul class="card-icons" style="justify-content: flex-start !important;">
                                    <li class="logo">
                                        <img src="assets/images/logos/c_sharp_logo.png" alt="">
                                    </li>
                                    <li class="logo">
                                        <img src="assets/images/logos/c_sharp_logo.png" alt="">
                                    </li>
                                </ul>
                                <h4>T${i}</h4>
                                <p class="card-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, hic
                                    voluptas.
                                    Deserunt, unde
                                    dolores, recusandae harum, eos vitae repudiandae fugiat pariatur optio
                                    tempora
                                    vero? Fuga
                                    dolores atque possimus rem illo.
                                </p>
                                <ul class="card-collaborators" style="display: flex; flex-direction: column;">
                                    <li>
                                        <h6 style="color: var(--main);">Colaboradores</h6>
                                    </li>
                                    <li><img src="assets/images/me-perfil.jpg" class="collaborator-img"
                                            style="width: 15%; height: auto; border-radius: 50%;" alt=""></li>
                                </ul>
                                <p style="position: absolute; bottom: -100%; right: 40%;" class="hover">
                                    <span class="btn-d" onclick="goToPage('/repositorio.html')" style="width: 1000% !important; font-weight: 400;">
                                        Saiba mais
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
        objects.push(cardHTML);
    }
    printCards();
}

function printCards() {
    const container = document.getElementById('right');
    container.innerHTML = '';

    objects.forEach((cardHTML) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML.trim();
        const cardElement = tempDiv.firstChild;

        // Adiciona a classe de fade-in
        cardElement.classList.add('fade-in');

        const cardChildren = cardElement.querySelector('.card-children');
        if (vat === '0%') {
            cardChildren.style.top = vat;
            vat = '-100%';
        } else {
            cardChildren.style.top = vat;
            vat = '0%';
        }

        container.appendChild(cardElement);

        setTimeout(() => {
            cardElement.classList.add('visible');
        }, 70);
    });
}

function moveLeft() {
    const lastCard = objects.pop();
    objects.unshift(lastCard);
    printCards();
}

function moveRight() {
    const firstCard = objects.shift();
    objects.push(firstCard);
    printCards();
}


function callApi(address){
    return fetch(address)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Não foi possível acessar: ${address}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(`Falha no fetch (${address}): `, error);
            throw error; // rethrow the error to propagate it further
        });
}

let apiAddress = apiGitHub + gitHubMe;

callApi(apiAddress)
    .then(data => {
        console.log(data); // Aqui você pode trabalhar com os dados recebidos
    })
    .catch(error => {
        console.error('Erro ao chamar API:', error);
    });


// CHAMADAS DE MÉTODOS AO CARREGAR A PÁGINA

document.addEventListener("DOMContentLoaded", function () {
    buildCards();
});

// CHAMADAS DE MÉTODOS AO REDIMENSIONAR A JANELA

window.addEventListener("resize", function () {
});