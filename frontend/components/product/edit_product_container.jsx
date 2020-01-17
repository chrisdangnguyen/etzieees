import {connect} from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct, deleteProduct } from '../../actions/product_actions';



const mapSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    userId: state.session.id,
    errors: state.session.products,
    formType: 'Edit product'
})

const mapDTP = dispatch => ({
    processForm: product => dispatch(updateProduct(product)),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapSTP, mapDTP)(ProductForm);