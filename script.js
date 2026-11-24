// show or hide menu
const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", function () {
  menuList.classList.toggle("show");
});

const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    alert("Form submitted");
  });
}
