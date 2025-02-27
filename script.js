// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobileMenuButton")
    const mobileMenu = document.getElementById("mobileMenu")
  
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
      })
    }
  
    // Privacy Policy Modal functionality
    const privacyPolicyModal = document.getElementById("privacyPolicyModal")
    const privacyPolicyLinks = [
      document.getElementById("privacyPolicyLink"),
      document.getElementById("mobilePrivacyPolicyLink"),
      document.getElementById("footerPrivacyPolicyLink"),
    ].filter(link => link !== null) // Filter out any null elements
    const closePrivacyPolicy = document.getElementById("closePrivacyPolicy")
    const smsTermsLink = document.getElementById("smsTermsLink")
  
    // Function to open privacy policy modal
    function openPrivacyPolicy() {
      if (privacyPolicyModal) {
        privacyPolicyModal.classList.remove("hidden")
        setTimeout(() => {
          privacyPolicyModal.classList.add("active")
        }, 10)
        document.body.style.overflow = "hidden"
      }
    }
  
    // Function to close privacy policy modal
    function closePrivacyPolicyModal() {
      if (privacyPolicyModal) {
        privacyPolicyModal.classList.remove("active")
        setTimeout(() => {
          privacyPolicyModal.classList.add("hidden")
        }, 300)
        document.body.style.overflow = ""
      }
    }
  
    // Only set up modal functionality if we're not on the privacy policy page
    if (window.location.pathname !== "/privacypolicy.html") {
        privacyPolicyLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                openPrivacyPolicy()
            })
        })
    }
  
    // Close modal when close button is clicked
    if (closePrivacyPolicy) {
      closePrivacyPolicy.addEventListener("click", closePrivacyPolicyModal)
    }
  
        // Close modal when clicking outside the content
        if (privacyPolicyModal) {
          privacyPolicyModal.addEventListener("click", (e) => {
            if (e.target === privacyPolicyModal) {
              closePrivacyPolicyModal()
            }
          })
        }
  
    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && privacyPolicyModal && !privacyPolicyModal.classList.contains("hidden")) {
        closePrivacyPolicyModal()
      }
    })
  
    // SMS Terms link in contact form
    if (smsTermsLink) {
      smsTermsLink.addEventListener("click", (e) => {
        e.preventDefault()
        openPrivacyPolicy()
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
  })
  
  