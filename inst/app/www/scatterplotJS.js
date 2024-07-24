$(document).ready(function () {
  Shiny.addCustomMessageHandler("scatterplotJS", function (arg) {
    const ctx = document.getElementById("myChart2");

    const data = {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };

    const config = {
      type: "scatter",
      data: data,
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
        },
      },
    };
    new Chart(ctx, config);
  });
});
