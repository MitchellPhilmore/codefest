import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import QrReader from 'react-qr-reader'
import './index.css';

function Scan({ setParentState }) {

  const [isScanable, setIsScanable] = useState(true)

  useEffect(() => {
    localStorage.setItem("qrc", "nothing");
  }, [])

  const scaneQrc = () => {
    setIsScanable(false)
  }

  const handleScan = data => {
    if (data) {
      const parts = data.split("/");
      const valueToSet = parts[parts.length - 1];
      localStorage.setItem("qrc", valueToSet);
      window.location.href = "/login"
    }
  }

  const handleError = err => {
    console.error(err)
  }


  const content = isScanable ? (<div id="Scan" className="flexRow">
    <div id="scanButton" className="flexRow" onClick={scaneQrc.bind(this)}>
      <p>Scan The QRC</p>
      <i className="fas fa-qrcode"></i>
    </div>
  </div>) : (<div>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '100%' }}
    />
  </div>)

  return (<div>
    {content}
  </div>)
}

export default Scan;
