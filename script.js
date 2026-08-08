// ===== MRLV DIGITAL =====
// Troque pelo seu número no formato internacional, sem +, espaços ou símbolos.
// Exemplo Brasil: 5511999999999
const WHATSAPP_NUMBER = "5511999999999";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const select = document.querySelector("#service");
    if (select) select.value = service;
  });
});

document.querySelector("#quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const service = document.querySelector("#service").value;
  const details = document.querySelector("#details").value.trim();

  if (!name || !service || !details) return;

  const text =
`Olá, MRLV Digital! 👋

Meu nome é *${name}*.
Tenho interesse em: *${service}*.

*Detalhes do projeto:*
${details}

Gostaria de receber um orçamento.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

document.querySelector("#year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
