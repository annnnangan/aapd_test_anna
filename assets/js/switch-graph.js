const switchGraphIcon = document.querySelectorAll(".switch-graph-icon");
const defaultSwitchIcon = document.querySelector(".default-icon");
const pressedSwitchIcon = document.querySelector(".pressed-icon");

const budgetPieChart = document.querySelector("#budget-pie-chart");
const expensePieChart = document.querySelector("#home-total-expense-pie-chart");

let isBudgetPieChart = true;

switchGraphIcon.forEach((item) =>
  item.addEventListener("click", () => {
    console.log("clicked");
    isBudgetPieChart = !isBudgetPieChart;

    if (isBudgetPieChart) {
      budgetPieChart.classList.remove("d-none");
      expensePieChart.classList.add("d-none");
      defaultSwitchIcon.classList.remove("d-none");
      pressedSwitchIcon.classList.add("d-none");
    } else {
      budgetPieChart.classList.add("d-none");
      expensePieChart.classList.remove("d-none");
      defaultSwitchIcon.classList.add("d-none");
      pressedSwitchIcon.classList.remove("d-none");
    }
  })
);
