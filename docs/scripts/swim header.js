const header = document.querySelector(".nav_header");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 4) {
        header.style.boxShadow = "0 4px 15px 0";
        console.log(window.pageYOffset);

    } else if (window.pageYOffset <= 4) {
        header.style.boxShadow = "";
    }
})