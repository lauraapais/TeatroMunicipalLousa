const moreInfoButton = document.getElementById("moreInfoButton");
const moreInfoContent = document.getElementById("moreInfoContent");

moreInfoButton.addEventListener("click", () => {
    if (moreInfoContent.style.display === "block") {
        moreInfoContent.style.display = "none";
    } else {
        moreInfoContent.style.display = "block";
    }
});
