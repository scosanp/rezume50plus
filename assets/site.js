const STORE_KEY = "rezume50plus_leads";

function closeMenu() {
  document.body.classList.remove("menu-open");
  const toggle = document.querySelector("[data-menu-toggle]");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function initMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const next = !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", next);
    toggle.setAttribute("aria-expanded", String(next));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function saveLead(data) {
  const leads = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  leads.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: window.location.pathname,
    ...data
  });
  localStorage.setItem(STORE_KEY, JSON.stringify(leads));
}

function initForms() {
  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const status = form.querySelector("[data-form-status]");

      if (!String(data.phone || "").trim()) {
        if (status) status.textContent = "Укажите телефон для связи.";
        return;
      }

      saveLead(data);
      form.reset();
      if (status) status.textContent = "Заявка сохранена. Специалист свяжется с вами для уточнения времени.";
    });
  });
}

function initReviewSlider() {
  const track = document.querySelector("[data-review-track]");
  const prev = document.querySelector("[data-review-prev]");
  const next = document.querySelector("[data-review-next]");
  if (!track || !prev || !next) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector(".testimonial");
    const amount = card ? card.getBoundingClientRect().width + 18 : 320;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

initMenu();
initForms();
initReviewSlider();
