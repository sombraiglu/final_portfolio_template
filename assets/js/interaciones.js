document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Almacenar el estado del modo oscuro en el almacenamiento local
  const isDarkMode = localStorage.getItem("dark-mode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar el estado actual en el almacenamiento local
    const darkModeActive = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", darkModeActive);
  });
});

document.querySelectorAll(".collage img").forEach((img) => {
  img.addEventListener("click", () => {
    img.style.transform =
      img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const scaryImage = document.querySelector(".scary-image");

  window.addEventListener("scroll", () => {
    const section = document.getElementById("scary-section");
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop < window.innerHeight && sectionTop > -sectionHeight) {
      scaryImage.classList.add("visible");
      scaryImage.classList.remove("hidden");

      // Opcional: Ocultar nuevamente después de unos segundos
      setTimeout(() => {
        scaryImage.classList.remove("visible");
      }, 3000);
    }
  });
});

let currentIndex = 0;

function toggleHamburgerMenu() {
  const menu = document.querySelector(".hamburger-menu");
  menu.classList.toggle("active");
}
