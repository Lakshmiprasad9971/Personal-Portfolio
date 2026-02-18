// Typewriter
const roles = ["Front end Developer", "Web Developer", "Data Analyst"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    currentRole = roles[roleIndex];
    if (!isDeleting) {
        typewriter.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typewriter.textContent = currentRole.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Dark Mode Toggle
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Fade In On Scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
    faders.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// Back To Top
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
};
backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").textContent = 
        "✅ Message sent successfully!";
    this.reset();
});
