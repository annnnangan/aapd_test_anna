const budgetPieChart = document.getElementById("budget-pie-chart");

const doughnutLabel = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "15px Gensen";
    ctx.fillStyle = "rgba(108, 115, 139, 1)";
    ctx.fillText("本月總預算", xCenter, yCenter - 20);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 30px Nunito";
    ctx.fillStyle = "rgba(36, 37, 45, 1)";
    ctx.fillText("$28,000", xCenter, yCenter + 20);

    ctx.restore();
  },
};

new Chart(budgetPieChart, {
  type: "doughnut",
  options: {
    borderRadius: 10,
    cutout: "72%",
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [doughnutLabel],

  data: {
    labels: ["已用", "剩餘"],
    datasets: [
      {
        data: [12950, 15050],
        backgroundColor: ["rgba(215, 217, 224, 1)", "rgba(255, 176, 114, 1)"],
        borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
      },
    ],
  },
});
