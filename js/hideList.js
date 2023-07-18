const arrow = document.querySelector('.icon');
const list = document.querySelector('.list-of-literature__block');

console.log(list);
console.log(arrow);
arrow.addEventListener('click',()=>{
    console.log(1)
    list.classList.toggle('fade');
    list.classList.toggle('no-fade');
});