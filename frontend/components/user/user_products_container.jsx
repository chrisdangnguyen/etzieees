import { connect } from 'react-redux';
import UserProducts from './user_products';
import { fetchUserProducts, deleteProduct } from '../../actions/product_actions';

const mapSTP = (state, ownProps) => ({
  userId: ownProps.userId,
  products: Object.values(state.entities.products),
  userid: state.session.id,
  
});


const mapDTP = dispatch => ({
  fetchUserProducts: userId => dispatch(fetchUserProducts(userId)),
  deleteProduct: productId => dispatch(deleteProduct(productId))
});

export default connect(mapSTP, mapDTP)(UserProducts);