// NeonGoblin — Enhanced particle system with advanced interactions
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let width,
  height,
  dpr = Math.max(1, window.devicePixelRatio || 1);

function resize() {
  width = canvas.width = Math.floor(canvas.clientWidth * dpr);
  height = canvas.height = Math.floor(canvas.clientHeight * dpr);
  ctx.scale(dpr, dpr);
}

function rnd(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticles(count = 80) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: rnd(0, canvas.clientWidth),
      y: rnd(0, canvas.clientHeight),
      vx: rnd(-0.3, 0.3),
      vy: rnd(-0.2, 0.1),
      size: rnd(1.5, 4),
      life: 1,
      maxLife: 1,
      type: Math.random() > 0.7 ? "accent" : "primary",
    });
  }
}

let mouse = { x: -9999, y: -9999, down: false };
canvas.addEventListener("mousemove", (e) => {
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left;
  mouse.y = e.clientY - r.top;
});
canvas.addEventListener("mouseleave", () => {
  mouse.x = -9999;
  mouse.y = -9999;
});
canvas.addEventListener("mousedown", () => (mouse.down = true));
canvas.addEventListener("mouseup", () => (mouse.down = false));

function step() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  // Animated background gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.clientHeight);
  gradient.addColorStop(0, "rgba(15, 20, 25, 0.15)");
  gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.03)");
  gradient.addColorStop(1, "rgba(14, 165, 233, 0.02)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  for (let p of particles) {
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

    if (dist < 200) {
      const force = (1 - dist / 200) * (mouse.down ? 1.2 : 0.35);
      p.vx += (dx / dist) * 0.08 * force;
      p.vy += (dy / dist) * 0.08 * force;
    }

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= 0.96;
    p.vy *= 0.96;

    // Decay life
    p.life -= 0.002;
    if (p.life < 0) p.life = p.maxLife;

    // Wrap edges
    if (p.x < -10) p.x = canvas.clientWidth + 10;
    if (p.x > canvas.clientWidth + 10) p.x = -10;
    if (p.y < -10) p.y = canvas.clientHeight + 10;
    if (p.y > canvas.clientHeight + 10) p.y = -10;

    // Draw particle
    const alpha = Math.sin(p.life * Math.PI) * 0.8;
    const colors =
      p.type === "primary"
        ? { glow: "rgba(34, 197, 94, ", core: "rgba(220, 255, 220, " }
        : { glow: "rgba(14, 165, 233, ", core: "rgba(200, 240, 255, " };

    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
    g.addColorStop(0, colors.glow + 0.6 * alpha + ")");
    g.addColorStop(0.4, colors.glow + 0.2 * alpha + ")");
    g.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
    ctx.fill();

    // Core
    ctx.fillStyle = colors.core + alpha * 0.95 + ")";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(step);
}

function init() {
  resize();
  createParticles(Math.max(60, Math.floor(canvas.clientWidth / 10)));
  step();
}

window.addEventListener("resize", () => {
  resize();
  createParticles(Math.max(60, Math.floor(canvas.clientWidth / 10)));
});

// UI Enhancements
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  init();

  // Header scroll effect
  const header = document.querySelector(".site-header");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
  });

  // Button click animations
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s ease-out";
      ripple.style.pointerEvents = "none";

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.background = "rgba(255, 255, 255, 0.5)";

      btn.style.position = "relative";
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Card stagger on scroll (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card, .game-card").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Add ripple animation keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Parallax effect on hero
  const hero = document.getElementById("hero");
  const heroCanvas = document.getElementById("hero-canvas");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (hero && scrolled < window.innerHeight) {
      heroCanvas.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});
