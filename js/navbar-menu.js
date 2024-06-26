const hamburgerBtn = document.querySelector('.nav__hamburger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click',()=>{
    menu.style.animation="mostrar .8s ease-in both";
    document.querySelector('body').style.position="fixed";
});

closeBtn.addEventListener('click',()=>{
    menu.style.animation="ocultar .8s ease-in both";
    document.querySelector('body').style.position="relative";
});