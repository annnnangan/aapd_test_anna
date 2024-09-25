//Homepage chart - budget
const budgetPieChart = document.getElementById("budget-pie-chart");

if (budgetPieChart) {
  //set chart title and subtitle
  const doughnutLabel = {
    id: "doughnutLabel",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, height } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fontSize = (height / 17).toFixed(2);
      ctx.font = fontSize + "px Gensen";
      ctx.fillStyle = "rgba(108, 115, 139, 1)";
      let textYLocation = yCenter - fontSize;

      ctx.fillText("本月總預算", xCenter, textYLocation);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fontSize = (height / 8).toFixed(2);
      ctx.font = "bold " + fontSize + "px Nunito";
      // ctx.font = "bold 30px Nunito";
      ctx.fillStyle = "rgba(36, 37, 45, 1)";
      textYLocation = yCenter + (fontSize - 10);
      ctx.fillText("$28,000", xCenter, textYLocation);

      ctx.restore();
    },
  };

  Chart.Tooltip.positioners.top = function (elements, eventPosition) {
    const datasetIndex = elements[0].index;

    const { chartArea } = this.chart;

    if (datasetIndex === 1) {
      return { x: 0, y: 0 };
    } else {
      return { x: chartArea.right, y: 0 };
    }
  };

  //chart configuration
  new Chart(budgetPieChart, {
    type: "doughnut",
    options: {
      borderRadius: 10,
      cutout: "72%",
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          position: "top",
          displayColors: false,
          backgroundColor: "#fff",
          bodyColor: "#000",
          titleColor: "#000",
          titleFont: {
            family: "Gensen",
            size: 11,
          },
          bodyFont: {
            family: "Gensen",
            size: 11,
          },
          caretSize: 0,
          padding: {
            top: 8,
            bottom: 8,
            left: 8,
            right: 50,
          },
          callbacks: {
            label: function (context) {
              return `$${context.formattedValue}`;
            },
            afterBody: function (context) {
              const sum = context[0].dataset.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
              const percentage = (context[0].raw / sum) * 100;
              return `${percentage}%`;
            },
          },
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
}

//Homepage chart - expense
const homeExpensePieChart = document.getElementById("home-total-expense-pie-chart");

if (homeExpensePieChart) {
  const doughnutLabel4 = {
    id: "doughnutLabel4",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, height } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fontSize = (height / 17).toFixed(2);
      ctx.font = fontSize + "px Gensen";
      ctx.fillStyle = "rgba(108, 115, 139, 1)";
      let textYLocation = yCenter - fontSize;

      ctx.fillText("總支出", xCenter, textYLocation);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fontSize = (height / 8).toFixed(2);
      ctx.font = "bold " + fontSize + "px Nunito";
      // ctx.font = "bold 30px Nunito";
      ctx.fillStyle = "rgba(36, 37, 45, 1)";
      textYLocation = yCenter + (fontSize - 10);
      ctx.fillText("$12,950", xCenter, textYLocation);

      ctx.restore();
    },
  };

  new Chart(homeExpensePieChart, {
    type: "doughnut",
    options: {
      borderRadius: 10,
      cutout: "72%",
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [doughnutLabel4],

    data: {
      labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
      datasets: [
        {
          data: [2500, 500, 2000, 800, 2200, 6400, 150],
          backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
          borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
        },
      ],
    },
  });
}

//Expense Review - Overview Chart
const totalExpensePieChart = document.getElementById("total-expense-pie-chart");

if (totalExpensePieChart) {
  const doughnutLabel2 = {
    id: "doughnutLabel2",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, height } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fontSize = (height / 17).toFixed(2);
      ctx.font = fontSize + "px Gensen";
      ctx.fillStyle = "rgba(108, 115, 139, 1)";
      let textYLocation = yCenter - fontSize;

      ctx.fillText("總支出", xCenter, textYLocation);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fontSize = (height / 8).toFixed(2);
      ctx.font = "bold " + fontSize + "px Nunito";
      // ctx.font = "bold 30px Nunito";
      ctx.fillStyle = "rgba(36, 37, 45, 1)";
      textYLocation = yCenter + (fontSize - 10);
      ctx.fillText("$27,800", xCenter, textYLocation);

      ctx.restore();
    },
  };

  new Chart(totalExpensePieChart, {
    type: "doughnut",
    options: {
      borderRadius: 10,
      cutout: "72%",
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [doughnutLabel2],

    data: {
      labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
      datasets: [
        {
          data: [12000, 4300, 2000, 4700, 4600, 8000, 3000],
          backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
          borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
        },
      ],
    },
  });
}

//Pie Chart 3 - Statistic - Monthly Total Expense
const monthlyTotalExpensePieChart = document.getElementById("monthly-total-expense-pie-chart");

if (monthlyTotalExpensePieChart) {
  const doughnutLabel3 = {
    id: "doughnutLabel3",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, height } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fontSize = (height / 17).toFixed(2);
      ctx.font = fontSize + "px Gensen";
      ctx.fillStyle = "rgba(108, 115, 139, 1)";
      let textYLocation = yCenter - fontSize;

      ctx.fillText("本月總支出", xCenter, textYLocation);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fontSize = (height / 8).toFixed(2);
      ctx.font = "bold " + fontSize + "px Nunito";
      // ctx.font = "bold 30px Nunito";
      ctx.fillStyle = "rgba(36, 37, 45, 1)";
      textYLocation = yCenter + (fontSize - 10);
      ctx.fillText("$27,800", xCenter, textYLocation);

      ctx.restore();
    },
  };

  new Chart(monthlyTotalExpensePieChart, {
    type: "doughnut",
    options: {
      borderRadius: 10,
      cutout: "72%",
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [doughnutLabel3],

    data: {
      labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
      datasets: [
        {
          data: [14000, 400, 2000, 4700, 4600, 8000, 3000],
          backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
          borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
        },
      ],
    },
  });
}

const totalIncomePieChart = document.getElementById("total-income-pie-char");

if (totalIncomePieChart) {
  const doughnutLabel4 = {
    id: "doughnutLabe4",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data, height } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let fontSize = (height / 12).toFixed(2);
      ctx.font = fontSize + "px Gensen";
      ctx.fillStyle = "rgba(108, 115, 139, 1)";
      let textYLocation = yCenter - fontSize + 10;

      ctx.fillText("本月總收入", xCenter, textYLocation);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      fontSize = (height / 10).toFixed(2);
      ctx.font = "bold " + fontSize + "px Nunito";
      // ctx.font = "bold 30px Nunito";
      ctx.fillStyle = "rgba(36, 37, 45, 1)";
      textYLocation = yCenter + 20;
      ctx.fillText("$38,0000", xCenter, textYLocation);

      ctx.restore();
    },
  };

  new Chart(totalIncomePieChart, {
    type: "doughnut",
    options: {
      borderRadius: 10,
      cutout: "72%",
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [doughnutLabel4],

    data: {
      labels: ["薪水", "獎金"],
      datasets: [
        {
          data: [35000, 3000],
          backgroundColor: ["#E7D3AB", "#D6BD8A"],
          borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
        },
      ],
    },
  });
}
