import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './images/macateringLogo.png'
import cakes from './cakes.json';
import Navbar from './Navbar';
import navbarData from './navbar.json';
import Gallery from './Gallery'


// navbarData.forEach((item) => console.log(item))

var heading = 
              <div id = "theWebsite">
                <div className= "clearfix nav-header">
                  <img className= "logo" src={logo}/>
                    <Navbar />
                </div>
                <Gallery />
              </div>;


class App extends Component {
  render(){
    return(heading)};
}

export default App;
