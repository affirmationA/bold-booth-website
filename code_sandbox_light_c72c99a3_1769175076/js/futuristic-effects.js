/* ===============================================
   BOLD BOOTH - FUTURISTIC EFFECTS ENGINE
   Cutting-edge • Tech-forward • Revolutionary
   =============================================== */

// Data stream particles
function createDataStreams() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const streamCount = 20;
    
    setInterval(() => {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.left = Math.random() * 100 + '%';
        stream.style.top = '-20px';
        stream.style.animationDuration = (Math.random() * 2 + 2) + 's';
        hero.appendChild(stream);
        
        setTimeout(() => stream.remove(), 4000);
    }, 200);
}

// Cyber confetti (geometric shapes instead of regular confetti)
function createCyberConfetti(x, y) {
    const shapes = ['■', '●', '▲', '◆', '✦'];
    const colors = ['#00F0FF', '#B026FF', '#FF2E97', '#FFD700'];
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            font-size: ${Math.random() * 20 + 15}px;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 10px currentColor;
            animation: cyberConfettiFall ${Math.random() * 2 + 2}s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add cyber confetti animation
const cyberConfettiStyle = document.createElement('style');
cyberConfettiStyle.textContent = `
    @keyframes cyberConfettiFall {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight}px) rotate(${Math.random() * 720 - 360}deg) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(cyberConfettiStyle);

// Glitch effect on hover
function createGlitchEffect(element) {
    const original = element.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    let glitchInterval;
    
    element.addEventListener('mouseenter', function() {
        let iterations = 0;
        
        glitchInterval = setInterval(() => {
            element.textContent = element.textContent
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return original[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            if (iterations >= original.length) {
                clearInterval(glitchInterval);
            }
            
            iterations += 1/3;
        }, 30);
    });
    
    element.addEventListener('mouseleave', function() {
        clearInterval(glitchInterval);
        element.textContent = original;
    });
}

// Initialize glitch effects on titles
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.game-card-title');
    glitchElements.forEach(el => {
        if (el.textContent && el.textContent.length < 50) { // Only glitch short text
            // Store original to data attribute instead
            el.setAttribute('data-text', el.textContent);
        }
    });
}

// Hologram scan line effect
function createScanLines() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, #00F0FF 50%, transparent 100%);
            box-shadow: 0 0 10px #00F0FF;
            animation: scanline ${Math.random() * 5 + 3}s linear infinite;
            opacity: 0.3;
            pointer-events: none;
            z-index: 1;
        `;
        section.style.position = 'relative';
        section.appendChild(scanLine);
    });
}

// Neon glow on scroll
function initNeonGlow() {
    const elements = document.querySelectorAll('.section-title, .game-card, .testimonial-card');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'neonGlowIn 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    
    elements.forEach(el => observer.observe(el));
}

// Add neon glow animation
const neonGlowStyle = document.createElement('style');
neonGlowStyle.textContent = `
    @keyframes neonGlowIn {
        0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(5px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
        }
    }
    
    @keyframes scanline {
        0% { transform: translateY(0); }
        100% { transform: translateY(100vh); }
    }
`;
document.head.appendChild(neonGlowStyle);

// Cyber button effects
function initCyberButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            // Create cyber confetti
            createCyberConfetti(x, y);
            
            // Add energy ripple
            createEnergyRipple(this, e);
        });
        
        // Hover effect with corner accents
        button.addEventListener('mouseenter', function() {
            addCornerAccents(this);
        });
    });
}

// Energy ripple effect
function createEnergyRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${event.clientX - rect.left - size/2}px;
        top: ${event.clientY - rect.top - size/2}px;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.6) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: energyRipple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

