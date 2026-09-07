/* =============================================
   FLOW - Future • Logic • Operations • Worldwide
   JavaScript - W3Schools Guidelines Compliant
   ============================================= */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // 1. MOBILE HAMBURGER MENU
    // =============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // =============================================
    // 2. HEADER SCROLL EFFECT
    // =============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // =============================================
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================================
    // 4. FORM VALIDATION (Contact Page)
    // =============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            // Validation flags
            let isValid = true;
            let errorMessage = '';

            // Validate Name
            if (name && name.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your full name.\n';
                name.style.borderColor = 'red';
            } else if (name) {
                name.style.borderColor = '';
            }

            // Validate Email
            if (email && email.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your email address.\n';
                email.style.borderColor = 'red';
            } else if (email && !isValidEmail(email.value)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                email.style.borderColor = 'red';
            } else if (email) {
                email.style.borderColor = '';
            }

            // Validate Phone
            if (phone && phone.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your phone number.\n';
                phone.style.borderColor = 'red';
            } else if (phone) {
                phone.style.borderColor = '';
            }

            // Validate Message
            if (message && message.value.trim() === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
                message.style.borderColor = 'red';
            } else if (message) {
                message.style.borderColor = '';
            }

            // If valid, show success message
            if (isValid) {
                alert('Thank you! Your message has been sent. We will get back to you within 24 hours.');
                contactForm.reset();
            } else {
                alert('Please fix the following errors:\n\n' + errorMessage);
            }
        });
    }

    // Helper: Validate Email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // =============================================
    // 5. SCROLL ANIMATION (Fade In)
    // =============================================
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .pf-item');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        animateElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animation
    animateElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Check on load and scroll
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);

    // =============================================
    // 6. ACTIVE NAV LINK HIGHLIGHT
    // =============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });

    // =============================================
    // 7. BACK TO TOP BUTTON (Optional)
    // =============================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('FLOW Website loaded successfully! 🚀');
    console.log('Future • Logic • Operations • Worldwide');
});
