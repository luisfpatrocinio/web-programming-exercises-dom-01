document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded", "Página carregada");

    // Definir variáveis
    const userNameText = document.getElementById("userNameText");
    const userNameInput = document.getElementById("userNameInput");

    // Definir funções.
    userNameInput.addEventListener("input", function() {
        let userName = userNameInput.value;
        userNameText.innerHTML = "Seu nome é: " + userName;
    });

    let colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", function() {
        let r = Math.floor(Math.random() * 256); // Valor entre 0 e 255
        let g = Math.floor(Math.random() * 256); // Valor entre 0 e 255
        let b = Math.floor(Math.random() * 256); // Valor entre 0 e 255
        let hexColor = "#" + r.toString(16).padStart(2, '0') + 
                        g.toString(16).padStart(2, '0') + 
                        b.toString(16).padStart(2, '0');
        userNameText.style = "color: " + hexColor;
    });

    let highlightButton = document.getElementById("highlightButton");
    highlightButton.addEventListener("click", function() {
        // Obter todas as disciplinas
        let classes = document.getElementsByTagName("li");

        // Iterar cada disciplina
        for (let i = 0; i < classes.length; i++) {
            let thisClass = classes[i];
            thisClass.style.fontWeight = thisClass.style.fontWeight == 'bold' ? 'normal' : 'bold';
        }
    });

    let countButton = document.getElementById("countButton");
    countButton.addEventListener("click", function() {
        let paragrafosDiv = document.getElementById("paragrafos");
        let paragrafos = paragrafosDiv.getElementsByTagName("p");
        let countText = document.getElementById("countText");
        countText.innerHTML = "Número de parágrafos: " + paragrafos.length;
    });
});
