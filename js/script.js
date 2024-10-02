window.onload = function() {
    const moveRightElements = document.querySelectorAll('.moveRight');
    const moveLeftElements = document.querySelectorAll('.moveLeft');

    let directionsRight = Array.from(moveRightElements).map(() => true);
    let directionsLeft = Array.from(moveLeftElements).map(() => true);

    // Adiciona a margem de 10% além da largura da janela
    const margin = window.innerWidth * 0.4;

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