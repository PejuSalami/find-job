import React from "react";
import './header.css';
import LogoFindJob from '../images/LogoFindJob.png';
import ellipse from '../images/ellipse.png';


function Header() {
  return (
    <div className=" header-cont flex">
      <div  className="Header">
      <img src={LogoFindJob} className="find-logo" alt="Logo" /> <br/>
      <h1 className="header-txt">Jobs</h1>
      </div>
       
       
       <img className="header-right" src={ellipse} alt="Logo" />

       
            
    </div>
  )
}

export default Header;