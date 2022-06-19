const backGround = document.querySelectorAll(".collection_img");
const overlay = document.querySelectorAll(".collection_img-overlay");
const frontGround = document.querySelectorAll(".overlay-frontground");
const path = "./imports/img/background_arrow.svg"

for (let i = 0; i < backGround.length; i++) {
    backGround[i].addEventListener("mousemove", () => {
        overlay[i].style.width = "100%";
        overlay[i].style.height = "100%";
        overlay[i].style.background = "rgba(110, 156, 159, .68)";
        frontGround[i].style.width = "100%";
        frontGround[i].style.height = "100%";
        frontGround[i].style.background = `url(${path}) center no-repeat`;
    })

    backGround[i].addEventListener("mouseout", () => {
        overlay[i].style.width = "";
        overlay[i].style.height = "";
        overlay[i].style.background = "";
    })
}