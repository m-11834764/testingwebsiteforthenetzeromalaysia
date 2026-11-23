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
