import {connect} from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct, deleteProduct } from '../../actions/product_actions';



const mapSTP = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId] ||
        { title: "", description: "", price: "", category: "", quantity: "", 
            user_id: state.session.id, photoFile: "", photoUrl: ""
        }

    return {
        product: product,
        userId: state.session.id,
        errors: state.errors.products,
        formType: 'Edit product'
}
}

const mapDTP = dispatch => ({
    processForm: product => dispatch(updateProduct(product)),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})
 
export default connect(mapSTP, mapDTP)(ProductForm);