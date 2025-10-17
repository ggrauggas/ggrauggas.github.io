// Inicialización de la configuración
function initializeUserData() {
    // Información personal
    document.getElementById('userName').textContent = userConfig.name;
    document.querySelectorAll('.user-name').forEach(el => {
        el.textContent = userConfig.name;
    });
    document.getElementById('userEmail').textContent = userConfig.email;
    document.getElementById('userLocation').textContent = userConfig.location;
    document.querySelectorAll('.user-location').forEach(el => {
        el.textContent = userConfig.location;
    });
    
    // Redes sociales
    document.getElementById('githubLink').href = userConfig.socialLinks.github;
    document.getElementById('linkedinLink').href = userConfig.socialLinks.linkedin;
    document.getElementById('twitterLink').href = userConfig.socialLinks.twitter;
    
    // Footer
    document.getElementById('footerName').textContent = userConfig.name;
    document.getElementById('copyrightName').textContent = userConfig.name;
    
    // Actualizar año de copyright si es necesario
    const currentYear = new Date().getFullYear();
    if (currentYear.toString() !== userConfig.copyrightYear) {
        document.querySelector('.copyright').innerHTML = `&copy; ${currentYear} <span id="copyrightName">${userConfig.name}</span>. Todos los derechos reservados.`;
    }
}

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'var(--shadow)';
    }
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeUserData();
});