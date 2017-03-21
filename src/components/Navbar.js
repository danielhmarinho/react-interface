import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import './../styles/navbar.css';

const Navbar = () => (
  <div className="w3-bar w3-black">
    <a href="#" className="w3-bar-item w3-button"><FontIcon style={{color: "white"}}className="material-icons">home</FontIcon></a>
    <a href="#" className="w3-bar-item w3-button"><FontIcon style={{color: "white"}} className="material-icons">face</FontIcon></a>
    <a href="#" className="w3-bar-item w3-button"><FontIcon style={{color: "white"}} className="material-icons">computer</FontIcon></a>
    <a href="#" className="w3-bar-item w3-button w3-right"><FontIcon style={{color: "white"}} className="material-icons">search</FontIcon></a>
  </div>
);

export default Navbar;
