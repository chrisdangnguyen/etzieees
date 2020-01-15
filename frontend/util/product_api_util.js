export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: 'api/products',
        data: {product},

    })
);





























// export const fetchProduct = id => (
//     $.ajax({
//         method: 'GET',
//         url: `api/products/${id}`,
//     })
// );

// export const fetchAllProducts = userId => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/products',
//         data: { user_id: userId }
//     })
// );

// export const updateProduct = id => (
//     $.ajax({
//         method: 'PATCH',
//         url: `api/products/${id}`,
//         data: { product }
//     })
// );

// export const deleteProduct = id => (
//     $.ajax({
//         method: 'DELETE',
//         url: `api/products/${id}`
//     })
// );


// export const fetchProductCategory = type => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/categories',
//         data: { category: { type }}
//     })
// );
