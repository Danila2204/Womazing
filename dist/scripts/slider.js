const slides = document.querySelectorAll(".gallery__img");
const conditionSlides = document.querySelectorAll(".condition__img");

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
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 945)}px`;
        } else if (i === 2) {
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 815)}px`;
        } else if (i === 3) {
            document.querySelector(`.gallery__img_${i}`).style.left = `${parseFloat(bodyWidth) / (1600 / 1263)}px`;
        }
    }
}

const slider = {
    condition: 2,
    conditionInit() {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].className === "gallery__img_1") {
                console.log("Первый слайд!");
            } else {
                console.log("Пофиг какой слайд.");
            }
        }
        
        console.log(i);
    },
    left() {
        this.condition--;
    },
    right() {
        this.condition++;
    }
}

conditionSlidesInit();
slidesPositionInit();
slider.conditionInit();