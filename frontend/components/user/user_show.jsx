import React, {useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserProducts from './user_products_container';

const UserShow = props => {
  useEffect(() => {
    props.fetchUser(props.match.params.userId);
  }, [props.match.params.userId]);


  const {user} = props;
  if (!user) {
    return null;
  }

  const editButton = () => {
    if (props.user.id === props.currentUser) {
      return (
        <Link to={`/users/${user.id}/edit`} className="user-edit-button">
          <i className="fa fa-pencil"></i>
          Edit Profile
        </Link>
      )
    }
  }
  const city = () => {
    if (user.city) {
      return (
        <p className="user-city">
          <i className='fas fa-map-marker-alt'></i>
          {user.city}
        </p>
      )
    } else {
      return null
    }
  }

  return (
    <div className="profile">
      <div className="top-profile">
        <div className="user-photo">
            <img className="profile-pic" src={user.photoUrl} />
        </div>

        <div className="user-info">
          <div className="profile-header">
            <h1>{user.name}</h1>
            {editButton()}
          </div>
          {city()}
          <p className="user-about">{user.about}</p>
        </div>
      </div>

      <div className="text-listing"> 
        Lists
      </div>
      <UserProducts userId={user.id} />
    </div>
  ) 
}

export default withRouter(UserShow);