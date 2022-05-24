var chart1 = document.getElementById('chart-1').getContext('2d');
var chart2 = document.getElementById('chart-2').getContext('2d');


var myChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', '', ''],
        datasets: [{
            base: 0,
            data: [20, 25, 28, 30, 29, 50, 45, 60],
            backgroundColor: '#4D73FF',

        }]

    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false,

                }
            }
        },

    }


})


var myChart = new Chart(chart2, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'Gráfica1',
            data: [30, 38, 60, 38, 50, 80, 70, 90],
            backgroundColor: '#4D73FF',
            borderColor: '#4D73FF',

        }, {
            label: 'Gráfica 2',

            data: [30, 50, 80, 58, 90, 60, 85, 95],
            backgroundColor: '#B693FB',
            borderColor: '#B693FB',


        }

        ]

    },
    options: {
        borderWidth: 5,
        tension: 0.3,

        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    boxWidth: 6
                }

            }
        },
        scales: {
            y: {
                min: 20,
                ticks: {
                    color: '#B0B7C4'
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }


    }


})