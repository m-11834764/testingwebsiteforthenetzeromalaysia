// Menu button: show or hide the menu links when the button is clicked
const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", function () {
  // add the "show" class if it is not there, remove it if it is
  menuList.classList.toggle("show");

  // tell screen readers whether the menu is open or closed
  const isOpen = menuList.classList.contains("show");
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Contact form: pop up a message when the form is submitted
const contactForm = document.getElementById("contact-form");

// only the Contact Us page has this form, so skip it on the other pages
if (contactForm) {
  contactForm.addEventListener("submit", function () {
    alert("Form submitted");
  });
}
