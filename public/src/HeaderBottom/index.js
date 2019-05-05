import React, { useState, useEffect } from 'react';
import './index.css';

const text = ["Dynamic", "Access", "System", "Healthcare"]

function HeaderBottom() {

  useEffect(() => {
    // setTimeout(() => {
    //   if(highlighted.includes(0)){
    //     setHighlighted([1, 3]);
    //   } else {
    //     setHighlighted([0, 2]);
    //   }
    // }, 2000)
  });

  const [highlighted, setHighlighted] = useState([0, 2]);

  return (<div id="HeaderBottom" className="flexRow">
    <p><span className="boldLetters">Dynamic</span>Access<span className="boldLetters">System</span>Healthcare</p>
  </div>);
}

export default HeaderBottom;

// {text.map((data, index) => {
//   const classes = ["headerText", "flexRow"];
//   if(highlighted.includes(index)){
//     classes.push("headerHighlight");
//   }
//   const allClasses = `${classes}`;
//   return (<div key={index} className={allClasses.replace(",", " ").replace(",", " ")}>
//     <p>{data}</p>
//   </div>)
// })}
