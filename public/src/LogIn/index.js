import React, { useState } from 'react';
import './index.css';

function LogIn() {

  const [active, setActive] = useState("print");
  const [ssn, setSsn] = useState("");
  const [dob, setDob] = useState("");
  const [key, setKey] = useState("");

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name === "ssn"){
      setSsn(value)
    } else if (name === "dob") {
      setDob(value)
    } else if (name === "key") {
      setKey(value)
    }
  }

  const selectButton = (button) => {
    if(active === "print" && button !== "print"){
      setActive("key")
    } else if(active === "key" && button !== "key") {
      setActive("print")
    } else {
      if((ssn.length === 8) && (dob.length === 10)){
        console.log("submit")
      } else if (key.length === 8) {
        console.log("submit key")
      }
    }
  }

  let printClass = (active === "print") && "active";
  let keyClass = (active === "key") && "active";

  return (<>
    <div id="LogIn" className="flexCol">
      {
        (active === "print") &&
        (<>
          <input
            name="ssn"
            value={ssn}
            onChange={onChange.bind(this)}
            className="zoomOnFocus"
            placeholder="SSN"
            maxLength="8"/>
          <input
            name="dob"
            value={dob}
            onChange={onChange.bind(this)}
            placeholder="DOB"
            maxLength="10"/>
        </>)
      }
      {
        (active === "key") &&
        (<>
          <input
            name="key"
            value={key}
            onChange={onChange.bind(this)}
            className="zoomOnFocus"
            placeholder="KEY"
            maxLength="8"/>
        </>)
      }
    </div>
    <div id="loginButtons" className="flexRow">
      <div
        onClick={selectButton.bind(this, "print")}
        className={`flexRow loginButtonHolder ${printClass}`}
      >
        <i className="fas fa-fingerprint"></i>
      </div>
      <div
        onClick={selectButton.bind(this, "key")}
        className={`flexRow loginButtonHolder ${keyClass}`}
      >
        <i className="fas fa-key"></i>
      </div>
    </div>
  </>);
}

export default LogIn;
