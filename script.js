/*
  script.js
  Extracted JavaScript from index.html.
  Includes: AOS init, theme toggle, mobile menu, typing animation, contact form handling, smooth scroll
*/

// Initialize AOS (animation on scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    html.classList.add('dark-mode');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    html.classList.toggle('dark-mode');

    // Save theme preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Typing Animation (hero)
const typingText = document.getElementById('typingText');
const text = 'Full Stack Web Developer .NET | Angular';
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

setTimeout(type, 500);

// Contact Form
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // WhatsApp option
    const whatsappMessage = `Hello Mohamed, I am ${fullName}%0A%0APhone: ${phone}%0AEmail: ${email}%0A%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/01118726275?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    successMessage.classList.remove('hidden');
    contactForm.reset();

    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});



document.getElementById("sendEmail").addEventListener("click", function () {
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mail = `mailto:mohamed.abdelmajeed.work@gmail.com?subject=New Message from ${name}&body=
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    window.location.href = mail;
});


document.getElementById("sendWhatsapp").addEventListener("click", function () {
    const name = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "201118726275"; // رقم الواتس الخاص بك بدون + , مثال 201234567890
    const whatsappURL = `https://wa.me/${phoneNumber}?text=
New Message from: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    window.open(whatsappURL, "_blank");
});
