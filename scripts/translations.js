// Functions for translating the DOM texts
document.getElementById("lang_btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  document.getElementById("lang_btn").textContent = currentLang.toUpperCase();

  renderProject(projectsInfo[currentLang][currentProjectIndex]);
  applyTranslations(currentLang);

  updatePrivacyErrorText();
});

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
