$(document).on("click", "ul .rate-btn", function (e) {
  $(this).addClass("rate-active ").siblings().removeClass("rate-active ");
});
let rateBtn = document.querySelectorAll(".rate-btn");
let rateNumbar = document.getElementById("rate-number");

rateBtn[0].addEventListener("click", function () {
  rateNumbar.innerText = "1";
});
rateBtn[1].addEventListener("click", function () {
  rateNumbar.innerText = "2";
});
rateBtn[2].addEventListener("click", function () {
  rateNumbar.innerText = "3";
});
rateBtn[3].addEventListener("click", function () {
  rateNumbar.innerText = "4";
});
rateBtn[4].addEventListener("click", function () {
  rateNumbar.innerText = "5";
});

let ratingCard = document.querySelector(".card");
let completeCard = document.querySelector(".complete");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  completeCard.style.display = "flex";
  ratingCard.style.display = "none";
});
