// ===============================================
// BOLD BOOTH - WEDDING EDITION
// Enhanced Interactive JavaScript - 2026
// ===============================================

// =====  LOADING SCREEN =====
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.classList.remove('loading');
        
        // Trigger scroll animations
        initScrollAnimations();
    }, 800);
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            const navOverlay = document.getElementById('navOverlay');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
            if (navOverlay) {
                navOverlay.classList.remove('active');
            }
        }
    });
});

// ===== MOBILE NAVIGATION =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        if (navOverlay) {
            navOverlay.classList.toggle('active');
        }
    });
}

// Close menu when clicking overlay
if (navOverlay) {
    navOverlay.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content') && navMenu) {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
        if (navOverlay) {
            navOverlay.classList.remove('active');
        }
    }
});

// ===== STICKY NAVBAR WITH SCROLL EFFECTS =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQs
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked FAQ if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-zoom-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== GAME CARDS HOVER EFFECTS =====
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== GALLERY HOVER EFFECTS =====
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statNumbers = document.querySelectorAll('.proof-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const text = element.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (!isNaN(number)) {
                element.textContent = '0';
                animateCounter(element, number, 2000);
                statsObserver.unobserve(element);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || 'Not provided',
            date: formData.get('date') || 'Not specified',
            venue: formData.get('venue') || 'Not specified',
            message: formData.get('message')
        };
        
        // Disable submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.querySelector('span').textContent;
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';
        
        // Hide any previous messages
        formSuccess.classList.remove('show');
        formError.classList.remove('show');
        
        try {
            // Create mailto link
            const subject = encodeURIComponent(`Bold Booth Inquiry from ${data.name}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\n` +
                `Email: ${data.email}\n` +
                `Phone: ${data.phone}\n` +
                `Wedding Date: ${data.date}\n` +
                `Venue/Location: ${data.venue}\n\n` +
                `Message:\n${data.message}`
            );
            
            const mailtoLink = `mailto:contact@theboldbooth.com?subject=${subject}&body=${body}`;
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                formSuccess.classList.add('show');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = originalBtnText;
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
            
        } catch (error) {
            console.error('Form submission error:', error);
            formError.classList.add('show');
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalBtnText;
            
            // Scroll to error message
            formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// ===== QUICK AVAILABILITY CHECK FORM =====
const quickCheckForm = document.getElementById('quickCheckForm');

if (quickCheckForm) {
    quickCheckForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quickCheckForm);
        const data = {
            names: formData.get('names'),
            date: formData.get('date'),
            venue: formData.get('venue'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };
        
        // Create mailto link
        const subject = encodeURIComponent(`Availability Check: ${data.names} - ${data.date}`);
        const body = encodeURIComponent(
            `Wedding Couple: ${data.names}\n` +
            `Wedding Date: ${data.date}\n` +
            `Venue/City: ${data.venue}\n` +
            `Email: ${data.email}\n` +
            `Phone: ${data.phone}\n\n` +
            `Please check availability for the above wedding date and send me more information about Bold Booth.`
        );
        
        const mailtoLink = `mailto:contact@theboldbooth.com?subject=${subject}&body=${body}`;
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Reset form
        setTimeout(() => {
            quickCheckForm.reset();
            alert('Thank you! Your availability check has been sent. We\'ll respond within 24 hours.');
        }, 500);
    });
}

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== KEYBOARD ACCESSIBILITY FOR FAQ =====
faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
        
        if (e.key === 'ArrowDown' && index < faqItems.length - 1) {
            faqItems[index + 1].querySelector('.faq-question').focus();
        }
        
        if (e.key === 'ArrowUp' && index > 0) {
            faqItems[index - 1].querySelector('.faq-question').focus();
        }
    });
});

// ===== FEATURE TAG HOVER ANIMATION =====
const featureTags = document.querySelectorAll('.feature-tag');
featureTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== CLICK-TO-CALL ENHANCEMENT FOR MOBILE =====
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Check if on mobile
        if (window.innerWidth > 768) {
            e.preventDefault();
            const phoneNumber = link.getAttribute('href').replace('tel:', '');
            navigator.clipboard.writeText(phoneNumber).then(() => {
                alert(`Phone number ${phoneNumber} copied to clipboard!`);
            }).catch(err => {
                console.error('Failed to copy phone number:', err);
            });
        }
    });
});

// ===== TESTIMONIAL CARD ANIMATION =====
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== BUTTON CLICK RIPPLE EFFECT =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== ENHANCED SCROLL PROGRESS INDICATOR =====
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Could add a progress bar if desired
    // document.getElementById('progressBar').style.width = scrolled + '%';
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Heavy scroll operations here
}, 100));

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add skip to content link
const skipLink = document.createElement('a');
skipLink.href = '#overview';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c💝 Bold Booth - Wedding Edition', 'color: #FF1744; font-size: 24px; font-weight: bold;');
console.log('%cTransform your wedding reception into an interactive entertainment experience!', 'color: #7f8c8d; font-size: 14px;');
console.log('%c🎉 Website enhanced with premium features • 2026', 'color: #7C4DFF; font-size: 12px;');

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Log performance metrics (can be sent to analytics)
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    });
    
    perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Could send to error tracking service
});

// ===== INITIALIZATION COMPLETE =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Bold Booth website fully loaded and interactive');
});