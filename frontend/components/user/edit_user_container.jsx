import { connect } from 'react-redux';
import UserEditForm from './edit_user';
import { updateUser, fetchUser } from '../../actions/user_actions'

const mapSTP = (state) => ({
  user: state.entities.users[state.session.id]
});

const mapDTP = (dispatch) => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapSTP, mapDTP)(UserEditForm);
