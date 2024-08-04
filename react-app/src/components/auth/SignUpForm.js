import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import logo from '../images/VHLogo.png';
import '../CSS/SignupForm.css';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const [summary, setSummary] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(name, companyName, isVendor, summary, emailAddress, password));
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const updateSummary = (e) => {
    setSummary(e.target.value);
  };

  const updateIsVendor = () => {
    if (isVendor){
      setIsVendor(false)
    } else {
      setIsVendor(true);
    }
  };

  const updateEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <div id='topSignupDiv'>
      <img border={0} alt="VendorHub Logo" src={logo} width="116" height="36" id='vhLogo' />
      <form onSubmit={onSignUp}>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Name</label>
          <input
            type="text"
            name="name"
            onChange={updateName}
            value={name}
            className='signupTextInput'
          ></input>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Company Name</label>
          <input
            type="text"
            name="companyName"
            onChange={updateCompanyName}
            value={companyName}
            className='signupTextInput'
          ></input>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Are you a vendor?</label>
          <input
            type="checkbox"
            name="isVendor"
            onChange={updateIsVendor}
            value={isVendor}
            className='signupTextInput'
          ></input>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Summary</label>
          <textarea
            name="summary"
            onChange={updateSummary}
            value={summary}
            className='signupSummaryInput'
          ></textarea>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Email</label>
          <input
            type="text"
            name="emailAddress"
            onChange={updateEmailAddress}
            value={emailAddress}
            className='signupTextInput'
          ></input>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            className='signupTextInput'
          ></input>
        </div>
        <div className='signupFormInputDiv'>
          <label className='signupInputLabel'>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='signupTextInput'
          ></input>
        </div>
        <div className='inputDiv'>
          <button type="submit" id='signUpButton'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
