// Função para buscar imagens de uma pasta
async function fetchImagesFromFolder(folderPath) {
    const imagesArray = [];

    try {
        const response = await fetch(folderPath);
        const html = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const imgElements = doc.querySelectorAll('img');
        
        imgElements.forEach(img => {
            imagesArray.push(img.src);
        });
        
    } catch (error) {
        console.error('Erro ao carregar imagens da pasta:', error);
    }

    return imagesArray;
}

// Variáveis globais
const objects = [];
let vat = '0%';

// Função para construir os cards com base nos URLs das imagens
function buildCards() {
    const titulos = ["T 0", "T 1", "T 2", "T 3"];
    for (let i = 0; i < titulos.length; i++) {
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
                                <h4>${titulos[i]}</h4>
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
                                    <span class="btn-d" onclick="openRepository()" style="width: 1000% !important; font-weight: 400;">
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

// Função para imprimir os cards na tela
function printCards() {
    const container = document.getElementById('right');
    container.innerHTML = '';

    objects.forEach((cardHTML) => {
        // Cria um elemento temporário para manipular o HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML.trim();
        const cardElement = tempDiv.firstChild;

        // Acessa o elemento filho .card-children e alterna seu valor top
        const cardChildren = cardElement.querySelector('.card-children');
        if (vat === '0%') {
            cardChildren.style.top = '-100%';
            vat = '-100%';
        } else {
            cardChildren.style.top = '0%';
            vat = '0%';
        }

        // Adiciona o card alterado ao container
        container.appendChild(cardElement);
    });
}

// Função para mover cards para a esquerda
function moveLeft() {
    const lastCard = objects.pop();
    objects.unshift(lastCard); 
    applyTransition();
    printCards(); 
}

// Função para mover cards para a direita
function moveRight() {
    const firstCard = objects.shift(); 
    objects.push(firstCard);
    applyTransition();
    printCards(); 
}

// Função para aplicar transição aos cards
function applyTransition() {
    const container = document.getElementById('right');
    container.classList.add('transition');
    setTimeout(() => {
        container.classList.remove('transition');
    }, 500);
}

// Função para abrir o repositório (exemplo)
function openRepository() {
    window.location.href = 'repositorio.html';
}

// Funções para ajustar layout responsivo
function handleMobileNones() {
    const mls = document.querySelectorAll('.mobile-none');
    if (!returnTrueForMobileWidth()) {
        mls.forEach(ml => ml.classList.remove('d-none'));
    } else {
        mls.forEach(ml => ml.classList.add('d-none'));
    }
}

function page1MobileGridLayout() {
    const content = document.getElementById('content-page1');
    content.style.gridTemplateColumns = returnTrueForMobileWidth() ? 'repeat(1, 100%)' : 'repeat(2, 50%)';
}

function returnTrueForMobileWidth() {
    return window.innerWidth <= 800;
}

// Função para alternar posição do card ao clicar
function changePosition(event) {
    event.preventDefault();
    const cardChildren = event.currentTarget.querySelector('.card-children');
    cardChildren.style.top = cardChildren.style.top === '0%' ? '-100%' : '0%';
}

// CHAMADAS DE MÉTODOS AO CARREGAR A PÁGINA

document.addEventListener("DOMContentLoaded", function () {
    page1MobileGridLayout();
    handleMobileNones();
    buildCards();
});

// CHAMADAS DE MÉTODOS AO REDIMENSIONAR A JANELA

window.addEventListener("resize", function () {
    page1MobileGridLayout();
    handleMobileNones();
});
