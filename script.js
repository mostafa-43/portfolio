/*
  script.js
  Includes: AOS init, theme toggle, mobile menu, typing animation, contact form handling, smooth scroll
*/

const OWNER_EMAIL = 'eng.mostafaabdo43@gmail.com';
const WHATSAPP_NUMBER = '201154680603';

if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const html = document.documentElement;

if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        html.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        html.classList.toggle('dark-mode');

        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

const typingText = document.getElementById('typingText');
const text = 'Full Stack Web Developer .NET | Angular';
let index = 0;

function type() {
    if (typingText && index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

setTimeout(type, 500);

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName')?.value || '';
        const phone = document.getElementById('phone')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';

        const whatsappMessage = `Hello, I am ${encodeURIComponent(fullName)}%0A%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage: ${encodeURIComponent(message)}`;
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

        window.open(whatsappURL, '_blank');

        if (successMessage) {
            successMessage.classList.remove('hidden');
        }

        contactForm.reset();

        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.add('hidden');
            }
        }, 5000);
    });
}

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

const sendEmailBtn = document.getElementById('sendEmail');
const sendWhatsappBtn = document.getElementById('sendWhatsapp');

function getFormValues() {
    return {
        name: document.getElementById('fullName')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        email: document.getElementById('email')?.value || '',
        message: document.getElementById('message')?.value || ''
    };
}

if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', function () {
        const { name, phone, email, message } = getFormValues();

        const mailBody = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
        const mail = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(`New Message from ${name}`)}&body=${mailBody}`;

        window.location.href = mail;
    });
}

if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', function () {
        const { name, phone, email, message } = getFormValues();

        const whatsappMessage = `New Message from: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

        window.open(whatsappURL, '_blank');
    });
}
