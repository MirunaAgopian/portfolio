/**
 * Stores the currently active language for DOM translations.
 * Used by the language toggle button and translation functions.
 * @type {string}
 */
let currentLang = "en";

/**
 * Initializes the webflow:
 * - gets the saved language preference from localStorage
 * - applies translations (default language: English)
 * - sets up the header observer (only on pages where it exists)
 *
 * @returns {void}
 */
function init() {
  currentLang = getLangPreferences() || currentLang;
  applyLanguageToDOM();
  if (typeof initHeaderObserver === "function") {
    initHeaderObserver();
  }
}

/**
 * Initializes the app once the DOM is fully loaded.
 * @event DOMContentLoaded
 */
document.addEventListener("DOMContentLoaded", init);

/**
 * Toggles the current language between English and German,
 * Updates the language button label
 * Saves the language state into localStorage
 * Applies the translation to all necesarry DOM-elements
 * @event click
 */
document.getElementById("lang_btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  saveLangPreferences();
  applyLanguageToDOM();
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

/**
 * Saves the language preferences into localStorage.
 * Overwrites any previously stored value under the "prefferedLanguage" key.
 */
function saveLangPreferences() {
  localStorage.setItem("prefferedLanguage", currentLang);
}

/**
 * Retrieves the saved language preference from localStorage.
 * Returns the stored value under the "prefferedLanguage" key,
 * @returns {string} - "en" or "de", the save language code or an empty string
 */
function getLangPreferences() {
  let storedLangPref = localStorage.getItem("prefferedLanguage") || "";
  return storedLangPref;
}

/**
 * Applies all language‑dependent UI updates:
 * - updates the language button label
 * - re-renders the project section if the page supports it
 * - updates the privacy error message if available
 * - applies translations to all other translatable DOM elements
 *
 * @returns {void}
 */
function applyLanguageToDOM() {
  document.getElementById("lang_btn").textContent = currentLang.toUpperCase();
  if (typeof renderProject === "function") {
    renderProject(projectsInfo[currentLang][currentProjectIndex]);
  }
  if (typeof updatePrivacyErrorText === "function") {
    updatePrivacyErrorText();
  }
  applyTranslations(currentLang);
}
