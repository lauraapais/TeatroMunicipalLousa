const moreInfoButton1 = document.getElementById("moreInfoButton1");
const moreInfoContent1 = document.getElementById("moreInfoContent1");

moreInfoButton1.addEventListener("click", () => {
    if (moreInfoContent1.style.maxHeight) {
        moreInfoContent1.style.maxHeight = null;
    } else {
        moreInfoContent1.style.maxHeight = moreInfoContent1.scrollHeight + "px";
    }
});

moreInfoContent1.style.transition = "max-height 0.5s ease";
moreInfoContent1.style.overflow = "hidden";


// 2
const moreInfoButton2 = document.getElementById("moreInfoButton2");
const moreInfoContent2 = document.getElementById("moreInfoContent2");

moreInfoButton2.addEventListener("click", () => {
    if (moreInfoContent2.style.maxHeight) {
        moreInfoContent2.style.maxHeight = null;
    } else {
        moreInfoContent2.style.maxHeight = moreInfoContent2.scrollHeight + "px";
    }
});

moreInfoContent2.style.transition = "max-height 0.5s ease";
moreInfoContent2.style.overflow = "hidden";