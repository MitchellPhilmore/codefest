import React, { useState } from 'react';
import axios from "axios";
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
      const qrc = localStorage.qrc;

      if((ssn.length === 11) && (dob.length === 10) && (active === "print")){
        axios.get(`/login/user/${qrc}/${ssn}/${dob}`)
             .then((user, err) => {
               if(err || user.data.user && user.data.user === "none"){
                 return console.log(err || user.data);
               }
               const userData = user.data[0];
               localStorage.setItem("userData", JSON.stringify(userData));
               window.location.href = "http://localhost:3000/profile"
             });
      } else if ((key.length === 8) && (active === "key")) {
        const key = 12345678;
        axios.get(`/login/key/${key}/${qrc}`)
             .then((user, err) => {
               if(err){
                 console.log(err)
               }
               const userData = user.data[0];
               localStorage.setItem("userData", JSON.stringify(userData));
               window.location.href = "http://localhost:3000/profile"
             });
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
            maxLength="11"/>
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
