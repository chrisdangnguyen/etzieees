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

    // handleDemo(e) {
    //     e.preventDefault();
    //     const demo = Object.assign({}, {
    //         email: 'demo@etzieees.com',
    //         name: "Demo",
    //         password: 'demo123'
    //     });
    //     this.props.processForm(demo)
    //         .then(this.props.closeModal);
    // }

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

    // componentWillUnmount() {
    //     this.renderErrors();
    // }

    
    demo(user) {
        const intervalSpeed = 75;
        const { email, password } = user;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
        this.demoEmail(email, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
        setTimeout(() => this.props.loginForm(user), totalDemoTime)
        setTimeout(() => this.props.closeModal(), totalDemoTime + buffer)
    }

    demoEmail(email, intervalSpeed) {
        let i = 0;
        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);
    }
    demoPassword(password, intervalSpeed) {
        let j = 0;
        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }


    handleDemo(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            email: 'demo@etzieees.com',
            name: "Demo",
            password: 'demo123'
        });
        this.demo(user);
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
                    <br/>
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
                        <span>{this.renderErrors()}</span>
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
