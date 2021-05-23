const headerNavbarToggler = document.querySelector("#headerNavbarToggler");
const headerNavbarCollapse = document.querySelector("#headerNavbarCollapse");

const accountDropdownMenuLink = document.querySelector("#accountDropdownMenuLink");
const accountDropdownMenu = document.querySelector("#accountDropdownMenu");

accountDropdownMenuLink.addEventListener("click", function () {
  if (accountDropdownMenu.classList.contains("show")) {
    accountDropdownMenu.classList.remove("show");
  } else {
    accountDropdownMenu.classList.add("show");
  }
});

headerNavbarToggler.addEventListener("click", function () {
  if (headerNavbarCollapse.classList.contains("show")) {
    headerNavbarCollapse.classList.remove("show");
  } else {
    headerNavbarCollapse.classList.add("show");
  }
});

// Slider control
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  var dots = document.getElementsByClassName("slider-indicator");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
