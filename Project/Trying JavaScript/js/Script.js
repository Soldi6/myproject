const images = document.querySelector(".images");
const bigCatBtn = document.querySelector("#bigCatBtn");
const tinyCatBtn = document.querySelector("#tinyCatBtn");
let showDogBtn = document.querySelector("#showDogBtn")


bigCatBtn.addEventListener("click", function (){
   images.classList.add("img-big");
    images.classList.remove("img-tiny");
});

tinyCatBtn.addEventListener("click", function (){
    images.classList.add("img-tiny");
    images.classList.remove("img-big");
});

showDogBtn.addEventListener("click", function (){
    showDogBtn.classList.add("showDog")
    showDogBtn.classList.remove("hideDog")
})

/*Corusel*/

let prevBtn = document.querySelector('#gallery .buttons .prev');
let nextBtn = document.querySelector('#gallery .buttons .next');

let i = 0;


let img = document.querySelectorAll('#gallery .photos img')



nextBtn.onclick = function () {
    img[i].style.display = "none";
    i++;
    if (i >= img.length) {
        i = 0;
    }
    img[i].style.display = "block"
}

prevBtn.onclick = function () {
    img[i].style.display = "none";
    i = i-1;
    if (i < 0) {
        i = img.length - 1;
    }
    img[i].style.display = "block"
};

const delay = 1000;
let currentIndex = 0;
setInterval(function() {
    document.getElementById('image').src = img[currentIndex];
    currentIndex++;
    if(currentIndex >= img.length) {
        currentIndex = 0;
    }
}, delay);














