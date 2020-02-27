import SearchBar from './search';
import { connect } from 'react-redux';
import { fetchSearchProducts } from '../../actions/product_actions';

const mapSTP = () => ({

})

const mapDTP = (dispatch) => {
  return {
    fetchSearchProducts: (query) => dispatch(fetchSearchProducts(query))
  }
}

export default connect(mapSTP, mapDTP)(SearchBar);