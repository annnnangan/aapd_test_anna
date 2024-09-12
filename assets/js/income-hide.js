const eyeIcons = document.querySelectorAll(".income-card .eye-icon");
const incomeText = document.querySelectorAll(".income-card .income");

eyeIcons.forEach((item) => {
  const income = item
    .closest(".income-card")
    .querySelector(".income span").innerText;
  item.addEventListener("click", (e) => {
    let isShow = item.dataset.show;
    if (isShow === "true") {
      item.src = "../assets/images/icon/eyes/eye_grey_no.svg";
      item.setAttribute("data-show", "false");
      item.closest(".income-card").querySelector(".income span").innerText =
        "----";
    } else {
      item.src = "../assets/images/icon/eyes/eye_grey_yes.svg";
      item.setAttribute("data-show", "true");
      item.closest(".income-card").querySelector(".income span").innerText =
        income;
    }
  });
});
