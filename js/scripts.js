// Function to activate Bootstrap scrollspy on the main nav element
function activateScrollSpy() {
    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }
}

// Function to collapse responsive navbar when toggler is visible
function collapseNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
}

// Function to execute when DOM content is loaded
function init() {
    activateScrollSpy();
    collapseNavbar();
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', init);
