// ============ HOME PAGE — Categories grid ============
const categoriesGrid = document.getElementById('categoriesGrid');

if (categoriesGrid) {
    const productCounts = PRODUCTS.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
    }, {});

    categoriesGrid.innerHTML = Object.entries(CATEGORY_META).map(([key, meta]) => {
        const count = productCounts[key] || 0;
        const countLabel = count === 1 ? '1 позиція' : (count >= 2 && count <= 4) ? `${count} позиції` : `${count} позицій`;
        return `
            <a href="category.html?cat=${key}" class="category-card">
                <div class="category-card__image">
                    <div class="product__placeholder">
                        <div class="product__placeholder-icon">🏗️</div>
                        <div class="product__placeholder-text">Фото незабаром</div>
                    </div>
                    <img src="${meta.image}" alt="${meta.name}" loading="lazy"
                         onload="this.previousElementSibling.style.display='none'"
                         onerror="this.style.display='none'">
                </div>
                <div class="category-card__body">
                    <h3 class="category-card__title">${meta.name}</h3>
                    <p class="category-card__desc">${meta.desc}</p>
                    <div class="category-card__meta">
                        <span class="category-card__count">${countLabel}</span>
                        <span class="category-card__link">Переглянути →</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}
