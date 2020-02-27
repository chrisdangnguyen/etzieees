import { connect } from 'react-redux';
import UserProducts from './user_products';
import { fetchUserProducts } from '../../actions/product_actions';

const mapSTP = (state, ownProps) => ({
  userId: ownProps.userId,
  products: Object.values(state.entities.products),
  userid: state.session.id,
  
});


const mapDTP = dispatch => ({
  fetchUserProducts: userId => dispatch(fetchUserProducts(userId))
});

export default connect(mapSTP, mapDTP)(UserProducts);