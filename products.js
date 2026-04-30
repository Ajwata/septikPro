// Product catalog data
// Image paths point to img/products/ — upload your photos there with matching filenames.
// If image is missing, a placeholder will be shown automatically.

const CATEGORY_META = {
    'septic-1': {
        name: 'Септик з жб кілець 1-камерний',
        short: 'Септик 1-камерний',
        image: 'img/categories/septic-1.jpg',
        desc: 'Прості та надійні однокамерні септики з залізобетонних кілець для дачі та невеликих будинків.'
    },
    'septic-2': {
        name: 'Септик з жб кілець 2-камерний',
        short: 'Септик 2-камерний',
        image: 'img/categories/septic-2.jpg',
        desc: 'Покращене очищення стоків. Оптимальне рішення для постійного проживання родини з 4-6 осіб.'
    },
    'septic-3': {
        name: 'Септик з жб кілець 3-камерний',
        short: 'Септик 3-камерний',
        image: 'img/categories/septic-3.jpg',
        desc: 'Максимальне очищення для великих родин. Три ступені фільтрації стічних вод.'
    },
    'surface-water': {
        name: 'Септики для поверхневих грунтових вод',
        short: 'Поверхневі ґрунтові води',
        image: 'img/categories/surface-water.jpg',
        desc: 'Спеціальні герметичні рішення для ділянок з високим рівнем ґрунтових вод.'
    },
    'modernization': {
        name: 'Модернізація септиків',
        short: 'Модернізація',
        image: 'img/categories/modernization.jpg',
        desc: 'Реконструкція, чищення та покращення існуючих систем каналізації.'
    },
    'drilling': {
        name: 'Буріння свердловин',
        short: 'Буріння свердловин',
        image: 'img/categories/drilling.jpg',
        desc: 'Буріння свердловин на воду під ключ — від розвідки до облаштування.'
    },
    'caissons': {
        name: 'Кесони для свердловин',
        short: 'Кесони',
        image: 'img/categories/caissons.jpg',
        desc: 'Залізобетонні та металеві кесони для захисту і утеплення свердловин.'
    },
    'connection': {
        name: 'Під\'єднання до будинка',
        short: 'Під\'єднання',
        image: 'img/categories/connection.jpg',
        desc: 'Прокладання каналізації та водопроводу від магістралі до будинку.'
    },
    'wells': {
        name: 'Криниці, копка та модернізація',
        short: 'Криниці',
        image: 'img/categories/wells.jpg',
        desc: 'Копка нових криниць з ж/б кілець, чищення та модернізація існуючих.'
    },
    'cellars': {
        name: 'Погріб, льох, бомбосховище',
        short: 'Льох / бомбосховище',
        image: 'img/categories/cellars.jpg',
        desc: 'Підземні льохи, погреби та укриття подвійного призначення.'
    },
    'sanitary': {
        name: 'Вуличні санітарні рішення',
        short: 'Вуличні рішення',
        image: 'img/categories/sanitary.jpg',
        desc: 'Вуличні туалети, літні душові та інші санітарні рішення для дачі.'
    }
};

// Backward-compatible alias used by older code
const CATEGORY_NAMES = Object.fromEntries(
    Object.entries(CATEGORY_META).map(([k, v]) => [k, v.name])
);

