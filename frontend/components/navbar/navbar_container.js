import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { fetchCategory } from '../../actions/product_actions'

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCategory: type => dispatch(fetchCategory(type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
