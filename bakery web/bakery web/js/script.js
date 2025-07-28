function scrollToProducts() {
  const section = document.getElementById("featured");
  section.scrollIntoView({ behavior: "smooth" });
}
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
productHeading.style.transform = "translateY(0) scale(1)";
