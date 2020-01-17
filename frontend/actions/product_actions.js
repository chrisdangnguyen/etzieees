import * as APIUtil from '../util/product_api_util';

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

export const createProduct = product => dispatch => (
    APIUtil.createProduct(product)
        .then(product => (dispatch(receiveProduct(product))), 
        errors => (dispatch(receiveProductErrors(errors.responseJSON))
        ))
);


export const fetchProduct = productId => dispatch => (
    APIUtil.fetchProduct(productId) 
        .then(product => dispatch(receiveProduct(product)))
    //     errors => (dispatch(receiveProductErrors(errors.responseJSON)))
    // )
);

export const fetchAllProducts = () => dispatch => (
    APIUtil.fetchAllProducts()
        .then(products => (dispatch(receiveAllProducts(products))),
        errors => (dispatch(receiveProductErrors(errors.responseJSON)))
    )
);

export const updateProduct = product => dispatch => (
    APIUtil.updateProduct(product)
        .then(product => (dispatch(receiveProduct(product))),
            errors => (dispatch(receiveProductErrors(errors.responseJSON)))
        )
);

export const deleteProduct = productId => dispatch => (
    APIUtil.deleteProduct(productId) 
        .then(() => dispatch(removeProduct(productId)),
        errors => (dispatch(receiveProductErrors(errors.responseJSON)))
    )
);

export const fetchCategory = type => dispatch => (
    APIUtil.fetchCategory(type)
        .then(products => (dispatch(receiveAllProducts(products)))
    )
);
        