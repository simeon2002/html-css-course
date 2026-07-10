// Add smooth scrolling
const navLinks = Array.from(document.querySelectorAll(".main-nav-list a"));
navLinks.push(...document.querySelectorAll(".hero-section a"));

navLinks.forEach(navlink => {
  navlink.addEventListener("click", e => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
