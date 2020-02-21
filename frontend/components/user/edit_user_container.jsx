import React from 'react';
import { connect } from 'react-redux';
import UserEditForm from './edit_user';
import { updateUser } from '../../actions/user_actions'

const mapSTP = (state) => ({

});

const mapDTP = (dispatch) => ({

});

export default connect(mapSTP, mapDTP)(UserEditForm);
