import React, { useState } from 'react';
import './index.css';

function Data(props) {

  const { label, text } = props;

  const [canEdit, setCanEdit] = useState(false);
  const [value, setValue] = useState(text);

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  }

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  }

  const input = canEdit && (
    <input
      className="dataField"
      onChange={onChange.bind(this)}
      value={value}
      autoFocus />);

  const dataText = !canEdit && (<p className="dataField">{value}</p>);

  return (<div id="Data" className="flexRow" onClick={toggleEdit.bind(this)} >
    <div className="titleBox">
      <p>{label}</p>
    </div>
    {input}
    {dataText}
  </div>);
}

export default Data;
