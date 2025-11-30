// --- Product Data Definition ---
// --- Product Data Definition ---
const productModels = {
    model1: {
        name: "قميص شتوي رجالي",
        price: 4800,
        description: "قميصنا الشتوي الرجالي يجمع بين الدفء والأناقة في تصميم واحد مع خامة مريحة وستايل يناسب كل الإطلالات. قميص أنيق لكل رجل يحب أن يكون بإطلالة مرتّبة حتى في أبرد الأيام. يتميز القميص بتفاصيل دقيقة تعكس جودة التصنيع، وأزرار متينة تضيف لمسة أناقة كلاسيكية، بالإضافة إلى تصميم عملي يضمن سهولة الحركة وراحة طوال اليوم. خيارك الأمثل في هذا الشتاء",
        colors: {
            'olive-green': {
                name: 'أخضر زيتوني',
                main: 'images/olive-green-1.webp',
                thumbnails: [
                    'images/olive-green-1.webp',
                    'images/olive-green-2.webp',
                    'images/olive-green-3.webp',
                    'images/olive-green-4.webp',
                    'images/olive-green-5.webp'

                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'brown': {
                name: 'بني',
                main: 'images/brown-1.webp',
                thumbnails: [
                    'images/brown-1.webp',
                    'images/brown-2.webp',
                    'images/brown-3.webp',
                    'images/brown-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'light-green': {
                name: 'أخضر فاتح',
                main: 'images/light-green-1.webp',
                thumbnails: [
                    'images/light-green-1.webp',
                    'images/light-green-2.webp',
                    'images/light-green-3.webp',
                    'images/light-green-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'gray': {
                name: 'رمادي',
                main: 'images/gray-1.webp',
                thumbnails: [
                    'images/gray-1.webp',
                    'images/gray-2.webp',
                    'images/gray-3.webp',
                    'images/gray-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            }
        }
    },
    model2: {
        name: "قميص شتوي كلاسيك",
        price: 4800,
        description: "قميص شتوي رجالي يعكس أناقة التفاصيل ورقيّ الاختيار. قميصنا يجمع بين الاناقة في اللباس والاتقان في التصميم والخياطة مع جودة قماش جيدة تناسبك في فصل الشتاء",
        colors: {
            'blue-petrol': {
                name: 'بلو بيترول',
                main: 'images/blue-petrol-1.webp',
                thumbnails: [
                    'images/blue-petrol-1.webp',
                    'images/blue-petrol-2.webp',
                    'images/blue-petrol-3.webp',
                    'images/blue-petrol-4.webp',
                    'images/blue-petrol-5.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'black': {
                name: 'أسود',
                main: 'images/black-1.webp',
                thumbnails: [
                    'images/black-1.webp',
                    'images/black-2.webp',
                    'images/black-3.webp',
                    'images/black-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },

            'gray2': {
                name: 'رمادي',
                main: 'images/gray2-1.webp',
                thumbnails: [
                    'images/gray2-1.webp',
                    'images/gray2-2.webp',
                    'images/gray2-3.webp',
                    'images/gray2-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'beige': {
                name: 'باج',
                main: 'images/beige-1.webp',
                thumbnails: [
                    'images/beige-1.webp',
                    'images/beige-2.webp',
                    'images/beige-3.webp',
                    'images/beige-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'dark-purple': {
                name: 'بنفسجي داكن',
                main: 'images/dark-purple-1.webp',
                thumbnails: [
                    'images/dark-purple-1.webp',
                    'images/dark-purple-2.webp',
                    'images/dark-purple-3.webp',
                    'images/dark-purple-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'dark-gray': {
                name: 'رصاصي داكن',
                main: 'images/dark-gray-1.webp',
                thumbnails: [
                    'images/dark-gray-1.webp',
                    'images/dark-gray-2.webp',
                    'images/dark-gray-3.webp',
                    'images/dark-gray-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            },
            'brown': {
                name: 'بني',
                main: 'images/brown-1.webp',
                thumbnails: [
                    'images/brown2-1.webp',
                    'images/brown2-2.webp',
                    'images/brown2-3.webp',
                    'images/brown2-4.webp'
                ],
                availableSizes: ['52', '54', '56', '58']
            }
        }
    }
};

const quickOrderBtn = document.querySelector('.quick-order-btn');

if (quickOrderBtn) {
    quickOrderBtn.addEventListener('click', () => {
        const quickOrderCard = document.getElementById('quick-order-card');
        if (quickOrderCard) {
            quickOrderCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            quickOrderCard.style.transition = 'all 0.5s ease';
            quickOrderCard.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.5)';
            
            setTimeout(() => {
                quickOrderCard.style.boxShadow = 'var(--box-shadow)';
            }, 1500);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    const colorContainer = document.querySelector('.colors');
    const sizeContainer = document.querySelector('.sizes');
    const quantityInput = document.querySelector('.quantity-input');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const cartCountElement = document.querySelector('.cart-count');
    const modelButtons = document.querySelectorAll('.model-btn');
    const productTitle = document.querySelector('.product-title');
    const productPrice = document.querySelector('.product-price');
    const productDescription = document.querySelector('.product-description p');

// --- State Variables ---
let currentModel = 'model1';
let selectedColor = 'olive-green'; // غير من 'black' إلى 'olive-green'
let selectedSize = '52';
let cart = JSON.parse(localStorage.getItem('qudwahCart')) || [];
    // --- Helper Functions ---

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const updateProductInfo = () => {
        const modelData = productModels[currentModel];
        if (productTitle) productTitle.textContent = modelData.name;
        if (productPrice) productPrice.textContent = `${modelData.price.toLocaleString('ar-DZ')} د.ج`;
        if (productDescription) productDescription.textContent = modelData.description;
    };

    const createColorButtons = () => {
        colorContainer.innerHTML = '';
        const modelData = productModels[currentModel];
        
        Object.entries(modelData.colors).forEach(([colorKey, colorData]) => {
            const button = document.createElement('button');
            button.className = `color-btn ${colorKey === selectedColor ? 'active' : ''}`;
            button.dataset.color = colorKey;
            button.textContent = colorData.name;
            
            // إضافة الأنماط الخاصة بالألوان
            if (colorKey === 'blue' || colorKey === 'green' || colorKey === 'yellow') {
                button.style.background = `linear-gradient(135deg, ${getColorGradient(colorKey)})`;
                button.style.color = colorKey === 'yellow' ? 'var(--text-color)' : 'var(--white)';
                button.style.borderColor = getColorBorder(colorKey);
            }
            
            button.addEventListener('click', () => {
                selectedColor = colorKey;
                updateProductDisplay();
                scrollToTop();
            });
            
            colorContainer.appendChild(button);
        });
    };

    const getColorGradient = (color) => {
        const gradients = {
            'blue': '#1e3c72, #2a5298',
            'green': '#2e8b57, #3cb371',
            'yellow': '#ffd700, #ffec8b'
        };
        return gradients[color] || '#000000, #333333';
    };

    const getColorBorder = (color) => {
        const borders = {
            'blue': '#1e3c72',
            'green': '#2e8b57',
            'yellow': '#ffd700'
        };
        return borders[color] || '#000000';
    };

    const createSizeButtons = () => {
        sizeContainer.innerHTML = '';
        const modelData = productModels[currentModel];
        const colorData = modelData.colors[selectedColor];
        
        colorData.availableSizes.forEach(size => {
            const button = document.createElement('button');
            button.className = `size-btn ${size === selectedSize ? 'active' : ''}`;
            button.dataset.size = size;
            button.textContent = size;
            
            button.addEventListener('click', () => {
                if (!button.classList.contains('disabled')) {
                    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    selectedSize = size;
                }
            });
            
            sizeContainer.appendChild(button);
        });
    };

    const updateThumbnails = () => {
        thumbnailContainer.innerHTML = '';
        const modelData = productModels[currentModel];
        const colorData = modelData.colors[selectedColor];
        
        colorData.thumbnails.forEach((thumbSrc, index) => {
            const thumb = document.createElement('img');
            thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.src = thumbSrc;
            thumb.alt = `Thumbnail ${index + 1}`;
            
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainProductImage.src = thumbSrc;
            });
            
            thumbnailContainer.appendChild(thumb);
        });
        
        // تحديث الصورة الرئيسية
        if (colorData.thumbnails.length > 0) {
            mainProductImage.src = colorData.thumbnails[0];
        }
    };

    const updateProductDisplay = () => {
        createColorButtons();
        createSizeButtons();
        updateThumbnails();
    };

    const switchModel = (model) => {
        currentModel = model;
        const modelData = productModels[model];
        selectedColor = Object.keys(modelData.colors)[0];
        selectedSize = modelData.colors[selectedColor].availableSizes[0];
        
        updateProductInfo();
        updateProductDisplay();
        
        // تحديث الأزرار النشطة
        modelButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.model === model) btn.classList.add('active');
        });
        
        // تتبع مشاهدة المنتج
trackViewContent({
    id: `${currentModel}-${selectedColor}-${selectedSize}`, 
    model: currentModel,
    color: selectedColor,
    size: selectedSize,
    name: modelData.name,
    price: modelData.price
});
    };

    const updateGlobalCartCount = () => {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) cartCountElement.textContent = total;
    };

    const saveCartToLocalStorage = () => {
        localStorage.setItem('qudwahCart', JSON.stringify(cart));
    };

    // --- TikTok Tracking Functions ---
function trackViewContent(product) {
    if (typeof trackTikTokViewContent !== 'undefined') {
        trackTikTokViewContent(product);
    }
}

function trackAddToCart(product) {
    if (typeof trackTikTokAddToCart !== 'undefined') {
        trackTikTokAddToCart(product);
    }
}

    // --- Event Listeners ---

    // Model switching
    modelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const model = button.dataset.model;
            switchModel(model);
        });
    });

    // Quantity controls
    minusBtn.addEventListener('click', () => {
        const val = parseInt(quantityInput.value);
        if (val > 1) quantityInput.value = val - 1;
    });

    plusBtn.addEventListener('click', () => {
        const val = parseInt(quantityInput.value);
        quantityInput.value = val + 1;
    });

    quantityInput.addEventListener('change', () => {
        const val = parseInt(quantityInput.value);
        if (isNaN(val) || val < 1) quantityInput.value = 1;
    });

    // Add to cart
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const modelData = productModels[currentModel];
        const productId = `${currentModel}-${selectedColor}-${selectedSize}`;
        const colorName = modelData.colors[selectedColor].name;

        const existingIndex = cart.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: modelData.name,
                model: currentModel,
                color: colorName,
                size: selectedSize,
                price: modelData.price,
                quantity,
                image: modelData.colors[selectedColor].main
            });
        }

        saveCartToLocalStorage();
        updateGlobalCartCount();

        // تتبع إضافة للسلة
        trackAddToCart({
            id: productId,
            name: modelData.name,
            price: modelData.price,
            quantity: quantity
        });

        alert(`تم إضافة ${quantity} قطعة من المنتج إلى السلة!`);
    });

    // --- Initialization ---
    updateProductInfo();
    updateProductDisplay();
    updateGlobalCartCount();

    // تتبع مشاهدة المنتج الأولي
trackViewContent({
    id: `${currentModel}-${selectedColor}-${selectedSize}`,
    model: currentModel,
    color: selectedColor,
    size: selectedSize,
    name: productModels[currentModel].name,
    price: productModels[currentModel].price
});
});











// جعل currentModel متاحاً عالمياً لملف quick-order.js
window.currentModel = currentModel;

// تحديث window.currentModel عند تغيير الموديل
const originalSwitchModel = switchModel;
switchModel = (model) => {
    originalSwitchModel(model);
    window.currentModel = currentModel;
    
    // إرسال حدث لتحديث quick-order.js
    const modelChangedEvent = new CustomEvent('modelChanged', {
        detail: { model: currentModel }
    });
    document.dispatchEvent(modelChangedEvent);

};

