$(document).ready(function () {
  Shiny.addCustomMessageHandler("scatterplotJS", function (arg) {
    const ctx = document.getElementById("myChart2");

    console.log(arg);

    const chart2 = Chart.getChart("myChart2");

    if (chart2 == undefined) {
      console.log("Creating a new chart");

      const data = {
        datasets: [
          {
            label: arg.label,
            data: arg.data,
            borderColor: arg.pointBorderColor,
            backgroundColor: arg.pointBackGroundColor,
          },
        ],
      };

      const tooltip = {
        callbacks: {
          title: function (context) {
            return "Tooltip title";
          },
        },
      };

      const plugins = {
        title: {
          display: true,
          text: arg.mainTitle,
          color: arg.mainTitleColor,
        },
        tooltip: tooltip,
      };

      const config = {
        type: "scatter",
        data: data,
        options: {
          plugins: plugins,
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: {
                display: true,
                text: arg.xAxisTitle,
              },
            },
            y: {
              title: {
                display: true,
                text: arg.yAxisTitle,
              },
            },
          },
        },
      };
      new Chart(ctx, config);
    } else {
      console.log("Updating an existing chart");
      chart2.data.datasets[0].backgroundColor = arg.pointBackGroundColor;
      chart2.options.plugins.title.text = arg.mainTitle;
      chart2.options.plugins.title.color = arg.mainTitleColor;
      chart2.update();
    }
  });
});
