$(document).ready(function () {
  Shiny.addCustomMessageHandler("scatterplotJS", function (arg) {
    const ctx = document.getElementById("myChart2");

    console.log(arg);

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

    const plugins = {
      title: {
        display: true,
        text: arg.mainTitle,
        color: arg.mainTitleColor,
      },
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
  });
});
