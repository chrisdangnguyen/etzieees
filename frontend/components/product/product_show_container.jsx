import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';


const mapSTP = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId] 
    // let seller;
    // if (product) {
    //     seller = state.entities.users[product.user_id]
    // } 

    return ({
        product: product,
        userId: state.session.id,
    })
}


const mapDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mapSTP, mapDTP)(ProductShow);