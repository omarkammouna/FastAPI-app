if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /*****Owl Slider************/
    $(document).ready(function(){
        $('.owl-carouselone').owlCarousel({
            stagePadding: 30,
            loop:true,
            margin:10,
            nav:true,
            navText: ["<img src='../dist/assets/images/stylish-left.png'>","<img src='../dist/assets/images/stylish-right.png'>"],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:3
                },
                600:{
                    items:3
                },
                740:{
                    items:6
                },
                1000:{
                    items:2
                },
                1100:{
                    items:3
                },
                1400:{
                    items:3
                },
                1500:{
                    items:4
                }
            }
        })

        $('.owl-carouseltwo').owlCarousel({
            loop:true,
            margin:5,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                },
                1100:{
                    items:2
                },
                1400:{
                    items:3
                }
            }
        })
    });

    // basic-column
    $(document).ready(function() {
        var options = {
            chart: {
                height: 350,
                type: 'bar',
            },
            colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color4)'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'	
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Listening',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Writing',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Video View',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: ''
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#apex-basic-column"),
            options
        );

        chart.render();
    });

    
});
/*****digital-clock************/
function date_time(id){
    date = new Date;
    h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    document.getElementById("s").innerHTML = ''+s;
    document.getElementById("m").innerHTML = ''+m;
    document.getElementById("h").innerHTML = ''+h;
    setTimeout('date_time("'+"s"+'");','1000');
    return true;
}
window.onload = date_time('s');
