// ma-website/js/script.js

// 1. Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
      link.style.fontWeight = "bold";
    }
  });
});

// 2. Scroll reveal animation
const revealElements = document.querySelectorAll("section, article");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  // Initial animation state
  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
  });
  revealOnScroll();
});

// 3. Dark mode toggle
const darkToggle = document.createElement("button");
darkToggle.textContent = "🌙 Toggle Dark Mode";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "10px";
darkToggle.style.zIndex = "999";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "5px";
darkToggle.style.backgroundColor = "#222";
darkToggle.style.color = "#fff";
darkToggle.style.cursor = "pointer";

document.body.appendChild(darkToggle);

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
