// Obtém todos os botões de rádio dentro da div com id "container-projetos"
const radioButtons = document.querySelectorAll('#container-projetos input[type="radio"]');

// Adiciona um evento de clique a cada botão de rádio
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('click', function() {
        // Obtém todos os elementos .subContainer dentro do #container-projetos
        const subContainers = document.querySelectorAll('#container-projetos .subContainer');
        
        // Percorre todos os subContainers
        subContainers.forEach(function(subContainer) {
            // Oculta todos os subContainers
            subContainer.style.display = 'none';
        });
        
        // Obtém o ID da subContainer correspondente ao botão de rádio marcado
        const targetSubContainerId = radioButton.getAttribute('data-target');
        
        // Mostra apenas a subContainer correspondente ao botão de rádio marcado
        if (targetSubContainerId) {
            const targetSubContainer = document.getElementById(targetSubContainerId);
            if (targetSubContainer) {
                targetSubContainer.style.display = 'block';
            }
        }
    });
});
