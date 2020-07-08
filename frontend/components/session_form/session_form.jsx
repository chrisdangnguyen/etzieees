import React, { useState } from "react";

const SessionForm = (props) => {

  const [emailState, setEmailState] = useState("");
  const [nameState, setNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  function updateEmail(event) {
    return setEmailState(event.target.value);
  }

  function updateName(event) {
    return setNameState(event.target.value);
  }

  function updatePassword(event) {
    return setPasswordState(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, { email: emailState, name: nameState, password: passwordState });
    props.processForm(user).then(props.closeModal);
  }

  function renderErrors() {
    return (
      <ul>
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  function demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    demoEmail(email, intervalSpeed);
    setTimeout(() => demoPassword(password, intervalSpeed), demoEmailTime);
    setTimeout(() => props.loginForm(user), totalDemoTime);
    setTimeout(() => props.closeModal(), totalDemoTime + buffer);
  }

  function demoEmail(email, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= email.length) {
        setEmailState(email.slice(0, i));
        i++;
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }

  function demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        setPasswordState(password.slice(0, j));
        j++;
      } else {
        clearInterval();
      }
    }, intervalSpeed);
  }

  function handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({},
      {
        email: "demo@etzieees.com",
        name: "Demo",
        password: "demo123",
      }
    );
    demo(user);
  }

  const header = 
    props.formType === "Register" ? (
      <div className="create-account-div">
        <h2 className="create-header">Create your account</h2>
        <h3 className="regis-easy">Registration is easy</h3>
      </div>
    ) : (
      <div className="sign-in-div">
        <h2 className="signin-header">Sign in to continue</h2>
      </div>
    );

  const nameInput =
    props.formType === "Register" ? (
      <div className="login-form-fname">
        <br />
        <label>
          First Name
          <br />
          <input
            type="text"
            value={nameState}
            onChange={updateName}
            className="login-input-fname"
          />
        </label>
      </div>
    ) : (
      ""
    );

  const displayButton =
    props.formType === "Sign in" ? (
      <div>
        <button onClick={handleDemo} className="demobutton" id="demo-login">
          Demo Sign in
        </button>
      </div>
    ) : (
      ""
    );

  return (
    <div className="login-form-container">
      {header}
      <form onSubmit={handleSubmit} className="login-form-box">
        <br />
        <div className="login-form">
          <br />
          <label>
            Email address
            <br />
            <input
              type="text"
              value={emailState}
              onChange={updateEmail}
              className="login-input"
            />
          </label>
          <br />
          {nameInput}
          <br />
          <label>
            Password
            <br />
            <input
              type="password"
              value={passwordState}
              onChange={updatePassword}
              className="login-input"
            />
          </label>
          <br />
          <br />
          <span>{renderErrors()}</span>
          <br />
          <button className="formtypebutton">{props.formType}</button>
          <br />
          <br />
          {displayButton}
          <br />
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
