import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../auth/components/GoogleAuth";
import { images } from "./images";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ alignItems: "center" }}
    >
      <div className="item">
        <Link to="/">
          <img src={images.logo} alt="logo" height="49" width="200" />
        </Link>
      </div>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default React.memo(Header);
