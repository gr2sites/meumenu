// Dados dos produtos
const products = [
    // Tradicionais
    {
        id: 1,
        name: 'Coxinha de Frango Clássica',
        description: 'Clássica coxinha recheada com frango desfiado e cremosa',
        category: 'tradicionais',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-tradicionais-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 8.50 },
            { name: 'Grande', price: 12.00 }
        ],
        addons: [
            { id: 1, name: 'Catupiry', price: 2.00 },
            { id: 2, name: 'Bacon', price: 2.50 }
        ]
    },
    {
        id: 2,
        name: 'Coxinha de Carne',
        description: 'Coxinha com carne moída temperada e suculenta',
        category: 'tradicionais',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-tradicionais-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 9.00 },
            { name: 'Grande', price: 13.00 }
        ],
        addons: [
            { id: 1, name: 'Catupiry', price: 2.00 },
            { id: 2, name: 'Bacon', price: 2.50 }
        ]
    },
    {
        id: 3,
        name: 'Coxinha de Queijo',
        description: 'Coxinha com queijo derretido e cremoso',
        category: 'tradicionais',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-tradicionais-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 7.50 },
            { name: 'Grande', price: 11.00 }
        ],
        addons: [
            { id: 1, name: 'Bacon', price: 2.50 }
        ]
    },
    // Gourmet
    {
        id: 4,
        name: 'Coxinha de Camarão',
        description: 'Camarão fresco com cream cheese e temperos especiais',
        category: 'gourmet',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-gourmet-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 14.00 },
            { name: 'Grande', price: 18.00 }
        ],
        addons: [
            { id: 1, name: 'Alho poró', price: 1.50 }
        ]
    },
    {
        id: 5,
        name: 'Coxinha de Carne com Trufa',
        description: 'Carne premium com azeite de trufa e cogumelos',
        category: 'gourmet',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-gourmet-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 15.50 },
            { name: 'Grande', price: 19.50 }
        ],
        addons: [
            { id: 1, name: 'Cogumelos extras', price: 2.00 }
        ]
    },
    {
        id: 6,
        name: 'Coxinha de Frango com Catupiry',
        description: 'Frango desfiado com catupiry derretido',
        category: 'gourmet',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-gourmet-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 11.50 },
            { name: 'Grande', price: 15.00 }
        ],
        addons: [
            { id: 1, name: 'Bacon', price: 2.50 }
        ]
    },
    // Doces
    {
        id: 7,
        name: 'Coxinha de Banana com Chocolate',
        description: 'Banana com chocolate ao leite e canela',
        category: 'doces',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-doces-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 6.50 },
            { name: 'Grande', price: 9.00 }
        ],
        addons: [
            { id: 1, name: 'Calda de chocolate', price: 1.50 }
        ]
    },
    {
        id: 8,
        name: 'Coxinha de Brigadeiro',
        description: 'Brigadeiro cremoso com cobertura de chocolate',
        category: 'doces',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-doces-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 6.50 },
            { name: 'Grande', price: 9.00 }
        ],
        addons: [
            { id: 1, name: 'Granulado', price: 1.00 }
        ]
    },
    {
        id: 9,
        name: 'Coxinha de Doce de Leite',
        description: 'Doce de leite cremoso com calda de caramelo',
        category: 'doces',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/coxinhas-doces-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequena', price: 6.50 },
            { name: 'Grande', price: 9.00 }
        ],
        addons: []
    },
    // Mini Coxinhas
    {
        id: 10,
        name: 'Mini Coxinha Tradicional',
        description: 'Pequenina e deliciosa - perfeita para petiscar',
        category: 'mini',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/mini-coxinhas-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Meia Dúzia', price: 5.00 },
            { name: 'Dúzia', price: 9.00 }
        ],
        addons: []
    },
    {
        id: 11,
        name: 'Mini Coxinha Gourmet',
        description: 'Versão mini com recheios especiais',
        category: 'mini',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/mini-coxinhas-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Meia Dúzia', price: 7.00 },
            { name: 'Dúzia', price: 12.00 }
        ],
        addons: []
    },
    // Bebidas
    {
        id: 12,
        name: 'Refrigerante Lata',
        description: 'Refrigerante gelado - escolha seu sabor',
        category: 'bebidas',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/bebidas-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Lata 350ml', price: 3.50 },
            { name: 'Garrafa 2L', price: 7.00 }
        ],
        addons: []
    },
    {
        id: 13,
        name: 'Suco Natural',
        description: 'Suco fresco feito na hora',
        category: 'bebidas',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663281925867/PU7LEe9n6tL2TwSc7gvEBY/bebidas-BdefF5TuD7Nzv5FyLKQu57.webp',
        sizes: [
            { name: 'Pequeno', price: 4.00 },
            { name: 'Grande', price: 6.00 }
        ],
        addons: []
    }
];

