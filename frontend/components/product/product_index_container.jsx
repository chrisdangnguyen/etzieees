import {connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchCategory, deleteProduct } from "../../actions/product_actions"

const mapSTP = (state, ownProps) => ({
    // products: Object.values(state.entities.products),
    products: Object.keys(state.entities.products).map(id => state.entities.products[id]),
    category: ownProps.match.params.category || "index",
    userid: state.session.id || {},
    currentUser: state.session.currentUser || {},
    // user: state.entities.users[ownProps.match.params.userId],

    // seller: seller
});

const mapDTP = (dispatch, ownProps) => {
    const validatePath = () => {
        if (ownProps.match.path === '/products') {
            return dispatch(fetchAllProducts());
        } 
        else if (ownProps.match.path === '/category/:category' ) {
            return dispatch(fetchCategory(ownProps.match.params.category))
        } else {
            // return new Promise(resolve => resolve()); 
            return dispatch({ type: "null_action" }); 
        }
    }
     return {action: () => validatePath(),
            deleteProduct: productId => dispatch(deleteProduct(productId)) }

    
};

export default connect(mapSTP, mapDTP)(ProductIndex);