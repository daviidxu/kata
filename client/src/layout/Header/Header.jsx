import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as FlagUs } from "../../assets/flag_usa.svg";
import { ReactComponent as FlagFr } from "../../assets/flag_fr.svg";

import "./Header.scss";

export const Header = (props) => {
  return (
    <div className="header">
      <Logo className="logo" />
      <input type="text" placeholder="Search a movie..." />
      <div className="content__flag">
        <FlagFr />
        <FlagUs />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
