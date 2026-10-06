/* ==========================================
   PORTAFOLIO SALET GUTIERREZ - JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SCROLL SUAVE + MENÚ ACTIVO AL CLICK
    // ==========================================
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 90;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            const nav = document.querySelector('header nav');
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                const toggle = document.querySelector('.menu-toggle');
                if (toggle) toggle.textContent = '☰';
            }

            document.querySelectorAll('header nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ==========================================
    // 2. HEADER STICKY CON EFECTO AL SCROLL
    // ==========================================
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. SCROLL SPY (INDICADOR ACTIVO AUTOMÁTICO)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => spyObserver.observe(section));

    // ==========================================
    // 4. MENÚ HAMBURGUESA (MÓVIL)
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const nav = document.querySelector('header nav');
            nav.classList.toggle('open');
            menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
        });
    }

    // ==========================================
    // 5. EFECTO DE ESCRITURA EN EL TÍTULO
    // ==========================================
    const heroTitle = document.querySelector('.hero-text h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            heroTitle.style.borderRight = '3px solid var(--accent-color)';
            heroTitle.style.paddingRight = '5px';
            setInterval(() => {
                heroTitle.style.borderRightColor =
                    heroTitle.style.borderRightColor === 'transparent'
                        ? 'var(--accent-color)'
                        : 'transparent';
            }, 500);
        }
    }
    window.addEventListener('load', typeWriter);

    // ==========================================
    // 6. ANIMACIÓN DE APARICIÓN AL SCROLL
    // ==========================================
    const revealSections = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(section);
    });

    // ==========================================
    // 7. ANIMACIÓN STAGGER DE TARJETAS
    // ==========================================
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, border-color 0.3s, box-shadow 0.3s`;
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => cardObserver.observe(card));

    // ==========================================
    // 8. EFECTO 3D EN EL AVATAR
    // ==========================================
    const avatar = document.querySelector('.avatar-box');
    if (avatar && window.matchMedia('(hover: hover)').matches) {
        avatar.addEventListener('mousemove', (e) => {
            const rect = avatar.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            avatar.style.transform = `perspective(500px) rotateY(${x / 10}deg) rotateX(${-y / 10}deg) scale(1.05)`;
        });

        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = 'perspective(500px) rotateY(0) rotateX(0) scale(1)';
        });
    }

    // ==========================================
    // 9. BARRA DE PROGRESO DE LECTURA
    // ==========================================
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--accent-color);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(163, 230, 53, 0.6);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = scrollPercent + '%';
    });

    // ==========================================
    // 10. BOTÓN "VOLVER ARRIBA"
    // ==========================================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Volver arriba');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: var(--accent-color);
        color: #2d2d2d;
        border: none;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(163, 230, 53, 0.4);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(20px)';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // 11. LOGO CLICKEABLE
    // ==========================================
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.querySelectorAll('header nav a').forEach(link => link.classList.remove('active'));
            const firstLink = document.querySelector('header nav a');
            if (firstLink) firstLink.classList.add('active');
        });
    }

    // ==========================================
    // 12. AÑO DINÁMICO EN EL FOOTER
    // ==========================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ==========================================
    // 13. PROGRAMACIÓN FUNCIONAL
    //     FILTRO DE SKILLS POR TECNOLOGÍA
    // ==========================================
    const misSkills = [
        { nombre: 'Node.js',      nivel: 90, tech: 'backend'  },
        { nombre: 'TypeScript',   nivel: 85, tech: 'backend'  },
        { nombre: 'C#',           nivel: 80, tech: 'backend'  },
        { nombre: 'Java',         nivel: 75, tech: 'backend'  },
        { nombre: 'React',        nivel: 88, tech: 'frontend' },
        { nombre: 'HTML5',        nivel: 95, tech: 'frontend' },
        { nombre: 'CSS3',         nivel: 92, tech: 'frontend' },
        { nombre: 'AWS',          nivel: 78, tech: 'cloud'    },
        { nombre: 'Arquitectura Cloud', nivel: 82, tech: 'cloud' },
        { nombre: 'Liderazgo',    nivel: 95, tech: 'soft'     },
        { nombre: 'Scrum',        nivel: 88, tech: 'soft'     }
    ];

    const skillsContainer = document.querySelector('#skills-container');
    const skillsMetrica = document.querySelector('#skills-metrica');
    const botonesFiltro = document.querySelectorAll('.btn-filter');

    function renderizarSkills(skills) {
        if (skills.length === 0) {
            skillsContainer.innerHTML = '<p class="loading-msg">No hay skills en esta categoría.</p>';
            skillsMetrica.textContent = '';
            return;
        }

        skillsContainer.innerHTML = skills.map(s => `
            <div class="card">
                <h3>${s.nombre}</h3>
                <p>Nivel: <strong style="color: var(--accent-color)">${s.nivel}%</strong></p>
            </div>
        `).join('');

        const promedio = Math.round(
            skills.reduce((acc, s) => acc + s.nivel, 0) / skills.length
        );
        skillsMetrica.textContent = `📊 Mostrando ${skills.length} skills · Promedio: ${promedio}%`;
    }

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            const tech = boton.dataset.tech;
            const filtradas = tech === 'todas'
                ? misSkills
                : misSkills.filter(s => s.tech === tech);

            renderizarSkills(filtradas);
        });
    });

    renderizarSkills(misSkills);

    // ==========================================
    // 14. ACTIVIDAD 1 DEL DIPLOMADO: CLOSURES
    //     CONTADOR PRIVADO DE PROYECTOS LIDERADOS
    // ==========================================
    function crearContadorProyectos() {
        let total = 0;  // variable privada (closure)

        return function() {
            total++;
            return total;
        };
    }

    const contarProyecto = crearContadorProyectos();
    const btnProyectos = document.querySelector('#btn-proyectos');

    if (btnProyectos) {
        btnProyectos.addEventListener('click', () => {
            const total = contarProyecto();
            btnProyectos.textContent = `Proyectos liderados este año: ${total}`;

            if (total === 5) {
                btnProyectos.textContent += ' 🏆 ¡Récord!';
            }
        });
    }

    // ==========================================
    // 15. ACTIVIDAD 2 DEL DIPLOMADO: ASINCRONÍA
    //     FETCH + ASYNC/AWAIT → REPOS DE GITHUB
    // ==========================================
    async function cargarReposGitHub(usuario) {
        const grid = document.querySelector('#repos-grid');
        grid.innerHTML = '<p class="loading-msg">⏳ Cargando repos desde GitHub...</p>';

        try {
            const res = await fetch(
                `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=6`
            );

            if (!res.ok) {
                throw new Error(`Error HTTP ${res.status}: no se pudo cargar la información`);
            }

            const repos = await res.json();

            if (repos.length === 0) {
                grid.innerHTML = '<p class="loading-msg">Este usuario no tiene repos públicos.</p>';
                return;
            }

            grid.innerHTML = repos.map(repo => `
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="card repo-card">
                    <h3>📁 ${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción disponible.'}</p>
                    <div class="repo-meta">
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                        <span>💻 ${repo.language || 'N/A'}</span>
                    </div>
                </a>
            `).join('');

            console.log(`✅ ${repos.length} repos cargados correctamente.`);

        } catch (error) {
            console.error('Detalle técnico del error:', error);
            grid.innerHTML = `
                <p class="error-msg">
                    ❌ No se pudieron cargar los repos.<br>
                    <small>${error.message}</small>
                </p>
            `;
        }
    }

    const btnGithub = document.querySelector('#btn-github');
    if (btnGithub) {
        btnGithub.addEventListener('click', () => {
            cargarReposGitHub('salet-gutierrez-jalafund');
        });
    }

    // ==========================================
    // 16. MENSAJE EN CONSOLA
    // ==========================================
    console.log('%c✅ Portafolio de Salet Gutierrez cargado', 'color: #a3e635; font-weight: bold; font-size: 14px;');
    console.log('🚀 Funciones activas: scroll suave, scroll spy, menú móvil, typewriter, animaciones, 3D avatar, barra de progreso, back-to-top, filtros funcionales, closures, fetch async.');
});