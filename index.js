function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function resize() {
  document.querySelector(".starbucks").style.width = "320px";
}

function size() {
  document.querySelector(".starbucks").style.width = "250px";
}

function changeColor(color) {
  document.querySelector(".circle").style.background = color;
}

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
