import Highcharts from "highcharts";

export const lineChartOptions: Highcharts.Options = {
  title: {
    text: "Chart 1",
  },
  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  series: [
    {
      type: "line",
      // data: [1, 2, 3, 8, 4, 7],
    },
  ],
};


// Highcharts.chart('container', {
//   chart: {
//     events: {
//       load: function() {
//         this.series[0].addPoint(['Fourth', 120]);
//       }
//     }
//   },
//   xAxis: {
//     minPadding: 0.05,
//     maxPadding: 0.05
//   },
//   series: [{
//     data: [
//       ['First', 29.9],
//       ['Second', 71.5],
//       ['Third', 106.4]
//     ]
//   }]
// });

// do map lagenge (do for loop lagenge)

