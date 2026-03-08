const DOM = selectProjectDOM();
let currentProjectIndex = 0;

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

  DOM.projectCounterDom.textContent = `${currentProjectIndex + 1}/${projectsInfo.length}`;
}

function init() {
  renderProject(projectsInfo[currentProjectIndex]);
}

function showNextProject() {
  currentProjectIndex++;
  if (currentProjectIndex >= projectsInfo.length) {
    currentProjectIndex = 0;
  }
  renderProject(projectsInfo[currentProjectIndex]);
}

function showPreviousProject() {
  currentProjectIndex--;
  if (currentProjectIndex < 0) {
    currentProjectIndex = projectsInfo.length - 1;
  }
  renderProject(projectsInfo[currentProjectIndex]);
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

  if (nameInputValue === "") {
    nameField.classList.add("error");
    nameField.placeholder = "Please enter your name.";
  } else {
    nameField.classList.remove("error");
    nameField.placeholder = "";
  }
}


function handleBlurEmail() {
  const emailField = document.getElementById("email");
  const emailInputValue = emailField.value.trim();
  const atIndex = emailInputValue.indexOf("@");
  const dotIndex = emailInputValue.indexOf(".", atIndex + 1);
  const localPart = emailInputValue.slice(0, atIndex);
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";
  let invalidCharacterFound = false;
  for (let character of localPart) {
    if (!allowedCharacters.includes(character)) {
      invalidCharacterFound = true;
      break;
    }
  }

  const isInvalid =
    emailInputValue === "" ||
    invalidCharacterFound ||
    //No @ found
    atIndex === -1 ||
    //No . after @
    dotIndex === -1 ||
    //Dot placement rules
    dotIndex < atIndex ||
    dotIndex === atIndex + 1 ||
    dotIndex === emailInputValue.length - 1 ||
    //Domain and top-level-domain rules
    dotIndex - atIndex - 1 < 2 ||
    emailInputValue.length - dotIndex - 1 < 2 ||
    //Double characters
    emailInputValue.includes("..") ||
    emailInputValue.includes("--") ||
    emailInputValue.includes("__") ||
    emailInputValue.includes("@@") ||
    // End of local part rules
    emailInputValue[atIndex - 1] === "." ||
    emailInputValue[atIndex - 1] === "-" ||
    emailInputValue[atIndex - 1] === "_" ||
    // Start of local part rules
    localPart[0] === "-" ||
    localPart[0] === "_" ||
    localPart[0] === "." ||
    //ENd of domain rules, no "_" or "-" after domain name
    emailInputValue[dotIndex - 1] === "-" ||
    emailInputValue[dotIndex - 1] === "_";

  if (isInvalid) {
    emailField.classList.add("error");
    emailField.placeholder = "Please enter your email.";
  } else {
    emailField.classList.remove("error");
    emailField.placeholder = "";
  }
}

document.getElementById("name").addEventListener("blur", handleBlurName);
document.getElementById("email").addEventListener("blur", handleBlurEmail);
