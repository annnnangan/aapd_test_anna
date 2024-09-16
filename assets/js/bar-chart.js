let balanceBarChart = document.querySelector("#balanceBarChart");
let labels = ["1", "2", "3", "4", "5", "6", "7"];
let expenseData = [34000, 32000, 30700, 33500, 43200, 30100, 33000];
let incomeData = [36000, 35200, 40100, 35000, 36000, 35600, 35000];

new Chart(balanceBarChart, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        data: expenseData,
        fill: false,
        yAxisID: "y",
        backgroundColor: "#FF6964",
        borderRadius: 5,
      },
      {
        data: incomeData,
        fill: false,
        yAxisID: "y2",
        backgroundColor: "#92E863",
        borderRadius: 5,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            family: "Nunito",
          },
        },
      },
      //y axis on left
      y: {
        beginAtZero: false,
        maxTicksLimit: 6,
        suggestedMin: 20000,
        suggestedMax: 45000,
        ticks: {
          font: {
            size: 15,
            family: "Nunito",
          },
          maxTicksLimit: 6,
          callback: (context, index) => {
            return Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(context);
          },
        },
        border: {
          display: false,
        },
      },
      //y axis on right
      y2: {
        beginAtZero: false,
        maxTicksLimit: 6,
        suggestedMin: 20000,
        suggestedMax: 45000,
        position: "right",
        ticks: {
          font: {
            size: 15,
            family: "Nunito",
          },

          callback: (context, index) => {
            return Intl.NumberFormat("en-US", {
              notation: "compact",
              maximumFractionDigits: 1,
            }).format(context);
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
});
