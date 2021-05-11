'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let btnToolbar = document.querySelector("#toolbar-toggle")
let btnNav = document.querySelector(".container-btn")
let arrowDown = document.querySelector(".fa-arrow-down")
let btnPrevious = document.querySelector("#slider-previous")
let btnSliderToggle = document.querySelector("#slider-toggle")
let displayBtnPlayStop = document.querySelector("#slider-toggle i")
let btnNext = document.querySelector("#slider-next")
let btnRandom = document.querySelector("#slider-random")
let displayRandomStop = document.querySelector("#slider-random i")
let img = document.querySelector('#slider img')
let titleImage = document.querySelector("main h2")
img.setAttribute("src", "images/1.jpg")
img.setAttribute("alt", "Une ruelle tagué en couleur")
titleImage.innerHTML = "Une ruelle tagué en couleur"
let html = document.querySelector("html")
let imagesSrc = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
]

let imagesAlt = [
    "Une ruelle tagué",
    "Un pont",
    "Une tour design",
    "Un immeuble",
    "Une mégalopole",
    "La tour Eiffel"
]

let title = [
    "Une ruelle tagué avec des couleurs",
    "Un magnifique pont",
    "Une tour design",
    "Un immeuble",
    "Une mégalopole",
    "La tour Eiffel"
]
let nameImg, timer, timer2
    /*************************************************************************************************/
    /* ***************************************** FONCTIONS ***************************************** */
    /*************************************************************************************************/
function actualImg() {
    for (let i = 0; i < imagesSrc.length; i++) {
        if (imagesSrc[i] === img.getAttribute("src")) {
            let index = imagesSrc.indexOf(imagesSrc[i])
            return index
        }
    }
}

function previousImage() {
    let indexImg = actualImg()
    if (indexImg === 0) {
        indexImg = imagesSrc.length - 1
        img.setAttribute("src", imagesSrc[indexImg])
        img.setAttribute("alt", imagesAlt[indexImg])
        titleImage.innerHTML = title[indexImg]
    } else {
        indexImg--
        img.setAttribute("src", imagesSrc[indexImg])
        img.setAttribute("alt", imagesAlt[indexImg])
        titleImage.innerHTML = title[indexImg]
    }
}

function nextImage() {
    let indexImg = actualImg()
    if (indexImg === imagesSrc.length - 1) {
        indexImg = 0
        img.setAttribute("src", imagesSrc[indexImg])
        img.setAttribute("alt", imagesAlt[indexImg])
        titleImage.innerHTML = title[indexImg]
    } else {
        indexImg++
        img.setAttribute("src", imagesSrc[indexImg])
        img.setAttribute("alt", imagesAlt[indexImg])
        titleImage.innerHTML = title[indexImg]
    }
}

function playStop() {
    displayBtnPlayStop.classList.toggle("fa-play")
    displayBtnPlayStop.classList.toggle("fa-stop")

    if (displayBtnPlayStop.classList.contains("fa-stop")) {
        timer = window.setInterval(() => {
            window.clearInterval(timer2)
            nextImage()
        }, 1000)
    } else {
        window.clearInterval(timer)
    }
}

function randomImg() {
    let indexRandom, index

    if (displayRandomStop.classList.contains("fa-random")) {
        displayRandomStop.classList.toggle("fa-stop")
        displayRandomStop.classList.toggle("fa-random")
        timer2 = window.setInterval(() => {
            window.clearInterval(timer1)

            index = actualImg()
            do {
                indexRandom = getRandomInteger(0, imagesSrc.length - 1)
            } while (index === indexRandom)

            if (index !== indexRandom) {
                img.setAttribute("src", imagesSrc[indexRandom])
                img.setAttribute("alt", imagesAlt[indexRandom])
                titleImage.innerHTML = title[indexRandom]
            } else {

                img.setAttribute("src", imagesSrc[indexRandom])
                img.setAttribute("alt", imagesAlt[indexRandom])
                titleImage.innerHTML = title[indexRandom]
            }
        }, 1000)

    } else {
        displayRandomStop.classList.toggle("fa-stop")
        displayRandomStop.classList.toggle("fa-random")

        window.clearInterval(timer2)
    }
}

function displayToolbar(e) {
    e.preventDefault()
    btnNav.classList.toggle("display-nav")
    arrowDown.classList.toggle("fa-arrow-down")
    arrowDown.classList.toggle("fa-arrow-up")
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


btnToolbar.addEventListener('click', displayToolbar)
btnPrevious.addEventListener('click', previousImage)
btnNext.addEventListener('click', nextImage)
btnSliderToggle.addEventListener('click', playStop)
btnRandom.addEventListener('click', randomImg)

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowLeft":
            window.clearInterval(timer)
            window.clearInterval(timer2)
            previousImage()
            break;
        case "ArrowRight":
            window.clearInterval(timer)
            window.clearInterval(timer2) -
                nextImage()
            break;
    }
})