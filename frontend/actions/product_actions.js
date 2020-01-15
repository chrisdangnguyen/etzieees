import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS '

// receive errors

const receiveAllProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    productId
});

const receiveProductErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const createProduct = product => dispatch => {
    ProductAPIUtil.createProduct(product)
        .then(product => (dispatch(receiveProduct(product))), 
        errors => (dispatch(receiveProductErrors(errors.responseJSON))
        ))
};




















// export const fetchProduct = id => dispatch => (
//     ProductAPIUtil.fetchProduct(id) 
//         .then(product => (dispatch(receiveProduct(product))),
//         errors => (dispatch(receiveProductErrors(errors.responseJSON)))
//     )
// )

// export const fetchAllProducts = userId => dispatch => (
//     ProductAPIUtil.fetchAllProducts(userId)
//         .then(products => (dispatch(receiveAllProducts(products))),
//         errors => (dispatch(receiveProductErrors(errors.responseJSON)))
//     )
// )

// export const updateProduct = id => dispatch => (
//     ProductAPIUtil.updateProduct(id)
//         .then(product => (dispatch(receiveProduct(product))),
//             errors => (dispatch(receiveProductErrors(errors.responseJSON)))
//         )
// )

// export const deleteProduct = id => dispatch => (
//     ProductAPIUtil.deleteProduct(id) 
//         .then(() => dispatch(removeProduct(id)),
//         errors => (dispatch(receiveProductErrors(errors.responseJSON)))
//     )
// )

// export const fetchProductCategory = type => dispatch => (
//     ProductAPIUtil.fetchProductCategory(type)
//         .then(products => (dispatch(receiveAllProducts(products)))
//     )
// )
