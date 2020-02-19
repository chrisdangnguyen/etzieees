import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const mapSTP = (state, ownProps) => {
  return { 
    user: state.entities.users[ownProps.match.params.userId],
    errors: state.session.user,
    currentUser: state.session.id || {} 
  }
};

const mapDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapSTP, mapDTP)(UserShow);

