// ============ CATEGORY PAGE LOGIC ============

const VIBER_LINK = 'viber://chat/?number=%2B380956605505';

const formatPrice = (n) => n.toLocaleString('uk-UA').replace(/,/g, ' ');

const params = new URLSearchParams(window.location.search);
const catKey = params.get('cat');
const meta = catKey && CATEGORY_META[catKey];

const pageTitle = document.getElementById('pageTitle');
const pageDesc = document.getElementById('pageDesc');
const bcCurrent = document.getElementById('bcCurrent');
const productsGrid = document.getElementById('productsGrid');
const productsCount = document.getElementById('productsCount');

// ---- If category not found, show fallback ----
if (!meta) {
    pageTitle.textContent = 'Категорія не знайдена';
    pageDesc.textContent = 'Оберіть категорію в меню зверху або поверніться до каталогу.';
    bcCurrent.textContent = 'Не знайдено';
    productsGrid.innerHTML = '<div class="no-products">Перейдіть на <a href="index.html#catalog" style="color:var(--primary);font-weight:600">головну сторінку</a> для перегляду каталогу.</div>';
    productsCount.textContent = '';
} else {
    // Set page meta
    document.title = `${meta.name} — SeptikPro`;
    pageTitle.textContent = meta.name;
    pageDesc.textContent = meta.desc;
    bcCurrent.textContent = meta.short || meta.name;

    // Render products
    const products = PRODUCTS.filter(p => p.category === catKey);
    const count = products.length;
    productsCount.textContent = count === 0
        ? 'Поки немає позицій'
        : `${count} ${count === 1 ? 'позиція' : (count >= 2 && count <= 4) ? 'позиції' : 'позицій'}`;

    if (count === 0) {
        productsGrid.innerHTML = '<div class="no-products">У цій категорії поки немає позицій. Зателефонуйте нам — підберемо рішення індивідуально.</div>';
    } else {
        productsGrid.innerHTML = products.map(productCardHTML).join('');
    }
}

// ---- Product card ----
function productCardHTML(p) {
    const categoryName = CATEGORY_META[p.category]?.name || '';
    const badge = p.badge ? `<div class="product__badge">${p.badge}</div>` : '';
    const unit = p.priceUnit || 'грн';
    const fromLabel = p.priceFrom ? `<span class="product__price-from">від</span>` : '';
    return `
        <article class="product" data-id="${p.id}">
            <div class="product__image">
                <div class="product__placeholder">
                    <div class="product__placeholder-icon">🏗️</div>
                    <div class="product__placeholder-text">Фото незабаром</div>
                </div>
                <img src="${p.image}" alt="${p.title}" loading="lazy"
                     onload="this.previousElementSibling.style.display='none'"
                     onerror="this.style.display='none'">
                ${badge}
            </div>
            <div class="product__body">
                <div class="product__category">${categoryName}</div>
                <h3 class="product__title">${p.title}</h3>
                <p class="product__desc">${p.desc}</p>
                <div class="product__footer">
                    <div>
                        ${fromLabel}
                        <div class="product__price">${formatPrice(p.price)} <span style="font-size:14px;font-weight:500;color:var(--gray-500)">${unit}</span></div>
                    </div>
                    <button class="product__btn" data-action="details" data-id="${p.id}">Детальніше</button>
                </div>
            </div>
        </article>
    `;
}

// ---- Modal ----
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openProductModal(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;

    const categoryName = CATEGORY_META[p.category]?.name || '';
    const unit = p.priceUnit || 'грн';
    const fromLabel = p.priceFrom ? '<span class="modal__price-from">від </span>' : '';
    const featuresHTML = p.features
        ? `<ul class="modal__features">${p.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>`
        : '';

    modalContent.innerHTML = `
        <div class="modal__image">
            <div class="product__placeholder">
                <div class="product__placeholder-icon">🏗️</div>
                <div class="product__placeholder-text">Фото незабаром</div>
            </div>
            <img src="${p.image}" alt="${p.title}"
                 onload="this.previousElementSibling.style.display='none'"
                 onerror="this.style.display='none'">
        </div>
        <div class="modal__body">
            <div class="modal__category">${categoryName}</div>
            <h2 class="modal__title">${p.title}</h2>
            <p class="modal__desc">${p.desc}</p>
            ${featuresHTML}
            <div class="modal__price">${fromLabel}${formatPrice(p.price)} <span style="font-size:18px;font-weight:500;color:var(--gray-500)">${unit}</span></div>
            <div class="modal__actions">
                <a href="${VIBER_LINK}" class="btn btn--primary btn--block">Замовити в Viber</a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

productsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="details"]');
    if (btn) {
        openProductModal(btn.dataset.id);
        return;
    }
    const card = e.target.closest('.product');
    if (card) openProductModal(card.dataset.id);
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
