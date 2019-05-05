import React, { useState } from 'react';
import Data from './Data';

import './index.css';

function Profile() {

  return (<div id="Profile" className="flexCol">
    <div className="profileSection flexCol">
      <div>Personal Information</div>
      <div className="profileList">
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
      </div>
    </div>
    <div className="profileSection flexCol">
      <div>Medical Information</div>
      <div className="profileList">
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
        <Data label={"Title"} text={"hey"} />
      </div>
    </div>
  </div>);
}

export default Profile;
