import React from 'react';
import linkedIn from './images/LinkedInLogo.png'
import github from './images/GithubLogo.png'
import './CSS/Footer.css'


const Footer = () => {

    return (
        <div id='footerPlaceholder'>
            <div id='footerDiv'>
                <div id='infoTitle'>
                    Meet the Developer
                </div>
                <div className="myInfo">
                    {/* <div id='email' className='infoBox'>
                        MarkGregory19@Gmail.com
                    </div> */}
                    <div id='linkedIn' className='infoBox'>
                        <a href='https://www.linkedin.com/in/markgregory19' target="_blank">
                            <img
                                alt="LinkedIn"
                                src={linkedIn}
                                width="70"
                                height="70"
                            />
                            </a>
                    </div>
                    <div id='github' className='infoBox'>
                        <a href='https://github.com/JamarkG' target="_blank">
                            <img
                                alt="Github"
                                src={github}
                                width="90"
                                height="50"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
