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
        this.props.processForm(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demo = Object.assign({}, {
            email: 'demo@etzieees.com',
            name: "Demo",
            password: 'demo123'
        });
        this.props.processForm(demo);
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
            const nameInput = this.props.formType === 'Register' 
                ? (
                <div className="login-form">
                    <br />
                    <label>First Name:
                    <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className="login-input"
                        />
                    </label>
                    <br />
                </div>
            ) : ('');

            const displayButton = this.props.formType === 'Sign in'
            ? (
                <div>
                    <button className="formtypebutton">{this.props.formType}</button>
                    <button onClick={this.handleDemo} className="demobutton" id="demo-login">Demo Sign in</button>
                </div>
            ) : (
                <div>
                    <button className="formtypebutton">{this.props.formType}</button>  {/*  register button */}
                </div>
            );

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        {nameInput}
                        <label>Email:
                         <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        {displayButton}
                        {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                        <br/> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;