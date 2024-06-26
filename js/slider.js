const slides = document.querySelectorAll('picture');
let slideIndex = 0;
let intervalId = null;

/*BUTTONS*/
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

/*IMAGES*/
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

/*INFO SELECTORS*/
const sliderH1 = document.querySelector('.slider-h1');
const sliderP = document.querySelector('.slider-p');

/*INFO CONTENT*/

const info = [
    {
        title : "Discover innovative ways to decorate",
        description : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title : "We are available all across the globe",
        description : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title : "Manufactured with the best materials",
        description : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

const inicializeSlider = () =>{
    slides[slideIndex].classList.add('displayPicture');
    sliderH1.textContent=`${info[slideIndex].title}`;
    sliderP.textContent=`${info[slideIndex].description}`;
}

next.addEventListener('click',()=>{
    nextImg();
});

prev.addEventListener('click',()=>{
    prevImg();
})


const nextImg = () =>{
    if(slideIndex<2){
        slides[slideIndex].classList.remove('displayPicture');
        slideIndex++;
        slides[slideIndex].classList.add('displayPicture'); 
        sliderH1.textContent=`${info[slideIndex].title}`;
        sliderP.textContent=`${info[slideIndex].description}`;
    }    
}

const prevImg = () =>{
    if(slideIndex>0){
        slides[slideIndex].classList.remove('displayPicture');
        slideIndex--;
        slides[slideIndex].classList.add('displayPicture');
        sliderH1.textContent=`${info[slideIndex].title}`;
        sliderP.textContent=`${info[slideIndex].description}`;
    }
}



inicializeSlider();