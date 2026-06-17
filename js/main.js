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
