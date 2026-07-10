// Add smooth scrolling
const navLinks = Array.from(document.querySelectorAll(".main-nav-list a"));
navLinks.push(...document.querySelectorAll(".hero-section a"));

// Adding sticky navbar
const observer = new IntersectionObserver(cb, {
  root: null,
  rootMargin: "-96px",
  threshold: 0,
});

observer.observe(document.querySelector(".hero-section"));

function cb(entries, observer) {
  const [entry] = entries;
  if (document.querySelector(".header").classList.contains("nav-open")) return;
  if (!entry.isIntersecting) {
    console.log("test");
    document.querySelector("body").classList.add("sticky");
  } else if (entry.isIntersecting) {
    console.log("removing ");
    document.querySelector("body").classList.remove("sticky");
  }
}

// Adding mobile menu interactivity
const btnMobileNav = document.querySelector(".btn-mobile-nav");
btnMobileNav.addEventListener("click", e => {
  document.querySelector(".header").classList.toggle("nav-open");
});

const navList = document.querySelector(".main-nav-list");
navList.addEventListener("click", e => {
  console.log(e.target);
  if (e.target.tagName === "A") {
    e.preventDefault();
    document.querySelector(".header").classList.remove("nav-open");
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  }
});
