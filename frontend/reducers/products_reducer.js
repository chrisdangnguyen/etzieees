import { 
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT
} from '../actions/product_actions';


const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            // return Object.assign({}, action.products)
            return action.products;
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product;
            return newState;
        case REMOVE_PRODUCT:
            delete newState[action.productId];
            return newState;
        default:
            return state;
    }
}

export default productsReducer;