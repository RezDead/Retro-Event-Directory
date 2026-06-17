const grid = document.querySelector("#projectGrid");
const randomBtn = document.querySelector("#randomBtn");
const projectCount = document.querySelector("#projectCount");
const sparkleBtn = document.querySelector("#sparkleBtn");
const glitchBtn = document.querySelector("#glitchBtn");
const moonBtn = document.querySelector("#moonBtn");
const moonIcon = document.querySelector("#moonIcon");
const moonText = document.querySelector("#moonText");
const addStickerBtn = document.querySelector("#addStickerBtn");
const clearStickersBtn = document.querySelector("#clearStickersBtn");
const warningWidget = document.querySelector(".widget-warning");
const warningText = document.querySelector(".widget-warning p");
const loadingWidget = document.querySelector(".widget-loading");
const loadingTitle = document.querySelector(".widget-loading span");
const loadingCaption = document.querySelector(".widget-loading small");
const loadingBarFill = document.querySelector(".fake-loading-bar i");

const imageLightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");

let sparklesEnabled = false;
let moonIndex = 0;
let transitionInProgress = false;
let pixelFeedCount = 0;
let pixelResetTimer = null;
let loadingAnnoyanceCount = 0;
let loadingResetTimer = null;
let loadingSpeedTimer = null;

const projectIdleLimit = 30000;
let projectIdleTimer = null;

const moonPhases = [
  { icon: "◐", text: "Moon: Waxing" },
];

const surpriseStickers = [
  "MADE WITH PANIC",
  "POWER BY HOPES AND DREAMS",
  "ERROR: 404",
  "TOTALLY NOT A VIRUS",
  "uh oh",
  ":(",
  ":)",
  "YIPPEE!!!",
  "why did you click me",
  "THIS IS A STICKER",
  "62M TONS E-WASTE A YEAR",
  "REUSE, RECYLCE, REPEAT",
  "???",
  "!!!",
  "THE PIXELS MUST STARVE",
  "MADE WITH FEAR",
  "MADE WITH LOTS OF COFFEE",
  "Squiggle-Toot"
];

const pixelWarningMessages = [
  "Do not feed the pixels",
  "The pixels are enticed",
  "Pixel hunger: 25%",
  "Pixel hunger: 50%",
  "Pixel hunger: 75%",
  "Please stop.",
  "This is for your own good.",
  "PIXELS FULLY FED. RUN."
];

const fakeDownloadSpeeds = [
  "Speed: 4 KB/s",
  "Speed: 999 KB/s",
  "Speed: 0 KB/s",
  "Speed: -12 KB/s",
  "Speed: 56 KB/s-ish",
  "Speed: one floppy/min",
  "Speed: buffering...",
  "Speed: emotionally unavailable",
  "Speed: suspiciously fast"
];

const loadingAnnoyanceMessages = [
  {
    title: "Loading...",
    caption: "This May take awhile..."
  },
  {
    title: "Still Loading...",
    caption: "Please be patient."
  },
  {
    title: "Still Loading...",
    caption: "Clicking does not help."
  },
  {
    title: "Working...",
    caption: "I am trying my best."
  },
  {
    title: "Please Stop.",
    caption: "The pixels are heavy."
  },
  {
    title: "Fine.",
    caption: "You load it."
  },
  {
    title: "System Tired.",
    caption: "Estimated time: no."
  }
];

function projectCard(project) {
  return `
    <a class="project-card" href="project.html?id=${project.id}" data-category="${project.category || "Project File"}">
      <img src="${project.image}" alt="${project.title}" />
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <p>${project.location}</p>
        <small>${project.people.join(", ")}</small>
      </div>
    </a>
  `;
}

function renderDirectory() {
  if (!grid) return;

  grid.innerHTML = projects.map(projectCard).join("");

  if (projectCount) {
    projectCount.textContent = `${projects.length} files`;
  }
}

function randomCenteredPosition() {
  const stickerWidth = 300;
  const stickerHeight = 140;
  const padding = 18;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const maxOffsetX = window.innerWidth * 0.3;
  const maxOffsetY = window.innerHeight * 0.26;

  let x = centerX + (Math.random() - 0.5) * maxOffsetX * 2 - stickerWidth / 2;
  let y = centerY + (Math.random() - 0.5) * maxOffsetY * 2 - stickerHeight / 2;

  x = Math.max(padding, Math.min(x, window.innerWidth - stickerWidth - padding));
  y = Math.max(46, Math.min(y, window.innerHeight - stickerHeight - padding));

  return { x, y };
}

