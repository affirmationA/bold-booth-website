/* ===============================================
   BOLD BOOTH - EXCITING INTERACTIVE EFFECTS
   Dynamic animations, particles, and interactions
   =============================================== */

// Energy particles in hero section
function createEnergyParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'energy-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        hero.appendChild(particle);
    }
}

// Confetti explosion on CTA button click
function createConfetti(x, y) {
    const colors = ['#FF1744', '#FFD700', '#D500F9', '#651FFF', '#FF5177'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Random rotation
        const rotation = Math.random() * 360;
        confetti.style.transform = `rotate(${rotation}deg)`;
        
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Add confetti to all CTA buttons
function initConfettiButtons() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-nav-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createConfetti(x, y);
        });
    });
}

// Animated counter for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .social-stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.getAttribute('data-target') || counter.textContent;
                const isPercentage = target.includes('%');
                const isPlusSign = target.includes('+');
                const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
                
                if (isNaN(numericValue)) return;
                
                animateValue(counter, 0, numericValue, 2000, isPercentage, isPlusSign);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        // Store original value
        if (!counter.getAttribute('data-target')) {
            counter.setAttribute('data-target', counter.textContent);
        }
        observer.observe(counter);
    });
}

function animateValue(element, start, end, duration, isPercentage = false, hasPlusSign = false) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        let displayValue = current;
        if (isPercentage) displayValue += '%';
        if (hasPlusSign) displayValue += '+';
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Parallax effect on scroll
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-background, .hero-pattern');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add sparkle cursor trail
function createSparkleTrail(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        font-size: 1.5rem;
        z-index: 9999;
        animation: sparkleTrail 1s ease-out forwards;
    `;
    sparkle.textContent = '✨';
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add sparkle trail CSS animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleTrail {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0.5) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5) rotate(360deg);
        }
    }
    
    @keyframes confettiStyle {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        animation: confettiStyle 3s ease-out forwards;
        z-index: 9999;
        pointer-events: none;
    }
`;
document.head.appendChild(sparkleStyle);

// Sparkle trail on interactive elements
function initSparkleTrail() {
    const interactiveElements = document.querySelectorAll('.btn, .game-card, .testimonial-card, .pricing-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createSparkleTrail(x, y);
        });
    });
}

// Exciting hover sound (visual feedback only, respecting user preferences)
function addHoverEffects() {
    const cards = document.querySelectorAll('.game-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

// Floating emojis animation
function createFloatingEmojis() {
    const emojis = ['💝', '🎉', '✨', '💫', '🎊', '💖', '⭐', '🌟', '💍', '🥂'];
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        if (index % 2 === 0) { // Only add to alternate sections
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: absolute;
                font-size: 4rem;
                opacity: 0.05;
                top: ${Math.random() * 80 + 10}%;
                left: ${Math.random() * 80 + 10}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                pointer-events: none;
            `;
            section.style.position = 'relative';
            section.appendChild(emoji);
        }
    });
}

// Ripple effect on button clicks
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple-effect');
    
    const rippleElement = button.querySelector('.ripple-effect');
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

function initRippleButtons() {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// Exciting entrance animations on scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.game-card, .testimonial-card, .faq-item, .timeline-item, .gallery-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Pulsing CTA sections
function initPulsingCTA() {
    const ctaSections = document.querySelectorAll('.section-cta, .pricing-card');
    
    ctaSections.forEach(section => {
        setInterval(() => {
            section.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                section.style.animation = '';
            }, 1000);
        }, 5000);
    });
}

// Initialize all exciting effects
document.addEventListener('DOMContentLoaded', function() {
    // Add exciting effects with slight delays for dramatic effect
    setTimeout(createEnergyParticles, 500);
    setTimeout(initConfettiButtons, 600);
    setTimeout(animateCounters, 700);
    setTimeout(initParallax, 800);
    setTimeout(initSparkleTrail, 900);
    setTimeout(addHoverEffects, 1000);
    setTimeout(createFloatingEmojis, 1100);
    setTimeout(initRippleButtons, 1200);
    setTimeout(initScrollAnimations, 1300);
    setTimeout(initPulsingCTA, 1400);
    
    console.log('🎉 Bold Booth Exciting Effects Loaded!');
});

// Extra excitement on page visibility
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page became visible - add excitement!
        const rect = document.body.getBoundingClientRect();
        createConfetti(rect.width / 2, 100);
    }
});
