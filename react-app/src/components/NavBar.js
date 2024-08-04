import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginForm from "./auth/LoginForm";
import UpdateProfileForm from "./auth/UpdateProfileForm.js";
import './CSS/NavBar.css';
import logo from './images/VHLogo.png';

const NavBar = () => {

  const user = useSelector(state => state.session.user)

  Modal.setAppElement('#root');

  const [loginModalRendering, setLoginModalRendering] = useState(false);
  const [myProfileModalRendering, setMyProfileModalRendering] = useState(false);

  const setMyProfileModalRenderingTrue = () => {
    setMyProfileModalRendering(true)
  }

  const setMyProfileModalRenderingFalse = () => {
    setMyProfileModalRendering(false)
  }

  const setLoginModalRenderingTrue = () => {
      setLoginModalRendering(true)
  };
  const setLoginModalRenderingFalse = () => {
      setLoginModalRendering(false)
  };

  return (
    <nav>
      <div id='TopNavDiv'>
        <div id='LogoDiv'>
          <NavLink to="/" exact={true} activeClassName="active">
            <img border={0} alt="VendorHub Logo" src={logo} width="175" height="55" />
          </NavLink>
        </div>
        <div id='CenterSpacer'>
        </div>
        {!user &&
        <div className='AuthDiv'>
          <div className='AuthButton'>
            <button onClick={setLoginModalRenderingTrue} style={{ textDecoration: 'none' }} id='LoginLink'>
              Login
            </button>
            <Modal
            isOpen={loginModalRendering}
            onRequestClose={setLoginModalRenderingFalse}
            parentSelector={() => document.querySelector('#root')}
            style={
              { overlay: {
                position: "fixed",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(121, 125, 255, 0.9)"
              },
              content: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: '200px',
                height: "210px",
                // width: "22%",
                top: "100px",
                left: "42%",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "10px",
                boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
              }
            }}>
              <div id='loginFormDiv'>
                <LoginForm />
              </div>
            </Modal>
          </div>
        </div>}
        {user &&
        <div className='AuthDiv'>
          <div>
            <button onClick={setMyProfileModalRenderingTrue} style={{ textDecoration: 'none' }} id='myProfileButton'>
              My Profile
            </button>
            <Modal
            isOpen={myProfileModalRendering}
            parentSelector={() => document.querySelector('#root')}
            onRequestClose={setMyProfileModalRenderingFalse}
            style={
              { overlay: {
                position: "fixed",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(121, 125, 255, 0.9)"
              },
              content: {
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: '550px',
                height: "57%",
                top: "100px",
                left: "30%",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "0px",
                boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
              }
            }}>
                <UpdateProfileForm setMyProfileModalRendering={setMyProfileModalRendering} />
            </Modal>
          </div>
        </div>}
      </div>
    </nav>
  );
}

export default NavBar;
