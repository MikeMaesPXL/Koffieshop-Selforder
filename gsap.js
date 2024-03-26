document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".fade-up", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1
    });
});