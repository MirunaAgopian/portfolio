/**
 * Stores the currently active language for DOM translations.
 * Used by the language toggle button and translation functions.
 * @type {string}
 */
let currentLang = "en";

/**
 * Toggles the current language between English and German,
 * updates the language button label, re-renders the project section
 * (if available), applies all DOM translations, and updates the
 * privacy error text when the function exists.
 * @event click
 */
document.getElementById("lang_btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  document.getElementById("lang_btn").textContent = currentLang.toUpperCase();
  if (typeof renderProject === "function") {
    renderProject(projectsInfo[currentLang][currentProjectIndex]);
  }
  applyTranslations(currentLang);
  if (typeof updatePrivacyErrorText === "function") {
    updatePrivacyErrorText();
  }
});

/**
 * Applies translated text to all DOM elements marked with translation attributes.
 * Updates both normal text nodes and placeholder attributes based on the selected language.
 * @param {string} lang - The language code to apply ("en" or "de").
 */
function applyTranslations(lang) {
  // 1. Normal text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = domInfo[lang][key];
  });

  // 2. Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", domInfo[lang][key]);
  });
}
