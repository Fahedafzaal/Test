// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Privacy Policy Modal functionality
const privacyPolicyModal = document.getElementById('privacyPolicyModal');
const privacyPolicyLinks = [
    document.getElementById('privacyPolicyLink'),
    document.getElementById('mobilePrivacyPolicyLink'),
    document.getElementById('footerPrivacyPolicyLink')
];
const closePrivacyPolicy = document.getElementById('closePrivacyPolicy');
const smsTermsLink = document.getElementById("smsTermsLink")

privacyPolicyLinks.forEach(link => {
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            privacyPolicyModal.classList.remove('hidden');
        });
    }
});

if (closePrivacyPolicy) {
    closePrivacyPolicy.addEventListener('click', () => {
        privacyPolicyModal.classList.add('hidden');
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === privacyPolicyModal) {
        privacyPolicyModal.classList.add('hidden');
    }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && privacyPolicyModal && !privacyPolicyModal.classList.contains("hidden")) {
        privacyPolicyModal.classList.add('hidden');
    }
});

// SMS Terms link in contact form
if (smsTermsLink) {
    smsTermsLink.addEventListener("click", (e) => {
        e.preventDefault()
        privacyPolicyModal.classList.remove('hidden')
        // Scroll to SMS Terms section
        const smsTermsSection = document.querySelector(".prose h3:nth-of-type(2)")
        if (smsTermsSection) {
            setTimeout(() => {
                smsTermsSection.scrollIntoView({ behavior: "smooth" })
            }, 100)
        }
    })
}

// Contact form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // Here you would normally send the form data to your server
        // For this static site, we'll just show a success message
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
    })
}
  
  