if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";
    // RADAR MULTIPLE SERIES
    $(document).ready(function() {
        var options = {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColor: 'var(--color-700)',
                        fill: {
                            colors: ['var(--chart-color2)', 'var(--white-color)']
                        }
                    }
                }
            },
            colors: ['var(--chart-color6)', 'var(--chart-color7)', 'var(--chart-color8)'],
            series: [{
                name: 'Engineering',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Drawing',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Marketing',
                data: [44, 76, 78, 13, 43, 10],
            }],
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            labels: ['2016', '2017', '2018', '2019', '2020', '2021']
        }

        var chart = new ApexCharts(
            document.querySelector("#apex-radar-multiple-series"),
            options
        );

        chart.render();
        function update() {

            function randomSeries() {
                var arr = []
                for(var i = 0; i < 6; i++) {
                    arr.push(Math.floor(Math.random() * 100)) 
                }

                return arr
            }
            

            chart.updateSeries([{
                name: 'Series 1',
                data: randomSeries(),
            }, {
                name: 'Series 2',
                data: randomSeries(),
            }, {
                name: 'Series 3',
                data: randomSeries(),
            }])
        }
    });
});

