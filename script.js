const DOM = selectProjectDOM();
let currentProjectIndex = 0;
let currentLang = "en";

function init() {
  renderProject(projectsInfo[currentLang][currentProjectIndex]);
  initHeaderObserver();
  applyTranslations(currentLang);
}

document.addEventListener("DOMContentLoaded", init);

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

document.querySelector(".emoji-img").addEventListener("mouseenter", ()=> showAbMeOverlay(true));
document.querySelector(".emoji-img").addEventListener("mouseleave", ()=> showAbMeOverlay(false));

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

document.querySelector(".overlay-close-btn").addEventListener("click", () => showSkillsOverlay(false));
document.querySelector(".orange-wheel").addEventListener("mouseenter", () => showSkillsOverlay(true));

function showProjectsOverlay(show) {
  const overlay = document.getElementById("projects_overlay");
  if (show) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

document.getElementById("project_icon").addEventListener("mouseenter", ()=> showProjectsOverlay(true));
document.getElementById("project_icon").addEventListener( 'mouseleave', ()=> showProjectsOverlay(false));

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

document.getElementById("prev_proj_btn").addEventListener("click", ()=> showPreviousProject());
document.getElementById("next_proj_btn").addEventListener("click", ()=> showNextProject());



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

//Smooth scroll behaviour for side dots

document.querySelectorAll(".side-dots a").forEach(link => {
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
