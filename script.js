/**
 * Variable containing all DOM-Elements from the projects section.
 * Each element is being updated dynamically.
 *  @type {Object<string, HTMLElement>}
 * @typedef {Object} Project
 * @property {string} projectImage - Path to the project's main image.
 * @property {string} projectAlt - Accessible alt text for the project image.
 * @property {string} projectTitle - Display title of the project.
 * @property {string} projectIcon - Path to the small icon used in the UI.
 * @property {string} projectOverlayDescription - Long description shown in the overlay.
 * @property {string[]} projectTechnologies - List of technologies used.
 * @property {string} projectBlackBoxDescription - Short description shown in the black box.
 * @property {string} projectGitHubLink - URL to the GitHub repository.
 * @property {string} projectLink - URL to the live project (optional).
 */
const DOM = selectProjectDOM();

/**
 * Counter for the project index.
 * Used by showNextProject() and showPreviousProject() to navigate the project list.
 * @type {number}
 */
let currentProjectIndex = 0;

/**
 * Shows the project description overlay when the user hovers over the project icon.
 * @event mouseenter
 */
document
  .getElementById("project_icon")
  .addEventListener("mouseenter", () => showProjectsOverlay(true));

/**
 * Hides the project description overlay when the user moves the cursor away from the project icon.
 * @event mouseleave
 */
document
  .getElementById("project_icon")
  .addEventListener("mouseleave", () => showProjectsOverlay(false));

/**
 * Selects and returns all DOM elements used in the project section.
 * @returns {ProjectDOM} Object containing references to all project‑related DOM nodes.
 */
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

/**
 * Renders the selected project into the project section by updating all related DOM elements.
 * @param {Project} project - The project data object to display.
 */
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

/**
 * Advances to the next project and updates the rendered content.
 * Wraps to the first project when reaching the end of the list.
 */
function showNextProject() {
  currentProjectIndex++;
  if (currentProjectIndex >= projectsInfo[currentLang].length) {
    currentProjectIndex = 0;
  }
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
}

/**
 * Moves to the previous project and updates the rendered content.
 * Wraps to the last project when moving before the first item.
 */
function showPreviousProject() {
  currentProjectIndex--;
  if (currentProjectIndex < 0) {
    currentProjectIndex = projectsInfo[currentLang].length - 1;
  }
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
}

/**
 * Shows the previous project when the user clicks the "previous" button.
 * @event click
 */
document
  .getElementById("prev_proj_btn")
  .addEventListener("click", () => showPreviousProject());

/**
 * Shows the next project when the user clicks the "next" button.
 * @event click
 */
document
  .getElementById("next_proj_btn")
  .addEventListener("click", () => showNextProject());

/**
 * Shows or hides the "About Me" overlay with a smooth transition.
 * @param {boolean} show - If true, the overlay fades in; if false, it fades out.
 */
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

/**
 * Shows the "About Me" overlay when hovering the emoji image.
 * @event mouseenter
 */
document
  .querySelector(".emoji-img")
  .addEventListener("mouseenter", () => showAbMeOverlay(true));

/**
 * Hides the "About Me" overlay when the cursor leaves the emoji image.
 * @event mouseleave
 */
document
  .querySelector(".emoji-img")
  .addEventListener("mouseleave", () => showAbMeOverlay(false));

/**
 * Shows or hides the Skills overlay with a smooth transition.
 * @param {boolean} show - If true, the overlay fades in; if false, it fades out.
 */
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

/**
 * Hides the Skills overlay when the close button is clicked.
 * @event click
 */
document
  .querySelector(".overlay-close-btn")
  .addEventListener("click", () => showSkillsOverlay(false));

/**
 * Shows the Skills overlay when hovering over the orange wheel.
 * @event mouseenter
 */
document
  .querySelector(".orange-wheel")
  .addEventListener("mouseenter", () => showSkillsOverlay(true));

/**
 * Shows or hides the Projects overlay by toggling its visibility class.
 * @param {boolean} show - If true, the overlay is displayed; if false, it is hidden.
 */
function showProjectsOverlay(show) {
  const overlay = document.getElementById("projects_overlay");
  if (show) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

/**
 * Smoothly scrolls back to the hero section when the bouncing arrow is clicked.
 * @event click
 */
document.querySelector(".go-up-link a").addEventListener("click", function (e) {
  e.preventDefault();
  const hero = document.querySelector("#hero");
  const scroller = document.querySelector("main");
  scroller.scrollTo({
    top: hero.offsetTop,
    behavior: "smooth",
  });
});

/**
 * Smoothly scrolls to the contact section when the buttons are clicked.
 * @event click
 */
document.querySelectorAll(".smooth-scroll").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const contact = document.querySelector("#contact");
    const scroller = document.querySelector("main");
    scroller.scrollTo({
      top: contact.offsetTop,
      behavior: "smooth",
    });
  });
});

/**
 * Smoothly scrolls to the target section when a side‑dot link is clicked.
 * @event click
 */
document.querySelectorAll(".side-dots a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const scroller = document.querySelector("main");

    scroller.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

/**
 * Updates the header appearance based on the theme of the currently visible section.
 * Applies compact light/dark styles or resets to the hero style.
 * @param {HTMLElement} section - The section element whose theme determines the header style.
 */
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

/**
 * Shows or hides the header on mobile devices depending on the section theme.
 * The header is hidden on mobile for all sections except the hero.
 * @param {string} theme - The theme of the currently active section.
 */
function hideHeaderOnMobile(theme) {
  const header = document.querySelector("header");
  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    if (theme === "hero") {
      header.classList.remove("d-none");
    } else {
      header.classList.add("d-none");
    }
    return;
  }
  header.classList.remove("d-none");
}

/**
 * Determines which section is currently centered in the viewport.
 * Used to update the header based on scroll position.
 * @returns {HTMLElement|null} The section currently in view, or null if none match.
 */
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

/**
 * Initializes an IntersectionObserver to update the header style
 * whenever a section enters the viewport.
 */
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
      threshold: 0.3,
      rootMargin: "-20% 0px -20% 0px",
    },
  );
  sections.forEach((section) => observer.observe(section));
}
