import React, { useState } from 'react';
import './index.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div id="NavBar" className="flexRow">
    <div className="navLeftButton">
      <i className="fas fa-grip-lines"></i>
    </div>
    <div className="navRightButton"></div>
  </div>);
}

export default NavBar;
