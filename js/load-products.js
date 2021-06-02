const products = [
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
    {
        image: 'img/product.jpg',
        name: 'Name',
        price: '$50.00',
        presentation: '400mg'
    },
]

function getProductHtml({image, name, price, presentation}) {
    return `
        <div class="product">
            <img src="${image}" alt="" class="product-image" width="240">
            <p class="product-name">${name}</p>
            <p class="price">${price} <span class="presentation">(${presentation})</span></p>
            <button class="terciary add-product">Agregar al carrito</button>
        </div>
    `
}

export function loadProducts() {
    const productsContainer = document.querySelector('.products-container .products')
    products.forEach((product) => {
        const productHtml = getProductHtml(product)
        productsContainer.innerHTML += productHtml
    })
}