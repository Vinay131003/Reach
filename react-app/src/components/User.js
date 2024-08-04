import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import SignUpForm from './auth/SignUpForm.js'
import './CSS/User.css'

function User() {
  const [user, setUser] = useState({});

  const userCurrent = useSelector(state => state.session.user)

  const userId  = userCurrent.id;

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const userInfo = await response.json();
      setUser(userInfo);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div id='profileInfoDivTop'>
      <SignUpForm />
    </div>
  );
}
export default User;
