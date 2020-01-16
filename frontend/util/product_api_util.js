export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: '/api/products',
        data:  product,
        contentType: false,
        processData: false
    })
);

export const fetchProduct = id => (
    $.ajax({
        method: 'GET',
        url: `api/products/${id}`,
    })
);

export const fetchAllProducts = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/products',
        data: { user_id: userId }
    })
);

export const updateProduct = product => (
    $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: { product }
    })
);

export const deleteProduct = productId => (
    $.ajax({
        method: 'DELETE',
        url: `api/products/${productId}`
    })
);


export const fetchCategory = type => (
    $.ajax({
        method: 'GET',
        url: 'api/categories',
        data: { category: { type }}
    })
);
