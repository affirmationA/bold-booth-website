/* ===============================================
   BOLD BOOTH - ELEGANT BLEND EFFECTS
   Sophisticated Tech + Romantic Wedding Vibes
   =============================================== */

// Soft romantic particles instead of harsh data streams
function createRomanticParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'romantic-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        hero.appendChild(particle);
    }
}

// Elegant confetti - mix of romantic and geometric
function createElegantConfetti(x, y) {
    const shapes = ['♥', '✦', '◆', '●', '★', '💕', '💫', '✨'];
    const colors = ['#E8B4B8', '#C5B9D8', '#D4A5D8', '#F7E7CE', '#A8D8EA'];
    const count = 35;
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            font-size: ${Math.random() * 18 + 12}px;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 10px currentColor;
            animation: elegantConfettiFall ${Math.random() * 2 + 2.5}s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add elegant confetti animation
const elegantConfettiStyle = document.createElement('style');
elegantConfettiStyle.textContent = `
    @keyframes elegantConfettiFall {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight * 0.8}px) rotate(${Math.random() * 360}deg) scale(0.7);
            opacity: 0;
        }
    }
`;
document.head.appendChild(elegantConfettiStyle);

// Soft shimmer effect on hover (not harsh glitch)
function createSoftShimmer(element) {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'softShimmer 1.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 1500);
    });
}

// Initialize soft shimmer on cards
function initSoftShimmers() {
    const shimmerElements = document.querySelectorAll('.game-card-title, .section-title');
    shimmerElements.forEach(el => createSoftShimmer(el));
}

// Gentle glow pulse on scroll reveal
function initGentleGlowReveals() {
    const elements = document.querySelectorAll('.section-badge, .game-card, .testimonial-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'gentleReveal 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Add gentle reveal animation
const gentleRevealStyle = document.createElement('style');
gentleRevealStyle.textContent = `
    @keyframes gentleReveal {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes softShimmer {
        0%, 100% { opacity: 1; filter: brightness(1); }
        50% { opacity: 0.85; filter: brightness(1.15); }
    }
`;
document.head.appendChild(gentleRevealStyle);

// Elegant button effects
function initElegantButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            // Create elegant confetti
            createElegantConfetti(x, y);
            
            // Add soft ripple
            createSoftRipple(this, e);
        });
        
        // Soft glow on hover
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s ease';
        });
    });
}

// Soft ripple effect (not harsh energy)
function createSoftRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${event.clientX - rect.left - size/2}px;
        top: ${event.clientY - rect.top - size/2}px;
        background: radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: softRipple 0.8s ease-out;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
}

const softRippleStyle = document.createElement('style');
softRippleStyle.textContent = `
    @keyframes softRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2.5);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(softRippleStyle);

// Animated counter with smooth elegant counting
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
                
                animateValue(counter, 0, numericValue, 2500, isPercentage, isPlusSign);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
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
        
        // Smooth easing
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

// Gentle parallax (not aggressive)
function initGentleParallax() {
    const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const speed = 0.2; // Gentler than before
        
        parallaxElements.forEach((element, index) => {
            if (element) {
                const offset = scrolled * (speed + index * 0.05);
                element.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

// Elegant card entrance animations
function initElegantCardAnimations() {
    const cards = document.querySelectorAll('.game-card, .testimonial-card, .pricing-card');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'elegantSlideIn 0.8s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

const elegantSlideStyle = document.createElement('style');
elegantSlideStyle.textContent = `
    @keyframes elegantSlideIn {
        0% {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(elegantSlideStyle);

// Soft floating hearts/sparkles (wedding appropriate)
function createFloatingHearts() {
    const hearts = ['♥', '✨', '💫', '💕'];
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, sectionIndex) => {
        if (sectionIndex % 2 === 0) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: absolute;
                font-size: 3rem;
                opacity: 0.06;
                top: ${Math.random() * 80 + 10}%;
                left: ${Math.random() * 80 + 10}%;
                color: #E8B4B8;
                animation: floatGentle ${Math.random() * 8 + 8}s ease-in-out infinite;
                pointer-events: none;
            `;
            section.style.position = 'relative';
            section.appendChild(heart);
        }
    });
}

// Soft sparkle trail (not harsh neon)
function createSoftSparkleTrail(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        font-size: 1.2rem;
        z-index: 9999;
        color: #E8B4B8;
        text-shadow: 0 0 8px rgba(232, 180, 184, 0.6);
        animation: softSparkleTrail 1.2s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1200);
}

const softSparkleStyle = document.createElement('style');
softSparkleStyle.textContent = `
    @keyframes softSparkleTrail {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0.8) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.3) rotate(180deg);
        }
    }
`;
document.head.appendChild(softSparkleStyle);

function initSoftSparkleTrail() {
    const interactiveElements = document.querySelectorAll('.btn, .game-card, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createSoftSparkleTrail(x, y);
        });
    });
}

// Elegant hover effects
function initElegantHoverEffects() {
    const cards = document.querySelectorAll('.game-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

// Soft gallery hover effect
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize all elegant effects
document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 Bold Booth Elegant Blend Effects Loading...');
    
    setTimeout(createRomanticParticles, 500);
    setTimeout(initElegantButtons, 600);
    setTimeout(initSoftShimmers, 700);
    setTimeout(initGentleGlowReveals, 800);
    setTimeout(animateCounters, 900);
    setTimeout(initGentleParallax, 1000);
    setTimeout(initElegantCardAnimations, 1100);
    setTimeout(createFloatingHearts, 1200);
    setTimeout(initSoftSparkleTrail, 1300);
    setTimeout(initElegantHoverEffects, 1400);
    setTimeout(initGalleryEffects, 1500);
    
    console.log('✨ Bold Booth Elegant Blend Effects Loaded!');
});

// Soft excitement when tab becomes visible
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        createElegantConfetti(window.innerWidth / 2, 100);
    }
});
