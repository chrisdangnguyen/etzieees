import React from 'react';
import { withRouter } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>this form is working</div>
    )
  }

}

export default withRouter(UserEditForm);