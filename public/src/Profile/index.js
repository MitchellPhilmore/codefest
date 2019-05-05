import React, { useState, useEffect } from 'react';
import Data from './Data';

import './index.css';

function Profile() {
  const pdata = JSON.parse(localStorage.userData);

  delete pdata.qrCode;
  delete pdata.ssn;
  delete pdata.userID;
  delete pdata.__v;
  delete pdata._id;

  const vdata = pdata.visits;
  delete pdata.visits;
  debugger

  const [profileData, setProfileData] = useState(pdata);
  const [visitData, setVisitData] = useState(vdata);

  useEffect(() => {
    const profile = document.getElementById("Profile");
    profile.classList.remove("down");
  }, []);

  const allKeys = Object.keys(profileData);
  const allVisitKeys = Object.keys(visitData);

  return (<div id="Profile" className="flexCol down">
    <div className="profileSection flexCol">
      <div>Personal Information</div>
      <div className="profileList">

        {allKeys.map((data, index) => {
          return (
            <Data key={index} label={data} text={profileData[data]} />
          )
        })}

      </div>
    </div>
    <div className="profileSection flexCol">
      <div>Medical Information</div>
      <div className="profileList">

        {allVisitKeys.map((data, index) => {
          return (
            <Data key={index} label={data} text={profileData[data]} />
          )
        })}

      </div>
    </div>
  </div>);
}

export default Profile;
