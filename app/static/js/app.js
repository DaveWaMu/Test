// Home price plot

function buildlinePlot() {

  const url = "/api/average_home_price";
  d3.json(url).then(function(myData) {
   console.log(myData);
    
    var date = myData[0].Date;
    
    var price = myData[0].Average_Home_Price;
   

    var trace1 = {
    x: date,
    y: price,
    type: "scatter"
    
    }
    var data = [trace1];
    

    var layout = {
        title: "Average Home Price", 
    }
    

    Plotly.newPlot("line", data, layout);
})
};

buildlinePlot();


// My Stuff

// Homeownership Rate Radial Chart
function RadialChart() {

    const url = "/api/homeownership_rate";
    d3.json(url).then(function(d) {
        console.log(d);
        var date = d[0].date;
        console.log(date);
        var homeownership_rate = d[0].homeownership_rate;
        console.log(homeownership_rate);


        // Series function
        function SeriesValue() {
            for (var i = 0; i < date.length; i++) {
                console.log(date[i]);
                console.log(homeownership_rate[i]);
                if (d3.select(this.value) == date[i]) {
                    return homeownership_rate[i];
                }
            }
        }

        var options = {
            chart: {
                height: 280,
                type: "radialBar"
            },

            series: [SeriesValue()],

            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: "70%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: -10,
                            show: true,
                            color: "#888",
                            fontSize: "13px"
                        },
                        value: {
                            color: "#111",
                            fontSize: "30px",
                            show: true
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: undefined,
                options: {},
            }],
            stroke: {
                lineCap: "round",
            },
            labels: ["Homeownership Rate"],
        };

        var chart = new ApexCharts(document.querySelector("#homeownership"), options);

        chart.render();
    });
}

RadialChart();

//New Housing Permits & Housing Units Constructed Spline
function PermitsSpline() {
    var date = [];
    var units_constructed = [];
    var new_permits = [];

    const url = "/api/home_units";
    d3.json(url).then(function (d) {
        console.log(d);
        date = d[0].date;
        console.log(date);
        units_constructed = d[0].units_constructed_thousands;
        console.log(units_constructed);
    });

    const apiurl = "/api/house_permits";
    d3.json(apiurl).then(function (d) {
        console.log(d);
        new_permits = d[0].new_permits_thousands;
        console.log(new_permits);
    });

    var options = {
        series: [{
            name: 'New Housing Permits',
            data: new_permits
        }, {
            name: 'Housing Units Constructed',
            data: units_constructed
        }],
        chart: {
            // height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'New Housing Permits & Housing Units Constructed'
        },
        xaxis: {
            categories: date_units_constructed,
            title: {
                text: 'Date',
                offsetX: -40
            }
            // type: 'datetime',
            // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        yaxis: {
            title: {
                text: 'Units in Thousands'
            }
        }
        // tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        // },
    };

    var chart = new ApexCharts(document.querySelector("#permitsConstructed"), options);

    chart.render();
}
PermitsSpline();





  
  // New Housing Permits Line Chart
  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'New Housing Permits',
      data: [116.4,102.9,119.0,98.4,107.3,127.2,138.9,128.9,136.3,135.9,123.1,137.0,128.8,120.1,157.6,157.9,142.3]
    }],
    xaxis: {
      categories: ['2020-01-01','2020-02-01','2020-03-01','2020-04-01','2020-05-01',
      '2020-06-01','2020-07-01','2020-08-01','2020-09-01','2020-10-01','2020-11-01','2020-12-01',
    '2021-01-01','2021-02-01','2021-03-01','2021-04-01','2021-05-01']
    },
    responsive: [{
      breakpoint: undefined,
      options: {},
    }]
  }
  
  var chart = new ApexCharts(document.querySelector("#permits"), options);
  
  // chart.render();
  
  
  // Units Completed-Constructed Line Chart
  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Housing Units Constructed',
      data: [90.2,90.8,101.7,94.6,98.5,110.7,117.1,111.2,121.1,120.8,99.8,130.5,93.7,94.6,120.5,113.0,114.0]
    }],
    xaxis: {
      categories: ['2020-01-01','2020-02-01','2020-03-01','2020-04-01','2020-05-01',
      '2020-06-01','2020-07-01','2020-08-01','2020-09-01','2020-10-01','2020-11-01','2020-12-01',
    '2021-01-01','2021-02-01','2021-03-01','2021-04-01','2021-05-01']
    },
    responsive: [{
      breakpoint: undefined,
      options: {},
    }]
  }
  
  var chart = new ApexCharts(document.querySelector("#constructed"), options);
  
  // chart.render();
  
  

