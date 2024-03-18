if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";

    /*****Owl Slider************/
    $(document).ready(function(){
        $('.owl-carouselfour').owlCarousel({
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
                    items:1
                },
                1100:{
                    items:1
                },
                1300:{
                    items:1
                },
                1400:{
                    items:2
                }
            }
        })
    });

    // Basic Radar
    $(document).ready(function() {
        var options = {
            chart: {
                height: 350,
                type: 'radar',
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColor: 'var(--card-color)',
                        fill: {
                            colors: ['var(--chart-color2)', 'var(--white-color)']
                        }
                    }
                }
            },
            colors: ['var(--chart-color5)'],
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            labels: ['Vocabulary', 'Writing', 'Liseting', 'Pronuciation', 'Grammar', 'Fluency']
        }

        var chart = new ApexCharts(
            document.querySelector("#apex-basic-radar"),
            options
        );

        chart.render();
    });   
    
    // Stacked Area
    $(document).ready(function() {
        var options = {
            chart: {
                height: 350,
                type: 'area',
                stacked: true,
                toolbar: {
                    show: false,
                },
                events: {
                    selection: function(chart, e) {
                    console.log(new Date(e.xaxis.min) )
                    }
                },
            },

            colors: ['#FFAA8A'],
            dataLabels: {
                enabled: false
            },

            series: [
                {
                    name: 'Point',
                    data: generateDayWiseTimeSeries(new Date('11 Mar 2020 GMT').getTime(), 20, {
                        min: 10,
                        max: 100
                    })
                }
            ],

            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },

            legend: {
                position: 'top',
                horizontalAlign: 'right',
                show: true,
            },
            xaxis: {
                type: 'datetime',            
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                    }
                },
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#apex-stacked-area"),
            options
        );
        chart.render();
        function generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
    });
});

