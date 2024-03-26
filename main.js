let knipperElement = document.getElementById('knipper-element');
let ledlight1 = document.getElementById('led1');
let ledlight2 = document.getElementById('led2');
let ledlight3 = document.getElementById('led3');


function startBlinking() {
  ledlight1.style.stroke = "#39FF14";
  ledlight2.style.stroke = "#39FF14";
  ledlight3.style.stroke = "#39FF14";
  knipperElement.classList.add('blink');  

  setTimeout(function () {
    knipperElement.classList.remove('blink');
    knipperElement.classList.remove('fade');
  }, 500);

  setTimeout(() => {
    window.location.href = "inschenken.html";
  }, 2000);
}

setTimeout(startBlinking, 3000);
