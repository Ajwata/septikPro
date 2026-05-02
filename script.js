// ============ SHARED HEADER / FOOTER LOGIC ============

// ---- Mobile menu ----
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
    nav.classList.add('active');
    navOverlay.classList.add('active');
    burger.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    nav.classList.remove('active');
    navOverlay.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.nav__item--dropdown.open').forEach(i => i.classList.remove('open'));
}

burger.addEventListener('click', () => {
    nav.classList.contains('active') ? closeMenu() : openMenu();
});
navOverlay.addEventListener('click', closeMenu);

document.querySelector('.nav__list')?.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
});

// ---- Catalog dropdown (header) ----
const dropdownToggles = document.querySelectorAll('.nav__dropdown-toggle');

dropdownToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = btn.closest('.nav__item--dropdown');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.nav__item--dropdown.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__item--dropdown')) {
        document.querySelectorAll('.nav__item--dropdown.open').forEach(i => i.classList.remove('open'));
    }
});

// ---- Populate dropdown with categories ----
const navDropdown = document.getElementById('navDropdown');
if (navDropdown && typeof CATEGORY_META !== 'undefined') {
    navDropdown.innerHTML = Object.entries(CATEGORY_META).map(([key, meta]) => `
        <li>
            <a href="category.html?cat=${key}">${meta.short || meta.name}</a>
        </li>
    `).join('');
}

// ---- Populate footer categories ----
const footerCategories = document.getElementById('footerCategories');
if (footerCategories && typeof CATEGORY_META !== 'undefined') {
    const entries = Object.entries(CATEGORY_META).slice(0, 6);
    footerCategories.innerHTML = entries.map(([key, meta]) =>
        `<li><a href="category.html?cat=${key}">${meta.short || meta.name}</a></li>`
    ).join('');
}

// ---- Header shadow on scroll ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