const energyRippleStyle = document.createElement('style');
energyRippleStyle.textContent = `
    @keyframes energyRipple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(energyRippleStyle);

// Corner accents for buttons
function addCornerAccents(element) {
    if (element.querySelector('.corner-accent')) return;
    
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    
    corners.forEach(corner => {
        const accent = document.createElement('div');
        accent.className = `corner-accent ${corner}`;
        accent.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid #00F0FF;
            box-shadow: 0 0 10px #00F0FF;
            pointer-events: none;
            opacity: 0;
            animation: cornerFadeIn 0.3s ease-out forwards;
        `;
        
        if (corner.includes('top')) accent.style.top = '-2px';
        if (corner.includes('bottom')) accent.style.bottom = '-2px';
        if (corner.includes('left')) {
            accent.style.left = '-2px';
            accent.style.borderRight = 'none';
            accent.style.borderBottom = corner.includes('top') ? 'none' : '2px solid #00F0FF';
        }
        if (corner.includes('right')) {
            accent.style.right = '-2px';
            accent.style.borderLeft = 'none';
            accent.style.borderBottom = corner.includes('top') ? 'none' : '2px solid #00F0FF';
        }
        
        element.appendChild(accent);
    });
    
    setTimeout(() => {
        element.querySelectorAll('.corner-accent').forEach(acc => acc.remove());
    }, 1000);
}

const cornerAccentStyle = document.createElement('style');
cornerAccentStyle.textContent = `
    @keyframes cornerFadeIn {
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
    }
`;
document.head.appendChild(cornerAccentStyle);

// Animated counter with digital effect
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
        if (!counter.getAttribute('data-target')) {
            counter.setAttribute('data-target', counter.textContent);
        }
        observer.observe(counter);
    });
}

function animateValue(element, start, end, duration, isPercentage = false, hasPlusSign = false) {
    const startTime = performance.now();
    const charset = '0123456789';
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        // Digital glitch effect during counting
        if (progress < 1 && Math.random() > 0.7) {
            element.textContent = Math.random().toString().substr(2, String(current).length);
        } else {
            let displayValue = current;
            if (isPercentage) displayValue += '%';
            if (hasPlusSign) displayValue += '+';
            element.textContent = displayValue;
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Final value
            let displayValue = end;
            if (isPercentage) displayValue += '%';
            if (hasPlusSign) displayValue += '+';
            element.textContent = displayValue;
        }
    }
    
    requestAnimationFrame(update);
}

// Parallax with depth
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-background, .hero::before');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Card entrance with scan effect
function initCardAnimations() {
    const cards = document.querySelectorAll('.game-card, .testimonial-card, .pricing-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'cardScanIn 0.8s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

const cardScanStyle = document.createElement('style');
cardScanStyle.textContent = `
    @keyframes cardScanIn {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(5px) brightness(2);
        }
        50% {
            filter: blur(2px) brightness(1.5);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) brightness(1);
        }
    }
`;
document.head.appendChild(cardScanStyle);

// Cyber grid background effect
function createCyberGrid() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Add floating grid lines
    for (let i = 0; i < 5; i++) {
        const gridLine = document.createElement('div');
        gridLine.style.cssText = `
            position: absolute;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(0, 240, 255, 0.3) 50%, transparent 100%);
            top: ${20 + i * 20}%;
            animation: gridPulse ${3 + i}s ease-in-out infinite;
            animation-delay: ${i * 0.5}s;
        `;
        hero.appendChild(gridLine);
    }
}

const gridPulseStyle = document.createElement('style');
gridPulseStyle.textContent = `
    @keyframes gridPulse {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.6; }
    }
`;
document.head.appendChild(gridPulseStyle);

// Hover trail effect (neon trace)
let trailTimeout;
function createHoverTrail(e) {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 5px;
        height: 5px;
        background: #00F0FF;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 10px #00F0FF;
        animation: trailFade 0.8s ease-out forwards;
    `;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 800);
}

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.3);
        }
    }
`;
document.head.appendChild(trailStyle);

function initHoverTrail() {
    const interactiveElements = document.querySelectorAll('.btn, .game-card, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mousemove', createHoverTrail);
    });
}

// Initialize all futuristic effects
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Bold Booth Futuristic Effects Loading...');
    
    setTimeout(createDataStreams, 500);
    setTimeout(initCyberButtons, 600);
    setTimeout(initGlitchEffects, 700);
    setTimeout(createScanLines, 800);
    setTimeout(initNeonGlow, 900);
    setTimeout(animateCounters, 1000);
    setTimeout(initParallax, 1100);
    setTimeout(initCardAnimations, 1200);
    setTimeout(createCyberGrid, 1300);
    setTimeout(initHoverTrail, 1400);
    
    console.log('✨ Bold Booth Futuristic Effects Loaded!');
});

// Add extra excitement when tab becomes visible
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        createCyberConfetti(window.innerWidth / 2, 100);
    }
});
