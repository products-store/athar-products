// tiktok-events.js

// تتبع مشاهدة صفحة المنتج
function trackTikTokViewContent(product) {
    if (typeof ttq !== 'undefined') {
        ttq.track('ViewContent', {
            content_id: product.id, 
            content_name: product.name,
            content_type: 'product',
            currency: 'DZD',
            value: product.price
        });
    }
}

// تتبع إضافة إلى السلة
function trackTikTokAddToCart(product) {
    if (typeof ttq !== 'undefined') {
        ttq.track('AddToCart', {
            content_id: product.id,
            content_name: product.name,
            content_type: 'product',
            quantity: product.quantity,
            currency: 'DZD',
            value: product.price * product.quantity
        });
    }
}

// تتبع بدء عملية الشراء
function trackTikTokInitiateCheckout(cart) {
    if (typeof ttq !== 'undefined') {
        const contents = cart.map(item => ({
            content_id: item.id,
            content_name: item.name,
            content_type: 'product',
            quantity: item.quantity,
            price: item.price
        }));
        
        const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        ttq.track('InitiateCheckout', {
            contents: contents,
            currency: 'DZD',
            value: totalValue,
            num_items: cart.length
        });
    }
}