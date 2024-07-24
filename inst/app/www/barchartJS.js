$(document).ready(function () {
  Shiny.addCustomMessageHandler("barchartJS", function (arg) {
    console.log(arg);
    const ctx = document.getElementById("myChart");

    const chart = Chart.getChart("myChart");

    if (chart == undefined) {
      console.log("Creating a new chart");
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
    } else {
      console.log("Updating an existing chart");
      chart.data.labels = arg.labels;
      chart.data.datasets[0].label = arg.label;
      chart.data.datasets[0].data = arg.data;
      chart.data.datasets[0].borderWidth = arg.borderWidth;
      chart.update();
    }
  });
});
