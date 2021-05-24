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

// Active the nav-link
const currentPath = window.location.pathname;
const linkHome = document.querySelector("#link-home");
const linkGallery = document.querySelector("#link-gallery");
if (currentPath !== "/gallery.html") {
  linkHome.classList.add("active");
  linkGallery.classList.remove("active");
} else {
  linkHome.classList.remove("active");
  linkGallery.classList.add("active");
}

// Slider control
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(n);
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

// Show photos
var photoPage = 1;
// Only run showPhoto function in the gallery page
if (window.location.pathname === "/gallery.html") showPhotos(photoPage);

function currentPage(n) {
  var newPage = 0;

  if (photoPage === 1) {
    // in the first page
    newPage = photoPage + n - 1;
  } else if (photoPage === 834) {
    // in the last page
    newPage = photoPage + n - 3;
  } else {
    newPage = photoPage + n - 2;
  }
  photoPage = newPage;
  showPhotos(newPage);
}

function plusPage(n) {
  showPhotos((photoPage += n));
}

async function showPhotos(page) {
  var [prevBtn, firstItem, secondItem, thirdItem] = document.getElementsByClassName("page-item");

  // Remove all pre existing active or disable class
  firstItem.className = firstItem.className.replace(" active", "");
  secondItem.className = secondItem.className.replace(" active", "");
  thirdItem.className = thirdItem.className.replace(" active", "");
  prevBtn.className = prevBtn.className.replace(" disabled", "");

  if (page === 1) {
    firstItem.children[0].innerText = 1;
    secondItem.children[0].innerText = 2;
    thirdItem.children[0].innerText = 3;
    prevBtn.className += " disabled";
    firstItem.className += " active";
  } else if (page === 834) {
    //When the page hits the end
    firstItem.children[0].innerText = page - 2;
    secondItem.children[0].innerText = page - 1;
    thirdItem.children[0].innerText = page;
    thirdItem.className += " active";
  } else {
    firstItem.children[0].innerText = page - 1;
    secondItem.children[0].innerText = page;
    thirdItem.children[0].innerText = page + 1;
    secondItem.className += " active";
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`);
  const photos = await res.json();
  var photoGallery = document.querySelector("#photoGallery");

  // Remove the existing children elements
  photoGallery.innerHTML = "";

  photos.forEach((photo) => {
    var col = document.createElement("div");
    col.className = "col px-3 pb-5";
    var card = document.createElement("div");
    card.className = "card h-100 justify-content-between";
    const img = document.createElement("img");
    img.setAttribute("src", photo.thumbnailUrl);
    var h3 = document.createElement("h3");
    h3.className = "card-title mb-4";
    h3.innerHTML = photo.title;

    card.appendChild(h3);
    card.appendChild(img);
    col.appendChild(card);
    photoGallery.appendChild(col);
  });
}
