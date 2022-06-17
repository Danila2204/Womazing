const body = document.body;
const header = document.querySelector(".nav_header");
const newHeader = header.cloneNode();

const container = document.querySelector(".container");
const maxWidth = 1600;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
        let minWidth = getComputedStyle(header).width;
        let headerPadding = maxWidth - parseFloat(minWidth);
        let bodyFirstChild =  body.firstChild;
        
        body.insertBefore(newHeader, bodyFirstChild);
        newHeader.style.width = maxWidth;

        newHeader.style.padding = `0 ${headerPadding / 2}px 0 ${headerPadding / 2}px`;
        header.style.width = maxWidth;
    } else if (window.pageYOffset === 0) {
        // headerNavigation.style.width = container.style.width;
        // headerNavigation.style.position = "";
        // headerNavigation.style.top = "";
        // headerNavigation.style.left = "";
        // headerNavigation.style.backgroundColor = "";
    }
})