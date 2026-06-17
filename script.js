// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú hamburguesa (mobile)
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
if (nav && navToggle) {
  const closeMenu = () => {
    nav.classList.remove("nav--open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll(".nav__links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// Toggle de tema claro/oscuro (el tema inicial ya se aplica en el <head>)
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

// Botón "volver arriba": aparece al scrollear y vuelve al inicio
const toTop = document.getElementById("toTop");
if (toTop) {
  const toggleToTop = () => {
    toTop.classList.toggle("is-visible", window.scrollY > 400);
  };
  window.addEventListener("scroll", toggleToTop, { passive: true });
  toggleToTop();
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
