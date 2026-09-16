// Personalized welcome message
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const helloModal = document.getElementById("helloModal");
const helloClose = document.getElementById("helloClose");
const helloSubmit = document.getElementById("helloSubmit");
const visitorNameInput = document.getElementById("visitorName");
const helloError = document.getElementById("helloError");

function openHelloModal() {
  helloModal.classList.add("show");
  helloModal.setAttribute("aria-hidden", "false");
  helloError.textContent = "";
  visitorNameInput.value = "";
  document.body.classList.add("modal-open");
  setTimeout(() => visitorNameInput.focus(), 120);
}

function closeHelloModal() {
  helloModal.classList.remove("show");
  helloModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

welcomeBtn.addEventListener("click", openHelloModal);

helloSubmit.addEventListener("click", () => {
  const visitorName = visitorNameInput.value.trim();

  if (!visitorName) {
    helloError.textContent = "Please enter your name.";
    visitorNameInput.focus();
    return;
  }

  welcomeMessage.textContent =
    `Hello, ${visitorName}! Welcome to Ira Jasper Fuentesfina's personal website!`;
  closeHelloModal();
});

helloClose.addEventListener("click", closeHelloModal);

helloModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) {
    closeHelloModal();
  }
});

visitorNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    helloSubmit.click();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && helloModal.classList.contains("show")) {
    closeHelloModal();
  }
});

// Additional About Me
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", () => {
  const isVisible = moreText.classList.toggle("show");
  readMoreBtn.textContent = isVisible ? "Hide Information" : "Read More";
});

// Change theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const darkModeEnabled = document.body.classList.contains("dark-theme");
  themeBtn.textContent = darkModeEnabled
    ? "☀️ Light Theme"
    : "🌙 Change Theme";
});

// Current date and time
function updateDateTime() {
  const now = new Date();

  const formattedDateTime = now.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById("dateTime").textContent = formattedDateTime;
  document.getElementById("year").textContent = now.getFullYear();
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Contact form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent =
    `Thank you, ${name}! Your message has been sent successfully.`;

  contactForm.reset();
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
