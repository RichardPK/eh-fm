import React from 'react'
import './NavBar.css'

const NavBar = (props) => {

  return(
    <div className="nav-bar">
      <div className="nav-left">
        <a href="/home"><img className="nav-logo" src="eh-fm-cutout-navbar.png" alt="eh-fm logo"></img></a>
        {/* <p className="nav-link">INFO</p> */}
        <p className="nav-link"><a href="https://www.mixcloud.com/ehfm/" target="blank">PAST SHOWS</a></p>
      </div>
      <div className="nav-right">
        <a href="https://www.instagram.com/ehfm_live/" target="blank"><img className="nav-social" src="instagram-teal.png" alt="eh-fm instagram logo"></img></a>
        <a href="https://www.facebook.com/ehfm.live" target="blank"><img className="nav-social" src="facebook-teal.png" alt="eh-fm facebook logo"></img></a>
        <a href="http://eh-fm.chatango.com/" target="blank"><img className="nav-chat" src="chat-teal.png" alt="eh-fm chatango logo"></img></a>
      </div>
    </div>
  )
}

export default NavBar;
