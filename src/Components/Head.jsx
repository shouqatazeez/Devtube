import React from "react";
import Menu from "../assets/Hamburger Menu.jpg";
import Logo from "../assets/Logo.png";
import User from "../assets/User Ic.jpg";

const Head = () => {
  return (
    <div>
      <div className="flex">
        <img alt="menu" src={Menu} />

        <img alt="logo" src={Logo} />
      </div>

      <div>
        <input type="text" />
        <button>Search</button>
      </div>

      <div>
        <img alt="icon" src={User} />
      </div>
    </div>
  );
};

export default Head;
