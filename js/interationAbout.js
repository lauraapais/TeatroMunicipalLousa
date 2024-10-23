// Seleciona os elementos para o primeiro botão
const moreInfoButton1 = document.getElementById("moreInfoButton1");
const moreInfoContent1 = document.getElementById("moreInfoContent1");
const plusButton1 = document.getElementById("plusButton1");
const crossButton1 = document.getElementById("crossButton1");

// Adiciona o evento de clique
moreInfoButton1.addEventListener("click", () => {
    if (moreInfoContent1.style.maxHeight) {
        // Fecha a div
        moreInfoContent1.style.maxHeight = null;
        plusButton1.style.display = "block"; // Exibe o plus
        crossButton1.style.display = "none"; // Oculta o cross
    } else {
        // Abre a div
        moreInfoContent1.style.maxHeight = moreInfoContent1.scrollHeight + "px";
        plusButton1.style.display = "none"; // Oculta o plus
        crossButton1.style.display = "block"; // Exibe o cross
    }
});

// Configura a transição para o conteúdo e o estilo de overflow
moreInfoContent1.style.transition = "max-height 0.5s ease";
moreInfoContent1.style.overflow = "hidden";

// Para o segundo botão
const moreInfoButton2 = document.getElementById("moreInfoButton2");
const moreInfoContent2 = document.getElementById("moreInfoContent2");
const plusButton2 = document.getElementById("plusButton2");
const crossButton2 = document.getElementById("crossButton2");

// Adiciona o evento de clique
moreInfoButton2.addEventListener("click", () => {
    if (moreInfoContent2.style.maxHeight) {
        // Fecha a div
        moreInfoContent2.style.maxHeight = null;
        plusButton2.style.display = "block"; // Exibe o plus
        crossButton2.style.display = "none"; // Oculta o cross
    } else {
        // Abre a div
        moreInfoContent2.style.maxHeight = moreInfoContent2.scrollHeight + "px";
        plusButton2.style.display = "none"; // Oculta o plus
        crossButton2.style.display = "block"; // Exibe o cross
    }
});

// Configura a transição para o conteúdo e o estilo de overflow
moreInfoContent2.style.transition = "max-height 0.5s ease";
moreInfoContent2.style.overflow = "hidden";
