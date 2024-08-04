import React, { useState } from 'react';
import Modal from 'react-modal';
// import { NavLink } from 'react-router-dom';
import SignUpForm from "./auth/SignUpForm";
import background from './images/VendorHubBackground.png';
import './CSS/LandingPage.css';

const LandingPage = () => {

    const [modalRendering, setModalRendering] = useState(false);

    Modal.setAppElement('#root');

    const setModalRenderingTrue = () => {
        setModalRendering(true)
    };
    const setModalRenderingFalse = () => {
        setModalRendering(false)
    };

    return (
        <div id='modalHolder'>
            <div id='compHolderDiv'>
                <img src={background} id='imgHolder' alt='VendorHub Background'></img>
                <div id='landingTextButton'>
                    <h3>Simplify your vendor discovery</h3>
                    <p id='introText'>Find the services and software that will take your business to the next level.</p>
                    <div>
                        <button onClick={setModalRenderingTrue} style={{ textDecoration: 'none' }} id='tryButton'>
                            <p id='tryButtonP'>Try it free</p>
                        </button>
                        <Modal
                        isOpen={modalRendering}
                        onRequestClose={setModalRenderingFalse}
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
                              width: '160px',
                              height: "fit-content",
                              top: "100px",
                              left: "44%",
                              bottom: "40px",
                              border: "1px solid #ccc",
                              background: "#fff",
                              overflow: "auto",
                              WebkitOverflowScrolling: "touch",
                              borderRadius: "4px",
                              outline: "none",
                              padding: "8px 20px 20px 20px",
                              boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
                            }
                          }}>
                            <div id='signUpFormDiv'>
                                <SignUpForm />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LandingPage
