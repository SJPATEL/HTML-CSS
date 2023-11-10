
let audio = new Audio("inusabel/heavymachinegun-6998.mp3");
audio.play();

let fireimg1 = document.querySelector(".fireimg1");
let fireimg2 = document.querySelector(".fireimg2");
let fireimg3 = document.querySelector(".fireimg3");
let fireimg4 = document.querySelector(".fireimg4");
let fireimg5 = document.querySelector(".fireimg5");
let fireimg6 = document.querySelector(".fireimg6");

let Pfireimg1 = document.querySelector(".Pfireimg1");
let Pfireimg2 = document.querySelector(".Pfireimg2");
let Pfireimg3 = document.querySelector(".Pfireimg3");
let Pfireimg4 = document.querySelector(".Pfireimg4");
setInterval(() => {
    Pfireimg1.style.display = "none";
    Pfireimg4.style.display = "none";
    fireimg1.style.display = "none";
    fireimg2.style.display = "";
    fireimg3.style.display = "none";
    Pfireimg2.style.display = "";
    fireimg4.style.display = "";
    Pfireimg3.style.display = "";
    fireimg5.style.display = "none";
    fireimg6.style.display = "";
}, 100);
setInterval(() => {
    Pfireimg1.style.display = "";
    fireimg1.style.display = "";
    fireimg2.style.display = "none";
    Pfireimg2.style.display = "none";
    fireimg3.style.display = "";
    Pfireimg3.style.display = "none";
    Pfireimg4.style.display = "";
    fireimg4.style.display = "none";
    fireimg5.style.display = "";
    fireimg6.style.display = "none";
    
}, 150);
