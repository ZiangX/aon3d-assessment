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
