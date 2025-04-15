// Floating numbers animation
function createFloatingNumber(container) {
    const number = document.createElement('div');
    number.className = 'floating-symbol text-sm opacity-50';
    number.textContent = Math.floor(Math.random() * 10);
    
    // Random position and animation
    number.style.left = Math.random() * 80 + 10 + '%';
    number.style.top = Math.random() * 80 + 10 + '%';
    number.style.animation = `float ${Math.random() * 2 + 3}s ease-in-out infinite`;
    
    container.appendChild(number);
    
    // Remove after animation
    setTimeout(() => number.remove(), 5000);
}

// Category icon hover effects
function initializeCategoryIcons() {
    const icons = document.querySelectorAll('.category-icon');
    
    icons.forEach(icon => {
        // Add floating numbers periodically
        setInterval(() => createFloatingNumber(icon), 2000);
        
        // 3D rotation effect on hover
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            icon.style.transform = `
                perspective(1000px) 
                rotateX(${angleX}deg) 
                rotateY(${angleY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            bar.style.width = targetWidth;
        }, 100);
    });
}

// Exercise card hover effects
function initializeExerciseCards() {
    const cards = document.querySelectorAll('.exercise-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
}

// Answer feedback animations
function initializeAnswerFeedback() {
    const exercises = document.querySelectorAll('.exercise');
    
    exercises.forEach(exercise => {
        const radioButtons = exercise.querySelectorAll('input[type="radio"]');
        
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                const label = radio.parentElement;
                label.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    label.style.transform = 'scale(1)';
                }, 200);
            });
        });
    });
}

// Filter animation
function initializeFilters() {
    const filters = document.querySelectorAll('select');
    
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const exercises = document.querySelectorAll('.exercise');
            exercises.forEach(exercise => {
                exercise.style.opacity = '0';
                setTimeout(() => {
                    exercise.style.opacity = '1';
                }, 300);
            });
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCategoryIcons();
    animateProgressBars();
    initializeExerciseCards();
    initializeAnswerFeedback();
    initializeFilters();
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
