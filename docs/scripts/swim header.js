const header = document.querySelector(".nav_header");

let padding = 246 / (1600 / 100);

header.style.padding = `0 ${padding}%`;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 4) {
        header.style.boxShadow = "0 4px 15px 0";
        header.style.backgroundColor = "#fff";
    } else if (window.pageYOffset <= 4) {
        header.style.boxShadow = "";
        header.style.backgroundColor = "";
    }
})