// Estado do app
let cart = [];
let currentCategory = 'todos';
let currentProduct = null;
let selectedSize = null;
let selectedAddons = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Setup de event listeners
function setupEventListeners() {
    document.getElementById('cartIcon').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        showPage('cartPage');
    });

    document.getElementById('searchInput').addEventListener('keyup', searchProducts);
}

// Mostrar página
function showPage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar página selecionada
    document.getElementById(pageId).classList.add('active');

    // Atualizar conteúdo se necessário
    if (pageId === 'cartPage') {
        renderCart();
    } else if (pageId === 'checkoutPage') {
        renderCheckoutSummary();
    }

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Filtrar categoria
function filterCategory(category) {
    currentCategory = category;
    
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Renderizar produtos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    let filteredProducts = products;

    // Filtrar por categoria
    if (currentCategory !== 'todos') {
        filteredProducts = products.filter(p => p.category === currentCategory);
    }

    // Filtrar por busca
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <h3>Nenhum produto encontrado</h3>
                    <p>Tente ajustar seus filtros ou busca</p>
                </div>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const minPrice = Math.min(...product.sizes.map(s => s.price));
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">R$ ${minPrice.toFixed(2)}</div>
                <div class="product-footer">
                    <button class="btn-add" onclick="openProductModal(${product.id})">Adicionar</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Buscar produtos
function searchProducts() {
    renderProducts();
}

// Abrir modal do produto
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    selectedSize = currentProduct.sizes[0];
    selectedAddons = [];

    // Atualizar modal
    document.getElementById('modalTitle').textContent = currentProduct.name;
    document.getElementById('modalDescription').textContent = currentProduct.description;
    document.getElementById('modalImage').src = currentProduct.image;

    // Renderizar tamanhos
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    currentProduct.sizes.forEach((size, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'size-btn' + (index === 0 ? ' active' : '');
        btn.textContent = `${size.name} - R$ ${size.price.toFixed(2)}`;
        btn.onclick = () => selectSize(size, btn);
        sizeOptions.appendChild(btn);
    });

    // Renderizar adicionais
    const addonsList = document.getElementById('addonsList');
    addonsList.innerHTML = '';
    currentProduct.addons.forEach(addon => {
        const div = document.createElement('div');
        div.className = 'addon-item';
        div.innerHTML = `
            <input type="checkbox" id="addon-${addon.id}" onchange="toggleAddon(${addon.id}, '${addon.name}', ${addon.price})">
            <label for="addon-${addon.id}">${addon.name} +R$ ${addon.price.toFixed(2)}</label>
        `;
        addonsList.appendChild(div);
    });

    // Resetar quantidade
    document.getElementById('quantity').value = 1;

    // Atualizar preço
    updateModalPrice();

    // Mostrar modal
    document.getElementById('productModal').classList.add('active');
}

// Fechar modal
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Selecionar tamanho
function selectSize(size, btn) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateModalPrice();
}

// Toggle adicional
function toggleAddon(addonId, name, price) {
    const index = selectedAddons.findIndex(a => a.id === addonId);
    if (index > -1) {
        selectedAddons.splice(index, 1);
    } else {
        selectedAddons.push({ id: addonId, name, price });
    }
    updateModalPrice();
}

// Aumentar quantidade
function increaseQuantity() {
    const input = document.getElementById('quantity');
    input.value = Math.min(parseInt(input.value) + 1, 99);
    updateModalPrice();
}

// Diminuir quantidade
function decreaseQuantity() {
    const input = document.getElementById('quantity');
    input.value = Math.max(parseInt(input.value) - 1, 1);
    updateModalPrice();
}

// Atualizar preço do modal
function updateModalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const basePrice = selectedSize.price;
    const addonsPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    const total = (basePrice + addonsPrice) * quantity;
    
    document.getElementById('modalPrice').textContent = `R$ ${total.toFixed(2)}`;
}

