window.onload = function() {
    const moveRightElements = document.querySelectorAll('.moveRight');
    const moveLeftElements = document.querySelectorAll('.moveLeft');

    let directionRight = true;
    let directionLeft = true;

    setTimeout(() => {
        moveRightElements.forEach(el => el.style.opacity = '1');
        moveLeftElements.forEach(el => el.style.opacity = '1');
    }, 2000);

    function animate() {
        moveRightElements.forEach(el => {
            const currentPos = parseFloat(getComputedStyle(el).left);
            if (directionRight) {
                el.style.left = (currentPos + 1) + 'px';
                if (currentPos > window.innerWidth) {
                    directionRight = false; 
                }
            } else {
                el.style.left = (currentPos - 1) + 'px';
                if (currentPos < -el.offsetWidth) {
                    directionRight = true; 
                }
            }
        });

        moveLeftElements.forEach(el => {
            const currentPos = parseFloat(getComputedStyle(el).right);
            if (directionLeft) {
                el.style.right = (currentPos + 1) + 'px';
                if (currentPos > window.innerWidth) {
                    directionLeft = false; 
                }
            } else {
                el.style.right = (currentPos - 1) + 'px';
                if (currentPos < -el.offsetWidth) {
                    directionLeft = true; 
                }
            }
        });

        requestAnimationFrame(animate);
    }

    // Iniciar animação
    animate();
};
