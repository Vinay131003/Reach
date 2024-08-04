import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, changeMeetingReq } from '../../store/session';
import LogoutButton from './LogoutButton';
import '../CSS/UpdateProfileForm.css';


const UpdateProfileForm = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const setMyProfileModalRendering = props.setMyProfileModalRendering

    const [name, setName] = useState(user.name);
    const [companyName, setCompanyName] = useState(user.companyName);
    const [isVendor, setIsVendor] = useState(user.isVendor);
    // console.log(isVendor)
    const [summary, setSummary] = useState(user.summary);
    const [emailAddress, setEmailAddress] = useState(user.emailAddress);
    const [password, setPassword] = useState("");
    // const [repeatPassword, setRepeatPassword] = useState("");

    const onUpdate = (e) => {
        e.preventDefault();
        // if (password === repeatPassword) {
            dispatch(updateProfile(name, companyName, isVendor, summary, emailAddress, password));
            setMyProfileModalRendering(false)
        // }
    };

    const acceptMeeting = (e) => {
        e.preventDefault()
        let accepted = true
        let id = e.target.value
        dispatch(changeMeetingReq(accepted, id))
    }

    const declineMeeting = (e) => {
        e.preventDefault()
        let accepted = false
        let id = e.target.value
        dispatch(changeMeetingReq(accepted, id))
    }

    const vendorBooltoString = (bool) => {
        if (bool){ return 'Vendor' }
        else { return 'Buyer' }
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

    const updateIsVendor = (e) => {
        setIsVendor(e.target.value);
    };

    const updateEmailAddress = (e) => {
        setEmailAddress(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    // const updateRepeatPassword = (e) => {
    //     setRepeatPassword(e.target.value);
    // };

    // console.log(user.receivedMeetings)

    return (
    <div id='topUpdateDiv'>
        <div id='updateProfileDiv'>
            <div id='meetingsDiv'>
                <h3 className='topLabel'>My meetings</h3>
                <h5 className='typeRequestLabel'>Received Requests</h5>
                {user.receivedMeetings?.map((receivedMeeting, i) => (
                    <div className='oneMeetingDiv' key={i}>
                        <h4 className='meetingMessage'>{receivedMeeting.message}</h4>
                        {/* <p>{sentMeeting.name}</p> */}
                        {receivedMeeting.accepted && <p id='acceptedMeeting'><em>Congrats! Meeting accepted.</em></p>}
                        {receivedMeeting.accepted == false && <p id='acceptedMeeting'><em>Meeting declined.</em></p>}
                        <div>
                            {receivedMeeting.accepted == null && <div id='acceptedButtonDiv'>
                                <button onClick={acceptMeeting} value={receivedMeeting.id} className='acceptMeetingButton'>✔</button>
                                <button onClick={declineMeeting} value={receivedMeeting.id}  className='denyMeetingButton'>✖</button>
                            </div>
                            }
                        </div>
                    </div>
                ))}
                <h5 className='typeRequestLabel'>Sent Requests</h5>
                {user.sentMeetings?.map((sentMeeting, i) => (
                    <div className='oneMeetingDiv' key={i}>
                        <h4 className='meetingMessage'>{sentMeeting.message}</h4>
                        {/* <p>{sentMeeting.name}</p> */}
                        {sentMeeting.accepted && <p id='acceptedMeeting'><em>Congrats! Meeting accepted.</em></p>}
                        {!sentMeeting.accepted && <p className='acceptedBoolText'><em>Waiting to be accepted.</em></p>}
                    </div>
                ))}
            </div>
            <form onSubmit={onUpdate} id='updateForm'>
                <h3 className='topLabel'>Edit profile</h3>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Name</label>
                    <input
                    type="text"
                    name="name"
                    onChange={updateName}
                    value={name}
                    className='updateInput'
                    placeholder={user.name}
                    ></input>
                </div>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Company Name</label>
                    <input
                    type="text"
                    name="companyName"
                    onChange={updateCompanyName}
                    value={companyName}
                    className='updateInput'
                    placeholder={user.companyName}
                    ></input>
                </div>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Are you a vendor?</label>
                    <input
                    type="checkbox"
                    name="isVendor"
                    onChange={updateIsVendor}
                    value={isVendor}
                    placeholder={vendorBooltoString(user.isVendor)}
                    ></input>
                </div>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Summary</label>
                    <textarea
                    name="summary"
                    onChange={updateSummary}
                    value={summary}
                    className='updateAreaInput'
                    placeholder={user.summary}
                    ></textarea>
                </div>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Email</label>
                    <input
                    type="text"
                    name="emailAddress"
                    onChange={updateEmailAddress}
                    value={emailAddress}
                    className='updateInput'
                    placeholder={user.emailAddress}
                    ></input>
                </div>
                <div className='inputDiv'>
                    <label className='inputDivLabel'>Confirm Password</label>
                    <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                    className='updateInput'
                    ></input>
                </div>
                {/* <div className='inputDiv'>
                    <label className='inputDivLabel'>Repeat Password</label>
                    <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                    className='updateInput'
                    ></input>
                </div> */}
                <div className='inputDiv'>
                    <button type="submit" id='updateProfButton'>Update my profile</button>
                </div>
            </form>
        </div>
        <LogoutButton />
    </div>
        );
}

export default UpdateProfileForm;
