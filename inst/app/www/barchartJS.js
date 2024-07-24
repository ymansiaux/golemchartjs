$(document).ready(function () {
  Shiny.addCustomMessageHandler("barchartJS", function (arg) {
    console.log(arg);
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: arg.labels,
        datasets: [
          {
            label: arg.label,
            data: arg.data,
            borderWidth: arg.borderWidth,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
});