function stampRandomSticker() {
  const activeStickers = document.querySelectorAll(".page-sticker");

  if (activeStickers.length >= 5) {
    activeStickers[0].remove();
  }

  const sticker = document.createElement("button");
  const { x, y } = randomCenteredPosition();
  const rotate = Math.floor(Math.random() * 35) - 17;
  const text = surpriseStickers[Math.floor(Math.random() * surpriseStickers.length)];

  sticker.className = "page-sticker";
  sticker.type = "button";
  sticker.textContent = text;
  sticker.title = "Click to remove sticker";

  sticker.style.left = `${x}px`;
  sticker.style.top = `${y}px`;
  sticker.style.transform = `rotate(${rotate}deg)`;

  sticker.addEventListener("click", () => {
    sticker.remove();
  });

  document.body.appendChild(sticker);
}

function clearAllStickers() {
  document.querySelectorAll(".page-sticker").forEach((sticker) => {
    sticker.remove();
  });
}

function resetPixelWarning() {
  pixelFeedCount = 0;

  if (warningText) {
    warningText.textContent = pixelWarningMessages[0];
  }

  if (warningWidget) {
    warningWidget.classList.remove("pixel-fed");
  }
}

function spawnFallingPixels(sourceElement) {
  if (!sourceElement) return;

  const rect = sourceElement.getBoundingClientRect();
  const pixelCount = 18;

  for (let i = 0; i < pixelCount; i += 1) {
    const pixel = document.createElement("span");

    const startX = rect.left + rect.width * 0.5 + (Math.random() - 0.5) * rect.width * 0.75;
    const startY = rect.top + rect.height * 0.68 + (Math.random() - 0.5) * rect.height * 0.3;
    const driftX = Math.floor(Math.random() * 120) - 60;
    const fallDistance = Math.floor(Math.random() * 120) + 80;
    const rotate = Math.floor(Math.random() * 180) - 90;
    const size = Math.floor(Math.random() * 8) + 7;

    pixel.className = "falling-pixel";
    pixel.style.left = `${startX}px`;
    pixel.style.top = `${startY}px`;
    pixel.style.width = `${size}px`;
    pixel.style.height = `${size}px`;
    pixel.style.setProperty("--pixel-drift-x", `${driftX}px`);
    pixel.style.setProperty("--pixel-fall-distance", `${fallDistance}px`);
    pixel.style.setProperty("--pixel-rotate", `${rotate}deg`);
    pixel.style.animationDelay = `${Math.random() * 0.12}s`;

    document.body.appendChild(pixel);

    setTimeout(() => {
      pixel.remove();
    }, 950);
  }
}

function feedPixels() {
  if (!warningWidget || !warningText) return;

  pixelFeedCount = Math.min(pixelFeedCount + 1, pixelWarningMessages.length - 1);
  warningText.textContent = pixelWarningMessages[pixelFeedCount];

  warningWidget.classList.add("pixel-fed");
  spawnFallingPixels(warningWidget);

  clearTimeout(pixelResetTimer);

  pixelResetTimer = setTimeout(() => {
    resetPixelWarning();
  }, 3500);
}

function randomLoadingWidth() {
  return Math.floor(Math.random() * 82) + 8;
}

function updateFakeDownloadSpeed() {
  if (!loadingCaption || loadingAnnoyanceCount > 0) return;

  const speed = fakeDownloadSpeeds[Math.floor(Math.random() * fakeDownloadSpeeds.length)];
  loadingCaption.textContent = speed;

  if (loadingBarFill) {
    loadingBarFill.style.width = `${randomLoadingWidth()}%`;
  }
}

function startFakeDownloadSpeed() {
  if (!loadingWidget || loadingSpeedTimer) return;

  updateFakeDownloadSpeed();

  loadingSpeedTimer = setInterval(() => {
    updateFakeDownloadSpeed();
  }, 3000);
}

function resetLoadingWidget() {
  loadingAnnoyanceCount = 0;

  if (loadingTitle) {
    loadingTitle.textContent = loadingAnnoyanceMessages[0].title;
  }

  if (loadingCaption) {
    loadingCaption.textContent = loadingAnnoyanceMessages[0].caption;
  }

  if (loadingBarFill) {
    loadingBarFill.style.width = "72%";
  }

  if (loadingWidget) {
    loadingWidget.classList.remove("loading-annoyed");
  }

  clearTimeout(loadingResetTimer);

  setTimeout(() => {
    updateFakeDownloadSpeed();
  }, 900);
}

