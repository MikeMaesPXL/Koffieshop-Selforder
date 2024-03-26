// var allElements = document.querySelectorAll("body *");

document.addEventListener("DOMContentLoaded", function () {
    // Code hier zal worden uitgevoerd wanneer de DOM geladen is
    gsap.from(".fade-up", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1 // Vertraging tussen animaties van opeenvolgende elementen (0.1 seconden)
    });
        // gsap.from(".fade-up", {
        //     duration: .6,
        //     fade-up: .9,
        //     animation: 0,
        //     stagger: 0.1 // Vertraging tussen animaties van opeenvolgende elementen (0.1 seconden)
        // });
});

// Selecteer alle elementen binnen de body van het document
// var fade-up = document.getElementsByClassName(".fade-up");

// Pas een animatie toe op elk individueel element met een vertraging
// gsap.from(".fade-up", {
//     duration: 1,
//     animation: 0,
//     y: 50,
//     stagger: 0.1 // Vertraging tussen animaties van opeenvolgende elementen (0.1 seconden)
// });
