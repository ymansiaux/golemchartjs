$(document).ready(function () {
  Shiny.addCustomMessageHandler("scatterplotJS", function (arg) {
    const ctx = document.getElementById("myChart2");

    console.log(arg);

    const data = {
      datasets: [
        {
          label: arg.label,
          data: arg.data,
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
