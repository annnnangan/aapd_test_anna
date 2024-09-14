import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const pageTitleElement = document.getElementById("pageTitle");
  const page = header.getAttribute("data-page");

  // 將 page 參數直接設為標題
  pageTitleElement.textContent = page.charAt(0).toUpperCase() + page.slice(1);
});
