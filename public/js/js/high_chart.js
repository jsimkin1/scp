$(document).ready(function(){
	$(function () {
      $('#po_submissions').highcharts({
          chart: {
              type: 'area'
          },
          title: {
              text: ''
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              // title: {
              //     text: 'Date'
              // },
              // labels: {
              //     formatter: function() {
              //         return this.value; // clean, unformatted number for year
              //     }
              // },
              type: 'datetime',
              dateTimeLabelFormats: {
                day: '%e  %b'
              },
              labels: {
                format: '{value:%e-%b}',
              },
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          yAxis: {
              title: {
                  text: ''
              },
          },
          tooltip: {
              pointFormat: 'Wantlists Submitted: {point.y}'
          },
          plotOptions: {
              area: {
                  marker: {
                      enabled: false,
                      symbol: 'circle',
                      radius: 2,
                      states: {
                          hover: {
                              enabled: true
                          }
                      }
                  }
              }
          },
          series: [{
              data: [3, 4, 1, 2,1, 1 , 2, 1, 3, 1, 0, 0,
                  1 , 2, 5, 3, 4, 1, 2,1 , 1, 1, 4, 0,
                  1 , 2, 5, 4, 4, 1, 3,1 , 3, 1, 0, 3,
                  1 , 2, 2, 3, 1, 0, 1,2 , 5, 1, 2, 1,
                  1 , 2, 5, 1, 4, 3, 1,4 , 3, 1, 0, 2,],
              pointInterval: 7 * 24 * 36e5,
            pointStart: Date.UTC(2013, 1, 10) //one week
          }]
      });
  });
    
});