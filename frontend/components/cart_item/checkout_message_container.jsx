import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CheckoutMessage from './checkout_message';

const mapSTP = () => {

};

const mapDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDTP)(CheckoutMessage);