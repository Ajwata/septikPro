// ============ SHARED HEADER / FOOTER LOGIC ============
// Runs on every page (index.html, category.html)

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

// Delegated: any link inside nav (incl. dynamically rendered dropdown) closes the menu
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

// Close dropdown when clicking outside (desktop)
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
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'var(--shadow-sm)';
    }
});
