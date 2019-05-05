import React, { useState } from 'react';
import './index.css';

function LogIn() {
  return (<>
    <div id="LogIn" className="flexCol">
      <input placeholder="SSN" />
      <input placeholder="DOB" />
    </div>
    <div id="loginButtons" className="flexRow">
      <div className="flexRow loginButtonHolder active">
        <i class="fas fa-fingerprint"></i>
      </div>
      <div className="flexRow loginButtonHolder">
        <i class="fas fa-key"></i>
      </div>
    </div>
  </>);
}

export default LogIn;
