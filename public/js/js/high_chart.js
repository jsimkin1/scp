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
              title: {
                  text: 'Date'
              },
          },
          legend: {
            enabled: true,
            verticalAlign:'top',
            layout:'horizontal',
            floating: true,
            align: 'right',
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
              pointFormat: '{series.name}: {point.y}'
          },
          plotOptions: {
              area: {
                  pointInterval: 7 * 24 * 36e5,
                  pointStart: Date.UTC(2013, 1, 10), //one week
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
              },

          },
          colors: [
             '#00a9e0', 
             '#84329b'
          ],
          series: [{
              name: 'Units Ordered',
              data: [1, 4, 7, 9,18, 22 , 5, 12, 35, 0, 0, 0,
                  18, 22 , 5, 12, 35, 5, 12, 35,4, 7, 9,6,
                  12, 35, 5, 12, 4,5, 12, 35,4, 7, 9, 5, 
                  9, 5, 12, 5, 12, 35,4, 7, 35, 5, 12, 4,
                  5, 12, 35,4, 7, 9, 5, 12, 35, 5, 12, 4],
          }, {
                name: 'Units Fulfilled',
                data: [null,null,null,null,null,null,null,null,null,null,null,null, 
                       null,null,null,null,null,null,null,null,null,null,null,null,
                       null,null,null,null,null,null,null,null,null,null,null,null,
                       null,null,null,null,null,null,null,null,null,null,null,null,
                  1 , 22,18,64,12,18,61,21,84,11,15,45]
            }]
      });
  });
    
});