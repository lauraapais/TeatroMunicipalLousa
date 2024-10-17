const moreInfoButton = document.getElementById("moreInfoButton");
const moreInfoContent = document.getElementById("moreInfoContent");

moreInfoButton.addEventListener("click", () => {
    if (moreInfoContent.style.maxHeight) {
        // Se a altura está definida, vamos fechar a div
        moreInfoContent.style.maxHeight = null;
    } else {
        // Se não está definida, vamos abrir a div para a altura total do conteúdo
        moreInfoContent.style.maxHeight = moreInfoContent.scrollHeight + "px";
    }
});

// Configuração inicial para transição suave no CSS
moreInfoContent.style.transition = "max-height 0.5s ease";
moreInfoContent.style.overflow = "hidden";
