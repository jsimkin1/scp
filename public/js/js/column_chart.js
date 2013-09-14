$(function () {
    $('#wantlists_submitted').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                'Oct 1',
                'Oct 8',
                'Oct 15',
                'Oct 22',
                'Oct 30',
                'Nov 6',
                'Nov 13',
                'Nov 20',
                'Nov 27',
                'Dec 4',
                'Dec 11',
                'Dec 18'
            ]
        },
        legend: {
            enabled: false,
        },
        exporting: {
            enabled: false
        },  
        yAxis: {
            min: 0,
            title: {
                text: 'Wantlists Submitted'
            }
        },
        tooltip: {
            pointFormat: '<b>{series.name}: {point.y}</b>'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Wantlists Submitted',
            data: [2,5,3,4,9,7,3,2,6,5,9,4]

        }]
    });
});