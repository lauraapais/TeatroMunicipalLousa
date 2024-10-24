const list = document.getElementById("list");
const grid = document.getElementById("grid");
const listMode = document.getElementById("listMode");
const gridMode = document.getElementById("gridMode");

list.addEventListener("click", () => {
    list.classList.add("selected");
    grid.classList.remove("selected");

    if (listMode.style.display === "block") {
        listMode.style.display = "none";
        gridMode.style.display = "block";

    } else {
        listMode.style.display = "block";
        gridMode.style.display = "none";
    }
});

grid.addEventListener("click", () => {
    grid.classList.add("selected");
    list.classList.remove("selected");

    if (gridMode.style.display === "block") {
        gridMode.style.display = "none";
        listMode.style.display = "block";
    } else {
        gridMode.style.display = "block";
        listMode.style.display = "none";
    }
});

const gridElements = document.querySelectorAll('.gridElement');
gridElements.forEach((element) => {
    const imageElement = element.querySelector('.imageList');
    
    if (imageElement) {
        const listElement = element.querySelector('.listElement');
        
        listElement.addEventListener('mouseover', () => {
            imageElement.style.opacity = '1';
        });

        listElement.addEventListener('mouseout', () => {
            imageElement.style.opacity = '0';
        });

        listElement.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const imageWidth = imageElement.offsetWidth;
            imageElement.style.left = `${mouseX - imageWidth / 2}px`;
        });
    }
});


const filterButton = document.getElementById("filterButton");
const filterDropdown = document.getElementById("filterDropdown");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

filterButton.addEventListener("click", () => {
    console.log("enter");
    if (filterDropdown.style.maxHeight) {
        filterDropdown.style.maxHeight = null;
        arrowUp.style.display = "none";
        arrowDown.style.display = "block";
    } else {
        filterDropdown.style.maxHeight = filterDropdown.scrollHeight + "px";
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
    }
});

filterDropdown.style.transition = "max-height 0.5s ease";
filterDropdown.style.overflow = "hidden";