import React, { useState } from 'react';
import './index.css';

function Scan() {
  return (<div id="Scan" className="flexRow">
    <div id="scanButton" className="flexRow">
      <p>Scan The QRC</p>
      <i className="fas fa-qrcode"></i>
    </div>
  </div>);
}

export default Scan;
