// script.js

document.addEventListener("DOMContentLoaded", function () {
    // 1. Responsive navigation menu toggle
    const nav = document.querySelector("nav");
    const navMenu = nav ? nav.querySelector("ul") : null;

    if (nav && navMenu) {
        const navToggle = document.createElement("button");
        navToggle.innerHTML = "☰";
        navToggle.classList.add("nav-toggle");
        nav.prepend(navToggle);

        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-open");
            const isExpanded = navMenu.classList.contains("nav-open");
            navToggle.setAttribute("aria-expanded", isExpanded);
        });
    }

    // 2. Smooth scrolling for internal links (#sections)
    // Targets links starting with '#'
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const hash = this.getAttribute("href");
            if (hash !== "#") {
                const target = document.querySelector(hash);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // 3. Back-to-top button
    const backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.textContent = "↑ Top";
    backToTop.classList.add("back-to-top"); 
    document.body.appendChild(backToTop);

    // Apply necessary fixed position styles (ideally done in CSS)
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "30px";
    backToTop.style.right = "30px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "16px";
    backToTop.style.backgroundColor = "#1a3d7c";
    backToTop.style.color = "#fff";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";

    // Use a class to handle visibility
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            // Adds a class that should set display: block or opacity: 1 in CSS
            backToTop.classList.add("is-visible");
            // Also setting display inline for immediate functionality if no CSS is present
            backToTop.style.display = "block"; 
        } else {
            backToTop.classList.remove("is-visible");
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 4. Gallery hover effect
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
            const nameField = contactForm.querySelector("input[name='name']");
            const emailField = contactForm.querySelector("input[name='email']");
            const messageField = contactForm.querySelector("textarea[name='message']");

            let valid = true;
            
            if (!nameField || !nameField.value.trim()) {
                alert("Please enter your name.");
                valid = false;
            } else if (!emailField || !emailField.value.trim() || !validateEmail(emailField.value.trim())) {
                alert("Please enter a valid email address.");
                valid = false;
            } else if (!messageField || !messageField.value.trim()) {
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