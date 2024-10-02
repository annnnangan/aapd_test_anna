const f = document.getElementById("budget-pie-chart");
if (f) {
  const d = {
    id: "doughnutLabel",
    beforeDatasetsDraw(e, o, l) {
      const { ctx: t, data: r, height: g } = e,
        i = e.getDatasetMeta(0).data[0].x,
        s = e.getDatasetMeta(0).data[0].y;
      t.save(), (t.textAlign = "center"), (t.textBaseline = "middle");
      let a = 15;
      (t.font = a + "px Gensen"), (t.fillStyle = "rgba(108, 115, 139, 1)");
      let n = s - a;
      t.fillText("本月總預算", i, n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (a = (g / 8).toFixed(2)),
        (t.font = "bold " + a + "px Nunito"),
        (t.fillStyle = "rgba(36, 37, 45, 1)"),
        (n = s + (a - 10)),
        t.fillText("$28,000", i, n),
        t.restore();
    },
  };
  (Chart.Tooltip.positioners.top = function (e, o) {
    const l = e[0].index,
      { chartArea: t } = this.chart;
    return l === 1 ? { x: 0, y: 0 } : { x: t.right, y: 0 };
  }),
    new Chart(f, {
      type: "doughnut",
      options: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#f7f7f7",
        cutout: "70%",
        aspectRatio: 1.9,
        plugins: {
          legend: { display: !1 },
          tooltip: {
            position: "top",
            displayColors: !1,
            backgroundColor: "#fff",
            bodyColor: "#000",
            titleColor: "#000",
            titleFont: { family: "Gensen", size: 11 },
            bodyFont: { family: "Gensen", size: 11 },
            caretSize: 0,
            padding: { top: 8, bottom: 8, left: 8, right: 28 },
            callbacks: {
              label: function (e) {
                return `$${e.formattedValue}`;
              },
              afterBody: function (e) {
                const o = e[0].dataset.data.reduce((t, r) => t + r, 0);
                return `${(e[0].raw / o) * 100}%`;
              },
            },
          },
        },
      },
      plugins: [d],
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
const u = document.getElementById("home-total-expense-pie-chart");
if (u) {
  const d = {
    id: "doughnutLabel4",
    beforeDatasetsDraw(e, o, l) {
      const { ctx: t, data: r, height: g } = e,
        i = e.getDatasetMeta(0).data[0].x,
        s = e.getDatasetMeta(0).data[0].y;
      t.save(), (t.textAlign = "center"), (t.textBaseline = "middle");
      let a = 15;
      (t.font = a + "px Gensen"), (t.fillStyle = "rgba(108, 115, 139, 1)");
      let n = s - a;
      t.fillText("總支出", i, n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (a = (g / 8).toFixed(2)),
        (t.font = "bold " + a + "px Nunito"),
        (t.fillStyle = "rgba(36, 37, 45, 1)"),
        (n = s + (a - 10)),
        t.fillText("$12,950", i, n),
        t.restore();
    },
  };
  (Chart.Tooltip.positioners.side = function (e, o) {
    return e[0].element.startAngle < 1 ? { x: o.x + 300, y: o.y } : { x: o.x - 300, y: o.y };
  }),
    new Chart(u, {
      type: "doughnut",
      options: {
        borderRadius: 4,
        borderWidth: 2,
        aspectRatio: 1.9,
        borderColor: "#f7f7f7",
        cutout: "70%",
        plugins: {
          legend: { display: !1 },
          tooltip: {
            position: "side",
            displayColors: !1,
            backgroundColor: "#fff",
            bodyColor: "#000",
            titleColor: "#000",
            titleFont: { family: "Gensen", size: 11 },
            bodyFont: { family: "Gensen", size: 11 },
            caretSize: 0,
            padding: { top: 8, bottom: 8, left: 8, right: 28 },
            callbacks: {
              label: function (e) {
                return `$${e.formattedValue}`;
              },
              afterBody: function (e) {
                const o = e[0].dataset.data.reduce((t, r) => t + r, 0);
                return `${((e[0].raw / o) * 100).toFixed(2)}%`;
              },
            },
          },
        },
      },
      plugins: [d],
      data: {
        labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
        datasets: [
          {
            data: [2500, 500, 2e3, 800, 2200, 6400, 150],
            backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
            borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
          },
        ],
      },
    });
}
const c = document.getElementById("total-expense-pie-chart");
if (c) {
  const d = {
    id: "doughnutLabel2",
    beforeDatasetsDraw(e, o, l) {
      const { ctx: t, data: r, height: g } = e,
        i = e.getDatasetMeta(0).data[0].x,
        s = e.getDatasetMeta(0).data[0].y;
      t.save(), (t.textAlign = "center"), (t.textBaseline = "middle");
      let a = 15;
      (t.font = a + "px Gensen"), (t.fillStyle = "rgba(108, 115, 139, 1)");
      let n = s - a;
      t.fillText("總支出", i, n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (a = (g / 8).toFixed(2)),
        (t.font = "bold " + a + "px Nunito"),
        (t.fillStyle = "rgba(36, 37, 45, 1)"),
        (n = s + (a - 10)),
        t.fillText("$27,800", i, n),
        t.restore();
    },
  };
  (Chart.Tooltip.positioners.side = function (e, o) {
    return e[0].element.startAngle < 1 ? { x: o.x + 300, y: o.y } : { x: o.x - 300, y: o.y };
  }),
    new Chart(c, {
      type: "doughnut",
      options: {
        borderRadius: 4,
        borderWidth: 2,
        aspectRatio: 1.9,
        borderColor: "#f7f7f7",
        cutout: "70%",
        plugins: {
          legend: { display: !1 },
          tooltip: {
            position: "side",
            displayColors: !1,
            backgroundColor: "#fff",
            borderColor: "#ededf1",
            borderWidth: 1,
            bodyColor: "#000",
            titleColor: "#000",
            titleFont: { family: "Gensen", size: 11 },
            bodyFont: { family: "Gensen", size: 11 },
            caretSize: 0,
            padding: { top: 8, bottom: 8, left: 8, right: 28 },
            callbacks: {
              label: function (e) {
                return `$${e.formattedValue}`;
              },
              afterBody: function (e) {
                const o = e[0].dataset.data.reduce((t, r) => t + r, 0);
                return `${((e[0].raw / o) * 100).toFixed(2)}%`;
              },
            },
          },
        },
      },
      plugins: [d],
      data: {
        labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
        datasets: [
          {
            data: [12e3, 4300, 2e3, 4700, 4600, 8e3, 3e3],
            backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
            borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
          },
        ],
      },
    });
}
const b = document.getElementById("monthly-total-expense-pie-chart");
if (b) {
  const d = {
    id: "doughnutLabel3",
    beforeDatasetsDraw(e, o, l) {
      const { ctx: t, data: r, height: g } = e,
        i = e.getDatasetMeta(0).data[0].x,
        s = e.getDatasetMeta(0).data[0].y;
      t.save(), (t.textAlign = "center"), (t.textBaseline = "middle");
      let a = 15;
      (t.font = a + "px Gensen"), (t.fillStyle = "rgba(108, 115, 139, 1)");
      let n = s - a;
      t.fillText("本月總支出", i, n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (a = (g / 8).toFixed(2)),
        (t.font = "bold " + a + "px Nunito"),
        (t.fillStyle = "rgba(36, 37, 45, 1)"),
        (n = s + (a - 10)),
        t.fillText("$27,800", i, n),
        t.restore();
    },
  };
  (Chart.Tooltip.positioners.side = function (e, o) {
    return e[0].element.startAngle < 1 ? { x: o.x + 300, y: o.y } : { x: o.x - 300, y: o.y };
  }),
    new Chart(b, {
      type: "doughnut",
      options: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#f7f7f7",
        cutout: "70%",
        aspectRatio: 1.9,
        plugins: {
          legend: { display: !1 },
          tooltip: {
            position: "side",
            displayColors: !1,
            backgroundColor: "#fff",
            borderColor: "#ededf1",
            borderWidth: 1,
            bodyColor: "#000",
            titleColor: "#000",
            titleFont: { family: "Gensen", size: 11 },
            bodyFont: { family: "Gensen", size: 11 },
            caretSize: 0,
            padding: { top: 8, bottom: 8, left: 8, right: 25 },
            callbacks: {
              label: function (e) {
                return `$${e.formattedValue}`;
              },
              afterBody: function (e) {
                const o = e[0].dataset.data.reduce((t, r) => t + r, 0);
                return `${((e[0].raw / o) * 100).toFixed(2)}%`;
              },
            },
          },
        },
      },
      plugins: [d],
      data: {
        labels: ["飲食", "購物", "交通", "娛樂", "學習", "生活", "醫療"],
        datasets: [
          {
            data: [14e3, 400, 2e3, 4700, 4600, 8e3, 3e3],
            backgroundColor: ["#FFE4C1", "#C7F1FF", "#CCDCFF", "#DAB5FF", "#B0DCC7", "#FEC9A7", "#FFCECF"],
            borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"],
          },
        ],
      },
    });
}
const p = document.getElementById("total-income-pie-char");
if (p) {
  const d = {
    id: "doughnutLabe4",
    beforeDatasetsDraw(e, o, l) {
      const { ctx: t, data: r, height: g } = e,
        i = e.getDatasetMeta(0).data[0].x,
        s = e.getDatasetMeta(0).data[0].y;
      t.save(), (t.textAlign = "center"), (t.textBaseline = "middle");
      let a = 15;
      (t.font = a + "px Gensen"), (t.fillStyle = "rgba(108, 115, 139, 1)");
      let n = s - a;
      t.fillText("本月總收入", i, n),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (a = (g / 8).toFixed(2)),
        (t.font = "bold " + a + "px Nunito"),
        (t.fillStyle = "rgba(36, 37, 45, 1)"),
        (n = s + (a - 10)),
        t.fillText("$38,000", i, n),
        t.restore();
    },
  };
  (Chart.Tooltip.positioners.side = function (e, o) {
    return e[0].element.startAngle < 1 ? { x: o.x + 300, y: o.y } : { x: o.x - 300, y: o.y };
  }),
    new Chart(p, {
      type: "doughnut",
      options: {
        borderRadius: 4,
        borderWidth: 2,
        aspectRatio: 1.9,
        borderColor: "#f7f7f7",
        cutout: "70%",
        plugins: {
          legend: { display: !1 },
          tooltip: {
            position: "side",
            displayColors: !1,
            backgroundColor: "#fff",
            borderColor: "#ededf1",
            borderWidth: 1,
            bodyColor: "#000",
            titleColor: "#000",
            titleFont: { family: "Gensen", size: 11 },
            bodyFont: { family: "Gensen", size: 11 },
            caretSize: 0,
            padding: { top: 8, bottom: 8, left: 8, right: 25 },
            callbacks: {
              label: function (e) {
                return `$${e.formattedValue}`;
              },
              afterBody: function (e) {
                const o = e[0].dataset.data.reduce((t, r) => t + r, 0);
                return `${((e[0].raw / o) * 100).toFixed(2)}%`;
              },
            },
          },
        },
      },
      plugins: [d],
      data: {
        labels: ["薪水", "獎金"],
        datasets: [{ data: [35e3, 3e3], backgroundColor: ["#E7D3AB", "#D6BD8A"], borderColor: ["rgba(247, 247, 247, 1)", "rgba(247, 247, 247, 1)"] }],
      },
    });
}
