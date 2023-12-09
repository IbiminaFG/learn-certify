//let or const for declaring variables
let menuOpenElement = document.getElementById("mobile-menu-open");
let asideElement = document.getElementsByTagName("aside")[0];
const menuCloseElement =
  document.getElementsByClassName("mobile-menu-close")[0];

// adding click eventlistener
menuOpenElement.addEventListener("click", function () {
  asideElement.style.display = "block";
});

menuCloseElement.addEventListener("click", function () {
  asideElement.style.display = "none";
});