function annoyLoadingWidget() {
  if (!loadingWidget || !loadingTitle || !loadingCaption) return;

  loadingAnnoyanceCount = Math.min(
    loadingAnnoyanceCount + 1,
    loadingAnnoyanceMessages.length - 1
  );

  const currentMessage = loadingAnnoyanceMessages[loadingAnnoyanceCount];

  loadingTitle.textContent = currentMessage.title;
  loadingCaption.textContent = currentMessage.caption;
  loadingWidget.classList.add("loading-annoyed");

  if (loadingBarFill) {
    const width = loadingAnnoyanceCount >= loadingAnnoyanceMessages.length - 2
      ? Math.floor(Math.random() * 14) + 3
      : randomLoadingWidth();

    loadingBarFill.style.width = `${width}%`;
  }

  clearTimeout(loadingResetTimer);

  loadingResetTimer = setTimeout(() => {
    resetLoadingWidget();
  }, 4500);
}

function triggerVhsProjectTransition(destinationUrl) {
  if (transitionInProgress) return;

  transitionInProgress = true;

  const overlay = document.createElement("div");
  overlay.className = "vhs-transition-overlay";
  overlay.innerHTML = `
    <div class="vhs-transition-label">
      <span>◀◀ REW</span>
      <small>LOADING PROJECT FILE</small>
    </div>
  `;

  document.body.classList.add("vhs-transitioning");
  document.body.appendChild(overlay);

  setTimeout(() => {
    window.location.href = destinationUrl;
  }, 1150);
}

function showFakeBlueScreen() {
  if (document.querySelector(".bsod-overlay")) return;

  document.body.classList.add("glitching");

  if (glitchBtn) {
    glitchBtn.textContent = "ERROR";
  }

  const bsod = document.createElement("div");
  bsod.className = "bsod-overlay";
  bsod.setAttribute("role", "dialog");
  bsod.setAttribute("aria-label", "Fake blue screen of death");
  bsod.innerHTML = `
    <div class="bsod-window">
      <p class="bsod-face">:(</p>

      <h1>Oops! Your webpage has run into a problem.</h1>

      <p>
        Maybe don't press the "DO NOT PRESS" button.
        Anyways, we're collecting fake error info and will momentarily return to your regularly scheduled program.
      </p>

      <div class="bsod-progress">
        <span>0% complete</span>
        <i></i>
      </div>

      <pre>
STOP CODE: YOU_PRESSED_THE_BUTTON
FILE: directory.exe
STATUS: Running on hopes and dreams.
      </pre>
    </div>
  `;

  document.body.appendChild(bsod);

  let progress = 0;
  const progressText = bsod.querySelector(".bsod-progress span");
  const progressBar = bsod.querySelector(".bsod-progress i");

  const progressTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 4;

    if (progress >= 100) {
      progress = 100;
      clearInterval(progressTimer);
    }

    progressText.textContent = `${progress}% complete`;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }, 500);

  setTimeout(() => {
    clearInterval(progressTimer);
    bsod.remove();

    document.body.classList.remove("glitching");

    if (glitchBtn) {
      glitchBtn.innerHTML = "Do Not<br />Press";
    }
  }, 8000);
}

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function findCurrentProject() {
  const projectId = getProjectIdFromUrl();

  if (!projectId || !Array.isArray(projects)) {
    return null;
  }

  return projects.find((project) => project.id === projectId);
}

function renderProjectPage() {
  const projectPage = document.querySelector("#projectPage");

  if (!projectPage) return;

  const project = findCurrentProject();

  const filePath = document.querySelector("#projectFilePath");
  const heroImage = document.querySelector("#projectHeroImage");
  const category = document.querySelector("#projectCategory");
  const title = document.querySelector("#projectTitle");
  const people = document.querySelector("#projectPeople");
  const summary = document.querySelector("#projectSummary");
  const descriptionSection = document.querySelector("#projectDescriptionSection");
  const description = document.querySelector("#projectDescription");
  const detailsSection = document.querySelector("#projectDetailsSection");
  const details = document.querySelector("#projectDetails");
  const gallerySection = document.querySelector("#projectGallerySection");
  const gallery = document.querySelector("#projectGallery");

  if (!project) {
    document.title = "Project Not Found";

    if (filePath) {
      filePath.textContent = "project_file://missing";
    }

    if (title) {
      title.textContent = "404: Project File Missing";
    }

    if (people) {
      people.textContent = "";
    }

    if (summary) {
      summary.textContent = "This project file could not be found. Use the back button above to return to the directory.";
    }

    if (heroImage) {
      heroImage.remove();
    }

    if (descriptionSection) descriptionSection.remove();
    if (detailsSection) detailsSection.remove();
    if (gallerySection) gallerySection.remove();

    return;
  }

  document.title = `${project.title} | Project File`;

  if (filePath) {
    filePath.textContent = `project_file://${project.id}`;
  }

  if (heroImage) {
    heroImage.src = project.image || "";
    heroImage.alt = project.title || "Project image";
  }

  if (category) {
    category.textContent = project.category || "Project File";
  }

  if (title) {
    title.textContent = project.title || "Untitled Project";
  }

  if (people) {
    if (Array.isArray(project.people) && project.people.length > 0) {
      people.textContent = project.people.join(", ");
    } else {
      people.remove();
    }
  }

  if (summary) {
    summary.textContent = project.summary || "No project summary has been added yet.";
  }

  if (description && Array.isArray(project.description) && project.description.length > 0) {
    description.innerHTML = project.description
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  } else if (descriptionSection) {
    descriptionSection.remove();
  }

  if (details && Array.isArray(project.details) && project.details.length > 0) {
    details.innerHTML = project.details
      .map((item) => `
        <div class="project-detail-pill">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `)
      .join("");
  } else if (detailsSection) {
    detailsSection.remove();
  }

  if (gallery && Array.isArray(project.gallery) && project.gallery.length > 0) {
    gallery.innerHTML = project.gallery
      .slice(0, 3)
      .map((image) => `
        <img src="${image}" alt="${project.title} gallery image" />
      `)
      .join("");
  } else if (gallerySection) {
    gallerySection.remove();
  }
}

