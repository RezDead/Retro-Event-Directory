# Retro Project Directory

A browser-based interactive project directory built with HTML, CSS, and JavaScript. The site displays project cards, individual project pages, image galleries, and playful retro/Y2K interface elements.

## Project Structure

```text
retro_project_directory_current_clean/
├── index.html
├── project.html
├── style.css
├── README.md
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── marquee.css
│   ├── directory.css
│   ├── widgets.css
│   ├── effects.css
│   ├── project.css
│   ├── lightbox.css
│   └── responsive.css
├── data/
│   └── projects.js
├── js/
│   ├── dom.js
│   ├── config.js
│   ├── render.js
│   ├── widgets.js
│   ├── lightbox.js
│   ├── idle.js
│   └── main.js
├── images/
└── gifs/
```

## What Each Folder Does

### Root files

- `index.html` is the main directory page.
- `project.html` is the reusable project detail page template.
- `style.css` imports all CSS files from the `css/` folder.
- `README.md` explains the project structure and usage.

### `css/`

- `tokens.css` stores colors, font sizes, and shared design variables.
- `base.css` stores global body, reset, and scanline styles.
- `marquee.css` stores the animated top banner styles.
- `directory.css` stores the directory layout and project card styles.
- `widgets.css` stores side widgets, stickers, sparkles, loading widget, and Tech Toss text styles.
- `effects.css` stores VHS transition, falling pixels, and fake blue screen styles.
- `project.css` stores the project detail page layout.
- `lightbox.css` stores the image popup styles.
- `responsive.css` stores tablet and mobile adjustments.

### `data/`

- `projects.js` stores all project information. Add or edit projects here.

### `js/`

- `dom.js` collects shared DOM selectors.
- `config.js` stores shared settings, timers, and message arrays.
- `render.js` renders directory cards and project detail content.
- `widgets.js` controls interactive widgets, stickers, sparkles, VHS transition, and fake error screen.
- `lightbox.js` controls enlarged image previews.
- `idle.js` controls auto-return to the directory after inactivity on project pages.
- `main.js` connects event listeners and starts the site.

## Features

- Dynamic project cards from JavaScript data
- Category labels on project cards
- Individual project detail pages
- Clickable image lightbox
- Scrollable About section
- Random project button
- Sparkle cursor effect
- Interactive stickers
- Fake loading widget
- Fake blue screen
- VHS-style page transition
- Project page idle return timer

## Adding a Project

Add a new object to the `projects` array in `data/projects.js`:

```js
{
  id: "new-project-id",
  title: "Project Title",
  location: "Chico, CA",
  people: ["Person One", "Person Two"],
  image: "./images/example/main.jpg",

  year: "2026",
  category: "Interactive Installation",

  summary: "Short project summary.",

  description: [
    "First paragraph.",
    "Second paragraph."
  ],

  details: [
    {
      label: "Tools",
      value: "HTML, CSS, JavaScript"
    }
  ],

  gallery: [
    "./images/example/gallery-1.jpg",
    "./images/example/gallery-2.jpg",
    "./images/example/gallery-3.jpg"
  ]
}
```

Each project needs a unique `id`.

## Running the Project

Open `index.html` in a browser. No build tools or external libraries are required.

Keep image and GIF assets in the `images/` and `gifs/` folders.
