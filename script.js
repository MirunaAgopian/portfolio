const DOM = selectProjectDOM();
let currentProjectIndex = 0;
let privacyCheckBoxChecked = false;
let currentLang = "en";

function showAbMeOverlay(show) {
  const overlay = document.getElementById("ab_me");
  if (show) {
    overlay.classList.remove("d-none");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add("visible");
      });
    });
  } else {
    overlay.classList.remove("visible");
    overlay.addEventListener(
      "transitionend",
      () => {
        if (!overlay.classList.contains("visible")) {
          overlay.classList.add("d-none");
        }
      },
      { once: true },
    );
  }
}

function showSkillsOverlay(show) {
  const overlay = document.getElementById("overlay_skills");
  if (show) {
    overlay.classList.remove("d-none");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add("visible");
      });
    });
  } else {
    overlay.classList.remove("visible");
    overlay.addEventListener(
      "transitionend",
      () => {
        if (!overlay.classList.contains("visible")) {
          overlay.classList.add("d-none");
        }
      },
      { once: true },
    );
  }
}

function showProjectsOverlay(show) {
  const overlay = document.getElementById("projects_overlay");
  if (show) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

function selectProjectDOM() {
  return {
    projectImgDom: document.getElementById("project_img"),
    projectTitleDom: document.getElementById("project_title"),
    projectIconDom: document.getElementById("project_icon"),
    projectOvelayDescDom: document.getElementById(
      "project_overlay_description",
    ),
    projectBlackBoxDom: document.getElementById("black_box_description"),
    projectGitHubBtn: document.getElementById("project_github_btn"),
    projectTestBtn: document.getElementById("project_test_btn"),
    projectCounterDom: document.querySelector(".counter p"),
    techSpans: [
      document.getElementById("span1"),
      document.getElementById("span2"),
      document.getElementById("span3"),
      document.getElementById("span4"),
    ],
  };
}

function renderProject(project) {
  DOM.projectImgDom.src = project.projectImage;
  DOM.projectImgDom.alt = project.projectAlt;

  DOM.projectTitleDom.textContent = project.projectTitle;
  DOM.projectIconDom.src = project.projectIcon;

  DOM.projectOvelayDescDom.textContent = project.projectOverlayDescription;
  DOM.projectBlackBoxDom.textContent = project.projectBlackBoxDescription;

  DOM.projectGitHubBtn.href = project.projectGitHubLink;
  DOM.projectTestBtn.href = project.projectLink || "#";

  DOM.techSpans.forEach((span, i) => {
    span.textContent = project.projectTechnologies[i] || "";
  });

  DOM.projectCounterDom.textContent = `${currentProjectIndex + 1}/${projectsInfo[currentLang].length}`;
}

function init() {
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
  initHeaderObserver();
  applyTranslations(currentLang);
}

function showNextProject() {
  currentProjectIndex++;
  if (currentProjectIndex >= projectsInfo[currentLang].length) {
    currentProjectIndex = 0;
  }
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
}

function showPreviousProject() {
  currentProjectIndex--;
  if (currentProjectIndex < 0) {
    currentProjectIndex = projectsInfo[currentLang].length - 1;
  }
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
}

//creates smooth scroll behaviour to hero for the bouncing arrow
//in contact section
document.querySelector(".go-up-link a").addEventListener("click", function (e) {
  e.preventDefault();
  const hero = document.querySelector("#hero");
  const scroller = document.querySelector("main");
  scroller.scrollTo({
    top: hero.offsetTop,
    behavior: "smooth",
  });
});

// Functions for input in contact form

function handleBlurName() {
  const nameField = document.getElementById("name");
  const nameInputValue = nameField.value.trim();

  if (nameInputValue === "" || nameInputValue.length < 3) {
    nameField.classList.add("error");
    nameField.placeholder = domInfo[currentLang].contactFormNameError;
  } else {
    nameField.classList.remove("error");
    nameField.placeholder = "";
  }
  updateSubmitButtonState();
}

function handleBlurEmail() {
  const emailField = document.getElementById("email");

  if (!emailField.checkValidity()) {
    emailField.classList.add("error");
    emailField.placeholder = domInfo[currentLang].contactFormMailError;
  } else {
    emailField.classList.remove("error");
    emailField.placeholder = "";
  }

  updateSubmitButtonState();
}

function handleBlurTextarea() {
  const textarea = document.getElementById("message");
  const textareaValue = textarea.value.trim();

  if ((textareaValue === "") | (textareaValue.length < 5)) {
    textarea.classList.add("error");
    textarea.placeholder = domInfo[currentLang].contactFormTextareaError;
  } else {
    textarea.classList.remove("error");
    textarea.placeholder = "";
  }
  updateSubmitButtonState();
}

function handleCheckbox() {
  const checkbox = document.getElementById("checkbox");
  privacyCheckBoxChecked = true;

  checkbox.classList.toggle("checked");
  updatePrivacyErrorText();
  updateSubmitButtonState();
}

function updatePrivacyErrorText() {
  const checkbox = document.getElementById("checkbox");
  const errorMsg = document.getElementById("error_msg_container");

  if (!privacyCheckBoxChecked) {
    errorMsg.textContent = "";
    return;
  }

  if (checkbox.classList.contains("checked")) {
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = domInfo[currentLang].contactPrivacyPolicyError;
  }
}

function updateSubmitButtonState() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit_msg");

  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const messageValue = textarea.value.trim();

  const nameValid =
    nameValue.length >= 3 && !nameField.classList.contains("error");

  const emailValid =
    emailValue.length > 0 && !emailField.classList.contains("error");

  const messageValid =
    messageValue.length >= 5 && !textarea.classList.contains("error");

  const checkboxChecked = checkbox.classList.contains("checked");

  if (nameValid && emailValid && messageValid && checkboxChecked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById("name").addEventListener("blur", handleBlurName);
document.getElementById("email").addEventListener("blur", handleBlurEmail);
document.getElementById("message").addEventListener("blur", handleBlurTextarea);
document.getElementById("checkbox").addEventListener("click", handleCheckbox);

//live input validation, that enabled the submit message button
document.addEventListener("DOMContentLoaded", () => {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const textarea = document.getElementById("message");

  nameField.addEventListener("input", handleBlurName);
  emailField.addEventListener("input", handleBlurEmail);
  textarea.addEventListener("input", handleBlurTextarea);
});

//I need to disable false e-mail validation at chrome autofill!!
//I also need to empty fields when msj was submitted

//Header functions
function setHeader(section) {
  const header = document.querySelector("header");
  const theme = section.dataset.theme;

  hideHeaderOnMobile(theme);

  if (theme === "hero") {
    header.classList.remove("header--compact--dark");
    header.classList.remove("header--compact--light");
    return;
  }

  if (theme === "dark") {
    header.classList.add("header--compact--dark");
    header.classList.remove("header--compact--light");
    return;
  }

  if (theme === "light") {
    header.classList.add("header--compact--light");
    header.classList.remove("header--compact--dark");
    return;
  }
}

function hideHeaderOnMobile(theme) {
  const header = document.querySelector("header");
  if (window.innerWidth <= 850) {
    if (theme === "hero") {
      header.classList.remove("d-none");
    } else {
      header.classList.add("d-none");
    }
    return;
  }
  header.classList.remove("d-none");
}

//checks the current section to update the header visibility
function getCurrentSection() {
  const sections = document.querySelectorAll("section");

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.5 &&
      rect.bottom > window.innerHeight * 0.5;
    if (inView) return section;
  }

  return null;
}

window.addEventListener("resize", () => {
  const current = getCurrentSection();
  if (current) setHeader(current);
});

function initHeaderObserver() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeader(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );
  sections.forEach((section) => observer.observe(section));
}

//Mobile nav and burger menu functions
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

const navLinks = document.querySelectorAll(".menu-options a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav(false);
  });
});

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

  // 3. HTML content
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = domInfo[lang][key];
  });
}
