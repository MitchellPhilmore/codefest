import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import HeaderBottom from './HeaderBottom';
import LogIn from './LogIn';
import Scan from './Scan';
import Profile from './Profile';

import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  return (<>
    <BrowserRouter>
      <div id="App">
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Scan}/>
        <Route exact path="/login" component={Header}/>
        <Route exact path="/login" component={HeaderBottom}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  </>);
}

export default App;
