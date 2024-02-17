const animatedImage1 = document.querySelector('.road-1');
const animatedImage2 = document.querySelector('.road-2');
const animatedImage3 = document.querySelector('.road-3');
const animatedImage4 = document.querySelector('.road-4');
const animatedImage5 = document.querySelector('.road-5');
const animatedImage6 = document.querySelector('.road-6');
const animatedImage7 = document.querySelector('.road-7');

console.log(animatedImage1)
const observerOne = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            animatedImage1.classList.add('animated-image');
            console.log(11111)
        }
    });
});
const observerTwo = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            animatedImage2.classList.add('animated-image');
        }
    });
});
const observerThree = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            animatedImage3.classList.add('animated-image');
        }
    });
});
const observerFour = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            animatedImage4.classList.add('animated-image');
            animatedImage6.classList.add('animated-image');
        }
    });
});
const observerFive = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            animatedImage5.classList.add('animated-image');
            animatedImage7.classList.add('animated-image');
        }
    });
});

const marker1 = document.querySelector('.list-statistic__item-2');
const marker2 = document.querySelector('.list-statistic__item-4');
const marker3 = document.querySelector('.list-statistic__item-6');
const marker4 = document.querySelector('.recomendations__row-1__item-2');
const marker5 = document.querySelector('.recomendations__row-1__item-4');
observerOne.observe(marker1);
observerTwo.observe(marker2);
observerThree.observe(marker3);
observerFour.observe(marker4);
observerFive.observe(marker5);