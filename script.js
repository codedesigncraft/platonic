// script.js
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ paused: true });
  const sidebar = document.getElementById("sidebarNav");
  const panel = sidebar.querySelector(".sidebar-nav__panel");
  const overlay = sidebar.querySelector(".sidebar-nav__overlay");

  tl.set(sidebar, { pointerEvents: "auto" })
    .to(overlay, { opacity: 1, duration: 0.3 }, 0)
    .to(panel, { x: "-300px", duration: 0.4, ease: "power3.out" }, 0);

  document.getElementById("menuToggle").addEventListener("click", () => {
    tl.play();
  });

  document.getElementById("menuClose").addEventListener("click", () => {
    tl.reverse();
  });

  overlay.addEventListener("click", () => {
    tl.reverse();
  });

  // GSAP hero text animation (same as before)
  gsap.from(".hero__headline", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".hero__subhead", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
  });

  gsap.from(".hero__cta", {
    scale: 0.9,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.8,
  });
});

const heroSwiper = new Swiper(".hero.swiper", {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll fade-in
const scrollFadeEls = document.querySelectorAll(".scroll-fade");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

scrollFadeEls.forEach((el) => fadeObserver.observe(el));

const aboutBoxes = document.querySelectorAll(".about-box");

const scrollReveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const dir = entry.target.getAttribute("data-anim") || "bottom";

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        if (dir === "left") entry.target.style.transform = "translateX(0)";
        else if (dir === "right")
          entry.target.style.transform = "translateX(0)";
        else if (dir === "top") entry.target.style.transform = "translateY(0)";
        else entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.25 }
);

aboutBoxes.forEach((box) => {
  const dir = box.getAttribute("data-anim") || "bottom";

  if (dir === "left") box.style.transform = "translateX(-60px)";
  else if (dir === "right") box.style.transform = "translateX(60px)";
  else if (dir === "top") box.style.transform = "translateY(-60px)";
  else box.style.transform = "translateY(60px)";

  scrollReveal.observe(box);
});
