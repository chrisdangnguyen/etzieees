import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({}, {
            email: 'demo@etzieees.com',
            name: "Demo",
            password: 'demo123'
        });
        this.props.processForm(demo)
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        const header = this.props.formType === 'Register'
            ? (
                <div className="create-account-div">
                    <h2 className="create-header">Create your account</h2>
                    <h3 className="regis-easy">Registration is easy</h3>
                </div>
            ) : ( 
                <div className="sign-in-div">
                    <h2 className="signin-header">Sign in to continue</h2>
                </div>
            );

        const nameInput = this.props.formType === 'Register' 
            ? (
            <div className="login-form-fname">
                <br/>
                <label>First Name
                <br/>
                <input type="text" value={this.state.name}
                    onChange={this.update('name')} className="login-input-fname"/>
                </label>
            </div>
            ) : ('');

        const displayButton = this.props.formType === 'Sign in'
            ? (
            <div>
                <button onClick={this.handleDemo} className="demobutton" 
                    id="demo-login">Demo Sign in</button>
            </div>
            
        ) : ('');


        return (
            <div className="login-form-container">
                    {header}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label>Email address
                        <br/>
                         <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"/>
                        </label>
                        <br/>
                        {nameInput}
                        <br />
                        <label>Password
                            <br/>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"/>
                        </label>
                        <br />
                        <br/>
                        <button className="formtypebutton">
                            {this.props.formType}
                        </button> 
                        <br/>
                        <br/>
                        {displayButton}
                        {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                        <br/> 
                    </div>
                    {/* <button className="register-m" onClick={() => (openModal('signup'))}>
                        Register
                    </button> */}
                </form>
            </div>
        );
    }
}

export default SessionForm;