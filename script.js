// ===========================
// Project Data
// ===========================
const projects = [
    {
        id: 1,
        title: 'IMC - Índice de Masa Corporal',
        category: 'mobile',
        tags: ['Kotlin', 'Android', 'Material Design 3'],
        description: 'Calculadora de IMC profesional con diseño moderno y seguimiento de progreso.',
        details: 'Aplicación Android nativa publicada en Google Play Store que permite calcular el Índice de Masa Corporal de forma rápida y precisa. Cuenta con un diseño moderno siguiendo las guías de Material Design 3, historial de mediciones, y análisis de resultados con recomendaciones.',
        technologies: ['Kotlin', 'Android Studio', 'Material Design 3', 'SharedPreferences', 'ViewBinding'],
        features: [
            'Cálculo preciso del IMC',
            'Categorización según estándares OMS',
            'Historial de mediciones guardado',
            'Gráficos de progreso',
            'Diseño Material Design 3',
            'Funcionamiento offline'
        ],
        playstore: 'https://play.google.com/store/apps/details?id=com.jventura.imc'
    },
    {
        id: 2,
        title: 'Top Recetas Peruanas',
        category: 'mobile',
        tags: ['Kotlin', 'Android', 'MVVM'],
        description: 'Aplicación de recetas tradicionales peruanas con más de 140 recetas auténticas.',
        details: 'App Android publicada en Play Store que presenta una extensa colección de recetas peruanas tradicionales. Incluye información detallada de ingredientes, pasos de preparación, información nutricional, y categorización por tipo de plato. Implementa arquitectura MVVM para un código mantenible.',
        technologies: ['Kotlin', 'MVVM Architecture', 'Room Database', 'RecyclerView', 'Material Design 3', 'Glide'],
        features: [
            '140+ recetas peruanas auténticas',
            'Búsqueda rápida de recetas',
            'Filtros por categoría',
            'Sistema de favoritos',
            'Información nutricional completa',
            'Imágenes de alta calidad',
            'Funciona 100% offline'
        ],
        playstore: 'https://play.google.com/store/apps/details?id=com.recetasperuanas.app'
    },
    {
        id: 3,
        title: 'Conversor Universal',
        category: 'mobile',
        tags: ['Kotlin', 'Android', 'Material Design'],
        description: 'Conversor de unidades completo con múltiples categorías y diseño intuitivo.',
        details: 'Aplicación Android publicada en Google Play Store que permite convertir entre diferentes unidades de medida. Soporta conversiones de longitud, peso, temperatura, volumen, área, velocidad, tiempo y más. Diseño minimalista e intuitivo para conversiones rápidas.',
        technologies: ['Kotlin', 'Android Studio', 'Material Design 3', 'Data Binding', 'SharedPreferences'],
        features: [
            'Múltiples categorías de conversión',
            'Conversión en tiempo real',
            'Historial de conversiones',
            'Interfaz intuitiva y rápida',
            'Precisión decimal ajustable',
            'Tema claro y oscuro',
            'Sin necesidad de internet'
        ],
        playstore: 'https://play.google.com/store/apps/details?id=com.conversor.unidades'
    }
];

// ===========================
// Typing Animation
// ===========================
const titles = [
    'Desarrollador Full Stack',
    'Creador de Apps Móviles',
    'Arquitecto de Software',
    'Entusiasta del Código'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeTitle() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
    }

    setTimeout(typeTitle, typingSpeed);
}

// ===========================
// Navigation
// ===========================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Active link on scroll and smooth close menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
}

// ===========================
// Dark Mode
// ===========================
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ===========================
// Scroll Animations
// ===========================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// ===========================
// Counter Animation
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 16);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ===========================
// Skill Progress Bars
// ===========================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// ===========================
// Projects
// ===========================
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card show';
    card.setAttribute('data-category', project.category);

    card.innerHTML = `
        <div class="project-image">
            <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-footer">
                ${project.playstore ? `
                <a href="${project.playstore}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.22 0c-.03.16-.04.32-.04.49 0 .26.05.52.16.75l10.98 19.01 6.42-6.42L1.22 0zM20.79 10.62l-3.34-1.93-3.77 3.77 3.77 3.77 3.34-1.93c.79-.45 1.21-1.22 1.21-2s-.42-1.55-1.21-2zM5.62 2.83L17.74 9.8l-5.23 5.23L5.62 2.83zM12.51 15.03l5.23 5.23L5.62 27.17l6.89-12.14z"/>
                    </svg>
                    Play Store
                </a>
                ` : ''}
                ${project.github ? `
                <a href="${project.github}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                ` : ''}
                ${project.demo ? `
                <a href="${project.demo}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Demo
                </a>
                ` : ''}
            </div>
        </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    return card;
}

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="project-image" style="margin-bottom: 2rem;">
            <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
        </div>
        <h2 style="margin-bottom: 1rem;">${project.title}</h2>
        <div class="project-tags" style="margin-bottom: 1.5rem;">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem;">${project.details}</p>
        
        <h3 style="margin-bottom: 1rem;">Tecnologías</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        
        <h3 style="margin-bottom: 1rem;">Características</h3>
        <ul style="color: var(--text-secondary); margin-bottom: 2rem; padding-left: 1.5rem;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            ${project.playstore ? `
            <a href="${project.playstore}" class="btn btn-primary" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
                    <path d="M1.22 0c-.03.16-.04.32-.04.49 0 .26.05.52.16.75l10.98 19.01 6.42-6.42L1.22 0zM20.79 10.62l-3.34-1.93-3.77 3.77 3.77 3.77 3.34-1.93c.79-.45 1.21-1.22 1.21-2s-.42-1.55-1.21-2zM5.62 2.83L17.74 9.8l-5.23 5.23L5.62 2.83zM12.51 15.03l5.23 5.23L5.62 27.17l6.89-12.14z"/>
                </svg>
                Ver en Play Store
            </a>
            ` : ''}
            ${project.github ? `
            <a href="${project.github}" class="btn btn-primary" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px;">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver en GitHub
            </a>
            ` : ''}
            ${project.demo ? `
            <a href="${project.demo}" class="btn btn-secondary" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Ver Demo
            </a>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal.querySelector('.modal-overlay');

    modalClose.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', closeProjectModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// ===========================
// Contact Form
// ===========================
function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        console.log('Form submitted:', data);

        // Show success message
        alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
        form.reset();
    });
}

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Start typing animation
    setTimeout(typeTitle, 500);

    // Initialize all features
    initNavigation();
    initDarkMode();
    initScrollAnimations();
    animateCounters();
    animateSkills();

    // Projects
    renderProjects();
    initProjectFilters();
    initProjectModal();

    // Contact form
    initContactForm();
});
