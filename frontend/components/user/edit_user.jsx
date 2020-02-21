import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.state.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  componentDidMount() {
    if (this.props.formType === "update") {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId != prevProps.product.id) {
      this.props.fetchProduct(this.props.match.params.productId).then(() => {
        this.setState(this.props.product)
      });
    }
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
      formData.append('product[photo]', this.state.photoFile);
    }

    then.props.updateUser(formData)
      .then(payload => {
        this.props.history.push(`/users/${payload.user.id}`)
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result })
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  render() {


    const { user } = this.props;

    const preview = this.state.photoUrl ? 
      <img src={this.state.photoUrl} className="profile-photo-preview" /> : 
      <img src={window.images.logo} className="profile-photo-preview" />;

    if (!this.props.user) {
      return null
    } 

    return(
      <div className="user-profile-container">

        <label className="profile-header">
          <h1>Your Public Profile</h1>
          <Link src={`/users/${user.id}`}></Link>
        </label>
        <div className="profile-para">
          <p>Everything on this page can be seen by anyone</p>
        </div>

        <div className="profile-container">
          <div className="profile-picture">
            <h2>Profile Picture</h2>
            <input type="file" onChange={this.handleFile}/>
          </div>

          <div className="profile-image">
            {preview}
            <p>Must be a .jpg, .gif or .png file smaller than 10MB and at least 400 px by 400 px</p>
          </div>
        </div>

       <label className="profile-name">
         <input type="text" value={this.state.name} onChange={this.update("name")} />
       </label>

        <label className="profile-name">
          <input type="text" value={this.state.name} onChange={this.update("name")} />
        </label>




      </div>
    )
  }

}

export default withRouter(UserEditForm);