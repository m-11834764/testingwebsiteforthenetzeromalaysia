const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");

menuButton.addEventListener("click", function () {
  menuList.classList.toggle("show");

  const isOpen = menuList.classList.contains("show");
  menuButton.setAttribute("aria-expanded", isOpen);
});
