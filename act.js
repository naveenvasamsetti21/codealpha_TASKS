function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const resume = document.querySelector(".btn btn-color-2")
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  resume.classList.toggle("open");
}