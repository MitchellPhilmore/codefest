import React, { useState } from 'react';
import './index.css';

// <i className="fas fa-grip-lines"></i>

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div id="NavBar" className="flexRow">
    <div className="navLeftButton">
    </div>
    <div className="navRightButton"></div>
  </div>);
}

export default NavBar;