function openImageLightbox(imageSrc, imageAlt) {
  if (!imageLightbox || !lightboxImage) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt || "Expanded project image";

  imageLightbox.classList.add("active");
  imageLightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function closeImageLightbox() {
  if (!imageLightbox || !lightboxImage) return;

  imageLightbox.classList.remove("active");
  imageLightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  lightboxImage.alt = "";

  document.body.style.overflow = "";
}

function setupProjectImageLightbox() {
  const projectImages = document.querySelectorAll(".project-hero-media img, .project-gallery img");

  projectImages.forEach((image) => {
    image.addEventListener("click", () => {
      openImageLightbox(image.src, image.alt);
    });
  });
}

function resetProjectIdleTimer() {
  const projectPage = document.querySelector("#projectPage");

  if (!projectPage) return;

  clearTimeout(projectIdleTimer);

  projectIdleTimer = setTimeout(() => {
    window.location.href = "./index.html";
  }, projectIdleLimit);
}

function setupProjectIdleReturn() {
  const projectPage = document.querySelector("#projectPage");

  if (!projectPage) return;

  const activityEvents = [
    "mousemove",
    "mousedown",
    "keydown",
    "touchstart",
    "scroll",
    "click"
  ];

  activityEvents.forEach((eventName) => {
    document.addEventListener(eventName, resetProjectIdleTimer, {
      passive: true
    });
  });

  resetProjectIdleTimer();
}

if (warningWidget) {
  warningWidget.addEventListener("click", feedPixels);

  warningWidget.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      feedPixels();
    }
  });
}

if (loadingWidget) {
  loadingWidget.addEventListener("click", annoyLoadingWidget);

  loadingWidget.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      annoyLoadingWidget();
    }
  });

  startFakeDownloadSpeed();
}

if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    const project = projects[Math.floor(Math.random() * projects.length)];
    triggerVhsProjectTransition(`project.html?id=${project.id}`);
  });
}

if (grid) {
  grid.addEventListener("click", (event) => {
    const projectLink = event.target.closest(".project-card");

    if (!projectLink) return;

    event.preventDefault();
    triggerVhsProjectTransition(projectLink.href);
  });
}

if (sparkleBtn) {
  sparkleBtn.addEventListener("click", () => {
    sparklesEnabled = !sparklesEnabled;

    sparkleBtn.classList.toggle("active", sparklesEnabled);
    sparkleBtn.innerHTML = sparklesEnabled
      ? "Disable<br />Sparkles"
      : "Enable<br />Sparkles";
  });
}

document.addEventListener("mousemove", (event) => {
  if (!sparklesEnabled) return;

  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 650);
});

if (glitchBtn) {
  glitchBtn.addEventListener("click", showFakeBlueScreen);
}

if (moonBtn) {
  moonBtn.addEventListener("click", () => {
    moonIndex = (moonIndex + 1) % moonPhases.length;

    moonIcon.textContent = moonPhases[moonIndex].icon;
    moonText.textContent = moonPhases[moonIndex].text;
  });
}

if (addStickerBtn) {
  addStickerBtn.addEventListener("click", stampRandomSticker);
}

if (clearStickersBtn) {
  clearStickersBtn.addEventListener("click", clearAllStickers);
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeImageLightbox);
}

if (imageLightbox) {
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
      closeImageLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageLightbox();
  }
});

renderDirectory();
renderProjectPage();
setupProjectImageLightbox();
setupProjectIdleReturn();