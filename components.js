// Function to load HTML components
async function loadComponent(url, elementId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // If loading header, initialize mobile menu functionality
        if (elementId === 'header') {
            initializeMobileMenu();
        }
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
    }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});