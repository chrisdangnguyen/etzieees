import { 
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT
} from '../actions/product_actions';


const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return Object.assign({}, action.products)
            // return action.products;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
            // return Object.assign({}, action.products);
        case REMOVE_PRODUCT:
            delete nextState[action.productId];
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;