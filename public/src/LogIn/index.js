import React, { useState } from 'react';
import './index.css';

function LogIn() {
  return (<>
    <div id="LogIn" className="flexCol">
      <input placeholder="SSN" />
      <input placeholder="DOB" />
    </div>
    <div id="loginButtons" className="flexRow">
      <div></div>
      <div></div>
    </div>
  </>);
}

export default LogIn;
