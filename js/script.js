window.onload = function() {
    const moveRightElements = document.querySelectorAll('.moveRight');
    const moveLeftElements = document.querySelectorAll('.moveLeft');

    let directionsRight = Array.from(moveRightElements).map(() => true);
    let directionsLeft = Array.from(moveLeftElements).map(() => true);

    // Verifica se está em modo retrato (portrait) para dispositivos móveis
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const isMobile = window.innerWidth <= 768; // Define a largura máxima para mobile

    // Define a margem base e dobra se for mobile e portrait
    let margin = window.innerWidth * 0.4;
    if (isMobile && isPortrait) {
        margin *= 2; // Dobra a margem para dispositivos móveis em modo retrato
    }

    setTimeout(() => {
        moveRightElements.forEach(el => el.style.opacity = '1');
        moveLeftElements.forEach(el => el.style.opacity = '1');
    }, 500);

    function animate() {
        moveRightElements.forEach((el, index) => {
            const currentPos = parseFloat(getComputedStyle(el).left);
            if (directionsRight[index]) {
                el.style.left = (currentPos + 0.5) + 'px';
                if (currentPos > window.innerWidth + margin) { // Verifica com a margem adicional
                    directionsRight[index] = false; 
                }
            } else {
                el.style.left = (currentPos - 0.5) + 'px';
                if (currentPos < -el.offsetWidth - margin) { // Verifica com a margem adicional
                    directionsRight[index] = true; 
                }
            }
        });

        moveLeftElements.forEach((el, index) => {
            const currentPos = parseFloat(getComputedStyle(el).right);
            if (directionsLeft[index]) {
                el.style.right = (currentPos + 0.5) + 'px';
                if (currentPos > window.innerWidth + margin) { // Verifica com a margem adicional
                    directionsLeft[index] = false; 
                }
            } else {
                el.style.right = (currentPos - 0.5) + 'px';
                if (currentPos < -el.offsetWidth - margin) { // Verifica com a margem adicional
                    directionsLeft[index] = true; 
                }
            }
        });

        requestAnimationFrame(animate);
    }

    // Iniciar animação
    animate();
};
