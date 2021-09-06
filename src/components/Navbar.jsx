import "./styles/navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
      <nav className="navbar">
        <div className="nav p-0 m-0 w-100">
          <Link to="/">
            <img src="./images/svg/logo.svg" alt="logo" />
          </Link>
          <img
            src="./images/svg/menu-toggle.svg"
            className="toggle"
            alt="menu-toggle"
            onClick={toggle}
          />
          <div className={menu?"nav-menu show":"nav-menu"}>
            <ul className="m-0 p-0">
              <li>
                <Link to="/learn">
                Learn
                </Link>
              </li>
              <li>
                <Link to="/about">
                About
                </Link>
              </li>
              <li>
                <Link to="/integration">
                Integrations
                </Link>
              </li>
              <li>
                <Link to="/support">
                Support
                </Link>
              </li>
              <li>
                <img src="./images/user-image.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
