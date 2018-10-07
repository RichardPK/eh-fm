import React from 'react'
import { Link } from "react-router-dom";
import './LogoHead.css'

const LogoHead = (props) => {

  return(

    <React.Fragment>
      <div className="logo-head">
        <Link to="/">
        <img className="arched-logo" src="./EHFM_Arched-Logo_Teal_1080.png" alt="ehfm arched logo"/>
      </Link>
    </div>
  </React.Fragment>

)
}

export default LogoHead;
