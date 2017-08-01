import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import cakes from './cakes.json';
import navbarData from './navbar.json';
import galleryImage from './images/gallery/image0.jpg';
import leftTrigger from './images/gallery/left-slider.png';
import rightTrigger from './images/gallery/right-slider.png';

class Gallery extends Component{
    render(){
        return(
            <div className = "gallery clearfix">
			    <div className = "placeholder-left">
				    <img src = {leftTrigger} className = "left-trigger" />
			    </div>
			    <div className = "placeholder-right">
				    <img src = {rightTrigger} className = "right-trigger" />
			    </div>
		    </div>
        )
    }
}
export default Gallery;