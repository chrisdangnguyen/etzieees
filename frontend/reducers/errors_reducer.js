import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import productErrorsReducer from './product_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import cartItemErrorsReducer from './cart_item_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    products: productErrorsReducer,
    user: userErrorsReducer,
    cartItems: cartItemErrorsReducer
});