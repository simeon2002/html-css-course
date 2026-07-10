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

// Adding sticky navbar
const observer = new IntersectionObserver(cb, {
  root: null,
  rootMargin: "-96px",
  threshold: 0,
});

observer.observe(document.querySelector(".hero-section"));

function cb(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    console.log("test");
    document.querySelector("body").classList.add("sticky");
  } else if (entry.isIntersecting) {
    console.log("removing ");
    document.querySelector("body").classList.remove("sticky");
  }
}
