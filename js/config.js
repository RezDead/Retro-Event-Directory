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
