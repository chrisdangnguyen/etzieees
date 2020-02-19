import { connect } from 'react-redux';
import HomeProducts from './home_products';
import { fetchAllProducts } from '../../actions/product_actions';

const mapSTP = (state) => ({
  products: Object.values(state.entities.products).slice(0,10)

});

const mapDTP = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts())
});

export default connect(mapSTP, mapDTP)(HomeProducts);