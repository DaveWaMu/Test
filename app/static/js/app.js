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

//     var date = [];
    var homeownership_rate = [];

    const url = "/api/homeownership_rate";
    d3.json(url).then(function(d) {
        console.log("Homeownership Rate API", d);
//         date = d[0].Date;
//         console.log(date);
        homeownership_rate = d[0].Home_Ownership_Rate;
        console.log("Homeownership Rate Array", homeownership_rate);


        // Series function
        // function SeriesValue() {
        //     for (var i = 0; i < date.length; i++) {
        //         console.log(date[i]);
        //         console.log(homeownership_rate[i]);
        //         if (d3.select(this.value) == date[i]) {
        //             return homeownership_rate[i];
        //         }
        //     }
        // }

        var options = {
            chart: {
                height: 280,
                type: "radialBar"
            },

            series: [homeownership_rate[4]],

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
        console.log("Home Units API", d);
        date = d[0].Date;
        console.log("Date", date);
        units_constructed = d[0].Home_Unites_Contructed;
        console.log("Home Units Array", units_constructed);
    });

    const apiurl = "/api/house_permits";
    d3.json(apiurl).then(function (d) {
        console.log("House Permits API", d);
        new_permits = d[0].New_Home_Permits;
        console.log("House Permits Array", new_permits);
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
            categories: date,
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
