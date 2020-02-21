import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData;
    formData.append('user[id]', this.state.id);
    formData.append('user[name]', this.state.name);
    formData.append('user[gender]', this.state.gender);
    formData.append('user[city]', this.state.city)
    formData.append('user[birth_month]', this.state.birth_month)
    formData.append('user[birth_day]', this.state.birth_day)
    formData.append('user[about]', this.state.about)
    if (this.state.photoFile == "") {
      this.setState({photoFile: null})
    }
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }

    this.props.updateUser(formData)
      .then(payload => {
        this.props.history.push(`/users/${payload.user.id}`)
      });
  }


  renderPreview() {
    if (this.state.photoUrl === "") {
      return null;
    } else {
      return (
        <div className="user-preview">
          <img src={this.state.photoUrl} />
        </div>
      )
    }
  }

  handleFile(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result })
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  render() {
    // const preview = this.state.photoUrl ? 
    //   <img src={this.state.photoUrl} className="profile-photo-preview" /> : null;
      // <img src={window.images.logo} className="profile-photo-preview" />;


    return(
      <div className="user-profile-container">

        <label className="profile-header">
          <h1>Your Public Profile</h1>
          <Link to={`/users/${this.state.id}`}>View Profile</Link>
        </label>
        <div className="profile-para">
          <p>Everything on this page can be seen by anyone</p>
        </div>

        <form onSubmit={this.handleSubmit} className="user-form">
          <div className="profile-container">
            <div className="profile-picture">
              <h2>Profile Picture</h2>
              <input type="file" onChange={this.handleFile}/>
            </div>

            <div className="profile-image">
              {this.renderPreview()}
              <p>Must be a .jpg, .gif or .png file smaller than 10MB and at least 400 px by 400 px</p>
            </div>
          </div>
        
          <div className="name-container">
            <label className="profile-name">Your Name</label>
              <input type="text" value={this.state.name} onChange={this.update("name")} />
          </div>

          <div className="gender-input">
            <label className="gender-name">Gender</label>
            <input type="radio"
              id='female'
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.update("gender")} />
            <label htmlFor="female">Female</label>
            <input type="radio"
              id='male'
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.update("gender")} />
            <label htmlFor="male">Male</label>
            <input type="radio"
              id='rather-not-say'
              value="rathernotsay"
              checked={this.state.gender === "rathernotsay"}
              onChange={this.update("gender")} />
            <label htmlFor="rathernotsay">Rather not say</label> 
            <input type="radio"
              id='other'
              value="other"
              checked={this.state.gender === "other"}
              onChange={this.update("gender")} />
            <label htmlFor="other">Other</label> 
          </div>

          <div className="city-container">
            <input type="text" className="profile-city" 
            value={this.state.city} onChange={this.update('city')} />
          </div>

          <div className="birth-container">
            <label className="birth-date">Birthday</label>
              <select id="birth-month" value={this.state.birth_month} 
              onChange={this.update('birth_month')}>
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

              <select name="birth-day" value={this.state.birth_day} 
              onChange={this.update('birth_day')}>
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
            <label>About
            </label>
            <input type="text" value={this.state.about} className="profile-about"
            onChange={this.update('about')}/>
            <p>Tell people a little about yourself.</p>
          </div>

          <input type="submit" value="Save Changes"/>

        </form>

      </div>
    );
  };
}

export default withRouter(UserEditForm);