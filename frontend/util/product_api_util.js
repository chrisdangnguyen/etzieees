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

export const updateProduct = product => {
    return(
    $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: { product },
        contentType: false,
        processData: false
    })
)};

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
