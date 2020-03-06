import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchUser } from '../../actions/user_actions';
import { addCartItem, fetchAllCartItems, updateCartItem } from '../../actions/cart_item_actions';


const mapSTP = (state, ownProps) => {

    let product = state.entities.products[ownProps.match.params.productId] 
    let seller;
    if (product) {
        seller = state.entities.users[product.user_id]
    } 

    return {
        product: product,
        userId: state.session.id,
        seller: seller,
    }
}


const mapDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    fetchAllCartItems: ()  => dispatch(fetchAllCartItems()),
    updateCartItem: item => dispatch(updateCartItem(item))
})

export default connect(mapSTP, mapDTP)(ProductShow);