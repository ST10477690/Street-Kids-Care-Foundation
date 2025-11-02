// script.js

document.addEventListener("DOMContentLoaded", function () {
  // 1. Responsive navigation menu toggle
  const navToggle = document.createElement("button");
  navToggle.innerHTML = "☰";
  navToggle.classList.add("nav-toggle");
  document.querySelector("nav").prepend(navToggle);

  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });

  // 2. Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"], a[href$=".html"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Back-to-top button
  const backToTop = document.createElement("button");
  backToTop.id = "backToTop";
  backToTop.textContent = "↑ Top";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "30px";
  backToTop.style.right = "30px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.fontSize = "16px";
  backToTop.style.display = "none";
  backToTop.style.backgroundColor = "#1a3d7c";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.cursor = "pointer";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 4. Gallery hover effect (optional)
  const galleryImages = document.querySelectorAll(".Gallery img");
  galleryImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });

  // 5. Simple contact form validation
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = contactForm.querySelector("input[name='name']");
      const email = contactForm.querySelector("input[name='email']");
      const message = contactForm.querySelector("textarea[name='message']");

      let valid = true;
      if (!name.value.trim()) {
        alert("Please enter your name.");
        valid = false;
      } else if (!email.value.trim() || !validateEmail(email.value.trim())) {
        alert("Please enter a valid email address.");
        valid = false;
      } else if (!message.value.trim()) {
        alert("Please enter your message.");
        valid = false;
      }

      if (!valid) e.preventDefault();
    });
  }

  // Helper function: email validation
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
