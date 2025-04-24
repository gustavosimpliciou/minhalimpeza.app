document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Download Popup
    const downloadButton = document.querySelector('.cta-button');
    const downloadPopup = document.querySelector('#download-popup');
    const closePopupButton = document.querySelector('.popup-close');

    if (downloadButton && downloadPopup) {
        downloadButton.addEventListener('click', function() {
            downloadPopup.classList.add('active');
        });
    }

    if (closePopupButton && downloadPopup) {
        closePopupButton.addEventListener('click', function() {
            downloadPopup.classList.remove('active');
        });
    }

    // Close download popup with Esc key
    if (downloadPopup) {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && downloadPopup.classList.contains('active')) {
                downloadPopup.classList.remove('active');
            }
        });
    }

    // Close download popup when clicking outside
    if (downloadPopup) {
        downloadPopup.addEventListener('click', function(e) {
            if (e.target === downloadPopup) {
                downloadPopup.classList.remove('active');
            }
        });
    }

    // Video Popup
    const saibaMaisButton = document.querySelector('.secondary-button');
    const videoPopup = document.querySelector('#video-popup');
    const closeVideoPopupButton = document.querySelector('.video-popup-close');

    if (saibaMaisButton && videoPopup) {
        saibaMaisButton.addEventListener('click', function() {
            videoPopup.classList.add('active');
        });
    }

    if (closeVideoPopupButton && videoPopup) {
        closeVideoPopupButton.addEventListener('click', function() {
            videoPopup.classList.remove('active');
            const video = videoPopup.querySelector('video');
            if (video) {
                video.pause();
            }
        });
    }

    // Close video popup with Esc key
    if (videoPopup) {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && videoPopup.classList.contains('active')) {
                videoPopup.classList.remove('active');
                const video = videoPopup.querySelector('video');
                if (video) {
                    video.pause();
                }
            }
        });
    }

    // Close video popup when clicking outside
    if (videoPopup) {
        videoPopup.addEventListener('click', function(e) {
            if (e.target === videoPopup) {
                videoPopup.classList.remove('active');
                const video = videoPopup.querySelector('video');
                if (video) {
                    video.pause();
                }
            }
        });
    }

    // Carousel Functionality
    const carousel = document.querySelector('.carousel-container');
    const slides = carousel ? carousel.querySelectorAll('img') : [];
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    const slideWidth = 100; // percentage

    function updateCarousel() {
        if (carousel) {
            carousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    if (prevButton && nextButton && slides.length > 0) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        // Auto-rotate carousel
        setInterval(nextSlide, 5000);
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
            this.reset();
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks && mobileMenu) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Button Hover Animations
    const buttons = document.querySelectorAll('.cta-button, .secondary-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});