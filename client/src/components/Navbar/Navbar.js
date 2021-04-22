

import React from 'react'
import { Link, useLocation } from "react-router-dom";
//import "./Navbar.css";

// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";
export const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg fixed-top">
    
        

    <div className="container">
        <div className="te">

         
            <h1 style={{color:'violet' }} className="navbar-title"> Nailed it !</h1>
            <Typed
               className="typed-text"
               strings={["Life isn't perfect, but your nails can be "]}
               typeSpeed={300}
               backSpeed={300}
               cursorChar="!"
               loop
               /> 
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"black"}} />
        </button> 
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
            <ul className="navbar-nav ml-auto">

                <li className="nav-item active">
                    <Link smooth={true} to="home" offset={-150} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item">
                    <Link smooth={true} to="reviews" offset={-150} className="nav-link" href="#">Reviews</Link>
                </li>

                <li className="nav-item">
                    <Link smooth={true} to="profile" offset={-150} className="nav-link" href="#">Profile</Link>
                </li>

                <li className="nav-item">
                    <Link smooth={true} to="feature" offset={-150} className="nav-link" href="#">Feature</Link>
                </li>

                <li className="nav-item">
                    <Link smooth={true} to="portfolio" offset={-150} className="nav-link" href="#">About Us</Link>
                </li>

                <li className="nav-item">
                    <Link smooth={true} to="contacts" offset={-150} className="nav-link" href="#">Contact</Link>
                </li>

                 <li className="nav-item">
                <Link smooth={true} to="register" offset={-150} className="nav-link" href="#">Register</Link>
                </li> 

                <li className="nav-item">
                <Link smooth={true} to="login" offset={-150} className="nav-link" href="#">Login</Link>
                </li>
               
            </ul>
        
            
        </div>

        
            
        
                

    </div>
        
 
  
</nav>
    )
}

export default Navbar;