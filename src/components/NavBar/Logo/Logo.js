import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import Logo from "../../../assets/images/EHFM_Arched-Logo_Teal_1080.png";

const LogoHead = (props) => {
  return (
    <React.Fragment>
      <div className="logo-head">
        <Link to="/">
          <img className="arched-logo" src={Logo} alt="ehfm arched logo" />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LogoHead;
