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
