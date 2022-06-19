const main = document.querySelector(".header__main");
const headerBackground = document.querySelector(".header__background");
const marginGorizontal = 65 + 245;

const initPosition = () => {
    headerBackground.style.left = `${parseFloat(main.style.width) + marginGorizontal}px`;
}