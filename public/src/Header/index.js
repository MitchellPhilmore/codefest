import React, { useState } from 'react';
import './index.css';

function Header() {
  return (<div id="Header" className="flexRow">
    <div className="headerHeading">
      <p>DA</p>
      <p className="headerBottomLetters">SH</p>
    </div>
    <div className="headerMiniLogo flexRow">
      <i className="fas fa-file-medical-alt"></i>
    </div>
  </div>);
}

export default Header;
