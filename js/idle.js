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
