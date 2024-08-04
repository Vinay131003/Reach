import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import MeetingForm from './MeetingForm.js'
import './CSS/PublicProfile.css'


const PublicProfile = (oneProfile) => {

    const [modalRendering, setModalRendering] = useState(false);

    const profile = oneProfile.oneProfile

    Modal.setAppElement('#root');

    const setModalRenderingTrue = () => {
        setModalRendering(true)
    };
    const setModalRenderingFalse = () => {
        setModalRendering(false)
    };


    const vendorBooltoString = (bool) => {
        if (bool){ return 'Vendor' }
        else { return 'Buyer' }
    };


    return (
        <div id='singleProfileDiv'>
                    <h3>{profile.companyName}</h3>
                    <h5>{profile.name}</h5>
                    <p id='vendorTag'><em>{vendorBooltoString(profile.isVendor)}</em></p>
                    <p id='profSummary'>{profile.summary}</p>
                    <button onClick={setModalRenderingTrue} id='reqMeetingButton'>Request meeting</button>
                    <Modal
                        isOpen={modalRendering}
                        onRequestClose={setModalRenderingFalse}
                        style={
                          {
                            overlay: {
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
                              width: '260px',
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
                              padding: "10px",
                              boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)"
                            }
                          }}
                          >
                        <MeetingForm recUserId={profile.id} recName={profile.name} recCompanyName={profile.companyName} setModalRendering={setModalRendering} />
                    </Modal>
                </div>
    )
}

export default PublicProfile
