/**
 * Variable containing all navigation links inside the mobile menu.
 * Used to close the menu when a link is clicked.
 * @type {NodeListOf<HTMLAnchorElement>}
 */
const navLinks = document.querySelectorAll(".menu-options a");

/**
 * Opens or closes the mobile navigation menu by toggling its visibility class.
 * @param {boolean} isOpen - If true, the menu becomes visible; if false, it is hidden.
 */
function toggleMobileNav(isOpen) {
  const nav = document.getElementById("mobie_nav");
  if (isOpen) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
}

/**
 * Opens the mobile navigation when the burger menu is clicked.
 * @event click
 */
document.getElementById("burger_menu").addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileNav(true);
});

/**
 * Closes the mobile navigation when the close button is clicked.
 * @event click
 */
document
  .getElementById("close_mobile_menu_btn")
  .addEventListener("click", () => toggleMobileNav(false));

/**
 * Closes the mobile navigation when clicking outside of it.
 * @event click
 */
document.addEventListener("click", (event) => {
  const nav = document.getElementById("mobie_nav");
  if (!nav.classList.contains("visible")) return;
  if (nav.contains(event.target)) return;
  toggleMobileNav(false);
});

/**
 * Closes the mobile navigation when any menu link is clicked.
 * @event click
 */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav(false);
  });
});
