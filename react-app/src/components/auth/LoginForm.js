import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import logo from '../images/VHLogo.png';
import '../CSS/LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const runDemo = async (e) => {
    e.preventDefault();
    let emailAddress = "demo@aa.io"
    let password = "password"
    const data = await dispatch(login(emailAddress, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(emailAddress, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id='loginHolderDiv'>
      <form onSubmit={onLogin} id='loginForm'>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <img border={0} alt="VendorHub Logo" src={logo} width="116" height="36" id='vhLogo' />
        <div className='inputDiv'>
          {/* <label htmlFor="email" className='inputLabel'>Email</label> */}
          <input
            name="emailAddress"
            type="text"
            placeholder="Email"
            value={emailAddress}
            onChange={updateEmailAddress}
            className='loginTextInput'
          />
        </div>
        <div className='inputDiv'>
          {/* <label htmlFor="password" className='inputLabel'>Password</label> */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className='loginTextInput'
          />
        <button type="submit" id='loginButton'>Login</button>
        </div>
      </form>
      <button onClick={runDemo} id='demoButton'>Use a Demo</button>
    </div>
  );
};

export default LoginForm;