// Adicionar ao carrinho
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const basePrice = selectedSize.price;
    const addonsPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    const itemPrice = basePrice + addonsPrice;

    const cartItem = {
        id: Date.now(),
        productId: currentProduct.id,
        name: currentProduct.name,
        size: selectedSize.name,
        quantity: quantity,
        price: itemPrice,
        addons: [...selectedAddons],
        image: currentProduct.image
    };

    cart.push(cartItem);
    updateCartCount();
    closeModal();

    // Mostrar notificação
    showNotification(`${currentProduct.name} adicionado ao carrinho!`);
}

// Renderizar carrinho
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const summaryItems = document.getElementById('summaryItems');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <h3>Carrinho Vazio</h3>
                <p>Adicione algumas coxinhas deliciosas!</p>
                <button class="btn btn-primary" onclick="showPage('menuPage')">Ir para o Cardápio</button>
            </div>
        `;
        summaryItems.innerHTML = '';
        document.getElementById('totalPrice').textContent = 'R$ 0,00';
        return;
    }

    cartItems.innerHTML = '';
    summaryItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Item no carrinho
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">${item.size}</div>
                ${item.addons.length > 0 ? `<div class="cart-item-size">Adicionais: ${item.addons.map(a => a.name).join(', ')}</div>` : ''}
                <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-qty">
                    <button onclick="updateCartQuantity(${index}, -1)">−</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button onclick="updateCartQuantity(${index}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
        cartItems.appendChild(cartItemDiv);

        // Item no resumo
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.quantity}x ${item.name}</span>
            <span>R$ ${itemTotal.toFixed(2)}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });

    document.getElementById('totalPrice').textContent = `R$ ${total.toFixed(2)}`;
}

// Atualizar quantidade no carrinho
function updateCartQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    if (newQuantity > 0) {
        cart[index].quantity = newQuantity;
        renderCart();
    }
}

// Remover do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

// Atualizar contador do carrinho
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Renderizar resumo do checkout
function renderCheckoutSummary() {
    const checkoutSummary = document.getElementById('checkoutSummary');
    checkoutSummary.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'checkout-item';
        div.innerHTML = `
            <span>${item.quantity}x ${item.name} (${item.size})</span>
            <span>R$ ${itemTotal.toFixed(2)}</span>
        `;
        checkoutSummary.appendChild(div);
    });

    document.getElementById('checkoutTotal').textContent = `R$ ${total.toFixed(2)}`;
}

// Enviar pedido
function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;
    const deliveryMethod = document.getElementById('deliveryMethod').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!name || !phone) {
        alert('Por favor, preencha nome e telefone!');
        return;
    }

    // Montar mensagem para WhatsApp
    let message = `*Novo Pedido - Reino das Coxinhas*\n\n`;
    message += `*Itens do Pedido:*\n`;
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `• ${item.quantity}x ${item.name} (${item.size}) - R$ ${itemTotal.toFixed(2)}\n`;
        if (item.addons.length > 0) {
            message += `  Adicionais: ${item.addons.map(a => a.name).join(', ')}\n`;
        }
    });

    message += `\n*Total: R$ ${total.toFixed(2)}*\n\n`;
    message += `*Dados do Cliente:*\n`;
    message += `Nome: ${name}\n`;
    message += `Telefone: ${phone}\n`;
    if (address) message += `Endereço: ${address}\n`;
    if (city) message += `Cidade: ${city}\n`;
    if (zipcode) message += `CEP: ${zipcode}\n`;
    message += `Tipo de Entrega: ${deliveryMethod === 'entrega' ? 'Entrega' : 'Retirada'}\n`;
    message += `Forma de Pagamento: ${paymentMethod === 'dinheiro' ? 'Dinheiro' : paymentMethod === 'cartao' ? 'Cartão de Crédito' : 'PIX'}\n`;

    // Abrir WhatsApp
    const whatsappNumber = '5511999999999'; // Altere para o número correto
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Limpar carrinho e formulário
    cart = [];
    updateCartCount();
    document.getElementById('checkoutForm').reset();

    // Voltar para home
    showNotification('Pedido enviado com sucesso! 🎉');
    setTimeout(() => {
        showPage('homePage');
    }, 1500);
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideIn 0.3s ease-in;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
