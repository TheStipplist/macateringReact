import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Taskbar extends Component {
    render(){
        return(
            <div className = "contact-bar clearfix">
			    <h1 className="contact-description">
				    CALL 631-736-9410 TO MAKE A RESERVATION!    or click' here
			    </h1>
			    <button className = "contact-bar-button">CONTACT</button>
		    </div>
        )
    }
}
export default Taskbar;