
const observerer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        const verticalArrow = document.querySelector('#container .highcharts-plot-lines-4').querySelector('path');
        verticalArrow.setAttribute('d', 'M 80 0 L 80 340');
        console.log(verticalArrow);
        if(window.innerWidth < 991 & window.innerWidth > 767){
            verticalArrow.setAttribute('d', 'M 80 0 L 80 320');
        }
        if(window.innerWidth > 575 & window.innerWidth < 767){
            verticalArrow.setAttribute('d', 'M 70 0 L 70 315');
        }
        if(window.innerWidth > 991) {
            verticalArrow.setAttribute('d', 'M 80 0 L 80 340');
            console.log(verticalArrow);
        }

    })
})

window.addEventListener('resize', function() {
    const verticalArrow2 = document.querySelector('#container .highcharts-plot-lines-4').querySelector('path');
    verticalArrow2.setAttribute('d', 'M 79 0 L 79 340');
    if(window.innerWidth < 991 & window.innerWidth > 767){
        verticalArrow2.setAttribute('d', 'M 79 0 L 79 320');
    }
    if(window.innerWidth > 575 & window.innerWidth < 767){
        verticalArrow2.setAttribute('d', 'M 70 0 L 70 315');
    }
  });
  if(window.innerWidth<575){
    const verticalArrowParent = document.querySelector('#container .highcharts-plot-lines-4');
    verticalArrowParent.style.display = 'none';
}
const markerer = document.getElementById('highcharts-2bxd7wz-13');
observerer.observe(marker);

