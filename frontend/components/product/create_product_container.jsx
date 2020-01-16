import { connect } from 'react-redux';
import ProductForm from './product_form';
import { createProduct } from '../../actions/product_actions';

const mapSTP = (state) => ({
    product: { title: "", description: "", price: "", category: "", quantity: ""},
    formType: "create product",
    errors: state.errors.products
});

const mapDTP = dispatch => ({
    processForm: product => dispatch(createProduct(product))
});


export default connect(mapSTP, mapDTP)(ProductForm);
