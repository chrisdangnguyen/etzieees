import {connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchCategory } from "../../actions/product_actions"

const mapSTP = state => ({
    products: Object.values(state.entities.products)
});

const mapDTP = (dispatch, ownProps) => {
    const validatePath = () => {
        if (ownProps.match.path === '/products') {
            return dispatch(fetchAllProducts());
        } 
        else if ( ownProps.match.path === '/categories/:type' ) {
            return dispatch(fetchCategory(ownProps.match.params.type))
        } else {
            return  new Promise(resolve => resolve());
        }
    }
     return {action: () => validatePath() }

    
        // action: () => dispatch(fetchAllProducts())
    
};

export default connect(mapSTP, mapDTP)(ProductIndex);