import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../util/product_api_util';


const mapSTP = (state, ownProps) => ({
    product: state.products[ownProps.match.params.productId],
    userId: state.session.id,
    seller: state.entities.users[product.user_id]
})

const mapDTP = dispatch => ({
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mapSTP, mapDTP)(ProductShow)