const slides = document.querySelectorAll(".gallery__img");
const conditionSlides = document.querySelectorAll(".condition__img");

let slidesPath = ["./imports/img/image-3.png", "./imports/img/image-2.png", "./imports/img/image-4.png"]

const conditionSlidesInit = () => {
    let activePath = "./imports/img/condition.svg";
    let disActivePath = "./imports/img/condition_false.svg";

    for (let i = 0; i < conditionSlides.length; i++) {
        if (i + 1 === slider.condition) {
            conditionSlides[i].setAttribute("src", activePath);
        } else {
            conditionSlides[i].setAttribute("src", disActivePath);
        }
    }
}

const slidesPositionInit = () => {
    for (i = 1; i < 4; i++) {
        let bodyWidth = getComputedStyle(document.body).getPropertyValue("width");
        document.querySelector(`.gallery__img_${i}`).style.position = "absolute";

        if (i === 1) {
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 815)}px`;
        } else if (i === 2) {
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 945)}px`;
        } else if (i === 3) {
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 1263)}px`;
        }
    }
}

const slideInit = () => {
    if (slider.condition === 1) {
        slidesPath = ["./imports/img/image-2.png", "./imports/img/image-4.png", "./imports/img/image-3.png"]
    } else if (slider.condition === 2) {
        slidesPath = ["./imports/img/image-3.png", "./imports/img/image-2.png", "./imports/img/image-4.png"]
    } else if (slider.condition === 3) {
        slidesPath = ["./imports/img/image-4.png", "./imports/img/image-3.png", "./imports/img/image-2.png"]
    }

    for (let i = 0; i < slidesPath.length; i++) {        
        slides[i].setAttribute("src", slidesPath[i]);
    }
}

const slider = {
    condition: 2,
    buttonDirectory: false,
    left() {
        if (this.condition === 1) {
            this.condition = 3;
        } else {
            this.condition--;
        }

        this.buttonDirectory = true;
        slideInit();
        conditionSlidesInit();
    },
    right() {
        if (this.condition === 3) {
            this.condition = 1;
        } else {
            this.condition++;
        }

        this.buttonDirectory = false;
        slideInit();
        conditionSlidesInit();
    }
}

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mousemove", () => {
        slides[i].style.cursor = "pointer";
    })

    slides[i].addEventListener("click", () => {
        if (slides[i].classList[1] === "gallery__img_1") {
            slider.left();
        } else if (slides[i].classList[1] === "gallery__img_3") {
            slider.right();
        }
    })
}

slidesPositionInit();