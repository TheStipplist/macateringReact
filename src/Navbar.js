import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './images/macateringLogo.png'
import cakes from './cakes.json';
import navbarData from './navbar.json'

console.log(navbarData)
// <a href ="expectations" className= "dropdown-item">Expectations</a>
// <a href ="meetOurChef" className= "dropdown-item">Meet Our Chef</a>


    


class Navbar extends Component{
    
    renderDropdown = function(dropdown){
        console.log(navbarData[dropdown]);
        return(
            <li className="dropdown">
                <a href = {navbarData[dropdown].route} className ="dropbtn">{navbarData[dropdown].link}</a>
                <div className = "dropdown-content">
                    {console.log(this)}
                    {Object.keys(navbarData[dropdown].dropdown).map(this.renderDropdownContent)}
                </div>
            </li>
        )
        
    }
    renderDropdownContent= function(dropdownContent){
        console.log(dropdownContent)
        return(
            <a href = {dropdownContent.route} className="dropdown-item">
                {dropdownContent.link}
            </a>
        )
    }
    render(){
        return(
            <ul className="clearfix navbar" id="selections">
            {Object.keys(navbarData).map(this.renderDropdown)}
            </ul>
        )     
    }
}
export default Navbar;
