// Function to position images randomly
function randomizeImages() {
    const images = document.querySelectorAll('.imageIndex');
    const imagePositions = [];
    
    // Create a set of 3 images positioned between 0 and 100vw
    for (let i = 0; i < 3; i++) {
        let position = Math.random() * 100; // Between 0 and 100vw
        imagePositions.push(position);
    }
    
    // Position remaining images randomly between -200vw and 300vw
    images.forEach((image, index) => {
        let position;
        
        if (index < 3) {
            position = imagePositions[index];
        } else {
            position = Math.random() * 500 - 200; // Between -200vw and 300vw
        }
        
        image.style.transform = `translateX(${position}vw)`;
    });
}

// Ensure the images are randomized after the page loads
window.onload = randomizeImages;
