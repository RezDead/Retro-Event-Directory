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
