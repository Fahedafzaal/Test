// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const smsConsent = document.getElementById('smsConsent').checked;
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', { name, email, phone, message, smsConsent });
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        
        // Reset form
        contactForm.reset();
    });
}
  
  