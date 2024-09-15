let savingLineChart = document.querySelector("#savingLineChart");
let labels = ["1", "2", "3", "4", "5", "6", "7"];
let datasetData = [20000, 30000, 40000, 55000, 49000, 58000, 60000];

new Chart(savingLineChart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Solid Line",
        data: datasetData,
        borderColor: "#FE8439",
        borderWidth: 2,
        fill: false,
        borderJoinStyle: "round",
      },
    ],
  },
});
