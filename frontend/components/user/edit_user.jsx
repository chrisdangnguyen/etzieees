import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';


const UserEditForm = props => {
  const [userState, setUserState] = useState(props.user)

  function update(field) {
    return e => setUserState({...userState, [field]: e.currentTarget.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData;
    formData.append('user[id]', userState.id);
    formData.append('user[name]', userState.name);
    formData.append('user[gender]', userState.gender);
    formData.append('user[city]', userState.city)
    formData.append('user[birth_month]', userState.birth_month)
    formData.append('user[birth_day]', userState.birth_day)
    formData.append('user[about]', userState.about)
    if (userState.photoFile == "") {
      setUserState({...userState, photoFile: null})
    }
    if (userState.photoFile) {
      formData.append('user[photo]', userState.photoFile);
    }

    props.updateUser(formData)
      .then(payload => {
        props.history.push(`/users/${payload.user.id}`)
      });
  }

  function handleFile(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      setUserState({ ...userState, photoFile: file, photoUrl: fileReader.result })
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      setUserState({ ...userState, photoUrl: "", photoFile: null });
    }
  }


  const preview = userState.photoUrl ? 
    <img src={userState.photoUrl} className="profile-photo-preview" /> : null;


  return(
    <div className="user-profile-container">
      <form onSubmit={handleSubmit} className="user-form">
        <div>

          <div>
            <label className="user-profile-header">
              <h1 className="prof-header">Your Public Profile</h1>
              <Link to={`/users/${userState.id}`} className="view-button">View Profile</Link>
            </label>
          </div>
          <div className="profile-para">
            <p>Everything on this page can be seen by anyone</p>
          </div>

          <div className="user-bottom-section">
            <div className="profile-container">
              <div className="profile-picture">
                <h2>Profile Picture</h2>
                <input type="file" onChange={handleFile}/>
              </div>

              <div className="profile-image">
                {preview}
                <p>Must be a .jpg, .gif or .png file smaller than 10MB and at least 400px by 400px</p>
              </div>
            </div>
          
            <div className="name-container">
              <label className="profile-name">Your Name</label>
              <input type="text" value={userState.name} onChange={update("name")} />
            </div>

            <div className="gender-input">
              <label className="gender-name">Gender</label>
              <input type="radio"
                id='female'
                value="female"
                checked={userState.gender === "female"}
                onChange={update("gender")} />
              <label htmlFor="female">Female</label>
              <input type="radio"
                id='male'
                value="male"
                checked={userState.gender === "male"}
                onChange={update("gender")} />
              <label htmlFor="male">Male</label>
              <input type="radio"
                id='rather-not-say'
                value="rathernotsay"
                checked={userState.gender === "rathernotsay"}
                onChange={update("gender")} />
              <label htmlFor="rathernotsay">Rather not say</label> 
              <input type="radio"
                id='other'
                value="other"
                checked={userState.gender === "other"}
                onChange={update("gender")} />
              <label htmlFor="other">Other</label> 
            </div>

            <div className="city-container">
              <label>City</label>
              <input type="text" className="profile-city" 
              value={userState.city || ""} onChange={update('city')} />
            </div>

            <div className="birth-container">
              <label className="birth-date">Birthday</label>
                <select id="birth-month" value={userState.birth_month || ""} 
                onChange={update('birth_month')}>
                  <option>-Month-</option>
                  <option value="January">January</option>
                  <option value="Febuary">Febuary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select name="birth-day" value={userState.birth_day || ""} 
                onChange={update('birth_day')}>
                  <option>-Day-</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
            </div>

            <div className="user-about-container">
              <label>About</label>
              <textarea type="text" value={userState.about || ""} className="profile-about"
              onChange={update('about')}/>
              <p>Tell people a little about yourself.</p>
            </div>
          </div>
        </div>

        <input className="profile-submit" type="submit" value="Save Changes"/>
      </form>
    </div>
  );
}

export default withRouter(UserEditForm);