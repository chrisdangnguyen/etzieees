export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: '/api/products',
        data:  product,
        contentType: false,
        processData: false
    })
);

export const fetchProduct = productId => (
    $.ajax({
        method: 'GET',
        url: `api/products/${productId}`
    })
);

export const fetchAllProducts = userId => (
    $.ajax({
        method: 'GET', 
        url: 'api/products',
        data: { user_id: userId }
    })
);

export const updateProduct = (product) => (
    $.ajax({
        method: "PATCH",
        url: `api/products/${product.get('product[id]')}`,
        data: product,
        contentType: false,
        processData: false
    })
)


export const deleteProduct = productId => (
    $.ajax({
        method: 'DELETE',
        url: `api/products/${productId}`
    })
);


export const fetchCategory = type => (
    $.ajax({
        method: 'GET',
        url: "api/products/category",
        data: { category: { type }}
    })
);

export const fetchSearchProducts = query => (
    $.ajax({
        method: 'GET',
        url: 'api/products/search',
        data: {query}
    })
)
