$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true
    });
});

//Video
const videoBtn = document.querySelector("#video-btn");
const videoPic = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video__box");
const video = document.querySelector("#video-file");

videoBtn.addEventListener("click", function (){
    videoPic.classList.add("none");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");

    if (video.paused) {
        video.play()
    }

});

video.addEventListener("click", function () {

    if (video.paused) {
        video.play()
    }   else {
        videoWrapper.classList.add("video-overlay");
        videoBtn.classList.remove("none");
        video.pause()
    }


    video.pause()
});

/*MOBILE-NAV*/
const openNavBtn = document.querySelector("#openMobileNav");
const mobileNav = document.querySelector("#mobileNav");
const closeNavBtn = document.querySelector("#closeMobileNav");

openNavBtn.onclick = function () {
    mobileNav.classList.remove("none")
};

closeNavBtn.onclick = function () {
    mobileNav.classList.add("none")
};