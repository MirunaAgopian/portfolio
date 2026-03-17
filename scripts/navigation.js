const navLinks = document.querySelectorAll(".menu-options a");

function toggleMobileNav(isOpen) {
  const nav = document.getElementById("mobie_nav");
  if (isOpen) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
}

document.getElementById("burger_menu").addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileNav(true);
});

document
  .getElementById("close_mobile_menu_btn")
  .addEventListener("click", () => toggleMobileNav(false));

document.addEventListener("click", (event) => {
  const nav = document.getElementById("mobie_nav");
  if (!nav.classList.contains("visible")) return;
  if (nav.contains(event.target)) return;
  toggleMobileNav(false);
});


navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav(false);
  });
});