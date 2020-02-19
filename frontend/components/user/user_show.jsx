import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserProducts from './user_products_container';

class UserShow extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {

    const user  = this.props.user;
    if (!user) {
      return null;
    }


    return (
      <div className="profile">
        <div className="top-profile">
          <div className="user-photo">

          </div>
          <div className="user-info">
            <h1>{user.name}</h1>
            <Link to={`/users/${user.id}/edit`}>edit</Link>
            <span>{user.city}</span>
            <p>{user.about}</p>
          </div>

        </div>

        <div className="text-listing"> 
          Lists
        </div>

        <div className="user-listing">
          <UserProducts userId={user.id} />
        </div>

      </div>
      // <div>Hello User Show</div>
    ) 
  }
}

export default withRouter(UserShow);