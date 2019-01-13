import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.scss';
import LogoHead from './LogoHead';
import './LogoHead.css';

const NavBar = (props) => {

  const residentsURL = "/residents"

  const renderActiveLink = function(){
    if (window.location.href.includes(residentsURL))
    {
      return "nav-link-active"
    } else {
      return "nav-link";
    }
  }

  return(
    <React.Fragment>
        <div className="nav-bar">
          <div className="nav-left">

            {/* <a href="/home"><img className="nav-logo" src="eh-fm-cutout-navbar.png" alt="eh-fm logo"></img></a> */}
            {/* <p className="nav-link">INFO</p> */}
            <p className={renderActiveLink()}><Link to={residentsURL}>Residents</Link></p>
            {/* <p className="nav-link right"><a href="https://www.mixcloud.com/ehfm/" target="blank">Past Shows</a></p> */}
          </div>
          {/* <div className="nav-middle"> */}

          <div className="logo-head-container">
            <LogoHead/>
          </div>
          {/* </div> */}
          <div className="nav-right">
            {/* <p className="nav-link"><a href="https://www.mixcloud.com/ehfm/" target="blank">PAST SHOWS</a></p> */}
            <div className="nav-socials-wrapper">
              <a href="https://www.instagram.com/ehfm_live/" target="blank"><img className="nav-social" src="https://www.ehfm.live/instagram-teal.png" alt="eh-fm instagram logo"></img></a>
              <a href="https://www.facebook.com/ehfm.live" target="blank"><img className="nav-social" src="https://www.ehfm.live/facebook-teal.png" alt="eh-fm facebook logo"></img></a>
              <a href="http://eh-fm.chatango.com/" target="blank"><img className="nav-chat" src="https://www.ehfm.live/chat-teal.png" alt="eh-fm chatango logo"></img></a>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default NavBar;
