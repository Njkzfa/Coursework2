// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        {
            id: 1,
            brand: "Mercedes-Benz",
            model: "S-Class 2023",
            price: "12 500 000 ₽",
            year: 2023,
            mileage: "5 000 км",
            engine: "3.0 л / 435 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Черный",
            image: "https://avatars.mds.yandex.net/get-verba/216201/2a0000017c37611a614352454282d71b9bb2/456x342",
            features: ["Панорамная крыша", "Массаж сидений", "Ночное видение", "Вентиляция сидений"]
        },
        {
            id: 2,
            brand: "BMW",
            model: "X7 M50i",
            price: "10 800 000 ₽",
            year: 2022,
            mileage: "15 000 км",
            engine: "4.4 л / 530 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Белый",
            image: "https://dvizhok.su/i/files2/auto/2020/07/BMW_X7_Dark-Shadow_Edition_2.jpg",
            features: ["Пакет M Sport", "Кожа Merino", "Хрустальные элементы", "Проекционный дисплей"]
        },
        {
            id: 3,
            brand: "Porsche",
            model: "911 Turbo S",
            price: "18 900 000 ₽",
            year: 2023,
            mileage: "2 500 км",
            engine: "3.8 л / 650 л.с.",
            transmission: "PDK",
            drive: "Полный",
            color: "Серый",
            image: "https://carloson.ru/uploads/images/cars-crm/216687/9bd07aee-4e6c-43f0-bfb0-05927044e645-740x507.jpg",
            features: ["Керамические тормоза", "Спорт хроно", "Массажные кресла", "Burmester"]
        },
        {
            id: 4,
            brand: "Audi",
            model: "RS Q8",
            price: "14 200 000 ₽",
            year: 2022,
            mileage: "12 000 км",
            engine: "4.0 л / 600 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Синий",
            image: "https://motor.ru/imgs/2022/04/29/06/5383047/144e677a58fd8743a19195d741c62d57aa4dd2a3.jpg",
            features: ["Пакет RS", "Динамическое управление", "23\" диски", "Аудиосистема Bang & Olufsen"]
        },
        {
            id: 5,
            brand: "Range Rover",
            model: "Autobiography",
            price: "16 500 000 ₽",
            year: 2023,
            mileage: "8 000 км",
            engine: "4.4 л / 530 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Черный",
            image: "https://vehicle-images.dealerinspire.com/dbf6-11001312/SALK19E91SA266814/7718fe1e9d9068411fecb456ede581f1.jpg",
            features: ["Полный люк", "Массажные кресла", "Холодильник", "Проекционный дисплей"]
        },
        {
            id: 6,
            brand: "Tesla",
            model: "Model X Plaid",
            price: "13 800 000 ₽",
            year: 2023,
            mileage: "3 000 км",
            engine: "Электрический / 1020 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Белый",
            image: "https://electromobili.ru/images/com_hikashop/upload/tesla-model-x-long-range-5.jpg",
            features: ["Falcon двери", "Autopilot", "Ludicrous Mode", "Премиум звук"]
        },
        {
            id: 7,
            brand: "Lexus",
            model: "LX 600",
            price: "11 900 000 ₽",
            year: 2023,
            mileage: "6 500 км",
            engine: "3.5 л / 409 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Серебристый",
            image: "https://lacddam.lexusasia.com/lexus-v3-blueprint/models/suv/lx/my22/lx-600-active/lx600-active-overview.jpg",
            features: ["4-зонный климат", "Марк Левенсон", "Панорамная камера", "Отделка салона"]
        },
        {
            id: 8,
            brand: "Lamborghini",
            model: "Urus",
            price: "28 500 000 ₽",
            year: 2022,
            mileage: "9 000 км",
            engine: "4.0 л / 650 л.с.",
            transmission: "Автомат",
            drive: "Полный",
            color: "Желтый",
            image: "https://gateauto.ru/upload/resize_cache/iblock/ab9/678_423_2/wytfxbusnuc12yn8gy059f39rwghbtq4.webp",
            features: ["Кожа Alcantara", "Пакет Ad Personam", "Карбоновые детали", "Спорт выхлоп"]
        },
        {
            id: 9,
            brand: "Ferrari",
            model: "Roma",
            price: "32 000 000 ₽",
            year: 2023,
            mileage: "1 500 км",
            engine: "3.9 л / 620 л.с.",
            transmission: "Робот",
            drive: "Задний",
            color: "Красный",
            image: "https://www.exoticcarhacks.com/wp-content/uploads/2025/01/Used-2024-Ferrari-Roma-w-FULL-Stealth-PPF-Custom-Specs-Carbon-Driver-Zone-1731015795.jpg",
            features: ["Карбоновая отделка", "Racing seats", "Manettino", "Премиум аудио"]
        }
    ];

    const carsGrid = document.getElementById('carsGrid');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    const resetBtn = document.getElementById('resetFilters');
    const carModal = document.getElementById('carModal');
    const closeCarModal = document.querySelector('.close-car-modal');
    const carModalBody = document.querySelector('.car-modal-body');
    const ctaBtn = document.getElementById('ctaBtn');

    function displayCars(filteredCars) {
        carsGrid.innerHTML = '';
        
        if (filteredCars.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        filteredCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.dataset.id = car.id;
            
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                </div>
                <div class="car-content">
                    <div class="car-brand">
                        <h3>${car.brand} ${car.model}</h3>
                        <div class="car-price">${car.price}</div>
                    </div>
                    
                    <div class="car-details">
                        <div class="car-detail">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Год: ${car.year}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Пробег: ${car.mileage}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-cog"></i>
                            <span>Двигатель: ${car.engine}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-car"></i>
                            <span>Привод: ${car.drive}</span>
                        </div>
                        <div class="car-detail">
                            <i class="fas fa-palette"></i>
                            <span>Цвет: ${car.color}</span>
                        </div>
                    </div>
                    
                    <div class="car-features">
                        ${car.features.slice(0, 3).map(feature => 
                            `<span class="feature-tag">${feature}</span>`
                        ).join('')}
                    </div>
                    
                    <button class="btn-view-details" data-id="${car.id}">
                        <i class="fas fa-eye"></i>
                        Подробнее
                    </button>
                </div>
            `;
            
            carsGrid.appendChild(carCard);
        });
        
        document.querySelectorAll('.btn-view-details').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const carId = parseInt(this.dataset.id);
                const car = cars.find(c => c.id === carId);
                if (car) openCarModal(car);
            });
        });
        
        document.querySelectorAll('.car-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.btn-view-details')) {
                    const carId = parseInt(this.dataset.id);
                    const car = cars.find(c => c.id === carId);
                    if (car) openCarModal(car);
                }
            });
        });
    }

    function filterCars() {
        const brand = brandFilter.value;
        const price = priceFilter.value;
        const year = yearFilter.value;
        
        let filtered = cars;
        
        if (brand !== 'all') {
            filtered = filtered.filter(car => 
                car.brand.toLowerCase().includes(brand.toLowerCase())
            );
        }
        
        if (price !== 'all') {
            const [min, max] = price.split('-').map(val => {
                if (val === '') return Infinity;
                return parseInt(val.replace(/\s/g, ''));
            });
            
            filtered = filtered.filter(car => {
                const carPrice = parseInt(car.price.replace(/\D/g, ''));
                if (max === Infinity) return carPrice >= min;
                return carPrice >= min && carPrice <= max;
            });
        }
        
        if (year !== 'all') {
            const [minYear, maxYear] = year.split('-').map(y => parseInt(y));
            filtered = filtered.filter(car => 
                car.year >= minYear && car.year <= maxYear
            );
        }
        
        displayCars(filtered);
    }

    function openCarModal(car) {
        carModalBody.innerHTML = `
            <div class="car-modal-details">
                <div class="car-modal-images">
                    <div class="main-image">
                        <img src="${car.image}" alt="${car.brand} ${car.model}">
                    </div>
                </div>
                
                <div class="car-modal-info">
                    <div class="car-modal-header">
                        <h2>${car.brand} ${car.model}</h2>
                        <div class="car-modal-price">${car.price}</div>
                    </div>
                    
                    <div class="car-modal-specs">
                        <h3>Характеристики</h3>
                        <div class="specs-grid">
                            <div class="spec-item">
                                <span class="spec-label">Год выпуска:</span>
                                <span class="spec-value">${car.year}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Пробег:</span>
                                <span class="spec-value">${car.mileage}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Двигатель:</span>
                                <span class="spec-value">${car.engine}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Коробка передач:</span>
                                <span class="spec-value">${car.transmission}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Привод:</span>
                                <span class="spec-value">${car.drive}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Цвет:</span>
                                <span class="spec-value">${car.color}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="car-modal-features">
                        <h3>Особенности</h3>
                        <div class="features-list">
                            ${car.features.map(feature => 
                                `<span class="feature-item">
                                    <i class="fas fa-check"></i>
                                    ${feature}
                                </span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    <div class="car-modal-actions">
                        <button class="btn-test-drive" id="testDriveBtn">
                            <i class="fas fa-calendar-alt"></i>
                            Записаться на тест-драйв
                        </button>
                        <button class="btn-buy-now" id="buyNowBtn" data-car="${car.brand} ${car.model}">
                            <i class="fas fa-shopping-cart"></i>
                            Купить сейчас
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        carModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        document.getElementById('testDriveBtn')?.addEventListener('click', () => {
            closeCarModalFunc();
            setTimeout(() => {
                document.getElementById('requestBtn')?.click();
                const messageField = document.getElementById('message');
                if (messageField) {
                    messageField.value = `Хочу записаться на тест-драйв ${car.brand} ${car.model}`;
                }
            }, 300);
        });
        
        document.getElementById('buyNowBtn')?.addEventListener('click', () => {
            closeCarModalFunc();
            setTimeout(() => {
                document.getElementById('requestBtn')?.click();
                const messageField = document.getElementById('message');
                if (messageField) {
                    messageField.value = `Хочу купить ${car.brand} ${car.model}`;
                }
            }, 300);
        });
    }

    function closeCarModalFunc() {
        carModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function initGallery() {
        loadingSpinner.style.display = 'block';
        
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            displayCars(cars);
        }, 1000);
        
        brandFilter.addEventListener('change', filterCars);
        priceFilter.addEventListener('change', filterCars);
        yearFilter.addEventListener('change', filterCars);
        
        resetBtn.addEventListener('click', () => {
            brandFilter.value = 'all';
            priceFilter.value = 'all';
            yearFilter.value = 'all';
            displayCars(cars);
        });
        
        closeCarModal.addEventListener('click', closeCarModalFunc);
        document.querySelector('.modal-overlay').addEventListener('click', closeCarModalFunc);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && carModal.classList.contains('active')) {
                closeCarModalFunc();
            }
        });
        
        ctaBtn.addEventListener('click', () => {
            document.getElementById('requestBtn')?.click();
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = "Помогите подобрать автомобиль по моим параметрам";
            }
        });
    }

    initGallery();
});