
function updateProjectHeight(item, open) {
  const details = item.querySelector(".project-details");
  if (!details) return;

  if (open) {
    details.style.maxHeight = details.scrollHeight + "px";
    details.style.opacity = "1";
    details.style.marginTop = "12px";
  } else {
    details.style.maxHeight = "0px";
    details.style.opacity = "0";
    details.style.marginTop = "0";
  }
}

document.querySelectorAll(".project-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".project-item");
    const isActive = item.classList.toggle("active");

    btn.textContent = isActive ? "Ver menos" : "Ver mais";
    btn.setAttribute("aria-expanded", isActive);
    updateProjectHeight(item, isActive);
  });
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".project-item.active").forEach((item) => {
    updateProjectHeight(item, true);
  });
});

const track = document.querySelector(".testimonials-track");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".testimonial-arrow.prev");
const nextBtn = document.querySelector(".testimonial-arrow.next");

let currentIndex = 0;

function getCardsPerView() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

function updateSlider() {
  if (!track || !cards.length || !prevBtn || !nextBtn) return;

  const cardsPerView = getCardsPerView();
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(track).gap) || 24;
  const moveX = currentIndex * (cardWidth + gap);

  track.style.transform = `translateX(-${moveX}px)`;

  const maxIndex = Math.max(0, cards.length - cardsPerView);
  prevBtn.style.opacity = currentIndex <= 0 ? "0.35" : "1";
  nextBtn.style.opacity = currentIndex >= maxIndex ? "0.35" : "1";
}

if (nextBtn && prevBtn && cards.length && track) {
  nextBtn.addEventListener("click", () => {
    const maxIndex = Math.max(0, cards.length - getCardsPerView());
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener("resize", () => {
    const maxIndex = Math.max(0, cards.length - getCardsPerView());
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    updateSlider();
  });

  updateSlider();
}

const path = window.location.pathname;

const btnPt = document.getElementById("btn-pt");
const btnEn = document.getElementById("btn-en");

// Verifica se está em inglês
const isEnglish = path.startsWith("/en");

// Define os links
btnEn.href = isEnglish ? path : "/en" + path;
btnPt.href = isEnglish ? path.replace("/en", "") || "/index.html" : path;

// Define ativo
if (isEnglish) {
  btnEn.classList.add("active");
} else {
  btnPt.classList.add("active");
}

if (path.includes("/en")) {
  btnEn.classList.add("active");
  btnEn.style.pointerEvents = "none";
} else {
  btnPt.classList.add("active");
  btnPt.style.pointerEvents = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.18
  });

  document.querySelectorAll(
    ".dissolve-section, .reveal-up, .word-reveal, .testimonials-rise, .footer-slide-in, .fade-soft"
  ).forEach((el) => observer.observe(el));

  const heroTyping = document.querySelector(".typing-text-hero");
  if (heroTyping) {
    setTimeout(() => {
      heroTyping.classList.add("start");
    }, 500);
  }

  const projects = document.querySelectorAll(".project-item");
  projects.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.12}s`;
  });

  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.10}s`;
  });

  const footer = document.querySelector(".footer-slide-in");
  if (footer) observer.observe(footer);
});

