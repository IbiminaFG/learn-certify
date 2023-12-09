const featureButton = document.getElementById("feature-button");
const box = document.getElementsByClassName("box-blue")[0];

featureButton.addEventListener("click", function (e) {
  e.preventDefault(); // do not use this for links
  box.classList.toggle("hidden");
});
