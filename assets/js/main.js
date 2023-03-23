// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Create Markup & Array

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.


//add elements to DOM with for each 

const sliderEl = document.querySelector(".slider");
const thumbnailEl = document.querySelector(".thumbnail")


let activeImg = 0

images.forEach((image, i) => {
    sliderEl.innerHTML += `<div class="images text-center">
        <img class ="${i === activeImg ? `active` : ``}" src="./assets/${image.image}" alt="">
    </div>`


})

images.forEach((image, i) => {
    thumbnailEl.innerHTML += `<div class="thumbnailImg">
        <img class="${i === activeImg ? `thumbnailActive` : ``}" src="./assets/${image.image}" alt="">
    </div>`


})



// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// show and hide images with classes and classList.add


// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
//add infinite loop with if/else conditions


// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.


const displayedImg = document.querySelectorAll(".images img")
const thumbnailImages = document.querySelectorAll(".thumbnail img ")
const nextEl = document.querySelector(".next");

nextEl.addEventListener("click", changeImg)

const prevEl = document.querySelector(".prev")

prevEl.addEventListener("click",

    function () {

        const currentImg = displayedImg[activeImg];
        const currentThumbnailImg = thumbnailImages[activeImg];
        currentImg.classList.remove("active");
        currentThumbnailImg.classList.remove("thumbnailActive")
        if (activeImg === 0) {
            activeImg = 4
        } else {
            activeImg--
        }

        let prevImg = displayedImg[activeImg];
        let prevThumbnailImg = thumbnailImages[activeImg];
        prevImg.classList.add("active");
        prevThumbnailImg.classList.add("thumbnailActive")

    }
)

thumbnailImages.forEach((img, i) => {
    img.addEventListener("click",

        function () {
            const images = document.querySelectorAll(".images img");
            currentImg = images[activeImg]
            currentImg.classList.remove("active");
            currentImg = images[i];
            currentImg.classList.add("active");

        }



    )


})




// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.




//function changeImg
function changeImg() {
    const currentImg = displayedImg[activeImg];
    const currentThumbnailImg = thumbnailImages[activeImg];
    currentImg.classList.remove("active");
    currentThumbnailImg.classList.remove("thumbnailActive")
    if (activeImg === 4) {
        activeImg = 0
    } else {
        activeImg++
    }

    let nextImg = displayedImg[activeImg];
    let nextThumbnailImg = thumbnailImages[activeImg];
    nextImg.classList.add("active");
    nextThumbnailImg.classList.add("thumbnailActive")

}

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const startBtnEl = document.querySelector(".start");
const stopBtnEl = document.querySelector(".stop");


startBtnEl.addEventListener("click",
    function () {
        const changeImgInterval = setInterval(changeImg, 3000)
        stopBtnEl.addEventListener("click", 
        function() {
            clearInterval(changeImgInterval)
        } )
        }
)



