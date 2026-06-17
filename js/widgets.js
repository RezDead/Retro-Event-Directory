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