const PRODUCTS = [
    // ===== Septic 1-chamber =====
    {
        id: 'septic-1-17',
        category: 'septic-1',
        title: 'Септик 1-камерний 1.7м³',
        desc: 'Для дачі та невеликих стоків. До 2 осіб.',
        price: 35000,
        image: 'img/products/septic-1-17.jpg',
        badge: 'Бюджет',
        features: ['Об\'єм: 1.7 м³', 'Кільця: 1.5 м', 'До 2 осіб', 'Сезонне використання']
    },
    {
        id: 'septic-1-32',
        category: 'septic-1',
        title: 'Септик 1-камерний 3.2м³',
        desc: 'Для будинку до 4 осіб з сезонним проживанням.',
        price: 45000,
        image: 'img/products/septic-1-32.jpg',
        features: ['Об\'єм: 3.2 м³', 'Кільця: 1.5 м', 'До 4 осіб', 'Сезонне проживання']
    },
    {
        id: 'septic-1-48',
        category: 'septic-1',
        title: 'Септик 1-камерний 4.8м³',
        desc: 'Оптимальне рішення для родини з 4 осіб + лазня.',
        price: 53000,
        image: 'img/products/septic-1-48.jpg',
        badge: 'Хіт',
        features: ['Об\'єм: 4.8 м³', 'Кільця: 1.5 м', '4 особи', 'Підходить для лазні']
    },
    {
        id: 'septic-1-65',
        category: 'septic-1',
        title: 'Септик 1-камерний 6.5м³',
        desc: 'Для родини 4-5 осіб або комерційного використання.',
        price: 62000,
        image: 'img/products/septic-1-65.jpg',
        features: ['Об\'єм: 6.5 м³', 'Кільця: 1.5 м', '4-5 осіб', 'Комерційне використання']
    },
    {
        id: 'septic-1-28',
        category: 'septic-1',
        title: 'Септик 1-камерний 2.8м³ (2м кільця)',
        desc: 'Компактний варіант на великих кільцях.',
        price: 42500,
        image: 'img/products/septic-1-28.jpg',
        features: ['Об\'єм: 2.8 м³', 'Кільця: 2 м', '2 особи', 'Дача / вихідні']
    },
    {
        id: 'septic-1-85',
        category: 'septic-1',
        title: 'Септик 1-камерний 8.5м³ (2м кільця)',
        desc: 'Великий об\'єм для родини 4-5 осіб з лазнею.',
        price: 65000,
        image: 'img/products/septic-1-85.jpg',
        features: ['Об\'єм: 8.5 м³', 'Кільця: 2 м', '4-5 осіб', 'З лазнею']
    },

    // ===== Septic 2-chamber =====
    {
        id: 'septic-2-63',
        category: 'septic-2',
        title: 'Септик 2-камерний 6.3м³',
        desc: 'Для родини з 4 осіб. Покращене очищення стоків.',
        price: 76000,
        image: 'img/products/septic-2-63.jpg',
        features: ['Об\'єм: 6.3 м³', 'Кільця: 1.5 м', '4 особи', '2 камери очищення']
    },
    {
        id: 'septic-2-95',
        category: 'septic-2',
        title: 'Септик 2-камерний 9.5м³',
        desc: 'Найпопулярніша модель. Один об\'єм на викачку.',
        price: 98000,
        image: 'img/products/septic-2-95.jpg',
        badge: 'Топ продажів',
        features: ['Об\'єм: 9.5 м³', 'Кільця: 1.5 м', '4 особи', 'Один об\'єм викачки']
    },
    {
        id: 'septic-2-11',
        category: 'septic-2',
        title: 'Септик 2-камерний 11м³ (2м кільця)',
        desc: 'Для родини 4-6 осіб. Підходить для пісковиків.',
        price: 92000,
        image: 'img/products/septic-2-11.jpg',
        features: ['Об\'єм: 11 м³', 'Кільця: 2 м', '4-6 осіб', 'Пісковики, суглинки']
    },
    {
        id: 'septic-2-165',
        category: 'septic-2',
        title: 'Септик 2-камерний 16.5м³',
        desc: 'Великий запас об\'єму для родини з 6 осіб.',
        price: 110000,
        image: 'img/products/septic-2-165.jpg',
        features: ['Об\'єм: 16.5 м³', 'Кільця: 2 м', '6 осіб', 'Великий запас']
    },

    // ===== Septic 3-chamber =====
    {
        id: 'septic-3-95',
        category: 'septic-3',
        title: 'Септик 3-камерний 9.5м³',
        desc: 'Максимальне очищення для родини 6-10 осіб.',
        price: 118000,
        image: 'img/products/septic-3-95.jpg',
        features: ['Об\'єм: 9.5 м³', 'Кільця: 1.5 м', '6-10 осіб', '3 камери очищення']
    },
    {
        id: 'septic-3-142',
        category: 'septic-3',
        title: 'Септик 3-камерний 14.2м³',
        desc: 'Покращене очищення для 4-6 осіб.',
        price: 145000,
        image: 'img/products/septic-3-142.jpg',
        features: ['Об\'єм: 14.2 м³', 'Кільця: 1.5 м', '4-6 осіб', 'Глибоке очищення']
    },
    {
        id: 'septic-3-165',
        category: 'septic-3',
        title: 'Септик 3-камерний 16.5м³ (2м кільця)',
        desc: 'Сумісний з торфяними ґрунтами.',
        price: 142000,
        image: 'img/products/septic-3-165.jpg',
        features: ['Об\'єм: 16.5 м³', 'Кільця: 2 м', '4 особи', 'Для торфяних ґрунтів']
    },
    {
        id: 'septic-3-242',
        category: 'septic-3',
        title: 'Септик 3-камерний 24.2м³',
        desc: 'Максимальна потужність для великих родин.',
        price: 170000,
        image: 'img/products/septic-3-242.jpg',
        badge: 'Преміум',
        features: ['Об\'єм: 24.2 м³', 'Кільця: 2 м', '6-10 осіб', 'Максимальне очищення']
    },

    // ===== Surface water =====
    {
        id: 'surface-1',
        category: 'surface-water',
        title: 'Септик для поверхневих вод',
        desc: 'Спеціальне рішення для ділянок з високим рівнем ґрунтових вод.',
        price: 95000,
        image: 'img/products/surface-1.jpg',
        features: ['Герметична конструкція', 'Для високих вод', 'Анкерне кріплення', 'Гідроізоляція']
    },
    {
        id: 'surface-2',
        category: 'surface-water',
        title: 'Герметичний накопичувач',
        desc: 'Накопичувальна ємність для складних ґрунтових умов.',
        price: 75000,
        image: 'img/products/surface-2.jpg',
        features: ['Повна герметичність', 'Антикорозійне покриття', 'Легка викачка', 'Довговічність']
    },

    // ===== Modernization =====
    {
        id: 'mod-1',
        category: 'modernization',
        title: 'Модернізація старого септика',
        desc: 'Реконструкція та покращення існуючої системи каналізації.',
        price: 25000,
        image: 'img/products/mod-1.jpg',
        features: ['Виїзд інженера', 'Аналіз стану', 'Заміна елементів', 'Гарантія на роботи']
    },
    {
        id: 'mod-2',
        category: 'modernization',
        title: 'Установка біофільтра',
        desc: 'Додавання біологічного фільтра для покращення очищення.',
        price: 35000,
        image: 'img/products/mod-2.jpg',
        features: ['Біологічна очистка', 'Зменшення запахів', 'Екологічно чисто', 'Збільшення ресурсу']
    },

    // ===== Drilling =====
    {
        id: 'drill-1',
        category: 'drilling',
        title: 'Буріння свердловини на воду',
        desc: 'Буріння свердловини під ключ з обсадкою та облаштуванням.',
        price: 1500,
        image: 'img/products/drill-1.jpg',
        priceFrom: true,
        priceUnit: 'грн/м.п.',
        features: ['Глибина: до 100 м', 'Обсадна труба ПВХ', 'Гарантія дебіту', 'Паспорт свердловини']
    },
    {
        id: 'drill-2',
        category: 'drilling',
        title: 'Буріння глибокої свердловини',
        desc: 'Артезіанські свердловини для якісної питної води.',
        price: 2200,
        image: 'img/products/drill-2.jpg',
        priceFrom: true,
        priceUnit: 'грн/м.п.',
        features: ['Глибина: 100+ м', 'Артезіанська вода', 'Сталева обсадна', 'Довговічна конструкція']
    },

    // ===== Caissons =====
    {
        id: 'caisson-1',
        category: 'caissons',
        title: 'Кесон з ж/б кілець',
        desc: 'Залізобетонний кесон для облаштування свердловини.',
        price: 25000,
        image: 'img/products/caisson-1.jpg',
        features: ['Матеріал: залізобетон', 'Глибина: 2 м', 'Утеплений люк', 'Гідроізоляція']
    },
    {
        id: 'caisson-2',
        category: 'caissons',
        title: 'Металевий кесон',
        desc: 'Зварний металевий кесон з антикорозійним покриттям.',
        price: 35000,
        image: 'img/products/caisson-2.jpg',
        features: ['Сталь 4 мм', 'Антикорозія', '100% герметичність', 'Гарантія 10 років']
    },

    // ===== Connection =====
    {
        id: 'conn-1',
        category: 'connection',
        title: 'Під\'єднання септика до будинку',
        desc: 'Прокладання каналізаційних труб від будинку до септика.',
        price: 15000,
        image: 'img/products/conn-1.jpg',
        priceFrom: true,
        features: ['Труба ПВХ Ø110', 'Ухил 2-3 см/м', 'Утеплення (опційно)', 'Ревізійні люки']
    },
    {
        id: 'conn-2',
        category: 'connection',
        title: 'Під\'єднання водопроводу',
        desc: 'Прокладання водопровідної магістралі від свердловини.',
        price: 12000,
        image: 'img/products/conn-2.jpg',
        priceFrom: true,
        features: ['Труба ПЕ 32 мм', 'Глибина 1.2 м', 'Гідроакумулятор', 'Автоматика']
    },

    // ===== Wells =====
    {
        id: 'well-1',
        category: 'wells',
        title: 'Копка криниці',
        desc: 'Копка криниць з ж/б кілець під ключ.',
        price: 4500,
        image: 'img/products/well-1.jpg',
        priceFrom: true,
        priceUnit: 'грн/кільце',
        features: ['Кільця ж/б', 'Глибина до 20 м', 'Глиняний замок', 'Кришка з люком']
    },
    {
        id: 'well-2',
        category: 'wells',
        title: 'Чищення та модернізація',
        desc: 'Очистка існуючої криниці, заміна кілець, поглиблення.',
        price: 8000,
        image: 'img/products/well-2.jpg',
        priceFrom: true,
        features: ['Видалення мулу', 'Дезінфекція', 'Заміна кілець', 'Поглиблення']
    },

    // ===== Cellars =====
    {
        id: 'cellar-1',
        category: 'cellars',
        title: 'Льох з ж/б кілець',
        desc: 'Класичний підземний льох для зберігання продуктів.',
        price: 55000,
        image: 'img/products/cellar-1.jpg',
        features: ['Кільця 1.5/2 м', 'Глибина: 2.5 м', 'Утеплений люк', 'Вентиляція']
    },
    {
        id: 'cellar-2',
        category: 'cellars',
        title: 'Підвал-погріб під ключ',
        desc: 'Капітальний підвал з гідроізоляцією та полицями.',
        price: 95000,
        image: 'img/products/cellar-2.jpg',
        features: ['Бетон М300', 'Гідроізоляція', 'Полиці та сходи', 'Електрика']
    },
    {
        id: 'cellar-3',
        category: 'cellars',
        title: 'Бомбосховище',
        desc: 'Підземне укриття подвійного призначення.',
        price: 250000,
        image: 'img/products/cellar-3.jpg',
        priceFrom: true,
        badge: 'Безпека',
        features: ['Армовані стіни', 'Бронедвері', 'Вентиляція з фільтром', 'Автономне живлення']
    },

    // ===== Sanitary =====
    {
        id: 'san-1',
        category: 'sanitary',
        title: 'Вуличний туалет',
        desc: 'Дерев\'яний/металевий вуличний туалет з вигрібною ямою.',
        price: 18000,
        image: 'img/products/san-1.jpg',
        features: ['Вигрібна яма 2 м³', 'Дерев\'яний домик', 'Вентиляція', 'Монтаж за день']
    },
    {
        id: 'san-2',
        category: 'sanitary',
        title: 'Літній душ',
        desc: 'Дачний літній душ з підігрівом води сонцем.',
        price: 22000,
        image: 'img/products/san-2.jpg',
        features: ['Бак 200 л', 'Дренаж', 'Каркас з металу', 'Обшивка дерев\'яна']
    }
];
