document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Facilities Slider
    const facilitySlides = document.querySelectorAll('.facility-slide');
    const facilityDots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        facilitySlides.forEach(slide => slide.classList.remove('active'));
        facilityDots.forEach(dot => dot.classList.remove('active'));
        
        facilitySlides[index].classList.add('active');
        facilityDots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % facilitySlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + facilitySlides.length) % facilitySlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    facilityDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto slide change every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const sliderContainer = document.querySelector('.facilities-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    testimonialNext.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    testimonialPrev.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('schoolContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-content, .program-card, .event-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.about-content, .program-card, .event-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

// Pre-Primary Script
// Add this to your existing script.js
// Program Page Specific Functionality
function initProgramPage() {
    // Animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    }
    
    // Set initial state for timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateTimeline);
    window.addEventListener('load', animateTimeline);
}

// Check if we're on a program page and initialize
if (document.querySelector('.program-hero')) {
    initProgramPage();
}

// Basic Education Program Script
// Basic Education Page Functionality
function initBasicEdPage() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Activity slider functionality (similar to facilities slider)
    const activitySlides = document.querySelectorAll('.activity-slide');
    const activityDots = document.querySelectorAll('.activity-slider .dot');
    const activityPrev = document.querySelector('.activity-slider .slider-prev');
    const activityNext = document.querySelector('.activity-slider .slider-next');
    let currentActivitySlide = 0;
    
    function showActivitySlide(index) {
        activitySlides.forEach(slide => slide.classList.remove('active'));
        activityDots.forEach(dot => dot.classList.remove('active'));
        
        activitySlides[index].classList.add('active');
        activityDots[index].classList.add('active');
        currentActivitySlide = index;
    }
    
    activityNext.addEventListener('click', () => {
        currentActivitySlide = (currentActivitySlide + 1) % activitySlides.length;
        showActivitySlide(currentActivitySlide);
    });
    
    activityPrev.addEventListener('click', () => {
        currentActivitySlide = (currentActivitySlide - 1 + activitySlides.length) % activitySlides.length;
        showActivitySlide(currentActivitySlide);
    });
    
    activityDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showActivitySlide(index));
    });
    
    // Auto slide change every 5 seconds
    let activitySlideInterval = setInterval(() => {
        currentActivitySlide = (currentActivitySlide + 1) % activitySlides.length;
        showActivitySlide(currentActivitySlide);
    }, 5000);
    
    // Pause auto slide on hover
    const activitySliderContainer = document.querySelector('.activity-slider');
    activitySliderContainer.addEventListener('mouseenter', () => {
        clearInterval(activitySlideInterval);
    });
    
    activitySliderContainer.addEventListener('mouseleave', () => {
        activitySlideInterval = setInterval(() => {
            currentActivitySlide = (currentActivitySlide + 1) % activitySlides.length;
            showActivitySlide(currentActivitySlide);
        }, 5000);
    });
}

// Check if we're on the basic education page and initialize
if (document.querySelector('.program-hero h1').textContent.includes('Basic Education')) {
    initBasicEdPage();
}

// Secondary Education Program Script
// Secondary Education Page Functionality
function initSecondaryEdPage() {
    // Academic Programs Accordion
    const programAccordions = document.querySelectorAll('.program-accordion .accordion-header');
    
    programAccordions.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Course Catalog Tabs
    const catalogTabBtns = document.querySelectorAll('.catalog-tabs .tab-btn');
    const catalogTabContents = document.querySelectorAll('.catalog-tabs .tab-content');
    
    catalogTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            catalogTabBtns.forEach(btn => btn.classList.remove('active'));
            catalogTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Student Life Slider
    const lifeSlides = document.querySelectorAll('.life-slide');
    const lifeDots = document.querySelectorAll('.life-slider .dot');
    const lifePrev = document.querySelector('.life-slider .slider-prev');
    const lifeNext = document.querySelector('.life-slider .slider-next');
    let currentLifeSlide = 0;
    
    function showLifeSlide(index) {
        lifeSlides.forEach(slide => slide.classList.remove('active'));
        lifeDots.forEach(dot => dot.classList.remove('active'));
        
        lifeSlides[index].classList.add('active');
        lifeDots[index].classList.add('active');
        currentLifeSlide = index;
    }
    
    lifeNext.addEventListener('click', () => {
        currentLifeSlide = (currentLifeSlide + 1) % lifeSlides.length;
        showLifeSlide(currentLifeSlide);
    });
    
    lifePrev.addEventListener('click', () => {
        currentLifeSlide = (currentLifeSlide - 1 + lifeSlides.length) % lifeSlides.length;
        showLifeSlide(currentLifeSlide);
    });
    
    lifeDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showLifeSlide(index));
    });
    
    // Auto slide change every 5 seconds
    let lifeSlideInterval = setInterval(() => {
        currentLifeSlide = (currentLifeSlide + 1) % lifeSlides.length;
        showLifeSlide(currentLifeSlide);
    }, 5000);
    
    // Pause auto slide on hover
    const lifeSliderContainer = document.querySelector('.life-slider');
    lifeSliderContainer.addEventListener('mouseenter', () => {
        clearInterval(lifeSlideInterval);
    });
    
    lifeSliderContainer.addEventListener('mouseleave', () => {
        lifeSlideInterval = setInterval(() => {
            currentLifeSlide = (currentLifeSlide + 1) % lifeSlides.length;
            showLifeSlide(currentLifeSlide);
        }, 5000);
    });
}

// Check if we're on the secondary education page and initialize
if (document.querySelector('.program-hero h1').textContent.includes('Secondary Education')) {
    initSecondaryEdPage();
}
