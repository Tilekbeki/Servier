
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            var fontSize = $(window).width() < 575 ? '14px' : '18px';
	    var columnWidth = $(window).width() < 575 ? '15' : '30';
            // console.log(fontSize)
            // verticalArrow.setAttribute('d','M 80 1 L 80 340');
            
            Highcharts.chart('container', {
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    credits: {
                        enabled: false
                    },
                    
                },
                height: 1000,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%',
                    style: {
                        color: '#ffffff',
                        fontSize: fontSize // добавляем опцию
                        
                    }
                    
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    gridLineDashStyle: 'dash',
                    
                    labels: {
                        style: {
                            color: '#FFF',
                            fontFamily: 'Ubuntu',
                            fontSize: fontSize,
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '143%',
                            letterSpacing: '-0.2px',
                            border: 'none'
							
                        },
						rotation: 0,
												 
                        d: 'M 93 10 L 93 314'
                    },
                    plotLines: [{
                        value: 0,
                        color: '#fff',
                        width: 2,
                        zIndex: 4,
                        labels: {
                            style: {
                                left:'20px'
                            },
                        },
                    }],
                },
                yAxis: {
                    tickPositions: [0, 10, 20, 30, 40, 50, 60, 70, 80],
                    title: {
                        text: 'Пациенты, %',
                        style: {
                            color: '#FFF',
                            fontFamily: 'Ubuntu',
                            fontSize: fontSize,
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '143%',
                            letterSpacing: '-0.2px',
                            border: 'none'
                        }
                    },
                    labels: {
                        style: {
                            color: '#FFF',
                            fontFamily: 'Ubuntu',
                            fontSize: fontSize,
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '143%',
                            letterSpacing: '-0.2px',
                            border: 'none'
                        }
                    },
                    gridLineDashStyle: 'dash', // добавляем опцию

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}',
                            lineWidth: 2, // толщина линии
                            color: '#fff', // цвет линии
                            border: '#fff',
                            style: {
                                color: '#FFF',
                                fontFamily: 'Ubuntu',
                                fontSize: fontSize,
                                fontStyle: 'normal',
                                border: 'none',
                                fontWeight: 700,
                                lineHeight: '143%',
                                letterSpacing: '-0.2px',
                                textOutline: 'none' // добавляем опцию
                            }
                        },
                        
                    },
                    
                    column: {
                        colors: ['#ffffff'],
                        pointPadding: 0.2,
                        borderWidth: 0,
                        pointWidth: columnWidth,
                    }
                },

            

                series: [{
                    name: 'Приверженность пациентов',
                    colorByPoint: true,
                    data: [{
                        name: '0',
                        y: 69.7,
                        dataLabels: {
                            colors: ['#ffffff'],
                            enabled: true
                        },
                        drilldown: null
                    }, {
                        name: '1',
                        y: 5.5,
                        dataLabels: {
                            colors: ['#ffffff'],
                            border: ['#ffffff'],
                            enabled: true
                        },
                        drilldown: null
                    }, {
                        name: '2',
                        y: 3.1,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    }, {
                        name: '4',
                        y: 4.1,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    }, {
                        name: '13',
                        y: 2.2,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    }, {
                        name: '26',
                        y: 2.5,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    },{
                        name: '39',
                        y: 0.5,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    },{
                        name: '52',
                        y: 3.7,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    },{
                        name: '78',
                        y: 0.5,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    },{
                        name: '104',
                        y: 8.2,
                        dataLabels: {
                            enabled: true
                        },
                        drilldown: null
                    }]
                }],
                
            });
            const line = document.querySelector('#container .highcharts-plot-lines-4').querySelector('path');
            
            if(window.innerWidth < 991 & window.innerWidth > 767){
                line.setAttribute('d', 'M 79 0 L 79 320');
            }
            if(window.innerWidth > 575 & window.innerWidth < 767){
                line.setAttribute('d', 'M 70 0 L 70 310');
            }
            else{
                line.setAttribute('d', 'M 79 0 L 79 340');
            }
        }
    });
    
});


// if (window.innerWidth > 575) {
//     console.log('okay')
//  } else {
//     const texts = document.querySelectorAll('text');
//     texts.forEach((elem)=>{
//         elem.style.fontSize = '10';
//         console.log(elem);
//     });
//  }
const marker = document.getElementById('container');
observer.observe(marker);
