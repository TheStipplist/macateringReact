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
    
    
    render(){
        return(
        <ul className = "clearfix navbar" id = "selections">
            <li className ="dropdown">
				<a href = "home" class ="home dropbtn" >Home</a>
				<div className ="dropdown-content">
					<a href ="expectations" className= "dropdown-item">Expectations</a>
					<a href ="meetOurChef" className= "dropdown-item">Meet Our Chef</a>
				</div>
			</li>
			<li className ="dropdown">
				<a href = "weddings" className ="weddings dropbtn">Weddings</a>
				<div className ="dropdown-content">
					<a href ="weddings/appetizers" className= "dropdown-item">Appetizers</a>
					<a href ="weddings/buffet" className= "dropdown-item">Buffet</a>
					<a href ="weddings/entree" className= "dropdown-item">Entree</a>
					<a href ="weddings/dessert" className= "dropdown-item">Dessert</a>
				</div>
			</li>
			<li className ="dropdown">
				<a href = "corporate" className = "corporate dropbtn">Corporate</a>
			</li>
			<li className ="dropdown">
				<a href = "themeEvents" className ="theme-events dropbtn">Theme Events</a>
				<div className ="dropdown-content">
					<a href ="themeEvents/BBQs" className= "dropdown-item">BBQ's</a>
					<a href ="themeEvents/simpleBuffet" className= "dropdown-item">Simple Buffet</a>
					<a href ="themeEvents/lobsterBake" className= "dropdown-item">Lobster Bakes</a>
				</div>
			</li>
			<li className ="dropdown">
				<a href = "cakeOfTheMonth/cakes" className ="cakeOfTheMonth dropbtn">Cake of the Month</a>
			</li>
			<li className ="dropdown">
				<a href = "privateChef" className ="private-chef dropbtn">Private Chef</a>
			</li>
			<li className ="dropdown">
				<a href = "contact" className ="contact dropbtn">Contact</a>
				<div className ="dropdown-content">
				</div>
			</li>
		</ul>
        )     
    }
}
export default Navbar;
