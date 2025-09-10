// JavaScript Document

document.addEventListener("DOMContentLoaded", () => {
  console.log('RideHaven website loaded successfully.');

  // -------------------------
  // Mobile Navbar Toggle
  // -------------------------
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  // -------------------------
  // Carousel Functionality
  // -------------------------
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === n);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  if (next && prev) {
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
  }

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Initialize first slide
  showSlide(index);
});
