import {connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchCategory } from "../../actions/product_actions"

const mapSTP = state => ({
    products: Object.keys(state.entities.products).map( id => state.entities.products[id])
});

const mapDTP = (dispatch, ownProps) => {
    const validatePath = () => {
        if (ownProps.match.path === '/products') {
            return dispatch(fetchAllProducts());
        } 
        else if ( ownProps.match.path === '/categories/:type' ) {
            return dispatch(fetchCategory(ownProps.match.params.type))
        } else {
            return  dispatch({type: "null_action"});
        }
    }
    return { action: () => validatePath() }

    // return ({
    //     action: () => dispatch(fetchAllProducts())
    // })
};

export default connect(mapSTP, mapDTP)(ProductIndex);